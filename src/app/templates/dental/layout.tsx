/**
 * Dental template layout — Aster Dental Studio.
 *
 * Design language: clinical but warm. Soft cyan primary,
 * generous whitespace, rounded corners, sans-serif, lots of
 * breathing room. Builds trust via accreditation chips and
 * "meet your provider" imagery.
 */
import { TemplateNav, TemplateFooter } from "../_shared/TemplateNav";
import { PageTransition } from "../_shared/PageTransition";

const NAV = [
  { href: "/templates/dental", label: "Home" },
  { href: "/templates/dental/services", label: "Services" },
  { href: "/templates/dental/providers", label: "Providers" },
];

export const metadata = {
  title: "Aster Dental Studio · Modern Dentistry",
  description: "Modern dentistry, zero waiting room. Book in 60 seconds.",
};

export default function DentalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={
        {
          "--tpl-accent": "#0EA5B7",
          "--tpl-accent-soft": "#CFF3F7",
          "--tpl-bg": "#F0FAFB",
          "--tpl-fg": "#0B3D4C",
          background: "#FFFFFF",
          color: "#0B3D4C",
        } as React.CSSProperties
      }
    >
      <TemplateNav
        brand="Aster Dental"
        items={NAV}
        baseHref="/templates/dental"
        checkoutHref="/templates/dental/checkout"
        checkoutLabel="Book · $75 deposit"
      />
      <PageTransition>{children}</PageTransition>
      <TemplateFooter brand="Aster Dental Studio" tagline="Modern dentistry, zero waiting room." items={NAV} />
    </div>
  );
}
