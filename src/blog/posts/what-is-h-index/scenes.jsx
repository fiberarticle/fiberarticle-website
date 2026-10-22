import {
  Anim,
  Arrow,
  Book,
  Box,
  Chart,
  Cross,
  Desk,
  Floor,
  Grid,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  Oval,
  Pencil,
  Pile,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Sheet,
  Sprout,
  TONES,
  Tick,
  handLine,
  handPoly,
  laptopScreen,
} from '../../ink/index.js'

/* Two table legs under a desk top. */
function Legs({ x1, x2, top, floor, seed }) {
  return <Ink d={handLine(x1, top, x1 + 2, floor, seed, 0.4) + handLine(x2, top, x2 - 2, floor, seed + 1, 0.4)} w={3} c={TONES.brown.deep} />
}

/* A small round badge with a number, pinned to a paper. */
function Badge({ x, y, n, tone = 'amber', seed }) {
  return (
    <g>
      <Oval cx={x} cy={y} rx={15} ry={15} fill={TONES[tone].mid} seed={seed} sw={1.5} />
      <Hand x={x} y={y + 6} size={16} anchor="middle" weight={700}>
        {n}
      </Hand>
    </g>
  )
}

/* A bar for a chart drawn by hand. Anchor: bottom-left. */
function Bar({ x, y, w, h, tone, seed }) {
  return (
    <g>
      <rect x={x} y={y - h} width={w} height={h} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly([[x, y], [x, y - h], [x + w, y - h], [x + w, y]], { seed, amp: 0.4 })} w={1.5} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Six papers with at least six citations each.
   ------------------------------------------------------------------ */

const PAPERS = [24, 15, 9, 7, 6, 6, 3]

const meaningCss = `
.s-hix1-badge { animation: s-hix1-pop 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s - 7s); }
.s-hix1-tenzin .pip-body { animation: s-hix1-bob 3s ease-in-out infinite; }
@keyframes s-hix1-pop {
  0%, 6% { transform: scale(0.4); opacity: 0; }
  14%, 86% { transform: scale(1); opacity: 1; }
  96%, 100% { transform: scale(0.4); opacity: 0; }
}
@keyframes s-hix1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function MeaningScene() {
  const y = 120
  return (
    <Scene w={800} h={300} top={30} css={meaningCss} className="s-hix1" label="Seven papers in a row with citation badges 24, 15, 9, 7, 6, 6 and 3; the first six are bracketed together as h equals 6 and the seventh, with only 3, stands outside the bracket">
      <Floor y={300} x1={40} x2={760} seed={101} />
      {PAPERS.map((n, i) => {
        const x = 60 + i * 92
        const inside = i < 6
        return (
          <g key={i} opacity={inside ? 1 : 0.6}>
            <Sheet x={x} y={y} w={64} h={84} tone={inside ? 'paper' : 'grey'} lines={4} fold={14} seed={110 + i} />
            <g className="s-hix1-badge" style={{ '--i': i, transformBox: 'fill-box', transformOrigin: 'center' }}>
              <Badge x={x + 58} y={y + 4} n={n} tone={inside ? 'amber' : 'grey'} seed={120 + i} />
            </g>
          </g>
        )
      })}
      <Ink d={`M60 ${y + 102}Q60 ${y + 116} 80 ${y + 116}H300Q318 ${y + 116} 320 ${y + 130}Q322 ${y + 116} 340 ${y + 116}H556Q576 ${y + 116} 576 ${y + 102}`} c={TONES.red.deep} w={2} />
      <Hand x={320} y={y + 158} size={26} anchor="middle" weight={700} c={TONES.red.deep}>
        h = 6
      </Hand>
      <Hand x={320} y={78} size={20} anchor="middle" c={INK_SOFT}>
        six papers, each cited at least six times
      </Hand>
      <Cross x={652} y={y + 112} s={0.8} />

      <Shadow x={730} y={302} rx={28} ry={4} />
      <Place x={730} y={300} s={1.35} flip>
        <g className="s-hix1-tenzin">
          <Pip mood="proud" arms="hips" tone="green" seed={130} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The table, ticked down to rank six.
   ------------------------------------------------------------------ */

const calcCss = `
.s-hix2-pencil { animation: s-hix2-down 8s ease-in-out infinite; }
.s-hix2-line { animation: s-hix2-flash 8s ease-in-out infinite; }
.s-hix2-guide .pip-arm-r { animation: s-hix2-point 2.5s ease-in-out infinite alternate; }
@keyframes s-hix2-down {
  0%, 100% { transform: translateY(0); }
  70%, 85% { transform: translateY(150px); }
}
@keyframes s-hix2-flash {
  0%, 60%, 100% { opacity: 0.5; }
  72%, 88% { opacity: 1; }
}
@keyframes s-hix2-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-9deg); }
}
`

export function CalculateScene() {
  const gx = 250
  const gy = 40
  const cw = 90
  const rh = 30
  const marks = {}
  for (let r = 1; r <= 8; r++) marks[`${r},2`] = r <= 6 ? 'tick' : 'cross'
  return (
    <Scene w={800} h={340} top={20} css={calcCss} className="s-hix2" label="A hand-drawn table of ranks one to eight and citations 24, 15, 9, 7, 6, 6, 3 and 1, with ticks down to rank six, crosses for ranks seven and eight, and a red line under row six marked h equals 6">
      <Grid x={gx} y={gy} cols={3} rows={9} cw={cw} rh={rh} header="red" marks={marks} seed={201} />
      {['rank', 'cited', 'ok?'].map((t, c) => (
        <Hand key={t} x={gx + c * cw + cw / 2} y={gy + 21} size={19} anchor="middle" weight={700}>
          {t}
        </Hand>
      ))}
      {PAPERS.concat([1]).map((n, i) => (
        <g key={i}>
          <Hand x={gx + cw / 2} y={gy + (i + 1) * rh + 21} size={19} anchor="middle" c={INK_SOFT}>
            {i + 1}
          </Hand>
          <Hand x={gx + cw * 1.5} y={gy + (i + 1) * rh + 21} size={19} anchor="middle">
            {n}
          </Hand>
        </g>
      ))}
      <g className="s-hix2-line">
        <Ink d={handLine(gx - 20, gy + 7 * rh, gx + 3 * cw + 20, gy + 7 * rh, 210, 0.4)} c={TONES.red.ink} w={3} />
        <Hand x={gx + 3 * cw + 28} y={gy + 7 * rh + 7} size={24} weight={700} c={TONES.red.deep}>
          h = 6
        </Hand>
      </g>
      <Place x={0} y={0}>
        <Anim className="s-hix2-pencil">
          <Pencil x={gx - 8} y={gy + 52} length={90} angle={-150} tone="amber" seed={211} />
        </Anim>
      </Place>

      <Floor y={340} x1={600} x2={780} seed={212} />
      <Shadow x={700} y={342} rx={28} ry={4} />
      <Place x={700} y={340} s={1.45} flip>
        <g className="s-hix2-guide">
          <Pip mood="focused" arms="point" tone="blue" glasses look={1.4} seed={220} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. One famous paper or many quiet ones: both small.
   ------------------------------------------------------------------ */

const readCss = `
.s-hix3-big { animation: s-hix3-sway 5s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
.s-hix3-mid .pip-arm-l, .s-hix3-mid .pip-arm-r { animation: s-hix3-shrug 2.4s ease-in-out infinite alternate; }
@keyframes s-hix3-sway {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.04); }
}
@keyframes s-hix3-shrug {
  from { transform: rotate(0deg); }
  to { transform: rotate(6deg); }
}
`

export function ReadScene() {
  const base = 320
  return (
    <Scene w={800} h={320} top={20} css={readCss} className="s-hix3" label="On the left one very tall bar for a single paper cited 500 times, marked h equals 1; on the right a long row of short bars for forty papers with two citations each, marked h equals 2; a paper character shrugs between them">
      <Floor y={base} x1={30} x2={770} seed={301} />
      <g className="s-hix3-big">
        <Bar x={110} y={base} w={60} h={250} tone="amber" seed={302} />
      </g>
      <Hand x={140} y={60} size={20} anchor="middle" weight={700}>
        500
      </Hand>
      <Hand x={140} y={base - 20} size={22} anchor="middle" weight={700} c={TONES.red.deep} style={{ paintOrder: 'stroke', stroke: '#fdfaf3', strokeWidth: 4 }}>
        h = 1
      </Hand>
      <Hand x={250} y={170} size={19} c={INK_SOFT}>
        one famous paper
      </Hand>

      {Array.from({ length: 20 }, (_, i) => (
        <Bar key={i} x={500 + i * 13} y={base} w={9} h={22} tone="blue" seed={310 + i} />
      ))}
      <Hand x={630} y={base - 44} size={22} anchor="middle" weight={700} c={TONES.red.deep}>
        h = 2
      </Hand>
      <Hand x={630} y={200} size={19} anchor="middle" c={INK_SOFT}>
        forty papers, two citations each
      </Hand>

      <Shadow x={380} y={base + 3} rx={30} ry={4} />
      <Place x={380} y={base} s={1.5}>
        <g className="s-hix3-mid">
          <Pip mood="worried" arms="shrug" tone="green" seed={330} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Where to look: a profile on a laptop and three databases.
   ------------------------------------------------------------------ */

const findCss = `
.s-hix4-row { animation: s-hix4-glow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 6s); }
.s-hix4-arrow { animation: s-hix4-nudge 3s ease-in-out infinite; }
@keyframes s-hix4-glow {
  0%, 100% { opacity: 0.55; }
  20%, 40% { opacity: 1; }
}
@keyframes s-hix4-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
`

const DBS = [
  { label: 'Google Scholar', note: 'free profile', tone: 'blue' },
  { label: 'Scopus', note: 'author details', tone: 'amber' },
  { label: 'Web of Science', note: 'citation report', tone: 'green' },
]

export function FindScene() {
  const desk = 290
  const [sx, sy, sw] = laptopScreen(560, desk, 300)
  return (
    <Scene w={800} h={320} top={20} css={findCss} className="s-hix4" label="Three labelled cards, Google Scholar, Scopus and Web of Science, point to a laptop showing a small metrics table with columns all and recent and rows citations, h-index and i10-index">
      <Floor y={330} x1={30} x2={770} seed={401} />
      <Legs x1={420} x2={720} top={desk + 20} floor={330} seed={402} />
      <Desk y={desk} x1={400} x2={740} depth={20} seed={403} />
      <Laptop x={560} y={desk} w={300} seed={404}>
        <Hand x={sx + sw / 2 + 4} y={sy + 26} size={17} anchor="middle" weight={700}>
          all
        </Hand>
        <Hand x={sx + sw / 2 + 64} y={sy + 26} size={17} anchor="middle" weight={700}>
          recent
        </Hand>
        {[
          ['citations', '71', '71'],
          ['h-index', '6', '6'],
          ['i10-index', '2', '2'],
        ].map((row, i) => (
          <g key={row[0]}>
            <Hand x={sx + 12} y={sy + 54 + i * 26} size={17}>
              {row[0]}
            </Hand>
            <Hand x={sx + sw / 2 + 4} y={sy + 54 + i * 26} size={17} anchor="middle" weight={700}>
              {row[1]}
            </Hand>
            <Hand x={sx + sw / 2 + 64} y={sy + 54 + i * 26} size={17} anchor="middle" weight={700}>
              {row[2]}
            </Hand>
          </g>
        ))}
      </Laptop>

      {DBS.map((db, i) => (
        <g key={db.label} className="s-hix4-row" style={{ '--i': i }}>
          <Box x={50} y={60 + i * 86} w={220} h={64} r={8} fill={TONES[db.tone].tint} seed={410 + i} sw={1.7} />
          <Hand x={160} y={88 + i * 86} size={22} anchor="middle" weight={700}>
            {db.label}
          </Hand>
          <Hand x={160} y={112 + i * 86} size={17} anchor="middle" c={INK_SOFT}>
            {db.note}
          </Hand>
        </g>
      ))}
      <Place x={0} y={0}>
        <Anim className="s-hix4-arrow">
          <Arrow from={[284, 150]} to={[400, 150]} bend={0.1} seed={420} c={INK_SOFT} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The same eight papers through two windows.
   ------------------------------------------------------------------ */

const dbCss = `
.s-hix5-lens { animation: s-hix5-scan 8s ease-in-out infinite; }
@keyframes s-hix5-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(330px, 0); }
}
`

export function DatabasesScene() {
  const top = 110
  const inScopus = [true, true, false, true, true, true, false, true]
  return (
    <Scene w={800} h={300} top={30} css={dbCss} className="s-hix5" label="Two frames side by side, Google Scholar showing all eight papers with h equals 6 and Scopus showing only six of them, the others faded, with h equals 4, while a magnifying glass moves between them">
      <Box x={40} y={80} w={340} h={220} r={10} fill={TONES.blue.tint} seed={501} sw={2} />
      <Box x={420} y={80} w={340} h={220} r={10} fill={TONES.green.tint} seed={502} sw={2} />
      <Hand x={210} y={66} size={22} anchor="middle" weight={700}>
        Google Scholar
      </Hand>
      <Hand x={590} y={66} size={22} anchor="middle" weight={700}>
        Scopus
      </Hand>
      {inScopus.map((seen, i) => {
        const col = i % 4
        const row = Math.floor(i / 4)
        return (
          <g key={i}>
            <Sheet x={62 + col * 78} y={top - 14 + row * 80} w={48} h={62} lines={3} fold={11} seed={510 + i} sw={1.4} />
            <g opacity={seen ? 1 : 0.2}>
              <Sheet x={442 + col * 78} y={top - 14 + row * 80} w={48} h={62} lines={3} fold={11} seed={510 + i} sw={1.4} />
            </g>
          </g>
        )
      })}
      <Hand x={210} y={288} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
        h = 6
      </Hand>
      <Hand x={590} y={288} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
        h = 4
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-hix5-lens">
          <Magnifier x={240} y={160} r={26} angle={45} tone="amber" seed={530} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. A person, a count of papers and a journal.
   ------------------------------------------------------------------ */

const compareCss = `
.s-hix6-item { animation: s-hix6-bob 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 6s); }
@keyframes s-hix6-bob {
  0%, 100% { transform: translateY(0); }
  15% { transform: translateY(-6px); }
  30% { transform: translateY(0); }
}
`

export function CompareScene() {
  const base = 270
  return (
    <Scene w={800} h={200} top={90} css={compareCss} className="s-hix6" label="Three labelled things in a row: a paper character marked h-index, a pile of papers with a ten on top marked i10-index, and a journal marked impact factor">
      <Floor y={base} x1={40} x2={760} seed={601} />
      <g className="s-hix6-item" style={{ '--i': 0 }}>
        <Place x={160} y={base} s={1.5}>
          <Pip mood="happy" arms="wave" tone="green" seed={610} />
        </Place>
      </g>
      <g className="s-hix6-item" style={{ '--i': 1 }}>
        <Pile x={400} y={base} w={110} count={8} seed={611} />
        <Badge x={400} y={base - 66} n="10+" tone="amber" seed={612} />
      </g>
      <g className="s-hix6-item" style={{ '--i': 2 }}>
        <Book x={600} y={base - 104} w={84} h={104} tone="red" seed={613} />
      </g>
      {[
        [160, 'h-index', 'a researcher'],
        [400, 'i10-index', 'papers with 10+'],
        [642, 'impact factor', 'a journal'],
      ].map(([x, t, n]) => (
        <g key={t}>
          <Hand x={x} y={118} size={24} anchor="middle" weight={700}>
            {t}
          </Hand>
          <Hand x={x} y={142} size={18} anchor="middle" c={INK_SOFT}>
            {n}
          </Hand>
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Slow and honest growth.
   ------------------------------------------------------------------ */

const goodCss = `
.s-hix7 .chart-bar { animation: s-hix7-grow 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 9s); }
.s-hix7-tenzin .pip-body { animation: s-hix7-bob 3s ease-in-out infinite; }
@keyframes s-hix7-grow {
  0%, 4% { transform: scaleY(0.1); }
  16%, 86% { transform: scaleY(1); }
  96%, 100% { transform: scaleY(0.1); }
}
@keyframes s-hix7-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function GoodScene() {
  const base = 300
  return (
    <Scene w={800} h={300} top={30} css={goodCss} className="s-hix7" label="A bar chart of h-index rising slowly year by year beside a growing plant, while a paper character looks on, a tick marks slow and honest, and a sign marked citation swaps is crossed out">
      <Floor y={base} x1={30} x2={770} seed={701} />
      <Chart x={250} y={base - 10} w={260} h={180} bars={[0.15, 0.3, 0.45, 0.55, 0.7, 0.82]} tone="green" seed={702} />
      <Hand x={380} y={base + 20} size={18} anchor="middle" c={INK_SOFT}>
        year by year
      </Hand>
      <Plant x={570} y={base} s={1.6} seed={703} />
      <Sprout x={130} y={base} s={1.2} seed={704} />

      <Box x={620} y={70} w={150} h={50} r={6} fill={TONES.red.tint} seed={705} sw={1.6} />
      <Hand x={695} y={102} size={18} anchor="middle" weight={700}>
        citation swaps
      </Hand>
      <Cross x={695} y={95} s={3} />
      <Tick x={380} y={90} s={1.4} />
      <Hand x={404} y={86} size={20} weight={700} c={TONES.green.deep}>
        slow and honest
      </Hand>

      <Shadow x={700} y={base + 3} rx={28} ry={4} />
      <Place x={700} y={base} s={1.4} flip>
        <g className="s-hix7-tenzin">
          <Pip mood="happy" arms="hold" tone="green" look={1.4} seed={710} />
        </g>
      </Place>
    </Scene>
  )
}
