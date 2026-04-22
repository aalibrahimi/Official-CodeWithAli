"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { FadeIn } from "../../_shared/PageTransition";

const PLANS = [
  { name: "Starter", monthly: 0, annual: 0, blurb: "For personal projects and early-stage teams.", feats: ["Up to 3 environments", "5GB log retention", "Community support", "Self-serve onboarding", "Basic RBAC"], cta: "Start free" },
  { name: "Team", monthly: 49, annual: 39, blurb: "For growing teams shipping daily.", feats: ["Unlimited environments", "30-day log retention", "SSO (Google, Okta)", "Slack + email alerts", "99.95% SLA", "Progressive deploy strategies"], cta: "Start 14-day trial", highlight: true },
  { name: "Enterprise", monthly: null, annual: null, blurb: "For critical production at scale.", feats: ["Everything in Team", "Unlimited log retention", "Custom SSO + SCIM", "99.99% SLA with credits", "Dedicated TAM", "Custom policies + audit exports"], cta: "Talk to sales" },
];

export default function SaasPricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-14 pt-20 lg:px-10 lg:pt-28">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#7C5CFF]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <FadeIn>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A78BFA]">Pricing</p>
            <h1 className="text-[44px] font-semibold leading-[1.05] tracking-tight lg:text-[72px]">
              Priced by seats,<br /><span className="bg-gradient-to-r from-[#7C5CFF] to-[#4AD8E1] bg-clip-text text-transparent">not by fear.</span>
            </h1>
            <div className="mt-10 inline-flex rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur">
              <button onClick={() => setAnnual(false)} className="relative rounded-full px-6 py-2 text-[13px] font-semibold">
                {!annual && <motion.span layoutId="billing" className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA]" />}
                <span className="relative">Monthly</span>
              </button>
              <button onClick={() => setAnnual(true)} className="relative rounded-full px-6 py-2 text-[13px] font-semibold">
                {annual && <motion.span layoutId="billing" className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA]" />}
                <span className="relative">Annual · <span className="text-[#4AD8E1]">save 20%</span></span>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {PLANS.map((p, i) => {
            const price = annual ? p.annual : p.monthly;
            return (
              <FadeIn key={p.name} delay={i * 0.06}>
                <div
                  className="relative h-full overflow-hidden rounded-2xl border p-8 lg:p-10"
                  style={{
                    borderColor: p.highlight ? "#7C5CFF" : "rgba(255,255,255,0.12)",
                    background: p.highlight
                      ? "linear-gradient(180deg, rgba(124,92,255,0.12) 0%, #13131A 60%)"
                      : "#13131A",
                  }}
                >
                  {p.highlight && (
                    <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-[24px] font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-[13.5px] text-white/65">{p.blurb}</p>
                  <div className="mt-8 flex items-baseline gap-1.5">
                    {price === null ? (
                      <p className="text-[36px] font-semibold tracking-tight">Custom</p>
                    ) : price === 0 ? (
                      <p className="text-[48px] font-semibold tracking-tight">$0</p>
                    ) : (
                      <>
                        <p className="text-[48px] font-semibold tracking-tight tabular-nums">${price}</p>
                        <span className="text-[14px] text-white/55">/ seat / mo</span>
                      </>
                    )}
                  </div>
                  <Link
                    href={p.name === "Enterprise" ? "#" : "/templates/saas/checkout"}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-[13px] font-semibold transition-all"
                    style={{
                      background: p.highlight
                        ? "linear-gradient(90deg, #7C5CFF, #A78BFA)"
                        : "rgba(255,255,255,0.06)",
                      color: "#fff",
                      border: p.highlight ? "none" : "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <ul className="mt-8 space-y-3 border-t border-white/10 pt-6 text-[13.5px]">
                    {p.feats.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4AD8E1]" />
                        <span className="text-white/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#13131A] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-[32px] font-semibold tracking-tight lg:text-[44px]">Common questions.</h2>
            <div className="mt-10 space-y-px border-t border-white/10">
              {FAQ.map((f) => (
                <details key={f.q} className="group border-b border-white/10 py-5">
                  <summary className="cursor-pointer text-[15px] font-semibold transition-colors group-hover:text-[#A78BFA]">{f.q}</summary>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/70">{f.a}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

const FAQ = [
  { q: "How does billing work?", a: "You're billed monthly or annually based on active seats. Downgrade or cancel anytime — we pro-rate." },
  { q: "What counts as a seat?", a: "One unique user across all environments. Read-only users and service accounts don't count toward seats." },
  { q: "Can I self-host?", a: "Enterprise plan only. We ship a Helm chart with automatic updates and an air-gapped mode for regulated industries." },
  { q: "Is there a free trial?", a: "14 days on Team, no credit card required. Starter is free forever." },
];
