// src/app/api/upload-image/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename, contentType } = body;

    if (!filename || !contentType) {
      return NextResponse.json(
        { error: 'Filename and content type are required' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const uniqueFilename = `blog/${timestamp}-${filename}`;

    // Create blob URL for upload
    const blob = await put(uniqueFilename, new Uint8Array(), {
      access: 'public',
      contentType,
    });

    return NextResponse.json({
      uploadUrl: blob.url,
      downloadUrl: blob.url,
    });

  } catch (error) {
    console.error('Upload URL generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate upload URL' },
      { status: 500 }
    );
  }
}
