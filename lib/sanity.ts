import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Extract YouTube video ID from various YouTube URL formats
 * Supports: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

/**
 * Get YouTube thumbnail URL from video URL or ID
 * Returns highest quality available (maxresdefault, or falls back to hqdefault)
 */
export function getYouTubeThumbnail(youtubeUrl: string, quality: 'max' | 'high' | 'medium' = 'max'): string | null {
  const videoId = extractYouTubeId(youtubeUrl)
  if (!videoId) return null

  const qualityMap = {
    max: 'maxresdefault.jpg',    // 1280x720
    high: 'hqdefault.jpg',        // 480x360
    medium: 'mqdefault.jpg',      // 320x180
  }

  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}`
}
