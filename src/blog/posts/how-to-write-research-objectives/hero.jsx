import {
  Anim,
  Cloud,
  Flag,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Mountain,
  Oval,
  Pip,
  Place,
  Scene,
  Sun,
  TONES,
  Type,
  EARTH,
  handLine,
} from '../../ink/index.js'

/**
 * The aim at the top of the hill. A green tea-garden hill rises from left to
 * right under the snowy peaks; four numbered stepping stones lead up it to a
 * flag marked aim. Pip stands on the second stone and hops, pointing up the
 * path, while the flag ripples and a cloud drifts past the peaks.
 */

const css = `
.s-wro0 .pip-body { animation: s-wro0-hop 3.2s ease-in-out infinite; }
.s-wro0 .flag-cloth { animation: s-wro0-wave 2.6s ease-in-out infinite; }
.s-wro0-cloud { animation: s-wro0-drift 18s ease-in-out infinite; }
.s-wro0-stone { animation: s-wro0-glow 6.4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
@keyframes s-wro0-hop {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-7px); }
}
@keyframes s-wro0-wave {
  0%, 100% { transform: skewY(0deg) scaleX(1); }
  50% { transform: skewY(-4deg) scaleX(0.94); }
}
@keyframes s-wro0-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-30px); }
}
@keyframes s-wro0-glow {
  0%, 30%, 100% { transform: translateY(0); }
  15% { transform: translateY(-3px); }
}
`

/** A round tea bush, the kind that lines the slopes. Anchor: bottom centre. */
export function TeaBush({ x, y, w = 56, seed = 1 }) {
  const h = w * 0.42
  let leaves = ''
  for (let i = 0; i < 4; i++) {
    const lx = x - w * 0.3 + i * w * 0.2
    leaves += handLine(lx, y - h * 0.55, lx + 5, y - h * 0.75, seed + i, 0.2)
  }
  return (
    <g>
      <path d={`M${x - w / 2} ${y}Q${x - w / 2} ${y - h * 1.6} ${x} ${y - h * 1.1}Q${x + w / 2} ${y - h * 1.6} ${x + w / 2} ${y}Z`} fill={TONES.green.mid} />
      <path d={`M${x - w / 2} ${y}Q${x - w / 2} ${y - h * 1.6} ${x} ${y - h * 1.1}Q${x + w / 2} ${y - h * 1.6} ${x + w / 2} ${y}Z`} fill="url(#ink-hatch-light)" />
      <Ink d={`M${x - w / 2} ${y}Q${x - w / 2} ${y - h * 1.6} ${x} ${y - h * 1.1}Q${x + w / 2} ${y - h * 1.6} ${x + w / 2} ${y}`} w={1.6} />
      <Ink d={leaves} c={TONES.green.deep} w={1.3} />
    </g>
  )
}

/** A flat stepping stone with a number on its face. Anchor: centre of the top. */
export function Stone({ x, y, n, rx = 36, tone = 'amber', seed = 1 }) {
  return (
    <g>
      <path d={`M${x - rx} ${y}L${x - rx + 4} ${y + 9}Q${x} ${y + 15} ${x + rx - 4} ${y + 9}L${x + rx} ${y}Z`} fill={EARTH.soilDeep} opacity="0.55" />
      <Oval cx={x} cy={y} rx={rx} ry={rx * 0.3} fill={EARTH.pebble} seed={seed} sw={1.7} />
      {n !== undefined ? (
        <Type x={x} y={y + 5} size={16} anchor="middle" weight={700} c={TONES[tone].deep}>
          {n}
        </Type>
      ) : null}
    </g>
  )
}

const HILL = 'M0 400L0 330Q300 300 520 200Q600 160 700 170Q760 176 800 196L800 400Z'
const STONES = [
  [200, 302],
  [331, 270],
  [438, 235],
  [570, 182],
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-wro0"
      label="A paper character climbs four numbered stepping stones up a green hill of tea bushes towards a red flag marked aim, with snowy mountains behind"
    >
      <Sun x={96} y={70} r={22} seed={2} />
      <Mountain x={330} y={250} w={340} h={190} seed={3} />
      <Mountain x={560} y={230} w={250} h={130} seed={4} />
      <Mountain x={150} y={290} w={260} h={120} seed={5} snow={false} />
      <Place x={250} y={84}>
        <Anim className="s-wro0-cloud">
          <Cloud x={0} y={0} s={0.7} seed={6} />
        </Anim>
      </Place>

      <path d={HILL} fill={TONES.green.tint} />
      <path d={HILL} fill="url(#hatch-green)" opacity="0.3" />
      <Ink d="M0 330Q300 300 520 200Q600 160 700 170Q760 176 800 196" w={2} />

      {[
        [60, 372, 60],
        [140, 384, 52],
        [470, 330, 58],
        [560, 300, 54],
        [660, 280, 60],
        [740, 300, 52],
        [620, 360, 56],
        [730, 380, 50],
      ].map(([x, y, w], i) => (
        <TeaBush key={i} x={x} y={y} w={w} seed={10 + i * 3} />
      ))}

      <Ink d="M200 302Q262 290 331 270Q384 254 438 235Q505 210 570 182Q610 168 651 168" c={INK_SOFT} w={1.3} dash="4 7" />
      {STONES.map(([x, y], i) => (
        <Place key={i} x={0} y={0}>
          <Anim className="s-wro0-stone" style={{ '--i': i }}>
            <Stone x={x} y={y} n={i + 1} seed={40 + i} />
          </Anim>
        </Place>
      ))}

      <Flag x={651} y={168} h={96} tone="red" seed={50} />
      <Hand x={708} y={96} size={34} weight={700} c={TONES.red.deep}>
        aim
      </Hand>

      <Hand x={240} y={366} size={26} anchor="middle" weight={700} c={INK}>
        objectives
      </Hand>
      <Hand x={240} y={390} size={17} anchor="middle" c={INK_SOFT}>
        one step at a time
      </Hand>

      <Place x={331} y={266} s={1.5}>
        <Pip mood="happy" arms="point" look={1.6} tone="amber" seed={61} />
      </Place>
    </Scene>
  )
}
