"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const PortfolioPage = () => {
  /* eslint-disable */
  const [isMounted, setIsMounted] = useState(false);
  /* eslint-disable */
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const t = useTranslations("Portfolio");
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

  const portfolioProjects = [
    {
      title: "Knoz Al-Najah Website",
      category: t("category.1"),
      image: "/knoz_website.png",
      url: "https://www.knozalnajah.com/en",
    },
    {
      title: "Reggaeeli Website",
      category: t("category.1"),
      image: "/reggaeeli_website.png",
      url: "https://reggaeeli.codewithali.com/",
    },
    {
      title: "Merged Construction Website",
      category: t("category.1"),
      image: "/knozorion_website.png",
      url: "https://knozorion.codewithali.com/",
    },
    {
      title: "Iraqi Sweets",
      category: t("category.1"),
      image: "/iraqisweets_website.png",
      url: "https://iraqisweets.codewithali.com/",
    },
    {
      title: "Simplicity App",
      category: t("category.2"),
      image: "/budgetary.png",
      url: "https://Simplicity.codewithali.com/",
    },
    {
      title: "Mario's Hauling",
      category: t("category.1"),
      image: "/marioshauling_website.png",
      url: "https://marioshauling.codewithali.com/",
    },
    {
      title: "Phantom Forge",
      category: t("category.1"),
      image: "/phantom.png",
      url: "https://www.phantomforgepc.com/en"
    },
    // ── Industry template demos ──────────────────────────────────
    // Eight standalone demo sites at /templates/<industry>. Each is
    // a full flow (home → inner pages → checkout → success) showing
    // what CodeWithAli can ship for a given vertical. Linked out
    // so the sales engineer can send one URL and let the prospect
    // walk through multiple industries.
    {
      title: "Aster Dental Studio",
      category: "Template · Dental / Medical",
      image: null,
      url: "/templates/dental",
    },
    {
      title: "Maison Laurent · Restaurant",
      category: "Template · Hospitality",
      image: null,
      url: "/templates/restaurant",
    },
    {
      title: "Whitmore & Hale · Law",
      category: "Template · Legal",
      image: null,
      url: "/templates/law",
    },
    {
      title: "Meridian Properties · Real estate",
      category: "Template · Real estate",
      image: null,
      url: "/templates/real-estate",
    },
    {
      title: "NOIR · Fashion SS/26",
      category: "Template · Fashion / Apparel",
      image: null,
      url: "/templates/fashion",
    },
    {
      title: "Ironline Builders · Construction",
      category: "Template · Construction",
      image: null,
      url: "/templates/construction",
    },
    {
      title: "Prism · SaaS platform",
      category: "Template · SaaS / Tech",
      image: null,
      url: "/templates/saas",
    },
    {
      title: "Atelier Hush · Boutique",
      category: "Template · E-commerce",
      image: null,
      url: "/templates/boutique",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-10 pb-20 md:pb-24 relative overflow-hidden">
        {/* BG */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 border-b-[1px] border-b-red-950/50">
          <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-br from-red-500 via-red-700 to-red-900 dark:bg-gradient-to-br  dark:from-red-950/30 dark:via-transparent dark:to-transparent"></div>
        </div>

        {/* Heading */}
        <div className="h-full relative z-10 flex flex-col items-center justify-center text-center font-semibold">
          <div className="w-full h-full ">
            <div className="w-full h-full ">
              <h1 className="text-4xl text-white dark:text-white lg:text-5xl font-bold leading-tight  ">
                {t("title")}{" "}
                {t("title2")}{" "}
              
              </h1>
              <p className="text-black font-semibold dark:text-white pt-2 ">
                {t("sub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:black h-full w-full p-5 lg:p-10 overflow-y-clip">
        <div className="h-full relative z-10">
          <div className="">
            <motion.div
              className="grid   gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3"
              {...getAnimationProps()}
            >
              {portfolioProjects.map((project, index) => (
                // <motion.div
                //   key={index}
                //   {...getAnimationProps(index * 0.1)}
                //   className="group cursor-pointer h-auto max-w-[650px] min-w-[350px]"
                // >
                <div
                  key={index}
                  className="group cursor-pointer h-auto max-w-[450px] min-w-[350px]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-red-950/20">
                    {/* Project Image — real screenshot when we have
                     *  one; gradient preview for our industry template
                     *  demos until we capture hero shots. Template
                     *  previews use the same accent swatches as the
                     *  /templates gallery so both pages feel cohesive. */}
                    <div className="w-full h-full bg-red-300 dark:bg-black/80 border-2 border-red-800/30 flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          height={1000}
                          width={1000}
                          quality={100}
                          loading="eager"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div
                          className="w-full h-full rounded-xl flex items-end p-5"
                          style={{
                            background: templatePreviewGradient(project.url),
                          }}
                        >
                          <div>
                            <p className="text-[9.5px] uppercase tracking-[0.25em] text-white/70 font-semibold">
                              Interactive demo
                            </p>
                            <p className="mt-1.5 text-[20px] font-semibold text-white leading-tight">
                              {project.title.split(" · ")[0]}
                            </p>
                          </div>
                        </div>
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
                        {/* Template demos use a plain anchor so
                         *  next-intl's Link doesn't prepend /en/ —
                         *  /templates/* is deliberately outside the
                         *  locale tree. External client sites keep
                         *  the i18n Link. */}
                        {project.url.startsWith("/templates") ? (
                          <a href={project.url} draggable={false}>
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-2 dark:border-red-950/80 text-white bg-red-700/80 dark:bg-red-700/50 px-6 py-5 hover:bg-red-950 dark:hover:bg-black hover:text-white text-base font-medium"
                            >
                              {t("viewbtn")}
                              <MoveUpRight className="ml-2 h-5 w-5" />
                            </Button>
                          </a>
                        ) : (
                          <Link href={`${project.url}`} target="_blank" draggable={false}>
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-2 dark:border-red-950/80 text-white bg-red-700/80 dark:bg-red-700/50 px-6 py-5 hover:bg-red-950 dark:hover:bg-black hover:text-white text-base font-medium"
                            >
                              {t("viewbtn")}
                              <MoveUpRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Badge className="bg-red-700 dark:bg-red-800/30 dark:text-red-300 border-transparent text-base py-1 px-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-black dark:text-white mt-3 ml-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
                // </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

/**
 * Per-template gradient swatches for the portfolio card previews.
 * Matches the accent colors used in /templates/_shared/templates.ts
 * so both pages feel like one system.
 */
function templatePreviewGradient(url: string): string {
  if (url.includes("/templates/dental")) return "linear-gradient(135deg, #0EA5B7 0%, #0B3D4C 100%)";
  if (url.includes("/templates/restaurant")) return "linear-gradient(135deg, #C7A27A 0%, #B7410E 55%, #4A1C0A 100%)";
  if (url.includes("/templates/law")) return "linear-gradient(135deg, #2A4C78 0%, #0B2447 100%)";
  if (url.includes("/templates/real-estate")) return "linear-gradient(135deg, #8FCFA6 0%, #1F6F4A 60%, #0F2A1D 100%)";
  if (url.includes("/templates/fashion")) return "linear-gradient(135deg, #3A3A3C 0%, #0F0F10 100%)";
  if (url.includes("/templates/construction")) return "linear-gradient(135deg, #F2B705 0%, #1A1B1F 90%)";
  if (url.includes("/templates/saas")) return "linear-gradient(135deg, #7C5CFF 0%, #4AD8E1 100%)";
  if (url.includes("/templates/boutique")) return "linear-gradient(135deg, #D5C9B4 0%, #A89782 45%, #6B5B47 100%)";
  return "linear-gradient(135deg, #7a1d1d 0%, #2d0505 100%)";
}
