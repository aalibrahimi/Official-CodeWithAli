/**
 * Web Development service page — 2026 rewrite.
 *
 * Pattern-establisher for the other 5 service pages. Each follows
 * the same layout:
 *
 *   Hero            — eyebrow pill, display type w/ italic accent,
 *                     red primary CTA + ghost secondary, red glow
 *   Features grid   — 6 cards with bespoke abstract SVG marks,
 *                     gold eyebrow on labels
 *   Process         — numbered list (red step digits), bordered
 *   Tech stack      — simple 2-col pill strip
 *   Case studies    — real screenshot cards w/ hover overlay
 *   FAQ             — grouped accordion by tab (general/tech/pricing)
 *   Final CTA       — dark rounded card with red glows
 *
 * i18n keys (ServicePage.webDev.*) preserved verbatim. No content
 * changes — just structure + styling.
 */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowLeft, Sparkles, CheckCircle2, ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { isRtlLang } from "rtl-detect";

export default function WebDevelopmentPage() {
  const t = useTranslations("ServicePage.webDev");
  const locale = useLocale();
  const isRTL = Boolean(isRtlLang(locale));
  const Chevron = isRTL ? ArrowLeft : ArrowRight;

  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} Chevron={Chevron} />
      <Features t={t} />
      <Process t={t} />
      <TechStack t={t} />
      <CaseStudies t={t} isRTL={isRTL} />
      <FAQ t={t} />
      <CTA t={t} Chevron={Chevron} />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */

function Hero({
  t, Chevron,
}: { t: ReturnType<typeof useTranslations>; Chevron: typeof ArrowRight }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[720px] rounded-full bg-[#C8102E]/15 blur-[140px] dark:bg-[#C8102E]/10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0F0F10]/15 bg-[#0F0F10]/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] dark:border-white/15 dark:bg-white/5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
          {t("badge.1")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-light leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
        >
          {t("title.1")}
          <br />
          <em className="font-normal italic text-[#C8102E]">{t("title.2")}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-10 max-w-2xl text-[16px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[18px]"
        >
          {t("desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <Link href="/contact">
            <Button className="rounded-full bg-[#C8102E] px-7 py-6 text-[13.5px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]">
              {t("quoteBtn")}
              <Chevron className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0F0F10]/80 transition-colors hover:text-[#C8102E] dark:text-white/80 dark:hover:text-[#C8102E]"
          >
            {t("workBtn")} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Features ─────────────────────────────────────────────────── */

function Features({ t }: { t: ReturnType<typeof useTranslations> }) {
  const cards = [
    { Icon: MarkResponsive }, { Icon: MarkSpeed },   { Icon: MarkSEO },
    { Icon: MarkCustom },     { Icon: MarkSecurity }, { Icon: MarkCMS },
  ];
  return (
    <section className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                {t("badge.2")}
              </p>
              <h2
                className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                {t("sections.1.title")}
              </h2>
            </div>
            <p className="max-w-md text-[14.5px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
              {t("sections.1.desc")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-px bg-[#0F0F10]/12 dark:bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="h-full bg-[#FAF9F6] p-8 transition-colors hover:bg-white dark:bg-[#0D0D0E] dark:hover:bg-[#121214] lg:p-10">
                <div className="h-14 w-14 text-[#C8102E]">
                  <c.Icon />
                </div>
                <h3 className="mt-6 text-[19px] font-semibold tracking-tight lg:text-[22px]">
                  {t(`sections.1.cards.${i + 1}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.1.cards.${i + 1}.desc`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process ──────────────────────────────────────────────────── */

function Process({ t }: { t: ReturnType<typeof useTranslations> }) {
  const steps = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.3")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {t("sections.2.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("sections.2.desc")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((n, i) => (
            <FadeIn key={n} delay={i * 0.04}>
              <div className="border-t border-[#0F0F10]/15 pt-6 dark:border-white/15">
                <p
                  className="font-light tabular-nums text-[#C8102E]"
                  style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
                >
                  0{n}
                </p>
                <h3 className="mt-4 text-[18px] font-semibold tracking-tight lg:text-[20px]">
                  {t(`sections.2.steps.${n}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.2.steps.${n}.desc`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Tech stack ───────────────────────────────────────────────── */

function TechStack({ t }: { t: ReturnType<typeof useTranslations> }) {
  const stack = [
    { name: "React / Next.js", desc: t("sections.3.tech.1.desc") },
    { name: "Shopify",         desc: t("sections.3.tech.3.desc") },
    { name: "Tailwind CSS",    desc: t("sections.3.tech.4.desc") },
    { name: "Node.js",         desc: t("sections.3.tech.5.desc") },
    { name: "GraphQL",         desc: t("sections.3.tech.6.desc") },
    { name: "AWS / Vercel",    desc: t("sections.3.tech.7.desc") },
  ];
  return (
    <section className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.4")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {t("sections.3.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("sections.3.desc")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.04}>
              <div className="rounded-xl border border-[#0F0F10]/10 bg-[#FAF9F6] p-6 dark:border-white/10 dark:bg-[#0D0D0E]">
                <p className="text-[15px] font-semibold tracking-tight">{s.name}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Case studies ─────────────────────────────────────────────── */

function CaseStudies({
  t, isRTL,
}: { t: ReturnType<typeof useTranslations>; isRTL: boolean }) {
  const cases = [
    { title: t("sections.4.case.1.title"), industry: t("sections.4.case.1.industry"), desc: t("sections.4.case.1.desc"), image: "/knoz_website.png" },
    { title: t("sections.4.case.2.title"), industry: t("sections.4.case.2.industry"), desc: t("sections.4.case.2.desc"), image: "/budgetary.png" },
    { title: t("sections.4.case.3.title"), industry: t("sections.4.case.3.industry"), desc: t("sections.4.case.3.desc"), image: "/iraqisweets_website.png" },
  ];
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                {t("badge.5")}
              </p>
              <h2
                className="font-light leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                {t("sections.4.title")}
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0F0F10]/70 hover:text-[#C8102E] dark:text-white/70 dark:hover:text-[#C8102E]"
            >
              {t("sections.4.case.projectsBtn")} →
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {cases.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#0F0F10]/10 dark:border-white/10 transition-all group-hover:-translate-y-1 group-hover:border-[#C8102E]/40 group-hover:shadow-[0_30px_60px_-20px_rgba(200,16,46,0.3)] mb-5">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={800}
                    height={600}
                    quality={95}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-[#D4AF37]/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37] backdrop-blur-sm">
                      {c.industry}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="w-full p-6">
                      <h3 className="text-[20px] font-semibold text-white leading-tight">{c.title}</h3>
                      <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-white/80">{c.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white">
                        {t("sections.4.case.viewBtn")}
                        {isRTL ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-[18px] font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {c.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ──────────────────────────────────────────────────────── */

function FAQ({ t }: { t: ReturnType<typeof useTranslations> }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.6")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {t("sections.5.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("sections.5.desc")}
            </p>
          </div>
        </FadeIn>

        <div className="divide-y divide-[#0F0F10]/10 border-y border-[#0F0F10]/10 dark:divide-white/10 dark:border-white/10">
          {items.map((n, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={n} delay={i * 0.02}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#C8102E]"
                  >
                    <span className="text-[15px] font-semibold tracking-tight lg:text-[16.5px]">
                      {t(`sections.5.QA.${n}.Q`)}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#C8102E]" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-[14.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
                          {t(`sections.5.QA.${n}.A`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ────────────────────────────────────────────────── */

function CTA({
  t, Chevron,
}: { t: ReturnType<typeof useTranslations>; Chevron: typeof ArrowRight }) {
  return (
    <section className="px-5 pb-24 pt-12 lg:px-10 lg:pb-32">
      <FadeIn>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0F0F10] p-12 text-white dark:bg-[#141416] lg:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#C8102E]/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#C8102E]/15 blur-[120px]" />
          <div className="relative">
            <Sparkles className="h-7 w-7 text-[#C8102E]" />
            <h2
              className="mt-6 max-w-3xl font-light leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              {t("cta.title")}
            </h2>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/75 lg:text-[17px]">
              {t("cta.desc")}
            </p>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]">
              {t("quoteBtn")}
              <Chevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── Primitives ───────────────────────────────────────────────── */

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Bespoke SVG marks per feature ────────────────────────────── */
// Same visual language as the homepage service marks: monochromatic
// currentColor, thin-stroke outlines, abstract composition that
// reads as "thoughtfully made, not stock."

function MarkResponsive() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="6" y="14" width="38" height="26" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <rect x="42" y="26" width="16" height="24" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <line x1="6" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="1.2" />
      <line x1="42" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="46" r="1" fill="currentColor" />
    </svg>
  );
}
function MarkSpeed() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M14 44 L32 20 L50 44" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="44" r="3" fill="currentColor" />
      <path d="M22 48 L32 48 L42 48" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function MarkSEO() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <circle cx="26" cy="26" r="14" stroke="currentColor" strokeWidth="1.2" />
      <line x1="36" y1="36" x2="52" y2="52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 26 L26 34 L36 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MarkCustom() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M18 20 L8 32 L18 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 20 L56 32 L46 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="38" y1="16" x2="26" y2="48" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function MarkSecurity() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M32 8 L52 16 L52 32 Q 52 48 32 56 Q 12 48 12 32 L12 16 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M24 30 L30 36 L40 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MarkCMS() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="8" y="14" width="48" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="28" width="48" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="42" width="48" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14" cy="19" r="1.5" fill="currentColor" />
      <circle cx="14" cy="33" r="1.5" fill="currentColor" />
      <circle cx="14" cy="47" r="1.5" fill="currentColor" />
    </svg>
  );
}
