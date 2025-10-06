'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLazyLoad } from '@/lib/hooks/useLazyLoad'
import { urlFor, getYouTubeThumbnail, extractVimeoId } from '@/lib/sanity'
import type { Project } from '@/types'

/**
 * ProjectCard - Card component for mosaïque grid
 *
 * @description
 * Interactive card displaying GIF preview with hover overlay showing title.
 * Implements lazy loading for performance optimization.
 * Supports cascade: mosaicThumbnail → mainGif → mainImage → YouTube/Vimeo thumbnail
 *
 * @features
 * - Lazy loading with IntersectionObserver
 * - Hover overlay with project title
 * - Click navigates to project detail page
 * - Next.js Image optimization
 * - Auto YouTube and Vimeo thumbnail extraction
 *
 * @performance
 * - GIF only loads when visible in viewport
 * - Uses Next.js Image with lazy loading
 */
interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isVisible = useLazyLoad(cardRef, 0.1, '200px')
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

    if (needsYoutubeFetch && isVisible && !youtubeThumbnail) {
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
  }, [isVisible, project, youtubeThumbnail])

  // Fetch Vimeo thumbnail if needed
  useEffect(() => {
    const needsVimeoFetch =
      !project.mosaicThumbnail &&
      !project.mainGif &&
      !project.mainImage &&
      !project.youtubeUrl &&
      project.vimeoUrl

    if (needsVimeoFetch && isVisible && !vimeoThumbnail && !isLoadingVimeo) {
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
  }, [isVisible, project, vimeoThumbnail, isLoadingVimeo])

  // Cascade logic: mosaicThumbnail > mainGif > mainImage > YouTube thumbnail > Vimeo thumbnail
  const getThumbnailUrl = (): string | null => {
    if (project.mosaicThumbnail) {
      return urlFor(project.mosaicThumbnail).width(800).url()
    }
    if (project.mainGif) {
      return urlFor(project.mainGif).width(800).url()
    }
    if (project.mainImage) {
      return urlFor(project.mainImage).width(800).url()
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
    <div ref={cardRef} className="relative aspect-video group overflow-hidden rounded-lg">
      <Link href={`/projets/${project.slug.current}`}>
        {isVisible && imageUrl ? (
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-900 animate-pulse flex items-center justify-center">
            {isVisible && !imageUrl && (
              <span className="text-gray-600 text-sm">No media</span>
            )}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            {project.client && (
              <p className="text-sm text-white/80">{project.client}</p>
            )}
            {project.year && (
              <p className="text-sm text-white/60">{project.year}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
