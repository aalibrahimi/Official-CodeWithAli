import { TemplateNav, TemplateFooter } from "../_shared/TemplateNav";
import { PageTransition } from "../_shared/PageTransition";

const NAV = [
  { href: "/templates/fashion", label: "Collection" },
  { href: "/templates/fashion/shop", label: "Shop" },
  { href: "/templates/fashion/lookbook", label: "Lookbook" },
];

export const metadata = {
  title: "NOIR · SS/26",
  description: "Ready-to-wear from the archives, reissued.",
};

export default function FashionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        "--tpl-accent": "#0F0F10",
        "--tpl-bg": "#F2F0EC",
        "--tpl-fg": "#0F0F10",
        background: "#F2F0EC",
        color: "#0F0F10",
      } as React.CSSProperties}
    >
      <TemplateNav
        brand="NOIR"
        items={NAV}
        baseHref="/templates/fashion"
        checkoutHref="/templates/fashion/checkout"
        checkoutLabel="Cart · 2"
      />
      <PageTransition>{children}</PageTransition>
      <TemplateFooter brand="NOIR" tagline="Ready-to-wear from the archives, reissued." items={NAV} />
    </div>
  );
}
