"use client";
import { CheckoutSuccess } from "../../../_shared/CheckoutSuccess";
export default function LawSuccessPage() {
  return (
    <section className="px-5 py-20 lg:py-32">
      <CheckoutSuccess
        title="Retainer received."
        descriptor="A conflict check is underway. A partner will reach out within 24 hours."
        homeHref="/templates/law"
        homeLabel="Back to Whitmore & Hale"
        nextSteps={[
          { title: "Conflict check", body: "We run your matter against the firm's conflict database. If we can't take it, we refer you to firms who can — and refund immediately." },
          { title: "Partner call", body: "A partner qualified for your matter schedules an hour on your calendar, usually within 24 hours of clearing conflicts." },
          { title: "Written matter memo", body: "Within 72 hours of the call, you receive a written memo summarizing your options, risks, and the scope of any proposed engagement." },
        ]}
      />
    </section>
  );
}
