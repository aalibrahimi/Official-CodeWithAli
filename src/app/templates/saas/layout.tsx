import { TemplateNav, TemplateFooter } from "../_shared/TemplateNav";
import { PageTransition } from "../_shared/PageTransition";

const NAV = [
  { href: "/templates/saas", label: "Home" },
  { href: "/templates/saas/features", label: "Features" },
  { href: "/templates/saas/pricing", label: "Pricing" },
];

export const metadata = {
  title: "Prism · The OS for Infrastructure Teams",
  description: "The OS for infrastructure teams.",
};

export default function SaasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        "--tpl-accent": "#7C5CFF",
        "--tpl-bg": "#13131A",
        "--tpl-fg": "#F4F4F5",
        background: "#0A0A0F",
        color: "#F4F4F5",
      } as React.CSSProperties}
    >
      <TemplateNav
        brand="Prism"
        items={NAV}
        baseHref="/templates/saas"
        checkoutHref="/templates/saas/checkout"
        checkoutLabel="Start trial"
        theme="dark"
      />
      <PageTransition>{children}</PageTransition>
      <TemplateFooter brand="Prism" tagline="The OS for infrastructure teams." items={NAV} theme="dark" />
    </div>
  );
}
