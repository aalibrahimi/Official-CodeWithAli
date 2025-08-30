
// src/app/api/categories/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // In a real app, fetch from database
    const categories = [
      { id: '1', name: 'Web Development', slug: 'web-development', count: 21 },
      { id: '2', name: 'AI & Machine Learning', slug: 'ai-ml', count: 15 },
      { id: '3', name: 'Tech Trends', slug: 'tech-trends', count: 11 },
      { id: '4', name: 'Developer Q&A', slug: 'developer-qa', count: 9 },
      { id: '5', name: 'Tutorials', slug: 'tutorials', count: 7 },
    ];

    return NextResponse.json({
      success: true,
      data: categories
    });

  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

