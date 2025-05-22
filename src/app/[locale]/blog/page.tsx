"use client";
import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Filter,
  Mail,
  Menu,
  MessageSquare,
  Rss,
  Search,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Category {
  name: string;
  slug: string;
  count: number;
}

interface NewsletterIssue {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  url: string;
}
// Post
interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
  url: string;
  likes?: number;
  comments?: number;
  shares?: number;
}

const WeeklyTechNewsletter = () => {
  const t = useTranslations("Blog");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  //   const [isMenuOpen, setisOpenMenu] = useState(false)

  // Active Tabs
  const [activeTab, setActiveTab] = useState("newsletter");
  const categories: Category[] = [
    { name: "All", slug: "all", count: 56 },
    { name: "Web Development", slug: "web-development", count: 21 },
    { name: "AI & Machine Learning", slug: "ai-ml", count: 15 },
    { name: "Tech Trends", slug: "tech-trends", count: 11 },
    { name: "Developer Q&A", slug: "developer-qa", count: 9 },
  ];

  //   const newsletter issues

  const newsletterIssues: NewsletterIssue[] = [
    {
      id: "1",
      title: "Issue #25: The Rise of AI-Powered Development Tools",
      date: "2025-05-15",
      description:
        "This week we explore how AI tools are transforming the development workflow, from code completion to testing automation.",
      image: "/public/merch/codewithali.png",
      url: "/newsletter/25-ai-dev-tools",
    },
    {
      id: "2",
      title: "Issue #24: WebGPU - The Future of Browser Graphics",
      date: "2025-05-08",
      description:
        "Diving into WebGPU and how it's enabling high-performance 3D graphics and computation directly in the browser.",
      image: "/newsletter/issue-24.jpg",
      url: "/newsletter/24-webgpu",
    },
    {
      id: "3",
      title: "Issue #23: Micro-Frontend Architecture in 2025",
      date: "2025-05-01",
      description:
        "Best practices for implementing micro-frontend architecture in large-scale applications.",
      image: "/newsletter/issue-23.jpg",
      url: "/newsletter/23-micro-frontend",
    },
  ];

  //   Const Featured post
  const featuredPost: Post = {
    id: "1",
    title:
      "The State of Web Development in 2025: Trends, Tools, and Techniques",
    excerpt:
      "An in-depth analysis of the latest web development landscape, including the rise of AI-assisted coding, WebGPU adoption, and the evolution of JS frameworks.",
    author: {
      name: "Ali Alibrahimi",
      avatar: "codewithali.png",
      role: "Founder, CodeWithAli",
    },
    date: "2025-05-20",
    readTime: "15 min",
    category: "tech-trends",
    // if you hadn't noticed by now, IM trying to add a lot of tags/categories to optimize our SEO so that when people on the web search for these answers guess what?
    // our questions or blogs will be seen first
    tags: ["Web Development", " 2025 Trends", "JavaScript", "AI"],
    url: "/blog/state-of-the-web-development-2025",
    image: "codewithali.png",
    likes: 247,
    comments: 53,
    shares: 129,
  };

  // WWeekly Spotlights
  const weeklySpotlights: Post[] = [
    {
      id: "s1",
      title:
        "Implementing Zero-Bundle-Size React Hooks for Performance Optimization",
      excerpt:
        "Learn how to create efficient custom hooks that don't increase your bundle size while improving component performance and reusability",
      author: {
        name: "Ali Alibrahimi",
        avatar: "codewithali.png",
      },
      date: "2025-05-19",
      readTime: "11 min",
      category: " Web-Development",
      tags: ["React", "Hooks", " Performance"],
      url: "/blog/zerobundleSize",
      image: "/blog/lolzy",
      likes: 215,
      comments: 42,
    },
    {
      id: "s2",
      title:
        "AI-Assisted Code Generation: A Developer's Guide to Responsible Use",
      excerpt:
        "How to effectively integrate AI code generation tools into your workflow while maintaining code quality and security.",
      author: {
        name: "Maya Rodriguez",
        avatar: "/team/maya.jpg",
      },
      date: "2025-05-17",
      readTime: "13 min",
      category: "ai-ml",
      tags: ["AI", "Code Generation", "Ethics"],
      image: "/blog/ai-code-generation.jpg",
      url: "/blog/ai-assisted-code-generation-guide",
      likes: 189,
      comments: 37,
    },
    {
      id: "s3",
      title:
        "Sustainable Web Development: Reducing Your Application's Carbon Footprint",
      excerpt:
        "Practical techniques for building more environmentally friendly web applications through optimization and efficient resource use.",
      author: {
        name: "Sarah Johnson",
        avatar: "/team/sarah.jpg",
      },
      date: "2025-05-16",
      readTime: "9 min",
      category: "tech-trends",
      tags: ["Sustainability", "Optimization", "Green Coding"],
      image: "/blog/sustainable-web-dev.jpg",
      url: "/blog/sustainable-web-development",
      likes: 172,
      comments: 29,
    },
  ];

   const bentoPosts: Post[] = [
    {
      id: "b1",
      title: "WebGPU: Practical Examples for Real-World Applications",
      excerpt: "A hands-on guide to implementing WebGPU in your applications with practical code examples.",
      author: {
        name: "Maya Rodriguez",
        avatar: "/team/maya.jpg"
      },
      date: "2025-05-18",
      readTime: "10 min",
      category: "web-development",
      tags: ["WebGPU", "Performance", "Graphics"],
      image: "/blog/webgpu-examples.jpg",
      url: "/blog/webgpu-practical-examples",
      likes: 183,
      comments: 27
    },
    {
      id: "b2",
      title: "Building Type-Safe APIs with tRPC and Next.js",
      excerpt: "How to leverage tRPC to create fully type-safe APIs with Next.js applications.",
      author: {
        name: "David Chen",
        avatar: "/team/david.jpg"
      },
      date: "2025-05-17",
      readTime: "8 min",
      category: "web-development",
      tags: ["tRPC", "TypeScript", "Next.js", "API"],
      image: "/blog/trpc-next.jpg",
      url: "/blog/type-safe-apis-trpc-nextjs",
      likes: 142,
      comments: 19
    },
    {
      id: "b3",
      title: "AI-Powered Code Reviews: The Future of Quality Assurance",
      excerpt: "How machine learning is transforming code reviews and quality assurance processes.",
      author: {
        name: "Sarah Johnson",
        avatar: "/team/sarah.jpg"
      },
      date: "2025-05-16",
      readTime: "12 min",
      category: "ai-ml",
      tags: ["AI", "Code Review", "DevOps"],
      image: "/blog/ai-code-reviews.jpg",
      url: "/blog/ai-powered-code-reviews",
      likes: 205,
      comments: 31
    },
    {
      id: "b4",
      title: "Understanding the Atomic CSS Revolution in 2025",
      excerpt: "Why atomic CSS libraries like Tailwind have transformed frontend development.",
      author: {
        name: "Ali Ibrahim",
        avatar: "/team/ali.jpg"
      },
      date: "2025-05-15",
      readTime: "6 min",
      category: "web-development",
      tags: ["CSS", "Tailwind", "Styling"],
      image: "/blog/atomic-css.jpg",
      url: "/blog/atomic-css-revolution",
      likes: 167,
      comments: 22
    },
    {
      id: "b5",
      title: "The Rise of Edge Computing in Web Applications",
      excerpt: "How edge computing is changing the way we build and deploy modern web applications.",
      author: {
        name: "David Chen",
        avatar: "/team/david.jpg"
      },
      date: "2025-05-14",
      readTime: "9 min",
      category: "tech-trends",
      tags: ["Edge Computing", "Performance", "Architecture"],
      image: "/blog/edge-computing.jpg",
      url: "/blog/edge-computing-web-applications",
      likes: 129,
      comments: 17
    },
  ];

  //   FormatDate for display ( I love this method very quick and easy)
  const formateDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  //  NewsLetter Subscription
  //  Grab the email value from the user from the section below - first get the const for email and setEmail to an empty String
  //  Once you grab the value of the email we are going to set the setIsSubcribed to True which willl trigger a message  to show them they have subcribed to us and handle email system integeration
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 1000);
    }
  };
  return (
    <div className="bg-white dark:black text-gray-900 dark:text-white min-h-screen dark:bg-black">
      {/* mobile view ( wanna try this view rq) */}
      {/* {isMenuOpen && (
        
        <div className="flex items-center">
            <h2 className="text-xl font-serif font-bold">CodeWithAli</h2>
        </div>
    )} */}

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80  backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 ">
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl font-bold text-black dark:text-black">
              CodeWithAli
              <span className="text-red-600 dark:text-red-500 ">Weekly</span>
            </span>

            <div className="hidden lg:flex items-center space-x-3 ml-50">
              {/* Weekly Tech Button */}
              <Button
                className={`text-sm font-medium ${activeTab === "newsletter" ? "text-white  bg-red-600 hover:bg-red-700 dark:text-black" : "text-gray-700 hover:bg-red-700  hover:text-white dark:hover:text-red-700"}`}
                onClick={() => setActiveTab("newsletter")}
              >
                Weekly Tech NewsLetter
              </Button>
              {/* Blog Button */}
              <Button
                className={`text-sm font-medium ${activeTab === "blog" ? "text-white dark:text-red-500 " : "text-white hover:bg-red-700 bg-red-600 dark:text-gray-300  dark:hover:text-red-500"}`}
                onClick={() => setActiveTab("blog")}
             >
                Blog
              </Button>
              {/* Need to edit here for the dark mode background  */}
              {/* Developer Q&A */}
              <Button
                className={`text-sm font-medium ${activeTab === "qa" ? " text-white dark:text-red-500" : "text-white bg-red-600 hover:bg-red-700 dark:text-black dark:bg-white dark:hover:bg-gray-200"} `}
                onClick={() => setActiveTab("qa")}
             >
                Developer Q&A
              </Button>
              {/* Community Chat */}
              <Button
                className={`text-sm font-medium ${activeTab === "chat" ? "text-red-500 dark:text-white" : "text-white bg-red-600 hover:bg-red-700 dark:text-black dark:bg-white dark:hover:bg-gray-200"}`}
                onClick={() => setActiveCategory("chat")}
              >
                Community Chat
              </Button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block relative ml-20">
                {/* Trying to create an ACTUAL working search query holy */}
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 " />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  // what the user inputs in the input box is the value and then we set that to the setSearchQuery will I'll make later to then filter through keywords
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[180px] pl-10 bg-gray-100 dark:bg-gray-900 border-transparent rounded-full text-sm "
                />
              </div>
              {/* Bell ( maybe use it for notification subscription? ) */}
              <Button className="hidden md:flex items-center justify-center h-9 w-9 rounded-full bg-red-600 dark:red-700 dark:text-black hover:bg-red-700">
                <Bell className="h-4 w-4"></Bell>
              </Button>

              <Button className="">
                <Menu className="h-6 w-6 text-white dark:text-gray" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen pb-20">
        {/* Tab Content */}
        {activeTab === "newsletter" && (
          <>
            {/* Hero Section */}
            <section className="pt-10 pb-8 md:pt-16 md:pb-12 border-b border-gray-200 dark:border-gray-800">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto  text-center">
                  <Badge className="mb-4 bg-red-300 text-red-700 dark:bg-red-900/20 dark:text-red-400 border-transpaarent">
                    Weekly Tech Newsletter
                  </Badge>
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-black mb-6 leading-tight">
                    Stay Updated with the Latest in Web Development
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Get Weekly insights on emerging technologies, coding best
                    practices, and innovativee solutions from our team of expert
                    developers
                  </p>
                  <form
                    action=""
                    className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3"
                  >
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3 top-1/2 transform  -translate-y-1/2 h-5 ww-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        // without the onChange, you actually cannot type in the input
                        // But we are taking in the email value but even when hitting the button the text still doesn't work
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 h-12 bg-white dark:bg-black border-gray-300 dark:border-gray-700"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="h-12 bg-red-600 hover:bg-red-700 text-white"
                    >
                      Subscribe
                    </Button>
                  </form>
                  {/* // It doesnt yet but it should send you a subscription thank you message when you enter your email */}
                  {isSubscribed && (
                    <div className="mt-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 rounded-lg p-4 max-w-lg mx-auto">
                      <div className="flex items-center text-green-700 dark:text-green-300">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>
                          Thank you for subscribing to our newsletter!
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Latest NewsLetter Issues */}
            <section className="py-12">
              <div className="container mx-auto px-4">
                <div className="">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Latest NewsLetter Issues
                  </h2>

                  <Link href="/newsletter/archive">
                    <Button variant="outline" size="sm">
                      Viw All Issues
                      {/* little styling for the reversey hehe */}
                      {/* Unnecessary but I am challenging myself after all */}
                      {isRTL ? (
                        <ArrowLeft className="ml-2 h-4 ww-4" />
                      ) : (
                        <ArrowRight className="mr-2 h-4 w-4" />
                      )}
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsletterIssues.map((issue) => (
                    <Link href={issue.url} key={issue.id}>
                      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow group">
                        <div className="aspect-[16/9]">
                          <Image
                            // src={NewsletterIssue.image }
                            src="/codewithali.png"
                            alt={issue.title}
                            height={225}
                            width={225}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="">
                            <Badge className="bg-white/90 dark:bg-black/80 text-red-600 dark:text-white">
                              <Rss className="h-3 w-3 mr-1" />
                              Newsletter
                            </Badge>
                          </div>
                        </div>
                        {/* format date here */}
                        {/* Latest NewsLetterIssues */}
                        <CardHeader className="pb-2">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{formateDate(issue.date)}</span>
                          </div>
                          <CardTitle className="text-md mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                            {issue.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="">
                          <p className="text-gray-700 dark:text-gray-300">
                            {" "}
                            {issue.description}{" "}
                          </p>
                        </CardContent>

                        <CardFooter className="pt-2  text-red-600 dark:text-red-500 flex items-center text-sm font-medium">
                          Read Issue
                          {isRTL ? (
                            <ArrowLeft className="h-4 w-4 ml-1" />
                          ) : (
                            <ArrowRight className="h-4 w-4 ml-1" />
                          )}
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Article */}
            <section className="py-12 bg-gray-50 dark:bg-gray-900">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      // src={NewsletterIssue.image }
                      src="/codewithali.png"
                      alt="lol"
                      // alt={featured.Posttitle}
                      height={225}
                      width={225}
                      className="w-full h-full object-cover "
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-100 text-red">Featured</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-gray dark:text-gray-400 text-sm mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formateDate(featuredPost.date)}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxd">
                      {featuredPost.excerpt}
                    </p>
                    <div className="">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage
                          src="codewithali.png"
                          alt={featuredPost.author.name}
                        />
                        <AvatarFallback>
                          {featuredPost.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-wwhite">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-graay-400">
                          {" "}
                          {featuredPost.author.role}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{featuredPost.likes}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{featuredPost.comments}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span>{featuredPost.shares}</span>
                      </div>
                    </div>

                    <Link href={featuredPost.url}>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        Read Article
                        {isRTL ? (
                          <ArrowLeft className="h-4 w-4 ml-1" />
                        ) : (
                          <ArrowRight className="h-4 w-4 ml-1" />
                        )}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Weekly  Spotlights - Im gonna put the image on the left and the text on the right */}

            <section className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
                  Weekly Spotlights
                </h2>

                <div className="space-y-12">
                  {weeklySpotlights.map((lolzy) => (
                    // finally get to use this html tag ( first time using them  lol)
                    <article
                      key={lolzy.id}
                      className="grid grid-cols-1 md:grid-cols-12 gap-8  items-center pb-12 border-b border-gray-200 dark:border-gray-800 last:border-0  last:pb-0 group"
                    >
                      <div className="md:col-span-4">
                        <Link
                          href={lolzy.url}
                          className="block rounded-lg overflow-hidden aspect-[4/3]"
                        >
                          <Image
                            src="/codewithali.png"
                            alt={lolzy.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            height={225}
                            width={225}
                          />
                        </Link>
                      </div>

                      <div className="md:col-span-8">
                        <div className="mb-3">
                            <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-transparent" > 
                                {/* This is very interesting I needd you to understand this: What this does see is */}
                                {/* It displays a category label in a badge, showing the user-friendly name if available, or falling back to the raw value */}
                                {categories.find( blaze => blaze.slug === lolzy.category)?.name || lolzy.category }
                            </Badge>
                        </div>

                        <Link href={lolzy.url} >
                            <h3 className="font-serif text-2xl font-bold text-gary-900 dark:bg-gray-900 dark:text-gray-300 "> {lolzy.title} </h3>
                        </Link>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{lolzy.excerpt}</p>

                        <div className="">
                            <div className="">
                                <Avatar className="h-8 w-8 mr-3">
                                    <AvatarImage src="/codewithali.png" alt={lolzy.author.name} />
                                    <AvatarFallback> {lolzy.author.name.charAt(0)} </AvatarFallback>
                                </Avatar>

                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white"> {lolzy.author.name } </p>
                                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        <span> {formateDate(lolzy.date)} </span>
                                         <span className="mx-2">•</span>
                                         <Clock className="h-3 w-3 mr-1" />
                                         <span> {lolzy.readTime} </span>     
                                    </div>
                                </div>
                            </div>

                        <div className="flex items-center space-x-3">
                            <Button className="text-gray-600 dark:text-gray-400 hover:text-red-600  dark:hover:text-red-500 bg-white/50 hover:bg-white/60 ">
                                <ThumbsUp className="h-4 w-4" />
                            </Button>
                        </div>

                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

   {activeTab === "blog" && (
          <>
            {/* Bento Grid Blog Section */}
            <section className="py-12">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Latest Articles
                  </h2>
                  
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                      onClick={() => setActiveCategory("all")}
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                  {/* Large Feature Card */}
                  <Card className="md:col-span-2 lg:row-span-2 overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="relative aspect-video">
                      <img 
                        src="/api/placeholder/800/450" 
                        alt={bentoPosts[0].title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="mb-3 bg-white/90 dark:bg-black/80 text-red-600 dark:text-red-400 border-transparent">
                          {categories.find(lolzy => lolzy.slug === bentoPosts[0].category)?.name}
                        </Badge>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                          {bentoPosts[0].title}
                        </h3>
                        <p className="text-white/90 mb-4 line-clamp-2">
                          {bentoPosts[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2 border-2 border-white">
                              <AvatarImage src="/api/placeholder/32/32" alt={bentoPosts[0].author.name} />
                              <AvatarFallback>{bentoPosts[0].author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium text-white">{bentoPosts[0].author.name}</p>
                              <div className="flex items-center text-xs text-white/80">
                                <span>{formateDate(bentoPosts[0].date)}</span>
                                <span className="mx-2">•</span>
                                <span>{bentoPosts[0].readTime}</span>
                              </div>
                            </div>
                          </div>
                          <Link href={bentoPosts[0].url}>
                            <Button 
                              size="sm" 
                              className="bg-white/90 hover:bg-white text-gray-900 border-transparent"
                            >
                              Read
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Standard Cards */}
                  {bentoPosts.slice(1).map((post) => (
                    <Card key={post.id} className="overflow-hidden group hover:shadow-md transition-shadow">
                      <div className="aspect-[16/9]">
                        <img 
                          src="/api/placeholder/400/225" 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center mb-2">
                          <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-transparent">
                            {categories.find(cat => cat.slug === post.category)?.name}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link href={post.url}>
                          <CardTitle className="text-xl group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src="/api/placeholder/24/24" alt={post.author.name} />
                              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-900 dark:text-white">{post.author.name}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              <span className="text-xs">{post.likes}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              <span className="text-xs">{post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Link href="/blog">
                    <Button>
                      View All Articles
                      {isRTL ? (
                        <ArrowLeft className="ml-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}

      </main>
    </div>
  );
};

export default WeeklyTechNewsletter;
