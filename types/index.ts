import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageAsset } from '@sanity/image-url/lib/types/types'

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  icon?: SanityImage
  description?: string
  order?: number
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface GalleryImage extends SanityImage {
  caption?: string
}

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string

  // Media fields (at least one visual required via Sanity validation)
  mosaicThumbnail?: SanityImage
  mainGif?: SanityImage
  mainImage?: SanityImage
  gallery?: GalleryImage[]
  youtubeUrl?: string
  websiteUrl?: string

  // Metadata (all optional)
  client?: string
  year?: number
  role?: string
  categories?: Category[]
  contextText?: PortableTextBlock[]

  // Display options
  featured: boolean
  order?: number
}
