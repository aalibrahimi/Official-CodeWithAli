/**
 * Services main page — rewritten 2026.
 *
 * Same design language as homepage/about. Six services with
 * bespoke abstract SVG marks (the same marks used on the
 * homepage grid), detailed capability lists per service, and
 * a four-step approach band.
 */
"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Serv");
  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} />
      <ServiceCatalog t={t} />
      <Approach t={t} />
      <CTA t={t} />
    </main>
  );
}

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
          {t("Header")}
          <br />
          <em className="font-normal italic text-[#C8102E]">{t("Subheader").trim()}</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-10 max-w-2xl text-[16px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[18px]"
        >
          {t("Subdesc").trim()}
        </motion.p>
      </div>
    </section>
  );
}

function ServiceCatalog({ t }: { t: ReturnType<typeof useTranslations> }) {
  const services = [
    { n: 1, url: "/services/web-development", feats: "first", Mark: MarkWeb },
    { n: 2, url: "/services/mobile-app-development", feats: "second", Mark: MarkMobile },
    { n: 3, url: "/services/UI/UX-Design", feats: "third", Mark: MarkDesign },
    { n: 4, url: "/services/E-Commerse", feats: "fourth", Mark: MarkCommerce },
    { n: 5, url: "/services/seo-optimization", feats: "fifth", Mark: MarkSEO },
    { n: 6, url: "/services/Web-hosting", feats: "sixth", Mark: MarkHost },
  ];

  return (
    <section className="border-y border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-20">
        {services.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.03}>
            <article
              className={`grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Mark side */}
              <div className="flex items-center">
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-[#0F0F10] p-10 text-[#C8102E] dark:bg-[#141416]">
                  <div className="pointer-events-none absolute -top-10 -right-10 h-60 w-60 rounded-full bg-[#C8102E]/15 blur-[80px]" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-[60px]" />
                  <div className="relative h-full w-full">
                    <s.Mark />
                  </div>
                </div>
              </div>

              {/* Copy side */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                  Service · 0{s.n}
                </p>
                <h2
                  className="mt-4 font-light leading-[1.05] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
                >
                  {t(`Services.titleLinks.${s.n}`)}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[16.5px]">
                  {t(`Services.desc.${s.n}`).trim()}
                </p>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {[1, 2, 3, 4].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-[#0F0F10]/85 dark:text-white/85">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C8102E]" />
                      {t(`Services.features.${s.feats}.${f}`)}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.url}
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]"
                >
                  {t("Services.process.learn")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Approach({ t }: { t: ReturnType<typeof useTranslations> }) {
  const steps = [
    { n: 1, title: t("Services.process.1"), desc: t("Services.process.desc.1") },
    { n: 2, title: t("Services.process.2"), desc: t("Services.process.desc.2") },
    { n: 3, title: t("Services.process.3"), desc: t("Services.process.desc.3") },
    { n: 4, title: t("Services.process.4"), desc: t("Services.process.desc.4") },
  ];
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("Services.process.approach.badge")}
            </p>
            <h2
              className="font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
            >
              {t("Services.process.approach.title").trim()}
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("Services.process.approach.sub").trim()}
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.06}>
              <div className="border-t border-[#0F0F10]/15 pt-6 dark:border-white/15">
                <p className="font-light tabular-nums text-[#C8102E]" style={{ fontSize: "clamp(40px, 4.5vw, 56px)" }}>
                  0{s.n}
                </p>
                <h3 className="mt-4 text-[20px] font-semibold tracking-tight lg:text-[22px]">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">{s.desc.trim()}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ t }: { t: ReturnType<typeof useTranslations> }) {
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
              style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
            >
              {t("Services.cta.title").trim()}
            </h2>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/75 lg:text-[17px]">
              {t("Services.cta.header").trim()}
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]"
            >
              {t("Services.cta.button").trim()}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── Primitives + marks ───────────────────────────────────────── */

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

function MarkWeb() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="4" y="10" width="56" height="44" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <line x1="4" y1="22" x2="60" y2="22" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="10" cy="16" r="1" fill="currentColor" />
      <circle cx="14" cy="16" r="1" fill="currentColor" />
      <circle cx="18" cy="16" r="1" fill="currentColor" />
      <line x1="12" y1="34" x2="32" y2="34" stroke="currentColor" strokeWidth="1.2" />
      <line x1="12" y1="42" x2="24" y2="42" stroke="currentColor" strokeWidth="1.2" />
      <rect x="38" y="30" width="16" height="16" rx="1.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}
function MarkMobile() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="20" y="4" width="24" height="56" rx="4" stroke="currentColor" strokeWidth="1.2" />
      <line x1="30" y1="55" x2="34" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="24" y="12" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.2" />
      <line x1="24" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="33" x2="36" y2="33" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="46" r="4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
function MarkDesign() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <circle cx="22" cy="22" r="16" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="42" cy="42" r="16" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="32" r="6" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}
function MarkCommerce() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <path d="M12 16 L22 16 L28 44 L52 44 L56 24 L26 24" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="32" cy="52" r="3.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="48" cy="52" r="3.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="36" y="28" width="10" height="10" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}
function MarkSEO() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <circle cx="26" cy="26" r="16" stroke="currentColor" strokeWidth="1.2" />
      <line x1="38" y1="38" x2="54" y2="54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 26 L26 34 L36 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MarkHost() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full w-full">
      <rect x="8" y="14" width="48" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="28" width="48" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="42" width="48" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14" cy="20" r="1.5" fill="currentColor" />
      <circle cx="14" cy="34" r="1.5" fill="currentColor" />
      <circle cx="14" cy="48" r="1.5" fill="currentColor" />
    </svg>
  );
}
