import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from '@phosphor-icons/react'
import { CONTACT } from '../siteConfig'
import './ClosingCta.css'

const LOOP_START = 9

export default function ClosingCta() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const toLoopStart = () => {
      video.currentTime = LOOP_START
      video.play().catch(() => {})
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        video.pause()
        return
      }
      if (!video.src) {
        video.preload = 'auto'
        video.addEventListener('loadedmetadata', () => { video.currentTime = LOOP_START }, { once: true })
        video.src = '/videos/hero-waterfall.mp4'
      }
      video.play().catch(() => {})
    }, { rootMargin: '300px 0px' })

    video.addEventListener('ended', toLoopStart)
    observer.observe(video)
    return () => {
      observer.disconnect()
      video.removeEventListener('ended', toLoopStart)
    }
  }, [])

  return (
    <section className="closing on-dark">
      <video
        ref={videoRef}
        className="closing__video"
        muted
        playsInline
        preload="none"
        poster="/images/forest.jpg"
        aria-hidden="true"
      />
      <div className="closing__scrim" aria-hidden="true" />
      <div className="container closing__inner">
        <h2 className="closing__title">Låt oss bygga din hemsida.</h2>
        <p className="closing__text">
          Berätta vad du behöver, så återkommer vi med ett prisförslag.
          Samtalet är alltid kostnadsfritt.
        </p>
        <div className="closing__actions">
          <Link to="/kontakt" className="btn btn-primary">
            Få ett gratis prisförslag
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
          <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="btn-link">
            <Phone size={18} weight="bold" aria-hidden="true" />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
