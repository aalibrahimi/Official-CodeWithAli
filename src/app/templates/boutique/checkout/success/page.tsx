"use client";
import { CheckoutSuccess } from "../../../_shared/CheckoutSuccess";
export default function BoutiqueSuccessPage() {
  return (
    <section className="px-5 py-20 lg:py-32">
      <CheckoutSuccess
        title="Thank you."
        descriptor="Your objects are being wrapped. Shipping usually takes 3–5 days."
        homeHref="/templates/boutique"
        homeLabel="Back to Atelier Hush"
        nextSteps={[
          { title: "Hand-wrapped in linen", body: "Each object is wrapped in unbleached linen cloth and packed in recycled cardboard — nothing plastic touches your order." },
          { title: "Ships by end of week", body: "Orders placed before noon Tuesday ship that Friday. Tracking link arrives once it's in the courier's hands." },
          { title: "90-day thoughtfulness window", body: "If an object doesn't settle into your home the way you hoped, return it within 90 days — we'll find another home for it." },
        ]}
      />
    </section>
  );
}
