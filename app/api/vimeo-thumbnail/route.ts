import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route to fetch Vimeo video thumbnails
 * Uses Vimeo oEmbed API (no authentication required for public videos)
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const videoId = searchParams.get('videoId')

  if (!videoId) {
    return NextResponse.json(
      { error: 'Missing videoId parameter' },
      { status: 400 }
    )
  }

  try {
    // Use Vimeo oEmbed API - works for public/embeddable videos
    const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`
    const response = await fetch(oEmbedUrl, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!response.ok) {
      throw new Error(`Vimeo API error: ${response.status}`)
    }

    const data = await response.json()

    // Return the thumbnail URL from the oEmbed response
    return NextResponse.json({
      thumbnail: data.thumbnail_url,
      width: data.thumbnail_width,
      height: data.thumbnail_height,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
      },
    })
  } catch (error) {
    console.error('Error fetching Vimeo thumbnail:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Vimeo thumbnail', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
