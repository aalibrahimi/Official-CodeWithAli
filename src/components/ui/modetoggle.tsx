"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dont know how to make it default dark mode
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // toggle between light and dark themes
  const toggleTheme = () => {
    // Swapped the 'light' and 'dark'. Now it properly saves in localstorage, but it stays on dark mode.
    // Doesnt save light mode

    // Dont know how to make it default dark mode
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="bg-black text-white hover:bg-red-800 hover:text-white dark:bg-white dark:text-black dark:hover:bg-red-800 dark:hover:text-white transition-colors duration-75"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
