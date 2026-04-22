"use client";
import { useState } from "react";
import { MockCheckout } from "../../_shared/MockCheckout";
import { FadeIn } from "../../_shared/PageTransition";

const AMOUNTS = [50, 100, 150, 250, 500];

export default function RestaurantCheckoutPage() {
  const [amount, setAmount] = useState(150);

  return (
    <section className="px-5 pb-24 pt-16 lg:px-10 lg:pt-24">
      <FadeIn>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-[11.5px] uppercase tracking-[0.35em] text-[#B7410E]">Gift card</p>
          <h1 className="text-[44px] font-light leading-[1.0] lg:text-[64px]">
            An evening, <em className="italic">given.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[14.5px] italic leading-relaxed text-[#2B1810]/70">
            Usable against any menu, any night. Digitally delivered with your note.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mx-auto mb-10 max-w-3xl">
          <p className="mb-4 text-[11.5px] uppercase tracking-[0.3em] text-[#B7410E]">Amount</p>
          <div className="flex flex-wrap gap-2">
            {AMOUNTS.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAmount(a)}
                className="rounded-sm border px-6 py-3 text-[14px] tabular-nums transition-all"
                style={{
                  borderColor: amount === a ? "#B7410E" : "rgba(43,24,16,0.15)",
                  background: amount === a ? "#B7410E" : "#FFFFFF",
                  color: amount === a ? "#FAF5EB" : "#2B1810",
                }}
              >
                ${a}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <MockCheckout
          items={[
            { label: `Maison Laurent · Gift card`, sublabel: "Delivered by email within 1 hour", amount },
            { label: "Digital delivery", sublabel: "Includes handwritten-style note", amount: 0 },
          ]}
          successHref="/templates/restaurant/checkout/success"
          cta="Send the gift"
        />
      </FadeIn>
    </section>
  );
}
