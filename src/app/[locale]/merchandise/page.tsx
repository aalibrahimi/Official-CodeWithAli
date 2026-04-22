/**
 * Merchandise page — rewritten 2026 to match the new design system.
 *
 * Preserves: the i18n catalog, color-based image path resolution
 * (`/merch/<base>_<color>.png`), search / category / sort filters,
 * Stripe paymentLink click-through, and per-item bestseller /
 * featured flags.
 *
 * Replaces: red-gradient hero, red-on-red cards, red-gradient
 * badges, red-washed sections. New design: dark-first, red + black
 * with gold only on tiny eyebrow labels, display typography, and
 * clean product cards with proper hover states.
 */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ShoppingCart, ShoppingBag, Tag, TrendingUp, CheckCircle2, Send,
  Search, Heart, ArrowRight, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

/* ─── Types (preserved from v1) ────────────────────────────────── */

export type Category = "Hoodie" | "Shirt" | "Hat" | "Pants" | "Other";
export type Color =
  | "Black" | "Gray" | "Navy" | "White" | "Red" | "Blue" | "Light-Gray";
export type Size = "S" | "M" | "L" | "XL" | "XXL" | "One Size";

interface MerchItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  paymentLink: string;
  colors: string[];
  sizes: string[];
  description: string;
  featured?: boolean;
  bestseller?: boolean;
  available?: boolean;
}

/* ─── Image path resolution (preserved) ───────────────────────── */

const getImagePath = (baseName: string, color: Color): string => {
  if (baseName === "beanie") return `/merch/beanie_black.png`;
  if (baseName === "cap") return `/merch/cap_black.png`;
  if (baseName === "mug") return `/merch/mug_black.png`;
  return `/merch/${baseName}_${color.toLowerCase()}.png`;
};

/* ─── Color swatch palette ────────────────────────────────────── */

const colorClasses: Record<Color, string> = {
  Black:        "bg-[#0F0F10]",
  Gray:         "bg-[#6B7280]",
  Navy:         "bg-[#1E3A8A]",
  White:        "bg-white border border-[#0F0F10]/20",
  Red:          "bg-[#C8102E]",
  Blue:         "bg-[#2563EB]",
  "Light-Gray": "bg-[#D1D5DB]",
};

/* ─── Page ────────────────────────────────────────────────────── */

export default function MerchandisePage() {
  const t = useTranslations("Merch");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Item catalog — preserved verbatim, same i18n keys as v1.
  const merchandiseItems = [
    { id: 1, name: t("items.1.title"), category: t("items.1.category"), price: 59.99, image: "blue_hoodie", paymentLink: "",
      colors: [t("items.1.colors.1"), t("items.1.colors.2"), t("items.1.colors.3"), t("items.1.colors.4")],
      sizes: ["S","M","L","XL","XXL"], featured: true, bestseller: true, description: t("items.1.desc") },
    { id: 2, name: t("items.2.title"), category: t("items.2.category"), price: 69.99, image: "red_hoodie",
      paymentLink: "https://buy.stripe.com/eVa02NgCa09PamQaEL",
      colors: [t("items.2.colors.1"), t("items.2.colors.2"), t("items.2.colors.3"), t("items.2.colors.4")],
      sizes: ["S","M","L","XL","XXL"], featured: true, bestseller: true, description: t("items.2.desc") },
    { id: 3, name: t("items.3.title"), category: t("items.3.category"), price: 29.99, image: "red_tshirt", paymentLink: "",
      colors: [t("items.3.colors.1"), t("items.3.colors.2"), t("items.3.colors.3"), t("items.3.colors.4"),
               t("items.3.colors.5"), t("items.3.colors.6"), t("items.3.colors.7")],
      sizes: ["S","M","L","XL","XXL"], featured: true, bestseller: false, description: t("items.3.desc") },
    { id: 5, name: t("items.5.title"), category: t("items.5.category"), price: 34.99, image: "blue_sweatshirt", paymentLink: "",
      colors: [t("items.5.colors.1"), t("items.5.colors.2"), t("items.5.colors.3")],
      sizes: ["S","M","L","XL","XXL"], featured: false, description: t("items.5.desc") },
    { id: 6, name: t("items.6.title"), category: t("items.6.category"), price: 44.99, image: "red_sweatshirt", paymentLink: "",
      colors: [t("items.6.colors.1"), t("items.6.colors.2"), t("items.6.colors.3")],
      sizes: ["S","M","L","XL","XXL"], featured: false, description: t("items.6.desc") },
    { id: 7, name: t("items.7.title"), category: t("items.7.category"), price: 22.99, image: "beanie", paymentLink: "",
      colors: [t("items.7.colors.1")], sizes: ["One Size"], featured: true, bestseller: false,
      description: t("items.7.desc"), available: false },
    { id: 8, name: t("items.8.title"), category: t("items.8.category"), price: 22.99, image: "cap", paymentLink: "",
      colors: [t("items.8.colors.1")], sizes: ["One Size"], featured: true, bestseller: false,
      description: t("items.8.desc"), available: false },
    { id: 9, name: t("items.9.title"), category: t("items.9.category"), price: 69.99, image: "mug",
      paymentLink: "",
      colors: [t("items.9.colors.1")], sizes: ["One Size"], featured: true,
      description: t("items.9.desc"), available: false },
  ];

  const collections = [
    { name: t("collection.1.title"), image: "/merchandise/winter-collection.png",    description: t("collection.1.desc"), tint: "#C8102E" },
    { name: t("collection.2.title"), image: "/merchandise/essential-collection.png", description: t("collection.2.desc"), tint: "#0F0F10" },
    { name: t("collection.3.title"), image: "/merchandise/limited-edition.png",      description: t("collection.3.desc"), tint: "#9F0F24" },
  ];

  const categories = [
    t("category.1"), t("category.2"), t("category.3"),
    t("category.4"), t("category.5"), t("category.6"),
  ];

  // Filter + sort logic (preserved from v1)
  const filteredItems = merchandiseItems.filter((item) => {
    if (activeCategory !== "All" && item.category !== activeCategory) return false;
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":  return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "name":       return a.name.localeCompare(b.name);
      case "newest":     return b.id - a.id;
      case "featured":
      default:
        if (a.bestseller && !b.bestseller) return -1;
        if (!a.bestseller && b.bestseller) return 1;
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    }
  });

  return (
    <main className="bg-[#FAF9F6] text-[#0F0F10] antialiased dark:bg-[#0A0A0B] dark:text-[#F4F4F5]">
      <Hero t={t} />
      <Collections collections={collections} t={t} />
      <Shop
        t={t}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        items={sortedItems}
      />
      <FeatureBand t={t} />
      <CTASection t={t} />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */

function Hero({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[720px] rounded-full bg-[#C8102E]/15 blur-[140px] dark:bg-[#C8102E]/10" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0F0F10]/15 bg-[#0F0F10]/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] dark:border-white/15 dark:bg-white/5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
          {t("badge.1")}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-light leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
        >
          {t("title.1")}<br />
          <em className="font-normal italic text-[#C8102E]">{t("title.2")}</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-10 max-w-2xl text-[16px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70 lg:text-[18px]"
        >
          {t("desc")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <Link
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#9F0F24]"
          >
            {t("shopBtn")}
            <ShoppingCart className="h-4 w-4" />
          </Link>
          <a href="#collections" className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0F0F10]/70 hover:text-[#C8102E] dark:text-white/70 dark:hover:text-[#C8102E]">
            Collections →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Collections ─────────────────────────────────────────────── */

function Collections({
  collections, t,
}: { collections: { name: string; image: string; description: string; tint: string }[]; t: ReturnType<typeof useTranslations> }) {
  return (
    <section id="collections" className="border-y border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {t("badge.2")}
            </p>
            <h2
              className="max-w-2xl font-light leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {t("heading.1")}
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {collections.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group h-full overflow-hidden rounded-2xl border border-[#0F0F10]/10 bg-white transition-all hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-[0_30px_60px_-20px_rgba(200,16,46,0.25)] dark:border-white/10 dark:bg-[#0D0D0E]">
                <div
                  className="relative flex aspect-[16/10] items-end overflow-hidden p-6"
                  style={{
                    background: `linear-gradient(135deg, ${c.tint} 0%, #0A0A0B 100%)`,
                  }}
                >
                  <ShoppingBag className="absolute right-6 top-6 h-8 w-8 text-white/30" />
                  <p className="relative text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white/75">
                    Collection
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-[19px] font-semibold tracking-tight">{c.name}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
                    {c.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Shop ─────────────────────────────────────────────────────── */

function Shop({
  t, categories, activeCategory, setActiveCategory,
  searchQuery, setSearchQuery, sortBy, setSortBy, items,
}: {
  t: ReturnType<typeof useTranslations>;
  categories: string[];
  activeCategory: string;
  setActiveCategory: (v: string) => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  sortBy: string;
  setSortBy: (v: string) => void;
  items: MerchItem[];
}) {
  return (
    <section id="shop" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            {t("badge.3")}
          </p>
          <h2
            className="font-light leading-[1.05] tracking-[-0.01em]"
            style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
          >
            {t("heading.2")}
          </h2>
        </motion.div>

        {/* Search + filters */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-md flex-grow">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0F10]/40 dark:text-white/40" />
            <Input
              type="text"
              placeholder={t("category.searchPlaceHolder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full border-[#0F0F10]/10 bg-white pl-11 text-[14px] placeholder:text-[#0F0F10]/50 focus-visible:border-[#C8102E] focus-visible:ring-0 dark:border-white/10 dark:bg-white/[0.03] dark:placeholder:text-white/50"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors"
                style={{
                  borderColor: activeCategory === cat ? "#C8102E" : "rgba(0,0,0,0.10)",
                  background: activeCategory === cat ? "#C8102E" : "transparent",
                  color: activeCategory === cat ? "#fff" : undefined,
                }}
              >
                {cat}
              </button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-[#0F0F10]/15 bg-transparent text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F0F10] hover:bg-[#0F0F10]/5 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                >
                  {t("category.sort.title")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-[#0F0F10]/10 bg-white dark:border-white/10 dark:bg-[#141416]"
              >
                {(["featured","price-low","price-high","name","newest"] as const).map((key, idx) => (
                  <DropdownMenuItem
                    key={key}
                    className="cursor-pointer text-[13px] hover:bg-[#C8102E]/10 hover:text-[#C8102E]"
                    onClick={() => setSortBy(key)}
                  >
                    {t(`category.sort.option.${idx + 1}`)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <MerchCard key={item.id} {...item} t={t} />
          ))}
        </div>

        {items.length === 0 && (
          <div className="mt-20 flex flex-col items-center text-center">
            <Search className="h-8 w-8 text-[#0F0F10]/30 dark:text-white/30" />
            <p className="mt-4 text-[14px] text-[#0F0F10]/60 dark:text-white/60">
              No products match that filter. Try a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Merch card ───────────────────────────────────────────────── */

function MerchCard({
  name, price, category, image, description, colors, sizes,
  paymentLink, featured, bestseller, available, t,
}: {
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
  paymentLink?: string;
  featured?: boolean;
  bestseller?: boolean;
  available?: boolean;
  t: ReturnType<typeof useTranslations>;
}) {
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0] as Color);
  const imagePath = getImagePath(image, selectedColor);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0F0F10]/10 bg-white transition-all hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-[0_30px_60px_-20px_rgba(200,16,46,0.2)] dark:border-white/10 dark:bg-[#0D0D0E]"
    >
      {/* Product image */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#F1EFEA] dark:bg-white/[0.03]">
        {/* Badges */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {bestseller && (
            <span className="rounded-full bg-[#C8102E] px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-white">
              {t("merchComp.badge.1")}
            </span>
          )}
          {featured && !bestseller && (
            <span className="rounded-full bg-[#D4AF37]/15 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              {t("merchComp.badge.2")}
            </span>
          )}
        </div>

        <Image
          src={imagePath}
          alt={`${name} in ${selectedColor}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#0F0F10]/10 bg-white/80 text-[#0F0F10]/70 backdrop-blur-sm transition-all hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/15 dark:bg-white/10 dark:text-white/70"
          style={{ opacity: hovered ? 1 : 0 }}
          aria-label={t("merchComp.wishlistLabel")}
        >
          <Heart className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Product info */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[15px] font-semibold tracking-tight">{name}</h3>
            <p className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              {category}
            </p>
          </div>
          <span className="shrink-0 text-[16px] font-semibold tabular-nums text-[#C8102E]">
            ${price.toFixed(2)}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-[#0F0F10]/65 dark:text-white/65">
          {description}
        </p>

        {/* Color swatches */}
        {colors.length > 0 && (
          <div className="mt-4">
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F0F10]/50 dark:text-white/50">
              {t("merchComp.colorLabel")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {colors.map((c) => {
                const asColor = c as Color;
                const active = selectedColor === asColor;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(asColor)}
                    className={`h-5 w-5 rounded-full transition-all ${colorClasses[asColor] ?? "bg-[#0F0F10]"}`}
                    style={{
                      outline: active ? "2px solid #C8102E" : "1px solid rgba(0,0,0,0.12)",
                      outlineOffset: active ? "2px" : "0",
                    }}
                    title={c}
                    aria-label={`Select ${c} color`}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Sizes */}
        {sizes.length > 1 && (
          <div className="mt-3">
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F0F10]/50 dark:text-white/50">
              {t("merchComp.sizeLabel")}
            </p>
            <div className="flex flex-wrap gap-1">
              {sizes.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[#0F0F10]/10 px-2 py-0.5 text-[10.5px] font-medium dark:border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Buy button */}
        <div className="mt-5 pt-1">
          {paymentLink ? (
            <Link href={paymentLink} target="_blank" className="block">
              <Button
                size="sm"
                className="w-full rounded-full bg-[#C8102E] text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]"
              >
                {t("merchComp.buyBtn")}
                <ShoppingCart className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          ) : (
            <Button
              size="sm"
              disabled
              className="w-full rounded-full border border-[#0F0F10]/10 bg-transparent text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0F0F10]/55 hover:bg-transparent dark:border-white/10 dark:text-white/55"
            >
              {t("merchComp.soonLabel")}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─── Feature band ─────────────────────────────────────────────── */

function FeatureBand({ t }: { t: ReturnType<typeof useTranslations> }) {
  const features = [
    { Icon: Tag, title: t("features.1.title"), desc: t("features.1.desc") },
    { Icon: TrendingUp, title: t("features.2.title"), desc: t("features.2.desc") },
    { Icon: CheckCircle2, title: t("features.3.title"), desc: t("features.3.desc") },
  ];
  return (
    <section className="border-y border-[#0F0F10]/10 bg-[#0F0F10]/[0.02] px-5 py-24 dark:border-white/10 dark:bg-white/[0.02] lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="border-t border-[#0F0F10]/15 pt-6 dark:border-white/15"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8102E]/40 text-[#C8102E]">
              <f.Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-[18px] font-semibold tracking-tight lg:text-[20px]">
              {f.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#0F0F10]/70 dark:text-white/70">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── CTA ──────────────────────────────────────────────────────── */

function CTASection({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <section className="px-5 pb-24 pt-20 lg:px-10 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0F0F10] p-12 text-white dark:bg-[#141416] lg:p-20"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#C8102E]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#C8102E]/15 blur-[120px]" />
        <div className="relative">
          <Sparkles className="h-7 w-7 text-[#C8102E]" />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            {t("badge.4")}
          </p>
          <h2
            className="mt-3 max-w-3xl font-light leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
          >
            {t("cta.title")}
          </h2>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/75 lg:text-[17px]">
            {t("cta.desc")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="#shop"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9F0F24]"
            >
              {t("shopBtn")}
              <ShoppingCart className="h-4 w-4" />
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/75 hover:text-[#C8102E]"
            >
              {t("cta.newsBtn")}
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
