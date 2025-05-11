"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Code,
  Smartphone,
  Layers,
  Server,
  Search,
  ShoppingBag,
  Palette,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ArrowUpLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import GradientText from "@/MyComponents/GradientText";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";

// ClientOnly wrapper to prevent hydration issues
const ClientOnly = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? children : null;
};

// Animation variants - simplified for better performance
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

export default function ServicesPage() {
  const router = useRouter();
  const t = useTranslations("Serv");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);

  // Services data
  const services = [
    {
      title: t("Services.titleLinks.1"),
      description: t("Services.desc.1"),
      icon: Code,
      color: "from-red-600 to-red-800",
      href: "/services/web-development",
      features: [
        t("Services.features.first.1"),
        t("Services.features.first.2"),
        t("Services.features.first.3"),
        t("Services.features.first.4"),
      ],
    },
    // {
    //   title: t("Services.titleLinks.2"),
    //   description:
    //   t("Services.desc.2"),
    //   icon: Smartphone,
    //   color: "from-red-700 to-red-900",
    //   href: "/services/mobile-app-development",
    //   features: [
    //     t("Services.features.second.1"),
    //     t("Services.features.second.2"),
    //     t("Services.features.second.3"),
    //     t("Services.features.second.4"),
    //   ],
    // },
    {
      title: t("Services.titleLinks.3"),
      description: t("Services.desc.3"),
      icon: Palette,
      color: "from-red-800 to-red-950",
      href: "/services/UI/UX-Design", // Fixed path
      features: [
        t("Services.features.third.1"),
        t("Services.features.third.2"),
        t("Services.features.third.3"),
        t("Services.features.third.4"),
      ],
    },
    {
      title: t("Services.titleLinks.4"),
      description: t("Services.desc.4"),
      icon: ShoppingBag,
      color: "from-red-600 to-red-800",
      href: "/services/E-Commerse",
      features: [
        t("Services.features.fourth.1"),
        t("Services.features.fourth.2"),
        t("Services.features.fourth.3"),
        t("Services.features.fourth.4"),
      ],
    },
    {
      title: t("Services.titleLinks.5"),
      description: t("Services.desc.5"),
      icon: Search,
      color: "from-red-700 to-red-900",
      href: "/services/seo-optimization",
      features: [
        t("Services.features.fifth.1"),
        t("Services.features.fifth.2"),
        t("Services.features.fifth.3"),
        t("Services.features.fifth.4"),
      ],
    },
    {
      title: t("Services.titleLinks.6"),
      description: t("Services.desc.6"),
      icon: Server,
      color: "from-red-800 to-red-950",
      href: "/services/Web-hosting",
      features: [
        t("Services.features.sixth.1"),
        t("Services.features.sixth.2"),
        t("Services.features.sixth.3"),
        t("Services.features.sixth.4"),
      ],
    },
  ];

  const processSteps = [
    {
      number: t("Services.process.numbers.1"),
      title: t("Services.process.1"),
      description: t("Services.process.desc.1"),
      icon: Search,
    },
    {
      number: t("Services.process.numbers.2"),
      title: t("Services.process.2"),
      description: t("Services.process.desc.2"),
      icon: Layers,
    },
    {
      number: t("Services.process.numbers.3"),
      title: t("Services.process.3"),
      description: t("Services.process.desc.3"),
      icon: Code,
    },
    {
      number: t("Services.process.numbers.4"),
      title: t("Services.process.4"),
      description: t("Services.process.desc.4"),
      icon: Server,
    },
  ];

  return (
    <ClientOnly>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-red-50 dark:bg-black opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-red-300 to-red-500 dark:bg-gradient-to-br dark:from-red-950/30 dark:via-transparent dark:to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-red-700 dark:bg-red-900/30 text-white dark:text-red-400 border-transparent mb-4 px-3 py-1">
                {t("badge")}
              </Badge>
              <h1 className="text-4xl text-black dark:text-white md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t("Header")}

                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500 dark:from-red-400 dark:to-red-600 block">
                  {t("Subheader")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-black font-semibold dark:text-red-200/80 mb-8">
                {t("Subdesc")}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/30 dark:bg-red-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/30 dark:bg-red-700/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
              <AnimatePresence>
                {services.map((service, index) => (
                  <div key={index}>
                    <Card className="bg-white border-red-300 dark:bg-black/60 dark:border-red-900 backdrop-blur-sm h-full overflow-hidden group hover:border-red-500 dark:hover:border-red-800/50 transition-colors">
                      <CardContent className="p-6 flex flex-col h-full ">
                        <div className="mb-5">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-700 dark:from-red-600 dark:to-red-700 p-3 mb-4 transform group-hover:scale-110 transition-transform`}
                          >
                            <service.icon className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-red-800 dark:text-white mb-3">
                            {/* Removed Mobile Page. Add this back when want to show it again */}
                            {/* : service.title === "Mobile App Development" ? (
                              <>
                                <GradientText gradient="from-blue-700 via-blue-600 to-blue-800 dark:from-white dark:via-cyan-400 dark:to-blue-400">{service.title}</GradientText>
                              </>
                            )  */}
                            {service.title === "Website Development" ? (
                              <>
                                <GradientText gradient="from-red-700 via-red-600 to-red-800 dark:from-white dark:via-pink-400 dark:to-red-500">
                                  {service.title}
                                </GradientText>
                              </>
                            ) : service.title === "UI/UX Design" ? (
                              <>
                                <GradientText gradient="from-purple-700 via-purple-600 to-blue-800 dark:from-white dark:via-purple-500 dark:to-blue-500">
                                  {service.title}
                                </GradientText>
                              </>
                            ) : service.title === "E-commerce Solutions" ? (
                              <>
                                <GradientText gradient="from-green-700 to-green-900 dark:from-white dark:to-green-600">
                                  {service.title}
                                </GradientText>
                              </>
                            ) : service.title === "SEO Optimization" ? (
                              <>
                                <GradientText gradient="from-orange-700 via-orange-600 to-red-800 dark:from-white dark:via-orange-400 dark:to-red-600">
                                  {service.title}
                                </GradientText>
                              </>
                            ) : service.title ===
                              "Web Hosting & Maintenance" ? (
                              <>
                                <GradientText gradient="from-gray-700 via-gray-600 to-gray-800 dark:from-white dark:via-gray-500 dark:to-gray-600">
                                  {service.title}
                                </GradientText>
                              </>
                            ) : (
                              <>
                                <GradientText gradient="from-green-700 to-red-800 dark:from-green-600 dark:to-red-600">
                                  {service.title}
                                </GradientText>
                              </>
                            )}
                          </h3>
                          <p className="text-black dark:text-white/90 mb-4">
                            {service.description}
                          </p>

                          <ul className="space-y-2 mb-5">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start font-bold"
                              >
                                {isRTL ? (
                                  <ChevronLeft className="h-4 w-4 text-black dark:text-red-500 mt-1 mr-2 flex-shrink-0" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 text-black dark:text-red-500 mt-1 mr-2 flex-shrink-0" />
                                )}
                                <span className="text-black dark:text-white/80 font-bold text-sm">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto pt-4">
                          <Link href={service.href} target="_blank">
                            <Button
                              className="w-full bg-gradient-to-r from-red-500 to-red-700 dark:from-red-700 dark:to-red-900 hover:from-red-600 hover:to-red-800 
                              dark:hover:from-red-600 dark:hover:to-red-800 text-white"
                            >
                              {t("Services.process.learn")}

                              {isRTL ? (
                                <ArrowUpLeft className="ml-2 h-4 w-4" />
                              ) : (
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                              )}
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Process / Approach Overview */}
        <section className="py-20 bg-red-50 dark:bg-red-950/10">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <div>
                <Badge className="bg-red-700 dark:bg-red-900/30 text-white dark:text-red-400 border-transparent mb-4 px-3 py-1">
                  {t("Services.process.approach.badge")}
                </Badge>
                <h2 className="text-3xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 dark:from-white dark:via-red-500 dark:to-red-700 bg-clip-text text-transparent md:text-4xl font-bold mb-6">
                  {t("Services.process.approach.title")}
                </h2>
                <p className="text-black dark:text-white/80 text-lg max-w-2xl mx-auto">
                  {t("Services.process.approach.sub")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index}>
                  <div className="bg-red-200 border-1 border-red-300 dark:bg-black dark:border-red-900 rounded-xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 dark:from-red-600 dark:to-red-800 flex items-center justify-center ${isRTL ? "ml-3" : "mr-3"}`}>
                        <span className="text-white font-bold">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-red-800 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-black dark:text-white/90">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - More responsive */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-800/90 to-red-800/90 dark:bg-gradient-to-br border-3 border-red-950 dark:from-red-950/30 dark:to-transparent rounded-xl p-6 md:p-10 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white dark:text-white mb-4 md:mb-6">
                {t("Services.cta.title")}
              </h2>
              <p className="text-base md:text-lg text-white dark:text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                {t("Services.cta.header")}
              </p>
              <Button
                className="w-full md:w-auto bg-gradient-to-r from-red-700 to-red-800 dark:from-red-700 dark:to-red-900 hover:from-red-800 hover:to-red-800/80 
                     dark:hover:from-red-600 dark:hover:to-red-800 text-white border border-red-400 dark:border-red-800/30 shadow-lg shadow-red-400/30 dark:shadow-red-950/20 px-4 md:px-8 py-2"
                onClick={() => router.push("/contact")}
              >
                {t("Services.cta.button")}
                {isRTL ? (
                  <ChevronLeft className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronRight className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ClientOnly>
  );
}
