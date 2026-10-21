import {
  Anim,
  Arrow,
  Blob,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  Oval,
  PAPER,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  TONES,
  Tuft,
  rng,
} from '../../ink/index.js'

/**
 * A sample that carries the same mix as the whole. On the left a wide field
 * of little people in three colours, the population. Mohit stands between
 * it and a small round sample, magnifying glass in hand, and the few people
 * in the sample are coloured in the same proportions as the field.
 */

const FLOOR = 372

const css = `
.s-smp0-pip .pip-body { animation: s-smp0-bob 3s ease-in-out infinite; }
@keyframes s-smp0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.s-smp0-lens { animation: s-smp0-scan 6s ease-in-out infinite; }
@keyframes s-smp0-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-14px, 10px); }
}
.s-smp0-pick { animation: s-smp0-hop 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-smp0-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-8px); }
}
.s-smp0-arrow { animation: s-smp0-nudge 3s ease-in-out infinite; }
@keyframes s-smp0-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
`

function Folk({ x, y, s = 1, tone = 'amber', seed = 1 }) {
  const body = `M${x - 9 * s} ${y}Q${x - 9.5 * s} ${y - 14 * s} ${x} ${y - 15 * s}Q${x + 9.5 * s} ${y - 14 * s} ${x + 9 * s} ${y}Z`
  return (
    <g>
      <path d={body} fill={`url(#fill-${tone})`} />
      <Ink d={body} w={1.4} />
      <Oval cx={x} cy={y - 21 * s} rx={6 * s} fill={PAPER} seed={seed} sw={1.4} />
    </g>
  )
}

/* Half amber, a third green, a sixth blue, in the field and in the sample. */
const MIX = ['amber', 'green', 'amber', 'blue', 'green', 'amber']

function field() {
  const r = rng(17)
  const out = []
  let tries = 0
  while (out.length < 30 && tries < 3000) {
    tries += 1
    const x = 50 + r() * 260
    const y = 120 + r() * 200
    const inside = ((x - 180) / 150) ** 2 + ((y - 220) / 118) ** 2 < 1
    if (inside && out.every((p) => Math.hypot(p.x - x, (p.y - y) * 1.3) > 33)) {
      out.push({ x: Math.round(x), y: Math.round(y), tone: MIX[out.length % MIX.length] })
    }
  }
  return out.sort((a, b) => a.y - b.y)
}

const FIELD = field()

const SAMPLE = [
  { x: 610, y: 214, tone: 'amber' },
  { x: 652, y: 214, tone: 'green' },
  { x: 694, y: 214, tone: 'amber' },
  { x: 610, y: 262, tone: 'blue' },
  { x: 652, y: 262, tone: 'green' },
  { x: 694, y: 262, tone: 'amber' },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-smp0"
      label="A paper character in glasses holds a magnifying glass between a wide field of little people in three colours, labelled population, and a small round sample of six people that holds the same mix of colours"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <Hand x={180} y={74} size={32} anchor="middle" weight={700}>
        population
      </Hand>
      <Blob
        points={[[34, 210], [70, 120], [180, 96], [300, 116], [336, 214], [304, 314], [180, 342], [64, 316]]}
        fill={TONES.green.tint}
        seed={2}
      />
      {FIELD.map((p, i) => (
        <Folk key={i} x={p.x} y={p.y + 18} s={1} tone={p.tone} seed={10 + i} />
      ))}
      <Tuft x={30} y={FLOOR} seed={3} />
      <Tuft x={340} y={FLOOR} seed={4} />

      <Place x={0} y={0}>
        <Anim className="s-smp0-arrow">
          <Arrow from={[452, 236]} to={[548, 236]} bend={-0.12} seed={5} w={2.4} head={13} />
        </Anim>
      </Place>

      <Hand x={652} y={118} size={32} anchor="middle" weight={700}>
        sample
      </Hand>
      <Hand x={652} y={146} size={20} anchor="middle" c={INK_SOFT}>
        same mix, fewer people
      </Hand>
      <Oval cx={652} cy={232} rx={88} ry={74} fill={TONES.amber.tint} seed={6} sw={2.2} />
      {SAMPLE.map((p, i) => (
        <g key={i} className="s-smp0-pick" style={{ '--i': i }}>
          <Folk x={p.x} y={p.y + 18} s={1.05} tone={p.tone} seed={60 + i} />
        </g>
      ))}

      <Plant x={762} y={FLOOR} s={0.85} seed={7} />

      <Shadow x={400} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={400} y={FLOOR} s={1.75}>
        <g className="s-smp0-pip">
          <Pip mood="focused" arms="hold" tone="amber" glasses look={1.2} seed={8} />
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-smp0-lens">
          <Magnifier x={432} y={210} r={22} angle={40} tone="amber" seed={9} />
        </Anim>
      </Place>
    </Scene>
  )
}
