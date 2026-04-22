"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Code,
  Layers,
  CheckCircle,
  Zap,
  Smartphone,
  Palette,
  ArrowRight,
  Search,
  Settings,
  ShieldCheck,
  RefreshCw,
  ChevronLeft,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useLocale, useTranslations } from "next-intl";
import GradientText from "@/MyComponents/GradientText";
import { isRtlLang } from "rtl-detect";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const WebsiteDevelopmentPage = () => {
  const t = useTranslations("ServicePage.webDev");
  const router = useRouter();
  const locale = useLocale();
  const isRTL = isRtlLang(locale);

  // Process steps
  const processSteps = [
    {
      title: t("sections.2.steps.1.title"),
      description: t("sections.2.steps.1.desc"),
      icon: Search,
    },
    {
      title: t("sections.2.steps.2.title"),
      description: t("sections.2.steps.2.desc"),
      icon: Layers,
    },
    {
      title: t("sections.2.steps.3.title"),
      description: t("sections.2.steps.3.desc"),
      icon: Palette,
    },
    {
      title: t("sections.2.steps.4.title"),
      description: t("sections.2.steps.4.desc"),
      icon: Code,
    },
    {
      title: t("sections.2.steps.5.title"),
      description: t("sections.2.steps.5.desc"),
      icon: Settings,
    },
    {
      title: t("sections.2.steps.6.title"),
      description: t("sections.2.steps.6.desc"),
      icon: Zap,
    },
    {
      title: t("sections.2.steps.7.title"),
      description: t("sections.2.steps.7.desc"),
      icon: RefreshCw,
    },
  ];

  // Technologies we use
  const technologies = [
    {
      name: "React/Next.js",
      description: t("sections.3.tech.1.desc"),
    },
    {
      name: "Shopify",
      description: t("sections.3.tech.3.desc"),
    },
    {
      name: "Tailwind CSS",
      description: t("sections.3.tech.4.desc"),
    },
    { name: "Node.js", description: t("sections.3.tech.5.desc") },
    {
      name: "GraphQL",
      description: t("sections.3.tech.6.desc"),
    },
    {
      name: "AWS/Vercel",
      description: t("sections.3.tech.7.desc"),
    },
  ];

  // Case studies (simplified for this example)
  const caseStudies = [
    {
      // should we add a new vs new?
      title: t("sections.4.case.1.title"),
      industry: t("sections.4.case.1.industry"),
      description: t("sections.4.case.1.desc"),
      image: "/knoz_website.png",
    },
    {
      title: t("sections.4.case.2.title"),
      industry: t("sections.4.case.2.industry"),
      description: t("sections.4.case.2.desc"),
      image: "/budgetary.png",
    },
    {
      title: t("sections.4.case.3.title"),
      industry: t("sections.4.case.3.industry"),
      description: t("sections.4.case.3.desc"),
      image: "/iraqisweets_website.png",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-white/90 dark:bg-black dark:opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-[#C8102E]/20 dark:bg-gradient-to-br dark:from-[#C8102E]/10 dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* <motion.div
              className="lg:w-7/12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            > */}
            <div className="lg:w-7/12">
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] border-transparent mb-4 px-3 py-1">
                {t("badge.1")}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                {t("title.1")}
                <span className="text-[#C8102E] dark:text-white block mt-2">
                  {t("title.2")}
                </span>
              </h1>
              <p className="text-lg font-semibold text-gray-800 dark:text-amber-50 mb-8">
                {t("desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#C8102E] hover:bg-[#9F0F24] text-white border border-[#C8102E] shadow-lg shadow-black/10 px-8"
                  onClick={() => router.push("/contact")}
                >
                  {t("quoteBtn")}
                  {isRTL ? (
                    <ChevronLeft className="ml-2 h-5 w-5" />
                  ) : (
                    <ChevronRight className="ml-2 h-5 w-5" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#0F0F10]/20 text-[#0F0F10] dark:text-white bg-[#F4F4F5] dark:bg-[#0F0F10]/20 hover:bg-[#FAF9F6] hover:text-[#0F0F10] dark:hover:bg-[#0F0F10]/30 dark:hover:text-white px-8"
                  onClick={() => router.push("/portfolio")}
                >
                  {t("workBtn")}
                </Button>
              </div>
            </div>
            {/* </motion.div> */}

            {/* <motion.div
              className="lg:w-5/12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            > */}
            <div className="hidden lg:block lg:w-5/12">
              <div className="relative bg-gray-900/80 dark:bg-black/60 border border-[#0F0F10]/20 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/10 p-5">
                {/* Website mockup illustration */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#0A0A0B]/40 to-[#0A0A0B]/10 dark:from-[#0A0A0B]/40 dark:to-[#0A0A0B]/10 rounded-lg overflow-hidden p-4">
                  <div className="w-full h-full border-2 border-[#0F0F10]/20 dark:border-white/10 rounded-md relative">
                    {/* Mockup header */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-[#0A0A0B]/20 dark:bg-white/10 flex items-center px-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40"></div>
                      </div>
                    </div>

                    {/* Mock content */}
                    <div className="absolute top-8 left-2 right-2 bottom-2">
                      <div className="h-4 w-1/3 bg-[#C8102E]/40 rounded mb-2"></div>
                      <div className="h-2 w-full bg-[#0F0F10]/20 dark:bg-white/10 rounded mb-1"></div>
                      <div className="h-2 w-full bg-[#0F0F10]/20 dark:bg-white/10 rounded mb-1"></div>
                      <div className="h-2 w-2/3 bg-[#0F0F10]/20 dark:bg-white/10 rounded mb-3"></div>
                      <div className="h-20 w-full bg-[#C8102E]/30 rounded mb-3"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-[#0F0F10]/20 dark:bg-white/10 rounded"></div>
                        <div className="h-12 bg-[#0F0F10]/20 dark:bg-white/10 rounded"></div>
                        <div className="h-12 bg-[#0F0F10]/20 dark:bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </motion.div> */}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] border-transparent mb-4 px-3 py-1">
                {t("badge.2")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white bg-transparent">
                <GradientText gradient="from-[#C8102E] via-[#C8102E] to-[#0A0A0B] dark:from-white dark:via-white dark:to-[#D4AF37]">
                  {t("sections.1.title")}
                </GradientText>
              </h2>
              <p className="text-gray-800 dark:text-amber-50 text-lg max-w-2xl mx-auto">
                {t("sections.1.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("sections.1.cards.1.title"),
                description: t("sections.1.cards.1.desc"),
                icon: Smartphone,
              },
              {
                title: t("sections.1.cards.2.title"),
                description: t("sections.1.cards.2.desc"),
                icon: Zap,
              },
              {
                title: t("sections.1.cards.3.title"),
                description: t("sections.1.cards.3.desc"),
                icon: Search,
              },
              {
                title: t("sections.1.cards.4.title"),
                description: t("sections.1.cards.4.desc"),
                icon: Settings,
              },
              {
                title: t("sections.1.cards.5.title"),
                description: t("sections.1.cards.5.desc"),
                icon: ShieldCheck,
              },
              {
                title: t("sections.1.cards.6.title"),
                description: t("sections.1.cards.6.desc"),
                icon: RefreshCw,
              },
            ].map((feature, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              // >
              <div key={index}>
                <Card className="bg-[#F4F4F5] dark:bg-black/60 border-[#0F0F10]/10 dark:border-white/10 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C8102E] to-[#0A0A0B] dark:from-[#C8102E] dark:to-[#0A0A0B] flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F0F10] dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 dark:text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-[#F4F4F5] dark:bg-[#0A0A0B]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] border-transparent mb-4 px-3 py-1">
                {t("badge.3")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white bg-transparent">
                <GradientText gradient="from-[#C8102E] via-[#C8102E] to-[#0A0A0B] dark:from-white dark:via-white dark:to-[#D4AF37]">
                  {t("sections.2.title")}
                </GradientText>
              </h2>
              <p className="text-gray-800 dark:text-white/70 text-lg max-w-2xl mx-auto">
                {t("sections.2.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              // >
              <div key={index}>
                <Card className="bg-white dark:bg-black/60 border-[#C8102E]/10 dark:border-white/10 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8102E] to-[#0A0A0B] dark:from-[#C8102E] dark:to-[#0A0A0B] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <step.icon className={`w-5 h-5 text-[#C8102E] dark:text-[#D4AF37] ${isRTL ? "ml-2" : "mr-2"}`} />
                          <h3 className="text-xl font-bold text-[#0F0F10] dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-white/70">
                          {step.description}
                        </p>
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] border-transparent mb-4 px-3 py-1">
                {t("badge.4")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white bg-transparent">
                <GradientText gradient="from-[#C8102E] via-[#C8102E] to-[#0A0A0B] dark:from-white dark:via-white dark:to-[#D4AF37]">
                  {t("sections.3.title")}
                </GradientText>
              </h2>
              <p className="text-gray-800 dark:text-white/60 text-lg max-w-2xl mx-auto">
                {t("sections.3.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              //   className="bg-black/60 border border-pink-900 rounded-lg p-6"
              // >
              <div
                key={index}
                className="bg-[#F4F4F5] dark:bg-black/60 border border-[#0F0F10]/10 dark:border-white/10 rounded-lg p-6"
              >
                <div className="flex items-start">
                  <CheckCircle className={`w-5 h-5 text-[#C8102E] dark:text-[#D4AF37] mt-1 ${isRTL ? "ml-3" : "mr-3"} flex-shrink-0`} />
                  <div>
                    <h4 className="text-lg font-bold text-[#0F0F10] dark:text-white mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#F4F4F5] dark:bg-[#0A0A0B]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] border-transparent mb-4 px-3 py-1">
                {t("badge.5")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white bg-transparent">
                <GradientText gradient="from-[#C8102E] via-[#C8102E] to-[#0A0A0B] dark:from-white dark:via-white dark:to-[#D4AF37]">
                  {t("sections.4.title")}
                </GradientText>
              </h2>
              <p className="text-gray-800 dark:text-white/70 text-lg max-w-2xl mx-auto">
                {t("sections.4.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((project, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.2 }}
              //   className="group cursor-pointer"
              // >
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-black/10 mb-5">
                  {/* Project Image */}
                  <div className="w-full h-full bg-[#F4F4F5] dark:bg-black/80 border-2 border-[#0F0F10]/10 dark:border-white/10 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] border-transparent mb-3">
                        {project.industry}
                      </Badge>
                      <p className="text-[#0F0F10]/70 dark:text-white/70 text-center px-6">
                        {t("sections.4.case.imgPlaceholder")} {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C8102E]/80 to-[#0A0A0B]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-6">
                      <Badge className="bg-[#D4AF37]/40 text-white border-transparent mb-3">
                        {project.industry}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      {/* <p className="text-amber-50 mb-5 text-sm">
                        {project.description}
                      </p> */}
                      <Button
                        variant="outline"
                        className="border-2 border-white/30 hover:text-white text-white bg-[#C8102E] hover:bg-[#9F0F24]"
                      >
                        {t("sections.4.case.viewBtn")}
                        {isRTL ? (
                          <ArrowLeft className="ml-2 h-4 w-4" />
                        ) : (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
              // </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-[#C8102E] hover:bg-[#9F0F24] text-white border border-[#0F0F10]/10 shadow-lg shadow-black/10 px-8"
              onClick={() => router.push("/portfolio")}
            >
              {t("sections.4.case.projectsBtn")}
              {isRTL ? (
                <ChevronLeft className="ml-2 h-5 w-5" />
              ) : (
                <ChevronRight className="ml-2 h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] border-transparent mb-4 px-3 py-1">
                {t("badge.6")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white bg-transparent">
                <GradientText gradient="from-[#C8102E] via-[#C8102E] to-[#0A0A0B] dark:from-white dark:via-white dark:to-[#D4AF37]">
                  {t("sections.5.title")}
                </GradientText>
              </h2>
              <p className="text-gray-800 dark:text-amber-50 text-lg max-w-2xl mx-auto">
                {t("sections.5.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-[#F4F4F5] dark:bg-black/60 border border-[#0F0F10]/10 dark:border-white/10 ">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-[#C8102E]/30 data-[state=active]:text-[#C8102E] dark:data-[state=active]:bg-[#C8102E]/30 dark:data-[state=active]:text-white"
                >
                  {t("sections.5.tab.1")}
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-[#C8102E]/30 data-[state=active]:text-[#C8102E] dark:data-[state=active]:bg-[#C8102E]/30 dark:data-[state=active]:text-white"
                >
                  {t("sections.5.tab.2")}
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="data-[state=active]:bg-[#C8102E]/30 data-[state=active]:text-[#C8102E] dark:data-[state=active]:bg-[#C8102E]/30 dark:data-[state=active]:text-white"
                >
                  {t("sections.5.tab.3")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                {[
                  {
                    question: t("sections.5.QA.1.Q"),
                    answer: t("sections.5.QA.1.A"),
                  },
                  // {
                  //   question: t("sections.5.QA.2.Q"),
                  //   answer: t("sections.5.QA.2.A"),
                  // },
                  {
                    question: t("sections.5.QA.3.Q"),
                    answer: t("sections.5.QA.3.A"),
                  },
                  {
                    question: t("sections.5.QA.4.Q"),
                    answer: t("sections.5.QA.4.A"),
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-black/60 border border-[#0F0F10]/10 dark:border-white/10 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-[#0F0F10] dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    {/* NEED TO ADJUST */}
                    <p className="text-gray-700 dark:text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="technical" className="space-y-4">
                {[
                  {
                    question: t("sections.5.QA.5.Q"),
                    answer: t("sections.5.QA.5.A"),
                  },
                  {
                    question: t("sections.5.QA.6.Q"),
                    answer: t("sections.5.QA.6.A"),
                  },
                  {
                    question: t("sections.5.QA.7.Q"),
                    answer: t("sections.5.QA.7.A"),
                  },
                  {
                    question: t("sections.5.QA.8.Q"),
                    answer: t("sections.5.QA.8.A"),
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-black/60 border border-[#0F0F10]/10 dark:border-white/10 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-[#0F0F10] dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                {[
                  {
                    question: t("sections.5.QA.9.Q"),
                    answer: t("sections.5.QA.9.A"),
                  },
                  {
                    question: t("sections.5.QA.10.Q"),
                    answer: t("sections.5.QA.10.A"),
                  },
                  {
                    question: t("sections.5.QA.11.Q"),
                    answer: t("sections.5.QA.11.A"),
                  },
                  {
                    question: t("sections.5.QA.12.Q"),
                    answer: t("sections.5.QA.12.A"),
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-black/60 border border-[#0F0F10]/10 dark:border-white/10 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-[#0F0F10] dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark:bg-gradient-to-b dark:from-[#0A0A0B] dark:to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-white/10 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="max-w-4xl mx-auto bg-[#C8102E] dark:bg-black/60 border border-[#C8102E] dark:border-white/10 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-white/90 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              {t("cta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-[#F4F4F5] text-[#C8102E] hover:text-[#C8102E] border border-white shadow-lg shadow-black/10 px-8 font-semibold"
                onClick={() => router.push("/contact")}
              >
                {t("quoteBtn")}
                {isRTL ? (
                  <ChevronLeft className="ml-2 h-5 w-5" />
                ) : (
                  <ChevronRight className="ml-2 h-5 w-5" />
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-transparent dark:text-white dark:bg-transparent hover:bg-white/10 dark:hover:bg-white/10 hover:text-white dark:hover:text-white px-8"
                onClick={() => router.push("/portfolio")}
              >
                {t("workBtn")}
              </Button>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentPage;
