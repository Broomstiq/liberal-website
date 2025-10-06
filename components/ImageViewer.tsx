'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * ImageViewer - Responsive image display with fullscreen overlay
 *
 * @description
 * Displays images that fit within viewport while maintaining aspect ratio.
 * Click to open fullscreen overlay for viewing original size.
 *
 * @features
 * - Responsive: max-height to prevent excessive scrolling
 * - Fullscreen overlay on click
 * - ESC key or click outside to close
 * - Original aspect ratio maintained
 */
interface ImageViewerProps {
  src: string
  alt: string
  priority?: boolean
}

export function ImageViewer({ src, alt, priority = false }: ImageViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const openFullscreen = () => setIsFullscreen(true)
  const closeFullscreen = () => setIsFullscreen(false)

  return (
    <>
      {/* Main Image Display */}
      <div className="relative w-full flex justify-center rounded-lg overflow-hidden">
        <div
          className="relative cursor-zoom-in group max-h-[70vh]"
          onClick={openFullscreen}
        >
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto max-w-full max-h-[70vh] object-contain"
            priority={priority}
            unoptimized
          />
          {/* Zoom hint overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-4 py-2 rounded-full">
              <p className="text-sm">Cliquer pour agrandir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeFullscreen}
          onKeyDown={(e) => e.key === 'Escape' && closeFullscreen()}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors text-4xl font-light w-12 h-12 flex items-center justify-center"
            onClick={closeFullscreen}
            aria-label="Fermer"
          >
            ×
          </button>

          {/* Full size image */}
          <div className="relative max-w-full max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto max-w-full max-h-[95vh] object-contain"
              priority
              unoptimized
            />
          </div>

          {/* ESC hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            ESC ou cliquer à l&apos;extérieur pour fermer
          </div>
        </div>
      )}
    </>
  )
}
