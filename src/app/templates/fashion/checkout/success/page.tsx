"use client";
import { CheckoutSuccess } from "../../../_shared/CheckoutSuccess";
export default function FashionSuccessPage() {
  return (
    <section className="px-5 py-20 lg:py-32">
      <CheckoutSuccess
        title="Ordered."
        descriptor="Your pieces ship from Bologna within 48 hours."
        homeHref="/templates/fashion"
        homeLabel="Back to NOIR"
        nextSteps={[
          { title: "Quality check", body: "Every piece is inspected and steam-pressed before it leaves our atelier. No exceptions." },
          { title: "Ships in 48 hours", body: "DHL Express with tracking. A name plate is sewn in by hand before boxing — that's a quiet team member's signature, not ours." },
          { title: "60-day exchange window", body: "Fit isn't right, fabric isn't what you pictured — ship it back, we remake or refund. No drama." },
        ]}
      />
    </section>
  );
}
