/**
 * /templates — gallery landing. One link your sales engineer
 * drops in an Upwork thread and the prospect sees all eight
 * industry demos side-by-side. Click any card → jumps into the
 * full template.
 */
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { TEMPLATES } from "./_shared/templates";

export default function TemplateGalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0F0F10]">
      {/* Top nav back to CWA */}
      <div className="flex items-center justify-between border-b border-black/5 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/55">
        <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-black">
          <ArrowLeft className="h-3 w-3" />
          CodeWithAli
        </Link>
        <span>Templates</span>
      </div>

      {/* Hero */}
      <section className="px-6 pb-16 pt-20 text-center lg:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-[11.5px] font-semibold uppercase tracking-[0.28em] text-black/55"
        >
          Built by CodeWithAli · 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto max-w-4xl text-[44px] font-semibold leading-[1.05] tracking-tight lg:text-[72px]"
        >
          Eight industries.<br />
          <span className="italic text-black/60">One team that ships them.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-black/60"
        >
          Each demo below is fully navigable — inner pages, checkout, success screen.
          Pick any card to walk through what your site could look like, then tell us
          which direction to take.
        </motion.p>
      </section>

      {/* Grid */}
      <section className="px-5 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {TEMPLATES.map((t, idx) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/templates/${t.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-black/10 transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_30px_80px_-25px_rgba(0,0,0,0.3)]"
                style={{ background: t.bg }}
              >
                {/* Preview swatch */}
                <div
                  className="relative flex h-[260px] items-end overflow-hidden p-6 lg:h-[320px]"
                  style={{
                    background: `linear-gradient(135deg, ${t.accent} 0%, ${hexShade(t.accent, -30)} 100%)`,
                  }}
                >
                  {/* Abstract mark so the card feels alive without a screenshot. */}
                  <PreviewGraphic slug={t.slug} accent={t.accent} />

                  <div className="relative z-10 w-full">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-white/70">
                      {t.industry}
                    </p>
                    <h3 className="mt-2 text-[24px] font-semibold text-white lg:text-[28px]">
                      {t.brandName}
                    </h3>
                  </div>

                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white">
                    <ArrowUpRight className="h-4 w-4 transition-colors duration-500 group-hover:text-black" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-[14.5px] italic leading-snug text-black/70">
                    &ldquo;{t.tagline}&rdquo;
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-black/60">
                    {t.blurb}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-black/50 transition-colors group-hover:text-black">
                    Walk the demo <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-black/5 bg-white px-6 py-20 text-center">
        <h2 className="text-[28px] font-semibold tracking-tight lg:text-[40px]">
          See one you like?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] text-black/60">
          We rebuild any of these templates around your brand, copy, and catalog
          in under three weeks.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0F0F10] px-6 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:opacity-90"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}

/**
 * Abstract inline SVG mark shown on each card's preview panel.
 * Cheaper and more consistent than real screenshots until the
 * prospect clicks through.
 */
function PreviewGraphic({ slug, accent }: { slug: string; accent: string }) {
  const lighter = hexShade(accent, 40);
  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      <svg viewBox="0 0 400 300" className="h-full w-full">
        {slug === "dental" && (
          <>
            <circle cx="320" cy="60" r="120" fill={lighter} opacity="0.3" />
            <path d="M60 220 Q 200 120 340 220" stroke={lighter} strokeWidth="1.5" fill="none" opacity="0.5" />
            <circle cx="70" cy="80" r="8" fill={lighter} />
          </>
        )}
        {slug === "restaurant" && (
          <>
            <rect x="30" y="40" width="340" height="2" fill={lighter} opacity="0.4" />
            <text x="30" y="90" fontFamily="serif" fontSize="52" fill={lighter} opacity="0.35" fontStyle="italic">MAISON</text>
            <circle cx="330" cy="220" r="50" fill="none" stroke={lighter} strokeWidth="1" opacity="0.4" />
          </>
        )}
        {slug === "law" && (
          <>
            <text x="30" y="110" fontFamily="serif" fontSize="92" fill={lighter} opacity="0.35" fontWeight="600">W&amp;H</text>
            <rect x="30" y="135" width="80" height="1.5" fill={lighter} opacity="0.6" />
          </>
        )}
        {slug === "real-estate" && (
          <>
            <polygon points="60,220 60,140 120,80 180,140 180,220" fill="none" stroke={lighter} strokeWidth="1.5" opacity="0.5" />
            <rect x="210" y="140" width="140" height="80" fill="none" stroke={lighter} strokeWidth="1.5" opacity="0.5" />
          </>
        )}
        {slug === "fashion" && (
          <>
            <text x="30" y="200" fontFamily="sans-serif" fontSize="160" fill={lighter} opacity="0.25" fontWeight="800" letterSpacing="-8">NOIR</text>
            <rect x="30" y="230" width="340" height="1" fill={lighter} opacity="0.7" />
          </>
        )}
        {slug === "construction" && (
          <>
            <path d="M20 240 L 380 240 M 60 240 L 100 140 L 140 240 M 180 240 L 220 140 L 260 240 M 300 240 L 340 140 L 380 240" stroke={lighter} strokeWidth="2" opacity="0.45" fill="none" />
          </>
        )}
        {slug === "saas" && (
          <>
            <rect x="40" y="70" width="80" height="80" rx="12" fill={lighter} opacity="0.3" />
            <rect x="140" y="100" width="80" height="80" rx="12" fill={lighter} opacity="0.4" />
            <rect x="240" y="70" width="80" height="80" rx="12" fill={lighter} opacity="0.3" />
            <circle cx="80" cy="220" r="3" fill={lighter} />
            <circle cx="180" cy="220" r="3" fill={lighter} />
            <circle cx="280" cy="220" r="3" fill={lighter} />
          </>
        )}
        {slug === "boutique" && (
          <>
            <circle cx="200" cy="130" r="60" fill="none" stroke={lighter} strokeWidth="1.2" opacity="0.55" />
            <rect x="140" y="200" width="120" height="1" fill={lighter} opacity="0.6" />
            <text x="200" y="250" fontFamily="serif" fontSize="14" fill={lighter} opacity="0.5" textAnchor="middle" letterSpacing="4">ATELIER</text>
          </>
        )}
      </svg>
    </div>
  );
}

/** Naive hex shade; good enough for inline gradients. */
function hexShade(hex: string, percent: number): string {
  const h = hex.replace("#", "");
  const num = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.min(255, Math.max(0, (num >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amt));
  const b = Math.min(255, Math.max(0, (num & 0xff) + amt));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
