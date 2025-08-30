// src/app/[locale]/cost-simulator/page.tsx
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Calculator,
  Globe,
  ShoppingBag,
  Palette,
  Settings,
  // Search,
  CheckCircle,
  ArrowRight,
  Share2,
  RefreshCw,
  Info,
  ChevronDown,
  ChevronUp,
  Rocket,
  FileText,
  Smartphone,
  BarChart,
  Calendar,
  Users,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import GradientText from "@/MyComponents/GradientText";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

// Types for our cost calculator
interface CostOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  multiplier?: number;
  icon?: React.ElementType;
}

interface CostBreakdown {
  category: string;
  items: { name: string; price: number }[];
  total: number;
}

// Move static data outside the component to prevent recreating on every render
const websiteTypes: CostOption[] = [
  {
    id: "business",
    name: "Business Website",
    description: "Professional website for your business with modern design",
    basePrice: 2500,
    icon: Globe,
  },
  {
    id: "ecommerce",
    name: "E-commerce Store",
    description: "Full online store with payment processing and inventory",
    basePrice: 4500,
    icon: ShoppingBag,
  },
  {
    id: "portfolio",
    name: "Portfolio/Personal",
    description: "Showcase your work with a stunning portfolio site",
    basePrice: 1800,
    icon: Palette,
  },
  {
    id: "landing",
    name: "Landing Page",
    description: "High-converting single page for marketing campaigns",
    basePrice: 1200,
    icon: Rocket,
  },
  {
    id: "blog",
    name: "Blog/Content Site",
    description: "Content management system with blog functionality",
    basePrice: 2000,
    icon: FileText,
  },
];

const availableFeatures: CostOption[] = [
  {
    id: "cms",
    name: "Content Management System",
    description: "Easy-to-use admin panel for content updates",
    basePrice: 500,
    icon: Settings,
  },
  {
    id: "mobile",
    name: "Mobile App Integration",
    description: "Progressive Web App capabilities",
    basePrice: 800,
    icon: Smartphone,
  },
  {
    id: "analytics",
    name: "Advanced Analytics",
    description: "Detailed traffic and conversion tracking",
    basePrice: 300,
    icon: BarChart,
  },
  {
    id: "multilingual",
    name: "Multi-language Support",
    description: "Support for multiple languages and regions",
    basePrice: 600,
    icon: Globe,
  },
  {
    id: "booking",
    name: "Booking System",
    description: "Online appointment or reservation system",
    basePrice: 900,
    icon: Calendar,
  },
  {
    id: "membership",
    name: "User Membership Area",
    description: "Protected content and user accounts",
    basePrice: 700,
    icon: Users,
  },
  {
    id: "chat",
    name: "Live Chat Integration",
    description: "Real-time customer support chat",
    basePrice: 200,
    icon: MessageSquare,
  },
  {
    id: "social",
    name: "Social Media Integration",
    description: "Connect and sync with social platforms",
    basePrice: 150,
    icon: Share2,
  },
];

const CostSimulator = () => {
  const router = useRouter();
  const locale = useLocale();
  const isRTL = isRtlLang(locale);
  
  const [selectedWebsiteType, setSelectedWebsiteType] = useState<string>("business");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [designComplexity, setDesignComplexity] = useState<number>(2);
  const [pageCount, setPageCount] = useState<number>(5);
  const [includeHosting, setIncludeHosting] = useState<boolean>(false);
  const [includeSEO, setIncludeSEO] = useState<boolean>(false);
  const [includeMaintenance, setIncludeMaintenance] = useState<boolean>(false);
  const [rushDelivery, setRushDelivery] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [breakdown, setBreakdown] = useState<CostBreakdown[]>([]);
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);

  // Use useCallback with only the state dependencies (not the static arrays)
  const calculateCost = useCallback(() => {
    const selectedType = websiteTypes.find(type => type.id === selectedWebsiteType);
    if (!selectedType) return;

    let cost = selectedType.basePrice;
    const newBreakdown: CostBreakdown[] = [];

    // Base website cost
    newBreakdown.push({
      category: "Base Website",
      items: [{ name: selectedType.name, price: selectedType.basePrice }],
      total: selectedType.basePrice,
    });

    // Page count multiplier (additional pages beyond 5)
    const additionalPages = Math.max(0, pageCount - 5);
    const pagesCost = additionalPages * 200;
    if (pagesCost > 0) {
      cost += pagesCost;
      newBreakdown.push({
        category: "Additional Pages",
        items: [{ name: `${additionalPages} extra pages`, price: pagesCost }],
        total: pagesCost,
      });
    }

    // Design complexity multiplier
    const complexityMultipliers = [0.8, 0.9, 1.0, 1.3, 1.6]; // Simple to Very Complex
    const complexityLabels = ["Simple", "Basic", "Standard", "Advanced", "Premium"];
    const complexityMultiplier = complexityMultipliers[designComplexity - 1];
    const baseCostForComplexity = cost;
    cost = Math.round(baseCostForComplexity * complexityMultiplier);
    
    const complexityCost = cost - baseCostForComplexity;
    if (complexityCost !== 0) {
      newBreakdown.push({
        category: "Design Complexity",
        items: [{ 
          name: `${complexityLabels[designComplexity - 1]} Design`, 
          price: complexityCost 
        }],
        total: complexityCost,
      });
    }

    // Selected features
    const featuresItems: { name: string; price: number }[] = [];
    selectedFeatures.forEach(featureId => {
      const feature = availableFeatures.find(f => f.id === featureId);
      if (feature) {
        cost += feature.basePrice;
        featuresItems.push({ name: feature.name, price: feature.basePrice });
      }
    });

    if (featuresItems.length > 0) {
      newBreakdown.push({
        category: "Features & Add-ons",
        items: featuresItems,
        total: featuresItems.reduce((sum, item) => sum + item.price, 0),
      });
    }

    // Additional services
    const servicesItems: { name: string; price: number }[] = [];
    if (includeHosting) servicesItems.push({ name: "1 Year Hosting", price: 600 });
    if (includeSEO) servicesItems.push({ name: "SEO Setup & Optimization", price: 800 });
    if (includeMaintenance) servicesItems.push({ name: "6 Months Maintenance", price: 1200 });

    if (servicesItems.length > 0) {
      const servicesTotal = servicesItems.reduce((sum, item) => sum + item.price, 0);
      cost += servicesTotal;
      newBreakdown.push({
        category: "Additional Services",
        items: servicesItems,
        total: servicesTotal,
      });
    }

    // Rush delivery (25% surcharge)
    if (rushDelivery) {
      const rushCost = Math.round(cost * 0.25);
      cost += rushCost;
      newBreakdown.push({
        category: "Rush Delivery",
        items: [{ name: "25% Express Fee", price: rushCost }],
        total: rushCost,
      });
    }

    setTotalCost(cost);
    setBreakdown(newBreakdown);
  }, [
    selectedWebsiteType,
    selectedFeatures,
    designComplexity,
    pageCount,
    includeHosting,
    includeSEO,
    includeMaintenance,
    rushDelivery,
  ]);

  // Calculate total cost whenever selections change
  useEffect(() => {
    calculateCost();
  }, [calculateCost]);

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const resetCalculator = () => {
    setSelectedWebsiteType("business");
    setSelectedFeatures([]);
    setDesignComplexity(2);
    setPageCount(5);
    setIncludeHosting(false);
    setIncludeSEO(false);
    setIncludeMaintenance(false);
    setRushDelivery(false);
  };

  const getEstimatedTimeline = () => {
    const baseWeeks = selectedWebsiteType === "landing" ? 2 : 
                     selectedWebsiteType === "portfolio" ? 3 :
                     selectedWebsiteType === "business" ? 4 :
                     selectedWebsiteType === "blog" ? 4 : 6; // ecommerce
    
    const complexityWeeks = Math.max(0, designComplexity - 2);
    const featureWeeks = Math.ceil(selectedFeatures.length / 2);
    const totalWeeks = baseWeeks + complexityWeeks + featureWeeks;
    
    return rushDelivery ? Math.max(1, Math.ceil(totalWeeks * 0.6)) : totalWeeks;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-4 pb-1 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full dark:bg-black dark:opacity-70"></div>
          {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-blue-300 to-blue-500 dark:bg-gradient-to-br dark:from-blue-950/30 dark:via-transparent dark:to-transparent"></div> */}
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-600 text-white dark:bg-blue-900/30 dark:text-blue-400 border-transparent mb-4 px-3 py-1">
              Cost Calculator
            </Badge>
            <h1 className="text-4xl text-black dark:text-white md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Website Build
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-600 block">
                Cost Simulator
              </span>
            </h1>
            <p className="text-lg md:text-xl text-black font-semibold dark:text-blue-200/80 mb-8">
              Get an instant estimate for your website project. Customize features and see real-time pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-7 ">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Website Type Selection */}
              <Card className="bg-white dark:bg-black/60 border-blue-300 dark:border-blue-900 rounded-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4 flex items-center">
                    <Globe className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                    What type of website do you need?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {websiteTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-4 border-2 rounded-xs cursor-pointer transition-all ${
                          selectedWebsiteType === type.id
                            ? "border-blue-600 dark:border-blue-500 bg-blue-200/50 dark:bg-blue-900/20"
                            : "border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600"
                        }`}
                        onClick={() => setSelectedWebsiteType(type.id)}
                      >
                        <div className="flex items-start">
                          {type.icon && <type.icon className={`h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 ${isRTL ? "ml-3" : "mr-3"}`} />}
                          <div className={`${isRTL ? "text-right" : ""}`}>
                            <h4 className="font-bold text-black dark:text-white">{type.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{type.description}</p>
                            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                              Starting at ${type.basePrice.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Page Count */}
              <Card className="bg-white dark:bg-black/60 border-blue-300 dark:border-blue-900 rounded-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
                    How many pages do you need?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-black dark:text-white">Number of pages: {pageCount}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {pageCount <= 5 ? "Included" : `+$${((pageCount - 5) * 200).toLocaleString()} for additional pages`}
                      </span>
                    </div>
                    <Slider
                      value={[pageCount]}
                      onValueChange={(value) => setPageCount(value[0])}
                      max={20}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>1 page</span>
                      <span>20 pages</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Design Complexity */}
              <Card className="bg-white dark:bg-black/60 border-blue-300 dark:border-blue-900 rounded-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
                    Design Complexity Level
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-black dark:text-white">
                        {["Simple", "Basic", "Standard", "Advanced", "Premium"][designComplexity - 1]} Design
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {designComplexity <= 2 ? "Standard pricing" : "Premium design"}
                      </span>
                    </div>
                    <Slider
                      value={[designComplexity]}
                      onValueChange={(value) => setDesignComplexity(value[0])}
                      max={5}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Simple</span>
                      <span>Premium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features Selection */}
              <Card className="bg-white dark:bg-black/60 border-blue-300 dark:border-blue-900 rounded-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
                    Select Additional Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className={`p-4 border rounded-xs cursor-pointer transition-all ${
                          selectedFeatures.includes(feature.id)
                            ? "border-blue-600 dark:border-blue-500 bg-blue-200/50 dark:bg-blue-900/20"
                            : "border-gray-300 dark:border-gray-700 hover:border-blue-400"
                        }`}
                        onClick={() => handleFeatureToggle(feature.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            {feature.icon && <feature.icon className={`h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />}
                            <div className={`${isRTL ? "text-right" : ""}`}>
                              <h4 className="font-semibold text-black dark:text-white">{feature.name}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                              <p className="text-blue-600 dark:text-blue-400 font-bold mt-1">
                                +${feature.basePrice.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className={`${isRTL ? "mr-2" : "ml-2"}`}>
                            {selectedFeatures.includes(feature.id) ? (
                              <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            ) : (
                              <div className="h-5 w-5 border-2 border-gray-300 dark:border-gray-600 rounded" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Services */}
              <Card className="bg-white dark:bg-black/60 border-blue-300 dark:border-blue-900 rounded-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
                    Additional Services
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-300 dark:border-gray-700 rounded-xs">
                      <div className={`${isRTL ? "text-right" : ""}`}>
                        <h4 className="font-semibold text-black dark:text-white">Web Hosting (1 Year)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Professional hosting with SSL and backups</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">+$600</span>
                        <Switch checked={includeHosting} onCheckedChange={setIncludeHosting} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-gray-300 dark:border-gray-700 rounded-xs">
                      <div className={`${isRTL ? "text-right" : ""}`}>
                        <h4 className="font-semibold text-black dark:text-white">SEO Setup & Optimization</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Complete on-page SEO and Google setup</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">+$800</span>
                        <Switch checked={includeSEO} onCheckedChange={setIncludeSEO} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-gray-300 dark:border-gray-700 rounded-xs">
                      <div className={`${isRTL ? "text-right" : ""}`}>
                        <h4 className="font-semibold text-black dark:text-white">Maintenance Package (6 Months)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Updates, security, and technical support</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">+$1,200</span>
                        <Switch checked={includeMaintenance} onCheckedChange={setIncludeMaintenance} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-gray-300 dark:border-gray-700 rounded-xs">
                      <div className={`${isRTL ? "text-right" : ""}`}>
                        <h4 className="font-semibold text-black dark:text-white">Rush Delivery</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Express timeline (25% surcharge)</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-orange-600 dark:text-orange-400 font-bold">+25%</span>
                        <Switch checked={rushDelivery} onCheckedChange={setRushDelivery} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cost Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0 shadow-2xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">Project Estimate</h3>
                      <div className="text-4xl font-bold">
                        <GradientText gradient="from-white to-blue-200">
                          ${totalCost.toLocaleString()}
                        </GradientText>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center">
                          <Calculator className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                          Timeline
                        </span>
                        <span className="font-bold">{getEstimatedTimeline()} weeks</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Website Type</span>
                        <span className="text-sm">
                          {websiteTypes.find(t => t.id === selectedWebsiteType)?.name}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Pages</span>
                        <span>{pageCount} pages</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Features</span>
                        <span>{selectedFeatures.length} selected</span>
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-4 mb-6">
                      <Button
                        onClick={() => setShowBreakdown(!showBreakdown)}
                        variant="ghost"
                        className="w-full text-white hover:bg-white/10 flex items-center justify-center"
                      >
                        <Info className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                        {showBreakdown ? "Hide" : "Show"} Cost Breakdown
                        {showBreakdown ? 
                          <ChevronUp className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"}`} /> : 
                          <ChevronDown className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"}`} />
                        }
                      </Button>
                    </div>

                    {showBreakdown && (
                      <div className="border-t border-white/20 pt-4 mb-6">
                        <h4 className="font-bold mb-3">Cost Breakdown</h4>
                        <div className="space-y-3 text-sm">
                          {breakdown.map((category, index) => (
                            <div key={index}>
                              <div className="font-semibold text-blue-200">{category.category}</div>
                              {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className={`flex justify-between ${isRTL ? "mr-2" : "ml-2"}`}>
                                  <span className="text-white/80">{item.name}</span>
                                  <span>${item.price.toLocaleString()}</span>
                                </div>
                              ))}
                              <div className="flex justify-between font-semibold border-b border-white/20 pb-1">
                                <span>Subtotal</span>
                                <span>${category.total.toLocaleString()}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      <Button
                        onClick={() => router.push("/contact")}
                        className="w-full bg-white text-blue-800 hover:bg-blue-50 font-bold"
                      >
                        Get Started
                        {isRTL ? (
                          <ArrowLeft className="ml-2 h-4 w-4" />
                        ) : (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </Button>

                      <Button
                        onClick={resetCalculator}
                        variant="ghost"
                        className="w-full text-white hover:bg-white/10"
                      >
                        <RefreshCw className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                        Reset Calculator
                      </Button>
                    </div>

                    <div className="mt-6 p-3 bg-white/10 rounded-xs">
                      <p className="text-sm text-center text-white/90">
                        💡 This is an estimate. Final pricing may vary based on specific requirements.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      {/* <section className="py-16  dark:bg-blue-950/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-white mb-4">
              What&apos;s Included in Every Project
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every website we build includes these essential features at no extra cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Responsive Design",
                description: "Works perfectly on all devices"
              },
              {
                icon: Search,
                title: "Advanced SEO Setup",
                description: "Optimized for search engines"
              },
              {
                icon: Settings,
                title: "Performance Optimized",
                description: "Fast loading and smooth experience"
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Thorough testing before launch"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white dark:bg-black/60 border-blue-300 dark:border-blue-900 text-center">
                <CardContent className="p-6">
                  <item.icon className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="font-bold text-blue-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CostSimulator;