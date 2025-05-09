"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  ShoppingBag,
  Tag,
  TrendingUp,
  CheckCircle,
  Send,
  Search,
  Heart,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

// Types
export type Category = "Hoodie" | "Shirt" | "Hat" | "Pants" | "Other";
export type Color = "Black" | "Gray" | "Navy" | "White" | "Red" | "Blue" | "Light-Gray";
export type Size = "S" | "M" | "L" | "XL" | "XXL" | "One Size";

export interface MerchandiseItem {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  paymentLink: string;
  colors: Color[];
  sizes: Size[];
  featured?: boolean;
  bestseller?: boolean;
  description: string;
  available?: boolean;
}

// Cart context
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: Color;
}

// Helper function to get the correct image path
const getImagePath = (baseName: string, color: Color): string => {
  if (baseName === "beanie") {
    return `/merch/beanie_black.png`;
  }
  
  if (baseName === "cap") {
    return `/merch/cap_black.png`;
  }
  
  if (baseName === "mug") {
    return `/merch/mug_black.png`;
  }
  
  // Normalize color format
  const colorLower = color.toLowerCase();
  
  return `/merch/${baseName}_${colorLower}.png`;
};

//  MerchCard component
const MerchCard: React.FC<{
  id: number;
  featured?: boolean;
  bestseller?: boolean;
  name: string;
  price: number;
  category: Category;
  img: string;
  description: string;
  colors: Color[];
  sizes: Size[];
  paymentLink?: string;
  available?: boolean;
  onAddToCart: (item: CartItem) => void;
}> = ({
  id,
  featured,
  bestseller,
  name,
  price,
  category,
  img,
  description,
  colors,
  sizes,
  paymentLink,
  available = true,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);
  
  // Color mappings for swatches
  const colorClasses: Record<Color, string> = {
    "Black": "bg-black",
    "Gray": "bg-gray-500",
    "Navy": "bg-blue-900",
    "White": "bg-white",
    "Red": "bg-red-500",
    "Blue": "bg-blue-500",
    "Light-Gray": "bg-gray-300"
  };
  
  const handleAddToCart = () => {
    if (available) {
      onAddToCart({
        id,
        name,
        price,
        quantity: 1,
        image: img,
        color: selectedColor
      });
    }
  };
  
  // Get correct image path
  const imagePath = getImagePath(img, selectedColor);
  const t = useTranslations('Merch')
  
  return (
    <div 
    className="relative bg-white dark:bg-black border border-red-300/40 dark:border-red-900/40 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-700 hover:shadow-md hover:shadow-red-950/10 flex flex-col h-full"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {bestseller && (
          <Badge className="bg-amber-200 dark:bg-amber-800/60 text-amber-800 dark:text-amber-300 border-transparent">
            {t('merchComp.badge.1')}
          </Badge>
        )}
        {featured && !bestseller && (
          <Badge className="bg-red-200 dark:bg-red-900/60 text-red-800 dark:text-red-300 border-transparent">
            {t('merchComp.badge.2')}
          </Badge>
        )}
      </div>
      
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-red-50 to-white dark:from-red-950/10 dark:to-black">
        <Image
          src={imagePath}
          alt={`${name} in ${selectedColor}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        
        {/* Quick action buttons */}
        <div 
          className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="icon"
                  variant="secondary"
                  className="h-8 w-8 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm border-black/20 dark:border-white/20 text-black dark:text-white"
                  >
                  <Heart className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('merchComp.wishlistLabel')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="font-medium text-black dark:text-white">{name}</h3>
            <p className="text-sm text-red-600/70 dark:text-red-300/70">{category}</p>
          </div>
          <span className="text-lg font-bold text-black dark:text-white">${price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-red-600/90 dark:text-red-200/70 line-clamp-2 mb-auto">
          {description}
        </p>
        
        {/* Color swatches */}
        {colors.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-red-600/70 dark:text-red-300/70 mb-1">{t('merchComp.colorLabel')}</p>
            <div className="flex flex-wrap gap-1">
              {colors.map((color) => (
                <button
                key={color}
                className={`w-6 h-6 rounded-full ${colorClasses[color]} ${
                  selectedColor === color ? 'ring-2 ring-red-500' : 'ring-1 ring-red-950/20'
                } ${color === 'White' ? 'border border-gray-300' : ''} transition-all duration-200`}
                title={color}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Sizes */}
        {sizes.length > 1 && (
          <div className="mt-2">
            <p className="text-xs text-red-600/70 dark:text-red-300/70 mb-1">{t('merchComp.sizeLabel')}</p>
            <div className="flex flex-wrap gap-1">
              {sizes.map((size) => (
                <span 
                key={size}
                className="text-xs bg-red-100 dark:bg-red-950/20 text-red-600 dark:text-red-300/70 px-1.5 py-0.5 rounded"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Button */}
      <div className="p-4 pt-0">
        {/* <Button
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 dark:from-red-700 dark:to-red-900 dark:hover:from-red-600 dark:hover:to-red-800 text-white border border-red-400/30 dark:border-red-800/30"
          disabled={!available}
          onClick={handleAddToCart}
          >
          {available ? 'Add to Cart' : 'Coming Soon'}
          {available && <ShoppingCart className="ml-2 h-4 w-4" />}
        </Button> */}
        {paymentLink ? (
          <Link href={paymentLink} target="_blank">
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 dark:from-red-700 dark:to-red-900 dark:hover:from-red-600 dark:hover:to-red-800 text-white border border-red-400/30 dark:border-red-800/30 hover:cursor-pointer"
          >
            {t('merchComp.buyBtn')}
          </Button>
        </Link>
        ) : (
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 dark:from-red-700 dark:to-red-900 dark:hover:from-red-600 dark:hover:to-red-800 text-white/60 border border-red-400/30 dark:border-red-800/30"
              >
                {t('merchComp.soonLabel')}
              </Button>
        )}
      </div>
    </div>
  );
};

// Mini cart component
const MiniCart: React.FC<{
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (id: number) => void;
}> = ({ items, isOpen, onClose, onRemoveItem }) => {
  if (!isOpen) return null;
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <div className="absolute top-16 right-0 w-72 bg-white dark:bg-black border border-red-300/40 dark:border-red-900/40 rounded-xl shadow-lg shadow-black/30 z-50 overflow-hidden">
      <div className="p-4 border-b border-red-200/50 dark:border-red-950/30 flex justify-between items-center">
        <h3 className="font-medium text-black dark:text-white">Cart ({totalItems})</h3>
        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      {items.length === 0 ? (
        <div className="p-6 text-center">
          <ShoppingBag className="h-8 w-8 mx-auto text-red-400/60 dark:text-red-500/40 mb-2" />
          <p className="text-red-500/70 dark:text-red-300/70">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex p-3 border-b border-red-200/30 dark:border-red-950/20">
                <div className="w-12 h-12 relative rounded overflow-hidden mr-3 flex-shrink-0">
                  <Image 
                    src={getImagePath(item.image, item.color)}
                    alt={item.name}
                    fill
                    className="object-contain"
                    />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-black dark:text-white">{item.name}</h4>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-5 w-5 text-red-500/70 dark:text-red-300/70"
                      onClick={() => onRemoveItem(item.id)}
                      >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-red-500/70 dark:text-red-300/70">{item.color}, Qty: {item.quantity}</span>
                    <span className="text-sm font-medium text-black dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-red-200/50 dark:border-red-950/30">
            <div className="flex justify-between mb-4">
              <span className="text-red-500/70 dark:text-red-300/70">Subtotal:</span>
              <span className="font-medium text-black dark:text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline"
                className="border-red-400/30 dark:border-red-800/30 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                >
                View Cart
              </Button>
              <Button
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 dark:from-red-700 dark:to-red-900 dark:hover:from-red-600 dark:hover:to-red-800 text-white"
                >
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Main Page Component
export default function MerchandisePage() {
  const router = useRouter();
  const t = useTranslations('Merch');
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  
  // Merchandise data (same as original, kept for reference)
  const merchandiseItems = [
    {
      id: 1,
      name: t('items.1.title'),
      category: t('items.1.category'),
      price: 59.99,
      image: "blue_hoodie",
      paymentLink: "",
      colors: [t('items.1.colors.1'), t('items.1.colors.2'), t('items.1.colors.3'), t('items.1.colors.4')],
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: true,
      bestseller: true,
      description: t('items.1.desc')
    },
    {
      id: 2,
      name: t('items.2.title'),
      category: t('items.2.category'),
      price: 69.99,
      image: "red_hoodie",
      paymentLink: "https://buy.stripe.com/eVa02NgCa09PamQaEL",
      colors: [t('items.2.colors.1'), t('items.2.colors.2'), t('items.2.colors.3'), t('items.2.colors.4')],
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: true,
      bestseller: true,
      description: t('items.2.desc')
    },
    {
      id: 3,
      name: t('items.3.title'),
      category: t('items.3.category'),
      price: 29.99,
      image: "red_tshirt",
      paymentLink: "",
      colors: [t('items.3.colors.1'), t('items.3.colors.2'), t('items.3.colors.3'), t('items.3.colors.4'), t('items.3.colors.5'), t('items.3.colors.6'), t('items.3.colors.7')],
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: true,
      bestseller: false,
      description: t('items.3.desc')
    },
    {
      id: 5,
      name: t('items.5.title'),
      category: t('items.5.category'),
      price: 34.99,
      image: "blue_sweatshirt",
      paymentLink: "",
      colors: [t('items.5.colors.1'), t('items.5.colors.2'), t('items.5.colors.3')],
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: false,
      description: t('items.5.desc')
    },
    {
      id: 6,
      name: t('items.6.title'),
      category: t('items.6.category'),
      price: 44.99,
      image: "red_sweatshirt",
      paymentLink: "",
      colors: [t('items.6.colors.1'), t('items.6.colors.2'), t('items.6.colors.3')],
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: false,
      description: t('items.6.desc')
    },
    {
      id: 7,
      name: t('items.7.title'),
      category: t('items.7.category'),
      price: 22.99,
      image: "beanie",
      paymentLink: "",
      colors: [t('items.7.colors.1')],
      sizes: ["One Size"],
      featured: true,
      bestseller: false,
      description: t('items.7.desc'),
      available: false
    },
    {
      id: 8,
      name: t('items.8.title'),
      category: t('items.8.category'),
      price: 22.99,
      image: "cap",
      paymentLink: "",
      colors: [t('items.8.colors.1')],
      sizes: ["One Size"],
      featured: true,
      bestseller: false,
      description: t('items.8.desc'),
      available: false
    },
    {
      id: 9,
      name: t('items.9.title'),
      category: t('items.9.category'),
      price: 69.99,
      image: "mug", 
      colors: [t('items.9.colors.1')],
      sizes: ["One Size"],
      featured: true,
      description: t('items.9.desc'),
      available: false
    },
  ];
  
  // Featured collections (same as original)
  const collections = [
    { 
      name: t('collection.1.title'), 
      image: "/merchandise/winter-collection.png",
      description: t('collection.1.desc')
    },
    { 
      name: t('collection.2.title'), 
      image: "/merchandise/essential-collection.png",
      description: t('collection.2.desc')
    },
    { 
      name: t('collection.3.title'), 
      image: "/merchandise/limited-edition.png",
      description: t('collection.3.desc')
    }
  ];

  // Filter categories (same as original)
const categories = [t('category.1'), t('category.2'), t('category.3'), t('category.4'), t('category.5'), t('category.6')];


  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Filter merchandise based on selected category and search
  const filteredItems = merchandiseItems.filter(item => {
    // Category filter
    if (activeCategory !== "All" && item.category !== activeCategory) {
      return false;
    }
    
    // Search filter
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
        case "price-high":
          return b.price - a.price;
          case "name":
            return a.name.localeCompare(b.name);
      case "newest":
        return b.id - a.id;
      case "featured":
      default:
        if (a.bestseller && !b.bestseller) return -1;
        if (!a.bestseller && b.bestseller) return 1;
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    }
  });
  
  // Get featured items
  const featuredItems = merchandiseItems.filter(item => item.featured);
  
  // Add to cart handler
  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.color === item.color);
      
      if (existing) {
        // Update quantity if item already in cart
        return prev.map(i => 
          i.id === item.id && i.color === item.color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        // Add new item
        return [...prev, item];
      }
    });
    
    // Show cart
    setIsCartOpen(true);
  };
  
  // Remove from cart handler
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  // Total cart items count
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white overflow-x-hidden">
   
     
      {/* Hero Section */}
      <section className="pt-24 pb-24 relative overflow-hidden dark:bg-black bg-white ">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 border-b-[1px] border-b-red-200/50 dark:border-b-red-950/50">
          <div className="dark:block hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-transparent mb-4 px-3 py-1">
              {t('badge.1')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black dark:text-white">
              {t('title.1')}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
              {t('title.2')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-600/80 dark:text-red-200/80 mb-8">
              {t('desc')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 dark:from-red-700 dark:to-red-900 dark:hover:from-red-600 dark:hover:to-red-800 text-white border border-red-400/30 dark:border-red-800/30 shadow-lg shadow-red-300/20 dark:shadow-red-950/20"
            >
              {t('shopBtn')}
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-red-50/50 dark:bg-red-950/5 border-y border-red-200/20 dark:border-red-950/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10">
            <Badge className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-transparent mb-4 px-3 py-1">
              {t('badge.2')}
            </Badge>
            <h2 className="text-3xl font-bold text-black dark:text-white">{t('heading.1')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <div 
                key={index} 
                className="group cursor-pointer bg-white dark:bg-black/60 border border-red-300/40 dark:border-red-900/40 rounded-xl overflow-hidden hover:border-red-700/60 transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-red-100 to-red-50/30 dark:from-red-950/40 dark:to-red-900/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <ShoppingBag className="h-16 w-16 text-red-400/60 dark:text-red-500/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{collection.name}</h3>
                  <p className="text-red-600/80 dark:text-red-200/70">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the mug, hat, and cap are all too tall and its ruining the padding within the cards*/}

      {/* Shop Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10">
            <Badge className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-transparent mb-4 px-3 py-1">
              {t('badge.3')}
            </Badge>
            <h2 className="text-3xl font-bold text-black dark:text-white">{t('heading.2')}</h2>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex-grow max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-400/50 dark:text-red-300/50" />
              <Input
                type="text"
                placeholder={t('category.searchPlaceHolder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-red-50 dark:bg-red-950/10 border-red-300/50 dark:border-red-900/30 text-black dark:text-white"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === category 
                    ? "bg-red-500 hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-700 text-white border-transparent"
                    : "border-red-300/50 dark:border-red-800/30 text-red-500 dark:text-red-300 hover:text-white hover:bg-red-400/30 dark:hover:bg-red-950/30"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-red-300/50 dark:border-red-800/30 text-red-500 dark:text-red-300">
                    {t('category.sort.title')}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white dark:bg-black/90 border-red-200/30 dark:border-red-950/30">
                  <DropdownMenuItem 
                    className="text-red-500 dark:text-red-300/90 cursor-pointer hover:bg-red-50 dark:hover:bg-red-950/30"
                    onClick={() => setSortBy("featured")}
                  >
                    {t('category.sort.option.1')}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-red-500 dark:text-red-300/90 cursor-pointer hover:bg-red-50 dark:hover:bg-red-950/30"
                    onClick={() => setSortBy("price-low")}
                  >
                    {t('category.sort.option.2')}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-red-500 dark:text-red-300/90 cursor-pointer hover:bg-red-50 dark:hover:bg-red-950/30"
                    onClick={() => setSortBy("price-high")}
                  >
                    {t('category.sort.option.3')}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-red-500 dark:text-red-300/90 cursor-pointer hover:bg-red-50 dark:hover:bg-red-950/30"
                    onClick={() => setSortBy("name")}
                  >
                    {t('category.sort.option.4')}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-red-500 dark:text-red-300/90 cursor-pointer hover:bg-red-50 dark:hover:bg-red-950/30"
                    onClick={() => setSortBy("newest")}
                  >
                    {t('category.sort.option.5')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedItems.map((item) => (
              <MerchCard
                key={item.id}
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
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-red-50/50 dark:bg-red-950/5 border-y border-red-200/20 dark:border-red-950/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 dark:from-red-800 dark:to-red-900 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Tag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">{t('features.1.title')}</h3>
              <p className="text-red-600/80 dark:text-red-200/70">
              {t('features.1.desc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 dark:from-red-800 dark:to-red-900 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">{t('features.2.title')}</h3>
              <p className="text-red-600/80 dark:text-red-200/70">
              {t('features.2.desc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 dark:from-red-800 dark:to-red-900 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">{t('features.3.title')}</h3>
              <p className="text-red-600/80 dark:text-red-200/70">
              {t('features.3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white dark:bg-black/60 border border-red-300/40 dark:border-red-900/40 rounded-xl p-10 text-center hover:border-red-700/60 transition-all duration-300">
            <Badge className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-transparent mb-4 px-3 py-1">
              {t('badge.4')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              {t('cta.title')}
            </h2>
            <Badge className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-transparent mb-4 px-3 py-1">
              {t('badge.5')}
            </Badge>
            <p className="text-lg text-red-600/80 dark:text-red-200/70 mb-8 max-w-2xl mx-auto">
              {t('cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/merchandise">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 dark:from-red-700 dark:to-red-900 dark:hover:from-red-600 dark:hover:to-red-800 text-white border border-red-400/30 dark:border-red-800/30 shadow-lg shadow-red-300/20 dark:shadow-red-950/20"
                >
                  {t('shopBtn')}
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-red-400/30 dark:border-red-800/30 text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-950/20 hover:bg-red-100 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-white"
              >
                {t('cta.newsBtn')}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
     
    </div>
  );
}