'use client'

import Image from 'next/image'
import type { Category } from '@/types'
import { urlFor } from '@/lib/sanity'

/**
 * FilterBar - Category filter component with Sanity-managed images
 *
 * @description
 * Horizontal filter bar using category icon images from Sanity CMS.
 * Falls back to text button if no icon uploaded in Sanity.
 *
 * @features
 * - "Tout" button to clear filters
 * - Dynamic image loading from Sanity icon field
 * - Active state visual feedback (opacity + scale)
 * - Smooth transitions (0.3s)
 * - Mobile: horizontal scroll
 * - Automatic fallback to text if no icon in Sanity
 */
interface FilterBarProps {
  categories: Category[]
  activeFilter: string | null
  onFilterChange: (slug: string | null) => void
}

export function FilterBar({ categories, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-4 min-w-max px-4 py-6">
        {/* "Tout" button - text version */}
        <button
          onClick={() => onFilterChange(null)}
          className={`px-6 py-2 rounded-full border-2 transition-all duration-300 whitespace-nowrap ${
            activeFilter === null
              ? 'bg-white text-black border-white'
              : 'bg-transparent text-white border-white hover:bg-white/10'
          }`}
        >
          Tout
        </button>

        {/* Category buttons with Sanity images */}
        {categories.map((category) => {
          const isActive = activeFilter === category.slug.current
          const hasIcon = category.icon?.asset

          return (
            <button
              key={category._id}
              onClick={() => onFilterChange(category.slug.current)}
              className={`relative transition-all duration-300 hover:scale-105 ${
                isActive ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-90'
              }`}
              aria-label={category.title}
            >
              {hasIcon && category.icon ? (
                <Image
                  src={urlFor(category.icon).width(150).url()}
                  alt={category.title}
                  width={150}
                  height={50}
                  className="h-auto w-auto max-h-8"
                  priority
                />
              ) : (
                // Fallback to text if no icon uploaded in Sanity
                <span className="px-6 py-2 rounded-full border-2 border-white text-white whitespace-nowrap">
                  {category.title}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
