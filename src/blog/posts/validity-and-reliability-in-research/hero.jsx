import {
  Anim,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  TONES,
  Target,
  Tick,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * A dart stuck in a board. Anchor: the point. The shaft leans up and to the
 * right, with two coloured flights at its tail. Shared with the scenes.
 */
export function Dart({ x, y, tone = 'blue', s = 1, seed = 1 }) {
  const tx = x + 22 * s
  const ty = y - 20 * s
  const flight = [
    [tx - 4 * s, ty + 4 * s],
    [tx + 6 * s, ty - 10 * s],
    [tx + 12 * s, ty - 2 * s],
  ]
  return (
    <g>
      <Ink d={handLine(x, y, tx, ty, seed, 0.2)} w={2.4} c={INK} />
      <path d={`M${flight[0][0]} ${flight[0][1]}L${flight[1][0]} ${flight[1][1]}L${flight[2][0]} ${flight[2][1]}Z`} fill={TONES[tone].mid} />
      <Ink d={handPoly(flight, { seed: seed + 3, amp: 0.3, closed: true })} w={1.3} />
      <Oval cx={x} cy={y} rx={2.4 * s} fill={INK} stroke={null} />
    </g>
  )
}

/**
 * Two targets and Leena between them. On the left the darts land in a tight
 * group away from the centre: reliable, not valid. On the right they land
 * together on the centre: valid and reliable. She points to the right-hand
 * board.
 */

const FLOOR = 372

const css = `
.s-var0-pip .pip-body { animation: s-var0-bob 3.2s ease-in-out infinite; }
@keyframes s-var0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.s-var0-dart { animation: s-var0-thud 4.8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s); }
@keyframes s-var0-thud {
  0%, 60%, 100% { transform: translate(0, 0); }
  66% { transform: translate(5px, -5px); }
  72% { transform: translate(0, 0); }
}
.s-var0-tick { animation: s-var0-pulse 4.8s ease-in-out infinite; }
@keyframes s-var0-pulse {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.35; }
}
`

/* Darts on the left board: tight, but up and to the left of the centre. */
const OFF = [
  [132, 178],
  [150, 168],
  [146, 190],
  [124, 194],
]

/* Darts on the right board: tight, on the centre. */
const ON = [
  [652, 222],
  [668, 214],
  [664, 232],
  [644, 230],
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-var0"
      label="A paper character in glasses stands between two targets and points to the right one: on the left the darts land in a tight group away from the centre, labelled reliable, and on the right they land together on the centre, labelled valid and reliable"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <Hand x={170} y={76} size={30} anchor="middle" weight={700}>
        reliable
      </Hand>
      <Hand x={170} y={104} size={19} anchor="middle" c={INK_SOFT}>
        same spot, wrong spot
      </Hand>
      <Target x={170} y={224} r={88} seed={2} />
      {OFF.map(([x, y], i) => (
        <Place key={i} x={0} y={0}>
          <Anim className="s-var0-dart" style={{ '--i': i }}>
            <Dart x={x} y={y} tone="blue" s={1.5} seed={10 + i} />
          </Anim>
        </Place>
      ))}

      <Hand x={656} y={76} size={30} anchor="middle" weight={700}>
        valid and reliable
      </Hand>
      <Hand x={656} y={104} size={19} anchor="middle" c={INK_SOFT}>
        same spot, right spot
      </Hand>
      <Target x={656} y={224} r={88} seed={3} />
      {ON.map(([x, y], i) => (
        <Place key={i} x={0} y={0}>
          <Anim className="s-var0-dart" style={{ '--i': i + 4 }}>
            <Dart x={x} y={y} tone="green" s={1.5} seed={20 + i} />
          </Anim>
        </Place>
      ))}
      <g className="s-var0-tick">
        <Tick x={760} y={150} s={1.6} />
      </g>

      <Plant x={40} y={FLOOR} s={0.8} seed={4} />

      <Shadow x={408} y={FLOOR + 3} rx={44} ry={5} />
      <Place x={408} y={FLOOR} s={1.8}>
        <g className="s-var0-pip">
          <Pip mood="happy" arms="point" tone="amber" glasses look={1.6} seed={5} />
        </g>
      </Place>
    </Scene>
  )
}
