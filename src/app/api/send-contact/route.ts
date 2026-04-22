/**
 * /api/send-contact — hardened 2026 against the spam we've been
 * getting. Client already validates, but never trust the client —
 * server mirrors every check and adds two it can't do:
 *
 *   1. IP-based rate limiting (3 submissions per IP per hour).
 *      Simple in-memory Map — fine for our traffic; swap for a
 *      real store if we scale.
 *   2. Time-to-submit enforcement server-side (bot that bypassed
 *      the client check by POSTing directly still gets rejected).
 *
 * Also rejects silently (200 OK, no email) when a honeypot-style
 * signal fires, so scripted scanners don't learn anything useful.
 */
import { EmailContact } from "@/MyComponents/email-contact";
import React from "react";
import { Resend } from "resend";
import { NextRequest } from "next/server";
import { checkSubmission } from "@/lib/spam-heuristics";

const resend = new Resend(process.env.RESEND_KEY as string);

/* ─── Spam heuristics (mirrored with client) ─────────────────── */

const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|bitcoin|crypto\s*signal|forex|binary\s*options)\b/i,
  /\b(loan|payday|debt\s*relief|refinance)\b/i,
  /\bclick\s*here\b/i,
  /\bseo\s*(services|rankings?|guarantee)\b/i,
  /\b(100%|guaranteed)\s*(success|results?|rankings?)\b/i,
  /\b(buy|cheap|order)\s+(now|online)\b/i,
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_DETAIL_CHARS = 40;
const MAX_DETAIL_CHARS = 2000;
const MIN_SUBMIT_MS = 3000;

/* ─── Rate limiting (in-memory) ──────────────────────────────── */

interface HitBucket { count: number; firstAt: number }
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_MAX = 3;
const hits = new Map<string, HitBucket>();

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = hits.get(ip);
  if (!bucket) {
    hits.set(ip, { count: 1, firstAt: now });
    return false;
  }
  if (now - bucket.firstAt > RATE_WINDOW_MS) {
    // Window elapsed — reset.
    hits.set(ip, { count: 1, firstAt: now });
    return false;
  }
  if (bucket.count >= RATE_MAX) return true;
  bucket.count += 1;
  return false;
}

/* ─── Handler ────────────────────────────────────────────────── */

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string | null;
  phone?: string | null;
  service?: string;
  budget?: string;
  timeline?: string;
  projectDetails?: string;
  hearAbout?: string | null;
  elapsedMs?: number;
  // Legacy fields — v1 compatibility (won't hurt if omitted).
  website?: string;
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently "succeed" if filled so bots don't probe.
  if (payload.website && payload.website.trim().length > 0) {
    return Response.json({ ok: true }, { status: 200 });
  }

  // Time-to-submit — 200 OK and drop so bots think it worked.
  if (typeof payload.elapsedMs === "number" && payload.elapsedMs < MIN_SUBMIT_MS) {
    return Response.json({ ok: true }, { status: 200 });
  }

  // Rate limit by IP.
  const ip = getClientIp(req);
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many submissions. Try again in an hour." },
      { status: 429 },
    );
  }

  const name    = (payload.name ?? "").trim();
  const email   = (payload.email ?? "").trim();
  const company = (payload.company ?? "").toString().trim();
  const phone   = (payload.phone ?? "").toString().trim();
  const service  = (payload.service ?? "").trim();
  const budget   = (payload.budget ?? "").trim();
  const timeline = (payload.timeline ?? "").trim();
  const details  = (payload.projectDetails ?? "").trim();
  const hearAbout = (payload.hearAbout ?? "").toString().trim();

  // Required-field validation.
  if (name.length < 2) {
    return Response.json({ error: "Name too short." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Invalid email." }, { status: 400 });
  }
  if (!service) {
    return Response.json({ error: "Service required." }, { status: 400 });
  }
  if (!budget) {
    return Response.json({ error: "Budget required." }, { status: 400 });
  }
  if (!timeline) {
    return Response.json({ error: "Timeline required." }, { status: 400 });
  }
  if (details.length < MIN_DETAIL_CHARS) {
    return Response.json({ error: "Project details too short." }, { status: 400 });
  }
  if (details.length > MAX_DETAIL_CHARS) {
    return Response.json({ error: "Project details too long." }, { status: 400 });
  }

  // Spam pattern match.
  if (SPAM_PATTERNS.some((re) => re.test(details) || re.test(name))) {
    console.info("[send-contact] dropped: keyword-match", { ip });
    return Response.json({ ok: true }, { status: 200 });
  }

  // Too many URLs in the message → likely spam.
  const urlCount = (details.match(/https?:\/\//gi) ?? []).length;
  if (urlCount > 3) {
    console.info("[send-contact] dropped: url-count", { ip });
    return Response.json({ ok: true }, { status: 200 });
  }

  // Cyrillic or other non-Latin scripts in heavy doses → very likely
  // spam for an English-serving agency site. Be permissive — only
  // reject if >40% of content is in Cyrillic.
  const cyrillicCount = (details.match(/[А-яЁё]/g) ?? []).length;
  if (cyrillicCount / Math.max(1, details.length) > 0.4) {
    console.info("[send-contact] dropped: cyrillic", { ip });
    return Response.json({ ok: true }, { status: 200 });
  }

  // Statistical gibberish / keyboard-mash / cross-field spam check.
  // This is the layer that catches the "sssssss..." submissions the
  // keyword list misses — it looks at character distribution, word
  // diversity, vowel ratios, and whether mash patterns appear across
  // multiple fields.
  const heuristic = checkSubmission({
    name, email, company: company || null, details,
  });
  if (!heuristic.ok) {
    console.info("[send-contact] dropped:", heuristic.reason, { ip });
    return Response.json({ ok: true }, { status: 200 });
  }

  // Looks legit — send it.
  try {
    const { data, error } = await resend.emails.send({
      from: "CodeWithAli Website <unfold@codewithali.com>",
      to: ["blazehunterhp@gmail.com", "aalibrahimi0@gmail.com"],
      replyTo: email, // Reply goes straight to the prospect, not us.
      subject: `New lead · ${name}${company ? ` (${company})` : ""} · ${budget}`,
      react: EmailContact({
        name, email, company, phone, service, budget, timeline,
        projectDetails: details, hearAbout, ip,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("[send-contact] Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (err) {
    console.error("[send-contact] exception:", err);
    return Response.json({ error: "Failed to send." }, { status: 500 });
  }
}
