import { Button } from "@/components/ui/button";
import { Facebook, Github, Heart, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    
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

    
    return (
        <>
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
                  {socials.map((social : any) => (
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
                <Link
                  href="https://gofund.me/84a5e264"
                  target="_blank"
                  draggable={false}
                  className="text-red-500"
                >
                  <Heart />
                </Link>
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
        </>
    )
}