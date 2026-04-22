"use client";
import { motion } from "motion/react";
import { FadeIn } from "../../_shared/PageTransition";

const LOOKS = [
  { bg: "linear-gradient(155deg, #3A3A3C 0%, #0F0F10 100%)", label: "Look 01 · The Atelier Coat, Silk Slip" },
  { bg: "linear-gradient(155deg, #A99C8A 0%, #5E5449 100%)", label: "Look 02 · Silk Blouse, Wool Trouser" },
  { bg: "linear-gradient(155deg, #E4DAC9 0%, #A99C8A 100%)", label: "Look 03 · Linen Dress" },
  { bg: "linear-gradient(155deg, #2B2B2D 0%, #0F0F10 100%)", label: "Look 04 · Cashmere Knit, Pleated Skirt" },
  { bg: "linear-gradient(155deg, #6B6258 0%, #3A3632 100%)", label: "Look 05 · The Trench, Wool Trouser" },
  { bg: "linear-gradient(155deg, #CCC2B3 0%, #7E7566 100%)", label: "Look 06 · Silk Blouse, Silk Slip" },
];

export default function FashionLookbookPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-14 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-[1600px]">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em]">Lookbook · SS/26</p>
            <h1 className="font-light leading-[0.9] tracking-tight" style={{ fontSize: "clamp(56px, 10vw, 180px)" }}>
              Campaign.
            </h1>
          </div>
        </FadeIn>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1600px] space-y-24 lg:space-y-32">
          {LOOKS.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid gap-6 ${i % 2 === 0 ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-[1fr_2fr]"}`}
            >
              <div
                className={`aspect-[3/4] lg:aspect-[4/5] ${i % 2 === 0 ? "" : "md:order-2"}`}
                style={{ background: l.bg }}
              />
              <div className="flex flex-col justify-end">
                <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">{String(i + 1).padStart(2, "0")} / {String(LOOKS.length).padStart(2, "0")}</p>
                <p className="mt-3 text-[22px] font-light italic lg:text-[28px]">{l.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
