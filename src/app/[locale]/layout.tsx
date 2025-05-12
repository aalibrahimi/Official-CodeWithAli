import { routing } from "@/i18n/routing";
import { Navbar } from "@/MyComponents/Navbar";
import Footer from "@/MyComponents/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

   // Ensure that the incoming `locale` is valid
   const { locale } = await params;
   if (!hasLocale(routing.locales, locale)) {
     notFound();
   }
    // Checks if the language is RTL (right to left) or not
  const direction = getLangDir(locale);

  return (
    // Override HTML attributes from the parent layout
    <html lang={locale} dir={direction} suppressHydrationWarning> 
      <body>
        <NextIntlClientProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 w-full bg-black/10">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
