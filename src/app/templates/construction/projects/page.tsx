"use client";
import { FadeIn } from "../../_shared/PageTransition";
import { MapPin, Calendar, DollarSign } from "lucide-react";

const PROJECTS = [
  { name: "Meridian Tower", type: "Office · Ground-up", year: "2025", value: "$62M", sqft: "240,000", loc: "Downtown Austin", body: "18-story Class-A office with ground-floor retail, three levels of below-grade parking, and a rooftop amenity deck. Delivered 11 weeks early." },
  { name: "Fielder Distribution Center", type: "Industrial · Shell", year: "2024", value: "$18M", sqft: "180,000", loc: "Pflugerville", body: "Cross-dock warehouse with 28 truck bays, clear-span structural steel, and a 5MW solar array. LEED Silver." },
  { name: "Harrow Surgery Center", type: "Medical · TI", year: "2024", value: "$11M", sqft: "32,000", loc: "North Austin", body: "Full gut-to-studs build-out of an outpatient surgical center with four ORs. Phased occupancy so the adjoining practice stayed operational." },
  { name: "Twin Springs Apartments", type: "Residential · GC", year: "2024", value: "$48M", sqft: "310,000", loc: "East Austin", body: "242-unit multifamily with structured parking, amenity pool, and leasing clubhouse. Delivered on schedule through a six-month supply-chain crunch." },
  { name: "Remington Retail Strip", type: "Retail · Shell + TI", year: "2023", value: "$14M", sqft: "45,000", loc: "Round Rock", body: "Eight-tenant retail strip, all build-outs delivered simultaneously with the shell so anchor tenants opened on day one of the lease." },
  { name: "Austin Food Hall", type: "Retail · TI", year: "2023", value: "$8M", sqft: "22,000", loc: "East Austin", body: "Twelve food stall build-outs in a historic warehouse. Coordinated across 12 different tenant contractors to hit a single grand opening." },
];

export default function ConstructionProjectsPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#F2B705]">Portfolio</p>
            <h1 className="max-w-5xl font-black leading-[0.9] tracking-tight" style={{ fontSize: "clamp(44px, 10vw, 132px)" }}>
              PROJECTS.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-5">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.04}>
              <article className="overflow-hidden rounded-sm border border-white/10 bg-[#22242A]">
                <div className="grid gap-0 md:grid-cols-[1fr_1.3fr]">
                  <div
                    className="relative aspect-[4/3] bg-gradient-to-br from-[#3E4248] to-[#0F1012] md:aspect-auto"
                  >
                    <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 400 300" preserveAspectRatio="none">
                      <path d="M0 270 L 80 270 L 80 100 L 140 100 L 140 270 L 200 270 L 200 60 L 280 60 L 280 270 L 400 270" fill="none" stroke="#F2B705" strokeWidth="2" />
                    </svg>
                    <span className="absolute left-4 top-4 rounded-sm bg-[#F2B705] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#1A1B1F]">{p.year}</span>
                  </div>
                  <div className="p-8 lg:p-12">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F2B705]">{p.type}</p>
                    <h2 className="mt-2 text-[28px] font-black leading-tight lg:text-[36px]">{p.name}</h2>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-white/70 lg:text-[16px]">{p.body}</p>
                    <div className="mt-6 grid grid-cols-3 gap-5 border-t border-white/10 pt-5 text-[12.5px]">
                      <Meta Icon={DollarSign} label="Value" value={p.value} />
                      <Meta Icon={Calendar} label="Sqft" value={p.sqft} />
                      <Meta Icon={MapPin} label="Location" value={p.loc} />
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

function Meta({ Icon, label, value }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
        <Icon className="h-3 w-3" />{label}
      </p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}
