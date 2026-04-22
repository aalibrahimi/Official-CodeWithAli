/**
 * Cost Simulator — rewritten 2026 to match new design system.
 *
 * Calculation logic is preserved verbatim from v1 (same options,
 * same pricing, same breakdown shape). UI rebuilt against red +
 * black + gold: dark-first, display typography, gold used only on
 * small uppercase eyebrow labels, red for primary actions and
 * active-selection states.
 */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import {
  Globe, ShoppingBag, Palette, Settings, CheckCircle2, ArrowRight,
  Share2, RefreshCw, ChevronDown, ChevronUp, Rocket, FileText,
  Smartphone, BarChart, Calendar, Users, MessageSquare, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Link } from "@/i18n/navigation";

/* ─── Types ────────────────────────────────────────────────────── */

interface CostOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon?: React.ElementType;
}

interface CostBreakdown {
  category: string;
  items: { name: string; price: number }[];
  total: number;
}

/* ─── Static data (unchanged) ──────────────────────────────────── */

const websiteTypes: CostOption[] = [
  { id: "business",  name: "Business Website",   description: "Professional site for your business with modern design", basePrice: 2500, icon: Globe },
  { id: "ecommerce", name: "E-commerce Store",   description: "Full online store with payment processing and inventory", basePrice: 4500, icon: ShoppingBag },
  { id: "portfolio", name: "Portfolio / Personal", description: "Showcase your work with a stunning portfolio site",    basePrice: 1800, icon: Palette },
  { id: "landing",   name: "Landing Page",       description: "High-converting single page for marketing campaigns",    basePrice: 1200, icon: Rocket },
  { id: "blog",      name: "Blog / Content",     description: "Content management system with blog functionality",      basePrice: 2000, icon: FileText },
];

const availableFeatures: CostOption[] = [
  { id: "cms",         name: "Content Management System", description: "Easy-to-use admin panel for content updates",      basePrice: 500, icon: Settings },
  { id: "mobile",      name: "Mobile App Integration",    description: "Progressive Web App capabilities",                  basePrice: 800, icon: Smartphone },
  { id: "analytics",   name: "Advanced Analytics",        description: "Detailed traffic and conversion tracking",          basePrice: 300, icon: BarChart },
  { id: "multilingual",name: "Multi-language Support",    description: "Support for multiple languages and regions",        basePrice: 600, icon: Globe },
  { id: "booking",     name: "Booking System",            description: "Online appointment or reservation system",          basePrice: 900, icon: Calendar },
  { id: "membership",  name: "User Membership Area",      description: "Protected content and user accounts",               basePrice: 700, icon: Users },
  { id: "chat",        name: "Live Chat Integration",     description: "Real-time customer support chat",                   basePrice: 200, icon: MessageSquare },
  { id: "social",      name: "Social Media Integration",  description: "Connect and sync with social platforms",            basePrice: 150, icon: Share2 },
];

const complexityLabels = ["Simple", "Basic", "Standard", "Advanced", "Premium"] as const;
const complexityMultipliers = [0.8, 0.9, 1.0, 1.3, 1.6];

/* ─── Component ────────────────────────────────────────────────── */

export default function CostSimulatorPage() {
  const [selectedWebsiteType, setSelectedWebsiteType] = useState<string>("business");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [designComplexity, setDesignComplexity] = useState<number>(3);
  const [pageCount, setPageCount] = useState<number>(5);
  const [includeHosting, setIncludeHosting] = useState<boolean>(false);
  const [includeSEO, setIncludeSEO] = useState<boolean>(false);
  const [includeMaintenance, setIncludeMaintenance] = useState<boolean>(false);
  const [rushDelivery, setRushDelivery] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [breakdown, setBreakdown] = useState<CostBreakdown[]>([]);
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);

  // Same calculation logic as v1 — kept verbatim so quotes match
  // what the previous version produced.
  const calculateCost = useCallback(() => {
    const type = websiteTypes.find((x) => x.id === selectedWebsiteType);
    if (!type) return;

    let cost = type.basePrice;
    const next: CostBreakdown[] = [];

    next.push({
      category: "Base website",
      items: [{ name: type.name, price: type.basePrice }],
      total: type.basePrice,
    });

    const extraPages = Math.max(0, pageCount - 5);
    const extraPagesCost = extraPages * 200;
    if (extraPagesCost > 0) {
      cost += extraPagesCost;
      next.push({
        category: "Additional pages",
        items: [{ name: `${extraPages} extra pages`, price: extraPagesCost }],
        total: extraPagesCost,
      });
    }

    const base = cost;
    cost = Math.round(base * complexityMultipliers[designComplexity - 1]);
    const complexityDelta = cost - base;
    if (complexityDelta !== 0) {
      next.push({
        category: "Design complexity",
        items: [{ name: `${complexityLabels[designComplexity - 1]} design`, price: complexityDelta }],
        total: complexityDelta,
      });
    }

    const featItems: { name: string; price: number }[] = [];
    for (const fid of selectedFeatures) {
      const f = availableFeatures.find((x) => x.id === fid);
      if (f) {
        cost += f.basePrice;
        featItems.push({ name: f.name, price: f.basePrice });
      }
    }
    if (featItems.length > 0) {
      next.push({
        category: "Features & add-ons",
        items: featItems,
        total: featItems.reduce((s, i) => s + i.price, 0),
      });
    }

    const svc: { name: string; price: number }[] = [];
    if (includeHosting) svc.push({ name: "1 year hosting", price: 600 });
    if (includeSEO) svc.push({ name: "SEO setup & optimization", price: 800 });
    if (includeMaintenance) svc.push({ name: "6 months maintenance", price: 1200 });
    if (svc.length > 0) {
      const t = svc.reduce((s, i) => s + i.price, 0);
      cost += t;
      next.push({ category: "Additional services", items: svc, total: t });
    }

    if (rushDelivery) {
      const rush = Math.round(cost * 0.25);
      cost += rush;
      next.push({
        category: "Rush delivery",
        items: [{ name: "25% express fee", price: rush }],
        total: rush,
      });
    }

    setTotalCost(cost);
    setBreakdown(next);
  }, [
    selectedWebsiteType, selectedFeatures, designComplexity, pageCount,
    includeHosting, includeSEO, includeMaintenance, rushDelivery,
  ]);

  useEffect(() => { calculateCost(); }, [calculateCost]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  };

  const resetAll = () => {
    setSelectedWebsiteType("business");
    setSelectedFeatures([]);
    setDesignComplexity(3);
    setPageCount(5);
    setIncludeHosting(false);
    setIncludeSEO(false);
    setIncludeMaintenance(false);
    setRushDelivery(false);
  };

  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero />

      <section className="px-5 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          {/* Left: configurator */}
          <div className="space-y-16">
            <Block
              eyebrow="Step 01 · Project type"
              title="What are we building?"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {websiteTypes.map((t) => (
                  <TypeCard
                    key={t.id}
                    option={t}
                    active={selectedWebsiteType === t.id}
                    onClick={() => setSelectedWebsiteType(t.id)}
                  />
                ))}
              </div>
            </Block>

            <Block
              eyebrow="Step 02 · Scope"
              title="How deep does it go?"
            >
              <ScopeRow label="Page count" value={`${pageCount} ${pageCount === 1 ? "page" : "pages"}`}>
                <Slider
                  value={[pageCount]}
                  onValueChange={(v) => setPageCount(v[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="py-1"
                />
                <p className="mt-2 text-[11.5px] text-[#0F0F10]/55 dark:text-white/55">
                  Includes the first 5 pages in base price. Each additional page adds $200.
                </p>
              </ScopeRow>

              <ScopeRow
                label="Design complexity"
                value={complexityLabels[designComplexity - 1]}
              >
                <Slider
                  value={[designComplexity]}
                  onValueChange={(v) => setDesignComplexity(v[0])}
                  min={1}
                  max={5}
                  step={1}
                  className="py-1"
                />
                <div className="mt-2 flex justify-between text-[10.5px] uppercase tracking-[0.18em] text-[#0F0F10]/45 dark:text-white/45">
                  {complexityLabels.map((l) => (<span key={l}>{l}</span>))}
                </div>
              </ScopeRow>
            </Block>

            <Block
              eyebrow="Step 03 · Features"
              title="Add-ons to include."
            >
              <div className="grid gap-2 sm:grid-cols-2">
                {availableFeatures.map((f) => (
                  <FeatureCard
                    key={f.id}
                    option={f}
                    active={selectedFeatures.includes(f.id)}
                    onClick={() => toggleFeature(f.id)}
                  />
                ))}
              </div>
            </Block>

            <Block
              eyebrow="Step 04 · Services"
              title="Ongoing support & delivery."
            >
              <div className="space-y-3">
                <ServiceToggle
                  title="Hosting (1 year)"
                  sub="Managed hosting with CDN + SSL + daily backups."
                  price={600}
                  checked={includeHosting}
                  onCheck={setIncludeHosting}
                />
                <ServiceToggle
                  title="SEO setup"
                  sub="Initial optimization, sitemap, meta, analytics."
                  price={800}
                  checked={includeSEO}
                  onCheck={setIncludeSEO}
                />
                <ServiceToggle
                  title="Maintenance (6 months)"
                  sub="Updates, fixes, minor content changes."
                  price={1200}
                  checked={includeMaintenance}
                  onCheck={setIncludeMaintenance}
                />
                <ServiceToggle
                  title="Rush delivery"
                  sub="25% surcharge. Cut timeline roughly in half."
                  price="+25%"
                  checked={rushDelivery}
                  onCheck={setRushDelivery}
                />
              </div>
            </Block>
          </div>

          {/* Right: summary (sticky) */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SummaryCard
              total={totalCost}
              breakdown={breakdown}
              showBreakdown={showBreakdown}
              onToggleBreakdown={() => setShowBreakdown((v) => !v)}
              onReset={resetAll}
            />
          </aside>
        </div>
      </section>

      <FinalBand />
    </main>
  );
}

/* ─── Page sections ────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 lg:px-10 lg:pb-20 lg:pt-28">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[720px] rounded-full bg-[#C8102E]/15 blur-[140px] dark:bg-[#C8102E]/10" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0F0F10]/15 bg-[#0F0F10]/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] dark:border-white/15 dark:bg-white/5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
          Cost simulator · ballpark
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-light leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
        >
          A number, <em className="font-normal italic text-[#C8102E]">before the call.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[18px]"
        >
          Configure the project shape below and the estimate updates in real time.
          These are ballpark numbers — the real quote comes from a 30-minute
          conversation where we refine scope and discuss timeline.
        </motion.p>
      </div>
    </section>
  );
}

function FinalBand() {
  return (
    <section className="px-5 pb-24 pt-12 lg:px-10 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0F0F10] p-12 text-white dark:bg-[#141416] lg:p-20"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#C8102E]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#C8102E]/15 blur-[120px]" />
        <div className="relative">
          <Sparkles className="h-7 w-7 text-[#C8102E]" />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            Next step
          </p>
          <h2
            className="mt-3 max-w-3xl font-light leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            Turn this number into a plan.
          </h2>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/75 lg:text-[17px]">
            Share the breakdown with us and we'll refine it into a real quote with scope,
            timeline, and milestones — usually in under 48 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-[#C8102E]"
            >
              See our work →
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Block primitives ─────────────────────────────────────────── */

function Block({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
        {eyebrow}
      </p>
      <h2
        className="mb-8 font-light leading-[1.05] tracking-[-0.01em]"
        style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
      >
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

function TypeCard({
  option, active, onClick,
}: { option: CostOption; active: boolean; onClick: () => void }) {
  const Icon = option.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative rounded-2xl border p-5 text-left transition-all"
      style={{
        borderColor: active ? "#C8102E" : "rgba(0,0,0,0.10)",
        background: active ? "rgba(200,16,46,0.05)" : "transparent",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl"
             style={{
               background: active ? "#C8102E" : "rgba(0,0,0,0.04)",
               color: active ? "#fff" : "currentColor",
             }}
        >
          {Icon && <Icon className="h-4 w-4" />}
        </div>
        <span className="text-[11px] font-semibold tabular-nums text-[#C8102E]">
          ${option.basePrice.toLocaleString()}
        </span>
      </div>
      <h3 className="mt-4 text-[15px] font-semibold tracking-tight">{option.name}</h3>
      <p className="mt-1 text-[12.5px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
        {option.description}
      </p>
    </button>
  );
}

function FeatureCard({
  option, active, onClick,
}: { option: CostOption; active: boolean; onClick: () => void }) {
  const Icon = option.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-start gap-4 rounded-xl border p-4 text-left transition-all"
      style={{
        borderColor: active ? "#C8102E" : "rgba(0,0,0,0.08)",
        background: active ? "rgba(200,16,46,0.04)" : "transparent",
      }}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{
          background: active ? "#C8102E" : "rgba(0,0,0,0.04)",
          color: active ? "#fff" : "currentColor",
        }}
      >
        {active ? <CheckCircle2 className="h-4 w-4" /> : Icon && <Icon className="h-4 w-4" />}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-[13.5px] font-semibold">{option.name}</h4>
          <span className="shrink-0 text-[11.5px] font-semibold tabular-nums text-[#C8102E]">
            +${option.basePrice}
          </span>
        </div>
        <p className="mt-0.5 text-[12px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
          {option.description}
        </p>
      </div>
    </button>
  );
}

function ScopeRow({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-[13.5px] font-semibold">{label}</span>
        <span className="text-[14px] font-semibold text-[#C8102E]">{value}</span>
      </div>
      {children}
    </div>
  );
}

function ServiceToggle({
  title, sub, price, checked, onCheck,
}: { title: string; sub: string; price: number | string; checked: boolean; onCheck: (v: boolean) => void }) {
  return (
    <label
      className="flex items-start gap-4 rounded-xl border p-4 transition-colors"
      style={{
        borderColor: checked ? "#C8102E" : "rgba(0,0,0,0.08)",
        background: checked ? "rgba(200,16,46,0.04)" : "transparent",
      }}
    >
      <Switch checked={checked} onCheckedChange={onCheck} className="mt-1" />
      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[14px] font-semibold">{title}</p>
          <span className="text-[12px] font-semibold tabular-nums text-[#C8102E]">
            {typeof price === "number" ? `+$${price}` : price}
          </span>
        </div>
        <p className="mt-0.5 text-[12px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
          {sub}
        </p>
      </div>
    </label>
  );
}

/* ─── Summary ──────────────────────────────────────────────────── */

function SummaryCard({
  total, breakdown, showBreakdown, onToggleBreakdown, onReset,
}: {
  total: number;
  breakdown: CostBreakdown[];
  showBreakdown: boolean;
  onToggleBreakdown: () => void;
  onReset: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#0F0F10]/10 bg-[#0F0F10] text-white dark:border-white/10 dark:bg-[#141416]">
      <div className="relative border-b border-white/10 p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#C8102E]/25 blur-[90px]" />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            Estimated total
          </p>
          <p
            className="mt-3 font-light tabular-nums leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            ${total.toLocaleString()}
          </p>
          <p className="mt-3 text-[12.5px] text-white/60">
            Subject to scope refinement. 40% due at kickoff, 60% on delivery.
          </p>
        </div>
      </div>

      {/* Breakdown toggle */}
      <button
        type="button"
        onClick={onToggleBreakdown}
        className="flex w-full items-center justify-between border-b border-white/10 px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-white/5 lg:px-10"
      >
        <span>{showBreakdown ? "Hide" : "Show"} breakdown · {breakdown.length} groups</span>
        {showBreakdown ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {showBreakdown && (
        <div className="border-b border-white/10 p-8 lg:p-10">
          <ul className="space-y-5">
            {breakdown.map((b) => (
              <li key={b.category}>
                <div className="flex justify-between text-[12.5px]">
                  <p className="font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{b.category}</p>
                  <p className="tabular-nums text-white/90">${b.total.toLocaleString()}</p>
                </div>
                <ul className="mt-2 space-y-1">
                  {b.items.map((it, i) => (
                    <li key={i} className="flex justify-between text-[12.5px] text-white/65">
                      <span>{it.name}</span>
                      <span className="tabular-nums">${it.price.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-3 p-8 lg:p-10">
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C8102E] px-6 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#9F0F24]"
        >
          Refine into a real quote
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Button
          type="button"
          onClick={onReset}
          variant="ghost"
          className="w-full rounded-full border border-white/15 bg-transparent py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/5"
        >
          <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
          Reset choices
        </Button>
      </div>
    </div>
  );
}
