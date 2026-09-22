import { Anim, Floor, Pip, Place, Scene, Sheet, Sparkle, Torch } from '../../ink/index.js'

/**
 * A heap of papers and one good one. Pip sweeps a torch across the pile, the
 * beam settles on a single amber paper, and that paper lifts itself out of the
 * heap with a little wiggle, as if to say "this one".
 */

const css = `
.s-sd0-sweep { animation: s-sd0-sweep 12s ease-in-out infinite; }
.s-sd0-found { animation: s-sd0-found 12s ease-in-out infinite; }
.s-sd0-glint { animation: s-sd0-glint 12s ease-in-out infinite; }
.s-sd0-float-a { animation: s-sd0-float 6s ease-in-out infinite; }
.s-sd0-float-b { animation: s-sd0-float 7.5s ease-in-out infinite reverse; }
.s-sd0-float-c { animation: s-sd0-float 8.5s ease-in-out infinite; }

@keyframes s-sd0-sweep {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(-7deg); }
  32% { transform: rotate(6deg); }
  44%, 72% { transform: rotate(0deg); }
}
@keyframes s-sd0-found {
  0%, 44% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-34px) rotate(-4deg); }
  56% { transform: translateY(-34px) rotate(4deg); }
  62% { transform: translateY(-34px) rotate(-3deg); }
  68% { transform: translateY(-34px) rotate(0deg); }
  78%, 100% { transform: translateY(0) rotate(0deg); }
}
@keyframes s-sd0-glint {
  0%, 44% { opacity: 0.35; transform: scale(0.6); }
  50% { opacity: 1; transform: scale(1.25); }
  56%, 70% { opacity: 1; transform: scale(1); }
  78%, 100% { opacity: 0.35; transform: scale(0.6); }
}
@keyframes s-sd0-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-7px) rotate(8deg); }
}
`

/* [x, y, tilt, tone] for each sheet in the heap, back row first, so the
   papers nearer the front are drawn over the ones behind them. */
const BACK = [
  [520, 248, -14, 'paper'],
  [584, 236, 6, 'paper'],
  [648, 246, -9, 'blue'],
  [706, 258, 15, 'paper'],
]
const MIDDLE = [
  [470, 292, 16, 'paper'],
  [534, 284, -6, 'blue'],
  [660, 290, -15, 'paper'],
  [722, 298, 7, 'pink'],
]
const FRONT = [
  [440, 328, -10, 'paper'],
  [500, 332, 7, 'paper'],
  [560, 326, -5, 'paper'],
  [622, 330, 12, 'green'],
  [684, 326, -8, 'paper'],
  [742, 332, 5, 'paper'],
]

function HeapSheet({ x, y, r, tone, seed }) {
  return (
    <Place x={x} y={y} r={r}>
      <Sheet x={-31} y={-39} w={62} h={78} tone={tone} lines={4} seed={seed} />
    </Place>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={330}
      top={60}
      css={css}
      className="s-sd0"
      label="A paper character shines a torch over a big heap of research papers, and one amber paper lifts out of the pile with a sparkle"
    >
      <Floor y={372} x1={30} x2={770} seed={11} />

      {BACK.map(([x, y, r, tone], i) => (
        <HeapSheet key={`b${i}`} x={x} y={y} r={r} tone={tone} seed={20 + i * 3} />
      ))}
      {MIDDLE.slice(0, 2).map(([x, y, r, tone], i) => (
        <HeapSheet key={`m${i}`} x={x} y={y} r={r} tone={tone} seed={40 + i * 3} />
      ))}

      <Place x={598} y={282}>
        <Anim className="s-sd0-found" origin={[0, 39]}>
          <Place r={9}>
            <Sheet x={-31} y={-39} w={62} h={78} tone="amber" lines={4} seed={52} />
          </Place>
          <Place x={30} y={-34}>
            <Anim className="s-sd0-glint" spin>
              <Sparkle x={0} y={0} s={13} />
            </Anim>
          </Place>
        </Anim>
      </Place>

      {MIDDLE.slice(2).map(([x, y, r, tone], i) => (
        <HeapSheet key={`m2${i}`} x={x} y={y} r={r} tone={tone} seed={60 + i * 3} />
      ))}
      {FRONT.map(([x, y, r, tone], i) => (
        <HeapSheet key={`f${i}`} x={x} y={y} r={r} tone={tone} seed={80 + i * 3} />
      ))}

      <Place x={470} y={150} r={-24} s={0.7}>
        <Anim className="s-sd0-float-a" spin>
          <Sheet x={-31} y={-39} w={62} h={78} lines={4} seed={101} />
        </Anim>
      </Place>
      <Place x={640} y={128} r={18} s={0.65}>
        <Anim className="s-sd0-float-b" spin>
          <Sheet x={-31} y={-39} w={62} h={78} tone="pink" lines={4} seed={103} />
        </Anim>
      </Place>
      <Place x={738} y={190} r={-10} s={0.6}>
        <Anim className="s-sd0-float-c" spin>
          <Sheet x={-31} y={-39} w={62} h={78} lines={4} seed={105} />
        </Anim>
      </Place>

      {/* A narrower beam than the kit's torch, fading out along its length,
          so it lands on one paper and never ends on a hard edge. */}
      <defs>
        <linearGradient id="s-sd0-beam" x1="0" y1="0" x2="560" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fde5b9" stopOpacity="0.8" />
          <stop offset="0.55" stopColor="#fde5b9" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fde5b9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="s-sd0-fade" x1="0" y1="0" x2="560" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <mask id="s-sd0-beam-mask" maskUnits="userSpaceOnUse" x="0" y="-100" width="560" height="200">
          <rect x="0" y="-100" width="560" height="200" fill="url(#s-sd0-fade)" />
        </mask>
      </defs>

      <Place x={150} y={372} s={2.2}>
        <Pip mood="focused" arms="point" glasses look={1.5} seed={7}>
          <Anim className="s-sd0-sweep" origin={[46, -47]}>
            <g transform="translate(66 -47) scale(0.5)">
              <g transform="rotate(3)">
                <path d="M0 -7L560 -95L560 95L0 7Z" fill="url(#s-sd0-beam)" />
                <path d="M0 -7L560 -95L560 95L0 7Z" fill="url(#hatch-amber)" opacity="0.35" mask="url(#s-sd0-beam-mask)" />
              </g>
              <Torch x={0} y={0} angle={3} reach={0} seed={9} />
            </g>
          </Anim>
        </Pip>
      </Place>
    </Scene>
  )
}
