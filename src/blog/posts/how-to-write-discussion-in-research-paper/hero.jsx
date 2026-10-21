import {
  Arrow,
  Box,
  Chart,
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
 * From what happened to what it means. On the left, Farhan's results board
 * with its bar chart; on the right, the discussion page asking what it
 * means, how sure he is and what comes next. Farhan stands between them and
 * points at the questions, which get their ticks one after another.
 */

const FLOOR = 376

const css = `
.s-dsc0-tick { animation: s-dsc0-draw 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.3s - 9s); }
.s-dsc0-farhan .pip-body { animation: s-dsc0-bob 3s ease-in-out infinite; }
.s-dsc0 .chart-bar { animation: s-dsc0-grow 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s - 9s); }
@keyframes s-dsc0-draw {
  0%, 20% { stroke-dashoffset: 1; }
  30%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-dsc0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-dsc0-grow {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.9); }
}
`

const ROWS = [
  { word: 'what it means', tone: 'blue' },
  { word: 'how sure', tone: 'amber' },
  { word: 'what next', tone: 'green' },
]

export default function Hero() {
  const sx = 500
  const sy = 50
  const sw = 240
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-dsc0"
      label="A paper character stands between a results board with a bar chart and a discussion page with three questions, what it means, how sure and what next, each ticked in turn, with an arrow leading from the chart to the questions"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      {/* the results board on an easel */}
      <Ink d={handLine(90, 260, 74, FLOOR, 12, 0.4) + handLine(240, 260, 256, FLOOR, 13, 0.4)} w={3} c={TONES.brown.deep} />
      <Box x={50} y={80} w={230} h={180} r={6} fill={PAPER} stroke={TONES.brown.deep} seed={14} sw={2.2} />
      <Hand x={68} y={118} size={26} weight={700}>
        results
      </Hand>
      <Chart x={80} y={240} w={170} h={100} bars={[0.45, 0.85, 0.4, 0.75]} tone="blue" seed={15} />
      <Hand x={262} y={146} size={15} anchor="end" c={INK_SOFT}>
        what happened
      </Hand>

      <Arrow from={[230, 70]} to={[490, 60]} bend={-0.18} seed={16} c={INK_SOFT} />

      {/* the discussion page */}
      <Sheet x={sx} y={sy} w={sw} h={270} lines={0} fold={24} seed={17} sw={2} />
      <Hand x={sx + 22} y={sy + 46} size={30} weight={700}>
        discussion
      </Hand>
      <Ink d={handLine(sx + 22, sy + 56, sx + 168, sy + 56, 18, 0.6)} c={TONES.red.ink} w={2.2} />
      {ROWS.map((row, i) => {
        const y = sy + 82 + i * 58
        const t = TONES[row.tone]
        return (
          <g key={row.word}>
            <path d={`M${sx + 16} ${y}h${sw - 62}v44h${-(sw - 62)}Z`} fill={t.tint} />
            <Ink d={handLine(sx + 16, y + 44, sx + sw - 46, y + 44, 19 + i, 0.4)} c={t.deep} w={1.4} />
            <Hand x={sx + 28} y={y + 30} size={22} weight={700}>
              {row.word}
            </Hand>
            <path
              className="s-dsc0-tick"
              style={{ '--i': i }}
              d={`M${sx + sw - 38} ${y + 20}q4 3 6 9q6 -14 15 -22`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke="#3f8f4f"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )
      })}

      <Shadow x={412} y={FLOOR + 3} rx={38} ry={5} />
      <Place x={412} y={FLOOR} s={1.75}>
        <g className="s-dsc0-farhan">
          <Pip mood="focused" arms="point" tone="amber" look={1.6} seed={30} />
        </g>
      </Place>
    </Scene>
  )
}
