'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor, getYouTubeThumbnail } from '@/lib/sanity'
import type { Project } from '@/types'

/**
 * FeaturedCard - Card for "Travaux Phares" section
 *
 * @description
 * Larger card with white border for featured projects.
 * Displays on homepage before main mosaïque.
 * Supports cascade: mosaicThumbnail → mainGif → mainImage → YouTube thumbnail
 *
 * @features
 * - White border (2px)
 * - Hover scale effect (1.05)
 * - Project metadata visible
 * - Auto YouTube thumbnail extraction
 */
interface FeaturedCardProps {
  project: Project
}

export function FeaturedCard({ project }: FeaturedCardProps) {
  // Cascade logic: mosaicThumbnail > mainGif > mainImage > YouTube thumbnail
  const getThumbnailUrl = (): string => {
    if (project.mosaicThumbnail) {
      return urlFor(project.mosaicThumbnail).width(1200).url()
    }
    if (project.mainGif) {
      return urlFor(project.mainGif).width(1200).url()
    }
    if (project.mainImage) {
      return urlFor(project.mainImage).width(1200).url()
    }
    if (project.youtubeUrl) {
      return getYouTubeThumbnail(project.youtubeUrl, 'max') || '/placeholder.png'
    }
    return '/placeholder.png'
  }

  const imageUrl = getThumbnailUrl()

  return (
    <Link
      href={`/projets/${project.slug.current}`}
      className="block relative aspect-video group overflow-hidden rounded-lg border-2 border-white hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={imageUrl}
        alt={project.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
      />

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
