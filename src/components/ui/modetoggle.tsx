/**
 * ModeToggle — light/dark switch wired through next-themes.
 *
 * v1 rolled its own localStorage+DOM-class juggling with a comment
 * saying "Dont know how to make it default dark mode". v2 just
 * uses the ThemeProvider mounted in `app/layout.tsx`, which has
 * `defaultTheme="dark"` — so new visitors land in dark mode, and
 * the toggle flips them to light with their choice persisted
 * across visits.
 */
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes won't know the resolved theme until after hydration.
  // We delay rendering the icon until mounted so the server-rendered
  // HTML doesn't mismatch the client.
  useEffect(() => setMounted(true), []);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-full border-none bg-transparent text-[#0F0F10] transition-colors hover:bg-[#C8102E]/10 hover:text-[#C8102E] dark:text-white dark:hover:bg-[#C8102E]/10 dark:hover:text-[#C8102E]"
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun className="h-[1.1rem] w-[1.1rem]" />
        ) : (
          <Moon className="h-[1.1rem] w-[1.1rem]" />
        )
      ) : (
        // Placeholder icon sized identically to prevent layout shift.
        <div className="h-[1.1rem] w-[1.1rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
