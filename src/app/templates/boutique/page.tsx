"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../_shared/PageTransition";

export default function BoutiqueHome() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-20 lg:px-10 lg:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="mb-8 text-[11px] uppercase tracking-[0.35em] text-[#6B5B47]"
          >
            Atelier Hush · A small atelier in Kyoto
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-light leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(40px, 7vw, 84px)" }}
          >
            Slow-made objects<br />
            <em className="italic text-[#6B5B47]">for slow-made lives.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-10 max-w-xl text-[15.5px] leading-relaxed text-[#2B241B]/75 lg:text-[17px]"
          >
            A rotating selection of household objects — ceramics, linens, glassware, wood —
            sourced from makers we know by name and shipped in linen.
          </motion.p>
        </div>
      </section>

      {/* Hero image — abstract */}
      <section className="mt-16 px-6 lg:px-10 lg:mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto aspect-[16/7] max-w-[1600px] overflow-hidden rounded-sm"
          style={{
            background: "linear-gradient(135deg, #D5C9B4 0%, #A89782 45%, #6B5B47 100%)",
          }}
        >
          <div className="flex h-full items-end p-8 text-[#EDE8DD] lg:p-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] opacity-75">New this week</p>
              <p className="mt-3 text-[28px] font-light italic lg:text-[40px]">The Hush Ceramics · by Aiko Watanabe</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-14 flex flex-col items-end justify-between gap-5 md:flex-row">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#6B5B47]">Collections</p>
              <Link href="/templates/boutique/shop" className="border-b border-[#6B5B47] pb-1 text-[12px] uppercase tracking-[0.22em]">
                Shop all →
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.06}>
                <Link href="/templates/boutique/shop" className="group block">
                  <div className="overflow-hidden">
                    <div
                      className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ background: c.bg }}
                    />
                  </div>
                  <p className="mt-5 text-[17px] font-light italic">{c.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#6B5B47]">{c.count} objects</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-[#6B5B47]">Our philosophy</p>
            <p className="text-[22px] font-light leading-[1.6] text-[#2B241B]/90 lg:text-[28px]">
              We stock fewer than 200 objects at any time. Every maker we carry has visited
              the storefront at least once. Every object is stamped, wrapped in linen, and
              shipped in unbleached card. We don't discount, we don't run newsletters, and
              we don't use plastic. If that resonates, we're probably making something for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured products */}
      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-[#6B5B47]">This week</p>
          </FadeIn>
          <div className="grid gap-10 md:grid-cols-3">
            {FEATURED.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <article className="group">
                  <Link href="/templates/boutique/shop" className="block overflow-hidden">
                    <div
                      className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ background: p.bg }}
                    />
                  </Link>
                  <div className="mt-6">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#6B5B47]">{p.maker}</p>
                    <h3 className="mt-2 text-[18px] font-light italic">{p.name}</h3>
                    <p className="mt-1 text-[14px] tabular-nums">${p.price}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 lg:px-10 lg:pb-36">
        <FadeIn>
          <div className="mx-auto max-w-3xl border-y border-[#6B5B47]/25 py-14 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#6B5B47]">Newsletter</p>
            <h2 className="mt-4 text-[28px] font-light italic lg:text-[40px]">
              Four times a year, no more.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[14px] text-[#2B241B]/70">
              New collections, maker profiles, and a quiet note about what we've been thinking about.
            </p>
            <div className="mx-auto mt-8 flex max-w-md gap-2">
              <input placeholder="Your email" className="flex-1 border-b border-[#6B5B47]/40 bg-transparent px-1 py-2 text-[14px] italic outline-none placeholder:text-[#6B5B47]/50 focus:border-[#6B5B47]" />
              <button className="inline-flex items-center gap-1 border-b border-[#6B5B47] pb-1 text-[12px] uppercase tracking-[0.22em]">
                Subscribe <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

const CATEGORIES = [
  { name: "Ceramics", count: 42, bg: "linear-gradient(160deg, #D5C9B4, #8F8270)" },
  { name: "Linens", count: 28, bg: "linear-gradient(160deg, #EDE8DD, #C6BAA4)" },
  { name: "Glassware", count: 19, bg: "linear-gradient(160deg, #C8D3D4, #8A9596)" },
  { name: "Wood", count: 31, bg: "linear-gradient(160deg, #A89782, #5E4B3A)" },
];

const FEATURED = [
  { name: "The Quiet Bowl, large", maker: "Aiko Watanabe · Kyoto", price: 148, bg: "linear-gradient(155deg, #D5C9B4, #6B5B47)" },
  { name: "Linen Napkin, natural (set of 4)", maker: "Maison Rouge · Lyon", price: 82, bg: "linear-gradient(155deg, #EDE8DD, #A89782)" },
  { name: "Hand-blown Carafe", maker: "Alder Glass · Vermont", price: 215, bg: "linear-gradient(155deg, #C8D3D4, #6B7F83)" },
];
