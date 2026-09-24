import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { PRICE_FROM } from '../siteConfig'
import './Hero.css'

export default function Hero() {
  const rootRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const video = videoRef.current
    const tryPlay = () => { if (video && !video.ended) video.play().catch(() => {}) }
    tryPlay()
    const onVisible = () => { if (document.visibilityState === 'visible') tryPlay() }
    document.addEventListener('visibilitychange', onVisible)

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.timeline({ defaults: { ease: 'power1.out' } })
          .fromTo('.hero__video-layer', { opacity: 0 }, { opacity: 1, duration: 1.4 })
          .fromTo('.hero__title-line', { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.15 }, '-=0.6')
          .fromTo('.hero__sub, .hero__actions, .hero__meta', { opacity: 0 }, { opacity: 1, duration: 0.7, stagger: 0.15 }, '-=0.4')
        return
      }
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero__video-layer', { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, duration: 1.8, ease: 'power2.out' })
        .fromTo('.hero__title-line', { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.14 }, '-=0.9')
        .fromTo('.hero__sub', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65 }, '-=0.45')
        .fromTo('.hero__actions, .hero__meta', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.15 }, '-=0.5')
    }, rootRef)
    return () => {
      document.removeEventListener('visibilitychange', onVisible)
      ctx.revert()
    }
  }, [])

  return (
    <section id="top" className="hero on-dark" ref={rootRef}>
      <div className="hero__video-layer" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-waterfall.mp4" type="video/mp4" />
        </video>
        <div className="hero__scrim" />
      </div>

      <div className="container hero__inner">
        <h1 className="hero__title">
          <span className="hero__title-line">Vi skapar</span>
          <span className="hero__title-line">skräddarsydda hemsidor.</span>
        </h1>
        <p className="hero__sub">
          Ingen mall, inget färdigpaket. Bara en hemsida som är byggd
          runt dig, ditt varumärke och det du faktiskt behöver.
        </p>
        <div className="hero__actions">
          <Link to="/kontakt" className="btn btn-primary">
            Få ett gratis prisförslag
          </Link>
          <Link to="/tjanster" className="btn-link">
            Våra tjänster
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </div>
        <p className="hero__meta">Från {PRICE_FROM} · Inga fasta paket</p>
      </div>

      <a href="#oversikt" className="hero__scroll" aria-label="Scrolla ner">
        <span className="hero__scroll-dot" />
      </a>
    </section>
  )
}
