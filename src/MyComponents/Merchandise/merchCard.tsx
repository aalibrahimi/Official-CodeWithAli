"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoveredItemStore, MerchVariantStore } from "@/stores/store";
import { Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export type Color =
  | "Black"
  | "Red"
  | "Burgundy"
  | "Gray"
  | "Light-Gray"
  | "Navy"
  | "Blue"
  | "White";
export type Category = "Hoodie" | "Shirt" | "Hat" | "Other";
export type Size = "One Size" | "S" | "M" | "L" | "XL" | "XXL";

interface MerchDetails {
  readonly id: number;
  featured?: boolean;
  bestseller?: boolean;
  name: string;
  category: Category;
  price: number;
  img?: string;
  colors: Color[];
  sizes: Size[];
  description: string;
  paymentLink?: string;
  available?: boolean;
}

const MerchCard = (item: MerchDetails) => {
  // Idk what this is used for but you had it, so i made it into a zustand store
  const { setHoveredItem, hoveredItem } = HoveredItemStore();
  const { setMerchColor, merchColor } = MerchVariantStore();

  useEffect(() => {
    setMerchColor(item.id, "black");
  }, []);

  return (
    <div
      className="bg-red-200 dark:bg-black/60 border border-red-900 rounded-xl overflow-hidden group"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(0)}
    >
      <div className="relative aspect-square bg-gradient-to-br from-red-600/40 to-red-400/10 dark:from-red-950/40 dark:to-red-900/10">
        {/* Product badges */}
        {item.bestseller && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-red-700 text-white border-transparent">
              Bestseller
            </Badge>
          </div>
        )}

        {/* NEED TO FIX IMAGE SIZING AND POSITION */}
        {/* once we actually have the images then we would implement next/images here*/}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <div className="relative w-3/4 h-3/4"> */}
          {item.img ? (
            // Need to work on image display. Want to make img previewer component to pop the img out and make it bigger for preview
            <Image
              src={`/merch/${item.img}_${merchColor[item.id]}.png`}
              alt={item.name.toLowerCase()}
              width={500}
              height={500}
              className={`h-auto w-45 ${item.available === false ? 'brightness-50' : ''} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            />
          ) : (
            <>
              {/* Placeholder for product image */}
              <Tag className="h-20 w-20 text-red-500/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </>
          )}
          {/* </div> */}
        </div>

        {/* Quick actions overlay */}
        <div
          className={`absolute inset-0 bg-red-200/50 dark:bg-black/70 flex items-center justify-center transition-opacity duration-300 ${
            hoveredItem === item.id ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      <div className="p-5">
        <div className="mb-1 flex items-center">
          <Badge className="bg-red-600/50 dark:bg-red-900/30 dark:text-red-400 border-transparent text-xs">
            {item.category}
          </Badge>

          {/* Star rating cute idea but not really strongly attached to it */}
          {/* <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-red-500 fill-red-500" />
                      ))}
                    </div> */}
        </div>

        <h3 className="text-lg font-bold text-red-900 dark:text-white mb-1">{item.name}</h3>

        {item.available === false && (
          <h3 className="text-sm italic text-black/80 dark:text-gray-300">Coming Soon...</h3>
        )}

        <div className="flex justify-between items-center mt-3">
          <span className={`${item.available === false ? 'text-lg italic font-bold line-through text-red-900 dark:text-gray-300' : 'text-xl font-bold text-red-900 dark:text-white'}`}>${item.price}</span>
          {item.paymentLink?.trim() ? (
            <Link href={item.paymentLink} target="_blank">
              <Button
                size="sm"
                className="bg-red-700 hover:bg-red-900 dark:bg-red-800/40 dark:hover:bg-red-800 hover:cursor-pointer dark:text-white text-sm"
              >
                Buy Now
              </Button>
            </Link>
          ) : (
            <Button
              size="sm"
              className="bg-red-600/50 dark:bg-red-950/40 hover:bg-red-600/50 dark:hover:bg-red-950/40 hover:cursor-not-allowed text-red-900 dark:text-gray-500 text-sm select-none"
            >
              {item.available === false ? 'Coming Soon' : 'Out of Stock'}
            </Button>
          )}
        </div>

        {/* Color options */}
        <div className="mt-4 flex gap-1">
          {item.colors.map((color: string, i: any) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-red-600/30 dark:border-red-300/30"
              // Key and ID need to be the same so color switching is for individual
              onClick={() => setMerchColor(item.id, color.toLowerCase())}
              style={{
                backgroundColor: color.toLowerCase(),
                // Removed this bc it was causing issues loading up colors. Pretty much conflicting with above value and causing no render at all
                // background: color.toLowerCase() === "white" ? "white" : undefined
              }}
              title={color}
            />
          ))}
          <span className="text-red-600/70 dark:text-red-300/70 text-xs ml-2 mt-0.5">
            {item.colors.length} colors
          </span>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;
