// src/components/Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/modetoggle";

import { cn } from "@/lib/utils";
import { Globe } from "lucide-react"; // Import icons for menu toggle and language
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RouteItem {
  title: string;
  href?: string;
  content?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export function Navbar(): React.ReactElement {
  const t = useTranslations("NavBar");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  interface Language {
    code: string;
    name: string;
    flag?: string;
  }

  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ar", name: "العربية", flag: "🇮🇶" },
  ];

  // Prevent hydration issues by rendering menu only after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const locale = useLocale();
  const pathname = usePathname();

  const initialLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const [currentLanguage, setCurrentLanguage] =
    useState<Language>(initialLanguage);
  const changeLanguage = (language: Language) => {
    if (language.code === locale) return;

    window.location.href = `/${language.code}${
      pathname === "/" ? "" : pathname
    } `;
  };

  useEffect(() => {
    const matchedLanguage =
      languages.find((lang) => lang.code === locale) || languages[0];
    setCurrentLanguage(matchedLanguage);
  }, [locale]);

  return (
    <div className="mb-0 pb-10 h-2">
      <header className="border-b border-red-900/30 bg-black py-10 px-6 flex justify-between items-center">
        <div className="logo-container flex items-center">
          <Link href="/" draggable={false} className="flex items-center">
            <Image
              src="/codewithali.png"
              alt="CodeWithAli"
              draggable={false}
              className="logo rounded-full border-2 border-red-800/50 shadow-lg shadow-red-900/20"
              width={70}
              height={70}
              priority
            />
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
              CodeWithAli
            </span>
          </Link>
        </div>

        {/* Regular nav for larger screens */}
        <nav className="nav-links desktop-nav hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-red-200 hover:text-red-400 transition-colors"
          >
            {t("routes.home")}
          </Link>
          <Link
            href="/about"
            className="text-red-200 hover:text-red-400 transition-colors"
          >
            {t("routes.about")}
          </Link>
          <Link
            href="/portfolio"
            className="text-red-200 hover:text-red-400 transition-colors"
          >
            {t("routes.portfolio")}
          </Link>

          <div className="nav-item relative group">
            <Link
              href="/services"
              onClick={() => scrollTo({ top: 0 })} // This is to fix when navigating to Services from Contact
              className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors"
            >
              {t("routes.services.title")}
            </Link>
            <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-black border border-gray-200 dark:border-red-900/30 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                {[
                  {
                    title: t("routes.services.content.1.title"),
                    href: "/services/web-development",
                  },
                  {
                    title: t("routes.services.content.2.title"),
                    href: "/services/mobile-app-development",
                  },
                  {
                    title: t("routes.services.content.3.title"),
                    href: "/services/UI/UX-Design",
                  },
                  {
                    title: t("routes.services.content.4.title"),
                    href: "/services/E-Commerse",
                  },
                  {
                    title: t("routes.services.content.5.title"),
                    href: "/services/seo-optimization",
                  },
                  {
                    title: t("routes.services.content.6.title"),
                    href: "/services/Web-hosting",
                  },
                ].map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block px-4 py-2 text-gray-700 dark:text-red-200 hover:bg-gray-100 dark:hover:bg-red-900/20"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/merchandise"
            className="text-red-200 hover:text-red-400 transition-colors"
          >
            {t("routes.merch")}
          </Link>
          <Link
            href="/#contact"
            className="text-red-200 hover:text-red-400 transition-colors"
          >
            {t("routes.contact")}
          </Link>
        </nav>

        {/* Right section: Language switcher, Mode toggle and Avatar with dropdown */}
        <div className="flex items-center justify-end gap-4 pr-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline-block">
                  {currentLanguage.flag}
                </span>
                <span className="sr-only">{t("labelSwitchLang")}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white dark:bg-gray-950 text-black dark:text-white"
            >
              <DropdownMenuLabel>{t("labelSelectLang")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  className={cn(
                    "cursor-pointer flex items-center gap-2",
                    currentLanguage.code === language.code &&
                      "font-medium bg-gray-100 dark:bg-gray-800"
                  )}
                  onClick={() => changeLanguage(language)}
                >
                  <span className="text-base">{language.flag}</span>
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu block md:hidden">
          <button
            className="menu-toggle w-10 h-10 flex items-center justify-center bg-red-900/20 hover:bg-red-900/40 rounded-full text-red-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay and sidebar - only render when mounted to avoid hydration issues */}
      {isMounted && (
        <>
          {/* Overlay - separate from sidebar for better performance */}
          <div
            className={`fixed inset-0 bg-black/70 z-40 md:hidden transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar with hardware-accelerated transforms */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-red-900/30 shadow-lg shadow-black/50 p-8 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ willChange: "transform" }}
          >
            <div className="flex justify-end mb-8">
              <button
                className="w-8 h-8 flex items-center justify-center bg-red-900/30 rounded-full text-red-400"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                {t("routes.home")}
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                {t("routes.about")}
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                {t("routes.portfolio")}
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                {t("routes.services")}
              </Link>
              <Link
                href="/merchandise"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                {t("routes.merch")}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                {t("routes.contact")}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
