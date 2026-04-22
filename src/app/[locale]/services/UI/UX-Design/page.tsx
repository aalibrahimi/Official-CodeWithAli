/**
 * UI/UX Design service page — 2026 rewrite.
 *
 * Follows the web-development pattern with dark-first, red + black + gold,
 * display typography, and bespoke SVG marks. Features a preserved portfolio
 * projects section with live template demos (Prism, NOIR, Atelier Hush, Meridian).
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

export default function UIUXDesignPage() {
  const t = useTranslations("ServicePage.UI");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);
  const Chevron = isRTL ? ArrowLeft : ArrowRight;

  // Portfolio projects with live template demos
  const portfolioProjects = [
    {
      title: "Prism · SaaS platform",
      category: "Dashboard design",
      href: "/templates/saas",
      gradient: "linear-gradient(135deg, #7C5CFF 0%, #4AD8E1 100%)",
    },
    {
      title: "NOIR SS/26",
      category: "E-commerce · Fashion",
      href: "/templates/fashion",
      gradient: "linear-gradient(135deg, #3A3A3C 0%, #0F0F10 100%)",
    },
    {
      title: "Atelier Hush",
      category: "Boutique commerce",
      href: "/templates/boutique",
      gradient: "linear-gradient(135deg, #D5C9B4 0%, #A89782 45%, #6B5B47 100%)",
    },
    {
      title: "Meridian Properties",
      category: "Real estate platform",
      href: "/templates/real-estate",
      gradient: "linear-gradient(135deg, #8FCFA6 0%, #1F6F4A 60%, #0F2A1D 100%)",
    },
  ];

  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} Chevron={Chevron} />
      <Offerings t={t} />
      <Portfolio portfolioProjects={portfolioProjects} t={t} Chevron={Chevron} />
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
              {t("consultBtn")}
              <Chevron className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="#portfolio"
            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0F0F10]/80 transition-colors hover:text-[#C8102E] dark:text-white/80 dark:hover:text-[#C8102E]"
          >
            {t("workBtn")} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Offerings ────────────────────────────────────────────────── */

function Offerings({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <section className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.2")}
            </p>
            <h2
              className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {t("sections.1.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("sections.1.desc")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="h-full bg-[#FAF9F6] p-8 transition-colors hover:bg-white dark:bg-[#0D0D0E] dark:hover:bg-[#121214] lg:p-10 border border-[#0F0F10]/12 dark:border-white/10">
                <div className="h-14 w-14 text-[#C8102E] mb-6">
                  {i === 1 ? <MarkResearch /> : i === 2 ? <MarkInterface /> : i === 3 ? <MarkTesting /> : <MarkDesignSystem />}
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight lg:text-[22px]">
                  {t(`sections.1.offerings.${i}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.1.offerings.${i}.desc`)}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {[1, 2, 3, 4].map((j) => (
                    <li key={j} className="text-[13px] text-[#0F0F10]/65 dark:text-white/65 flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E] mt-1.5 flex-shrink-0" />
                      {t(`sections.1.offerings.${i}.features.${j}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio Projects ───────────────────────────────────────── */

function Portfolio({
  portfolioProjects,
  t,
  Chevron,
}: {
  portfolioProjects: Array<{ title: string; category: string; href: string; gradient: string }>;
  t: ReturnType<typeof useTranslations>;
  Chevron: typeof ArrowRight;
}) {
  return (
    <section id="portfolio" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.3")}
            </p>
            <h2
              className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {t("sections.2.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("sections.2.desc")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {portfolioProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.06}>
              <Link href={project.href}>
                <article className="group cursor-pointer">
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#0F0F10]/10 dark:border-white/10 transition-all group-hover:-translate-y-1 group-hover:border-[#C8102E]/40 group-hover:shadow-[0_30px_60px_-20px_rgba(200,16,46,0.3)]"
                    style={{ background: project.gradient }}
                  >
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/70 to-transparent p-6">
                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm w-fit mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-[20px] font-semibold text-white leading-tight">{project.title}</h3>
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white w-fit">
                        View Demo
                        <Chevron className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.24}>
          <div className="mt-12 flex justify-center">
            <Link href="/portfolio">
              <Button className="rounded-full border border-[#0F0F10]/20 bg-transparent px-7 py-6 text-[13.5px] font-semibold uppercase tracking-[0.16em] text-[#0F0F10]/80 transition-colors hover:bg-[#0F0F10]/[0.05] dark:border-white/20 dark:text-white/80 dark:hover:bg-white/[0.05]">
                {t("viewAllBtn")}
                <Chevron className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Process ──────────────────────────────────────────────────── */

function Process({ t }: { t: ReturnType<typeof useTranslations> }) {
  const steps = [1, 2, 3, 4, 5];
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
                  {t(`sections.3.process.${n}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`sections.3.process.${n}.desc`)}
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
              {t("badge.7")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
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
              {t("consultBtn")}
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

/* ─── Bespoke SVG marks ────────────────────────────────────────── */

function MarkResearch() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M28 28 L40 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 18 L32 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M18 26 L22 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function MarkInterface() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="10" y="12" width="44" height="32" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <line x1="10" y1="20" x2="54" y2="20" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <circle cx="24" cy="16" r="1.5" fill="currentColor" />
      <circle cx="32" cy="16" r="1.5" fill="currentColor" />
      <line x1="16" y1="28" x2="48" y2="28" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="36" x2="48" y2="36" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function MarkTesting() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="12" y="14" width="40" height="36" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24 28 L30 34 L40 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="22" x2="52" y2="22" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function MarkDesignSystem() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="10" y="10" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="26" y="10" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="42" y="10" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="10" y="26" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="26" y="26" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="42" y="26" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="10" y="42" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="26" y="42" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="42" y="42" width="12" height="12" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}