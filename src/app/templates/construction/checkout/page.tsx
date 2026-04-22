"use client";
import { MockCheckout } from "../../_shared/MockCheckout";
import { FadeIn } from "../../_shared/PageTransition";

export default function ConstructionCheckoutPage() {
  return (
    <section className="px-5 pb-24 pt-16 lg:px-10 lg:pt-24">
      <FadeIn>
        <div className="mx-auto mb-14 max-w-3xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#F2B705]">Quote deposit</p>
          <h1 className="font-black leading-[0.95] tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 72px)" }}>
            HOLD YOUR SPOT<br />IN OUR SCHEDULE.
          </h1>
          <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/70">
            $2,500 deposit holds a spot for our estimating team. Fully refundable
            if you don't accept our quote within 14 days of receipt.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <MockCheckout
          items={[
            { label: "Estimating deposit", sublabel: "Site visit + quote within 10 business days", amount: 2500 },
            { label: "Pre-construction meeting", sublabel: "Included when you accept the quote", amount: 0 },
          ]}
          successHref="/templates/construction/checkout/success"
          cta="Place deposit"
        />
      </FadeIn>
    </section>
  );
}
