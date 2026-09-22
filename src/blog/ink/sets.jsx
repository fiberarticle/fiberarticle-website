import { EARTH, INK, TONES } from './palette.js'
import { Dots, Ink, Pebble, Tuft } from './prims.jsx'
import { handLine, r1, rng, wave } from './sketch.js'

/**
 * Backdrops that whole scenes stand on.
 */

/**
 * The ground in cross-section: a grass line with tufts, then warm hatched
 * earth down to `bottom`, with pebbles set in it.
 * `holes` cuts round chambers into the soil ([x, y, rx, ry] each), which is
 * how the underground library scenes get their rooms and tunnels.
 */
export function Ground({ y, x1 = 0, x2 = 800, bottom = 420, seed = 60, tufts = 9, pebbles = 7, grit = 40, holes = [], tunnel }) {
  const r = rng(seed)
  const top = wave(x1, x2, y, { amp: 1.4, length: 70, seed })
  const soil = `${top}L${x2} ${bottom}L${x1} ${bottom}Z`

  const tuftXs = []
  for (let i = 0; i < tufts; i++) tuftXs.push(x1 + ((i + 0.5) / tufts) * (x2 - x1) + (r() - 0.5) * 40)

  const stones = []
  for (let i = 0; i < pebbles; i++) {
    stones.push({
      x: x1 + 20 + r() * (x2 - x1 - 40),
      y: y + 24 + r() * (bottom - y - 36),
      rx: 5 + r() * 7,
      ry: 3.5 + r() * 4,
    })
  }

  return (
    <g>
      <path d={soil} fill="url(#soil)" />
      {tunnel ? <path d={tunnel} fill="#e9d9bf" /> : null}
      {holes.map(([hx, hy, rx, ry], i) => (
        <g key={i}>
          <ellipse cx={hx} cy={hy} rx={rx} ry={ry} fill="#efe2c9" />
          <ellipse cx={hx} cy={hy + ry * 0.35} rx={rx * 0.92} ry={ry * 0.62} fill="url(#ink-hatch-light)" opacity="0.5" />
          <Ink d={`M${r1(hx - rx)} ${r1(hy)}A${rx} ${ry} 0 0 1 ${r1(hx + rx)} ${r1(hy)}A${rx} ${ry} 0 0 1 ${r1(hx - rx)} ${r1(hy)}`} c={EARTH.soilLine} w={1.6} />
        </g>
      ))}
      <Dots x={x1} y={y + 8} w={x2 - x1} h={bottom - y - 10} count={grit} seed={seed + 3} c={EARTH.soilLine} o={0.5} />
      {stones.map((stone, i) => (
        <Pebble key={i} {...stone} seed={seed + 10 + i} />
      ))}
      <Ink d={top} w={2} />
      {tuftXs.map((tx, i) => (
        <Tuft key={i} x={tx} y={y + 0.5} s={0.9 + r() * 0.5} seed={seed + 30 + i} />
      ))}
    </g>
  )
}

/** A desk top running across the scene at `y`, wood grain on its front edge. */
export function Desk({ y, x1 = 0, x2 = 800, depth = 22, seed = 61 }) {
  return (
    <g>
      <rect x={x1} y={y} width={x2 - x1} height={depth} fill="url(#wood)" />
      <rect x={x1} y={y + depth - 6} width={x2 - x1} height={6} fill="url(#ink-hatch-light)" />
      <Ink d={handLine(x1, y, x2, y, seed, 1.2)} w={2} />
      <Ink d={handLine(x1, y + depth, x2, y + depth, seed + 1, 1.2)} w={1.6} />
    </g>
  )
}

/** A plain floor line with a little shading, for scenes that need no ground. */
export function Floor({ y, x1 = 40, x2 = 760, seed = 62 }) {
  return (
    <g>
      <Ink d={handLine(x1, y, x2, y, seed, 1.4)} w={1.8} />
      <Ink d={handLine(x1 + 30, y + 6, x2 - 60, y + 6, seed + 1, 1)} w={1.1} o={0.35} />
    </g>
  )
}

/** A wall with a window, for indoor scenes. Anchor: top-left of the window. */
export function Window({ x, y, w = 150, h = 120, night = false, seed = 63 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={night ? '#3b4a66' : TONES.blue.tint} />
      {night ? <rect x={x} y={y} width={w} height={h} fill="url(#ink-hatch-light)" opacity="0.6" /> : null}
      <Ink d={handLine(x + w / 2, y, x + w / 2, y + h, seed, 0.4) + handLine(x, y + h / 2, x + w, y + h / 2, seed + 1, 0.4)} w={2.2} />
      <Ink d={handLine(x, y, x + w, y, seed + 2, 0.5) + handLine(x + w, y, x + w, y + h, seed + 3, 0.5) + handLine(x + w, y + h, x, y + h, seed + 4, 0.5) + handLine(x, y + h, x, y, seed + 5, 0.5)} w={2.4} c={INK} />
      <rect x={x - 8} y={y + h} width={w + 16} height="8" fill="url(#wood)" />
      <Ink d={handLine(x - 8, y + h + 8, x + w + 8, y + h + 8, seed + 6, 0.4)} w={1.6} />
    </g>
  )
}
