"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Code,
  Smartphone,
  Layers,
  Server,
  Search,
  BriefcaseBusiness,
  ShoppingBag,
  School,
  MoveUpRight,
  CheckCircle,
  Palette,
  ArrowRight,
  Coffee,
  MessageSquare,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const PortfolioPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Apply conditional animation based on device capability and user preference
  const getAnimationProps = (delay = 0) => {
    if (!isMounted || isReducedMotion) {
      return {}; // No animation on SSR or when reduced motion is preferred
    }

    return {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.3, delay },
    };
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-10 pb-20 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="md:pr-8 col-start-1 lg:col-start-2" {...getAnimationProps()}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Coming Soon...
              </h1>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
