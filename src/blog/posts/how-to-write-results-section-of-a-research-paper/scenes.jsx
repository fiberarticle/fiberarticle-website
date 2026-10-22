import {
  Anim,
  Arrow,
  Box,
  Bulb,
  Chart,
  Cross,
  Flag,
  Floor,
  Grid,
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
  Shadow,
  Sheet,
  Speech,
  StampMark,
  TEXT_LINE,
  TONES,
  Thought,
  Tick,
  Type,
  Wave,
  handLine,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Two rooms: what was found, and what it means.
   ------------------------------------------------------------------ */

const purposeCss = `
.s-res1-counter .pip-body { animation: s-res1-nod 3.2s ease-in-out infinite; }
.s-res1 .bulb-rays { animation: s-res1-glow 3.2s ease-in-out infinite; }
@keyframes s-res1-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-res1-glow {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
}
`

export function PurposeScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={50} css={purposeCss} className="s-res1" label="Two rooms side by side: in the results room a paper character points at a table of counts for busy and quiet beaches, and in the discussion room a lit bulb and a thought cloud ask why">
      <Box x={60} y={80} w={360} h={250} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={101} sw={2} />
      <Box x={450} y={80} w={290} h={250} fill={TONES.green.tint} stroke={TONES.green.deep} seed={102} sw={2} />
      <Type x={80} y={112} size={18} weight={700}>
        RESULTS
      </Type>
      <Type x={470} y={112} size={18} weight={700}>
        DISCUSSION
      </Type>
      <Floor y={floor} x1={40} x2={760} seed={103} />

      <Grid x={200} y={140} cols={2} rows={3} cw={90} rh={36} header="blue" seed={104} />
      <Hand x={245} y={164} size={16} anchor="middle" weight={700}>
        busy
      </Hand>
      <Hand x={335} y={164} size={16} anchor="middle" weight={700}>
        quiet
      </Hand>
      <Type x={245} y={202} size={18} anchor="middle">
        41
      </Type>
      <Type x={335} y={202} size={18} anchor="middle">
        29
      </Type>
      <Hand x={290} y={238} size={14} anchor="middle" c={INK_SOFT}>
        pieces per kg
      </Hand>
      <Hand x={290} y={290} size={18} anchor="middle" c={INK_SOFT}>
        what was found
      </Hand>

      <Shadow x={130} y={floor + 2} rx={28} ry={4} />
      <Place x={130} y={floor} s={1.45}>
        <g className="s-res1-counter">
          <Pip mood="happy" arms="point" tone="blue" glasses look={1.5} seed={105} />
        </g>
      </Place>

      <Bulb x={680} y={150} s={0.9} seed={106} />
      <Thought x={575} y={225} w={170} h={74} seed={107}>
        <Hand x={575} y={220} size={17} anchor="middle">
          why did it
        </Hand>
        <Hand x={575} y={242} size={17} anchor="middle" weight={700}>
          happen?
        </Hand>
      </Thought>
      <Hand x={595} y={300} size={15} anchor="middle" c={INK_SOFT}>
        the next chapter
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Five stepping stones, crossed in order.
   ------------------------------------------------------------------ */

const STONES = [
  { word: 'the question', tone: 'blue' },
  { word: 'what you had', tone: 'amber' },
  { word: 'data checks', tone: 'pink' },
  { word: 'each answer', tone: 'green' },
  { word: 'summary', tone: 'red' },
]

const stepsCss = `
.s-res2-hopper { animation: s-res2-hop 10s ease-in-out infinite; }
@keyframes s-res2-hop {
  0%, 8% { transform: translate(0, 0); }
  13% { transform: translate(70px, -40px); }
  18%, 26% { transform: translate(140px, 0); }
  31% { transform: translate(210px, -40px); }
  36%, 44% { transform: translate(280px, 0); }
  49% { transform: translate(350px, -40px); }
  54%, 62% { transform: translate(420px, 0); }
  67% { transform: translate(490px, -40px); }
  72%, 88% { transform: translate(560px, 0); }
  100% { transform: translate(0, 0); }
}
`

export function StepsScene() {
  const y = 300
  return (
    <Scene w={800} h={225} top={170} css={stepsCss} className="s-res2" label="Five stepping stones across a stream, labelled the question, what you had, data checks, each answer and summary, and a paper character hops from one to the next">
      <Wave x1={20} x2={780} y={y + 14} amp={3} length={26} seed={201} c={TONES.blue.ink} w={1.6} />
      <Wave x1={40} x2={760} y={y + 30} amp={3} length={30} seed={202} c={TONES.blue.ink} w={1.3} o={0.6} />
      {STONES.map((stone, i) => {
        const x = 100 + i * 140
        const t = TONES[stone.tone]
        return (
          <g key={stone.word}>
            <Oval cx={x} cy={y + 8} rx={52} ry={14} fill={t.tint} stroke={t.deep} seed={210 + i} sw={1.8} />
            <Type x={x} y={y + 14} size={16} anchor="middle" weight={700}>
              {i + 1}
            </Type>
            <Hand x={x} y={y + 58} size={18} anchor="middle">
              {stone.word}
            </Hand>
          </g>
        )
      })}
      <Place x={0} y={0}>
        <Anim className="s-res2-hopper">
          <Place x={100} y={y + 2} s={1.15}>
            <Pip mood="happy" arms="up" tone="blue" glasses seed={220} />
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The full report of a test, and what not to write.
   ------------------------------------------------------------------ */

const NUMBERS = ['t(28) = 2.42', 'p = .022', 'd = 0.88']

const numbersCss = `
.s-res3-tick { animation: s-res3-draw 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.3s - 9s); }
.s-res3-writer .pip-body { animation: s-res3-bob 3s ease-in-out infinite; }
@keyframes s-res3-draw {
  0%, 20% { stroke-dashoffset: 1; }
  30%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-res3-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function NumbersScene() {
  const cx = 250
  const cy = 90
  return (
    <Scene w={800} h={300} top={50} css={numbersCss} className="s-res3" label="A card lists a full test result, t of 28 equals 2.42, p equals .022 and d equals 0.88, each ticked in turn, while beside it the words significant and p equals .000 are crossed out in red">
      <Floor y={330} x1={30} x2={770} seed={301} />
      <Box x={cx} y={cy} w={270} h={200} r={6} fill={PAPER} stroke={TONES.blue.deep} seed={302} sw={2.2} />
      <Hand x={cx + 20} y={cy + 34} size={20} weight={700}>
        report it fully
      </Hand>
      <Ink d={handLine(cx + 20, cy + 44, cx + 170, cy + 44, 303, 0.5)} c={TONES.blue.ink} w={2} />
      {NUMBERS.map((word, i) => {
        const y = cy + 82 + i * 42
        return (
          <g key={word}>
            <Type x={cx + 24} y={y} size={20} weight={700}>
              {word}
            </Type>
            <path
              className="s-res3-tick"
              style={{ '--i': i }}
              d={`M${cx + 216} ${y - 10}q4 3 6 9q6 -14 15 -22`}
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

      <Hand x={640} y={140} size={22} anchor="middle" c={TONES.red.deep}>
        significant!!
      </Hand>
      <Ink d={handLine(570, 134, 712, 132, 304, 0.6)} c={TONES.red.ink} w={2.6} />
      <Type x={640} y={210} size={20} anchor="middle" c={TONES.red.deep}>
        p = .000
      </Type>
      <Ink d={handLine(586, 204, 694, 202, 305, 0.6)} c={TONES.red.ink} w={2.6} />
      <Hand x={640} y={258} size={16} anchor="middle" c={INK_SOFT}>
        write p &lt; .001
      </Hand>

      <Shadow x={140} y={332} rx={28} ry={4} />
      <Place x={140} y={330} s={1.5}>
        <g className="s-res3-writer">
          <Pip mood="focused" arms="write" tone="blue" glasses look={1.5} seed={306} />
        </g>
      </Place>
      <Pencil x={190} y={300} length={70} angle={-60} tone="amber" seed={307} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. One set of numbers, shown once.
   ------------------------------------------------------------------ */

const tablesCss = `
.s-res4-keep { animation: s-res4-pulse 4s ease-in-out infinite; }
@keyframes s-res4-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
`

export function TablesScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={tablesCss} className="s-res4" label="The same six averages appear three times, as a table, as a bar chart and as a page of text; the table is ticked and kept, the chart is crossed out as the same numbers, and the page carries one sentence">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Place x={0} y={0}>
        <Anim className="s-res4-keep" spin>
          <Grid x={60} y={110} cols={3} rows={4} cw={58} rh={34} header="amber" seed={402} />
        </Anim>
      </Place>
      <Hand x={147} y={278} size={19} anchor="middle" weight={700}>
        table: keep
      </Hand>
      <Tick x={250} y={96} s={1.6} />

      <Chart x={330} y={260} w={160} h={130} bars={[0.62, 0.8, 0.7, 0.55, 0.9, 0.4]} tone="blue" seed={403} />
      <Cross x={410} y={190} s={3} seed={404} />
      <Hand x={410} y={298} size={17} anchor="middle" c={TONES.red.deep}>
        same numbers again
      </Hand>

      <Sheet x={560} y={110} w={150} h={180} lines={0} fold={20} seed={405} />
      <path d="M574 172h118v26h-118Z" fill={TONES.amber.tint} />
      <Ink d={handLine(576, 166, 690, 166, 406, 0.4) + handLine(576, 185, 670, 185, 407, 0.4)} c={INK} w={1.8} />
      <Ink d={handLine(576, 230, 680, 230, 408, 0.4) + handLine(576, 248, 650, 248, 409, 0.4)} c={TONES.grey.mid} w={1.6} />
      <Hand x={635} y={150} size={15} anchor="middle" c={INK_SOFT}>
        one sentence
      </Hand>
      <Hand x={635} y={318} size={19} anchor="middle" weight={700}>
        text: the pattern
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The beach that spoiled the pattern goes back on the map.
   ------------------------------------------------------------------ */

const BEACHES = [
  { x: 120, tone: 'red', word: 'busy' },
  { x: 220, tone: 'red', word: 'busy' },
  { x: 320, tone: 'red', word: 'busy' },
  { x: 430, tone: 'green', word: 'quiet' },
  { x: 530, tone: 'green', word: 'quiet' },
]

const negativeCss = `
.s-res5-back { animation: s-res5-plant 6s ease-in-out infinite; }
.s-res5 .flag-cloth { animation: s-res5-flutter 2.4s ease-in-out infinite; }
.s-res5-mark { opacity: 0; animation: s-res5-flash 6s ease-in-out infinite; }
@keyframes s-res5-plant {
  0%, 100% { transform: translateY(0); }
  15% { transform: translateY(-34px); }
  30% { transform: translateY(0); }
}
@keyframes s-res5-flutter {
  0%, 100% { transform: skewY(0deg); }
  50% { transform: skewY(-5deg); }
}
@keyframes s-res5-flash {
  0%, 30% { opacity: 0; }
  36%, 60% { opacity: 1; }
  70%, 100% { opacity: 0; }
}
`

export function NegativeScene() {
  const sand = 290
  return (
    <Scene w={800} h={240} top={110} css={negativeCss} className="s-res5" label="A strip of coast with six beach flags, three marked busy and three quiet; a river runs into the sea beside the sixth flag, which is planted back in place and labelled highest count">
      <path d={`M20 ${sand}H780V316H20Z`} fill={TONES.amber.tint} />
      <path d={`M20 ${sand}H780V316H20Z`} fill="url(#ink-dots)" />
      <path d="M20 316H780V340H20Z" fill={TONES.blue.tint} />
      <Ink d={handLine(20, sand, 780, sand, 501, 1)} w={1.8} />
      <Wave x1={20} x2={780} y={316} amp={2.5} length={24} seed={502} c={TONES.blue.ink} w={1.6} />
      <Wave x1={40} x2={760} y={330} amp={2} length={30} seed={503} c={TONES.blue.ink} w={1.2} o={0.6} />

      {/* the river coming down to the sea by the sixth beach */}
      <path d="M700 60Q660 140 690 200Q720 250 680 316L724 316Q760 250 730 200Q700 140 740 60Z" fill={TONES.blue.tint} />
      <Ink d="M700 60Q660 140 690 200Q720 250 680 316" c={TONES.blue.deep} w={1.8} />
      <Ink d="M740 60Q700 140 730 200Q760 250 724 316" c={TONES.blue.deep} w={1.8} />
      <Hand x={744} y={150} size={15} c={TONES.blue.deep}>
        river
      </Hand>

      {BEACHES.map((beach, i) => (
        <g key={i}>
          <Flag x={beach.x} y={sand} h={80} tone={beach.tone} seed={510 + i} />
          <Hand x={beach.x + 4} y={sand + 18} size={14} anchor="middle" c={INK_SOFT}>
            {beach.word}
          </Hand>
        </g>
      ))}

      <Place x={0} y={0}>
        <Anim className="s-res5-back">
          <Flag x={630} y={sand} h={80} tone="green" seed={520} />
        </Anim>
      </Place>
      <Hand x={634} y={sand + 18} size={14} anchor="middle" c={INK_SOFT}>
        quiet
      </Hand>
      <Hand x={600} y={150} size={18} anchor="middle" weight={700} c={TONES.red.deep}>
        highest count
      </Hand>
      <Arrow from={[600, 158]} to={[628, 196]} bend={0.2} seed={521} c={TONES.red.deep} />
      <g className="s-res5-mark">
        <Hand x={470} y={160} size={20} anchor="middle" weight={700}>
          put it back!
        </Hand>
      </g>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. A theme on top, the voices underneath.
   ------------------------------------------------------------------ */

const VOICES = [
  { x: 150, code: 'S2' },
  { x: 330, code: 'S5' },
  { x: 510, code: 'S7' },
]

const qualitativeCss = `
.s-res6-voice { animation: s-res6-pop 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s - 6s); }
.s-res6-reader .pip-arm-r { animation: s-res6-point 3s ease-in-out infinite; }
@keyframes s-res6-pop {
  0%, 100% { transform: translateY(0); }
  10% { transform: translateY(-6px); }
  20% { transform: translateY(0); }
}
@keyframes s-res6-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

export function QualitativeScene() {
  const floor = 340
  return (
    <Scene w={800} h={300} top={50} css={qualitativeCss} className="s-res6" label="A theme card reading the river brings it sits above three speech bubbles from shack owners coded S2, S5 and S7, joined to the card by lines, while a paper character points at the theme">
      <Floor y={floor} x1={30} x2={770} seed={601} />
      <Box x={200} y={70} w={380} h={60} r={8} fill={TONES.green.tint} stroke={TONES.green.deep} seed={602} sw={2.2} />
      <Type x={220} y={92} size={14} c={INK_SOFT}>
        THEME 1
      </Type>
      <Hand x={390} y={118} size={24} anchor="middle" weight={700}>
        "the river brings it"
      </Hand>

      {VOICES.map((voice, i) => (
        <g key={voice.code}>
          <Ink d={handLine(390, 132, voice.x + 70, 190, 610 + i, 0.6)} c={TONES.green.deep} w={1.4} o={0.7} />
          <Place x={0} y={0}>
            <Anim className="s-res6-voice" style={{ '--i': i }}>
              <Speech x={voice.x} y={190} w={140} h={60} tx={voice.x + 40} ty={274} seed={620 + i}>
                <Ink d={handLine(voice.x + 14, 212, voice.x + 120, 212, 630 + i, 0.4) + handLine(voice.x + 14, 230, voice.x + 96, 230, 640 + i, 0.4)} c={INK_SOFT} w={1.6} />
              </Speech>
              <Type x={voice.x + 70} y={296} size={16} anchor="middle" weight={700}>
                {voice.code}
              </Type>
            </Anim>
          </Place>
        </g>
      ))}

      <Shadow x={720} y={floor + 2} rx={28} ry={4} />
      <Place x={720} y={floor} s={1.45} flip>
        <g className="s-res6-reader">
          <Pip mood="happy" arms="point" tone="blue" glasses seed={650} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The first draft explained; the rewrite reported.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-res7-proud .pip-body { animation: s-res7-hop 3s ease-in-out infinite; }
.s-res7-stamp { animation: s-res7-thump 6s ease-in-out infinite; }
@keyframes s-res7-hop {
  0%, 100% { transform: translateY(0); }
  45% { transform: translateY(-8px); }
  55% { transform: translateY(0); }
}
@keyframes s-res7-thump {
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.12); }
  20% { transform: scale(1); }
}
`

export function ExampleScene() {
  const floor = 340
  return (
    <Scene w={800} h={300} top={50} css={exampleCss} className="s-res7" label="Two drafts side by side: the first draft is a pile of pasted output tables with the word proves scrawled on it and is crossed out, and the rewrite is a clean page with one table and a green tick, while a proud paper character stands between them">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Sheet x={70} y={80} w={200} h={240} lines={0} fold={24} seed={702} />
      <Grid x={88} y={118} cols={4} rows={3} cw={40} rh={18} header="grey" seed={703} />
      <Grid x={88} y={186} cols={4} rows={3} cw={40} rh={18} header="grey" seed={704} />
      <Hand x={170} y={280} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
        proves!!
      </Hand>
      <Cross x={170} y={200} s={4} seed={705} />
      <Hand x={170} y={68} size={18} anchor="middle" c={INK_SOFT}>
        first draft
      </Hand>

      <Sheet x={530} y={80} w={200} h={240} lines={0} fold={24} seed={706} />
      <Ink d={handLine(548, 128, 700, 128, 707, 0.4) + handLine(548, 146, 690, 146, 708, 0.4) + handLine(548, 164, 660, 164, 709, 0.4)} c={TEXT_LINE} w={1.6} />
      <Grid x={560} y={186} cols={3} rows={3} cw={46} rh={22} header="blue" seed={710} />
      <Place x={0} y={0}>
        <Anim className="s-res7-stamp" spin>
          <StampMark x={650} y={292} w={130} h={36} text="REPORTED" tone="green" rotate={-6} size={17} bg={PAPER} seed={711} />
        </Anim>
      </Place>
      <Tick x={712} y={92} s={1.8} />
      <Hand x={630} y={68} size={18} anchor="middle" c={INK_SOFT}>
        rewrite
      </Hand>

      <Shadow x={400} y={floor + 2} rx={30} ry={4} />
      <Place x={400} y={floor} s={1.55}>
        <g className="s-res7-proud">
          <Pip mood="proud" arms="up" tone="blue" glasses seed={712} />
        </g>
      </Place>
    </Scene>
  )
}

