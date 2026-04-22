"use client";
import Link from "next/link";
import { useState } from "react";
import { Building, Hammer, Wrench, HardHat, ArrowRight, Calculator } from "lucide-react";
import { FadeIn } from "../../_shared/PageTransition";

const CATS = [
  { Icon: Building, title: "Ground-up commercial", items: [
    "Office buildings (Class A, B, C)", "Retail shells + build-out", "Industrial / warehouse / distribution",
    "Mixed-use podium construction", "Medical office buildings",
  ]},
  { Icon: Hammer, title: "Tenant improvements", items: [
    "Corporate offices", "Restaurant build-outs (with health dept compliance)",
    "Retail storefronts", "Medical / dental / veterinary build-outs",
    "Fitness + wellness spaces",
  ]},
  { Icon: Wrench, title: "Renovations", items: [
    "Façade repair + re-clad", "Structural reinforcement", "Full gut + restore",
    "ADA upgrades + tenant retention work", "Roof replacement + waterproofing",
  ]},
  { Icon: HardHat, title: "Specialty & civil", items: [
    "Parking structures (surface + structured)", "Site utilities (water, sewer, gas, electrical)",
    "Hardscape + landscape grading", "Demolition (selective + full)",
    "Solar array mounting + commissioning",
  ]},
];

export default function ConstructionServicesPage() {
  // Simple quote calculator
  const [sqft, setSqft] = useState(25000);
  const [type, setType] = useState<"shell" | "ti" | "full">("ti");
  const rate = type === "shell" ? 180 : type === "ti" ? 125 : 240;
  const estimate = sqft * rate;

  return (
    <>
      <section className="px-6 pb-14 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#F2B705]">What we do</p>
            <h1 className="max-w-5xl font-black leading-[0.92] tracking-tight" style={{ fontSize: "clamp(44px, 9vw, 120px)" }}>
              SERVICES.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 md:grid-cols-2">
          {CATS.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.04}>
              <div className="h-full bg-[#1A1B1F] p-10 lg:p-14">
                <c.Icon className="h-7 w-7 text-[#F2B705]" />
                <h2 className="mt-5 text-[26px] font-black tracking-tight lg:text-[32px]">{c.title}</h2>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[14px] text-white/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#F2B705]" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Quote calculator */}
      <section className="border-t border-white/10 bg-[#0F1012] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#F2B705]">Budget check</p>
            <h2 className="text-[40px] font-black tracking-tight lg:text-[60px]">
              BALLPARK IN 20 SECONDS.
            </h2>
            <p className="mt-4 max-w-xl text-[14.5px] text-white/70">
              Not a formal quote — a rough order of magnitude to sanity-check your budget.
              Real quote comes from our estimators after a walkthrough.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 grid gap-10 rounded-sm border border-white/10 bg-[#1A1B1F] p-8 lg:grid-cols-[1.2fr_1fr] lg:p-12">
              <div className="space-y-8">
                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <span className="text-[13px] font-bold">Square footage</span>
                    <span className="text-[15px] font-black tabular-nums text-[#F2B705]">{sqft.toLocaleString()}</span>
                  </div>
                  <input type="range" min={2000} max={200000} step={1000} value={sqft} onChange={(e) => setSqft(Number(e.target.value))} className="w-full accent-[#F2B705]" />
                </div>
                <div>
                  <p className="mb-3 text-[13px] font-bold">Project type</p>
                  <div className="grid grid-cols-3 gap-2">
                    {([["ti","TI"], ["shell","Shell"], ["full","Full build"]] as const).map(([k, l]) => (
                      <button key={k} onClick={() => setType(k)} className="rounded-sm border px-4 py-3 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors"
                        style={{
                          background: type === k ? "#F2B705" : "transparent",
                          color: type === k ? "#1A1B1F" : "#F4F4F5",
                          borderColor: type === k ? "#F2B705" : "rgba(255,255,255,0.2)",
                        }}
                      >{l}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border-l border-white/10 p-8 lg:pl-10">
                <Calculator className="h-7 w-7 text-[#F2B705]" />
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white/55">Estimated range</p>
                <p className="mt-2 text-[44px] font-black tabular-nums leading-none lg:text-[56px]">
                  ${(estimate * 0.85).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-white/40"> – </span>
                  ${(estimate * 1.15).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
                <Link href="/templates/construction/checkout" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#F2B705] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#1A1B1F]">
                  Get real quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
