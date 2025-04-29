

import "./Styles/globals.css";
import "./Styles/mediaSizing.css";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/MyComponents/Navbar";
import Footer from "@/MyComponents/Footer";


// Need to make layout server-side file
// export const metadata = {
//   title: 'CodeWithAli',
//   description: 'At CodeWithAli, we empower individuals and businesses with the tools, knowledge, and applications needed to thrive in the digital age',
// }

export const metadata = {
  title: "CodeWithAli",
  description: "We Create, Build, Designs Websites and apps to boost your business",
};


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

  return (
    <html lang="en">
      <body className="bg-black text-red-200">
      <NextIntlClientProvider>
       <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
