import {
  Anim,
  Arrow,
  Book,
  Box,
  Chart,
  Checklist,
  Cross,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  Pip,
  Place,
  Scale,
  Scene,
  Shadow,
  Sheet,
  StampMark,
  TEXT_LINE,
  TONES,
  Type,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Citations from many papers, counted for one journal.
   ------------------------------------------------------------------ */

const PAPERS = [
  { x: 52, y: 42 },
  { x: 128, y: 96 },
  { x: 40, y: 160 },
  { x: 150, y: 196 },
  { x: 214, y: 40 },
]

const meaningCss = `
.s-jif1-arrow { animation: s-jif1-flow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s - 6s); }
.s-jif1-count { animation: s-jif1-tally 6s ease-in-out infinite; }
.s-jif1-prakash .pip-body { animation: s-jif1-bob 3.2s ease-in-out infinite; }
@keyframes s-jif1-flow {
  0%, 100% { opacity: 0.25; }
  30%, 70% { opacity: 1; }
}
@keyframes s-jif1-tally {
  0%, 30% { transform: scale(0.9); }
  50%, 80% { transform: scale(1.05); }
  100% { transform: scale(0.9); }
}
@keyframes s-jif1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function MeaningScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={meaningCss} className="s-jif1" label="Five small papers on the left send citation arrows into one large journal labelled cited in 2025, with a tally reading average per paper, while a paper character with a notebook watches from the right">
      <Floor y={floor} x1={30} x2={770} seed={101} />

      {PAPERS.map((p, i) => (
        <g key={i}>
          <g className="s-jif1-arrow" style={{ '--i': i }}>
            <Arrow from={[p.x + 42, p.y + 24]} to={[368, 110 + i * 18]} bend={0.1} seed={110 + i * 3} w={1.7} head={9} c={INK_SOFT} />
          </g>
          <Sheet x={p.x} y={p.y} w={38} h={48} lines={3} fold={8} seed={120 + i * 2} sw={1.4} />
        </g>
      ))}

      <Shadow x={440} y={floor} rx={80} ry={5} />
      <Book x={370} y={60} w={150} h={232} tone="blue" label={false} seed={130} />
      <Type x={454} y={100} size={17} anchor="middle" weight={700}>
        JOURNAL
      </Type>
      <Hand x={454} y={140} size={20} anchor="middle" weight={700}>
        cited in 2025
      </Hand>
      <Place x={454} y={204}>
        <Anim className="s-jif1-count" origin={[0, 0]}>
          <Box x={-54} y={-30} w={108} h={60} r={6} fill="url(#fill-amber)" seed={132} sw={1.6} />
          <Hand x={0} y={-6} size={17} anchor="middle" weight={700}>
            average
          </Hand>
          <Hand x={0} y={16} size={17} anchor="middle" weight={700}>
            per paper
          </Hand>
        </Anim>
      </Place>

      <Hand x={655} y={70} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        one journal,
      </Hand>
      <Hand x={655} y={98} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        not one paper
      </Hand>

      <Shadow x={650} y={floor + 2} rx={30} ry={4} />
      <Place x={650} y={floor} s={1.3}>
        <g className="s-jif1-prakash">
          <Pip mood="surprised" arms="hold" tone="blue" look={-1.6} seed={140}>
            <Sheet x={-12} y={-31} w={24} h={26} tone="amber" lines={2} fold={6} seed={141} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The division: citations over citable items.
   ------------------------------------------------------------------ */

const calculateCss = `
.s-jif2-top { animation: s-jif2-in 8s ease-in-out infinite; }
.s-jif2-bottom { animation: s-jif2-in 8s ease-in-out infinite; animation-delay: -7s; }
.s-jif2-result { animation: s-jif2-pop 8s ease-in-out infinite; }
.s-jif2-guide .pip-arm-r { animation: s-jif2-point 2.4s ease-in-out infinite alternate; }
@keyframes s-jif2-in {
  0%, 100% { opacity: 1; transform: translateY(0); }
  8% { opacity: 0.3; transform: translateY(-6px); }
  18% { opacity: 1; transform: translateY(0); }
}
@keyframes s-jif2-pop {
  0%, 30% { transform: scale(0.85); }
  42%, 90% { transform: scale(1); }
  100% { transform: scale(0.85); }
}
@keyframes s-jif2-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
`

export function CalculateScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={calculateCss} className="s-jif2" label="A fraction written on a board: 330 citations in 2025 over 120 papers from 2023 and 2024, equals 2.8, shown to one decimal, with a guide in glasses pointing at it">
      <Floor y={floor} x1={30} x2={770} seed={201} />

      <Box x={170} y={40} w={590} h={210} r={8} fill="#fdfaf3" seed={202} sw={1.9} double />

      <g className="s-jif2-top">
        <Hand x={366} y={104} size={28} anchor="middle" weight={700} c={TONES.blue.deep}>
          330 citations in 2025
        </Hand>
      </g>
      <Ink d={handLine(206, 126, 530, 126, 210, 0.6)} w={2.6} />
      <g className="s-jif2-bottom">
        <Hand x={366} y={166} size={24} anchor="middle" weight={700} c={TONES.green.deep}>
          120 papers from 2023 and 2024
        </Hand>
      </g>

      <Hand x={566} y={140} size={46} anchor="middle" weight={700}>
        =
      </Hand>
      <Place x={666} y={130}>
        <Anim className="s-jif2-result" origin={[0, 0]}>
          <Hand x={0} y={20} size={56} anchor="middle" weight={700} c={TONES.red.deep}>
            2.8
          </Hand>
        </Anim>
      </Place>
      <Hand x={660} y={222} size={18} anchor="middle" weight={700} c={INK_SOFT}>
        to one decimal
      </Hand>
      <Ink d={handLine(206, 216, 330, 216, 212, 0.35) + handLine(206, 230, 290, 230, 213, 0.35)} c={TEXT_LINE} w={1.6} />

      <Shadow x={94} y={floor + 2} rx={30} ry={4} />
      <Place x={94} y={floor} s={1.4}>
        <g className="s-jif2-guide">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.4} seed={220} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Checking the claim in the JCR, by title and ISSN.
   ------------------------------------------------------------------ */

const checkCss = `
.s-jif3 .check-tick { stroke-dashoffset: 0; animation: s-jif3-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 8s); }
.s-jif3-lens { animation: s-jif3-scan 5s ease-in-out infinite; }
.s-jif3-prakash .pip-body { animation: s-jif3-nod 3s ease-in-out infinite; }
@keyframes s-jif3-draw {
  0%, 100% { stroke-dashoffset: 0; }
  6% { stroke-dashoffset: 1; }
  20% { stroke-dashoffset: 0; }
}
@keyframes s-jif3-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-110px, -40px); }
}
@keyframes s-jif3-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function CheckScene() {
  const floor = 300
  const [ix, iy, iw] = laptopScreen(370, floor, 380)
  return (
    <Scene w={800} h={300} top={20} css={checkCss} className="s-jif3" label="A laptop shows a JCR search by title or ISSN with the result JIF 2025: 2.8 and category Q2, a magnifying glass scans the screen, a checklist beside it is ticked off, and a paper character leans in to read">
      <Floor y={floor} x1={30} x2={770} seed={301} />

      <Laptop x={370} y={floor} w={380} seed={302}>
        <Type x={ix + 14} y={iy + 26} size={20} weight={700} c={TONES.blue.deep}>
          JCR
        </Type>
        <Box x={ix + 14} y={iy + 38} w={iw - 28} h={30} r={4} fill="#ffffff" seed={303} sw={1.3} />
        <Type x={ix + 24} y={iy + 58} size={15} c={INK_SOFT}>
          title or ISSN
        </Type>
        <Hand x={ix + 18} y={iy + 104} size={26} weight={700}>
          JIF 2025: 2.8
        </Hand>
        <Hand x={ix + 18} y={iy + 138} size={22} weight={700} c={TONES.green.deep}>
          category: Q2
        </Hand>
      </Laptop>

      <Place x={0} y={0}>
        <Anim className="s-jif3-lens">
          <Magnifier x={ix + 200} y={iy + 96} r={26} angle={40} tone="amber" seed={310} />
        </Anim>
      </Place>

      <Checklist x={596} y={56} w={150} items={4} done={4} seed={320} />
      <Hand x={671} y={232} size={18} anchor="middle" weight={700} c={INK_SOFT}>
        title, ISSN, year,
      </Hand>
      <Hand x={671} y={254} size={18} anchor="middle" weight={700} c={INK_SOFT}>
        web address
      </Hand>

      <Shadow x={80} y={floor + 2} rx={30} ry={4} />
      <Place x={80} y={floor} s={1.4}>
        <g className="s-jif3-prakash">
          <Pip mood="focused" arms="hold" tone="blue" look={1.8} seed={330} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The same 2.8, low in one field and high in another.
   ------------------------------------------------------------------ */

const goodCss = `
.s-jif4 .chart-bar { animation: s-jif4-grow 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.25s - 7s); }
.s-jif4-line { animation: s-jif4-blink 7s ease-in-out infinite; }
.s-jif4-prakash .pip-arm-l, .s-jif4-prakash .pip-arm-r { animation: s-jif4-shrug 2.6s ease-in-out infinite alternate; }
@keyframes s-jif4-grow {
  0%, 100% { transform: scaleY(1); }
  12% { transform: scaleY(0.3); }
  30% { transform: scaleY(1); }
}
@keyframes s-jif4-blink {
  0%, 30%, 100% { opacity: 1; }
  15% { opacity: 0.2; }
}
@keyframes s-jif4-shrug {
  from { transform: rotate(0deg); }
  to { transform: rotate(6deg); }
}
`

export function GoodScene() {
  const floor = 300
  const base = 250
  const level = base - 153 * 0.32
  return (
    <Scene w={800} h={300} top={20} css={goodCss} className="s-jif4" label="Two bar charts of journals ranked within their fields, medicine with tall bars and fisheries with short ones, crossed by the same dashed line at 2.8, which sits low among the medicine bars and near the top of the fisheries bars, with a paper character shrugging between them">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Chart x={70} y={base} w={250} h={170} bars={[0.95, 0.8, 0.66, 0.5, 0.38]} tone="pink" seed={410} />
      <Chart x={480} y={base} w={250} h={170} bars={[0.42, 0.34, 0.27, 0.2, 0.13]} tone="green" seed={420} />

      <g className="s-jif4-line">
        <Ink d={handLine(62, level, 330, level, 430, 0.4)} c={TONES.red.ink} w={2.2} dash="7 6" />
        <Ink d={handLine(472, level, 740, level, 431, 0.4)} c={TONES.red.ink} w={2.2} dash="7 6" />
        <Hand x={344} y={level + 6} size={20} weight={700} c={TONES.red.deep}>
          2.8
        </Hand>
        <Hand x={748} y={level + 6} size={20} weight={700} c={TONES.red.deep}>
          2.8
        </Hand>
      </g>

      <Hand x={195} y={280} size={22} anchor="middle" weight={700}>
        medicine
      </Hand>
      <Hand x={605} y={280} size={22} anchor="middle" weight={700}>
        fisheries
      </Hand>
      <Hand x={605} y={110} size={18} anchor="middle" weight={700} c={TONES.green.deep}>
        2.8 is near the top here
      </Hand>
      <Hand x={195} y={50} size={18} anchor="middle" weight={700} c={TONES.pink.deep}>
        2.8 is low down here
      </Hand>

      <Shadow x={404} y={floor + 2} rx={26} ry={4} />
      <Place x={404} y={floor} s={1.15}>
        <g className="s-jif4-prakash">
          <Pip mood="surprised" arms="shrug" tone="blue" seed={440} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Four metrics, four makers, four windows.
   ------------------------------------------------------------------ */

const METRICS = [
  { x: 36, tone: 'blue', name: 'JIF', from: 'Web of Science', years: '2 years' },
  { x: 222, tone: 'green', name: 'CiteScore', from: 'Scopus', years: '4 years' },
  { x: 408, tone: 'amber', name: 'SJR', from: 'SCImago', years: '3 years' },
  { x: 594, tone: 'pink', name: 'h5-index', from: 'Google Scholar', years: '5 years' },
]

const metricsCss = `
.s-jif5-card { animation: s-jif5-lift 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 6s); }
@keyframes s-jif5-lift {
  0%, 40%, 100% { transform: translateY(0); }
  20% { transform: translateY(-6px); }
}
`

export function MetricsScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={metricsCss} className="s-jif5" label="Four cards in a row: JIF from Web of Science over 2 years, CiteScore from Scopus over 4 years, SJR from SCImago over 3 years, and h5-index from Google Scholar over 5 years, above a desk line">
      <Floor y={floor} x1={30} x2={770} seed={501} />
      {METRICS.map((m, i) => (
        <g key={m.name} className="s-jif5-card" style={{ '--i': i }}>
          <Box x={m.x} y={56} w={170} h={196} r={8} fill={TONES[m.tone].tint} seed={510 + i * 5} sw={1.8} />
          <rect x={m.x + 6} y={62} width={158} height={42} rx={5} fill={TONES[m.tone].mid} opacity="0.7" />
          <Hand x={m.x + 85} y={92} size={m.name.length > 4 ? 26 : 32} anchor="middle" weight={700}>
            {m.name}
          </Hand>
          <Type x={m.x + 85} y={146} size={14} anchor="middle" weight={700} c={INK_SOFT}>
            {m.from}
          </Type>
          <Ink d={handLine(m.x + 30, 172, m.x + 140, 172, 520 + i, 0.4)} c={TEXT_LINE} w={1.5} />
          <Hand x={m.x + 85} y={216} size={24} anchor="middle" weight={700} c={TONES[m.tone].deep}>
            {m.years}
          </Hand>
        </g>
      ))}
      <Hand x={400} y={290} size={18} anchor="middle" weight={700} c={INK_SOFT}>
        say which one, which year, which source
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. A big number in an email, and nothing in the JCR.
   ------------------------------------------------------------------ */

const fakeCss = `
.s-jif6-cross { animation: s-jif6-strike 8s ease-in-out infinite; }
.s-jif6-stamp { animation: s-jif6-press 8s ease-in-out infinite; }
.s-jif6-prakash .pip-body { animation: s-jif6-lean 3s ease-in-out infinite; }
@keyframes s-jif6-strike {
  0%, 100% { opacity: 1; }
  10%, 22% { opacity: 0; }
  32% { opacity: 1; }
}
@keyframes s-jif6-press {
  0%, 100% { transform: scale(1); opacity: 1; }
  30% { transform: scale(1.25); opacity: 0; }
  42% { transform: scale(1); opacity: 1; }
}
@keyframes s-jif6-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function FakeScene() {
  const floor = 300
  const [ix, iy, iw] = laptopScreen(560, floor, 240)
  return (
    <Scene w={800} h={300} top={20} css={fakeCss} className="s-jif6" label="An email beside a printed offer boasting impact factor 7.21, global, accept in 10 days, crossed out in red and stamped not in JCR, while a laptop shows a JCR search with 0 results and a paper character looks on">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Envelope x={40} y={208} w={110} h={72} seed={602} />
      <Sheet x={130} y={34} w={210} h={230} lines={0} fold={22} seed={604} sw={1.8} />
      <Hand x={232} y={82} size={22} anchor="middle" weight={700}>
        Impact Factor
      </Hand>
      <Hand x={232} y={136} size={50} anchor="middle" weight={700} c={TONES.amber.deep}>
        7.21
      </Hand>
      <Hand x={232} y={170} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        (global)
      </Hand>
      <Hand x={232} y={204} size={18} anchor="middle" weight={700}>
        accept in 10 days!
      </Hand>
      <g className="s-jif6-cross">
        <Cross x={232} y={120} s={5} w={3} seed={606} />
      </g>
      <Place x={0} y={0}>
        <Anim className="s-jif6-stamp" origin={[250, 238]}>
          <StampMark x={250} y={238} w={150} h={40} text="NOT IN JCR" tone="red" rotate={-7} size={18} bg="#fdfaf3" seed={608} />
        </Anim>
      </Place>

      <Laptop x={560} y={floor} w={240} seed={610}>
        <Type x={ix + 10} y={iy + 20} size={14} weight={700} c={TONES.blue.deep}>
          JCR search
        </Type>
        <Hand x={ix + iw / 2} y={iy + 64} size={26} anchor="middle" weight={700} c={TONES.red.deep}>
          0 results
        </Hand>
      </Laptop>

      <Shadow x={736} y={floor + 2} rx={26} ry={4} />
      <Place x={736} y={floor} s={1.2} flip>
        <g className="s-jif6-prakash">
          <Pip mood="worried" arms="point" tone="blue" look={1.2} seed={620} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. A journal's average is not one paper's worth.
   ------------------------------------------------------------------ */

const limitsCss = `
.s-jif7 .scale-beam { animation: s-jif7-rock 5s ease-in-out infinite; }
.s-jif7-prakash .pip-body { animation: s-jif7-hop 3.4s ease-in-out infinite; }
@keyframes s-jif7-rock {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-jif7-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-6px); }
}
`

export function LimitsScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={limitsCss} className="s-jif7" label="Under the words the journal's average is not your paper's worth, a balance scale with a journal labelled journal average in one pan and a single sheet labelled one paper in the other, rocking gently, between a guide in glasses and a paper character holding his own paper">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Scale
        x={400}
        y={floor}
        s={1.4}
        seed={702}
        left={<Book x={268} y={152} w={46} h={53} tone="blue" seed={704} />}
        right={<Sheet x={489} y={150} w={40} h={55} tone="amber" lines={3} fold={8} seed={706} sw={1.4} />}
      />
      <Hand x={400} y={82} size={24} anchor="middle" weight={700} c={INK_SOFT}>
        the journal's average is not your paper's worth
      </Hand>
      <Hand x={291} y={262} size={20} anchor="middle" weight={700} c={TONES.blue.deep}>
        journal average
      </Hand>
      <Hand x={509} y={262} size={20} anchor="middle" weight={700} c={TONES.amber.deep}>
        one paper
      </Hand>

      <Shadow x={110} y={floor + 2} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.4}>
        <Pip mood="happy" arms="think" tone="green" glasses look={1.4} seed={720} />
      </Place>

      <Shadow x={690} y={floor + 2} rx={30} ry={4} />
      <Place x={690} y={floor} s={1.4}>
        <g className="s-jif7-prakash">
          <Pip mood="proud" arms="hold" tone="blue" look={-1.4} seed={730}>
            <Sheet x={-12} y={-31} w={24} h={26} tone="amber" lines={2} fold={6} seed={731} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
