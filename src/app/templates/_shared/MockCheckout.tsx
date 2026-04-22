/**
 * MockCheckout — reusable fake checkout form each template imports
 * with its own line-items. Validates inputs client-side, pretends
 * to process for ~1s, then router-pushes to the template's
 * `/checkout/success` page. No Stripe, no real payment.
 *
 * Each template layout sets --tpl-accent / --tpl-fg / --tpl-bg
 * CSS vars; this form consumes those so the look matches without
 * duplicate styling per template.
 */
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Lock, CreditCard, Check, Loader2 } from "lucide-react";

export interface LineItem {
  label: string;
  sublabel?: string;
  amount: number;
}

export function MockCheckout({
  items,
  currency = "USD",
  successHref,
  cta = "Complete payment",
}: {
  items: LineItem[];
  currency?: string;
  successHref: string;
  cta?: string;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = items.reduce((s, i) => s + i.amount, 0);
  const tax = Math.round(subtotal * 0.0825 * 100) / 100;
  const total = subtotal + tax;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(data.get("email") ?? "").includes("@")) next.email = "Valid email required";
    if (String(data.get("name") ?? "").trim().length < 2) next.name = "Full name required";
    const card = String(data.get("card") ?? "").replace(/\s/g, "");
    if (!/^\d{15,16}$/.test(card)) next.card = "Card number should be 15–16 digits";
    if (!/^\d{2}\s*\/\s*\d{2,4}$/.test(String(data.get("expiry") ?? ""))) next.expiry = "MM / YY";
    if (!/^\d{3,4}$/.test(String(data.get("cvc") ?? ""))) next.cvc = "3 or 4 digits";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    // Fake "processing" delay so the button state feels real.
    await new Promise((r) => setTimeout(r, 1100));
    router.push(successHref);
  };

  return (
    <div
      className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
      style={{ color: "var(--tpl-fg, #111)" }}
    >
      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-6">
        <section>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] opacity-60">
            Contact
          </h2>
          <Field name="email" type="email" label="Email" error={errors.email} placeholder="you@example.com" />
        </section>

        <section>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] opacity-60">
            Billing
          </h2>
          <Field name="name" label="Full name" error={errors.name} placeholder="Alex Morgan" />
          <Field name="address" label="Address" placeholder="123 Market St." />
          <div className="grid grid-cols-3 gap-3">
            <Field name="city" label="City" placeholder="Austin" />
            <Field name="state" label="State" placeholder="TX" />
            <Field name="zip" label="ZIP" placeholder="78704" />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] opacity-60">
            Payment
          </h2>
          <Field
            name="card"
            label="Card number"
            error={errors.card}
            placeholder="4242 4242 4242 4242"
            icon={<CreditCard className="h-4 w-4 opacity-40" />}
          />
          <div className="grid grid-cols-2 gap-3">
            <Field name="expiry" label="Expiry" error={errors.expiry} placeholder="12 / 28" />
            <Field name="cvc" label="CVC" error={errors.cvc} placeholder="123" />
          </div>
        </section>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.985 }}
          disabled={submitting}
          type="submit"
          className="group relative flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 text-[14px] font-semibold uppercase tracking-[0.18em] text-white transition-colors disabled:opacity-70"
          style={{ background: "var(--tpl-accent, #111)" }}
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" />
              {cta} · {format(total, currency)}
            </>
          )}
        </motion.button>

        <p className="flex items-center justify-center gap-2 text-[11.5px] opacity-55">
          <Check className="h-3 w-3" /> Demo checkout · nothing will be charged.
        </p>
      </form>

      {/* Summary */}
      <aside
        className="h-max rounded-xl border p-6 lg:sticky lg:top-28"
        style={{ borderColor: "color-mix(in oklch, var(--tpl-accent, #111) 25%, transparent)", background: "var(--tpl-bg, #fff)" }}
      >
        <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.2em] opacity-70">
          Order summary
        </h3>
        <ul className="space-y-4 border-b pb-5" style={{ borderColor: "color-mix(in oklch, currentColor 12%, transparent)" }}>
          {items.map((it, i) => (
            <li key={i} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[14px] font-semibold leading-tight">{it.label}</p>
                {it.sublabel && (
                  <p className="mt-0.5 text-[12px] opacity-60">{it.sublabel}</p>
                )}
              </div>
              <span className="shrink-0 text-[14px] tabular-nums">{format(it.amount, currency)}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-5 space-y-2 text-[13px]">
          <Row label="Subtotal" value={format(subtotal, currency)} />
          <Row label="Estimated tax" value={format(tax, currency)} />
          <Row label="Total" value={format(total, currency)} bold />
        </dl>
      </aside>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
  icon,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  icon?: React.ReactNode;
}) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-[12px] font-medium opacity-70">{label}</span>
      <span className="relative block">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md border bg-white/70 px-3.5 py-2.5 text-[14px] outline-none transition-colors focus:bg-white"
          style={{
            borderColor: error
              ? "#DC2626"
              : "color-mix(in oklch, currentColor 15%, transparent)",
          }}
        />
        {icon && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            {icon}
          </span>
        )}
      </span>
      {error && <span className="mt-1 block text-[11.5px] text-red-600">{error}</span>}
    </label>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "pt-2 text-[15px] font-semibold" : "opacity-75"}`}>
      <dt>{label}</dt>
      <dd className="tabular-nums">{value}</dd>
    </div>
  );
}

function format(n: number, currency: string): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(n);
}
