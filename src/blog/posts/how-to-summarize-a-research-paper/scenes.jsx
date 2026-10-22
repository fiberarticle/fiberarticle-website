import {
  Anim,
  Arrow,
  Bot,
  Box,
  Clock,
  Cross,
  Desk,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  handEllipse,
  handLine,
} from '../../ink/index.js'

/*
 * The summary card: a small sheet titled "my summary" with four rows, one
 * each for what the paper asked, what was done, what was found and what it
 * means. The line after each word is drawn with pathLength 1 and a scaling
 * stroke, so a scene can write it on with stroke-dashoffset (`lineClass`).
 * Anchor: top-left.
 */
const PARTS = [
  { word: 'asked', tone: 'amber' },
  { word: 'did', tone: 'green' },
  { word: 'found', tone: 'pink' },
  { word: 'means', tone: 'blue' },
]

export function SummaryCard({ x, y, w = 190, h = 190, seed = 1, lineClass }) {
  const rowH = (h - 52) / PARTS.length
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={6} fill={PAPER} seed={seed} sw={2} />
      <Hand x={x + w / 2} y={y + 32} size={21} anchor="middle" weight={700}>
        my summary
      </Hand>
      <Ink d={handLine(x + 18, y + 42, x + w - 18, y + 42, seed + 1, 0.4)} c={INK_SOFT} w={1.2} />
      {PARTS.map((part, i) => {
        const ry = y + 52 + rowH * i + rowH / 2
        return (
          <g key={part.word}>
            <circle cx={x + 20} cy={ry - 5} r={5} fill={TONES[part.tone].mid} />
            <Hand x={x + 32} y={ry} size={17} weight={700}>
              {part.word}
            </Hand>
            <Ink
              d={handLine(x + 92, ry - 4, x + w - 18 - ((i * 17) % 30), ry - 4, seed + 10 + i, 0.4)}
              c={TONES[part.tone].deep}
              w={2.2}
              scale
              pathLength={1}
              dash="1"
              className={lineClass}
              style={{ '--i': i }}
            />
          </g>
        )
      })}
    </g>
  )
}

/* ------------------------------------------------------------------
   1. What a summary is: one long paper, four short answers.
   ------------------------------------------------------------------ */

const defineCss = `
.s-srp1-note { animation: s-srp1-note 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
.s-srp1-pip .pip-body { animation: s-srp1-bob 3s ease-in-out infinite; }
@keyframes s-srp1-note {
  0%, 30%, 100% { transform: rotate(0deg); }
  10% { transform: rotate(-4deg); }
  20% { transform: rotate(3deg); }
}
@keyframes s-srp1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const NOTES = [
  { text: 'what it asked', tone: 'amber' },
  { text: 'what they did', tone: 'green' },
  { text: 'what they found', tone: 'pink' },
  { text: 'what it means', tone: 'blue' },
]

export function DefineScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={defineCss} className="s-srp1" label="On the left a long paper covered in lines, labelled the paper. An arrow leads past a thinking paper character to four sticky notes on the right that read what it asked, what they did, what they found and what it means">
      <Floor y={floor} x1={30} x2={770} seed={101} />

      <Sheet x={70} y={70} w={150} h={240} lines={16} fold={22} seed={102} title />
      <Hand x={145} y={60} size={20} anchor="middle" weight={700}>
        the paper
      </Hand>

      <Arrow from={[232, 190]} to={[420, 190]} bend={-0.08} seed={103} c={TONES.green.deep} w={2} />

      <Shadow x={318} y={floor + 2} rx={28} ry={4} />
      <Place x={318} y={floor} s={1.55}>
        <g className="s-srp1-pip">
          <Pip mood="focused" arms="think" glasses look={1.2} seed={104} />
        </g>
      </Place>

      {NOTES.map((note, i) => {
        const nx = 440 + (i % 2) * 168
        const ny = 66 + Math.floor(i / 2) * 128
        return (
          <Anim key={note.text} className="s-srp1-note" origin={[nx + 76, ny]} style={{ '--i': i }}>
            <Sticky x={nx} y={ny} w={152} h={104} tone={note.tone} lines={0} seed={110 + i} />
            <Hand x={nx + 76} y={ny + 62} size={19} anchor="middle" weight={700}>
              {note.text}
            </Hand>
          </Anim>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Summary vs abstract: the authors' box at the top of the paper,
      and the reader's own card.
   ------------------------------------------------------------------ */

const versusCss = `
.s-srp2-arm .pip-arm-r { animation: s-srp2-write 1s ease-in-out infinite; }
.s-srp2-glow { animation: s-srp2-glow 4s ease-in-out infinite; }
@keyframes s-srp2-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
@keyframes s-srp2-glow {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.7; }
}
`

export function VersusScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={36} css={versusCss} className="s-srp2" label="On the left a journal paper whose top box, shaded blue, is labelled abstract, by the authors. In the middle the letters vs. On the right a paper character writes on a card labelled summary, by you">
      <Floor y={floor} x1={30} x2={770} seed={201} />

      <Sheet x={90} y={70} w={200} h={256} lines={0} fold={24} seed={202} />
      <rect x={106} y={100} width={150} height={74} fill={TONES.blue.tint} className="s-srp2-glow" />
      <Box x={106} y={100} w={150} h={74} r={4} seed={203} sw={1.5} />
      <Hand x={181} y={128} size={20} anchor="middle" weight={700}>
        abstract
      </Hand>
      <Ink d={handLine(122, 146, 240, 146, 204, 0.3) + handLine(122, 160, 214, 160, 205, 0.3)} c={TONES.blue.deep} w={1.5} o={0.6} />
      <Ink
        d={[0, 1, 2, 3, 4, 5].map((i) => handLine(106, 196 + i * 20, 256 - ((i * 23) % 50), 196 + i * 20, 206 + i, 0.35)).join('')}
        c={TEXT_LINE}
        w={1.6}
      />
      <Hand x={190} y={58} size={18} anchor="middle" c={INK_SOFT}>
        by the authors
      </Hand>

      <Hand x={400} y={210} size={34} anchor="middle" weight={700} c={INK_SOFT}>
        vs
      </Hand>

      <Box x={480} y={110} w={170} h={150} r={6} fill={TONES.green.tint} seed={210} sw={1.9} />
      <Hand x={565} y={146} size={22} anchor="middle" weight={700}>
        summary
      </Hand>
      <Ink d={[0, 1, 2, 3].map((i) => handLine(500, 176 + i * 20, 630 - ((i * 29) % 46), 176 + i * 20, 211 + i, 0.35)).join('')} c={TONES.green.deep} w={1.6} o={0.7} />
      <Hand x={565} y={98} size={18} anchor="middle" c={INK_SOFT}>
        by you
      </Hand>

      <Shadow x={712} y={floor + 2} rx={28} ry={4} />
      <Place x={712} y={floor} s={1.6} flip>
        <g className="s-srp2-arm">
          <Pip mood="happy" arms="write" tone="amber" look={1.4} seed={220}>
            <Pencil x={25} y={-17} length={34} angle={-62} tone="red" seed={221} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Reading order: a magnifier visits the parts of the paper in the
      order the post suggests.
   ------------------------------------------------------------------ */

const readCss = `
.s-srp3-lens { animation: s-srp3-lens 10s ease-in-out infinite; }
@keyframes s-srp3-lens {
  0%, 12% { transform: translateY(0); }
  18%, 30% { transform: translateY(36px); }
  36%, 48% { transform: translateY(180px); }
  54%, 64% { transform: translateY(72px); }
  68%, 76% { transform: translateY(108px); }
  82%, 92% { transform: translateY(144px); }
  100% { transform: translateY(0); }
}
`

const ROWS = [
  { name: 'abstract', order: '1' },
  { name: 'introduction', order: '2' },
  { name: 'methods', order: '4' },
  { name: 'results', order: '4' },
  { name: 'discussion', order: '5' },
  { name: 'conclusion', order: '3' },
]

export function ReadScene() {
  const floor = 350
  const px = 230
  const top = 92
  const rowH = 36
  return (
    <Scene w={800} h={320} top={36} css={readCss} className="s-srp3" label="A paper divided into six parts, abstract, introduction, methods, results, discussion and conclusion, each with a number showing the reading order: abstract 1, introduction 2, conclusion 3, methods and results 4, discussion 5. A magnifying glass moves down the parts in that order while a paper character in glasses watches">
      <Floor y={floor} x1={30} x2={770} seed={301} />

      <Sheet x={px} y={56} w={300} h={276} lines={0} fold={24} seed={302} />
      {ROWS.map((row, i) => {
        const ry = top + i * rowH
        const first = row.order === '1' || row.order === '2' || row.order === '3'
        return (
          <g key={row.name}>
            {i > 0 ? <Ink d={handLine(px + 10, ry, px + 290, ry, 310 + i, 0.3)} c={TEXT_LINE} w={1.3} /> : null}
            <Hand x={px + 18} y={ry + 25} size={19} weight={700} c={first ? INK : INK_SOFT}>
              {row.name}
            </Hand>
            <circle cx={px + 266} cy={ry + 18} r={13} fill={first ? TONES.amber.mid : TONES.grey.tint} />
            <Ink d={handEllipse(px + 266, ry + 18, 13, 13, { seed: 320 + i, amp: 0.4 })} w={1.4} />
            <Hand x={px + 266} y={ry + 25} size={18} anchor="middle" weight={700}>
              {row.order}
            </Hand>
          </g>
        )
      })}

      <Place x={0} y={0}>
        <Anim className="s-srp3-lens">
          <Magnifier x={px + 196} y={top + 18} r={22} angle={40} tone="amber" seed={330} />
        </Anim>
      </Place>

      <Hand x={640} y={110} size={19} anchor="middle" c={INK_SOFT}>
        big picture first,
      </Hand>
      <Hand x={640} y={136} size={19} anchor="middle" c={INK_SOFT}>
        details after
      </Hand>
      <Shadow x={650} y={floor + 2} rx={28} ry={4} />
      <Place x={650} y={floor} s={1.6} flip>
        <Pip mood="focused" arms="hold" tone="blue" glasses look={1.6} seed={340} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The six steps: a list whose boxes tick themselves one by one.
   ------------------------------------------------------------------ */

const stepsCss = `
.s-srp4-tick { animation: s-srp4-tick 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
.s-srp4-pip .pip-body { animation: s-srp4-bob 3s ease-in-out infinite; }
@keyframes s-srp4-tick {
  0%, 100% { stroke-dashoffset: 0; }
  6% { stroke-dashoffset: 1; }
  16%, 90% { stroke-dashoffset: 0; }
}
@keyframes s-srp4-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const STEPS = ['the question', 'design and sample', 'main findings', 'the conclusion', 'own words, paper shut', 'check, then cut']

export function StepsScene() {
  const floor = 350
  const lx = 250
  const ly = 70
  return (
    <Scene w={800} h={320} top={36} css={stepsCss} className="s-srp4" label="A clipboard list of six steps, the question, design and sample, main findings, the conclusion, own words with the paper shut, and check then cut, each with a green tick. A pencil lies beside it and a paper character points at the list">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Box x={lx} y={ly} w={300} h={262} r={8} fill={PAPER} seed={402} sw={2} />
      <rect x={lx + 128} y={ly - 9} width="44" height="18" rx="4" fill={TONES.grey.mid} />
      <Box x={lx + 128} y={ly - 9} w={44} h={18} r={3} seed={403} sw={1.4} />
      {STEPS.map((step, i) => {
        const ry = ly + 26 + i * 38
        return (
          <g key={step}>
            <Box x={lx + 22} y={ry} w={20} h={20} seed={410 + i} sw={1.5} fill={PAPER} />
            <Hand x={lx + 58} y={ry + 17} size={19} weight={700}>
              {step}
            </Hand>
            <path
              className="s-srp4-tick"
              style={{ '--i': i }}
              d={`M${lx + 23} ${ry + 10}q4 3 6 9q6 -14 16 -20`}
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

      <Pencil x={575} y={330} length={110} angle={-70} tone="amber" seed={420} />

      <Shadow x={110} y={floor + 2} rx={28} ry={4} />
      <Place x={110} y={floor} s={1.65}>
        <g className="s-srp4-pip">
          <Pip mood="happy" arms="point" tone="pink" look={1.6} seed={430} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. How long: one sentence, one paragraph, half a page.
   ------------------------------------------------------------------ */

const lengthCss = `
.s-srp5-sheet { animation: s-srp5-hop 5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s); }
@keyframes s-srp5-hop {
  0%, 30%, 100% { transform: translateY(0); }
  12% { transform: translateY(-10px); }
  20% { transform: translateY(0); }
}
`

const SIZES = [
  { label: 'one sentence', h: 40, lines: 1 },
  { label: 'one paragraph', h: 110, lines: 6 },
  { label: 'half a page', h: 200, lines: 12 },
]

export function LengthScene() {
  const desk = 300
  return (
    <Scene w={800} h={330} top={20} css={lengthCss} className="s-srp5" label="Three sheets standing on a desk, a short strip labelled one sentence, a medium sheet labelled one paragraph and a tall sheet labelled half a page. A sticky note above reads your limit wins, and a paper character shrugs beside them">
      <Desk y={desk} x1={30} x2={770} seed={501} />

      {SIZES.map((size, i) => {
        const sx = 110 + i * 170
        return (
          <g key={size.label}>
            <Anim className="s-srp5-sheet" style={{ '--i': i }}>
              <Sheet x={sx} y={desk - size.h} w={120} h={size.h} lines={size.lines} fold={Math.min(16, size.h / 3)} seed={510 + i * 3} />
            </Anim>
            <Hand x={sx + 60} y={desk + 46} size={19} anchor="middle" weight={700}>
              {size.label}
            </Hand>
          </g>
        )
      })}

      <Sticky x={590} y={40} w={150} h={84} tone="amber" lines={0} seed={520} />
      <Hand x={665} y={92} size={21} anchor="middle" weight={700}>
        your limit wins
      </Hand>

      <Shadow x={700} y={desk - 1} rx={26} ry={4} />
      <Place x={700} y={desk} s={1.5} flip>
        <Pip mood="happy" arms="shrug" tone="green" look={1} seed={530} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The format: four coloured bands on one page, the widest for the
      findings.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-srp6-band { animation: s-srp6-band 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); transform-box: fill-box; transform-origin: 0 50%; }
@keyframes s-srp6-band {
  0%, 100% { transform: scaleX(1); }
  6% { transform: scaleX(0); }
  20%, 90% { transform: scaleX(1); }
}
`

const BANDS = [
  { word: 'why', note: 'the question', tone: 'amber', h: 34 },
  { word: 'how', note: 'design, sample', tone: 'green', h: 44 },
  { word: 'found', note: 'most of the words', tone: 'pink', h: 86 },
  { word: 'means', note: 'conclusion, limit', tone: 'blue', h: 44 },
]

export function ExampleScene() {
  const floor = 350
  const sx = 200
  let y = 92
  const bands = BANDS.map((band, i) => {
    const by = y
    y += band.h + 8
    return { ...band, by, i }
  })
  return (
    <Scene w={800} h={320} top={36} css={exampleCss} className="s-srp6" label="One page of summary marked in four coloured bands from top to bottom, why for the question, how for design and sample, found for most of the words, and means for the conclusion and its limit. The found band is the widest. A paper character points at it">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Sheet x={sx} y={60} w={260} h={274} lines={0} fold={22} seed={602} />
      {bands.map((band) => (
        <g key={band.word}>
          <rect x={sx + 16} y={band.by} width={228} height={band.h} fill={TONES[band.tone].mid} opacity="0.55" className="s-srp6-band" style={{ '--i': band.i }} />
          <Ink
            d={Array.from({ length: Math.max(1, Math.floor(band.h / 16)) }, (_, k) => handLine(sx + 26, band.by + 12 + k * 16, sx + 230 - ((k * 31 + band.i * 13) % 60), band.by + 12 + k * 16, 610 + band.i * 5 + k, 0.3)).join('')}
            c={TONES[band.tone].deep}
            w={1.5}
            o={0.75}
          />
          <Hand x={sx + 280} y={band.by + band.h / 2 + 2} size={20} weight={700}>
            {band.word}
          </Hand>
          <Hand x={sx + 280} y={band.by + band.h / 2 + 22} size={15} c={INK_SOFT}>
            {band.note}
          </Hand>
        </g>
      ))}

      <Shadow x={110} y={floor + 2} rx={28} ry={4} />
      <Place x={110} y={floor} s={1.6}>
        <Pip mood="grin" arms="point" tone="blue" glasses look={1.6} seed={630} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Mistakes and AI: a robot's quick draft, checked against the paper.
   ------------------------------------------------------------------ */

const aiCss = `
.s-srp7-lens { animation: s-srp7-lens 6s ease-in-out infinite; }
.s-srp7-ring { animation: s-srp7-ring 6s ease-in-out infinite; }
@keyframes s-srp7-lens {
  0%, 100% { transform: translate(0, 0); }
  40% { transform: translate(-150px, 10px); }
  60% { transform: translate(-150px, 10px); }
}
@keyframes s-srp7-ring {
  0%, 40%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
`

export function AiScene() {
  const floor = 350
  return (
    <Scene w={800} h={320} top={36} css={aiCss} className="s-srp7" label="A small robot hands over a draft summary in which one line is circled in red with a question mark. Next to it lies the original paper with a tick. A magnifying glass moves between the draft and the paper while a paper character in glasses compares them">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Bot x={100} y={floor} s={1.3} tone="blue" seed={702} />
      <Arrow from={[160, 250]} to={[214, 228]} bend={-0.2} seed={703} />

      <Sheet x={226} y={120} w={150} h={196} lines={0} fold={20} seed={704} />
      <Hand x={301} y={110} size={18} anchor="middle" c={INK_SOFT}>
        AI draft
      </Hand>
      <Ink
        d={[0, 1, 2, 3, 4, 5, 6].map((i) => handLine(240, 160 + i * 20, 360 - ((i * 19) % 44), 160 + i * 20, 710 + i, 0.35)).join('')}
        c={TEXT_LINE}
        w={1.7}
      />
      <g className="s-srp7-ring">
        <Ink d={handEllipse(296, 220, 66, 13, { seed: 720, amp: 0.6 })} c={TONES.red.ink} w={2.4} />
        <Hand x={374} y={212} size={28} weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      </g>

      <Sheet x={444} y={110} w={160} h={206} lines={14} fold={22} seed={730} title />
      <Hand x={524} y={100} size={18} anchor="middle" c={INK_SOFT}>
        the paper
      </Hand>
      <Tick x={600} y={96} s={1.4} />

      <Place x={0} y={0}>
        <Anim className="s-srp7-lens">
          <Magnifier x={470} y={214} r={24} angle={40} tone="green" seed={740} />
        </Anim>
      </Place>

      <Cross x={252} y={333} s={0.9} seed={741} />
      <Hand x={268} y={339} size={16} c={TONES.red.deep}>
        not final
      </Hand>

      <Shadow x={700} y={floor + 2} rx={28} ry={4} />
      <Place x={700} y={floor} s={1.6} flip>
        <Pip mood="focused" arms="think" tone="amber" glasses look={1.6} seed={750} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Journal club: a short summary, a clock, and the discussion after.
   ------------------------------------------------------------------ */

const seminarCss = `
.s-srp8 .clock-min { animation: s-srp8-min 6s linear infinite; }
.s-srp8-talk .pip-arm-r { animation: s-srp8-point 2.4s ease-in-out infinite; }
.s-srp8-nod .pip-body { animation: s-srp8-nod 2.8s ease-in-out infinite; animation-delay: calc(var(--i) * -0.7s); }
@keyframes s-srp8-min {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes s-srp8-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
@keyframes s-srp8-nod {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function SeminarScene() {
  const floor = 350
  return (
    <Scene w={800} h={320} top={36} css={seminarCss} className="s-srp8" label="A seminar room board with a summary card pinned on it, under the words what was done and what was found, and a clock labelled under five minutes. A paper character points at the board while three smaller paper characters listen, one saying strengths too">
      <Floor y={floor} x1={30} x2={770} seed={801} />

      <Box x={60} y={56} w={330} h={220} r={6} fill={TONES.green.deep} stroke={INK} seed={802} sw={2.2} />
      <rect x={60} y={56} width={330} height={220} fill="url(#ink-hatch-light)" opacity="0.5" />
      <Hand x={225} y={92} size={20} anchor="middle" weight={700} c={PAPER}>
        what was done
      </Hand>
      <Hand x={225} y={120} size={20} anchor="middle" weight={700} c={PAPER}>
        what was found
      </Hand>
      <Sheet x={110} y={140} w={110} h={116} lines={6} fold={16} seed={803} />
      <Clock x={300} y={196} r={40} seed={804} />
      <Hand x={300} y={262} size={16} anchor="middle" c={PAPER}>
        under 5 minutes
      </Hand>
      <Ink d={handLine(110, 276, 100, floor, 805, 0.4) + handLine(340, 276, 350, floor, 806, 0.4)} w={2.2} c={TONES.brown.deep} />

      <Shadow x={455} y={floor + 2} rx={28} ry={4} />
      <Place x={455} y={floor} s={1.6} flip>
        <g className="s-srp8-talk">
          <Pip mood="happy" arms="point" tone="amber" look={-1.2} seed={810} />
        </g>
      </Place>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Shadow x={580 + i * 66} y={floor + 2} rx={20} ry={3} />
          <Place x={580 + i * 66} y={floor} s={1.1} flip>
            <g className="s-srp8-nod" style={{ '--i': i }}>
              <Pip mood={i === 1 ? 'grin' : 'focused'} tone={['blue', 'pink', 'paper'][i]} look={1.4} seed={820 + i * 5} />
            </g>
          </Place>
        </g>
      ))}
      <Speech x={600} y={150} w={160} h={50} tx={650} ty={262} seed={840}>
        <Hand x={680} y={182} size={18} anchor="middle" weight={700}>
          strengths too
        </Hand>
      </Speech>
    </Scene>
  )
}
