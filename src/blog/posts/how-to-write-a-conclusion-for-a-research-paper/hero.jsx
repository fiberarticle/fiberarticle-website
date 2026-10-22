import {
  Arrow,
  Box,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * The jump to the end. A row of pages runs from the title to the
 * discussion, and a dashed arrow leaps over all of them to the conclusion
 * card, the way a busy reader does. Ketan stands beside the card and points
 * at its three lines, which a highlighter sweeps one after another.
 */

const FLOOR = 376

const PAGES = ['title', 'intro', 'methods', 'results', 'discussion']

const ROWS = [
  { word: 'the answer', tone: 'blue' },
  { word: 'why it matters', tone: 'amber' },
  { word: 'what next', tone: 'green' },
]

const css = `
.s-cnc0-hop path:first-child { animation: s-cnc0-march 1.6s linear infinite; }
.s-cnc0-ketan .pip-body { animation: s-cnc0-bob 3s ease-in-out infinite; }
.s-cnc0-ketan .pip-arm-r { animation: s-cnc0-point 3s ease-in-out infinite; }
.s-cnc0-mark { animation: s-cnc0-sweep 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.4s - 9s); }
@keyframes s-cnc0-march {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -26px; }
}
@keyframes s-cnc0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-cnc0-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-6deg); }
}
@keyframes s-cnc0-sweep {
  0%, 18% { stroke-dashoffset: 1; }
  30%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
`

export default function Hero() {
  const cx = 530
  const cy = 96
  const cw = 236
  const ch = 214
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-cnc0"
      label="A row of paper sheets labelled title, intro, methods, results and discussion, with a dashed arrow leaping over all of them to a conclusion card that reads the answer, why it matters and what next, while a paper character points at the card"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      {/* the pages of the paper, standing in a row */}
      {PAGES.map((word, i) => {
        const x = 30 + i * 76
        return (
          <g key={word}>
            <Shadow x={x + 31} y={FLOOR + 2} rx={30} ry={4} />
            <Sheet x={x} y={FLOOR - 92} w={62} h={92} lines={5} fold={14} seed={20 + i * 7} />
            <Hand x={x + 31} y={FLOOR - 104} size={i === 4 ? 15 : 17} anchor="middle" c={INK_SOFT}>
              {word}
            </Hand>
          </g>
        )
      })}

      {/* the reader's jump, from the title straight to the end */}
      <Arrow className="s-cnc0-hop" from={[64, 250]} to={[518, 128]} bend={-0.36} seed={12} c={TONES.red.ink} w={2} dash="6 7" />
      <Hand x={300} y={66} size={20} anchor="middle" c={TONES.red.deep}>
        many readers jump straight here
      </Hand>

      {/* the conclusion card on its stand */}
      <Ink d={handLine(cx + 40, cy + ch, cx + 28, FLOOR, 13, 0.4) + handLine(cx + cw - 40, cy + ch, cx + cw - 28, FLOOR, 14, 0.4)} w={3} c={TONES.brown.deep} />
      <Box x={cx} y={cy} w={cw} h={ch} r={6} fill={PAPER} stroke={TONES.blue.deep} seed={15} sw={2.2} double />
      <Hand x={cx + 22} y={cy + 42} size={30} weight={700}>
        conclusion
      </Hand>
      <Ink d={handLine(cx + 22, cy + 52, cx + 180, cy + 52, 16, 0.6)} c={TONES.red.ink} w={2.2} />
      {ROWS.map((row, i) => {
        const y = cy + 92 + i * 44
        const t = TONES[row.tone]
        return (
          <g key={row.word}>
            <path
              className="s-cnc0-mark"
              style={{ '--i': i }}
              d={`M${cx + 20} ${y - 7}L${cx + cw - 22} ${y - 8}`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke={t.mid}
              strokeWidth={22}
              strokeLinecap="round"
              opacity="0.7"
            />
            <Hand x={cx + 28} y={y} size={22} weight={700}>
              {row.word}
            </Hand>
          </g>
        )
      })}

      <Shadow x={470} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={470} y={FLOOR} s={1.7}>
        <g className="s-cnc0-ketan">
          <Pip mood="happy" arms="point" tone="green" look={1.6} glasses seed={31} />
        </g>
      </Place>
    </Scene>
  )
}
