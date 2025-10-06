'use client'

/**
 * VideoPlayer - Multi-platform video embed component
 *
 * @description
 * Wrapper for video iframes with custom parameters for clean UI.
 * Removes branding and suggestions where possible.
 *
 * @features
 * - Supports YouTube, Vimeo, Dailymotion, and Instagram
 * - YouTube: modestbranding=1, rel=0 (minimal UI, no related videos)
 * - Vimeo: byline=0, portrait=0 (clean player)
 * - Dailymotion: ui-start-screen-info=0 (clean player)
 * - Instagram: embedded posts and reels
 * - Responsive aspect ratio (16:9)
 */
interface VideoPlayerProps {
  youtubeUrl?: string
  vimeoUrl?: string
  dailymotionUrl?: string
  instagramUrl?: string
  title: string
}

export function VideoPlayer({ youtubeUrl, vimeoUrl, dailymotionUrl, instagramUrl, title }: VideoPlayerProps) {
  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string | null | undefined) => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // Extract video ID from Vimeo URL
  const getVimeoId = (url: string | null | undefined) => {
    if (!url) return null
    const patterns = [
      /vimeo\.com\/(\d+)/,
      /vimeo\.com\/video\/(\d+)/,
      /player\.vimeo\.com\/video\/(\d+)/,
    ]
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) return match[1]
    }
    return null
  }

  // Extract video ID from Dailymotion URL
  const getDailymotionId = (url: string | null | undefined) => {
    if (!url) return null
    const patterns = [
      /dailymotion\.com\/video\/([^_]+)/,
      /dai\.ly\/([^_]+)/,
    ]
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) return match[1]
    }
    return null
  }

  // Extract Instagram post/reel ID from URL
  const getInstagramId = (url: string | null | undefined) => {
    if (!url) return null
    const patterns = [
      /instagram\.com\/(?:p|reel)\/([^\/\?]+)/,
    ]
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) return match[1]
    }
    return null
  }

  const youtubeId = getYouTubeId(youtubeUrl)
  const vimeoId = getVimeoId(vimeoUrl)
  const dailymotionId = getDailymotionId(dailymotionUrl)
  const instagramId = getInstagramId(instagramUrl)

  // Priority: YouTube > Vimeo
  if (youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0&controls=1&showinfo=0&fs=1&iv_load_policy=3&disablekb=0&color=white&playsinline=1`

    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-white">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  if (vimeoId) {
    const embedUrl = `https://player.vimeo.com/video/${vimeoId}?byline=0&portrait=0&title=0&color=ffffff`

    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-white">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  if (dailymotionId) {
    const embedUrl = `https://www.dailymotion.com/embed/video/${dailymotionId}?ui-start-screen-info=0`

    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-white">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  if (instagramId) {
    const embedUrl = `https://www.instagram.com/p/${instagramId}/embed/`

    return (
      <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-white">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <div className="w-full aspect-video bg-gray-900 flex items-center justify-center rounded-lg">
      <p className="text-white/60">Aucune URL vidéo valide</p>
    </div>
  )
}
