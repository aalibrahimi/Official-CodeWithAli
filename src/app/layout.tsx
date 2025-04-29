"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Styles/globals.css";
import "./Styles/mediaSizing.css";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Github,
  Heart,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Navbar } from "@/MyComponents/Navbar";

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

      
      </body>
    </html>
  );
}
