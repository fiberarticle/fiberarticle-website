import {
  Anim,
  Arrow,
  Box,
  Calendar,
  Checklist,
  Cross,
  Desk,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  Oval,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Stamp,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Thought,
  Tick,
  TreasureMap,
  Type,
  handLine,
  handPoly,
  laptopScreen,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6, o }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} o={o} />
}

/* Two table legs under a desk top. */
function Legs({ x1, x2, top, floor, seed }) {
  return <Ink d={handLine(x1, top, x1 + 2, floor, seed, 0.4) + handLine(x2, top, x2 - 2, floor, seed + 1, 0.4)} w={3} c={TONES.brown.deep} />
}

/* A labelled box of the flow diagram, tinted in one tone. */
function FlowBox({ x, y, w, h, tone, seed, className, style, children }) {
  const t = TONES[tone]
  return (
    <g className={className} style={style}>
      <path d={`M${x} ${y}h${w}v${h}h${-w}Z`} fill={t.tint} />
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.4, closed: true })} c={t.deep} w={1.6} />
      {children}
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Chosen by me, or chosen by rules drawn up in advance.
   ------------------------------------------------------------------ */

const PICKED = [
  { x: 60, y: 70, pick: true },
  { x: 130, y: 52, pick: false },
  { x: 200, y: 84, pick: false },
  { x: 84, y: 150, pick: false },
  { x: 160, y: 136, pick: true },
  { x: 226, y: 170, pick: false },
  { x: 120, y: 214, pick: true },
]

const whatCss = `
.s-slr1-hand { animation: s-slr1-wander 6s ease-in-out infinite; }
.s-slr1-route { stroke-dashoffset: 0; animation: s-slr1-march 2s linear infinite; }
.s-slr1-guide .pip-arm-r { animation: s-slr1-point 3s ease-in-out infinite; }
@keyframes s-slr1-wander {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(90px, 60px); }
  66% { transform: translate(50px, 140px); }
}
@keyframes s-slr1-march {
  from { stroke-dashoffset: 24; }
  to { stroke-dashoffset: 0; }
}
@keyframes s-slr1-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

export function WhatScene() {
  return (
    <Scene
      w={800}
      h={380}
      top={20}
      css={whatCss}
      className="s-slr1"
      label="On the left, a magnifying glass wanders over scattered papers and picks three of them, labelled chosen by me; on the right, a paper character points at a map drawn in advance, labelled chosen by rules"
    >
      <Floor y={372} x1={30} x2={770} seed={101} />
      <Ink d={handLine(400, 40, 400, 360, 102, 1)} c={INK_SOFT} w={1.4} dash="6 8" />

      {PICKED.map((p, i) => (
        <g key={i}>
          <Sheet x={p.x} y={p.y} w={42} h={52} tone={p.pick ? 'amber' : 'paper'} lines={3} fold={10} seed={110 + i} sw={1.4} />
          {p.pick ? <Tick x={p.x + 22} y={p.y + 30} s={1.1} /> : null}
        </g>
      ))}
      <Place x={0} y={0}>
        <Anim className="s-slr1-hand">
          <Magnifier x={120} y={110} r={22} angle={45} tone="amber" seed={120} />
        </Anim>
      </Place>
      <Hand x={160} y={330} size={24} anchor="middle" weight={700}>
        chosen by me
      </Hand>

      <TreasureMap x={450} y={70} w={200} h={140} seed={130} />
      <Ink d={handLine(470, 250, 640, 250, 131, 0.6)} c={TONES.green.ink} w={2.4} dash="8 8" className="s-slr1-route" scale />
      <Hand x={560} y={290} size={20} anchor="middle" c={INK_SOFT}>
        drawn in advance
      </Hand>
      <Hand x={560} y={330} size={24} anchor="middle" weight={700}>
        chosen by rules
      </Hand>

      <Shadow x={720} y={374} rx={32} ry={4} />
      <Place x={720} y={372} s={1.5} flip>
        <g className="s-slr1-guide">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.4} seed={140} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. A vague worry becomes four boxes: P, I, C and O.
   ------------------------------------------------------------------ */

const PICO = [
  { letter: 'P', text: 'children 6 to 12', tone: 'amber' },
  { letter: 'I', text: 'lessons in school', tone: 'green' },
  { letter: 'C', text: 'no lessons', tone: 'blue' },
  { letter: 'O', text: 'plaque', tone: 'pink' },
]

const picoCss = `
.s-slr2-note { animation: s-slr2-pop 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 8s); }
.s-slr2-zoya .pip-body { animation: s-slr2-sway 4s ease-in-out infinite; }
@keyframes s-slr2-pop {
  0%, 30%, 100% { transform: translateY(0) rotate(0deg); }
  12% { transform: translateY(-10px) rotate(-2deg); }
}
@keyframes s-slr2-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function PicoScene() {
  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={picoCss}
      className="s-slr2"
      label="A paper character thinks is it useful, and an arrow turns the thought into four sticky notes: P children 6 to 12, I lessons in school, C no lessons, O plaque"
    >
      <Floor y={372} x1={30} x2={770} seed={201} />

      <Thought x={140} y={80} w={190} h={78} tx={130} ty={200} seed={202}>
        <Hand x={140} y={89} size={24} anchor="middle" weight={700}>
          is it useful?
        </Hand>
      </Thought>
      <Shadow x={120} y={374} rx={34} ry={4} />
      <Place x={120} y={372} s={1.6}>
        <g className="s-slr2-zoya">
          <Pip mood="worried" arms="think" tone="pink" glasses look={1.5} seed={210} />
        </g>
      </Place>

      <Arrow from={[250, 120]} to={[316, 150]} bend={-0.2} seed={220} c={INK_SOFT} w={1.8} />

      {PICO.map((p, i) => {
        const x = 330 + (i % 2) * 220
        const y = 50 + Math.floor(i / 2) * 150
        return (
          <Place key={p.letter} x={0} y={0}>
            <Anim className="s-slr2-note" origin={[x + 100, y + 60]} style={{ '--i': i }}>
              <Sticky x={x} y={y} w={200} h={120} tone={p.tone} lines={0} seed={230 + i} />
              <Hand x={x + 20} y={y + 52} size={44} weight={700}>
                {p.letter}
              </Hand>
              <Hand x={x + 20} y={y + 94} size={21} weight={700}>
                {p.text}
              </Hand>
            </Anim>
          </Place>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The protocol is dated and stamped before any search.
   ------------------------------------------------------------------ */

const protocolCss = `
.s-slr3-stamp { animation: s-slr3-press 5s ease-in-out infinite; }
.s-slr3-mark { animation: s-slr3-ink 5s ease-in-out infinite; }
.s-slr3-zoya .pip-arm-r { animation: s-slr3-wave 2.5s ease-in-out infinite; }
@keyframes s-slr3-press {
  0%, 30%, 100% { transform: translateY(-30px); }
  45%, 52% { transform: translateY(0); }
}
@keyframes s-slr3-ink {
  0%, 44% { opacity: 0.35; }
  50%, 92% { opacity: 1; }
  100% { opacity: 0.35; }
}
@keyframes s-slr3-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

export function ProtocolScene() {
  const sx = 290
  const sy = 40
  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={protocolCss}
      className="s-slr3"
      label="A protocol sheet listing question, criteria, search, screening and analysis is pressed with a rubber stamp that leaves the word registered, beside a calendar page, while a paper character waves"
    >
      <Floor y={372} x1={30} x2={770} seed={301} />
      <Sheet x={sx} y={sy} w={220} h={300} lines={0} fold={24} seed={302} sw={2} />
      <Hand x={sx + 100} y={sy + 46} size={26} anchor="middle" weight={700}>
        protocol
      </Hand>
      {['question', 'criteria', 'search', 'screening', 'analysis'].map((item, i) => (
        <g key={item}>
          <Tick x={sx + 34} y={sy + 74 + i * 34} s={0.9} />
          <Hand x={sx + 52} y={sy + 82 + i * 34} size={20}>
            {item}
          </Hand>
        </g>
      ))}

      <g className="s-slr3-mark">
        <StampMark x={sx + 150} y={sy + 270} w={120} h={40} text="REGISTERED" tone="green" rotate={-8} size={15} bg={PAPER} seed={310} />
      </g>
      <Place x={0} y={0}>
        <Anim className="s-slr3-stamp">
          <Stamp x={sx + 168} y={sy + 250} s={1} tone="green" seed={311} />
        </Anim>
      </Place>

      <Calendar x={580} y={70} w={96} h={104} day="1" month="JAN" tone="amber" seed={320} />
      <Hand x={628} y={204} size={20} anchor="middle" c={INK_SOFT}>
        before the search
      </Hand>

      <Shadow x={150} y={374} rx={34} ry={4} />
      <Place x={150} y={372} s={1.6}>
        <g className="s-slr3-zoya">
          <Pip mood="proud" arms="wave" tone="pink" glasses seed={330} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Many databases, one question, and a log of every search.
   ------------------------------------------------------------------ */

const SOURCES = [
  { name: 'PubMed', tone: 'blue', x: 60, y: 50 },
  { name: 'Scopus', tone: 'amber', x: 60, y: 130 },
  { name: 'Cochrane', tone: 'green', x: 60, y: 210 },
  { name: 'Scholar', tone: 'pink', x: 600, y: 50 },
  { name: 'theses', tone: 'red', x: 600, y: 130 },
]

const searchCss = `
.s-slr4-arrow { stroke-dashoffset: 0; animation: s-slr4-flow 1.6s linear infinite; }
.s-slr4-row { animation: s-slr4-write 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 7s); transform-box: fill-box; transform-origin: left center; }
.s-slr4-zoya .pip-arm-r { animation: s-slr4-type 0.8s ease-in-out infinite; }
@keyframes s-slr4-flow {
  from { stroke-dashoffset: 20; }
  to { stroke-dashoffset: 0; }
}
@keyframes s-slr4-write {
  0%, 10% { transform: scaleX(0.15); }
  30%, 90% { transform: scaleX(1); }
  100% { transform: scaleX(0.15); }
}
@keyframes s-slr4-type {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

export function SearchScene() {
  const desk = 268
  const [lx, ly] = laptopScreen(400, desk, 200)
  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={searchCss}
      className="s-slr4"
      label="A paper character searches on a laptop while arrows bring results in from PubMed, Scopus, Cochrane, Scholar and theses, and a search log on the right fills with dated rows"
    >
      <Floor y={372} x1={30} x2={770} seed={401} />
      <Legs x1={290} x2={510} top={desk + 20} floor={372} seed={402} />
      <Desk y={desk} x1={270} x2={530} depth={20} seed={403} />
      <Laptop x={400} y={desk} w={200} seed={404}>
        <Type x={lx + 10} y={ly + 22} size={13} weight={700}>
          plaque AND
        </Type>
        <Type x={lx + 10} y={ly + 40} size={13} weight={700}>
          school AND
        </Type>
        <Type x={lx + 10} y={ly + 58} size={13} weight={700}>
          education
        </Type>
      </Laptop>

      {SOURCES.map((s, i) => {
        const left = s.x < 400
        return (
          <g key={s.name}>
            <Box x={s.x} y={s.y} w={130} h={50} r={8} fill={TONES[s.tone].tint} stroke={TONES[s.tone].deep} seed={410 + i} />
            <Hand x={s.x + 65} y={s.y + 33} size={22} anchor="middle" weight={700}>
              {s.name}
            </Hand>
            <Arrow
              from={[left ? s.x + 134 : s.x - 4, s.y + 25]}
              to={[left ? 316 : 484, 178]}
              bend={left ? 0.1 : -0.1}
              seed={420 + i}
              c={TONES[s.tone].ink}
              w={1.6}
              dash="5 5"
              className="s-slr4-arrow"
            />
          </g>
        )
      })}

      <Sheet x={612} y={206} w={150} h={150} lines={0} fold={18} seed={430} sw={1.7} />
      <Hand x={680} y={236} size={18} anchor="middle" weight={700}>
        search log
      </Hand>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} className="s-slr4-row" style={{ '--i': i }}>
          <Ink d={handLine(628, 260 + i * 22, 744, 260 + i * 22, 440 + i, 0.3)} c={TONES.blue.ink} w={1.6} />
        </g>
      ))}

      <Shadow x={190} y={374} rx={30} ry={4} />
      <Place x={190} y={372} s={1.4}>
        <g className="s-slr4-zoya">
          <Pip mood="focused" arms="point" tone="pink" glasses look={1.6} seed={450} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Two screeners decide apart, then compare.
   ------------------------------------------------------------------ */

const screenCss = `
.s-slr5-card { animation: s-slr5-sort 6s ease-in-out infinite; animation-delay: var(--d, 0s); }
.s-slr5-a .pip-body, .s-slr5-b .pip-body { animation: s-slr5-nod 3s ease-in-out infinite; }
.s-slr5-b .pip-body { animation-delay: -1.5s; }
@keyframes s-slr5-sort {
  0%, 20% { transform: translateY(0); }
  40%, 70% { transform: translateY(-8px); }
  90%, 100% { transform: translateY(0); }
}
@keyframes s-slr5-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

function Screener({ x, tone, seed, flip, className, marks }) {
  return (
    <g>
      <Shadow x={x} y={374} rx={30} ry={4} />
      <Place x={x} y={372} s={1.45} flip={flip}>
        <g className={className}>
          <Pip mood="focused" arms="hold" tone={tone} glasses look={1.2} seed={seed}>
            <Sheet x={-12} y={-30} w={24} h={26} lines={2} fold={6} seed={seed + 1} sw={1.2} />
          </Pip>
        </g>
      </Place>
      {marks.map((m, i) => {
        const cx = x - 60 + i * 60
        return (
          <g key={i} className="s-slr5-card" style={{ '--d': `${-i * 0.8}s` }}>
            <Sheet x={cx - 22} y={170} w={44} h={56} lines={2} fold={10} seed={seed + 10 + i} sw={1.4} />
            {m ? <Tick x={cx} y={206} s={1.1} /> : <Cross x={cx} y={206} s={0.9} seed={seed + 20 + i} />}
          </g>
        )
      })}
    </g>
  )
}

export function ScreenScene() {
  return (
    <Scene
      w={800}
      h={370}
      top={40}
      css={screenCss}
      className="s-slr5"
      label="Two paper screeners in glasses work on opposite sides of a dividing line, each marking the same three papers with ticks and crosses; their marks differ on one paper, and a speech bubble between them says let us discuss"
    >
      <Floor y={372} x1={30} x2={770} seed={501} />
      <Ink d={handLine(400, 150, 400, 372, 502, 1)} c={INK_SOFT} w={1.6} dash="6 8" />
      <Hand x={200} y={140} size={22} anchor="middle" weight={700}>
        Zoya, alone
      </Hand>
      <Hand x={600} y={140} size={22} anchor="middle" weight={700}>
        Amrita, alone
      </Hand>

      <Screener x={200} tone="pink" seed={510} className="s-slr5-a" marks={[true, false, true]} />
      <Screener x={600} tone="blue" seed={530} flip className="s-slr5-b" marks={[true, false, false]} />

      <Box x={330} y={60} w={140} h={50} r={10} fill={PAPER} seed={550} />
      <Hand x={400} y={92} size={20} anchor="middle" weight={700}>
        let us discuss
      </Hand>
      <Oval cx={260} cy={198} rx={34} ry={40} seed={551} sw={1.8} stroke={TONES.red.ink} />
      <Oval cx={660} cy={198} rx={34} ry={40} seed={552} sw={1.8} stroke={TONES.red.ink} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. One row per study, one coloured judgement per domain.
   ------------------------------------------------------------------ */

const STUDIES = [
  ['L', 'L', 'S', 'S', 'L'],
  ['S', 'L', 'L', 'H', 'L'],
  ['L', 'S', 'L', 'S', 'S'],
  ['H', 'S', 'S', 'H', 'L'],
  ['L', 'L', 'L', 'S', 'L'],
]
const JUDGE = {
  L: { fill: TONES.green.mid, label: '+' },
  S: { fill: TONES.amber.mid, label: '?' },
  H: { fill: TONES.red.mid, label: '!' },
}
const WORST = (row) => (row.includes('H') ? 'H' : row.includes('S') ? 'S' : 'L')

const biasCss = `
.s-slr6-lens { animation: s-slr6-scan 9s ease-in-out infinite; }
.s-slr6-row { animation: s-slr6-glow 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.6s - 9s); }
@keyframes s-slr6-scan {
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(0, 40px); }
  40% { transform: translate(0, 80px); }
  60% { transform: translate(0, 120px); }
  80% { transform: translate(0, 160px); }
}
@keyframes s-slr6-glow {
  0%, 18%, 100% { opacity: 0.35; }
  5%, 12% { opacity: 1; }
}
`

export function BiasScene() {
  const gx = 240
  const gy = 70
  const cw = 58
  const rh = 40
  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={biasCss}
      className="s-slr6"
      label="A risk of bias chart with five studies as rows and five domains as columns, each cell a green, amber or red dot, with an overall column on the right, while a magnifying glass moves down the rows and a paper character points at it"
    >
      <Floor y={372} x1={30} x2={770} seed={601} />
      <Box x={gx - 90} y={gy - 50} w={90 + cw * 6 + 30} h={rh * 5 + 80} r={6} fill={PAPER} seed={602} sw={1.8} />
      {['D1', 'D2', 'D3', 'D4', 'D5', 'all'].map((h, c) => (
        <Type key={h} x={gx + c * cw + cw / 2} y={gy - 14} size={16} anchor="middle" weight={700}>
          {h}
        </Type>
      ))}
      <Ink d={handLine(gx + cw * 5 + 2, gy - 34, gx + cw * 5 + 2, gy + rh * 5, 603, 0.4)} c={INK_SOFT} w={1.4} />
      {STUDIES.map((row, r) => {
        const cy = gy + r * rh + rh / 2
        const cells = [...row, WORST(row)]
        return (
          <g key={r}>
            <Hand x={gx - 16} y={cy + 7} size={18} anchor="end" weight={700}>
              {`study ${r + 1}`}
            </Hand>
            <g className="s-slr6-row" style={{ '--i': r }}>
              <path d={`M${gx - 4} ${cy - rh / 2 + 3}h${cw * 6 + 8}v${rh - 6}h${-(cw * 6 + 8)}Z`} fill={TONES.blue.tint} />
            </g>
            {cells.map((j, c) => (
              <g key={c}>
                <Oval cx={gx + c * cw + cw / 2} cy={cy} rx={c === 5 ? 15 : 13} fill={JUDGE[j].fill} seed={610 + r * 7 + c} sw={c === 5 ? 2 : 1.4} />
                <Type x={gx + c * cw + cw / 2} y={cy + 5} size={15} anchor="middle" weight={700}>
                  {JUDGE[j].label}
                </Type>
              </g>
            ))}
          </g>
        )
      })}
      <Hand x={gx + 3 * cw} y={gy + rh * 5 + 22} size={16} anchor="middle" c={INK_SOFT}>
        low, some concerns, high
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-slr6-lens">
          <Magnifier x={gx + cw * 6 + 54} y={gy + 20} r={20} angle={140} tone="amber" seed={650} />
        </Anim>
      </Place>

      <Shadow x={80} y={374} rx={30} ry={4} />
      <Place x={80} y={372} s={1.4}>
        <Pip mood="focused" arms="point" tone="pink" glasses look={1.6} seed={660} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The PRISMA flow diagram, every record accounted for.
   ------------------------------------------------------------------ */

const prismaCss = `
.s-slr7-step { animation: s-slr7-light 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 8s); }
.s-slr7-guide .pip-arm-r { animation: s-slr7-point 4s ease-in-out infinite; }
@keyframes s-slr7-light {
  0%, 25%, 100% { transform: translateX(0); }
  8%, 16% { transform: translateX(6px); }
}
@keyframes s-slr7-point {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(8deg); }
}
`

const MAIN = [
  { text: 'records found: 1,146', tone: 'blue' },
  { text: 'screened: 812', tone: 'amber' },
  { text: 'full texts: 51', tone: 'pink' },
  { text: 'included: 14', tone: 'green' },
]
const SIDE = [
  { text: 'duplicates: 334', row: 0 },
  { text: 'excluded: 761', row: 1 },
  { text: 'excluded, reasons: 37', row: 2 },
]

export function PrismaScene() {
  const mx = 170
  const bw = 230
  const bh = 52
  const gap = 34
  const sx = 470
  return (
    <Scene
      w={800}
      h={400}
      top={10}
      css={prismaCss}
      className="s-slr7"
      label="A PRISMA flow diagram: records found 1,146, screened 812, full texts 51 and included 14, with side boxes for 334 duplicates, 761 excluded and 37 excluded with reasons, while a paper character points at it"
    >
      <Floor y={402} x1={30} x2={770} seed={701} />
      {MAIN.map((m, i) => {
        const y = 24 + i * (bh + gap)
        return (
          <g key={m.text}>
            <FlowBox x={mx} y={y} w={bw} h={bh} tone={m.tone} seed={710 + i * 3} className="s-slr7-step" style={{ '--i': i }}>
              <Hand x={mx + bw / 2} y={y + 34} size={21} anchor="middle" weight={700}>
                {m.text}
              </Hand>
            </FlowBox>
            {i < MAIN.length - 1 ? <Arrow from={[mx + bw / 2, y + bh + 4]} to={[mx + bw / 2, y + bh + gap - 4]} bend={0} seed={730 + i} w={1.8} head={9} /> : null}
          </g>
        )
      })}
      {SIDE.map((s) => {
        const y = 24 + s.row * (bh + gap) + 30
        return (
          <g key={s.text}>
            <Arrow from={[mx + bw + 4, y + 10]} to={[sx - 6, y + 10]} bend={0} seed={740 + s.row} c={INK_SOFT} w={1.5} head={8} />
            <FlowBox x={sx} y={y - 12} w={210} h={44} tone="grey" seed={750 + s.row * 3}>
              <Hand x={sx + 105} y={y + 16} size={18} anchor="middle" weight={700}>
                {s.text}
              </Hand>
            </FlowBox>
          </g>
        )
      })}

      <Shadow x={90} y={404} rx={28} ry={4} />
      <Place x={90} y={402} s={1.35}>
        <g className="s-slr7-guide">
          <Pip mood="proud" arms="point" tone="pink" glasses seed={770} />
        </g>
      </Place>
    </Scene>
  )
}
