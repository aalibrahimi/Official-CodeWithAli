/**
 * TemplateNav — thin, configurable nav each template renders at
 * the top of every page. Exits cleanly back to the /templates
 * gallery via a subtle top bar so prospects know they're inside
 * a demo.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Menu, X } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
}

export function TemplateNav({
  brand,
  items,
  checkoutHref,
  checkoutLabel = "Checkout",
  baseHref,
  /** Optional logo slot override (a serif monogram, etc). */
  logo,
  /** Overall chrome theme so dark templates can invert. */
  theme = "light",
}: {
  brand: string;
  items: NavItem[];
  checkoutHref: string;
  checkoutLabel?: string;
  baseHref: string;
  logo?: React.ReactNode;
  theme?: "light" | "dark";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dark = theme === "dark";

  return (
    <>
      {/* Thin demo breadcrumb */}
      <div
        className="flex items-center justify-between px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em]"
        style={{
          background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
          color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.55)",
          borderBottom: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <Link href="/templates" className="inline-flex items-center gap-1.5 hover:opacity-100 opacity-80 transition-opacity">
          <ArrowLeft className="h-3 w-3" />
          Template gallery
        </Link>
        <span className="hidden sm:inline">A CodeWithAli demo</span>
      </div>

      <header
        className="sticky top-0 z-40 backdrop-blur-md"
        style={{
          background: dark ? "rgba(10,10,15,0.7)" : "rgba(255,255,255,0.78)",
          borderBottom: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link
            href={baseHref}
            className="text-[15px] font-semibold tracking-tight lg:text-[16px]"
            style={{ color: dark ? "#fff" : "#0F0F10" }}
          >
            {logo ?? brand}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {items.map((it) => {
              const active = pathname === it.href;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className="relative text-[13px] font-medium transition-colors"
                  style={{
                    color: active
                      ? dark ? "#fff" : "#0F0F10"
                      : dark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.60)",
                  }}
                >
                  {it.label}
                  {active && (
                    <motion.span
                      layoutId="tpl-nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px]"
                      style={{ background: "var(--tpl-accent, currentColor)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={checkoutHref}
              className="hidden rounded-md px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:opacity-90 lg:inline-block"
              style={{ background: "var(--tpl-accent, #111)" }}
            >
              {checkoutLabel}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-md lg:hidden"
              style={{
                color: dark ? "#fff" : "#0F0F10",
                background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
              }}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
              style={{
                background: dark ? "rgba(10,10,15,0.95)" : "rgba(255,255,255,0.95)",
                borderTop: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex flex-col gap-1 p-4">
                {items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-[14px] font-medium transition-colors hover:bg-black/5"
                    style={{ color: dark ? "#fff" : "#0F0F10" }}
                  >
                    {it.label}
                  </Link>
                ))}
                <Link
                  href={checkoutHref}
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-md px-4 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.16em] text-white"
                  style={{ background: "var(--tpl-accent, #111)" }}
                >
                  {checkoutLabel}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export function TemplateFooter({
  brand,
  tagline,
  items,
  theme = "light",
}: {
  brand: string;
  tagline: string;
  items: NavItem[];
  theme?: "light" | "dark";
}) {
  const dark = theme === "dark";
  return (
    <footer
      className="mt-24 border-t px-5 py-14 lg:px-10"
      style={{
        background: dark ? "#0A0A0F" : "transparent",
        borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="text-[18px] font-semibold tracking-tight" style={{ color: dark ? "#fff" : "#0F0F10" }}>{brand}</p>
          <p className="mt-1 max-w-sm text-[13px]">{tagline}</p>
        </div>
        <div className="flex flex-wrap gap-10">
          <nav className="flex flex-col gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">Explore</p>
            {items.map((it) => (
              <Link key={it.href} href={it.href} className="text-[13.5px] transition-opacity hover:opacity-60">
                {it.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">Built by</p>
            <a href="/" className="text-[13.5px] transition-opacity hover:opacity-60">
              CodeWithAli →
            </a>
          </div>
        </div>
      </div>
      <div
        className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-2 border-t pt-6 text-[11.5px] uppercase tracking-[0.18em] opacity-60 md:flex-row md:items-center"
        style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
      >
        <span>© {new Date().getFullYear()} {brand}</span>
        <span>Demo template — not a real business</span>
      </div>
    </footer>
  );
}
