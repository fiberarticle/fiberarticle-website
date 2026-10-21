import {
  Anim,
  Arrow,
  Box,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sparkle,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * One name, many people. Behind Gurpreet stands a faded row of paper
 * characters who all answer to "G. Kaur". She holds up a green card with her
 * own sixteen digit number, and dotted lines carry it to a journal, her
 * university and a funder, so each of them knows exactly which G. Kaur she is.
 */

const FLOOR = 372

const css = `
.s-oid0-card { animation: s-oid0-lift 6s ease-in-out infinite; }
.s-oid0-gurpreet .pip-body { animation: s-oid0-bob 3s ease-in-out infinite; }
.s-oid0-link { animation: s-oid0-flow 2.4s linear infinite; }
.s-oid0-glint { animation: s-oid0-glint 6s ease-in-out infinite; }
@keyframes s-oid0-lift {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(-2deg); }
}
@keyframes s-oid0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-oid0-flow {
  from { stroke-dashoffset: 24; }
  to { stroke-dashoffset: 0; }
}
@keyframes s-oid0-glint {
  0%, 30%, 70%, 100% { opacity: 0; transform: scale(0.6); }
  45%, 55% { opacity: 1; transform: scale(1); }
}
`

/* The iD card, drawn from its own top-left corner. */
function IdCard() {
  return (
    <g>
      <Box x={0} y={0} w={190} h={92} r={8} fill={TONES.green.tint} seed={21} sw={2} />
      <Oval cx={34} cy={34} rx={20} fill={TONES.green.ink} seed={22} />
      <Hand x={34} y={42} size={22} anchor="middle" weight={700} c={PAPER}>
        iD
      </Hand>
      <Hand x={62} y={30} size={16} weight={700}>
        Gurpreet Kaur
      </Hand>
      <Ink d={handLine(62, 42, 170, 42, 23, 0.3)} c={TONES.green.deep} w={1.4} o={0.6} />
      <Type x={95} y={76} size={13} anchor="middle" weight={700}>
        0000-0002-1825-0097
      </Type>
    </g>
  )
}

/* A faded paper character in the crowd of G. Kaurs. */
function Lookalike({ x, seed, high = false }) {
  return (
    <g opacity="0.45">
      <Place x={x} y={FLOOR - 40} s={1.15}>
        <Pip mood="happy" arms="down" tone="paper" seed={seed} blush={false} />
      </Place>
      <Hand x={x} y={FLOOR - (high ? 146 : 124)} size={16} anchor="middle" c={INK_SOFT}>
        G. Kaur
      </Hand>
    </g>
  )
}

const LINKS = [
  { label: 'journal', y: 88, tone: 'blue' },
  { label: 'university', y: 176, tone: 'amber' },
  { label: 'funder', y: 264, tone: 'pink' },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-oid0"
      label="A paper character holds up a green card with her name and a sixteen digit iD, in front of a faded crowd of characters all labelled G. Kaur, while dotted lines carry the card to a journal, a university and a funder"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={10} />

      <Lookalike x={40} seed={11} />
      <Lookalike x={100} seed={12} high />
      <Lookalike x={160} seed={13} />
      <Lookalike x={220} seed={14} high />

      {LINKS.map((link, i) => (
        <g key={link.label}>
          <Box x={600} y={link.y} w={150} h={50} r={6} fill={TONES[link.tone].mid} seed={30 + i} sw={2} />
          <Hand x={675} y={link.y + 33} size={23} anchor="middle" weight={700}>
            {link.label}
          </Hand>
          <g className="s-oid0-link">
            <Arrow from={[464, 204]} to={[594, link.y + 25]} bend={(i - 1) * -0.12} seed={40 + i} c={TONES.green.deep} w={1.6} dash="6 6" />
          </g>
        </g>
      ))}

      <Shadow x={370} y={FLOOR + 3} rx={42} ry={5} />
      <Place x={370} y={FLOOR} s={1.8}>
        <g className="s-oid0-gurpreet">
          <Pip mood="grin" arms="up" tone="amber" look={1.4} seed={50} />
        </g>
      </Place>

      <Place x={275} y={158}>
        <Anim className="s-oid0-card" origin={[95, 92]}>
          <IdCard />
        </Anim>
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-oid0-glint" origin={[462, 150]} style={{ opacity: 0 }}>
          <Sparkle x={462} y={150} s={12} />
        </Anim>
      </Place>
    </Scene>
  )
}
