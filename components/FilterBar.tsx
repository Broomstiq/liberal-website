'use client'

import Image from 'next/image'
import type { Category } from '@/types'

/**
 * FilterBar - Category filter component with custom tag images
 *
 * @description
 * Horizontal filter bar using custom PNG images for category buttons.
 * Images are white bordered tags with category names.
 * Active filter has increased opacity/scale, inactive has reduced opacity.
 *
 * @features
 * - "Tout" button to clear filters (text button)
 * - Custom PNG images for category tags
 * - Active state visual feedback (opacity + scale)
 * - Smooth transitions (0.3s)
 * - Mobile: horizontal scroll
 */
interface FilterBarProps {
  categories: Category[]
  activeFilter: string | null
  onFilterChange: (slug: string | null) => void
}

// Map category titles to their image filenames
const categoryImageMap: Record<string, string> = {
  'Animation': 'Animation.png',
  'Art Vidéo': 'Art-vidéo.png',
  'Graphisme : Motion-Design': 'Graphisme : Motion-Design.png',
  'Infographie 3D': 'Infographie 3D.png',
  'Vidéo-mapping': 'Vidéo-mapping.png',
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

        {/* Category buttons with custom images */}
        {categories.map((category) => {
          const imageName = categoryImageMap[category.title]
          const isActive = activeFilter === category.slug.current

          return (
            <button
              key={category._id}
              onClick={() => onFilterChange(category.slug.current)}
              className={`relative transition-all duration-300 hover:scale-105 ${
                isActive ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-90'
              }`}
              aria-label={category.title}
            >
              {imageName ? (
                <Image
                  src={`/ressources/categories_tags_white/${imageName}`}
                  alt={category.title}
                  width={150}
                  height={50}
                  className="h-auto w-auto max-h-12"
                  priority
                />
              ) : (
                // Fallback if image not found
                <span className="px-6 py-2 rounded-full border-2 border-white text-white">
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
