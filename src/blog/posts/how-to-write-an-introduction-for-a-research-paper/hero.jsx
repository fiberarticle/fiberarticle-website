import {
  Anim,
  Cloud,
  Door,
  Hand,
  Ink,
  Mountain,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sun,
  TONES,
  Tuft,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/**
 * The road into the paper. Wide hills on the left are the big picture. A
 * road narrows from there to a door marked methods, past three signposts:
 * why it matters, what is known, the gap. Pip carries a sheet along it and
 * walks out of sight, then comes back round from the left.
 */

const css = `
.s-rpi0-walk { animation: s-rpi0-walk 12s linear infinite; }
@keyframes s-rpi0-walk {
  0% { transform: translateX(0); opacity: 1; }
  40% { transform: translateX(150px); opacity: 1; }
  44% { transform: translateX(165px); opacity: 0; }
  45% { transform: translateX(-200px); opacity: 0; }
  50% { transform: translateX(-180px); opacity: 1; }
  100% { transform: translateX(0); opacity: 1; }
}
.s-rpi0-pip .pip-leg-l { animation: s-rpi0-step 0.9s ease-in-out infinite; }
.s-rpi0-pip .pip-leg-r { animation: s-rpi0-step 0.9s ease-in-out infinite reverse; }
@keyframes s-rpi0-step {
  0%, 100% { transform: rotate(14deg); }
  50% { transform: rotate(-14deg); }
}
.s-rpi0-pip .pip-body { animation: s-rpi0-bob 0.45s ease-in-out infinite; }
@keyframes s-rpi0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
.s-rpi0-sign { animation: s-rpi0-sway 5s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-rpi0-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-2.5deg); }
}
`

/* The two edges of the road, wide on the left and narrow at the door. */
const ROAD = [
  [24, 266],
  [664, 298],
  [664, 314],
  [24, 334],
]

const SIGNS = [
  { x: 150, base: 270, top: 172, w: 150, text: 'why it matters', tone: 'amber', d: '0s', seed: 20 },
  { x: 324, base: 279, top: 182, w: 150, text: 'what is known', tone: 'blue', d: '-1.6s', seed: 30 },
  { x: 524, base: 288, top: 192, w: 110, text: 'the gap', tone: 'red', d: '-3.1s', seed: 40 },
]

function Sign({ x, base, top, w, text, tone, d, seed }) {
  const h = 32
  const board = [
    [x - w / 2, top],
    [x + w / 2, top],
    [x + w / 2, top + h],
    [x - w / 2, top + h],
  ]
  return (
    <g>
      <Ink d={handLine(x, base, x, top + h, seed, 0.3)} w={3} c={TONES.brown.deep} />
      <Anim className="s-rpi0-sign" origin={[x, top]} style={{ '--d': d }}>
        <path d={polyPath(board)} fill={`url(#fill-${tone})`} />
        <Ink d={handPoly(board, { seed: seed + 1, amp: 0.5, closed: true })} w={1.8} />
        <Hand x={x} y={top + 23} size={21} anchor="middle" weight={700}>
          {text}
        </Hand>
      </Anim>
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={284}
      top={56}
      css={css}
      className="s-rpi0"
      label="A road narrows from wide hills on the left to a door marked methods on the right, past signposts reading why it matters, what is known and the gap, while a paper character carrying a sheet walks along it"
    >
      <Sun x={86} y={104} r={22} seed={2} />
      <Cloud x={300} y={98} s={0.9} seed={3} />
      <Mountain x={10} y={268} w={250} h={150} seed={4} />
      <Mountain x={180} y={272} w={190} h={92} seed={5} snow={false} />

      {/* The road, narrowing like a funnel turned on its side. */}
      <path d={polyPath(ROAD)} fill="#ecdcc0" />
      <path d={polyPath(ROAD)} fill="url(#ink-hatch-light)" opacity="0.5" />
      <Ink d={handLine(24, 266, 664, 298, 6, 1)} w={2} />
      <Ink d={handLine(24, 334, 664, 314, 7, 1)} w={2} />
      <Ink d={handLine(40, 300, 650, 306, 8, 0.6)} w={2} c={PAPER} dash="14 12" />
      {[60, 230, 420, 600].map((tx, i) => (
        <Tuft key={tx} x={tx} y={266 + ((tx - 24) / 640) * 32} s={1} seed={10 + i} />
      ))}

      {SIGNS.map((sign) => (
        <Sign key={sign.text} {...sign} />
      ))}

      {/* The door where the introduction ends and the methods begin. */}
      <path d="M640 196h114v28h-114Z" fill={PAPER} />
      <Ink d={handPoly([[640, 196], [754, 196], [754, 224], [640, 224]], { seed: 50, amp: 0.5, closed: true })} w={1.8} />
      <Hand x={697} y={217} size={21} anchor="middle" weight={700}>
        methods
      </Hand>
      <Ink d={handLine(662, 224, 662, 232, 51, 0.2) + handLine(732, 224, 732, 232, 52, 0.2)} w={1.4} />
      <Door x={664} y={316} w={64} h={84} open={0.45} tone="green" seed={53} />

      <Anim className="s-rpi0-walk">
        <Shadow x={430} y={318} rx={30} ry={4.5} />
        <Place x={430} y={316} s={1.3}>
          <g className="s-rpi0-pip">
            <Pip mood="happy" arms="hold" tone="blue" look={1.4} seed={60}>
              <Sheet x={-11} y={-31} w={22} h={26} lines={2} fold={6} seed={61} sw={1.3} />
            </Pip>
          </g>
        </Place>
      </Anim>
    </Scene>
  )
}
