// src/types/blog.ts
export interface Author {
  id?: string;
  name: string;
  avatar: string;
  role?: string;
  bio?: string;
  email?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  date: string;
  updatedAt?: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  featured?: boolean;
  published?: boolean;
  draft?: boolean;
  likes?: number;
  comments?: number;
  shares?: number;
  views?: number;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
}

export interface Category {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  count: number;
  color?: string;
  icon?: string;
}

export interface Tag {
  id?: string;
  name: string;
  slug: string;
  count: number;
  color?: string;
}

export interface NewsletterIssue {
  id: string;
  title: string;
  issueNumber: number;
  date: string;
  description: string;
  image: string;
  url: string;
  tags?: string[];
  featured?: boolean;
}

export interface Comment {
  id: string;
  postId: string;
  authorName: string;
  authorEmail?: string;
  authorAvatar?: string;
  content: string;
  date: string;
  approved: boolean;
  parentId?: string; // For nested comments
  likes?: number;
}

export interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: File | null;
  imageAlt?: string;
  readTime: string;
  featured?: boolean;
  published?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  tags: string[];
  author?: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy: 'date' | 'likes' | 'comments' | 'views' | 'title';
  sortOrder: 'asc' | 'desc';
}

export interface BlogStats {
  totalPosts: number;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  averageReadTime: number;
  popularTags: Tag[];
  topCategories: Category[];
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
  children?: TableOfContentsItem[];
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  openGraph: {
    type: string;
    title: string;
    description: string;
    url: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    publishedTime?: string;
    modifiedTime?: string;
    authors: string[];
    tags: string[];
    section?: string;
  };
  twitter: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    images: string[];
    creator?: string;
    site?: string;
  };
  jsonLd?: Record<string, any>;
}

export interface BlogPageProps {
  searchParams?: {
    page?: string;
    category?: string;
    tag?: string;
    search?: string;
    sort?: string;
    order?: string;
  };
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface BlogPostPageProps {
  params: {
    slug: string;
    locale?: string;
  };
}

export interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface BlogConfig {
  postsPerPage: number;
  excerptLength: number;
  enableComments: boolean;
  enableNewsletter: boolean;
  enableSearch: boolean;
  enableSocialSharing: boolean;
  enableRelatedPosts: boolean;
  enableTableOfContents: boolean;
  defaultCategory: string;
  allowedImageTypes: string[];
  maxImageSize: number; // in bytes
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  authorName: string;
  authorEmail: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
    instagram?: string;
  };
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
  pagination: PaginationInfo;
  filters?: SearchFilters;
}

export interface CreatePostRequest {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  published?: boolean;
  image?: string;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface UpdatePostRequest extends Partial<CreatePostRequest> {
  id: string;
}

export interface DeletePostRequest {
  id: string;
}

// Form validation types
export interface FormErrors {
  [key: string]: string | string[] | undefined;
}

export interface FormState<T> {
  values: T;
  errors: FormErrors;
  touched: Record<keyof T, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Component prop types
export interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact' | 'minimal';
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  showStats?: boolean;
}

export interface CategoryBadgeProps {
  category: Category | string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export interface TagBadgeProps {
  tag: Tag | string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  removable?: boolean;
  onRemove?: () => void;
}

export interface PaginationProps {
  pagination: PaginationInfo;
  onPageChange: (page: number) => void;
  showPageNumbers?: boolean;
  showLabels?: boolean;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  showFilters?: boolean;
  filters?: SearchFilters;
  onFiltersChange?: (filters: SearchFilters) => void;
}

// Utility types
export type BlogPostStatus = 'draft' | 'published' | 'archived';

export type SortOption = {
  label: string;
  value: string;
  field: keyof BlogPost;
  order: 'asc' | 'desc';
};

export type ViewMode = 'grid' | 'list' | 'compact';

export type ThemeMode = 'light' | 'dark' | 'system';

// Database/API related types (if using a backend)
export interface DatabaseBlogPost extends Omit<BlogPost, 'author'> {
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface DatabaseAuthor extends Author {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// Event types for analytics
export interface BlogEvent {
  type: 'view' | 'like' | 'share' | 'comment' | 'subscribe';
  postId?: string;
  userId?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}