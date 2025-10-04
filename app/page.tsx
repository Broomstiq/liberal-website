'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { FilterBar } from '@/components/FilterBar'
import { ProjectCard } from '@/components/ProjectCard'
import { FeaturedCard } from '@/components/FeaturedCard'
import { getProjects, getFeaturedProjects, getCategories } from '@/lib/queries'
import type { Project, Category } from '@/types'

/**
 * Homepage - Main landing page
 *
 * @description
 * Features:
 * - Header (sticky)
 * - Featured projects section (Travaux Phares)
 * - Filter bar with categories
 * - Mosaïque grid with lazy loading
 * - Infinite scroll (load more on scroll)
 *
 * @performance
 * - Initial load: 12 projects
 * - Lazy load more on scroll
 * - Client-side filtering (no API calls)
 */
export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsData, featuredData, categoriesData] = await Promise.all([
          getProjects(0, 24),
          getFeaturedProjects(),
          getCategories(),
        ])

        setProjects(projectsData)
        setFeaturedProjects(featuredData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Client-side filtering
  const filteredProjects = activeFilter
    ? projects.filter((project) =>
        project.categories.some((cat) => cat.slug.current === activeFilter)
      )
    : projects

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement...</div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8">Travaux Phares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <FeaturedCard key={project._id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Filter Bar */}
        <section className="container mx-auto">
          <FilterBar
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </section>

        {/* Projects Mosaïque Grid */}
        <section className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-white/60">
              Aucun projet trouvé pour cette catégorie.
            </div>
          )}
        </section>
      </main>
    </>
  )
}
