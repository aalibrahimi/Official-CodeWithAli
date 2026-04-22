import { TemplateNav, TemplateFooter } from "../_shared/TemplateNav";
import { PageTransition } from "../_shared/PageTransition";

const NAV = [
  { href: "/templates/construction", label: "Home" },
  { href: "/templates/construction/services", label: "Services" },
  { href: "/templates/construction/projects", label: "Projects" },
];

export const metadata = {
  title: "Ironline Builders · Commercial Construction",
  description: "We put the steel in your building.",
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        "--tpl-accent": "#F2B705",
        "--tpl-bg": "#1A1B1F",
        "--tpl-fg": "#F4F4F5",
        background: "#1A1B1F",
        color: "#F4F4F5",
      } as React.CSSProperties}
    >
      <TemplateNav
        brand="IRONLINE"
        items={NAV}
        baseHref="/templates/construction"
        checkoutHref="/templates/construction/checkout"
        checkoutLabel="Book deposit"
        theme="dark"
      />
      <PageTransition>{children}</PageTransition>
      <TemplateFooter brand="Ironline Builders" tagline="We put the steel in your building." items={NAV} theme="dark" />
    </div>
  );
}
