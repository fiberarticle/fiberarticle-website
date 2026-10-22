import {
  Anim,
  Box,
  Chart,
  Desk,
  Door,
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
 * The sorting table. Joel's results board stands on the left with its bar
 * chart; on the long table, his pages drop one by one into trays marked
 * question one, question two and summary. On the right a closed door is
 * marked discussion: the meaning waits there, for later.
 */

const FLOOR = 376
const TOP = 226

const TRAYS = [
  { word: 'question 1', tone: 'blue' },
  { word: 'question 2', tone: 'green' },
  { word: 'summary', tone: 'amber' },
]

const css = `
.s-res0-page { animation: s-res0-drop 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 7.5s); }
.s-res0-joel .pip-body { animation: s-res0-bob 3s ease-in-out infinite; }
.s-res0 .chart-bar { animation: s-res0-grow 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s - 7.5s); }
@keyframes s-res0-drop {
  0%, 100% { transform: translateY(0); }
  12% { transform: translateY(-26px); }
  24% { transform: translateY(0); }
}
@keyframes s-res0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-res0-grow {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.9); }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-res0"
      label="A paper character stands at a long table where sheets drop into three trays labelled question 1, question 2 and summary, beside a results board with a bar chart, and points to a closed door marked discussion, later"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      {/* the results board on an easel */}
      <Ink d={handLine(80, 230, 64, FLOOR, 12, 0.4) + handLine(210, 230, 226, FLOOR, 13, 0.4)} w={3} c={TONES.brown.deep} />
      <Box x={36} y={56} w={210} h={174} r={6} fill={PAPER} stroke={TONES.brown.deep} seed={14} sw={2.2} />
      <Hand x={54} y={94} size={26} weight={700}>
        results
      </Hand>
      <Chart x={62} y={212} w={160} h={92} bars={[0.5, 0.88, 0.35, 0.7]} tone="blue" seed={15} />

      {/* the long sorting table */}
      <Ink d={handLine(296, TOP + 22, 300, FLOOR, 16, 0.4) + handLine(624, TOP + 22, 620, FLOOR, 17, 0.4)} w={3} c={TONES.brown.deep} />
      <Desk y={TOP} x1={276} x2={644} seed={18} />
      {TRAYS.map((tray, i) => {
        const x = 288 + i * 120
        const t = TONES[tray.tone]
        return (
          <g key={tray.word}>
            <Hand x={x + 52} y={TOP - 92} size={19} anchor="middle" weight={700}>
              {tray.word}
            </Hand>
            <Ink d={handLine(x + 8, TOP - 84, x + 96, TOP - 84, 19 + i, 0.5)} c={t.ink} w={2} />
            <Place x={0} y={0}>
              <Anim className="s-res0-page" style={{ '--i': i }}>
                <Sheet x={x + 26} y={TOP - 72} w={52} h={64} tone={i === 1 ? 'paper' : tray.tone} lines={3} fold={11} seed={22 + i} />
              </Anim>
            </Place>
            <Box x={x} y={TOP - 30} w={104} h={30} r={3} fill={t.tint} stroke={t.deep} seed={25 + i} sw={2} />
          </g>
        )
      })}

      {/* the door the meaning waits behind */}
      <Door x={676} y={FLOOR} w={84} h={164} tone="grey" seed={30} />
      <Box x={680} y={170} w={76} h={26} r={4} fill={PAPER} seed={31} sw={1.5} />
      <Hand x={718} y={189} size={15} anchor="middle" weight={700}>
        discussion
      </Hand>
      <Hand x={718} y={158} size={15} anchor="middle" c={INK_SOFT}>
        later
      </Hand>

      <Shadow x={460} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={460} y={FLOOR} s={1.7}>
        <g className="s-res0-joel">
          <Pip mood="focused" arms="point" tone="blue" glasses look={-1.4} seed={32} />
        </g>
      </Place>
    </Scene>
  )
}
