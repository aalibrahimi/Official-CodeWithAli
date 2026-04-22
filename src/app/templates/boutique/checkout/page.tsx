"use client";
import { MockCheckout } from "../../_shared/MockCheckout";
import { FadeIn } from "../../_shared/PageTransition";

export default function BoutiqueCheckoutPage() {
  return (
    <section className="px-5 pb-24 pt-16 lg:px-10 lg:pt-24">
      <FadeIn>
        <div className="mx-auto mb-14 max-w-3xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#6B5B47]">Your cart</p>
          <h1 className="font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 72px)" }}>
            Check <em className="italic">out.</em>
          </h1>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <MockCheckout
          items={[
            { label: "The Quiet Bowl, large", sublabel: "by Aiko Watanabe", amount: 148 },
            { label: "Linen Napkin, natural (set of 4)", sublabel: "by Maison Rouge", amount: 82 },
            { label: "Hand wrap in linen", sublabel: "Included", amount: 0 },
          ]}
          successHref="/templates/boutique/checkout/success"
          cta="Place order"
        />
      </FadeIn>
    </section>
  );
}
