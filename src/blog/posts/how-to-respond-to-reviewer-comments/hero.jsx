import {
  Anim,
  Arrow,
  Box,
  Chai,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scene,
  Shadow,
  TEXT_LINE,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * The decision and the reply. On the left the decision sheet: major
 * revision, two reviewers, 23 comments. On the right the response letter,
 * where every numbered comment gets its own green tick, one after another.
 * Pip sits between the two with a pencil, writing.
 */

const css = `
.s-rrc0 .pip-arm-r { animation: s-rrc0-write 1.6s ease-in-out infinite; }
.s-rrc0-tick { animation: s-rrc0-draw 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s); }
.s-rrc0-note { animation: s-rrc0-bob 3.4s ease-in-out infinite; }
@keyframes s-rrc0-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
@keyframes s-rrc0-draw {
  0%, 4% { stroke-dashoffset: 1; }
  12%, 90% { stroke-dashoffset: 0; }
  98%, 100% { stroke-dashoffset: 1; }
}
@keyframes s-rrc0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
`

const ROWS = ['1.1', '1.2', '1.3', '2.1', '2.2']

export default function Hero() {
  const FLOOR = 352
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-rrc0"
      label="A paper character in glasses writes at the centre, between a decision sheet that says major revision with 23 comments and a response letter where every numbered comment has a green tick"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={1} />

      {/* the decision sheet */}
      <Box x={40} y={44} w={236} h={262} r={6} fill={PAPER} seed={2} sw={2.2} double />
      <rect x={40} y={44} width={236} height={44} fill={TONES.red.tint} />
      <Ink d={handLine(40, 88, 276, 88, 3, 0.5)} w={1.6} />
      <Type x={158} y={73} size={17} anchor="middle" weight={700}>
        DECISION
      </Type>
      <Hand x={158} y={130} size={28} anchor="middle" weight={700} c={TONES.red.deep}>
        major revision
      </Hand>
      <Ink d={handLine(60, 150, 256, 150, 4, 0.5)} c={TEXT_LINE} w={1.6} />
      <Hand x={62} y={188} size={22} c={INK_SOFT}>
        Reviewer 1
      </Hand>
      <Hand x={254} y={190} size={28} anchor="end" weight={700}>
        12
      </Hand>
      <Hand x={62} y={228} size={22} c={INK_SOFT}>
        Reviewer 2
      </Hand>
      <Hand x={254} y={230} size={28} anchor="end" weight={700}>
        11
      </Hand>
      <Ink d={handLine(60, 248, 256, 248, 5, 0.5)} c={TEXT_LINE} w={1.6} />
      <Hand x={158} y={286} size={26} anchor="middle" weight={700}>
        23 comments
      </Hand>

      {/* the response letter */}
      <Box x={524} y={40} w={240} h={270} r={6} fill={PAPER} seed={10} sw={2.2} double />
      <rect x={524} y={40} width={240} height={44} fill={TONES.blue.tint} />
      <Ink d={handLine(524, 84, 764, 84, 11, 0.5)} w={1.6} />
      <Type x={644} y={68} size={16} anchor="middle" weight={700}>
        RESPONSE LETTER
      </Type>
      {ROWS.map((no, i) => {
        const y = 118 + i * 38
        return (
          <g key={no}>
            <Type x={540} y={y} size={14} weight={700} c={TONES.blue.deep}>
              {no}
            </Type>
            <Ink d={handLine(582, y - 6, 700 - (i % 2) * 18, y - 6, 20 + i, 0.4) + handLine(582, y + 6, 660 + (i % 3) * 12, y + 6, 30 + i, 0.4)} c={TEXT_LINE} w={1.6} />
            <path
              className="s-rrc0-tick"
              style={{ '--i': i }}
              d={`M722 ${y - 3}q4 3 6 9q7 -14 18 -21`}
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

      {/* from one to the other */}
      <Hand x={400} y={62} size={24} anchor="middle" weight={700}>
        a reply for
      </Hand>
      <Hand x={400} y={90} size={24} anchor="middle" weight={700}>
        every comment
      </Hand>
      <Arrow from={[292, 122]} to={[510, 122]} bend={-0.12} seed={40} w={2.6} head={14} />

      <Shadow x={318} y={FLOOR + 3} rx={18} ry={4} />
      <Chai x={318} y={FLOOR} s={0.9} seed={41} />

      <Shadow x={404} y={FLOOR + 3} rx={40} ry={6} />
      <Place x={404} y={FLOOR} s={2.1}>
        <Pip mood="focused" arms="write" look={1.8} tone="amber" glasses seed={42} />
      </Place>
      <Pencil x={457} y={318} length={70} angle={-58} tone="blue" seed={43} />

      <Place x={400} y={388}>
        <Anim className="s-rrc0-note">
          <Hand x={0} y={0} size={26} anchor="middle" weight={700} c={INK}>
            wait a day, then answer point by point
          </Hand>
        </Anim>
      </Place>
    </Scene>
  )
}
