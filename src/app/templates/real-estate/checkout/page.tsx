"use client";
import { MockCheckout } from "../../_shared/MockCheckout";
import { FadeIn } from "../../_shared/PageTransition";

export default function RealEstateCheckoutPage() {
  return (
    <section className="px-5 pb-24 pt-16 lg:px-10 lg:pt-24">
      <FadeIn>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.3em] text-[#1F6F4A]">Offer deposit</p>
          <h1 className="text-[40px] font-semibold leading-[1.05] lg:text-[60px]">
            1% earnest money.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[14.5px] leading-relaxed text-[#0F2A1D]/75">
            Fully refundable until contract acceptance. Credits toward your closing costs.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <MockCheckout
          items={[
            { label: "The Balcones House", sublabel: "4 bed / 3 bath · Travis Heights", amount: 12950 },
            { label: "Representation agreement", sublabel: "Buyer-side · 30-day exclusive", amount: 0 },
          ]}
          successHref="/templates/real-estate/checkout/success"
          cta="Place offer"
        />
      </FadeIn>
    </section>
  );
}
