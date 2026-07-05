import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduce = useReducedMotion()

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
          <div className="hero-device-screen">
            {/* Temporary product slideshow until the demo video is ready:
                three screenshots cross-fade every 2s in a seamless loop
                (pure CSS, staggered opacity keyframes, no black gap). */}
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
          </div>
          <img className="hero-device-frame" src="/hero/device-lid.webp" alt="" aria-hidden="true" />
        </motion.div>
        <img className="hero-device-base" src="/hero/device-base.webp" alt="" aria-hidden="true" />
      </div>
    </section>
  )
}
