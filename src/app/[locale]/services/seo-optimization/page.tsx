"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  Search,
  BarChart3,
  Globe,
  TrendingUp,
  Zap,
  Award,
  Target,
  CheckCircle,
  Layers,
  FileText,
  Link2,
  ArrowLeft,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GradientText from "@/MyComponents/GradientText";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";

// Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
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

const SEOOptimizationPage = () => {
  const router = useRouter();
  const t = useTranslations("ServicePage.SEO");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);

  // SEO services data
  const seoServices = [
    {
      title: t("sections.1.services.1.title"),
      description: t("sections.1.services.1.desc"),
      icon: Search,
      features: [
        t("sections.1.services.1.features.1"),
        t("sections.1.services.1.features.2"),
        t("sections.1.services.1.features.3"),
        t("sections.1.services.1.features.4"),
      ],
    },
    {
      title: t("sections.1.services.2.title"),
      description: t("sections.1.services.2.desc"),
      icon: FileText,
      features: [
        t("sections.1.services.2.features.1"),
        t("sections.1.services.2.features.2"),
        t("sections.1.services.2.features.3"),
        t("sections.1.services.2.features.4"),
      ],
    },
    {
      title: t("sections.1.services.3.title"),
      description: t("sections.1.services.3.desc"),
      icon: Layers,
      features: [
        t("sections.1.services.3.features.1"),
        t("sections.1.services.3.features.2"),
        t("sections.1.services.3.features.3"),
        t("sections.1.services.3.features.4"),
      ],
    },
    {
      title: t("sections.1.services.4.title"),
      description: t("sections.1.services.4.desc"),
      icon: Link2,
      features: [
        t("sections.1.services.4.features.1"),
        t("sections.1.services.4.features.2"),
        t("sections.1.services.4.features.3"),
        t("sections.1.services.4.features.4"),
      ],
    },
  ];

  // SEO approach
  const seoApproach = [
    {
      number: "01",
      title: t("sections.3.approach.1.title"),
      description: t("sections.3.approach.1.desc"),
      icon: Search,
    },
    {
      number: "02",
      title: t("sections.3.approach.2.title"),
      description: t("sections.3.approach.2.desc"),
      icon: Target,
    },
    {
      number: "03",
      title: t("sections.3.approach.3.title"),
      description: t("sections.3.approach.3.desc"),
      icon: FileText,
    },
    {
      number: "04",
      title: t("sections.3.approach.4.title"),
      description: t("sections.3.approach.4.desc"),
      icon: Link2,
    },
    {
      number: "05",
      title: t("sections.3.approach.5.title"),
      description: t("sections.3.approach.5.desc"),
      icon: BarChart3,
    },
  ];

  // SEO packages
  const seoPackages = [
    {
      title: t("sections.5.packages.1.title"),
      price: "$89",
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
      price: "$150",
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
        t("sections.5.packages.2.features.8"),
        t("sections.5.packages.2.features.9"),
      ],
      highlighted: true,
    },
    {
      title: t("sections.5.packages.3.title"),
      price: "$500",
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
        t("sections.5.packages.3.features.11"),
      ],
    },
  ];

  // Results metrics
  const resultMetrics = [
    {
      stat: "45%",
      label: t("sections.2.metrics.1.title"),
      description: t("sections.2.metrics.1.desc"),
    },
    {
      stat: "85%",
      label: t("sections.2.metrics.2.title"),
      description: t("sections.2.metrics.2.desc"),
    },
    {
      stat: "32%",
      label: t("sections.2.metrics.3.title"),
      description: t("sections.2.metrics.3.desc"),
    },
    {
      stat: "65%",
      label: t("sections.2.metrics.4.title"),
      description: t("sections.2.metrics.4.desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden border-b border-orange-600">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-orange-300 to-orange-400 dark:bg-gradient-to-br dark:from-orange-950/30 dark:via-transparent dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          > */}
          <div className="max-w-3xl">
            <Badge className="bg-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border-transparent hover:bg-orange-900/20 mb-4 px-3 py-1">
              {t("badge.1")}
            </Badge>
            <h1 className="text-4xl text-black dark:text-white md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t("title.1")}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 via-orange-600 to-red-500 dark:from-orange-500 dark:via-orange-300 dark:to-red-500 block">
                {t("title.2")}
              </span>
            </h1>
            <p className="text-lg font-semibold md:text-xl text-black dark:text-white/70 mb-8">
              {t("desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-900 hover:from-orange-600 hover:to-orange-700 
                     dark:hover:from-orange-600 dark:hover:to-orange-800 text-white"
                size="lg"
                onClick={() => router.push("/contact")}
              >
                {t("auditBtn")}
                {isRTL ? (
                  <ArrowLeft className="ml-2 h-4 w-4" />
                ) : (
                  <ArrowRight className="ml-2 h-4 w-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-700 text-orange-950 dark:text-orange-400 bg-orange-300/40 dark:bg-orange-950/20 hover:bg-orange-600/80 dark:hover:bg-orange-950/30 hover:text-white dark:hover:text-white"
                onClick={() => router.push("#packages")}
              >
                {t("packageBtn")}
                {isRTL ? (
                  <ChevronLeft className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronRight className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/30 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/30 dark:bg-orange-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
          {/* <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center mb-16">
            <Badge className="bg-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border-transparent mb-4 px-3 py-1">
              {t("badge.2")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              {/* Changed orange Gradient here */}
              <GradientText gradient="from-orange-700 via-orange-600 to-orange-500 dark:from-white dark:to-red-500">
                {t("sections.1.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white/90 text-lg max-w-2xl mx-auto">
              {t("sections.1.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          {/* <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          > */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              // <motion.div
              //   key={index}
              //   variants={fadeIn}
              // >
              // card hover feature here
              <div key={index}>
                <Card className="bg-orange-200 dark:bg-black/60 border-orange-400 dark:border-orange-950 backdrop-blur-sm h-full group hover:border-orange-800 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-900 p-3 mb-4 transform group-hover:scale-110 transition-transform">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-700 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-black dark:text-white/85 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {isRTL ? (
                            <ChevronLeft className="h-4 w-4 text-orange-950 dark:text-orange-500 mt-1 mr-2 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-orange-950 dark:text-orange-500 mt-1 mr-2 flex-shrink-0" />
                          )}
                          <span className="text-black dark:text-white/80 text-sm">
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
          {/* </motion.div> */}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 dark:bg-orange-950/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center mb-16 ">
            <Badge className="bg-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border-transparent mb-4 px-3 py-1">
              {t("badge.3")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-orange-700 via-orange-600 to-orange-500 dark:from-white dark:to-red-500">
                {t("sections.2.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
              {t("sections.2.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resultMetrics.map((metric, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              // >
              <div key={index}>
                <Card className="bg-orange-200  dark:bg-black/60 border-orange-950 h-full backdrop-blur-sm hover:border-orange-900 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 dark:from-orange-700 dark:to-orange-900 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-orange-950 dark:text-orange-400 mb-2">
                      {metric.stat}
                    </div>
                    <h3 className="text-lg font-bold dark:text-white mb-3">
                      {metric.label}
                    </h3>
                    <p className="text-black dark:text-white/80">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center mb-16">
            <Badge className="bg-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border-transparent mb-4 px-3 py-1">
              {t("badge.4")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-orange-700 via-orange-600 to-orange-500 dark:from-white dark:to-red-500">
                {t("sections.3.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
              {t("sections.3.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          <div className="relative">
            {/* Connector line */}
            <div className={`absolute ${isRTL ? "right-[27px]" : "left-[27px]"} top-8 bottom-8 w-1 bg-gradient-to-b from-orange-300 to-orange-400 dark:from-orange-700 dark:to-orange-900 rounded-full hidden md:block`}></div>

            <div className="space-y-12 relative">
              {seoApproach.map((step, index) => (
                // <motion.div
                //   key={index}
                //   initial={{ opacity: 0, x: -20 }}
                //   whileInView={{ opacity: 1, x: 0 }}
                //   viewport={{ once: true }}
                //   transition={{ duration: 0.5, delay: index * 0.1 }}
                //   className="flex flex-col md:flex-row gap-6"
                // >
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-400 dark:from-orange-700 dark:to-orange-900 flex items-center justify-center shadow-lg shadow-orange-950/30 relative z-10">
                      <step.icon className="h-6 w-6 text-white " />
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-black/60 border border-orange-300 hover:border-orange-400 dark:border-orange-950 dark:hover:border-orange-900 transition-colors rounded-xl p-6 flex-grow backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <span className={`text-sm font-bold text-black dark:text-orange-500 ${isRTL ? "ml-2" : "mr-2"}`}>
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-orange-700 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-black dark:text-white/80">
                      {step.description}
                    </p>
                  </div>
                </div>
                // </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 dark:bg-orange-950/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center  mb-16">
            <Badge className="bg-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border-transparent mb-4 px-3 py-1">
              {t("badge.5")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-orange-700 via-orange-600 to-orange-500 dark:from-white dark:to-red-500">
                {t("sections.4.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white/70 text-lg max-w-2xl mx-auto">
              {t("sections.4.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                icon: TrendingUp,
                title: t("sections.4.cards.1.title"),
                description: t("sections.4.cards.1.desc"),
              },
              {
                icon: Award,
                title: t("sections.4.cards.2.title"),
                description: t("sections.4.cards.2.desc"),
              },
              {
                icon: Target,
                title: t("sections.4.cards.3.title"),
                description: t("sections.4.cards.3.desc"),
              },
              {
                icon: Zap,
                title: t("sections.4.cards.4.title"),
                description: t("sections.4.cards.4.desc"),
              },
              {
                icon: BarChart3,
                title: t("sections.4.cards.5.title"),
                description: t("sections.4.cards.5.desc"),
              },
              {
                icon: Globe,
                title: t("sections.4.cards.6.title"),
                description: t("sections.4.cards.6.desc"),
              },
            ].map((benefit, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              // >
              <div key={index}>
                {/* cards esta aqui */}
                <div className="bg-orange-200 dark:bg-black/60 border border-orange-950/30 rounded-xl p-6  backdrop-blur-sm h-full group hover:border-orange-800/50 transition-colors ">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 dark:from-orange-700 dark:to-orange-900 p-3 mb-4">
                    <benefit.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-700 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-black dark:text-white/70">
                    {benefit.description}
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
            <Badge className="bg-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border-transparent mb-4 px-3 py-1">
              {t("badge.6")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent ">
              <GradientText gradient="from-orange-700 via-orange-600 to-orange-500 dark:from-white dark:to-red-500">
                {t("sections.5.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white/70 text-lg max-w-2xl mx-auto">
              {t("sections.5.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <div key={index} className="h-full">
                {/* Pushed this on top so heading can be same lvl as other headings */}
                {pkg.highlighted && (
                  <Badge className="bg-black text-white absolute -translate-y-7 border-transparent self-start mb-4 ">
                    {t("sections.5.packages.badge")}
                  </Badge>
                )}
                <Card
                  className={`bg-orange-500/80 dark:bg-black/60 backdrop-blur-sm h-full flex flex-col hover:border-orange-900 ${
                    pkg.highlighted
                      ? "border-orange-600 shadow-lg shadow-orange-950/30 hover:border-red-800"
                      : "dark:border-orange-950/30"
                  }`}
                >
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="h-full flex flex-col">
                      {/* Top section with fixed height */}
                      <div
                        style={{ height: "220px" }}
                        className="flex flex-col"
                      >
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                          {pkg.title}
                        </h3>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-black dark:text-orange-400">
                            {pkg.price}
                          </span>
                          <span className="text-black/80 dark:text-white ml-1">
                            {pkg.period}
                          </span>
                        </div>
                        <p className="text-black/90 dark:text-white/70">
                          {pkg.description}
                        </p>
                      </div>

                      {/* What's Included section with consistent border position */}
                      <div className="border-t border-black/30 dark:border-orange-950/30 pt-6 mb-6">
                        <h4 className="font-bold text-white/90 dark:text-white mb-4">
                          {t("sections.5.packages.includedLabel")}
                        </h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className={`h-5 w-5 text-white dark:text-orange-500 ${isRTL ? "ml-3" : "mr-3"} flex-shrink-0`} />
                              <span className="text-black dark:text-white/70">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Button at bottom */}
                      <div className="mt-auto">
                        <Button
                          className={`w-full ${
                            pkg.highlighted
                              ? "bg-gradient-to-r from-orange-700 to-orange-700 dark:from-orange-700 dark:to-orange-900 hover:from-orange-700 hover:to-orange-800 dark:hover:from-orange-600 dark:hover:to-orange-800 dark:text-white"
                              : "bg-black dark:bg-black border border-black dark:border-orange-800/30 dark:text-orange-400 hover:bg-orange-900"
                          }`}
                          onClick={() => router.push("/contact")}
                        >
                          {t("sections.5.packages.startBtn")}
                          {isRTL ? (
                            <ArrowLeft className="ml-2 h-4 w-4" />
                          ) : (
                            <ArrowRight className="ml-2 h-4 w-4" />
                          )}
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
      <section className="py-20 dark:bg-gradient-to-b dark:from-orange-950/10 dark:to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12  ">
          {/* <motion.div 
            className="max-w-4xl mx-auto bg-black/60 border border-orange-900 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="max-w-4xl mx-auto bg-orange-500/80 dark:bg-black/60 border border-orange-900 hover:border-orange-600 transition-colors rounded-xl p-8 md:p-12 text-center  ">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-black dark:text-white/70 mb-8 max-w-2xl mx-auto">
              {t("cta.desc")}
            </p>
            <Button
              size="lg"
              className=" bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-900 hover:from-orange-700 hover:to-orange-800 dark:hover:from-orange-600 dark:hover:to-orange-800 dark:text-white border border-orange-800/30 shadow-lg shadow-orange-950/20 px-8"
              onClick={() => router.push("/contact")}
            >
              {t("cta.reqBtn")}
              {isRTL ? (
                <ChevronLeft className="ml-2 h-5 w-5" />
              ) : (
                <ChevronRight className="ml-2 h-5 w-5" />
              )}
            </Button>
          </div>
          {/* </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default SEOOptimizationPage;
