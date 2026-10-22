import {
  Anim,
  Arrow,
  Box,
  Crate,
  Cross,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sticky,
  TONES,
  Tick,
  Type,
  handEllipse,
  handLine,
} from '../../ink/index.js'

/* A tick drawn on with stroke-dashoffset, the way the checklists do it. */
function DrawnTick({ x, y, i, className }) {
  return (
    <path
      className={className}
      style={{ '--i': i }}
      d={`M${x} ${y}q4 3 6 9q6 -14 15 -22`}
      pathLength="1"
      strokeDasharray="1"
      fill="none"
      stroke="#3f8f4f"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

/* ------------------------------------------------------------------
   1. Inside the line, what the study can say; outside, what it cannot.
   ------------------------------------------------------------------ */

const boundaryCss = `
.s-wlim1-line { animation: s-wlim1-march 2s linear infinite; }
.s-wlim1-guide .pip-body { animation: s-wlim1-bob 3s ease-in-out infinite; }
@keyframes s-wlim1-march {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -20; }
}
@keyframes s-wlim1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function BoundaryScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={boundaryCss} className="s-wlim1" label="A dashed boundary rings a survey sheet marked 120 farmers, six villages, one winter; a paper character inside points out at the words the whole district and all of India, which are crossed out">
      <Floor y={floor} x1={30} x2={770} seed={101} />
      <path d={handEllipse(330, 200, 230, 112, { seed: 102, amp: 0.2 })} fill={TONES.green.tint} opacity="0.7" />
      <Ink className="s-wlim1-line" d={handEllipse(330, 200, 230, 112, { seed: 103, amp: 0.6 })} c={TONES.green.deep} w={2.4} dash="12 8" scale />
      <Sheet x={200} y={122} w={130} h={150} lines={3} fold={18} seed={104} />
      <Hand x={265} y={186} size={22} anchor="middle" weight={700}>
        120 farmers
      </Hand>
      <Hand x={265} y={214} size={16} anchor="middle" c={INK_SOFT}>
        six villages
      </Hand>
      <Hand x={265} y={236} size={16} anchor="middle" c={INK_SOFT}>
        one winter
      </Hand>
      <Hand x={330} y={110} size={17} anchor="middle" c={TONES.green.deep}>
        what the study can say
      </Hand>

      <Shadow x={440} y={floor - 28} rx={28} ry={4} />
      <Place x={440} y={floor - 30} s={1.3}>
        <g className="s-wlim1-guide">
          <Pip mood="happy" arms="point" tone="blue" look={1.4} glasses seed={105} />
        </g>
      </Place>

      <Cross x={588} y={124} s={1.1} seed={106} />
      <Hand x={608} y={131} size={20} c={INK_SOFT}>
        the whole district?
      </Hand>
      <Cross x={588} y={234} s={1.1} seed={107} />
      <Hand x={608} y={241} size={20} c={INK_SOFT}>
        all of India?
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. A line you drew, and a wall you met.
   ------------------------------------------------------------------ */

const choiceCss = `
.s-wlim2-chooser .pip-body { animation: s-wlim2-nod 3s ease-in-out infinite; }
.s-wlim2-stuck .pip-body { animation: s-wlim2-shrug 3s ease-in-out infinite; }
@keyframes s-wlim2-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-wlim2-shrug {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function ChoiceScene() {
  const floor = 320
  return (
    <Scene w={800} h={300} top={40} css={choiceCss} className="s-wlim2" label="Two panels: on the left, delimitation, a paper character points at a sticky note it wrote, cows, six villages, with a tick; on the right, limitation, another character shrugs beside a crate of lab tests it could not open, with a cross">
      <Box x={40} y={70} w={345} h={250} fill={TONES.amber.tint} stroke={TONES.amber.deep} seed={201} sw={2} />
      <Box x={415} y={70} w={345} h={250} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={202} sw={2} />
      <Type x={60} y={102} size={18} weight={700}>
        DELIMITATION
      </Type>
      <Type x={435} y={102} size={18} weight={700}>
        LIMITATION
      </Type>
      <Hand x={365} y={102} size={17} anchor="end" c={TONES.amber.deep}>
        I chose
      </Hand>
      <Hand x={740} y={102} size={17} anchor="end" c={TONES.blue.deep}>
        I could not
      </Hand>
      <Floor y={floor} x1={50} x2={750} seed={203} />

      <Sticky x={210} y={140} w={140} h={110} tone="amber" lines={0} seed={204} />
      <Hand x={280} y={182} size={20} anchor="middle" weight={700}>
        cows only
      </Hand>
      <Hand x={280} y={212} size={20} anchor="middle" weight={700}>
        six villages
      </Hand>
      <Tick x={330} y={270} s={1.4} />
      <Shadow x={120} y={floor + 2} rx={28} ry={4} />
      <Place x={120} y={floor} s={1.4}>
        <g className="s-wlim2-chooser">
          <Pip mood="proud" arms="point" tone="amber" seed={205} />
        </g>
      </Place>

      <Crate x={580} y={230} w={140} h={90} label="lab tests" seed={206} />
      <Ink d={handLine(574, 226, 726, 226, 207, 0.4)} w={3} />
      <Cross x={650} y={200} s={1.4} seed={208} />
      <Shadow x={500} y={floor + 2} rx={28} ry={4} />
      <Place x={500} y={floor} s={1.4}>
        <g className="s-wlim2-stuck">
          <Pip mood="worried" arms="shrug" tone="blue" seed={209} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Five boxes most limitations fall into.
   ------------------------------------------------------------------ */

const BINS = [
  { word: 'sample', tone: 'amber' },
  { word: 'design', tone: 'pink' },
  { word: 'measures', tone: 'green' },
  { word: 'setting', tone: 'blue' },
  { word: 'resources', tone: 'red' },
]

const typesCss = `
.s-wlim3-card { opacity: 0; animation: s-wlim3-drop 4s ease-in infinite; }
.s-wlim3-sorter .pip-body { animation: s-wlim3-lean 4s ease-in-out infinite; }
@keyframes s-wlim3-drop {
  0%, 10% { opacity: 0; transform: translateY(-20px); }
  20% { opacity: 1; transform: translateY(-20px); }
  55% { opacity: 1; transform: translateY(64px); }
  65%, 100% { opacity: 0; transform: translateY(64px); }
}
@keyframes s-wlim3-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
`

export function TypesScene() {
  const floor = 330
  return (
    <Scene w={800} h={290} top={50} css={typesCss} className="s-wlim3" label="Five open boxes in a row labelled sample, design, measures, setting and resources, each holding cards; a card marked self-report sits in the measures box, and a paper character points at it, asking where it came from">
      <Floor y={floor} x1={30} x2={770} seed={301} />
      {BINS.map((bin, i) => {
        const x = 30 + i * 124
        const t = TONES[bin.tone]
        return (
          <g key={bin.word}>
            <Sheet x={x + 18} y={232} w={40} h={50} lines={2} fold={9} seed={310 + i} />
            <Sheet x={x + 50} y={238} w={40} h={50} lines={2} fold={9} seed={320 + i} />
            <Box x={x} y={262} w={112} h={68} fill={t.tint} stroke={t.deep} seed={330 + i} sw={1.9} />
            <Hand x={x + 56} y={306} size={18} anchor="middle" weight={700}>
              {bin.word}
            </Hand>
          </g>
        )
      })}

      {/* the card already filed, and the same card dropping in again */}
      <Box x={293} y={214} w={90} h={34} r={3} fill={PAPER} stroke={TONES.green.deep} seed={340} sw={1.6} />
      <Hand x={338} y={237} size={15} anchor="middle" weight={700}>
        self-report
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-wlim3-card">
          <Box x={293} y={150} w={90} h={34} r={3} fill={PAPER} stroke={TONES.green.deep} seed={342} sw={1.6} />
          <Hand x={338} y={173} size={15} anchor="middle" weight={700}>
            self-report
          </Hand>
        </Anim>
      </Place>
      <Arrow from={[650, 150]} to={[400, 222]} bend={0.25} seed={343} c={INK_SOFT} />
      <Hand x={720} y={118} size={16} anchor="middle" c={INK_SOFT}>
        where did it
      </Hand>
      <Hand x={720} y={138} size={16} anchor="middle" c={INK_SOFT}>
        come from?
      </Hand>
      <Shadow x={725} y={floor + 2} rx={24} ry={4} />
      <Place x={725} y={floor} s={1.25} flip>
        <g className="s-wlim3-sorter">
          <Pip mood="focused" arms="point" tone="blue" look={1.6} glasses seed={341} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Where the limitations sit in a paper.
   ------------------------------------------------------------------ */

const PARTS = [
  { word: 'introduction', h: 30 },
  { word: 'methods', h: 30 },
  { word: 'results', h: 30 },
  { word: 'discussion', h: 74 },
  { word: 'conclusion', h: 30 },
]

const placeCss = `
.s-wlim4-glow { animation: s-wlim4-pulse 2.8s ease-in-out infinite; }
.s-wlim4-pointer .pip-body { animation: s-wlim4-bob 2.8s ease-in-out infinite; }
@keyframes s-wlim4-pulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}
@keyframes s-wlim4-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function PlaceScene() {
  const sx = 250
  const sw = 280
  let y = 92
  const rows = PARTS.map((part) => {
    const row = { ...part, y }
    y += part.h + 8
    return row
  })
  const disc = rows[3]
  return (
    <Scene w={800} h={330} top={40} css={placeCss} className="s-wlim4" label="A paper laid out in parts, introduction, methods, results, discussion and conclusion, with a highlighted strip near the end of the discussion marked limitations, and a paper character pointing at it">
      <Floor y={360} x1={30} x2={770} seed={401} />
      <Sheet x={sx} y={60} w={sw} h={300} lines={0} fold={22} seed={402} sw={2} />
      {rows.map((row, i) => (
        <g key={row.word}>
          <Ink d={handLine(sx + 20, row.y + row.h, sx + sw - 20, row.y + row.h, 410 + i, 0.4)} c={TONES.grey.mid} w={1.2} />
          <Hand x={sx + 24} y={row.y + 22} size={18} c={row.word === 'discussion' ? undefined : INK_SOFT} weight={row.word === 'discussion' ? 700 : 400}>
            {row.word}
          </Hand>
        </g>
      ))}
      <g className="s-wlim4-glow">
        <path d={`M${sx + 40} ${disc.y + 40}h${sw - 70}v26h${-(sw - 70)}Z`} fill={TONES.amber.mid} />
      </g>
      <Ink d={handLine(sx + 40, disc.y + 66, sx + sw - 30, disc.y + 66, 420, 0.4)} c={TONES.amber.deep} w={1.6} />
      <Hand x={sx + 52} y={disc.y + 60} size={17} weight={700}>
        limitations
      </Hand>
      <Arrow from={[640, 170]} to={[sx + sw - 22, disc.y + 52]} bend={0.2} seed={421} c={TONES.amber.deep} w={2} />
      <Hand x={650} y={120} size={17} anchor="middle" c={INK_SOFT}>
        near the end of
      </Hand>
      <Hand x={650} y={142} size={17} anchor="middle" c={INK_SOFT}>
        the discussion
      </Hand>
      <Shadow x={660} y={362} rx={28} ry={4} />
      <Place x={660} y={360} s={1.4}>
        <g className="s-wlim4-pointer">
          <Pip mood="happy" arms="wave" tone="amber" look={-1.4} seed={422} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Four parts for every limitation.
   ------------------------------------------------------------------ */

const PARTS4 = [
  { line1: 'name it', line2: '', tone: 'amber' },
  { line1: 'what it does', line2: 'to the findings', tone: 'pink' },
  { line1: 'what I did', line2: 'about it', tone: 'green' },
  { line1: 'the next', line2: 'study', tone: 'blue' },
]

const fourCss = `
.s-wlim5-tick { animation: s-wlim5-draw 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 9s); }
.s-wlim5-writer .pip-arm-r { animation: s-wlim5-scribble 0.9s ease-in-out infinite; }
@keyframes s-wlim5-draw {
  0%, 18% { stroke-dashoffset: 1; }
  28%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-wlim5-scribble {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

export function FourPartScene() {
  return (
    <Scene w={800} h={300} top={30} css={fourCss} className="s-wlim5" label="Four sticky notes joined by arrows read name it, what it does to the findings, what I did about it, and the next study, each ticked in turn, while a paper character writes below them">
      <Floor y={320} x1={30} x2={770} seed={501} />
      {PARTS4.map((part, i) => {
        const x = 36 + i * 186
        return (
          <g key={part.line1}>
            <Sticky x={x} y={60} w={150} h={120} tone={part.tone} lines={0} seed={510 + i} />
            <Type x={x + 14} y={88} size={16} weight={700} c={TONES[part.tone].deep}>
              {i + 1}
            </Type>
            <Hand x={x + 75} y={part.line2 ? 124 : 136} size={20} anchor="middle" weight={700}>
              {part.line1}
            </Hand>
            {part.line2 ? (
              <Hand x={x + 75} y={150} size={17} anchor="middle">
                {part.line2}
              </Hand>
            ) : null}
            <DrawnTick x={x + 112} y={78} i={i} className="s-wlim5-tick" />
            {i < 3 ? <Arrow from={[x + 150, 200]} to={[x + 186, 200]} bend={-0.3} seed={520 + i} c={INK_SOFT} head={8} /> : null}
          </g>
        )
      })}
      <Hand x={400} y={232} size={17} anchor="middle" c={INK_SOFT}>
        the same four parts for every limitation
      </Hand>
      <Sheet x={420} y={262} w={120} h={56} lines={3} fold={10} seed={530} />
      <Shadow x={380} y={322} rx={26} ry={4} />
      <Place x={380} y={320} s={1.05}>
        <g className="s-wlim5-writer">
          <Pip mood="focused" arms="write" tone="blue" look={1.6} glasses seed={531} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Two lines that said nothing, and a paragraph that says something.
   ------------------------------------------------------------------ */

const BARS = [
  { word: 'self-reported', tone: 'amber' },
  { word: 'pushes the number up', tone: 'pink' },
  { word: 'local assistant, no names', tone: 'green' },
  { word: 'test the milk next', tone: 'blue' },
]

const exampleCss = `
.s-wlim6-writer .pip-body { animation: s-wlim6-hop 3s ease-in-out infinite; }
.s-wlim6-bar { animation: s-wlim6-fill 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 8s); transform-box: fill-box; transform-origin: left center; }
@keyframes s-wlim6-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-8px); }
  90% { transform: translateY(0); }
}
@keyframes s-wlim6-fill {
  0%, 10% { transform: scaleX(1); }
  20% { transform: scaleX(0.94); }
  30%, 100% { transform: scaleX(1); }
}
`

export function ExampleScene() {
  return (
    <Scene w={800} h={320} top={30} css={exampleCss} className="s-wlim6" label="On the left a first draft page with two vague lines, time constraints and further research is needed, crossed out in red; an arrow leads to a rewrite page with four coloured strips: self-reported, pushes the number up, local assistant and no names, and test the milk next">
      <Floor y={340} x1={30} x2={770} seed={601} />
      <Sheet x={50} y={70} w={210} h={250} lines={0} fold={20} seed={602} />
      <Hand x={70} y={108} size={20} weight={700}>
        first draft
      </Hand>
      <Hand x={70} y={160} size={15} c={INK_SOFT}>
        due to time
      </Hand>
      <Hand x={70} y={182} size={15} c={INK_SOFT}>
        constraints...
      </Hand>
      <Hand x={70} y={226} size={15} c={INK_SOFT}>
        further research
      </Hand>
      <Hand x={70} y={248} size={15} c={INK_SOFT}>
        is needed.
      </Hand>
      <Cross x={155} y={210} s={4} seed={603} w={3} />

      <Arrow from={[275, 150]} to={[400, 150]} bend={-0.2} seed={604} c={INK_SOFT} w={2} />

      <Sheet x={420} y={50} w={330} h={270} lines={0} fold={22} seed={605} sw={2} />
      <Hand x={444} y={90} size={22} weight={700}>
        rewrite
      </Hand>
      {BARS.map((bar, i) => {
        const y = 108 + i * 50
        const t = TONES[bar.tone]
        return (
          <g key={bar.word}>
            <g className="s-wlim6-bar" style={{ '--i': i }}>
              <path d={`M440 ${y}h270v36h-270Z`} fill={t.tint} />
            </g>
            <Ink d={handLine(440, y + 36, 710, y + 36, 610 + i, 0.4)} c={t.deep} w={1.4} />
            <Type x={450} y={y + 24} size={13} c={t.deep} weight={700}>
              {i + 1}
            </Type>
            <Hand x={470} y={y + 25} size={17}>
              {bar.word}
            </Hand>
          </g>
        )
      })}

      <Shadow x={330} y={342} rx={26} ry={4} />
      <Place x={330} y={340} s={1.3}>
        <g className="s-wlim6-writer">
          <Pip mood="grin" arms="up" tone="blue" glasses seed={620} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. A long apology, or three clear limits.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-wlim7-sorry .pip-body { animation: s-wlim7-droop 3.6s ease-in-out infinite; }
.s-wlim7-calm .pip-body { animation: s-wlim7-hop 3.6s ease-in-out infinite; }
@keyframes s-wlim7-droop {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
@keyframes s-wlim7-hop {
  0%, 60%, 100% { transform: translateY(0); }
  75% { transform: translateY(-7px); }
}
`

export function MistakesScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={mistakesCss} className="s-wlim7" label="On the left a sad paper character beside a tall pile of papers says unfortunately, sorry, and is crossed out; on the right a calm character stands beside three neat cards numbered one to three, with a tick">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Pile x={110} y={floor} w={110} count={30} seed={702} />
      <Hand x={110} y={164} size={16} anchor="middle" c={INK_SOFT}>
        fifteen worries
      </Hand>
      <Speech x={190} y={86} w={180} h={62} tx={250} ty={176} seed={703}>
        <Hand x={280} y={124} size={19} anchor="middle">
          unfortunately...
        </Hand>
      </Speech>
      <Cross x={355} y={92} s={1.3} seed={704} />
      <Shadow x={250} y={floor + 2} rx={26} ry={4} />
      <Place x={250} y={floor} s={1.35}>
        <g className="s-wlim7-sorry">
          <Pip mood="sad" arms="down" tone="pink" seed={705} />
        </g>
      </Place>

      <Ink d={handLine(400, 90, 400, 320, 706, 1.4)} c={TONES.grey.mid} w={1.6} dash="6 8" />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Box x={470} y={110 + i * 64} w={160} h={50} r={4} fill={PAPER} stroke={TONES.green.deep} seed={710 + i} sw={1.8} />
          <Type x={486} y={142 + i * 64} size={18} weight={700} c={TONES.green.deep}>
            {i + 1}
          </Type>
          <Ink d={handLine(512, 128 + i * 64, 610, 128 + i * 64, 720 + i, 0.4) + handLine(512, 142 + i * 64, 586, 142 + i * 64, 724 + i, 0.4)} c={TONES.grey.ink} w={1.6} />
        </g>
      ))}
      <Tick x={660} y={110} s={1.6} />
      <Shadow x={700} y={floor + 2} rx={26} ry={4} />
      <Place x={700} y={floor} s={1.35}>
        <g className="s-wlim7-calm">
          <Pip mood="happy" arms="hips" tone="green" seed={730} />
        </g>
      </Place>
    </Scene>
  )
}
