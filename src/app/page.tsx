"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Code,
  Smartphone,
  Layers,
  Server,
  Search,
  BriefcaseBusiness,
  ShoppingBag,
  School,
  MoveUpRight,
  Send,
  CheckCircle,
  Users,
  Palette,
  ArrowRight,
  Menu,
  X,
  Coffee,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


// Animation variants with reduced intensity for mobile
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
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

// Services data
const services = [
  {
    title: "Website Development",
    description:
      "Custom-designed responsive websites optimized for performance and conversions",
    icon: Code,
    color: "from-red-600 to-red-800",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    color: "from-red-700 to-red-900",
  },
  {
    title: "UI/UX Design",
    description:
      "User-focused designs that enhance engagement and simplify interactions",
    icon: Palette,
    color: "from-red-800 to-red-950",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Fully-featured online stores with secure payment processing and inventory management",
    icon: ShoppingBag,
    color: "from-red-600 to-red-800",
  },
  {
    title: "SEO Optimization",
    description:
      "Data-driven strategies to improve visibility and ranking in search engines",
    icon: Search,
    color: "from-red-700 to-red-900",
  },
  {
    title: "Web Hosting & Maintenance",
    description:
      "Reliable hosting services with regular updates, backups, and security monitoring",
    icon: Server,
    color: "from-red-800 to-red-950",
  },
];

// Client industries
const industries = [
  { name: "Business", icon: BriefcaseBusiness },
  { name: "E-commerce", icon: ShoppingBag },
  { name: "Education", icon: School },
  { name: "Healthcare", icon: MessageSquare },
  { name: "Real Estate", icon: Coffee },
  { name: "Technology", icon: Server },
];

// Portfolio projects
const portfolioProjects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/portfolio-1.jpg",
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile Development",
    image: "/portfolio-2.jpg",
  },
  {
    title: "Corporate Website",
    category: "UI/UX Design",
    image: "/portfolio-3.jpg",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Alex Thompson",
    position: "CEO, TechStart Inc.",
    content:
      "They delivered our company website ahead of schedule and beyond our expectations. Their attention to detail and responsive design expertise made all the difference.",
  },
  {
    name: "Sarah Chen",
    position: "Marketing Director, StyleShop",
    content:
      "Our e-commerce site has seen a 45% increase in conversions since the redesign. Their team understood our brand and implemented exactly what we needed.",
  },
  {
    name: "Marcus Johnson",
    position: "Founder, HealthApp",
    content:
      "From concept to launch, they guided us through the entire app development process with expertise and professionalism. The final product exceeded our vision.",
  },
];

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check if component is mounted and check for reduced motion preference
  useEffect(() => {
    setIsMounted(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleMediaChange = () => {
      setIsReducedMotion(mediaQuery.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // Auto rotate testimonials with optimization for hidden/inactive tabs
  useEffect(() => {
    let interval: any;
    
    if (isMounted && document.visibilityState === 'visible') {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        interval = setInterval(() => {
          setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
      } else {
        clearInterval(interval);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMounted]);

  // Apply conditional animation based on device capability and user preference
  const getAnimationProps = (delay = 0) => {
    if (!isMounted || isReducedMotion) {
      return {}; // No animation on SSR or when reduced motion is preferred
    }
    
    return {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.3, delay }
    };
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-10 pb-20 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="md:pr-8"
              {...getAnimationProps()}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Bringing Your
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
                  Digital Vision to Life
                </span>
              </h1>
              <p className="text-lg md:text-xl text-red-200/80 mb-8 max-w-xl">
                We design and develop stunning websites and powerful
                applications that elevate your brand and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                      text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8 w-full sm:w-auto"
                  >
                    Start Your Project
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-800/30 text-red-400 bg-red-950/20 hover:bg-red-950/30 hover:text-white px-8 w-full sm:w-auto"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side Graphics - only rendered on larger screens */}
            {isMounted && (
              <motion.div
                {...getAnimationProps(0.2)}
                className="hidden lg:block relative"
              >
                <div className="relative bg-black/60 border border-red-900 rounded-xl overflow-hidden shadow-2xl shadow-red-950/20 p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Mock designs */}
                    <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                        <Layers className="h-12 w-12 text-red-500/60" />
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                        <Code className="h-12 w-12 text-red-500/60" />
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                        <Smartphone className="h-12 w-12 text-red-500/60" />
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                        <ShoppingBag className="h-12 w-12 text-red-500/60" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 p-4 bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-32 h-3 bg-red-800/30 rounded-full"></div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                        <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                        <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-red-800/30 rounded-full w-full"></div>
                      <div className="h-2 bg-red-800/30 rounded-full w-5/6"></div>
                      <div className="h-2 bg-red-800/30 rounded-full w-4/6"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-800/10 rounded-full blur-3xl"></div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-black/80 border-y border-red-950/20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <p className="text-red-300/60 text-sm uppercase tracking-wider">
              Trusted by businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                {...getAnimationProps(index * 0.05)}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-red-950/20 rounded-lg flex items-center justify-center mb-3">
                  <industry.icon className="h-6 w-6 text-red-500/70" />
                </div>
                <span className="text-red-200/60 text-sm">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-24 relative overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
          <div className="text-center mb-16">
            <motion.div
              {...getAnimationProps()}
            >
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                OUR SERVICES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Solutions for Your Digital Needs
              </h2>
              <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
                From websites to mobile apps, we create custom digital solutions
                tailored to your business goals and user needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...getAnimationProps(index * 0.05)}
              >
                <Card className="bg-black/60 border-red-900 backdrop-blur-sm h-full overflow-hidden group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-5">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 transform group-hover:scale-110 transition-transform`}
                        style={{ willChange: "transform" }}
                      >
                        <service.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-red-200/60">{service.description}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <Button
                        variant="ghost"
                        className="p-0 text-red-400 hover:text-red-300 hover:bg-transparent group"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Display */}
      <section id="work" className="py-20 md:py-24 bg-red-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.div
              {...getAnimationProps()}
            >
              <Badge className="bg-red-900/50 text-red-300 border-transparent mb-4 px-3 py-1">
                OUR WORK
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Recent Projects
              </h2>
              <p className="text-red-200 text-lg max-w-2xl mx-auto">
                Explore some of our latest work for clients across different
                industries.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                {...getAnimationProps(index * 0.1)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-red-950/20">
                  {/* Project Image */}
                  <div className="w-full h-full bg-black/80 border-2 border-red-800/30 flex items-center justify-center">
                    <p className="text-red-200/70">Project Image Placeholder</p>
                  </div>

                  {/* Hover Overlay - preloaded with opacity-0 for better performance */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-red-800/80 to-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ willChange: "opacity" }}
                  >
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-red-100 text-lg mb-6">
                        {project.category}
                      </p>
                      <Link href={`/portfolio/${index + 1}`}>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-2 border-red/60 text-white bg-red-700/50 px-6 py-5 hover:bg-black hover:text-white text-base font-medium"
                        >
                          View Project
                          <MoveUpRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <Badge className="bg-red-800/30 text-red-300 border-transparent text-base py-1 px-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mt-3">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/portfolio">
              <Button
                className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                text-white border-2 border-red-800/40 shadow-lg shadow-red-950/20 px-8 py-6 text-lg font-medium"
              >
                View All Projects
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -top-40 left-40 w-80 h-80 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              {...getAnimationProps()}
            >
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                OUR PROCESS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Work
              </h2>
              <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
                Our streamlined process ensures clear communication and
                outstanding results for every project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-6">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We learn about your business, goals, and requirements through in-depth consultations.",
                icon: Search,
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Our designers create wireframes and visual mockups that align with your brand identity.",
                icon: Palette,
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our developers build your solution with clean code and cutting-edge technologies.",
                icon: Code,
              },
              {
                number: "04",
                title: "Deployment",
                description:
                  "We launch your project, provide training, and offer ongoing support as needed.",
                icon: ShoppingBag,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                {...getAnimationProps(index * 0.1)}
                className="relative"
              >
                <div className="bg-black/60 border border-red-900 rounded-xl p-6 h-full">
                  <div className="absolute -top-5 -left-2">
                    <span className="text-5xl font-bold text-red-950/70">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-6">
                    <div className="mb-4 flex items-center">
                      <step.icon className="w-6 h-6 text-red-500 mr-3" />
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-red-200/60">{step.description}</p>
                  </div>
                </div>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform translate-x-full">
                    <ArrowRight className="w-6 h-6 text-red-700/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 md:py-24 relative overflow-hidden bg-red-950/10"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              {...getAnimationProps()}
            >
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                TESTIMONIALS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our Clients Say
              </h2>
              <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
                Don't just take our word for it – hear from the businesses we've
                helped succeed.
              </p>
            </motion.div>
          </div>

          <div className="relative min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-black/60 border border-red-900 rounded-xl p-8 md:p-10"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3 6.2H6.8C5.8 6.2 5 7 5 8V12.5C5 13.5 5.8 14.3 6.8 14.3H9.5V16.1C9.5 17 10.6 17.5 11.3 16.8L13.9 14.2V8C13.9 7 13.1 6.2 12.1 6.2H11.3Z"
                        fill="rgba(220, 38, 38, 0.7)"
                      />
                      <path
                        d="M18 6.2H16V11.4L14.7 12.7V14.9L17.2 12.4C17.7 11.9 18 11.2 18 10.5V8C18 7 17.2 6.2 16.2 6.2H16"
                        fill="rgba(220, 38, 38, 0.7)"
                      />
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl text-center mb-8">
                    &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                  </p>
                  <div className="text-center">
                    <div className="font-bold text-white">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-red-400/70 text-sm">
                      {testimonials[activeTestimonial].position}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial
                      ? "bg-red-600"
                      : "bg-red-900/30 hover:bg-red-800/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              {...getAnimationProps()}
            >
              <Badge className="bg-red-900/50 text-red-300 border-transparent mb-4 px-3 py-1">
                CONTACT US
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-red-200 max-w-2xl mx-auto">
                Tell us about your project and we'll get back to you within 24
                hours with a free consultation.
              </p>
            </motion.div>

            <motion.div
              className="bg-black border-2 border-red-800/40 rounded-xl p-8 md:p-10 shadow-xl shadow-red-950/10"
              {...getAnimationProps(0.1)}
            >
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-red-200 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      className="bg-red-950/20 border-red-800/40 text-white focus:border-red-600 h-12 text-base w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-red-200 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-red-950/20 border-red-800/40 text-white focus:border-red-600 h-12 text-base w-full"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-red-200 font-medium mb-2"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        className="w-full bg-red-950/20 border border-red-800/40 text-white focus:border-red-600 rounded-md h-12 text-base px-3"
                      >
                        <option value="" className="bg-black">
                          Select a service
                        </option>
                        <option value="website" className="bg-black">
                          Website Development
                        </option>
                        <option value="app" className="bg-black">
                          Mobile App Development
                        </option>
                        <option value="design" className="bg-black">
                          UI/UX Design
                        </option>
                        <option value="ecommerce" className="bg-black">
                          E-commerce Solutions
                        </option>
                        <option value="seo" className="bg-black">
                          SEO Optimization
                        </option>
                        <option value="hosting" className="bg-black">
                          Web Hosting & Maintenance
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-red-200 font-medium mb-2"
                    >
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      className="bg-red-950/20 border-red-800/40 text-white focus:border-red-600 h-40 text-base w-full"
                      placeholder="Tell us about your project requirements and goals..."
                    />
                  </div>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Button
                    className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 
                    text-white border border-red-700/40 shadow-lg shadow-red-950/20 px-10 py-6 text-lg font-medium"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-red-950/10 to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-8 md:p-12 text-center"
            {...getAnimationProps()}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg text-red-200/70 mb-8 max-w-2xl mx-auto">
              Whether you need a website, mobile app, or complete digital
              strategy, we're here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                    text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8 w-full sm:w-auto"
                >
                  Start Your Project
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-800/30 text-red-400 bg-red-950/20 hover:bg-red-950/30 hover:text-white px-8 w-full sm:w-auto"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center mt-8 text-red-200/60">
              <div className="flex items-center mr-4 mb-2">
                <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
                <span className="text-sm">Expert Team</span>
              </div>
              <div className="flex items-center mb-2">
                <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
                <span className="text-sm">Ongoing Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;