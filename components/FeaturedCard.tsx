'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor, getYouTubeThumbnail, extractVimeoId } from '@/lib/sanity'
import type { Project } from '@/types'

/**
 * FeaturedCard - Card for "Travaux Phares" section
 *
 * @description
 * Larger card with white border for featured projects.
 * Displays on homepage before main mosaïque.
 * Supports cascade: mosaicThumbnail → mainGif → mainImage → YouTube/Vimeo thumbnail
 *
 * @features
 * - White border (2px)
 * - Hover scale effect (1.05)
 * - Project metadata visible
 * - Auto YouTube and Vimeo thumbnail extraction
 */
interface FeaturedCardProps {
  project: Project
}

export function FeaturedCard({ project }: FeaturedCardProps) {
  const [vimeoThumbnail, setVimeoThumbnail] = useState<string | null>(null)
  const [isLoadingVimeo, setIsLoadingVimeo] = useState(false)
  const [youtubeThumbnail, setYoutubeThumbnail] = useState<string | null>(null)

  // Fetch YouTube thumbnail with fallback
  useEffect(() => {
    const needsYoutubeFetch =
      !project.mosaicThumbnail &&
      !project.mainGif &&
      !project.mainImage &&
      project.youtubeUrl

    if (needsYoutubeFetch && !youtubeThumbnail) {
      const maxRes = getYouTubeThumbnail(project.youtubeUrl!, 'max')
      const highRes = getYouTubeThumbnail(project.youtubeUrl!, 'high')

      if (maxRes) {
        // Try maxresdefault first, fallback to hqdefault if 404
        fetch(maxRes, { method: 'HEAD' })
          .then(res => {
            if (res.ok) {
              setYoutubeThumbnail(maxRes)
            } else {
              setYoutubeThumbnail(highRes)
            }
          })
          .catch(() => setYoutubeThumbnail(highRes))
      }
    }
  }, [project, youtubeThumbnail])

  // Fetch Vimeo thumbnail if needed
  useEffect(() => {
    const needsVimeoFetch =
      !project.mosaicThumbnail &&
      !project.mainGif &&
      !project.mainImage &&
      !project.youtubeUrl &&
      project.vimeoUrl

    if (needsVimeoFetch && !vimeoThumbnail && !isLoadingVimeo) {
      const videoId = extractVimeoId(project.vimeoUrl!)
      if (videoId) {
        setIsLoadingVimeo(true)
        fetch(`/api/vimeo-thumbnail?videoId=${videoId}`)
          .then(res => res.json())
          .then(data => {
            if (data.thumbnail) {
              setVimeoThumbnail(data.thumbnail)
            }
          })
          .catch(err => console.error('Failed to fetch Vimeo thumbnail:', err))
          .finally(() => setIsLoadingVimeo(false))
      }
    }
  }, [project, vimeoThumbnail, isLoadingVimeo])

  // Cascade logic: mosaicThumbnail > mainGif > mainImage > YouTube thumbnail > Vimeo thumbnail
  const getThumbnailUrl = (): string | null => {
    if (project.mosaicThumbnail) {
      return urlFor(project.mosaicThumbnail).width(1200).url()
    }
    if (project.mainGif) {
      return urlFor(project.mainGif).width(1200).url()
    }
    if (project.mainImage) {
      return urlFor(project.mainImage).width(1200).url()
    }
    if (youtubeThumbnail) {
      return youtubeThumbnail
    }
    if (vimeoThumbnail) {
      return vimeoThumbnail
    }
    return null
  }

  const imageUrl = getThumbnailUrl()

  return (
    <Link
      href={`/projets/${project.slug.current}`}
      className="block relative aspect-video group overflow-hidden rounded-lg border-2 border-white hover:scale-105 transition-transform duration-300"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      ) : (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <span className="text-gray-600 text-sm">No media</span>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
        <div className="flex gap-4 text-sm text-white/80">
          {project.client && <span>{project.client}</span>}
          {project.year && <span>{project.year}</span>}
        </div>
      </div>
    </Link>
  )
}
