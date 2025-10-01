'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLazyLoad } from '@/lib/hooks/useLazyLoad'
import { urlFor, getYouTubeThumbnail } from '@/lib/sanity'
import type { Project } from '@/types'

/**
 * ProjectCard - Card component for mosaïque grid
 *
 * @description
 * Interactive card displaying GIF preview with hover overlay showing title.
 * Implements lazy loading for performance optimization.
 * Supports cascade: mosaicThumbnail → mainGif → mainImage → YouTube thumbnail
 *
 * @features
 * - Lazy loading with IntersectionObserver
 * - Hover overlay with project title
 * - Click navigates to project detail page
 * - Next.js Image optimization
 * - Auto YouTube thumbnail extraction
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

  // Cascade logic: mosaicThumbnail > mainGif > mainImage > YouTube thumbnail
  const getThumbnailUrl = (): string => {
    if (project.mosaicThumbnail) {
      return urlFor(project.mosaicThumbnail).width(800).url()
    }
    if (project.mainGif) {
      return urlFor(project.mainGif).width(800).url()
    }
    if (project.mainImage) {
      return urlFor(project.mainImage).width(800).url()
    }
    if (project.youtubeUrl) {
      return getYouTubeThumbnail(project.youtubeUrl, 'max') || '/placeholder.png'
    }
    return '/placeholder.png'
  }

  const imageUrl = getThumbnailUrl()

  return (
    <div ref={cardRef} className="relative aspect-video group overflow-hidden rounded-lg">
      <Link href={`/projets/${project.slug.current}`}>
        {isVisible ? (
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-900 animate-pulse" />
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
