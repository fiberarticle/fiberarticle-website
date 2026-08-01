import { useEffect, useRef } from 'react'

/**
 * Faint field of hex digits behind a dark section, like a data readout seen
 * from far away. Drawn on a canvas, not in the DOM: a full screen holds
 * thousands of cells and that many spans would cost far more than one paint.
 *
 * Every cell keeps its own alpha, taken from how close it sits to the nearest
 * of several bright patches spread over the whole panel, so the field carries
 * light and shade right out to the corners. A few cells per tick swap their
 * digit, which reads as a slow shimmer; only those cells are repainted, so the
 * loop stays cheap.
 */

const CHARS = '0123456789ABCDEF'
const CELL = 14
const FONT_SIZE = 10
const BG = '#040604'
const TICK_MS = 160
/* Share of the cells that change digit on each tick. */
const FLICKER = 0.012

/* Centres of the bright patches, as fractions of the panel. A single lit spot
   in the middle left the top, bottom and both sides dead, so these are placed
   deliberately apart: two along the top edge, two along the bottom, one hard
   left and one hard right, with the rest filling in between. */
const PATCHES = [
  [0.12, 0.07],
  [0.66, 0.13],
  [0.91, 0.31],
  [0.36, 0.44],
  [0.07, 0.63],
  [0.74, 0.72],
  [0.28, 0.88],
  [0.88, 0.94],
]

/* Each patch reaches this far, again as a fraction of the panel rather than a
   pixel count, so a wide desktop block and a tall narrow phone block get the
   same spread instead of the phone collapsing to one flat wash. */
const REACH_X = 0.44
const REACH_Y = 0.28

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

/* How lit a point is: nothing more than the distance to whichever patch is
   closest, smoothed. Taking the nearest rather than the sum keeps a run of
   overlapping patches from stacking into a hot streak. */
function glowAt(x, y, w, h) {
  let best = 0

  for (let i = 0; i < PATCHES.length; i++) {
    const dx = (x - PATCHES[i][0] * w) / (w * REACH_X)
    const dy = (y - PATCHES[i][1] * h) / (h * REACH_Y)
    const t = 1 - Math.min(1, Math.hypot(dx, dy))
    if (t > best) best = t
  }

  /* Smoothstep, so a patch has no rim where it stops. */
  return best * best * (3 - 2 * best)
}

/* One cell per grid slot, minus the ones that stay empty. Both how many digits
   land and how bright each one is follow the glow, but each keeps a floor: the
   coldest corner still has to read, which is the whole point of spreading the
   patches. Alpha is then squared against a random number so most digits sit
   faint and only a few stand out. */
function buildCells(w, h) {
  const cols = Math.ceil(w / CELL)
  const rows = Math.ceil(h / CELL)
  const cells = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * CELL
      const y = row * CELL
      const glow = glowAt(x, y, w, h)
      const density = 0.46 + glow * 0.32

      if (Math.random() > density) continue

      const roll = Math.random()
      const lift = 0.58 + glow * 0.42
      cells.push({
        x,
        y,
        char: pick(),
        color: pickColor(),
        alpha: lift * (0.1 + 0.4 * roll * roll),
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
