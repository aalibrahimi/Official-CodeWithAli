"use client";
import { FadeIn } from "../../_shared/PageTransition";
import Link from "next/link";

const ENTRIES = [
  {
    date: "March 2026", title: "Visiting the Kyoto workshop",
    excerpt: "We took the train down to see Aiko Watanabe fire her new collection. A morning with the kiln, an afternoon walking through the bamboo, and an evening where she showed us the misfires.",
    bg: "linear-gradient(155deg, #D5C9B4, #6B5B47)",
  },
  {
    date: "February 2026", title: "On linen, and why we sell so little of it",
    excerpt: "Our linen sells slower than anything else in the shop. We think that's a good thing. A note on why — and what to look for when you're shopping linen anywhere.",
    bg: "linear-gradient(155deg, #EDE8DD, #A89782)",
  },
  {
    date: "January 2026", title: "The year we stopped discounting",
    excerpt: "We decided two years ago to never discount. Here's what it did to our sales, our margins, and the kinds of customers who walked in the door.",
    bg: "linear-gradient(155deg, #C8D3D4, #6B7F83)",
  },
];

export default function BoutiqueJournalPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#6B5B47]">The journal</p>
            <h1 className="font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 72px)" }}>
              Four notes <em className="italic">a year.</em>
            </h1>
            <p className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-[#2B241B]/70">
              Maker visits, philosophy, the occasional recipe. Written slowly, published rarely.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-5xl space-y-16">
          {ENTRIES.map((e, i) => (
            <FadeIn key={e.title} delay={i * 0.05}>
              <article className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
                <div
                  className="aspect-[4/5]"
                  style={{ background: e.bg }}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#6B5B47]">{e.date}</p>
                  <h2 className="mt-4 text-[28px] font-light italic leading-tight lg:text-[40px]">{e.title}</h2>
                  <p className="mt-6 text-[15px] leading-relaxed text-[#2B241B]/75 lg:text-[16.5px]">{e.excerpt}</p>
                  <Link href="#" className="mt-8 inline-block w-fit border-b border-[#6B5B47] pb-1 text-[12px] uppercase tracking-[0.22em]">
                    Continue reading →
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
