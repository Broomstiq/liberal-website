'use client'

import Image from 'next/image'
import type { Category, Expertise } from '@/types'
import { urlFor } from '@/lib/sanity'

/**
 * FilterBar - Category and Expertise filter component
 *
 * @description
 * Horizontal filter bar with two rows:
 * - Top row: Categories with Sanity icon images (single selection)
 * - Bottom row: Expertises with color-coded pills (multiple selection)
 *
 * @features
 * - "Tout" button to clear filters
 * - Single category selection
 * - Multiple expertise selection
 * - Color-coded expertise pills (smaller, subtle)
 * - Active state visual feedback
 * - Mobile: horizontal scroll
 */
interface FilterBarProps {
  categories: Category[]
  expertises: Expertise[]
  activeCategory: string | null
  activeExpertises: string[]
  onCategoryChange: (slug: string | null) => void
  onExpertiseToggle: (slug: string) => void
}

export function FilterBar({ categories, expertises, activeCategory, activeExpertises, onCategoryChange, onExpertiseToggle }: FilterBarProps) {
  return (
    <div className="w-full space-y-3 py-6">
      {/* Categories Row */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 min-w-max px-4">
          {/* "Tout" button */}
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 whitespace-nowrap ${
              activeCategory === null
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-white border-white hover:bg-white/10'
            }`}
          >
            Tout
          </button>

          {/* Category buttons with Sanity images */}
          {categories.map((category) => {
            const isActive = activeCategory === category.slug.current
            const hasIcon = category.icon?.asset

            return (
              <button
                key={category._id}
                onClick={() => onCategoryChange(category.slug.current)}
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

      {/* Expertises Row - Smaller and more subtle */}
      {expertises.length > 0 && (
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 min-w-max px-4">
            {expertises.map((expertise) => {
              const isActive = activeExpertises.includes(expertise.slug.current)
              const color = expertise.color || '#ffffff'

              return (
                <button
                  key={expertise._id}
                  onClick={() => onExpertiseToggle(expertise.slug.current)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 whitespace-nowrap border ${
                    isActive
                      ? 'text-black scale-100 font-medium'
                      : 'text-white/70 hover:text-white hover:border-white/60'
                  }`}
                  style={{
                    backgroundColor: isActive ? color : 'transparent',
                    borderColor: isActive ? color : `${color}60`,
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
