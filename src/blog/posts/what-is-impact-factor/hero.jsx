import {
  Anim,
  Arrow,
  Book,
  Calendar,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  Oval,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Sheet,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * One number for a whole journal. Prakash holds a magnifying glass up to a
 * tall journal whose amber badge reads impact factor 2.8, while citations
 * from other papers fly into it. His guide, under a June calendar, points
 * at the sheet that settles the matter: checked in JCR, not in an email.
 */

const FLOOR = 372

const css = `
.s-jif0-cite { animation: s-jif0-fly 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 7s); }
.s-jif0-arrow { animation: s-jif0-pulse 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 7s); }
.s-jif0-badge { animation: s-jif0-glow 3.6s ease-in-out infinite; }
.s-jif0-prakash .pip-body { animation: s-jif0-bob 3s ease-in-out infinite; }
.s-jif0-lens { animation: s-jif0-peer 4s ease-in-out infinite; }
.s-jif0-guide .pip-arm-r { animation: s-jif0-point 2.4s ease-in-out infinite alternate; }
@keyframes s-jif0-fly {
  0%, 100% { transform: translate(0, 0); }
  45% { transform: translate(10px, 6px); }
  60% { transform: translate(10px, 6px); }
}
@keyframes s-jif0-pulse {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.35; }
}
@keyframes s-jif0-glow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
@keyframes s-jif0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-jif0-peer {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(6px, -8px); }
}
@keyframes s-jif0-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-9deg); }
}
`

const CITES = [
  { x: 52, y: 44, to: [326, 108] },
  { x: 160, y: 22, to: [330, 76] },
  { x: 96, y: 150, to: [326, 150] },
]

export default function Hero() {
  const bx = 320
  const by = 46
  const bw = 210
  const bh = 300
  const cx = bx + bw / 2 + 14
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-jif0"
      label="A paper character with a magnifying glass studies a tall journal whose amber badge reads impact factor 2.8, with citation arrows from other papers flying into it, while a guide in glasses under a June calendar points at a sheet that says checked in JCR, not in an email"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      {CITES.map((cite, i) => (
        <g key={i}>
          <g className="s-jif0-arrow" style={{ '--i': i }}>
            <Arrow from={[cite.x + 46, cite.y + 26]} to={cite.to} bend={0.12} seed={20 + i * 3} w={1.8} head={10} c={INK_SOFT} />
          </g>
          <g className="s-jif0-cite" style={{ '--i': i }}>
            <Sheet x={cite.x} y={cite.y} w={40} h={50} lines={3} fold={9} seed={30 + i * 2} sw={1.5} />
          </g>
        </g>
      ))}

      <Shadow x={bx + bw / 2} y={FLOOR - 22} rx={120} ry={6} />
      <Book x={bx} y={by} w={bw} h={bh} tone="blue" label={false} seed={40} />
      <Type x={cx} y={by + 52} size={22} anchor="middle" weight={700}>
        JOURNAL
      </Type>
      <Ink d={handLine(cx - 62, by + 66, cx + 62, by + 66, 41, 0.4)} c={TONES.blue.deep} w={1.6} />

      <Place x={cx} y={by + 158}>
        <Anim className="s-jif0-badge" origin={[0, 0]}>
          <Oval cx={0} cy={0} rx={74} ry={70} fill="url(#fill-amber)" seed={42} sw={2} />
          <Hand x={0} y={-24} size={17} anchor="middle" weight={700}>
            impact factor
          </Hand>
          <Hand x={0} y={26} size={50} anchor="middle" weight={700} c={TONES.red.deep}>
            2.8
          </Hand>
        </Anim>
      </Place>
      <Hand x={cx} y={by + 262} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        JCR 2026
      </Hand>

      <Calendar x={666} y={28} w={76} h={84} day="17" month="JUN" tone="red" seed={50} />

      <Sheet x={640} y={128} w={140} h={150} lines={0} fold={18} seed={52} sw={1.8} />
      <Hand x={706} y={168} size={21} anchor="middle" weight={700}>
        checked
      </Hand>
      <Hand x={706} y={194} size={21} anchor="middle" weight={700} c={TONES.green.deep}>
        in JCR,
      </Hand>
      <Hand x={706} y={222} size={21} anchor="middle" weight={700}>
        not in
      </Hand>
      <Hand x={706} y={248} size={21} anchor="middle" weight={700} c={TONES.red.deep}>
        an email
      </Hand>

      <Plant x={772} y={FLOOR} s={0.7} seed={54} />

      <Shadow x={580} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={580} y={FLOOR} s={1.6}>
        <g className="s-jif0-guide">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.4} seed={56} />
        </g>
      </Place>

      <Shadow x={176} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={176} y={FLOOR} s={1.75}>
        <g className="s-jif0-prakash">
          <Pip mood="focused" arms="point" tone="blue" look={1.8} seed={60} />
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-jif0-lens">
          <Magnifier x={292} y={262} r={28} angle={135} tone="amber" seed={62} />
        </Anim>
      </Place>
    </Scene>
  )
}
