"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";
import {
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from '@/MyComponents/tech-icons'
import Link from "next/link";
import { useTranslations } from "next-intl";


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



// Tech stack - corrected to use consistent object structure
const technologies = [
  { name: "React", logo: "react", url: "https://react.dev/" },
  { name: "Next.js", logo: "nextjs", url: "https://nextjs.org/" },
  { name: "Node.js", logo: "nodejs", url: "https://nodejs.org/" },
  { name: "Tauri", logo: "tauri", url: "https://tauri.app/" },
  { name: "Supabase", logo: "supabase", url: "https://supabase.com/" },
  { name: "Stripe", logo: "stripe", url: "https://stripe.com/" },
  { name: "Figma", logo: "figma", url: "https://www.figma.com/" },
  { name: "Electron", logo: "electron", url: "https://www.electronjs.org/" },
  { name: "TypeScript", logo: "typescript", url: "https://www.typescriptlang.org/" },
  { name: "TailwindCSS", logo: "tailwindcss", url: "https://tailwindcss.com/" },
  { name: "MongoDB", logo: "mongodb", url: "https://www.mongodb.com/" },
  { name: "AWS", logo: "aws", url: "https://aws.amazon.com/" },
  { name: "Firebase", logo: "firebase", url: "https://firebase.google.com/" },
];



export default function AboutPage() {
  const router = useRouter();
  const t = useTranslations("About")

    // Company stats
  const stats = [
    { value: "50+", label: t("mission.stats.1") },
    { value: "98%", label: t("mission.stats.2") },
    { value: "24/7", label: t("mission.stats.3") },
    { value: "100%", label: t("mission.stats.4") },
  ];

  // Company values
const values = [
  {
    title: t("values.title.h1"),
    description: t("values.title.d1"),
    icon: Award,
  },
  {
    title: t("values.title.h2"),
    description: t("values.title.d2"),
    icon: Zap,
  },
  {
    title: t("values.title.h3"),
    description: t("values.title.d3"),
    icon: Clock,
  },
  {
    title: t("values.title.h4"),
    description: t("values.title.d4"),
    icon: Users,
  },
];

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
               {t("badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t("title")}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
              {t("sub")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-200/80 mb-8">
             {t("desc")}
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
                {t("mission.header")}
               </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
              {t("mission.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                <Globe className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                {t("mission.sub")}
                </h3>
                <p className="text-gray-300">
                {t("mission.subDesc")}
                </p>
              </div>
              <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                <BarChart className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                {t("mission.sub2")}
                </h3>
                <p className="text-gray-300">
                 {t('mission.subDesc2')}
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
                {t("story.badge")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("story.title")}
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
                  {t("story.header")}
                  </h3>
                  <p className="text-red-200/70 mb-4">
                  {t("story.sub")}
                  </p>
                  <p className="text-red-200/70">
                  {t("story.subDesc")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 md:order-1 order-2">
                  <h3 className="text-2xl font-bold text-white mb-4">
                  {t("story.header2")}
                  </h3>
                  <p className="text-red-200/70 mb-4">
                  {t("story.sub2")}
                  </p>
                  <p className="text-red-200/70">
                  {t("story.subDesc2")}
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
              {t("mission.story.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("mission.story.header")}
            </h2>
            <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
             {t("mission.story.title")}
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
                  {t("mission.quots.1")}
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-red-500/60" />
                </div>
                <div>
                  <h4 className="font-bold text-white"> {t("mission.author.1")} </h4>
                  <p className="text-red-400/70 text-sm">  {t("mission.job.1")}</p>
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
                {t("mission.quots.2")}
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-red-500/60" />
                </div>
                <div>
                  <h4 className="font-bold text-white"> {t("mission.author.2")}</h4>
                  <p className="text-red-400/70 text-sm">
                  {t("mission.job.2")}
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
                {t("mission.quots.3")}
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-red-500/60" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t("mission.author.3")}</h4>
                  <p className="text-red-400/70 text-sm">
                  {t("mission.job.3")}
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
                {t("mission.quots.4")}
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950/40 to-red-900/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-red-500/60" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t("mission.author.4")}</h4>
                  <p className="text-red-400/70 text-sm">
                  {t("mission.job.4")}
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
              {t("process.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("process.header")}
            </h2>
            <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
            {t("process.sub")}
            </p>
          </div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-800/30 -translate-x-1/2"></div>

            {/* Process Steps */}
            <div className="space-y-16 relative z-10">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:mr-5">
                  <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-3">
                    {t("process.cards.h1")}
                    </h3>
                    <p className="text-amber-50">
                    {t("process.cards.desc1")}
                    </p>
                    <ul className="list-disc text-red-300 pl-5 md:pl-0 md:list-none mt-3 space-y-2">
                      <li className="md:text-right">{t("process.cards.firstList.li1")}</li>
                      <li className="md:text-right">{t("process.cards.firstList.li2")}</li>
                      <li className="md:text-right">
                      {t("process.cards.firstList.li3")}
                      </li>
                      <li className="md:text-right">
                      {t("process.cards.firstList.li4")}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex justify-start items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center -ml-11">
                    <span className="text-xl font-bold text-white">01</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center -mr-11">
                    <span className="text-xl font-bold text-white">02</span>
                  </div>
                </div>

                <div className="md:ml-5">
                  <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-3">
                    {t("process.cards.h2")}
                    </h3>
                    <p className="text-amber-50">
                    {t("process.cards.desc2")}
                     
                    </p>
                    <ul className="list-disc text-red-300 pl-5 mt-3 space-y-2">
                      {/* {t("process.cards.firstList.li1")} */}
                      <li>{t("process.cards.secondList.li1")}</li>
                      <li>{t("process.cards.secondList.li2")}</li>
                      <li>{t("process.cards.secondList.li3")}</li>
                      <li>{t("process.cards.secondList.li4")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:mr-5">
                  <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-3">
                    {t("process.cards.h3")}
                      
                    </h3>
                    <p className="text-amber-50">
                    {t("process.cards.desc3")}
                    </p>
                    <ul className="list-disc text-red-300 pl-5 md:pl-0 md:list-none mt-3 space-y-2">
                      <li className="md:text-right">
                      {t("process.cards.thirdList.li1")}
                      </li>
                      <li className="md:text-right">
                      {t("process.cards.thirdList.li2")}
                      </li>
                      <li className="md:text-right">
                      {t("process.cards.thirdList.li3")}
                      </li>
                      <li className="md:text-right">
                      {t("process.cards.thirdList.li4")}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex justify-start items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center -ml-11">
                    <span className="text-xl font-bold text-white">03</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center -mr-11">
                    <span className="text-xl font-bold text-white">04</span>
                  </div>
                </div>

                <div className="md:ml-5">
                  <div className="bg-black/60 border border-red-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-3">
                    {t("process.cards.h4")}
                    </h3>
                    <p className="text-amber-50">
                     {t("process.cards.desc4")}
                    </p>
                    <ul className="list-disc text-red-300 pl-5 mt-3 space-y-2">
                      <li> {t("process.cards.fourthList.li1")}  </li>
                      <li>{t("process.cards.fourthList.li2")}</li>
                      <li>{t("process.cards.fourthList.li3")}</li>
                      <li>{t("process.cards.fourthList.li4")}</li>
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
              {t("values.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("values.header")}
            </h2>
            <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
            {t("values.sub")}
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
       {t("tech.badge")}
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
      {t("tech.header")}
      </h2>
      <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
      {t("tech.sub")}
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-7">
      {technologies.map((tech, index) => (
        <Link
          key={index}
          href={tech.url}
          target="_blank"
          className="bg-black/60 border border-transparent hover:border-red-900 p-3 rounded-xl flex flex-col items-center text-center transition-colors duration-200"
        >
          <div className="w-11 h-11 bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg flex items-center justify-center mb-3">
            <TechIcon name={tech.logo} />
          </div>
          <span className="text-wwhite">{tech.name}</span>
        </Link>
      ))}
    </div>
  </div>
</section>

     {/* CTA Section */}
<section className="py-12 md:py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-6 md:p-10 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
        {t("cta.title")}
      </h2>
      <p className="text-base md:text-lg text-red-200/70 mb-6 md:mb-8 max-w-2xl mx-auto">
      {t("cta.header")}
      </p>
      <div className="flex flex-col gap-3 justify-center">
        <Button
          size="default"
          className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
            text-white border border-red-800/30 shadow-lg shadow-red-950/20"
          onClick={() => router.push("/contact")}
        >
         {t("cta.button")}
          <Send className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="default"
          className="w-full border-red-800/30 text-red-400 bg-red-950/20 hover:bg-red-950/30 hover:text-white"
          onClick={() => router.push("/services")}
        >
          {t("cta.button2")}
        </Button>
      </div>

      {/* Features list - stacked on mobile */}
      <div className="mt-6 md:mt-8 space-y-3 md:space-y-0 md:flex md:items-center md:justify-center text-red-200/60">
        <div className="flex items-center justify-center">
          <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
          <span className="text-xs md:text-sm">{t("cta.li")}</span>
        </div>
        
        <span className="hidden md:inline mx-4">•</span>
        
        <div className="flex items-center justify-center">
          <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
          <span className="text-xs md:text-sm">{t("cta.li2")}</span>
        </div>
        
        <span className="hidden md:inline mx-4">•</span>
        
        <div className="flex items-center justify-center">
          <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
          <span className="text-xs md:text-sm">{t("cta.li3")}</span>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

function useTranslation(arg0: string) {
  throw new Error("Function not implemented.");
}
