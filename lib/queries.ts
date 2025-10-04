import { client } from './sanity'

/**
 * GROQ Queries for Sanity CMS
 *
 * Media fields cascade: mosaicThumbnail > mainGif > mainImage > youtubeUrl > vimeoUrl
 * All media fields fetched to support thumbnail extraction logic
 */

// Get all projects with pagination
export async function getProjects(start = 0, limit = 12, categorySlug?: string) {
  const query = categorySlug
    ? `*[_type == "project" && references(*[_type=="category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) [$start...$end] {
        _id,
        title,
        slug,
        mosaicThumbnail,
        mainGif,
        mainImage,
        youtubeUrl,
        vimeoUrl,
        websiteUrl,
        client,
        year,
        role,
        categories[]-> { _id, title, slug },
        featured,
        publishedAt
      }`
    : `*[_type == "project"] | order(publishedAt desc) [$start...$end] {
        _id,
        title,
        slug,
        mosaicThumbnail,
        mainGif,
        mainImage,
        youtubeUrl,
        vimeoUrl,
        websiteUrl,
        client,
        year,
        role,
        categories[]-> { _id, title, slug },
        featured,
        publishedAt
      }`

  return client.fetch(query, {
    start,
    end: start + limit,
    categorySlug,
  })
}

// Get featured projects
export async function getFeaturedProjects() {
  const query = `*[_type == "project" && featured == true] | order(order asc) [0...5] {
    _id,
    title,
    slug,
    mosaicThumbnail,
    mainGif,
    mainImage,
    youtubeUrl,
    vimeoUrl,
    client,
    year,
    categories[]-> { title, slug }
  }`

  return client.fetch(query)
}

// Get single project by slug
export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mosaicThumbnail,
    mainGif,
    mainImage,
    gallery,
    youtubeUrl,
    vimeoUrl,
    websiteUrl,
    client,
    year,
    role,
    categories[]-> { _id, title, slug },
    contextText,
    publishedAt
  }`

  return client.fetch(query, { slug })
}

// Get all categories
export async function getCategories() {
  const query = `*[_type == "category"] | order(order asc, title asc) {
    _id,
    title,
    slug,
    icon,
    order
  }`

  return client.fetch(query)
}
