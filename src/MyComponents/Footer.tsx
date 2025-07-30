
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Facebook, Github, Heart, Instagram, Linkedin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { isRtlLang } from "rtl-detect";


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
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);
    
    return (
        <>
          {/* Footer */}
          <footer className="py-12 border-t border-red-900 dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
              {/* Mobile Footer Links + Info */}
              <div className="md:hidden grid grid-cols-2 grid-rows-2 gap-y-5">
                {/* Services Section */}
                <div>
                  <h4 className="font-medium text-black dark:text-white mb-4">{t("nav.company.title")}</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      {
                        title: t("nav.company.links.1"),
                        href: "/services/web-development",
                      },
                      {
                        title: t("nav.company.links.2"),
                        href: "/services/mobile-app-development",
                      },
                      {
                        title: t("nav.company.links.3"),
                        href: "/services/UI/UX-Design",
                      },
                      {
                        title: t("nav.company.links.4"),
                        href: "/services/E-Commerse",
                      },
                      {
                        title: t("nav.company.links.5"),
                        href: "/services/seo-optimization",
                      },
                      {
                        title: t("nav.company.links.6"),
                        href: "/services/Web-hosting",
                      },
                    ].map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="text-red-500 dark:text-red-200/60 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Section */}
                <div className="col-start-2">
                  <h4 className="font-medium text-black dark:text-white mb-4">{t("nav.resources.title")}</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      {
                        title: t("nav.resources.links.1"),
                        href: "/about",
                      },
                      {
                        title: t("nav.resources.links.2"),
                        href: "/portfolio",
                      },
                      { title: t("nav.resources.links.3"), href: "/#process" },
                      {
                        title: t("nav.resources.links.4"),
                        href: "/contact",
                      },
                    ].map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="text-red-500 dark:text-red-200/60 hover:text-red-900 dark:hover:text-red-300 transition-colors"
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
                    <h4 className="font-medium text-black dark:text-white mb-4">{t("nav.contact.title")}</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="mailto:info@codewithali.com"
                          className="text-red-500 dark:text-red-200/60 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                        >
                        {t("nav.contact.links.1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="tel:+4086907890"
                          className="text-red-500 dark:text-red-200/60 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                        >
                          {t("nav.contact.links.2")}
                           
                        </a>
                      </li>
                      <li>
                        <Link href="/contact">
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 border-red-800/30 text-red-800 dark:text-red-400 bg-red-500/40 dark:bg-red-900/20 hover:bg-red-800/40 dark:hover:bg-red-950/20 hover:text-red-800"
                          >
                           {t("nav.contact.links.3")}
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
                  <span className={`${isRTL ? "mr-2" : "ml-2"} text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-900 dark:from-red-300 dark:to-red-500`}>
                    CodeWithAli
                  </span>
                </Link>
                <p className="text-sm text-red-500 dark:text-red-200/60 mb-4">
                 {t("compDesc")}
                </p>
                <div className="flex space-x-4">
                  {/* Social icons */}
                  {/* eslint-disable */}
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
                            ? `text-xs text-red-500 dark:text-red-400 ${social.textStyle}`
                            : `text-xs text-red-500 dark:text-red-400`
                        }
                      >
                        {social.icon}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer Links + Info DESKTOP (?) */}
              <div className="md:col-span-2">
                <div className="hidden md:grid grid-cols-3 grid-rows-1">
                  {/* Services Section */}
                  <div>
                    <h4 className="font-medium text-black dark:text-white mb-4">{t("nav.company.title")}</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        {
                          title: t("nav.company.links.1"),
                          href: "/services/web-development",
                        },
                        {
                          title: t("nav.company.links.2"),
                          href: "/services/mobile-app-development",
                        },
                        {
                          title: t("nav.company.links.3"),
                          href: "/services/UI/UX-Design",
                        },
                        {
                          title: t("nav.company.links.4"),
                          href: "/services/E-Commerse",
                        },
                        {
                          title: t("nav.company.links.5"),
                          href: "/services/seo-optimization",
                        },
                        {
                          title: t("nav.company.links.6"),
                          href: "/services/Web-hosting",
                        },
                      ].map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="text-red-500 dark:text-red-200/60 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company Section */}
                  <div>
                    <h4 className="font-medium text-black dark:text-white mb-4">{t("nav.resources.title")}</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        {
                          title: t("nav.resources.links.1"),
                          href: "/about",
                        },
                        {
                          title: t("nav.resources.links.2"),
                          href: "/portfolio",
                        },
                        { title: t("nav.resources.links.3"), href: "/#process" },
                        {
                          title: t("nav.resources.links.4"),
                          href: "/contact",
                        },
                        {
                          title: "Terms & Conditions",
                          href: "/terms",
                        },
                      
                      ].map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="text-red-500 dark:text-red-200/60 hover:text-red-900 dark:hover:text-red-300 transition-colors"
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
                      <h4 className="font-medium text-black dark:text-white mb-4">{t("nav.contact.title")}</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a
                            href="mailto:info@codewithali.com"
                            className="text-red-500 dark:text-red-200/60 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                          >
                           {t("nav.contact.links.1")}
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+4086907890"
                            className="text-red-500 dark:text-red-200/60 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                          >
                            {t("nav.contact.links.2")}
                           
                          </a>
                        </li>
                        <li>
                          <Link href="/contact">
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-2 border-red-800/30 text-red-800 dark:text-red-400 bg-red-500/40 dark:bg-red-900/20 hover:bg-red-800/40 dark:hover:bg-red-950/20 hover:text-red-800"
                            >
                              {t("nav.contact.links.3")}
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
              <p className="text-sm text-red-800 dark:text-red-200/60 mb-4 md:mb-0">
                © {new Date().getFullYear()} {t("nav.legal.links.1")}
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
                  className="text-sm text-red-800 hover:text-red-400 dark:text-red-200/60 dark:hover:text-red-300 transition-colors"
                >
                  {t("nav.legal.links.2")}
                
                </a>
                <a
                  href="#"
                  className="text-sm text-red-800 hover:text-red-400 dark:text-red-200/60 dark:hover:text-red-300 transition-colors"
                >
                  {t("nav.legal.links.3")}
                </a>
                <a
                  href="#"
                  className="text-sm text-red-800 hover:text-red-400 dark:text-red-200/60 dark:hover:text-red-300 transition-colors"
                >
                 {t("nav.legal.links.4")}
                </a>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}