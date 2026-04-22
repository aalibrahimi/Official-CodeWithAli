/**
 * ContactForm — 2026 rewrite.
 *
 * Three goals behind the rewrite:
 *   1. Richer context so leads come in qualified (budget, timeline,
 *      company) instead of a 3-word "call me" from nowhere.
 *   2. Client-side validation with proper error surfacing — the v1
 *      just let the browser's built-in `required` check run, and
 *      there was no feedback on why a submission failed.
 *   3. Anti-spam. We've been getting junk, so the form now ships
 *      with a honeypot field, a minimum time-to-submit gate, and
 *      heuristic content filters. Server-side route does the same
 *      validation plus IP rate limiting as a second line.
 *
 * Keeps existing i18n keys (`Contact.*`) for the fields that already
 * have translations; new fields (company, phone, budget, timeline,
 * hearAbout) are English-only for now and can be localized later.
 */
"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Loader2, Send, CheckCircle2, AlertCircle, User, Mail, Building2,
  Phone, Briefcase, DollarSign, Clock, FileText, Sparkles, ArrowRight,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { checkSubmission, isGibberish, isNameInvalid } from "@/lib/spam-heuristics";

interface Props {
  /** Kept for backwards compatibility with the v1 prop surface. */
  scrollToTop?: boolean;
  badge?: string;
  header?: string;
  desc?: string;
  btnText?: string;
}

/* ─── Spam detection heuristics ──────────────────────────────── */
// Simple but pragmatic: flag messages that look commercial-spammy.
// Server mirrors the same patterns so client bypass alone doesn't
// get a bot through.
const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|bitcoin|crypto\s*signal|forex|binary\s*options)\b/i,
  /\b(loan|payday|debt\s*relief|refinance)\b/i,
  /\bclick\s*here\b/i,
  /\bseo\s*(services|rankings?|guarantee)\b/i,
  /\b(100%|guaranteed)\s*(success|results?|rankings?)\b/i,
  /\b(buy|cheap|order)\s+(now|online)\b/i,
];

const MIN_DETAIL_CHARS = 40;
const MAX_DETAIL_CHARS = 2000;
const MIN_TIME_TO_SUBMIT_MS = 3000;

/* ─── Form state types ──────────────────────────────────────── */

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
  hearAbout: string;
  /** Honeypot field. Bots fill it; humans never see it. */
  website: string;
}

type FieldErrors = Partial<Record<keyof FormState | "general", string>>;

const INITIAL: FormState = {
  name: "", email: "", company: "", phone: "",
  service: "", budget: "", timeline: "", details: "",
  hearAbout: "", website: "",
};

/* ─── Options ─────────────────────────────────────────────── */

const BUDGETS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const TIMELINES = [
  "ASAP · 1–2 weeks",
  "Within a month",
  "1–3 months",
  "3+ months",
  "Exploring · no firm date",
];

const HEAR_ABOUT = [
  "Google search",
  "Referral from a client",
  "Upwork",
  "LinkedIn",
  "Twitter / X",
  "Other",
];

/* ─── Component ─────────────────────────────────────────────── */

export default function ContactForm({
  scrollToTop,
  btnText,
}: Props) {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);

  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, true>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  // Time the form mounted — used to reject too-fast submissions (bots).
  const [mountedAt] = useState(() => Date.now());

  useEffect(() => {
    if (scrollToTop) window.scrollTo({ top: 0 });
  }, [scrollToTop]);

  /* ── Validation ── */

  /**
   * `live` = called on every keystroke. Only fires the "hard" checks
   * (spam heuristics) — skips the empty-field "please fill this in"
   * complaints that only make sense at blur time or submit time.
   * `hard` = called on blur and submit. Fires everything.
   */
  const validateField = (
    key: keyof FormState,
    value: string,
    mode: "live" | "hard" = "hard",
  ): string | undefined => {
    switch (key) {
      case "name":
        if (mode === "hard" && value.trim().length < 2)
          return "Please enter your full name.";
        if (value.trim().length >= 2) {
          const nameG = isNameInvalid(value);
          if (nameG.bad) return "This doesn't look like a real name. This form blocks automated submissions.";
        }
        return;
      case "email":
        if (mode === "hard" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))
          return "Please enter a valid email.";
        return;
      case "service":
        if (mode === "hard" && !value) return "Pick the service you're interested in.";
        return;
      case "budget":
        if (mode === "hard" && !value) return "Approximate budget helps us propose the right scope.";
        return;
      case "timeline":
        if (mode === "hard" && !value) return "Tell us roughly when you want to start.";
        return;
      case "company": {
        // Only fires for gibberish mash — empty is fine (optional field).
        if (value.trim().length >= 8) {
          const cg = isGibberish(value, { minLength: 8 });
          if (cg.bad) return "That company name looks invalid.";
        }
        return;
      }
      case "details": {
        const v = value.trim();
        if (mode === "hard" && v.length < MIN_DETAIL_CHARS)
          return `Please share at least ${MIN_DETAIL_CHARS} characters about the project.`;
        if (v.length > MAX_DETAIL_CHARS)
          return `Keep it under ${MAX_DETAIL_CHARS} characters — save the details for the call.`;
        if (SPAM_PATTERNS.some((re) => re.test(v)))
          return "This form rejects promotional content. Please write about your project.";
        if ((v.match(/https?:\/\//gi) ?? []).length > 3)
          return "Please include at most three links in your message.";
        if (v.length >= 20) {
          const g = isGibberish(v, { minLength: 20 });
          if (g.bad) return "This form rejects automated and low-content submissions. Please write a real project description.";
        }
        return;
      }
      case "phone":
        if (value && value.replace(/\D/g, "").length < 7)
          return "That phone number looks incomplete.";
        return;
      default:
        return;
    }
  };

  const validateAll = (): FieldErrors => {
    const next: FieldErrors = {};
    (["name","email","service","budget","timeline","details","phone","company"] as const).forEach((k) => {
      const err = validateField(k, form[k], "hard");
      if (err) next[k] = err;
    });
    return next;
  };

  const isValid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()) &&
      !!form.service &&
      !!form.budget &&
      !!form.timeline &&
      form.details.trim().length >= MIN_DETAIL_CHARS &&
      form.details.trim().length <= MAX_DETAIL_CHARS
    );
  }, [form]);

  /* ── Field updater ── */

  // `spamFlagged` turns on the moment ANY field's live validation
  // catches a heuristic hit (gibberish name, mash-pattern details,
  // spam keyword). It stays on until they fix the content. Scares
  // off casual spammers who see the banner and bail, and also
  // surfaces to legit users if they accidentally typed something
  // the heuristics flag.
  const [spamFlagged, setSpamFlagged] = useState(false);

  const recomputeSpamFlag = (next: FormState) => {
    const hits = [
      validateField("name", next.name, "live"),
      validateField("company", next.company, "live"),
      validateField("details", next.details, "live"),
    ];
    setSpamFlagged(hits.some(Boolean));
  };

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    const next = { ...form, [key]: value };
    setForm(next);

    // Live-validate the field that just changed. If it's a field
    // that has a live check (name/company/details) we run in live
    // mode — otherwise we clear any existing error and wait for blur.
    const liveChecked = key === "name" || key === "company" || key === "details";
    if (liveChecked && (touched[key] || (value as string).length > 0)) {
      const err = validateField(key, value as string, "live");
      setErrors((p) => ({ ...p, [key]: err }));
    } else if (errors[key]) {
      // Clear the existing error on non-live fields so the user isn't
      // stuck with stale errors while they're editing.
      setErrors((p) => ({ ...p, [key]: undefined }));
    }

    // Re-check the global spam flag across all flagged fields.
    if (liveChecked) recomputeSpamFlag(next);
  };

  const blur = (key: keyof FormState) => {
    setTouched((p) => ({ ...p, [key]: true }));
    const err = validateField(key, form[key], "hard");
    setErrors((p) => ({ ...p, [key]: err }));
  };

  /* ── Submit ── */

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    // Honeypot: bots fill this, humans never see it. Fail silently
    // so the bot thinks it succeeded.
    if (form.website) {
      setSucceeded(true);
      return;
    }

    // Too-fast submission → bot.
    if (Date.now() - mountedAt < MIN_TIME_TO_SUBMIT_MS) {
      setErrors({ general: "Please take a moment to review your message." });
      return;
    }

    const errs = validateAll();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Mark every field as touched so errors render.
      setTouched({
        name: true, email: true, service: true, budget: true,
        timeline: true, details: true, phone: true,
      });
      return;
    }

    // Cross-field anti-spam: catch the "ssss everywhere" pattern
    // the keyword filters miss.
    const sub = checkSubmission({
      name: form.name,
      email: form.email,
      company: form.company || null,
      details: form.details,
    });
    if (!sub.ok) {
      setErrors({ general: "Your message didn't go through. Please review each field and try again." });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || null,
          phone: form.phone.trim() || null,
          service: form.service,
          budget: form.budget,
          timeline: form.timeline,
          projectDetails: form.details.trim(),
          hearAbout: form.hearAbout || null,
          // Include the time-to-submit so server can also reject fast
          // submissions as a second line of defense.
          elapsedMs: Date.now() - mountedAt,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Failed to submit");
      }

      setSucceeded(true);
      setForm(INITIAL);
    } catch (err) {
      console.error("[contact] submit failed:", err);
      setErrors({ general: t("status.error") });
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Render: success state replaces form entirely ── */

  if (succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl rounded-2xl border border-[#0F0F10]/10 bg-white p-10 text-center dark:border-white/10 dark:bg-[#0D0D0E] lg:p-14"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8102E] text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
          Message sent
        </p>
        <h3
          className="font-light leading-[1.1] tracking-[-0.01em]"
          style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
        >
          {t("status.success")}
        </h3>
        <p className="mt-5 text-[14.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
          We review every message personally and reply within 24 hours —
          usually the same day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto w-full max-w-3xl space-y-10">
      {/* Spam-detected banner — surfaces the moment ANY field's live
          heuristic fires. Intentionally blunt copy: makes real
          visitors curious rather than confused, and makes casual
          spammers close the tab. Animates in/out to feel responsive. */}
      <AnimatePresence>
        {spamFlagged && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-xl border border-[#C8102E]/30 bg-[#C8102E]/5 p-4 text-[#C8102E]"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em]">
                  Automated submission detected
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed">
                  Our anti-spam system flagged one or more fields as
                  low-content, keyboard-mashed, or promotional. Every
                  submission is logged with your IP and reviewed. Real
                  prospects, please write out your project in plain
                  language — we'll reply within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Contact section ── */}
      <Section eyebrow="01 · You" title="How do we reach you?">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            Icon={User}
            label={t("field.name.label")}
            name="name"
            value={form.name}
            onChange={(v) => setField("name", v)}
            onBlur={() => blur("name")}
            placeholder={t("field.name.placeholder")}
            error={touched.name ? errors.name : undefined}
            required
          />
          <Field
            Icon={Mail}
            label={t("field.email.label")}
            name="email"
            type="email"
            value={form.email}
            onChange={(v) => setField("email", v)}
            onBlur={() => blur("email")}
            placeholder={t("field.email.placeholder")}
            error={touched.email ? errors.email : undefined}
            required
          />
          <Field
            Icon={Building2}
            label="Company"
            name="company"
            value={form.company}
            onChange={(v) => setField("company", v)}
            placeholder="Acme Inc. (optional)"
          />
          <Field
            Icon={Phone}
            label="Phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(v) => setField("phone", v)}
            onBlur={() => blur("phone")}
            placeholder="+1 512 555 0177 (optional)"
            error={touched.phone ? errors.phone : undefined}
          />
        </div>
      </Section>

      {/* ── Project section ── */}
      <Section eyebrow="02 · Project" title="What are we building?">
        <div className="space-y-5">
          <SelectField
            Icon={Briefcase}
            label={t("field.service.label")}
            name="service"
            value={form.service}
            onChange={(v) => { setField("service", v); setTouched((p) => ({ ...p, service: true })); }}
            placeholder={t("field.service.placeholder")}
            error={touched.service ? errors.service : undefined}
            options={[
              { value: "website",   label: t("field.service.option.1") },
              { value: "app",       label: t("field.service.option.2") },
              { value: "design",    label: t("field.service.option.3") },
              { value: "ecommerce", label: t("field.service.option.4") },
              { value: "seo",       label: t("field.service.option.5") },
              { value: "hosting",   label: t("field.service.option.6") },
            ]}
            required
          />

          <RadioGroup
            Icon={DollarSign}
            label="Budget range"
            name="budget"
            value={form.budget}
            onChange={(v) => { setField("budget", v); setTouched((p) => ({ ...p, budget: true })); }}
            options={BUDGETS}
            error={touched.budget ? errors.budget : undefined}
            required
          />

          <RadioGroup
            Icon={Clock}
            label="Timeline"
            name="timeline"
            value={form.timeline}
            onChange={(v) => { setField("timeline", v); setTouched((p) => ({ ...p, timeline: true })); }}
            options={TIMELINES}
            error={touched.timeline ? errors.timeline : undefined}
            required
          />

          <TextareaField
            Icon={FileText}
            label={t("field.details.label")}
            name="details"
            value={form.details}
            onChange={(v) => setField("details", v)}
            onBlur={() => blur("details")}
            placeholder={t("field.details.placeholder")}
            error={touched.details ? errors.details : undefined}
            minChars={MIN_DETAIL_CHARS}
            maxChars={MAX_DETAIL_CHARS}
            required
          />
        </div>
      </Section>

      {/* ── Optional: how heard ── */}
      <Section eyebrow="03 · Optional" title="How did you find us?">
        <SelectField
          Icon={Sparkles}
          label="Source"
          name="hearAbout"
          value={form.hearAbout}
          onChange={(v) => setField("hearAbout", v)}
          placeholder="Pick one (optional)"
          options={HEAR_ABOUT.map((h) => ({ value: h, label: h }))}
        />
      </Section>

      {/* Honeypot — positioned absolutely, tab-index -1, aria-hidden,
          invisible to humans. Bots auto-fill it; submission is silently
          discarded if it has any value. */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label>
          Do not fill this in if you are human:
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setField("website", e.target.value)}
          />
        </label>
      </div>

      {/* ── General error banner ── */}
      <AnimatePresence>
        {errors.general && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-start gap-3 rounded-lg border border-[#C8102E]/30 bg-[#C8102E]/5 p-4 text-[13.5px] text-[#C8102E]"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{errors.general}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Submit ── */}
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-[#0F0F10]/55 dark:text-white/55">
          We'll reply within 24 hours. Your info is never shared.
        </p>
        <button
          type="submit"
          disabled={submitting || !isValid}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C8102E] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-[#9F0F24] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {t("submitLoad")}
            </>
          ) : (
            <>
              {btnText ?? t("submitbtn")}
              {isRTL ? <ArrowRight className="h-4 w-4 rotate-180" /> : <Send className="h-3.5 w-3.5" />}
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/* ─── Primitives ─────────────────────────────────────────── */

function Section({
  eyebrow, title, children,
}: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-5 flex items-baseline gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
          {eyebrow}
        </p>
        <h3 className="text-[17px] font-semibold tracking-tight lg:text-[19px]">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function Field({
  Icon, label, name, type = "text", value, onChange, onBlur,
  placeholder, error, required,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string; name: string; type?: string;
  value: string; onChange: (v: string) => void; onBlur?: () => void;
  placeholder?: string; error?: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#0F0F10]/75 dark:text-white/80">
        <Icon className="h-3 w-3 opacity-60" />
        {label} {required && <span className="text-[#C8102E]">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full rounded-lg border bg-white px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-[#C8102E] dark:bg-white/[0.03] dark:text-white"
        style={{
          borderColor: error ? "#C8102E" : "rgba(0,0,0,0.10)",
        }}
      />
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-[11.5px] text-[#C8102E]">
          <AlertCircle className="h-3 w-3" />
          {error}
        </span>
      )}
    </label>
  );
}

function TextareaField({
  Icon, label, name, value, onChange, onBlur,
  placeholder, error, required, minChars, maxChars,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string; name: string;
  value: string; onChange: (v: string) => void; onBlur?: () => void;
  placeholder?: string; error?: string; required?: boolean;
  minChars?: number; maxChars?: number;
}) {
  const len = value.trim().length;
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-[12px] font-semibold text-[#0F0F10]/75 dark:text-white/80">
        <span className="inline-flex items-center gap-1.5">
          <Icon className="h-3 w-3 opacity-60" />
          {label} {required && <span className="text-[#C8102E]">*</span>}
        </span>
        {maxChars && (
          <span className={`text-[11px] tabular-nums ${
            len > maxChars ? "text-[#C8102E]" :
            len < (minChars ?? 0) ? "text-[#0F0F10]/50 dark:text-white/50" :
            "text-[#0F0F10]/70 dark:text-white/70"
          }`}>
            {len}/{maxChars}
          </span>
        )}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={6}
        className="w-full resize-none rounded-lg border bg-white px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-[#C8102E] dark:bg-white/[0.03] dark:text-white"
        style={{
          borderColor: error ? "#C8102E" : "rgba(0,0,0,0.10)",
        }}
      />
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-[11.5px] text-[#C8102E]">
          <AlertCircle className="h-3 w-3" />
          {error}
        </span>
      )}
    </label>
  );
}

function SelectField({
  Icon, label, name, value, onChange, placeholder, options, error, required,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string; name: string;
  value: string; onChange: (v: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
  error?: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#0F0F10]/75 dark:text-white/80">
        <Icon className="h-3 w-3 opacity-60" />
        {label} {required && <span className="text-[#C8102E]">*</span>}
      </span>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border bg-white px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-[#C8102E] dark:bg-white/[0.03] dark:text-white"
        style={{
          borderColor: error ? "#C8102E" : "rgba(0,0,0,0.10)",
          color: value ? undefined : "rgba(0,0,0,0.45)",
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-[11.5px] text-[#C8102E]">
          <AlertCircle className="h-3 w-3" />
          {error}
        </span>
      )}
    </label>
  );
}

function RadioGroup({
  Icon, label, name, value, onChange, options, error, required,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string; name: string;
  value: string; onChange: (v: string) => void;
  options: string[];
  error?: string; required?: boolean;
}) {
  return (
    <div>
      <p className="mb-2 flex items-center gap-1.5 text-[12px] font-semibold text-[#0F0F10]/75 dark:text-white/80">
        <Icon className="h-3 w-3 opacity-60" />
        {label} {required && <span className="text-[#C8102E]">*</span>}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className="rounded-full border px-4 py-2 text-[12.5px] font-medium transition-all"
              style={{
                borderColor: active ? "#C8102E" : "rgba(0,0,0,0.12)",
                background: active ? "#C8102E" : "transparent",
                color: active ? "#fff" : undefined,
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {error && (
        <span className="mt-2 flex items-center gap-1 text-[11.5px] text-[#C8102E]">
          <AlertCircle className="h-3 w-3" />
          {error}
        </span>
      )}
    </div>
  );
}
