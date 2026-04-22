"use client";
import { CheckoutSuccess } from "../../../_shared/CheckoutSuccess";

export default function DentalSuccessPage() {
  return (
    <section className="px-5 py-20 lg:py-32">
      <CheckoutSuccess
        title="You're on the books."
        descriptor="A confirmation with pre-visit instructions has been sent to your email."
        homeHref="/templates/dental"
        homeLabel="Back to Aster Dental"
        nextSteps={[
          { title: "Check your email", body: "We sent a digital intake form — filling it out in advance saves you ~15 minutes of paperwork in the lobby." },
          { title: "Night-before reminder", body: "You'll get a text at 6 PM the evening before with prep notes (nothing scary — just don't eat right before panoramic imaging)." },
          { title: "Insurance verified by Wednesday", body: "If anything isn't covered the way we expected, we'll reach out before you arrive so you're never surprised by a bill." },
        ]}
      />
    </section>
  );
}
