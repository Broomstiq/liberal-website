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
    <div className="w-full space-y-3 py-6">
      {/* Categories Row */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 min-w-max px-4">
          {/* "Tout" button - clears ALL filters */}
          <button
            onClick={onClearAll}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 whitespace-nowrap ${
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
                className={`px-5 py-2 rounded-lg border-2 transition-all duration-300 whitespace-nowrap font-medium text-sm ${
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
