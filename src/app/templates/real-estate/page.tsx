"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Search, MapPin, Bed, Bath, Maximize, ArrowRight, TrendingUp, Home } from "lucide-react";
import { FadeIn } from "../_shared/PageTransition";

export default function RealEstateHome() {
  return (
    <>
      {/* Hero with search */}
      <section className="relative overflow-hidden bg-[#0F2A1D] px-6 pb-24 pt-20 text-white lg:px-10 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-6 text-[11.5px] font-semibold uppercase tracking-[0.3em] text-[#8FCFA6]">
              Meridian Properties · Since 1998
            </p>
            <h1 className="max-w-4xl text-[52px] font-light leading-[1.0] tracking-tight lg:text-[96px]">
              Homes that disappear<br />
              <span className="font-normal italic text-[#8FCFA6]">before the sign goes up.</span>
            </h1>
          </motion.div>

          {/* Search card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 max-w-4xl rounded-2xl bg-white p-6 shadow-2xl lg:p-8"
          >
            <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_1fr_auto]">
              <Field Icon={MapPin} label="Where" placeholder="Austin, Buda, Dripping Springs…" />
              <Field Icon={Home} label="Type" placeholder="Any" dropdown options={["Any", "House", "Condo", "Land"]} />
              <Field Icon={TrendingUp} label="Budget" placeholder="Up to $1.2M" />
              <Link
                href="/templates/real-estate/listings"
                className="inline-flex items-center justify-center gap-2 self-end rounded-lg bg-[#1F6F4A] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#0F2A1D]"
              >
                <Search className="h-4 w-4" /> Search
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-10">
            <Stat value="247" label="Active listings" />
            <Stat value="18 days" label="Average time to close" />
            <Stat value="$840M+" label="Closed in 2025" />
          </div>
        </div>

        {/* decorative wave */}
        <svg className="pointer-events-none absolute -bottom-10 left-0 right-0 opacity-30" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0 150 Q 360 50 720 100 T 1440 80" stroke="#8FCFA6" strokeWidth="1" fill="none" />
        </svg>
      </section>

      {/* Featured listings */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.3em] text-[#1F6F4A]">Featured</p>
                <h2 className="text-[40px] font-semibold leading-[1.05] tracking-tight lg:text-[56px]">
                  This week's three.
                </h2>
              </div>
              <Link href="/templates/real-estate/listings" className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1F6F4A]">
                All listings <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED.map((l, i) => (
              <FadeIn key={l.title} delay={i * 0.08}>
                <ListingCard {...l} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage estimator */}
      <section className="bg-[#F5F7F4] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center">
              <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.3em] text-[#1F6F4A]">Estimator</p>
              <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight lg:text-[56px]">
                Monthly payment, fast.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <MortgageCalculator />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <FadeIn>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#1F6F4A] to-[#0F2A1D] p-10 text-white lg:p-16">
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-tight lg:text-[56px]">Found the one?</h2>
            <p className="mt-5 max-w-lg text-[15px] text-white/85">
              Start your offer with a 1% refundable earnest money deposit. We handle the rest.
            </p>
            <Link href="/templates/real-estate/checkout" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0F2A1D]">
              Place offer deposit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

const FEATURED = [
  { title: "The Balcones House", price: 1295000, beds: 4, baths: 3, sqft: 3100, area: "Travis Heights · Austin", accent: "#8FCFA6" },
  { title: "Pecan Street Loft", price: 785000, beds: 2, baths: 2, sqft: 1420, area: "East Austin", accent: "#6FA88E" },
  { title: "Hillside Modern", price: 2450000, beds: 5, baths: 4.5, sqft: 4820, area: "Westlake", accent: "#3D7A5E" },
];

function ListingCard({ title, price, beds, baths, sqft, area, accent }: typeof FEATURED[number]) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#0F2A1D]/10 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(15,42,29,0.3)]">
      <div
        className="relative aspect-[5/4] overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent} 0%, #0F2A1D 120%)` }}
      >
        <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 500 400" preserveAspectRatio="none">
          <polygon points="80,320 80,180 180,100 280,180 280,320" fill="white" fillOpacity="0.12" />
          <rect x="300" y="200" width="150" height="120" fill="white" fillOpacity="0.1" />
          <rect x="200" y="320" width="300" height="4" fill="white" fillOpacity="0.3" />
        </svg>
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.2em]">New</span>
      </div>
      <div className="p-6">
        <p className="text-[12px] uppercase tracking-[0.22em] text-[#1F6F4A]">{area}</p>
        <h3 className="mt-2 text-[22px] font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-[24px] font-light tabular-nums">${price.toLocaleString()}</p>
        <div className="mt-5 flex gap-5 border-t border-[#0F2A1D]/10 pt-4 text-[12.5px] text-[#0F2A1D]/75">
          <span className="inline-flex items-center gap-1.5"><Bed className="h-3.5 w-3.5" />{beds}</span>
          <span className="inline-flex items-center gap-1.5"><Bath className="h-3.5 w-3.5" />{baths}</span>
          <span className="inline-flex items-center gap-1.5"><Maximize className="h-3.5 w-3.5" />{sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </article>
  );
}

function Field({ Icon, label, placeholder, dropdown, options }: { Icon: React.ComponentType<{ className?: string }>; label: string; placeholder?: string; dropdown?: boolean; options?: string[] }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#0F2A1D]/55">
        <Icon className="h-3 w-3" />{label}
      </span>
      {dropdown ? (
        <select className="w-full rounded-lg border border-[#0F2A1D]/15 bg-white px-3.5 py-3 text-[14px] text-[#0F2A1D] outline-none focus:border-[#1F6F4A]">
          {options?.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input className="w-full rounded-lg border border-[#0F2A1D]/15 bg-white px-3.5 py-3 text-[14px] text-[#0F2A1D] outline-none focus:border-[#1F6F4A]" placeholder={placeholder} />
      )}
    </label>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[28px] font-semibold tracking-tight lg:text-[36px]">{value}</p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">{label}</p>
    </div>
  );
}

function MortgageCalculator() {
  const [price, setPrice] = useState(850000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.8);
  const [term, setTerm] = useState(30);

  const principal = price - (price * down) / 100;
  const monthlyRate = rate / 100 / 12;
  const n = term * 12;
  const monthly = principal > 0 && monthlyRate > 0
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
    : 0;

  return (
    <div className="mt-12 grid gap-10 rounded-2xl border border-[#0F2A1D]/12 bg-white p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:p-12">
      <div className="space-y-6">
        <Slider label="Home price" value={price} min={100000} max={5000000} step={25000} onChange={setPrice} format={(v) => `$${v.toLocaleString()}`} />
        <Slider label="Down payment" value={down} min={0} max={50} step={1} onChange={setDown} format={(v) => `${v}%`} />
        <Slider label="Interest rate" value={rate} min={3} max={10} step={0.05} onChange={setRate} format={(v) => `${v.toFixed(2)}%`} />
        <Slider label="Term" value={term} min={10} max={30} step={5} onChange={setTerm} format={(v) => `${v} yrs`} />
      </div>
      <div className="flex flex-col justify-center rounded-xl bg-[#0F2A1D] p-10 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8FCFA6]">Estimated monthly</p>
        <p className="mt-3 text-[54px] font-light tabular-nums leading-none lg:text-[72px]">
          ${Math.round(monthly).toLocaleString()}
        </p>
        <dl className="mt-10 space-y-3 border-t border-white/15 pt-6 text-[13px]">
          <Row label="Loan amount" value={`$${principal.toLocaleString()}`} />
          <Row label="Down payment" value={`$${((price * down) / 100).toLocaleString()}`} />
          <Row label="Total interest" value={`$${Math.round(monthly * n - principal).toLocaleString()}`} />
        </dl>
      </div>
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange, format }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; format: (v: number) => string }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-[13px] font-semibold">{label}</span>
        <span className="text-[15px] font-semibold text-[#1F6F4A] tabular-nums">{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[#1F6F4A]" />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between"><dt className="opacity-70">{label}</dt><dd className="tabular-nums">{value}</dd></div>;
}
