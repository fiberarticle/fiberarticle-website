import {
  Anim,
  Box,
  Chai,
  Checklist,
  Crate,
  Desk,
  Floor,
  Grid,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scene,
  Sheet,
  StampMark,
  TONES,
  Wave,
  handEllipse,
  handLine,
  handPoly,
  wave,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   Step 1. Scope: a boundary drawn around the papers that belong.
   ------------------------------------------------------------------ */

const INSIDE = [
  [300, 110, -8, 'paper'],
  [370, 96, 6, 'green'],
  [440, 118, -4, 'paper'],
  [320, 186, 10, 'amber'],
  [396, 176, -6, 'paper'],
  [468, 196, 8, 'blue'],
  [360, 244, -3, 'paper'],
]
const OUTSIDE = [
  [90, 70, 12],
  [60, 172, 4],
  [124, 262, -10],
  [236, 306, 6],
  [612, 72, -12],
  [548, 306, -6],
  [706, 64, 9],
]

const scopeCss = `
.s-wl1-ring { animation: s-wl1-ring 9s ease-in-out infinite; }
.s-wl1-out { animation: s-wl1-out 9s ease-in-out infinite; }
@keyframes s-wl1-ring {
  0%, 8% { transform: scale(0.9); opacity: 0; }
  22%, 90% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0; }
}
@keyframes s-wl1-out {
  0%, 18% { opacity: 1; }
  34%, 90% { opacity: 0.32; }
  100% { opacity: 1; }
}
`

export function ScopeScene() {
  return (
    <Scene
      w={800}
      h={324}
      top={20}
      css={scopeCss}
      className="s-wl1"
      label="Papers are scattered across the page; a dashed boundary is drawn around the ones that belong in the review, and the papers outside it fade"
    >
      {OUTSIDE.map(([x, y, r], i) => (
        <g key={`o${i}`} className="s-wl1-out" style={{ opacity: 0.32 }}>
          <Place x={x} y={y} r={r}>
            <Sheet x={-22} y={-28} w={44} h={56} lines={3} fold={9} seed={10 + i} sw={1.4} />
          </Place>
        </g>
      ))}
      {INSIDE.map(([x, y, r, tone], i) => (
        <Place key={`i${i}`} x={x} y={y} r={r}>
          <Sheet x={-22} y={-28} w={44} h={56} lines={3} fold={9} tone={tone} seed={30 + i} sw={1.4} />
        </Place>
      ))}
      <Anim className="s-wl1-ring" origin={[384, 176]}>
        <Ink d={handEllipse(384, 176, 196, 116, { seed: 50, amp: 0.4, overlap: 0.04 })} c={TONES.red.ink} w={2.6} dash="10 8" />
      </Anim>
      <Hand x={384} y={48} size={26} anchor="middle" weight={700} c={TONES.red.deep}>
        in
      </Hand>
      <Hand x={680} y={150} size={26} anchor="middle" weight={700} c={INK_SOFT}>
        out
      </Hand>

      <Floor y={330} x1={640} x2={790} seed={51} />
      <Place x={726} y={330} s={1.6} flip>
        <Pip mood="focused" arms="point" seed={52}>
          <Pencil x={64} y={-49} length={34} angle={180} tone="red" seed={53} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   Step 2. Search: scooping papers out of the water with a net of
   keywords.
   ------------------------------------------------------------------ */

const WATER = 250
const HAND = [214, 176]
const RIM = [420, 198]
const FLOATING = [
  [470, 250, -10, 'blue'],
  [560, 254, 8, 'paper'],
  [650, 248, -6, 'pink'],
  [740, 252, 12, 'paper'],
]

const fishCss = `
.s-wl2-rod { animation: s-wl2-dip 8s ease-in-out infinite; }
.s-wl2-catch { animation: s-wl2-catch 8s ease-in-out infinite; }
.s-wl2-caught { animation: s-wl2-caught 8s ease-in-out infinite; }
.s-wl2-bob { animation: s-wl2-bob 3s ease-in-out infinite; }
@keyframes s-wl2-dip {
  0%, 12%, 100% { transform: rotate(0deg); }
  30%, 44% { transform: rotate(16deg); }
  62% { transform: rotate(-3deg); }
  70% { transform: rotate(0deg); }
}
@keyframes s-wl2-catch {
  0%, 20% { opacity: 1; }
  26%, 46% { opacity: 0; }
  56%, 100% { opacity: 1; }
}
@keyframes s-wl2-caught {
  0%, 34% { opacity: 1; }
  40%, 84% { opacity: 0; }
  96%, 100% { opacity: 1; }
}
@keyframes s-wl2-bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(4px) rotate(3deg); }
}
`

function Floater({ x, y, r, tone, i }) {
  return (
    <Place x={x} y={y}>
      <Anim className="s-wl2-bob" spin style={{ animationDelay: `${-i * 0.7}s` }}>
        <Place r={r}>
          <Sheet x={-20} y={-26} w={40} h={52} lines={3} fold={8} tone={tone} seed={60 + i} sw={1.4} />
        </Place>
      </Anim>
    </Place>
  )
}

export function FishingScene() {
  const bag = `M${RIM[0] - 25} ${RIM[1]}Q${RIM[0] - 19} ${RIM[1] + 38} ${RIM[0]} ${RIM[1] + 40}Q${RIM[0] + 19} ${RIM[1] + 38} ${RIM[0] + 25} ${RIM[1]}Z`
  return (
    <Scene
      w={800}
      h={300}
      top={40}
      css={fishCss}
      className="s-wl2"
      label="A paper character on a pier dips a net labelled keywords into the water and lifts it out holding papers, while more papers float nearby"
    >
      <g className="s-wl2-caught" style={{ opacity: 0 }}>
        <Floater x={404} y={252} r={-8} tone="amber" i={0} />
      </g>
      {FLOATING.map(([x, y, r, tone], i) => (
        <Floater key={x} x={x} y={y} r={r} tone={tone} i={i + 1} />
      ))}

      <Anim className="s-wl2-rod" origin={HAND}>
        <Ink d={handLine(HAND[0], HAND[1], RIM[0] - 24, RIM[1] - 1, 70, 0.3)} w={3} c={TONES.brown.deep} />
        <g className="s-wl2-catch">
          <Sheet x={RIM[0] - 18} y={RIM[1] + 4} w={20} h={24} lines={2} fold={5} seed={71} sw={1.2} />
          <Sheet x={RIM[0] - 1} y={RIM[1] + 8} w={20} h={24} lines={2} fold={5} tone="amber" seed={72} sw={1.2} />
        </g>
        <path d={bag} fill="none" stroke={INK} strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
        <Ink
          d={`M${RIM[0] - 17} ${RIM[1] + 6}Q${RIM[0] - 10} ${RIM[1] + 34} ${RIM[0]} ${RIM[1] + 38}M${RIM[0]} ${RIM[1] + 1}V${RIM[1] + 38}M${RIM[0] + 17} ${RIM[1] + 6}Q${RIM[0] + 12} ${RIM[1] + 34} ${RIM[0]} ${RIM[1] + 38}M${RIM[0] - 21} ${RIM[1] + 14}Q${RIM[0]} ${RIM[1] + 20} ${RIM[0] + 22} ${RIM[1] + 14}M${RIM[0] - 19} ${RIM[1] + 26}Q${RIM[0]} ${RIM[1] + 32} ${RIM[0] + 20} ${RIM[1] + 26}`}
          w={0.9}
          c={INK_SOFT}
        />
        <Ink d={handEllipse(RIM[0], RIM[1], 25, 7, { seed: 73, amp: 0.3 })} w={2} />
        <Ink d={handLine(318, 189, 318, 201, 74, 0.2)} w={1.1} c={INK_SOFT} />
        <Box x={272} y={201} w={92} h={28} r={4} fill={PAPER} seed={75} sw={1.4} />
        <Hand x={318} y={221} size={20} anchor="middle" weight={700}>
          keywords
        </Hand>
      </Anim>

      <rect x={0} y={WATER} width={800} height={110} fill={TONES.blue.tint} opacity="0.82" />
      <rect x={0} y={WATER} width={800} height={110} fill="url(#hatch-blue)" opacity="0.35" />
      <Wave x1={0} x2={800} y={WATER} amp={3} length={30} seed={65} c={TONES.blue.deep} w={1.6} />
      <Wave x1={30} x2={780} y={WATER + 34} amp={2} length={40} seed={66} c={TONES.blue.ink} w={1.2} o={0.6} />

      <Ink d={handLine(70, 236, 70, 340, 68, 0.3) + handLine(222, 236, 222, 340, 69, 0.3)} w={3} c={TONES.brown.deep} />
      <rect x={30} y={222} width={220} height={14} fill="url(#wood)" />
      <Ink d={handPoly([[30, 222], [250, 222], [250, 236], [30, 236]], { seed: 67, amp: 0.4, closed: true })} w={1.8} />

      <Place x={200} y={222} s={1.7}>
        <Pip mood="happy" arms="hold" look={1.5} seed={76} />
      </Place>
      <Anim className="s-wl2-rod" origin={HAND}>
        <Ink d={handLine(HAND[0], HAND[1], HAND[0] + 36, HAND[1] + 5, 77, 0.2)} w={3} c={TONES.brown.deep} />
        <Oval cx={HAND[0]} cy={HAND[1] + 1} rx={5} fill={PAPER} seed={78} sw={1.5} />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   Step 3. Screening: papers ride to a gate that keeps some and sets
   others aside.
   ------------------------------------------------------------------ */

const BELT = { x1: 60, x2: 404, y: 206 }
const RIDERS = [96, 172, 248, 324]

const screenCss = `
.s-wl3-ride { animation: s-wl3-ride 2s linear infinite; }
.s-wl3-ride-first { animation: s-wl3-ride 2s linear infinite, s-wl3-in 2s linear infinite; }
.s-wl3-ride-last { animation: s-wl3-ride 2s linear infinite, s-wl3-out 2s linear infinite; }
.s-wl3-keep { animation: s-wl3-keep 4s ease-in-out infinite; }
.s-wl3-aside { animation: s-wl3-aside 4s ease-in infinite; }
.s-wl3-flap { animation: s-wl3-flap 4s ease-in-out infinite; }
@keyframes s-wl3-ride { from { transform: translateX(0); } to { transform: translateX(76px); } }
@keyframes s-wl3-in { 0% { opacity: 0; } 35%, 100% { opacity: 1; } }
@keyframes s-wl3-out { 0%, 50% { opacity: 1; } 100% { opacity: 0; } }
@keyframes s-wl3-keep {
  0% { transform: translate(0, 0); opacity: 0; }
  6% { opacity: 1; }
  30% { transform: translate(130px, 64px); opacity: 1; }
  40%, 100% { transform: translate(130px, 64px); opacity: 0; }
}
@keyframes s-wl3-aside {
  0%, 50% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  56% { opacity: 1; }
  80% { transform: translate(-6px, 90px) rotate(-18deg); opacity: 1; }
  90%, 100% { transform: translate(-6px, 90px) rotate(-18deg); opacity: 0; }
}
@keyframes s-wl3-flap {
  0%, 46%, 100% { transform: rotate(0deg); }
  54%, 80% { transform: rotate(40deg); }
}
`

export function ScreenScene() {
  const rollers = []
  for (let x = BELT.x1; x <= BELT.x2; x += 43) rollers.push(x)
  const outline = `M${BELT.x1} ${BELT.y - 6}H${BELT.x2}A8 8 0 0 1 ${BELT.x2} ${BELT.y + 10}H${BELT.x1}A8 8 0 0 1 ${BELT.x1} ${BELT.y - 6}Z`
  return (
    <Scene
      w={800}
      h={216}
      top={128}
      css={screenCss}
      className="s-wl3"
      label="Papers ride a conveyor belt to a gate; one slides on into a box marked keep, the next drops into a box marked set aside, watched by a paper character holding a list of rules"
    >
      <Floor y={336} x1={30} x2={780} seed={80} />
      <Ink d={handLine(100, BELT.y + 10, 96, 336, 88, 0.3) + handLine(296, BELT.y + 10, 300, 336, 89, 0.3)} w={3} c={INK_SOFT} />

      {RIDERS.map((x, i) => (
        <Place key={x} x={x} y={BELT.y - 6}>
          <Anim className={i === 0 ? 's-wl3-ride-first' : i === RIDERS.length - 1 ? 's-wl3-ride-last' : 's-wl3-ride'}>
            <Sheet x={-16} y={-40} w={32} h={40} lines={3} fold={7} tone={['paper', 'green', 'paper', 'blue'][i]} seed={81 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Place x={BELT.x2} y={BELT.y - 6}>
        <Anim className="s-wl3-keep" style={{ opacity: 0 }}>
          <Sheet x={-16} y={-40} w={32} h={40} lines={3} fold={7} tone="green" seed={86} sw={1.3} />
        </Anim>
        <Anim className="s-wl3-aside" style={{ opacity: 0 }}>
          <Sheet x={-16} y={-40} w={32} h={40} lines={3} fold={7} tone="grey" seed={87} sw={1.3} />
        </Anim>
      </Place>

      <path d={outline} fill={TONES.grey.tint} />
      <Ink d={outline} w={1.8} />
      {rollers.map((x) => (
        <circle key={x} cx={x} cy={BELT.y + 2} r={4.5} fill={TONES.grey.mid} stroke={INK} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
      ))}

      <Anim className="s-wl3-flap" origin={[412, 206]}>
        <Ink d={handLine(412, 206, 452, 206, 90, 0.2)} w={3.4} c={TONES.brown.deep} />
      </Anim>

      <Crate x={462} y={228} w={150} h={108} label="keep" seed={91} />
      <Crate x={318} y={262} w={112} h={74} label="set aside" seed={92} />

      <Place x={712} y={336} s={1.8}>
        <Pip mood="focused" arms="hold" look={-1.8} seed={93}>
          <Sheet x={-15} y={-31} w={30} h={30} lines={0} fold={6} seed={94} sw={1.3} />
          <path d="M-9 -22l3 3l6 -7M-9 -11l3 3l6 -7" fill="none" stroke="#3f8f4f" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
          <Ink d="M3 -21h8M3 -10h8" w={1} c={INK_SOFT} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   Step 4. Extract: one row per paper, the same columns every time.
   ------------------------------------------------------------------ */

const MX = 230
const MY = 40
const CW = 90
const RH = 44
const HEADS = ['study', 'method', 'result', 'limits']

const matrixCells = [1, 2, 3, 4].flatMap((row) =>
  [0, 1, 2, 3].map((col) => ({
    key: `${row}-${col}`,
    d: wave(MX + col * CW + 14, MX + (col + 1) * CW - 14, MY + row * RH + RH / 2, { amp: 2, length: 8, seed: 100 + row * 5 + col }),
    start: 6 + (row - 1) * 20 + col * 4,
  })),
)

const matrixCss = matrixCells
  .map(
    (cell) => `.s-wl4-c-${cell.key} { animation: s-wl4-c-${cell.key} 10s linear infinite; }
@keyframes s-wl4-c-${cell.key} {
  0%, ${cell.start}% { stroke-dashoffset: 1; opacity: 1; }
  ${cell.start + 4}%, 90% { stroke-dashoffset: 0; opacity: 1; }
  95% { stroke-dashoffset: 0; opacity: 0; }
  96%, 100% { stroke-dashoffset: 1; opacity: 1; }
}`,
  )
  .join('\n')

export function MatrixScene() {
  return (
    <Scene
      w={800}
      h={290}
      top={24}
      css={matrixCss}
      className="s-wl4"
      label="A table with columns for study, method, result and limits fills in one row per paper, each paper drawn beside its row, while a paper character points with a pencil"
    >
      <Grid x={MX} y={MY} cols={4} rows={5} cw={CW} rh={RH} header="amber" seed={110} />
      {HEADS.map((head, i) => (
        <Hand key={head} x={MX + i * CW + CW / 2} y={MY + 29} size={20} anchor="middle" weight={700}>
          {head}
        </Hand>
      ))}
      {[1, 2, 3, 4].map((row) => (
        <Place key={row} x={MX - 36} y={MY + row * RH + RH / 2} r={row % 2 ? -6 : 5}>
          <Sheet x={-13} y={-17} w={26} h={34} lines={2} fold={6} tone={['blue', 'green', 'pink', 'amber'][row - 1]} seed={111 + row} sw={1.2} />
        </Place>
      ))}
      {matrixCells.map((cell) => (
        <Ink key={cell.key} d={cell.d} c={INK} w={1.7} scale pathLength="1" dash="1" className={`s-wl4-c-${cell.key}`} />
      ))}

      <Floor y={300} x1={620} x2={790} seed={120} />
      <Place x={700} y={300} s={1.8} flip>
        <Pip mood="happy" arms="point" seed={121}>
          <Pencil x={64} y={-49} length={34} angle={180} tone="amber" seed={122} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   Step 5. Themes: scattered notes gather into groups with names.
   ------------------------------------------------------------------ */

const NOTES = [
  { home: [104, 64], away: [360, 160], tone: 'amber' },
  { home: [168, 76], away: [116, 196], tone: 'amber' },
  { home: [132, 138], away: [470, 60], tone: 'amber' },
  { home: [256, 62], away: [210, 150], tone: 'blue' },
  { home: [320, 72], away: [96, 78], tone: 'blue' },
  { home: [286, 136], away: [430, 180], tone: 'blue' },
  { home: [408, 64], away: [280, 64], tone: 'green' },
  { home: [472, 78], away: [168, 58], tone: 'green' },
  { home: [440, 140], away: [320, 196], tone: 'green' },
]
const GROUPS = [
  { x: 166, label: 'early strength' },
  { x: 316, label: 'long-term' },
  { x: 466, label: 'durability' },
]

const themeCss = `
${NOTES.map(({ home, away }, i) => {
  const dx = away[0] - home[0]
  const dy = away[1] - home[1]
  return `.s-wl5-n-${i} { animation: s-wl5-n-${i} 10s ease-in-out infinite; }
@keyframes s-wl5-n-${i} {
  0%, 8% { transform: translate(0, 0); }
  18%, 40% { transform: translate(${dx}px, ${dy}px); }
  56%, 100% { transform: translate(0, 0); }
}`
}).join('\n')}
.s-wl5-label { animation: s-wl5-label 10s ease-in-out infinite; }
@keyframes s-wl5-label {
  0%, 8% { opacity: 1; }
  12%, 54% { opacity: 0; }
  62%, 100% { opacity: 1; }
}
`

export function ThemesScene() {
  return (
    <Scene
      w={800}
      h={310}
      top={16}
      css={themeCss}
      className="s-wl5"
      label="Nine sticky notes scattered on a board gather into three coloured groups named early strength, long-term and durability, while a paper character thinks it over"
    >
      <rect x={50} y={24} width={530} height={272} rx={4} fill="url(#wood)" />
      <rect x={62} y={36} width={506} height={248} fill={TONES.brown.tint} />
      <Ink d={handPoly([[50, 24], [580, 24], [580, 296], [50, 296]], { seed: 130, amp: 0.6, closed: true })} w={1.9} />

      {NOTES.map((note, i) => (
        <Place key={i} x={note.home[0]} y={note.home[1]}>
          <Anim className={`s-wl5-n-${i}`}>
            <Place r={i % 2 ? 4 : -3}>
              <Box x={0} y={0} w={58} h={50} r={2} fill={TONES[note.tone].tint} seed={131 + i} sw={1.4} />
              <rect x={0} y={0} width={58} height={10} fill={TONES[note.tone].mid} opacity="0.55" />
              <Ink d={handLine(9, 26, 46, 26, 140 + i, 0.3) + handLine(9, 36, 38, 36, 150 + i, 0.3)} c={TONES[note.tone].deep} w={1.3} o={0.7} />
            </Place>
          </Anim>
        </Place>
      ))}
      <g className="s-wl5-label">
        {GROUPS.map((group) => (
          <Hand key={group.label} x={group.x} y={250} size={20} anchor="middle" weight={700}>
            {group.label}
          </Hand>
        ))}
      </g>

      <Floor y={316} x1={600} x2={790} seed={160} />
      <Place x={690} y={316} s={1.9}>
        <Pip mood="focused" arms="think" look={-2} seed={161} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   Step 6. Synthesis: an argument built plank by plank, with one plank
   left for the gap.
   ------------------------------------------------------------------ */

const DECK = { x: 220, y: 196, n: 12, pw: 30, gap: 9 }
const DECK_W = DECK.n * DECK.pw
const PLANKS = Array.from({ length: DECK.n }, (_, i) => i).filter((i) => i !== DECK.gap)

const bridgeCss = `
${PLANKS.map((i, k) => {
  const at = 4 + k * 6
  return `.s-wl6-p-${i} { animation: s-wl6-p-${i} 11s ease-out infinite; }
@keyframes s-wl6-p-${i} {
  0%, ${at}% { transform: translateY(-36px); opacity: 0; }
  ${at + 4}%, 88% { transform: translateY(0); opacity: 1; }
  94%, 100% { transform: translateY(0); opacity: 0; }
}`
}).join('\n')}
.s-wl6-q { animation: s-wl6-q 2.4s ease-in-out infinite; }
@keyframes s-wl6-q {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.18); }
}
`

export function BridgeScene() {
  const gapX = DECK.x + DECK.gap * DECK.pw + DECK.pw / 2
  return (
    <Scene
      w={800}
      h={270}
      top={50}
      css={bridgeCss}
      className="s-wl6"
      label="A bridge across a gap is built one plank at a time while a paper character carries another plank; one plank near the far side stays missing, marked with a question mark"
    >
      <rect x={220} y={200} width={360} height={120} fill="url(#ink-hatch-light)" opacity="0.6" />
      <Ground y={200} x1={0} x2={224} bottom={320} seed={170} tufts={4} pebbles={2} grit={14} />
      <Ground y={200} x1={576} x2={800} bottom={320} seed={171} tufts={4} pebbles={2} grit={14} />

      <Ink d={`M${DECK.x - 6} ${DECK.y - 30}Q${DECK.x + DECK_W / 2} ${DECK.y + 4} ${DECK.x + DECK_W + 6} ${DECK.y - 30}`} w={1.6} c={INK_SOFT} />
      <Ink d={handLine(DECK.x - 6, DECK.y - 36, DECK.x - 6, DECK.y + 12, 172, 0.4) + handLine(DECK.x + DECK_W + 6, DECK.y - 36, DECK.x + DECK_W + 6, DECK.y + 12, 173, 0.4)} w={3} />
      {PLANKS.map((i) => {
        const px = DECK.x + i * DECK.pw + 2
        return (
          <g key={i} className={`s-wl6-p-${i}`}>
            <rect x={px} y={DECK.y} width={DECK.pw - 4} height="10" fill="url(#wood)" />
            <Ink d={handPoly([[px, DECK.y], [px + DECK.pw - 4, DECK.y], [px + DECK.pw - 4, DECK.y + 10], [px, DECK.y + 10]], { seed: 174 + i, amp: 0.3, closed: true })} w={1.4} />
          </g>
        )
      })}
      <Place x={gapX} y={170}>
        <Anim className="s-wl6-q" spin>
          <Hand x={0} y={10} size={36} anchor="middle" weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Place x={120} y={200} s={1.6}>
        <Pip mood="focused" arms="carry" seed={190}>
          <rect x={-30} y={-80} width={60} height={9} fill="url(#wood)" />
          <Ink d={handPoly([[-30, -80], [30, -80], [30, -71], [-30, -71]], { seed: 191, amp: 0.2, closed: true })} w={1.3} />
        </Pip>
      </Place>
      <Place x={690} y={200} s={1.3}>
        <Pip mood="happy" arms="wave" tone="green" seed={192} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   Step 7. Revise, cite and check, then stamp it ready.
   ------------------------------------------------------------------ */

const MARKS = [
  { d: handEllipse(360, 148, 50, 9, { seed: 201, amp: 0.5 }), at: 4 },
  { d: 'M300 186q7 4 0 8t0 8t0 8', at: 14 },
  { d: handLine(330, 228, 446, 226, 202, 0.4), at: 24 },
]
const TICKS = [36, 44, 52, 60]

const reviseCss = `
${MARKS.map(
  ({ at }, i) => `.s-wl7-m-${i} { animation: s-wl7-m-${i} 10s ease-in-out infinite; }
@keyframes s-wl7-m-${i} {
  0%, ${at}% { stroke-dashoffset: 1; }
  ${at + 7}%, 92% { stroke-dashoffset: 0; opacity: 1; }
  97% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}`,
).join('\n')}
${TICKS.map(
  (at, i) => `.s-wl7 .check-row:nth-last-child(${TICKS.length - i}) .check-tick { animation: s-wl7-t-${i} 10s ease-in-out infinite; }
@keyframes s-wl7-t-${i} {
  0%, ${at}% { stroke-dashoffset: 1; }
  ${at + 5}%, 92% { stroke-dashoffset: 0; }
  97%, 100% { stroke-dashoffset: 1; }
}`,
).join('\n')}
.s-wl7-stamp { animation: s-wl7-stamp 10s ease-in-out infinite; }
@keyframes s-wl7-stamp {
  0%, 70% { transform: scale(1.8); opacity: 0; }
  75% { transform: scale(0.94); opacity: 1; }
  78%, 92% { transform: scale(1); opacity: 1; }
  97%, 100% { transform: scale(1); opacity: 0; }
}
.s-wl7 .pip-arm-r, .s-wl7-tool { animation: s-wl7-mark 0.7s ease-in-out infinite alternate; }
@keyframes s-wl7-mark { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }
`

export function ReviseScene() {
  return (
    <Scene
      w={800}
      h={284}
      top={40}
      css={reviseCss}
      className="s-wl7"
      label="A paper character marks up a draft with a red pencil, the boxes on a checklist tick one by one, and the draft is stamped ready"
    >
      <Desk y={320} depth={24} seed={180} />
      <Sheet x={292} y={86} w={180} h={230} lines={16} fold={22} seed={181} />
      {MARKS.map(({ d }, i) => (
        <Ink key={i} d={d} c={TONES.red.ink} w={1.9} scale pathLength="1" dash="1" className={`s-wl7-m-${i}`} />
      ))}
      <Place x={412} y={282}>
        <Anim className="s-wl7-stamp" spin>
          <StampMark x={0} y={0} w={112} h={38} text="READY" tone="green" rotate={-10} size={20} seed={184} />
        </Anim>
      </Place>

      <Place x={236} y={320} s={1.9}>
        <Pip mood="focused" arms="point" glasses seed={185}>
          <Anim className="s-wl7-tool" origin={[22, -41]}>
            <Pencil x={64} y={-49} length={34} angle={180} tone="red" seed={186} />
          </Anim>
        </Pip>
      </Place>

      <Checklist x={556} y={80} w={160} items={4} done={4} seed={187} />
      <Chai x={748} y={320} s={1.1} seed={188} />
    </Scene>
  )
}
