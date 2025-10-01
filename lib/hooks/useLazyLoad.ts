'use client'

import { useEffect, useState, RefObject } from 'react'

/**
 * useLazyLoad - Custom hook for lazy loading with IntersectionObserver
 *
 * @description
 * Detects when an element enters the viewport and triggers loading.
 * Used for lazy loading GIFs to improve performance.
 *
 * @param ref - React ref to the element to observe
 * @param threshold - Percentage of visibility to trigger (0.1 = 10%)
 * @param rootMargin - Margin around viewport (e.g., "200px" to load before visible)
 * @returns isVisible - Boolean indicating if element is visible
 */
export function useLazyLoad(
  ref: RefObject<HTMLElement>,
  threshold = 0.1,
  rootMargin = '200px'
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing after first load
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref, threshold, rootMargin])

  return isVisible
}
