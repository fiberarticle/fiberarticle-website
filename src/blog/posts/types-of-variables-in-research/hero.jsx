import {
  Anim,
  Arrow,
  Box,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * A blood pressure dial. Anchor: centre. The needle carries `needle` (a
 * class name) and pivots on the centre, so a scene can make it settle.
 * Shared with the scenes.
 */
export function Gauge({ x, y, r = 60, needle, reading = '138', seed = 1 }) {
  const ticks = [-70, -35, 0, 35, 70]
  return (
    <g>
      <Oval cx={x} cy={y} rx={r} fill={PAPER} seed={seed} sw={2.2} />
      <Oval cx={x} cy={y} rx={r - 8} fill="none" seed={seed + 1} sw={1} />
      <path
        d={`M${x - (r - 14)} ${y}A${r - 14} ${r - 14} 0 0 1 ${x + (r - 14)} ${y}`}
        fill="none"
        stroke={TONES.red.tint}
        strokeWidth={r * 0.14}
      />
      {ticks.map((a, i) => {
        const rad = ((a - 90) * Math.PI) / 180
        return (
          <Ink
            key={i}
            d={handLine(x + Math.cos(rad) * (r - 20), y + Math.sin(rad) * (r - 20), x + Math.cos(rad) * (r - 9), y + Math.sin(rad) * (r - 9), seed + 2 + i, 0.2)}
            w={1.6}
          />
        )
      })}
      <Anim className={needle} origin={[x, y]}>
        <Ink d={handLine(x, y, x + r * 0.42, y - r * 0.62, seed + 9, 0.2)} c={TONES.red.ink} w={3} />
      </Anim>
      <Oval cx={x} cy={y} rx={r * 0.09} fill={INK} stroke={null} />
      <Type x={x} y={y + r * 0.45} size={Math.round(r * 0.26)} anchor="middle" weight={700}>
        {reading}
      </Type>
      <Type x={x} y={y + r * 0.68} size={Math.round(r * 0.17)} anchor="middle" c={INK_SOFT}>
        mmHg
      </Type>
    </g>
  )
}

/** A rolled-out yoga mat seen from the side, in a soft green. Anchor: left end. */
export function Mat({ x, y, w = 90, seed = 1 }) {
  return (
    <g>
      <Box x={x} y={y - 8} w={w} h={8} r={3} fill="url(#fill-green)" seed={seed} sw={1.5} />
      <Oval cx={x + w} cy={y - 9} rx={8} ry={9} fill={TONES.green.mid} seed={seed + 1} sw={1.5} />
      <Oval cx={x + w} cy={y - 9} rx={3} ry={3.5} fill="none" seed={seed + 2} sw={1.1} />
    </g>
  )
}

/**
 * Devansh's study as a chart of variables: yoga, the independent variable,
 * points at a blood pressure dial, the dependent variable, through stress on
 * the path between them, while a dashed salt box below pushes on both: the
 * confound. A paper character points at it all.
 */

const FLOOR = 372

const css = `
.s-tvr0-pip .pip-body { animation: s-tvr0-bob 3.2s ease-in-out infinite; }
@keyframes s-tvr0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.s-tvr0-needle { animation: s-tvr0-settle 4.4s ease-in-out infinite; }
@keyframes s-tvr0-settle {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-26deg); }
  55% { transform: rotate(-8deg); }
}
.s-tvr0-salt { animation: s-tvr0-sneak 4.4s ease-in-out infinite; }
@keyframes s-tvr0-sneak {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
.s-tvr0-path { animation: s-tvr0-glow 3s ease-in-out infinite; }
@keyframes s-tvr0-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-tvr0"
      label="A paper character in glasses points at a hand-drawn chart where a box labelled yoga, the independent variable, has an arrow to a blood pressure gauge, the dependent variable, with a stress box on the path between them and a dashed salt box below marked confound"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      {/* the independent variable */}
      <Hand x={115} y={128} size={20} anchor="middle" c={INK_SOFT}>
        independent
      </Hand>
      <Box x={40} y={142} w={150} h={96} r={12} fill={TONES.amber.tint} seed={2} sw={2} />
      <Hand x={115} y={190} size={32} anchor="middle" weight={700}>
        yoga
      </Hand>
      <Mat x={66} y={222} w={88} seed={3} />

      {/* the mediator, on the path */}
      <Hand x={360} y={44} size={20} anchor="middle" c={INK_SOFT}>
        mediator
      </Hand>
      <Box x={290} y={56} w={140} h={56} r={10} fill={TONES.pink.tint} seed={4} sw={2} />
      <Hand x={360} y={94} size={28} anchor="middle" weight={700}>
        stress
      </Hand>
      <g className="s-tvr0-path">
        <Arrow from={[178, 138]} to={[284, 92]} bend={-0.12} seed={5} w={2.2} />
        <Arrow from={[436, 90]} to={[528, 140]} bend={-0.12} seed={6} w={2.2} />
      </g>

      {/* the direct arrow and the dependent variable */}
      <Arrow from={[198, 196]} to={[486, 200]} bend={0.04} seed={7} w={2.6} />
      <Hand x={562} y={112} size={20} anchor="middle" c={INK_SOFT}>
        dependent
      </Hand>
      <Gauge x={562} y={200} r={62} needle="s-tvr0-needle" reading="138" seed={8} />
      <Hand x={562} y={290} size={22} anchor="middle" weight={700}>
        blood pressure
      </Hand>

      {/* the confound, sneaking in underneath */}
      <Place x={0} y={0}>
        <Anim className="s-tvr0-salt">
          <Box x={290} y={286} w={130} h={52} r={10} fill={TONES.grey.tint} seed={9} sw={1.8} />
          <Hand x={355} y={320} size={24} anchor="middle" weight={700}>
            salt
          </Hand>
          <Arrow from={[286, 300]} to={[160, 248]} bend={-0.15} seed={10} w={1.8} dash="6 6" c={TONES.red.ink} />
          <Arrow from={[424, 300]} to={[516, 252]} bend={0.15} seed={11} w={1.8} dash="6 6" c={TONES.red.ink} />
        </Anim>
      </Place>
      <Hand x={355} y={362} size={20} anchor="middle" c={TONES.red.deep}>
        confound?
      </Hand>

      <Plant x={38} y={FLOOR} s={0.75} seed={12} />

      <Shadow x={740} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={740} y={FLOOR} s={1.7} flip>
        <g className="s-tvr0-pip">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.6} seed={13} />
        </g>
      </Place>
    </Scene>
  )
}
