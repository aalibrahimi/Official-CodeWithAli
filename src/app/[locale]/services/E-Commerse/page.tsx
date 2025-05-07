"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ShoppingBag,
  CreditCard,
  BarChart3,
  TrendingUp,
  Check,
  Shield,
  Package,
  Truck,
  Users,
  Zap,
  Settings,
  ArrowRight,
  PlusCircle,
  MinusCircle,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GradientText from "@/MyComponents/GradientText";
import { useTranslations } from "next-intl";

// Custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
};

// Animation variants optimized for performance
const createFadeInVariant = (isMobile: any) => ({
  hidden: { opacity: 0, y: isMobile ? 10 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.3 : 0.6,
      ease: "easeOut",
    },
  },
});

const EcommerceSolutionsPage = () => {
  const t = useTranslations("ServicePage.Ecom");
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState(null);
  const isMobile = useIsMobile();

  // E-commerce packages
  const packages = [
    {
      title: t("sections.3.packages.1.title"),
      price: "$2,500",
      description: t("sections.3.packages.1.desc"),
      features: [
        t("sections.3.packages.1.features.1"),
        t("sections.3.packages.1.features.2"),
        t("sections.3.packages.1.features.3"),
        t("sections.3.packages.1.features.4"),
        t("sections.3.packages.1.features.5"),
        t("sections.3.packages.1.features.6"),
        t("sections.3.packages.1.features.7"),
        t("sections.3.packages.1.features.8"),
      ],
    },
    {
      title: t("sections.3.packages.2.title"),
      price: "$4,500",
      description: t("sections.3.packages.2.desc"),
      features: [
        t("sections.3.packages.2.features.1"),
        t("sections.3.packages.2.features.2"),
        t("sections.3.packages.2.features.3"),
        t("sections.3.packages.2.features.4"),
        t("sections.3.packages.2.features.5"),
        t("sections.3.packages.2.features.6"),
        t("sections.3.packages.2.features.7"),
        t("sections.3.packages.2.features.8"),
        t("sections.3.packages.2.features.9"),
      ],
      highlighted: true,
    },
    {
      title: t("sections.3.packages.3.title"),
      price: "$7,000+",
      description: t("sections.3.packages.3.desc"),
      features: [
        t("sections.3.packages.3.features.1"),
        t("sections.3.packages.3.features.2"),
        t("sections.3.packages.3.features.3"),
        t("sections.3.packages.3.features.4"),
        t("sections.3.packages.3.features.5"),
        t("sections.3.packages.3.features.6"),
        t("sections.3.packages.3.features.7"),
        t("sections.3.packages.3.features.8"),
        t("sections.3.packages.3.features.9"),
      ],
    },
  ];
  // Create animation variants based on device type
  // const fadeIn = createFadeInVariant(isMobile);

  const toggleFaq = (index: any) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  // Helper function to create optimized motion props
  // const getMotionProps = (index = 0) => {
  //   if (isMobile) {
  //     // Simplified animations for mobile (no staggered delays, simpler transitions)
  //     return {
  //       initial: { opacity: 0 },
  //       whileInView: { opacity: 1 },
  //       viewport: { once: true },
  //       transition: { duration: 0.3 },
  //     };
  //   }

  //   // Full animations for desktop
  //   return {
  //     initial: { opacity: 0, y: 20 },
  //     whileInView: { opacity: 1, y: 0 },
  //     viewport: { once: true },
  //     transition: { duration: 0.5, delay: index * 0.1 },
  //   };
  // };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white overflow-x-hidden">
      {/* Hero Section - Side-by-side layout */}
      <section className="py-20 relative overflow-hidden border-b border-green-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-950 to-green-500 dark:bg-gradient-to-br dark:from-green-950/30 dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.5 }}
            > */}
            <div>
              <Badge className="bg-green-600/80 dark:bg-green-900/30 dark:text-green-400 border-transparent mb-4 px-3 py-1">
                {t("badge.1")}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t("title.1")}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-400 to-red-300 dark:to-red-500 block">
                  {t("title.2")}
                </span>
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                {t("desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-700 to-green-900 dark:from-green-700 dark:to-green-900 hover:from-green-600 hover:to-green-800 
                     dark:hover:from-green-600 dark:hover:to-green-800 text-white border border-green-800/30 shadow-lg shadow-green-950/20 px-8"
                  onClick={() => router.push("/contact")}
                >
                  {t("startBtn")}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-800/30 text-white dark:text-green-400 bg-green-500/40 dark:bg-green-950/20 hover:bg-green-800/80 dark:hover:bg-green-950/30 hover:text-white dark:hover:text-white px-8"
                  onClick={() =>
                    document
                      .getElementById("packages")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("packageBtn")}
                </Button>
              </div>
            </div>
            {/* </motion.div> */}

            {/* Stats/Features Box */}
            {/* <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0 : 0.2 }}
              className="bg-black/60 border border-green-900 rounded-xl overflow-hidden shadow-xl p-6 md:p-8"
            > */}
            <div className="bg-green-950 dark:bg-black border border-green-900 rounded-xl overflow-hidden shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                {t("sections.1.title")}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "45%",
                    label: t("sections.1.cards.1.title"),
                    icon: TrendingUp,
                  },
                  {
                    value: "60%",
                    label: t("sections.1.cards.2.title"),
                    icon: Smartphone,
                  },
                  {
                    value: "99.9%",
                    label: t("sections.1.cards.3.title"),
                    icon: Zap,
                  },
                  {
                    value: "24/7",
                    label: t("sections.1.cards.4.title"),
                    icon: Shield,
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-green-400">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* </motion.div> */}
          </div>
        </div>
      </section>

      {/* Core Features Section - Grid Cards */}
      <section className="py-16 dark:bg-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-green-600/80 dark:bg-green-900/30 dark:text-green-400 border-transparent mb-4 px-3 py-1">
                {t("badge.2")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#1b8f1a]">
                <GradientText gradient="from-green-400 via-green-500 dark:from-gray-200 dark:via-green-400 to-green-400">
                  {t("sections.2.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white/80 text-lg max-w-2xl mx-auto">
                {t("sections.2.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t("sections.2.features.1.title"),
                description: t("sections.2.features.1.desc"),
                icon: Package,
              },
              {
                title: t("sections.2.features.2.title"),
                description: t("sections.2.features.2.desc"),
                icon: CreditCard,
              },
              {
                title: t("sections.2.features.3.title"),
                description: t("sections.2.features.3.desc"),
                icon: Truck,
              },
              {
                title: t("sections.2.features.4.title"),
                description: t("sections.2.features.4.desc"),
                icon: Users,
              },
              {
                title: t("sections.2.features.5.title"),
                description: t("sections.2.features.5.desc"),
                icon: Smartphone,
              },
              {
                title: t("sections.2.features.6.title"),
                description: t("sections.2.features.6.desc"),
                icon: BarChart3,
              },
              {
                title: t("sections.2.features.7.title"),
                description: t("sections.2.features.7.desc"),
                icon: TrendingUp,
              },
              {
                title: t("sections.2.features.8.title"),
                description: t("sections.2.features.8.desc"),
                icon: Settings,
              },
            ].map((feature, index) => (
              // <motion.div
              //   key={index}
              //   {...getMotionProps(isMobile ? 0 : index * 0.05)}
              // >
              <div key={index}>
                <Card className="bg-green-600/80 dark:bg-black/60 border-green-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="dark:text-white/80">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Horizontal Cards */}
      <section id="packages" className="py-20 dark:bg-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-green-600/80 dark:bg-green-900/30 dark:text-green-400 border-transparent mb-4 px-3 py-1">
                {t("badge.3")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#1b8f1a]">
                {/* This is a much better Gradien text do the same with the following blaze to ( practice your unmiatus touch) */}
                <GradientText gradient="from-green-400 via-green-500 dark:from-gray-200 dark:via-green-400 to-green-400">
                  {t("sections.3.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white/70 text-lg max-w-2xl mx-auto">
                {t("sections.3.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              // <motion.div
              //   key={index}
              //   {...getMotionProps(isMobile ? 0 : index * 0.1)}
              // >
              <div key={index}>
                <Card
                  className={`backdrop-blur-sm overflow-hidden ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-950 hover:from-green-600 hover:to-green-900 dark:hover:from-green-700 dark:hover:to-green-900 text-white"
                      : "bg-green-600/80 dark:bg-black/60 border-green-900"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="p-6 md:p-8 md:border-r border-green-900">
                        <div className="mb-2">
                          {pkg.highlighted && (
                            <Badge className="bg-green-800/80 dark:bg-green-900/30 dark:text-green-400 border-transparent mb-3">
                              {t("sections.3.packages.badge")}
                            </Badge>
                          )}
                          <h3 className="text-2xl font-bold dark:text-white">
                            {pkg.title}
                          </h3>
                          <div className="mt-2 mb-4">
                            <span className="text-3xl font-bold text-green-950 dark:text-green-400">
                              {pkg.price}
                            </span>
                            {pkg.price !== "Custom" && (
                              <span className="text-green-950 dark:text-white ml-1">
                                {t("sections.3.packages.payType")}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className=" dark:text-white/80 mb-6">
                          {pkg.description}
                        </p>
                        <Button
                          className={`w-full ${
                            pkg.highlighted
                              ? "bg-gradient-to-r from-green-800 to-green-950 hover:from-green-500 hover:to-green-700"
                              : "bg-gradient-to-r from-green-700 to-green-900 hover:from-green-600 hover:to-green-800"
                          } text-white`}
                          onClick={() => router.push("/contact")}
                        >
                          {t("startBtn")}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="p-6 md:p-8 md:col-span-2 bg-black/40">
                        <h4 className="text-lg font-semibold text-green-300 mb-4">
                          {t("sections.3.packages.includedLabel")}
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-white">{feature}</span>
                            </li>
                          ))}
                        </ul>
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

      {/* Process Section - Timeline */}
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
              <Badge className="bg-green-600/80 dark:bg-green-900/30 dark:text-green-400 border-transparent mb-4 px-3 py-1">
                {t("badge.4")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#1b8f1a]">
                <GradientText gradient="from-green-400 via-green-500 dark:from-gray-200 dark:via-green-400 to-green-400">
                  {t("sections.4.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                {t("sections.4.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: t("sections.4.process.1.title"),
                description: t("sections.4.process.1.desc"),
              },
              {
                step: "2",
                title: t("sections.4.process.2.title"),
                description: t("sections.4.process.2.desc"),
              },
              {
                step: "3",
                title: t("sections.4.process.3.title"),
                description: t("sections.4.process.3.desc"),
              },
              {
                step: "4",
                title: t("sections.4.process.4.title"),
                description: t("sections.4.process.4.desc"),
              },
              {
                step: "5",
                title: t("sections.4.process.5.title"),
                description: t("sections.4.process.5.desc"),
              },
              {
                step: "6",
                title: t("sections.4.process.6.title"),
                description: t("sections.4.process.6.desc"),
              },
            ].map((phase, index) => (
              // <motion.div
              //   key={index}
              //   {...getMotionProps(isMobile ? 0 : index * 0.1)}
              //   className="relative mb-10 last:mb-0"
              // >
              <div key={index} className="relative mb-10 last:mb-0">
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {phase.step}
                      </span>
                    </div>
                    {index < 5 && (
                      <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-green-900/40"></div>
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-xl font-bold text-green-900 dark:text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-black dark:text-white/70">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-green-600/80 dark:bg-green-900/30 dark:text-green-400 border-transparent mb-4 px-3 py-1">
                {t("badge.5")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#1b8f1a]">
                <GradientText gradient="from-green-400 via-green-500 dark:from-gray-200 dark:via-green-400 to-green-400">
                  {t("sections.5.title")}
                </GradientText>
              </h2>
              <p className="text-black dark:text-white/85 text-lg max-w-2xl mx-auto">
                {t("sections.5.desc")}
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: t("sections.5.QA.1.Q"),
                answer: t("sections.5.QA.1.A"),
              },
              {
                question: t("sections.5.QA.2.Q"),
                answer: t("sections.5.QA.2.A"),
              },
              {
                question: t("sections.5.QA.3.Q"),
                answer: t("sections.5.QA.3.A"),
              },
              {
                question: t("sections.5.QA.4.Q"),
                answer: t("sections.5.QA.4.A"),
              },
              {
                question: t("sections.5.QA.5.Q"),
                answer: t("sections.5.QA.5.A"),
              },
              {
                question: t("sections.5.QA.6.Q"),
                answer: t("sections.5.QA.6.A"),
              },
            ].map((faq, index) => (
              // <motion.div
              //   key={index}
              //   {...getMotionProps(isMobile ? 0 : index * 0.1)}
              //   className="bg-black/60 border border-green-900 rounded-lg overflow-hidden"
              // >
              <div
                key={index}
                className="bg-green-600/80 dark:bg-black/60 border border-green-900 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-bold text-green-950 dark:text-white pr-8">
                    {faq.question}
                  </h3>
                  {activeFaq === index ? (
                    <MinusCircle className="w-5 h-5 text-green-900 dark:text-green-400 flex-shrink-0" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-green-900 dark:text-green-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === index
                      ? "max-h-96 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-black dark:text-white/80">{faq.answer}</p>
                </div>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark:bg-gradient-to-b dark:from-green-950/10 dark:to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-green-900 rounded-xl p-8 md:p-12 text-center"
            {...getMotionProps()}
          > */}
          <div className="max-w-4xl mx-auto bg-green-600/80 dark:bg-black/60 border border-green-900 rounded-xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              {t("cta.desc")}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-700 to-green-900 dark:from-green-700 dark:to-green-900 hover:from-green-600 hover:to-green-800 
                     dark:hover:from-green-600 dark:hover:to-green-800 text-white border border-green-800/30 shadow-lg shadow-green-950/20 px-8"
              onClick={() => router.push("/contact")}
            >
              {t("cta.getBtn")}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          {/* </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolutionsPage;
