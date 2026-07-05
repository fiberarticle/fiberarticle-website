import { useEffect, useRef } from 'react'

/**
 * Faint field of hex digits behind a dark section, like a data readout seen
 * from far away. Drawn on a canvas, not in the DOM: a full screen holds
 * thousands of cells and that many spans would cost far more than one paint.
 *
 * Every cell keeps its own alpha, taken from how close it sits to a bright
 * spot left of centre, so the digits crowd in the middle and fade out at the
 * edges. A few cells per tick swap their digit, which reads as a slow
 * shimmer; only those cells are repainted, so the loop stays cheap.
 */

const CHARS = '0123456789ABCDEF'
const CELL = 14
const FONT_SIZE = 10
const BG = '#040604'
const TICK_MS = 160
/* Share of the cells that change digit on each tick. */
const FLICKER = 0.012

function pick() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

/* Cool paper white for nearly everything, with the odd amber or blue digit so
   the field belongs to the same palette as the rest of the page. */
function pickColor() {
  const r = Math.random()
  if (r > 0.975) return '252, 169, 30'
  if (r > 0.965) return '79, 144, 228'
  return '245, 242, 236'
}

/* One cell per grid slot, minus the ones that stay empty. Alpha falls off with
   distance from the bright spot, and is then squared against a random number so
   most digits sit near invisible and only a few read clearly. */
function buildCells(w, h) {
  const cols = Math.ceil(w / CELL)
  const rows = Math.ceil(h / CELL)
  const focusX = w * 0.46
  const focusY = h * 0.5
  const maxDist = Math.hypot(w, h) * 0.52
  const cells = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * CELL
      const y = row * CELL
      const near = 1 - Math.min(1, Math.hypot(x - focusX, y - focusY) / maxDist)
      const density = 0.12 + near * 0.62

      if (Math.random() > density) continue

      const roll = Math.random()
      cells.push({
        x,
        y,
        char: pick(),
        color: pickColor(),
        alpha: Math.pow(near, 1.7) * (0.06 + 0.55 * roll * roll),
      })
    }
  }

  return cells
}

function paint(ctx, cell) {
  /* The section is one flat colour, so a cell is cleared by painting that
     colour back over it rather than by clearing to transparent. */
  ctx.fillStyle = BG
  ctx.fillRect(cell.x, cell.y, CELL, CELL)
  ctx.fillStyle = `rgba(${cell.color}, ${cell.alpha})`
  ctx.fillText(cell.char, cell.x + 1, cell.y + FONT_SIZE)
}

export default function GlyphRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cells = []
    let timer = null
    let visible = true

    function setFont() {
      ctx.font = `${FONT_SIZE}px 'IBM Plex Mono', Consolas, monospace`
      ctx.textBaseline = 'alphabetic'
    }

    function redraw() {
      const { width, height } = canvas.getBoundingClientRect()
      if (!width || !height) return

      /* Match the device pixel grid so the digits stay crisp, then work in CSS
         pixels for the rest of the drawing. */
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = BG
      ctx.fillRect(0, 0, width, height)
      setFont()

      cells = buildCells(width, height)
      cells.forEach((cell) => paint(ctx, cell))
    }

    function tick() {
      if (visible) {
        const swaps = Math.max(1, Math.round(cells.length * FLICKER))
        for (let i = 0; i < swaps; i++) {
          const cell = cells[Math.floor(Math.random() * cells.length)]
          if (!cell) continue
          cell.char = pick()
          paint(ctx, cell)
        }
      }
      timer = window.setTimeout(tick, TICK_MS)
    }

    redraw()

    const resizeObserver = new ResizeObserver(redraw)
    resizeObserver.observe(canvas)

    /* Nothing to shimmer while the section is scrolled away. */
    const seen = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { rootMargin: '120px' }
    )
    seen.observe(canvas)

    if (!still) timer = window.setTimeout(tick, TICK_MS)

    return () => {
      resizeObserver.disconnect()
      seen.disconnect()
      if (timer) window.clearTimeout(timer)
    }
  }, [])

  return <canvas ref={canvasRef} className="glyph-rain" aria-hidden="true" />
}
