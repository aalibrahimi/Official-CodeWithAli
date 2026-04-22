"use client";
import { FadeIn } from "../../_shared/PageTransition";

const MENU = [
  {
    section: "To begin",
    tagline: "Small plates, shared or not.",
    items: [
      { n: "Heirloom tomato", d: "aged chèvre, basil oil, fleur de sel", price: 16 },
      { n: "Sea bream crudo", d: "citron confit, fennel frond, olive", price: 21 },
      { n: "Roasted beets", d: "whipped ricotta, hazelnut, thyme honey", price: 15 },
      { n: "Country pâté", d: "pickled shallot, cornichon, grilled sourdough", price: 18 },
      { n: "Burrata", d: "peach, torn basil, aged balsamic", price: 19 },
      { n: "Marinated olives + almonds", d: "orange zest, rosemary", price: 10 },
    ],
  },
  {
    section: "Pastas",
    tagline: "Made in-house. Early and late.",
    items: [
      { n: "Saffron tagliatelle", d: "chanterelle, brown butter, parmesan", price: 26 },
      { n: "Cacio e pepe", d: "hand-cut spaghetti, black pepper, pecorino", price: 22 },
      { n: "Wild mushroom agnolotti", d: "brown butter, sage, hazelnut", price: 28 },
      { n: "Lobster ravioli", d: "tomato, tarragon, lemon", price: 36 },
    ],
  },
  {
    section: "Mains",
    tagline: "Hearth-driven, Provençal roots.",
    items: [
      { n: "Lamb shoulder, seven-hour", d: "stone-fruit mostarda, garlic jus", price: 42 },
      { n: "Roast branzino", d: "preserved lemon, herbs, sea salt", price: 38 },
      { n: "Bistecca · 16 oz ribeye", d: "rosemary, garlic confit, frites", price: 58 },
      { n: "Duck magret", d: "turnip, charred cherry, duck jus", price: 44 },
      { n: "Vegetable plate", d: "whatever is best that morning", price: 28 },
      { n: "Mussels à la marinière", d: "white wine, shallot, butter, frites", price: 32 },
    ],
  },
  {
    section: "Dessert",
    tagline: "One of each is encouraged.",
    items: [
      { n: "Lavender honey crémeux", d: "shortbread, orange supreme", price: 12 },
      { n: "Flourless chocolate", d: "olive oil, sea salt, crème fraîche", price: 13 },
      { n: "Seasonal fruit tart", d: "almond cream, pâte sucrée", price: 12 },
      { n: "Selection of cheese", d: "three, with accompaniments", price: 18 },
    ],
  },
];

const WINE = [
  { n: "Rosé de Provence · 2024", d: "Bandol, France", price: "14 / 54" },
  { n: "Sancerre · 2023", d: "Loire, France", price: "18 / 72" },
  { n: "Chianti Classico · 2021", d: "Tuscany, Italy", price: "16 / 64" },
  { n: "Côtes du Rhône · 2022", d: "Rhône Valley, France", price: "14 / 54" },
  { n: "Burgundy blanc · 2022", d: "Meursault, France", price: "22 / 88" },
  { n: "Natural orange · 2023", d: "Friuli, Italy", price: "17 / 68" },
];

export default function RestaurantMenuPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn>
            <p className="mb-4 text-[11.5px] uppercase tracking-[0.35em] text-[#B7410E]">
              The menu · changes every 3 weeks
            </p>
            <h1 className="text-[56px] font-light leading-[1.0] lg:text-[88px]">
              À la <em className="italic">carte.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-[14px] leading-relaxed italic text-[#2B1810]/65">
              Prices in USD. Vegetarian items on request — just ask, we can almost always make it work.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-4xl space-y-16">
          {MENU.map((sec, idx) => (
            <FadeIn key={sec.section} delay={idx * 0.04}>
              <div>
                <div className="mb-8 flex items-baseline justify-between border-b border-[#B7410E]/20 pb-4">
                  <h2 className="text-[32px] font-light lg:text-[42px]">{sec.section}</h2>
                  <p className="text-[12px] italic text-[#2B1810]/60">{sec.tagline}</p>
                </div>
                <ul className="space-y-6">
                  {sec.items.map((it) => (
                    <li key={it.n} className="grid grid-cols-[1fr_auto] gap-5 text-[15px] lg:text-[16px]">
                      <div>
                        <p className="font-medium">{it.n}</p>
                        <p className="mt-0.5 text-[13.5px] italic text-[#2B1810]/65">{it.d}</p>
                      </div>
                      <p className="self-start tabular-nums text-[#B7410E]">{it.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Wine */}
      <section className="bg-[#2B1810] px-6 py-24 text-[#FAF5EB] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-10 flex items-baseline justify-between border-b border-[#C7A27A]/25 pb-4">
              <h2 className="text-[32px] font-light lg:text-[42px]">The wine list</h2>
              <p className="text-[12px] italic text-[#FAF5EB]/65">Glass / bottle</p>
            </div>
            <ul className="space-y-6">
              {WINE.map((w) => (
                <li key={w.n} className="grid grid-cols-[1fr_auto] gap-5 text-[15px] lg:text-[16px]">
                  <div>
                    <p className="font-medium">{w.n}</p>
                    <p className="mt-0.5 text-[13.5px] italic text-[#FAF5EB]/65">{w.d}</p>
                  </div>
                  <p className="self-start tabular-nums text-[#C7A27A]">{w.price}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
