'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { FilterBar } from '@/components/FilterBar'
import { ProjectCard } from '@/components/ProjectCard'
import { FeaturedCard } from '@/components/FeaturedCard'
import { getProjects, getFeaturedProjects, getCategories, getExpertises } from '@/lib/queries'
import type { Project, Category, Expertise } from '@/types'

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
  const [expertises, setExpertises] = useState<Expertise[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeExpertises, setActiveExpertises] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsData, featuredData, categoriesData, expertisesData] = await Promise.all([
          getProjects(0, 24),
          getFeaturedProjects(),
          getCategories(),
          getExpertises(),
        ])

        setProjects(projectsData)
        setFeaturedProjects(featuredData)
        setCategories(categoriesData)
        setExpertises(expertisesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Toggle expertise filter (multi-select)
  const handleExpertiseToggle = (slug: string) => {
    setActiveExpertises(prev =>
      prev.includes(slug)
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    )
  }

  // Clear all filters
  const handleClearAll = () => {
    setActiveCategory(null)
    setActiveExpertises([])
  }

  // Check if any filter is active
  const hasActiveFilters = activeCategory !== null || activeExpertises.length > 0

  // Client-side filtering
  const filteredProjects = projects.filter((project) => {
    // Category filter (single, exclusive)
    if (activeCategory) {
      const hasCategory = project.categories?.some((cat) => cat.slug.current === activeCategory)
      if (!hasCategory) return false
    }

    // Expertise filter (multiple, any match)
    if (activeExpertises.length > 0) {
      const hasAnyExpertise = project.expertises?.some((exp) =>
        activeExpertises.includes(exp.slug.current)
      )
      if (!hasAnyExpertise) return false
    }

    return true
  })

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
        {/* Pinned Desintox Project */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-white text-black text-sm font-medium rounded-full mb-4">
              📌 Projet épinglé
            </span>
          </div>
          <Link
            href="/projets/desintox"
            className="block relative aspect-[21/9] rounded-xl overflow-hidden group bg-gradient-to-br from-red-900/20 to-purple-900/20 border-2 border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                Désintox
              </h2>
              <p className="text-xl text-white/80 mb-4">Arte / Libération</p>
              <p className="text-white/60 max-w-2xl mb-6">
                Série d&apos;épisodes pour l&apos;émission Désintox diffusée sur Arte et Libération
              </p>
              <div className="flex gap-3">
                <span className="px-4 py-2 border border-white/30 rounded-lg text-sm">Animation</span>
                <span className="px-4 py-2 border border-white/30 rounded-lg text-sm">Réalisation</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </Link>
        </section>

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
            expertises={expertises}
            activeCategory={activeCategory}
            activeExpertises={activeExpertises}
            onCategoryChange={setActiveCategory}
            onExpertiseToggle={handleExpertiseToggle}
            onClearAll={handleClearAll}
          />
        </section>

        {/* Projects Mosaïque Grid */}
        <section className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
