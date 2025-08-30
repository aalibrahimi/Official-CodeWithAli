// src/app/api/tags/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // In a real app, fetch from database
    const tags = [
      { name: 'React', count: 25 },
      { name: 'TypeScript', count: 22 },
      { name: 'Next.js', count: 18 },
      { name: 'JavaScript', count: 35 },
      { name: 'AI', count: 15 },
      { name: 'Web Development', count: 42 },
      { name: 'Performance', count: 12 },
      { name: 'CSS', count: 16 },
    ];

    return NextResponse.json({
      success: true,
      data: tags
    });

  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tags' },
      { status: 500 }
    );
  }
}