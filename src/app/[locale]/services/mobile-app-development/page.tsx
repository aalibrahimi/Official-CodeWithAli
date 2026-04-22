/**
 * Mobile App Development service page — 2026 rewrite.
 *
 * Follows the web-development pattern with dark-first, red + black + gold,
 * display typography, and bespoke SVG marks. Adapted for mobileApp's
 * unique i18n structure: platforms/types section, features cards, process,
 * and FAQ.
 */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowLeft, Sparkles, ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { isRtlLang } from "rtl-detect";

export default function MobileAppDevelopmentPage() {
  const t = useTranslations("ServicePage.mobileApp");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);
  const Chevron = isRTL ? ArrowLeft : ArrowRight;

  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} Chevron={Chevron} />
      <Platforms t={t} />
      <Features t={t} />
      <Process t={t} />
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
              {t("discussBtn")}
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

/* ─── Platforms ────────────────────────────────────────────────── */

function Platforms({ t }: { t: ReturnType<typeof useTranslations> }) {
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="h-full bg-[#FAF9F6] p-8 transition-colors hover:bg-white dark:bg-[#0D0D0E] dark:hover:bg-[#121214] lg:p-10 border border-[#0F0F10]/12 dark:border-white/10">
                <div className="h-14 w-14 text-[#C8102E] mb-6">
                  {i === 1 ? <MarkNative /> : i === 2 ? <MarkCrossPlat /> : <MarkPWA />}
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight lg:text-[22px]">
                  {t(`sections.1.types.${i}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.1.types.${i}.desc`)}
                </p>
                <div className="mt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37] mb-2">
                    {t("sections.1.types.benefitLabel")}
                  </p>
                  <ul className="space-y-1.5">
                    {[1, 2, 3, 4].map((j) => (
                      <li key={j} className="text-[13px] text-[#0F0F10]/65 dark:text-white/65 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E] mt-1.5 flex-shrink-0" />
                        {t(`sections.1.types.${i}.benefits.${j}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─────────────────────────────────────────────────── */

function Features({ t }: { t: ReturnType<typeof useTranslations> }) {
  const cards = [
    { Icon: MarkUserDesign }, { Icon: MarkPerf },    { Icon: MarkCross },
    { Icon: MarkFunc },       { Icon: MarkSecurity }, { Icon: MarkScale },
  ];
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                {t("badge.3")}
              </p>
              <h2
                className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                {t("sections.2.title")}
              </h2>
            </div>
            <p className="max-w-md text-[14.5px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
              {t("sections.2.desc")}
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
                  {t(`sections.2.card.${i + 1}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.2.card.${i + 1}.desc`)}
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
  const steps = [1, 2, 3, 4, 5, 6];
  return (
    <section className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
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

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
                  {t(`sections.3.steps.${n}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.3.steps.${n}.desc`)}
                </p>
              </div>
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
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.5")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {t("sections.4.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("sections.4.desc")}
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
                      {t(`sections.4.QA.${n}.Q`)}
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
                          {t(`sections.4.QA.${n}.A`)}
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
              {t("discussBtn")}
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

/* ─── Bespoke SVG marks per platform/feature ────────────────────── */

function MarkNative() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="8" y="12" width="48" height="40" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <line x1="8" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="38" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="32" cy="38" r="2.5" fill="currentColor" />
    </svg>
  );
}

function MarkCrossPlat() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <circle cx="20" cy="24" r="10" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="44" cy="24" r="10" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="44" r="10" stroke="currentColor" strokeWidth="1.2" />
      <line x1="26" y1="30" x2="38" y2="38" stroke="currentColor" strokeWidth="1" />
      <line x1="38" y1="30" x2="26" y2="38" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function MarkPWA() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M32 12 L48 48 L16 48 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <line x1="24" y1="56" x2="40" y2="56" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function MarkUserDesign() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M32 14 Q40 14 44 20 Q44 28 32 36 Q20 28 20 20 Q24 14 32 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M18 48 L46 48 Q50 48 50 52 Q50 56 46 56 L18 56 Q14 56 14 52 Q14 48 18 48" stroke="currentColor" strokeWidth="1.2" />
      <line x1="24" y1="48" x2="24" y2="40" stroke="currentColor" strokeWidth="1.2" />
      <line x1="40" y1="48" x2="40" y2="40" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function MarkPerf() {
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

function MarkCross() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="10" y="14" width="14" height="36" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <rect x="40" y="14" width="14" height="36" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <line x1="17" y1="24" x2="47" y2="24" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17" cy="38" r="3" fill="currentColor" />
      <circle cx="47" cy="38" r="3" fill="currentColor" />
    </svg>
  );
}

function MarkFunc() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M16 24 Q16 20 20 20 L44 20 Q48 20 48 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="12" y="24" width="40" height="24" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <line x1="20" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="1" />
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

function MarkScale() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M14 50 L14 24 Q14 18 20 18 L44 18 Q50 18 50 24 L50 50" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="26" x2="44" y2="26" stroke="currentColor" strokeWidth="1.2" />
      <line x1="18" y1="50" x2="46" y2="50" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24 34 L24 42" stroke="currentColor" strokeWidth="1" />
      <path d="M32 30 L32 42" stroke="currentColor" strokeWidth="1" />
      <path d="M40 36 L40 42" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}