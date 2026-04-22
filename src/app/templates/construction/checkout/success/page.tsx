"use client";
import { CheckoutSuccess } from "../../../_shared/CheckoutSuccess";
export default function ConstructionSuccessPage() {
  return (
    <section className="px-5 py-20 lg:py-32">
      <CheckoutSuccess
        title="DEPOSIT RECEIVED."
        descriptor="A project lead will reach out within 48 hours to schedule the walkthrough."
        homeHref="/templates/construction"
        homeLabel="Back to Ironline"
        nextSteps={[
          { title: "Site walkthrough", body: "A project manager and our senior estimator visit the site to measure, photograph, and identify anything that affects pricing — typically 2 hours." },
          { title: "Detailed quote in 10 days", body: "Line-item breakdown of labor, materials, subs, permitting, and contingency. Not a round number — the actual math." },
          { title: "Pre-construction meeting", body: "If you accept, we meet to align on schedule, access, communications cadence, and any design decisions still open." },
        ]}
      />
    </section>
  );
}
