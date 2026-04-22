/**
 * /templates layout — intentionally lives outside [locale] so each
 * demo template stands on its own without the CodeWithAli navbar
 * or footer. A prospect landing here sees what the finished site
 * would look like in their hands.
 */
import "../[locale]/globals.css";

export const metadata = {
  title: "Template Gallery — CodeWithAli",
  description:
    "Eight production-ready industry templates built by CodeWithAli. Click any to preview the full flow — home, inner pages, checkout.",
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-white antialiased">{children}</div>;
}
