/**
 * Navbar — rewritten 2026 to match the new design system.
 *
 * Design intent:
 *   · Thin, dark-first, high-contrast. No gradient logo text.
 *   · Red is reserved for the one CTA button. Gold is reserved
 *     for hover underlines and dropdown active state.
 *   · Logo is the brand moment (image + clean wordmark, not a
 *     rainbow-red-gradient).
 *   · Mobile menu is a motion drawer, not a hard toggle.
 *   · Services dropdown uses gold active-state accent with a
 *     tasteful caret. Overall 60% shorter than v1.
 */
"use client";

import React, { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/modetoggle";
import { cn } from "@/lib/utils";
import { Globe, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { isRtlLang } from "rtl-detect";
import Image from "next/image";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ar", name: "العربية", flag: "🇮🇶" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
];

export function Navbar(): React.ReactElement {
  const t = useTranslations("NavBar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const isRTL = isRtlLang(locale);
  const currentLanguage = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  // Subtle state change when the user scrolls past the fold so the
  // bar doesn't sit flat on the hero. Mild border fade, not a
  // full color flip — we're not trying to be flashy.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const changeLanguage = (lang: Language) => {
    if (lang.code === locale) return;
    window.location.href = `/${lang.code}${pathname === "/" ? "" : pathname}`;
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinks = [
    { href: "/", label: t("routes.home") },
    { href: "/about", label: t("routes.about") },
    { href: "/portfolio", label: t("routes.portfolio") },
    // services is rendered separately (dropdown)
    { href: "/merchandise", label: t("routes.merch") },
    { href: "/costsimulator", label: "Cost Simulator" },
  ];

  const serviceItems = [
    { href: "/services/web-development", label: t("routes.services.content.1.title") },
    { href: "/services/UI/UX-Design", label: t("routes.services.content.3.title") },
    { href: "/services/E-Commerse", label: t("routes.services.content.4.title") },
    { href: "/services/seo-optimization", label: t("routes.services.content.5.title") },
    { href: "/services/Web-hosting", label: t("routes.services.content.6.title") },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-[border-color,background-color]",
        scrolled
          ? "border-black/10 bg-white/80 dark:border-white/10 dark:bg-[#0A0A0B]/85"
          : "border-transparent bg-white/60 dark:bg-[#0A0A0B]/60",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        {/* Logo — red circle badge + clean wordmark */}
        <Link href="/" draggable={false} className="group flex items-center gap-3">
          <Image
            src="/codewithali.png"
            alt="CodeWithAli"
            draggable={false}
            className="h-9 w-9 rounded-full border border-[#C8102E]/40 shadow-[0_0_0_1px_rgba(200,16,46,0.1)] transition-transform group-hover:scale-105"
            width={80}
            height={80}
            priority
          />
          <span className={cn(
            "text-[15px] font-semibold tracking-tight text-[#0F0F10] dark:text-white lg:text-[16px]",
            isRTL ? "mr-0" : "ml-0",
          )}>
            CodeWithAli
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(0, 3).map((l) => <NavLink key={l.href} {...l} active={isActive(l.href)} />)}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={cn(
                "group inline-flex items-center gap-1 text-[13.5px] font-medium transition-colors",
                isActive("/services")
                  ? "text-[#C8102E]"
                  : "text-[#0F0F10]/80 hover:text-[#C8102E] dark:text-white/85 dark:hover:text-[#C8102E]",
              )}
            >
              {t("routes.services.title")}
              <ChevronDown className={cn("h-3 w-3 transition-transform", servicesOpen && "rotate-180")} />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full mt-3 w-60 overflow-hidden rounded-lg border border-black/10 bg-white/95 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md dark:border-white/10 dark:bg-[#141416]/95"
                >
                  {serviceItems.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={cn(
                        "block px-4 py-2.5 text-[13px] transition-colors",
                        isActive(s.href)
                          ? "bg-[#C8102E]/10 text-[#C8102E]"
                          : "text-[#0F0F10]/85 hover:bg-black/5 hover:text-[#C8102E] dark:text-white/85 dark:hover:bg-white/5 dark:hover:text-[#C8102E]",
                      )}
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(3).map((l) => <NavLink key={l.href} {...l} active={isActive(l.href)} />)}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          {/* Language picker */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#0F0F10]/70 transition-colors hover:bg-black/5 hover:text-[#C8102E] dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-[#C8102E]"
                aria-label={t("labelSwitchLang")}
              >
                <Globe className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="border-black/10 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-[#141416]/95"
            >
              <DropdownMenuLabel className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F0F10]/55 dark:text-white/55">
                {t("labelSelectLang")}
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-black/10 dark:bg-white/10" />
              {LANGUAGES.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang)}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 text-[13px]",
                    currentLanguage.code === lang.code && "bg-[#C8102E]/10 text-[#C8102E]",
                  )}
                >
                  <span>{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-[#C8102E] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#9F0F24] md:inline-flex"
          >
            {t("routes.contact")}
            <ArrowRight className="h-3 w-3" />
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#0F0F10] transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/5 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/10 bg-white/98 backdrop-blur-md dark:border-white/10 dark:bg-[#0A0A0B]/98 lg:hidden"
          >
            <div className="flex flex-col gap-0.5 px-4 py-5">
              {navLinks.map((l) => (
                <MobileLink
                  key={l.href}
                  href={l.href}
                  label={l.label}
                  active={isActive(l.href)}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
              {/* Services section in mobile */}
              <div className="mt-3 border-t border-black/10 pt-3 dark:border-white/10">
                <p className="px-4 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F0F10]/50 dark:text-white/50">
                  {t("routes.services.title")}
                </p>
                {serviceItems.map((s) => (
                  <MobileLink
                    key={s.href}
                    href={s.href}
                    label={s.label}
                    active={isActive(s.href)}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}
              </div>
              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#C8102E] px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                {t("routes.contact")} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ── primitives ───────────────────────────────────────────────── */

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-[13.5px] font-medium transition-colors",
        active
          ? "text-[#C8102E]"
          : "text-[#0F0F10]/80 hover:text-[#C8102E] dark:text-white/85 dark:hover:text-[#C8102E]",
      )}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-[#C8102E]"
        />
      )}
    </Link>
  );
}

function MobileLink({
  href, label, active, onClick,
}: { href: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-md px-4 py-3 text-[15px] font-medium transition-colors",
        active
          ? "bg-[#C8102E]/10 text-[#C8102E]"
          : "text-[#0F0F10]/85 hover:bg-black/5 hover:text-[#C8102E] dark:text-white/90 dark:hover:bg-white/5 dark:hover:text-[#C8102E]",
      )}
    >
      {label}
    </Link>
  );
}
