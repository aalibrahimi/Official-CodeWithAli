"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import GradientText from "@/MyComponents/GradientText";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

const PortfolioPage = () => {
  const [isMounted, setIsMounted] = useState(false);
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
      title: "Budgetary App",
      category: t("category.2"),
      image: "/budgetary.png",
      url: "https://budgetary.codewithali.com/",
    },
    {
      title: "Mario's Hauling",
      category: t("category.1"),
      image: "/marioshauling_website.png",
      url: "https://marioshauling.codewithali.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-10 pb-20 md:pb-24 relative overflow-hidden">
        {/* BG */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 border-b-[1px] border-b-red-950/50">
          <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-white via-red-300 to-red-500 dark:bg-gradient-to-br dark:from-red-950/30 dark:via-transparent dark:to-transparent"></div>
        </div>

        {/* Heading */}
        <div className="h-full relative z-10 flex flex-col items-center justify-center text-center font-semibold">
          <div className="w-full h-full ">
            <div className="w-full h-full ">
              <h1 className="text-4xl text-red-600 dark:text-white lg:text-5xl font-bold leading-tight  ">
                {t("title")}{" "}
                <GradientText gradient="from-red-600 to-red-500 dark:from-red-400 dark:to-red-600">
                  {t("title2")}{" "}
                </GradientText>
              </h1>
              <p className="text-black font-semibold dark:text-white pt-2 ">
                {t("sub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-red-950/10 h-full w-full p-10 overflow-y-clip">
        <div className="h-full relative z-10">
          <div className="">
            <motion.div
              className="grid gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3"
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
                  className="group cursor-pointer h-auto max-w-[650px] min-w-[350px]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-red-950/20">
                    {/* Project Image */}
                    <div className="w-full h-full bg-red-300 dark:bg-black/80 border-2 border-red-800/30 flex items-center justify-center">
                      {project.image ? (
                        <>
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
                            {t("holder")}
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
                            className="border-2 dark:border-red-950/80 text-white bg-red-700/80 dark:bg-red-700/50 px-6 py-5 hover:bg-red-950 dark:hover:bg-black hover:text-white text-base font-medium"
                          >
                            {t("viewbtn")}
                            <MoveUpRight className="ml-2 h-5 w-5" />
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
