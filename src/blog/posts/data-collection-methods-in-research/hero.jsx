import {
  Anim,
  Arrow,
  Box,
  Crate,
  Flask,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Sheet,
  Speech,
  TEXT_LINE,
  TONES,
  Tick,
  ellipsePath,
  handEllipse,
  handLine,
} from '../../ink/index.js'

/**
 * The toolbox of data collection. Shalini stands in the middle with her
 * clipboard, and around her five tools sit in their own circles: a survey
 * form, an interview in two speech bubbles, an eye for observation, a flask
 * for an experiment and a box of records. The circles take turns to glow.
 */

/** A small clipboard with lines of writing. Anchor: top-left. */
function Clipboard({ x, y, w = 30, h = 36, seed = 1 }) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={2} fill={TONES.brown.tint} seed={seed} sw={1.3} />
      <rect x={x + 3} y={y + 4} width={w - 6} height={h - 7} fill={PAPER} />
      <Ink d={handLine(x + 6, y + h * 0.4, x + w - 6, y + h * 0.4, seed + 1, 0.2) + handLine(x + 6, y + h * 0.62, x + w - 9, y + h * 0.62, seed + 2, 0.2) + handLine(x + 6, y + h * 0.82, x + w - 12, y + h * 0.82, seed + 3, 0.2)} c={TEXT_LINE} w={1.3} />
      <rect x={x + w / 2 - 5} y={y - 2} width="10" height="5" rx="1" fill={TONES.grey.mid} />
    </g>
  )
}

/** An open eye, for watching. Anchor: centre. */
function Eye({ x, y, s = 1, seed = 1 }) {
  const lid = `M${x - 30 * s} ${y}Q${x} ${y - 24 * s} ${x + 30 * s} ${y}Q${x} ${y + 24 * s} ${x - 30 * s} ${y}Z`
  return (
    <g>
      <path d={lid} fill={PAPER} />
      <path d={ellipsePath(x, y, 11 * s, 11 * s)} fill="url(#fill-blue)" />
      <path d={ellipsePath(x, y, 5 * s, 5 * s)} fill={INK} />
      <circle cx={x - 3 * s} cy={y - 3 * s} r={1.8 * s} fill="#fffaf0" />
      <Ink d={handEllipse(x, y, 11 * s, 11 * s, { seed, amp: 0.4 })} w={1.4} />
      <Ink d={lid} w={1.8} />
      <Ink d={`M${x - 18 * s} ${y - 15 * s}l-4 -6M${x} ${y - 19 * s}v-7M${x + 18 * s} ${y - 15 * s}l4 -6`} w={1.5} />
    </g>
  )
}

/** A survey form: a sheet with tick boxes, some ticked. Anchor: top-left. */
function FormSheet({ x, y, w = 70, h = 90, rows = 4, done = 2, seed = 1, tone = 'paper' }) {
  const gap = (h - 22) / rows
  return (
    <g>
      <Sheet x={x} y={y} w={w} h={h} lines={0} fold={12} seed={seed} tone={tone} />
      {Array.from({ length: rows }, (_, i) => {
        const ry = y + 16 + i * gap
        return (
          <g key={i}>
            <Box x={x + 7} y={ry} w={9} h={9} fill={PAPER} seed={seed + 10 + i} sw={1.2} />
            <Ink d={handLine(x + 21, ry + 5, x + w - 10 - ((i * 7) % 12), ry + 5, seed + 20 + i, 0.3)} c={TEXT_LINE} w={1.5} />
            {i < done ? <Tick x={x + 11} y={ry + 4} s={0.5} w={2} /> : null}
          </g>
        )
      })}
    </g>
  )
}

const FLOOR = 382

const css = `
.s-dcm0-pip .pip-body { animation: s-dcm0-bob 3s ease-in-out infinite; }
@keyframes s-dcm0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.s-dcm0-tool { animation: s-dcm0-glow 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 1.5s); }
@keyframes s-dcm0-glow {
  0%, 30%, 100% { transform: translateY(0); }
  12% { transform: translateY(-6px); }
}
.s-dcm0-line { animation: s-dcm0-dash 7.5s linear infinite; }
@keyframes s-dcm0-dash {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 0.4; }
}
`

const TOOLS = [
  { x: 120, y: 120, label: 'survey', tone: 'amber' },
  { x: 290, y: 78, label: 'interview', tone: 'pink' },
  { x: 510, y: 78, label: 'observation', tone: 'blue' },
  { x: 680, y: 120, label: 'experiment', tone: 'green' },
  { x: 690, y: 286, label: 'records', tone: 'brown' },
]

function Tool({ i }) {
  const t = TOOLS[i]
  return (
    <Place x={t.x} y={t.y}>
      <Anim className="s-dcm0-tool" origin={[0, 0]} style={{ '--i': i }}>
        <Oval cx={0} cy={0} rx={62} ry={56} fill={TONES[t.tone].tint} seed={20 + i} sw={2} />
        {i === 0 ? <FormSheet x={-26} y={-38} w={52} h={66} seed={30} /> : null}
        {i === 1 ? (
          <g>
            <Speech x={-48} y={-38} w={58} h={30} tx={-34} ty={-0} seed={31} />
            <Speech x={-6} y={-6} w={56} h={28} tx={34} ty={32} seed={32} tone="pink" />
            <Ink d={handLine(-40, -27, 0, -27, 33, 0.3) + handLine(-40, -19, -14, -19, 34, 0.3)} c={TEXT_LINE} w={1.6} />
            <Ink d={handLine(2, 5, 42, 5, 35, 0.3) + handLine(2, 13, 28, 13, 36, 0.3)} c={TONES.pink.deep} w={1.6} o={0.6} />
          </g>
        ) : null}
        {i === 2 ? <Eye x={0} y={-4} s={1.3} seed={37} /> : null}
        {i === 3 ? <Flask x={0} y={30} s={0.9} tone="green" seed={38} /> : null}
        {i === 4 ? <Crate x={-36} y={-26} w={72} h={50} label="files" seed={39} /> : null}
        <Hand x={0} y={78} size={22} anchor="middle" weight={700}>
          {t.label}
        </Hand>
      </Anim>
    </Place>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={410}
      css={css}
      className="s-dcm0"
      label="A paper character with a clipboard stands at the centre of five tools for collecting data, each in its own circle: a survey form, two speech bubbles for an interview, an eye for observation, a flask for an experiment and a box of records"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <g className="s-dcm0-line">
        <Arrow from={[352, 250]} to={[188, 172]} bend={0.08} seed={2} c={INK_SOFT} w={1.6} dash="6 8" />
        <Arrow from={[372, 214]} to={[306, 166]} bend={0.05} seed={3} c={INK_SOFT} w={1.6} dash="6 8" />
        <Arrow from={[428, 214]} to={[494, 166]} bend={-0.05} seed={4} c={INK_SOFT} w={1.6} dash="6 8" />
        <Arrow from={[448, 250]} to={[612, 172]} bend={-0.08} seed={5} c={INK_SOFT} w={1.6} dash="6 8" />
        <Arrow from={[456, 300]} to={[622, 292]} bend={-0.05} seed={6} c={INK_SOFT} w={1.6} dash="6 8" />
      </g>

      {TOOLS.map((_, i) => (
        <Tool key={i} i={i} />
      ))}

      <Hand x={130} y={300} size={30} anchor="middle" weight={700}>
        which one?
      </Hand>
      <Hand x={130} y={330} size={19} anchor="middle" c={INK_SOFT}>
        ask the question first
      </Hand>
      <Plant x={548} y={FLOOR} s={0.8} seed={7} />

      <Shadow x={400} y={FLOOR + 3} rx={42} ry={5} />
      <Place x={400} y={FLOOR} s={1.9}>
        <g className="s-dcm0-pip">
          <Pip mood="focused" arms="hold" tone="amber" look={0} seed={8}>
            <Clipboard x={-13} y={-29} w={26} h={25} seed={9} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
