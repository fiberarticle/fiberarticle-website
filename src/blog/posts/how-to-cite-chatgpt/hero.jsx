import {
  Anim,
  Arrow,
  Bot,
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
  Speech,
  StampMark,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * Four questions on one card. A friendly robot says something in a speech
 * bubble; Mahima points from it to an index card with four lines, who, when,
 * what and where, each ticked off in turn, and a stamp on the corner reads
 * cited. The ticks draw themselves one after another and the dashed arrow
 * from the bubble to the card keeps marching.
 */

const FLOOR = 376

const css = `
.s-cgpt0-mahima .pip-body { animation: s-cgpt0-bob 3.2s ease-in-out infinite; }
.s-cgpt0-arrow { animation: s-cgpt0-march 2s linear infinite; }
.s-cgpt0-tick { animation: s-cgpt0-draw 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
.s-cgpt0-stamp { animation: s-cgpt0-press 6s ease-in-out infinite; }
@keyframes s-cgpt0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-cgpt0-march {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -24; }
}
@keyframes s-cgpt0-draw {
  0%, 66% { stroke-dashoffset: 0; }
  76%, 82% { stroke-dashoffset: 1; }
  100% { stroke-dashoffset: 0; }
}
@keyframes s-cgpt0-press {
  0%, 55% { transform: scale(1); }
  62% { transform: scale(1.12); }
  70%, 100% { transform: scale(1); }
}
`

const LINES = [
  { label: 'who', value: 'OpenAI', tone: 'amber' },
  { label: 'when', value: '14 Aug 2026', tone: 'pink' },
  { label: 'what', value: 'your prompt', tone: 'green' },
  { label: 'where', value: 'share link', tone: 'blue' },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-cgpt0"
      label="A friendly robot says eutrophication is in a speech bubble; a paper character points from the bubble to an index card that lists who, OpenAI, when, 14 Aug 2026, what, your prompt, and where, share link, each with a tick, and a red stamp on the card reads cited"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      {/* the chatbot and what it said */}
      <Shadow x={120} y={FLOOR + 3} rx={44} ry={5} />
      <Bot x={120} y={FLOOR} s={1.55} tone="blue" seed={12} />
      <Speech x={44} y={70} w={236} h={84} tx={150} ty={196} seed={13}>
        <Hand x={162} y={104} size={20} anchor="middle">
          eutrophication is
        </Hand>
        <Hand x={162} y={134} size={20} anchor="middle" c={INK_SOFT}>
          when a lake gets...
        </Hand>
      </Speech>

      {/* from the bubble to the card */}
      <Arrow className="s-cgpt0-arrow" from={[292, 108]} to={[484, 126]} bend={-0.18} seed={14} c={TONES.pink.ink} w={2.2} dash="8 6" />

      {/* Mahima */}
      <Shadow x={400} y={FLOOR + 3} rx={38} ry={5} />
      <Place x={400} y={FLOOR} s={1.75}>
        <g className="s-cgpt0-mahima">
          <Pip mood="focused" arms="point" tone="green" look={1.6} seed={15} />
        </g>
      </Place>

      {/* the index card */}
      <Box x={496} y={66} w={274} h={256} r={6} fill={PAPER} seed={16} sw={2} double />
      <Ink d={handLine(512, 104, 754, 104, 17, 0.4)} c={TONES.red.ink} w={1.6} o={0.7} />
      <Type x={512} y={94} size={17} weight={700}>
        CITATION
      </Type>
      {LINES.map((line, i) => {
        const y = 144 + i * 46
        return (
          <g key={line.label}>
            <Type x={516} y={y} size={15} c={TONES[line.tone].deep} weight={700}>
              {line.label}
            </Type>
            <Hand x={584} y={y + 1} size={21}>
              {line.value}
            </Hand>
            <Ink d={handLine(512, y + 12, 754, y + 12, 20 + i, 0.3)} c={TONES.blue.mid} w={1} o={0.6} />
            <path
              className="s-cgpt0-tick"
              style={{ '--i': i }}
              d={`M${728} ${y - 8}q4 3 6 9q6 -14 15 -22`}
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

      <Anim className="s-cgpt0-stamp" origin={[680, 346]}>
        <StampMark x={680} y={346} w={120} h={42} text="CITED" tone="red" rotate={-8} size={22} bg={PAPER} seed={30} />
      </Anim>
    </Scene>
  )
}
