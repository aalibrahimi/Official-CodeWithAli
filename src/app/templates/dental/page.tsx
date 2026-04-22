/**
 * Dental home page — hero, trust band, service cards, provider
 * preview, patient stories, FAQ, CTA.
 */
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Sparkles, Shield, Clock, Star, ArrowRight, Stethoscope,
  Zap, Heart, Award, Calendar,
} from "lucide-react";
import { FadeIn } from "../_shared/PageTransition";

export default function DentalHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FAFB] to-white px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0EA5B7]/10 px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#0EA5B7]"
            >
              <Sparkles className="h-3 w-3" /> Now accepting new patients
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-[44px] font-semibold leading-[1.05] tracking-tight lg:text-[72px]"
            >
              Dentistry that respects
              <br />
              <span className="text-[#0EA5B7]">your time.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#0B3D4C]/70 lg:text-[17px]"
            >
              Same-day crowns. Single-appointment implants. Honest pricing before we pick up
              the drill. Everything a modern practice should be — nothing a waiting room
              ever was.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/templates/dental/checkout"
                className="inline-flex items-center gap-2 rounded-full bg-[#0EA5B7] px-7 py-4 text-[13.5px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_20px_40px_-12px_rgba(14,165,183,0.45)] transition-all hover:shadow-[0_30px_60px_-15px_rgba(14,165,183,0.6)]"
              >
                Book a visit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/templates/dental/services"
                className="text-[13.5px] font-semibold uppercase tracking-[0.16em] text-[#0B3D4C] transition-colors hover:text-[#0EA5B7]"
              >
                See what we do →
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 grid grid-cols-3 gap-6 border-t border-[#0EA5B7]/15 pt-8"
            >
              <Stat label="Patients served" value="14,000+" />
              <Stat label="Average rating" value="4.97 / 5" />
              <Stat label="Avg. visit time" value="38 min" />
            </motion.div>
          </div>

          {/* Hero visual — abstract clinic card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-[#0EA5B7]/10"
            style={{
              background:
                "linear-gradient(160deg, #CFF3F7 0%, #E8FAFD 45%, #FFFFFF 100%)",
            }}
          >
            <div className="absolute inset-0 p-10">
              {/* Floating metric card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute right-6 top-6 rounded-2xl border border-[#0EA5B7]/15 bg-white/90 p-4 shadow-xl backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0EA5B7]/15 text-[#0EA5B7]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B3D4C]/55">Next available</p>
                    <p className="text-[15px] font-semibold tracking-tight">Thursday · 2:15 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom trust pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="absolute bottom-8 left-8 right-8 rounded-2xl border border-[#0EA5B7]/15 bg-white/90 p-5 shadow-xl backdrop-blur"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0B3D4C]/55">
                  Accredited by
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#0B3D4C]/75">
                  <span className="rounded-full bg-[#F0FAFB] px-3 py-1.5">ADA</span>
                  <span className="rounded-full bg-[#F0FAFB] px-3 py-1.5">AAID</span>
                  <span className="rounded-full bg-[#F0FAFB] px-3 py-1.5">State Board</span>
                  <span className="rounded-full bg-[#F0FAFB] px-3 py-1.5">OSHA</span>
                </div>
              </motion.div>

              {/* Abstract wave */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" preserveAspectRatio="none">
                <path d="M0 350 Q 100 280 200 320 T 400 300" stroke="#0EA5B7" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
                <path d="M0 370 Q 100 300 200 340 T 400 320" stroke="#0EA5B7" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
                <circle cx="80" cy="140" r="6" fill="#0EA5B7" fillOpacity="0.2" />
                <circle cx="340" cy="230" r="4" fill="#0EA5B7" fillOpacity="0.3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service overview */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.28em] text-[#0EA5B7]">
                  Services
                </p>
                <h2 className="max-w-xl text-[36px] font-semibold leading-[1.1] tracking-tight lg:text-[52px]">
                  Most of what you need in one visit.
                </h2>
              </div>
              <Link
                href="/templates/dental/services"
                className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#0B3D4C] hover:text-[#0EA5B7]"
              >
                Full list <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Stethoscope, title: "Preventive care", body: "Cleanings, exams, oral cancer screening." },
              { Icon: Zap, title: "Same-day crowns", body: "Milled in-house. In and out before lunch." },
              { Icon: Heart, title: "Cosmetic", body: "Veneers, whitening, bonding — tastefully done." },
              { Icon: Award, title: "Implants", body: "Single-appointment placement for eligible patients." },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-[#0EA5B7]/12 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#0EA5B7]/30 hover:shadow-[0_25px_50px_-20px_rgba(14,165,183,0.3)]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0EA5B7]/10 text-[#0EA5B7]">
                    <s.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#0B3D4C]/65">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance band */}
      <section className="bg-[#0B3D4C] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3 md:gap-6">
          {[
            { Icon: Shield, title: "Transparent pricing", body: "Every treatment quoted before we start — no surprise invoices." },
            { Icon: Clock, title: "Respectful of time", body: "If we can't see you on time, your visit is free. Full stop." },
            { Icon: Star, title: "Long-term relationship", body: "Same team, same chair, for years. Your history stays with your dentist." },
          ].map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0EA5B7]/20 text-[#CFF3F7]">
                  <p.Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70">{p.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Providers preview */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.28em] text-[#0EA5B7]">
                  Meet your team
                </p>
                <h2 className="max-w-xl text-[36px] font-semibold leading-[1.1] tracking-tight lg:text-[52px]">
                  The dentists actually work here.
                </h2>
              </div>
              <Link
                href="/templates/dental/providers"
                className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#0B3D4C] hover:text-[#0EA5B7]"
              >
                All providers <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: "Dr. Maya Patel, DDS", role: "Cosmetic & implants", years: "14 yrs" },
              { name: "Dr. Jordan Okafor, DMD", role: "General & preventive", years: "9 yrs" },
              { name: "Dr. Lina Park, DDS", role: "Pediatric & family", years: "11 yrs" },
            ].map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-[#0EA5B7]/15">
                  <div
                    className="flex aspect-[4/5] items-end p-6 text-white"
                    style={{
                      background: `linear-gradient(180deg, #CFF3F7 0%, #0EA5B7 100%)`,
                    }}
                  >
                    <div>
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/75">{p.years} experience</p>
                      <h3 className="mt-2 text-[22px] font-semibold leading-tight">{p.name}</h3>
                      <p className="mt-1 text-[13.5px] text-white/80">{p.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Patient stories */}
      <section className="bg-[#F0FAFB] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-3 text-center text-[11.5px] font-semibold uppercase tracking-[0.28em] text-[#0EA5B7]">
              What patients say
            </p>
            <h2 className="mx-auto max-w-2xl text-center text-[36px] font-semibold leading-[1.1] tracking-tight lg:text-[52px]">
              &ldquo;I actually look forward to the cleaning.&rdquo;
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              { quote: "Booked online at 11 PM, in the chair at 10 AM. My old dentist would have taken three weeks.", name: "Priya R.", tag: "New patient" },
              { quote: "They walked me through every cost before I sat down. No surprise bills, ever.", name: "Marcus L.", tag: "3 years" },
              { quote: "My kids don't flinch when I say we're going to the dentist. I don't know how they did it.", name: "Daniel W.", tag: "Family of four" },
            ].map((q, i) => (
              <FadeIn key={q.name} delay={i * 0.08}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-[#0EA5B7]/15 bg-white p-6">
                  <div className="flex gap-0.5 text-[#0EA5B7]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-[#0B3D4C]/85">&ldquo;{q.quote}&rdquo;</p>
                  <footer className="mt-5 border-t border-[#0EA5B7]/10 pt-4">
                    <p className="text-[13px] font-semibold">{q.name}</p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#0B3D4C]/55">{q.tag}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <FadeIn>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0EA5B7] to-[#0B3D4C] p-10 text-white lg:p-16">
            <div className="relative z-10">
              <Calendar className="mb-5 h-8 w-8 opacity-70" />
              <h2 className="max-w-2xl text-[36px] font-semibold leading-[1.1] tracking-tight lg:text-[56px]">
                Book in sixty seconds.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/80 lg:text-[16px]">
                Pick a time, drop a $75 deposit that credits to your visit, and
                we'll send a confirmation with prep instructions.
              </p>
              <Link
                href="/templates/dental/checkout"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[13.5px] font-semibold uppercase tracking-[0.16em] text-[#0B3D4C] transition-all hover:bg-[#F0FAFB]"
              >
                Book my visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          </div>
        </FadeIn>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[22px] font-semibold tracking-tight lg:text-[28px]">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#0B3D4C]/55">{label}</p>
    </div>
  );
}
