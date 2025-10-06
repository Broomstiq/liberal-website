'use client'

import Image from 'next/image'
import type { Category, Expertise } from '@/types'
import { urlFor } from '@/lib/sanity'

/**
 * FilterBar - Category and Expertise filter component
 *
 * @description
 * Horizontal filter bar with two rows:
 * - Top row: Categories with Sanity icon images
 * - Bottom row: Expertises with color-coded pills
 *
 * @features
 * - "Tout" button to clear filters
 * - Separate category and expertise filters
 * - Color-coded expertise pills
 * - Active state visual feedback
 * - Mobile: horizontal scroll
 */
interface FilterBarProps {
  categories: Category[]
  expertises: Expertise[]
  activeFilter: { type: 'category' | 'expertise' | null, slug: string | null }
  onFilterChange: (type: 'category' | 'expertise' | null, slug: string | null) => void
}

export function FilterBar({ categories, expertises, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="w-full space-y-4 py-6">
      {/* Categories Row */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 min-w-max px-4">
          {/* "Tout" button */}
          <button
            onClick={() => onFilterChange(null, null)}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 whitespace-nowrap ${
              activeFilter.type === null
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-white border-white hover:bg-white/10'
            }`}
          >
            Tout
          </button>

          {/* Category buttons with Sanity images */}
          {categories.map((category) => {
            const isActive = activeFilter.type === 'category' && activeFilter.slug === category.slug.current
            const hasIcon = category.icon?.asset

            return (
              <button
                key={category._id}
                onClick={() => onFilterChange('category', category.slug.current)}
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
                  <span className="px-6 py-2 rounded-full border-2 border-white text-white whitespace-nowrap">
                    {category.title}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Expertises Row */}
      {expertises.length > 0 && (
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-3 min-w-max px-4">
            {expertises.map((expertise) => {
              const isActive = activeFilter.type === 'expertise' && activeFilter.slug === expertise.slug.current

              return (
                <button
                  key={expertise._id}
                  onClick={() => onFilterChange('expertise', expertise.slug.current)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 whitespace-nowrap border-2 ${
                    isActive
                      ? 'text-black scale-105'
                      : 'text-white border-white/30 hover:border-white/60'
                  }`}
                  style={{
                    backgroundColor: isActive ? expertise.color || '#ffffff' : 'transparent',
                    borderColor: isActive ? expertise.color || '#ffffff' : undefined,
                  }}
                >
                  {expertise.title}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
