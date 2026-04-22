"use client";

import { useEffect, useState } from "react";

/**
 * A thin bar that sits under the navbar and fills as the user scrolls the
 * article. Purely visual; respects reduced-motion via a single CSS
 * transition on the width.
 */
export function ReadingProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrolled = h.scrollTop;
        const full = h.scrollHeight - h.clientHeight;
        setP(full > 0 ? Math.min(1, Math.max(0, scrolled / full)) : 0);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 right-0 top-[70px] z-40 h-[2px] bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-[#C8102E] via-[#D4AF37] to-[#C8102E] transition-[width] duration-100 ease-out"
        style={{ width: `${p * 100}%` }}
      />
    </div>
  );
}
