'use client'

/**
 * VideoPlayer - YouTube embed component
 *
 * @description
 * Wrapper for YouTube iframe with custom parameters for clean UI.
 * Removes YouTube branding and suggestions where possible.
 *
 * @features
 * - modestbranding=1 (minimal YouTube UI)
 * - rel=0 (no related videos from other channels)
 * - Responsive aspect ratio (16:9)
 */
interface VideoPlayerProps {
  youtubeUrl?: string
  title: string
}

export function VideoPlayer({ youtubeUrl, title }: VideoPlayerProps) {
  // Extract video ID from YouTube URL
  const getVideoId = (url: string | null | undefined) => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getVideoId(youtubeUrl)

  if (!videoId) {
    return (
      <div className="w-full aspect-video bg-gray-900 flex items-center justify-center rounded-lg">
        <p className="text-white/60">URL YouTube invalide</p>
      </div>
    )
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&showinfo=0&fs=1&iv_load_policy=3&disablekb=0&color=white&playsinline=1`

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-white">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
