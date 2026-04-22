import { TemplateNav, TemplateFooter } from "../_shared/TemplateNav";
import { PageTransition } from "../_shared/PageTransition";

const NAV = [
  { href: "/templates/law", label: "Home" },
  { href: "/templates/law/practice-areas", label: "Practice areas" },
  { href: "/templates/law/attorneys", label: "Attorneys" },
];

export const metadata = {
  title: "Whitmore & Hale · Counsel for Builders",
  description: "Counsel for companies that build things.",
};

export default function LawLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        "--tpl-accent": "#0B2447",
        "--tpl-bg": "#F7F5F0",
        "--tpl-fg": "#0B2447",
        background: "#F7F5F0",
        color: "#0B2447",
        fontFamily: 'ui-serif, "Times New Roman", Georgia, serif',
      } as React.CSSProperties}
    >
      <TemplateNav
        brand="Whitmore & Hale"
        items={NAV}
        baseHref="/templates/law"
        checkoutHref="/templates/law/checkout"
        checkoutLabel="Retain counsel"
      />
      <PageTransition>{children}</PageTransition>
      <TemplateFooter brand="Whitmore & Hale" tagline="Counsel for companies that build things." items={NAV} />
    </div>
  );
}
