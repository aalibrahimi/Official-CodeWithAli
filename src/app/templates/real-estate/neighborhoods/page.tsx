"use client";
import { FadeIn } from "../../_shared/PageTransition";
import { Coffee, Trees, Building2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const HOODS = [
  { name: "Travis Heights", median: 1050000, vibe: "Oaks, bungalows, walk-to-downtown", Icon: Trees, stats: { schools: 9.2, walk: 82, trend: "+4.2%" } },
  { name: "East Austin", median: 720000, vibe: "Converted warehouses, restaurants, art", Icon: Coffee, stats: { schools: 7.8, walk: 91, trend: "+6.8%" } },
  { name: "Westlake", median: 2100000, vibe: "Hills, schools, quiet streets", Icon: Building2, stats: { schools: 10, walk: 34, trend: "+2.1%" } },
  { name: "Barton Hills", median: 920000, vibe: "Parks, Barton Creek, family blocks", Icon: Trees, stats: { schools: 8.9, walk: 68, trend: "+3.4%" } },
  { name: "Clarksville", median: 780000, vibe: "Historic, cafés, cottages", Icon: Sparkles, stats: { schools: 9.0, walk: 88, trend: "+3.9%" } },
  { name: "South Lamar", median: 880000, vibe: "Food halls, live music, growing", Icon: Coffee, stats: { schools: 7.5, walk: 76, trend: "+5.2%" } },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.3em] text-[#1F6F4A]">Neighborhoods</p>
            <h1 className="max-w-4xl text-[48px] font-semibold leading-[1.05] tracking-tight lg:text-[76px]">
              Know the block <em className="italic font-normal text-[#1F6F4A]">before you buy it.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-[#0F2A1D]/75">
              Trends, schools, walkability, coffee. Guides written by our agents — who actually live in these neighborhoods.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HOODS.map((h, i) => (
            <FadeIn key={h.name} delay={i * 0.05}>
              <article className="group overflow-hidden rounded-2xl border border-[#0F2A1D]/10 transition-all hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(15,42,29,0.3)]">
                <div
                  className="flex aspect-[5/3] items-end p-7 text-white"
                  style={{ background: "linear-gradient(160deg, #8FCFA6 0%, #1F6F4A 70%, #0F2A1D 100%)" }}
                >
                  <div>
                    <h.Icon className="h-6 w-6 opacity-70" />
                    <h3 className="mt-4 text-[28px] font-semibold leading-tight">{h.name}</h3>
                    <p className="mt-1 text-[13px] italic text-white/80">{h.vibe}</p>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <p className="text-[12px] uppercase tracking-[0.22em] text-[#0F2A1D]/55">Median home price</p>
                  <p className="mt-1 text-[26px] font-semibold tabular-nums">${h.median.toLocaleString()}</p>
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#0F2A1D]/10 pt-4 text-[12px]">
                    <Mini label="Schools" value={`${h.stats.schools}/10`} />
                    <Mini label="Walk" value={`${h.stats.walk}`} />
                    <Mini label="YoY" value={h.stats.trend} />
                  </div>
                  <Link href="/templates/real-estate/listings" className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1F6F4A]">
                    Homes in {h.name} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#0F2A1D]/55">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}
