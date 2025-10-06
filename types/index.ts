import type { PortableTextBlock } from '@portabletext/types'

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

export interface Expertise {
  _id: string
  title: string
  slug: {
    current: string
  }
  color?: string
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
  vimeoUrl?: string
  websiteUrl?: string

  // Metadata (all optional)
  client?: string
  year?: number
  role?: string
  categories?: Category[]
  expertises?: Expertise[]
  contextText?: PortableTextBlock[]

  // Display options
  featured: boolean
  order?: number
}
