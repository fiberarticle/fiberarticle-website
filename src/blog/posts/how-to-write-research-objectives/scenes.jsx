import {
  Anim,
  Arrow,
  Box,
  Chai,
  Cross,
  Desk,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Lamp,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scene,
  Shadow,
  Spine,
  Sparkle,
  TEXT_LINE,
  TONES,
  Target,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'
import { Stone } from './hero.jsx'

/* ------------------------------------------------------------------
   1. A job you can tick off: the clipboard of four objectives.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-wro1-tick { animation: s-wro1-draw 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s); }
@keyframes s-wro1-draw {
  0%, 6% { stroke-dashoffset: 1; }
  20%, 82% { stroke-dashoffset: 0; }
  96%, 100% { stroke-dashoffset: 1; }
}
.s-wro1 .pip-arm-r { animation: s-wro1-scribble 1.4s ease-in-out infinite; }
@keyframes s-wro1-scribble {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

const JOBS = ['To map', 'To estimate', 'To compare', 'To identify']

export function MeaningScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={meaningCss}
      className="s-wro1"
      label="A paper character with a pencil stands beside a clipboard listing four objectives, to map, to estimate, to compare and to identify, each with a box that gets a green tick"
    >
      <Hand x={400} y={46} size={28} anchor="middle" weight={700}>
        an objective is a job you can tick off
      </Hand>
      <Floor y={FLOOR} x1={60} x2={740} seed={101} />

      <Box x={330} y={78} w={290} h={212} r={8} fill={PAPER} seed={102} sw={2} />
      <rect x={445} y={68} width={60} height={20} rx={4} fill={TONES.grey.mid} />
      <Ink d={handLine(445, 68, 505, 68, 103, 0.3) + handLine(505, 68, 505, 88, 104, 0.3) + handLine(505, 88, 445, 88, 105, 0.3) + handLine(445, 88, 445, 68, 106, 0.3)} w={1.4} />
      {JOBS.map((job, i) => {
        const y = 112 + i * 44
        return (
          <g key={job}>
            <Box x={352} y={y} w={22} h={22} seed={110 + i} sw={1.5} fill={PAPER} />
            <path
              className="s-wro1-tick"
              style={{ '--i': i }}
              d={`M${354} ${y + 11}q4 3 7 10q7 -15 18 -22`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke="#3f8f4f"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Hand x={390} y={y + 18} size={22}>
              {`${i + 1}. ${job}`}
            </Hand>
            <Ink d={handLine(545, y + 12, 600, y + 12, 120 + i, 0.4)} c={TEXT_LINE} w={1.6} />
          </g>
        )
      })}

      <Shadow x={220} y={FLOOR + 3} rx={34} ry={5} />
      <Place x={220} y={FLOOR} s={1.9}>
        <Pip mood="focused" arms="write" look={1.6} tone="blue" seed={131} />
      </Place>
      <Pencil x={268} y={270} length={70} angle={-60} tone="amber" seed={132} />

      <Shadow x={690} y={FLOOR + 3} rx={18} ry={4} />
      <Chai x={690} y={FLOOR} s={0.9} seed={133} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Aim and objectives: three numbered arrows land on one target.
   ------------------------------------------------------------------ */

const aimCss = `
.s-wro2-shot { animation: s-wro2-fly 6s ease-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-wro2-fly {
  0%, 4% { transform: translateX(-60px); opacity: 0; }
  18%, 86% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(-60px); opacity: 0; }
}
.s-wro2 .pip-arm-r { animation: s-wro2-point 3s ease-in-out infinite; }
@keyframes s-wro2-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

const SHOTS = [
  { from: [250, 120], to: [596, 166], n: 1 },
  { from: [250, 196], to: [588, 196], n: 2 },
  { from: [250, 272], to: [598, 228], n: 3 },
]

export function AimScene() {
  return (
    <Scene
      w={800}
      h={330}
      top={20}
      css={aimCss}
      className="s-wro2"
      label="Three numbered arrows, labelled objectives, fly from a paper character towards a red and white target labelled aim and land near its centre"
    >
      <Hand x={640} y={62} size={30} anchor="middle" weight={700} c={TONES.red.deep}>
        aim
      </Hand>
      <Hand x={640} y={88} size={18} anchor="middle" c={INK_SOFT}>
        what you want to achieve
      </Hand>
      <Target x={640} y={196} r={92} seed={201} />
      <Ink d={handLine(640, 288, 640, 336, 202, 0.3)} w={2.6} c={TONES.brown.deep} />

      <Hand x={300} y={62} size={30} anchor="middle" weight={700} c={TONES.blue.deep}>
        objectives
      </Hand>
      <Hand x={300} y={88} size={18} anchor="middle" c={INK_SOFT}>
        how you will get there
      </Hand>

      {SHOTS.map((shot, i) => (
        <Place key={shot.n} x={0} y={0}>
          <Anim className="s-wro2-shot" style={{ '--i': i }}>
            <Arrow from={shot.from} to={shot.to} bend={0.03} seed={210 + i} w={2.6} head={14} c={TONES.blue.deep} />
            <Box x={shot.from[0] - 34} y={shot.from[1] - 15} w={30} h={30} r={6} fill={TONES.blue.tint} seed={220 + i} sw={1.6} />
            <Type x={shot.from[0] - 19} y={shot.from[1] + 6} size={17} anchor="middle" weight={700}>
              {shot.n}
            </Type>
          </Anim>
        </Place>
      ))}

      <Shadow x={110} y={333} rx={30} ry={5} />
      <Place x={110} y={330} s={1.8}>
        <Pip mood="grin" arms="point" look={1.8} seed={231} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. General into specific: one box branches into four.
   ------------------------------------------------------------------ */

const splitCss = `
.s-wro3-leaf { animation: s-wro3-bob 4.8s ease-in-out infinite; animation-delay: calc(var(--i) * -1.2s); }
@keyframes s-wro3-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.s-wro3-spark { animation: s-wro3-twinkle 3s ease-in-out infinite; }
@keyframes s-wro3-twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
`

const SPECIFIC = [
  ['map', 'amber'],
  ['estimate', 'green'],
  ['compare', 'pink'],
  ['identify', 'red'],
]

export function SplitScene() {
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={splitCss}
      className="s-wro3"
      label="A wide box labelled general objective at the top branches with arrows into four smaller boxes labelled specific: map, estimate, compare and identify"
    >
      <Box x={240} y={36} w={320} h={70} r={12} fill={TONES.blue.tint} seed={301} sw={2.2} double />
      <Hand x={400} y={68} size={26} anchor="middle" weight={700}>
        general objective
      </Hand>
      <Hand x={400} y={94} size={17} anchor="middle" c={INK_SOFT}>
        what the study will do, in one line
      </Hand>
      <g className="s-wro3-spark">
        <Sparkle x={584} y={44} s={10} />
      </g>

      {SPECIFIC.map(([word, tone], i) => {
        const cx = 130 + i * 180
        return (
          <g key={word}>
            <Arrow from={[400, 112]} to={[cx, 188]} bend={i < 2 ? 0.08 : -0.08} seed={310 + i} c={INK_SOFT} w={1.6} />
            <Place x={0} y={0}>
              <Anim className="s-wro3-leaf" style={{ '--i': i }}>
                <Box x={cx - 70} y={198} w={140} h={74} r={10} fill={TONES[tone].tint} seed={320 + i} sw={1.8} />
                <Type x={cx - 56} y={222} size={14} c={TONES[tone].deep} weight={700}>
                  {`specific ${i + 1}`}
                </Type>
                <Hand x={cx} y={256} size={25} anchor="middle" weight={700}>
                  {`to ${word}`}
                </Hand>
              </Anim>
            </Place>
          </g>
        )
      })}
      <Hand x={400} y={312} size={18} anchor="middle" c={INK_SOFT}>
        usually one or two general, three or four specific
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Writing them: Pip at the desk, one line for each job.
   ------------------------------------------------------------------ */

const stepsCss = `
.s-wro4-pen { animation: s-wro4-write 3.2s ease-in-out infinite; }
@keyframes s-wro4-write {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(46px); }
}
.s-wro4 .pip-body { animation: s-wro4-lean 3.2s ease-in-out infinite; }
@keyframes s-wro4-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

const LINES = [
  ['Aim: how homestays affect', 700],
  ['income and work', 400],
  ['1. To map the homestays', 400],
  ['2. To estimate the income', 400],
  ['3. To compare who works', 400],
]

export function StepsScene() {
  const DESK = 276
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={stepsCss}
      className="s-wro4"
      label="A paper character stands at a desk beside a large sheet with an aim at the top and numbered objectives below it, while a pencil writes the next line, with a lamp and a glass of chai on the desk"
    >
      <Desk y={DESK} x1={40} x2={760} seed={401} />
      <Box x={300} y={36} w={330} h={226} r={6} fill={PAPER} seed={402} sw={2} />
      {LINES.map(([text, weight], i) => (
        <Hand key={i} x={322} y={76 + i * 36} size={i < 2 ? 22 : 20} weight={weight} c={i < 2 ? TONES.red.deep : INK}>
          {text}
        </Hand>
      ))}
      <Ink d={handLine(322, 248, 420, 248, 403, 0.4)} c={TEXT_LINE} w={1.8} />

      <Place x={0} y={0}>
        <Anim className="s-wro4-pen">
          <Pencil x={426} y={247} length={80} angle={-8} tone="amber" seed={404} />
        </Anim>
      </Place>

      <Place x={200} y={DESK} s={1.8}>
        <Pip mood="focused" arms="write" look={1.8} tone="green" glasses seed={411} />
      </Place>

      <Lamp x={700} y={DESK} s={1} seed={405} />
      <Chai x={650} y={DESK} s={0.85} seed={406} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. SMART, and the verbs that can be checked.
   ------------------------------------------------------------------ */

const smartCss = `
.s-wro5-letter { animation: s-wro5-pop 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s); }
@keyframes s-wro5-pop {
  0%, 100% { transform: translateY(0); }
  8% { transform: translateY(-8px); }
  16% { transform: translateY(0); }
}
.s-wro5-bad { animation: s-wro5-fade 4s ease-in-out infinite; }
@keyframes s-wro5-fade {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
`

const SMART = [
  ['S', 'specific', 'amber'],
  ['M', 'measurable', 'green'],
  ['A', 'achievable', 'blue'],
  ['R', 'relevant', 'pink'],
  ['T', 'time-bound', 'red'],
]

export function SmartScene() {
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={smartCss}
      className="s-wro5"
      label="Five coloured cards spell SMART: specific, measurable, achievable, relevant and time-bound. Below, the verbs study and understand are crossed out in red, and estimate and compare are ticked in green"
    >
      {SMART.map(([letter, word, tone], i) => {
        const x = 80 + i * 136
        return (
          <Place key={letter} x={0} y={0}>
            <Anim className="s-wro5-letter" style={{ '--i': i }}>
              <Box x={x} y={34} w={104} h={110} r={10} fill={TONES[tone].tint} seed={500 + i} sw={2} />
              <Hand x={x + 52} y={102} size={56} anchor="middle" weight={700} c={TONES[tone].deep}>
                {letter}
              </Hand>
              <Type x={x + 52} y={134} size={13} anchor="middle">
                {word}
              </Type>
            </Anim>
          </Place>
        )
      })}

      <g className="s-wro5-bad">
        <Hand x={190} y={210} size={30} anchor="middle" c={INK_SOFT}>
          to study
        </Hand>
        <Ink d={handLine(130, 202, 252, 198, 511, 0.6)} c={TONES.red.ink} w={3} />
        <Hand x={190} y={262} size={30} anchor="middle" c={INK_SOFT}>
          to understand
        </Hand>
        <Ink d={handLine(104, 254, 278, 250, 512, 0.6)} c={TONES.red.ink} w={3} />
        <Cross x={310} y={232} s={1.3} seed={513} />
      </g>

      <Arrow from={[360, 232]} to={[450, 232]} bend={-0.1} seed={514} w={2.2} />

      <Hand x={600} y={210} size={30} anchor="middle" weight={700}>
        to estimate
      </Hand>
      <Tick x={710} y={202} s={1.2} />
      <Hand x={600} y={262} size={30} anchor="middle" weight={700}>
        to compare
      </Hand>
      <Tick x={710} y={254} s={1.2} />
      <Hand x={400} y={312} size={18} anchor="middle" c={INK_SOFT}>
        can anyone check that it is done?
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Weak and strong: the vague line crossed out, the clear one kept.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-wro6-strike { animation: s-wro6-cut 6s ease-in-out infinite; }
@keyframes s-wro6-cut {
  0%, 8% { stroke-dashoffset: 1; }
  24%, 86% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
.s-wro6-go { animation: s-wro6-nudge 3s ease-in-out infinite; }
@keyframes s-wro6-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(8px); }
}
`

export function ExampleScene() {
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={exampleCss}
      className="s-wro6"
      label="On the left a note reading to study homestays is struck through in red. An arrow points to a note on the right that reads to estimate the share of household income homestays provide over one tourist year, with a green tick"
    >
      <Box x={50} y={70} w={250} h={150} r={8} fill={TONES.red.tint} seed={601} sw={2} />
      <Type x={66} y={96} size={14} c={TONES.red.deep} weight={700}>
        WEAK
      </Type>
      <Hand x={175} y={152} size={30} anchor="middle">
        to study
      </Hand>
      <Hand x={175} y={188} size={30} anchor="middle">
        homestays
      </Hand>
      <path
        className="s-wro6-strike"
        d="M84 160Q170 150 270 172"
        pathLength="1"
        strokeDasharray="1"
        fill="none"
        stroke={TONES.red.ink}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Hand x={175} y={258} size={18} anchor="middle" c={INK_SOFT}>
        done when?
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-wro6-go">
          <Arrow from={[318, 146]} to={[392, 146]} bend={-0.12} seed={602} w={2.6} head={14} />
        </Anim>
      </Place>

      <Box x={410} y={48} w={340} h={210} r={8} fill={TONES.green.tint} seed={603} sw={2} />
      <Type x={426} y={74} size={14} c={TONES.green.deep} weight={700}>
        STRONG
      </Type>
      {['to estimate the share of', 'household income that', 'homestays provide, over', 'one tourist year'].map((line, i) => (
        <Hand key={line} x={430} y={112 + i * 36} size={24}>
          {line}
        </Hand>
      ))}
      <Tick x={714} y={232} s={1.5} />
      <Hand x={580} y={292} size={18} anchor="middle" c={INK_SOFT}>
        one verb, who, where and when
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Objectives tied to chapters, and the conclusion answering each.
   ------------------------------------------------------------------ */

const chapterCss = `
.s-wro7-thread { animation: s-wro7-run 2.4s linear infinite; }
@keyframes s-wro7-run {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -22; }
}
.s-wro7 .pip-body { animation: s-wro7-nod 3.6s ease-in-out infinite; }
@keyframes s-wro7-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

const TIES = [
  ['1', 'amber', 'ch 4'],
  ['2', 'green', 'ch 5'],
  ['3', 'pink', 'ch 6'],
  ['4', 'blue', 'ch 7'],
]

export function ChapterScene() {
  const SHELF = 290
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={chapterCss}
      className="s-wro7"
      label="Four numbered stones on the left are tied by moving dotted threads to four book spines on a shelf labelled chapters 4 to 7, beside a fat book labelled conclusion, while a paper character in a graduation cap looks on"
    >
      <Hand x={130} y={46} size={24} anchor="middle" weight={700}>
        objectives
      </Hand>
      <Hand x={560} y={46} size={24} anchor="middle" weight={700}>
        thesis chapters
      </Hand>

      {TIES.map(([n, tone, label], i) => {
        const sy = 92 + i * 58
        const bx = 440 + i * 50
        return (
          <g key={n}>
            <Stone x={130} y={sy} n={n} rx={34} tone={tone} seed={700 + i} />
            <Ink
              className="s-wro7-thread"
              d={`M170 ${sy}Q${330 + i * 40} ${70 + i * 8} ${bx + 18} ${SHELF - 150}`}
              c={TONES[tone].ink}
              w={2}
              dash="6 5"
            />
            <Spine x={bx} y={SHELF} w={36} h={150} tone={tone} seed={710 + i} />
            <Type x={bx + 18} y={SHELF - 70} size={13} anchor="middle" weight={700}>
              {label}
            </Type>
          </g>
        )
      })}
      <Spine x={644} y={SHELF} w={58} h={170} tone="red" seed={720} />
      <Hand x={681} y={SHELF - 28} size={22} weight={700} rotate={-90}>
        conclusion
      </Hand>
      <Ink d={handLine(420, SHELF, 730, SHELF, 721, 0.4)} w={2.4} />
      <rect x={420} y={SHELF} width={310} height={10} fill="url(#wood)" />
      <Ink d={handLine(420, SHELF + 10, 730, SHELF + 10, 722, 0.4)} w={1.6} />

      <Shadow x={762} y={SHELF + 13} rx={18} ry={4} />
      <Place x={762} y={SHELF + 10} s={1.2}>
        <Pip mood="proud" arms="hips" cap="grad" seed={731} />
      </Place>
      <Hand x={130} y={SHELF + 32} size={18} anchor="middle" c={INK_SOFT}>
        each one answered in the end
      </Hand>
    </Scene>
  )
}
