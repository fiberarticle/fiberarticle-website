import {
  Anim,
  Floor,
  Hand,
  Ink,
  Magnifier,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Sheet,
  TEXT_LINE,
  TONES,
  Thought,
  Window,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * A methods section someone else can follow. Abhishek points at a tall
 * sheet headed methods, filled strip by strip: who and where, what we did,
 * how we analysed, why this way. On the other side a second researcher
 * follows it line by line with a magnifying glass, thinking she could
 * repeat it.
 */

const FLOOR = 372

const css = `
.s-pz0-strip { animation: s-pz0-in 10s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 10s); }
.s-pz0-abhi .pip-body { animation: s-pz0-bob 3s ease-in-out infinite; }
.s-pz0-abhi .pip-arm-r { animation: s-pz0-point 2.4s ease-in-out infinite alternate; }
.s-pz0-lens { animation: s-pz0-scan 10s ease-in-out infinite; }
.s-pz0-cloud { animation: s-pz0-float 5s ease-in-out infinite; }
@keyframes s-pz0-in {
  0%, 4% { transform: translateX(-24px); opacity: 0; }
  12%, 80% { transform: translateX(0); opacity: 1; }
  88%, 100% { transform: translateX(0); opacity: 0; }
}
@keyframes s-pz0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-pz0-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
@keyframes s-pz0-scan {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(0, 56px); }
  50% { transform: translate(0, 112px); }
  75% { transform: translate(0, 168px); }
}
@keyframes s-pz0-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

const STRIPS = [
  { word: 'who and where', tone: 'amber' },
  { word: 'what we did', tone: 'green' },
  { word: 'how we analysed', tone: 'blue' },
  { word: 'why this way', tone: 'pink' },
]

export default function Hero() {
  const sx = 240
  const sw = 290
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-pz0"
      label="A paper character points at a tall sheet headed methods, filled with strips that read who and where, what we did, how we analysed and why this way, while a second researcher in glasses follows it with a magnifying glass and thinks I could repeat this"
    >
      <Window x={40} y={52} w={120} h={96} seed={11} />
      <Floor y={FLOOR} x1={20} x2={780} seed={12} />

      <Sheet x={sx} y={34} w={sw} h={330} lines={0} fold={26} seed={13} sw={2} />
      <Hand x={sx + sw / 2 - 8} y={80} size={30} anchor="middle" weight={700}>
        methods
      </Hand>
      <Ink d={handLine(sx + 80, 92, sx + sw - 96, 92, 14, 0.6)} c={TONES.red.ink} w={2} />

      {STRIPS.map((strip, i) => {
        const top = 110 + i * 56
        const t = TONES[strip.tone]
        return (
          <g key={strip.word} className="s-pz0-strip" style={{ '--i': i }}>
            <path d={`M${sx + 20} ${top}h${sw - 40}v44h${-(sw - 40)}Z`} fill={t.tint} />
            <path d={`M${sx + 20} ${top}h10v44h-10Z`} fill={t.mid} />
            <Ink d={handPoly([[sx + 20, top], [sx + sw - 20, top], [sx + sw - 20, top + 44], [sx + 20, top + 44]], { seed: 20 + i * 3, amp: 0.4, closed: true })} w={1.4} c={t.deep} />
            <Hand x={sx + 44} y={top + 30} size={24} weight={700}>
              {`${i + 1}. ${strip.word}`}
            </Hand>
          </g>
        )
      })}

      <Ink d={handLine(sx + 24, 344, sx + 220, 344, 30, 0.35)} c={TEXT_LINE} w={1.6} />

      <Place x={0} y={0}>
        <Anim className="s-pz0-lens">
          <Magnifier x={540} y={132} r={22} angle={40} tone="amber" seed={35} />
        </Anim>
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-pz0-cloud">
          <Thought x={668} y={90} w={190} h={78} tx={662} ty={196} seed={36}>
            <Hand x={668} y={86} size={21} anchor="middle" weight={700}>
              I could
            </Hand>
            <Hand x={668} y={110} size={21} anchor="middle" weight={700}>
              repeat this
            </Hand>
          </Thought>
        </Anim>
      </Place>

      <Plant x={764} y={FLOOR} s={0.8} seed={42} />

      <Shadow x={650} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={650} y={FLOOR} s={1.7}>
        <g>
          <Pip mood="focused" arms="hold" tone="blue" glasses look={-1.6} seed={44}>
            <Sheet x={-13} y={-31} w={26} h={28} lines={3} fold={7} seed={45} sw={1.3} />
          </Pip>
        </g>
      </Place>

      <Shadow x={160} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={160} y={FLOOR} s={1.75}>
        <g className="s-pz0-abhi">
          <Pip mood="happy" arms="point" tone="amber" look={1.6} seed={50} />
        </g>
      </Place>
    </Scene>
  )
}
