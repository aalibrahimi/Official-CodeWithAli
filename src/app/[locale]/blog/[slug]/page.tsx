// src/app/[locale]/blog/[slug]/page.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Bookmark,
  Twitter,
  Facebook,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data - In a real app, this would come from your database/CMS
const blogPosts = {
  "state-of-the-web-development-2025": {
    id: "1",
    title: "The State of Web Development in 2025: Trends, Tools, and Techniques",
    slug: "state-of-the-web-development-2025",
    excerpt: "An in-depth analysis of the latest web development landscape, including the rise of AI-assisted coding, WebGPU adoption, and the evolution of JS frameworks.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">The web development landscape in 2025 has evolved dramatically, driven by artificial intelligence, performance optimization, and developer experience improvements. This comprehensive analysis explores the key trends, tools, and techniques shaping modern web development.</p>
        
        <h2>The AI Revolution in Development</h2>
        <p>Artificial Intelligence has fundamentally transformed how we write, review, and optimize code. GitHub Copilot, ChatGPT, and specialized coding assistants have become integral parts of the development workflow, increasing productivity by an estimated 40-60% across teams.</p>
        
        <h3>Key AI Tools Dominating 2025:</h3>
        <ul>
          <li><strong>GitHub Copilot X:</strong> Now with context-aware suggestions and entire function generation</li>
          <li><strong>Cursor IDE:</strong> AI-first code editor with natural language commands</li>
          <li><strong>v0.dev:</strong> Component generation from simple descriptions</li>
          <li><strong>Replit Ghostwriter:</strong> Collaborative AI coding in the cloud</li>
        </ul>
        
        <h2>WebGPU: The Graphics Revolution</h2>
        <p>WebGPU has finally reached widespread adoption, enabling unprecedented performance for web applications. From 3D visualizations to machine learning inference, WebGPU is powering the next generation of web experiences.</p>
        
        <pre><code>// Example WebGPU compute shader
const computeShader = device.createShaderModule({
  code: \`
    @compute @workgroup_size(64)
    fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
      let index = global_id.x;
      if (index >= arrayLength(&data)) {
        return;
      }
      data[index] = data[index] * 2.0;
    }
  \`
});
</code></pre>
        
        <h2>Framework Evolution</h2>
        <p>React continues to dominate with Server Components becoming mainstream, while new players like Solid.js and Qwik are gaining traction for their innovative approaches to reactivity and resumability.</p>
        
        <h3>2025 Framework Landscape:</h3>
        <ul>
          <li><strong>React 19:</strong> Concurrent features and improved Suspense</li>
          <li><strong>Next.js 15:</strong> Enhanced App Router and Turbo optimizations</li>
          <li><strong>SvelteKit:</strong> Growing adoption with excellent performance</li>
          <li><strong>Solid.js:</strong> Fine-grained reactivity without virtual DOM</li>
        </ul>
        
        <h2>Performance-First Development</h2>
        <p>Core Web Vitals have become non-negotiable, with tools like Lighthouse CI integrated into every deployment pipeline. The focus has shifted from "works on my machine" to "performs for every user."</p>
        
        <h2>The Developer Experience Renaissance</h2>
        <p>Developer tooling has reached new heights with instant hot reload, zero-config setups, and integrated testing environments. The time from idea to deployed feature has never been shorter.</p>
        
        <h2>Looking Ahead</h2>
        <p>As we progress through 2025, we're seeing the convergence of AI, performance optimization, and developer experience creating unprecedented opportunities for web developers. The key is staying adaptable while focusing on fundamentals.</p>
      </div>
    `,
    author: {
      name: "Ali Alibrahimi",
      avatar: "/codewithali.png",
      role: "Founder, CodeWithAli",
      bio: "Full-stack developer with 8+ years of experience building scalable web applications. Passionate about emerging technologies and developer education."
    },
    date: "2025-05-20",
    readTime: "15 min",
    category: "tech-trends",
    tags: ["Web Development", "2025 Trends", "JavaScript", "AI"],
    image: "/codewithali.png",
    likes: 247,
    comments: 53,
    shares: 129,
    featured: true
  },
  "zerobundlesize": {
    id: "s1",
    title: "Implementing Zero-Bundle-Size React Hooks for Performance Optimization",
    slug: "zerobundlesize",
    excerpt: "Learn how to create efficient custom hooks that don't increase your bundle size while improving component performance and reusability",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">Bundle size optimization is crucial for modern web applications. This guide shows you how to create React hooks that provide maximum functionality while adding zero bytes to your production bundle.</p>
        
        <h2>Understanding Bundle Impact</h2>
        <p>Every hook you create potentially adds to your bundle size. However, with careful planning and modern bundling techniques, you can create hooks that are eliminated during the build process when not used.</p>
        
        <h3>Tree Shaking Optimization</h3>
        <pre><code>// hooks/useZeroBundle.ts
export const useOptimizedState = <T>(initialValue: T) => {
  // Implementation details...
};</code></pre>
      </div>
    `,
    author: {
      name: "Ali Alibrahimi",
      avatar: "/codewithali.png",
    },
    date: "2025-05-19",
    readTime: "11 min",
    category: "web-development",
    tags: ["React", "Hooks", "Performance"],
    image: "/codewithali.png",
    likes: 215,
    comments: 42,
  }
  // Add more blog posts here...
};

const relatedPosts = [
  {
    title: "AI-Assisted Code Generation: A Developer's Guide",
    slug: "ai-assisted-code-generation-guide",
    image: "/codewithali.png",
    readTime: "13 min"
  },
  {
    title: "WebGPU: Practical Examples for Real-World Applications",
    slug: "webgpu-practical-examples",
    image: "/codewithali.png",
    readTime: "10 min"
  },
  {
    title: "Building Type-Safe APIs with tRPC and Next.js",
    slug: "type-safe-apis-trpc-nextjs",
    image: "/codewithali.png",
    readTime: "8 min"
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const locale = useLocale();
  const slug = params.slug as string;
  
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Badge className="bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400">
              {post.category.replace('-', ' ').split(' ').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Badge>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">{post.author.role}</p>
                )}
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Share2 className="h-4 w-4 mr-1" />
                <span>{post.shares}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Social Sharing */}
        <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 dark:border-gray-800 mb-12">
          <div className="flex items-center space-x-4">
            <span className="font-medium">Share this article:</span>
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Author Bio */}
        {post.author.bio && (
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{post.author.name}</CardTitle>
                  {post.author.role && (
                    <p className="text-gray-600 dark:text-gray-400">{post.author.role}</p>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{post.author.bio}</p>
            </CardContent>
          </Card>
        )}

        {/* Related Posts */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="aspect-video">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}