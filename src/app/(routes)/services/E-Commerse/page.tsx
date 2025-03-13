"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// E-commerce packages
const packages = [
  {
    title: "Basic E-commerce",
    price: "$3,500",
    description:
      "Essential e-commerce functionality for businesses starting their online presence",
    features: [
      "Custom responsive design",
      "Product catalog setup",
      "Payment gateway integration",
      "Basic product filtering",
      "Contact form & essential pages",
      "On-page SEO optimization",
      "Mobile-friendly checkout",
      "2 hours of training",
    ],
  },
  {
    title: "Advanced E-commerce",
    price: "$6,500",
    description:
      "Enhanced features and functionality for growing online businesses",
    features: [
      "All Basic features",
      "Advanced product filtering & search",
      "Customer account creation",
      "Wishlist functionality",
      "Product reviews & ratings",
      "Multi-currency support",
      "Email marketing integration",
      "Analytics implementation",
      "4 hours of training",
    ],
    highlighted: true,
  },
  {
    title: "Premium E-commerce",
    price: "$10,000+",
    description:
      "Comprehensive solution with advanced features for established businesses",
    features: [
      "All Advanced features",
      "Custom functionality development",
      "Multiple payment gateways",
      "Advanced inventory management",
      "Third-party system integrations",
      "Multi-language support",
      "Custom reporting dashboards",
      "Advanced security features",
      "Comprehensive training program",
    ],
  },
];

const EcommerceSolutionsPage = () => {
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index: any) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - Side-by-side layout */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                E-COMMERCE SOLUTIONS
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Turn Your Products Into
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
                  Online Success
                </span>
              </h1>
              <p className="text-lg text-red-200/80 mb-8 max-w-2xl">
                We develop powerful, customized e-commerce websites that help
                you sell effectively online. We build the digital infrastructure
                you need while you focus on your products and customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                    text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8"
                  onClick={() => router.push("/contact")}
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-800/30 text-red-400 bg-red-950/20 hover:bg-red-950/30 hover:text-white px-8"
                  onClick={() =>
                    document
                      .getElementById("packages")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Packages
                </Button>
              </div>
            </motion.div>

            {/* Stats/Features Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-black/60 border border-red-900 rounded-xl overflow-hidden shadow-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-center mb-6">
                Why Choose Our E-commerce Solutions?
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "45%",
                    label: "Average increase in conversion rates",
                    icon: TrendingUp,
                  },
                  {
                    value: "60%",
                    label: "Mobile traffic optimization",
                    icon: Smartphone,
                  },
                  {
                    value: "99.9%",
                    label: "Uptime for your online store",
                    icon: Zap,
                  },
                  {
                    value: "24/7",
                    label: "Support and maintenance",
                    icon: Shield,
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-red-400">
                      {stat.value}
                    </div>
                    <p className="text-sm text-red-200/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section - Grid Cards */}
      <section className="py-16 bg-red-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                FEATURES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                E-commerce Website Features
              </h2>
              <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
                We can implement a wide range of features to create a powerful
                online selling platform for your business.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Product Management",
                description:
                  "Easily manage your products, categories, variations, and inventory levels.",
                icon: Package,
              },
              {
                title: "Secure Payments",
                description:
                  "Multiple payment gateways with secure checkout process and fraud protection.",
                icon: CreditCard,
              },
              {
                title: "Shipping Options",
                description:
                  "Flexible shipping rules, real-time rates, and order tracking integration.",
                icon: Truck,
              },
              {
                title: "Customer Accounts",
                description:
                  "User registration, order history, wishlists, and personalized experiences.",
                icon: Users,
              },
              {
                title: "Mobile Optimization",
                description:
                  "Responsive design ensuring perfect shopping experience on all devices.",
                icon: Smartphone,
              },
              {
                title: "Analytics & Reporting",
                description:
                  "Comprehensive insights into sales, customers, and product performance.",
                icon: BarChart3,
              },
              {
                title: "Marketing Tools",
                description:
                  "Discounts, coupons, abandoned cart recovery, and email marketing integration.",
                icon: TrendingUp,
              },
              {
                title: "Advanced Customization",
                description:
                  "Tailor your store's functionality and design to match your brand and needs.",
                icon: Settings,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="bg-black/60 border-red-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-red-200/60">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Horizontal Cards */}
      <section
        id="packages"
        className="py-20 bg-gradient-to-b from-black to-red-950/20"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                PACKAGES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Choose Your E-commerce Package
              </h2>
              <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
                We offer tailored packages to fit businesses at every stage of
                growth.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`backdrop-blur-sm overflow-hidden ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-red-950/40 to-black/80 border-red-700/50"
                      : "bg-black/60 border-red-900"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="p-6 md:p-8 md:border-r border-red-900">
                        <div className="mb-2">
                          {pkg.highlighted && (
                            <Badge className="bg-red-600/80 text-white border-transparent mb-3">
                              MOST POPULAR
                            </Badge>
                          )}
                          <h3 className="text-2xl font-bold text-white">
                            {pkg.title}
                          </h3>
                          <div className="mt-2 mb-4">
                            <span className="text-3xl font-bold text-red-400">
                              {pkg.price}
                            </span>
                            {pkg.price !== "Custom" && (
                              <span className="text-red-200/60 ml-1">
                                one-time
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-red-200/70 mb-6">
                          {pkg.description}
                        </p>
                        <Button
                          className={`w-full ${
                            pkg.highlighted
                              ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700"
                              : "bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800"
                          } text-white`}
                          onClick={() => router.push("/contact")}
                        >
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="p-6 md:p-8 md:col-span-2 bg-black/40">
                        <h4 className="text-lg font-semibold text-red-300 mb-4">
                          What's Included:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-red-200/70">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                OUR PROCESS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Build Your E-commerce Website
              </h2>
              <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
                Our proven development process ensures your e-commerce website
                is built right, on time, and ready to drive sales.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                description:
                  "We analyze your business needs, target audience, and competitors to create a strategic roadmap for your e-commerce store.",
              },
              {
                step: "2",
                title: "Design & User Experience",
                description:
                  "Our designers create an engaging, conversion-focused user experience that reflects your brand and appeals to your customers.",
              },
              {
                step: "3",
                title: "Development & Configuration",
                description:
                  "We build your store with clean code, implement all features, and configure products, payment gateways, and shipping options.",
              },
              {
                step: "4",
                title: "Testing & Quality Assurance",
                description:
                  "We rigorously test your store across devices and browsers to ensure functionality, performance, and security.",
              },
              {
                step: "5",
                title: "Launch & Training",
                description:
                  "We deploy your store and provide comprehensive training so you can confidently manage your products, orders, and customers.",
              },
              {
                step: "6",
                title: "Support & Growth",
                description:
                  "We provide ongoing support and strategic guidance to help your e-commerce business grow and evolve.",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {phase.step}
                      </span>
                    </div>
                    {index < 5 && (
                      <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-red-900/40"></div>
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-red-200/70">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-20 bg-red-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
                Common questions about our e-commerce solutions and services.
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question:
                  "How long does it take to build an e-commerce website?",
                answer:
                  "The timeline depends on the complexity of your project. A basic e-commerce store can be up and running in 3-4 weeks, while more complex projects may take 8-12 weeks. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
              },
              {
                question:
                  "Can you migrate my existing online store to a new platform?",
                answer:
                  "Yes, we provide comprehensive migration services. We can transfer your product catalog, customer accounts, and order history from your current platform to a new Shopify, WooCommerce, or custom solution. Our process ensures minimal disruption and preserves your SEO value during the transition.",
              },
              {
                question:
                  "Do you provide training on how to manage my e-commerce website?",
                answer:
                  "Absolutely! We include comprehensive training sessions as part of our packages. We'll teach you and your team how to add/edit products, manage inventory, process orders, update content, and use all the features of your e-commerce platform. We also provide detailed documentation and recorded training sessions for future reference.",
              },
              {
                question:
                  "What payment processors can you integrate with my website?",
                answer:
                  "We can integrate your website with all major payment processors including Stripe, PayPal, Square, Authorize.net, Braintree, and many others. We can also implement region-specific payment methods and multiple payment options to maximize your conversion rates and provide convenience for your customers.",
              },
              {
                question: "Can you help with SEO for my e-commerce store?",
                answer:
                  "Yes, we build your store with SEO best practices from the ground up. This includes optimized site structure, proper metadata, clean code, mobile optimization, and fast loading speeds. We also offer ongoing SEO services to help improve your visibility and rankings over time.",
              },
              {
                question: "Do you offer maintenance and support after launch?",
                answer:
                  "Yes, we provide ongoing maintenance and support packages to keep your store running smoothly. These include regular updates, security monitoring, performance optimization, and technical support. We recommend a maintenance plan to protect your investment and ensure your store remains secure and up-to-date.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/60 border border-red-900 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-bold text-white pr-8">
                    {faq.question}
                  </h3>
                  {activeFaq === index ? (
                    <MinusCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === index
                      ? "max-h-96 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-red-200/70">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/10 to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Custom E-commerce Website?
            </h2>
            <p className="text-lg text-red-200/70 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. We'll help you choose
              the right features and development approach to create an
              e-commerce website that drives sales and growth for your business.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8"
              onClick={() => router.push("/contact")}
            >
              Get Your E-commerce Website
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolutionsPage;
