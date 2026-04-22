"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, Hammer, HardHat, Building, Wrench, Shield, Clock, TrendingUp,
} from "lucide-react";
import { FadeIn } from "../_shared/PageTransition";

export default function ConstructionHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-sm bg-[#F2B705] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1A1B1F]"
          >
            <HardHat className="h-3 w-3" /> Est. 1987 · Licensed · Bonded
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-black leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(52px, 10vw, 148px)" }}
          >
            WE PUT THE STEEL<br />
            <span className="text-[#F2B705]">IN YOUR BUILDING.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#F4F4F5]/70 lg:text-[18px]"
          >
            Commercial construction, interior build-outs, and tenant improvements for the
            firms that take their space seriously. Forty years in the Austin metro. Every project
            on time or free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link href="/templates/construction/checkout" className="inline-flex items-center gap-2 rounded-sm bg-[#F2B705] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#1A1B1F] transition-colors hover:bg-[#FFD240]">
              Request quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/templates/construction/projects" className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/5">
              See our work
            </Link>
          </motion.div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-10 lg:grid-cols-4">
            <Stat value="237" label="Projects delivered" />
            <Stat value="$640M" label="In contracts 2020–2025" />
            <Stat value="0" label="Lost-time injuries last 18 mo" />
            <Stat value="94%" label="On-time or early delivery" />
          </div>
        </div>

        {/* Hazard-stripe corner */}
        <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-40 lg:h-40 lg:w-40"
          style={{ background: "repeating-linear-gradient(-45deg, #F2B705 0, #F2B705 14px, #1A1B1F 14px, #1A1B1F 28px)" }}
        />
      </section>

      {/* Services */}
      <section className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#F2B705]">Services</p>
                <h2 className="text-[40px] font-black leading-[1.0] tracking-tight lg:text-[72px]">
                  FOUR AREAS.<br />ONE CREW.
                </h2>
              </div>
              <Link href="/templates/construction/services" className="hidden items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#F2B705] md:inline-flex">
                Full list <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {[
              { Icon: Building, title: "Ground-up commercial", body: "Office, retail, industrial. Design-build and design-bid-build. $2M to $80M budgets." },
              { Icon: Hammer, title: "Tenant improvements", body: "Gut-to-studs build-outs for leased commercial space. Typical 45-day turnaround." },
              { Icon: Wrench, title: "Renovations & additions", body: "Structural, mechanical, façade, site work. For occupied and unoccupied properties." },
              { Icon: HardHat, title: "Specialty & civil", body: "Parking structures, site utilities, hardscape. Integrated with building projects or standalone." },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="group h-full bg-[#1A1B1F] p-10 transition-colors hover:bg-[#22242A] lg:p-14">
                  <s.Icon className="h-7 w-7 text-[#F2B705]" />
                  <h3 className="mt-6 text-[26px] font-black tracking-tight lg:text-[32px]">{s.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#F2B705]">Recent</p>
                <h2 className="text-[40px] font-black leading-[1.0] tracking-tight lg:text-[72px]">
                  ON THE GROUND.
                </h2>
              </div>
              <Link href="/templates/construction/projects" className="hidden items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#F2B705] md:inline-flex">
                All projects <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.06}>
                <article className="group overflow-hidden rounded-sm border border-white/10">
                  <div
                    className="relative aspect-[4/3] bg-gradient-to-br from-[#3E4248] to-[#0F1012] transition-transform duration-700 group-hover:scale-[1.02]"
                  >
                    <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 400 300" preserveAspectRatio="none">
                      <path d="M20 280 L 80 280 L 80 140 L 140 140 L 140 280 L 200 280 L 200 80 L 260 80 L 260 280 L 320 280 L 320 180 L 380 180 L 380 280" fill="none" stroke="#F2B705" strokeWidth="2" />
                      <rect x="340" y="30" width="40" height="4" fill="#F2B705" />
                    </svg>
                    <span className="absolute left-4 top-4 rounded-sm bg-[#F2B705] px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.22em] text-[#1A1B1F]">
                      {p.year}
                    </span>
                  </div>
                  <div className="bg-[#22242A] p-6">
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#F2B705]">{p.type}</p>
                    <h3 className="mt-2 text-[20px] font-black leading-tight">{p.name}</h3>
                    <p className="mt-2 text-[13px] text-white/65">{p.detail}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="border-y border-white/10 bg-[#0F1012] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            { Icon: Shield, title: "Licensed, bonded, insured", body: "General contractor license #TX-C-8821. $10M general liability, $5M builders risk." },
            { Icon: Clock, title: "On-time or free", body: "If we miss the completion date in our contract for reasons within our control, the final week is on us." },
            { Icon: TrendingUp, title: "Open-book accounting", body: "Every change order itemized. Subcontractor invoices available on request. No pad." },
          ].map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div>
                <p.Icon className="h-7 w-7 text-[#F2B705]" />
                <h3 className="mt-5 text-[20px] font-black tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-5xl rounded-sm bg-[#F2B705] p-10 text-[#1A1B1F] lg:p-16">
            <h2 className="text-[36px] font-black leading-[1.0] tracking-tight lg:text-[64px]">
              GET A QUOTE.<br />IN UNDER 48 HOURS.
            </h2>
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed lg:text-[16px]">
              Deposit holds your spot in our schedule. Refundable if we don't come back
              with a quote you accept.
            </p>
            <Link href="/templates/construction/checkout" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#1A1B1F] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#F2B705]">
              Start the quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

const PROJECTS = [
  { name: "Meridian Tower", type: "Office · Ground-up", year: "2025", detail: "240,000 sqft Class-A office · downtown Austin · $62M" },
  { name: "Fielder Distribution", type: "Industrial · Shell", year: "2024", detail: "180,000 sqft warehouse · Pflugerville · $18M" },
  { name: "Harrow Surgery Center", type: "Medical · TI", year: "2024", detail: "32,000 sqft interior build-out · North Austin · $11M" },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[34px] font-black tracking-tight text-[#F2B705] lg:text-[48px]">{value}</p>
      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">{label}</p>
    </div>
  );
}
