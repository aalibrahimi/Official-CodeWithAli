"use client";
import { MockCheckout } from "../../_shared/MockCheckout";
import { FadeIn } from "../../_shared/PageTransition";

export default function SaasCheckoutPage() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-16 lg:px-10 lg:pt-24">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#7C5CFF]/15 blur-[100px]" />
      <FadeIn>
        <div className="relative mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A78BFA]">Start trial</p>
          <h1 className="text-[40px] font-semibold leading-[1.05] tracking-tight lg:text-[56px]">
            14 days free.<br />No card required.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[14.5px] text-white/70">
            We still ask for payment details to make billing seamless after the trial —
            but you can cancel with one command and never be charged.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <MockCheckout
          items={[
            { label: "Prism · Team", sublabel: "5 seats · billed annually", amount: 2340 },
            { label: "14-day free trial credit", sublabel: "Applied now", amount: -2340 },
          ]}
          successHref="/templates/saas/checkout/success"
          cta="Start trial"
        />
      </FadeIn>
    </section>
  );
}
