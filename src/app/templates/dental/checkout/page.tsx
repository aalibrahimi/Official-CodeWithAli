"use client";

import { MockCheckout } from "../../_shared/MockCheckout";
import { FadeIn } from "../../_shared/PageTransition";

export default function DentalCheckoutPage() {
  return (
    <section className="px-5 pb-24 pt-16 lg:px-10 lg:pt-24">
      <FadeIn>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.28em] text-[#0EA5B7]">
            Book your visit
          </p>
          <h1 className="text-[40px] font-semibold leading-[1.05] tracking-tight lg:text-[56px]">
            Secure your appointment with a $75 deposit.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-[#0B3D4C]/70">
            The deposit credits to your first visit. Cancellations more than 24 hours
            ahead are fully refunded.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <MockCheckout
          items={[
            {
              label: "New-patient comprehensive exam",
              sublabel: "Dr. Maya Patel · Thursday, 2:15 PM",
              amount: 180,
            },
            {
              label: "Deposit credit",
              sublabel: "Applied at visit",
              amount: -105,
            },
          ]}
          successHref="/templates/dental/checkout/success"
          cta="Reserve my visit"
        />
      </FadeIn>
    </section>
  );
}
