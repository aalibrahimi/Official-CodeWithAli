// src/components/BlogCard.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ThumbsUp, MessageSquare, Share2, BookmarkIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  likes?: number;
  comments?: number;
  shares?: number;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showStats?: boolean;
  className?: string;
}

export function BlogCard({
  post,
  variant = 'default',
  showExcerpt = true,
  showAuthor = true,
  showDate = true,
  showStats = true,
  className = ""
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (variant === 'compact') {
    return (
      <Card className={`overflow-hidden hover:shadow-md transition-shadow group ${className}`}>
        <div className="flex">
          <div className="w-32 flex-shrink-0">
            <div className="aspect-square w-full">
              <Image
                src={post.image}
                alt={post.title}
                width={128}
                height={128}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="flex-1 p-4">
            <Badge variant="secondary" className="mb-2">
              {post.category}
            </Badge>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2 mb-2">
                {post.title}
              </h3>
            </Link>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime}</span>
              {showDate && (
                <>
                  <span className="mx-2">•</span>
                  <span>{formatDate(post.date)}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow group ${className}`}>
      <div className={`aspect-${variant === 'featured' ? 'video' : '[16/9]'}`}>
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={variant === 'featured' ? 225 : 225}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary">
            {post.category.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Badge>
          {showDate && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className={`${variant === 'featured' ? 'text-2xl' : 'text-xl'} group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2`}>
            {post.title}
          </CardTitle>
        </Link>
      </CardHeader>

      <CardContent>
        {showExcerpt && (
          <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between">
          {showAuthor && (
            <div className="flex items-center">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </span>
                {showDate && (
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {formatDate(post.date)}
                  </div>
                )}
              </div>
            </div>
          )}

          {showStats && (post.likes || post.comments || post.shares) && (
            <div className="flex items-center space-x-3">
              {post.likes && (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  <span className="text-xs">{post.likes}</span>
                </div>
              )}
              {post.comments && (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  <span className="text-xs">{post.comments}</span>
                </div>
              )}
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <BookmarkIcon className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}