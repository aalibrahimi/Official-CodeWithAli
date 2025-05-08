"use client";
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  Eye,
  Lightbulb,
  PenTool,
  Layers,
  Users,
  Monitor,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GradientText from "@/MyComponents/GradientText";
import { useTranslations } from "next-intl";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

const UIUXDesignPage = () => {
  const router = useRouter();
  const t = useTranslations("ServicePage.UI");
  // Design offerings data
  const designOfferings = [
    {
      title: t("sections.1.offerings.1.title"),
      description: t("sections.1.offerings.1.desc"),
      icon: Users,
      features: [
        t("sections.1.offerings.1.features.1"),
        t("sections.1.offerings.1.features.2"),
        t("sections.1.offerings.1.features.3"),
        t("sections.1.offerings.1.features.4"),
      ],
    },
    {
      title: t("sections.1.offerings.2.title"),
      description: t("sections.1.offerings.2.desc"),
      icon: Monitor,
      features: [
        t("sections.1.offerings.2.features.1"),
        t("sections.1.offerings.2.features.2"),
        t("sections.1.offerings.2.features.3"),
        t("sections.1.offerings.2.features.4"),
      ],
    },
    {
      title: t("sections.1.offerings.3.title"),
      description: t("sections.1.offerings.3.desc"),
      icon: Eye,
      features: [
        t("sections.1.offerings.3.features.1"),
        t("sections.1.offerings.3.features.2"),
        t("sections.1.offerings.3.features.3"),
        t("sections.1.offerings.3.features.4"),
      ],
    },
    {
      title: t("sections.1.offerings.4.title"),
      description: t("sections.1.offerings.4.desc"),
      icon: Layers,
      features: [
        t("sections.1.offerings.4.features.1"),
        t("sections.1.offerings.4.features.2"),
        t("sections.1.offerings.4.features.3"),
        t("sections.1.offerings.4.features.4"),
      ],
    },
  ];

  // Portfolio projects
  const portfolioProjects = [
    {
      title: t("sections.2.projects.1.title"),
      category: t("sections.2.projects.1.category"),
      image: "/placeholder/ui-project-1.jpg",
    },
    {
      title: t("sections.2.projects.2.title"),
      category: t("sections.2.projects.2.category"),
      image: "/placeholder/ui-project-2.jpg",
    },
    {
      title: t("sections.2.projects.3.title"),
      category: t("sections.2.projects.3.category"),
      image: "/placeholder/ui-project-3.jpg",
    },
    {
      title: t("sections.2.projects.4.title"),
      category: t("sections.2.projects.4.category"),
      image: "/placeholder/ui-project-4.jpg",
    },
  ];

  // Design process steps
  const designProcess = [
    {
      number: "01",
      title: t("sections.3.process.1.title"),
      description: t("sections.3.process.1.desc"),
      icon: Lightbulb,
    },
    {
      number: "02",
      title: t("sections.3.process.2.title"),
      description: t("sections.3.process.2.desc"),
      icon: Users,
    },
    {
      number: "03",
      title: t("sections.3.process.3.title"),
      description: t("sections.3.process.3.desc"),
      icon: PenTool,
    },
    {
      number: "04",
      title: t("sections.3.process.4.title"),
      description: t("sections.3.process.4.desc"),
      icon: Eye,
    },
    {
      number: "05",
      title: t("sections.3.process.5.title"),
      description: t("sections.3.process.5.desc"),
      icon: CheckCircle,
    },
  ];

  // Packages data
  const packages = [
    {
      title: t("sections.5.package.1.title"),
      price: "$2,500",
      description: t("sections.5.package.1.desc"),
      features: [
        t("sections.5.package.1.features.1"),
        t("sections.5.package.1.features.2"),
        t("sections.5.package.1.features.3"),
        t("sections.5.package.1.features.4"),
        t("sections.5.package.1.features.5"),
      ],
    },
    {
      title: t("sections.5.package.2.title"),
      price: "$5,500",
      description: t("sections.5.package.2.desc"),
      features: [
        t("sections.5.package.2.features.1"),
        t("sections.5.package.2.features.2"),
        t("sections.5.package.2.features.3"),
        t("sections.5.package.2.features.4"),
        t("sections.5.package.2.features.5"),
        t("sections.5.package.2.features.6"),
        t("sections.5.package.2.features.7"),
      ],
      highlighted: true,
    },
    {
      title: t("sections.5.package.3.title"),
      price: "Custom",
      description: t("sections.5.package.3.desc"),
      features: [
        t("sections.5.package.3.features.1"),
        t("sections.5.package.3.features.2"),
        t("sections.5.package.3.features.3"),
        t("sections.5.package.3.features.4"),
        t("sections.5.package.3.features.5"),
        t("sections.5.package.3.features.6"),
        t("sections.5.package.3.features.7"),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-purple-300 to-purple-500 dark:bg-gradient-to-br dark:from-purple-950/30 dark:via-transparent dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          > */}
          <div className="max-w-3xl">
            <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-transparent mb-4 px-3 py-1">
              {t("badge.1")}
            </Badge>
            <h1 className="text-4xl text-black dark:text-white md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t("title.1")}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-600 to-blue-700 dark:via-purple-400 dark:to-blue-500 block">
                {t("title.2")}
              </span>
            </h1>
            <p className="text-lg font-semibold md:text-xl text-black dark:text-white/80 mb-8">{t("desc")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Need to fix visibility of this btn */}
              <Button
                className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-700 dark:to-purple-900 hover:from-purple-600 hover:to-purple-800 
                     dark:hover:from-purple-600 dark:hover:to-purple-800 text-white"
                size="lg"
                onClick={() => router.push("/contact")}
              >
                {t("consultBtn")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-700 text-purple-800 dark:text-purple-400 bg-purple-300/40 dark:bg-purple-950/20 hover:bg-purple-800/80 dark:hover:bg-purple-950/30 hover:text-white dark:hover:text-white"
                onClick={() => router.push("#portfolio")}
              >
                {t("workBtn")}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
          {/* <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-transparent mb-4 px-3 py-1">
              {t("badge.2")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-purple-500 via-purple-400 to-blue-400 dark:from-white dark:to-blue-500">
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
            {designOfferings.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-purple-300 dark:bg-black/60 border-purple-900 backdrop-blur-sm h-full group hover:border-purple-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-3 mb-4 transform group-hover:scale-110 transition-transform">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-black dark:text-white/80 mb-4">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-black dark:text-purple-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-black dark:text-white text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* </motion.div> */}
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 dark:bg-purple-950/5 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-transparent mb-4 px-3 py-1">
              {t("badge.3")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-purple-500 via-purple-400 to-purple-500 dark:from-white dark:to-purple-500">
                {t("sections.2.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-amber-50 text-lg max-w-2xl mx-auto">
              {t("sections.2.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          {/* either comment this out blaze (below ) or add photos*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              //   className="group"
              // >
              
             // ADD PHOTOS HERE TO HERE FOR THE PORTFOLIO SHOWCASE  ( BUDGETARY, TAKEOVER, 3DPC, OR ANY OTHER DESIGNS
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-purple-400 dark:bg-purple-950/20">
                  <div className="w-full h-full bg-gradient-to-tr from-purple-950 to-black/20 absolute inset-0 opacity-40 group-hover:opacity-0 transition-opacity"></div>
                  <img
                    src="/api/placeholder/600/450"
                    alt={project.title}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-none mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              // </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-purple-800/30 text-purple-950 dark:text-purple-400 bg-purple-300/40 dark:bg-purple-950/20 hover:bg-purple-800/80 dark:hover:bg-purple-950/30 hover:text-white dark:hover:text-white"
              onClick={() => router.push("/portfolio")}
            >
              {t("viewAllBtn")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Design Process */}
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
            <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-transparent mb-4 px-3 py-1">
              {t("badge.4")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-purple-500 via-purple-400 to-purple-400 dark:from-white dark:to-blue-500">
                {t("sections.3.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white/70 text-lg max-w-2xl mx-auto">
              {t("sections.3.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-1 bg-gradient-to-b from-purple-700 to-purple-900 rounded-full hidden md:block"></div>

            <div className="space-y-12 relative">
              {designProcess.map((step, index) => (
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
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-300  to-purple-400 dark:from-purple-700 dark:to-purple-900 flex items-center justify-center shadow-lg shadow-purple-950/30 relative z-10">
                      <step.icon className="h-6 w-6 text-black dark:text-white" />
                    </div>
                  </div>
                  <div className="bg-purple-400 dark:bg-black/60 border border-purple-900 rounded-xl p-6 flex-grow backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-bold text-white dark:text-purple-500 mr-2">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-black/80 font-bold dark:text-white/80">
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

      {/* Testimonials */}
      <section className="py-20 dark:bg-purple-950/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-transparent mb-4 px-3 py-1">
              {t("badge.5")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-purple-500 via-purple-400 to-blue-400 dark:from-white dark:to-blue-500">
                {t("sections.4.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white/80 text-lg max-w-2xl mx-auto">
              {t("sections.4.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          {/* <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          > */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: t("sections.4.quotes.1.quote"),
                author: t("sections.4.quotes.1.author"),
                company: t("sections.4.quotes.1.authDesc"),
                // place holder images should be our logo until we can grab a different photo/idea
                // sort of how like there are empty person shadow for authors ( your doctor invoice for ex) our logo would be that for us in our sites
                image: "/codewithali.png",
              },
              {
                quote: t("sections.4.quotes.2.quote"),
                author: t("sections.4.quotes.2.author"),
                company: t("sections.4.quotes.2.authDesc"),
                image: "/codewithali.png",
              },
              {
                quote: t("sections.4.quotes.3.quote"),
                author: t("sections.4.quotes.3.author"),
                company: t("sections.4.quotes.3.authDesc"),
                image: "/codewithali.png",
              },
            ].map((testimonial, index) => (
              // <motion.div key={index} variants={fadeIn} className="h-full">
              <div key={index} className="h-full">
                <Card className="bg-purple-400 dark:bg-black/60 border-purple-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6">
                      <MessageSquare className="h-8 w-8 text-black dark:text-purple-600 mb-4" />
                      <p className="text-black font-bold dark:text-white italic mb-6">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-black dark:text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-black/80 dark:text-white/70">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              // </motion.div>
            ))}
          </div>
          {/* </motion.div> */}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
          {/* <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-transparent mb-4 px-3 py-1">
              {t("badge.6")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-purple-500 via-purple-400 to-purple-400 dark:from-white dark:to-blue-500">
                {t("sections.5.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white/80 text-lg max-w-2xl mx-auto">
              {t("sections.5.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              //   className="h-full"
              // >
              <div key={index} className="h-full" >
              <Card
  className={`bg-purple-400 dark:bg-black/60 backdrop-blur-sm h-full flex flex-col ${
    pkg.highlighted
      ? "border-purple-900 dark:border-purple-600 shadow-lg shadow-purple-950/30"
      : "dark:border-purple-900"
  }`}
>
  <CardContent className="p-6 flex-grow flex flex-col">
    <div className="flex flex-col h-full">
      {/* Fixed height container for the top content */}
      <div className="h-64"> {/* Adjust height as needed to fit your content */}
        {pkg.highlighted && (
          <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-transparent self-start mb-4">
            {t('sections.5.package.whatIncluded')}
          </Badge>
        )}
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
          {pkg.title}
        </h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-black dark:text-purple-400">
            {pkg.price}
          </span>
          {pkg.price !== "Custom" && (
            <span className="text-black/80 dark:text-purple-200/60 ml-1">
              {t('sections.5.package.startLabel')}
            </span>
          )}
        </div>
        <p className="text-black dark:text-white/70">
          {pkg.description}
        </p>
      </div>
      
      {/* What's Included section - now starts at the same height */}
      <div className="flex-grow">
        <div className="border-t border-purple-900 pt-6 mb-6">
          <h4 className="font-bold text-white/95 dark:text-white mb-4">
            {t("sections.5.package.whatIncluded")}
          </h4>
          <ul className="space-y-3">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-white dark:text-purple-500 mr-3 flex-shrink-0" />
                <span className="text-black dark:text-white/70">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button always at the bottom */}
      <div className="mt-auto pt-4">
        <Button
          className={`w-full ${
            pkg.highlighted
              ? "bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-700 dark:to-purple-900 hover:from-purple-600 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-purple-800 text-white"
              : "bg-black border border-purple-800/30 dark:text-purple-400 hover:bg-purple-950/80 dark:hover:bg-purple-950/20"
          }`}
          onClick={() => router.push("/contact")}
        >
          {t("sections.5.package.startBtn")}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </CardContent>
</Card>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 dark:bg-purple-950/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 dark:bg-purple-900/30 dark:text-purple-400 border-transparent mb-4 px-3 py-1">
              {t("badge.7")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
              <GradientText gradient="from-purple-500 via-purple-400 to-blue-400 dark:from-white dark:to-blue-500">
                {t("sections.6.title")}
              </GradientText>
            </h2>
            <p className="text-black dark:text-white/80 text-lg max-w-2xl mx-auto">
              {t("sections.6.desc")}
            </p>
          </div>
          {/* </motion.div> */}

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="process" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-purple-400 dark:bg-black/60 text-black dark:text-white border border-purple-900 rounded-lg p-1 mb-8">
                <TabsTrigger
                  value="process"
                  className="data-[state=active]:bg-purple-900/20 data-[state=active]:text-white dark:data-[state=active]:text-purple-400"
                >
                  {t("sections.6.tab.1")}
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="data-[state=active]:bg-purple-900/20 data-[state=active]:text-white dark:data-[state=active]:text-purple-400"
                >
                  {t("sections.6.tab.2")}
                </TabsTrigger>
                <TabsTrigger
                  value="deliverables"
                  className="data-[state=active]:bg-purple-900/20 data-[state=active]:text-white dark:data-[state=active]:text-purple-400"
                >
                  {t("sections.6.tab.3")}
                </TabsTrigger>
                <TabsTrigger
                  value="timeline"
                  className="data-[state=active]:bg-purple-900/20 data-[state=active]:text-purple-400"
                >
                  {t("sections.6.tab.4")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="process" className="space-y-6">
                {[
                  {
                    question: t("sections.6.QA.1.Q"),
                    answer: t("sections.6.QA.1.A"),
                  },
                  {
                    question: t("sections.6.QA.2.Q"),
                    answer: t("sections.6.QA.2.A"),
                  },
                  {
                    question: t("sections.6.QA.3.Q"),
                    answer: t("sections.6.QA.3.A"),
                  },
                ].map((faq, index) => (
                  // <motion.div
                  //   key={index}
                  //   initial={{ opacity: 0, y: 10 }}
                  //   animate={{ opacity: 1, y: 0 }}
                  //   transition={{ duration: 0.3, delay: index * 0.1 }}
                  //   className="bg-black/60 border border-purple-900 rounded-xl p-6"
                  // >
                  <div
                    key={index}
                    className="bg-purple-400 dark:bg-black/60 border border-purple-900 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="dark:text-white/80  text-black/80">{faq.answer}</p>
                  </div>
                  // </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                {[
                  {
                    question: t("sections.6.QA.4.Q"),
                    answer: t("sections.6.QA.4.A"),
                  },
                  {
                    question: t("sections.6.QA.5.Q"),
                    answer: t("sections.6.QA.5.A"),
                  },
                  {
                    question: t("sections.6.QA.6.Q"),
                    answer: t("sections.6.QA.6.A"),
                  },
                ].map((faq, index) => (
                  // <motion.div
                  //   key={index}
                  //   initial={{ opacity: 0, y: 10 }}
                  //   animate={{ opacity: 1, y: 0 }}
                  //   transition={{ duration: 0.3, delay: index * 0.1 }}
                  //   className="bg-black/60 border border-purple-900 rounded-xl p-6"
                  // >
                  <div
                    key={index}
                    className="bg-purple-400 dark:bg-black/60 border border-purple-900 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="dark:text-white/80 text-black/80">{faq.answer}</p>
                  </div>
                  // </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="deliverables" className="space-y-6">
                {[
                  {
                    question: t("sections.6.QA.7.Q"),
                    answer: t("sections.6.QA.7.A"),
                  },
                  {
                    question: t("sections.6.QA.8.Q"),
                    answer: t("sections.6.QA.8.A"),
                  },
                  {
                    question: t("sections.6.QA.9.Q"),
                    answer: t("sections.6.QA.9.A"),
                  },
                ].map((faq, index) => (
                  // <motion.div
                  //   key={index}
                  //   initial={{ opacity: 0, y: 10 }}
                  //   animate={{ opacity: 1, y: 0 }}
                  //   transition={{ duration: 0.3, delay: index * 0.1 }}
                  //   className="bg-black/60 border border-purple-900 rounded-xl p-6"
                  // >
                  <div
                    key={index}
                    className="bg-purple-400 dark:bg-black/60 border border-purple-900 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="dark:text-white/80 text-black/80">{faq.answer}</p>
                  </div>
                  // </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="timeline" className="space-y-6">
                {[
                  {
                    question: t("sections.6.QA.10.Q"),
                    answer: t("sections.6.QA.10.A"),
                  },
                  {
                    question: t("sections.6.QA.11.Q"),
                    answer: t("sections.6.QA.11.A"),
                  },
                  {
                    question: t("sections.6.QA.12.Q"),
                    answer: t("sections.6.QA.12.A"),
                  },
                ].map((faq, index) => (
                  // <motion.div
                  //   key={index}
                  //   initial={{ opacity: 0, y: 10 }}
                  //   animate={{ opacity: 1, y: 0 }}
                  //   transition={{ duration: 0.3, delay: index * 0.1 }}
                  //   className="bg-black/60 border border-purple-900 rounded-xl p-6"
                  // >
                  <div
                    key={index}
                    className="bg-purple-400 dark:bg-black/60 border border-purple-900 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="dark:text-white/80 text-black/80">{faq.answer}</p>
                  </div>
                  // </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark:bg-gradient-to-b dark:from-purple-950/10 dark:to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-purple-900 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="max-w-4xl mx-auto bg-purple-400 dark:bg-black/60 border border-purple-900 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-black/80 dark:text-white/80 mb-8 max-w-2xl mx-auto">
              {t("cta.desc")}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-700 dark:to-purple-900 hover:from-purple-600 hover:to-purple-800 
                     dark:hover:from-purple-600 dark:hover:to-purple-800 text-white border border-purple-800/30 shadow-lg shadow-purple-950/20 px-8"
              onClick={() => router.push("/contact")}
            >
              {t("consultBtn")}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          {/* </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default UIUXDesignPage;
