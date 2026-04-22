/**
 * About page — rewritten 2026 to match the new design system
 * (dark-first, red + black + gold, red-forward with gold as
 * punctuation).
 *
 * Keeps every existing i18n key intact — copy stays translated
 * across en/es/ar/nl. Replaces the original 785-line implementation
 * with section components built against the same design language
 * as the homepage.
 */
"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Target, Globe, Activity, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");
  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} />
      <Mission t={t} />
      <Stats t={t} />
      <Story t={t} />
      <Process t={t} />
      <Values t={t} />
      <Testimonials t={t} />
      <CTA t={t} />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */

function Hero({ t }: { t: ReturnType<typeof useTranslations> }) {
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
          {t("badge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-light leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
        >
          {t("title")}
          <br />
          <em className="font-normal italic text-[#C8102E]">{t("sub")}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-10 max-w-2xl text-[16px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[18px]"
        >
          {t("desc")}
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Mission ──────────────────────────────────────────────────── */

function Mission({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <section className="border-y border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            {t("mission.header")}
          </p>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <FadeIn>
            <h2
              className="font-light leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              {t("mission.desc")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-10 md:grid-cols-1 lg:pt-6">
              <MissionBlock Icon={Globe} title={t("mission.sub")} body={t("mission.subDesc")} />
              <MissionBlock Icon={Activity} title={t("mission.sub2")} body={t("mission.subDesc2")} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function MissionBlock({
  Icon, title, body,
}: { Icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8102E]/40 text-[#C8102E]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <h3 className="text-[18px] font-semibold tracking-tight">{title.trim()}</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">{body.trim()}</p>
      </div>
    </div>
  );
}

/* ─── Stats band ───────────────────────────────────────────────── */

function Stats({ t }: { t: ReturnType<typeof useTranslations> }) {
  const stats = [
    { v: "50+", l: t("mission.stats.1") },
    { v: "98%", l: t("mission.stats.2") },
    { v: "24/7", l: t("mission.stats.3") },
    { v: "100%", l: t("mission.stats.4") },
  ];
  return (
    <section className="px-5 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <p
              className="font-light leading-none tracking-tight text-[#C8102E]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              {s.v}
            </p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              {s.l}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Story ────────────────────────────────────────────────────── */

function Story({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            {t("story.badge")}
          </p>
          <h2
            className="font-light leading-[1.05] tracking-[-0.01em]"
            style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
          >
            {t("story.title")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-10">
            <div>
              <h3 className="text-[20px] font-semibold tracking-tight lg:text-[22px]">{t("story.header")}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[16.5px]">
                {t("story.sub")}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[16.5px]">
                {t("story.subDesc")}
              </p>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold tracking-tight lg:text-[22px]">{t("story.header2")}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[16.5px]">
                {t("story.sub2")}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[16.5px]">
                {t("story.subDesc2")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Process ──────────────────────────────────────────────────── */

function Process({ t }: { t: ReturnType<typeof useTranslations> }) {
  const phases = [
    { n: 1, header: t("process.cards.h1"), desc: t("process.cards.desc1"), list: [1,2,3,4].map((i) => t(`process.cards.firstList.li${i}`)) },
    { n: 2, header: t("process.cards.h2"), desc: t("process.cards.desc2"), list: [1,2,3,4].map((i) => t(`process.cards.secondList.li${i}`)) },
    { n: 3, header: t("process.cards.h3"), desc: t("process.cards.desc3"), list: [1,2,3,4].map((i) => t(`process.cards.thirdList.li${i}`)) },
    { n: 4, header: t("process.cards.h4"), desc: t("process.cards.desc4"), list: [1,2,3,4].map((i) => t(`process.cards.fourthList.li${i}`)) },
  ];

  return (
    <section className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("process.badge")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
            >
              {t("process.header")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("process.sub")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-px bg-[#0F0F10]/12 dark:bg-white/10 md:grid-cols-2">
          {phases.map((p, i) => (
            <FadeIn key={p.n} delay={i * 0.05}>
              <div className="h-full bg-[#FAF9F6] p-10 dark:bg-[#0D0D0E] lg:p-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-light tabular-nums text-[#C8102E]" style={{ fontSize: "clamp(36px, 4vw, 48px)" }}>
                    0{p.n}
                  </span>
                  <h3 className="text-[20px] font-semibold tracking-tight lg:text-[24px]">{p.header.trim()}</h3>
                </div>
                <p className="mt-5 text-[14px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">{p.desc.trim()}</p>
                <ul className="mt-6 space-y-2.5 border-t border-[#0F0F10]/10 pt-5 dark:border-white/10">
                  {p.list.map((li) => (
                    <li key={li} className="flex items-start gap-3 text-[13.5px] text-[#0F0F10]/80 dark:text-white/80">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C8102E]" />
                      {li.trim()}
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

/* ─── Values ───────────────────────────────────────────────────── */

function Values({ t }: { t: ReturnType<typeof useTranslations> }) {
  const items = [
    { h: t("values.title.h1"), d: t("values.title.d1") },
    { h: t("values.title.h2"), d: t("values.title.d2") },
    { h: t("values.title.h3"), d: t("values.title.d3") },
    { h: t("values.title.h4"), d: t("values.title.d4") },
  ];
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("values.badge")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
            >
              {t("values.header")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("values.sub")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((v, i) => (
            <FadeIn key={v.h} delay={i * 0.06}>
              <div className="border-t border-[#0F0F10]/15 pt-6 dark:border-white/15">
                <Target className="h-5 w-5 text-[#C8102E]" />
                <h3 className="mt-5 text-[18px] font-semibold tracking-tight lg:text-[20px]">{v.h.trim()}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">{v.d.trim()}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────────────── */

function Testimonials({ t }: { t: ReturnType<typeof useTranslations> }) {
  const items = [1, 2, 3, 4];
  return (
    <section className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("mission.story.badge")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
            >
              {t("mission.story.header")}
            </h2>
            <p className="mt-5 text-[15px] text-[#0F0F10]/70 dark:text-white/70">
              {t("mission.story.title")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((i, idx) => (
            <FadeIn key={i} delay={idx * 0.05}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-[#0F0F10]/10 bg-[#FAF9F6] p-8 dark:border-white/10 dark:bg-[#0D0D0E] lg:p-10">
                <Quote className="h-6 w-6 text-[#C8102E]" />
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-[#0F0F10]/85 dark:text-white/85 lg:text-[16.5px]">
                  &ldquo;{t(`mission.quots.${i}`)}&rdquo;
                </p>
                <footer className="mt-7 border-t border-[#0F0F10]/10 pt-5 dark:border-white/10">
                  <p className="text-[14px] font-semibold">{t(`mission.author.${i}`)}</p>
                  <p className="mt-0.5 text-[11.5px] uppercase tracking-[0.2em] text-[#D4AF37]">
                    {t(`mission.job.${i}`).trim()}
                  </p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ────────────────────────────────────────────────── */

function CTA({ t }: { t: ReturnType<typeof useTranslations> }) {
  const liKeys = ["cta.li", "cta.li2", "cta.li3"];
  return (
    <section className="px-5 pb-24 pt-12 lg:px-10 lg:pb-32">
      <FadeIn>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0F0F10] p-12 text-white dark:bg-[#141416] lg:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#C8102E]/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#C8102E]/15 blur-[120px]" />
          <div className="relative">
            <Sparkles className="h-7 w-7 text-[#C8102E]" />
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("cta.title")}
            </p>
            <h2
              className="mt-3 max-w-3xl font-light leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
            >
              {t("cta.header")}
            </h2>
            <ul className="mt-8 space-y-2.5 text-[14px] text-white/80">
              {liKeys.map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" />
                  {t(k)}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]"
              >
                {t("cta.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-[#C8102E]"
              >
                {t("cta.button2")} →
              </Link>
            </div>
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
