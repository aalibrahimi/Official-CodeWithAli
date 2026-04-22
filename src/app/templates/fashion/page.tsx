"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../_shared/PageTransition";

export default function FashionHome() {
  return (
    <>
      {/* Hero — oversized */}
      <section className="px-6 pt-12 lg:px-10 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1600px]"
        >
          <div className="mb-4 flex items-baseline justify-between text-[11px] uppercase tracking-[0.25em]">
            <span>Spring / Summer 2026</span>
            <span className="opacity-65">Chapter 14</span>
          </div>
          <h1
            className="font-sans font-black leading-[0.82] tracking-[-0.03em]"
            style={{ fontSize: "clamp(72px, 22vw, 380px)" }}
          >
            NOIR
          </h1>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-lg text-[15px] leading-relaxed text-[#0F0F10]/75 lg:text-[17px]">
              A reissue of the archive. Eight silhouettes, unchanged from 2009, re-tailored
              for bodies that have changed. Made in our Bologna atelier.
            </p>
            <Link
              href="/templates/fashion/shop"
              className="inline-flex items-center gap-2 self-end text-[13px] uppercase tracking-[0.22em] underline underline-offset-4"
            >
              Enter the shop <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Lookbook strip */}
      <section className="mt-20 overflow-hidden lg:mt-28">
        <div className="grid grid-cols-3 gap-1 lg:grid-cols-6">
          {[1,2,3,4,5,6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="aspect-[3/4] overflow-hidden"
              style={{ background: LOOK_BG[i - 1] }}
            >
              <div className="flex h-full items-end p-3 text-[9px] uppercase tracking-[0.3em] text-white/80">
                {String(i).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial section */}
      <section className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#0F0F10]/65">The collection</p>
            <p
              className="font-light leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
            >
              Eight <em className="italic">pieces,</em> assembled slowly, sold <em className="italic">directly.</em>
            </p>
            <p className="mt-8 max-w-xl text-[14.5px] leading-relaxed text-[#0F0F10]/75">
              No wholesale. No department stores. No seasonal markdowns. Each piece
              is produced in a single run of 400 units, shipped globally with a name
              plate sewn inside.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Shop preview */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 flex items-baseline justify-between">
              <h2 className="text-[40px] font-light tracking-tight lg:text-[72px]">Featured.</h2>
              <Link href="/templates/fashion/shop" className="text-[12px] uppercase tracking-[0.22em] underline underline-offset-4">Full shop →</Link>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.06}>
                <article className="group">
                  <Link href="/templates/fashion/shop" className="block overflow-hidden bg-[#E8E4DC]">
                    <div
                      className="aspect-[3/4] transition-transform duration-700 group-hover:scale-105"
                      style={{ background: p.bg }}
                    />
                  </Link>
                  <div className="mt-4 flex justify-between text-[13.5px]">
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="mt-0.5 text-[11.5px] uppercase tracking-[0.2em] opacity-60">{p.cat}</p>
                    </div>
                    <p className="tabular-nums">${p.price}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Brand manifesto */}
      <section className="bg-[#0F0F10] px-6 py-28 text-[#F2F0EC] lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-8 text-[11px] uppercase tracking-[0.3em] opacity-70">Manifesto</p>
            <p className="text-[24px] font-light leading-[1.5] lg:text-[36px]">
              We make eight pieces a season. We keep them in production for one year.
              We do not discount. We do not announce. We restock only when the fabric
              supplier sends us enough to do it properly. Everything is made in Italy
              from naturally dyed, mill-certified materials. We survive because some
              people prefer it this way.
            </p>
            <p className="mt-10 text-[11px] uppercase tracking-[0.3em] opacity-70">— Giulia Rossi, Founder</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

const LOOK_BG = [
  "linear-gradient(145deg, #3A3A3C 0%, #0F0F10 100%)",
  "linear-gradient(145deg, #A99C8A 0%, #5E5449 100%)",
  "linear-gradient(145deg, #E4DAC9 0%, #A99C8A 100%)",
  "linear-gradient(145deg, #2B2B2D 0%, #0F0F10 100%)",
  "linear-gradient(145deg, #6B6258 0%, #3A3632 100%)",
  "linear-gradient(145deg, #CCC2B3 0%, #7E7566 100%)",
];

const FEATURED = [
  { name: "The Atelier Coat · reissue", cat: "Outerwear", price: 1250, bg: "linear-gradient(160deg, #3A3A3C, #0F0F10)" },
  { name: "Silk Blouse, ivory", cat: "Tops", price: 420, bg: "linear-gradient(160deg, #E4DAC9, #A99C8A)" },
  { name: "Wool Trouser, charcoal", cat: "Bottoms", price: 540, bg: "linear-gradient(160deg, #6B6258, #3A3632)" },
  { name: "Linen Dress, natural", cat: "Dresses", price: 620, bg: "linear-gradient(160deg, #CCC2B3, #7E7566)" },
];
