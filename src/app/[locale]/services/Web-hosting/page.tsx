/**
 * Web Hosting & Maintenance service page — 2026 rewrite.
 * Follows web-development pattern.
 */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { isRtlLang } from "rtl-detect";

export default function WebHostingPage() {
  const t = useTranslations("ServicePage.Hosting");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);
  const Chevron = isRTL ? ArrowLeft : ArrowRight;

  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} Chevron={Chevron} />
      <Services t={t} />
      <Process t={t} />
      <FAQ t={t} />
      <CTA t={t} Chevron={Chevron} />
    </main>
  );
}

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
              {t("startBtn")}
              <Chevron className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="#services"
            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0F0F10]/80 transition-colors hover:text-[#C8102E] dark:text-white/80 dark:hover:text-[#C8102E]"
          >
            {t("plansBtn")} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Services({ t }: { t: ReturnType<typeof useTranslations> }) {
  const cards = [
    { Icon: MarkManaged },   { Icon: MarkSecurity },   { Icon: MarkMonitor },
    { Icon: MarkBackup },    { Icon: MarkPerf },       { Icon: MarkUpdate },
  ];
  return (
    <section id="services" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.2")}
            </p>
            <h2 className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              {t("sections.1.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
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
                  {t(`sections.1.hostFeatures.${i + 1}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.1.hostFeatures.${i + 1}.desc`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ t }: { t: ReturnType<typeof useTranslations> }) {
  const steps = [1, 2, 3, 4, 5, 6];
  return (
    <section className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.5")}
            </p>
            <h2 className="font-light leading-[1.05] tracking-[-0.01em]" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              {t("sections.4.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("sections.4.desc")}
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((n, i) => (
            <FadeIn key={n} delay={i * 0.04}>
              <div className="border-t border-[#0F0F10]/15 pt-6 dark:border-white/15">
                <p className="font-light tabular-nums text-[#C8102E]" style={{ fontSize: "clamp(36px, 4vw, 48px)" }}>
                  0{n}
                </p>
                <h3 className="mt-4 text-[18px] font-semibold tracking-tight lg:text-[20px]">
                  {t(`sections.4.cards.${n}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.4.cards.${n}.desc`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }: { t: ReturnType<typeof useTranslations> }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.6")}
            </p>
            <h2 className="font-light leading-[1.05] tracking-[-0.01em]" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              {t("sections.6.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("sections.6.desc")}
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
                      {t(`sections.6.QA.${n}.Q`)}
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
                          {t(`sections.6.QA.${n}.A`)}
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
            <h2 className="mt-6 max-w-3xl font-light leading-[1.0] tracking-[-0.02em]" style={{ fontSize: "clamp(32px, 5vw, 64px)" }}>
              {t("cta.title")}
            </h2>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/75 lg:text-[17px]">
              {t("cta.desc")}
            </p>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]">
              {t("startBtn")}
              <Chevron className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

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

function MarkManaged() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="12" y="16" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <line x1="12" y1="22" x2="52" y2="22" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="19" r="1.5" fill="currentColor" />
      <circle cx="26" cy="19" r="1.5" fill="currentColor" />
      <line x1="16" y1="28" x2="48" y2="28" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="36" x2="48" y2="36" stroke="currentColor" strokeWidth="1" />
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

function MarkMonitor() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <polyline points="12,48 24,32 36,40 52,16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="48" r="2.5" fill="currentColor" />
      <circle cx="24" cy="32" r="2.5" fill="currentColor" />
      <circle cx="36" cy="40" r="2.5" fill="currentColor" />
      <circle cx="52" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

function MarkBackup() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M14 28 Q14 22 20 22 L44 22 Q50 22 50 28 L50 46 Q50 52 44 52 L20 52 Q14 52 14 46 Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 36 L32 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 40 L32 44 L36 40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MarkPerf() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="10" y="18" width="44" height="30" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <line x1="10" y1="24" x2="54" y2="24" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 34 L24 30 L32 36 L40 28 L48 34" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function MarkUpdate() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 18 L32 32 L42 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 20 Q46 24 46 32 Q46 40 42 44" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}