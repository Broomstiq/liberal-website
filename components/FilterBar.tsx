'use client'

import type { Category, Expertise } from '@/types'

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
  onClearAll: () => void
}

export function FilterBar({ categories, expertises, activeCategory, activeExpertises, onCategoryChange, onExpertiseToggle, onClearAll }: FilterBarProps) {
  const hasActiveFilters = activeCategory !== null || activeExpertises.length > 0

  return (
    <div className="sticky top-24 z-40 w-full space-y-3 py-6 bg-black/60 backdrop-blur-md border-b border-white/10">
      {/* Categories Row */}
      <div className="relative w-full">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-3 min-w-max px-4">
            {/* "Tout" button - clears ALL filters */}
            <button
              onClick={onClearAll}
              className={`px-4 py-1.5 rounded-full border-2 transition-all duration-300 whitespace-nowrap text-sm ${
                !hasActiveFilters
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white hover:bg-white/10'
              }`}
            >
              Tout
            </button>

            {/* Category buttons - programmatic design */}
            {categories.map((category) => {
              const isActive = activeCategory === category.slug.current

              return (
                <button
                  key={category._id}
                  onClick={() => onCategoryChange(category.slug.current)}
                  className={`px-4 py-1.5 rounded-lg border-2 transition-all duration-300 whitespace-nowrap text-sm tracking-widest ${
                    isActive
                      ? 'bg-white text-black border-white scale-105'
                      : 'bg-transparent text-white border-white hover:bg-white/10 opacity-70 hover:opacity-90'
                  }`}
                >
                  {category.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* Scroll indicator - right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none" />
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
