"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GradientText from "@/app/components/gradientText";
import Link from "next/link";

// ClientOnly wrapper to prevent hydration issues
const ClientOnly = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? children : null;
};

// Animation variants - simplified for better performance
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Services data
const services = [
  {
    title: "Website Development",
    description:
      "Custom-designed responsive websites optimized for performance and conversions",
    icon: Code,
    color: "from-red-600 to-red-800",
    href: "/services/web-development",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Content Management",
      "Performance Tuning",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    color: "from-red-700 to-red-900",
    href: "/services/mobile-app-development",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "App Store Deployment",
      "Maintenance & Updates",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "User-focused designs that enhance engagement and simplify interactions",
    icon: Palette,
    color: "from-red-800 to-red-950",
    href: "/services/UI/UX-Design", // Fixed path
    features: [
      "User Research",
      "Interface Design",
      "Usability Testing",
      "Design Systems",
    ],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Fully-featured online stores with secure payment processing and inventory management",
    icon: ShoppingBag,
    color: "from-red-600 to-red-800",
    href: "/services/E-Commerse",
    features: [
      "Product Catalogs",
      "Payment Processing",
      "Inventory Management",
      "Customer Management",
    ],
  },
  {
    title: "SEO Optimization",
    description:
      "Data-driven strategies to improve visibility and ranking in search engines",
    icon: Search,
    color: "from-red-700 to-red-900",
    href: "/services/seo-optimization",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Content Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    title: "Web Hosting & Maintenance",
    description:
      "Reliable hosting services with regular updates, backups, and security monitoring",
    icon: Server,
    color: "from-red-800 to-red-950",
    href: "/services/Web-hosting",
    features: [
      "Managed Hosting",
      "Security Updates",
      "Performance Monitoring",
      "Regular Backups",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business, goals, target audience, and specific requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a comprehensive strategy and detailed project plan tailored to your objectives.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our expert team implements the solution with regular updates and client feedback.",
    icon: Code,
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide ongoing support, maintenance, and optimization to ensure long-term success.",
    icon: Server,
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <ClientOnly>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            {/* <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            > */}
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                OUR EXPERTISE
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Comprehensive Digital
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
                  Services & Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-red-200/80 mb-8">
                From website development to SEO optimization, we offer end-to-end
                digital solutions designed to help your business thrive in the
                digital landscape.
              </p>
            </div>
            {/* </motion.div> */}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
              <AnimatePresence>
                {services.map((service, index) => (
                  // <motion.div
                  //   key={index}
                  //   initial={{ opacity: 0, y: 20 }}
                  //   animate={{ opacity: 1, y: 0 }}
                  //   exit={{ opacity: 0 }}
                  //   transition={{ duration: 0.4, delay: index * 0.05 }}
                  // >
                  <div key={index}>
                    <Card className="bg-black/60 border-red-900 backdrop-blur-sm h-full overflow-hidden group hover:border-red-800/50 transition-colors">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-5">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 transform group-hover:scale-110 transition-transform`}
                          >
                            <service.icon className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {service.title === "Website Development" ? (
                              <>
                                <GradientText gradient="from-white via-pink-400 to-red-500">{service.title}</GradientText>
                              </>
                            ) : service.title === "Mobile App Development" ? (
                              <>
                                <GradientText gradient="from-white via-cyan-400 to-blue-400">{service.title}</GradientText>
                              </>
                            ) : service.title === "UI/UX Design" ? (
                              <>
                                <GradientText gradient="from-white via-purple-500 to-blue-500">{service.title}</GradientText>
                              </>
                            ) : service.title === "E-commerce Solutions" ? (
                              <>
                                <GradientText gradient="from-white to-green-600">{service.title}</GradientText>
                              </>
                            ) : service.title === "SEO Optimization" ? (
                              <>
                                <GradientText gradient="from-white via-orange-400 to-red-600">{service.title}</GradientText>
                              </>
                            ) : service.title === "Web Hosting & Maintenance" ? (
                              <>
                                <GradientText gradient="from-white via-gray-500 to-gray-600">{service.title}</GradientText>
                              </>
                            ) : (
                              <>
                                <GradientText gradient="from-green-600 to-red-600">{service.title}</GradientText>
                              </>
                            )}
                          </h3>
                          <p className="text-red-200/60 mb-4">
                            {service.description}
                          </p>

                          <ul className="space-y-2 mb-5">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-red-200/80 text-sm">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto pt-4">
                          <Link href={service.href} target="_blank">
                            <Button
                              className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white"
                            >
                              Learn More
                              <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  // </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 bg-red-950/10">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              {/* <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              > */}
              <div>
                <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                  OUR APPROACH
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Service Delivery Process
                </h2>
                <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
                  We follow a proven methodology to ensure successful outcomes for
                  all our services.
                </p>
              </div>
              {/* </motion.div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                // <motion.div
                //   key={index}
                //   initial={{ opacity: 0, y: 20 }}
                //   animate={{ opacity: 1, y: 0 }}
                //   transition={{ duration: 0.4, delay: index * 0.1 }}
                // >
                <div key={index}>
                  <div className="bg-black/60 border border-red-900 rounded-xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-red-200/60">{step.description}</p>
                  </div>
                </div>
                // </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - More responsive */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* <motion.div
              className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-6 md:p-10 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            > */}
            <div className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-6 md:p-10 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-base md:text-lg text-red-200/70 mb-6 md:mb-8 max-w-2xl mx-auto">
                Contact us for a free consultation and let's discuss how our
                services can help you achieve your digital goals.
              </p>
              <Button
                className="w-full md:w-auto bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                  text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-4 md:px-8 py-2"
                onClick={() => router.push("/contact")}
              >
                Schedule a Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            {/* </motion.div> */}
          </div>
        </section>
      </div>
    </ClientOnly>
  );
}