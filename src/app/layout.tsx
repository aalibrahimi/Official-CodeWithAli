"use client";

import "./Styles/globals.css";
import "./Styles/mediaSizing.css";


import { Navbar } from "@/MyComponents/Navbar";
import Footer from "@/MyComponents/Footer";

// Need to make layout server-side file
// export const metadata = {
//   title: 'CodeWithAli',
//   description: 'At CodeWithAli, we empower individuals and businesses with the tools, knowledge, and applications needed to thrive in the digital age',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-red-200">
       <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
