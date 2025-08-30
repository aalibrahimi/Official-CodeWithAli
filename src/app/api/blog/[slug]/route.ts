// src/app/api/blog/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';

// GET /api/blog/[slug] - Get single blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // Mock data for individual posts
    const mockPosts: Record<string, any> = {
      'state-of-web-development-2025': {
        id: '1',
        title: 'The State of Web Development in 2025: Trends, Tools, and Techniques',
        slug: 'state-of-web-development-2025',
        excerpt: 'An in-depth analysis of the latest web development landscape, including the rise of AI-assisted coding, WebGPU adoption, and the evolution of JS frameworks.',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="lead">The web development landscape in 2025 has evolved dramatically, driven by artificial intelligence, performance optimization, and developer experience improvements.</p>
            
            <h2>The AI Revolution in Development</h2>
            <p>Artificial Intelligence has fundamentally transformed how we write, review, and optimize code. GitHub Copilot, ChatGPT, and specialized coding assistants have become integral parts of the development workflow.</p>
            
            <h2>WebGPU: The Graphics Revolution</h2>
            <p>WebGPU has finally reached widespread adoption, enabling unprecedented performance for web applications.</p>
            
            <h2>Framework Evolution</h2>
            <p>React continues to dominate with Server Components becoming mainstream, while new players like Solid.js and Qwik are gaining traction.</p>
          </div>
        `,
        author: {
          name: 'Ali Alibrahimi',
          avatar: '/codewithali.png',
          role: 'Founder, CodeWithAli',
          bio: 'Full-stack developer with 8+ years of experience building scalable web applications.'
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
      },
      'zerobundlesize': {
        id: 's1',
        title: 'Implementing Zero-Bundle-Size React Hooks for Performance Optimization',
        slug: 'zerobundlesize',
        excerpt: 'Learn how to create efficient custom hooks that don\'t increase your bundle size while improving component performance and reusability',
        content: `
          <div class="prose prose-lg max-w-none">
            <p class="lead">Bundle size optimization is crucial for modern web applications. This guide shows you how to create React hooks that provide maximum functionality while adding zero bytes to your production bundle.</p>
            
            <h2>Understanding Bundle Impact</h2>
            <p>Every hook you create potentially adds to your bundle size. However, with careful planning and modern bundling techniques, you can create hooks that are eliminated during the build process when not used.</p>
            
            <h3>Tree Shaking Optimization</h3>
            <pre><code>// hooks/useZeroBundle.ts
export const useOptimizedState = &lt;T&gt;(initialValue: T) =&gt; {
  // Implementation details...
};</code></pre>
          </div>
        `,
        author: {
          name: 'Ali Alibrahimi',
          avatar: '/codewithali.png',
        },
        date: '2025-05-19',
        readTime: '11 min',
        category: 'web-development',
        tags: ['React', 'Hooks', 'Performance'],
        image: '/codewithali.png',
        likes: 215,
        comments: 42,
        published: true
      }
    };

    const post = mockPosts[slug];

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Increment view count
    post.views = (post.views || 0) + 1;

    return NextResponse.json({
      success: true,
      data: post
    });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PUT /api/blog/[slug] - Update blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const body = await request.json();

    // In a real app, update in database
    console.log(`Updating blog post: ${slug}`, body);

    return NextResponse.json({
      success: true,
      message: 'Blog post updated successfully'
    });

  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[slug] - Delete blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // In a real app, delete from database
    console.log(`Deleting blog post: ${slug}`);

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}