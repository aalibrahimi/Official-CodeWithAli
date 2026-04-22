"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Scale, Shield, FileText, Building2 } from "lucide-react";
import { FadeIn } from "../_shared/PageTransition";

export default function LawHome() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-[#0B2447]/65">
              Whitmore &amp; Hale LLP · Est. 2004 · New York
            </p>
            <h1 className="max-w-5xl text-[52px] font-normal leading-[1.0] tracking-tight lg:text-[110px]">
              Counsel for companies<br />
              <em className="italic text-[#0B2447]/75">that build things.</em>
            </h1>
            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5">
              <Link
                href="/templates/law/checkout"
                className="inline-flex items-center gap-2 rounded-sm bg-[#0B2447] px-7 py-4 text-[12.5px] uppercase tracking-[0.22em] text-[#F7F5F0] transition-colors hover:bg-[#0B2447]/90"
              >
                Retain counsel <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/templates/law/practice-areas"
                className="border-b border-[#0B2447] pb-1 text-[13px] uppercase tracking-[0.22em]"
              >
                Practice areas →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-[#0B2447]/15 bg-[#0B2447] py-10 text-[#F7F5F0]">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap text-[20px] uppercase tracking-[0.35em] lg:text-[24px]"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              <span>M&amp;A</span> <span>✦</span>
              <span>Litigation</span> <span>✦</span>
              <span>Employment</span> <span>✦</span>
              <span>Venture</span> <span>✦</span>
              <span>Intellectual Property</span> <span>✦</span>
              <span>Data &amp; privacy</span> <span>✦</span>
              <span>Commercial</span> <span>✦</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Intro copy */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="text-[24px] font-normal leading-[1.5] lg:text-[32px]">
              We represent engineering-led companies, from first seed to public
              listing, in the legal work that matters at each stage — and the
              legal work that matters most after something goes wrong. Our partners
              have tried cases at every federal bench from the Southern District of
              New York to the Ninth Circuit. Our transactional side has closed
              over <span className="italic">$18B</span> in M&amp;A.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Practice */}
      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[11.5px] uppercase tracking-[0.35em] text-[#0B2447]/65">
                  Practice
                </p>
                <h2 className="text-[44px] leading-[1.05] lg:text-[64px]">Four disciplines.</h2>
              </div>
              <Link
                href="/templates/law/practice-areas"
                className="border-b border-[#0B2447] pb-1 text-[12px] uppercase tracking-[0.22em]"
              >
                All areas →
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-px bg-[#0B2447]/15 md:grid-cols-2">
            {[
              { Icon: Building2, title: "Corporate & M&A", body: "Founding documents, financing rounds, scheduled exits, post-close disputes. From the Series A to the LOI." },
              { Icon: Scale, title: "Litigation & disputes", body: "Complex commercial litigation in state, federal, and arbitral forums. We try the cases that need trying." },
              { Icon: Shield, title: "Employment & benefits", body: "Stock plans, executive terms, separations, investigations. The kind of advice you want before something goes wrong." },
              { Icon: FileText, title: "Intellectual property", body: "Patent portfolios, trademark prosecution, trade secret protection, IP-driven licensing and M&A." },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="group h-full bg-white p-10 transition-colors hover:bg-[#F7F5F0] lg:p-14">
                  <p.Icon className="h-7 w-7 text-[#0B2447] opacity-60" />
                  <h3 className="mt-6 text-[28px] font-normal tracking-tight lg:text-[34px]">{p.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#0B2447]/75">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-4 text-[11.5px] uppercase tracking-[0.35em] text-[#0B2447]/65">Representative matters</p>
            <h2 className="max-w-3xl text-[44px] leading-[1.05] lg:text-[64px]">
              A few of the cases we've <em className="italic">closed.</em>
            </h2>
          </FadeIn>

          <div className="mt-14 space-y-px">
            {[
              { yr: "2024", head: "$2.1B acquisition of Helios Robotics", body: "Lead buy-side counsel on a contested cross-border transaction involving three regulatory regimes and a month-long exclusivity sprint." },
              { yr: "2023", head: "Patent trial · E.D. Texas", body: "Obtained defense verdict on all four asserted claims after a two-week jury trial in a $410M patent infringement action." },
              { yr: "2023", head: "Series E · $340M", body: "Represented the company in a priced round led by Sequoia Heritage with participation from Tiger Global, ICONIQ, and six existing investors." },
              { yr: "2022", head: "Executive departure · confidential", body: "Negotiated separation package and non-disparagement framework on behalf of a C-suite client leaving a publicly-traded company." },
            ].map((c, i) => (
              <FadeIn key={c.head} delay={i * 0.04}>
                <article className="group grid grid-cols-[80px_1fr] items-start gap-6 border-b border-[#0B2447]/20 py-8 transition-colors hover:bg-white lg:grid-cols-[120px_1fr] lg:py-10">
                  <span className="text-[13px] uppercase tracking-[0.22em] text-[#0B2447]/55">{c.yr}</span>
                  <div>
                    <h3 className="text-[26px] font-normal leading-tight lg:text-[34px]">{c.head}</h3>
                    <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-[#0B2447]/75 lg:text-[16px]">{c.body}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B2447] px-6 py-24 text-[#F7F5F0] lg:px-10 lg:py-32">
        <FadeIn>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-[48px] leading-[1.05] lg:text-[80px]">
              A conversation is a <em className="italic">conflict check,</em> not a commitment.
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-[#F7F5F0]/75 lg:text-[17px]">
              Fifteen-minute initial call. We either take the matter, refer you
              to firms who should, or tell you plainly you don't need a lawyer yet.
            </p>
            <Link
              href="/templates/law/checkout"
              className="mt-12 inline-flex items-center gap-2 rounded-sm border border-[#F7F5F0]/40 px-7 py-4 text-[12.5px] uppercase tracking-[0.22em]"
            >
              Schedule the call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
