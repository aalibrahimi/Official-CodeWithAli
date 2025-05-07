"use client";
import React, { JSX } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  Server,
  Shield,
  BarChart,
  Clock,
  Zap,
  Database,
  Lock,
  CheckCircle,
  RefreshCw,
  Cloud,
  Download,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// I imported these utilities from the new file I created
import {
  ClientOnly,
  useResponsive,
  createBrowserOptimizedVariants,
} from "../../../utils/browser-compatibility";
import GradientText from "@/MyComponents/GradientText";
import { useTranslations } from "next-intl";

// Types for our data
interface HostingFeature {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

interface TechCategory {
  category: string;
  technologies: string[];
}

interface HostingPackage {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProcessStep {
  icon: React.ElementType;
  step: string;
  title: string;
  description: string;
}

const WebHostingPage = (): JSX.Element => {
  const router = useRouter();
  const t = useTranslations("ServicePage.Hosting");

  // Hosting features data
  const hostingFeatures: HostingFeature[] = [
    {
      title: t("sections.1.hostFeatures.1.title"),
      description: t("sections.1.hostFeatures.1.desc"),
      icon: Server,
      features: [
        t("sections.1.hostFeatures.1.features.1"),
        t("sections.1.hostFeatures.1.features.2"),
        t("sections.1.hostFeatures.1.features.3"),
        t("sections.1.hostFeatures.1.features.4"),
      ],
    },
    {
      title: t("sections.1.hostFeatures.2.title"),
      description: t("sections.1.hostFeatures.2.desc"),
      icon: Shield,
      features: [
        t("sections.1.hostFeatures.2.features.1"),
        t("sections.1.hostFeatures.2.features.2"),
        t("sections.1.hostFeatures.2.features.3"),
        t("sections.1.hostFeatures.2.features.4"),
      ],
    },
    {
      title: t("sections.1.hostFeatures.3.title"),
      description: t("sections.1.hostFeatures.3.desc"),
      icon: BarChart,
      features: [
        t("sections.1.hostFeatures.3.features.1"),
        t("sections.1.hostFeatures.3.features.2"),
        t("sections.1.hostFeatures.3.features.3"),
        t("sections.1.hostFeatures.3.features.4"),
      ],
    },
    {
      title: t("sections.1.hostFeatures.4.title"),
      description: t("sections.1.hostFeatures.4.desc"),
      icon: Clock,
      features: [
        t("sections.1.hostFeatures.4.features.1"),
        t("sections.1.hostFeatures.4.features.2"),
        t("sections.1.hostFeatures.4.features.3"),
        t("sections.1.hostFeatures.4.features.4"),
      ],
    },
  ];

  // Technology stack
  const techStack: TechCategory[] = [
    {
      category: t("sections.3.stack.1.category"),
      technologies: ["AWS", "Google Cloud", "DigitalOcean", "Linode"],
    },
    {
      category: t("sections.3.stack.2.category"),
      technologies: ["Cloudflare", "AWS CloudFront", "Fastly", "Akamai"],
    },
    {
      category: t("sections.3.stack.3.category"),
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: t("sections.3.stack.4.category"),
      technologies: ["WordPress", "Drupal", "Shopify", "Custom Solutions"],
    },
  ];

  // Hosting packages
  const hostingPackages: HostingPackage[] = [
    {
      title: t("sections.5.packages.1.title"),
      price: "$49",
      period: t("sections.5.packages.1.period"),
      description: t("sections.5.packages.1.desc"),
      features: [
        t("sections.5.packages.1.features.1"),
        t("sections.5.packages.1.features.2"),
        t("sections.5.packages.1.features.3"),
        t("sections.5.packages.1.features.4"),
        t("sections.5.packages.1.features.5"),
        t("sections.5.packages.1.features.6"),
        t("sections.5.packages.1.features.7"),
      ],
    },
    {
      title: t("sections.5.packages.2.title"),
      price: "$129",
      period: t("sections.5.packages.2.period"),
      description: t("sections.5.packages.2.desc"),
      features: [
        t("sections.5.packages.2.features.1"),
        t("sections.5.packages.2.features.2"),
        t("sections.5.packages.2.features.3"),
        t("sections.5.packages.2.features.4"),
        t("sections.5.packages.2.features.5"),
        t("sections.5.packages.2.features.6"),
        t("sections.5.packages.2.features.7"),
      ],
      highlighted: true,
    },
    {
      title: t("sections.5.packages.3.title"),
      price: "$299",
      period: t("sections.5.packages.3.period"),
      description: t("sections.5.packages.3.desc"),
      features: [
        t("sections.5.packages.3.features.1"),
        t("sections.5.packages.3.features.2"),
        t("sections.5.packages.3.features.3"),
        t("sections.5.packages.3.features.4"),
        t("sections.5.packages.3.features.5"),
        t("sections.5.packages.3.features.6"),
        t("sections.5.packages.3.features.7"),
        t("sections.5.packages.3.features.8"),
        t("sections.5.packages.3.features.9"),
        t("sections.5.packages.3.features.10"),
      ],
    },
  ];

  // I replaced The multiple useState and useEffect hooks with this single optimized hook
  // This fixes the re-rendering issues in Safari/Firefox by properly handling resize events
  const { isMobile, isReducedMotion } = useResponsive();

  // I created an optimized version of the animation variants
  // This prevents Safari/Firefox from struggling with the animations at leaast in theory
  const fadeIn = createBrowserOptimizedVariants();

  return (
    <ClientOnly>
      <div className="min-h-screen bg-white dark:bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-950 to-gray-500 dark:bg-gradient-to-br dark:from-gray-950/30 dark:to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            {/* I replaced the direct animation props with optimized ones */}
            {/* <motion.div
              className="max-w-3xl"
              {...getOptimizedAnimationProps(isMobile, isReducedMotion)}
            > */}
            <div className="max-w-3xl">
              <Badge className="bg-gray-600 dark:bg-gray-900/30 dark:text-gray-400 border-transparent mb-4 px-3 py-1">
                {t("badge.1")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t("title.1")}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-gray-300 dark:to-gray-500 block">
                  {t("title.2")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">{t("desc")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-gray-500 to-gray-600 dark:from-gray-700 dark:to-gray-900 hover:from-gray-600 hover:to-gray-800 
                     dark:hover:from-gray-600 dark:hover:to-gray-800 text-white"
                  size="lg"
                  onClick={() => router.push("/contact")}
                >
                  {t("startBtn")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-white dark:text-gray-400 bg-gray-300/40 dark:bg-gray-950/20 hover:bg-gray-800/80 dark:hover:bg-gray-950/30 hover:text-white dark:hover:text-white"
                  onClick={() => router.push("#packages")}
                >
                  {t("plansBtn")}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            {/* </motion.div> */}
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 relative overflow-hidden">
          {/* I made this conditional render more efficient */}
          {!isMobile && !isReducedMotion && (
            <>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-900/20 dark:bg-gray-700/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-800/20 dark:bg-gray-700/10 rounded-full blur-3xl"></div>
            </>
          )}

          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
            {/* I replaced the direct animation props with optimized ones */}
            {/* <motion.div
              className="text-center mb-16"
              {...getOptimizedAnimationProps(isMobile, isReducedMotion)}
            > */}
            <div className="text-center mb-16">
              <Badge className="bg-gray-600 dark:bg-gray-900/30 dark:text-gray-400 border-transparent mb-4 px-3 py-1">
                {t("badge.2")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#5e7c8a]">
                <GradientText gradient="from-gray-500 via-gray-400 to-gray-400 dark:from-white dark:to-gray-500">
                  {t("sections.1.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.1.desc")}
              </p>
            </div>
            {/* </motion.div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hostingFeatures.map((service, index) => (
                // <motion.div
                //   key={index}
                //   // I replaced the variant props with optimized ones that won't cause re-renders in Safari
                //   {...getOptimizedAnimationProps(isMobile, isReducedMotion, index * 0.05)}
                // >
                <div key={index}>
                  <Card className="bg-gray-300 dark:bg-black/60 border-gray-900 h-full group hover:border-gray-800/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 p-3 mb-4">
                        <service.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-bold dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-black dark:text-white mb-4">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-gray-900 dark:text-gray-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-black  dark:text-gray-200/80 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                // </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-950/5 relative">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            {/* <motion.div
              className="text-center mb-16"
              {...getOptimizedAnimationProps(isMobile, isReducedMotion)}
            > */}
            <div className="text-center mb-16">
              <Badge className="bg-gray-600 dark:bg-gray-900/30 dark:text-gray-400 border-transparent mb-4 px-3 py-1">
                {t("badge.3")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#5e7c8a]">
                <GradientText gradient="from-gray-500 via-gray-400 to-gray-400 dark:from-white dark:to-gray-500">
                  {t("sections.2.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.2.desc")}
              </p>
            </div>
            {/* </motion.div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: t("sections.2.cards.1.title"),
                  description: t("sections.2.cards.1.desc"),
                },
                {
                  icon: Lock,
                  title: t("sections.2.cards.2.title"),
                  description: t("sections.2.cards.2.desc"),
                },
                {
                  icon: Clock,
                  title: t("sections.2.cards.3.title"),
                  description: t("sections.2.cards.3.desc"),
                },
                {
                  icon: RefreshCw,
                  title: t("sections.2.cards.4.title"),
                  description: t("sections.2.cards.4.desc"),
                },
                {
                  icon: Database,
                  title: t("sections.2.cards.5.title"),
                  description: t("sections.2.cards.5.desc"),
                },
                {
                  icon: Shield,
                  title: t("sections.2.cards.6.title"),
                  description: t("sections.2.cards.6.desc"),
                },
              ].map((benefit, index) => (
                // <motion.div
                //   key={index}
                //   {...getOptimizedAnimationProps(isMobile, isReducedMotion, index * 0.05)}
                // >
                <div key={index}>
                  <div className="bg-gray-300 dark:bg-black/60 border border-gray-900 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 p-3 mb-4">
                      <benefit.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-black/80 dark:text-white">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                // </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            {/* <motion.div
              className="text-center mb-16"
              {...getOptimizedAnimationProps(isMobile, isReducedMotion)}
            > */}
            <div className="text-center mb-16">
              <Badge className="bg-gray-600 dark:bg-gray-900/30 dark:text-gray-400 border-transparent mb-4 px-3 py-1">
                {t("badge.4")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#5e7c8a]">
                <GradientText gradient="from-gray-500 via-gray-400 to-gray-400 dark:from-white dark:to-gray-500">
                  {t("sections.3.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.3.desc")}
              </p>
            </div>
            {/* </motion.div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((tech, index) => (
                // <motion.div
                //   key={index}
                //   {...getOptimizedAnimationProps(isMobile, isReducedMotion, index * 0.05)}
                // >
                <div key={index}>
                  <Card className="bg-gray-300 dark:bg-black/60 border-gray-900 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold dark:text-white mb-4">
                        {tech.category}
                      </h3>
                      <ul className="space-y-2">
                        {tech.technologies.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-gray-800 dark:bg-gray-600 rounded-full mr-3"></div>
                            <span className="text-black/80 dark:text-gray-200/80">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                // </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-950/5">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            {/* <motion.div
              className="text-center mb-16"
              {...getOptimizedAnimationProps(isMobile, isReducedMotion)}
            > */}
            <div className="text-center mb-16">
              <Badge className="bg-gray-600 dark:bg-gray-900/30 dark:text-gray-400 border-transparent mb-4 px-3 py-1">
                {t("badge.5")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#5e7c8a]">
                <GradientText gradient="from-gray-500 via-gray-400 to-gray-400 dark:from-white dark:to-gray-500">
                  {t("sections.4.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.4.desc")}
              </p>
            </div>
            {/* </motion.div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              {[
                {
                  icon: Cloud,
                  step: "01",
                  title: t("sections.4.cards.1.title"),
                  description: t("sections.4.cards.1.desc"),
                },
                {
                  icon: RefreshCw,
                  step: "02",
                  title: t("sections.4.cards.2.title"),
                  description: t("sections.4.cards.2.desc"),
                },
                {
                  icon: Shield,
                  step: "03",
                  title: t("sections.4.cards.3.title"),
                  description: t("sections.4.cards.3.desc"),
                },
                {
                  icon: BarChart,
                  step: "04",
                  title: t("sections.4.cards.4.title"),
                  description: t("sections.4.cards.4.desc"),
                },
                {
                  icon: Download,
                  step: "05",
                  title: t("sections.4.cards.5.title"),
                  description: t("sections.4.cards.5.desc"),
                },
                {
                  icon: Globe,
                  step: "06",
                  title: t("sections.4.cards.6.title"),
                  description: t("sections.4.cards.6.desc"),
                },
              ].map((step, index) => (
                // <motion.div
                //   key={index}
                //   {...getOptimizedAnimationProps(isMobile, isReducedMotion, index * 0.05)}
                //   className="relative"
                // >
                <div key={index} className="relative">
                  {/* DISABLED CONNECTOR LINE FOR NOW, it has issues ( i think ) -- blaze */}
                  {/* Connector line for desktop only */}
                  {/* {!isMobile && index < 5 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+10px)] w-full h-0.5 bg-gradient-to-r from-gray-800/50 to-gray-900/10"></div>
                  )} */}

                  {/* Added a h-75 to this so they all are equal heights */}
                  <div className="bg-gray-300 dark:bg-black/60 border border-gray-900 rounded-xl p-6 relative z-10 h-75">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-black to-black flex items-center justify-center mb-4">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="bg-black dark:bg-white/60  rounded px-2 py-0.5 text-xs font-bold text-gray-200 dark:text-black mb-2">
                        {t("sections.4.cards.stepLabel")} {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white text-center">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-black text-center dark:text-white">
                      {step.description}
                    </p>
                  </div>
                </div>
                // </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="packages" className="py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <Badge className="bg-gray-600 dark:bg-gray-900/30 dark:text-gray-400 border-transparent mb-4 px-3 py-1">
                {t("badge.6")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#5e7c8a]">
                <GradientText gradient="from-gray-500 via-gray-400 to-gray-400 dark:from-white dark:to-gray-500">
                  {t("sections.5.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.5.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hostingPackages.map((pkg, index) => (
                <div key={index} className="h-full">
                  <Card
                    className={`bg-gray-300 dark:bg-black/60 h-full flex flex-col ${
                      pkg.highlighted
                        ? "border-gray-600 shadow-lg shadow-gray-950/30"
                        : "dark:border-gray-900"
                    }`}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Fixed height top section */}
                      <div className="h-64">
                        {pkg.highlighted && (
                          <Badge className="bg-gray-700 text-white border-transparent self-start mb-4">
                            {t("sections.5.packages.badge")}
                          </Badge>
                        )}
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                          {pkg.title}
                        </h3>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-gray-950 dark:text-gray-400">
                            {pkg.price}
                          </span>
                          <span className="text-gray-950 dark:text-gray-200/60 ml-1">
                            {pkg.period}
                          </span>
                        </div>
                        <p className="text-black dark:text-white">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Features section with flex-grow to push button to bottom */}
                      <div className="flex-grow flex flex-col">
                        <div className="border-t border-gray-900 pt-6 mb-6">
                          <h4 className="font-bold text-gray-950 dark:text-white mb-4">
                            {t("sections.5.packages.includedLabel")}
                          </h4>
                          <ul className="space-y-3">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-gray-950 dark:text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-black dark:text-gray-200/80">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Button always at the bottom */}
                        <div className="mt-auto pt-4">
                          <Button
                            className={`w-full ${
                              pkg.highlighted
                                ? "bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-900 hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-800 dark:text-white"
                                : "bg-black border border-gray-800/30 text-white dark:text-gray-400 hover:bg-gray-950/20"
                            }`}
                            onClick={() => router.push("/contact")}
                          >
                            {t("sections.5.packages.startBtn")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 dark:bg-gradient-to-b dark:from-gray-950/10 dark:to-black">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            {/* <motion.div
              className="max-w-4xl mx-auto bg-gray-300 dark:bg-black/60 border border-gray-900 rounded-xl p-8 md:p-12 text-center"
              {...getOptimizedAnimationProps(isMobile, isReducedMotion)}
            > */}
            <div className="max-w-4xl mx-auto bg-gray-300 dark:bg-black/60 border border-gray-900 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-lg  dark:text-white text-black mb-8 max-w-2xl mx-auto">
                {t("cta.desc")}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-900 hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-800 dark:text-white border border-gray-800/30 shadow-lg shadow-gray-950/20 px-8"
                onClick={() => router.push("/contact")}
              >
                {t("cta.startBtn")}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            {/* </motion.div> */}
          </div>
        </section>
      </div>
    </ClientOnly>
  );
};

export default WebHostingPage;
