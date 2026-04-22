"use client";

import Link from "next/link";
import {
  Stethoscope, Zap, Heart, Award, Sparkles, Smile, Baby, Shield,
  ArrowRight, Check,
} from "lucide-react";
import { FadeIn } from "../../_shared/PageTransition";

const CATEGORIES = [
  {
    Icon: Stethoscope,
    title: "Preventive",
    tagline: "Keep the chair time short.",
    items: [
      { name: "Comprehensive exam + cleaning", price: 180, duration: "45 min" },
      { name: "Digital X-ray series", price: 95, duration: "12 min" },
      { name: "Fluoride + sealants", price: 60, duration: "15 min" },
      { name: "Oral cancer screening", price: 45, duration: "10 min" },
    ],
  },
  {
    Icon: Zap,
    title: "Restorative",
    tagline: "Fixed today, done today.",
    items: [
      { name: "Same-day CEREC crown", price: 1250, duration: "90 min" },
      { name: "Composite filling", price: 220, duration: "40 min" },
      { name: "Root canal (front tooth)", price: 950, duration: "60 min" },
      { name: "Night guard (custom)", price: 480, duration: "20 min" },
    ],
  },
  {
    Icon: Heart,
    title: "Cosmetic",
    tagline: "Quietly, tastefully better.",
    items: [
      { name: "Professional whitening", price: 420, duration: "60 min" },
      { name: "Porcelain veneer (per tooth)", price: 1350, duration: "varies" },
      { name: "Composite bonding", price: 320, duration: "45 min" },
      { name: "Invisalign consultation", price: 0, duration: "30 min" },
    ],
  },
  {
    Icon: Award,
    title: "Implants",
    tagline: "One visit, not three months.",
    items: [
      { name: "Single implant (placement + crown)", price: 3850, duration: "2 visits" },
      { name: "Full-arch consultation", price: 0, duration: "45 min" },
      { name: "Bone grafting", price: 650, duration: "45 min" },
      { name: "Implant-supported bridge", price: "Quoted", duration: "varies" },
    ],
  },
  {
    Icon: Baby,
    title: "Pediatric & family",
    tagline: "Kids who don't dread it.",
    items: [
      { name: "Child first visit", price: 140, duration: "30 min" },
      { name: "Sealants (per tooth)", price: 55, duration: "10 min" },
      { name: "Space maintainer", price: 320, duration: "25 min" },
      { name: "Family plan (4+ members)", price: "20% off", duration: "annual" },
    ],
  },
  {
    Icon: Smile,
    title: "Orthodontics",
    tagline: "Clear aligners, real plan.",
    items: [
      { name: "Invisalign · mild", price: 3200, duration: "6–9 mo" },
      { name: "Invisalign · moderate", price: 4800, duration: "12–18 mo" },
      { name: "Retainer (post-treatment)", price: 280, duration: "2 wks" },
      { name: "Teen Invisalign", price: 4400, duration: "12–18 mo" },
    ],
  },
];

export default function DentalServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F0FAFB] to-white px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.28em] text-[#0EA5B7]">
              Everything we offer
            </p>
            <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.05] tracking-tight lg:text-[68px]">
              Six categories. Transparent pricing. Same day when we can.
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#0B3D4C]/70">
              Prices shown are our standard out-of-pocket rates. Most insurance covers
              40–80% of preventive and restorative work — we check coverage before you
              book so you know the actual number.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-5">
          {CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.04}>
              <div className="overflow-hidden rounded-2xl border border-[#0EA5B7]/15 bg-white">
                <div className="grid gap-0 lg:grid-cols-[0.9fr_2.1fr]">
                  {/* Category header */}
                  <div className="bg-gradient-to-br from-[#CFF3F7] to-[#0EA5B7] p-8 text-white lg:p-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                      <cat.Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-[28px] font-semibold tracking-tight lg:text-[34px]">{cat.title}</h2>
                    <p className="mt-2 text-[14px] italic text-white/85">{cat.tagline}</p>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-[#0EA5B7]/10">
                    {cat.items.map((it) => (
                      <div
                        key={it.name}
                        className="flex items-center justify-between gap-6 p-6 transition-colors hover:bg-[#F0FAFB] lg:px-8"
                      >
                        <div className="min-w-0">
                          <p className="text-[15px] font-semibold">{it.name}</p>
                          <p className="mt-0.5 text-[12px] uppercase tracking-[0.18em] text-[#0B3D4C]/55">
                            {it.duration}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-[18px] font-semibold text-[#0EA5B7]">
                            {typeof it.price === "number" ? `$${it.price.toLocaleString()}` : it.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Insurance + promises */}
      <section className="bg-[#F0FAFB] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <FadeIn>
            <Shield className="h-8 w-8 text-[#0EA5B7]" />
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-tight lg:text-[44px]">
              Insurance isn't our obstacle course.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#0B3D4C]/70">
              We're in-network with Delta Dental, Cigna, Aetna, MetLife, and United Concordia.
              For everyone else, we file paperwork on your behalf and estimate your
              out-of-pocket in advance.
            </p>
            <Link
              href="/templates/dental/checkout"
              className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#0EA5B7] hover:text-[#0B3D4C]"
            >
              Verify coverage <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Sparkles className="h-8 w-8 text-[#0EA5B7]" />
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-tight lg:text-[44px]">
              Our standing promises.
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "If we run late, the visit is free.",
                "Every treatment quoted before we start.",
                "Second opinions, no pressure, ever.",
                "Financing through CareCredit for 0% up to 18 months.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5B7]" />
                  <span className="text-[14.5px] leading-relaxed text-[#0B3D4C]/85">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#0B3D4C] p-12 text-center text-white lg:p-16">
            <h2 className="text-[36px] font-semibold tracking-tight lg:text-[52px]">Ready?</h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] text-white/70">
              Pick a provider, pick a time. Your $75 deposit credits to the visit.
            </p>
            <Link
              href="/templates/dental/checkout"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0EA5B7] px-7 py-4 text-[13.5px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Book now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
