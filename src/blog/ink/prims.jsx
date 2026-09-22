import { useId } from 'react'

import { INK, EARTH } from './palette.js'
import {
  curve,
  ellipsePath,
  handCurve,
  handEllipse,
  handLine,
  handPoly,
  handRect,
  hatchLines,
  polyPath,
  r1,
  rng,
  roundedRectPoints,
  stipple,
  wave,
} from './sketch.js'

/**
 * The drawing kit. Two rules keep every scene clean:
 *
 * 1. Position with <Place>, animate with <Anim>, never both on one element.
 *    SVG positions things with a transform attribute and CSS animates the
 *    transform property; on the same element the animation would wipe out
 *    the position. So a moving thing is always Place > Anim > drawing.
 *
 * 2. Strokes do not scale. Pen lines keep the same width whether a drawing
 *    fills the article or shrinks onto a card or a phone, the way a real pen
 *    line would (vector-effect: non-scaling-stroke). Pass scale to opt out,
 *    which a line needs when it is drawn on with stroke-dashoffset.
 */

export function useSafeId(prefix = 'i') {
  return `${prefix}${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
}

/** A raw pen stroke. `d` is any SVG path. */
export function Ink({
  d,
  w = 1.7,
  c = INK,
  fill = 'none',
  o,
  dash,
  scale = false,
  className,
  style,
  ...rest
}) {
  return (
    <path
      d={d}
      fill={fill}
      stroke={c}
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dash}
      opacity={o}
      vectorEffect={scale ? undefined : 'non-scaling-stroke'}
      className={className}
      style={style}
      {...rest}
    />
  )
}

/** A hand-drawn straight line. */
export function Line({ x1, y1, x2, y2, seed = 1, amp = 1, w = 1.7, c = INK, o, dash, className }) {
  return <Ink d={handLine(x1, y1, x2, y2, seed, amp)} w={w} c={c} o={o} dash={dash} className={className} />
}

/** A smooth hand curve through points. */
export function Curve({ points, seed = 1, amp = 0.8, closed = false, w = 1.7, c = INK, fill, o, className }) {
  return (
    <Ink
      d={handCurve(points, { seed, amp, closed })}
      w={w}
      c={c}
      fill={fill || 'none'}
      o={o}
      className={className}
    />
  )
}

/**
 * A box: flat fill underneath, sketched outline on top. The two are drawn
 * separately on purpose, so the colour sits a hair off the line the way a
 * pencil fill never quite meets the ink.
 */
export function Box({
  x,
  y,
  w,
  h,
  r = 0,
  seed = 1,
  amp = 1,
  fill,
  stroke = INK,
  sw = 1.7,
  double = false,
  className,
  style,
}) {
  const outline = (s) =>
    r > 0
      ? handCurve(roundedRectPoints(x, y, w, h, r), { seed: s, amp: amp * 0.55, closed: true })
      : handRect(x, y, w, h, s, amp)

  return (
    <g className={className} style={style}>
      {fill ? <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} /> : null}
      {stroke ? <Ink d={outline(seed)} c={stroke} w={sw} /> : null}
      {stroke && double ? <Ink d={outline(seed + 41)} c={stroke} w={sw * 0.7} o={0.55} /> : null}
    </g>
  )
}

/** An ellipse (or circle): clean fill, pen outline that overshoots its start. */
export function Oval({
  cx,
  cy,
  rx,
  ry = rx,
  seed = 1,
  amp = 1,
  fill,
  stroke = INK,
  sw = 1.7,
  className,
  style,
}) {
  return (
    <g className={className} style={style}>
      {fill ? <path d={ellipsePath(cx, cy, rx, ry)} fill={fill} /> : null}
      {stroke ? <Ink d={handEllipse(cx, cy, rx, ry, { seed, amp })} c={stroke} w={sw} /> : null}
    </g>
  )
}

/** A straight-sided shape with loose sketched corners. */
export function Poly({ points, seed = 1, amp = 1, fill, stroke = INK, sw = 1.7, closed = true, className, style }) {
  return (
    <g className={className} style={style}>
      {fill ? <path d={polyPath(points)} fill={fill} /> : null}
      {stroke ? <Ink d={handPoly(points, { seed, amp, closed })} c={stroke} w={sw} /> : null}
    </g>
  )
}

/** A soft rounded shape through points (leaves, clouds, puddles, bodies). */
export function Blob({ points, seed = 1, amp = 0.7, fill, stroke = INK, sw = 1.7, className, style }) {
  return (
    <g className={className} style={style}>
      {fill ? <path d={curve(points, true)} fill={fill} /> : null}
      {stroke ? <Ink d={handCurve(points, { seed, amp, closed: true })} c={stroke} w={sw} /> : null}
    </g>
  )
}

/** Handwritten words inside a drawing (Kalam). Keep them short and large. */
export function Hand({
  x,
  y,
  size = 26,
  c = INK,
  anchor = 'start',
  weight = 400,
  rotate = 0,
  className,
  style,
  children,
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill={c}
      textAnchor={anchor}
      fontWeight={weight}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
      className={['ink-hand', className].filter(Boolean).join(' ')}
      style={style}
    >
      {children}
    </text>
  )
}

/** Typewriter words inside a drawing (Courier Prime): labels, stamps, codes. */
export function Type({ x, y, size = 18, c = INK, anchor = 'start', weight = 400, className, style, children }) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill={c}
      textAnchor={anchor}
      fontWeight={weight}
      className={['ink-type', className].filter(Boolean).join(' ')}
      style={style}
    >
      {children}
    </text>
  )
}

/**
 * Hatching clipped to any shape, drawn stroke by stroke. Heavier than the
 * pattern fills in defs.jsx, so keep it for the few places that need a
 * particular angle or density.
 */
export function HatchIn({ d, box, angle = -40, gap = 6, seed = 1, c = INK, sw = 1, o = 0.5 }) {
  const id = useSafeId('hatch')
  const [x, y, w, h] = box
  return (
    <g>
      <clipPath id={id}>
        <path d={d} />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <Ink d={hatchLines(x, y, w, h, { angle, gap, seed })} c={c} w={sw} o={o} />
      </g>
    </g>
  )
}

/** A scatter of dots (soil grit, sand, sparkle dust). */
export function Dots({ x, y, w, h, count = 24, seed = 1, c = INK, o = 0.45, min = 0.6, max = 1.4 }) {
  return (
    <g opacity={o}>
      {stipple(x, y, w, h, { count, seed, min, max }).map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} fill={c} />
      ))}
    </g>
  )
}

/**
 * A curved hand-drawn arrow from `from` to `to`. `bend` bows it sideways
 * (negative bends the other way); the head is two loose strokes.
 */
export function Arrow({ from, to, bend = 0.2, seed = 1, c = INK, w = 1.7, head = 11, dash, className, style }) {
  const [x1, y1] = from
  const [x2, y2] = to
  const cx = (x1 + x2) / 2 - (y2 - y1) * bend
  const cy = (y1 + y2) / 2 + (x2 - x1) * bend
  const angle = Math.atan2(y2 - cy, x2 - cx)
  const a1 = angle + Math.PI * 0.82
  const a2 = angle - Math.PI * 0.82
  const r = rng(seed)
  const tip = [x2, y2]
  const h1 = [x2 + Math.cos(a1) * head * (0.9 + r() * 0.2), y2 + Math.sin(a1) * head * (0.9 + r() * 0.2)]
  const h2 = [x2 + Math.cos(a2) * head * (0.9 + r() * 0.2), y2 + Math.sin(a2) * head * (0.9 + r() * 0.2)]

  return (
    <g className={className} style={style}>
      <Ink d={`M${r1(x1)} ${r1(y1)}Q${r1(cx)} ${r1(cy)} ${r1(x2)} ${r1(y2)}`} c={c} w={w} dash={dash} />
      <Ink d={handLine(...tip, ...h1, seed + 3, 0.4) + handLine(...tip, ...h2, seed + 5, 0.4)} c={c} w={w} />
    </g>
  )
}

/** A four-point twinkle. */
export function Sparkle({ x, y, s = 10, fill = '#f7c56c', stroke = INK, sw = 1.3, className, style }) {
  const k = s * 0.22
  const d =
    `M${x} ${y - s}Q${x + k} ${y - k} ${x + s} ${y}` +
    `Q${x + k} ${y + k} ${x} ${y + s}` +
    `Q${x - k} ${y + k} ${x - s} ${y}` +
    `Q${x - k} ${y - k} ${x} ${y - s}Z`
  return <Ink d={d} fill={fill} c={stroke} w={sw} className={className} style={style} />
}

/** Short parallel strokes that say "this is moving" or "this just hit". */
export function Motion({ x, y, angle = 180, count = 3, length = 18, gap = 8, seed = 1, c = INK, w = 1.5, className }) {
  const a = (angle * Math.PI) / 180
  const nx = -Math.sin(a)
  const ny = Math.cos(a)
  let d = ''
  for (let i = 0; i < count; i++) {
    const off = (i - (count - 1) / 2) * gap
    const len = length * (0.7 + ((i * 37) % 10) / 20)
    const sx = x + nx * off
    const sy = y + ny * off
    d += handLine(sx, sy, sx + Math.cos(a) * len, sy + Math.sin(a) * len, seed + i, 0.5)
  }
  return <Ink d={d} c={c} w={w} className={className} />
}

/** Burst lines around a point (an idea, a thud, a surprise). */
export function Burst({ x, y, r = 18, length = 10, count = 7, from = -160, to = -20, seed = 1, c = INK, w = 1.6, className }) {
  let d = ''
  for (let i = 0; i < count; i++) {
    const a = ((from + ((to - from) * i) / Math.max(1, count - 1)) * Math.PI) / 180
    d += handLine(
      x + Math.cos(a) * r,
      y + Math.sin(a) * r,
      x + Math.cos(a) * (r + length),
      y + Math.sin(a) * (r + length),
      seed + i,
      0.4,
    )
  }
  return <Ink d={d} c={c} w={w} className={className} />
}

/** A tuft of grass standing on (x, y). */
export function Tuft({ x, y, s = 1, seed = 1, c = INK, w = 1.3 }) {
  const r = rng(seed)
  const blades = 4 + Math.floor(r() * 3)
  let d = ''
  for (let i = 0; i < blades; i++) {
    const bx = x + (i - blades / 2) * 2.4 * s
    const h = (7 + r() * 9) * s
    const lean = (r() - 0.5) * 9 * s
    d += `M${r1(bx)} ${r1(y)}Q${r1(bx + lean * 0.3)} ${r1(y - h * 0.6)} ${r1(bx + lean)} ${r1(y - h)}`
  }
  return <Ink d={d} c={c} w={w} />
}

/** A pebble: filled stone, outline, a lit edge and a little shadow. */
export function Pebble({ x, y, rx = 8, ry = 5.5, seed = 1, fill = EARTH.pebble }) {
  return (
    <g>
      <path d={ellipsePath(x, y, rx, ry)} fill={fill} />
      <path d={ellipsePath(x + rx * 0.15, y + ry * 0.2, rx * 0.8, ry * 0.7)} fill="url(#ink-hatch-light)" />
      <Ink d={handEllipse(x, y, rx, ry, { seed, amp: 1.2, overlap: 0.05 })} w={1.3} />
      <Ink d={`M${r1(x - rx * 0.55)} ${r1(y - ry * 0.25)}Q${r1(x - rx * 0.3)} ${r1(y - ry * 0.75)} ${r1(x + rx * 0.1)} ${r1(y - ry * 0.7)}`} c="#fffaf0" w={1.2} />
    </g>
  )
}

/** A wavy line, like the divider on a napkin. */
export function Wave({ x1, x2, y, amp = 3, length = 18, seed = 1, c = INK, w = 1.5, o, className }) {
  return <Ink d={wave(x1, x2, y, { amp, length, seed })} c={c} w={w} o={o} className={className} />
}

/** A hand-drawn tick. */
export function Tick({ x, y, s = 1, c = '#3f8f4f', w = 2.4, className }) {
  const d = `M${x - 9 * s} ${y}Q${x - 5 * s} ${y + 3 * s} ${x - 3 * s} ${y + 8 * s}Q${x + 2 * s} ${y - 6 * s} ${x + 11 * s} ${y - 12 * s}`
  return <Ink d={d} c={c} w={w} className={className} />
}

/** A hand-drawn cross. */
export function Cross({ x, y, s = 1, c = '#c44e38', w = 2.4, seed = 1, className }) {
  return (
    <Ink
      d={handLine(x - 8 * s, y - 8 * s, x + 8 * s, y + 8 * s, seed, 0.6) + handLine(x + 8 * s, y - 8 * s, x - 8 * s, y + 8 * s, seed + 2, 0.6)}
      c={c}
      w={w}
      className={className}
    />
  )
}

/** A soft drop shadow on the floor under something. */
export function Shadow({ x, y, rx = 30, ry = 5, o = 1 }) {
  return <path d={ellipsePath(x, y, rx, ry)} fill="url(#ink-hatch-light)" opacity={o} />
}

/**
 * Position a group. Everything a scene places goes through this; it takes no
 * className, so it can never be animated by mistake (see rule 1 above).
 * `flip` mirrors the contents left to right.
 */
export function Place({ x = 0, y = 0, s = 1, r = 0, flip = false, children }) {
  const parts = []
  if (x || y) parts.push(`translate(${r1(x)} ${r1(y)})`)
  if (r) parts.push(`rotate(${r})`)
  if (s !== 1 || flip) parts.push(`scale(${flip ? -s : s} ${s})`)
  return <g transform={parts.length ? parts.join(' ') : undefined}>{children}</g>
}

/**
 * Something that moves. `origin` is the pivot in the group's own units, used
 * for rotating and scaling ([x, y]); `spin` pivots on the group's own centre.
 * The scene's CSS supplies the animation through `className`.
 *
 * Distances in the keyframes are in the units of whatever holds the Anim:
 * inside <Place s={2}>, translate(10px) moves 20 scene units. When the
 * numbers should be scene units, put the Anim in an unscaled Place and do
 * the scaling in a second Place inside it.
 */
export function Anim({ className, origin, spin = false, style, children }) {
  let pivot
  if (spin) pivot = { transformBox: 'fill-box', transformOrigin: 'center' }
  else if (origin) pivot = { transformBox: 'view-box', transformOrigin: `${origin[0]}px ${origin[1]}px` }
  return (
    <g className={className} style={pivot || style ? { ...pivot, ...style } : undefined}>
      {children}
    </g>
  )
}
