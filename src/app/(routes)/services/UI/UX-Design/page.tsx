"use client";
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Eye,
  Lightbulb,
  Palette,
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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Design offerings data
const designOfferings = [
  {
    title: "User Research",
    description:
      "We conduct comprehensive user research to understand your target audience's needs, behaviors, and pain points.",
    icon: Users,
    features: [
      "Persona Development",
      "User Interviews",
      "Competitive Analysis",
      "User Journey Mapping",
    ],
  },
  {
    title: "Interface Design",
    description:
      "We create beautiful, intuitive interfaces that balance aesthetics with functionality to enhance user experience.",
    icon: Monitor,
    features: [
      "Wireframing",
      "Visual Design",
      "Interactive Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "Usability Testing",
    description:
      "We validate designs through rigorous testing to ensure they meet user needs and business objectives.",
    icon: Eye,
    features: [
      "Heuristic Evaluation",
      "A/B Testing",
      "User Testing Sessions",
      "Analytics Integration",
    ],
  },
  {
    title: "Design Systems",
    description:
      "We develop comprehensive design systems that ensure consistency while enabling scalability across all platforms.",
    icon: Layers,
    features: [
      "Component Libraries",
      "Style Guides",
      "Documentation",
      "Implementation Support",
    ],
  },
];

// Portfolio projects
const portfolioProjects = [
  {
    title: "Financial App Redesign",
    category: "Mobile App",
    image: "/placeholder/ui-project-1.jpg",
  },
  {
    title: "E-commerce Website",
    category: "Web Design",
    image: "/placeholder/ui-project-2.jpg",
  },
  {
    title: "Healthcare Dashboard",
    category: "Dashboard",
    image: "/placeholder/ui-project-3.jpg",
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile App",
    image: "/placeholder/ui-project-4.jpg",
  },
];

// Design process steps
const designProcess = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your business goals, target audience, and current pain points to define clear objectives.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Research",
    description:
      "We conduct user interviews, competitive analysis, and create user personas to guide our design decisions.",
    icon: Users,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create wireframes, interactive prototypes, and visual designs that align with your brand and user needs.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Test & Iterate",
    description:
      "We validate designs through usability testing and refine based on real user feedback.",
    icon: Eye,
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We provide final assets, specifications, and implementation support to bring the design to life.",
    icon: CheckCircle,
  },
];

// Packages data
const packages = [
  {
    title: "Essential",
    price: "$3,500",
    description:
      "Perfect for startups and small businesses looking to improve their digital presence.",
    features: [
      "User Research & Personas",
      "Wireframing",
      "Basic UI Design",
      "Limited Revisions",
      "Basic Design Documentation",
    ],
  },
  {
    title: "Professional",
    price: "$7,500",
    description:
      "Comprehensive solution for established businesses seeking a complete design overhaul.",
    features: [
      "Everything in Essential",
      "In-depth User Research",
      "Interactive Prototyping",
      "Advanced UI/UX Design",
      "Usability Testing",
      "Design System Creation",
      "Extended Revisions",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description:
      "Tailored solution for large organizations with complex requirements and multiple platforms.",
    features: [
      "Everything in Professional",
      "Multi-platform Design",
      "Advanced Design System",
      "Extensive Usability Testing",
      "Analytics Integration",
      "Long-term Support",
      "Training & Workshops",
    ],
  },
];

const UIUXDesignPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              UI/UX DESIGN
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              User-Focused Design
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
                That Drives Results
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-200/80 mb-8">
              We create intuitive, engaging user experiences that enhance brand
              perception, increase conversion rates, and simplify complex
              interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white"
                size="lg"
                onClick={() => router.push("/contact")}
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-700 text-red-400 bg-red-900/20 hover:bg-red-960/20 hover:text-red-900"
                onClick={() => router.push("#portfolio")}
              >
                View Our Work
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              OUR SERVICES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive UI/UX Design Services
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              We offer end-to-end design solutions that transform complex
              challenges into seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {designOfferings.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-black/60 border-red-900 backdrop-blur-sm h-full group hover:border-red-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-900 p-3 mb-4 transform group-hover:scale-110 transition-transform">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-red-200/60 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-red-200/80 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-red-950/5 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              OUR WORK
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              UI/UX Design Portfolio
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Browse our recent design projects spanning various industries and
              platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-red-950/20">
                  <div className="w-full h-full bg-gradient-to-tr from-red-950 to-black/20 absolute inset-0 opacity-40 group-hover:opacity-0 transition-opacity"></div>
                  <img
                    src="/api/placeholder/600/450"
                    alt={project.title}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Badge className="bg-red-900/60 text-red-200 border-none mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-red-800/30 text-red-400 hover:bg-red-950/20"
              onClick={() => router.push("/portfolio")}
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              OUR PROCESS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Design Process
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              We follow a systematic approach to ensure every design solution
              meets both user needs and business objectives.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-1 bg-gradient-to-b from-red-700 to-red-900 rounded-full hidden md:block"></div>

            <div className="space-y-12 relative">
              {designProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center shadow-lg shadow-red-950/30 relative z-10">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="bg-black/60 border border-red-900 rounded-xl p-6 flex-grow backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-bold text-red-500 mr-2">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-red-200/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-red-950/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              CLIENT FEEDBACK
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Hear from businesses who have transformed their digital presence
              with our UI/UX design services.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                quote:
                  "The redesign completely transformed our user engagement metrics. Conversion rates increased by 40% within the first month.",
                author: "Sarah Johnson",
                company: "TechStart Solutions",
                image: "/api/placeholder/64/64",
              },
              {
                quote:
                  "Their user research uncovered pain points we had overlooked for years. The resulting interface designs have significantly improved customer satisfaction.",
                author: "Michael Chen",
                company: "Global Innovations",
                image: "/api/placeholder/64/64",
              },
              {
                quote:
                  "Working with this team was seamless. They translated our complex requirements into an intuitive design that our users love.",
                author: "Emma Rodriguez",
                company: "HealthPlus",
                image: "/api/placeholder/64/64",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn} className="h-full">
                <Card className="bg-black/60 border-red-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6">
                      <MessageSquare className="h-8 w-8 text-red-600 mb-4" />
                      <p className="text-red-200/80 italic mb-6">
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
                        <p className="font-bold text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-red-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              PRICING
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              UI/UX Design Packages
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Flexible options designed to meet the needs of businesses at every
              stage of growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className={`bg-black/60 backdrop-blur-sm h-full flex flex-col ${
                    pkg.highlighted
                      ? "border-red-600 shadow-lg shadow-red-950/30"
                      : "border-red-900"
                  }`}
                >
                  <CardContent className="p-6 flex-grow flex flex-col">
                    {pkg.highlighted && (
                      <Badge className="bg-red-700 text-white border-transparent self-start mb-4">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.title}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-red-400">
                        {pkg.price}
                      </span>
                      {pkg.price !== "Custom" && (
                        <span className="text-red-200/60 ml-1">starting</span>
                      )}
                    </div>
                    <p className="text-red-200/70 mb-6">{pkg.description}</p>

                    <div className="mt-auto">
                      <div className="border-t border-red-900 pt-6 mb-6">
                        <h4 className="font-bold text-white mb-4">
                          What's Included:
                        </h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                              <span className="text-red-200/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className={`w-full ${
                          pkg.highlighted
                            ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white"
                            : "bg-black border border-red-800/30 text-red-400 hover:bg-red-950/20"
                        }`}
                        onClick={() => router.push("/contact")}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-red-950/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
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
              Common questions about our UI/UX design services and process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="process" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-black/60 border border-red-900 rounded-lg p-1 mb-8">
                <TabsTrigger
                  value="process"
                  className="data-[state=active]:bg-red-900/20 data-[state=active]:text-red-400"
                >
                  Process
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="data-[state=active]:bg-red-900/20 data-[state=active]:text-red-400"
                >
                  Pricing
                </TabsTrigger>
                <TabsTrigger
                  value="deliverables"
                  className="data-[state=active]:bg-red-900/20 data-[state=active]:text-red-400"
                >
                  Deliverables
                </TabsTrigger>
                <TabsTrigger
                  value="timeline"
                  className="data-[state=active]:bg-red-900/20 data-[state=active]:text-red-400"
                >
                  Timeline
                </TabsTrigger>
              </TabsList>

              <TabsContent value="process" className="space-y-6">
                {[
                  {
                    question: "How do you approach the design process?",
                    answer:
                      "Our design process is collaborative and iterative. We begin with discovery and research to understand your business and users. We then move into wireframing and prototyping, followed by visual design, testing, and implementation support.",
                  },
                  {
                    question: "Do you conduct user testing?",
                    answer:
                      "Yes, user testing is an integral part of our process. We validate designs with real users to ensure they meet user needs and expectations. This helps identify and address issues early in the process.",
                  },
                  {
                    question: "How do you ensure designs align with our brand?",
                    answer:
                      "We begin by conducting a thorough review of your existing brand guidelines and assets. Throughout the design process, we ensure consistency with your brand while enhancing the user experience.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-black/60 border border-red-900 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-red-200/70">{faq.answer}</p>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                {[
                  {
                    question:
                      "How do you determine pricing for UI/UX projects?",
                    answer:
                      "Our pricing is based on project scope, complexity, timeline, and deliverables. We offer structured packages as starting points, but can customize pricing based on your specific needs.",
                  },
                  {
                    question:
                      "Do you offer ongoing design support after project completion?",
                    answer:
                      "Yes, we offer maintenance and support packages to ensure your design continues to evolve with your business needs and user feedback.",
                  },
                  {
                    question: "Is there a deposit required to start a project?",
                    answer:
                      "Yes, we typically require a 50% deposit to begin work, with the remaining balance due upon project completion or according to agreed-upon milestones.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-black/60 border border-red-900 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-red-200/70">{faq.answer}</p>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="deliverables" className="space-y-6">
                {[
                  {
                    question:
                      "What deliverables can I expect from a UI/UX project?",
                    answer:
                      "Depending on the project scope, deliverables may include user research reports, user personas, journey maps, wireframes, prototypes, UI design files, design systems, and implementation guidelines.",
                  },
                  {
                    question: "Do you provide development-ready files?",
                    answer:
                      "Yes, we provide design specifications, assets, and documentation that developers need to implement the designs accurately. We can also work directly with your development team to ensure smooth implementation.",
                  },
                  {
                    question: "Do you create design systems?",
                    answer:
                      "Yes, we specialize in creating comprehensive design systems that ensure consistency and scalability across your product. This includes component libraries, style guides, and documentation.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-black/60 border border-red-900 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-red-200/70">{faq.answer}</p>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="timeline" className="space-y-6">
                {[
                  {
                    question:
                      "How long does a typical UI/UX design project take?",
                    answer:
                      "Project timelines vary based on scope and complexity. A simple website redesign might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during the proposal phase.",
                  },
                  {
                    question:
                      "Can you work on urgent projects with tight deadlines?",
                    answer:
                      "We can accommodate rush projects depending on our current workload. Rush fees may apply for expedited timelines to ensure we can dedicate the necessary resources.",
                  },
                  {
                    question: "How do you handle project delays?",
                    answer:
                      "We build buffer time into our project plans to account for revisions and unforeseen challenges. We communicate proactively if delays occur and work collaboratively to adjust timelines as needed.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-black/60 border border-red-900 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-red-200/70">{faq.answer}</p>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-lg text-red-200/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our UI/UX design services can help your business
              achieve its goals through exceptional user experiences.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8"
              onClick={() => router.push("/contact")}
            >
              Schedule a Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesignPage;
