// src/components/Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/modetoggle";

import { cn } from "@/lib/utils";
import { Globe } from "lucide-react"; // Import icons for menu toggle and language
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
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

// interface RouteItem {
//   title: string;
//   href?: string;
//   content?: {
//     title: string;
//     href: string;
//     description: string;
//   }[];
// }

export function Navbar(): React.ReactElement {
  const t = useTranslations("NavBar");
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
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
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
  const isRTL = isRtlLang(locale);

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
    <>
      <header className="border-b border-red-900/30 text-black bg-white/90 backdrop-blur-sm dark:text-white dark:bg-black/90 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="logo-container flex items-center">
          <Link href="/" draggable={false} className="flex items-center">
            <Image
              src="/codewithali.png"
              alt="CodeWithAli"
              draggable={false}
              className="w-12 h-auto rounded-full border-2 border-red-800/50 shadow-lg shadow-red-900/20"
              width={500}
              height={500}
              priority
            />
            <span
              className={`${isRTL ? "mr-3" : "ml-3"} text-xl font-bold bg-gradient-to-r from-red-500 to-red-900 dark:from-red-300 dark:to-red-500 bg-clip-text text-transparent`}
            >
              CodeWithAli
            </span>
          </Link>
        </div>

        {/* Regular nav for larger screens */}
        <nav className="hidden lg:flex justify-center gap-8 text-lg">
          <Link
            href="/"
            className="text-black dark:text-white hover:text-red-400 dark:hover:text-red-500 transition-colors"
          >
            {t("routes.home")}
          </Link>
          <Link
            href="/about"
            className="text-black dark:text-white hover:text-red-400 dark:hover:text-red-500 transition-colors"
          >
            {t("routes.about")}
          </Link>
          <Link
            href="/portfolio"
            className="text-black dark:text-white hover:text-red-400 dark:hover:text-red-500 transition-colors"
          >
            {t("routes.portfolio")}
          </Link>

          {/* Removed extra margin that was given here for some reason */}
          <div className="nav-item relative group m-0">
            <Link
              href="/services"
              onClick={() => scrollTo({ top: 0 })} // This is to fix when navigating to Services from Contact
              className="text-black dark:text-white hover:text-gray-900 dark:hover:text-red-400 transition-colors"
            >
              {t("routes.services.title")}
            </Link>
            <div className="absolute left-0 mt-2 px-2 w-56 text-black dark:text-white bg-white dark:bg-black border border-gray-200 dark:border-red-900/30 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                {[
                  {
                    title: t("routes.services.content.1.title"),
                    href: "/services/web-development",
                  },
                  // {
                  //   title: t("routes.services.content.2.title"),
                  //   href: "/services/mobile-app-development",
                  // },
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
                    className="flex items-center px-4 py-2 w-50 h-auto text-black hover:text-red-800 dark:text-white dark:hover:text-red-400 hover:border-b-2 hover:border-red-400 dark:hover:border-red-500/80 hover:bg-red-200/60 dark:hover:bg-red-900/20"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/merchandise"
            className="text-black dark:text-white hover:text-red-400 dark:hover:text-red-500 transition-colors"
          >
            {t("routes.merch")}
          </Link>
          <Link
            href="/#contact"
            className="text-black dark:text-white hover:text-red-400 dark:hover:text-red-500 transition-colors"
          >
            {t("routes.contact")}
          </Link>
        </nav>

        {/* Right section: Language switcher, Mode toggle and Avatar with dropdown */}
        <div className="flex items-center justify-end gap-4 pr-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-2 py-1 rounded-md hover:text-white dark:hover:text-white hover:bg-red-800 dark:hover:bg-red-800 transition-colors">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline-block">
                  {currentLanguage.flag}
                </span>
                <span className="sr-only">{t("labelSwitchLang")}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white dark:bg-black text-black dark:text-white"
            >
              <DropdownMenuLabel className="font-semibold">
                {t("labelSelectLang")}
              </DropdownMenuLabel>
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

          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button
              className="w-10 h-10 flex items-center justify-center text-black dark:text-white text-2xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay and sidebar - only render when mounted to avoid hydration issues */}
      {isMounted && (
        <>
          {/* Overlay - separate from sidebar for better performance */}
          <div
            className={`fixed inset-0 bg-black/70 z-40 lg:hidden transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar with hardware-accelerated transforms */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black border-l border-red-900/30 shadow-lg shadow-black/50 p-8 transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ willChange: "transform" }}
          >
            <div className="flex justify-end mb-8">
              <button
                className="w-8 h-8 flex items-center justify-center bg-red-200 text-red-500 dark:bg-red-500/30 dark:text-red-300 rounded-full"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col space-y-6 text-lg">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-black dark:text-white hover:text-red-400 transition-colors border-b border-red-900/50 pb-2"
              >
                {t("routes.home")}
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-black dark:text-white hover:text-red-400 transition-colors border-b border-red-900/50 pb-2"
              >
                {t("routes.about")}
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="text-black dark:text-white hover:text-red-400 transition-colors border-b border-red-900/50 pb-2"
              >
                {t("routes.portfolio")}
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-black dark:text-white hover:text-red-400 transition-colors border-b border-red-900/50 pb-2"
              >
                {t("routes.services.title")}
              </Link>
              <Link
                href="/merchandise"
                onClick={() => setIsMenuOpen(false)}
                className="text-black dark:text-white hover:text-red-400 transition-colors border-b border-red-900/50 pb-2"
              >
                {t("routes.merch")}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-black dark:text-white hover:text-red-400 transition-colors border-b border-red-900/50 pb-2"
              >
                {t("routes.contact")}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
