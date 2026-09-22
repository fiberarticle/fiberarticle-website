import {
  Anim,
  Cloud,
  Floor,
  Hand,
  INK,
  Ink,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Spine,
  TONES,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/**
 * Four doors, one for each big family of citation styles. Pip stands in
 * front with a paper while the doors open one after another, and behind
 * every door waits the same small shelf of books: the sources do not change,
 * only the way you point to them.
 */

const FLOOR = 372
const W = 108
const H = 236
const TOP = FLOOR - H

const DOORS = [
  { x: 214, label: 'APA', tone: 'amber' },
  { x: 358, label: 'MLA', tone: 'pink' },
  { x: 502, label: 'IEEE', tone: 'blue' },
  { x: 646, label: 'Chicago', tone: 'green' },
]

/* Each door gets its own quarter of the twelve second loop. */
const doorCss = DOORS.map((_, i) => {
  const s = 3 + i * 24
  return `
.s-cs0-door-${i} { animation: s-cs0-door-${i} 12s ease-in-out infinite; }
.s-cs0-spark-${i} { animation: s-cs0-spark-${i} 12s ease-in-out infinite; }
@keyframes s-cs0-door-${i} {
  0%, ${s}% { transform: scaleX(1); }
  ${s + 5}%, ${s + 15}% { transform: scaleX(0.3); }
  ${s + 20}%, 100% { transform: scaleX(1); }
}
@keyframes s-cs0-spark-${i} {
  0%, ${s}% { opacity: 0; transform: scale(0.3); }
  ${s + 6}% { opacity: 1; transform: scale(1.15); }
  ${s + 14}% { opacity: 1; transform: scale(1); }
  ${s + 20}%, 100% { opacity: 0; transform: scale(0.3); }
}`
}).join('\n')

const css = `
${doorCss}
.s-cs0-pip { animation: s-cs0-hop 12s ease-in-out infinite; }
.s-cs0-cloud { animation: s-cs0-drift 16s ease-in-out infinite; }
@keyframes s-cs0-hop {
  0%, 4%, 12%, 28%, 36%, 52%, 60%, 76%, 84%, 100% { transform: translateY(0); }
  8%, 32%, 56%, 80% { transform: translateY(-6px); }
}
@keyframes s-cs0-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(24px); }
}
`

function StyleDoor({ x, label, tone, index }) {
  const t = TONES[tone]
  const leaf = [
    [x, TOP],
    [x + W, TOP],
    [x + W, FLOOR],
    [x, FLOOR],
  ]
  const seed = 40 + index * 17

  return (
    <g>
      {/* The room behind the door: warm light and the same few books. */}
      <rect x={x} y={TOP} width={W} height={H} fill="#3b312b" />
      <rect x={x} y={TOP} width={W} height={H} fill={TONES.amber.tint} opacity="0.42" />
      <circle cx={x + W * 0.66} cy={TOP + 44} r={22} fill={TONES.amber.mid} opacity="0.45" />
      <Spine x={x + 60} y={FLOOR} w={14} h={58} tone="red" seed={seed + 1} />
      <Spine x={x + 75} y={FLOOR} w={12} h={50} tone="blue" seed={seed + 2} />
      <Spine x={x + 88} y={FLOOR} w={14} h={62} tone="green" seed={seed + 3} />

      {/* The door itself swings on its left hinge. The first one stands ajar
          in the still picture. */}
      <Anim
        className={`s-cs0-door-${index}`}
        origin={[x, TOP + H / 2]}
        style={index === 0 ? { transform: 'scaleX(0.5)' } : undefined}
      >
        <path d={polyPath(leaf)} fill={`url(#fill-${tone})`} />
        <Ink
          d={handPoly(
            [
              [x + 14, TOP + 16],
              [x + W - 14, TOP + 16],
              [x + W - 14, TOP + H * 0.44],
              [x + 14, TOP + H * 0.44],
            ],
            { seed: seed + 4, amp: 0.4, closed: true },
          )}
          w={1.3}
          c={t.deep}
        />
        <Ink
          d={handPoly(
            [
              [x + 14, TOP + H * 0.52],
              [x + W - 14, TOP + H * 0.52],
              [x + W - 14, FLOOR - 16],
              [x + 14, FLOOR - 16],
            ],
            { seed: seed + 5, amp: 0.4, closed: true },
          )}
          w={1.3}
          c={t.deep}
        />
        <circle cx={x + W - 15} cy={TOP + H * 0.48} r={4.5} fill={TONES.amber.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
        <Ink d={handPoly(leaf, { seed: seed + 6, amp: 0.5, closed: true })} w={1.8} />
      </Anim>

      <Ink d={handPoly(leaf, { seed: seed + 7, amp: 0.6, closed: true })} w={2.4} />
      <Hand x={x + W / 2} y={TOP - 18} size={30} anchor="middle" weight={700} c={t.deep}>
        {label}
      </Hand>

      <Place x={x + W + 18} y={TOP + 12}>
        <Anim className={`s-cs0-spark-${index}`} spin style={{ opacity: index === 0 ? 1 : 0 }}>
          <Sparkle x={0} y={0} s={11} fill={t.mid} />
        </Anim>
      </Place>
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={364}
      top={28}
      css={css}
      className="s-cs0"
      label="A paper character holding a sheet stands before four doors labelled APA, MLA, IEEE and Chicago. The doors open one by one, and behind each one waits the same small shelf of books."
    >
      <Place x={122} y={70}>
        <Anim className="s-cs0-cloud">
          <Cloud x={0} y={0} s={0.74} seed={7} />
        </Anim>
      </Place>

      <Floor y={FLOOR} x1={24} x2={776} seed={9} />

      {DOORS.map((door, i) => (
        <StyleDoor key={door.label} {...door} index={i} />
      ))}

      <Shadow x={104} y={FLOOR + 2} rx={58} ry={6} />
      <Place x={104} y={FLOOR} s={2.5}>
        <g className="s-cs0-pip">
          <Pip mood="happy" arms="hold" look={1.8} seed={17}>
            <Sheet x={-13} y={-40} w={26} h={30} lines={2} fold={6} seed={18} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
