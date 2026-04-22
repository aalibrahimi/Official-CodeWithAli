"use client";
import { CheckoutSuccess } from "../../../_shared/CheckoutSuccess";
export default function RestaurantSuccessPage() {
  return (
    <section className="px-5 py-20 lg:py-32">
      <CheckoutSuccess
        title="The gift is on its way."
        descriptor="It'll arrive in their inbox within an hour."
        homeHref="/templates/restaurant"
        homeLabel="Back to Maison Laurent"
        nextSteps={[
          { title: "Check your own inbox", body: "You'll get a copy so you have a receipt — and can forward it again if anything gets buried in their spam folder." },
          { title: "They redeem, not print", body: "Gift cards are redeemed with a code at the table or online — no physical anything to carry." },
          { title: "Good forever", body: "No expiration, no fees. They can use $10 at a time or the whole balance in one sitting." },
        ]}
      />
    </section>
  );
}
