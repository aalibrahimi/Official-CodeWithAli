/**
 * codewithali.com — homepage v2.
 *
 * Design language (Path B rework, 2026):
 *   · Dark-first. Light mode is a toggle, not the default.
 *   · Red is punctuation, not atmosphere. No gradient text, no
 *     gradient buttons, no gradient-washed backgrounds. Red appears
 *     on exactly one CTA, hover underlines, and the logo moment.
 *   · Typography carries the design. Display sizes range from 48px
 *     mobile to ~120px desktop via clamp. Weight 300 for display,
 *     500 for body, 600 for labels. Italic serif used sparingly for
 *     emphasis (matches the template demos).
 *   · Hero leads with the /templates picker — the 8 industry demos
 *     are our strongest differentiator, so they belong at the top
 *     rather than buried at the bottom of the portfolio.
 *   · Stats band, real testimonial grid (no carousel), bespoke
 *     SVG marks on services instead of Lucide-in-a-colored-box.
 */
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowLeft, Code, Palette, ShoppingBag, Server, Search, Smartphone,
  Mail, Quote, Sparkles, CheckCircle2, MoveUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { Link } from "@/i18n/navigation";
import { TEMPLATES } from "@/app/templates/_shared/templates";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);
  const Chevron = isRTL ? ArrowLeft : ArrowRight;

  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} Chevron={Chevron} />
      <StatsBand t={t} />
      <IndustryDemos />
      <Services t={t} />
      <Portfolio t={t} Chevron={Chevron} />
      <Process t={t} />
      <Testimonials t={t} />
      <FinalCTA t={t} Chevron={Chevron} />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */

function Hero({ t, Chevron }: { t: ReturnType<typeof useTranslations>; Chevron: typeof ArrowRight }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
      {/* Single subtle red glow — the whole "red gradient wash" replaced by a single focal moment. */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[800px] rounded-full bg-[#C8102E]/15 blur-[140px] dark:bg-[#C8102E]/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0F0F10]/15 bg-[#0F0F10]/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F0F10]/70 dark:border-white/15 dark:bg-white/5 dark:text-white/75"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
          CodeWithAli · Web engineering studio
        </motion.div>

        {/* Display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-light leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(44px, 9vw, 128px)" }}
        >
          {t("hero.title.part1")}<br />
          <em className="font-normal italic text-[#C8102E]">{t("hero.title.part2")}</em>
        </motion.h1>

        {/* Subhead + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end lg:mt-14"
        >
          <p className="max-w-xl text-[16px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[19px]">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-[#C8102E] px-7 py-6 text-[13.5px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]"
              >
                {t("hero.buttons.startProject")}
                <Chevron className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0F0F10]/80 transition-colors hover:text-[#C8102E] dark:text-white/80 dark:hover:text-[#C8102E]"
            >
              {t("hero.buttons.viewWork")}
              <MoveUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Stats band ───────────────────────────────────────────────── */

function StatsBand({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <section className="border-y border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-12 dark:border-white/10 dark:bg-white/[0.02] lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 md:grid-cols-4">
        {[
          { v: "23+", l: "sites shipped" },
          { v: "4", l: "countries served" },
          { v: "18d", l: "avg. turnaround" },
          { v: "4.9★", l: "client rating" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="text-center md:text-left"
          >
            <p
              className="font-light leading-none tracking-tight text-[#C8102E]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {s.v}
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F0F10]/55 dark:text-white/55">
              {s.l}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Industry demos picker (the /templates showcase) ──────────── */

function IndustryDemos() {
  const [active, setActive] = useState(TEMPLATES[0].slug);
  const current = TEMPLATES.find((t) => t.slug === active)!;

  return (
    <section className="px-5 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              Pick your industry
            </p>
            <h2
              className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
            >
              See your site before we<br />
              <em className="italic text-[#C8102E]">build a single line.</em>
            </h2>
          </div>
          <Link
            href="/templates"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0F0F10]/70 hover:text-[#C8102E] dark:text-white/70 dark:hover:text-[#C8102E]"
          >
            Browse all 8 templates
            <MoveUpRight className="h-3 w-3" />
          </Link>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Industry pills */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap gap-2">
              {TEMPLATES.map((t) => {
                const isActive = t.slug === active;
                return (
                  <button
                    key={t.slug}
                    type="button"
                    onClick={() => setActive(t.slug)}
                    className="group relative rounded-full border px-4 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] transition-all"
                    style={{
                      borderColor: isActive ? t.accent : "rgba(0,0,0,0.12)",
                      background: isActive ? t.accent : "transparent",
                      color: isActive ? "#FFFFFF" : undefined,
                    }}
                  >
                    <span className="relative">{t.industry.split(" / ")[0]}</span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={current.slug + "-desc"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0F0F10]/55 dark:text-white/55">
                {current.industry}
              </p>
              <h3
                className="mt-3 font-light leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                {current.brandName}
              </h3>
              <p className="mt-3 max-w-md text-[14.5px] italic leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                &ldquo;{current.tagline}&rdquo;
              </p>
              <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-[#0F0F10]/75 dark:text-white/75">
                {current.blurb}
              </p>
              <Link
                href={`/templates/${current.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white transition-all"
                style={{ background: current.accent }}
              >
                Walk the demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Live preview panel */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug + "-preview"}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${current.accent} 0%, ${shade(current.accent, -30)} 100%)`,
                }}
              >
                <PreviewGraphic slug={current.slug} />
                <div className="absolute inset-0 flex items-end p-8 text-white lg:p-10">
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-white/75">
                      Interactive demo
                    </p>
                    <p
                      className="mt-2 font-semibold leading-tight"
                      style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                    >
                      {current.brandName}
                    </p>
                  </div>
                </div>
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                  <MoveUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─────────────────────────────────────────────────── */

function Services({ t }: { t: ReturnType<typeof useTranslations> }) {
  const services = [
    { key: 1, Icon: Code,      url: "/services/web-development", Mark: MarkWeb },
    { key: 2, Icon: Smartphone, url: "/services/mobile-app-development", Mark: MarkMobile },
    { key: 3, Icon: Palette,   url: "/services/UI/UX-Design", Mark: MarkDesign },
    { key: 4, Icon: ShoppingBag, url: "/services/E-Commerse", Mark: MarkCommerce },
    { key: 5, Icon: Search,    url: "/services/seo-optimization", Mark: MarkSEO },
    { key: 6, Icon: Server,    url: "/services/Web-hosting", Mark: MarkHost },
  ];

  return (
    <section id="services" className="border-t border-[#0F0F10]/10 bg-[#FAF9F6] px-5 py-24 dark:border-white/10 dark:bg-[#0D0D0E] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                {t("services.badge")}
              </p>
              <h2
                className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
              >
                {t("services.title")}
              </h2>
            </div>
            <p className="max-w-md text-[14.5px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
              {t("services.description")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-px bg-[#0F0F10]/12 dark:bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.key} delay={i * 0.04}>
              <Link href={s.url} className="group relative flex h-full flex-col justify-between bg-[#FAF9F6] p-8 transition-colors hover:bg-white dark:bg-[#0D0D0E] dark:hover:bg-[#121214] lg:p-10">
                <div>
                  <div className="h-16 w-16 text-[#C8102E]">
                    <s.Mark />
                  </div>
                  <h3 className="mt-6 text-[22px] font-semibold tracking-tight lg:text-[26px]">
                    {t(`services.items.${s.key}.title`)}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
                    {t(`services.items.${s.key}.description`)}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0F0F10]/70 transition-all group-hover:gap-3 group-hover:text-[#C8102E] dark:text-white/70 dark:group-hover:text-[#C8102E]">
                  {t("services.learnMore")}
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio ────────────────────────────────────────────────── */

function Portfolio({ t, Chevron }: { t: ReturnType<typeof useTranslations>; Chevron: typeof ArrowRight }) {
  const projects = [
    { title: "Knoz Al-Najah", category: "Web · E-commerce", image: "/knoz_website.png", url: "https://knoz.codewithali.com/" },
    { title: "Budgetary App", category: "Desktop · Finance", image: "/budgetary.png", url: "https://budgetary.codewithali.com/" },
    { title: "Mario's Hauling", category: "Web · Services", image: "/marioshauling_website.png", url: "https://marioshauling.codewithali.com/" },
  ];

  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                {t("portfolio.badge")}
              </p>
              <h2
                className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
              >
                {t("portfolio.title")}
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0F0F10]/70 hover:text-[#C8102E] dark:text-white/70 dark:hover:text-[#C8102E]"
            >
              All projects <MoveUpRight className="h-3 w-3" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <a href={p.url} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-[#0F0F10]/10 transition-all hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-[0_30px_60px_-20px_rgba(200,16,46,0.3)] dark:border-white/10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EFEA] dark:bg-white/5">
                  <Image
                    src={p.image}
                    alt={p.title}
                    height={1000}
                    width={1000}
                    quality={95}
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">{p.category}</p>
                  <h3 className="mt-2 text-[20px] font-semibold tracking-tight">{p.title}</h3>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[#0F0F10]/15 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#0F0F10] hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/20 dark:text-white dark:hover:text-[#C8102E]"
          >
            {t("portfolio.viewAllProjects")} <Chevron className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Process ──────────────────────────────────────────────────── */

function Process({ t }: { t: ReturnType<typeof useTranslations> }) {
  const steps = [1, 2, 3, 4];
  return (
    <section id="process" className="border-t border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
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
              {t("process.title")}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("process.description")}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((n, i) => (
            <FadeIn key={n} delay={i * 0.06}>
              <div className="border-t border-[#0F0F10]/15 pt-6 dark:border-white/15">
                <p className="font-light tabular-nums text-[#C8102E]" style={{ fontSize: "clamp(40px, 4.5vw, 56px)" }}>
                  0{n}
                </p>
                <h3 className="mt-4 text-[20px] font-semibold tracking-tight lg:text-[22px]">
                  {t(`process.steps.${n}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                  {t(`process.steps.${n}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials (grid, no carousel) ─────────────────────────── */

function Testimonials({ t }: { t: ReturnType<typeof useTranslations> }) {
  const items = [1, 2, 3];
  return (
    <section id="testimonials" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("testimonials.badge")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
            >
              {t("testimonials.title")}
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((i, idx) => (
            <FadeIn key={i} delay={idx * 0.06}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-[#0F0F10]/10 bg-[#FAF9F6] p-7 dark:border-white/10 dark:bg-[#0D0D0E] lg:p-9">
                <Quote className="h-6 w-6 text-[#C8102E]" />
                <p className="mt-5 flex-1 text-[15.5px] leading-relaxed text-[#0F0F10]/85 dark:text-white/85">
                  &ldquo;{t(`testimonials.items.${i}.content`)}&rdquo;
                </p>
                <footer className="mt-7 border-t border-[#0F0F10]/10 pt-5 dark:border-white/10">
                  <p className="text-[14px] font-semibold">{t(`testimonials.items.${i}.name`)}</p>
                  <p className="mt-0.5 text-[11.5px] uppercase tracking-[0.2em] text-[#0F0F10]/55 dark:text-white/55">
                    {t(`testimonials.items.${i}.position`)}
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

function FinalCTA({ t, Chevron }: { t: ReturnType<typeof useTranslations>; Chevron: typeof ArrowRight }) {
  return (
    <section className="px-5 pb-24 pt-10 lg:px-10 lg:pb-32">
      <FadeIn>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0F0F10] p-12 text-white dark:bg-[#141416] lg:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#C8102E]/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#C8102E]/15 blur-[120px]" />
          <div className="relative">
            <Sparkles className="h-7 w-7 text-[#C8102E]" />
            <h2
              className="mt-6 max-w-3xl font-light leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
            >
              {t("cta.title")}
            </h2>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/75 lg:text-[17px]">
              {t("cta.description")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full bg-[#C8102E] px-7 py-6 text-[13.5px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]"
                >
                  {t("cta.buttons.startProject")} <Chevron className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="mailto:unfold@codewithali.com"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-[#C8102E]"
              >
                <Mail className="h-4 w-4" /> unfold@codewithali.com
              </a>
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

/* ─── Bespoke SVG marks per service ────────────────────────────── */
// These replace the generic "Lucide-icon-in-a-colored-box" pattern.
// Each mark is a subtle abstract composition that reads as
// "something crafted, not stock." Kept monochromatic (currentColor)
// so they inherit from the parent's text color.

function MarkWeb() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="6" y="12" width="52" height="40" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="22" x2="58" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="17" r="1.2" fill="currentColor" />
      <circle cx="16" cy="17" r="1.2" fill="currentColor" />
      <circle cx="20" cy="17" r="1.2" fill="currentColor" />
      <line x1="14" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" />
      <line x1="14" y1="40" x2="26" y2="40" stroke="currentColor" strokeWidth="1.5" />
      <rect x="38" y="30" width="14" height="14" rx="2" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}
function MarkMobile() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="22" y="6" width="20" height="52" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="30" y1="53" x2="34" y2="53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="26" y="14" width="12" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
      <line x1="26" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="1.2" />
      <line x1="26" y1="33" x2="35" y2="33" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="44" r="3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function MarkDesign() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="5" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}
function MarkCommerce() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M14 18 L22 18 L28 42 L50 42 L54 24 L26 24" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="32" cy="50" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="46" cy="50" r="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="36" y="28" width="8" height="8" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}
function MarkSEO() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <circle cx="26" cy="26" r="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="36" y1="36" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 26 L26 32 L34 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MarkHost() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="10" y="16" width="44" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="28" width="44" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="40" width="44" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="21" r="1.5" fill="currentColor" />
      <circle cx="16" cy="33" r="1.5" fill="currentColor" />
      <circle cx="16" cy="45" r="1.5" fill="currentColor" />
    </svg>
  );
}

/* ─── Preview graphic (mirrors templates gallery) ──────────────── */

function PreviewGraphic({ slug }: { slug: string }) {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 400 300" preserveAspectRatio="none">
      {slug === "dental" && (<>
        <circle cx="320" cy="60" r="110" fill="white" fillOpacity="0.18" />
        <path d="M60 220 Q 200 120 340 220" stroke="white" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
      </>)}
      {slug === "restaurant" && (<>
        <rect x="30" y="40" width="340" height="2" fill="white" fillOpacity="0.4" />
        <text x="30" y="90" fontFamily="serif" fontSize="52" fill="white" opacity="0.35" fontStyle="italic">MAISON</text>
        <circle cx="330" cy="220" r="50" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      </>)}
      {slug === "law" && (<>
        <text x="30" y="110" fontFamily="serif" fontSize="92" fill="white" opacity="0.35" fontWeight="600">W&amp;H</text>
        <rect x="30" y="135" width="80" height="1.5" fill="white" opacity="0.6" />
      </>)}
      {slug === "real-estate" && (<>
        <polygon points="60,220 60,140 120,80 180,140 180,220" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
        <rect x="210" y="140" width="140" height="80" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      </>)}
      {slug === "fashion" && (<>
        <text x="30" y="200" fontFamily="sans-serif" fontSize="160" fill="white" opacity="0.25" fontWeight="800" letterSpacing="-8">NOIR</text>
        <rect x="30" y="230" width="340" height="1" fill="white" opacity="0.7" />
      </>)}
      {slug === "construction" && (<>
        <path d="M20 240 L 380 240 M 60 240 L 100 140 L 140 240 M 180 240 L 220 140 L 260 240 M 300 240 L 340 140 L 380 240" stroke="white" strokeWidth="2" strokeOpacity="0.45" fill="none" />
      </>)}
      {slug === "saas" && (<>
        <rect x="40" y="70" width="80" height="80" rx="12" fill="white" fillOpacity="0.22" />
        <rect x="140" y="100" width="80" height="80" rx="12" fill="white" fillOpacity="0.3" />
        <rect x="240" y="70" width="80" height="80" rx="12" fill="white" fillOpacity="0.22" />
      </>)}
      {slug === "boutique" && (<>
        <circle cx="200" cy="130" r="60" fill="none" stroke="white" strokeWidth="1.2" strokeOpacity="0.55" />
        <rect x="140" y="200" width="120" height="1" fill="white" opacity="0.6" />
        <text x="200" y="250" fontFamily="serif" fontSize="14" fill="white" opacity="0.5" textAnchor="middle" letterSpacing="4">ATELIER</text>
      </>)}
    </svg>
  );
}

/** Naive hex shade for the preview gradient. */
function shade(hex: string, percent: number): string {
  const h = hex.replace("#", "");
  const num = parseInt(h, 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.min(255, Math.max(0, (num >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amt));
  const b = Math.min(255, Math.max(0, (num & 0xff) + amt));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
