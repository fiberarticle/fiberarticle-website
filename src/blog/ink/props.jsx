import { EARTH, INK, INK_SOFT, PAPER, PAPER_SHADE, TEXT_LINE, TONES } from './palette.js'
import { Anim, Blob, Box, Burst, Ink, Oval, Poly, Sparkle } from './prims.jsx'
import {
  curve,
  ellipsePath,
  handCurve,
  handEllipse,
  handLine,
  handPoly,
  polyPath,
  r1,
  rng,
  wave,
} from './sketch.js'

/**
 * Objects for the drawings. Each draws itself at the coordinates you pass
 * (the anchor is noted on each), so a static object needs no wrapper. To
 * move one, wrap it in <Anim className="..." origin={[x, y]}> and give the
 * class an animation in the scene's CSS.
 *
 * `tone` is one of amber, pink, green, blue, red, brown, grey (palette.js).
 */

const tint = (tone) => (tone === 'paper' ? PAPER : `url(#fill-${tone})`)
const toneInk = (tone) => (TONES[tone] || TONES.grey).ink

/* ------------------------------------------------------------ paper */

/** A sheet with a folded corner and lines of text. Anchor: top-left. */
export function Sheet({ x = 0, y = 0, w = 60, h = 78, tone = 'paper', lines = 4, fold = 13, seed = 1, sw = 1.7, title = false }) {
  const pts = [
    [x, y],
    [x + w - fold, y],
    [x + w, y + fold],
    [x + w, y + h],
    [x, y + h],
  ]
  const flap = [
    [x + w - fold, y],
    [x + w - fold, y + fold],
    [x + w, y + fold],
  ]
  const r = rng(seed)
  const top = y + fold + 7
  const gap = lines > 0 ? Math.min(10, (h - fold - 14) / lines) : 0
  let text = ''
  for (let i = 0; i < lines; i++) {
    const len = w * (0.42 + r() * 0.32)
    const ly = top + gap * i
    text += handLine(x + 8, ly, x + 8 + len, ly, seed + i * 3, 0.35)
  }

  return (
    <g>
      <path d={polyPath(pts)} fill={tint(tone)} />
      <path d={polyPath(flap)} fill={PAPER_SHADE} />
      <path d={polyPath(flap)} fill="url(#ink-hatch-light)" />
      {title ? <path d={`M${x + 8} ${y + 7}h${w * 0.45}v4h${-w * 0.45}Z`} fill={INK} opacity="0.75" /> : null}
      {lines ? <Ink d={text} c={tone === 'paper' ? TEXT_LINE : TONES[tone].deep} w={1.5} o={tone === 'paper' ? 1 : 0.5} /> : null}
      <Ink d={handPoly(pts, { seed, amp: 0.6, closed: true })} w={sw} />
      <Ink d={handLine(x + w - fold, y, x + w - fold, y + fold, seed + 7, 0.3) + handLine(x + w - fold, y + fold, x + w, y + fold, seed + 8, 0.3)} w={sw * 0.8} />
    </g>
  )
}

/** Sheets fanned out like a hand of cards. Anchor: bottom centre. */
export function Stack({ x = 0, y = 0, w = 58, h = 74, count = 4, spread = 7, seed = 2, tones = [] }) {
  const sheets = []
  for (let i = 0; i < count; i++) {
    const angle = (i - (count - 1) / 2) * spread
    sheets.push(
      <g key={i} transform={`rotate(${r1(angle)} ${x} ${y})`}>
        <Sheet x={x - w / 2} y={y - h} w={w} h={h} tone={tones[i] || 'paper'} lines={4} seed={seed + i * 11} />
      </g>,
    )
  }
  return <g>{sheets}</g>
}

/** A pile of papers seen from the side, like a stack on a desk. Anchor: bottom centre. */
export function Pile({ x = 0, y = 0, w = 90, count = 7, seed = 4 }) {
  const r = rng(seed)
  const layers = []
  for (let i = 0; i < count; i++) {
    const shift = (r() - 0.5) * 10
    const ly = y - i * 5
    layers.push(
      <g key={i}>
        <path d={`M${x - w / 2 + shift} ${ly}h${w}v-5h${-w}Z`} fill={i % 3 === 1 ? PAPER_SHADE : PAPER} />
        <Ink d={handLine(x - w / 2 + shift, ly - 5, x + w / 2 + shift, ly - 5, seed + i, 0.4)} w={1.2} />
      </g>,
    )
  }
  return (
    <g>
      {layers}
      <Ink d={handLine(x - w / 2 - 6, y, x + w / 2 + 6, y, seed + 50, 0.4)} w={1.7} />
    </g>
  )
}

/* ------------------------------------------------------------ books */

/** A closed book, front cover. Anchor: top-left. */
export function Book({ x = 0, y = 0, w = 54, h = 70, tone = 'blue', seed = 3, label = true }) {
  const t = TONES[tone] || TONES.blue
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill={`url(#fill-${tone})`} />
      <rect x={x} y={y} width={w * 0.16} height={h} fill={t.ink} opacity="0.55" />
      {label ? (
        <g>
          <rect x={x + w * 0.3} y={y + h * 0.2} width={w * 0.56} height={h * 0.22} fill={PAPER} />
          <Ink d={handRectPath(x + w * 0.3, y + h * 0.2, w * 0.56, h * 0.22, seed + 5)} w={1.2} />
          <Ink d={handLine(x + w * 0.36, y + h * 0.28, x + w * 0.78, y + h * 0.28, seed + 6, 0.3) + handLine(x + w * 0.36, y + h * 0.35, x + w * 0.66, y + h * 0.35, seed + 7, 0.3)} w={1.1} c={INK_SOFT} />
        </g>
      ) : null}
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.6, closed: true })} w={1.8} />
      <Ink d={handLine(x + w * 0.16, y, x + w * 0.16, y + h, seed + 2, 0.4)} w={1.3} />
    </g>
  )
}

function handRectPath(x, y, w, h, seed) {
  return handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.4, closed: true })
}

/** A book standing on a shelf, spine out. Anchor: bottom-left. */
export function Spine({ x = 0, y = 0, w = 16, h = 70, tone = 'green', seed = 1, lean = 0 }) {
  const t = TONES[tone] || TONES.green
  const top = y - h
  const body = (
    <g>
      <rect x={x} y={top} width={w} height={h} fill={`url(#fill-${tone})`} />
      <rect x={x} y={top + h * 0.12} width={w} height={h * 0.06} fill={t.deep} opacity="0.55" />
      <rect x={x} y={top + h * 0.8} width={w} height={h * 0.06} fill={t.deep} opacity="0.55" />
      <Ink d={handPoly([[x, top], [x + w, top], [x + w, y], [x, y]], { seed, amp: 0.4, closed: true })} w={1.5} />
    </g>
  )
  return lean ? <g transform={`rotate(${lean} ${x + (lean > 0 ? w : 0)} ${y})`}>{body}</g> : body
}

/** An open book with curving pages. Anchor: bottom centre of the spine. */
export function OpenBook({ x = 0, y = 0, w = 130, tone = 'red', lines = 5, seed = 6 }) {
  const h = w * 0.52
  const half = w / 2
  const left = `M${x} ${y}Q${x - half * 0.5} ${y - 7} ${x - half} ${y - 3}L${x - half} ${y - h}Q${x - half * 0.5} ${y - h - 7} ${x} ${y - h + 5}Z`
  const right = `M${x} ${y}Q${x + half * 0.5} ${y - 7} ${x + half} ${y - 3}L${x + half} ${y - h}Q${x + half * 0.5} ${y - h - 7} ${x} ${y - h + 5}Z`
  const cover = `M${x} ${y + 5}Q${x - half * 0.5} ${y - 2} ${x - half - 5} ${y + 2}L${x - half - 5} ${y - h + 6}L${x + half + 5} ${y - h + 6}L${x + half + 5} ${y + 2}Q${x + half * 0.5} ${y - 2} ${x} ${y + 5}Z`
  const r = rng(seed)
  let text = ''
  for (let i = 0; i < lines; i++) {
    const ly = y - h + 16 + i * ((h - 26) / lines)
    const l1 = half * (0.55 + r() * 0.25)
    const l2 = half * (0.55 + r() * 0.25)
    text += `M${r1(x - half + 9)} ${r1(ly)}Q${r1(x - half * 0.5)} ${r1(ly - 3)} ${r1(x - half + 9 + l1)} ${r1(ly + 1.5)}`
    text += `M${r1(x + 9)} ${r1(ly + 1.5)}Q${r1(x + half * 0.5)} ${r1(ly - 3)} ${r1(x + 9 + l2)} ${r1(ly)}`
  }
  return (
    <g>
      <path d={cover} fill={`url(#fill-${tone})`} />
      <Ink d={cover} w={1.6} />
      <path d={left} fill={PAPER} />
      <path d={right} fill={PAPER} />
      <Ink d={text} c={TEXT_LINE} w={1.4} />
      <Ink d={left} w={1.7} />
      <Ink d={right} w={1.7} />
    </g>
  )
}

/** A bookshelf with a row of books on each shelf. Anchor: top-left. */
export function Shelf({ x = 0, y = 0, w = 260, rows = 2, rowH = 84, seed = 12, tones = ['blue', 'green', 'amber', 'red', 'pink', 'brown'] }) {
  const r = rng(seed)
  const shelves = []
  for (let row = 0; row < rows; row++) {
    const base = y + rowH * (row + 1)
    const books = []
    let bx = x + 8
    let i = 0
    while (bx < x + w - 22) {
      const bw = 12 + Math.floor(r() * 9)
      const bh = rowH - 14 - Math.floor(r() * 18)
      const lean = r() < 0.08 && bx + bw + 20 < x + w ? 12 : 0
      books.push(<Spine key={i} x={bx} y={base} w={bw} h={bh} tone={tones[Math.floor(r() * tones.length)]} seed={seed + row * 40 + i} lean={lean} />)
      bx += bw + (lean ? 12 : 1)
      i += 1
    }
    shelves.push(
      <g key={row}>
        {books}
        <rect x={x - 4} y={base} width={w + 8} height="8" fill="url(#wood)" />
        <Ink d={handPoly([[x - 4, base], [x + w + 4, base], [x + w + 4, base + 8], [x - 4, base + 8]], { seed: seed + row, amp: 0.5, closed: true })} w={1.6} />
      </g>,
    )
  }
  return (
    <g>
      <Ink d={handLine(x - 2, y + 4, x - 2, y + rowH * rows, seed + 90, 0.5) + handLine(x + w + 2, y + 4, x + w + 2, y + rowH * rows, seed + 91, 0.5)} w={1.8} />
      {shelves}
    </g>
  )
}

/* ------------------------------------------------------------ desk things */

/** A magnifying glass. Anchor: centre of the lens. */
export function Magnifier({ x = 0, y = 0, r = 26, angle = 45, tone = 'amber', seed = 7 }) {
  const a = (angle * Math.PI) / 180
  const hx = x + Math.cos(a) * r
  const hy = y + Math.sin(a) * r
  const len = r * 1.55
  const wdt = r * 0.24
  const nx = -Math.sin(a) * wdt
  const ny = Math.cos(a) * wdt
  const ex = hx + Math.cos(a) * len
  const ey = hy + Math.sin(a) * len
  const handle = [
    [hx + Math.cos(a) * 4 + nx * 0.7, hy + Math.sin(a) * 4 + ny * 0.7],
    [ex + nx, ey + ny],
    [ex - nx, ey - ny],
    [hx + Math.cos(a) * 4 - nx * 0.7, hy + Math.sin(a) * 4 - ny * 0.7],
  ]
  return (
    <g>
      <path d={polyPath(handle)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(handle, { seed, amp: 0.4, closed: true })} w={1.6} />
      <path d={ellipsePath(x, y, r - 2, r - 2)} fill="#dcebf5" opacity="0.55" />
      <circle cx={x} cy={y} r={r} fill="none" stroke={TONES.grey.mid} strokeWidth={5} />
      <Ink d={handEllipse(x, y, r + 2.5, r + 2.5, { seed: seed + 1, amp: 0.5 })} w={1.7} />
      <Ink d={handEllipse(x, y, r - 2.5, r - 2.5, { seed: seed + 2, amp: 0.4 })} w={1.3} />
      <Ink d={`M${r1(x - r * 0.55)} ${r1(y - r * 0.15)}Q${r1(x - r * 0.5)} ${r1(y - r * 0.55)} ${r1(x - r * 0.12)} ${r1(y - r * 0.6)}`} c="#ffffff" w={2.2} />
    </g>
  )
}

/** A pencil. Anchor: the tip. `angle` points from the tip back to the eraser. */
export function Pencil({ x = 0, y = 0, length = 110, angle = -35, tone = 'amber', seed = 8 }) {
  const L = length
  const body = [[18, -6], [L - 16, -6], [L - 16, 6], [18, 6]]
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) rotate(${angle})`}>
      <path d="M0 0L18 -6L18 6Z" fill="#f1d7b0" />
      <path d="M0 0L6 -2L6 2Z" fill={INK} />
      <path d={polyPath(body)} fill={`url(#fill-${tone})`} />
      <path d={`M${L - 16} -6h7v12h-7Z`} fill={TONES.grey.mid} />
      <path d={`M${L - 9} -6h7q3 0 3 6t-3 6h-7Z`} fill={TONES.pink.mid} />
      <Ink d={handPoly([[0, 0], [18, -6], [L - 2, -6], [L + 1, 0], [L - 2, 6], [18, 6]], { seed, amp: 0.3, closed: true })} w={1.5} />
      <Ink d={handLine(18, -6, 18, 6, seed + 3, 0.2) + handLine(L - 16, -6, L - 16, 6, seed + 4, 0.2) + handLine(L - 9, -6, L - 9, 6, seed + 5, 0.2) + handLine(20, 0, L - 18, 0, seed + 6, 0.3)} w={1.1} />
    </g>
  )
}

/**
 * A glass of cutting chai with steam. Anchor: bottom centre of the glass.
 * The steam curls carry .steam and rise by themselves while the drawing plays.
 */
export function Chai({ x = 0, y = 0, s = 1, steam = true, seed = 9 }) {
  const top = 40 * s
  const tw = 17 * s
  const bw = 12.5 * s
  const level = top * 0.78
  const glass = [[x - tw, y - top], [x + tw, y - top], [x + bw, y], [x - bw, y]]
  const k = level / top
  const lw = bw + (tw - bw) * k
  const liquid = [[x - lw, y - level], [x + lw, y - level], [x + bw, y], [x - bw, y]]
  let ribs = ''
  for (let i = -2; i <= 2; i++) {
    const rx = x + i * 5.5 * s
    ribs += handLine(rx, y - top + 3 * s, rx * 0.985 + x * 0.015, y - 3 * s, seed + i + 10, 0.2)
  }
  return (
    <g>
      <path d={polyPath(liquid)} fill="url(#chai)" />
      <path d={ellipsePath(x, y - level, lw, 2.6 * s)} fill="#e7c49a" />
      <Ink d={ribs} c="#ffffff" w={1.1} o={0.7} />
      <Ink d={handPoly(glass, { seed, amp: 0.4, closed: true })} w={1.7} />
      <Ink d={handEllipse(x, y - top, tw, 3 * s, { seed: seed + 3, amp: 0.3 })} w={1.4} />
      {steam ? (
        <g>
          {[-7, 0, 7].map((dx, i) => (
            <g key={i} className="steam" style={{ '--i': i }}>
              <Ink d={`M${r1(x + dx * s)} ${r1(y - top - 6 * s)}q${r1(-4 * s)} ${r1(-7 * s)} 0 ${r1(-13 * s)}t0 ${r1(-13 * s)}`} c={INK_SOFT} w={1.3} o={0.7} />
            </g>
          ))}
        </g>
      ) : null}
    </g>
  )
}

/** A desk lamp with an optional pool of light. Anchor: centre of its base. */
export function Lamp({ x = 0, y = 0, s = 1, light = true, tone = 'green', seed = 10 }) {
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) scale(${s})`}>
      {light ? (
        <g className="lamp-light">
          <path d="M34 -88L84 -2L-2 -2Z" fill={TONES.amber.tint} opacity="0.55" />
          <path d="M34 -88L84 -2L-2 -2Z" fill="url(#hatch-amber)" opacity="0.35" />
        </g>
      ) : null}
      <path d={ellipsePath(0, -3, 24, 5)} fill={`url(#fill-${tone})`} />
      <Ink d={handEllipse(0, -3, 24, 5, { seed, amp: 0.4 })} w={1.6} />
      <Ink d={handLine(0, -6, -14, -58, seed + 1, 0.4) + handLine(-14, -58, 22, -86, seed + 2, 0.4)} w={2.4} />
      <circle cx={-14} cy={-58} r={3.2} fill={PAPER} stroke={INK} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      <path d="M16 -98L44 -80L30 -68L6 -86Z" fill={`url(#fill-${tone})`} />
      <Ink d={handPoly([[16, -98], [44, -80], [30, -68], [6, -86]], { seed: seed + 3, amp: 0.4, closed: true })} w={1.7} />
    </g>
  )
}

/** Where a Laptop's screen sits, for drawing on it: [x, y, width, height]. */
export function laptopScreen(x, y, w = 180) {
  const sw = w * 0.74
  const sh = w * 0.46
  return [x - sw / 2 + 7, y - 10 - sh + 7, sw - 14, sh - 14]
}

/** An open laptop, front view. Anchor: bottom centre. Children draw on top. */
export function Laptop({ x = 0, y = 0, w = 180, tone = 'grey', seed = 11, children }) {
  const sw = w * 0.74
  const sh = w * 0.46
  const lid = [[x - sw / 2, y - 10 - sh], [x + sw / 2, y - 10 - sh], [x + sw / 2, y - 10], [x - sw / 2, y - 10]]
  const base = [[x - sw / 2 - 4, y - 10], [x + sw / 2 + 4, y - 10], [x + w / 2, y], [x - w / 2, y]]
  const [ix, iy, iw, ih] = laptopScreen(x, y, w)
  return (
    <g>
      <path d={polyPath(lid)} fill={TONES.grey.tint} />
      <rect x={ix} y={iy} width={iw} height={ih} fill={PAPER} />
      <Ink d={handPoly(lid, { seed, amp: 0.5, closed: true })} w={1.8} />
      <Ink d={handPoly([[ix, iy], [ix + iw, iy], [ix + iw, iy + ih], [ix, iy + ih]], { seed: seed + 1, amp: 0.3, closed: true })} w={1.2} />
      <path d={polyPath(base)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(base, { seed: seed + 2, amp: 0.4, closed: true })} w={1.7} />
      {children}
    </g>
  )
}

/** A sticky note. Anchor: top-left. */
export function Sticky({ x = 0, y = 0, w = 74, h = 70, tone = 'amber', lines = 3, seed = 13 }) {
  const t = TONES[tone] || TONES.amber
  const r = rng(seed)
  let text = ''
  for (let i = 0; i < lines; i++) {
    const ly = y + 24 + i * ((h - 32) / Math.max(1, lines))
    text += handLine(x + 9, ly, x + 9 + (w - 22) * (0.55 + r() * 0.4), ly, seed + i, 0.4)
  }
  const curl = [[x + w, y + h - 13], [x + w - 13, y + h], [x + w - 4, y + h - 4]]
  return (
    <g>
      <path d={`M${x} ${y}h${w}v${h - 13}l-13 13h${-(w - 13)}Z`} fill={t.tint} />
      <rect x={x} y={y} width={w} height={11} fill={t.mid} opacity="0.55" />
      <path d={polyPath(curl)} fill={t.mid} />
      <Ink d={text} c={t.deep} w={1.4} o={0.7} />
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h - 13], [x + w - 13, y + h], [x, y + h]], { seed: seed + 9, amp: 0.5, closed: true })} w={1.5} />
    </g>
  )
}

/**
 * A wall clock. Anchor: centre. The hands carry .clock-min and .clock-hour
 * and already pivot on the centre, so rotate() spins them.
 */
export function Clock({ x = 0, y = 0, r = 32, seed = 14, tone = 'paper' }) {
  let ticks = ''
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6
    const inner = i % 3 === 0 ? r * 0.72 : r * 0.8
    ticks += handLine(x + Math.cos(a) * inner, y + Math.sin(a) * inner, x + Math.cos(a) * r * 0.88, y + Math.sin(a) * r * 0.88, seed + i, 0.2)
  }
  return (
    <g>
      <path d={ellipsePath(x, y, r, r)} fill={tint(tone)} />
      <Ink d={handEllipse(x, y, r, r, { seed, amp: 0.6 })} w={2} />
      <Ink d={ticks} w={1.3} />
      <Anim className="clock-hour" origin={[x, y]}>
        <Ink d={handLine(x, y, x - r * 0.38, y - r * 0.26, seed + 20, 0.2)} w={2.4} />
      </Anim>
      <Anim className="clock-min" origin={[x, y]}>
        <Ink d={handLine(x, y, x + r * 0.42, y - r * 0.56, seed + 21, 0.2)} w={1.8} />
      </Anim>
      <circle cx={x} cy={y} r={2.4} fill={INK} />
    </g>
  )
}

/** A light bulb, lit or not. Anchor: centre of the glass. Rays carry .bulb-rays. */
export function Bulb({ x = 0, y = 0, s = 1, lit = true, seed = 15 }) {
  const R = 22 * s
  const glass = `M${x - R * 0.55} ${y + R * 0.72}C${x - R * 1.35} ${y + R * 0.1} ${x - R * 1.05} ${y - R * 1.08} ${x} ${y - R * 1.02}C${x + R * 1.05} ${y - R * 1.08} ${x + R * 1.35} ${y + R * 0.1} ${x + R * 0.55} ${y + R * 0.72}Z`
  return (
    <g>
      {lit ? (
        <g className="bulb-rays">
          <Burst x={x} y={y - R * 0.1} r={R * 1.35} length={R * 0.55} count={7} from={-200} to={20} seed={seed} c={TONES.amber.ink} w={2} />
        </g>
      ) : null}
      <path d={glass} fill={lit ? TONES.amber.tint : '#eef3f6'} />
      {lit ? <path d={glass} fill="url(#hatch-amber)" opacity="0.5" /> : null}
      <Ink d={glass} w={1.8} />
      <Ink d={`M${x - R * 0.28} ${y + R * 0.6}L${x - R * 0.2} ${y - R * 0.05}Q${x - R * 0.1} ${y - R * 0.32} ${x} ${y - R * 0.05}Q${x + R * 0.1} ${y - R * 0.32} ${x + R * 0.2} ${y - R * 0.05}L${x + R * 0.28} ${y + R * 0.6}`} c={lit ? TONES.amber.deep : INK_SOFT} w={1.3} />
      <path d={`M${x - R * 0.52} ${y + R * 0.74}h${R * 1.04}v${R * 0.5}h${-R * 1.04}Z`} fill={TONES.grey.mid} />
      <Ink d={handPoly([[x - R * 0.52, y + R * 0.74], [x + R * 0.52, y + R * 0.74], [x + R * 0.52, y + R * 1.24], [x - R * 0.52, y + R * 1.24]], { seed: seed + 3, amp: 0.3, closed: true })} w={1.5} />
      <Ink d={handLine(x - R * 0.52, y + R * 0.9, x + R * 0.52, y + R * 0.9, seed + 4, 0.2) + handLine(x - R * 0.52, y + R * 1.06, x + R * 0.52, y + R * 1.06, seed + 5, 0.2)} w={1.1} />
      <path d={`M${x - R * 0.24} ${y + R * 1.24}h${R * 0.48}l${-R * 0.1} ${R * 0.2}h${-R * 0.28}Z`} fill={INK} />
    </g>
  )
}

/** A funnel. Anchor: centre of the rim. */
export function Funnel({ x = 0, y = 0, w = 130, h = 110, tone = 'blue', seed = 16 }) {
  const spout = w * 0.12
  const cone = [[x - w / 2, y], [x + w / 2, y], [x + spout, y + h * 0.66], [x - spout, y + h * 0.66]]
  const neck = [[x - spout, y + h * 0.66], [x + spout, y + h * 0.66], [x + spout * 0.8, y + h], [x - spout * 0.8, y + h]]
  return (
    <g>
      <path d={polyPath(cone)} fill={`url(#fill-${tone})`} />
      <path d={polyPath(neck)} fill={`url(#fill-${tone})`} />
      <path d={polyPath([[x + w * 0.1, y], [x + w / 2, y], [x + spout, y + h * 0.66], [x + spout * 0.2, y + h * 0.66]])} fill="url(#ink-hatch-light)" />
      <Ink d={handPoly(cone, { seed, amp: 0.5, closed: true })} w={1.8} />
      <Ink d={handPoly(neck, { seed: seed + 1, amp: 0.4, closed: true })} w={1.6} />
      <path d={ellipsePath(x, y, w / 2, 8)} fill={TONES[tone].tint} />
      <Ink d={handEllipse(x, y, w / 2, 8, { seed: seed + 2, amp: 0.4 })} w={1.8} />
    </g>
  )
}

/* ------------------------------------------------------------ nature and sky */

/** A potted plant. Anchor: bottom centre of the pot. */
export function Plant({ x = 0, y = 0, s = 1, seed = 17 }) {
  const pot = [[x - 17 * s, y - 30 * s], [x + 17 * s, y - 30 * s], [x + 12 * s, y], [x - 12 * s, y]]
  const leaf = (cx, cy, rot, len) => {
    const a = (rot * Math.PI) / 180
    const tx = cx + Math.cos(a) * len
    const ty = cy + Math.sin(a) * len
    const nx = -Math.sin(a) * len * 0.32
    const ny = Math.cos(a) * len * 0.32
    const mx = (cx + tx) / 2
    const my = (cy + ty) / 2
    return `M${r1(cx)} ${r1(cy)}Q${r1(mx + nx)} ${r1(my + ny)} ${r1(tx)} ${r1(ty)}Q${r1(mx - nx)} ${r1(my - ny)} ${r1(cx)} ${r1(cy)}Z`
  }
  const base = [x, y - 30 * s]
  const leaves = [
    leaf(base[0], base[1], -150, 34 * s),
    leaf(base[0], base[1], -115, 44 * s),
    leaf(base[0], base[1], -80, 48 * s),
    leaf(base[0], base[1], -48, 40 * s),
    leaf(base[0], base[1], -20, 30 * s),
  ]
  return (
    <g>
      {leaves.map((d, i) => (
        <g key={i}>
          <path d={d} fill="url(#fill-green)" />
          <Ink d={d} w={1.4} />
        </g>
      ))}
      <path d={polyPath(pot)} fill="url(#fill-red)" />
      <Ink d={handPoly(pot, { seed, amp: 0.4, closed: true })} w={1.7} />
      <Ink d={handLine(x - 18 * s, y - 24 * s, x + 18 * s, y - 24 * s, seed + 3, 0.3)} w={1.4} />
    </g>
  )
}

/** A puffy cloud. Anchor: centre. */
export function Cloud({ x = 0, y = 0, s = 1, seed = 18, fill = PAPER }) {
  const pts = [
    [-44, 8], [-40, -6], [-24, -14], [-12, -24], [6, -26], [20, -16], [34, -18], [46, -6], [44, 8],
  ].map(([px, py]) => [x + px * s, y + py * s])
  return <Blob points={pts} seed={seed} fill={fill} sw={1.6} />
}

/** The sun, with rays that carry .sun-rays. Anchor: centre. */
export function Sun({ x = 0, y = 0, r = 22, seed = 19 }) {
  return (
    <g>
      <g className="sun-rays">
        <Burst x={x} y={y} r={r + 6} length={r * 0.45} count={10} from={0} to={324} seed={seed} c={TONES.amber.ink} w={1.8} />
      </g>
      <Oval cx={x} cy={y} rx={r} fill="url(#fill-amber)" seed={seed + 1} />
    </g>
  )
}

/** A crescent moon. Anchor: centre. */
export function Moon({ x = 0, y = 0, r = 20, seed = 20 }) {
  const d = `M${x + r * 0.3} ${y - r}A${r} ${r} 0 1 0 ${x + r * 0.3} ${y + r}A${r * 0.78} ${r * 0.78} 0 1 1 ${x + r * 0.3} ${y - r}Z`
  return (
    <g>
      <path d={d} fill="url(#fill-amber)" />
      <Ink d={d} w={1.6} />
      <Sparkle x={x + r * 1.6} y={y - r * 0.6} s={5} />
    </g>
  )
}

/** A tree. Anchor: bottom of the trunk. */
export function Tree({ x = 0, y = 0, s = 1, seed = 21, tone = 'green' }) {
  const crown = [
    [-34, -58], [-40, -80], [-26, -104], [-6, -118], [18, -112], [36, -94], [40, -70], [28, -52], [0, -48],
  ].map(([px, py]) => [x + px * s, y + py * s])
  const trunk = [[x - 6 * s, y], [x - 5 * s, y - 56 * s], [x + 5 * s, y - 56 * s], [x + 7 * s, y]]
  return (
    <g>
      <path d={polyPath(trunk)} fill="url(#wood)" />
      <Ink d={handPoly(trunk, { seed, amp: 0.4, closed: true })} w={1.7} />
      <Blob points={crown} seed={seed + 1} fill={`url(#fill-${tone})`} />
      <path d={curve(crown, true)} fill="url(#ink-hatch-light)" opacity="0.5" />
    </g>
  )
}

/** A young sprout, from seed to two leaves. Anchor: where it leaves the soil. */
export function Sprout({ x = 0, y = 0, s = 1, seed = 22 }) {
  const stem = `M${x} ${y}Q${x - 3 * s} ${y - 16 * s} ${x + 1 * s} ${y - 30 * s}`
  const l1 = `M${x + 1 * s} ${y - 26 * s}Q${x - 18 * s} ${y - 40 * s} ${x - 22 * s} ${y - 24 * s}Q${x - 8 * s} ${y - 18 * s} ${x + 1 * s} ${y - 26 * s}Z`
  const l2 = `M${x + 1 * s} ${y - 29 * s}Q${x + 16 * s} ${y - 46 * s} ${x + 24 * s} ${y - 32 * s}Q${x + 12 * s} ${y - 22 * s} ${x + 1 * s} ${y - 29 * s}Z`
  return (
    <g>
      <Ink d={stem} w={1.8} c={TONES.green.deep} />
      <path d={l1} fill="url(#fill-green)" />
      <Ink d={l1} w={1.4} />
      <path d={l2} fill="url(#fill-green)" />
      <Ink d={l2} w={1.4} />
    </g>
  )
}

/** A mountain with a snowy cap. Anchor: bottom-left. */
export function Mountain({ x = 0, y = 0, w = 300, h = 180, seed = 23, snow = true }) {
  const peak = [x + w * 0.52, y - h]
  const outline = [[x, y], [x + w * 0.22, y - h * 0.45], [x + w * 0.32, y - h * 0.52], peak, [x + w * 0.7, y - h * 0.58], [x + w * 0.82, y - h * 0.4], [x + w, y]]
  const shade = [peak, [x + w * 0.7, y - h * 0.58], [x + w * 0.82, y - h * 0.4], [x + w, y], [x + w * 0.56, y]]
  const cap = [[x + w * 0.4, y - h * 0.7], peak, [x + w * 0.63, y - h * 0.7], [x + w * 0.56, y - h * 0.66], [x + w * 0.5, y - h * 0.72], [x + w * 0.45, y - h * 0.66]]
  return (
    <g>
      <path d={polyPath(outline)} fill={TONES.grey.tint} />
      <path d={polyPath(shade)} fill="url(#ink-hatch-light)" />
      {snow ? <path d={polyPath(cap)} fill={PAPER} /> : null}
      <Ink d={handPoly(outline, { seed, amp: 0.8 })} w={1.9} />
      {snow ? <Ink d={handPoly(cap.slice(2).concat([cap[0]]), { seed: seed + 5, amp: 0.4 })} w={1.3} /> : null}
    </g>
  )
}

/* ------------------------------------------------------------ pins, strings, stamps */

/** A push pin. Anchor: the point where the needle meets the board. */
export function PushPin({ x = 0, y = 0, tone = 'red', seed = 24 }) {
  return (
    <g>
      <Ink d={handLine(x, y, x + 2, y - 8, seed, 0.2)} w={1.4} c={INK_SOFT} />
      <Oval cx={x + 3} cy={y - 12} rx={7} ry={6} fill={`url(#fill-${tone})`} seed={seed + 1} sw={1.6} />
      <circle cx={x + 1} cy={y - 14} r={1.6} fill="#ffffff" opacity="0.8" />
    </g>
  )
}

/** A red string pulled through points, sagging a little. */
export function Thread({ points, c = '#c9503a', w = 1.6, seed = 25, className }) {
  return <Ink d={handCurve(points, { seed, amp: 0.6 })} c={c} w={w} className={className} />
}

/**
 * An ink stamp impression with a word on it. Anchor: centre. `bg` fills the
 * inside (PAPER, say) so lines underneath do not run through the word.
 */
export function StampMark({ x = 0, y = 0, w = 110, h = 44, text = 'APPROVED', tone = 'red', rotate = -8, size = 20, bg, seed = 26 }) {
  const t = TONES[tone] || TONES.red
  return (
    <g transform={`rotate(${rotate} ${x} ${y})`} opacity="0.88">
      {bg ? <path d={polyPath([[x - w / 2, y - h / 2], [x + w / 2, y - h / 2], [x + w / 2, y + h / 2], [x - w / 2, y + h / 2]])} fill={bg} /> : null}
      <Ink d={handPoly([[x - w / 2, y - h / 2], [x + w / 2, y - h / 2], [x + w / 2, y + h / 2], [x - w / 2, y + h / 2]], { seed, amp: 0.6, closed: true })} c={t.ink} w={2.4} />
      <Ink d={handPoly([[x - w / 2 + 5, y - h / 2 + 5], [x + w / 2 - 5, y - h / 2 + 5], [x + w / 2 - 5, y + h / 2 - 5], [x - w / 2 + 5, y + h / 2 - 5]], { seed: seed + 3, amp: 0.4, closed: true })} c={t.ink} w={1.2} />
      <text x={x} y={y + size * 0.34} textAnchor="middle" fontSize={size} fontWeight="700" fill={t.ink} className="ink-type" letterSpacing="1.5">
        {text}
      </text>
    </g>
  )
}

/** A rubber stamp, handle up. Anchor: bottom centre of the rubber. */
export function Stamp({ x = 0, y = 0, s = 1, tone = 'red', seed = 27 }) {
  const block = [[x - 30 * s, y - 16 * s], [x + 30 * s, y - 16 * s], [x + 30 * s, y - 4 * s], [x - 30 * s, y - 4 * s]]
  return (
    <g>
      <path d={`M${x - 28 * s} ${y - 4 * s}h${56 * s}v${4 * s}h${-56 * s}Z`} fill={TONES[tone].ink} />
      <path d={polyPath(block)} fill="url(#wood)" />
      <Ink d={handPoly(block, { seed, amp: 0.4, closed: true })} w={1.7} />
      <path d={`M${x - 7 * s} ${y - 16 * s}L${x - 5 * s} ${y - 38 * s}H${x + 5 * s}L${x + 7 * s} ${y - 16 * s}Z`} fill={TONES.grey.mid} />
      <Ink d={handPoly([[x - 7 * s, y - 16 * s], [x - 5 * s, y - 38 * s], [x + 5 * s, y - 38 * s], [x + 7 * s, y - 16 * s]], { seed: seed + 2, amp: 0.3 })} w={1.5} />
      <Oval cx={x} cy={y - 48 * s} rx={13 * s} ry={11 * s} fill={`url(#fill-${tone})`} seed={seed + 4} />
    </g>
  )
}

/* ------------------------------------------------------------ measuring and marking */

/**
 * A balance scale. Anchor: bottom centre of the stand. The beam and both
 * pans carry .scale-beam and pivot on the top of the post.
 */
export function Scale({ x = 0, y = 0, s = 1, seed = 28, left, right }) {
  const top = y - 120 * s
  const arm = 78 * s
  const pan = (px, content) => (
    <g>
      <Ink d={handLine(px, top + 4 * s, px - 22 * s, top + 52 * s, seed + px, 0.3) + handLine(px, top + 4 * s, px + 22 * s, top + 52 * s, seed + px + 1, 0.3)} w={1.2} c={INK_SOFT} />
      <path d={`M${px - 30 * s} ${top + 52 * s}Q${px} ${top + 70 * s} ${px + 30 * s} ${top + 52 * s}Z`} fill={`url(#fill-amber)`} />
      <Ink d={`M${px - 30 * s} ${top + 52 * s}Q${px} ${top + 70 * s} ${px + 30 * s} ${top + 52 * s}Z`} w={1.6} />
      {content}
    </g>
  )
  return (
    <g>
      <path d={`M${x - 36 * s} ${y}h${72 * s}l${-10 * s} ${-12 * s}h${-52 * s}Z`} fill="url(#wood)" />
      <Ink d={handPoly([[x - 36 * s, y], [x + 36 * s, y], [x + 26 * s, y - 12 * s], [x - 26 * s, y - 12 * s]], { seed, amp: 0.4, closed: true })} w={1.7} />
      <Ink d={handLine(x, y - 12 * s, x, top, seed + 2, 0.3)} w={3} />
      <Anim className="scale-beam" origin={[x, top]}>
        <Ink d={handLine(x - arm, top + 2 * s, x + arm, top + 2 * s, seed + 3, 0.4)} w={3} />
        {pan(x - arm, left)}
        {pan(x + arm, right)}
      </Anim>
      <Oval cx={x} cy={top} rx={5 * s} fill={TONES.amber.mid} seed={seed + 5} />
    </g>
  )
}

/** A flag on a pole; the cloth carries .flag-cloth. Anchor: foot of the pole. */
export function Flag({ x = 0, y = 0, h = 90, tone = 'red', seed = 29 }) {
  const cloth = `M${x} ${y - h}Q${x + 20} ${y - h - 8} ${x + 42} ${y - h + 2}L${x + 40} ${y - h + 30}Q${x + 20} ${y - h + 20} ${x} ${y - h + 28}Z`
  return (
    <g>
      <Anim className="flag-cloth" origin={[x, y - h + 14]}>
        <path d={cloth} fill={`url(#fill-${tone})`} />
        <Ink d={cloth} w={1.6} />
      </Anim>
      <Ink d={handLine(x, y, x, y - h - 4, seed, 0.3)} w={2.4} />
      <circle cx={x} cy={y - h - 6} r={3} fill={TONES.amber.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
    </g>
  )
}

/** A target with rings. Anchor: centre. */
export function Target({ x = 0, y = 0, r = 44, seed = 30 }) {
  return (
    <g>
      <Oval cx={x} cy={y} rx={r} fill="url(#fill-red)" seed={seed} />
      <Oval cx={x} cy={y} rx={r * 0.68} fill={PAPER} seed={seed + 1} />
      <Oval cx={x} cy={y} rx={r * 0.38} fill="url(#fill-red)" seed={seed + 2} />
      <Oval cx={x} cy={y} rx={r * 0.12} fill={PAPER} seed={seed + 3} sw={1.4} />
    </g>
  )
}

/* ------------------------------------------------------------ post and paperwork */

/** An envelope, closed or with its flap open. Anchor: top-left. */
export function Envelope({ x = 0, y = 0, w = 84, h = 56, open = false, seed = 31, tone = 'paper' }) {
  const body = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]]
  const flap = open ? [[x, y], [x + w / 2, y - h * 0.55], [x + w, y]] : [[x, y], [x + w / 2, y + h * 0.55], [x + w, y]]
  return (
    <g>
      {open ? <path d={polyPath(flap)} fill={PAPER_SHADE} /> : null}
      <path d={polyPath(body)} fill={tint(tone)} />
      <Ink d={handPoly([[x, y + h], [x + w / 2, y + h * 0.45], [x + w, y + h]], { seed: seed + 3, amp: 0.4 })} w={1.2} c={INK_SOFT} />
      {!open ? <path d={polyPath(flap)} fill={PAPER_SHADE} /> : null}
      <Ink d={handPoly(body, { seed, amp: 0.5, closed: true })} w={1.7} />
      <Ink d={handPoly(flap, { seed: seed + 1, amp: 0.4 })} w={1.5} />
    </g>
  )
}

/** A wall calendar page. Anchor: top-left. */
export function Calendar({ x = 0, y = 0, w = 84, h = 90, day = '23', month = 'SEP', tone = 'red', seed = 32 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={PAPER} />
      <rect x={x} y={y} width={w} height={h * 0.28} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.5, closed: true })} w={1.7} />
      <Ink d={handLine(x, y + h * 0.28, x + w, y + h * 0.28, seed + 1, 0.3)} w={1.4} />
      <text x={x + w / 2} y={y + h * 0.21} textAnchor="middle" fontSize={h * 0.15} fontWeight="700" className="ink-type" fill={INK}>
        {month}
      </text>
      <text x={x + w / 2} y={y + h * 0.8} textAnchor="middle" fontSize={h * 0.42} className="ink-hand" fontWeight="700" fill={INK}>
        {day}
      </text>
      <Ink d={handEllipse(x + w * 0.28, y, 3.2, 5, { seed: seed + 2 }) + handEllipse(x + w * 0.72, y, 3.2, 5, { seed: seed + 3 })} w={1.5} />
    </g>
  )
}

/**
 * A table grid, like the evidence matrix. Anchor: top-left. `marks` puts a
 * tick, cross, dot or dash in cells: { '1,2': 'tick' } is row 1, column 2.
 */
export function Grid({ x = 0, y = 0, cols = 4, rows = 4, cw = 62, rh = 30, header = 'amber', marks = {}, seed = 33 }) {
  const w = cols * cw
  const h = rows * rh
  let lines = ''
  for (let c = 1; c < cols; c++) lines += handLine(x + c * cw, y, x + c * cw, y + h, seed + c, 0.4)
  for (let rr = 1; rr < rows; rr++) lines += handLine(x, y + rr * rh, x + w, y + rr * rh, seed + 20 + rr, 0.4)
  const cells = Object.entries(marks).map(([key, mark]) => {
    const [row, col] = key.split(',').map(Number)
    const cx = x + col * cw + cw / 2
    const cy = y + row * rh + rh / 2
    if (mark === 'tick') return <path key={key} d={`M${cx - 8} ${cy}q4 2 6 7q5 -10 12 -14`} fill="none" stroke="#3f8f4f" strokeWidth={2.2} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    if (mark === 'cross') return <Ink key={key} d={handLine(cx - 6, cy - 6, cx + 6, cy + 6, seed + row * 9 + col, 0.3) + handLine(cx + 6, cy - 6, cx - 6, cy + 6, seed + row * 9 + col + 1, 0.3)} c="#c44e38" w={2.2} />
    if (mark === 'dot') return <circle key={key} cx={cx} cy={cy} r={4} fill={TONES.blue.ink} />
    return <Ink key={key} d={handLine(cx - 14, cy, cx + 14, cy, seed + row * 9 + col, 0.4)} c={INK_SOFT} w={1.6} />
  })
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={PAPER} />
      {header ? <rect x={x} y={y} width={w} height={rh} fill={`url(#fill-${header})`} /> : null}
      <Ink d={lines} w={1.2} c={INK_SOFT} />
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed: seed + 50, amp: 0.6, closed: true })} w={1.8} />
      {cells}
    </g>
  )
}

/** A clipboard checklist with boxes, the first `done` ticked. Anchor: top-left. */
export function Checklist({ x = 0, y = 0, w = 120, items = 4, done = 2, seed = 34 }) {
  const h = 34 + items * 26
  const r = rng(seed)
  const rows = []
  for (let i = 0; i < items; i++) {
    const ry = y + 30 + i * 26
    rows.push(
      <g key={i} className="check-row" style={{ '--i': i }}>
        <Box x={x + 12} y={ry} w={14} h={14} seed={seed + i * 5} sw={1.4} fill={PAPER} />
        <Ink d={handLine(x + 34, ry + 8, x + 34 + (w - 50) * (0.6 + r() * 0.4), ry + 8, seed + i * 5 + 2, 0.4)} c={TEXT_LINE} w={1.6} />
        {/* pathLength 1 (and a scaling stroke) so a scene can draw the tick
            on with stroke-dashoffset going from 1 to 0. */}
        {i < done ? (
          <path
            className="check-tick"
            style={{ '--i': i }}
            d={`M${x + 13} ${ry + 7}q3 2 5 7q5 -11 13 -16`}
            pathLength="1"
            strokeDasharray="1"
            fill="none"
            stroke="#3f8f4f"
            strokeWidth={2.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null}
      </g>,
    )
  }
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={4} fill={PAPER} seed={seed + 90} />
      <rect x={x + w / 2 - 18} y={y - 7} width="36" height="14" rx="3" fill={TONES.grey.mid} />
      <Ink d={handPoly([[x + w / 2 - 18, y - 7], [x + w / 2 + 18, y - 7], [x + w / 2 + 18, y + 7], [x + w / 2 - 18, y + 7]], { seed: seed + 91, amp: 0.3, closed: true })} w={1.4} />
      {rows}
    </g>
  )
}

/** A small bar chart with axes. Anchor: bottom-left. Bars carry .chart-bar with --i. */
export function Chart({ x = 0, y = 0, w = 170, h = 110, bars = [0.4, 0.72, 0.55, 0.9], tone = 'blue', seed = 35 }) {
  const gap = w / (bars.length * 1.6 + 0.6)
  const bw = gap
  return (
    <g>
      {bars.map((v, i) => {
        const bx = x + gap * 0.8 + i * gap * 1.6
        const bh = h * 0.9 * v
        return (
          <g key={i} className="chart-bar" style={{ '--i': i, transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
            <rect x={bx} y={y - bh} width={bw} height={bh} fill={`url(#fill-${tone})`} />
            <Ink d={handPoly([[bx, y], [bx, y - bh], [bx + bw, y - bh], [bx + bw, y]], { seed: seed + i, amp: 0.4 })} w={1.5} />
          </g>
        )
      })}
      <Ink d={handLine(x, y, x + w, y, seed + 20, 0.5) + handLine(x, y, x, y - h, seed + 21, 0.5)} w={1.9} />
    </g>
  )
}

/* ------------------------------------------------------------ gaps, bridges, puzzles */

/**
 * A plank bridge over a drop, with one plank missing: the research gap.
 * Anchor: left end of the deck. Planks carry .plank with --i.
 */
export function Bridge({ x = 0, y = 0, planks = 9, pw = 26, gapAt = 5, seed = 36 }) {
  const w = planks * pw
  const items = []
  for (let i = 0; i < planks; i++) {
    if (i === gapAt) continue
    const px = x + i * pw + 2
    items.push(
      <g key={i} className="plank" style={{ '--i': i }}>
        <rect x={px} y={y} width={pw - 4} height="10" fill="url(#wood)" />
        <Ink d={handPoly([[px, y], [px + pw - 4, y], [px + pw - 4, y + 10], [px, y + 10]], { seed: seed + i, amp: 0.3, closed: true })} w={1.4} />
      </g>,
    )
  }
  return (
    <g>
      <Ink d={`M${x - 6} ${y - 30}Q${x + w / 2} ${y + 4} ${x + w + 6} ${y - 30}`} w={1.6} c={INK_SOFT} />
      <Ink d={handLine(x - 6, y - 36, x - 6, y + 12, seed + 70, 0.4) + handLine(x + w + 6, y - 36, x + w + 6, y + 12, seed + 71, 0.4)} w={3} />
      {items}
    </g>
  )
}

/** A jigsaw piece, about 60 units across. Anchor: centre. */
export function Puzzle({ x = 0, y = 0, s = 1, tone = 'amber', seed = 37 }) {
  const k = s
  const d =
    `M${x - 28 * k} ${y - 28 * k}` +
    `H${x - 8 * k}C${x - 10 * k} ${y - 44 * k} ${x + 10 * k} ${y - 44 * k} ${x + 8 * k} ${y - 28 * k}` +
    `H${x + 28 * k}V${y - 8 * k}C${x + 44 * k} ${y - 10 * k} ${x + 44 * k} ${y + 10 * k} ${x + 28 * k} ${y + 8 * k}` +
    `V${y + 28 * k}H${x + 8 * k}C${x + 10 * k} ${y + 14 * k} ${x - 10 * k} ${y + 14 * k} ${x - 8 * k} ${y + 28 * k}` +
    `H${x - 28 * k}V${y + 8 * k}C${x - 16 * k} ${y + 10 * k} ${x - 16 * k} ${y - 10 * k} ${x - 28 * k} ${y - 8 * k}Z`
  return (
    <g>
      <path d={d} fill={`url(#fill-${tone})`} />
      <Ink d={d} w={1.8} />
    </g>
  )
}

/** A folded treasure map with a dotted trail to an X. Anchor: top-left. */
export function TreasureMap({ x = 0, y = 0, w = 180, h = 120, seed = 38 }) {
  const folds = [0, w / 3, (2 * w) / 3, w]
  const panels = folds.slice(0, 3).map((fx, i) => (
    <path key={i} d={polyPath([[x + fx, y + (i % 2 ? 6 : 0)], [x + folds[i + 1], y + (i % 2 ? 0 : 6)], [x + folds[i + 1], y + h + (i % 2 ? 0 : 6)], [x + fx, y + h + (i % 2 ? 6 : 0)]])} fill={i % 2 ? '#f3e6c8' : '#f8eed8'} />
  ))
  const trail = wave(x + 20, x + w * 0.72, y + h * 0.62, { amp: 12, length: 60, seed })
  return (
    <g>
      {panels}
      <Ink d={handPoly([[x, y], [x + w / 3, y + 6], [x + (2 * w) / 3, y], [x + w, y + 6], [x + w, y + h + 6], [x + (2 * w) / 3, y + h], [x + w / 3, y + h + 6], [x, y + h]], { seed, amp: 0.6, closed: true })} w={1.7} />
      <Ink d={trail} dash="2 6" w={1.8} c={TONES.red.deep} />
      <Ink d={handLine(x + w * 0.74, y + h * 0.5, x + w * 0.86, y + h * 0.66, seed + 5, 0.3) + handLine(x + w * 0.86, y + h * 0.5, x + w * 0.74, y + h * 0.66, seed + 6, 0.3)} c={TONES.red.ink} w={3} />
      <Blob points={[[x + w * 0.2, y + h * 0.25], [x + w * 0.34, y + h * 0.16], [x + w * 0.46, y + h * 0.28], [x + w * 0.36, y + h * 0.4], [x + w * 0.22, y + h * 0.38]]} fill="url(#fill-green)" sw={1.3} seed={seed + 7} />
    </g>
  )
}

/** A garden spade. Anchor: tip of the blade. `angle` leans it. */
export function Spade({ x = 0, y = 0, angle = -20, s = 1, seed = 39 }) {
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) rotate(${angle}) scale(${s})`}>
      <path d="M-14 -34Q-15 -8 0 0Q15 -8 14 -34Z" fill={TONES.grey.mid} />
      <Ink d="M-14 -34Q-15 -8 0 0Q15 -8 14 -34Z" w={1.7} />
      <path d="M-3 -34h6v-58h-6Z" fill="url(#wood)" />
      <Ink d={handPoly([[-3, -34], [-3, -92], [3, -92], [3, -34]], { seed, amp: 0.3 })} w={1.5} />
      <Ink d={handPoly([[-12, -92], [12, -92], [12, -100], [-12, -100]], { seed: seed + 1, amp: 0.3, closed: true })} w={1.8} />
    </g>
  )
}

/** A torch (flashlight) with a beam. Anchor: the lens. The beam carries .torch-beam. */
export function Torch({ x = 0, y = 0, angle = 0, reach = 180, seed = 40 }) {
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) rotate(${angle})`}>
      <g className="torch-beam">
        <path d={`M0 -9L${reach} ${-reach * 0.34}L${reach} ${reach * 0.34}L0 9Z`} fill={TONES.amber.tint} opacity="0.6" />
        <path d={`M0 -9L${reach} ${-reach * 0.34}L${reach} ${reach * 0.34}L0 9Z`} fill="url(#hatch-amber)" opacity="0.3" />
      </g>
      <path d="M0 -11h-12l-8 5v12l8 5h12Z" fill={TONES.grey.mid} />
      <path d="M-20 -6h-44v12h44Z" fill="url(#fill-blue)" />
      <Ink d={handPoly([[0, -11], [-12, -11], [-20, -6], [-64, -6], [-64, 6], [-20, 6], [-12, 11], [0, 11]], { seed, amp: 0.3, closed: true })} w={1.7} />
    </g>
  )
}

/* ------------------------------------------------------------ copying and cutting */

/** A photocopier spitting out a copy. Anchor: bottom-left. The copy carries .copy-sheet. */
export function Copier({ x = 0, y = 0, s = 1, seed = 41 }) {
  const w = 150 * s
  const h = 92 * s
  const body = [[x, y - h], [x + w, y - h], [x + w, y], [x, y]]
  return (
    <g>
      <path d={polyPath(body)} fill={TONES.grey.tint} />
      <path d={polyPath([[x, y - h * 0.35], [x + w, y - h * 0.35], [x + w, y], [x, y]])} fill="url(#ink-hatch-light)" />
      <Ink d={handPoly(body, { seed, amp: 0.6, closed: true })} w={1.9} />
      <path d={`M${x + 8 * s} ${y - h}l${10 * s} ${-16 * s}h${w - 36 * s}l${10 * s} ${16 * s}Z`} fill={TONES.grey.mid} />
      <Ink d={handPoly([[x + 8 * s, y - h], [x + 18 * s, y - h - 16 * s], [x + w - 18 * s, y - h - 16 * s], [x + w - 8 * s, y - h]], { seed: seed + 1, amp: 0.4 })} w={1.6} />
      <rect x={x + w * 0.62} y={y - h * 0.8} width={w * 0.26} height={h * 0.16} rx="3" fill="#bfe0c4" />
      <Ink d={handPoly([[x + w * 0.62, y - h * 0.8], [x + w * 0.88, y - h * 0.8], [x + w * 0.88, y - h * 0.64], [x + w * 0.62, y - h * 0.64]], { seed: seed + 2, amp: 0.3, closed: true })} w={1.3} />
      <circle cx={x + w * 0.2} cy={y - h * 0.72} r={5 * s} fill={TONES.red.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
      <Ink d={handLine(x + w * 0.08, y - h * 0.5, x + w * 0.5, y - h * 0.5, seed + 3, 0.4)} w={1.4} />
      <g className="copy-sheet">
        <Sheet x={x - 46 * s} y={y - h * 0.62} w={58 * s} h={40 * s} lines={2} fold={8 * s} seed={seed + 8} />
      </g>
    </g>
  )
}

/** Scissors, blades open. Anchor: the pivot screw. Blades carry .blade-a / .blade-b. */
export function Scissors({ x = 0, y = 0, s = 1, angle = 0, seed = 42 }) {
  const blade = (dir) => (
    <g>
      <path d={`M0 0L${62 * s} ${dir * 6 * s}L${60 * s} ${dir * 10 * s}Z`} fill={TONES.grey.tint} />
      <Ink d={`M0 0L${62 * s} ${dir * 6 * s}L${60 * s} ${dir * 10 * s}Z`} w={1.5} />
      <path d={ellipsePath(-24 * s, -dir * 10 * s, 11 * s, 8 * s)} fill="none" stroke={TONES.red.ink} strokeWidth={5 * s} />
      <Ink d={handEllipse(-24 * s, -dir * 10 * s, 14 * s, 11 * s, { seed: seed + dir, amp: 0.4 })} w={1.4} />
      <Ink d={handLine(0, 0, -14 * s, -dir * 5 * s, seed + dir + 4, 0.2)} w={2.6} c={TONES.red.ink} />
    </g>
  )
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) rotate(${angle})`}>
      <Anim className="blade-a" origin={[0, 0]}>{blade(-1)}</Anim>
      <Anim className="blade-b" origin={[0, 0]}>{blade(1)}</Anim>
      <circle r={3.2 * s} fill={INK} />
    </g>
  )
}

/** A fingerprint in ink. Anchor: centre. */
export function Fingerprint({ x = 0, y = 0, s = 1, c = INK, seed = 43 }) {
  let d = ''
  for (let i = 1; i <= 7; i++) {
    const rx = i * 4.4 * s
    const ry = i * 5.6 * s
    const gap = 0.35 + (i % 3) * 0.12
    const start = Math.PI * (0.62 + gap * 0.2)
    const end = Math.PI * (2.38 - gap * 0.2)
    const pts = []
    for (let k = 0; k <= 14; k++) {
      const a = start + ((end - start) * k) / 14
      pts.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry + i * 0.6 * s])
    }
    d += handCurve(pts, { seed: seed + i, amp: 0.25 })
  }
  return <Ink d={d} c={c} w={1.3} />
}

/** A friendly box robot. Anchor: bottom centre. The antenna light carries .bot-light. */
export function Bot({ x = 0, y = 0, s = 1, tone = 'blue', mood = 'happy', seed = 44 }) {
  const body = [[x - 26 * s, y - 50 * s], [x + 26 * s, y - 50 * s], [x + 26 * s, y - 8 * s], [x - 26 * s, y - 8 * s]]
  const head = [[x - 22 * s, y - 88 * s], [x + 22 * s, y - 88 * s], [x + 22 * s, y - 54 * s], [x - 22 * s, y - 54 * s]]
  return (
    <g>
      <Ink d={handLine(x - 12 * s, y - 8 * s, x - 13 * s, y, seed, 0.2) + handLine(x + 12 * s, y - 8 * s, x + 13 * s, y, seed + 1, 0.2)} w={2.4} />
      <path d={polyPath(body)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(body, { seed: seed + 2, amp: 0.5, closed: true })} w={1.8} />
      <Box x={x - 12 * s} y={y - 42 * s} w={24 * s} h={16 * s} r={3} fill={PAPER} seed={seed + 3} sw={1.3} />
      <path d={polyPath(head)} fill={TONES.grey.tint} />
      <Ink d={handPoly(head, { seed: seed + 4, amp: 0.5, closed: true })} w={1.8} />
      <circle cx={x - 9 * s} cy={y - 73 * s} r={3.4 * s} fill={INK} />
      <circle cx={x + 9 * s} cy={y - 73 * s} r={3.4 * s} fill={INK} />
      <Ink d={mood === 'worried' ? `M${x - 7 * s} ${y - 61 * s}q${7 * s} ${-5 * s} ${14 * s} 0` : `M${x - 7 * s} ${y - 63 * s}q${7 * s} ${6 * s} ${14 * s} 0`} w={1.6} />
      <Ink d={handLine(x, y - 88 * s, x, y - 100 * s, seed + 5, 0.2)} w={1.6} />
      <g className="bot-light">
        <circle cx={x} cy={y - 104 * s} r={4.4 * s} fill={TONES.red.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
      </g>
      <Ink d={handLine(x - 26 * s, y - 40 * s, x - 38 * s, y - 26 * s, seed + 6, 0.3) + handLine(x + 26 * s, y - 40 * s, x + 38 * s, y - 26 * s, seed + 7, 0.3)} w={2} />
    </g>
  )
}

/* ------------------------------------------------------------ bubbles and signs */

/** A thought cloud with trailing puffs toward (tx, ty). Anchor: centre. */
export function Thought({ x = 0, y = 0, w = 120, h = 70, tx, ty, seed = 45, children }) {
  const pts = []
  const bumps = 11
  for (let i = 0; i < bumps; i++) {
    const a = (i / bumps) * Math.PI * 2
    const k = i % 2 ? 1.08 : 0.94
    pts.push([x + Math.cos(a) * (w / 2) * k, y + Math.sin(a) * (h / 2) * k])
  }
  return (
    <g>
      <Blob points={pts} seed={seed} fill={PAPER} amp={0.8} />
      {tx !== undefined ? (
        <g>
          <Oval cx={x + (tx - x) * 0.55} cy={y + h / 2 + (ty - y - h / 2) * 0.45} rx={6} fill={PAPER} seed={seed + 1} sw={1.4} />
          <Oval cx={x + (tx - x) * 0.8} cy={y + h / 2 + (ty - y - h / 2) * 0.8} rx={3.6} fill={PAPER} seed={seed + 2} sw={1.3} />
        </g>
      ) : null}
      {children}
    </g>
  )
}

/** A speech bubble with a tail pointing at (tx, ty). Anchor: top-left. */
export function Speech({ x = 0, y = 0, w = 140, h = 60, tx, ty, seed = 46, tone = 'paper', children }) {
  const bx = Math.min(Math.max(tx ?? x + w * 0.3, x + 14), x + w - 30)
  const shape = `M${x + 10} ${y}H${x + w - 10}Q${x + w} ${y} ${x + w} ${y + 10}V${y + h - 10}Q${x + w} ${y + h} ${x + w - 10} ${y + h}H${bx + 18}L${tx ?? bx} ${ty ?? y + h + 18}L${bx + 4} ${y + h}H${x + 10}Q${x} ${y + h} ${x} ${y + h - 10}V${y + 10}Q${x} ${y} ${x + 10} ${y}Z`
  return (
    <g>
      <path d={shape} fill={tint(tone)} />
      <Ink d={shape} w={1.7} />
      {children}
    </g>
  )
}

/** A small hourglass. Anchor: centre. The sand carries .sand-top and .sand-bottom. */
export function Hourglass({ x = 0, y = 0, s = 1, seed = 47 }) {
  const glass = `M${x - 18 * s} ${y - 30 * s}H${x + 18 * s}Q${x + 18 * s} ${y - 8 * s} ${x + 3 * s} ${y}Q${x + 18 * s} ${y + 8 * s} ${x + 18 * s} ${y + 30 * s}H${x - 18 * s}Q${x - 18 * s} ${y + 8 * s} ${x - 3 * s} ${y}Q${x - 18 * s} ${y - 8 * s} ${x - 18 * s} ${y - 30 * s}Z`
  return (
    <g>
      <path d={glass} fill="#eef4f6" />
      <g className="sand-top">
        <path d={`M${x - 12 * s} ${y - 16 * s}H${x + 12 * s}Q${x + 8 * s} ${y - 6 * s} ${x} ${y - 2 * s}Q${x - 8 * s} ${y - 6 * s} ${x - 12 * s} ${y - 16 * s}Z`} fill="url(#fill-amber)" />
      </g>
      <g className="sand-bottom">
        <path d={`M${x - 16 * s} ${y + 28 * s}Q${x} ${y + 12 * s} ${x + 16 * s} ${y + 28 * s}Z`} fill="url(#fill-amber)" />
      </g>
      <Ink d={glass} w={1.6} />
      <Ink d={handLine(x - 23 * s, y - 31 * s, x + 23 * s, y - 31 * s, seed, 0.3) + handLine(x - 23 * s, y + 31 * s, x + 23 * s, y + 31 * s, seed + 1, 0.3)} w={3} />
    </g>
  )
}

/** A cardboard box, taped shut. Anchor: top-left. */
export function Crate({ x = 0, y = 0, w = 90, h = 64, label, seed = 48 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={TONES.brown.tint} />
      <rect x={x} y={y} width={w} height={h * 0.3} fill="url(#ink-hatch-light)" opacity="0.6" />
      <rect x={x + w / 2 - 7} y={y} width="14" height={h} fill={TONES.amber.mid} opacity="0.6" />
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.6, closed: true })} w={1.8} />
      {label ? (
        <text x={x + w / 2} y={y + h * 0.72} textAnchor="middle" fontSize={Math.min(20, w * 0.18)} className="ink-hand" fontWeight="700" fill={INK}>
          {label}
        </text>
      ) : null}
    </g>
  )
}

/** A trophy cup. Anchor: bottom centre. */
export function Trophy({ x = 0, y = 0, s = 1, seed = 49 }) {
  const cup = `M${x - 22 * s} ${y - 70 * s}H${x + 22 * s}Q${x + 22 * s} ${y - 36 * s} ${x} ${y - 32 * s}Q${x - 22 * s} ${y - 36 * s} ${x - 22 * s} ${y - 70 * s}Z`
  return (
    <g>
      <Ink d={`M${x - 22 * s} ${y - 64 * s}q${-14 * s} 0 ${-12 * s} ${12 * s}q${2 * s} ${8 * s} ${12 * s} ${6 * s}M${x + 22 * s} ${y - 64 * s}q${14 * s} 0 ${12 * s} ${12 * s}q${-2 * s} ${8 * s} ${-12 * s} ${6 * s}`} w={2.2} />
      <path d={cup} fill="url(#fill-amber)" />
      <Ink d={cup} w={1.8} />
      <path d={`M${x - 4 * s} ${y - 32 * s}h${8 * s}v${14 * s}h${-8 * s}Z`} fill={TONES.amber.mid} />
      <Box x={x - 16 * s} y={y - 18 * s} w={32 * s} h={18 * s} fill="url(#wood)" seed={seed} sw={1.6} />
      <Sparkle x={x + 26 * s} y={y - 80 * s} s={6 * s} />
    </g>
  )
}

/** A conical flask with coloured liquid. Anchor: bottom centre. */
export function Flask({ x = 0, y = 0, s = 1, tone = 'green', seed = 50 }) {
  const glass = [[x - 8 * s, y - 64 * s], [x + 8 * s, y - 64 * s], [x + 8 * s, y - 40 * s], [x + 30 * s, y], [x - 30 * s, y], [x - 8 * s, y - 40 * s]]
  const liquid = [[x - 18 * s, y - 20 * s], [x + 18 * s, y - 20 * s], [x + 30 * s, y], [x - 30 * s, y]]
  return (
    <g>
      <path d={polyPath(glass)} fill="#eef4f6" />
      <path d={polyPath(liquid)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(glass, { seed, amp: 0.4, closed: true })} w={1.8} />
      <Ink d={handLine(x - 12 * s, y - 66 * s, x + 12 * s, y - 66 * s, seed + 2, 0.3)} w={2.4} />
      <circle cx={x - 6 * s} cy={y - 10 * s} r={2.4 * s} fill={PAPER} opacity="0.9" />
      <circle cx={x + 8 * s} cy={y - 14 * s} r={1.6 * s} fill={PAPER} opacity="0.9" />
    </g>
  )
}

/** A key. Anchor: centre of the bow (the ring). */
export function Key({ x = 0, y = 0, s = 1, angle = 0, tone = 'amber', seed = 51 }) {
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) rotate(${angle}) scale(${s})`}>
      <path d={ellipsePath(0, 0, 13, 13)} fill={`url(#fill-${tone})`} />
      <path d={ellipsePath(0, 0, 5, 5)} fill={PAPER} />
      <Ink d={handEllipse(0, 0, 13, 13, { seed, amp: 0.5 }) + handEllipse(0, 0, 5, 5, { seed: seed + 1, amp: 0.3 })} w={1.6} />
      <path d="M12 -3.5h46v7h-46Z" fill={`url(#fill-${tone})`} />
      <path d="M44 3.5v8h5v-8M52 3.5v6h5v-6" fill={`url(#fill-${tone})`} />
      <Ink d={handPoly([[12, -3.5], [58, -3.5], [58, 3.5], [57, 3.5], [57, 9.5], [52, 9.5], [52, 3.5], [49, 3.5], [49, 11.5], [44, 11.5], [44, 3.5], [12, 3.5]], { seed: seed + 2, amp: 0.25 })} w={1.5} />
    </g>
  )
}

/** A ladder. Anchor: bottom-left foot. */
export function Ladder({ x = 0, y = 0, h = 150, w = 42, rungs = 6, seed = 52 }) {
  let d = handLine(x, y, x + 6, y - h, seed, 0.4) + handLine(x + w, y, x + w - 6, y - h, seed + 1, 0.4)
  for (let i = 1; i <= rungs; i++) {
    const ry = y - (h * i) / (rungs + 1)
    const inset = (6 * i) / (rungs + 1)
    d += handLine(x + inset, ry, x + w - inset, ry, seed + i + 3, 0.3)
  }
  return <Ink d={d} w={2.2} c={EARTH.soilLine} />
}

/** A door, a little ajar when `open` is above 0. Anchor: bottom-left. */
export function Door({ x = 0, y = 0, w = 72, h = 128, open = 0, tone = 'blue', seed = 53 }) {
  const frame = [[x, y], [x, y - h], [x + w, y - h], [x + w, y]]
  const leafW = w * (1 - open * 0.55)
  const leaf = [[x, y], [x, y - h], [x + leafW, y - h + open * 8], [x + leafW, y - open * 8]]
  return (
    <g>
      <path d={polyPath(frame)} fill={open ? '#3a302a' : TONES[tone].tint} />
      {open ? <path d={polyPath(frame)} fill={TONES.amber.tint} opacity="0.35" /> : null}
      <path d={polyPath(leaf)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(leaf, { seed, amp: 0.4, closed: true })} w={1.7} />
      <Ink d={handPoly(frame, { seed: seed + 1, amp: 0.5 })} w={2} />
      <circle cx={x + leafW - 10} cy={y - h / 2} r={3} fill={TONES.amber.mid} stroke={INK} strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
    </g>
  )
}

/** A globe on a stand. Anchor: centre of the globe. */
export function Globe({ x = 0, y = 0, r = 34, seed = 54 }) {
  return (
    <g>
      <Ink d={`M${x - r * 0.9} ${y + r * 0.4}Q${x} ${y + r * 1.5} ${x + r * 0.9} ${y + r * 0.4}`} w={2.2} c={INK_SOFT} />
      <Ink d={handLine(x, y + r * 0.95, x, y + r * 1.35, seed, 0.2) + handLine(x - r * 0.6, y + r * 1.4, x + r * 0.6, y + r * 1.4, seed + 1, 0.3)} w={2.4} />
      <Oval cx={x} cy={y} rx={r} fill="url(#fill-blue)" seed={seed + 2} />
      <Blob points={[[x - r * 0.6, y - r * 0.3], [x - r * 0.2, y - r * 0.6], [x + r * 0.1, y - r * 0.2], [x - r * 0.1, y + r * 0.2], [x - r * 0.5, y + r * 0.1]]} fill="url(#fill-green)" sw={1.3} seed={seed + 3} />
      <Blob points={[[x + r * 0.3, y + r * 0.1], [x + r * 0.7, y - r * 0.05], [x + r * 0.6, y + r * 0.5], [x + r * 0.3, y + r * 0.55]]} fill="url(#fill-green)" sw={1.3} seed={seed + 4} />
      <Ink d={handEllipse(x, y, r * 0.42, r, { seed: seed + 5, amp: 0.3 })} w={1} o={0.6} />
    </g>
  )
}
