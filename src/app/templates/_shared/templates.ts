/**
 * templates.ts — single source of truth for the 8 industry demo
 * templates. Used by the /templates gallery, the portfolio page's
 * new cards, and each template's nav/footer for cross-linking.
 *
 * Every template hosts a mocked checkout flow and a distinct
 * design language so prospects clicking through can evaluate
 * CodeWithAli's range.
 */

export interface TemplateMeta {
  slug: string;
  industry: string;
  tagline: string;
  /** Business name the demo pretends to be (so it doesn't feel generic). */
  brandName: string;
  /** The primary non-home page's URL segment ("menu", "services"...) */
  contentSlug: string;
  /** Label shown in the nav for the content page. */
  contentLabel: string;
  /** Primary swatch for the gallery card. */
  accent: string;
  /** Background swatch for the gallery card. */
  bg: string;
  /** Short blurb shown on the gallery card. */
  blurb: string;
}

export const TEMPLATES: TemplateMeta[] = [
  {
    slug: "dental",
    industry: "Dental / Medical",
    brandName: "Aster Dental Studio",
    tagline: "Modern dentistry, zero waiting room.",
    contentSlug: "services",
    contentLabel: "Services",
    accent: "#0EA5B7",
    bg: "#F0FAFB",
    blurb: "Clinical-clean site with provider bios, services catalog, and new-patient deposit checkout.",
  },
  {
    slug: "restaurant",
    industry: "Restaurant / Cafe",
    brandName: "Maison Laurent",
    tagline: "A Provençal kitchen in the middle of the block.",
    contentSlug: "menu",
    contentLabel: "Menu",
    accent: "#B7410E",
    bg: "#FAF5EB",
    blurb: "Editorial menu layout, reservation flow, gift-card checkout — warm cream and terracotta.",
  },
  {
    slug: "law",
    industry: "Law firm",
    brandName: "Whitmore & Hale",
    tagline: "Counsel for companies that build things.",
    contentSlug: "practice-areas",
    contentLabel: "Practice areas",
    accent: "#0B2447",
    bg: "#F7F5F0",
    blurb: "Navy and ivory, serif-forward, attorney bios, case studies, retainer checkout.",
  },
  {
    slug: "real-estate",
    industry: "Real estate",
    brandName: "Meridian Properties",
    tagline: "Homes that disappear before the sign goes up.",
    contentSlug: "listings",
    contentLabel: "Listings",
    accent: "#1F6F4A",
    bg: "#F5F7F4",
    blurb: "Property grid, neighborhood guides, mortgage estimator, offer-deposit checkout.",
  },
  {
    slug: "fashion",
    industry: "Fashion / Apparel",
    brandName: "NOIR SS/26",
    tagline: "Ready-to-wear from the archives, reissued.",
    contentSlug: "shop",
    contentLabel: "Shop",
    accent: "#0F0F10",
    bg: "#F2F0EC",
    blurb: "Bold editorial lookbook, size-picker product pages, cart drawer, full checkout.",
  },
  {
    slug: "construction",
    industry: "Construction",
    brandName: "Ironline Builders",
    tagline: "We put the steel in your building.",
    contentSlug: "services",
    contentLabel: "Services",
    accent: "#F2B705",
    bg: "#1A1B1F",
    blurb: "Industrial slate + safety-yellow, project gallery, quote calculator, deposit checkout.",
  },
  {
    slug: "saas",
    industry: "SaaS / Tech",
    brandName: "Prism",
    tagline: "The OS for infrastructure teams.",
    contentSlug: "pricing",
    contentLabel: "Pricing",
    accent: "#7C5CFF",
    bg: "#0A0A0F",
    blurb: "Dark mode default, animated feature cards, pricing toggle, paid-signup checkout.",
  },
  {
    slug: "boutique",
    industry: "E-commerce boutique",
    brandName: "Atelier Hush",
    tagline: "Slow-made objects for slow-made lives.",
    contentSlug: "shop",
    contentLabel: "Shop",
    accent: "#6B5B47",
    bg: "#EDE8DD",
    blurb: "Aesop-inspired minimal storefront, editorial PDPs, cart, full checkout.",
  },
];

export function getTemplate(slug: string): TemplateMeta | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}
