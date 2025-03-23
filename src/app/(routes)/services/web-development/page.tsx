"use client";
import React from "react";
import { motion } from "motion/react";
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
  Briefcase,
  BarChart,
  Search,
  Settings,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import GradientText from "@/app/components/gradientText";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Process steps
const processSteps = [
  {
    title: "Discovery and Requirements",
    description:
      "We begin by understanding your business goals, target audience, and specific requirements through in-depth consultations. This phase includes competitor analysis, content planning, and technical specifications.",
    icon: Search,
  },
  {
    title: "Planning and Architecture",
    description:
      "We create a detailed project plan including site architecture, wireframes, and technical specifications that will guide the development process.",
    icon: Layers,
  },
  {
    title: "Design",
    description:
      "Our designers create visual mockups and prototypes that align with your brand identity while ensuring an optimal user experience.",
    icon: Palette,
  },
  {
    title: "Development",
    description:
      "Our developers build your website with clean, efficient code using modern frameworks and best practices for performance and security.",
    icon: Code,
  },
  {
    title: "Testing and QA",
    description:
      "We rigorously test your website across devices and browsers to ensure functionality, performance, and accessibility standards are met.",
    icon: Settings,
  },
  {
    title: "Launch and Training",
    description:
      "We deploy your website to production servers and provide comprehensive training on content management and maintenance.",
    icon: Zap,
  },
  {
    title: "Maintenance and Support",
    description:
      "We offer ongoing support, regular updates, performance monitoring, and continuous improvement to keep your website secure and effective.",
    icon: RefreshCw,
  },
];

// Technologies we use
const technologies = [
  {
    name: "React/Next.js",
    description:
      "For building interactive user interfaces with optimal performance",
  },
  {
    name: "WordPress",
    description: "For content-focused websites with powerful CMS capabilities",
  },
  {
    name: "Shopify",
    description: "For e-commerce websites with robust product management",
  },
  {
    name: "Tailwind CSS",
    description: "For rapid, responsive design implementation",
  },
  { name: "Node.js", description: "For scalable backend development" },
  {
    name: "GraphQL",
    description: "For efficient data querying and management",
  },
  {
    name: "AWS/Vercel",
    description: "For reliable, scalable hosting solutions",
  },
];

// Case studies (simplified for this example)
const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    description:
      "Revamped an outdated online store, resulting in 45% increase in conversions and 60% improved page load times.",
    industry: "Retail",
    image: "/portfolio-1.jpg",
  },
  {
    title: "Corporate Website Relaunch",
    description:
      "Developed a modern, responsive website that increased lead generation by 38% and reduced bounce rate by 25%.",
    industry: "Financial Services",
    image: "/portfolio-2.jpg",
  },
  {
    title: "SaaS Product Website",
    description:
      "Created a conversion-focused website that helped the client increase trial signups by 52% within the first month.",
    industry: "Technology",
    image: "/portfolio-3.jpg",
  },
];

const WebsiteDevelopmentPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-7/12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-pink-900/30 text-pink-400 border-transparent mb-4 px-3 py-1">
                WEBSITE DEVELOPMENT
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Custom Website Development
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-400 to-red-500 block mt-2">
                  That Drives Results
                </span>
              </h1>
              <p className="text-lg text-amber-50 mb-8">
                We design and develop stunning, high-performance websites that
                captivate your audience, establish your brand presence, and
                drive measurable business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-700 to-pink-900 hover:from-pink-600 hover:to-pink-800 
                    text-white border border-pink-800/30 shadow-lg shadow-pink-950/20 px-8"
                  onClick={() => router.push("/contact")}
                >
                  Get a Free Quote
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-pink-800/30 text-pink-400 bg-pink-950/20 hover:bg-pink-950/30 hover:text-white px-8"
                  onClick={() => router.push("/portfolio")}
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-5/12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative bg-black/60 border border-pink-900 rounded-xl overflow-hidden shadow-2xl shadow-pink-950/20 p-5">
                {/* Website mockup illustration */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-pink-950/40 to-pink-900/10 rounded-lg overflow-hidden p-4">
                  <div className="w-full h-full border-2 border-pink-500/20 rounded-md relative">
                    {/* Mockup header */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-pink-900/20 flex items-center px-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-pink-500/60"></div>
                        <div className="w-2 h-2 rounded-full bg-pink-500/40"></div>
                        <div className="w-2 h-2 rounded-full bg-pink-500/40"></div>
                      </div>
                    </div>

                    {/* Mock content */}
                    <div className="absolute top-8 left-2 right-2 bottom-2">
                      <div className="h-4 w-1/3 bg-pink-500/40 rounded mb-2"></div>
                      <div className="h-2 w-full bg-pink-500/20 rounded mb-1"></div>
                      <div className="h-2 w-full bg-pink-500/20 rounded mb-1"></div>
                      <div className="h-2 w-2/3 bg-pink-500/20 rounded mb-3"></div>
                      <div className="h-20 w-full bg-pink-500/30 rounded mb-3"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-pink-500/20 rounded"></div>
                        <div className="h-12 bg-pink-500/20 rounded"></div>
                        <div className="h-12 bg-pink-500/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-pink-900/30 text-pink-400 border-transparent mb-4 px-3 py-1">
                KEY FEATURES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#c236d2]">
                <GradientText gradient="from-pink-400 via-gray-200 to-pink-400">What Sets Our Website Development Apart</GradientText>
              </h2>
              <p className="text-amber-50 text-lg max-w-2xl mx-auto">
                We combine technical expertise with creative design to deliver
                websites that not only look great but also perform exceptionally
                well.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive Design",
                description:
                  "We build websites that adapt seamlessly to any device, ensuring an optimal user experience on desktops, tablets, and smartphones.",
                icon: Smartphone,
              },
              {
                title: "Performance Optimization",
                description:
                  "Our websites are optimized for speed with efficient code, image optimization, and caching strategies for lightning-fast load times.",
                icon: Zap,
              },
              {
                title: "SEO-Friendly Structure",
                description:
                  "We implement SEO best practices from the ground up, ensuring your website ranks well in search engines and drives organic traffic.",
                icon: Search,
              },
              {
                title: "Custom Functionality",
                description:
                  "From interactive elements to complex business logic, we develop custom features that meet your specific requirements.",
                icon: Settings,
              },
              {
                title: "Security Measures",
                description:
                  "We implement robust security practices to protect your website and user data from vulnerabilities and threats.",
                icon: ShieldCheck,
              },
              {
                title: "Content Management",
                description:
                  "We build easy-to-use content management systems that empower you to update and maintain your website without technical knowledge.",
                icon: RefreshCw,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/60 border-pink-900 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-700 to-pink-900 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-pink-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-pink-900/30 text-pink-400 border-transparent mb-4 px-3 py-1">
                OUR PROCESS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#c236d2]">
                <GradientText gradient="from-pink-400 via-gray-200 to-pink-400">End-to-End Website Development Process</GradientText>
              </h2>
              <p className="text-white/70 ext-lg max-w-2xl mx-auto">
                Our structured approach ensures a smooth development journey
                from concept to launch and beyond.
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/60 border-pink-900 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-700 to-pink-900 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <step.icon className="w-5 h-5 text-pink-500 mr-2" />
                          <h3 className="text-xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-pink-900/30 text-pink-400 border-transparent mb-4 px-3 py-1">
                TECHNOLOGIES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#c236d2]">
                <GradientText gradient="from-pink-400 via-gray-200 to-pink-400">Technologies We Utilize</GradientText>
              </h2>
              <p className="text-pink-200/60 text-lg max-w-2xl mx-auto">
                We leverage cutting-edge technologies to build modern,
                high-performance websites.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/60 border border-pink-900 rounded-lg p-6"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-pink-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-pink-900/30 text-pink-400 border-transparent mb-4 px-3 py-1">
                CASE STUDIES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#c236d2]">
                <GradientText gradient="from-pink-400 via-gray-200 to-pink-400">Success Stories</GradientText>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Explore some of our recent website development projects and the
                results we've achieved for our clients.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-pink-950/20 mb-5">
                  {/* Project Image */}
                  <div className="w-full h-full bg-black/80 border-2 border-pink-800/30 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Badge className="bg-pink-800/40 text-pink-300 border-transparent mb-3">
                        {project.industry}
                      </Badge>
                      <p className="text-white/70 text-center px-6">
                        Case Study Image: {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-800/80 to-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-6">
                      <Badge className="bg-pink-800/40 text-pink-300 border-transparent mb-3">
                        {project.industry}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-pink-100 mb-5 text-sm">
                        {project.description}
                      </p>
                      <Button
                        variant="outline"
                        className="border-2 border-pink-400/60 text-white bg-pink-700/50 hover:bg-pink-700/70"
                      >
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-pink-200/70 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-gradient-to-r from-pink-700 to-pink-900 hover:from-pink-600 hover:to-pink-800 
                text-white border border-pink-800/30 shadow-lg shadow-pink-950/20 px-8"
              onClick={() => router.push("/portfolio")}
            >
              View All Projects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Badge className="bg-pink-900/30 text-pink-400 border-transparent mb-4 px-3 py-1">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-transparent [text-shadow:_0_0px_20px_#c236d2]">
                <GradientText gradient="from-pink-400 via-gray-200 to-pink-400">Frequently Asked Questions</GradientText>
              </h2>
              <p className="text-pink-200/60 text-lg max-w-2xl mx-auto">
                Common questions about our website development process and
                services.
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-black/60 border border-pink-900">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-pink-900/30 data-[state=active]:text-white"
                >
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-pink-900/30 data-[state=active]:text-white"
                >
                  Technical
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="data-[state=active]:bg-pink-900/30 data-[state=active]:text-white"
                >
                  Pricing
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                {[
                  {
                    question: "How long does it take to develop a website?",
                    answer:
                      "The timeline varies depending on the complexity of the project. A simple website can be completed in 4-6 weeks, while more complex projects may take 8-12 weeks or longer. We'll provide a detailed timeline during the discovery and planning phase.",
                  },
                  {
                    question: "Will I be able to update the website myself?",
                    answer:
                      "Yes, we build websites with user-friendly content management systems that allow you to easily update content, add pages, and make basic design changes without technical knowledge. We also provide training to ensure you're comfortable managing your site.",
                  },
                  {
                    question: "Do you provide ongoing maintenance and support?",
                    answer:
                      "Yes, we offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. These packages include regular updates, security monitoring, backups, and technical support.",
                  },
                  {
                    question: "Will my website be mobile-friendly?",
                    answer:
                      "Absolutely. All our websites are built with responsive design, ensuring they look and function perfectly on all devices including desktops, tablets, and smartphones. This is essential for both user experience and search engine rankings.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-pink-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-pink-200/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="technical" className="space-y-4">
                {[
                  {
                    question:
                      "What technologies do you use for website development?",
                    answer:
                      "We use a range of modern technologies depending on your specific needs. For content-focused websites, we often use WordPress with custom themes. For web applications and more complex sites, we use React, Next.js, and other modern frameworks. The choice of technology is based on your requirements, budget, and long-term goals.",
                  },
                  {
                    question: "Do you optimize websites for search engines?",
                    answer:
                      "Yes, SEO best practices are integrated into our development process. We ensure proper site structure, optimized code, fast loading speeds, mobile responsiveness, and other technical SEO factors. For more comprehensive SEO services, we offer dedicated SEO packages.",
                  },
                  {
                    question:
                      "Can you integrate third-party tools and services?",
                    answer:
                      "Absolutely. We regularly integrate various third-party tools and services such as CRM systems, payment gateways, marketing automation platforms, analytics tools, and more. We ensure seamless integration and proper data flow between your website and external systems.",
                  },
                  {
                    question: "How do you ensure website security?",
                    answer:
                      "We implement multiple security measures including secure coding practices, regular updates, SSL certificates, firewall protection, and security plugins. For e-commerce sites and applications handling sensitive data, we implement additional security layers and ensure compliance with relevant regulations.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-pink-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-pink-200/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                {[
                  {
                    question: "How much does a website cost?",
                    answer:
                      "Website costs vary depending on complexity, features, and requirements. Small business websites typically range from $5,000-$15,000, while more complex sites with custom functionality range from $15,000-$50,000+. We provide detailed quotes after understanding your specific needs.",
                  },
                  {
                    question: "Do you offer payment plans?",
                    answer:
                      "Yes, we typically structure payments in milestones throughout the project. A common breakdown is 40% upfront, 30% at the design approval stage, and 30% upon project completion. For larger projects, we can create custom payment schedules.",
                  },
                  {
                    question: "What ongoing costs should I expect?",
                    answer:
                      "Ongoing costs typically include domain registration ($10-$20/year), hosting ($20-$100/month depending on traffic and requirements), and optional maintenance packages ($100-$500/month based on the level of support needed).",
                  },
                  {
                    question:
                      "Do you provide cost estimates before starting a project?",
                    answer:
                      "Yes, we provide detailed proposals and cost estimates after our initial consultation. Our proposals outline all deliverables, timelines, and costs, so you know exactly what to expect before committing to the project.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-pink-900 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-pink-950/10 to-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-pink-900 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Website Project?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can
              help you create a website that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-700 to-pink-900 hover:from-pink-600 hover:to-pink-800 
                  text-white border border-pink-800/30 shadow-lg shadow-pink-950/20 px-8"
                onClick={() => router.push("/contact")}
              >
                Get a Free Quote
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-pink-800/30 text-pink-400 bg-pink-950/20 hover:bg-pink-950/30 hover:text-white px-8"
                onClick={() => router.push("/portfolio")}
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentPage;
