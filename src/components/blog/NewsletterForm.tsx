"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "ok" | "err";

export function NewsletterForm({
  compact = false,
  source = "blog",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());
  // Honeypot — real users never touch this.
  const [hp, setHp] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          honeypot: hp,
          elapsedMs: Date.now() - startedAt,
          source,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("err");
        setMessage(data?.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("ok");
      setMessage("You are on the list. Next issue is on the way.");
      setEmail("");
    } catch {
      setStatus("err");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "ok") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-[#0F0F10] dark:text-white/90"
      >
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/30 text-[#D4AF37]">
          <Check className="size-4" />
        </span>
        <span>{message}</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <div
        className={`flex flex-col gap-2 ${
          compact ? "sm:flex-row" : ""
        }`}
      >
        {/* Honeypot */}
        <input
          type="text"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="sr-only"
          name="company_website"
        />

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@somewhere.com"
          autoComplete="email"
          disabled={status === "loading"}
          className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C8102E]/20 transition hover:bg-[#9F0F24] disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              Subscribe
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>
      {status === "err" && message ? (
        <p className="pl-4 text-xs text-[#ff7d88]">{message}</p>
      ) : null}
      <p className="pl-4 text-xs text-white/40">
        One email a month. Zero affiliates. One-click unsubscribe.
      </p>
    </form>
  );
}
