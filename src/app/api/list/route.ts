import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { blobs } = await list();
    
    // Filter for image files only
    const images = blobs.filter(blob => 
      blob.pathname.match(/\.(jpg|jpeg|png|gif|webp)$/i)
    );
    
    return NextResponse.json(images);
  } catch (error) {
    console.error('List error:', error);
    return NextResponse.json(
      { error: 'Failed to list files' },
      { status: 500 }
    );
  }
} 