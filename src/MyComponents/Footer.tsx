/**
 * Footer — rewritten 2026.
 *
 * Design intent: restrained, four-column mono-weight, red used
 * only for the copyright red dot and CTA button. Gold used for
 * section headings and hover states. Social icons are hollow
 * outlines, not colorful brand-tiles.
 */
"use client";

import { Link } from "@/i18n/navigation";
import { Facebook, Github, Instagram, Linkedin, ArrowUpRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SOCIALS = [
  { platform: "Github", icon: Github, url: "https://github.com/CodeWithAli-Co" },
  { platform: "Instagram", icon: Instagram, url: "https://www.instagram.com/officialcodewithali/#" },
  { platform: "Facebook", icon: Facebook, url: "https://www.facebook.com/profile.php?id=61573763924961" },
  { platform: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/codewithali-co" },
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-black/10 bg-[#FAF9F6] text-[#0F0F10] dark:border-white/10 dark:bg-[#0A0A0B] dark:text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 lg:px-10 lg:pt-28">
        {/* Top — large wordmark + description */}
        <div className="grid gap-14 border-b border-black/10 pb-16 dark:border-white/10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/codewithali.png"
                alt="CodeWithAli"
                width={80}
                height={80}
                className="h-10 w-10 rounded-full border border-[#C8102E]/40"
              />
              <span className="text-[20px] font-semibold tracking-tight">CodeWithAli</span>
            </Link>
            <p className="mt-8 max-w-md text-[15.5px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {t("compDesc")}
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-5 py-3 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#9F0F24]"
            >
              <Mail className="h-3.5 w-3.5" />
              {t("nav.contact.links.3")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Socials on the right */}
          <div className="lg:justify-self-end">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
              Follow us
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[#0F0F10]/70 transition-all hover:-translate-y-0.5 hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/15 dark:text-white/70 dark:hover:border-[#C8102E]"
                  aria-label={s.platform}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <FooterCol title={t("nav.company.title")}>
            <FooterLink href="/services/web-development">{t("nav.company.links.1")}</FooterLink>
            <FooterLink href="/services/mobile-app-development">{t("nav.company.links.2")}</FooterLink>
            <FooterLink href="/services/UI/UX-Design">{t("nav.company.links.3")}</FooterLink>
            <FooterLink href="/services/E-Commerse">{t("nav.company.links.4")}</FooterLink>
            <FooterLink href="/services/seo-optimization">{t("nav.company.links.5")}</FooterLink>
            <FooterLink href="/services/Web-hosting">{t("nav.company.links.6")}</FooterLink>
          </FooterCol>

          <FooterCol title={t("nav.resources.title")}>
            <FooterLink href="/about">{t("nav.resources.links.1")}</FooterLink>
            <FooterLink href="/portfolio">{t("nav.resources.links.2")}</FooterLink>
            <FooterLink href="/templates">Template gallery</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/newsletter">Newsletter</FooterLink>
            <FooterLink href="/contact">{t("nav.resources.links.4")}</FooterLink>
          </FooterCol>

          <FooterCol title={t("nav.contact.title")}>
            <FooterLink href="mailto:unfold@codewithali.com" external>
              {t("nav.contact.links.1")}
            </FooterLink>
            <FooterLink href="/costsimulator">Cost simulator</FooterLink>
            <FooterLink href="/merchandise">Merchandise</FooterLink>
          </FooterCol>

          <FooterCol title={t("nav.legal.title")}>
            <FooterLink href="/terms">{t("nav.legal.links.3")}</FooterLink>
            <FooterLink href="/terms">{t("nav.legal.links.2")}</FooterLink>
            <FooterLink href="/terms">{t("nav.legal.links.4")}</FooterLink>
            <FooterLink href="/contract">Contracts</FooterLink>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-8 text-[11.5px] uppercase tracking-[0.18em] text-[#0F0F10]/55 dark:border-white/10 dark:text-white/55 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
            © {new Date().getFullYear()} {t("nav.legal.links.1")}
          </div>
          <p>
            {t("cwaMark")} <span className="text-[#D4AF37]">CodeWithAli</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">{title}</p>
      <ul className="mt-5 space-y-3 text-[13.5px]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <li>
        <a href={href} className="text-[#0F0F10]/75 transition-colors hover:text-[#C8102E] dark:text-white/75">
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link href={href} className="text-[#0F0F10]/75 transition-colors hover:text-[#C8102E] dark:text-white/75">
        {children}
      </Link>
    </li>
  );
}
