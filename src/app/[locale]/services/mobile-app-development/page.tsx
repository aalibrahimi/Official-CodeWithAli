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
  ShieldCheck,
  Settings,
  RefreshCw,
  Globe,
  CloudCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GradientText from "@/MyComponents/GradientText";
import { useTranslations } from "next-intl";

// Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const MobileAppDevelopmentPage = () => {
  const router = useRouter();
  const t = useTranslations("ServicePage.mobileApp");

  // Process steps
  const processSteps = [
    {
      title: t("sections.3.steps.1.title"),
      description: t("sections.3.steps.1.desc"),
      icon: Layers,
    },
    {
      title: t("sections.3.steps.2.title"),
      description: t("sections.3.steps.2.desc"),
      icon: Palette,
    },
    {
      title: t("sections.3.steps.3.title"),
      description: t("sections.3.steps.3.desc"),
      icon: Code,
    },
    {
      title: t("sections.3.steps.4.title"),
      description: t("sections.3.steps.4.desc"),
      icon: Settings,
    },
    {
      title: t("sections.3.steps.5.title"),
      description: t("sections.3.steps.5.desc"),
      icon: Globe,
    },
    {
      title: t("sections.3.steps.6.title"),
      description: t("sections.3.steps.6.desc"),
      icon: RefreshCw,
    },
  ];

  // App types
  const appTypes = [
    {
      title: t("sections.1.types.1.title"),
      description: t("sections.1.types.1.desc"),
      // I'll  let you update the technology part blazey
      platforms: ["iOS (Swift/Objective-C)", "Android (Kotlin/Java)"],
      benefits: [
        t("sections.1.types.1.benefits.1"),
        t("sections.1.types.1.benefits.2"),
        t("sections.1.types.1.benefits.3"),
        t("sections.1.types.1.benefits.4"),
      ],
    },
    {
      title: t("sections.1.types.2.title"),
      description: t("sections.1.types.2.title"),
      platforms: ["React Native", "Flutter", "Xamarin"],
      benefits: [
        t("sections.1.types.2.benefits.1"),
        t("sections.1.types.2.benefits.2"),
        t("sections.1.types.2.benefits.3"),
        t("sections.1.types.2.benefits.4"),
      ],
    },
    {
      title: t("sections.1.types.3.title"),
      description: t("sections.1.types.3.title"),
      platforms: ["HTML5", "CSS3", "JavaScript", "Service Workers"],
      benefits: [
        t("sections.1.types.3.benefits.1"),
        t("sections.1.types.3.benefits.2"),
        t("sections.1.types.3.benefits.3"),
        t("sections.1.types.3.benefits.4"),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-blue-300 to-blue-500 dark:bg-gradient-to-br dark:from-blue-950/30 dark:via-transparent dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-7/12">
              <Badge className="bg-blue-600 text-white dark:bg-blue-900/30 dark:text-blue-400 border-transparent mb-4 px-3 py-1">
                {t("badge.1")}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black dark:text-white">
                {t("title.1")}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 dark:from-white dark:via-blue-400 dark:to-blue-800 block mt-2">
                  {t("title.2")}
                </span>
              </h1>
              <p className="text-lg font-semibold text-black/80 dark:text-white/80 mb-8">
                {t("desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className=" dark:border-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 hover:from-blue-700 hover:to-blue-800 
                     dark:hover:from-blue-600 dark:hover:to-blue-800 text-white dark:border-blue-300/30 shadow-lg shadow-blue-950/20 px-8"
                  onClick={() => router.push("/contact")}
                >
                  {t("discussBtn")}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-800/30 text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/20 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-950/30 dark:hover:text-white px-8"
                  onClick={() => router.push("/portfolio")}
                >
                  {t("workBtn")}
                </Button>
              </div>
            </div>

            <div className="lg:w-5/12">
              <div className="relative bg-blue-600/80 dark:bg-black/60 border border-blue-300 dark:border-blue-900 rounded-xl overflow-hidden shadow-2xl shadow-blue-950/20 p-5">
                {/* Mobile app mockup illustration */}
                <div className="flex justify-center">
                  <div className="w-48 h-96 bg-gradient-to-br from-blue-200 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/10 rounded-xl overflow-hidden p-2 relative">
                    <div className="w-full h-full border-2 border-blue-300 dark:border-blue-500/20 rounded-lg relative">
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-blue-200 dark:bg-black rounded-b-xl"></div>

                      {/* Screen content */}
                      <div className="absolute top-7 left-2 right-2 bottom-2">
                        {/* App header */}
                        <div className="h-8 bg-blue-300/70 dark:bg-blue-800/30 rounded-t-lg flex items-center justify-center">
                          <div className="w-24 h-3 bg-blue-500/70 dark:bg-blue-500/50 rounded"></div>
                        </div>

                        {/* App content */}
                        <div className="bg-blue-200/70 dark:bg-blue-950/30 h-[calc(100%-8px)] p-2 rounded-b-lg">
                          <div className="h-24 bg-blue-300/70 dark:bg-blue-800/20 rounded mb-3"></div>
                          <div className="space-y-2 mb-3">
                            <div className="h-3 bg-blue-400/70 dark:bg-blue-800/30 rounded-full w-full"></div>
                            <div className="h-3 bg-blue-400/70 dark:bg-blue-800/30 rounded-full w-5/6"></div>
                            <div className="h-3 bg-blue-400/70 dark:bg-blue-800/30 rounded-full w-4/6"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-20 bg-blue-300/70 dark:bg-blue-800/20 rounded"></div>
                            <div className="h-20 bg-blue-300/70 dark:bg-blue-800/20 rounded"></div>
                            <div className="h-20 bg-blue-300/70 dark:bg-blue-800/20 rounded"></div>
                            <div className="h-20 bg-blue-300/70 dark:bg-blue-800/20 rounded"></div>
                          </div>

                          {/* Navigation bar */}
                          <div className="absolute bottom-2 left-2 right-2 h-12 bg-blue-400/70 dark:bg-blue-800/30 rounded-lg flex justify-around items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-600/60 dark:bg-blue-600/40"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-600/60 dark:bg-blue-600/40"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-600/60 dark:bg-blue-600/40"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-600/60 dark:bg-blue-600/40"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-14">
            <div>
              <Badge className="bg-blue-600 text-white dark:bg-blue-900/30 dark:text-blue-400 border-transparent mb-4 px-3 py-1">
                {t("badge.2")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
                <GradientText gradient="from-blue-700 via-blue-600 dark:from-gray-200 dark:via-blue-400 to-blue-500">
                  {t("sections.1.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-amber-50 text-lg max-w-2xl mx-auto">
                {t("sections.1.desc")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <div key={index}>
                <Card className="bg-blue-200 dark:bg-black/60 border-blue-300 dark:border-blue-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 to mb-3">
                      {type.title}
                    </h3>
                    <p className="text-black dark:text-amber-50 mb-4">{type.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">
                        {t("sections.1.types.techLabel")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {type.platforms.map((platform, i) => (
                          <Badge
                            key={i}
                            className="bg-blue-600 dark:bg-blue-900/20 border-blue-800/30 text-white"
                          >
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
                        {t("sections.1.types.benefitLabel")}
                      </h4>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-black dark:text-amber-50 text-sm">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div>
              <Badge className="bg-blue-600 text-white dark:bg-blue-900/30 dark:text-blue-400 border-transparent mb-4 px-3 py-1">
                {t("badge.3")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
                <GradientText gradient="from-blue-700 via-blue-600 dark:from-gray-200 dark:via-blue-400 to-blue-500">
                  {t("sections.2.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.2.desc")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("sections.2.card.1.title"),
                description: t("sections.2.card.1.desc"),
                icon: Palette,
              },
              {
                title: t("sections.2.card.2.title"),
                description: t("sections.2.card.2.desc"),
                icon: Zap,
              },
              {
                title: t("sections.2.card.3.title"),
                description: t("sections.2.card.3.desc"),
                icon: Smartphone,
              },
              {
                title: t("sections.2.card.4.title"),
                description: t("sections.2.card.4.desc"),
                icon: Settings,
              },
              {
                title: t("sections.2.card.5.title"),
                description: t("sections.2.card.5.desc"),
                icon: ShieldCheck,
              },
              {
                title: t("sections.2.card.6.title"),
                description: t("sections.2.card.6.desc"),
                icon: CloudCog,
              },
            ].map((feature, index) => (
              <div key={index}>
                <Card className="bg-blue-300/70 dark:bg-black/60 border-blue-300 dark:border-blue-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-900 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-black dark:text-white/80">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div>
              <Badge className="bg-blue-600 text-white dark:bg-blue-900/30 dark:text-blue-400 border-transparent mb-4 px-3 py-1">
                {t("badge.4")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
                <GradientText gradient="from-blue-700 via-blue-600 dark:from-gray-200 dark:via-blue-400 to-blue-500">
                  {t("sections.3.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.3.desc")}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index}>
                <Card className="bg-gray-50 dark:bg-black/60 border-blue-300 dark:border-blue-900 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-700 dark:to-blue-900 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <step.icon className="w-5 h-5 text-blue-600 dark:text-blue-500 mr-2" />
                          <h3 className="text-xl font-bold text-blue-700 dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-black dark:text-white/70">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div>
              <Badge className="bg-blue-600 text-white dark:bg-blue-900/30 dark:text-blue-400 border-transparent mb-4 px-3 py-1">
                {t("badge.5")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent">
                <GradientText gradient="from-blue-700 via-blue-600 dark:from-gray-200 dark:via-blue-400 to-blue-500">
                  {t("sections.4.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.4.desc")}
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-blue-600 dark:bg-black/60 text-white dark:text-white border border-blue-300 dark:border-blue-900">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-800 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-white"
                >
                  {t("sections.4.tab.1")}
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-800 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-white"
                >
                  {t("sections.4.tab.2")}
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-800 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-white"
                >
                  {t("sections.4.tab.3")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                {[
                  {
                    question: t("sections.4.QA.1.Q"),
                    answer: t("sections.4.QA.1.A"),
                  },
                  {
                    question: t("sections.4.QA.2.Q"),
                    answer: t("sections.4.QA.2.A"),
                  },
                  {
                    question: t("sections.4.QA.3.Q"),
                    answer: t("sections.4.QA.3.A"),
                  },
                  {
                    question: t("sections.4.QA.4.Q"),
                    answer: t("sections.4.QA.4.A"),
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-black/60 border border-blue-500 dark:border-blue-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-blue-700 dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-black dark:text-white/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="technical" className="space-y-4">
                {[
                  {
                    question: t("sections.4.QA.5.Q"),
                    answer: t("sections.4.QA.5.A"),
                  },
                  {
                    question: t("sections.4.QA.6.Q"),
                    answer: t("sections.4.QA.6.A"),
                  },
                  {
                    question: t("sections.4.QA.7.Q"),
                    answer: t("sections.4.QA.7.A"),
                  },
                  {
                    question: t("sections.4.QA.8.Q"),
                    answer: t("sections.4.QA.8.A"),
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-black/60 border border-blue-300 dark:border-blue-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-blue-700 dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-black dark:text-white/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                {[
                  {
                    question: t("sections.4.QA.9.Q"),
                    answer: t("sections.4.QA.9.A"),
                  },
                  {
                    question: t("sections.4.QA.10.Q"),
                    answer: t("sections.4.QA.10.A"),
                  },
                  {
                    question: t("sections.4.QA.11.Q"),
                    answer: t("sections.4.QA.11.A"),
                  },
                  {
                    question: t("sections.4.QA.12.Q"),
                    answer: t("sections.4.QA.12.A"),
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-black/60 border border-blue-300 dark:border-blue-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-blue-700 dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-black dark:text-white/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:bg-gradient-to-b dark:from-blue-950/10 dark:to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto bg-blue-600 text-white dark:bg-black/60 border border-blue-700 dark:border-blue-900 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t("cta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-700 dark:to-blue-900 hover:from-blue-800 hover:to-blue-900 
                     dark:hover:from-blue-600 dark:hover:to-blue-800 text-white border border-white dark:border-blue-800/30 shadow-lg shadow-blue-950/20 px-8"
                onClick={() => router.push("/contact")}
              >
                {t("discussBtn")}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-800/30 text-black bg-white dark:bg-blue-950/20 hover:bg-white hover:text-blue-700 dark:hover:bg-blue-950/30 dark:hover:text-white px-8"
                onClick={() => router.push("/portfolio")}
              >
                {t("workBtn")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;