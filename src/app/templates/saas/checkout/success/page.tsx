"use client";
import { CheckoutSuccess } from "../../../_shared/CheckoutSuccess";
export default function SaasSuccessPage() {
  return (
    <section className="px-5 py-20 lg:py-32">
      <CheckoutSuccess
        title="Trial active."
        descriptor="Your workspace is provisioning. You'll get a magic link in your email."
        homeHref="/templates/saas"
        homeLabel="Back to Prism"
        nextSteps={[
          { title: "Install the CLI", body: "curl -fsSL prism.sh/install | sh — or download the binary from the dashboard. Connect your first environment in under 60 seconds." },
          { title: "Invite your team", body: "SSO is already configured for your email domain. Your teammates join with Google or Okta — no passwords, no invitations to accept." },
          { title: "Deploy something", body: "Point the CLI at a repo and run prism deploy. First successful deploy unlocks progressive strategies, auto-rollback, and the dashboard tour." },
        ]}
      />
    </section>
  );
}
