"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  Code,
  Smartphone,
  Layers,
  Server,
  Search,
  BriefcaseBusiness,
  ShoppingBag,
  School,
  MoveUpRight,
  CheckCircle,
  Palette,
  ArrowRight,
  Coffee,
  MessageSquare,
  Mail,
  ChevronLeft,
  ArrowLeft,
  MoveUpLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ContactForm from "@/MyComponents/contact-form";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { Link } from "@/i18n/navigation";

// Animation variants with reduced intensity for mobile
// const fadeIn = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

const HomePage = () => {
  const t = useTranslations("HomePage");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const locale = useLocale();
  const isRTL = isRtlLang(locale);

  // Services data
  const services = [
    {
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
      icon: Code,
      color: "from-red-600 to-red-700",
      url: "/services/web-development",
    },
    {
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
      icon: Smartphone,
      color: "from-red-600 to-red-700",
      url: "/services/mobile-app-development",
    },
    {
      title: t("services.items.3.title"),
      description: t("services.items.3.description"),
      icon: Palette,
      color: "from-red-600 to-red-700",
      url: "/services/UI/UX-Design",
    },
    {
      title: t("services.items.4.title"),
      description: t("services.items.4.description"),
      icon: ShoppingBag,
      color: "from-red-600 to-red-700",
      url: "/services/E-Commerse",
    },
    {
      title: t("services.items.5.title"),
      description: t("services.items.5.description"),
      icon: Search,
      color: "from-red-600 to-red-700",
      url: "/services/seo-optimization",
    },
    {
      title: t("services.items.6.title"),
      description: t("services.items.6.description"),
      icon: Server,
      color: "from-red-600 to-red-700",
      url: "/services/Web-hosting",
    },
  ];

  // Client industries
  const industries = [
    { name: t("clients.industries.business"), icon: BriefcaseBusiness },
    { name: t("clients.industries.ecommerce"), icon: ShoppingBag },
    { name: t("clients.industries.education"), icon: School },
    { name: t("clients.industries.healthcare"), icon: MessageSquare },
    { name: t("clients.industries.realEstate"), icon: Coffee },
    { name: t("clients.industries.technology"), icon: Server },
  ];

  // Portfolio projects
  const portfolioProjects = [
    {
      title: "Knoz Al-Najah Website",
      category: "Web Development",
      image: "/knoz_website.png",
      url: "https://knoz.codewithali.com/",
    },
    {
      title: "Budgetary App",
      category: "Desktop Development",
      image: "/budgetary.png",
      url: "https://budgetary.codewithali.com/",
    },
    {
      title: "Mario's Hauling",
      category: "Web Development",
      image: "/marioshauling_website.png",
      url: "https://marioshauling.codewithali.com/",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: t("testimonials.items.1.name"),
      position: t("testimonials.items.1.position"),
      content: t("testimonials.items.1.content"),
    },
    {
      name: t("testimonials.items.2.name"),
      position: t("testimonials.items.2.position"),
      content: t("testimonials.items.2.content"),
    },
    {
      name: t("testimonials.items.3.name"),
      position: t("testimonials.items.3.position"),
      content: t("testimonials.items.3.content"),
    },
  ];

  // Check if component is mounted and check for reduced motion preference
  useEffect(() => {
    setIsMounted(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMediaChange = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // Auto rotate testimonials with optimization for hidden/inactive tabs
  useEffect(() => {
    /* eslint-disable */
    let interval: any;

    if (isMounted && document.visibilityState === "visible") {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        interval = setInterval(() => {
          setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
      } else {
        clearInterval(interval);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isMounted]);

  // Apply conditional animation based on device capability and user preference
  const getAnimationProps = (delay = 0) => {
    if (!isMounted || isReducedMotion) {
      return {}; // No animation on SSR or when reduced motion is preferred
    }

    return {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.3, delay },
    };
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-10 pb-20 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 via-red-700 to-red-900 dark:bg-gradient-to-br dark:from-red-950/30 dark:via-transparent dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="md:pr-8" {...getAnimationProps()}>
              <h1 className="text-4xl text-black dark:text-white md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t("hero.title.part1")}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white dark:from-red-400 dark:to-red-600 block">
                  {t("hero.title.part2")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-black font-semibold dark:text-red-200/80 mb-8 max-w-xl">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-900 hover:from-red-700 hover:to-red-800 
                     dark:hover:from-red-600 dark:hover:to-red-800 text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8 w-full sm:w-45 xl:w-auto"
                  >
                    {t("hero.buttons.startProject")}
                    {isRTL ? (
                      <ChevronLeft className="ml-2 h-5 w-5" />
                    ) : (
                      <ChevronRight className="ml-2 h-5 w-5" />
                    )}
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-800/30 text-red-900 dark:text-red-400 bg-white dark:bg-red-950/20 hover:bg-red-800/80 dark:hover:bg-red-950/30 hover:text-white dark:hover:text-white px-8 w-full sm:w-38 xl:w-auto"
                  >
                    {t("hero.buttons.viewWork")}
                  </Button>
                </Link>
                <Link
                  href="mailto:unfold@codewithali.com"
                  className="group block"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-800/30 text-red-900 dark:text-red-400 bg-white dark:bg-red-950/20 hover:bg-red-800/80 dark:hover:bg-red-950/30 hover:text-white px-8 w-full sm:w-38 xl:w-auto 
                              flex items-center gap-2 transition-all duration-300 ease-in-out 
                              group-hover:bg-red-950/30 group-hover:text-white dark:group-hover:text-white"
                  >
                    <Mail className="dark:text-red-400 group-hover:text-white dark:group-hover:text-white" />
                    <span>{t("hero.buttons.contactUs")}</span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side Graphics - only rendered on larger screens */}
            {isMounted && (
              <motion.div
                {...getAnimationProps(0.2)}
                // Added ml-20 for LG so it doesnt cover the contact btn
                className={`hidden lg:block ${isRTL ? "lg:${isRTL}0" : "lg:ml-20"} xl:ml-0 relative`}
              >
                <div className="relative bg-black/60 border border-red-900 rounded-xl overflow-hidden shadow-2xl shadow-red-950/20 p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Mock designs */}
                    <div className="aspect-square bg-black/60 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                        <Layers className="h-12 w-12 text-red-500/60" />
                      </div>
                    </div>
                    <div className="aspect-square bg-black/60  to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                        <Code className="h-12 w-12 text-red-500/60" />
                      </div>
                    </div>
                    <div className="aspect-square bg-black/60  to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                        <Smartphone className="h-12 w-12 text-red-500/60" />
                      </div>
                    </div>
                    <div className="aspect-square bg-black/60  to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                        <ShoppingBag className="h-12 w-12 text-red-500/60" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 p-4 bg-black/60  to-red-900/10 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-32 h-3 bg-red-800/30 rounded-full"></div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                        <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                        <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-red-800/30 rounded-full w-full"></div>
                      <div className="h-2 bg-red-800/30 rounded-full w-5/6"></div>
                      <div className="h-2 bg-red-800/30 rounded-full w-4/6"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-400/10 dark:bg-red-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-400/10 dark:bg-red-800/10 rounded-full blur-3xl"></div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-white dark:bg-black/80 border-y border-red-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <p className="text-black dark:text-red-300/60 text-sm uppercase tracking-wider">
              {t("clients.title")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                {...getAnimationProps(index * 0.05)}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-transparent dark:bg-black rounded-lg flex items-center justify-center mb-3">
                  <industry.icon className="h-6 w-6 text-red-700 dark:text-red-500/70" />
                </div>
                <span className="text-red-800 dark:text-red-200/60 text-sm w-max">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-10 md:py-14 relative overflow-hidden"
      >
        {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/30 dark:bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/30 dark:bg-red-700/10 rounded-full blur-3xl"></div> */}

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
          <div className="text-center mb-16">
            <motion.div {...getAnimationProps()}>
              <Badge className="bg-red-700 dark:bg-red-900/30 dark:text-red-400 border-transparent mb-4 px-3 py-1">
                {t("services.badge")}
              </Badge>
              <h2 className="text-3xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 dark:from-white dark:via-red-500 dark:to-red-700 bg-clip-text text-transparent md:text-4xl font-bold mb-6">
                {t("services.title")}
              </h2>
              <p className="text-black dark:text-red-200/60 text-lg max-w-2xl mx-auto">
                {t("services.description")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div key={index} {...getAnimationProps(index * 0.05)}>
                <Card className="bg-red-700 dark:bg-black/60 border-red-600 backdrop-blur-sm h-full overflow-hidden group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-5">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} border-red-900 border p-3 mb-4 transform group-hover:scale-110 transition-transform`}
                        style={{ willChange: "transform" }}
                      >
                        <service.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white dark:text-red-200/60">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <Link href={service.url} target="_blank">
                        <Button
                          variant="ghost"
                          className="p-0 text-white dark:text-red-400 dark:hover:text-red-300 hover:bg-transparent group"
                        >
                          {t("services.learnMore")}
                          {isRTL ? (
                            <ArrowLeft className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          ) : (
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          )}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Display */}
      <section id="work" className="py-10 md:py-14 dark:bg-red-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.div {...getAnimationProps()}>
              <Badge className="bg-red-700 dark:bg-red-900/50 dark:text-red-300 border-transparent mb-4 px-3 py-1">
                {t("portfolio.badge")}
              </Badge>
              <h2 className="text-3xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 dark:from-white dark:via-red-500 dark:to-red-700 bg-clip-text text-transparent md:text-4xl font-bold mb-6">
                {t("portfolio.title")}
              </h2>
              <p className="text-black dark:text-red-200 text-lg max-w-2xl mx-auto">
                {t("portfolio.description")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                {...getAnimationProps(index * 0.1)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-red-950/20">
                  {/* Project Image */}
                  <div className="w-full h-full bg-red-300 dark:bg-black/80 border-2 border-red-800/30 flex items-center justify-center">
                    {project.image ? (
                      <>
                        {/* Keeping height and width will make image quality better */}
                        <Image
                          src={project.image}
                          alt={project.title}
                          height={1000}
                          width={1000}
                          quality={100}
                          loading="eager"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </>
                    ) : (
                      <>
                        <p className="text-black dark:text-red-200/70">
                          Project Image Placeholder
                        </p>
                      </>
                    )}
                  </div>

                  {/* Hover Overlay - preloaded with opacity-0 for better performance */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-red-400/80 to-red-800/90 dark:from-red-800/80 dark:to-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ willChange: "opacity" }}
                  >
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-red-100 text-lg mb-6">
                        {project.category}
                      </p>
                      <Link
                        href={`${project.url}`}
                        target="_blank"
                        draggable={false}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-2 border-red/60 text-white bg-red-700/80 dark:bg-red-700/50 px-6 py-5 hover:bg-red-950 dark:hover:bg-black hover:text-white text-base font-medium"
                        >
                          {t("portfolio.viewProject")}
                          {isRTL ? (
                            <MoveUpLeft className="ml-2 h-5 w-5" />
                          ) : (
                            <MoveUpRight className="ml-2 h-5 w-5" />
                          )}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <Badge className="bg-red-700 dark:bg-red-800/30 dark:text-red-300 border-transparent text-base py-1 px-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-black dark:text-white mt-3">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/portfolio">
              <Button
                className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-900 hover:from-red-700 hover:to-red-800 
                     dark:hover:from-red-600 dark:hover:to-red-800 text-white border-2 border-red-800/40 shadow-lg shadow-red-950/20 px-8 py-6 text-lg font-medium"
              >
                {t("portfolio.viewAllProjects")}
                {isRTL ? (
                  <ChevronLeft className="ml-2 h-5 w-5" />
                ) : (
                  <ChevronRight className="ml-2 h-5 w-5" />
                )}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-10 md:py-14 relative overflow-hidden">
        {/* <div className="absolute -top-40 left-40 w-80 h-80 bg-red-500/30 dark:bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-40 w-80 h-80 bg-red-500/30 dark:bg-red-700/10 rounded-full blur-3xl"></div> */}

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...getAnimationProps()}>
              <Badge className="bg-red-700 dark:bg-red-900/30 dark:text-red-400 border-transparent mb-4 px-3 py-1">
                {t("process.badge")}
              </Badge>
              <h2 className="text-3xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 dark:from-white dark:via-red-500 dark:to-red-700 bg-clip-text text-transparent md:text-4xl font-bold mb-6">
                {t("process.title")}
              </h2>
              <p className="text-black dark:text-white/80 text-lg max-w-2xl mx-auto">
                {t("process.description")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-6">
            {[
              {
                number: "01",
                title: t("process.steps.1.title"),
                description: t("process.steps.1.description"),
                icon: Search,
              },
              {
                number: "02",
                title: t("process.steps.2.title"),
                description: t("process.steps.2.description"),
                icon: Palette,
              },
              {
                number: "03",
                title: t("process.steps.3.title"),
                description: t("process.steps.3.description"),
                icon: Code,
              },
              {
                number: "04",
                title: t("process.steps.4.title"),
                description: t("process.steps.4.description"),
                icon: ShoppingBag,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                {...getAnimationProps(index * 0.1)}
                className="relative"
              >
                <div className="bg-red-700 dark:bg-black/60 border border-red-900 rounded-xl p-6 h-full">
                  <div className="absolute -top-5 -left-2">
                    <span className="text-5xl font-bold text-black dark:text-white">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-6">
                    <div className="mb-4 flex items-center">
                      <step.icon className="w-6 h-6 text-white dark:text-red-500 mr-3" />
                      <h3 className="text-xl font-bold text-wwhite dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white dark:text-red-200/60">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < 3 && (
                  <div className={`hidden lg:block absolute top-1/2 transform ${isRTL ? "left-0 -translate-x-full" : "-right-0 translate-x-full"}`}>
                    {isRTL ? (
                      <ArrowLeft className="w-6 h-6 text-red-700 dark:text-red-700/50" />
                    ) : (
                      <ArrowRight className="w-6 h-6 text-red-700 dark:text-red-700/50" />
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-10 md:py-14 relative overflow-hidden dark:bg-red-950/10"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...getAnimationProps()}>
              <Badge className="bg-red-700 dark:bg-red-900/30 dark:text-red-400 border-transparent mb-4 px-3 py-1">
                {t("testimonials.badge")}
              </Badge>
              <h2 className="text-3xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 dark:from-white dark:via-red-500 dark:to-red-700 bg-clip-text text-transparent md:text-4xl font-bold mb-6">
                {t("testimonials.title")}
              </h2>
              <p className="text-black dark:text-red-200/60 text-lg max-w-2xl mx-auto">
                {t("testimonials.description")}
              </p>
            </motion.div>
          </div>

          <div className="relative min-h-[240px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTestimonial}
                initial={
                  isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                animate={
                  isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                exit={isReducedMotion ? { opacity: 1 } : { opacity: 0.9, y: 0 }}
                transition={{ duration: 0.1 }}
                className="bg-red-700  dark:bg-black/60 border border-red-900 rounded-xl p-8 md:p-10"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    {/* <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3 6.2H6.8C5.8 6.2 5 7 5 8V12.5C5 13.5 5.8 14.3 6.8 14.3H9.5V16.1C9.5 17 10.6 17.5 11.3 16.8L13.9 14.2V8C13.9 7 13.1 6.2 12.1 6.2H11.3Z"
                        fill="rgba(220, 38, 38, 0.7)"
                      />
                      <path
                        d="M18 6.2H16V11.4L14.7 12.7V14.9L17.2 12.4C17.7 11.9 18 11.2 18 10.5V8C18 7 17.2 6.2 16.2 6.2H16"
                        fill="rgba(220, 38, 38, 0.7)"
                      />
                    </svg> */}
                  </div>
                  <p className="text-lg text-white dark:text-white md:text-xl text-center mb-8">
                    &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                  </p>
                  <div className="text-center">
                    <div className="font-bold text-white dark:text-white">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-black/80 dark:text-red-400/70 text-sm">
                      {testimonials[activeTestimonial].position}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial
                      ? "bg-red-700"
                      : "bg-red-900/30 hover:bg-red-800/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <ContactForm /> */}

      {/* CTA Section */}
      <section className="py-10 md:py-14 dark:bg-gradient-to-b dark:from-red-950/10 dark:via-red-950/10 dark:to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto bg-red-700  dark:bg-black/60 border-3 border-red-950 dark:border-red-900 rounded-xl p-8 md:p-12 text-center"
            {...getAnimationProps()}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-white/90 dark:text-white mb-8 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-700 to-red-700 dark:from-red-700 dark:to-red-900 hover:from-red-800 hover:to-red-800 
                     dark:hover:from-red-600 dark:hover:to-red-800 text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8 w-full sm:w-auto"
                >
                  {t("cta.buttons.startProject")}
                  {isRTL ? (
                    <ChevronLeft className=" ml-2 h-5 w-5" />
                  ) : (
                    <ChevronRight className=" ml-2 h-5 w-5" />
                  )}
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-800/30 text-white dark:text-red-400 bg-red-500 dark:bg-red-950/20 hover:bg-red-800 dark:hover:bg-red-950/30 hover:text-white dark:hover:text-white px-8 w-full sm:w-auto"
                >
                  {t("cta.buttons.learnAboutUs")}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center mt-8 text-white/95 dark:text-red-200/60">
              <div className={`flex items-center ${isRTL ? "ml-4" : "mr-4"} mb-2`}>
                <CheckCircle className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"} text-red-300 dark:text-red-500`} />
                <span className="text-sm">{t("cta.features.1")}</span>
              </div>
              <div className={`flex items-center ${isRTL ? "ml-4" : "mr-4"} mb-2`}>
                <CheckCircle className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"} text-red-300 dark:text-red-500`} />
                <span className="text-sm">{t("cta.features.2")}</span>
              </div>
              <div className="flex items-center mb-2">
                <CheckCircle className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"} text-red-300 dark:text-red-500`} />
                <span className="text-sm ">{t("cta.features.3")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
