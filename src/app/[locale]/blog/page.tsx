"use client";
import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Bell, CheckCircle, Mail, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";


interface Category {
    name: string
    slug: string
    count: number
}

interface NewsletterIssue {
    id: string
    title: string
    date: string
    description : string
    image : string,
    url: string;
}

const WeeklyTechNewsletter = () => {
  const t = useTranslations("Blog")
  const locale = useLocale();
  const isRTL = isRtlLang(locale)

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all")
  const [isSubscribed, setIsSubscribed]  = useState(false)
  const [email, setEmail] = useState("");
  //   const [isMenuOpen, setisOpenMenu] = useState(false)
  

 // Active Tabs
  const [activeTab, setActiveTab] = useState("newsletter")
  const categories: Category[] = [
    { name: "All", slug: "all", count: 56 },
    { name: "Web Development", slug: "web-development", count: 21 },
    { name: "AI & Machine Learning", slug: "ai-ml", count: 15 },
    { name: "Tech Trends", slug: "tech-trends", count: 11 },
    { name: "Developer Q&A", slug: "developer-qa", count: 9 },
  ];

 const newsletterIssues: NewsletterIssue[] = [
    {
      id: "1",
      title: "Issue #25: The Rise of AI-Powered Development Tools",
      date: "2025-05-15",
      description: "This week we explore how AI tools are transforming the development workflow, from code completion to testing automation.",
      image: "/newsletter/issue-25.jpg",
      url: "/newsletter/25-ai-dev-tools",
    },
    {
      id: "2",
      title: "Issue #24: WebGPU - The Future of Browser Graphics",
      date: "2025-05-08",
      description: "Diving into WebGPU and how it's enabling high-performance 3D graphics and computation directly in the browser.",
      image: "/newsletter/issue-24.jpg",
      url: "/newsletter/24-webgpu",
    },
    {
      id: "3",
      title: "Issue #23: Micro-Frontend Architecture in 2025",
      date: "2025-05-01",
      description: "Best practices for implementing micro-frontend architecture in large-scale applications.",
      image: "/newsletter/issue-23.jpg",
      url: "/newsletter/23-micro-frontend",
    },
  ];


//  NewsLetter Subscription
//  Grab the email value from the user from the section below - first get the const for email and setEmail to an empty String
//  Once you grab the value of the email we are going to set the setIsSubcribed to True which willl trigger a message  to show them they have subcribed to us and handle email system integeration 
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if ( email ) {
        setIsSubscribed(true);
        setTimeout(() =>  {
            setEmail("");
        }, 1000)
    }
  }
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
                    <span className="font-serif text-xl font-bold text-black dark:text-black" >CodeWithAli  
                        <span className="text-red-600 dark:text-red-500 ">Weekly</span>
                    </span>     

                    <div className="hidden lg:flex items-center space-x-3 ml-50">
                  {/* Weekly Tech Button */}
                        <Button
                            className={`text-sm font-medium ${activeTab === "newsletter" ? "text-white  bg-red-600 hover:bg-red-700 dark:text-black": "text-gray-700 hover:bg-red-700  hover:text-white dark:hover:text-red-700" }`}
                            onClick={() => setActiveTab("newsletter")}
                            >
                            Weekly Tech NewsLetter    
                        </Button>    
                {/* Blog Button */}
                        <Button className={`text-sm font-medium ${activeTab === "blog" ?  "text-white dark:text-red-500 " : "text-white hover:bg-red-700 bg-red-600 dark:text-gray-300  dark:hover:text-red-500"}`}>
                            Blog
                        </Button>
                        {/* Need to edit here for the dark mode background  */}
                {/* Developer Q&A */}
                        <Button className={`text-sm font-medium ${activeTab === "qa" ? " text-white dark:text-red-500" : "text-white bg-red-600 hover:bg-red-700 dark:text-black dark:bg-white dark:hover:bg-gray-200" } `}>
                            Developer Q&A
                        </Button>
                {/* Community Chat */}
                        <Button className={`text-sm font-medium ${activeTab === "chat" ? "text-red-500 dark:text-white" : "text-white bg-red-600 hover:bg-red-700 dark:text-black dark:bg-white dark:hover:bg-gray-200" }`}>
                            Community Chat
                        </Button>
                    </div>       

        {/* Search Bar */}
                  <div className="flex items-center space-x-4">
                    <div className="hidden md:block relative ml-20">
                    {/* Trying to create an ACTUAL working search query holy */}
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 "/>
                        <Input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            // what the user inputs in the input box is the value and then we set that to the setSearchQuery will I'll make later to then filter through keywords
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-[180px] pl-10 bg-gray-100 dark:bg-gray-900 border-transparent rounded-full text-sm " />
                    </div>
        {/* Bell ( maybe use it for notification subscription? ) */}
                    <Button className="hidden md:flex items-center justify-center h-9 w-9 rounded-full bg-red-600 dark:red-700 dark:text-black hover:bg-red-700">
                        <Bell className="h-4 w-4"></Bell>
                    </Button>

                    <Button className="">
                        <Menu className="h-6 w-6 text-white dark:text-gray"/>
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
                    <section className="pt-10 pb-8 md:pt-16 md:pb-12 border-b border-gray-200 dark:border-gray-800" >
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto  text-center">
                                <Badge className="mb-4 bg-red-300 text-red-700 dark:bg-red-900/20 dark:text-red-400 border-transpaarent">
                                    Weekly Tech Newsletter
                                </Badge>
                                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-black mb-6 leading-tight">
                                    Stay Updated with the Latest in Web Development
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                                    Get Weekly insights on emerging technologies, coding best practices, and innovativee solutions from our team of expert developers
                                </p>
                          <form action="" className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
                            <div className="relative flex-grow">

                                <Mail className="absolute left-3 top-1/2 transform  -translate-y-1/2 h-5 ww-5 text-gray-400"/>
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
                                <span>Thank you for subscribing to our newsletter!</span>
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
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Latest NewsLetter Issues</h2>

                                <Link href="/newsletter/archive" >
                                    <Button variant="outline" size="sm">
                                        Viw All Issues
                                            {/* little styling for the reversey hehe */}
                                            {/* Unnecessary but I am challenging myself after all */}
                                           {isRTL ? 
                                           (
                                            <ArrowLeft className="ml-2 h-4 ww-4" />
                                           ):(

                                             <ArrowRight className="mr-2 h-4 w-4" />
                                            )
                                           }
                                    </Button>
                                </Link>
                            </div>

                        <div className="">
                                        
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

