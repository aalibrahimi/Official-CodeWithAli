"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Code,
  Users,
  Award,
  Zap,
  Clock,
  Rocket,
  Send,
  CheckCircle,
  Coffee,
  Globe,
  BarChart,
  Heart,
} from "lucide-react";
import { TechIcon } from "../../components/tech-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


// Team members data
const teamMembers = [
  {
    name: "Ali Ibrahim",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with 8+ years of experience building web applications and mentoring junior developers.",
    image: "/team/ali.jpg", // Replace with actual image path
  },
  {
    name: "Maya Rodriguez",
    role: "UI/UX Designer",
    bio: "Creative designer with a passion for creating intuitive, user-friendly interfaces that deliver exceptional user experiences.",
    image: "/team/maya.jpg",
  },
  {
    name: "David Chen",
    role: "Backend Specialist",
    bio: "Expert in scalable architecture and database optimization with experience at leading tech companies.",
    image: "/team/david.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    bio: "Certified project manager who ensures smooth delivery and clear communication throughout the development process.",
    image: "/team/sarah.jpg",
  },
];

// Company values
const values = [
  {
    title: "Quality",
    description:
      "We never compromise on code quality or user experience. Every project receives our full attention to detail.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "We stay at the forefront of technology, constantly learning and implementing the latest best practices.",
    icon: Zap,
  },
  {
    title: "Reliability",
    description:
      "We deliver on our promises, meeting deadlines and keeping our clients informed throughout the process.",
    icon: Clock,
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients, valuing their input and ensuring their vision comes to life.",
    icon: Users,
  },
];

// Tech stack - corrected to use consistent object structure
const technologies = [
  { name: "React", logo: "react" },
  { name: "Next.js", logo: "nextjs" },
  { name: "Node.js", logo: "nodejs" },
  { name: "Tauri", logo: "tauri" },
  { name: "Supabase", logo: "supabase" },
  { name: "Stripe", logo: "stripe" },
  { name: "Figma", logo: "figma" },
  { name: "Electron", logo: "electron" },
  { name: "TypeScript", logo: "typescript" },
  { name: "TailwindCSS", logo: "tailwindcss" },
  { name: "MongoDB", logo: "mongodb" },
  { name: "AWS", logo: "aws" },
  { name: "Firebase", logo: "firebase" },
];

// Company stats
const stats = [
  { value: "50+", label: "Completed Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Coverage" },
  { value: "100%", label: "On-time Delivery" },
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              ABOUT US
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Are Passionate About
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
                Building Digital Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-200/80 mb-8">
              More than just developers, we're partners in your digital journey,
              committed to transforming your ideas into powerful digital
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-red-950/5 border-y border-red-950/20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-red-200/80 leading-relaxed">
                At CodeWithAli, our mission is to empower businesses and
                individuals through thoughtfully crafted digital solutions. We
                believe technology should be both powerful and accessible,
                driving real results while providing exceptional user
                experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                <Globe className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Global Reach, Personal Touch
                </h3>
                <p className="text-red-200/70">
                  We work with clients worldwide but maintain the personalized
                  attention of a boutique agency. Every project receives our
                  full dedication regardless of size.
                </p>
              </div>
              <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                <BarChart className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Results-Driven Development
                </h3>
                <p className="text-red-200/70">
                  We measure our success by your success. Our solutions are
                  designed to deliver measurable results, helping you achieve
                  your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/60 border border-red-900 p-6 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-red-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                OUR STORY
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Started
              </h2>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 bg-black/60 border border-red-900 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center">
                    <Rocket className="h-16 w-16 text-red-500/60" />
                  </div>
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    From Passion to Purpose
                  </h3>
                  <p className="text-red-200/70 mb-4">
                    CodeWithAli began in 2019 when our founder Ali identified a
                    gap in the market: businesses needed technical excellence
                    combined with strategic guidance. What started as freelance
                    consulting quickly grew as clients recognized our unique
                    approach.
                  </p>
                  <p className="text-red-200/70">
                    Today, we've evolved into a full-service digital agency,
                    maintaining our core values while expanding our capabilities
                    to serve a diverse range of clients.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 md:order-1 order-2">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Growth Philosophy
                  </h3>
                  <p className="text-red-200/70 mb-4">
                    We believe in sustainable growth—both for our clients and
                    ourselves. Rather than scaling rapidly at the expense of
                    quality, we've carefully built our team with specialized
                    experts who share our dedication to excellence.
                  </p>
                  <p className="text-red-200/70">
                    This approach allows us to maintain close relationships with
                    our clients while delivering the high-caliber work they've
                    come to expect from us.
                  </p>
                </div>
                <div className="md:col-span-5 md:order-2 order-1 bg-black/60 border border-red-900 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-red-500/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Alternative replacement: Client Success Stories section */}
      <section className="py-20 bg-red-950/5 border-y border-red-950/20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              SUCCESS STORIES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Clients We've Helped Succeed
            </h2>
            <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
              Real results from businesses that trusted us with their digital
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/60 border border-red-900 rounded-xl p-8 relative">
              <div className="absolute -top-5 -left-5">
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

              <div className="mb-6 pt-4">
                <p className="text-lg text-red-200/80 italic">
                  "CodeWithAli transformed our e-commerce platform, resulting in
                  a 45% increase in conversions and a significant improvement in
                  user satisfaction. Their technical expertise combined with
                  strategic insights made all the difference."
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-red-500/60" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Emma Thompson</h4>
                  <p className="text-red-400/70 text-sm">CTO, StyleHub</p>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-red-900 rounded-xl p-8 relative">
              <div className="absolute -top-5 -left-5">
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

              <div className="mb-6 pt-4">
                <p className="text-lg text-red-200/80 italic">
                  "Working with CodeWithAli on our business dashboard has been
                  game-changing. Their team quickly understood our complex
                  requirements and delivered a solution that has streamlined our
                  operations and improved decision-making."
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-red-500/60" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Michael Rodriguez</h4>
                  <p className="text-red-400/70 text-sm">
                    Founder, DataVision Inc.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-red-900 rounded-xl p-8 relative">
              <div className="absolute -top-5 -left-5">
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

              <div className="mb-6 pt-4">
                <p className="text-lg text-red-200/80 italic">
                  "The mobile app CodeWithAli developed for our healthcare
                  service has received outstanding feedback from users. Their
                  attention to security and user experience shows in every
                  aspect of the finished product."
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-red-500/60" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Dr. James Wilson</h4>
                  <p className="text-red-400/70 text-sm">
                    Director, HealthConnect
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-red-900 rounded-xl p-8 relative">
              <div className="absolute -top-5 -left-5">
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

              <div className="mb-6 pt-4">
                <p className="text-lg text-red-200/80 italic">
                  "As a startup, we needed a partner who could guide us through
                  the technical challenges of launching our platform.
                  CodeWithAli provided not just development expertise but
                  valuable strategic input that helped shape our product."
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-red-500/60" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Sophia Chen</h4>
                  <p className="text-red-400/70 text-sm">
                    Co-founder, NextLevel Tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Alternative replacement: Detailed Process Section */}
      <section className="py-20 bg-red-950/5 border-y border-red-950/20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              OUR PROCESS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Transform Ideas Into Reality
            </h2>
            <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
              Our proven development methodology ensures clear communication and
              outstanding results for every project.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-800/30 -translate-x-1/2"></div>

            {/* Process Steps */}
            <div className="space-y-16 relative z-10">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right">
                  <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Discovery & Planning
                    </h3>
                    <p className="text-red-200/70">
                      We begin by understanding your business, goals, and
                      requirements through in-depth consultations. This phase
                      includes:
                    </p>
                    <ul className="list-disc text-red-200/70 pl-5 md:pl-0 md:list-none mt-3 space-y-2">
                      <li className="md:text-right">Stakeholder interviews</li>
                      <li className="md:text-right">Business goal alignment</li>
                      <li className="md:text-right">
                        Technical requirement gathering
                      </li>
                      <li className="md:text-right">
                        Project scope definition
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex justify-start items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center -ml-7">
                    <span className="text-xl font-bold text-white">01</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center -mr-7">
                    <span className="text-xl font-bold text-white">02</span>
                  </div>
                </div>

                <div>
                  <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Design & Strategy
                    </h3>
                    <p className="text-red-200/70">
                      Our design team creates wireframes and visual mockups that
                      align with your brand identity while our strategists plan
                      the technical approach:
                    </p>
                    <ul className="list-disc text-red-200/70 pl-5 mt-3 space-y-2">
                      <li>UX/UI design and wireframing</li>
                      <li>Technical architecture planning</li>
                      <li>Database structure design</li>
                      <li>Technology stack selection</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right">
                  <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Development & Testing
                    </h3>
                    <p className="text-red-200/70">
                      Our developers build your solution with clean code and
                      cutting-edge technologies while ensuring quality through:
                    </p>
                    <ul className="list-disc text-red-200/70 pl-5 md:pl-0 md:list-none mt-3 space-y-2">
                      <li className="md:text-right">
                        Agile development methodology
                      </li>
                      <li className="md:text-right">
                        Regular progress updates
                      </li>
                      <li className="md:text-right">
                        Comprehensive testing (unit, integration, UI)
                      </li>
                      <li className="md:text-right">
                        Performance optimization
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex justify-start items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center -ml-7">
                    <span className="text-xl font-bold text-white">03</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center -mr-7">
                    <span className="text-xl font-bold text-white">04</span>
                  </div>
                </div>

                <div>
                  <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Deployment & Support
                    </h3>
                    <p className="text-red-200/70">
                      We launch your project, provide training, and offer
                      ongoing support through:
                    </p>
                    <ul className="list-disc text-red-200/70 pl-5 mt-3 space-y-2">
                      <li>Smooth deployment procedures</li>
                      <li>Comprehensive documentation</li>
                      <li>User training and knowledge transfer</li>
                      <li>Ongoing maintenance and support options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-red-950/5 border-y border-red-950/20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">OUR TEAM</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Experts Behind Our Success
            </h2>
            <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
              Our talented team brings together diverse skills and experiences to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-black/60 border-red-900 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="h-16 w-16 text-red-500/40" />
                    </div>
                    In a real implementation, you would use next/image here
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <div className="text-red-400 text-sm mb-3">{member.role}</div>
                    <p className="text-red-200/70 text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-40 left-40 w-80 h-80 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              OUR VALUES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Principles That Guide Our Work
            </h2>
            <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
              Our core values shape everything we do, from how we work with
              clients to how we develop solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-black/60 border border-red-900 rounded-xl p-6 flex"
                >
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                      <ValueIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-red-200/70">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section - Corrected */}
      <section className="py-20 bg-red-950/5 border-y border-red-950/20">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
    <div className="text-center mb-16">
      <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
        OUR EXPERTISE
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Technologies We Master
      </h2>
      <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
        We leverage cutting-edge technologies to build scalable,
        high-performance solutions.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-7">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="bg-black/60 border border-transparent hover:border-red-900 p-3 rounded-xl flex flex-col items-center text-center transition-colors duration-200"
        >
          <div className="w-11 h-11 bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg flex items-center justify-center mb-3">
            <TechIcon name={tech.logo} />
          </div>
          <span className="text-red-200">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-red-200/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our
              expertise and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                  text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8"
                onClick={() => router.push("/contact")}
              >
                Get in Touch
                <Send className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-800/30 text-red-400 bg-red-950/20 hover:bg-red-950/30 hover:text-white px-8"
                onClick={() => router.push("/services")}
              >
                Explore Our Services
              </Button>
            </div>

            <div className="flex items-center justify-center mt-8 text-red-200/60">
              <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-sm">No Obligation Consultation</span>
              <span className="mx-4">•</span>
              <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-sm">Transparent Process</span>
              <span className="mx-4">•</span>
              <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-sm">Ongoing Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}