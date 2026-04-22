import { TemplateNav, TemplateFooter } from "../_shared/TemplateNav";
import { PageTransition } from "../_shared/PageTransition";

const NAV = [
  { href: "/templates/restaurant", label: "Home" },
  { href: "/templates/restaurant/menu", label: "Menu" },
  { href: "/templates/restaurant/reservations", label: "Reservations" },
];

export const metadata = {
  title: "Maison Laurent · Provençal Kitchen",
  description: "A Provençal kitchen in the middle of the block.",
};

export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        "--tpl-accent": "#B7410E",
        "--tpl-bg": "#FAF5EB",
        "--tpl-fg": "#2B1810",
        background: "#FAF5EB",
        color: "#2B1810",
        fontFamily: 'ui-serif, Georgia, "Times New Roman", serif',
      } as React.CSSProperties}
    >
      <TemplateNav
        brand="Maison Laurent"
        items={NAV}
        baseHref="/templates/restaurant"
        checkoutHref="/templates/restaurant/checkout"
        checkoutLabel="Gift cards"
      />
      <PageTransition>{children}</PageTransition>
      <TemplateFooter brand="Maison Laurent" tagline="A Provençal kitchen in the middle of the block." items={NAV} />
    </div>
  );
}
