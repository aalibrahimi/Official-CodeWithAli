"use client";
import { MockCheckout } from "../../_shared/MockCheckout";
import { FadeIn } from "../../_shared/PageTransition";

export default function FashionCheckoutPage() {
  return (
    <section className="px-5 pb-24 pt-14 lg:px-10 lg:pt-24">
      <FadeIn>
        <div className="mx-auto mb-14 max-w-3xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em]">Cart · 2 pieces</p>
          <h1 className="font-light leading-[0.95] tracking-tight" style={{ fontSize: "clamp(44px, 8vw, 96px)" }}>
            Check <em className="italic">out.</em>
          </h1>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <MockCheckout
          items={[
            { label: "The Atelier Coat · reissue", sublabel: "Size M · espresso", amount: 1250 },
            { label: "Silk Blouse, ivory", sublabel: "Size S", amount: 420 },
            { label: "Complimentary shipping", sublabel: "DHL Express · 3–5 days", amount: 0 },
          ]}
          successHref="/templates/fashion/checkout/success"
          cta="Place order"
        />
      </FadeIn>
    </section>
  );
}
