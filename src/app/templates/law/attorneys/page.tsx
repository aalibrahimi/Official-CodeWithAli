"use client";
import Link from "next/link";
import { FadeIn } from "../../_shared/PageTransition";

const PARTNERS = [
  { name: "Charles Whitmore", title: "Founding Partner · Litigation", bar: "NY, CA, 2nd & 9th Cir.", bio: "Lead trial counsel in over 40 commercial matters. Clerked for Judge Easterbrook, Seventh Circuit." },
  { name: "Joanna Hale", title: "Founding Partner · Corporate", bar: "NY, DE", bio: "Closed over $18B in M&A. Previously partner at Wachtell. Board member, Mosaic Foundation." },
  { name: "Ravi Desai", title: "Partner · IP", bar: "NY, USPTO Reg. 72145", bio: "Handles the firm's patent docket — prosecution through litigation. Computer science background." },
  { name: "Priya Mehta", title: "Partner · Employment", bar: "NY, CT", bio: "Former EEOC staff attorney. Handles executive separations and internal investigations." },
  { name: "Julian Park", title: "Partner · Privacy & data", bar: "NY, CIPP/US, CIPP/E", bio: "Built privacy programs at three public companies before returning to private practice." },
  { name: "Zara Okonkwo", title: "Partner · Corporate", bar: "NY, DE", bio: "Venture financings and emerging company matters. Represents founders, funds, and companies." },
];

export default function LawAttorneysPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-4 text-[11.5px] uppercase tracking-[0.35em] text-[#0B2447]/65">The partnership</p>
            <h1 className="max-w-4xl text-[52px] leading-[1.0] lg:text-[84px]">
              Six <em className="italic">partners.</em><br />No associates-only rooms.
            </h1>
            <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#0B2447]/75">
              A partner runs every engagement. When you call the firm, a partner picks up.
              When your matter is in court, a partner is on the record.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {PARTNERS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05}>
              <div className="group">
                <div
                  className="aspect-[3/4] overflow-hidden bg-[#0B2447]"
                  style={{
                    backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                  }}
                >
                  <div className="flex h-full items-end p-8 text-[#F7F5F0]">
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">
                      Bar · {p.bar}
                    </p>
                  </div>
                </div>
                <h3 className="mt-6 text-[24px] leading-tight lg:text-[28px]">{p.name}</h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.22em] text-[#0B2447]/60">{p.title}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-[#0B2447]/80">{p.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-[#0B2447] px-6 py-20 text-[#F7F5F0] lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-[36px] leading-tight lg:text-[56px]">Assemble your team.</h2>
            <p className="mx-auto mt-5 max-w-lg text-[14.5px] text-[#F7F5F0]/75">
              Tell us the matter. We'll put the right partners on your call within 48 hours.
            </p>
            <Link href="/templates/law/checkout" className="mt-8 inline-block rounded-sm border border-[#F7F5F0]/40 px-7 py-4 text-[12px] uppercase tracking-[0.22em]">
              Schedule initial call
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
