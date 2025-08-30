// src/app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { z } from 'zod';

// Validation schema for blog post
const blogPostSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters'),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()),
  readTime: z.string().min(1, 'Read time is required'),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
});

// GET /api/blog - Get all blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const tag = searchParams.get('tag');
    const author = searchParams.get('author');

    // Mock data for now
    const mockPosts = [
      {
        id: '1',
        title: 'The State of Web Development in 2025',
        slug: 'state-of-web-development-2025',
        excerpt: 'An in-depth analysis of the latest web development landscape...',
        content: '...',
        author: {
          name: 'Ali Alibrahimi',
          avatar: '/codewithali.png',
          role: 'Founder, CodeWithAli'
        },
        date: '2025-05-20',
        readTime: '15 min',
        category: 'tech-trends',
        tags: ['Web Development', '2025 Trends', 'JavaScript', 'AI'],
        image: '/codewithali.png',
        likes: 247,
        comments: 53,
        shares: 129,
        published: true
      }
    ];

    // Filter posts based on query parameters
    let filteredPosts = mockPosts.filter(post => post.published);

    if (category && category !== 'all') {
      filteredPosts = filteredPosts.filter(post => post.category === category);
    }

    if (search) {
      const searchTerm = search.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (tag) {
      filteredPosts = filteredPosts.filter(post => 
        post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
      );
    }

    if (author) {
      filteredPosts = filteredPosts.filter(post => 
        post.author.name.toLowerCase() === author.toLowerCase()
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredPosts.length / limit);

    return NextResponse.json({
      success: true,
      data: {
        posts: paginatedPosts,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: filteredPosts.length,
          itemsPerPage: limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        }
      }
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create new blog post
export async function POST(request: NextRequest) {
  try {
    console.log('=== API Route Debug ===');
    
    const formData = await request.formData();
    const image = formData.get('image') as File;
    const dataString = formData.get('data') as string;

    console.log('Image:', image ? `${image.name} (${image.size} bytes)` : 'No image');
    console.log('Data string:', dataString);

    if (!dataString) {
      console.error('No data provided');
      return NextResponse.json(
        { success: false, error: 'No data provided' },
        { status: 400 }
      );
    }

    let data;
    try {
      data = JSON.parse(dataString);
      console.log('Parsed data:', data);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { success: false, error: 'Invalid JSON data' },
        { status: 400 }
      );
    }
    
    // Basic validation with better error messages
    const missingFields = [];
    if (!data.title) missingFields.push('title');
    if (!data.excerpt) missingFields.push('excerpt');
    if (!data.content) missingFields.push('content');
    if (!data.category) missingFields.push('category');

    if (missingFields.length > 0) {
      console.error('Missing fields:', missingFields);
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate with zod
    const validationResult = blogPostSchema.safeParse(data);
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.issues);
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    let imageUrl = '/codewithali.png'; // Default image

    // Upload image if provided
    if (image && image.size > 0) {
      try {
        console.log('Uploading image...');
        const blob = await put(`blog/${Date.now()}-${image.name}`, image, {
          access: 'public',
        });
        imageUrl = blob.url;
        console.log('Image uploaded to:', blob.url);
      } catch (uploadError) {
        console.error('Image upload error:', uploadError);
        // Continue without image rather than failing
      }
    }

    // Generate slug
    const slug = data.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Create blog post object
    const blogPost = {
      id: Date.now().toString(),
      ...validationResult.data,
      slug,
      image: imageUrl,
      author: {
        name: 'Ali Alibrahimi',
        avatar: '/codewithali.png',
        role: 'Founder, CodeWithAli'
      },
      date: new Date().toISOString(),
      likes: 0,
      comments: 0,
      shares: 0,
      views: 0,
      url: `/blog/${slug}`
    };

    console.log('Blog post created:', blogPost);

    return NextResponse.json({
      success: true,
      data: blogPost,
      message: 'Blog post created successfully'
    });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create blog post', details: error},
      { status: 500 }
    );
  }
}