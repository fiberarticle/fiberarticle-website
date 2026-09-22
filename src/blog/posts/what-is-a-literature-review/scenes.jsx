import {
  Anim,
  Arrow,
  Book,
  Box,
  Envelope,
  Flag,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Pencil,
  Pile,
  Pip,
  Place,
  Scene,
  Sheet,
  Shadow,
  Sparkle,
  Spine,
  TONES,
  TreasureMap,
  curve,
  handLine,
  handPoly,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. A catalogue lists papers; a review connects them.
   ------------------------------------------------------------------ */

const LEFT_SHEETS = [70, 150, 230, 310]
const RIGHT_SHEETS = [
  [500, 70],
  [640, 60],
  [520, 200],
  [660, 196],
]
const TIES = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [1, 2],
]

const tiePath = ([a, b]) => {
  const [x1, y1] = RIGHT_SHEETS[a]
  const [x2, y2] = RIGHT_SHEETS[b]
  const p1 = [x1 + 30, y1 + 38]
  const p2 = [x2 + 30, y2 + 38]
  const mid = [(p1[0] + p2[0]) / 2 + 8, (p1[1] + p2[1]) / 2 - 10]
  return curve([p1, mid, p2])
}

const catalogueCss = `
${TIES.map(
  (_, i) => `.s-lr1-tie-${i} { animation: s-lr1-tie-${i} 8s ease-in-out infinite; }
@keyframes s-lr1-tie-${i} {
  0%, ${10 + i * 9}% { stroke-dashoffset: 1; }
  ${20 + i * 9}%, 88% { stroke-dashoffset: 0; }
  94%, 100% { stroke-dashoffset: 1; }
}`,
).join('\n')}
.s-lr1-yawn .pip-body { animation: s-lr1-sway 4s ease-in-out infinite; }
@keyframes s-lr1-sway { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-3deg); } }
`

export function CatalogueScene() {
  return (
    <Scene
      w={800}
      h={318}
      top={22}
      css={catalogueCss}
      className="s-lr1"
      label="On the left, four papers stand in a row like a catalogue. On the right, the same four papers are joined by threads into one connected review"
    >
      {LEFT_SHEETS.map((x, i) => (
        <g key={x}>
          <Sheet x={x} y={96} w={60} h={76} lines={4} seed={10 + i} tone={['blue', 'green', 'pink', 'amber'][i]} />
          <Hand x={x + 30} y={200} size={24} anchor="middle" weight={700}>
            {'ABCD'[i]}
          </Hand>
        </g>
      ))}
      <Hand x={200} y={62} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
        catalogue
      </Hand>
      <Ink d={handLine(56, 214, 384, 214, 20, 0.6)} w={1.5} c={INK_SOFT} />

      <Arrow from={[404, 150]} to={[468, 150]} bend={0} seed={21} c={INK_SOFT} head={10} />

      {TIES.map((tie, i) => (
        <Ink key={i} d={tiePath(tie)} c="#c9503a" w={2.2} scale pathLength="1" dash="1" className={`s-lr1-tie-${i}`} />
      ))}
      {RIGHT_SHEETS.map(([x, y], i) => (
        <Sheet key={x} x={x} y={y} w={60} h={76} lines={4} seed={10 + i} tone={['blue', 'green', 'pink', 'amber'][i]} />
      ))}
      {RIGHT_SHEETS.map(([x, y], i) => (
        <circle key={`k${x}`} cx={x + 30} cy={y + 38} r={4} fill="#c9503a" stroke={INK} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
      ))}
      <Hand x={612} y={318} size={24} anchor="middle" weight={700} c={TONES.green.deep}>
        review
      </Hand>

      <Floor y={290} x1={40} x2={390} seed={22} />
      <Place x={200} y={290} s={0.95}>
        <g className="s-lr1-yawn">
          <Pip mood="sleepy" arms="down" seed={23} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Why every thesis has one: a map, other people's flags, and a gap.
   ------------------------------------------------------------------ */

const MAP = { x: 170, y: 64, w: 420, h: 236 }
const FLAGS = [
  { x: 250, y: 150, tone: 'blue' },
  { x: 330, y: 250, tone: 'green' },
  { x: 440, y: 120, tone: 'pink' },
]
const GAP = [MAP.x + MAP.w * 0.8, MAP.y + MAP.h * 0.58]

const mapCss = `
.s-lr2-plant { animation: s-lr2-plant 8s ease-in infinite; }
.s-lr2-ring { animation: s-lr2-ring 8s ease-in-out infinite; }
@keyframes s-lr2-plant {
  0%, 20% { transform: translateY(-120px); opacity: 0; }
  24% { opacity: 1; }
  36%, 90% { transform: translateY(0); opacity: 1; }
  96%, 100% { transform: translateY(0); opacity: 0; }
}
@keyframes s-lr2-ring {
  0%, 36% { transform: scale(0.4); opacity: 0; }
  42% { transform: scale(1.3); opacity: 0.9; }
  56%, 100% { transform: scale(1.9); opacity: 0; }
}
`

export function MapScene() {
  return (
    <Scene
      w={800}
      h={296}
      top={30}
      css={mapCss}
      className="s-lr2"
      label="A treasure map of a research field with flags where others have already worked, and a paper character planting a new flag on the gap marked with an X"
    >
      <TreasureMap x={MAP.x} y={MAP.y} w={MAP.w} h={MAP.h} seed={30} />
      {FLAGS.map((flag, i) => (
        <Flag key={flag.x} x={flag.x} y={flag.y} h={50} tone={flag.tone} seed={31 + i} />
      ))}
      <Place x={GAP[0]} y={GAP[1]}>
        <Anim className="s-lr2-ring" spin style={{ opacity: 0 }}>
          <circle r={26} fill="none" stroke={TONES.amber.ink} strokeWidth={3} />
        </Anim>
      </Place>
      <Place x={GAP[0] - 4} y={GAP[1] - 6}>
        <Anim className="s-lr2-plant">
          <Flag x={0} y={0} h={70} tone="amber" seed={35} />
        </Anim>
      </Place>

      <Floor y={318} x1={600} x2={790} seed={36} />
      <Place x={690} y={318} s={1.7} flip>
        <Pip mood="grin" arms="point" seed={37} />
      </Place>
      <Hand x={96} y={132} size={22} anchor="middle" c={INK_SOFT} weight={700}>
        known
      </Hand>
      <Arrow from={[120, 140]} to={[228, 150]} bend={-0.15} seed={38} c={INK_SOFT} head={9} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Where literature reviews appear.
   ------------------------------------------------------------------ */

const PLACES = [
  { x: 150, label: 'thesis' },
  { x: 320, label: 'paper' },
  { x: 490, label: 'review article' },
  { x: 660, label: 'proposal' },
]

const placesCss = `
${PLACES.map(
  (_, i) => `.s-lr3-bob-${i} { animation: s-lr3-bob 8s ease-in-out infinite; animation-delay: ${-8 + i * 2}s; }`,
).join('\n')}
@keyframes s-lr3-bob {
  0%, 20%, 100% { transform: translateY(0); }
  6% { transform: translateY(-14px); }
  12% { transform: translateY(0); }
  16% { transform: translateY(-5px); }
}
`

export function PlacesScene() {
  return (
    <Scene
      w={800}
      h={250}
      top={50}
      css={placesCss}
      className="s-lr3"
      label="Four places a literature review appears, sitting on a shelf: a thick thesis, a journal paper, a review article and a research proposal in an envelope"
    >
      <rect x={60} y={232} width={680} height={12} fill="url(#wood)" />
      <Ink d={handPoly([[60, 232], [740, 232], [740, 244], [60, 244]], { seed: 40, amp: 0.5, closed: true })} w={1.8} />

      <Anim className="s-lr3-bob-0">
        <Spine x={128} y={232} w={20} h={130} tone="red" seed={41} />
        <Spine x={148} y={232} w={26} h={150} tone="blue" seed={42} />
      </Anim>
      <Anim className="s-lr3-bob-1">
        <Sheet x={290} y={132} w={62} h={100} lines={6} fold={14} seed={43} />
      </Anim>
      <Anim className="s-lr3-bob-2">
        <Book x={456} y={110} w={70} h={122} tone="green" seed={44} />
      </Anim>
      <Anim className="s-lr3-bob-3">
        <Envelope x={616} y={170} w={90} h={62} seed={45} tone="paper" />
      </Anim>

      {PLACES.map((place) => (
        <Hand key={place.label} x={place.x} y={274} size={21} anchor="middle" weight={700}>
          {place.label}
        </Hand>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Synthesis: single fibres twisted into one strong rope.
   ------------------------------------------------------------------ */

const FIBRE_SOURCES = [
  { y: 58, tone: 'blue' },
  { y: 132, tone: 'green' },
  { y: 206, tone: 'pink' },
]
const KNOT = [390, 240]

function braid(phase, tone) {
  const points = []
  for (let i = 0; i <= 26; i++) {
    const x = KNOT[0] + i * 10.8
    points.push([x, KNOT[1] + Math.sin((i / 26) * Math.PI * 6 + phase) * 7])
  }
  return <Ink d={curve(points)} c={TONES[tone].ink} w={4} scale />
}

const ropeCss = `
.s-lr4-flow { animation: s-lr4-flow 1.4s linear infinite; }
.s-lr4-pull .pip-body { animation: s-lr4-pull 3s ease-in-out infinite; }
@keyframes s-lr4-flow { to { stroke-dashoffset: -20; } }
@keyframes s-lr4-pull { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(6deg); } }
`

export function RopeScene() {
  return (
    <Scene
      w={800}
      h={300}
      top={20}
      css={ropeCss}
      className="s-lr4"
      label="Threads run from three separate papers and twist together into one strong rope, which a paper character holds and pulls"
    >
      {FIBRE_SOURCES.map((src, i) => {
        const start = [150, src.y + 40]
        const mid = [(start[0] + KNOT[0]) / 2, (start[1] + KNOT[1]) / 2 + (i - 1) * 6]
        const d = curve([start, mid, KNOT])
        return (
          <g key={src.tone}>
            <Ink d={d} c={TONES[src.tone].ink} w={3} scale />
            <Ink d={d} c="#fffaf0" w={1} dash="4 6" scale className="s-lr4-flow" o={0.8} />
          </g>
        )
      })}
      {FIBRE_SOURCES.map((src, i) => (
        <Sheet key={src.y} x={90} y={src.y} w={62} h={78} lines={4} tone={src.tone} seed={50 + i} />
      ))}
      {braid(0, 'blue')}
      {braid((Math.PI * 2) / 3, 'green')}
      {braid((Math.PI * 4) / 3, 'pink')}
      <circle cx={KNOT[0]} cy={KNOT[1]} r={7} fill={TONES.amber.mid} stroke={INK} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />

      <Floor y={300} x1={560} x2={780} seed={60} />
      <Place x={690} y={300} s={1.9} flip>
        <g className="s-lr4-pull">
          <Pip mood="focused" arms="hold" seed={61} />
        </g>
      </Place>
      <Hand x={520} y={200} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        one argument
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. What a good review contains: five blocks, gaps on top.
   ------------------------------------------------------------------ */

const TOWER = [
  { label: 'scope', w: 210, tone: 'blue' },
  { label: 'themes', w: 186, tone: 'green' },
  { label: 'methods', w: 164, tone: 'amber' },
  { label: 'debates', w: 142, tone: 'pink' },
  { label: 'gaps', w: 120, tone: 'red' },
]
const TOWER_X = 360
const BLOCK_H = 40
const BASE_Y = 320

const towerCss = `
.s-lr5-top { animation: s-lr5-drop 8s ease-in infinite; }
.s-lr5-cheer .pip-body { animation: s-lr5-hop 8s ease-in-out infinite; }
@keyframes s-lr5-drop {
  0%, 12% { transform: translateY(-110px); opacity: 0; }
  16% { opacity: 1; }
  30% { transform: translateY(0); }
  33% { transform: translateY(-6px); }
  36%, 90% { transform: translateY(0); opacity: 1; }
  96%, 100% { transform: translateY(0); opacity: 0; }
}
@keyframes s-lr5-hop {
  0%, 36%, 100% { transform: translateY(0); }
  42% { transform: translateY(-9px); }
  48% { transform: translateY(0); }
}
`

export function TowerScene() {
  return (
    <Scene
      w={800}
      h={294}
      top={40}
      css={towerCss}
      className="s-lr5"
      label="Five blocks stacked into a tower, from scope at the bottom through themes, methods and debates to gaps on top, with a flag and a cheering paper character"
    >
      <Floor y={BASE_Y} x1={120} x2={720} seed={70} />
      {TOWER.map((block, i) => {
        const y = BASE_Y - BLOCK_H * (i + 1)
        const content = (
          <g>
            <Box x={TOWER_X - block.w / 2} y={y} w={block.w} h={BLOCK_H} r={3} fill={`url(#fill-${block.tone})`} seed={71 + i} />
            <Hand x={TOWER_X} y={y + 27} size={21} anchor="middle" weight={700}>
              {block.label}
            </Hand>
          </g>
        )
        return i === TOWER.length - 1 ? (
          <Anim key={block.label} className="s-lr5-top">
            {content}
            <Flag x={TOWER_X + 40} y={y} h={46} tone="amber" seed={80} />
          </Anim>
        ) : (
          <g key={block.label}>{content}</g>
        )
      })}
      <Shadow x={590} y={322} rx={44} ry={5} />
      <Place x={590} y={BASE_Y} s={1.8}>
        <g className="s-lr5-cheer">
          <Pip mood="grin" arms="up" seed={81} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   Common mistakes: four sticky notes, crossed out one by one.
   ------------------------------------------------------------------ */

const MISTAKES = [
  { x: 150, y: 50, label: 'one by one', tone: 'amber' },
  { x: 330, y: 44, label: 'no judgement', tone: 'pink' },
  { x: 160, y: 176, label: 'only old papers', tone: 'blue' },
  { x: 340, y: 170, label: 'no gap', tone: 'green' },
]

const mistakeCss = `
${MISTAKES.map((_, i) => {
  const on = 8 + i * 18
  return `.s-lr7-x-${i} { animation: s-lr7-x-${i} 9s ease-in-out infinite; }
@keyframes s-lr7-x-${i} {
  0%, ${on}% { transform: scale(0.3); opacity: 0; }
  ${on + 4}% { transform: scale(1.2); opacity: 1; }
  ${on + 7}%, 90% { transform: scale(1); opacity: 1; }
  96%, 100% { transform: scale(0.3); opacity: 0; }
}`
}).join('\n')}
.s-lr7 .pip-arm-r { animation: s-lr7-tap 2.25s ease-in-out infinite; }
@keyframes s-lr7-tap { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-8deg); } }
`

export function MistakesScene() {
  return (
    <Scene
      w={800}
      h={316}
      top={20}
      css={mistakeCss}
      className="s-lr7"
      label="Four sticky notes on a board name common mistakes, one by one, no judgement, only old papers and no gap, and each gets a red cross while a paper character points with a red pencil"
    >
      <rect x={120} y={30} width={420} height={280} rx={4} fill="url(#wood)" />
      <rect x={132} y={42} width={396} height={256} fill={TONES.brown.tint} />
      <Ink d={handPoly([[120, 30], [540, 30], [540, 310], [120, 310]], { seed: 100, amp: 0.6, closed: true })} w={1.9} />
      {MISTAKES.map((note, i) => (
        <g key={note.label}>
          <Place x={note.x} y={note.y} r={i % 2 ? 3 : -3}>
            <Box x={0} y={0} w={170} h={100} r={2} fill={TONES[note.tone].tint} seed={101 + i} sw={1.5} />
            <rect x={0} y={0} width={170} height={14} fill={TONES[note.tone].mid} opacity="0.55" />
            <Hand x={85} y={64} size={21} anchor="middle" weight={700}>
              {note.label}
            </Hand>
          </Place>
          <Place x={note.x + 85} y={note.y + 56}>
            <Anim className={`s-lr7-x-${i}`} spin>
              <Ink d={handLine(-44, -26, 44, 26, 110 + i, 0.6) + handLine(44, -26, -44, 26, 114 + i, 0.6)} c={TONES.red.ink} w={3.2} />
            </Anim>
          </Place>
        </g>
      ))}

      <Floor y={318} x1={560} x2={790} seed={120} />
      <Place x={650} y={318} s={1.9} flip>
        <Pip mood="focused" arms="point" seed={121}>
          <Pencil x={64} y={-49} length={34} angle={180} tone="red" seed={122} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. How many papers: a wobbly heap against a tidy, tied bundle.
   ------------------------------------------------------------------ */

const countCss = `
.s-lr6-wobble { animation: s-lr6-wobble 2.6s ease-in-out infinite; }
.s-lr6-star { animation: s-lr6-star 3s ease-in-out infinite; }
@keyframes s-lr6-wobble { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2.5deg); } }
@keyframes s-lr6-star { 0%, 100% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.2) rotate(20deg); } }
`

export function CountScene() {
  return (
    <Scene
      w={800}
      h={262}
      top={70}
      css={countCss}
      className="s-lr6"
      label="A tall wobbling heap of papers labelled more stands beside a smaller bundle tied with ribbon and marked with a star, labelled better"
    >
      <Floor y={300} x1={60} x2={740} seed={90} />
      <Anim className="s-lr6-wobble" origin={[230, 300]}>
        <Pile x={230} y={300} w={120} count={34} seed={91} />
      </Anim>
      <Hand x={230} y={330} size={22} anchor="middle" weight={700}>
        more
      </Hand>

      <Pile x={560} y={300} w={120} count={9} seed={92} />
      <path d="M538 300V255h8V300ZM578 300V255h8V300Z" fill={TONES.red.mid} />
      <Ink d="M538 300V255M546 255V300M578 300V255M586 255V300" w={1.2} />
      <Ink d="M562 250C548 236 536 244 548 252C554 256 560 254 562 250C564 254 570 256 576 252C588 244 576 236 562 250Z" fill={TONES.red.mid} w={1.4} />
      <Place x={610} y={230}>
        <Anim className="s-lr6-star" spin>
          <Sparkle x={0} y={0} s={14} />
        </Anim>
      </Place>
      <Hand x={560} y={330} size={22} anchor="middle" weight={700}>
        better
      </Hand>

      <Place x={400} y={300} s={1.5}>
        <Pip mood="happy" arms="shrug" seed={93} />
      </Place>
    </Scene>
  )
}
