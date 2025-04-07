"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Styles/globals.css";
import "./Styles/mediaSizing.css";
import { Button } from "@/components/ui/button";
import { Facebook, GiftIcon, Github, Instagram, Linkedin } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const socials = [
    {
      platform: "Github",
      style: "hover:bg-black hover:border border-red-950/30",
      textStyle: "group-hover:text-white duration-150",
      icon: <Github />,
      url: "https://github.com/CodeWithAli-Co",
    },
    {
      platform: "Instagram",
      style:
        "hover:bg-gradient-to-t hover:from-yellow-400 hover:via-red-500 hover:to-purple-500",
      icon: <Instagram />,
      url: "https://www.instagram.com/officialcodewithali/#",
    },
    {
      platform: "Facebook",
      style: "hover:bg-gradient-to-t hover:from-blue-900 hover:to-blue-800",
      textStyle: "group-hover:text-white duration-150",
      icon: <Facebook />,
      url: "https://www.facebook.com/profile.php?id=61573763924961",
    },
    {
      platform: "LinkedIn",
      style: "hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-400",
      textStyle: "group-hover:text-white duration-150",
      icon: <Linkedin />,
      url: "https://www.linkedin.com/company/codewithali-co",
    },
  ];

  // Prevent hydration issues by rendering menu only after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <html lang="en">
      <body className="bg-black text-red-200">
        <header className="border-b border-red-900/30 bg-black py-4 px-6 flex justify-between items-center">
          <div className="logo-container flex items-center">
            <Link href="/" draggable={false} className="flex items-center">
              <Image
                src="/codewithali.png"
                alt="CodeWithAli"
                draggable={false}
                className="logo rounded-full border-2 border-red-800/50 shadow-lg shadow-red-900/20"
                width={70}
                height={70}
                priority
              />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
                CodeWithAli
              </span>
            </Link>
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
              href="/portfolio"
              className="text-red-200 hover:text-red-400 transition-colors"
            >
              Portfolio
            </Link>

            <div className="nav-item relative group">
              <Link
                href="/services"
                onClick={() => scrollTo({ top: 0 })} // This is to fix when navigating to Services from Contact
                className="text-gray-700 dark:text-red-200 hover:text-gray-900 dark:hover:text-red-400 transition-colors"
              >
                Services
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-black border border-gray-200 dark:border-red-900/30 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {[
                    {
                      title: "Website Development",
                      href: "/services/web-development",
                    },
                    {
                      title: "Mobile App Development",
                      href: "/services/mobile-app-development",
                    },
                    { title: "UI/UX Design", href: "/services/UI/UX-Design" },
                    {
                      title: "E-commerce Solutions",
                      href: "/services/E-Commerse",
                    },
                    {
                      title: "SEO Optimization",
                      href: "/services/seo-optimization",
                    },
                    {
                      title: "Web Hosting & Maintenance",
                      href: "/services/Web-hosting",
                    },
                  ].map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 dark:text-red-200 hover:bg-gray-100 dark:hover:bg-red-900/20"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/merchandise"
              className="text-red-200 hover:text-red-400 transition-colors"
            >
              Merchandise
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
                  href="/portfolio"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
                >
                  Portfolio
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
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
              {/* Mobile Footer Links + Info */}
              <div className="md:hidden grid grid-cols-2 grid-rows-2 gap-y-5">
                {/* Services Section */}
                <div>
                  <h4 className="font-medium text-white mb-4">Services</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      {
                        title: "Website Development",
                        href: "/services/web-development",
                      },
                      {
                        title: "Mobile App Development",
                        href: "/services/mobile-app-development",
                      },
                      { title: "UI/UX Design", href: "/services/UI/UX-Design" },
                      {
                        title: "E-commerce Solutions",
                        href: "/services/E-Commerse",
                      },
                      {
                        title: "SEO Optimization",
                        href: "/services/seo-optimization",
                      },
                      {
                        title: "Web Hosting",
                        href: "/services/Web-hosting",
                      },
                    ].map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="text-red-200/60 hover:text-red-300 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Section */}
                <div className="col-start-2">
                  <h4 className="font-medium text-white mb-4">Company</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      {
                        title: "About",
                        href: "/about",
                      },
                      {
                        title: "Portfolio",
                        href: "/portfolio",
                      },
                      { title: "Process", href: "/#process" },
                      {
                        title: "Contact",
                        href: "/contact",
                      },
                    ].map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="text-red-200/60 hover:text-red-300 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="col-span-2">
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
              </div>

              {/* Socials + Company Desc */}
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <Link
                  href="/"
                  draggable={false}
                  className="flex items-center mb-4"
                >
                  <Image
                    src="/codewithali.png"
                    alt="CodeWithAli"
                    draggable={false}
                    className="logo rounded-full border-2 border-red-800/50 shadow-lg shadow-red-900/20"
                    width={70}
                    height={70}
                  />
                  <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                    CodeWithAli
                  </span>
                </Link>
                <p className="text-sm text-red-200/60 mb-4">
                  We design and develop digital experiences that help businesses
                  and individuals succeed online.
                </p>
                <div className="flex space-x-4">
                  {/* Social icons */}
                  {socials.map((social) => (
                    <Link
                      key={social.platform}
                      href={social.url}
                      target={social.url !== "#" ? `_blank` : `_self`}
                      className={
                        social.style
                          ? `w-8 h-8 rounded-full flex items-center justify-center bg-red-950/30 ${social.style} transition-colors duration-300 ease-in-out group`
                          : `w-8 h-8 rounded-full flex items-center justify-center bg-red-950/30 hover:bg-red-900/50 transition-colors duration-300 ease-in-out group`
                      }
                    >
                      <span
                        className={
                          social.textStyle
                            ? `text-xs text-red-400 ${social.textStyle}`
                            : `text-xs text-red-400`
                        }
                      >
                        {social.icon}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer Links + Info */}
              <div className="md:col-span-2">
                <div className="hidden md:grid grid-cols-3 grid-rows-1">
                  {/* Services Section */}
                  <div>
                    <h4 className="font-medium text-white mb-4">Services</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        {
                          title: "Website Development",
                          href: "/services/web-development",
                        },
                        {
                          title: "Mobile App Development",
                          href: "/services/mobile-app-development",
                        },
                        {
                          title: "UI/UX Design",
                          href: "/services/UI/UX-Design",
                        },
                        {
                          title: "E-commerce Solutions",
                          href: "/services/E-Commerse",
                        },
                        {
                          title: "SEO Optimization",
                          href: "/services/seo-optimization",
                        },
                        {
                          title: "Web Hosting",
                          href: "/services/Web-hosting",
                        },
                      ].map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="text-red-200/60 hover:text-red-300 transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company Section */}
                  <div>
                    <h4 className="font-medium text-white mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        {
                          title: "About",
                          href: "/about",
                        },
                        {
                          title: "Portfolio",
                          href: "/portfolio",
                        },
                        { title: "Process", href: "/#process" },
                        {
                          title: "Contact",
                          href: "/contact",
                        },
                      ].map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="text-red-200/60 hover:text-red-300 transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Section */}
                  <div>
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
                </div>
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
