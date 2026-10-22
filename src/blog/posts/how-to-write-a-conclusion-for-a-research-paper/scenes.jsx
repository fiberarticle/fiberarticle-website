import {
  Anim,
  Arrow,
  Box,
  Chart,
  Clock,
  Cross,
  Crate,
  Door,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pile,
  Pip,
  Place,
  Poly,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Target,
  Thought,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. The busy reader turns to the last page for the bottom line.
   ------------------------------------------------------------------ */

const purposeCss = `
.s-cnc1 .clock-min { animation: s-cnc1-spin 6s linear infinite; }
.s-cnc1-reader .pip-body { animation: s-cnc1-lean 4s ease-in-out infinite; }
.s-cnc1-line { animation: s-cnc1-glow 4s ease-in-out infinite; }
@keyframes s-cnc1-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes s-cnc1-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
@keyframes s-cnc1-glow {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 0.95; }
}
`

export function PurposeScene() {
  const floor = 320
  const sx = 520
  const sy = 70
  return (
    <Scene w={800} h={290} top={44} css={purposeCss} className="s-cnc1" label="A paper character with a clock behind it skips past a tall pile of pages and reads the last sheet, whose highlighted line says the bottom line, while it thinks so what did they find">
      <Floor y={floor} x1={30} x2={770} seed={101} />
      <Clock x={92} y={120} r={34} seed={102} />
      <Pile x={210} y={floor} w={110} count={24} seed={103} />
      <Hand x={210} y={182} size={17} anchor="middle" c={INK_SOFT}>
        the whole paper
      </Hand>

      <Thought x={378} y={104} w={170} h={70} tx={400} ty={196} seed={104}>
        <Hand x={378} y={100} size={17} anchor="middle">
          so, what did
        </Hand>
        <Hand x={378} y={121} size={17} anchor="middle" weight={700}>
          they find?
        </Hand>
      </Thought>
      <Shadow x={410} y={floor + 2} rx={30} ry={4} />
      <Place x={410} y={floor} s={1.45}>
        <g className="s-cnc1-reader">
          <Pip mood="focused" arms="point" tone="amber" look={1.8} seed={105} />
        </g>
      </Place>

      <Sheet x={sx} y={sy} w={200} h={240} lines={0} fold={22} seed={106} sw={2} />
      <Type x={sx + 20} y={sy + 40} size={17} weight={700}>
        LAST PAGE
      </Type>
      <Ink d={handLine(sx + 20, sy + 70, sx + 170, sy + 70, 107, 0.4) + handLine(sx + 20, sy + 88, sx + 150, sy + 88, 108, 0.4)} c={TONES.grey.mid} w={1.6} />
      <path className="s-cnc1-line" d={`M${sx + 16} ${sy + 118}h168v34h-168Z`} fill={TONES.amber.mid} opacity="0.75" />
      <Hand x={sx + 100} y={sy + 142} size={22} anchor="middle" weight={700}>
        the bottom line
      </Hand>
      <Ink d={handLine(sx + 20, sy + 180, sx + 160, sy + 180, 109, 0.4) + handLine(sx + 20, sy + 198, sx + 120, sy + 198, 110, 0.4)} c={TONES.grey.mid} w={1.6} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Three sections, three jobs.
   ------------------------------------------------------------------ */

const threeCss = `
.s-cnc2-lens { animation: s-cnc2-scan 4s ease-in-out infinite; }
.s-cnc2 .scale-beam { animation: s-cnc2-tip 5s ease-in-out infinite; }
.s-cnc2-dart { animation: s-cnc2-thud 4s ease-in-out infinite; }
@keyframes s-cnc2-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(16px, 6px); }
}
@keyframes s-cnc2-tip {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}
@keyframes s-cnc2-thud {
  0%, 100% { transform: translate(0, 0); }
  45% { transform: translate(0, 0); }
  55% { transform: translate(-5px, 3px); }
  65% { transform: translate(0, 0); }
}
`

const JOBS = [
  { word: 'abstract', note: 'should I read it?', tone: 'blue' },
  { word: 'discussion', note: 'what does it mean?', tone: 'amber' },
  { word: 'conclusion', note: 'the bottom line', tone: 'green' },
]

export function ThreeJobsScene() {
  const top = 70
  const h = 230
  return (
    <Scene w={800} h={280} top={50} css={threeCss} className="s-cnc2" label="Three cards side by side: abstract with a magnifying glass asking should I read it, discussion with a balance scale asking what does it mean, and conclusion with a dart in the centre of a target labelled the bottom line">
      {JOBS.map((job, i) => {
        const x = 40 + i * 250
        const t = TONES[job.tone]
        return (
          <g key={job.word}>
            <Box x={x} y={top} w={220} h={h} r={8} fill={t.tint} stroke={t.deep} seed={201 + i} sw={2} />
            <Hand x={x + 110} y={top + 36} size={26} anchor="middle" weight={700}>
              {job.word}
            </Hand>
            <Hand x={x + 110} y={top + h - 18} size={18} anchor="middle" c={INK_SOFT}>
              {job.note}
            </Hand>
          </g>
        )
      })}

      <Anim className="s-cnc2-lens">
        <Magnifier x={130} y={176} r={34} angle={45} tone="blue" seed={210} />
      </Anim>
      <Scale x={400} y={262} s={0.95} seed={211} />
      <Target x={650} y={180} r={50} seed={212} />
      <Anim className="s-cnc2-dart">
        <Ink d={handLine(652, 178, 700, 130, 213, 0.3)} w={2.6} />
        <Poly points={[[700, 130], [716, 124], [708, 118], [704, 112], [698, 126]]} fill={TONES.red.mid} seed={214} sw={1.4} />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The hourglass: the introduction narrows, the conclusion opens out.
   ------------------------------------------------------------------ */

const STEPS = ['aim', 'answer', 'so what', 'next step', 'take-home']

const stepsCss = `
.s-cnc3-band { animation: s-cnc3-light 10s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 10s); }
.s-cnc3-walker { animation: s-cnc3-walk 10s ease-in-out infinite; }
@keyframes s-cnc3-light {
  0%, 10% { opacity: 0.35; }
  20%, 85% { opacity: 1; }
  100% { opacity: 0.35; }
}
@keyframes s-cnc3-walk {
  0%, 8% { transform: translateX(0); }
  70%, 88% { transform: translateX(150px); }
  100% { transform: translateX(0); }
}
`

export function StepsScene() {
  const mid = 190
  const lx = 50
  const rx = 750
  const nx1 = 330
  const nx2 = 470
  const bands = STEPS.length
  return (
    <Scene w={800} h={350} top={14} css={stepsCss} className="s-cnc3" label="A sideways hourglass: the introduction narrows from a wide topic to one question, the study sits in the narrow middle, and the conclusion opens out again in five coloured bands labelled aim, answer, so what, next step and take-home">
      {/* introduction: wide to narrow */}
      <Poly points={[[lx, 50], [nx1, mid - 34], [nx1, mid + 34], [lx, 330]]} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={301} sw={2} />
      <Hand x={190} y={38} size={22} anchor="middle" weight={700}>
        introduction
      </Hand>
      <Hand x={190} y={350} size={16} anchor="middle" c={INK_SOFT}>
        wide topic down to one question
      </Hand>

      {/* the study in the narrow middle */}
      <Box x={nx1} y={mid - 34} w={nx2 - nx1} h={68} fill={PAPER} stroke={INK_SOFT} seed={302} sw={1.6} />
      <Hand x={400} y={mid - 46} size={18} anchor="middle" c={INK_SOFT}>
        your study
      </Hand>

      {/* conclusion: narrow to wide, in five bands */}
      {STEPS.map((word, i) => {
        const x1 = nx2 + ((rx - nx2) * i) / bands
        const x2 = nx2 + ((rx - nx2) * (i + 1)) / bands
        const spread = (x) => 34 + ((x - nx2) / (rx - nx2)) * (140 - 34)
        const tone = ['blue', 'green', 'amber', 'pink', 'red'][i]
        return (
          <g key={word}>
            <path
              className="s-cnc3-band"
              style={{ '--i': i }}
              d={`M${x1} ${mid - spread(x1)}L${x2} ${mid - spread(x2)}L${x2} ${mid + spread(x2)}L${x1} ${mid + spread(x1)}Z`}
              fill={`url(#fill-${tone})`}
            />
            <Type x={(x1 + x2) / 2} y={mid - 4} size={16} anchor="middle" weight={700}>
              {i + 1}
            </Type>
            <Hand x={(x1 + x2) / 2} y={mid + 20} size={12} anchor="middle" weight={700}>
              {word}
            </Hand>
          </g>
        )
      })}
      <Poly points={[[nx2, mid - 34], [rx, 50], [rx, 330], [nx2, mid + 34]]} stroke={TONES.green.deep} seed={303} sw={2} />
      <Hand x={610} y={38} size={22} anchor="middle" weight={700}>
        conclusion
      </Hand>
      <Hand x={610} y={350} size={16} anchor="middle" c={INK_SOFT}>
        one question back out to the world
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-cnc3-walker">
          <Place x={370} y={mid + 30} s={0.75}>
            <Pip mood="happy" arms="wave" tone="green" seed={304} />
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. What stays outside the door.
   ------------------------------------------------------------------ */

const boundaryCss = `
.s-cnc4-guard .pip-body { animation: s-cnc4-shake 2.4s ease-in-out infinite; }
.s-cnc4-no { animation: s-cnc4-pulse 2.4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s - 2.4s); }
@keyframes s-cnc4-shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
}
@keyframes s-cnc4-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
`

export function BoundaryScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={44} css={boundaryCss} className="s-cnc4" label="A door marked conclusion with a paper character guarding it, hands on hips, while a box of new data, a sheet of citations, a chart and a speech bubble shouting all dairy products wait outside, each crossed out">
      <Floor y={floor} x1={20} x2={780} seed={401} />

      <Crate x={40} y={floor - 70} w={104} h={70} label="new data" seed={402} />
      <g className="s-cnc4-no" style={{ '--i': 0 }}>
        <Cross x={92} y={floor - 98} s={1.3} seed={403} />
      </g>

      <Sheet x={176} y={floor - 110} w={80} h={110} lines={0} fold={16} seed={404} />
      <Type x={186} y={floor - 72} size={15}>
        [1] [2]
      </Type>
      <Type x={186} y={floor - 50} size={15}>
        [3] [4]
      </Type>
      <g className="s-cnc4-no" style={{ '--i': 1 }}>
        <Cross x={216} y={floor - 132} s={1.3} seed={405} />
      </g>

      <Box x={284} y={floor - 100} w={110} h={100} r={4} fill={PAPER} seed={406} sw={1.6} />
      <Chart x={298} y={floor - 14} w={84} h={70} bars={[0.5, 0.8, 0.6]} tone="blue" seed={407} />
      <g className="s-cnc4-no" style={{ '--i': 2 }}>
        <Cross x={339} y={floor - 122} s={1.3} seed={408} />
      </g>

      <Speech x={150} y={74} w={250} h={56} tx={240} ty={150} seed={409} tone="pink">
        <Hand x={275} y={110} size={21} anchor="middle" weight={700}>
          all dairy products!
        </Hand>
      </Speech>
      <g className="s-cnc4-no" style={{ '--i': 3 }}>
        <Cross x={420} y={98} s={1.3} seed={410} />
      </g>

      <Shadow x={500} y={floor + 2} rx={30} ry={4} />
      <Place x={500} y={floor} s={1.45}>
        <g className="s-cnc4-guard">
          <Pip mood="focused" arms="hips" tone="green" look={-1.6} seed={411} />
        </g>
      </Place>

      <Door x={590} y={floor} w={120} h={210} open={0.35} tone="green" seed={412} />
      <Box x={600} y={floor - 248} w={100} h={30} r={4} fill={PAPER} seed={413} sw={1.6} />
      <Hand x={650} y={floor - 226} size={18} anchor="middle" weight={700}>
        conclusion
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. A long paper, a short ending.
   ------------------------------------------------------------------ */

const lengthCss = `
.s-cnc5-flow path:first-child { animation: s-cnc5-march 1.4s linear infinite; }
.s-cnc5-card { animation: s-cnc5-float 4s ease-in-out infinite; }
@keyframes s-cnc5-march {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -24px; }
}
@keyframes s-cnc5-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
`

export function LengthScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={44} css={lengthCss} className="s-cnc5" label="A tall pile of pages labelled body text, 4,000 words, with a dashed arrow marked divided by 30 leading to a single small card labelled about 130 words, one paragraph">
      <Floor y={floor} x1={30} x2={770} seed={501} />
      <Pile x={170} y={floor} w={150} count={36} seed={502} />
      <Hand x={170} y={130} size={22} anchor="middle" weight={700}>
        body text
      </Hand>
      <Type x={170} y={104} size={17} anchor="middle" c={INK_SOFT}>
        4,000 words
      </Type>

      <Arrow className="s-cnc5-flow" from={[270, 200]} to={[500, 210]} bend={-0.16} seed={503} c={TONES.blue.ink} w={2} dash="5 7" />
      <Hand x={385} y={150} size={22} anchor="middle" c={TONES.blue.deep} weight={700}>
        divided by 30
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-cnc5-card">
          <Box x={520} y={160} w={200} h={110} r={6} fill={PAPER} stroke={TONES.green.deep} seed={504} sw={2.2} />
          <Hand x={620} y={200} size={24} anchor="middle" weight={700}>
            about 130 words
          </Hand>
          <Ink d={handLine(544, 226, 694, 226, 505, 0.4) + handLine(544, 244, 660, 244, 506, 0.4)} c={TONES.grey.mid} w={1.6} />
        </Anim>
      </Place>
      <Hand x={620} y={308} size={17} anchor="middle" c={INK_SOFT}>
        one paragraph, five sentences
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Before and after.
   ------------------------------------------------------------------ */

const BEFORE = ['In conclusion...', 'paneer is popular', 'pays for itself', 'all dairy products', 'further research']
const AFTER = ['the aim', 'the answer', 'why it matters', 'boundary, next step', 'take-home']

const exampleCss = `
.s-cnc6-tick { animation: s-cnc6-draw 10s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 10s); }
.s-cnc6-ketan .pip-arm-r { animation: s-cnc6-write 1.2s ease-in-out infinite; }
@keyframes s-cnc6-draw {
  0%, 12% { stroke-dashoffset: 1; }
  22%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-cnc6-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

export function ExampleScene() {
  const floor = 340
  const ly = 70
  const rx = 480
  return (
    <Scene w={800} h={310} top={40} css={exampleCss} className="s-cnc6" label="Two drafts side by side: the first draft with five lines crossed out in red, from in conclusion to further research, and the rewrite with five lines, the aim, the answer, why it matters, boundary and next step, and take-home, each ticked in green, with a paper character writing between them">
      <Floor y={floor} x1={20} x2={780} seed={601} />

      <Sheet x={40} y={ly} w={250} h={262} lines={0} fold={22} seed={602} sw={2} />
      <Hand x={60} y={ly + 38} size={24} weight={700} c={TONES.red.deep}>
        first draft
      </Hand>
      {BEFORE.map((line, i) => {
        const y = ly + 84 + i * 40
        return (
          <g key={line}>
            <Hand x={60} y={y} size={18} c={INK_SOFT}>
              {line}
            </Hand>
            <Ink d={handLine(56, y - 6, 60 + line.length * 8.6, y - 7, 603 + i, 0.6)} c={TONES.red.ink} w={2.2} />
          </g>
        )
      })}

      <Sheet x={rx} y={ly} w={270} h={262} lines={0} fold={22} seed={610} sw={2} />
      <Hand x={rx + 20} y={ly + 38} size={24} weight={700} c={TONES.green.deep}>
        rewrite
      </Hand>
      {AFTER.map((line, i) => {
        const y = ly + 84 + i * 40
        return (
          <g key={line}>
            <Type x={rx + 20} y={y} size={15} weight={700}>
              {i + 1}
            </Type>
            <Hand x={rx + 40} y={y} size={18}>
              {line}
            </Hand>
            <path
              className="s-cnc6-tick"
              style={{ '--i': i }}
              d={`M${rx + 222} ${y - 8}q4 3 6 9q6 -14 15 -22`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke="#3f8f4f"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )
      })}

      <Arrow from={[300, 120]} to={[466, 120]} bend={-0.12} seed={620} c={INK_SOFT} />
      <Shadow x={385} y={floor + 2} rx={28} ry={4} />
      <Place x={385} y={floor} s={1.4}>
        <g className="s-cnc6-ketan">
          <Pip mood="focused" arms="write" tone="green" glasses look={1.4} seed={621} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The thesis chapter: summary, numbered conclusions, future work.
   ------------------------------------------------------------------ */

const PARTS = [
  { word: 'summary', tone: 'blue' },
  { word: '1. 2. 3. conclusions', tone: 'amber' },
  { word: 'future work', tone: 'green' },
]

const thesisCss = `
.s-cnc7-grad .pip-body { animation: s-cnc7-hop 3s ease-in-out infinite; }
.s-cnc7-part { animation: s-cnc7-show 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 9s); }
@keyframes s-cnc7-hop {
  0%, 60%, 100% { transform: translateY(0); }
  70% { transform: translateY(-8px); }
  80% { transform: translateY(0); }
}
@keyframes s-cnc7-show {
  0%, 12% { opacity: 0.35; }
  22%, 88% { opacity: 1; }
  100% { opacity: 0.35; }
}
`

export function ThesisScene() {
  const floor = 340
  const bx = 70
  const by = 90
  const bw = 170
  const bh = 230
  const px = 400
  return (
    <Scene w={800} h={310} top={40} css={thesisCss} className="s-cnc7" label="A bound thesis with six chapter tabs, the last tab marked summary and conclusions, and beside it the chapter opened out into three parts: summary, numbered conclusions and future work, with a paper character in a graduation cap">
      <Floor y={floor} x1={20} x2={780} seed={701} />

      {/* the thesis and its chapter tabs */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const last = i === 5
        return (
          <Box
            key={i}
            x={bx + bw - 4}
            y={by + 12 + i * 34}
            w={last ? 34 : 22}
            h={26}
            r={3}
            fill={last ? `url(#fill-red)` : TONES.grey.tint}
            seed={710 + i}
            sw={1.3}
          />
        )
      })}
      <Box x={bx} y={by} w={bw} h={bh} r={4} fill="url(#fill-blue)" seed={702} sw={2} />
      <path d={`M${bx} ${by}h${bw * 0.14}v${bh}h${-bw * 0.14}Z`} fill={TONES.blue.deep} opacity="0.5" />
      <Box x={bx + 40} y={by + 40} w={110} h={52} r={3} fill={PAPER} seed={703} sw={1.4} />
      <Type x={bx + 95} y={by + 72} size={17} anchor="middle" weight={700}>
        THESIS
      </Type>
      <Hand x={bx + 155} y={by - 14} size={16} anchor="middle" c={INK_SOFT}>
        last chapter
      </Hand>
      <Arrow from={[bx + 214, by + 192]} to={[px - 14, by + 120]} bend={0.2} seed={704} c={INK_SOFT} />

      {/* the chapter, opened out */}
      <Sheet x={px} y={by - 30} w={240} h={262} lines={0} fold={22} seed={705} sw={2} />
      <Hand x={px + 18} y={by + 4} size={18} weight={700}>
        summary and conclusions
      </Hand>
      {PARTS.map((part, i) => {
        const y = by + 26 + i * 66
        const t = TONES[part.tone]
        return (
          <g key={part.word} className="s-cnc7-part" style={{ '--i': i }}>
            <path d={`M${px + 16} ${y}h206v52h-206Z`} fill={t.tint} />
            <Ink d={handLine(px + 16, y + 52, px + 222, y + 52, 720 + i, 0.4)} c={t.deep} w={1.4} />
            <Hand x={px + 30} y={y + 34} size={21} weight={700}>
              {part.word}
            </Hand>
          </g>
        )
      })}

      <Shadow x={712} y={floor + 2} rx={28} ry={4} />
      <Place x={712} y={floor} s={1.4}>
        <g className="s-cnc7-grad">
          <Pip mood="proud" arms="up" tone="green" cap="grad" seed={730} />
        </g>
      </Place>
    </Scene>
  )
}
