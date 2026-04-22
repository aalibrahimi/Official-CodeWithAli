import { Mail } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";

export function NewsletterCTA({
  tone = "sidebar",
}: {
  tone?: "sidebar" | "banner";
}) {
  if (tone === "banner") {
    return (
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0A0A0B] via-[#0F0F10] to-[#0A0A0B] px-6 py-12 sm:px-12">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[#C8102E]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-[#D4AF37]/12 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7c158] ring-1 ring-[#D4AF37]/30">
              <Mail className="size-3" /> Monthly
            </div>
            <h2 className="text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.1] tracking-tight text-white">
              One studio dispatch. <em className="not-italic text-[#C8102E]">Every month.</em>
            </h2>
            <p className="mt-4 max-w-lg text-[16px] leading-[1.7] text-white/65">
              What we shipped, what we read, and what we argued about. Zero
              filler, zero affiliates, one-click unsubscribe.
            </p>
          </div>
          <NewsletterForm source="banner" />
        </div>
      </section>
    );
  }

  return (
    <aside className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#e7c158] ring-1 ring-[#D4AF37]/30">
        <Mail className="size-5" />
      </div>
      <h3 className="text-xl font-semibold leading-tight tracking-tight text-white">
        Studio notes, in your inbox.
      </h3>
      <p className="mt-2 text-sm leading-[1.6] text-white/55">
        One short email a month with what we shipped and what we learned.
      </p>
      <div className="mt-4">
        <NewsletterForm compact={false} source="sidebar" />
      </div>
    </aside>
  );
}
