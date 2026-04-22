"use client";
import { MockCheckout } from "../../_shared/MockCheckout";
import { FadeIn } from "../../_shared/PageTransition";

export default function LawCheckoutPage() {
  return (
    <section className="px-5 pb-24 pt-16 lg:px-10 lg:pt-24">
      <FadeIn>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-[11.5px] uppercase tracking-[0.35em] text-[#0B2447]/65">Retainer</p>
          <h1 className="text-[40px] leading-[1.05] lg:text-[60px]">
            Initial consultation retainer.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[14.5px] italic leading-relaxed text-[#0B2447]/75">
            Credited toward your matter if we're engaged. Refundable if we're not.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <MockCheckout
          items={[
            { label: "Initial consultation retainer", sublabel: "1-hour call + conflict check", amount: 750 },
            { label: "Matter memo (written follow-up)", sublabel: "Summary of your options", amount: 0 },
          ]}
          successHref="/templates/law/checkout/success"
          cta="Place retainer"
        />
      </FadeIn>
    </section>
  );
}
