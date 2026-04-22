"use client";
import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "../../_shared/PageTransition";

const ITEMS = [
  { name: "The Atelier Coat", cat: "Outerwear", price: 1250, bg: "linear-gradient(160deg, #3A3A3C, #0F0F10)" },
  { name: "Silk Blouse, ivory", cat: "Tops", price: 420, bg: "linear-gradient(160deg, #E4DAC9, #A99C8A)" },
  { name: "Wool Trouser, charcoal", cat: "Bottoms", price: 540, bg: "linear-gradient(160deg, #6B6258, #3A3632)" },
  { name: "Linen Dress, natural", cat: "Dresses", price: 620, bg: "linear-gradient(160deg, #CCC2B3, #7E7566)" },
  { name: "Cashmere Knit, espresso", cat: "Tops", price: 680, bg: "linear-gradient(160deg, #5E4B3A, #2B1F15)" },
  { name: "Pleated Skirt, midnight", cat: "Bottoms", price: 480, bg: "linear-gradient(160deg, #25252A, #0F0F10)" },
  { name: "The Trench, stone", cat: "Outerwear", price: 1180, bg: "linear-gradient(160deg, #B5A998, #6E6354)" },
  { name: "Silk Slip, noir", cat: "Dresses", price: 540, bg: "linear-gradient(160deg, #1F1F22, #0F0F10)" },
];
const CATS = ["All", "Outerwear", "Tops", "Bottoms", "Dresses"];

export default function FashionShopPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <section className="px-6 pb-10 pt-14 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em]">SS/26 — shop</p>
            <h1 className="font-light leading-[0.9] tracking-tight" style={{ fontSize: "clamp(56px, 10vw, 180px)" }}>
              Shop.
            </h1>
            <div className="mt-10 flex flex-wrap gap-1 border-t border-[#0F0F10]/12 pt-6">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className="px-4 py-2 text-[11.5px] uppercase tracking-[0.22em] transition-colors"
                  style={{
                    background: cat === c ? "#0F0F10" : "transparent",
                    color: cat === c ? "#F2F0EC" : "#0F0F10",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((it, i) => (
            <FadeIn key={it.name} delay={i * 0.04}>
              <Link href="/templates/fashion/checkout" className="group block">
                <div className="overflow-hidden bg-[#E8E4DC]">
                  <div
                    className="aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ background: it.bg }}
                  >
                    <div className="flex h-full items-end p-4 text-[9px] uppercase tracking-[0.3em] text-white/75">
                      {it.cat}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="text-[15px] font-medium">{it.name}</p>
                  <p className="text-[14px] tabular-nums">${it.price}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
