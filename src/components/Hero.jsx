import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduce = useReducedMotion()
  // The screenshots stay mounted and keep cross-fading until the video is
  // demonstrably playing, so a blocked autoplay, a codec gap or a failed
  // fetch never leaves an empty black screen inside the laptop.
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section className="hero" id="hero">
      <img className="hero-beam" src="/hero/beam.webp" alt="" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1
              className="hero-headline"
              data-text={'Agentic AI\nResearch Platform'}
            >
              {'Agentic AI\nResearch Platform'}
            </h1>
          </div>
        </div>
      </div>

      <div className="hero-device">
        <motion.div
          className="hero-device-lid"
          initial={reduce ? false : { rotateX: -48 }}
          whileInView={{ rotateX: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={
              'hero-device-screen' + (videoPlaying ? ' is-video' : '')
            }
          >
            {/* Fallback: three screenshots cross-fading on a pure-CSS loop.
                Shown until the video reports it is playing, and shown again
                if the video ever errors. */}
            <div className="hero-slideshow" aria-hidden="true">
              {['image-1', 'image-2', 'image-3'].map((name) => (
                <img
                  key={name}
                  className="hero-slide"
                  src={`/product-screenshots/${name}.webp`}
                  alt=""
                />
              ))}
            </div>

            {/* The product demo, looping silently.

                muted + playsInline are what let iOS and Android autoplay it
                at all; preload="auto" plus a faststart MP4 means playback
                starts on the first few hundred KB rather than the whole
                file. One H.264 source on purpose: it is the only codec with
                hardware decoding on every phone and laptop, so a 1440p loop
                stays smooth on weak devices instead of falling back to a
                software decoder. */}
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
    </section>
  )
}
