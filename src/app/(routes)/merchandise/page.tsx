"use client";

import React, { useState } from "react";

import {
  ShoppingCart,
  ShoppingBag,
  Tag,
  TrendingUp,
  CheckCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import GradientText from "@/app/components/gradientText";
import { useRouter } from "next/navigation";
import MerchCard, { Category, Color, Size } from "@/app/components/Merchandise/merchCard";
import Link from "next/link";

// Merchandise data
const merchandiseItems = [
  {
    id: 1,
    name: "Developer Hoodie",
    category: "Hoodie",
    price: 59.99,
    image: "blue_hoodie",
    paymentLink: "https://buy.stripe.com/eVa02NgCa09PamQaEL",
    colors: ["Black", "Gray", "Navy", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    bestseller: true,
    description: "Stay warm while coding with our premium developer hoodie. Features a minimalist design with subtle code snippets on the sleeves."
  },
  {
    id: 2,
    name: "Premium Code Hoodie",
    category: "Hoodie",
    price: 69.99,
    image: "red_hoodie",
    paymentLink: "",
    colors: ["Black", "Gray", "Navy", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    bestseller: true,
    description: "Our premium heavyweight hoodie with embroidered logo and code patterns. Includes hidden earbud channels in the hood."
  },
  {
    id: 3,
    name: "Code Artist T-Shirt",
    category: "Shirt",
    price: 29.99,
    image: "red_tshirt",
    paymentLink: "",
    colors: ["Black", "White", "Red", "Blue", "Gray", "Light-Gray", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    bestseller: false,
    description: "Comfortable cotton t-shirt with our signature 'Code Artist' design on the front."
  },

//   {
//     id: 4,
//     name: "Developer lol",
//     category: "Pants",
//     price: 49.99,
//     image: "/merchandise/lol.png", 
//     colors: ["Black", "Gray"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     featured: true,
//     bestseller: false,
//     description: "Comfortable lol for long coding sessions. Features deep pockets for all your gadgets."
//   },
  {
    id: 5,
    name: "Developer Sweatshirt",
    category: "Shirt",
    price: 34.99,
    image: "blue_sweatshirt",
    paymentLink: "",
    colors: ["Black", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    description: "Retro-inspired t-shirt featuring vintage programming languages and syntax."
  },
  {
    id: 6,
    name: "Premium Developer Sweatshirt",
    category: "Shirt",
    price: 44.99,
    image: "red_sweatshirt",
    paymentLink: "",
    colors: ["Black", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    description: "Retro-inspired t-shirt featuring vintage programming languages and syntax."
  },
  {
    id: 7,
    name: "Tech Beanie",
    category: "Hat",
    price: 22.99,
    image: "beanie",
    paymentLink: "",
    colors: ["Black"],
    sizes: ["One Size"],
    featured: true,
    bestseller: false,
    description: "Warm knitted beanie with a subtle embroidered code symbol. Perfect for winter coding.",
    available: false
  },
  {
    id: 8,
    name: "Cap",
    category: "Hat",
    price: 22.99,
    image: "cap",
    paymentLink: "",
    colors: ["Black"],
    sizes: ["One Size"],
    featured: true,
    bestseller: false,
    description: "Wear your coding cap when going to meet ups while looking fresh and cool.",
    available: false
  },
  {
    id: 9,
    name: "CWA Mug",
    category: "Other",
    price: 69.99,
    image: "mug", 
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    description: "Our premium heavyweight hoodie with embroidered logo and code patterns. Includes hidden earbud channels in the hood.",
    available: false
  },
  
//   {
//     id: 8,
//     name: "Developer Joggers",
//     category: "Joggers",
//     price: 54.99,
//     image: "/merchandise/pants.png", 
//     colors: ["Black", "Khaki", "Olive"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     featured: false,
//     bestseller: false,
//     description: "Multiple pocket Joggers pants designed for developers. Enough space for all your tech essentials."
//   }
];

// Featured collections
const collections = [
  { 
    name: "Winter Collection", 
    image: "/merchandise/winter-collection.png",
    description: "Stay warm and stylish with our winter coding apparel."
  },
  { 
    name: "Essential Collection", 
    image: "/merchandise/essential-collection.png",
    description: "Must-have pieces for every developer's wardrobe."
  },
  { 
    name: "Limited Edition", 
    image: "/merchandise/limited-edition.png",
    description: "Exclusive designs available for a limited time only."
  }
];

// Filter categories
const categories = ["All", "Hoodie", "Shirt", "Hat", "Pants", "Other"];

export default function MerchandisePage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter merchandise based on selected category
  const filteredItems = activeCategory === "All" 
    ? merchandiseItems 
    : merchandiseItems.filter(item => item.category === activeCategory);

  // Get featured items
  const featuredItems = merchandiseItems.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 border-b-[1px] border-b-red-950/50">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              OFFICIAL MERCHANDISE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Wear Your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
                Coding Passion
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-200/80 mb-8">
              High-quality apparel for developers, designers, and tech enthusiasts.
              Made for those who build digital excellence.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                text-white border border-red-800/30 shadow-lg shadow-red-950/20"
            >
              Shop Now
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-red-950/5 border-y border-red-950/20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-10">
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              FEATURED COLLECTIONS
            </Badge>
            <h2 className="text-3xl font-bold">Curated Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <div 
                key={index} 
                className="group cursor-pointer bg-black/60 border border-red-900 rounded-xl overflow-hidden"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-red-950/40 to-red-900/10 relative">
                  {/* we'll use next/image here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="h-16 w-16 text-red-500/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{collection.name}</h3>
                  <p className="text-red-200/70 mb-4">{collection.description}</p>
                  {/* <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors">
                    <span>View Collection</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div> */}
                  {/* we don't need the view collections quite yet either */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
                OUR PRODUCTS
              </Badge>
              <h2 className="text-3xl font-bold mr-[400px]">Shop The Collection</h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === category 
                    ? "bg-red-800 hover:bg-red-700 text-white border-transparent"
                    : "border-red-800/30 text-red-300 hover:text-white hover:bg-red-950/30"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 ">
            {filteredItems.map((item) => (
              <div key={item.id}>
                <MerchCard
                id={item.id}
                featured={item.featured}
                bestseller={item.bestseller}
                name={item.name}
                price={item.price}
                category={item.category as Category}
                img={item.image}
                description={item.description}
                colors={item.colors as Color[]}
                sizes={item.sizes as Size[]}
                paymentLink={item.paymentLink}
                available={item.available}
              />
              </div>
            ))}
          </div>
          
          {/* View All Button but we don't need this atm*/}
          {/* <div className="mt-12 text-center">
            <Button
              className="bg-transparent border border-red-800/30 text-red-400 hover:bg-red-950/20 hover:text-white"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-red-950/5 border-y border-red-950/20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mb-4">
                <Tag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
              <p className="text-red-200/70">
                All our merchandise is made with high-quality materials built to last through countless coding sessions.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Unique Designs</h3>
              <p className="text-red-200/70">
                Each piece features unique designs created by our in-house team of developer-artists.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Free Shipping</h3>
              <p className="text-red-200/70">
                Enjoy free shipping on all orders over $75. International shipping available to most countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section had to include a little deal hehe*/}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-10 text-center">
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              LIMITED TIME OFFER
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get 15% Off Your First Order
            </h2>
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              CODE: CWA15
            </Badge>
            <p className="text-lg text-red-200/70 mb-8 max-w-2xl mx-auto">
              Enter the promotion code at checkout and receive a 15% discount code for your first merchandise purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/merchandise">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                    text-white border border-red-800/30 shadow-lg shadow-red-950/20"
                >
                  Shop Now
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-red-800/30 text-red-400 bg-red-950/20 hover:bg-red-950/30 hover:text-white"
              >
                Sign Up For Newsletter
                <Send className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}