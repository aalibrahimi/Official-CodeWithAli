"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Styles/globals.css";
import "./Styles/mediaSizing.css";
import { Button } from "@/components/ui/button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration issues by rendering menu only after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <html lang="en">
      <body className="bg-black text-red-200">
        <header className="border-b border-red-900/30 bg-black py-4 px-6 flex justify-between items-center">
          <div className="logo-container flex items-center">
            <div className="flex items-center">
              <Image
                src="/codewithali.png"
                alt="CodeWithAli"
                className="logo rounded-full border-2 border-red-800/50 shadow-lg shadow-red-900/20"
                width={70}
                height={70}
                priority
              />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
                CodeWithAli
              </span>
            </div>
          </div>

          {/* Regular nav for larger screens */}
          <nav className="nav-links desktop-nav hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-red-200 hover:text-red-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-red-200 hover:text-red-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-red-200 hover:text-red-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-red-200 hover:text-red-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="mobile-menu block md:hidden">
            <button
              className="menu-toggle w-10 h-10 flex items-center justify-center bg-red-900/20 hover:bg-red-900/40 rounded-full text-red-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </header>

        {/* Mobile menu overlay and sidebar - only render when mounted to avoid hydration issues */}
        {isMounted && (
          <>
            {/* Overlay - separate from sidebar for better performance */}
            <div
              className={`fixed inset-0 bg-black/70 z-40 md:hidden transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar with hardware-accelerated transforms */}
            <div
              className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-red-900/30 shadow-lg shadow-black/50 p-8 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ willChange: "transform" }}
            >
              <div className="flex justify-end mb-8">
                <button
                  className="w-8 h-8 flex items-center justify-center bg-red-900/30 rounded-full text-red-400"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
                >
                  Services
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
                >
                  Contact
                </Link>
              </div>
            </div>
          </>
        )}

        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="py-12 border-t border-red-900 bg-black">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="flex items-center mb-4">
                  <Image
                    src="/codewithali.png"
                    alt="CodeWithAli"
                    className="logo rounded-full border-2 border-red-800/50 shadow-lg shadow-red-900/20"
                    width={70}
                    height={70}
                  />
                  <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                    CodeWithAli
                  </span>
                </div>
                <p className="text-sm text-red-200/60 mb-4">
                  We design and develop digital experiences that help businesses
                  and individuals succeed online.
                </p>
                <div className="flex space-x-4">
                  {/* Social icons */}
                  {[1, 2, 3, 4].map((i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full bg-red-950/30 flex items-center justify-center hover:bg-red-900/50 transition-colors"
                    >
                      <span className="text-xs text-red-400">{i}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Website Development",
                    "Mobile App Development",
                    "UI/UX Design",
                    "E-commerce",
                    "SEO",
                    "Web Hosting",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-red-200/60 hover:text-red-300 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "About",
                    "Portfolio",
                    "Process",
                    "Careers",
                    "Blog",
                    "Contact",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-red-200/60 hover:text-red-300 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="mailto:info@codewithali.com"
                      className="text-red-200/60 hover:text-red-300 transition-colors"
                    >
                      unfold@codewithali.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+4086907890"
                      className="text-red-200/60 hover:text-red-300 transition-colors"
                    >
                      (408) 690-4009
                    </a>
                  </li>
                  <li>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 border-red-800/30 text-red-400 bg-red-900/20 hover:bg-red-950/20 hover:text-red-800"
                      >
                        Get a Quote
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-red-900 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-red-200/60 mb-4 md:mb-0">
                © {new Date().getFullYear()} CodeWithAli. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-sm text-red-200/60 hover:text-red-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-red-200/60 hover:text-red-300 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-red-200/60 hover:text-red-300 transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}