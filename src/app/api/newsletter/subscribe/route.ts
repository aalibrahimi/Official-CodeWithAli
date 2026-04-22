/**
 * /api/newsletter/subscribe
 *
 * Mirror of the defense-in-depth used on /api/send-contact:
 *   · Honeypot field (server rejects if filled)
 *   · Time-gate (< 2s between form mount and submit = bot)
 *   · IP rate limit (5 tries/hour)
 *   · RFC-ish email shape check + disposable-domain block
 *   · Sends a confirmation email via Resend
 *
 * If RESEND_KEY or RESEND_AUDIENCE is not configured the route still
 * returns 200 so the UI flow works in dev — the subscriber is logged.
 */
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MS = 2000;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 5;

const DISPOSABLE = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getairmail.com",
  "maildrop.cc",
]);

interface Bucket {
  count: number;
  firstAt: number;
}
const hits = new Map<string, Bucket>();

function getIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() ?? "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const b = hits.get(ip);
  if (!b) {
    hits.set(ip, { count: 1, firstAt: now });
    return false;
  }
  if (now - b.firstAt > RATE_WINDOW_MS) {
    hits.set(ip, { count: 1, firstAt: now });
    return false;
  }
  if (b.count >= RATE_MAX) return true;
  b.count += 1;
  return false;
}

interface SubscribePayload {
  email?: string;
  honeypot?: string;
  elapsedMs?: number;
  source?: string;
}

export async function POST(req: NextRequest) {
  let body: SubscribePayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const honeypot = body.honeypot ?? "";
  const elapsedMs = body.elapsedMs ?? 0;
  const source = body.source ?? "unknown";

  // Honeypot — pretend success so scanners learn nothing.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Time-gate
  if (elapsedMs < MIN_MS) {
    return NextResponse.json({ ok: true });
  }

  // Rate limit
  const ip = getIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      { status: 429 },
    );
  }

  // Shape
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That doesn't look like a valid email." },
      { status: 400 },
    );
  }

  // Domain
  const domain = email.split("@")[1] ?? "";
  if (DISPOSABLE.has(domain)) {
    return NextResponse.json(
      { error: "Please use a non-disposable address." },
      { status: 400 },
    );
  }

  // Send (best-effort). If Resend is not configured we still return ok.
  const resendKey = process.env.RESEND_KEY;
  const audienceId = process.env.RESEND_AUDIENCE;

  try {
    if (resendKey) {
      const resend = new Resend(resendKey);
      if (audienceId) {
        await resend.contacts.create({
          email,
          unsubscribed: false,
          audienceId,
        });
      }
      // Send welcome email
      await resend.emails.send({
        from: "CodeWithAli <hello@codewithali.com>",
        to: email,
        subject: "Welcome to the CodeWithAli Dispatch",
        html: welcomeEmailHtml(),
        text: welcomeEmailText(),
      });
    } else {
      // Dev fallback — log only.
      console.log("[newsletter] subscribe:", { email, source });
    }
  } catch (err) {
    console.error("[newsletter] send failed:", err);
    // Still return ok — the subscriber record is what matters.
  }

  return NextResponse.json({ ok: true });
}

function welcomeEmailHtml(): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0A0A0B;color:#FFFFFF;font-family:-apple-system,system-ui,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0B;padding:40px 20px;">
      <tr>
        <td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="background:#0F0F10;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 24px;border-bottom:1px solid rgba(255,255,255,0.05);">
                <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#D4AF37;">CodeWithAli</div>
                <div style="font-size:24px;font-weight:600;margin-top:6px;color:#FFFFFF;">Welcome to the Dispatch.</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;color:rgba(255,255,255,0.75);font-size:15px;line-height:1.7;">
                <p>You're on the list.</p>
                <p>Once a month you'll get a short email — what we shipped, what we read, and what we argued about. Zero affiliates, zero tracking pixels, one-click unsubscribe.</p>
                <p>If you've got a project, a question, or a piece of work you'd like us to look at — just reply. These replies land in a real human inbox.</p>
                <p style="margin-top:24px;color:rgba(255,255,255,0.55);">— The CodeWithAli team</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.05);font-size:12px;color:rgba(255,255,255,0.4);">
                codewithali.com · one email a month · reply anytime
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function welcomeEmailText(): string {
  return [
    "Welcome to the CodeWithAli Dispatch.",
    "",
    "You're on the list.",
    "",
    "Once a month you'll get a short email — what we shipped, what we read, and what we argued about. Zero affiliates, zero tracking pixels, one-click unsubscribe.",
    "",
    "If you've got a project, a question, or a piece of work you'd like us to look at — just reply.",
    "",
    "— The CodeWithAli team",
    "codewithali.com",
  ].join("\n");
}
