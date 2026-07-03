import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="hero">
      <img className="hero-beam" src="/hero/beam.webp" alt="" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-headline" data-text="Agentic AI Research Platform">
              Agentic AI Research Platform
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
            <p className="hero-screen-placeholder">
              Video demo will be placed here once it is ready
            </p>
          </div>
          <img className="hero-device-frame" src="/hero/device-lid.webp" alt="" aria-hidden="true" />
        </motion.div>
        <img className="hero-device-base" src="/hero/device-base.webp" alt="" aria-hidden="true" />
      </div>
    </section>
  )
}
