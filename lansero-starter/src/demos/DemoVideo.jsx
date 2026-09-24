import { useEffect, useRef } from 'react'

// Muted looping background video. Non-eager videos load only when near the viewport.
export default function DemoVideo({ src, poster, className, eager = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const start = () => {
      if (!video.src) {
        video.preload = 'auto'
        video.src = src
      }
      video.play().catch(() => {})
    }
    if (eager) {
      start()
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start()
      else video.pause()
    }, { rootMargin: '300px 0px' })
    observer.observe(video)
    return () => observer.disconnect()
  }, [src, eager])

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
    />
  )
}
