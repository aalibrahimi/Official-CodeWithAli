import { TemplateNav, TemplateFooter } from "../_shared/TemplateNav";
import { PageTransition } from "../_shared/PageTransition";

const NAV = [
  { href: "/templates/real-estate", label: "Home" },
  { href: "/templates/real-estate/listings", label: "Listings" },
  { href: "/templates/real-estate/neighborhoods", label: "Neighborhoods" },
];

export const metadata = {
  title: "Meridian Properties · Homes that move fast",
  description: "Homes that disappear before the sign goes up.",
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        "--tpl-accent": "#1F6F4A",
        "--tpl-bg": "#F5F7F4",
        "--tpl-fg": "#0F2A1D",
        background: "#FFFFFF",
        color: "#0F2A1D",
      } as React.CSSProperties}
    >
      <TemplateNav
        brand="Meridian"
        items={NAV}
        baseHref="/templates/real-estate"
        checkoutHref="/templates/real-estate/checkout"
        checkoutLabel="Offer deposit"
      />
      <PageTransition>{children}</PageTransition>
      <TemplateFooter brand="Meridian Properties" tagline="Homes that disappear before the sign goes up." items={NAV} />
    </div>
  );
}
