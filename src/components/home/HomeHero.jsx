import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@radix-ui/themes'

const APP_URL = 'https://app.fiberarticle.com'

/* The double chevron every Sign up button on the site carries. */
function Chevrons() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 4.5 L13.4 12 L3 19.5 L3 14.6 L6.6 12 L3 9.4 Z" />
      <path d="M11.6 4.5 L22 12 L11.6 19.5 L11.6 14.6 L15.2 12 L11.6 9.4 Z" />
    </svg>
  )
}

/* A laptop with the product demo playing on its screen. The lid swings open
   when it scrolls into view. */
function Laptop() {
  const reduce = useReducedMotion()
  // The screenshots stay mounted and keep cross-fading until the video is
  // demonstrably playing, so a blocked autoplay, a codec gap or a failed
  // fetch never leaves an empty black screen inside the laptop.
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <div className="hero-device">
      <motion.div
        className="hero-device-lid"
        initial={reduce ? false : { rotateX: -48 }}
        whileInView={{ rotateX: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={'hero-device-screen' + (videoPlaying ? ' is-video' : '')}>
          {/* Fallback: three screenshots cross-fading on a pure-CSS loop.
              Shown until the video reports it is playing, and shown again
              if the video ever errors. */}
          <div className="hero-slideshow" aria-hidden="true">
            {['image-1', 'image-2', 'image-3'].map((name) => (
              <img key={name} className="hero-slide" src={`/product-screenshots/${name}.webp`} alt="" />
            ))}
          </div>

          {/* The product demo, looping silently. muted + playsInline are what
              let iOS and Android autoplay it at all; one H.264 source on
              purpose, since it has hardware decoding on every device. */}
          <video
            className="hero-video"
            src="/hero/demo.mp4"
            poster="/hero/demo-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setVideoPlaying(true)}
            onError={() => setVideoPlaying(false)}
          />
        </div>
        <img className="hero-device-frame" src="/hero/device-lid.webp" alt="" aria-hidden="true" />
      </motion.div>
      <img className="hero-device-base" src="/hero/device-base.webp" alt="" aria-hidden="true" />
    </div>
  )
}

export default function HomeHero() {
  return (
    <section id="hero" className="home-section home-hero">
      <div className="container home-hero-copy">
        <h1 className="home-hero-title">Agentic AI Research Platform</h1>
        <p className="home-hero-lede">
          AI Agents that research, perform literature reviews, and write
          publication-ready manuscripts.
        </p>
        <div className="home-hero-actions">
          {/* The same green Radix "classic" button as Get started at the
              bottom of the page. */}
          <Button asChild variant="classic" color="green" size="3" radius="large">
            <a href={APP_URL}>
              Get Fiberarticle
              <Chevrons />
            </a>
          </Button>
          <Button asChild variant="classic" color="sky" size="3" radius="large" className="home-hero-pricing">
            <Link to="/pricing/">See pricing</Link>
          </Button>
        </div>
      </div>

      <div className="container home-hero-showcase">
        <Laptop />
      </div>
    </section>
  )
}
