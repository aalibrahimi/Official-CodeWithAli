"use client";

import { useState } from "react";
import { Check, Copy, Linkedin, Share2, Twitter } from "lucide-react";

export function ShareRow({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  }

  async function share() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await (navigator as Navigator & { share: (d: ShareData) => Promise<void> }).share(
          { title, url },
        );
      } catch {
        /* noop */
      }
    }
  }

  const btn =
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/70 transition hover:border-[#C8102E]/40 hover:bg-[#C8102E]/5 hover:text-white";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
        Share
      </span>
      <a href={twitter} target="_blank" rel="noreferrer" className={btn}>
        <Twitter className="size-3.5" /> Twitter
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer" className={btn}>
        <Linkedin className="size-3.5" /> LinkedIn
      </a>
      <button type="button" onClick={copy} className={btn}>
        {copied ? <Check className="size-3.5 text-[#D4AF37]" /> : <Copy className="size-3.5" />}
        {copied ? "Copied" : "Copy link"}
      </button>
      <button type="button" onClick={share} className={`${btn} sm:hidden`}>
        <Share2 className="size-3.5" /> Share
      </button>
    </div>
  );
}
