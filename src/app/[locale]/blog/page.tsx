"use client";
import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";


interface Category {
    name: string
    slug: string
    count: number
}


const WeeklyTechNewsletter = () => {
  const t = useTranslations("Blog")
  const locale = useLocale();
  const isRTL = isRtlLang(locale)

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all")
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

  return (
   <div className="bg-white dark:black text-gray-900 dark:text-white min-h-screen">
    {/* mobile view ( wanna try this view rq) */}
    {/* {isMenuOpen && (
        
        <div className="flex items-center">
            <h2 className="text-xl font-serif font-bold">CodeWithAli</h2>
        </div>
    )} */}

    {/* Header */}
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm"></header>
        <div className="container mx-auto px-4 py-4 ">
            <div className="flex items-center justify-between">              
                    <span className="font-serif text-xl font-bold text-black dark:text-white" >CodeWithAli  
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
                  </div>  

            </div>
        </div>
   </div>
  );
};

export default WeeklyTechNewsletter;

