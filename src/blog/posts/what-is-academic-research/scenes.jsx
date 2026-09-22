import {
  Anim,
  Box,
  Chart,
  Desk,
  Envelope,
  Flask,
  Floor,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  Motion,
  OpenBook,
  Oval,
  PAPER,
  Pip,
  Place,
  Scene,
  Sheet,
  TEXT_LINE,
  TONES,
  Thought,
  Tick,
  Tree,
  Type,
  Worm,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  polyPath,
  rng,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Research starts with a question: the hostel water cooler.
   ------------------------------------------------------------------ */

const coolerCss = `
.s-ar1-drop { animation: s-ar1-drip 2.4s ease-in infinite; }
.s-ar1-q { animation: s-ar1-wiggle 3s ease-in-out infinite; }
.s-ar1 .pip-body { animation: s-ar1-lean 6s ease-in-out infinite; }
@keyframes s-ar1-drip {
  0% { opacity: 0; transform: translateY(-4px); }
  15% { opacity: 1; transform: translateY(0); }
  70% { opacity: 1; transform: translateY(15px); }
  80% { opacity: 0; transform: translateY(17px); }
  81%, 100% { opacity: 0; transform: translateY(-4px); }
}
@keyframes s-ar1-wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(8deg); }
}
@keyframes s-ar1-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

/* A steel hostel water cooler with two taps. Anchor: bottom-left on the floor. */
function WaterCooler({ x, y, seed = 1 }) {
  const w = 150
  const h = 176
  const top = y - h
  const tap = (tx) => (
    <g key={tx}>
      <rect x={tx - 8} y={top + 84} width={16} height={11} rx={2} fill={TONES.grey.mid} />
      <Ink d={handPoly([[tx - 8, top + 84], [tx + 8, top + 84], [tx + 8, top + 95], [tx - 8, top + 95]], { seed: seed + tx, amp: 0.2, closed: true })} w={1.3} />
      <path d={`M${tx - 3} ${top + 95}h6v8h-6Z`} fill={TONES.grey.mid} />
      <Ink d={`M${tx - 3} ${top + 95}v8h6v-8`} w={1.2} />
    </g>
  )
  return (
    <g>
      <rect x={x} y={top} width={w} height={h} rx={6} fill={TONES.grey.tint} />
      <rect x={x + w * 0.62} y={top + 4} width={w * 0.34} height={h - 8} fill="url(#ink-hatch-light)" opacity="0.5" />
      <Ink d={handLine(x + 16, top + 14, x + 16, y - 14, seed, 0.3)} c="#ffffff" w={3.5} o={0.75} />
      <Box x={x + 32} y={top + 20} w={86} h={26} r={4} fill={TONES.blue.tint} seed={seed + 1} sw={1.3} />
      <Type x={x + 75} y={top + 38} size={14} anchor="middle" weight={700}>
        WATER
      </Type>
      {tap(x + 45)}
      {tap(x + 105)}
      <path d={`M${x + 22} ${top + 128}h${w - 44}v12h${-(w - 44)}Z`} fill={TONES.grey.mid} />
      <path d={`M${x + 30} ${top + 130}h44v6h-44Z`} fill="url(#fill-green)" />
      <Ink d={handPoly([[x + 22, top + 128], [x + w - 22, top + 128], [x + w - 22, top + 140], [x + 22, top + 140]], { seed: seed + 3, amp: 0.3, closed: true })} w={1.4} />
      <Ink d={handPoly([[x, top], [x + w, top], [x + w, y], [x, y]], { seed: seed + 4, amp: 0.6, closed: true })} w={1.9} />
    </g>
  )
}

export function QuestionScene() {
  return (
    <Scene w={800} h={280} top={60} css={coolerCss} className="s-ar1" label="A paper character studies the tap of a steel hostel water cooler through a magnifying glass, with a question mark in its thought bubble and a drop of water falling into a tray with a green film">
      <Floor y={320} x1={70} x2={730} seed={3} />
      <WaterCooler x={480} y={320} seed={11} />
      <Place x={525} y={252}>
        <Anim className="s-ar1-drop">
          <path d="M0 -8Q6.4 1.6 0 6.4Q-6.4 1.6 0 -8Z" fill={TONES.blue.mid} stroke={INK} strokeWidth={1.1} vectorEffect="non-scaling-stroke" />
        </Anim>
      </Place>

      <Thought x={222} y={104} w={118} h={72} tx={284} ty={172} seed={15}>
        <Place x={222} y={104}>
          <Anim className="s-ar1-q" spin>
            <Hand x={0} y={17} size={46} anchor="middle" weight={700} c={TONES.red.ink}>
              ?
            </Hand>
          </Anim>
        </Place>
      </Thought>

      <Place x={310} y={320} s={2.1}>
        <Pip mood="focused" arms="point" look={1.8} glasses seed={17}>
          <Magnifier x={62} y={-50} r={12} angle={180} seed={18} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. What makes research academic: one new brick on a wall of papers,
      checked by the bookworm.
   ------------------------------------------------------------------ */

const bricksCss = `
.s-ar2-new { animation: s-ar2-lay 11s ease-in-out infinite; }
.s-ar2-dust { animation: s-ar2-dust 11s ease-out infinite; }
.s-ar2-tick { animation: s-ar2-tick 11s ease-in-out infinite; }
.s-ar2-worm { animation: s-ar2-inspect 11s ease-in-out infinite; }
@keyframes s-ar2-lay {
  0%, 18% { transform: translateY(-64px) rotate(-6deg); opacity: 1; }
  32% { transform: translateY(0) rotate(0deg); }
  34% { transform: translateY(-4px) rotate(0deg); }
  36%, 86% { transform: translateY(0) rotate(0deg); opacity: 1; }
  90% { transform: translateY(0) rotate(0deg); opacity: 0; }
  91% { transform: translateY(-64px) rotate(-6deg); opacity: 0; }
  100% { transform: translateY(-64px) rotate(-6deg); opacity: 1; }
}
@keyframes s-ar2-dust {
  0%, 31% { opacity: 0; }
  33% { opacity: 1; }
  42%, 100% { opacity: 0; }
}
@keyframes s-ar2-tick {
  0%, 62% { opacity: 0; transform: scale(0.3); }
  67% { opacity: 1; transform: scale(1.2); }
  70%, 86% { opacity: 1; transform: scale(1); }
  90%, 100% { opacity: 0; transform: scale(0.3); }
}
@keyframes s-ar2-inspect {
  0%, 38% { transform: translateX(0) scaleX(1); }
  58% { transform: translateX(90px) scaleX(1); }
  64% { transform: translateX(90px) scaleX(-1); }
  94% { transform: translateX(0) scaleX(-1); }
  100% { transform: translateX(0) scaleX(1); }
}
`

const BRICK_H = 34
const WALL = [
  { y: 296, bricks: [[300, 80], [380, 80], [460, 80], [540, 80]] },
  { y: 262, bricks: [[300, 40], [340, 80], [420, 80], [500, 80], [580, 40]] },
  { y: 228, bricks: [[300, 80], [380, 80], [460, 80], [540, 80]] },
  { y: 194, bricks: [[300, 40], [340, 80], [500, 80], [580, 40]] },
]
const BRICK_TINTS = [PAPER, TONES.amber.tint, TONES.blue.tint, TONES.pink.tint, PAPER, TONES.grey.tint]

function PaperBrick({ x, y, w, fill, seed }) {
  const pts = [[x, y], [x + w, y], [x + w, y + BRICK_H], [x, y + BRICK_H]]
  const lines = w > 50
    ? handLine(x + 10, y + 12, x + w - 16, y + 12, seed + 1, 0.3) + handLine(x + 10, y + 22, x + w * 0.6, y + 22, seed + 2, 0.3)
    : handLine(x + 8, y + 17, x + w - 10, y + 17, seed + 1, 0.3)
  return (
    <g>
      <path d={polyPath(pts)} fill={fill} />
      <Ink d={lines} c={fill === PAPER || fill === TONES.grey.tint ? TEXT_LINE : INK_SOFT} w={1.3} o={0.7} />
      <Ink d={handPoly(pts, { seed, amp: 0.3, closed: true })} w={1.5} />
    </g>
  )
}

export function BricksScene() {
  let n = 0
  return (
    <Scene w={800} h={230} top={120} css={bricksCss} className="s-ar2" label="A paper character proudly points as a new green brick made of paper is laid on top of a wall of older papers, and a bookworm with a magnifying glass inspects it before a tick appears">
      <Floor y={330} x1={60} x2={740} seed={21} />
      {WALL.map((row) =>
        row.bricks.map(([bx, bw]) => {
          n += 1
          return <PaperBrick key={`${row.y}-${bx}`} x={bx} y={row.y} w={bw} fill={BRICK_TINTS[n % BRICK_TINTS.length]} seed={100 + n * 3} />
        }),
      )}

      <Anim className="s-ar2-new" origin={[460, 211]}>
        <path d={polyPath([[420, 194], [500, 194], [500, 228], [420, 228]])} fill="url(#fill-green)" />
        <Ink d={handLine(430, 206, 486, 206, 71, 0.3) + handLine(430, 216, 470, 216, 72, 0.3)} c={TONES.green.deep} w={1.3} o={0.7} />
        <Ink d={handPoly([[420, 194], [500, 194], [500, 228], [420, 228]], { seed: 73, amp: 0.3, closed: true })} w={1.8} />
      </Anim>
      <g className="s-ar2-dust" style={{ opacity: 0 }}>
        <Motion x={414} y={226} angle={200} count={3} length={14} gap={6} seed={74} w={1.3} />
        <Motion x={506} y={226} angle={-20} count={3} length={14} gap={6} seed={75} w={1.3} />
      </g>
      <Place x={460} y={176}>
        <Anim className="s-ar2-tick" spin>
          <Tick x={0} y={0} s={1.4} />
        </Anim>
      </Place>

      <Place x={582} y={194} s={1.1} flip>
        <Anim className="s-ar2-worm">
          <Worm seed={81} />
          <Magnifier x={17} y={-13} r={6} angle={120} seed={82} />
        </Anim>
      </Place>

      <Place x={190} y={330} s={2.1}>
        <Pip mood="proud" arms="wave" seed={83} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The main types of research: cards sorted into three trays.
   ------------------------------------------------------------------ */

/* Each card rests in its tray (card centre at (c, 246)); its flight starts
   at Pip's throwing hand, (201, 161), relative to that resting centre. */
const TRAYS = [
  { c: 350, label: 'numbers', kind: 'numbers', start: [-149, -85], peak: [-75, -140], at: 6 },
  { c: 520, label: 'words', kind: 'words', start: [-319, -85], peak: [-160, -150], at: 30 },
  { c: 690, label: 'both', kind: 'both', start: [-489, -85], peak: [-245, -160], at: 54 },
]

const flyCss = TRAYS.map((tray, i) => {
  const [sx, sy] = tray.start
  const [px, py] = tray.peak
  const a = tray.at
  return `
.s-ar3-card-${i} { animation: s-ar3-fly-${i} 10s ease-in-out infinite; }
@keyframes s-ar3-fly-${i} {
  0%, ${a - 1}% { transform: translate(${sx}px, ${sy}px) rotate(-24deg); opacity: 0; }
  ${a}% { transform: translate(${sx}px, ${sy}px) rotate(-24deg); opacity: 1; }
  ${a + 7}% { transform: translate(${px}px, ${py}px) rotate(-10deg); }
  ${a + 15}%, 88% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  92% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  93%, 100% { transform: translate(${sx}px, ${sy}px) rotate(-24deg); opacity: 0; }
}`
}).join('\n')

const sortCss = `
${flyCss}
.s-ar3 .pip-arm-r { animation: s-ar3-throw 10s ease-in-out infinite; }
@keyframes s-ar3-throw {
  0%, 2%, 12%, 26%, 36%, 50%, 60%, 100% { transform: rotate(0deg); }
  4%, 28%, 52% { transform: rotate(-26deg); }
  7%, 31%, 55% { transform: rotate(16deg); }
}
`

/* The picture on each card, drawn across the card's middle (y 238 to 266). */
function CardMark({ kind, c }) {
  const bars = (dx0) => (
    <g>
      {[[-13, 14], [-4, 22], [5, 10]].map(([dx, bh], i) => (
        <rect key={i} x={c + dx0 + dx} y={266 - bh} width={7} height={bh} fill={`url(#fill-${i === 1 ? 'amber' : 'blue'})`} stroke={INK} strokeWidth={0.9} vectorEffect="non-scaling-stroke" />
      ))}
    </g>
  )
  const bubble = `M${c - 17} 240h30q4 0 4 4v11q0 4 -4 4h-21l-7 6v-6h-2q-4 0 -4 -4v-11q0 -4 4 -4Z`
  if (kind === 'numbers') return bars(0)
  if (kind === 'words') {
    return (
      <g>
        <path d={bubble} fill={TONES.pink.tint} />
        <Ink d={bubble} w={1.1} />
        <Ink d={`M${c - 13} 246h22M${c - 13} 252h15`} w={1} c={INK_SOFT} />
      </g>
    )
  }
  return (
    <g>
      {bars(-8)}
      <Ink d={`M${c + 5} 247h12M${c + 5} 253h9M${c + 5} 259h12`} w={1.1} c={INK_SOFT} />
    </g>
  )
}

export function SortingScene() {
  return (
    <Scene w={800} h={290} top={40} css={sortCss} className="s-ar3" label="A paper character tosses cards into three trays on a desk labelled numbers, words and both, one card at a time">
      <Desk y={300} depth={24} seed={31} />
      {TRAYS.map((tray, i) => {
        const c = tray.c
        const tray1 = [[c - 64, 270], [c + 64, 270], [c + 58, 300], [c - 58, 300]]
        return (
          <g key={tray.label}>
            <Hand x={c} y={200} size={24} anchor="middle" weight={700} c={INK_SOFT}>
              {tray.label}
            </Hand>
            <Anim className={`s-ar3-card-${i}`} origin={[c, 246]}>
              <g transform={`rotate(${(i - 1) * 4} ${c} 246)`}>
                <Sheet x={c - 28} y={212} w={56} h={68} lines={1} fold={10} seed={40 + i} sw={1.4} />
                <CardMark kind={tray.kind} c={c} />
              </g>
            </Anim>
            <path d={polyPath(tray1)} fill={TONES.brown.tint} />
            <path d={polyPath(tray1)} fill="url(#ink-hatch-light)" opacity="0.6" />
            <Ink d={handPoly(tray1, { seed: 50 + i, amp: 0.4, closed: true })} w={1.7} />
          </g>
        )
      })}
      <Place x={120} y={300} s={2.2}>
        <Pip mood="happy" arms="wave" look={1.5} seed={37} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The research cycle: six stations on a ring, a paper plane going round.
   ------------------------------------------------------------------ */

const C = [400, 210]
const R = 132
const STATIONS = [
  { a: -90, label: 'question', at: [400, 36], anchor: 'middle' },
  { a: -30, label: 'reading', at: [556, 150], anchor: 'start' },
  { a: 30, label: 'method', at: [556, 282], anchor: 'start' },
  { a: 90, label: 'data', at: [400, 402], anchor: 'middle' },
  { a: 150, label: 'writing', at: [244, 282], anchor: 'end' },
  { a: 210, label: 'sharing', at: [244, 150], anchor: 'end' },
]
const onRing = (deg, r = R) => {
  const a = (deg * Math.PI) / 180
  return [C[0] + Math.cos(a) * r, C[1] + Math.sin(a) * r]
}

const cycleCss = `
.s-ar4-orbit { animation: s-ar4-orbit 24s linear infinite; }
.s-ar4-badge { animation: s-ar4-pulse 24s ease-in-out infinite; }
@keyframes s-ar4-orbit { to { transform: rotate(360deg); } }
@keyframes s-ar4-pulse {
  0% { transform: scale(1); }
  3% { transform: scale(1.2); }
  8%, 100% { transform: scale(1); }
}
`

function StationIcon({ index, x, y }) {
  switch (index) {
    case 0:
      return (
        <Hand x={x} y={y + 13} size={36} anchor="middle" weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      )
    case 1:
      return <OpenBook x={x} y={y + 10} w={40} tone="red" lines={2} seed={61} />
    case 2:
      return <Flask x={x} y={y + 18} s={0.55} tone="blue" seed={62} />
    case 3:
      return <Chart x={x - 19} y={y + 14} w={38} h={30} bars={[0.4, 0.8, 0.6]} tone="green" seed={63} />
    case 4:
      return <Sheet x={x - 12} y={y - 16} w={24} h={31} lines={3} fold={6} seed={64} sw={1.3} />
    default:
      return <Envelope x={x - 18} y={y - 11} w={36} h={24} seed={65} />
  }
}

function Chevron({ deg, seed }) {
  const [px, py] = onRing(deg)
  const a = (deg * Math.PI) / 180
  const t = [-Math.sin(a), Math.cos(a)]
  const nrm = [Math.cos(a), Math.sin(a)]
  const tip = [px + t[0] * 6, py + t[1] * 6]
  const back = [px - t[0] * 5, py - t[1] * 5]
  const d =
    handLine(back[0] + nrm[0] * 6, back[1] + nrm[1] * 6, tip[0], tip[1], seed, 0.2) +
    handLine(back[0] - nrm[0] * 6, back[1] - nrm[1] * 6, tip[0], tip[1], seed + 1, 0.2)
  return <Ink d={d} w={1.8} c={INK_SOFT} />
}

function PaperPlane() {
  const body = [[16, 0], [-12, -9], [-6, 0], [-12, 8]]
  return (
    <g>
      <path d={polyPath(body)} fill={PAPER} />
      <path d={polyPath([[16, 0], [-6, 0], [-12, 8]])} fill={TONES.blue.tint} />
      <Ink d={handPoly(body, { seed: 66, amp: 0.2, closed: true })} w={1.4} />
      <Ink d="M16 0L-6 0" w={1.1} />
    </g>
  )
}

export function CycleScene() {
  return (
    <Scene w={800} h={404} top={6} css={cycleCss} className="s-ar4" label="A circle of six stations, question, reading, method, data, writing and sharing, with a paper plane flying round it and a paper character thinking in the middle">
      <Ink d={handEllipse(C[0], C[1], R, R, { seed: 60, amp: 0.5, overlap: 0.04 })} w={1.8} c={INK_SOFT} />
      {[-60, 0, 60, 120, 180, 240].map((deg, i) => (
        <Chevron key={deg} deg={deg} seed={70 + i * 2} />
      ))}

      <Place x={400} y={262} s={1.5}>
        <Pip mood="focused" arms="think" seed={67} />
      </Place>

      {STATIONS.map((station, i) => {
        const [x, y] = onRing(station.a)
        return (
          <g key={station.label}>
            <Anim className="s-ar4-badge" spin style={{ animationDelay: `${i * 4}s` }}>
              <Oval cx={x} cy={y} rx={30} fill={PAPER} seed={80 + i} sw={1.8} />
              <StationIcon index={i} x={x} y={y} />
            </Anim>
            <Hand x={station.at[0]} y={station.at[1]} size={22} anchor={station.anchor} weight={700} c={INK_SOFT}>
              {station.label}
            </Hand>
          </g>
        )
      })}

      {/* The plane starts between "question" and "reading" so the still
          picture never hides a station, facing along the ring. */}
      <Anim className="s-ar4-orbit" origin={C}>
        <Place x={onRing(-60)[0]} y={onRing(-60)[1]} s={1.4} r={30}>
          <PaperPlane />
        </Place>
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. What research is not: cherry-picking only the fruit that agrees.
   ------------------------------------------------------------------ */

const cherryCss = `
.s-ar5-picked { animation: s-ar5-pick 10s ease-in-out infinite; }
.s-ar5-drop { animation: s-ar5-fall 10s ease-in infinite; }
.s-ar5 .pip-arm-r { animation: s-ar5-reach 10s ease-in-out infinite; }
@keyframes s-ar5-pick {
  0%, 16% { transform: translate(204px, -90px); opacity: 1; }
  30% { transform: translate(102px, -150px); }
  42%, 86% { transform: translate(0, 0); opacity: 1; }
  90% { transform: translate(0, 0); opacity: 0; }
  91% { transform: translate(204px, -90px); opacity: 0; }
  100% { transform: translate(204px, -90px); opacity: 1; }
}
@keyframes s-ar5-fall {
  0%, 50% { transform: translateY(-142px); opacity: 1; }
  58% { transform: translateY(0); }
  61% { transform: translateY(-7px); }
  64%, 86% { transform: translateY(0); opacity: 1; }
  90% { transform: translateY(0); opacity: 0; }
  91% { transform: translateY(-142px); opacity: 0; }
  100% { transform: translateY(-142px); opacity: 1; }
}
@keyframes s-ar5-reach {
  0%, 8%, 26%, 100% { transform: rotate(0deg); }
  14%, 18% { transform: rotate(-14deg); }
}
`

function Fruit({ x, y, tone, seed }) {
  return (
    <g>
      <Ink d={`M${x} ${y - 8}q1 -5 4 -7`} w={1.2} c={TONES.green.deep} />
      <Oval cx={x} cy={y} rx={9} fill={`url(#fill-${tone})`} seed={seed} sw={1.4} />
      <circle cx={x - 3} cy={y - 3} r={1.8} fill="#ffffff" opacity="0.8" />
    </g>
  )
}

export function CherryScene() {
  const greens = [[410, 110], [452, 82], [500, 120], [530, 96]]
  const reds = [[515, 165], [420, 142], [488, 72], [546, 140]]
  const basket = 'M191 266Q236 273 281 266L272 298Q236 304 200 298Z'
  return (
    <Scene w={800} h={300} top={40} css={cherryCss} className="s-ar5" label="A paper character picks only the green fruit off a tree into its basket while red fruit falls to the ground, ignored">
      <Ground y={300} bottom={340} seed={41} tufts={9} pebbles={2} grit={16} />
      <Tree x={470} y={300} s={2.1} seed={42} />
      {greens.map(([x, y], i) => (
        <Fruit key={`g${i}`} x={x} y={y} tone="green" seed={43 + i} />
      ))}
      {reds.map(([x, y], i) => (
        <Fruit key={`r${i}`} x={x} y={y} tone="red" seed={48 + i} />
      ))}

      <Fruit x={604} y={292} tone="red" seed={53} />
      <Fruit x={632} y={293} tone="red" seed={54} />
      <Place x={492} y={292}>
        <Anim className="s-ar5-drop">
          <Fruit x={0} y={0} tone="red" seed={55} />
        </Anim>
      </Place>
      <Hand x={660} y={246} size={22} weight={700} c={INK_SOFT}>
        ignored
      </Hand>
      <Ink d="M662 252Q640 262 626 280" w={1.4} c={INK_SOFT} dash="3 5" />

      <Fruit x={214} y={262} tone="green" seed={56} />
      <Fruit x={258} y={263} tone="green" seed={57} />
      <Place x={236} y={250}>
        <Anim className="s-ar5-picked">
          <Fruit x={0} y={0} tone="green" seed={58} />
        </Anim>
      </Place>
      <path d={basket} fill={TONES.brown.tint} />
      <path d={basket} fill="url(#ink-hatch)" opacity="0.5" />
      <path d={basket} fill="url(#ink-hatch-2)" opacity="0.5" />
      <Ink d={basket} w={1.7} />
      <Ink d="M198 267Q236 214 274 267" w={3} c={TONES.brown.deep} />

      <Place x={340} y={300} s={2}>
        <Pip mood="happy" arms="wave" look={1.5} seed={59} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. A first small project: tap water and cooler water on two dishes.
   ------------------------------------------------------------------ */

const labCss = `
.s-ar6-colony { animation: s-ar6-grow 10s ease-out infinite; animation-delay: calc(var(--i) * -0.3s); }
.s-ar6 .pip-body { animation: s-ar6-start 10s ease-in-out infinite; }
@keyframes s-ar6-grow {
  0% { transform: scale(0); }
  12%, 82% { transform: scale(1); }
  92%, 100% { transform: scale(0); }
}
@keyframes s-ar6-start {
  0%, 44%, 100% { transform: translateY(0); }
  48% { transform: translateY(-9px); }
  52% { transform: translateY(0); }
}
`

function colonies(count, seed) {
  const r = rng(seed)
  const out = []
  while (out.length < count) {
    const dx = (r() - 0.5) * 104
    const dy = (r() - 0.5) * 26
    if ((dx * dx) / (52 * 52) + (dy * dy) / (13 * 13) <= 1) out.push([dx, dy, 2.6 + r() * 2.6])
  }
  return out
}

const TAP_DOTS = colonies(5, 7)
const COOLER_DOTS = colonies(22, 9)

function Dish({ x, y, dots, grow, seed }) {
  return (
    <g>
      <path d={ellipsePath(x, y + 10, 66, 18)} fill={TONES.grey.tint} />
      <path d={`M${x - 66} ${y}V${y + 10}A66 18 0 0 0 ${x + 66} ${y + 10}V${y}Z`} fill={TONES.grey.tint} />
      <path d={ellipsePath(x, y, 66, 18)} fill="#f3ead0" />
      {dots.map(([dx, dy, r], i) => (
        <g
          key={i}
          className={grow ? 's-ar6-colony' : undefined}
          style={grow ? { '--i': i, transformBox: 'fill-box', transformOrigin: 'center' } : undefined}
        >
          <circle cx={x + dx} cy={y + dy} r={r} fill="#e9c46a" stroke={INK} strokeWidth={0.9} vectorEffect="non-scaling-stroke" />
        </g>
      ))}
      <Ink d={handEllipse(x, y, 66, 18, { seed, amp: 0.4 })} w={1.6} />
      <Ink d={`M${x - 66} ${y}V${y + 10}M${x + 66} ${y}V${y + 10}M${x - 66} ${y + 10}A66 18 0 0 0 ${x + 66} ${y + 10}`} w={1.5} />
    </g>
  )
}

export function LabScene() {
  return (
    <Scene w={800} h={210} top={120} css={labCss} className="s-ar6" label="Two dishes on a lab bench, one labelled tap with a few bacterial colonies and one labelled cooler where many more colonies appear, while a surprised paper character points at them">
      <Desk y={300} depth={26} seed={51} />
      <Hand x={380} y={236} size={24} anchor="middle" weight={700} c={INK_SOFT}>
        tap
      </Hand>
      <Hand x={560} y={236} size={24} anchor="middle" weight={700} c={INK_SOFT}>
        cooler
      </Hand>
      <Dish x={380} y={272} dots={TAP_DOTS} seed={52} />
      <Dish x={560} y={272} dots={COOLER_DOTS} grow seed={53} />
      <OpenBook x={676} y={300} w={64} tone="green" lines={3} seed={54} />
      <Flask x={752} y={300} s={0.8} tone="blue" seed={55} />
      <Place x={190} y={300} s={2.4}>
        <Pip mood="surprised" arms="point" look={1.8} glasses seed={56} />
      </Place>
    </Scene>
  )
}
