import {
  Anim,
  Box,
  Calendar,
  Cross,
  Desk,
  Floor,
  Funnel,
  Grid,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  Mountain,
  PAPER,
  Pile,
  Pip,
  Place,
  Poly,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sticky,
  TONES,
  Tick,
  Type,
  handLine,
  handPoly,
} from '../../ink/index.js'

/* Two table legs under a desk top. */
function Legs({ x1, x2, top, floor, seed }) {
  return <Ink d={handLine(x1, top, x1 + 2, floor, seed, 0.4) + handLine(x2, top, x2 - 2, floor, seed + 1, 0.4)} w={3} c={TONES.brown.deep} />
}

/* ------------------------------------------------------------------
   1. Three questions the committee asks of every proposal.
   ------------------------------------------------------------------ */

const TESTS = [
  { word: 'clear?', tone: 'blue', pip: 'blue', x: 170 },
  { word: 'worth doing?', tone: 'amber', pip: 'amber', x: 400 },
  { word: 'doable?', tone: 'green', pip: 'pink', x: 630 },
]

const purposeCss = `
.s-prop1-sign { animation: s-prop1-lift 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 2.5s - 7.5s); }
.s-prop1-judge .pip-body { animation: s-prop1-sway 3s ease-in-out infinite; }
@keyframes s-prop1-lift {
  0%, 30%, 100% { transform: translateY(0); }
  10%, 20% { transform: translateY(-12px); }
}
@keyframes s-prop1-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-2.5deg); }
}
`

export function PurposeScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={50} css={purposeCss} className="s-prop1" label="Three committee members in a row each hold up a sign, one asking clear, one asking worth doing and one asking doable, and the signs rise one after another">
      <Floor y={floor} x1={40} x2={760} seed={101} />
      {TESTS.map((test, i) => {
        const t = TONES[test.tone]
        const w = test.word.length * 12 + 30
        return (
          <g key={test.word}>
            <Place x={0} y={0}>
              <Anim className="s-prop1-sign" style={{ '--i': i }}>
                <Ink d={handLine(test.x, 150, test.x, 230, 110 + i, 0.3)} w={2.6} c={TONES.brown.deep} />
                <Box x={test.x - w / 2} y={90} w={w} h={60} r={6} fill={t.tint} stroke={t.deep} seed={120 + i} sw={2} />
                <Hand x={test.x} y={130} size={24} anchor="middle" weight={700}>
                  {test.word}
                </Hand>
              </Anim>
            </Place>
            <Shadow x={test.x} y={floor + 2} rx={30} ry={4} />
            <Place x={test.x} y={floor} s={1.45}>
              <g className="s-prop1-judge">
                <Pip mood="focused" arms="hold" tone={test.pip} glasses={i !== 1} look={i - 1} seed={130 + i * 7} />
              </g>
            </Place>
          </g>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Two notices, two sets of rules, read with a magnifier.
   ------------------------------------------------------------------ */

const formatCss = `
.s-prop2-lens { animation: s-prop2-scan 8s ease-in-out infinite; }
.s-prop2-reader .pip-arm-r { animation: s-prop2-point 2.5s ease-in-out infinite alternate; }
@keyframes s-prop2-scan {
  0%, 100% { transform: translate(0, 0); }
  22% { transform: translate(40px, 0); }
  50% { transform: translate(250px, 0); }
  74% { transform: translate(210px, 0); }
}
@keyframes s-prop2-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-9deg); }
}
`

export function FormatScene() {
  return (
    <Scene w={800} h={320} top={20} css={formatCss} className="s-prop2" label="Two pinned admission notices side by side, one asking for four to seven thousand words and the other for a budget and a time plan, while a magnifying glass moves between them and a paper character points">
      <Floor y={330} x1={30} x2={770} seed={201} />

      <Sheet x={150} y={50} w={200} h={250} lines={0} fold={22} seed={202} sw={2} />
      <PushPin x={250} y={58} tone="red" seed={203} />
      <Type x={170} y={98} size={18} weight={700}>
        NOTICE A
      </Type>
      <Ink d={handLine(170, 120, 320, 120, 204, 0.3) + handLine(170, 136, 300, 136, 205, 0.3) + handLine(170, 152, 312, 152, 206, 0.3)} c={TONES.grey.mid} w={1.6} />
      <Hand x={170} y={196} size={22} weight={700} c={TONES.red.deep}>
        4,000 to 7,000
      </Hand>
      <Hand x={170} y={222} size={22} weight={700} c={TONES.red.deep}>
        words
      </Hand>
      <Hand x={170} y={262} size={18} c={INK_SOFT}>
        3 hard copies
      </Hand>

      <Sheet x={400} y={50} w={200} h={250} lines={0} fold={22} seed={207} sw={2} />
      <PushPin x={500} y={58} tone="blue" seed={208} />
      <Type x={420} y={98} size={18} weight={700}>
        NOTICE B
      </Type>
      {['1 introduction', '8 time plan', '10 expenses', '13 similarity'].map((item, i) => (
        <Hand key={item} x={420} y={132 + i * 30} size={19} c={i === 1 || i === 2 ? TONES.blue.deep : INK_SOFT} weight={i === 1 || i === 2 ? 700 : 400}>
          {item}
        </Hand>
      ))}
      <Hand x={420} y={268} size={18} c={INK_SOFT}>
        all mandatory
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-prop2-lens">
          <Magnifier x={240} y={128} r={28} angle={-45} tone="amber" seed={209} />
        </Anim>
      </Place>

      <Shadow x={690} y={332} rx={34} ry={4} />
      <Place x={690} y={330} s={1.55} flip>
        <g className="s-prop2-reader">
          <Pip mood="focused" arms="point" tone="green" look={1.5} seed={210} />
        </g>
      </Place>
      <Hand x={84} y={190} size={20} anchor="middle" c={INK_SOFT}>
        read
      </Hand>
      <Hand x={84} y={214} size={20} anchor="middle" c={INK_SOFT}>
        first
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. One sticky note per part, pinned to the board in order.
   ------------------------------------------------------------------ */

const PARTS = [
  { word: 'title', tone: 'grey' },
  { word: 'background', tone: 'blue' },
  { word: 'literature', tone: 'green' },
  { word: 'questions', tone: 'amber' },
  { word: 'method', tone: 'pink' },
  { word: 'ethics', tone: 'red' },
  { word: 'timeline', tone: 'blue' },
  { word: 'outcomes', tone: 'green' },
  { word: 'references', tone: 'amber' },
]

const structureCss = `
.s-prop3-note { animation: s-prop3-pin 12s ease-in-out infinite; animation-delay: calc(var(--i) * 0.55s - 12s); }
.s-prop3-maker .pip-arm-r { animation: s-prop3-reach 2.2s ease-in-out infinite alternate; }
@keyframes s-prop3-pin {
  0%, 2% { transform: translateY(-24px); opacity: 0; }
  8%, 80% { transform: translateY(0); opacity: 1; }
  86%, 100% { transform: translateY(0); opacity: 0; }
}
@keyframes s-prop3-reach {
  from { transform: rotate(0deg); }
  to { transform: rotate(-12deg); }
}
`

export function StructureScene() {
  const bx = 150
  const by = 40
  const cw = 156
  const rh = 104
  return (
    <Scene w={800} h={390} top={20} css={structureCss} className="s-prop3" label="A corkboard with nine sticky notes pinned in three rows, reading title, background, literature, questions, method, ethics, timeline, outcomes and references, while a paper character reaches up to pin them in order">
      <Floor y={404} x1={30} x2={770} seed={301} />
      <Box x={bx} y={by} w={cw * 3 + 30} h={rh * 3 + 30} r={6} fill={TONES.brown.tint} stroke={TONES.brown.deep} seed={302} sw={2.4} double />
      {PARTS.map((part, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = bx + 20 + col * cw
        const y = by + 22 + row * rh
        return (
          <g key={part.word} className="s-prop3-note" style={{ '--i': i }}>
            <Sticky x={x} y={y} w={140} h={82} tone={part.tone} lines={0} seed={310 + i} />
            <PushPin x={x + 70} y={y + 10} tone="red" seed={330 + i} />
            <Type x={x + 12} y={y + 36} size={14} c={INK_SOFT}>
              {String(i + 1)}
            </Type>
            <Hand x={x + 70} y={y + 60} size={22} anchor="middle" weight={700}>
              {part.word}
            </Hand>
          </g>
        )
      })}

      <Shadow x={720} y={406} rx={34} ry={4} />
      <Place x={720} y={404} s={1.6} flip>
        <g className="s-prop3-maker">
          <Pip mood="happy" arms="point" tone="green" look={1.4} seed={340} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. A whole mountain range goes into the funnel; one question comes out.
   ------------------------------------------------------------------ */

const questionCss = `
.s-prop4-word { animation: s-prop4-sink 7s ease-in infinite; animation-delay: calc(var(--i) * -2.3s); }
.s-prop4-out { animation: s-prop4-pop 7s ease-in-out infinite; }
.s-prop4-thinker .pip-body { animation: s-prop4-bob 3.5s ease-in-out infinite; }
@keyframes s-prop4-sink {
  0% { transform: translateY(-30px) scale(1); opacity: 0; }
  12%, 40% { transform: translateY(0) scale(1); opacity: 1; }
  70%, 100% { transform: translateY(90px) scale(0.3); opacity: 0; }
}
@keyframes s-prop4-pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
@keyframes s-prop4-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const BROAD = [
  { word: 'the Himalaya', x: 268 },
  { word: 'water', x: 408 },
  { word: 'climate', x: 520 },
]

export function QuestionScene() {
  return (
    <Scene w={800} h={360} top={10} css={questionCss} className="s-prop4" label="Broad words like the Himalaya, water and climate sink into a large funnel, and out of the bottom comes one small sheet with a question mark and the words three villages, one question">
      <Floor y={368} x1={30} x2={770} seed={401} />
      <Mountain x={30} y={368} w={180} h={130} seed={402} />
      <Hand x={120} y={210} size={18} anchor="middle" c={INK_SOFT}>
        too broad
      </Hand>

      <Funnel x={400} y={110} w={260} h={150} tone="blue" seed={403} />
      {BROAD.map((item, i) => (
        <Place key={item.word} x={0} y={0}>
          <Anim className="s-prop4-word" origin={[item.x, 80]} style={{ '--i': i }}>
            <Hand x={item.x} y={86} size={24} anchor="middle" weight={700} c={TONES.blue.deep}>
              {item.word}
            </Hand>
          </Anim>
        </Place>
      ))}

      <Place x={0} y={0}>
        <Anim className="s-prop4-out" origin={[400, 316]}>
          <Sheet x={346} y={272} w={108} h={88} tone="amber" lines={0} fold={14} seed={404} />
          <Hand x={394} y={318} size={34} anchor="middle" weight={700} c={TONES.red.ink}>
            ?
          </Hand>
          <Hand x={396} y={344} size={15} anchor="middle" weight={700}>
            3 villages
          </Hand>
        </Anim>
      </Place>
      <Hand x={472} y={330} size={20} c={INK_SOFT}>
        one question
      </Hand>

      <Shadow x={690} y={370} rx={34} ry={4} />
      <Place x={690} y={368} s={1.55} flip>
        <g className="s-prop4-thinker">
          <Pip mood="focused" arms="think" tone="green" look={1.2} seed={410} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Papers sorted into themes, and the gap marked where nothing fits.
   ------------------------------------------------------------------ */

const THEMES = [
  { word: 'springs', x: 150, count: 9, tone: 'blue' },
  { word: 'revival', x: 300, count: 6, tone: 'green' },
  { word: 'households', x: 450, count: 7, tone: 'amber' },
]

const literatureCss = `
.s-prop5-sheet { animation: s-prop5-drop 6s ease-in infinite; animation-delay: calc(var(--i) * -2s); }
.s-prop5-gap { animation: s-prop5-glow 3s ease-in-out infinite; }
.s-prop5-sorter .pip-arm-r { animation: s-prop5-wave 2.4s ease-in-out infinite alternate; }
@keyframes s-prop5-drop {
  0%, 50% { transform: translateY(-50px); opacity: 0; }
  60% { opacity: 1; }
  74%, 90% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0); opacity: 0; }
}
@keyframes s-prop5-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
@keyframes s-prop5-wave {
  from { transform: rotate(0deg); }
  to { transform: rotate(-10deg); }
}
`

export function LiteratureScene() {
  const desk = 250
  return (
    <Scene w={800} h={300} top={30} css={literatureCss} className="s-prop5" label="Three piles of papers on a desk sorted by theme into springs, revival and households, with a dashed empty space beside them marked the gap, and a paper character pointing to it">
      <Floor y={322} x1={30} x2={770} seed={501} />
      <Legs x1={100} x2={670} top={desk + 20} floor={322} seed={502} />
      <Desk y={desk} x1={80} x2={690} depth={20} seed={503} />

      {THEMES.map((theme, i) => (
        <g key={theme.word}>
          <Pile x={theme.x} y={desk} w={100} count={theme.count} seed={510 + i * 4} />
          <Place x={0} y={0}>
            <Anim className="s-prop5-sheet" style={{ '--i': i, opacity: 0 }}>
              <Sheet x={theme.x - 22} y={desk - theme.count * 5 - 30} w={44} h={22} lines={0} fold={6} seed={520 + i} sw={1.3} />
            </Anim>
          </Place>
          <Box x={theme.x - 58} y={desk - theme.count * 5 - 92} w={116} h={40} r={6} fill={TONES[theme.tone].tint} stroke={TONES[theme.tone].deep} seed={530 + i} />
          <Hand x={theme.x} y={desk - theme.count * 5 - 64} size={20} anchor="middle" weight={700}>
            {theme.word}
          </Hand>
        </g>
      ))}

      <g className="s-prop5-gap">
        <Ink d={handPoly([[560, desk - 70], [660, desk - 70], [660, desk - 2], [560, desk - 2]], { seed: 540, amp: 0.4, closed: true })} c={TONES.red.ink} w={2} dash="6 6" />
        <Hand x={610} y={desk - 28} size={24} anchor="middle" weight={700} c={TONES.red.ink}>
          gap
        </Hand>
      </g>
      <Hand x={610} y={desk - 86} size={18} anchor="middle" c={INK_SOFT}>
        spring to kitchen
      </Hand>

      <Shadow x={740} y={324} rx={30} ry={4} />
      <Place x={740} y={322} s={1.4} flip>
        <g className="s-prop5-sorter">
          <Pip mood="grin" arms="point" tone="green" look={1.5} seed={550} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Three methods side by side: measure, survey, interview.
   ------------------------------------------------------------------ */

const methodCss = `
.s-prop6-drop { animation: s-prop6-fall 2.6s ease-in infinite; }
.s-prop6-writer .pip-arm-r { animation: s-prop6-scribble 0.8s ease-in-out infinite alternate; }
.s-prop6-talker .pip-body { animation: s-prop6-nod 2.8s ease-in-out infinite; }
.s-prop6-bubble { animation: s-prop6-float 4s ease-in-out infinite; }
@keyframes s-prop6-fall {
  0%, 20% { transform: translateY(0); opacity: 0; }
  28% { opacity: 1; }
  80% { transform: translateY(40px); opacity: 1; }
  90%, 100% { transform: translateY(40px); opacity: 0; }
}
@keyframes s-prop6-scribble {
  from { transform: rotate(0deg); }
  to { transform: rotate(8deg); }
}
@keyframes s-prop6-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-prop6-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function MethodScene() {
  const floor = 340
  return (
    <Scene w={800} h={330} top={20} css={methodCss} className="s-prop6" label="Three methods side by side: water from a hill spring drips into a bucket labelled measure, a paper character writes on a clipboard beside a small house labelled survey, and two paper characters talk under a speech bubble labelled interview">
      <Floor y={floor} x1={20} x2={780} seed={601} />

      {/* measure: the spring and a bucket */}
      <Mountain x={20} y={floor} w={200} h={170} seed={602} snow={false} />
      <Ink d="M120 214Q112 236 126 256Q134 270 128 282" c={TONES.blue.ink} w={2.4} />
      <Place x={0} y={0}>
        <Anim className="s-prop6-drop">
          <path d="M128 282Q132 289 128 292Q124 289 128 282Z" fill={TONES.blue.ink} />
        </Anim>
      </Place>
      <Poly points={[[106, 318], [150, 318], [146, 340], [110, 340]]} fill={TONES.grey.mid} seed={603} />
      <path d="M108 322h40v6h-40Z" fill={TONES.blue.mid} />
      <Box x={70} y={60} w={120} h={38} r={6} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={604} />
      <Hand x={130} y={86} size={22} anchor="middle" weight={700}>
        measure
      </Hand>

      {/* survey: a house and a clipboard */}
      <Poly points={[[300, 250], [360, 206], [420, 250]]} fill={TONES.red.mid} seed={605} />
      <Box x={310} y={250} w={100} h={90} fill={PAPER} seed={606} />
      <Box x={346} y={292} w={28} h={48} fill={TONES.brown.mid} seed={607} />
      <Shadow x={460} y={floor + 2} rx={26} ry={4} />
      <Place x={460} y={floor} s={1.3}>
        <g className="s-prop6-writer">
          <Pip mood="focused" arms="write" tone="green" look={-1} seed={610}>
            <Sheet x={10} y={-34} w={22} h={28} lines={3} fold={5} seed={611} sw={1.2} />
          </Pip>
        </g>
      </Place>
      <Box x={330} y={60} w={120} h={38} r={6} fill={TONES.amber.tint} stroke={TONES.amber.deep} seed={612} />
      <Hand x={390} y={86} size={22} anchor="middle" weight={700}>
        survey
      </Hand>

      {/* interview: two people talking */}
      <Shadow x={590} y={floor + 2} rx={26} ry={4} />
      <Place x={590} y={floor} s={1.3}>
        <Pip mood="happy" arms="hold" tone="pink" look={1.5} seed={620} />
      </Place>
      <Shadow x={690} y={floor + 2} rx={26} ry={4} />
      <Place x={690} y={floor} s={1.3} flip>
        <g className="s-prop6-talker">
          <Pip mood="focused" arms="hold" tone="green" look={1.5} seed={621} />
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-prop6-bubble">
          <Speech x={560} y={160} w={120} h={50} tx={590} ty={236} seed={622}>
            <Hand x={620} y={192} size={20} anchor="middle">
              who fetches?
            </Hand>
          </Speech>
        </Anim>
      </Place>
      <Box x={580} y={60} w={130} h={38} r={6} fill={TONES.pink.tint} stroke={TONES.pink.deep} seed={623} />
      <Hand x={645} y={86} size={22} anchor="middle" weight={700}>
        interview
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Three years on a chart, with the costs beside it.
   ------------------------------------------------------------------ */

const BARS = [
  { row: 1, from: 0, to: 1, tone: 'grey' },
  { row: 2, from: 1, to: 2, tone: 'blue' },
  { row: 3, from: 2, to: 4, tone: 'green' },
  { row: 4, from: 4, to: 5, tone: 'amber' },
  { row: 5, from: 5, to: 6, tone: 'pink' },
]

const LABELS = ['coursework', 'pilot', 'fieldwork', 'analysis', 'thesis']

const budgetCss = `
.s-prop7-bar { animation: s-prop7-grow 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 9s); }
.s-prop7-planner .pip-arm-r { animation: s-prop7-point 2.5s ease-in-out infinite alternate; }
@keyframes s-prop7-grow {
  0%, 4% { transform: scaleX(0); }
  14%, 84% { transform: scaleX(1); }
  92%, 100% { transform: scaleX(0); }
}
@keyframes s-prop7-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
`

export function BudgetScene() {
  const gx = 170
  const gy = 50
  const cw = 60
  const rh = 40
  return (
    <Scene w={800} h={330} top={20} css={budgetCss} className="s-prop7" label="A time plan chart with six half year columns and bars for coursework, pilot, fieldwork, analysis and thesis, beside a calendar reading 36 months and a sheet of costs listing bus fare, printing and a flow meter">
      <Floor y={340} x1={20} x2={780} seed={701} />
      <Grid x={gx} y={gy} cols={6} rows={6} cw={cw} rh={rh} header="amber" seed={702} />
      {[6, 12, 18, 24, 30, 36].map((m, i) => (
        <Type key={m} x={gx + i * cw + cw / 2} y={gy + 26} size={16} anchor="middle" weight={700}>
          {String(m)}
        </Type>
      ))}
      {BARS.map((bar, i) => {
        const x = gx + bar.from * cw + 6
        const y = gy + bar.row * rh + 10
        const w = (bar.to - bar.from) * cw - 12
        return (
          <g key={bar.row}>
            <Anim className="s-prop7-bar" origin={[x, y]} style={{ '--i': i }}>
              <path d={`M${x} ${y}h${w}v20h${-w}Z`} fill={TONES[bar.tone].mid} />
              <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + 20], [x, y + 20]], { seed: 710 + i, amp: 0.3, closed: true })} w={1.4} c={TONES[bar.tone].deep} />
            </Anim>
            <Hand x={gx - 10} y={y + 16} size={18} anchor="end" c={INK_SOFT}>
              {LABELS[i]}
            </Hand>
          </g>
        )
      })}
      <Hand x={gx + 3 * cw} y={gy + 6 * rh + 30} size={18} anchor="middle" c={INK_SOFT}>
        months
      </Hand>

      <Calendar x={570} y={40} w={84} h={90} day="36" month="MONTHS" tone="green" seed={720} />

      <Sheet x={560} y={150} w={150} h={150} lines={0} fold={18} seed={721} />
      <Hand x={576} y={186} size={20} weight={700}>
        costs
      </Hand>
      {['bus fare', 'printing', 'flow meter'].map((item, i) => (
        <Hand key={item} x={580} y={216 + i * 26} size={18} c={INK_SOFT}>
          {item}
        </Hand>
      ))}

      <Shadow x={750} y={342} rx={28} ry={4} />
      <Place x={750} y={340} s={1.35} flip>
        <g className="s-prop7-planner">
          <Pip mood="happy" arms="point" tone="green" look={1.4} seed={730} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. The first draft crossed out, the second one ticked.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-prop8-cross { animation: s-prop8-show 6s ease-in-out infinite; }
.s-prop8-tick { animation: s-prop8-show 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 4s); }
.s-prop8-writer .pip-body { animation: s-prop8-hop 3s ease-in-out infinite; }
@keyframes s-prop8-show {
  0%, 10% { opacity: 0; }
  20%, 85% { opacity: 1; }
  95%, 100% { opacity: 0; }
}
@keyframes s-prop8-hop {
  0%, 60%, 100% { transform: translateY(0); }
  75% { transform: translateY(-8px); }
}
`

export function MistakesScene() {
  return (
    <Scene w={800} h={330} top={20} css={mistakesCss} className="s-prop8" label="On the left a thick first draft of nine pages titled water problems is crossed out in red; on the right a shorter second draft with a question, a gap, a method and a plan is ticked in green, and a paper character hops beside it">
      <Floor y={340} x1={30} x2={770} seed={801} />

      <Sheet x={96} y={64} w={190} h={246} lines={0} fold={22} seed={802} sw={2} />
      <Sheet x={88} y={56} w={190} h={246} lines={14} fold={22} seed={803} sw={2} />
      <Hand x={104} y={46} size={20} c={INK_SOFT}>
        draft 1, 9 pages
      </Hand>
      <Hand x={110} y={104} size={20} weight={700}>
        water problems
      </Hand>
      <g className="s-prop8-cross">
        <Cross x={184} y={190} s={6} seed={804} />
      </g>

      <Sheet x={360} y={56} w={190} h={246} lines={0} fold={22} seed={805} sw={2} />
      <Hand x={376} y={46} size={20} c={INK_SOFT}>
        draft 2
      </Hand>
      {['the question', 'the gap', 'the method', 'the plan'].map((item, i) => (
        <g key={item}>
          <Hand x={380} y={110 + i * 46} size={22} weight={700}>
            {item}
          </Hand>
          <g className="s-prop8-tick" style={{ '--i': i }}>
            <Tick x={526} y={104 + i * 46} s={1} />
          </g>
        </g>
      ))}

      <Shadow x={660} y={342} rx={34} ry={4} />
      <Place x={660} y={340} s={1.6} flip>
        <g className="s-prop8-writer">
          <Pip mood="grin" arms="up" tone="green" look={1.4} seed={810} />
        </g>
      </Place>
    </Scene>
  )
}
