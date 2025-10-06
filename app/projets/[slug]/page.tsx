import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { Header } from '@/components/Header'
import { VideoPlayer } from '@/components/VideoPlayer'
import { ImageViewer } from '@/components/ImageViewer'
import { getProjectBySlug, getProjects } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import type { Category, GalleryImage } from '@/types'

/**
 * Project Detail Page
 *
 * @description
 * Individual project page with:
 * - YouTube/Vimeo video player
 * - Project metadata (client, year, role, categories)
 * - Context text (Portable Text from Sanity)
 * - Breadcrumb navigation
 */
interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 pb-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Travaux
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span>{project.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{project.title}</h1>

          {/* Media Display - Show all available main media */}
          <div className="space-y-8 mb-12">
            {/* Video */}
            {(project.youtubeUrl || project.vimeoUrl) && (
              <div>
                <VideoPlayer
                  youtubeUrl={project.youtubeUrl}
                  vimeoUrl={project.vimeoUrl}
                  title={project.title}
                />
              </div>
            )}

            {/* Main Image */}
            {project.mainImage && (
              <div>
                <ImageViewer
                  src={urlFor(project.mainImage).width(1920).url()}
                  alt={project.title}
                  priority={!project.youtubeUrl && !project.vimeoUrl}
                />
              </div>
            )}

            {/* Main GIF */}
            {project.mainGif && (
              <div>
                <ImageViewer
                  src={urlFor(project.mainGif).width(1920).url()}
                  alt={`${project.title} - Animation`}
                  priority={!project.youtubeUrl && !project.vimeoUrl && !project.mainImage}
                />
              </div>
            )}

            {/* Fallback if no main media */}
            {!project.youtubeUrl && !project.vimeoUrl && !project.mainImage && !project.mainGif && (
              project.gallery && project.gallery.length > 0 ? (
                <ImageViewer
                  src={urlFor(project.gallery[0]).width(1920).url()}
                  alt={project.title}
                  priority
                />
              ) : (
                <div className="w-full aspect-video bg-gray-900 flex items-center justify-center rounded-lg border-2 border-white/30">
                  <p className="text-white/60">Aucun média disponible</p>
                </div>
              )
            )}
          </div>

          {/* Context Text */}
          {project.contextText && project.contextText.length > 0 && (
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl font-bold mb-4">À propos du projet</h2>
              <div className="prose prose-invert max-w-none">
                <PortableText value={project.contextText} />
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Galerie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image: GalleryImage, index: number) => (
                  <div key={index} className="space-y-2">
                    <ImageViewer
                      src={urlFor(image).width(1200).url()}
                      alt={image.caption || `${project.title} - Image ${index + 1}`}
                    />
                    {image.caption && (
                      <p className="text-sm text-white/60 text-center italic">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {project.client && (
              <div>
                <h3 className="text-sm text-white/60 mb-1">Client / Studio</h3>
                <p className="text-lg">{project.client}</p>
              </div>
            )}

            {project.year && (
              <div>
                <h3 className="text-sm text-white/60 mb-1">Année</h3>
                <p className="text-lg">{project.year}</p>
              </div>
            )}

            {project.role && (
              <div>
                <h3 className="text-sm text-white/60 mb-1">Rôle</h3>
                <p className="text-lg">{project.role}</p>
              </div>
            )}

            {project.categories && project.categories.length > 0 && (
              <div>
                <h3 className="text-sm text-white/60 mb-1">Catégories</h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category: Category) => (
                    <span
                      key={category._id}
                      className="px-3 py-1 border border-white/30 rounded-full text-sm"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Website Link */}
          {project.websiteUrl && (
            <div className="mb-12">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                🔗 Visiter le site web
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-block px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              ← Retour aux travaux
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getProjects(0, 100)

  return projects.map((project: { slug: { current: string } }) => ({
    slug: project.slug.current,
  }))
}
