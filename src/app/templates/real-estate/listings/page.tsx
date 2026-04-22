"use client";
import Link from "next/link";
import { useState } from "react";
import { Bed, Bath, Maximize, Search, MapPin } from "lucide-react";
import { FadeIn } from "../../_shared/PageTransition";

const LISTINGS = [
  { title: "The Balcones House", price: 1295000, beds: 4, baths: 3, sqft: 3100, area: "Travis Heights", type: "House", accent: "#8FCFA6" },
  { title: "Pecan Street Loft", price: 785000, beds: 2, baths: 2, sqft: 1420, area: "East Austin", type: "Condo", accent: "#6FA88E" },
  { title: "Hillside Modern", price: 2450000, beds: 5, baths: 4.5, sqft: 4820, area: "Westlake", type: "House", accent: "#3D7A5E" },
  { title: "Barton Springs Cottage", price: 950000, beds: 3, baths: 2, sqft: 1980, area: "Barton Hills", type: "House", accent: "#5E9177" },
  { title: "South Lamar Duplex", price: 1100000, beds: 4, baths: 3, sqft: 2400, area: "South Lamar", type: "House", accent: "#4B8068" },
  { title: "Downtown Penthouse", price: 1850000, beds: 3, baths: 3, sqft: 2200, area: "Downtown", type: "Condo", accent: "#2F6148" },
  { title: "Clarksville Bungalow", price: 690000, beds: 2, baths: 1, sqft: 1180, area: "Clarksville", type: "House", accent: "#7DB095" },
  { title: "Zilker New Build", price: 1750000, beds: 4, baths: 3.5, sqft: 3400, area: "Zilker", type: "House", accent: "#1F6F4A" },
  { title: "Dripping Springs Ranch", price: 2200000, beds: 5, baths: 4, sqft: 4500, area: "Dripping Springs", type: "House", accent: "#0F2A1D" },
];

export default function RealEstateListingsPage() {
  const [filter, setFilter] = useState<string>("All");
  const types = ["All", "House", "Condo"];
  const filtered = filter === "All" ? LISTINGS : LISTINGS.filter((l) => l.type === filter);

  return (
    <>
      <section className="border-b border-[#0F2A1D]/10 bg-[#F5F7F4] px-6 pb-10 pt-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="text-[44px] font-semibold leading-[1.05] tracking-tight lg:text-[68px]">
              Active <em className="italic font-normal text-[#1F6F4A]">listings.</em>
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#0F2A1D]/10 pt-6">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-[#1F6F4A]" /> Austin, TX
              </div>
              <div className="flex gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className="rounded-full px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.15em] transition-colors"
                    style={{
                      background: filter === t ? "#1F6F4A" : "transparent",
                      color: filter === t ? "#FFFFFF" : "#0F2A1D",
                      border: filter === t ? "1px solid #1F6F4A" : "1px solid rgba(15,42,29,0.15)",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-2 text-[12px] text-[#0F2A1D]/65">
                <Search className="h-3.5 w-3.5" /> {filtered.length} properties match
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l, i) => (
            <FadeIn key={l.title} delay={i * 0.04}>
              <Link href="/templates/real-estate/checkout" className="group block overflow-hidden rounded-2xl border border-[#0F2A1D]/10 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(15,42,29,0.3)]">
                <div
                  className="relative aspect-[5/4] overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${l.accent} 0%, #0F2A1D 130%)` }}
                >
                  <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 500 400" preserveAspectRatio="none">
                    <polygon points="80,320 80,180 180,100 280,180 280,320" fill="white" fillOpacity="0.12" />
                    <rect x="300" y="200" width="150" height="120" fill="white" fillOpacity="0.1" />
                  </svg>
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em]">{l.type}</span>
                </div>
                <div className="p-6">
                  <p className="text-[11.5px] uppercase tracking-[0.22em] text-[#1F6F4A]">{l.area}</p>
                  <h3 className="mt-2 text-[20px] font-semibold">{l.title}</h3>
                  <p className="mt-1 text-[22px] font-light tabular-nums">${l.price.toLocaleString()}</p>
                  <div className="mt-4 flex gap-5 border-t border-[#0F2A1D]/10 pt-4 text-[12px] text-[#0F2A1D]/75">
                    <span className="inline-flex items-center gap-1.5"><Bed className="h-3 w-3" />{l.beds}</span>
                    <span className="inline-flex items-center gap-1.5"><Bath className="h-3 w-3" />{l.baths}</span>
                    <span className="inline-flex items-center gap-1.5"><Maximize className="h-3 w-3" />{l.sqft.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
