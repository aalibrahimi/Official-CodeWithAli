import "../Styles/globals.css";
import "../Styles/mediaSizing.css";
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
    <html lang={locale} dir={direction} suppressHydrationWarning> 
    <body>
    <NextIntlClientProvider>
       <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </NextIntlClientProvider>
    </body>
     
    </html>
  );
}
