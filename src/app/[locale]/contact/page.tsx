/**
 * Contact page — rebuilt 2026 to match new design system.
 *
 * Was a 5-line passthrough into ContactForm. Now a proper page
 * with a hero, contact info grid (email / response time / location),
 * and the existing ContactForm component preserved below — no
 * regression on the form behavior, just real chrome around it.
 */
"use client";

import React from "react";
import { motion } from "motion/react";
import { Mail, Clock, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import ContactForm from "@/MyComponents/contact-form";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} />
      <InfoStrip />
      <FormSection t={t} />
      <PromiseBand />
    </main>
  );
}

function Hero({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-20 lg:px-10 lg:pb-16 lg:pt-28">
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
          Let's build <em className="font-normal italic text-[#C8102E]">together.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[18px]"
        >
          {t("desc")}
        </motion.p>
      </div>
    </section>
  );
}

function InfoStrip() {
  const info = [
    { Icon: Mail, label: "Email", value: "unfold@codewithali.com", href: "mailto:unfold@codewithali.com" },
    { Icon: Clock, label: "Response time", value: "Within 24 hours", href: null },
    { Icon: MapPin, label: "Serving", value: "Clients worldwide", href: null },
  ];

  return (
    <section className="border-y border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-12 dark:border-white/10 dark:bg-white/[0.02] lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {info.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-start gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8102E]/40 text-[#C8102E]">
              <item.Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-1 inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[#C8102E]"
                >
                  {item.value}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <p className="mt-1 text-[15px] font-medium">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FormSection({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            {t("badge")}
          </p>
          <h2
            className="font-light leading-[1.05] tracking-[-0.01em]"
            style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
          >
            {t("header")}
          </h2>
        </div>

        {/* The actual form — ContactForm behavior preserved */}
        <div className="rounded-3xl border border-[#0F0F10]/10 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] dark:border-white/10 dark:bg-[#0D0D0E] lg:p-12">
          <ContactForm
            scrollToTop={false}
            badge=""
            header=""
            btnText={t("submitbtn")}
          />
        </div>
      </motion.div>
    </section>
  );
}

function PromiseBand() {
  const promises = [
    { title: "Free consultation", body: "Fifteen minutes, no slides, no sales pitch. Tell us your goal, we'll tell you what's realistic." },
    { title: "Reply in 24 hours", body: "Always, even on weekends. A real person, not a templated auto-response." },
    { title: "Fixed scope, fixed price", body: "After the consultation you get a written quote. The number doesn't move mid-project." },
  ];
  return (
    <section className="px-5 pb-24 pt-8 lg:px-10 lg:pb-32">
      <FadeIn>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0F0F10] p-12 text-white dark:bg-[#141416] lg:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#C8102E]/25 blur-[120px]" />
          <div className="relative">
            <Sparkles className="h-7 w-7 text-[#C8102E]" />
            <h2
              className="mt-6 font-light leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              What you can expect from us.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {promises.map((p, i) => (
                <div key={p.title} className="border-t border-white/15 pt-5">
                  <p className="font-light tabular-nums text-[#C8102E]" style={{ fontSize: "32px" }}>
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 text-[18px] font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70">{p.body}</p>
                </div>
              ))}
            </div>
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
