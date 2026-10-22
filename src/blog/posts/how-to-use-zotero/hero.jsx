import {
  Anim,
  Arrow,
  Box,
  Crate,
  Desk,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  TONES,
  Window,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/**
 * Into the box, and out again. Nikhil sits at his laptop and papers fly
 * from the screen into a big library box with coloured folder tabs. On the
 * other side, numbered citations flow out of the box into the thesis lying
 * open on the desk.
 */

const FLOOR = 372
const DESK = 292

const css = `
.s-zot0-in { animation: s-zot0-in 6s ease-in-out infinite; animation-delay: var(--d, 0s); }
.s-zot0-out { animation: s-zot0-out 6s ease-in-out infinite; animation-delay: var(--d, 0s); }
.s-zot0-nikhil .pip-body { animation: s-zot0-bob 3s ease-in-out infinite; }
.s-zot0-tabs { animation: s-zot0-wiggle 6s ease-in-out infinite; }
@keyframes s-zot0-in {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
  45% { transform: translate(160px, -30px) rotate(14deg) scale(0.7); opacity: 1; }
  52% { transform: translate(170px, -6px) rotate(14deg) scale(0.6); opacity: 0; }
  53% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0; }
  70%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
}
@keyframes s-zot0-out {
  0% { transform: translate(0, 0); opacity: 1; }
  45% { transform: translate(150px, 70px); opacity: 1; }
  52% { transform: translate(160px, 80px); opacity: 0; }
  53% { transform: translate(0, 0); opacity: 0; }
  70%, 100% { transform: translate(0, 0); opacity: 1; }
}
@keyframes s-zot0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-zot0-wiggle {
  0%, 40%, 60%, 100% { transform: translateY(0); }
  48% { transform: translateY(-4px); }
}
`

const PAPERS = [
  { x: 196, y: 196, d: '0s', tone: 'paper' },
  { x: 214, y: 168, d: '-2s', tone: 'amber' },
  { x: 190, y: 140, d: '-4s', tone: 'blue' },
]

const CITES = [
  { x: 478, y: 154, label: '[1]', d: '0s' },
  { x: 490, y: 126, label: '[2]', d: '-2s' },
  { x: 470, y: 100, label: '[3]', d: '-4s' },
]

export default function Hero() {
  const [sx, sy, sw, sh] = laptopScreen(170, DESK, 150)
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-zot0"
      label="A paper character at a laptop saves papers that fly into a big library box with coloured folder tabs, while numbered citations flow out of the box into a thesis lying open on the desk"
    >
      <Window x={620} y={40} w={130} h={100} seed={11} />
      <Floor y={FLOOR} x1={20} x2={780} seed={12} />
      <Ink d={handLine(70, DESK + 20, 72, FLOOR, 13, 0.4) + handLine(740, DESK + 20, 738, FLOOR, 14, 0.4)} w={3} c={TONES.brown.deep} />
      <Desk y={DESK} x1={50} x2={760} depth={20} seed={15} />

      <Laptop x={170} y={DESK} w={150} seed={16} />
      <Hand x={sx + sw / 2} y={sy + sh / 2 + 6} size={16} anchor="middle" c={INK_SOFT}>
        paper
      </Hand>

      {/* The library box, with folder tabs peeping over its rim. */}
      <Place x={0} y={0}>
        <Anim className="s-zot0-tabs">
          {['blue', 'pink', 'green', 'amber'].map((tone, i) => (
            <Box key={tone} x={318 + i * 34} y={150} w={30} h={30} r={3} fill={`url(#fill-${tone})`} seed={20 + i} sw={1.4} />
          ))}
        </Anim>
      </Place>
      <Crate x={300} y={172} w={170} h={120} seed={25} />
      <Box x={330} y={214} w={110} h={34} r={4} fill={PAPER} seed={26} sw={1.5} />
      <Hand x={385} y={238} size={20} anchor="middle" weight={700}>
        my library
      </Hand>

      <Arrow from={[236, 150]} to={[318, 146]} bend={-0.2} seed={30} c={INK_SOFT} w={1.4} dash="5 6" />
      <Arrow from={[460, 140]} to={[600, 236]} bend={-0.2} seed={31} c={INK_SOFT} w={1.4} dash="5 6" />

      {PAPERS.map((paper, i) => (
        <Place key={i} x={paper.x} y={paper.y}>
          <Anim className="s-zot0-in" style={{ '--d': paper.d }}>
            <Sheet x={0} y={0} w={30} h={38} tone={paper.tone} lines={2} fold={8} seed={40 + i * 3} sw={1.3} />
          </Anim>
        </Place>
      ))}

      {/* The thesis, open on the desk. */}
      <Sheet x={560} y={196} w={84} h={96} lines={0} fold={14} seed={50} title />
      <Sheet x={646} y={196} w={84} h={96} lines={0} fold={14} seed={51} />
      <Ink d={[0, 1, 2, 3, 4].map((i) => handLine(572, 226 + i * 12, 572 + 50 - (i % 2) * 14, 226 + i * 12, 52 + i, 0.3)).join('')} c={TONES.grey.mid} w={1.5} />
      <Hand x={656} y={224} size={13} weight={700}>
        references
      </Hand>
      <Ink d={[0, 1, 2, 3].map((i) => handLine(658, 240 + i * 12, 718 - (i % 2) * 12, 240 + i * 12, 60 + i, 0.3)).join('')} c={TONES.blue.ink} w={1.5} />

      {CITES.map((cite, i) => (
        <Place key={cite.label} x={cite.x} y={cite.y}>
          <Anim className="s-zot0-out" style={{ '--d': cite.d }}>
            <Box x={0} y={0} w={34} h={24} r={4} fill={TONES.blue.tint} seed={70 + i} sw={1.3} />
            <Hand x={17} y={18} size={15} anchor="middle" weight={700}>
              {cite.label}
            </Hand>
          </Anim>
        </Place>
      ))}

      <Shadow x={100} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={96} y={FLOOR} s={1.6}>
        <g className="s-zot0-nikhil">
          <Pip mood="happy" arms="point" tone="amber" look={1.6} seed={80} />
        </g>
      </Place>
    </Scene>
  )
}
