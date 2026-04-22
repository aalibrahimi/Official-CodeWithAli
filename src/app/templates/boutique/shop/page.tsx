"use client";
import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "../../_shared/PageTransition";

const ITEMS = [
  { name: "The Quiet Bowl, large", maker: "Aiko Watanabe", cat: "Ceramics", price: 148, bg: "linear-gradient(155deg, #D5C9B4, #6B5B47)" },
  { name: "The Quiet Bowl, small", maker: "Aiko Watanabe", cat: "Ceramics", price: 92, bg: "linear-gradient(155deg, #E4DAC9, #8F8270)" },
  { name: "Linen Napkin, natural", maker: "Maison Rouge", cat: "Linens", price: 82, bg: "linear-gradient(155deg, #EDE8DD, #A89782)" },
  { name: "Hand-blown Carafe", maker: "Alder Glass", cat: "Glassware", price: 215, bg: "linear-gradient(155deg, #C8D3D4, #6B7F83)" },
  { name: "Linen Table Runner", maker: "Maison Rouge", cat: "Linens", price: 124, bg: "linear-gradient(155deg, #E0D6BE, #9E8F73)" },
  { name: "Cedar Serving Board", maker: "Forest & Craft", cat: "Wood", price: 98, bg: "linear-gradient(155deg, #A89782, #5E4B3A)" },
  { name: "Tea Vessel, ash glaze", maker: "Aiko Watanabe", cat: "Ceramics", price: 184, bg: "linear-gradient(155deg, #CFC3AF, #5E4D3A)" },
  { name: "Stemless Wineglass (set of 2)", maker: "Alder Glass", cat: "Glassware", price: 108, bg: "linear-gradient(155deg, #D4DEDF, #7F9193)" },
  { name: "Oak Chopping Board, medium", maker: "Forest & Craft", cat: "Wood", price: 142, bg: "linear-gradient(155deg, #B8A88D, #6B5B47)" },
];
const CATS = ["All", "Ceramics", "Linens", "Glassware", "Wood"];

export default function BoutiqueShopPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <section className="px-6 pb-10 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#6B5B47]">The shop</p>
            <h1 className="font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 72px)" }}>
              All <em className="italic">objects.</em>
            </h1>
            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#6B5B47]/20 pt-6 text-[13px]">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className="pb-1 uppercase tracking-[0.2em] transition-colors"
                  style={{
                    borderBottom: cat === c ? "1px solid #2B241B" : "1px solid transparent",
                    color: cat === c ? "#2B241B" : "#6B5B47",
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
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it, i) => (
            <FadeIn key={it.name} delay={i * 0.04}>
              <Link href="/templates/boutique/checkout" className="group block">
                <div className="overflow-hidden">
                  <div
                    className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ background: it.bg }}
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#6B5B47]">{it.maker}</p>
                  <h3 className="mt-2 text-[16.5px] font-light italic">{it.name}</h3>
                  <p className="mt-1 text-[14px] tabular-nums">${it.price}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
