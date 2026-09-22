import {
  Anim,
  Dots,
  Floor,
  Hand,
  Ink,
  PAPER,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sparkle,
  TEXT_LINE,
  TONES,
  Worm,
  handEllipse,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * A week before the report is due: a corkboard of note cards, each wearing
 * a coloured tag that says what it is (quotation marks for exact words, P
 * for a paraphrase, S for a summary, ME for an idea of one's own). Pip tags
 * a new card first and only then pins it up.
 */

const css = `
.s-ap0-card { animation: s-ap0-card 10s ease-in-out infinite; }
.s-ap0-tag { animation: s-ap0-tag 10s ease-out infinite; }
.s-ap0-pin { animation: s-ap0-pin 10s ease-out infinite; }
.s-ap0-spark { animation: s-ap0-spark 10s ease-out infinite; }
.s-ap0-pip .pip-body { animation: s-ap0-nudge 10s ease-in-out infinite; }
@keyframes s-ap0-card {
  0%, 12% { opacity: 1; transform: translate(220px, 30px) rotate(0deg) scale(0.45); }
  24% { opacity: 1; transform: translate(110px, -44px) rotate(-8deg) scale(0.75); }
  34% { opacity: 1; transform: translate(0px, 0px) rotate(0deg) scale(1); }
  88% { opacity: 1; transform: translate(0px, 0px) rotate(0deg) scale(1); }
  92% { opacity: 0; transform: translate(0px, 0px) rotate(0deg) scale(1); }
  93% { opacity: 0; transform: translate(220px, 30px) rotate(0deg) scale(0.45); }
  98%, 100% { opacity: 1; transform: translate(220px, 30px) rotate(0deg) scale(0.45); }
}
@keyframes s-ap0-tag {
  0%, 3% { opacity: 0; transform: scale(0.2); }
  8% { opacity: 1; transform: scale(1.25); }
  11%, 92% { opacity: 1; transform: scale(1); }
  93%, 100% { opacity: 0; transform: scale(0.2); }
}
@keyframes s-ap0-pin {
  0%, 33% { opacity: 0; transform: scale(0); }
  37% { opacity: 1; transform: scale(1.3); }
  40%, 88% { opacity: 1; transform: scale(1); }
  92%, 100% { opacity: 0; transform: scale(0); }
}
@keyframes s-ap0-spark {
  0%, 34% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  38% { opacity: 1; transform: scale(1.2) rotate(20deg); }
  46%, 100% { opacity: 0; transform: scale(0.5) rotate(40deg); }
}
@keyframes s-ap0-nudge {
  0%, 10% { transform: rotate(0deg); }
  14% { transform: rotate(-4deg); }
  19%, 100% { transform: rotate(0deg); }
}
`

/* The cards on the board, by centre. The last one is the card Pip pins. */
const CARDS = [
  { x: 136, y: 140, tone: 'blue', mark: '“ ”', pin: 'red' },
  { x: 262, y: 140, tone: 'green', mark: 'P:', pin: 'amber' },
  { x: 388, y: 140, tone: 'amber', mark: 'ME:', pin: 'blue' },
  { x: 136, y: 266, tone: 'pink', mark: 'S:', pin: 'green' },
  { x: 262, y: 266, tone: 'blue', mark: '“ ”', pin: 'amber' },
  { x: 388, y: 266, tone: 'green', mark: 'P:', pin: 'red' },
]

/* A note card drawn round its centre, with its tag and its pin. */
function NoteCard({ tone, mark, pin, seed, tagClass, pinClass }) {
  const box = [[-54, -52], [54, -52], [54, 52], [-54, 52]]
  const tag = [[-46, -38], [6, -38], [6, -6], [-46, -6]]
  return (
    <g>
      <rect x={-54} y={-52} width={108} height={104} fill={PAPER} />
      <Ink d={handLine(-44, 10, 38, 10, seed, 0.3) + handLine(-44, 24, 30, 24, seed + 1, 0.3) + handLine(-44, 38, 10, 38, seed + 2, 0.3)} c={TEXT_LINE} w={1.7} />
      <Ink d={handPoly(box, { seed: seed + 3, amp: 0.5, closed: true })} w={1.8} />
      <Anim className={tagClass} origin={[-20, -22]}>
        <rect x={-46} y={-38} width={52} height={32} rx={5} fill={TONES[tone].mid} />
        <Ink d={handPoly(tag, { seed: seed + 4, amp: 0.3, closed: true })} w={1.5} />
        <Hand x={-20} y={-14} size={22} anchor="middle" weight={700}>
          {mark}
        </Hand>
      </Anim>
      <Anim className={pinClass} origin={[3, -58]}>
        <PushPin x={0} y={-46} tone={pin} seed={seed + 5} />
      </Anim>
    </g>
  )
}

export default function Hero() {
  const frame = [[50, 56], [474, 56], [474, 356], [50, 356]]
  const cork = [[62, 68], [462, 68], [462, 344], [62, 344]]
  const cal = [[510, 74], [628, 74], [628, 206], [510, 206]]
  const last = CARDS[CARDS.length - 1]

  return (
    <Scene
      w={800}
      h={380}
      top={24}
      css={css}
      className="s-ap0"
      label="A paper character in glasses pins a new note card onto a corkboard where every card carries a coloured tag, quotation marks for exact words, P for paraphrase, S for summary and ME for its own idea, while a bookworm sits on the frame and a calendar beside it reads 7 days left"
    >
      <Floor y={390} x1={30} x2={770} seed={3} />

      <rect x={50} y={56} width={424} height={300} fill="url(#wood)" />
      <Ink d={handPoly(frame, { seed: 4, amp: 0.6, closed: true })} w={2} />
      <rect x={62} y={68} width={400} height={276} fill={TONES.brown.tint} />
      <Dots x={66} y={72} w={392} h={268} count={90} seed={5} c={TONES.brown.ink} o={0.4} />
      <Ink d={handPoly(cork, { seed: 6, amp: 0.4, closed: true })} w={1.5} />

      {CARDS.slice(0, -1).map((card, i) => (
        <Place key={i} x={card.x} y={card.y}>
          <NoteCard {...card} seed={10 + i * 7} />
        </Place>
      ))}

      <Place x={430} y={56}>
        <Worm seed={60} />
      </Place>

      <Ink d="M540 76L569 56L598 76" c={TONES.grey.deep} w={1.5} />
      <circle cx={569} cy={55} r={3} fill={TONES.grey.mid} stroke={TONES.grey.deep} strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
      <rect x={510} y={74} width={118} height={132} fill={PAPER} />
      <rect x={510} y={74} width={118} height={40} fill="url(#fill-red)" />
      <Ink d={handPoly(cal, { seed: 7, amp: 0.5, closed: true })} w={1.8} />
      <Ink d={handLine(510, 114, 628, 114, 8, 0.3)} w={1.4} />
      <Ink d={handEllipse(540, 76, 3.5, 6, { seed: 9 }) + handEllipse(598, 76, 3.5, 6, { seed: 11 })} w={1.6} />
      <Hand x={569} y={101} size={21} anchor="middle" weight={700}>
        days left
      </Hand>
      <Hand x={569} y={186} size={66} anchor="middle" weight={700} c={TONES.red.ink}>
        7
      </Hand>

      <Shadow x={700} y={392} rx={44} ry={6} />
      <Place x={700} y={390} s={2} flip>
        <g className="s-ap0-pip">
          <Pip mood="happy" arms="point" glasses look={1.2} seed={50} />
        </g>
      </Place>

      <Place x={last.x} y={last.y}>
        <Anim className="s-ap0-card">
          <NoteCard {...last} seed={52} tagClass="s-ap0-tag" pinClass="s-ap0-pin" />
        </Anim>
      </Place>
      <Place x={450} y={208}>
        <Anim className="s-ap0-spark" spin style={{ opacity: 0 }}>
          <Sparkle x={0} y={0} s={12} />
        </Anim>
      </Place>
    </Scene>
  )
}
