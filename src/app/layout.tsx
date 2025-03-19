"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";
import "./Styles/globals.css";
import "./Styles/mediaSizing.css";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

// Separate component for themed content
// Import useTheme here
import { useTheme } from "next-themes";

function ThemedContent({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration issues by rendering menu only after component is mounted
  useEffect(() => {
    setIsMounted(true);
    console.log("Current theme:", theme);
    console.log("Resolved theme:", resolvedTheme);
    // Force a theme update on mount to ensure classes are applied
  }, [theme, resolvedTheme]);

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
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 dark:border-red-900/30 bg-white dark:bg-black py-4 px-6 flex justify-between items-center">
        <div className="logo-container flex items-center">
          <Link href="/" draggable={false} className="flex items-center">
            <Image
              src="/codewithali.png"
              alt="CodeWithAli"
              draggable={false}
              className="logo rounded-full border-2 border-gray-300 dark:border-red-800/50 shadow-lg shadow-gray-200 dark:shadow-red-900/20"
              width={70}
              height={70}
              priority
            />
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-red-300 dark:to-red-500 bg-clip-text text-transparent">
              CodeWithAli
            </span>
          </Link>
        </div>

        {/* Regular nav for larger screens */}
        <nav className="nav-links desktop-nav hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#contact"
            className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors"
          >
            Contact
          </Link>
          
          {/* Theme toggle button */}
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => {
              const newTheme = theme === 'dark' ? 'light' : 'dark';
              setTheme(newTheme);
              console.log("Setting theme to:", newTheme);
              // Manually toggle classes for immediate visual feedback
           
            }}
            className="ml-4 border-gray-300 dark:border-red-800/30 bg-gray-100 dark:bg-red-950/20 text-gray-700 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-red-950/30"
          >
            {isMounted && theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="mobile-menu flex items-center md:hidden">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => {
              const newTheme = theme === 'dark' ? 'light' : 'dark';
              setTheme(newTheme);
              console.log("Setting theme to:", newTheme);
              // Manually toggle classes for immediate visual feedback
        
            }}
            className="mr-3 border-gray-300 dark:border-red-800/30 bg-gray-100 dark:bg-red-950/20 text-gray-700 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-red-950/30"
          >
            {isMounted && theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <button
            className="menu-toggle w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-red-900/20 hover:bg-gray-300 dark:hover:bg-red-900/40 rounded-full text-gray-700 dark:text-red-400 transition-colors"
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
            className={`fixed inset-0 bg-gray-700/70 dark:bg-black/70 z-40 md:hidden transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar with hardware-accelerated transforms */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black border-l border-gray-200 dark:border-red-900/30 shadow-lg shadow-gray-400/50 dark:shadow-black/50 p-8 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ willChange: "transform" }}
          >
            <div className="flex justify-end mb-8">
              <button
                className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-red-900/30 rounded-full text-gray-700 dark:text-red-400"
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
                className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors border-b border-gray-200 dark:border-red-900/20 pb-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors border-b border-gray-200 dark:border-red-900/20 pb-2"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors border-b border-gray-200 dark:border-red-900/20 pb-2"
              >
                Services
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors border-b border-gray-200 dark:border-red-900/20 pb-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-red-900 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/" draggable={false} className="flex items-center mb-4">
                <Image
                  src="/codewithali.png"
                  alt="CodeWithAli"
                  draggable={false}
                  className="logo rounded-full border-2 border-gray-300 dark:border-red-800/50 shadow-lg shadow-gray-200 dark:shadow-red-900/20"
                  width={70}
                  height={70}
                />
                <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-red-400 dark:to-red-600">
                  CodeWithAli
                </span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-red-200/60 mb-4">
                We design and develop digital experiences that help businesses
                and individuals succeed online.
              </p>
              <div className="flex space-x-4">
                {/* Social icons */}
                {[1, 2, 3, 4].map((i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-red-950/30 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-red-900/50 transition-colors"
                  >
                    <span className="text-xs text-gray-600 dark:text-red-400">{i}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Services</h4>
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
                      className="text-gray-600 dark:text-red-200/60 hover:text-gray-900 dark:hover:text-red-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Company</h4>
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
                      className="text-gray-600 dark:text-red-200/60 hover:text-gray-900 dark:hover:text-red-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:info@codewithali.com"
                    className="text-gray-600 dark:text-red-200/60 hover:text-gray-900 dark:hover:text-red-300 transition-colors"
                  >
                    unfold@codewithali.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+4086907890"
                    className="text-gray-600 dark:text-red-200/60 hover:text-gray-900 dark:hover:text-red-300 transition-colors"
                  >
                    (408) 690-4009
                  </a>
                </li>
                <li>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-gray-300 dark:border-red-800/30 text-gray-700 dark:text-red-400 bg-gray-50 dark:bg-red-900/20 hover:bg-gray-100 dark:hover:bg-red-950/20 hover:text-gray-900 dark:hover:text-red-800"
                    >
                      Get a Quote
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-red-900 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-red-200/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} CodeWithAli. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-red-200/60 hover:text-gray-900 dark:hover:text-red-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-red-200/60 hover:text-gray-900 dark:hover:text-red-300 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-red-200/60 hover:text-gray-900 dark:hover:text-red-300 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className ="dark" suppressHydrationWarning>
      <body>
      <ThemeProvider
  attribute="class"
  defaultTheme="dark" // Force dark mode to test
  enableSystem={false} // Disable system preference temporarily
  disableTransitionOnChange
>
  <ThemedContent>{children}</ThemedContent>
</ThemeProvider>
      </body>
    </html>
  );
}