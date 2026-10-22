import {
  Arrow,
  Box,
  Floor,
  Hand,
  INK_SOFT,
  OpenBook,
  PAPER,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  StampMark,
  TONES,
} from '../../ink/index.js'

/**
 * The staircase. Six steps climb from a tall pile marked dissertation to an
 * open journal stamped published. Revathi stands on the second step with
 * her manuscript held over her head, and a dashed arrow shows the rest of
 * the climb. The sparkles round the journal twinkle one after another.
 */

const FLOOR = 376
const STEP_W = 84
const RISE = 27
const X0 = 136

const STEPS = [
  { word: 'journal', tone: 'amber' },
  { word: 'rules', tone: 'blue' },
  { word: 'files', tone: 'green' },
  { word: 'submit', tone: 'pink' },
  { word: 'review', tone: 'amber' },
  { word: 'proofs', tone: 'blue' },
]

const css = `
.s-pbl0-revathi .pip-body { animation: s-pbl0-bob 2.6s ease-in-out infinite; }
.s-pbl0-path path:first-child { animation: s-pbl0-march 1.8s linear infinite; }
.s-pbl0-twinkle { animation: s-pbl0-twinkle 3s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 3s); }
@keyframes s-pbl0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes s-pbl0-march {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -26px; }
}
@keyframes s-pbl0-twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}
`

export default function Hero() {
  const topY = FLOOR - RISE * STEPS.length
  const landing = X0 + STEP_W * STEPS.length
  return (
    <Scene
      w={800}
      h={392}
      css={css}
      className="s-pbl0"
      label="A paper character carrying a manuscript up a staircase of six steps labelled journal, rules, files, submit, review and proofs, leaving a tall pile marked dissertation behind, towards an open journal at the top stamped published"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      {/* the dissertation left behind at the foot of the stairs */}
      <Pile x={72} y={FLOOR} w={92} count={22} seed={12} />
      <Hand x={72} y={FLOOR - 126} size={18} anchor="middle" c={INK_SOFT}>
        dissertation
      </Hand>

      {/* the staircase */}
      {STEPS.map((step, i) => {
        const x = X0 + STEP_W * i
        const y = FLOOR - RISE * (i + 1)
        const t = TONES[step.tone]
        return (
          <g key={step.word}>
            <Box x={x} y={y} w={STEP_W} h={FLOOR - y} fill={t.tint} stroke={t.deep} seed={20 + i * 3} sw={1.8} />
            <Hand x={x + STEP_W / 2} y={y + 20} size={16} anchor="middle" weight={700}>
              {`${i + 1} ${step.word}`}
            </Hand>
          </g>
        )
      })}

      {/* the landing at the top, with the journal on it */}
      <Box x={landing} y={topY} w={780 - landing} h={FLOOR - topY} fill={TONES.brown.tint} stroke={TONES.brown.deep} seed={40} sw={1.8} />
      <OpenBook x={708} y={topY - 4} w={124} tone="red" seed={41} />
      <StampMark x={708} y={topY - 104} w={150} h={44} text="PUBLISHED" tone="green" rotate={-6} size={20} bg={PAPER} seed={42} />
      {[
        [632, 112],
        [778, 128],
        [760, 60],
      ].map(([sx, sy], i) => (
        <g key={i} className="s-pbl0-twinkle" style={{ '--i': i, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Sparkle x={sx} y={sy} s={9} />
        </g>
      ))}

      {/* the rest of the climb */}
      <Arrow className="s-pbl0-path" from={[300, 230]} to={[624, 132]} bend={-0.18} seed={43} c={TONES.red.ink} w={2} dash="6 7" />

      {/* Revathi on step 2, manuscript held high */}
      <Shadow x={X0 + STEP_W * 1.5} y={FLOOR - RISE * 2 + 1} rx={30} ry={4} />
      <Place x={X0 + STEP_W * 1.5} y={FLOOR - RISE * 2} s={1.55}>
        <g className="s-pbl0-revathi">
          <Pip mood="grin" arms="carry" tone="blue" look={1.4} seed={44}>
            <Sheet x={-20} y={-104} w={40} h={32} lines={2} fold={8} seed={45} sw={1.4} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
