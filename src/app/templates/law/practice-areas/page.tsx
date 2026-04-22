"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../../_shared/PageTransition";

const AREAS = [
  {
    title: "Corporate & M&A",
    body: "From incorporation to exit. Term sheets, definitive agreements, stockholder consent, closing binders, integration. We represent buyers, sellers, and founders, and have closed transactions from $4M bolt-ons to $2B+ cross-border deals.",
    bullets: ["Mergers & acquisitions", "Private equity & venture financings", "Joint ventures & strategic partnerships", "Securities & public offerings", "Post-close dispute resolution"],
  },
  {
    title: "Litigation",
    body: "Commercial litigation in state and federal courts across the country. We try cases — our partners have spent over 400 cumulative trial days on the record. We also know when settlement is the right answer and negotiate it without bluster.",
    bullets: ["Commercial & contract disputes", "IP & patent litigation", "Employment & trade secret", "Class action defense", "Appellate work"],
  },
  {
    title: "Employment",
    body: "Plans and disputes, for the company and occasionally for the executive. We draft the plans before they're needed, investigate the problems when they appear, and negotiate the separations nobody wanted.",
    bullets: ["Executive compensation & equity plans", "Workplace investigations", "Separations & severance", "Non-compete & trade secret", "EEOC & state agency proceedings"],
  },
  {
    title: "IP & technology",
    body: "Patents prosecuted, trademarks defended, trade secrets protected. We also advise on software licensing, open-source compliance, AI/ML rights, and IP-driven M&A.",
    bullets: ["Patent prosecution & portfolio strategy", "Trademark prosecution & enforcement", "Trade secret audits & litigation", "Tech licensing & SaaS agreements", "Open-source compliance"],
  },
  {
    title: "Privacy & data",
    body: "Federal and state compliance (CCPA, CPRA, VCDPA), breach response, cross-border transfer frameworks, data processing agreements, and regulatory inquiries.",
    bullets: ["Privacy program design", "Incident response", "GDPR, CCPA, state privacy laws", "Vendor & DPA negotiation", "Regulatory investigations"],
  },
  {
    title: "Commercial",
    body: "The everyday contract work that keeps operations running — supply, distribution, licensing, services agreements. Handled at the pace the business needs, not the pace law firms prefer.",
    bullets: ["Customer agreements & MSAs", "Vendor & procurement", "Licensing & distribution", "Settlements & releases", "Form library & playbooks"],
  },
];

export default function LawPracticeAreasPage() {
  return (
    <>
      <section className="px-6 pb-14 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-4 text-[11.5px] uppercase tracking-[0.35em] text-[#0B2447]/65">Practice areas</p>
            <h1 className="max-w-4xl text-[52px] leading-[1.0] tracking-tight lg:text-[88px]">
              Six disciplines, <em className="italic">one firm.</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-px bg-[#0B2447]/15">
          {AREAS.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.03}>
              <article className="grid gap-10 bg-white p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-16">
                <div>
                  <h2 className="text-[36px] leading-[1.1] lg:text-[52px]">{a.title}</h2>
                  <p className="mt-6 text-[15px] leading-relaxed text-[#0B2447]/80 lg:text-[16.5px]">{a.body}</p>
                  <Link
                    href="/templates/law/checkout"
                    className="mt-8 inline-flex items-center gap-2 border-b border-[#0B2447] pb-1 text-[12px] uppercase tracking-[0.22em]"
                  >
                    Discuss a matter <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#0B2447]/60">What we cover</p>
                  <ul className="mt-4 space-y-2.5 border-t border-[#0B2447]/15 pt-4">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[14.5px]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0B2447]/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
