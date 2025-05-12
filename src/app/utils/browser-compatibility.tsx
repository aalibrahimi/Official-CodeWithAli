"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import { MotionProps } from "motion/react";

// Define TypeScript interfaces
interface ClientOnlyProps {
  children: ReactNode;
}

interface ResponsiveReturn {
  isMobile: boolean;
  isReducedMotion: boolean;
}

interface AnimationVariants {
  hidden: {
    opacity: number;
    y: number;
    willChange?: string;
  };
  visible: {
    opacity: number;
    y: number;
    willChange?: string;
    transition: {
      duration: number;
      ease: number[] | string;
    };
  };
}

/**
 * Improved ClientOnly wrapper component with better handling for Safari and Firefox
 * 
 * I modified this to use useRef to prevent unnecessary re-renders that were
 * happening specifically in Safari and Firefox. By tracking if we've already
 * initialized using a ref, we avoid state updates on subsequent renders.
 */
export const ClientOnly = ({ children }: ClientOnlyProps): ReactNode => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const hasInitialized = useRef<boolean>(false);

  useEffect(() => {
    // I'm using this ref to prevent multiple state updates that were
    // causing re-renders in Safari and Firefox
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      // I added requestAnimationFrame for smoother rendering in Safari/Firefox
      // This helps prevent the flash of unstyled content you were experiencing
      requestAnimationFrame(() => {
        setIsMounted(true);
      });
    }
    
    return () => {
      // Cleanup
      hasInitialized.current = false;
    };
  }, []);

  return isMounted ? children : null;
};

/**
 * Custom hook for responsive design with optimizations for Safari/Firefox
 * 
 * I completely rewrote this to fix issues with Safari/Firefox by:
 * 1. Using debounced resize events to prevent excessive re-renders
 * 2. Adding better cleanup to prevent memory leaks
 * 3. Using refs to track timeout IDs
 * 4. Adding passive event listeners for better performance
 */
export const useResponsive = (): ResponsiveReturn => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const resizeTimeoutRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Initial check for device properties
    const checkMediaQueries = (): void => {
      setIsMobile(window.innerWidth < 768);
      
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
    };
    
    // I added this debounced resize handler to prevent the constant 
    // re-renders you were experiencing in Safari/Firefox
    const handleResize = (): void => {
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      
      // TypeScript doesn't know setTimeout returns number in browser
      resizeTimeoutRef.current = window.setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150) as unknown as number; // Debounce for 150ms
    };
    
    // Initial check
    checkMediaQueries();
    
    // I changed these event listeners to use passive option for better performance
    // This was causing Safari to bog down and trigger additional renders
    window.addEventListener('resize', handleResize, { passive: true });
    
    // I added this specific event for Safari and Firefox for better stability
    window.addEventListener('load', checkMediaQueries);
    
    // I improved the cleanup to prevent memory leaks that were
    // causing strange behavior in Safari/Firefox
    return () => {
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', checkMediaQueries);
    };
  }, []);
  
  return { isMobile, isReducedMotion };
};

/**
 * Returns animation props optimized for cross-browser compatibility
 * 
 * I created this helper to provide optimized animation settings
 * for Safari/Firefox that won't trigger excessive re-renders
 */
export const getOptimizedAnimationProps = (
  isMobile: boolean, 
  isReducedMotion: boolean, 
  delay: number = 0
): MotionProps => {
  // Skip animations for mobile or reduced motion preference
  if (isMobile || isReducedMotion) {
    return {};
  }
  
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { 
      once: true,
      // I reduced the margin for better performance in Safari/Firefox
      margin: "-10% 0px -10% 0px" 
    },
    transition: { 
      duration: 0.4,  // I made animations slightly faster for better performance
      delay: delay,
      // I'm using a different easing curve that works better in Safari/Firefox
      ease: [0.17, 0.67, 0.83, 0.67] // smoother cubic bezier
    }
  };
};

/**
 * Use this to initialize animation variants with browser-optimized settings
 * 
 * I created this to provide animation variants that are optimized for
 * Safari/Firefox and won't cause excessive re-renders
 */
export const createBrowserOptimizedVariants = (): AnimationVariants => {
  return {
    hidden: { 
      opacity: 0, 
      y: 15, // I reduced the transform distance for better Safari performance
      willChange: "opacity, transform" // I added this hint for browser optimization
    },
    visible: {
      opacity: 1,
      y: 0,
      willChange: "opacity, transform",
      transition: { 
        duration: 0.4,
        // I'm using a different easing for better Safari performance
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  };
};