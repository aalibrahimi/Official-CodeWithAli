"use client"
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  Search,
  BarChart3,
  Globe,
  LineChart,
  TrendingUp,
  Zap,
  Award,
  Target,
  CheckCircle,
  Layers,
  FileText,
  Link2,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// SEO services data
const seoServices = [
  {
    title: "Keyword Research",
    description: "Comprehensive keyword research to identify high-value search terms that your target audience is using.",
    icon: Search,
    features: [
      "Competitor Keyword Analysis",
      "Search Volume Assessment",
      "Long-tail Keyword Discovery",
      "Keyword Difficulty Scoring"
    ]
  },
  {
    title: "On-Page SEO",
    description: "Optimization of individual pages to rank higher and earn more relevant traffic in search engines.",
    icon: FileText,
    features: [
      "Title & Meta Optimization",
      "Content Structure Improvement",
      "Internal Linking Strategy",
      "Image Optimization"
    ]
  },
  {
    title: "Technical SEO",
    description: "Addressing technical aspects of your website to improve ranking in search engines.",
    icon: Layers,
    features: [
      "Site Speed Optimization",
      "Mobile Responsiveness",
      "Schema Markup Implementation",
      "Crawl Error Resolution"
    ]
  },
  {
    title: "Link Building",
    description: "Strategic acquisition of backlinks from authoritative websites to boost your domain authority.",
    icon: Link2,
    features: [
      "Quality Backlink Acquisition",
      "Broken Link Recovery",
      "Guest Posting Strategy",
      "Competitor Backlink Analysis"
    ]
  }
];

// SEO approach
const seoApproach = [
  {
    number: "01",
    title: "SEO Audit",
    description: "We conduct a thorough analysis of your current SEO performance, identifying issues and opportunities.",
    icon: Search
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "We create a customized SEO strategy based on your business goals, target audience, and competitive landscape.",
    icon: Target
  },
  {
    number: "03",
    title: "On-Page Optimization",
    description: "We optimize your website's content, structure, and technical elements to improve search engine rankings.",
    icon: FileText
  },
  {
    number: "04",
    title: "Off-Page Strategy",
    description: "We build high-quality backlinks and enhance your online presence across relevant platforms.",
    icon: Link2
  },
  {
    number: "05",
    title: "Analytics & Reporting",
    description: "We track key metrics and provide detailed reports on your SEO performance and ROI.",
    icon: BarChart3
  }
];

// SEO packages
const seoPackages = [
  {
    title: "Starter SEO",
    price: "$899",
    period: "per month",
    description: "Essential SEO services for small businesses looking to improve their local search presence.",
    features: [
      "Initial SEO Audit",
      "Keyword Research (up to 20 keywords)",
      "On-Page Optimization (5 pages)",
      "Basic Technical SEO",
      "Monthly Reporting",
      "Google Business Profile Optimization",
      "3-Month Minimum Commitment"
    ]
  },
  {
    title: "Professional SEO",
    price: "$1,899",
    period: "per month",
    description: "Comprehensive SEO solution for growing businesses competing in broader markets.",
    features: [
      "In-depth SEO Audit",
      "Advanced Keyword Research (up to 50 keywords)",
      "On-Page Optimization (15 pages)",
      "Technical SEO Implementation",
      "Content Optimization Strategy",
      "Monthly Link Building (5 quality links)",
      "Competitor Analysis",
      "Bi-weekly Reporting",
      "6-Month Minimum Commitment"
    ],
    highlighted: true
  },
  {
    title: "Enterprise SEO",
    price: "$3,499",
    period: "per month",
    description: "Strategic SEO partnership for large businesses with complex needs and competitive industries.",
    features: [
      "Comprehensive SEO Audit",
      "Extensive Keyword Research & Mapping",
      "Full Website Optimization",
      "Advanced Technical SEO",
      "Content Creation Strategy",
      "Aggressive Link Building Campaign",
      "International SEO (if applicable)",
      "E-commerce Optimization (if applicable)",
      "Weekly Reporting & Strategy Calls",
      "Dedicated SEO Manager",
      "12-Month Minimum Commitment"
    ]
  }
];

// Results metrics
const resultMetrics = [
  {
    stat: "45%",
    label: "Average Traffic Increase",
    description: "Our clients typically see a 45% increase in organic traffic within 6 months."
  },
  {
    stat: "85%",
    label: "Keyword Ranking Improvement",
    description: "85% of target keywords showing significant ranking improvements within the first 3 months."
  },
  {
    stat: "32%",
    label: "Conversion Rate Lift",
    description: "On average, our SEO services help improve conversion rates by 32% through qualified traffic."
  },
  {
    stat: "65%",
    label: "Local Search Visibility",
    description: "Local businesses see a 65% increase in Google Map Pack appearances for relevant searches."
  }
];

const SEOOptimizationPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-orange-900/30 text-orange-400 border-transparent mb-4 px-3 py-1">SEO OPTIMIZATION</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Drive Organic Traffic &
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-400 to-red-600 block">
                Boost Your Rankings
              </span>
            </h1>
            <p className="text-lg md:text-xl text-orange-200/80 mb-8">
              Data-driven SEO strategies that increase visibility, attract qualified leads, 
              and help your business dominate search engine results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-orange-700 to-orange-900 hover:from-orange-600 hover:to-orange-800 text-white"
                size="lg"
                onClick={() => router.push('/contact')}
              >
                Get a Free SEO Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-700 text-orange-400 bg-orange-900/60 text-black hover:bg-orange-950/50 hover:text-orange-900"
                onClick={() => router.push('#packages')}
              >
                View SEO Packages
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-700/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-orange-900/30 text-orange-400 border-transparent mb-4 px-3 py-1">OUR SERVICES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-orange-200/60 text-lg max-w-2xl mx-auto">
              Our holistic approach to search engine optimization covers all aspects needed to improve 
              your website's visibility in search results.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <Card className="bg-black/60 border-orange-950/30 backdrop-blur-sm h-full group hover:border-orange-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-700 to-orange-900 p-3 mb-4 transform group-hover:scale-110 transition-transform">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-orange-200/60 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-orange-200/80 text-sm">{feature}</span>
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

      {/* Results Section */}
      <section className="py-20 bg-orange-950/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-orange-900/30 text-orange-400 border-transparent mb-4 px-3 py-1">RESULTS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Performance
            </h2>
            <p className="text-orange-200/60 text-lg max-w-2xl mx-auto">
              Our data-driven approach consistently delivers measurable results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resultMetrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/60 border-orange-950/30 h-full backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-700 to-orange-900 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">{metric.stat}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{metric.label}</h3>
                    <p className="text-orange-200/70">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-orange-900/30 text-orange-400 border-transparent mb-4 px-3 py-1">OUR APPROACH</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our SEO Process
            </h2>
            <p className="text-orange-200/60 text-lg max-w-2xl mx-auto">
              We follow a systematic approach to ensure your SEO campaign delivers consistent results.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-1 bg-gradient-to-b from-orange-700 to-orange-900 rounded-full hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {seoApproach.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-700 to-orange-900 flex items-center justify-center shadow-lg shadow-orange-950/30 relative z-10">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="bg-black/60 border border-orange-950/30 rounded-xl p-6 flex-grow backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-bold text-orange-500 mr-2">{step.number}</span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-orange-200/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-orange-950/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-orange-900/30 text-orange-400 border-transparent mb-4 px-3 py-1">BENEFITS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Invest in SEO?
            </h2>
            <p className="text-orange-200/60 text-lg max-w-2xl mx-auto">
              Search engine optimization offers numerous advantages for businesses looking to grow their online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Increased Organic Traffic",
                description: "Drive more qualified visitors to your website without paying for each click."
              },
              {
                icon: Award,
                title: "Enhanced Credibility",
                description: "Higher search rankings build trust and credibility with your target audience."
              },
              {
                icon: Target,
                title: "Better User Experience",
                description: "SEO improvements also enhance the usability and user experience of your website."
              },
              {
                icon: Zap,
                title: "Cost-Effective Marketing",
                description: "SEO provides one of the best ROIs compared to other digital marketing channels."
              },
              {
                icon: BarChart3,
                title: "Measurable Results",
                description: "Track rankings, traffic, and conversions to see the direct impact on your business."
              },
              {
                icon: Globe,
                title: "Long-Term Strategy",
                description: "Unlike paid advertising, SEO benefits compound over time for lasting results."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-black/60 border border-orange-950/30 rounded-xl p-6 h-full backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-700 to-orange-900 p-3 mb-4">
                    <benefit.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-orange-200/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="packages" className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-orange-900/30 text-orange-400 border-transparent mb-4 px-3 py-1">PRICING</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              SEO Packages
            </h2>
            <p className="text-orange-200/60 text-lg max-w-2xl mx-auto">
              Flexible SEO solutions designed to meet the needs of businesses at every stage of growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`bg-black/60 backdrop-blur-sm h-full flex flex-col ${
                  pkg.highlighted 
                    ? 'border-orange-600 shadow-lg shadow-orange-950/30' 
                    : 'border-orange-950/30'
                }`}>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    {pkg.highlighted && (
                      <Badge className="bg-orange-700 text-white border-transparent self-start mb-4">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-orange-400">{pkg.price}</span>
                      <span className="text-orange-200/60 ml-1">{pkg.period}</span>
                    </div>
                    <p className="text-orange-200/70 mb-6">{pkg.description}</p>
                    
                    <div className="mt-auto">
                      <div className="border-t border-orange-950/30 pt-6 mb-6">
                        <h4 className="font-bold text-white mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                              <span className="text-orange-200/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button
                        className={`w-full ${
                          pkg.highlighted
                            ? 'bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-500 hover:to-orange-700 text-white' 
                            : 'bg-black border border-orange-800/30 text-orange-400 hover:bg-orange-950/20'
                        }`}
                        onClick={() => router.push('/contact')}
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

      {/* CTA Section */}
      <section className="py-20 bg-orange-950/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto bg-black/60 border border-orange-900 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-lg text-orange-200/70 mb-8 max-w-2xl mx-auto">
              Get a complimentary SEO audit and discover opportunities to improve your website's visibility in search engines.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-700 to-orange-900 hover:from-orange-600 hover:to-orange-800 
                text-white border border-orange-800/30 shadow-lg shadow-orange-950/20 px-8"
              onClick={() => router.push('/contact')}
            >
              Request Your Free SEO Audit
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOOptimizationPage;