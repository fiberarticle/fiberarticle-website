import { useEffect, useMemo, useRef } from 'react'

/**
 * Giant footer wordmark built from little paper sheets, one per pixel of a
 * blocky letter grid (the desktop-icons-spelling-a-word style). Static SVG
 * pile with deterministic jitter, plus a pointer effect: every sheet near
 * the cursor lifts and grows, strongest at the center of the bunch.
 */

// 7-row pixel font. Rows 0-1 are the ascender zone, rows 2-6 the x-height
// zone. '#' marks a paper. Only the letters of "Fiberarticle" exist.
const LETTERS = {
  F: ['####', '#...', '#...', '###.', '#...', '#...', '#...'],
  i: ['#', '.', '#', '#', '#', '#', '#'],
  b: ['#...', '#...', '###.', '#..#', '#..#', '#..#', '###.'],
  e: ['....', '....', '.##.', '#..#', '####', '#...', '.###'],
  r: ['...', '...', '###', '#..', '#..', '#..', '#..'],
  a: ['....', '....', '.##.', '...#', '.###', '#..#', '.###'],
  t: ['.#.', '.#.', '###', '.#.', '.#.', '.#.', '.##'],
  c: ['....', '....', '.###', '#...', '#...', '#...', '.###'],
  l: ['#.', '#.', '#.', '#.', '#.', '#.', '##'],
}

const WORD = ['F', 'i', 'b', 'e', 'r', 'a', 'r', 't', 'i', 'c', 'l', 'e']

// Deterministic pseudo-random in [0, 1): same jitter on every render.
function rnd(i, salt) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453
  return x - Math.floor(x)
}

// A few papers get a wash of the logo palette; the rest stay plain sheet.
const TINTS = [
  { '--pb': '#ffe2ae', '--pf': '#f0ac3c', '--pl': '#e3a338' }, // amber
  { '--pb': '#d5f0d8', '--pf': '#7ccf86', '--pl': '#8cc996' }, // green
  { '--pb': '#ffdcea', '--pf': '#ff9dc4', '--pl': '#f0a9c6' }, // pink
  { '--pb': '#d9e7fb', '--pf': '#8db8ef', '--pl': '#a2c3ec' }, // blue
]

const U = 10 // grid cell size in SVG units; papers are a bit bigger so they overlap
const RADIUS = 26 // pointer influence radius in SVG units (~2.6 cells)

function buildCells() {
  const cells = []
  let cursor = 0
  for (const ch of WORD) {
    const glyph = LETTERS[ch]
    const w = glyph[0].length
    glyph.forEach((rowStr, row) => {
      for (let col = 0; col < w; col++) {
        if (rowStr[col] === '#') {
          cells.push({ cx: (cursor + col) * U + U / 2, cy: row * U + U / 2 })
        }
      }
    })
    cursor += w + 1
  }
  const width = (cursor - 1) * U

  // Paint top rows first so every sheet rests on the one above it, the way
  // a real pile would read.
  cells.sort((a, b) => a.cy - b.cy || a.cx - b.cx)

  return {
    width,
    cells: cells.map((c, i) => ({
      x: c.cx + (rnd(i, 2) - 0.5) * 1.2,
      y: c.cy + (rnd(i, 3) - 0.5) * 1.2,
      rot: (rnd(i, 1) - 0.5) * 14,
      tint: rnd(i, 4) < 0.13 ? TINTS[Math.floor(rnd(i, 5) * TINTS.length)] : undefined,
    })),
  }
}

export default function PaperWordmark() {
  const svgRef = useRef(null)
  const sheetRefs = useRef([])
  const { width, cells } = useMemo(buildCells, [])

  // Pointer tracking lives outside React: on every mousemove each sheet's
  // transform is written directly, scaled by a smoothstep falloff from the
  // cursor, so a whole bunch of papers rises and settles together.
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let pointer = null

    const apply = () => {
      raf = 0
      const els = sheetRefs.current
      for (let i = 0; i < cells.length; i++) {
        const el = els[i]
        if (!el) continue
        const c = cells[i]
        let t = 0
        if (pointer) {
          const d = Math.hypot(pointer.x - c.x, pointer.y - c.y)
          if (d < RADIUS) {
            const u = 1 - d / RADIUS
            t = u * u * (3 - 2 * u)
          }
        }
        el.style.transform =
          t > 0.001
            ? `rotate(${c.rot.toFixed(1)}deg) translateY(${(-3.2 * t).toFixed(2)}px) scale(${(1 + 0.32 * t).toFixed(3)})`
            : `rotate(${c.rot.toFixed(1)}deg)`
      }
    }

    const onMove = (e) => {
      const m = svg.getScreenCTM()
      if (!m) return
      const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse())
      pointer = { x: p.x, y: p.y }
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      pointer = null
      if (!raf) raf = requestAnimationFrame(apply)
    }

    svg.addEventListener('mousemove', onMove)
    svg.addEventListener('mouseleave', onLeave)
    return () => {
      svg.removeEventListener('mousemove', onMove)
      svg.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [cells])

  return (
    <svg
      ref={svgRef}
      className="paper-word"
      viewBox={`-8 -10 ${width + 16} 88`}
      preserveAspectRatio="xMidYMax meet"
      role="img"
      aria-label="Fiberarticle"
    >
      <defs>
        {/* One paper sheet centered on the origin: body, folded corner,
            faint text lines. Colors read CSS vars so single uses can be
            tinted without redefining the shape. */}
        <g id="fa-paper">
          <path
            d="M-6 -6.75 H2 L6 -2.75 V6.75 H-6 Z"
            fill="var(--pb, #f6f2e9)"
            stroke="rgba(10, 10, 12, 0.55)"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          <path d="M2 -6.75 L6 -2.75 H2 Z" fill="var(--pf, #d7cfbd)" />
          <rect x="-4" y="-3.5" width="6.6" height="1" rx="0.5" fill="var(--pl, #ccc4b1)" />
          <rect x="-4" y="-1.2" width="7.7" height="1" rx="0.5" fill="var(--pl, #ccc4b1)" />
          <rect x="-4" y="1.1" width="5.7" height="1" rx="0.5" fill="var(--pl, #ccc4b1)" />
          <rect x="-4" y="3.4" width="7" height="1" rx="0.5" fill="var(--pl, #ccc4b1)" />
        </g>
      </defs>

      {cells.map((c, i) => (
        <g key={i} transform={`translate(${c.x.toFixed(2)} ${c.y.toFixed(2)})`}>
          <use
            href="#fa-paper"
            ref={(el) => {
              sheetRefs.current[i] = el
            }}
            style={{ ...(c.tint ?? {}), transform: `rotate(${c.rot.toFixed(1)}deg)` }}
          />
        </g>
      ))}
    </svg>
  )
}
