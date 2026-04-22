"use client";
import { CheckoutSuccess } from "../../../_shared/CheckoutSuccess";
export default function RealEstateSuccessPage() {
  return (
    <section className="px-5 py-20 lg:py-32">
      <CheckoutSuccess
        title="Offer submitted."
        descriptor="Your earnest money is in escrow. Your agent will reach out within 2 hours."
        homeHref="/templates/real-estate"
        homeLabel="Back to Meridian"
        nextSteps={[
          { title: "Offer goes in", body: "Your agent drafts the formal offer tonight based on recent comps and submits it to the listing agent by tomorrow morning." },
          { title: "Response within 24 hours", body: "Most sellers respond within a day — accept, counter, or pass. We negotiate on your behalf with your must-haves in mind." },
          { title: "Options review", body: "Whatever comes back, we walk you through it before you sign anything. No pressure — you can walk away with your deposit." },
        ]}
      />
    </section>
  );
}
