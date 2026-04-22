/**
 * CheckoutSuccess — generic "payment received" screen each
 * template's /checkout/success page imports. Accepts a title,
 * descriptor, and homeHref for the "back to site" CTA so each
 * industry can customize the copy while reusing the chrome.
 */
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export function CheckoutSuccess({
  title = "Payment received",
  descriptor = "We’ve sent a receipt to your email.",
  orderRef,
  homeHref,
  homeLabel = "Back to site",
  nextSteps,
}: {
  title?: string;
  descriptor?: string;
  orderRef?: string;
  homeHref: string;
  homeLabel?: string;
  nextSteps?: { title: string; body: string }[];
}) {
  const ref = orderRef ?? generateRef();

  return (
    <div className="mx-auto grid w-full max-w-2xl gap-10 text-center" style={{ color: "var(--tpl-fg, #111)" }}>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
        style={{ background: "var(--tpl-accent, #111)", color: "#fff" }}
      >
        <Check className="h-7 w-7" strokeWidth={2.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">{title}</h1>
        <p className="mt-3 text-[15px] opacity-75">{descriptor}</p>
        <p className="mt-1 text-[12px] uppercase tracking-[0.2em] opacity-50">
          Order ref · {ref}
        </p>
      </motion.div>

      {nextSteps && nextSteps.length > 0 && (
        <motion.ol
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto grid w-full max-w-xl gap-3 text-left"
        >
          {nextSteps.map((s, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-lg border p-4"
              style={{ borderColor: "color-mix(in oklch, currentColor 15%, transparent)" }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold"
                style={{ background: "var(--tpl-accent, #111)", color: "#fff" }}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-[14px] font-semibold">{s.title}</p>
                <p className="mt-1 text-[13px] opacity-70">{s.body}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <Link
          href={homeHref}
          className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white"
          style={{ background: "var(--tpl-accent, #111)" }}
        >
          {homeLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );
}

function generateRef(): string {
  const alpha = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const digits = "23456789";
  let s = "";
  for (let i = 0; i < 3; i++) s += alpha[Math.floor(Math.random() * alpha.length)];
  s += "-";
  for (let i = 0; i < 4; i++) s += digits[Math.floor(Math.random() * digits.length)];
  return s;
}
