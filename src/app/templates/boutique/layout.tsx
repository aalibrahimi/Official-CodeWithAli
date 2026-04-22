import { TemplateNav, TemplateFooter } from "../_shared/TemplateNav";
import { PageTransition } from "../_shared/PageTransition";

const NAV = [
  { href: "/templates/boutique", label: "Home" },
  { href: "/templates/boutique/shop", label: "Shop" },
  { href: "/templates/boutique/journal", label: "Journal" },
];

export const metadata = {
  title: "Atelier Hush",
  description: "Slow-made objects for slow-made lives.",
};

export default function BoutiqueLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        "--tpl-accent": "#6B5B47",
        "--tpl-bg": "#EDE8DD",
        "--tpl-fg": "#2B241B",
        background: "#EDE8DD",
        color: "#2B241B",
      } as React.CSSProperties}
    >
      <TemplateNav
        brand="Atelier Hush"
        items={NAV}
        baseHref="/templates/boutique"
        checkoutHref="/templates/boutique/checkout"
        checkoutLabel="Cart"
      />
      <PageTransition>{children}</PageTransition>
      <TemplateFooter brand="Atelier Hush" tagline="Slow-made objects for slow-made lives." items={NAV} />
    </div>
  );
}
