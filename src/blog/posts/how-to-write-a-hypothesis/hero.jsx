import {
  Anim,
  Arrow,
  Box,
  Clock,
  Floor,
  Hand,
  Ink,
  Moon,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Sheet,
  StampMark,
  TEXT_LINE,
  TONES,
  Thought,
  Window,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * A hunch made testable. At night, by the hostel window, Rohini points at a
 * tall sheet headed my hypothesis: more phone at night, an arrow, poorer
 * sleep, and a green stamp that says testable. Her guide, in glasses, asks
 * the one question that matters: what would prove it wrong?
 */

const FLOOR = 372

const css = `
.s-hyp0-strip { animation: s-hyp0-in 10s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 10s); }
.s-hyp0-arrow { animation: s-hyp0-pulse 10s ease-in-out infinite; }
.s-hyp0-stamp { animation: s-hyp0-press 10s ease-in-out infinite; }
.s-hyp0-rohini .pip-body { animation: s-hyp0-bob 3s ease-in-out infinite; }
.s-hyp0-rohini .pip-arm-r { animation: s-hyp0-point 2.4s ease-in-out infinite alternate; }
.s-hyp0-glow { animation: s-hyp0-flicker 2.2s ease-in-out infinite; }
.s-hyp0-cloud { animation: s-hyp0-float 5s ease-in-out infinite; }
@keyframes s-hyp0-in {
  0%, 4% { transform: translateX(-24px); opacity: 0; }
  12%, 84% { transform: translateX(0); opacity: 1; }
  92%, 100% { transform: translateX(0); opacity: 0; }
}
@keyframes s-hyp0-pulse {
  0%, 18% { opacity: 0; }
  26%, 84% { opacity: 1; }
  92%, 100% { opacity: 0; }
}
@keyframes s-hyp0-press {
  0%, 40% { transform: scale(1.25); opacity: 0; }
  48%, 84% { transform: scale(1); opacity: 1; }
  92%, 100% { transform: scale(1); opacity: 0; }
}
@keyframes s-hyp0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-hyp0-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
@keyframes s-hyp0-flicker {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 0.45; }
}
@keyframes s-hyp0-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

const STRIPS = [
  { word: 'more phone at night', tone: 'blue', top: 112 },
  { word: 'poorer sleep', tone: 'pink', top: 222 },
]

export default function Hero() {
  const sx = 236
  const sw = 300
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-hyp0"
      label="At night by a hostel window, a paper character holding a glowing phone points at a tall sheet titled my hypothesis, where more phone at night leads by an arrow to poorer sleep, stamped testable, while her guide in glasses thinks what would prove it wrong"
    >
      <Window x={40} y={52} w={120} h={96} night seed={11} />
      <Moon x={78} y={84} r={14} seed={12} />
      <Clock x={100} y={214} r={26} seed={13} />
      <Floor y={FLOOR} x1={20} x2={780} seed={14} />

      <Sheet x={sx} y={34} w={sw} h={330} lines={0} fold={26} seed={15} sw={2} />
      <Hand x={sx + sw / 2 - 10} y={80} size={30} anchor="middle" weight={700}>
        my hypothesis
      </Hand>
      <Ink d={handLine(sx + 54, 92, sx + sw - 74, 92, 16, 0.6)} c={TONES.red.ink} w={2} />

      {STRIPS.map((strip, i) => {
        const t = TONES[strip.tone]
        const top = strip.top
        return (
          <g key={strip.word} className="s-hyp0-strip" style={{ '--i': i * 2 }}>
            <path d={`M${sx + 22} ${top}h${sw - 44}v48h${-(sw - 44)}Z`} fill={t.tint} />
            <path d={`M${sx + 22} ${top}h10v48h-10Z`} fill={t.mid} />
            <Ink d={handPoly([[sx + 22, top], [sx + sw - 22, top], [sx + sw - 22, top + 48], [sx + 22, top + 48]], { seed: 20 + i * 3, amp: 0.4, closed: true })} w={1.4} c={t.deep} />
            <Hand x={sx + sw / 2 + 4} y={top + 32} size={24} anchor="middle" weight={700}>
              {strip.word}
            </Hand>
          </g>
        )
      })}

      <g className="s-hyp0-arrow">
        <Arrow from={[sx + sw / 2, 166]} to={[sx + sw / 2, 214]} bend={0.08} seed={30} w={2.2} head={12} />
      </g>

      <Place x={0} y={0}>
        <Anim className="s-hyp0-stamp" origin={[sx + sw / 2, 314]}>
          <StampMark x={sx + sw / 2} y={314} w={170} h={46} text="TESTABLE" tone="green" rotate={-6} size={22} seed={32} />
        </Anim>
      </Place>
      <Ink d={handLine(sx + 30, 346, sx + 150, 346, 34, 0.35)} c={TEXT_LINE} w={1.6} />

      <Place x={0} y={0}>
        <Anim className="s-hyp0-cloud">
          <Thought x={664} y={96} w={200} h={80} tx={656} ty={204} seed={36}>
            <Hand x={664} y={92} size={21} anchor="middle" weight={700}>
              what would
            </Hand>
            <Hand x={664} y={116} size={21} anchor="middle" weight={700}>
              prove it wrong?
            </Hand>
          </Thought>
        </Anim>
      </Place>

      <Plant x={764} y={FLOOR} s={0.8} seed={42} />

      <Shadow x={650} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={650} y={FLOOR} s={1.7}>
        <Pip mood="focused" arms="think" tone="blue" glasses look={-1.6} seed={44} />
      </Place>

      <Shadow x={170} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={170} y={FLOOR} s={1.75}>
        <g className="s-hyp0-rohini">
          <Pip mood="happy" arms="point" tone="pink" look={1.6} seed={50}>
            <Box x={-37} y={-36} w={11} h={18} r={2} fill={TONES.grey.deep} seed={51} sw={1.3} />
            <rect className="s-hyp0-glow" x={-35.5} y={-34} width={8} height={13} rx={1} fill={TONES.blue.mid} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
