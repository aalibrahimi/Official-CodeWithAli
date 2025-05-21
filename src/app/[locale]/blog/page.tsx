"use client";
import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import Link from "next/link";
import { Button } from "@/components/ui/button";


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
  const [searchQuery, setSeachQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all")
  const [isMenuOpen, setisOpenMenu] = useState(false)

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
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">              
                    <span className="font-serif text-xl font-bold text-black dark:text-white" >CodeWithAli  
                        <span className="text-red-600 dark:text-red-500 ml-2">Weekly</span>
                    </span>     

                    <div className="hidden lg:flex items-center space-x-8">
                        <Button
                            className={`text-sm font-medium ${activeTab === "newsletter" ? "text-red-600 dark:text-red-500": "text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500" }`}
                        >
                            Weekly Tech NewsLetter    
                        </Button>    
                    </div>         
            </div>
        </div>
   </div>
  );
};

export default WeeklyTechNewsletter;

