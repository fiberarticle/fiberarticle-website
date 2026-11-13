import {
  Anim,
  Arrow,
  Box,
  Chai,
  Checklist,
  Cloud,
  Floor,
  Funnel,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  PAPER,
  Pencil,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  StampMark,
  TEXT_LINE,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Topic and problem: a wide cloud, and one point pinned inside it.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-wps1-cloud { animation: s-wps1-drift 9s ease-in-out infinite; }
@keyframes s-wps1-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-16px); }
}
.s-wps1-pin { animation: s-wps1-press 4s ease-in-out infinite; }
@keyframes s-wps1-press {
  0%, 100% { transform: translateY(0); }
  12% { transform: translateY(-9px); }
  24% { transform: translateY(0); }
}
.s-wps1 .pip-arm-r { animation: s-wps1-point 3s ease-in-out infinite; }
@keyframes s-wps1-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-9deg); }
}
`

export function MeaningScene() {
  const FLOOR = 306
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={meaningCss}
      className="s-wps1"
      label="On the left a wide cloud labelled topic, rural libraries. An arrow leads to a pinned note on the right labelled problem, which reads enrolled children do not come, with the words who, where and how many under it"
    >
      <Floor y={FLOOR} x1={50} x2={750} seed={101} />

      <Type x={190} y={44} size={15} anchor="middle" weight={700} c={TONES.grey.deep}>
        TOPIC
      </Type>
      <Place x={190} y={128}>
        <Anim className="s-wps1-cloud">
          <Cloud x={0} y={0} s={2.3} seed={102} />
          <Hand x={0} y={2} size={30} anchor="middle" weight={700} c={INK_SOFT}>
            rural libraries
          </Hand>
        </Anim>
      </Place>
      <Hand x={190} y={236} size={19} anchor="middle" c={INK_SOFT}>
        wide, and nothing to solve
      </Hand>

      <Arrow from={[330, 140]} to={[432, 140]} bend={-0.12} seed={103} w={2.6} head={14} />

      <Type x={600} y={44} size={15} anchor="middle" weight={700} c={TONES.red.deep}>
        PROBLEM
      </Type>
      <Box x={456} y={62} w={288} h={170} r={6} fill={TONES.amber.tint} seed={104} sw={2} />
      <Hand x={600} y={118} size={28} anchor="middle" weight={700}>
        enrolled children
      </Hand>
      <Hand x={600} y={154} size={28} anchor="middle" weight={700}>
        do not come
      </Hand>
      <Ink d={handLine(486, 174, 714, 174, 105, 0.5)} c={TONES.amber.deep} w={1.5} o={0.6} />
      <Type x={600} y={206} size={15} anchor="middle" c={TONES.amber.deep}>
        who? where? how many?
      </Type>
      <Place x={598} y={72}>
        <Anim className="s-wps1-pin">
          <PushPin x={0} y={0} tone="red" seed={106} />
        </Anim>
      </Place>
      <Hand x={600} y={262} size={19} anchor="middle" c={INK_SOFT}>
        one point you can show and study
      </Hand>

      <Shadow x={384} y={FLOOR + 3} rx={26} ry={4} />
      <Place x={384} y={FLOOR} s={1.5}>
        <Pip mood="happy" arms="point" look={1.8} tone="blue" seed={111} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Topic, problem, question, objectives: four cards in a row.
   ------------------------------------------------------------------ */

const versusCss = `
.s-wps2-card { animation: s-wps2-lift 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s); }
@keyframes s-wps2-lift {
  0%, 18%, 100% { transform: translateY(0); }
  9% { transform: translateY(-8px); }
}
.s-wps2-star { animation: s-wps2-twinkle 2.6s ease-in-out infinite; }
@keyframes s-wps2-twinkle {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
`

const CARDS = [
  ['topic', 'the area', 'grey', 'libraries'],
  ['problem', 'what is wrong', 'red', 'few come.'],
  ['question', 'what you ask', 'blue', 'why not?'],
  ['objectives', 'what you will do', 'green', 'to find out'],
]

export function VersusScene() {
  return (
    <Scene
      w={800}
      h={310}
      top={10}
      css={versusCss}
      className="s-wps2"
      label="Four cards in a row joined by arrows: topic, the area; problem, what is wrong; question, what you ask; and objectives, what you will do. The problem card is marked as a statement and the question card as a question"
    >
      {CARDS.map(([name, job, tone, sample], i) => {
        const x = 34 + i * 190
        return (
          <g key={name}>
            {i > 0 ? <Arrow from={[x - 34, 150]} to={[x - 6, 150]} bend={0} seed={200 + i} w={2.2} head={10} /> : null}
            <Place x={0} y={0}>
              <Anim className="s-wps2-card" style={{ '--i': i }}>
                <Box x={x} y={66} w={152} h={168} r={10} fill={TONES[tone].tint} seed={210 + i} sw={i === 1 ? 2.6 : 1.8} double={i === 1} />
                <Type x={x + 76} y={94} size={14} anchor="middle" weight={700} c={TONES[tone].deep}>
                  {`${i + 1}`}
                </Type>
                <Hand x={x + 76} y={134} size={27} anchor="middle" weight={700}>
                  {name}
                </Hand>
                <Hand x={x + 76} y={162} size={18} anchor="middle" c={INK_SOFT}>
                  {job}
                </Hand>
                <Ink d={handLine(x + 20, 178, x + 132, 178, 220 + i, 0.4)} c={TONES[tone].deep} w={1.3} o={0.5} />
                <Hand x={x + 76} y={212} size={22} anchor="middle" c={TONES[tone].deep}>
                  {sample}
                </Hand>
              </Anim>
            </Place>
          </g>
        )
      })}
      <g className="s-wps2-star">
        <Sparkle x={378} y={62} s={11} />
      </g>
      <Hand x={300} y={274} size={20} anchor="middle" c={TONES.red.deep}>
        a statement
      </Hand>
      <Hand x={490} y={274} size={20} anchor="middle" c={TONES.blue.deep}>
        a question
      </Hand>
      <Hand x={400} y={42} size={22} anchor="middle" weight={700}>
        each one grows out of the one before
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The five parts: what should be, what is, and the gap between.
   ------------------------------------------------------------------ */

const partsCss = `
.s-wps3-gap { animation: s-wps3-pulse 3.2s ease-in-out infinite; }
@keyframes s-wps3-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
.s-wps3-tag { animation: s-wps3-nudge 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s); }
@keyframes s-wps3-nudge {
  0%, 20%, 100% { transform: translateX(0); }
  10% { transform: translateX(8px); }
}
`

const TAGS = [
  ['evidence', 'how do you know?', 'blue'],
  ['consequences', 'so what?', 'pink'],
  ['response', 'what will you add?', 'green'],
]

export function PartsScene() {
  const BASE = 290
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={partsCss}
      className="s-wps3"
      label="Two bars stand side by side: a tall one labelled what should be, 1,140 enrolled, and a very short one labelled what is, 50 come. A red bracket between their tops is labelled the problem. Three tags on the right read evidence, consequences and response"
    >
      <Ink d={handLine(50, BASE, 450, BASE, 301, 0.6)} w={2} />

      <rect x={90} y={70} width={96} height={BASE - 70} fill="url(#fill-amber)" />
      <Ink d={handLine(90, BASE, 90, 70, 302, 0.5) + handLine(90, 70, 186, 70, 303, 0.4) + handLine(186, 70, 186, BASE, 304, 0.5)} w={1.9} />
      <Hand x={138} y={130} size={30} anchor="middle" weight={700}>
        1,140
      </Hand>
      <Hand x={138} y={156} size={18} anchor="middle" c={INK_SOFT}>
        enrolled
      </Hand>
      <Type x={138} y={BASE + 24} size={14} anchor="middle" weight={700}>
        WHAT SHOULD BE
      </Type>

      <rect x={310} y={BASE - 22} width={96} height={22} fill="url(#fill-red)" />
      <Ink d={handLine(310, BASE, 310, BASE - 22, 305, 0.3) + handLine(310, BASE - 22, 406, BASE - 22, 306, 0.4) + handLine(406, BASE - 22, 406, BASE, 307, 0.3)} w={1.9} />
      <Hand x={358} y={BASE - 34} size={30} anchor="middle" weight={700} c={TONES.red.deep}>
        50
      </Hand>
      <Hand x={358} y={BASE - 66} size={18} anchor="middle" c={INK_SOFT}>
        come
      </Hand>
      <Type x={358} y={BASE + 24} size={14} anchor="middle" weight={700}>
        WHAT IS
      </Type>

      <g className="s-wps3-gap">
        <Ink d={handLine(200, 72, 262, 72, 308, 0.4) + handLine(250, 72, 250, 194, 309, 0.5) + handLine(250, 194, 300, 194, 310, 0.4)} c={TONES.red.ink} w={2.6} dash="7 6" />
        <Hand x={262} y={126} size={22} weight={700} c={TONES.red.deep}>
          the
        </Hand>
        <Hand x={262} y={152} size={22} weight={700} c={TONES.red.deep}>
          problem
        </Hand>
      </g>

      {TAGS.map(([name, ask, tone], i) => {
        const y = 62 + i * 82
        return (
          <Place key={name} x={0} y={0}>
            <Anim className="s-wps3-tag" style={{ '--i': i }}>
              <Box x={500} y={y} w={250} h={64} r={10} fill={TONES[tone].tint} seed={320 + i} sw={1.8} />
              <Type x={516} y={y + 24} size={14} weight={700} c={TONES[tone].deep}>
                {`${i + 3}. ${name.toUpperCase()}`}
              </Type>
              <Hand x={516} y={y + 50} size={22}>
                {ask}
              </Hand>
            </Anim>
          </Place>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The steps: a wide topic into the funnel, one paragraph out.
   ------------------------------------------------------------------ */

const stepsCss = `
.s-wps4-word { animation: s-wps4-fall 7s ease-in infinite; animation-delay: calc(var(--i) * 1.1s); }
@keyframes s-wps4-fall {
  0%, 100% { transform: translateY(0); opacity: 1; }
  30% { transform: translateY(0); opacity: 1; }
  48% { transform: translateY(46px); opacity: 0; }
  60% { transform: translateY(0); opacity: 0; }
  72% { transform: translateY(0); opacity: 1; }
}
.s-wps4-out { animation: s-wps4-settle 7s ease-in-out infinite; }
@keyframes s-wps4-settle {
  0%, 100% { transform: translateY(0); }
  55% { transform: translateY(0); }
  64% { transform: translateY(-7px); }
  74% { transform: translateY(0); }
}
.s-wps4 .pip-arm-r { animation: s-wps4-write 1.6s ease-in-out infinite; }
@keyframes s-wps4-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-11deg); }
}
`

const WIDE = [
  ['rural libraries', 222, 58],
  ['reading habits', 430, 50],
  ['all of Karnataka', 326, 88],
]

const NARROW = ['who: age 11 to 16', 'where: one taluk', 'what: visits', 'when: this year']

export function StepsScene() {
  const FLOOR = 312
  return (
    <Scene
      w={800}
      h={335}
      top={10}
      css={stepsCss}
      className="s-wps4"
      label="Wide phrases such as rural libraries, reading habits and all of Karnataka fall into a blue funnel. Beside it a list reads who, where, what and when. Out of the funnel comes one sheet labelled one paragraph, while a paper character writes"
    >
      <Floor y={FLOOR} x1={50} x2={750} seed={401} />

      {WIDE.map(([word, x, y], i) => (
        <Place key={word} x={0} y={0}>
          <Anim className="s-wps4-word" style={{ '--i': i }}>
            <Hand x={x} y={y} size={24} anchor="middle" c={INK_SOFT}>
              {word}
            </Hand>
          </Anim>
        </Place>
      ))}
      <Funnel x={326} y={112} w={230} h={130} tone="blue" seed={402} />

      <Place x={0} y={0}>
        <Anim className="s-wps4-out">
          <Sheet x={286} y={250} w={80} h={56} lines={4} fold={11} seed={403} title />
        </Anim>
      </Place>
      <Hand x={380} y={286} size={20} c={INK}>
        one paragraph
      </Hand>

      <Type x={548} y={62} size={15} weight={700} c={TONES.blue.deep}>
        THE 4W TEST
      </Type>
      {NARROW.map((line, i) => (
        <g key={line}>
          <Box x={548} y={78 + i * 40} w={20} h={20} seed={410 + i} sw={1.5} fill={PAPER} />
          <Ink d={`M${551} ${88 + i * 40}q3 3 6 8q6 -12 15 -18`} c="#3f8f4f" w={2.6} />
          <Hand x={580} y={96 + i * 40} size={22}>
            {line}
          </Hand>
        </g>
      ))}

      <Shadow x={130} y={FLOOR + 3} rx={32} ry={5} />
      <Place x={130} y={FLOOR} s={1.8}>
        <Pip mood="focused" arms="write" look={1.8} tone="green" glasses seed={421} />
      </Place>
      <Pencil x={176} y={284} length={64} angle={-58} tone="amber" seed={422} />

      <Shadow x={716} y={FLOOR + 3} rx={18} ry={4} />
      <Chai x={716} y={FLOOR} s={0.9} seed={423} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The example: one paragraph, five colours, one job for each.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-wps5-band { animation: s-wps5-show 10s ease-in-out infinite; animation-delay: calc(var(--i) * 1.6s); }
@keyframes s-wps5-show {
  0%, 16%, 100% { opacity: 0.55; }
  5%, 11% { opacity: 1; }
}
.s-wps5-label { animation: s-wps5-step 10s ease-in-out infinite; animation-delay: calc(var(--i) * 1.6s); }
@keyframes s-wps5-step {
  0%, 16%, 100% { transform: translateX(0); }
  5%, 11% { transform: translateX(-8px); }
}
`

const BANDS = [
  ['should be', 'children were enrolled to read', 'amber', 1],
  ['is, with evidence', '1,140 enrolled, about 50 come', 'red', 2],
  ['the gap', 'little is known about why', 'blue', 2],
  ['so what?', 'books and computers lie unused', 'pink', 1],
  ['this study', 'examines what keeps them away', 'green', 1],
]

export function ExampleScene() {
  let y = 44
  return (
    <Scene
      w={800}
      h={350}
      top={10}
      css={exampleCss}
      className="s-wps5"
      label="A sheet of paper holds one paragraph divided into five coloured bands. Labels in the margin name each band: what should be, what is with evidence, the gap, so what, and this study"
    >
      <Box x={60} y={28} w={470} h={326} r={6} fill={PAPER} seed={501} sw={2.2} />
      {BANDS.map(([label, text, tone, rows], i) => {
        const h = rows === 2 ? 66 : 44
        const top = y
        y += h + 8
        return (
          <g key={label}>
            <g className="s-wps5-band" style={{ '--i': i }}>
              <rect x={76} y={top} width={438} height={h} rx={5} fill={TONES[tone].tint} />
              <Hand x={90} y={top + 29} size={22}>
                {text}
              </Hand>
              {rows === 2 ? <Ink d={handLine(90, top + 50, 380, top + 50, 510 + i, 0.4)} c={TONES[tone].deep} w={1.6} o={0.45} /> : null}
            </g>
            <Ink d={handLine(520, top + h / 2, 566, top + h / 2, 520 + i, 0.4)} c={TONES[tone].ink} w={2} />
            <Place x={0} y={0}>
              <Anim className="s-wps5-label" style={{ '--i': i }}>
                <Type x={576} y={top + h / 2 - 3} size={13} weight={700} c={TONES[tone].deep}>
                  {`${i + 1}`}
                </Type>
                <Hand x={592} y={top + h / 2 + 7} size={23} weight={700} c={TONES[tone].deep}>
                  {label}
                </Hand>
              </Anim>
            </Place>
          </g>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Length: the same problem at four different lengths.
   ------------------------------------------------------------------ */

const lengthCss = `
.s-wps6-doc { animation: s-wps6-rise 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-wps6-rise {
  0%, 24%, 100% { transform: translateY(0); }
  12% { transform: translateY(-7px); }
}
.s-wps6 .pip-body { animation: s-wps6-nod 3.6s ease-in-out infinite; }
@keyframes s-wps6-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

const DOCS = [
  ['abstract', '40 to 80', 46, 2, 'grey'],
  ['journal paper', '100 to 200', 84, 4, 'blue'],
  ["master's thesis", '300 to 500', 138, 8, 'amber'],
  ['PhD thesis', '400 to 800', 184, 11, 'green'],
]

export function LengthScene() {
  const BASE = 250
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={lengthCss}
      className="s-wps6"
      label="Four sheets of paper stand in a row, each taller than the last, labelled abstract 40 to 80 words, journal paper 100 to 200 words, master's thesis 300 to 500 words and PhD thesis 400 to 800 words, while a paper character looks on"
    >
      <Hand x={350} y={42} size={24} anchor="middle" weight={700}>
        the same problem, at four lengths
      </Hand>
      <Ink d={handLine(40, BASE, 670, BASE, 601, 0.6)} w={2} />
      {DOCS.map(([name, words, h, lines, tone], i) => {
        const x = 62 + i * 156
        return (
          <g key={name}>
            <Place x={0} y={0}>
              <Anim className="s-wps6-doc" style={{ '--i': i }}>
                <Sheet x={x} y={BASE - h} w={104} h={h} lines={lines} fold={12} tone={tone === 'grey' ? 'paper' : tone} seed={610 + i * 7} />
              </Anim>
            </Place>
            <Hand x={x + 52} y={BASE + 28} size={20} anchor="middle" weight={700}>
              {name}
            </Hand>
            <Type x={x + 52} y={BASE + 50} size={14} anchor="middle" c={TONES[tone].deep} weight={700}>
              {words}
            </Type>
            <Type x={x + 52} y={BASE + 66} size={12} anchor="middle" c={INK_SOFT}>
              words
            </Type>
          </g>
        )
      })}
      <Shadow x={734} y={BASE + 3} rx={26} ry={4} />
      <Place x={734} y={BASE} s={1.5}>
        <Pip mood="happy" arms="hips" look={-1.8} tone="pink" seed={631} />
      </Place>
      <Hand x={734} y={BASE + 34} size={17} anchor="middle" c={INK_SOFT}>
        check your
      </Hand>
      <Hand x={734} y={BASE + 54} size={17} anchor="middle" c={INK_SOFT}>
        own format
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The checklist, the stamp, and children at the library door.
   ------------------------------------------------------------------ */

const checklistCss = `
.s-wps7 .check-tick { animation: s-wps7-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-wps7-draw {
  0%, 5% { stroke-dashoffset: 1; }
  16%, 88% { stroke-dashoffset: 0; }
  98%, 100% { stroke-dashoffset: 1; }
}
.s-wps7-stamp { animation: s-wps7-thump 8s ease-in-out infinite; }
@keyframes s-wps7-thump {
  0%, 48%, 100% { transform: scale(1); }
  52% { transform: scale(1.12); }
  56% { transform: scale(1); }
}
.s-wps7-kid .pip-body { animation: s-wps7-hop 2.8s ease-in-out infinite; }
.s-wps7-kid2 .pip-body { animation: s-wps7-hop 2.8s ease-in-out infinite; animation-delay: -1.2s; }
@keyframes s-wps7-hop {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-5px); }
}
`

const CHECKS = ['who, where, when', 'a figure and a source', 'the gap, stated', 'no solution promised', 'clear in one reading']

export function ChecklistScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={checklistCss}
      className="s-wps7"
      label="A clipboard checklist with five green ticks: who, where and when; a figure and a source; the gap stated; no solution promised; clear in one reading. A red stamp reads approved, and a paper character in glasses greets two small paper children at a library door"
    >
      <Floor y={FLOOR} x1={40} x2={760} seed={701} />

      <Checklist x={70} y={56} w={300} items={5} done={5} seed={702} />
      {CHECKS.map((line, i) => (
        <g key={line}>
          <rect x={100} y={80 + i * 26} width={258} height={22} fill={PAPER} />
          <Hand x={106} y={99 + i * 26} size={20}>
            {line}
          </Hand>
        </g>
      ))}
      <Place x={300} y={236}>
        <Anim className="s-wps7-stamp" spin>
          <StampMark x={0} y={0} w={132} h={44} text="APPROVED" tone="red" rotate={-9} size={19} bg={PAPER} seed={703} />
        </Anim>
      </Place>

      {/* the library door, the scholar and two children */}
      <Box x={590} y={96} w={150} h={FLOOR - 96} fill={TONES.amber.tint} seed={710} sw={2} />
      <Box x={632} y={170} w={66} h={FLOOR - 170} fill={TONES.brown.mid} seed={711} sw={1.8} />
      <circle cx={688} cy={240} r={3} fill={INK} />
      <Box x={604} y={110} w={122} h={34} r={5} fill={PAPER} seed={712} sw={1.5} />
      <Type x={665} y={133} size={16} anchor="middle" weight={700}>
        LIBRARY
      </Type>

      <Shadow x={452} y={FLOOR + 3} rx={30} ry={5} />
      <Place x={452} y={FLOOR} s={1.7}>
        <Pip mood="grin" arms="wave" look={1.8} tone="blue" glasses seed={721} />
      </Place>
      <Place x={540} y={FLOOR} s={0.95}>
        <Pip className="s-wps7-kid" mood="happy" arms="hold" look={1.6} tone="green" seed={722} />
      </Place>
      <Place x={588} y={FLOOR} s={0.85}>
        <Pip className="s-wps7-kid2" mood="grin" arms="up" look={1.6} tone="pink" seed={723} />
      </Place>
      <Hand x={520} y={72} size={20} anchor="middle" c={INK_SOFT}>
        now go and ask them why
      </Hand>
    </Scene>
  )
}
