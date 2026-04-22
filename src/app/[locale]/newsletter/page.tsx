/**
 * /newsletter — landing page with current issue + archive.
 */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, Archive, ArrowRight } from "lucide-react";

import { getAllIssues, getLatestIssue } from "@/content/newsletter";
import { NewsletterForm } from "@/components/blog/NewsletterForm";

export const metadata: Metadata = {
  title: "Studio Dispatch — CodeWithAli Newsletter",
  description:
    "One email a month. What we shipped, what we read, and what we argued about — from the CodeWithAli studio.",
};

export default function NewsletterPage() {
  const latest = getLatestIssue();
  const issues = getAllIssues();

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-48 -top-48 size-[640px] rounded-full bg-[#C8102E]/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[560px] rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-16 sm:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7c158] ring-1 ring-[#D4AF37]/30">
              <Mail className="size-3" /> The Dispatch
            </span>
            <h1 className="mt-6 text-[clamp(44px,7vw,88px)] font-semibold leading-[1] tracking-tight text-white">
              One email. <em className="not-italic text-[#C8102E]">Once a month.</em>
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.7] text-white/65">
              What we shipped, what we read, and what we argued about from the
              CodeWithAli studio. Honest dispatches. Zero tracking pixels.
              One-click unsubscribe.
            </p>
            <div id="subscribe" className="mt-9 max-w-xl">
              <NewsletterForm compact source="newsletter-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest issue */}
      {latest ? (
        <section className="mx-auto max-w-[1200px] px-6 py-12 sm:px-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Latest Issue
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                Issue #{String(latest.issue).padStart(3, "0")}
              </h2>
            </div>
          </div>
          <Link
            href={`/newsletter/${latest.slug}`}
            className="group grid overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] transition hover:border-white/20 lg:grid-cols-[1fr_1fr]"
          >
            <div className="relative order-2 lg:order-1 p-8 sm:p-12">
              <h3 className="text-[clamp(24px,3vw,36px)] font-semibold leading-[1.15] tracking-tight text-white">
                {latest.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.75] text-white/65">
                {latest.summary}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-white/45">
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" /> {latest.readMinutes} min
                </span>
                <span>{new Date(latest.date).toLocaleDateString()}</span>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition group-hover:gap-3">
                Read this issue
                <ArrowRight className="size-4" />
              </span>
            </div>
            <div className="relative order-1 lg:order-2 min-h-[240px] lg:min-h-[420px]">
              <Image
                src={latest.cover.src}
                alt={latest.cover.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-black/15 to-[#0A0A0B]/80" />
            </div>
          </Link>
        </section>
      ) : null}

      {/* Archive */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Archive
            </div>
            <h2 className="mt-2 flex items-center gap-3 text-3xl font-semibold tracking-tight text-white">
              <Archive className="size-6 text-white/40" /> Every issue
            </h2>
          </div>
        </div>
        <ul className="divide-y divide-white/5 rounded-3xl border border-white/10">
          {issues.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/newsletter/${i.slug}`}
                className="group flex items-center gap-6 px-6 py-5 transition hover:bg-white/[0.03]"
              >
                <span className="font-mono text-sm text-white/40">
                  #{String(i.issue).padStart(3, "0")}
                </span>
                <div className="flex-1">
                  <div className="font-semibold text-white transition group-hover:text-[#C8102E]">
                    {i.title}
                  </div>
                  <div className="mt-0.5 line-clamp-1 text-sm text-white/45">
                    {i.summary}
                  </div>
                </div>
                <span className="hidden font-mono text-xs text-white/30 sm:inline">
                  {new Date(i.date).toLocaleDateString()}
                </span>
                <ArrowRight className="size-4 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-[#C8102E]" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
