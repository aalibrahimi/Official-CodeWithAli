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
import GradientText from "@/app/components/gradientText";

// Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// Process steps
const processSteps = [
  {
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business objectives, target users, and market requirements to create a comprehensive app strategy.",
    icon: Layers,
  },
  {
    title: "UX/UI Design",
    description:
      "Our designers create intuitive, user-friendly interfaces with engaging visuals that align with your brand identity.",
    icon: Palette,
  },
  {
    title: "Development",
    description:
      "Our developers build your app using the most appropriate technologies, ensuring code quality and optimal performance.",
    icon: Code,
  },
  {
    title: "Testing & QA",
    description:
      "We conduct rigorous testing across devices and platforms to ensure functionality, performance, and security.",
    icon: Settings,
  },
  {
    title: "Deployment",
    description:
      "We handle the app store submission process and ensure your app meets all requirements for iOS and Android platforms.",
    icon: Globe,
  },
  {
    title: "Post-Launch Support",
    description:
      "We provide ongoing maintenance, updates, and support to keep your app running smoothly and up-to-date.",
    icon: RefreshCw,
  },
];

// App types
const appTypes = [
  {
    title: "Native Apps",
    description:
      "Built specifically for iOS or Android platforms, offering the best performance and access to all device features.",
    platforms: ["iOS (Swift/Objective-C)", "Android (Kotlin/Java)"],
    benefits: [
      "Optimal performance",
      "Full access to device features",
      "Superior user experience",
      "Better store visibility",
    ],
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Developed once and deployed on multiple platforms, reducing development time and costs.",
    platforms: ["React Native", "Flutter", "Xamarin"],
    benefits: [
      "Cost-effective",
      "Faster development",
      "Easier maintenance",
      "Consistent experience across platforms",
    ],
  },
  {
    title: "Progressive Web Apps",
    description:
      "Web applications that offer app-like experiences, accessible directly through web browsers without installation.",
    platforms: ["HTML5", "CSS3", "JavaScript", "Service Workers"],
    benefits: [
      "No installation required",
      "Works offline",
      "Automatic updates",
      "Lower development costs",
    ],
  },
];

const MobileAppDevelopmentPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/30 to-transparent"></div>
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
              <Badge className="bg-blue-900/30 text-blue-400 border-transparent mb-4 px-3 py-1">
                MOBILE APP DEVELOPMENT
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Custom Mobile Apps
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-600 to-blue-800 block mt-2">
                  For iOS & Android
                </span>
              </h1>
              <p className="text-lg text-white mb-8">
                We design and build innovative, high-performance mobile
                applications that engage users, solve real problems, and help
                your business grow in the mobile-first world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 
                    text-white border border-blue-800/30 shadow-lg shadow-blue-950/20 px-8"
                  onClick={() => router.push("/contact")}
                >
                  Discuss Your App Idea
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-800/30 text-blue-400 bg-blue-950/20 hover:bg-blue-950/30 hover:text-white px-8"
                  onClick={() => router.push("/portfolio")}
                >
                  View Our Work
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
            <div className="lg:w-5/12">
              <div className="relative bg-black/60 border border-blue-900 rounded-xl overflow-hidden shadow-2xl shadow-blue-950/20 p-5">
                {/* Mobile app mockup illustration */}
                <div className="flex justify-center">
                  <div className="w-48 h-96 bg-gradient-to-br from-blue-950/40 to-blue-900/10 rounded-xl overflow-hidden p-2 relative">
                    <div className="w-full h-full border-2 border-blue-500/20 rounded-lg relative">
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl"></div>

                      {/* Screen content */}
                      <div className="absolute top-7 left-2 right-2 bottom-2">
                        {/* App header */}
                        <div className="h-8 bg-blue-800/30 rounded-t-lg flex items-center justify-center">
                          <div className="w-24 h-3 bg-blue-500/50 rounded"></div>
                        </div>

                        {/* App content */}
                        <div className="bg-blue-950/30 h-[calc(100%-8px)] p-2 rounded-b-lg">
                          <div className="h-24 bg-blue-800/20 rounded mb-3"></div>
                          <div className="space-y-2 mb-3">
                            <div className="h-3 bg-blue-800/30 rounded-full w-full"></div>
                            <div className="h-3 bg-blue-800/30 rounded-full w-5/6"></div>
                            <div className="h-3 bg-blue-800/30 rounded-full w-4/6"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-20 bg-blue-800/20 rounded"></div>
                            <div className="h-20 bg-blue-800/20 rounded"></div>
                            <div className="h-20 bg-blue-800/20 rounded"></div>
                            <div className="h-20 bg-blue-800/20 rounded"></div>
                          </div>

                          {/* Navigation bar */}
                          <div className="absolute bottom-2 left-2 right-2 h-12 bg-blue-800/30 rounded-lg flex justify-around items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-600/40"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-600/40"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-600/40"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-600/40"></div>
                          </div>
                        </div>
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

      {/* App Types Section */}
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
              <Badge className="bg-blue-900/30 text-blue-400 border-transparent mb-4 px-3 py-1">
                APP SOLUTIONS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#006674]">
                <GradientText gradient="from-blue-500 via-gray-200 to-blue-500">
                  Mobile App Development Solutions
                </GradientText>
              </h2>
              <p className="text-amber-50 text-lg max-w-2xl mx-auto">
                We offer a range of app development approaches to meet your
                specific needs, budget, and timeline.
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              // >
              <div key={index}>
                <Card className="bg-black/60 border-blue-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 to mb-3">
                      {type.title}
                    </h3>
                    <p className="text-amber-50 mb-4">{type.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400  mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {type.platforms.map((platform, i) => (
                          <Badge
                            key={i}
                            className="bg-blue-900/20 border-blue-800/30 text-white"
                          >
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-300 mb-2">
                        Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-amber-50 text-sm">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-blue-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            > */}
            <div>
              <Badge className="bg-blue-900/30 text-blue-400 border-transparent mb-4 px-3 py-1">
                OUR EXPERTISE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#006674]">
                <GradientText gradient="from-blue-500 via-gray-200 to-blue-500">
                  What Sets our Mobile App Development Apart
                </GradientText>
              </h2>
              <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
                We combine technical excellence with creative design to deliver
                mobile apps that users love and businesses rely on.
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered Design",
                description:
                  "We create intuitive, engaging interfaces based on deep user research and iterative testing to ensure your app is a joy to use.",
                icon: Palette,
              },
              {
                title: "High Performance",
                description:
                  "Our apps are optimized for speed, responsiveness, and efficient resource usage, even under demanding conditions.",
                icon: Zap,
              },
              {
                title: "Cross-Platform Expertise",
                description:
                  "We develop for both iOS and Android, ensuring consistent experiences across all devices while leveraging platform-specific features.",
                icon: Smartphone,
              },
              {
                title: "Advanced Functionality",
                description:
                  "From location services to payment processing, we implement complex features that make your app powerful and distinctive.",
                icon: Settings,
              },
              {
                title: "Security & Compliance",
                description:
                  "We build with security-first principles and ensure compliance with GDPR, CCPA, and other relevant regulations.",
                icon: ShieldCheck,
              },
              {
                title: "Scalable Architecture",
                description:
                  "Our apps are built on flexible, scalable architectures that can grow with your user base and evolving requirements.",
                icon: CloudCog,
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
                <Card className="bg-black/60 border-blue-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-amber-80">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
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
              <Badge className="bg-blue-900/30 text-blue-400 border-transparent mb-4 px-3 py-1">
                OUR PROCESS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#006674]">
                <GradientText gradient="from-blue-500 via-gray-200 to-blue-500">
                  Mobile App Development Process
                </GradientText>
              </h2>
              <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
                Our structured approach ensures a smooth development journey
                from concept to launch and beyond.
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
                <Card className="bg-black/60 border-blue-900 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <step.icon className="w-5 h-5 text-blue-500 mr-2" />
                          <h3 className="text-xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-blue-200/60">{step.description}</p>
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
              <Badge className="bg-blue-900/30 text-blue-400 border-transparent mb-4 px-3 py-1">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#006674]">
                <GradientText gradient="from-blue-500 via-gray-200 to-blue-500">
                  Frequently Asked Questions
                </GradientText>
              </h2>
              <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
                Common questions about our mobile app development process and
                services.
              </p>
            </div>
            {/* </motion.div> */}
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-black/60 border border-blue-900">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-blue-900/30 data-[state=active]:text-white"
                >
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-blue-900/30 data-[state=active]:text-white"
                >
                  Technical
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="data-[state=active]:bg-blue-900/30 data-[state=active]:text-white"
                >
                  Pricing
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                {[
                  {
                    question: "How long does it take to develop a mobile app?",
                    answer:
                      "The timeline varies based on complexity and features. Simple apps can take 3-4 months, while complex apps may require 6-9 months from concept to launch. We'll provide a detailed timeline during the discovery phase.",
                  },
                  {
                    question: "Should I develop for iOS, Android, or both?",
                    answer:
                      "This depends on your target audience and business goals. If your audience primarily uses one platform, starting there makes sense. However, most businesses benefit from developing for both platforms to maximize reach, which can be done efficiently with cross-platform development.",
                  },
                  {
                    question: "How do you ensure my app will be successful?",
                    answer:
                      "Success starts with thorough research and planning. We conduct market analysis, define clear user personas, and focus on solving real user problems. We also implement analytics to track key metrics and make data-driven improvements post-launch.",
                  },
                  {
                    question:
                      "What ongoing support do you provide after launch?",
                    answer:
                      "We offer comprehensive maintenance packages including bug fixes, performance monitoring, compatibility updates for new OS versions, security patches, and feature enhancements. We recommend a maintenance plan to keep your app secure, stable, and relevant.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-blue-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-blue-200/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="technical" className="space-y-4">
                {[
                  {
                    question:
                      "Native vs. cross-platform: which is better for my app?",
                    answer:
                      "Native development offers optimal performance and access to all platform features, while cross-platform development is more cost-effective and faster to market. The choice depends on your app's requirements, budget, and timeline. We recommend native for performance-critical apps or those needing advanced device features, and cross-platform for most business apps with standard functionality.",
                  },
                  {
                    question: "How do you handle app store approvals?",
                    answer:
                      "We have extensive experience with both Apple App Store and Google Play Store guidelines. We incorporate these requirements throughout the development process and handle the entire submission process, including preparing all required materials, responding to review questions, and making any necessary adjustments to ensure approval.",
                  },
                  {
                    question: "Can you integrate my app with existing systems?",
                    answer:
                      "Yes, we specialize in integrating mobile apps with existing systems such as CRMs, ERPs, payment processors, and custom backends. We use secure APIs to ensure seamless data flow between your app and other business systems.",
                  },
                  {
                    question: "How do you address app security?",
                    answer:
                      "Security is built into every stage of our development process. We implement encryption for data storage and transmission, secure authentication methods, input validation, and protection against common vulnerabilities. For apps handling sensitive data, we conduct security audits and penetration testing.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-blue-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-blue-200/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                {[
                  {
                    question: "How much does it cost to develop a mobile app?",
                    answer:
                      "App development costs vary widely based on complexity, features, and platforms. Simple apps typically range from $25,000-$50,000, medium-complexity apps from $50,000-$100,000, and complex apps can exceed $150,000. We provide detailed estimates after understanding your specific requirements.",
                  },
                  {
                    question:
                      "What factors affect the cost of app development?",
                    answer:
                      "Key factors include: platforms (iOS, Android, or both), complexity of features, backend requirements, third-party integrations, design complexity, user authentication needs, and whether you need a custom CMS or admin panel. Additional factors include analytics implementation and security requirements.",
                  },
                  {
                    question: "Do you offer payment plans?",
                    answer:
                      "Yes, we typically structure payments in milestones throughout the project. A common approach is 30% upfront, 30% at design approval, 30% at development completion, and 10% upon final delivery and approval. For larger projects, we can create more granular payment schedules.",
                  },
                  {
                    question: "What ongoing costs should I expect?",
                    answer:
                      "Ongoing costs typically include app store fees ($99/year for Apple, $25 one-time for Google), server/hosting costs ($50-500/month depending on usage), maintenance and updates (typically 15-20% of initial development cost annually), and possible third-party service fees for integrations.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-blue-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-blue-200/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950/10 to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-blue-900 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          > */}
          <div className="max-w-4xl mx-auto bg-black/60 border border-blue-900 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-blue-200/70 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can
              help you create a mobile app that engages users and drives
              business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 
                  text-white border border-blue-800/30 shadow-lg shadow-blue-950/20 px-8"
                onClick={() => router.push("/contact")}
              >
                Discuss Your App Idea
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-800/30 text-blue-400 bg-blue-950/20 hover:bg-blue-950/30 hover:text-white px-8"
                onClick={() => router.push("/portfolio")}
              >
                View Our Work
              </Button>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;
