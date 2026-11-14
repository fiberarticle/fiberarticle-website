import { useEffect, useRef } from 'react'
import { Button } from '@radix-ui/themes'

const APP_URL = 'https://app.fiberarticle.com'
const LOGO = '/fiberarticle-logos/Fiberarticle_Logo_Without_Background.svg'

/* The logo redrawn as a halftone: the logo is shrunk onto a coarse grid, and
   each grid cell becomes a dot in that cell's colour, bigger where the logo is
   darker. */
function drawHalftone(canvas, img) {
  const rect = canvas.getBoundingClientRect()
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  canvas.width = Math.max(1, Math.round(rect.width * dpr))
  canvas.height = Math.max(1, Math.round(rect.height * dpr))
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  const w = rect.width
  const h = rect.height
  const step = Math.max(5, Math.round(w / 70))

  const off = document.createElement('canvas')
  off.width = Math.ceil(w / step)
  off.height = Math.ceil(h / step)
  const o = off.getContext('2d')
  const pad = off.width * 0.08
  o.drawImage(img, pad, pad, off.width - pad * 2, off.height - pad * 2)
  const data = o.getImageData(0, 0, off.width, off.height).data

  for (let j = 0; j < off.height; j++) {
    for (let i = 0; i < off.width; i++) {
      const k = (j * off.width + i) * 4
      const alpha = data[k + 3] / 255
      if (alpha < 0.05) continue
      const lum = (data[k] * 0.3 + data[k + 1] * 0.59 + data[k + 2] * 0.11) / 255
      const r = step * 0.5 * Math.min(1, alpha * (0.55 + 0.6 * (1 - lum)))
      ctx.fillStyle = `rgb(${data[k]},${data[k + 1]},${data[k + 2]})`
      ctx.beginPath()
      ctx.arc(i * step + step / 2, j * step + step / 2, r, 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

export default function HomeClosing() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    let img = null
    const draw = () => img && drawHalftone(canvas, img)
    const logo = new Image()
    logo.width = 512
    logo.height = 512
    logo.onload = () => {
      img = logo
      draw()
    }
    logo.src = LOGO
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <section id="sources" className="home-section home-closing">
      <div className="container home-closing-inner">
        <div className="home-closing-art">
          <canvas ref={canvasRef} className="home-closing-canvas" aria-hidden="true" />
        </div>
        <div className="home-closing-copy">
          <h2 className="home-closing-title">Your idea deserves to reach the world</h2>
          <p className="home-closing-lede">
            Research can feel lonely: hundreds of papers, long nights, a deadline
            that won’t move. Fiberarticle works beside you, finding, reading and
            writing with you, so you reach the finish line sooner and prouder.
          </p>
          <div className="home-closing-actions">
            {/* The same Radix "classic" button as Sign up in the navbar, in
                green. */}
            <Button asChild variant="classic" color="green" size="3" radius="large">
              <a href={APP_URL}>
                Get started
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3 4.5 L13.4 12 L3 19.5 L3 14.6 L6.6 12 L3 9.4 Z" />
                  <path d="M11.6 4.5 L22 12 L11.6 19.5 L11.6 14.6 L15.2 12 L11.6 9.4 Z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
