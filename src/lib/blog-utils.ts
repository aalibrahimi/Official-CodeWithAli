// src/lib/blog-utils.ts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
    bio?: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
  published?: boolean;
  likes?: number;
  comments?: number;
  shares?: number;
}

/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Calculate estimated reading time based on content
 * Assumes average reading speed of 200 words per minute
 */
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return `${minutes} min`;
}

/**
 * Format date for display
 */
export function formatDate(dateString: string, locale: string = 'en-US'): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(locale, options);
}

/**
 * Format date for SEO (ISO format)
 */
export function formatDateForSEO(dateString: string): string {
  return new Date(dateString).toISOString();
}

/**
 * Extract plain text from HTML content
 */
export function extractTextFromHTML(html: string): string {
  // Remove HTML tags
  const text = html.replace(/<[^>]*>/g, '');
  // Decode HTML entities
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

/**
 * Get related posts based on tags and category
 */
export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3
): BlogPost[] {
  return allPosts
    .filter(post => post.id !== currentPost.id && post.published !== false)
    .map(post => ({
      ...post,
      relevanceScore: calculateRelevanceScore(currentPost, post)
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
}

/**
 * Calculate relevance score between two posts
 */
function calculateRelevanceScore(post1: BlogPost, post2: BlogPost): number {
  let score = 0;
  
  // Same category gets high score
  if (post1.category === post2.category) {
    score += 10;
  }
  
  // Shared tags get points
  const sharedTags = post1.tags.filter(tag => 
    post2.tags.some(otherTag => 
      otherTag.toLowerCase() === tag.toLowerCase()
    )
  );
  score += sharedTags.length * 3;
  
  // Same author gets some points
  if (post1.author.name === post2.author.name) {
    score += 2;
  }
  
  return score;
}

/**
 * Generate SEO metadata for a blog post
 */
export function generateSEOMetadata(post: BlogPost, siteUrl: string) {
  const url = `${siteUrl}/blog/${post.slug}`;
  const publishedTime = formatDateForSEO(post.date);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: url,
      images: [
        {
          url: post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      publishedTime: publishedTime,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Filter posts by search query
 */
export function filterPostsBySearch(posts: BlogPost[], query: string): BlogPost[] {
  if (!query.trim()) return posts;
  
  const searchTerm = query.toLowerCase().trim();
  
  return posts.filter(post => {
    const searchableContent = [
      post.title,
      post.excerpt,
      post.author.name,
      post.category,
      ...post.tags
    ].join(' ').toLowerCase();
    
    return searchableContent.includes(searchTerm);
  });
}

/**
 * Filter posts by category
 */
export function filterPostsByCategory(posts: BlogPost[], category: string): BlogPost[] {
  if (!category || category === 'all') return posts;
  return posts.filter(post => post.category === category);
}

/**
 * Filter posts by tag
 */
export function filterPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  if (!tag) return posts;
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get unique categories from posts
 */
export function getCategoriesFromPosts(posts: BlogPost[]): Array<{name: string, slug: string, count: number}> {
  const categoryMap = new Map<string, number>();
  
  posts.forEach(post => {
    if (post.published !== false) {
      categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
    }
  });
  
  return Array.from(categoryMap.entries()).map(([slug, count]) => ({
    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    slug,
    count
  })).sort((a, b) => b.count - a.count);
}

/**
 * Get unique tags from posts
 */
export function getTagsFromPosts(posts: BlogPost[]): Array<{name: string, count: number}> {
  const tagMap = new Map<string, number>();
  
  posts.forEach(post => {
    if (post.published !== false) {
      post.tags.forEach(tag => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    }
  });
  
  return Array.from(tagMap.entries()).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count);
}

/**
 * Generate table of contents from HTML content
 */
export function generateTableOfContents(htmlContent: string): Array<{id: string, title: string, level: number}> {
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
  const toc: Array<{id: string, title: string, level: number}> = [];
  
  let match;
  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const title = match[2].replace(/<[^>]*>/g, '').trim();
    const id = generateSlug(title);
    
    toc.push({ id, title, level });
  }
  
  return toc;
}

/**
 * Add IDs to headings in HTML content for table of contents
 */
export function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(/<h([1-6])([^>]*)>(.*?)<\/h[1-6]>/gi, (match, level, attributes, content) => {
    const plainContent = content.replace(/<[^>]*>/g, '').trim();
    const id = generateSlug(plainContent);
    const existingId = attributes.match(/id=["']([^"']+)["']/);
    
    if (!existingId) {
      return `<h${level}${attributes} id="${id}">${content}</h${level}>`;
    }
    
    return match;
  });
}

/**
 * Validate blog post data
 */
export function validateBlogPost(post: Partial<BlogPost>): {isValid: boolean, errors: string[]} {
  const errors: string[] = [];
  
  if (!post.title?.trim()) {
    errors.push('Title is required');
  } else if (post.title.length < 5) {
    errors.push('Title must be at least 5 characters long');
  }
  
  if (!post.excerpt?.trim()) {
    errors.push('Excerpt is required');
  } else if (post.excerpt.length < 20) {
    errors.push('Excerpt must be at least 20 characters long');
  }
  
  if (!post.content?.trim()) {
    errors.push('Content is required');
  } else if (post.content.length < 100) {
    errors.push('Content must be at least 100 characters long');
  }
  
  if (!post.category?.trim()) {
    errors.push('Category is required');
  }
  
  if (!post.readTime?.trim()) {
    errors.push('Read time is required');
  }
  
  if (!post.author?.name?.trim()) {
    errors.push('Author name is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}