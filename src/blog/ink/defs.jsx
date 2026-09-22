import { EARTH, INK, TONES } from './palette.js'

/**
 * Shared fills for every drawing on a page: coloured-pencil hatching, ink
 * shading, soil, wood, stipple. They are defined once, in a hidden SVG at the
 * top of the blog layout, and any scene fills a shape with them by id:
 *
 *   fill="url(#fill-amber)"   amber pencil over an amber tint
 *   fill="url(#hatch-blue)"   blue pencil strokes only, laid over another fill
 *   fill="url(#ink-hatch)"    ink shading, laid over another fill
 *   fill="url(#soil)"         earth in cross-section, for underground scenes
 *
 * Each tile is small and its strokes start and end at the same x, so the
 * hatching runs on seamlessly; the two strokes per tile differ in weight and
 * wobble, which is what keeps it reading as a hand rather than a screen.
 * The hidden SVG is sized to nothing rather than display:none, because some
 * browsers refuse to paint patterns that live inside an undisplayed SVG.
 */

function Pencil({ id, tint, stroke, angle = -38, size = 7, weight = 1.25, opacity = 0.8 }) {
  return (
    <pattern
      id={id}
      width={size}
      height={size}
      patternUnits="userSpaceOnUse"
      patternTransform={`rotate(${angle})`}
    >
      {tint ? <rect width={size} height={size} fill={tint} /> : null}
      <path
        d={`M${size * 0.18} 0 Q${size * 0.26} ${size / 2} ${size * 0.18} ${size}`}
        stroke={stroke}
        strokeWidth={weight}
        opacity={opacity}
        fill="none"
      />
      <path
        d={`M${size * 0.66} 0 Q${size * 0.6} ${size / 2} ${size * 0.66} ${size}`}
        stroke={stroke}
        strokeWidth={weight * 0.62}
        opacity={opacity * 0.6}
        fill="none"
      />
    </pattern>
  )
}

export default function InkDefs() {
  return (
    <svg
      className="ink-defs"
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        {Object.entries(TONES).map(([name, tone]) => (
          <Pencil key={`fill-${name}`} id={`fill-${name}`} tint={tone.tint} stroke={tone.ink} />
        ))}
        {Object.entries(TONES).map(([name, tone]) => (
          <Pencil key={`hatch-${name}`} id={`hatch-${name}`} stroke={tone.ink} opacity={0.75} />
        ))}

        {/* Ink shading, two directions so shadows can be cross-hatched. */}
        <Pencil id="ink-hatch" stroke={INK} weight={1} opacity={0.55} size={5.5} />
        <Pencil id="ink-hatch-2" stroke={INK} weight={0.9} opacity={0.45} size={5.5} angle={48} />
        <Pencil id="ink-hatch-light" stroke={INK} weight={0.8} opacity={0.3} size={6.5} />

        {/* Earth in cross-section: long diagonal strokes over warm brown. */}
        <pattern id="soil" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)">
          <rect width="14" height="14" fill={EARTH.soil} />
          <path d="M2 0 Q2.8 7 2 14" stroke={EARTH.soilLine} strokeWidth="1.1" opacity=".55" fill="none" />
          <path d="M6.5 0 Q6 7 6.5 14" stroke={EARTH.soilLine} strokeWidth=".7" opacity=".35" fill="none" />
          <path d="M10.5 0 Q11.1 7 10.5 14" stroke={EARTH.soilLine} strokeWidth="1" opacity=".5" fill="none" />
        </pattern>
        <pattern id="soil-deep" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)">
          <rect width="12" height="12" fill={EARTH.soilDeep} />
          <path d="M2 0 Q2.6 6 2 12" stroke="#5a3b24" strokeWidth="1.1" opacity=".6" fill="none" />
          <path d="M7.5 0 Q7 6 7.5 12" stroke="#5a3b24" strokeWidth=".8" opacity=".45" fill="none" />
        </pattern>

        {/* Wood grain for desks and shelves. */}
        <pattern id="wood" width="60" height="9" patternUnits="userSpaceOnUse">
          <rect width="60" height="9" fill={EARTH.wood} />
          <path d="M0 3 Q15 1.8 30 3.2 T60 3" stroke="#8f6a45" strokeWidth=".9" opacity=".55" fill="none" />
          <path d="M0 7.2 Q20 8.2 38 6.8 T60 7.2" stroke="#8f6a45" strokeWidth=".6" opacity=".4" fill="none" />
        </pattern>

        {/* Chai in a glass: milky brown with a darker pencil. */}
        <Pencil id="chai" tint={EARTH.chai} stroke="#8a5327" weight={1.1} opacity={0.6} />

        {/* Stipple for sand, shadow and dust. */}
        <pattern id="ink-dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2.5" r=".75" fill={INK} opacity=".5" />
          <circle cx="6.5" cy="5" r=".6" fill={INK} opacity=".4" />
          <circle cx="3.5" cy="7.5" r=".5" fill={INK} opacity=".35" />
        </pattern>

        {/* Ruled lines for notebook pages inside a drawing. */}
        <pattern id="ruled" width="40" height="11" patternUnits="userSpaceOnUse">
          <path d="M0 10.5 H40" stroke="#9fb7d3" strokeWidth=".8" opacity=".7" />
        </pattern>
      </defs>
    </svg>
  )
}
