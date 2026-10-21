import {
  Anim,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Mountain,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  TONES,
  Tree,
  handLine,
} from '../../ink/index.js'

/**
 * The plan before the study. Pallavi stands in front of the hills where her
 * spring still drips into its pool, and holds up her proposal on an easel:
 * what, why and how. A committee member in glasses reads it, and the three
 * ticks go on one after another while he nods.
 */

const FLOOR = 372

const css = `
.s-prop0-drop { animation: s-prop0-drip 3.2s ease-in infinite; }
.s-prop0-tick { animation: s-prop0-draw 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 9s); }
.s-prop0-pallavi .pip-body { animation: s-prop0-bob 3s ease-in-out infinite; }
.s-prop0-reader .pip-body { animation: s-prop0-nod 2.4s ease-in-out infinite; }
@keyframes s-prop0-drip {
  0%, 30% { transform: translateY(0); opacity: 0; }
  36% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(46px); opacity: 1; }
  86%, 100% { transform: translateY(46px); opacity: 0; }
}
@keyframes s-prop0-draw {
  0%, 20% { stroke-dashoffset: 1; }
  30%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-prop0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-prop0-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

const ROWS = [
  { word: 'what', note: 'one question', tone: 'blue' },
  { word: 'why', note: 'the gap', tone: 'amber' },
  { word: 'how', note: 'method + time', tone: 'green' },
]

export default function Hero() {
  const sx = 318
  const sy = 64
  const sw = 196
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-prop0"
      label="A paper character stands in front of green hills where a spring drips into a small pool, pointing at a research proposal on an easel with three parts ticked: what, why and how, while a committee member in glasses reads it and nods"
    >
      <Mountain x={10} y={FLOOR} w={250} h={190} seed={11} />
      <Mountain x={120} y={FLOOR} w={140} h={110} seed={12} snow={false} />
      <Tree x={40} y={FLOOR} s={0.7} seed={13} />

      {/* the spring: a thin stream down the slope into a pool */}
      <Ink d="M118 268Q124 292 116 312Q110 330 122 346" c={TONES.blue.ink} w={2.2} />
      <path d="M96 356Q122 346 150 356Q122 366 96 356Z" fill={TONES.blue.mid} />
      <Ink d="M96 356Q122 346 150 356Q122 366 96 356Z" w={1.5} c={TONES.blue.deep} />
      <Place x={0} y={0}>
        <Anim className="s-prop0-drop">
          <path d="M122 300Q126 307 122 310Q118 307 122 300Z" fill={TONES.blue.ink} />
        </Anim>
      </Place>

      <Floor y={FLOOR} x1={20} x2={780} seed={14} />

      {/* the easel */}
      <Ink
        d={handLine(sx + 30, sy + 250, sx + 10, FLOOR, 15, 0.4) + handLine(sx + sw - 30, sy + 250, sx + sw - 10, FLOOR, 16, 0.4) + handLine(sx + sw / 2, sy + 250, sx + sw / 2, FLOOR - 6, 17, 0.4)}
        w={3}
        c={TONES.brown.deep}
      />
      <Sheet x={sx} y={sy} w={sw} h={252} lines={0} fold={24} seed={18} sw={2} />
      <Hand x={sx + 24} y={sy + 44} size={30} weight={700}>
        proposal
      </Hand>
      <Ink d={handLine(sx + 24, sy + 54, sx + 150, sy + 54, 19, 0.6)} c={TONES.red.ink} w={2.2} />

      {ROWS.map((row, i) => {
        const y = sy + 82 + i * 54
        const t = TONES[row.tone]
        return (
          <g key={row.word}>
            <path d={`M${sx + 18} ${y}h${sw - 36}v42h${-(sw - 36)}Z`} fill={t.tint} />
            <Ink d={handLine(sx + 18, y + 42, sx + sw - 18, y + 42, 20 + i, 0.4)} c={t.deep} w={1.4} />
            <Hand x={sx + 28} y={y + 28} size={24} weight={700}>
              {row.word}
            </Hand>
            <Hand x={sx + 86} y={y + 27} size={16} c={INK_SOFT}>
              {row.note}
            </Hand>
            <path
              className="s-prop0-tick"
              style={{ '--i': i }}
              d={`M${sx + sw - 6} ${y + 18}q4 3 6 9q6 -14 15 -22`}
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

      <Shadow x={262} y={FLOOR + 3} rx={38} ry={5} />
      <Place x={262} y={FLOOR} s={1.7}>
        <g className="s-prop0-pallavi">
          <Pip mood="happy" arms="point" tone="green" look={1.6} seed={30} />
        </g>
      </Place>

      <Shadow x={660} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={660} y={FLOOR} s={1.7}>
        <g className="s-prop0-reader">
          <Pip mood="focused" arms="hold" tone="blue" glasses look={-1.6} seed={40}>
            <Sheet x={-12} y={-31} w={24} h={26} tone="paper" lines={2} fold={6} seed={41} sw={1.3} />
          </Pip>
        </g>
      </Place>
      <Hand x={660} y={226} size={20} anchor="middle" c={INK_SOFT}>
        the committee
      </Hand>
    </Scene>
  )
}
