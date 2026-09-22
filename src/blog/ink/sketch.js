/**
 * Geometry for hand-drawn lines.
 *
 * Every function here is deterministic: the same arguments and seed always
 * give the same path. That matters twice over. The blog is rendered to HTML at
 * build time and then adopted by React in the browser, so a random wobble
 * would make the two disagree. And a drawing that shifted on every visit
 * would look like a glitch rather than a hand.
 *
 * Coordinates are in the drawing's own units (every scene is 800 wide).
 */

/** Mulberry32: a tiny seeded generator returning numbers in [0, 1). */
export function rng(seed = 1) {
  let a = (Math.imul(seed | 0, 2654435761) ^ 0x9e3779b9) >>> 0
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** A stable number from a string, for seeding by name. */
export function seedOf(text) {
  let h = 2166136261
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** One decimal is plenty at this scale and keeps the markup small. */
export const r1 = (n) => Math.round(n * 10) / 10

const pt = (x, y) => `${r1(x)} ${r1(y)}`

/**
 * A straight stroke the way a pen draws one: a slight bow somewhere along
 * its length and ends that stop a touch short or run a touch long.
 */
export function handLine(x1, y1, x2, y2, seed = 1, amp = 1) {
  const r = rng(seed)
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  const ux = dx / len
  const uy = dy / len
  const nx = -uy
  const ny = ux

  const over = Math.min(2.2, len * 0.025) * amp
  const s = (r() - 0.5) * over * 2
  const e = (r() - 0.5) * over * 2
  const sx = x1 - ux * s + nx * (r() - 0.5) * amp * 0.8
  const sy = y1 - uy * s + ny * (r() - 0.5) * amp * 0.8
  const ex = x2 + ux * e + nx * (r() - 0.5) * amp * 0.8
  const ey = y2 + uy * e + ny * (r() - 0.5) * amp * 0.8

  const bow = (r() - 0.5) * amp * Math.min(5, 1 + len / 55)
  const t = 0.35 + r() * 0.3
  const cx = x1 + dx * t + nx * bow
  const cy = y1 + dy * t + ny * bow

  return `M${pt(sx, sy)}Q${pt(cx, cy)} ${pt(ex, ey)}`
}

/**
 * A smooth curve through points (Catmull-Rom, drawn as cubic Beziers).
 * `closed` joins the last point back to the first.
 */
export function curve(points, closed = false) {
  const n = points.length
  if (n < 2) return ''
  if (n === 2) return `M${pt(...points[0])}L${pt(...points[1])}`

  const at = (i) => {
    if (closed) return points[(i + n) % n]
    return points[Math.max(0, Math.min(n - 1, i))]
  }

  let d = `M${pt(...points[0])}`
  const last = closed ? n : n - 1
  for (let i = 0; i < last; i++) {
    const [x0, y0] = at(i - 1)
    const [x1, y1] = at(i)
    const [x2, y2] = at(i + 1)
    const [x3, y3] = at(i + 2)
    const c1x = x1 + (x2 - x0) / 6
    const c1y = y1 + (y2 - y0) / 6
    const c2x = x2 - (x3 - x1) / 6
    const c2y = y2 - (y3 - y1) / 6
    d += `C${pt(c1x, c1y)} ${pt(c2x, c2y)} ${pt(x2, y2)}`
  }
  return closed ? `${d}Z` : d
}

/** Nudge every point a little, so a curve stops looking computed. */
export function jitter(points, seed = 1, amp = 1) {
  const r = rng(seed)
  return points.map(([x, y]) => [x + (r() - 0.5) * amp * 2, y + (r() - 0.5) * amp * 2])
}

/** A smooth wobbly curve through points: jitter, then curve. */
export function handCurve(points, { seed = 1, amp = 0.8, closed = false } = {}) {
  return curve(jitter(points, seed, amp), closed)
}

/**
 * A pen circle or ellipse: it starts somewhere on the rim, wanders a little,
 * and overshoots its own start instead of closing exactly.
 */
export function handEllipse(cx, cy, rx, ry, { seed = 1, amp = 1, steps = 14, overlap = 0.1 } = {}) {
  const r = rng(seed)
  const start = r() * Math.PI * 2
  const total = Math.PI * 2 * (1 + overlap)
  const count = Math.max(6, Math.round(steps * (1 + overlap)))
  const points = []
  for (let i = 0; i <= count; i++) {
    const a = start + (total * i) / count
    const wob = 1 + (r() - 0.5) * 0.05 * amp
    points.push([cx + Math.cos(a) * rx * wob, cy + Math.sin(a) * ry * wob])
  }
  return curve(points, false)
}

/** A clean closed ellipse path (for fills that sit under a hand outline). */
export function ellipsePath(cx, cy, rx, ry) {
  return `M${pt(cx - rx, cy)}A${r1(rx)} ${r1(ry)} 0 1 0 ${pt(cx + rx, cy)}A${r1(rx)} ${r1(ry)} 0 1 0 ${pt(cx - rx, cy)}Z`
}

/** Four separate strokes with loose corners: the classic sketched box. */
export function handRect(x, y, w, h, seed = 1, amp = 1) {
  return [
    handLine(x, y, x + w, y, seed, amp),
    handLine(x + w, y, x + w, y + h, seed + 1, amp),
    handLine(x + w, y + h, x, y + h, seed + 2, amp),
    handLine(x, y + h, x, y, seed + 3, amp),
  ].join('')
}

/** Points around a rounded rectangle, ready for handCurve(..., closed). */
export function roundedRectPoints(x, y, w, h, radius = 8) {
  const rad = Math.min(radius, w / 2, h / 2)
  const k = rad * 0.3
  return [
    [x + rad, y],
    [x + w / 2, y],
    [x + w - rad, y],
    [x + w - k, y + k],
    [x + w, y + rad],
    [x + w, y + h / 2],
    [x + w, y + h - rad],
    [x + w - k, y + h - k],
    [x + w - rad, y + h],
    [x + w / 2, y + h],
    [x + rad, y + h],
    [x + k, y + h - k],
    [x, y + h - rad],
    [x, y + h / 2],
    [x, y + rad],
    [x + k, y + k],
  ]
}

/** Separate strokes joining the points in order, corners left loose. */
export function handPoly(points, { seed = 1, amp = 1, closed = false } = {}) {
  let d = ''
  const last = closed ? points.length : points.length - 1
  for (let i = 0; i < last; i++) {
    const [x1, y1] = points[i]
    const [x2, y2] = points[(i + 1) % points.length]
    d += handLine(x1, y1, x2, y2, seed + i * 7, amp)
  }
  return d
}

/** A straight closed polygon path (fills under hand outlines). */
export function polyPath(points) {
  return `M${points.map(([x, y]) => pt(x, y)).join('L')}Z`
}

/** A gentle wave from (x1, y) to (x2, y): the penpal divider, in a drawing. */
export function wave(x1, x2, y, { amp = 3, length = 18, seed = 1 } = {}) {
  const r = rng(seed)
  const points = []
  const steps = Math.max(2, Math.round((x2 - x1) / (length / 2)))
  for (let i = 0; i <= steps; i++) {
    const x = x1 + ((x2 - x1) * i) / steps
    const up = i % 2 === 0 ? -1 : 1
    points.push([x, y + up * amp * (0.8 + r() * 0.4)])
  }
  return curve(points)
}

/**
 * Parallel hatch strokes filling a box at an angle, each one a hand line.
 * Put the result under a clipPath to hatch any shape. `gap` is the spacing.
 */
export function hatchLines(x, y, w, h, { angle = -40, gap = 6, seed = 1, amp = 0.6 } = {}) {
  const a = (angle * Math.PI) / 180
  const cos = Math.cos(a)
  const sin = Math.sin(a)
  const cx = x + w / 2
  const cy = y + h / 2
  const reach = Math.hypot(w, h) / 2 + gap
  let d = ''
  let i = 0
  for (let offset = -reach; offset <= reach; offset += gap) {
    // A line through the box centre, shifted sideways by `offset`.
    const px = cx - sin * offset
    const py = cy + cos * offset
    d += handLine(px - cos * reach, py - sin * reach, px + cos * reach, py + sin * reach, seed + i, amp)
    i += 1
  }
  return d
}

/** Scattered dots inside a box, for stipple texture (soil, shadow, sand). */
export function stipple(x, y, w, h, { count = 30, seed = 1, min = 0.6, max = 1.4 } = {}) {
  const r = rng(seed)
  const dots = []
  for (let i = 0; i < count; i++) {
    dots.push({ x: r1(x + r() * w), y: r1(y + r() * h), r: r1(min + r() * (max - min)) })
  }
  return dots
}

/** A random pick from a list, seeded. */
export function pick(list, seed = 1) {
  return list[Math.floor(rng(seed)() * list.length)]
}
