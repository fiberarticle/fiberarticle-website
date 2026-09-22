import {
  Anim,
  Cloud,
  Hand,
  INK,
  Ink,
  Pip,
  Place,
  Scene,
  Sun,
  TONES,
  handLine,
  handPoly,
  wave,
} from '../../ink/index.js'

/**
 * Fishing for the question. Pip stands on a jetty with a rod; below the
 * surface, question marks of every colour drift about, and one golden
 * question mark is hooked and reeled up to the surface, then let back down.
 * The line shortens from the rod tip exactly as far as the catch rises, so
 * the two never come apart.
 */

const TIP = [452, 40]
const HOOK = [468, 262]
const LINE_END = HOOK[1] - 44
const RISE = 56

const css = `
.s-rq0-line { animation: s-rq0-reel 10s ease-in-out infinite; }
.s-rq0-catch { animation: s-rq0-lift 10s ease-in-out infinite; }
.s-rq0-swim { animation: s-rq0-swim var(--t, 7s) ease-in-out infinite; }
.s-rq0-bubble { animation: s-rq0-bubble 4s ease-in infinite; }
.s-rq0-cloud { animation: s-rq0-drift 16s ease-in-out infinite; }
@keyframes s-rq0-reel {
  0%, 18%, 90%, 100% { transform: scaleY(1); }
  36% { transform: scaleY(${((LINE_END - RISE * 0.8 - TIP[1]) / (LINE_END - TIP[1])).toFixed(3)}); }
  44%, 70% { transform: scaleY(${((LINE_END - RISE - TIP[1]) / (LINE_END - TIP[1])).toFixed(3)}); }
}
@keyframes s-rq0-lift {
  0%, 18%, 90%, 100% { transform: translateY(0) rotate(0deg); }
  36% { transform: translateY(-${RISE * 0.8}px) rotate(-3deg); }
  44%, 70% { transform: translateY(-${RISE}px) rotate(2deg); }
  56% { transform: translateY(-${RISE}px) rotate(-2deg); }
}
@keyframes s-rq0-swim {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(var(--dx, 30px)); }
}
@keyframes s-rq0-bubble {
  0% { transform: translateY(0); opacity: 0; }
  15% { opacity: 0.9; }
  80% { opacity: 0.9; }
  100% { transform: translateY(-70px); opacity: 0; }
}
@keyframes s-rq0-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(24px); }
}
`

const SWIMMERS = [
  { x: 92, y: 312, size: 44, tone: 'blue', t: '7s', dx: '26px', d: 0 },
  { x: 236, y: 372, size: 36, tone: 'green', t: '9s', dx: '-30px', d: -2 },
  { x: 610, y: 296, size: 48, tone: 'pink', t: '8s', dx: '-28px', d: -4 },
  { x: 720, y: 368, size: 38, tone: 'blue', t: '10s', dx: '24px', d: -1 },
  { x: 360, y: 318, size: 32, tone: 'red', t: '6.5s', dx: '22px', d: -3 },
]

export default function Hero() {
  const posts = [48, 150, 262]
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-rq0"
      label="A paper character on a jetty fishes with a rod; under the water many question marks swim about, and a golden question mark is hooked and reeled up to the surface"
    >
      <Sun x={704} y={56} r={20} seed={3} />
      <Place x={560} y={70}>
        <Anim className="s-rq0-cloud">
          <Cloud x={0} y={0} s={0.72} seed={4} />
        </Anim>
      </Place>

      <rect x={0} y={214} width={800} height={186} fill={TONES.blue.tint} />
      <rect x={0} y={214} width={800} height={186} fill="url(#hatch-blue)" opacity="0.28" />
      <Ink d={wave(0, 800, 214, { amp: 3, length: 42, seed: 5 })} c={TONES.blue.deep} w={1.8} />

      {SWIMMERS.map((fish) => (
        <Anim
          key={fish.x}
          className="s-rq0-swim"
          style={{ '--t': fish.t, '--dx': fish.dx, animationDelay: `${fish.d}s` }}
        >
          <Hand x={fish.x} y={fish.y} size={fish.size} anchor="middle" weight={700} c={TONES[fish.tone].deep}>
            ?
          </Hand>
        </Anim>
      ))}
      {[
        [170, 360, 0],
        [520, 380, -1.4],
        [660, 350, -2.6],
      ].map(([x, y, d]) => (
        <Anim key={x} className="s-rq0-bubble" style={{ animationDelay: `${d}s` }}>
          <circle cx={x} cy={y} r={4} fill="#ffffff" stroke={TONES.blue.deep} strokeWidth={1.1} vectorEffect="non-scaling-stroke" />
        </Anim>
      ))}

      {posts.map((x, i) => (
        <g key={x}>
          <rect x={x - 6} y={164} width={12} height={236} fill="url(#wood)" />
          <Ink d={handPoly([[x - 6, 164], [x + 6, 164], [x + 6, 400], [x - 6, 400]], { seed: 10 + i, amp: 0.4 })} w={1.5} />
        </g>
      ))}
      <rect x={20} y={150} width={284} height={14} fill="url(#wood)" />
      <Ink d={handPoly([[20, 150], [304, 150], [304, 164], [20, 164]], { seed: 14, amp: 0.5, closed: true })} w={1.8} />
      <Ink d={[72, 124, 176, 228, 280].map((x, i) => handLine(x, 151, x, 163, 15 + i, 0.2)).join('')} w={1} c={TONES.brown.deep} />

      <Anim className="s-rq0-line" origin={TIP}>
        <Ink d={`M${TIP[0]} ${TIP[1]}Q${TIP[0] + 12} ${(TIP[1] + HOOK[1]) / 2} ${HOOK[0]} ${LINE_END}`} w={1.2} c={INK} />
      </Anim>
      <Anim className="s-rq0-catch" origin={[HOOK[0], HOOK[1] - 20]}>
        <Ink d={`M${HOOK[0]} ${HOOK[1] - 60}V${HOOK[1] - 44}q0 7 -6 7`} w={1.6} c={TONES.grey.deep} />
        <Hand
          x={HOOK[0]}
          y={HOOK[1]}
          size={70}
          anchor="middle"
          weight={700}
          c={TONES.amber.ink}
          style={{ stroke: INK, strokeWidth: 1.3, paintOrder: 'stroke' }}
        >
          ?
        </Hand>
      </Anim>

      <Place x={184} y={150} s={1.9}>
        <Pip mood="focused" arms="hold" look={1.8} seed={21} />
      </Place>
      <Ink d={handLine(159, 108, TIP[0], TIP[1], 20, 0.3)} w={3.2} c={TONES.brown.deep} />
      <circle cx={180} cy={110} r={6} fill={TONES.grey.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
    </Scene>
  )
}
