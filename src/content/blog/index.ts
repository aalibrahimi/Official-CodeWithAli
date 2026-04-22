import type { BlogPost } from "@/lib/blog/types";
import welcomeToTheStudio from "./posts/welcome-to-the-studio";
import shippingDarkFirst from "./posts/shipping-dark-first";
import howWeScopeABuild from "./posts/how-we-scope-a-build";
import tenLayerSpamDefense from "./posts/ten-layer-spam-defense";

/**
 * Canonical post registry.
 *
 * Authors: register a post here by importing the default export. Sort
 * order is derived from `date`, not registry order, so the list can stay
 * grouped by topic for readability.
 */
const REGISTRY: BlogPost[] = [
  welcomeToTheStudio,
  shippingDarkFirst,
  howWeScopeABuild,
  tenLayerSpamDefense,
];

const published = (p: BlogPost) => !p.draft;
const byDate = (a: BlogPost, b: BlogPost) => (a.date < b.date ? 1 : -1);

export function getAllPosts(): BlogPost[] {
  return REGISTRY.filter(published).sort(byDate);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return REGISTRY.find((p) => p.slug === slug && published(p));
}

export function getFeaturedPost(): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

export function getPostsByTag(tagSlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tagSlug));
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const others = getAllPosts().filter((p) => p.slug !== slug);
  // Score by shared tags + same category
  const scored = others.map((p) => {
    let score = 0;
    if (p.category === current.category) score += 3;
    for (const t of p.tags) if (current.tags.includes(t)) score += 1;
    return { post: p, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.trim().toLowerCase();
  if (!q) return getAllPosts();
  return getAllPosts().filter((p) => {
    const hay = [p.title, p.excerpt, p.category, ...p.tags].join(" ").toLowerCase();
    return hay.includes(q);
  });
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
