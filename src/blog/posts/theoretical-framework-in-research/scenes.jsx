import {
  Anim,
  Arrow,
  Book,
  Box,
  Checklist,
  Cross,
  Dots,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  OpenBook,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Shelf,
  Sparkle,
  TONES,
  Tick,
  handEllipse,
  handLine,
  handPoly,
  r1,
} from '../../ink/index.js'

/* A card with a word or two on it: a theory, a concept, a part of the study. */
export function Card({ x, y, w = 100, h = 34, label, tone, size = 16, seed = 1, sw = 1.7 }) {
  const t = tone ? TONES[tone] : null
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={7} fill={t ? t.tint : PAPER} stroke={INK} seed={seed} sw={sw} />
      <Hand x={x + w / 2} y={y + h / 2 + size * 0.36} size={size} anchor="middle" weight={700}>
        {label}
      </Hand>
    </g>
  )
}

/*
 * An arrow whose shaft can be drawn on with stroke-dashoffset (pathLength 1
 * and a scaling stroke). The head stays put, so the still picture always
 * shows a finished arrow.
 */
export function DrawArrow({ from, to, bend = 0, seed = 1, c = INK, w = 1.8, className, style }) {
  const [x1, y1] = from
  const [x2, y2] = to
  const cx = (x1 + x2) / 2 - (y2 - y1) * bend
  const cy = (y1 + y2) / 2 + (x2 - x1) * bend
  const angle = Math.atan2(y2 - cy, x2 - cx)
  const head = 10
  const h1 = [x2 + Math.cos(angle + Math.PI * 0.82) * head, y2 + Math.sin(angle + Math.PI * 0.82) * head]
  const h2 = [x2 + Math.cos(angle - Math.PI * 0.82) * head, y2 + Math.sin(angle - Math.PI * 0.82) * head]
  const shaft = `M${r1(x1)} ${r1(y1)}Q${r1(cx)} ${r1(cy)} ${r1(x2)} ${r1(y2)}`
  return (
    <g>
      <Ink d={shaft} c={c} w={w} scale pathLength={1} dash="1" className={className} style={style} />
      <Ink d={handLine(x2, y2, ...h1, seed + 3, 0.3) + handLine(x2, y2, ...h2, seed + 5, 0.3)} c={c} w={w} />
    </g>
  )
}

/*
 * The outline of a house as a blueprint shows it: walls, roof, door and one
 * window, in white lines. Anchor: bottom-left of the walls. Each line is
 * drawn with pathLength 1 so a scene can draw the house on piece by piece.
 */
export function HousePlan({ x, y, w = 150, h = 90, seed = 1, c = '#ffffff', className }) {
  const roof = h * 0.7
  const parts = [
    handPoly([[x, y], [x, y - h], [x + w, y - h], [x + w, y]], { seed, amp: 0.5 }),
    handPoly([[x - 12, y - h], [x + w / 2, y - h - roof], [x + w + 12, y - h]], { seed: seed + 1, amp: 0.5 }),
    handPoly([[x + w * 0.18, y], [x + w * 0.18, y - h * 0.62], [x + w * 0.4, y - h * 0.62], [x + w * 0.4, y]], { seed: seed + 2, amp: 0.4 }),
    handPoly([[x + w * 0.56, y - h * 0.7], [x + w * 0.84, y - h * 0.7], [x + w * 0.84, y - h * 0.38], [x + w * 0.56, y - h * 0.38]], { seed: seed + 3, amp: 0.4, closed: true }),
  ]
  return (
    <g>
      {parts.map((d, i) => (
        <Ink key={i} d={d} c={c} w={2} scale pathLength={1} dash="1" className={className} style={{ '--i': i }} />
      ))}
    </g>
  )
}

/* ------------------------------------------------------------------
   1. What it is: scattered data, and the same data sorted by a lens.
   ------------------------------------------------------------------ */

const defineCss = `
.s-thf1-pip .pip-body { animation: s-thf1-bob 3s ease-in-out infinite; }
.s-thf1-glint { animation: s-thf1-glint 4s ease-in-out infinite; }
@keyframes s-thf1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-thf1-glint {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.6); }
}
`

const CLUSTERS = [
  { tone: 'green', cx: 492, cy: 128 },
  { tone: 'blue', cx: 548, cy: 196 },
  { tone: 'pink', cx: 470, cy: 214 },
]

export function DefineScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={defineCss} className="s-thf1" label="On the left a cloud of scattered grey dots labelled your data. In the middle a large magnifying glass labelled theory. Inside its lens the same dots are sorted into three coloured groups, labelled a pattern. A paper character in glasses looks on from the left">
      <Floor y={floor} x1={30} x2={770} seed={101} />

      <Dots x={170} y={96} w={170} h={150} count={46} seed={102} c={INK_SOFT} o={0.75} min={2.2} max={3.6} />
      <Hand x={255} y={282} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        your data
      </Hand>
      <Arrow from={[344, 170]} to={[404, 170]} bend={-0.1} seed={103} c={TONES.blue.deep} />

      <Magnifier x={510} y={170} r={92} angle={42} tone="amber" seed={104} />
      {CLUSTERS.map((cluster, i) => (
        <g key={cluster.tone}>
          <Dots x={cluster.cx - 22} y={cluster.cy - 18} w={44} h={36} count={9} seed={110 + i} c={TONES[cluster.tone].deep} o={0.95} min={2.6} max={3.8} />
          <Ink d={handEllipse(cluster.cx, cluster.cy, 30, 25, { seed: 120 + i, amp: 0.6 })} c={TONES[cluster.tone].ink} w={1.6} />
        </g>
      ))}
      <Hand x={700} y={236} size={22} weight={700} anchor="middle">
        theory
      </Hand>
      <Hand x={510} y={62} size={18} anchor="middle" c={INK_SOFT}>
        a pattern
      </Hand>
      <Place x={440} y={100}>
        <Anim className="s-thf1-glint" spin>
          <Sparkle x={0} y={0} s={11} />
        </Anim>
      </Place>

      <Shadow x={96} y={floor + 2} rx={30} ry={4} />
      <Place x={96} y={floor} s={1.6}>
        <g className="s-thf1-pip">
          <Pip mood="focused" arms="think" tone="blue" glasses look={1.6} seed={130} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Why it matters: the blueprint first, then the floors built on it.
   ------------------------------------------------------------------ */

const whyCss = `
.s-thf2-plan { animation: s-thf2-plan 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
.s-thf2-top { animation: s-thf2-top 7s ease-in-out infinite; }
@keyframes s-thf2-plan {
  0%, 100% { stroke-dashoffset: 0; }
  10% { stroke-dashoffset: 1; }
  32%, 92% { stroke-dashoffset: 0; }
}
@keyframes s-thf2-top {
  0%, 52%, 100% { transform: translateY(0); }
  60% { transform: translateY(-16px); }
  68% { transform: translateY(0); }
  72% { transform: translateY(-4px); }
  76% { transform: translateY(0); }
}
`

const FLOORS = [
  { label: 'questions', tone: 'amber' },
  { label: 'method', tone: 'green' },
  { label: 'analysis', tone: 'pink' },
]

export function WhyScene() {
  const floor = 350
  return (
    <Scene w={800} h={320} top={36} css={whyCss} className="s-thf2" label="On the left a blue blueprint sheet with a house drawn in white lines, labelled blueprint. An arrow leads to a building on the right whose bottom slab is labelled theory, with floors for questions, method and analysis stacked on it and a roof labelled findings. A paper character points at the building">
      <Floor y={floor} x1={30} x2={770} seed={201} />

      <Box x={60} y={86} w={250} h={200} r={4} fill={TONES.blue.ink} stroke={TONES.blue.deep} seed={202} sw={2.2} />
      <rect x={60} y={86} width={250} height={200} fill="url(#hatch-blue)" opacity="0.35" />
      <HousePlan x={110} y={262} w={150} h={88} seed={203} className="s-thf2-plan" />
      <Hand x={185} y={76} size={22} anchor="middle" weight={700}>
        blueprint
      </Hand>

      <Arrow from={[322, 190]} to={[404, 190]} bend={-0.1} seed={204} c={TONES.blue.deep} />
      <Hand x={363} y={170} size={16} anchor="middle" c={TONES.blue.deep} weight={700}>
        decides
      </Hand>

      <Card x={418} y={302} w={220} h={44} label="theory" tone="blue" size={22} seed={205} sw={2.2} />
      {FLOORS.map((f, i) => (
        <Card key={f.label} x={438} y={256 - i * 44} w={180} h={42} label={f.label} tone={f.tone} size={18} seed={210 + i} />
      ))}
      <Place x={0} y={0}>
        <Anim className="s-thf2-top" origin={[528, 168]}>
          <path d={`M428 168L528 108L628 168Z`} fill="url(#fill-red)" />
          <Ink d={handPoly([[428, 168], [528, 108], [628, 168]], { seed: 214, amp: 0.5, closed: true })} w={1.9} />
          <Hand x={528} y={158} size={17} anchor="middle" weight={700}>
            findings
          </Hand>
        </Anim>
      </Place>

      <Shadow x={712} y={floor + 2} rx={28} ry={4} />
      <Place x={712} y={floor} s={1.5} flip>
        <Pip mood="happy" arms="point" tone="blue" look={1.4} seed={220} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Theoretical vs conceptual: the tested theory, and the map built from it.
   ------------------------------------------------------------------ */

const versusCss = `
.s-thf3-draw { animation: s-thf3-draw 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
.s-thf3-pip .pip-body { animation: s-thf3-sway 5s ease-in-out infinite; }
@keyframes s-thf3-draw {
  0%, 100% { stroke-dashoffset: 0; }
  14% { stroke-dashoffset: 1; }
  42%, 90% { stroke-dashoffset: 0; }
}
@keyframes s-thf3-sway {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
`

export function VersusScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={versusCss} className="s-thf3" label="On the left an open book labelled the theory, with the words tested and named under it. On the right a sheet labelled your study, with three small boxes, autonomy, competence and relatedness, each with an arrow to a box called finishes. An arrow marked builds runs from the book to the sheet, and a paper character stands between them thinking">
      <Floor y={floor} x1={30} x2={770} seed={301} />

      <Hand x={170} y={84} size={24} anchor="middle" weight={700}>
        the theory
      </Hand>
      <OpenBook x={170} y={232} w={220} tone="blue" lines={6} seed={302} />
      <Hand x={170} y={286} size={18} anchor="middle" c={INK_SOFT}>
        tested, named, used again
      </Hand>

      <Arrow from={[300, 128]} to={[478, 128]} bend={-0.12} seed={303} c={TONES.green.deep} />
      <Hand x={390} y={100} size={17} anchor="middle" c={TONES.green.deep} weight={700}>
        builds
      </Hand>

      <Hand x={622} y={84} size={24} anchor="middle" weight={700}>
        your study
      </Hand>
      <Sheet x={494} y={100} w={258} h={172} lines={0} fold={20} seed={304} />
      {['autonomy', 'competence', 'relatedness'].map((label, i) => (
        <g key={label}>
          <Card x={506} y={124 + i * 46} w={110} h={30} label={label} tone="green" size={14} seed={310 + i} />
          <DrawArrow from={[618, 139 + i * 46]} to={[650, 186]} bend={i === 1 ? 0 : i === 0 ? -0.1 : 0.1} seed={320 + i} className="s-thf3-draw" style={{ '--i': i }} />
        </g>
      ))}
      <Card x={652} y={170} w={88} h={32} label="finishes" tone="blue" size={14} seed={330} />
      <Hand x={622} y={296} size={18} anchor="middle" c={INK_SOFT}>
        a map for one study
      </Hand>

      <Shadow x={392} y={floor + 2} rx={28} ry={4} />
      <Place x={392} y={floor} s={1.45}>
        <g className="s-thf3-pip">
          <Pip mood="focused" arms="think" tone="green" glasses seed={340} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Examples of theories: a shelf of them, and one taken down.
   ------------------------------------------------------------------ */

const theoriesCss = `
.s-thf4-pip .pip-body { animation: s-thf4-hop 2.8s ease-in-out infinite; }
@keyframes s-thf4-hop {
  0%, 60%, 100% { transform: translateY(0); }
  70% { transform: translateY(-9px); }
  80% { transform: translateY(0); }
}
`

const TAGS = ['TAM', 'TPB', 'Bandura', 'Piaget', 'Rogers', 'HBM']

export function TheoriesScene() {
  const floor = 340
  return (
    <Scene w={800} h={320} top={36} css={theoriesCss} className="s-thf4" label="A tall bookshelf full of books, with small tags on its edge reading TAM, TPB, Bandura, Piaget, Rogers and HBM. Beside it a paper character lifts one green book marked SDT above its head">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Shelf x={70} y={44} w={400} rows={3} rowH={96} seed={402} />
      {TAGS.map((tag, i) => {
        const row = Math.floor(i / 2)
        const tx = 120 + (i % 2) * 220
        const ty = 44 + 96 * (row + 1) - 59
        return (
          <g key={tag}>
            <Box x={tx} y={ty} w={74} h={22} r={3} fill={PAPER} seed={410 + i} sw={1.3} />
            <Hand x={tx + 37} y={ty + 17} size={15} anchor="middle" weight={700}>
              {tag}
            </Hand>
          </g>
        )
      })}

      <Shadow x={620} y={floor + 2} rx={32} ry={5} />
      <Place x={620} y={floor} s={1.7}>
        <g className="s-thf4-pip">
          <Pip mood="grin" arms="carry" tone="amber" seed={420}>
            <Book x={-22} y={-114} w={44} h={40} tone="green" seed={421} label={false} />
            <Hand x={2} y={-88} size={11} anchor="middle" weight={700}>
              SDT
            </Hand>
          </Pip>
        </g>
      </Place>
      <Sparkle x={700} y={130} s={9} />
      <Sparkle x={548} y={150} s={7} fill={TONES.green.mid} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Choosing: two theories on the scale, weighed against one problem.
   ------------------------------------------------------------------ */

const chooseCss = `
.s-thf5 .scale-beam { animation: s-thf5-tip 5s ease-in-out infinite; }
.s-thf5-pip .pip-body { animation: s-thf5-bob 3s ease-in-out infinite; }
@keyframes s-thf5-tip {
  0%, 100% { transform: rotate(0deg); }
  30%, 70% { transform: rotate(6deg); }
}
@keyframes s-thf5-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function ChooseScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={36} css={chooseCss} className="s-thf5" label="A balance scale with a blue book marked TAM on the left pan and a green book marked SDT on the right pan, with a green tick beside SDT. On the left a sheet reads why do they stop, the research problem, and a paper character points at the scale">
      <Floor y={floor} x1={30} x2={770} seed={501} />

      <Sheet x={70} y={96} w={170} h={150} lines={3} fold={18} seed={502} />
      <Hand x={155} y={194} size={20} anchor="middle" weight={700}>
        why do they
      </Hand>
      <Hand x={155} y={220} size={20} anchor="middle" weight={700}>
        stop?
      </Hand>
      <Hand x={155} y={276} size={16} anchor="middle" c={INK_SOFT}>
        the research problem
      </Hand>
      <Arrow from={[248, 160]} to={[318, 182]} bend={-0.15} seed={503} c={TONES.blue.deep} dash="4 6" />

      <Scale
        x={440}
        y={floor}
        s={1.2}
        seed={504}
        left={
          <g>
            <Book x={321} y={228} w={46} h={44} tone="blue" seed={505} label={false} />
            <Hand x={348} y={256} size={15} anchor="middle" weight={700}>
              TAM
            </Hand>
          </g>
        }
        right={
          <g>
            <Book x={508} y={228} w={46} h={44} tone="green" seed={506} label={false} />
            <Hand x={535} y={256} size={15} anchor="middle" weight={700}>
              SDT
            </Hand>
          </g>
        }
      />
      <Tick x={600} y={238} s={1.3} />
      <Hand x={640} y={210} size={16} c={TONES.green.deep} weight={700}>
        fits
      </Hand>

      <Shadow x={712} y={floor + 2} rx={28} ry={4} />
      <Place x={712} y={floor} s={1.45} flip>
        <g className="s-thf5-pip">
          <Pip mood="happy" arms="point" tone="green" look={1.2} seed={510} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Writing it: six moves, ticked off one by one.
   ------------------------------------------------------------------ */

const writeCss = `
.s-thf6 .check-tick { animation: s-thf6-tick 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
.s-thf6-pencil { animation: s-thf6-pencil 2.4s ease-in-out infinite; }
@keyframes s-thf6-tick {
  0%, 100% { stroke-dashoffset: 0; }
  6% { stroke-dashoffset: 1; }
  18%, 92% { stroke-dashoffset: 0; }
}
@keyframes s-thf6-pencil {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-6px, 4px) rotate(-4deg); }
}
`

const MOVES = ['name it', 'define it', 'relate it', 'justify it', 'link it', 'limit it']

export function WriteScene() {
  const floor = 360
  return (
    <Scene w={800} h={330} top={36} css={writeCss} className="s-thf6" label="A clipboard checklist with six ticked boxes, labelled name it, define it, relate it, justify it, link it and limit it. A pencil hovers over it and a paper character stands beside it, writing">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Checklist x={240} y={60} w={250} items={6} done={6} seed={602} />
      {MOVES.map((move, i) => (
        <Box key={move} x={272} y={86 + i * 26} w={208} h={20} fill={PAPER} stroke={null} seed={610 + i} />
      ))}
      {MOVES.map((move, i) => (
        <Hand key={move} x={280} y={102 + i * 26} size={17} weight={700}>
          {move}
        </Hand>
      ))}
      <Hand x={365} y={286} size={20} anchor="middle" c={INK_SOFT}>
        one theory, six moves
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-thf6-pencil" origin={[500, 200]}>
          <Pencil x={500} y={200} length={100} angle={-40} tone="amber" seed={620} />
        </Anim>
      </Place>

      <Shadow x={610} y={floor + 2} rx={30} ry={4} />
      <Place x={610} y={floor} s={1.65} flip>
        <Pip mood="focused" arms="write" tone="green" glasses seed={630} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The example: each need becomes one section of the questionnaire.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-thf7-draw { animation: s-thf7-draw 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
@keyframes s-thf7-draw {
  0%, 100% { stroke-dashoffset: 0; }
  12% { stroke-dashoffset: 1; }
  36%, 90% { stroke-dashoffset: 0; }
}
`

const NEEDS = [
  { label: 'autonomy', part: 'A', tone: 'green' },
  { label: 'competence', part: 'B', tone: 'amber' },
  { label: 'relatedness', part: 'C', tone: 'pink' },
]

export function ExampleScene() {
  const floor = 350
  return (
    <Scene w={800} h={320} top={36} css={exampleCss} className="s-thf7" label="On the left a card labelled self-determination theory above three cards, autonomy, competence and relatedness. Each has an arrow to a section of a questionnaire sheet on the right, marked A, B and C. A paper character with a clipboard stands at the far right">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Card x={60} y={58} w={250} h={40} label="self-determination theory" tone="blue" size={17} seed={702} sw={2} />
      <Ink d={handLine(66, 98, 66, 279, 706, 0.4)} c={INK_SOFT} w={1.5} />
      {NEEDS.map((need, i) => {
        const y = 128 + i * 66
        return (
          <g key={need.label}>
            <Ink d={handLine(66, y + 19, 80, y + 19, 703 + i, 0.3)} c={INK_SOFT} w={1.5} />
            <Card x={80} y={y} w={150} h={38} label={need.label} tone={need.tone} size={17} seed={710 + i} />
            <DrawArrow from={[236, y + 19]} to={[404, 124 + i * 66]} bend={-0.06} seed={720 + i} className="s-thf7-draw" style={{ '--i': i }} />
          </g>
        )
      })}

      <Sheet x={410} y={80} w={200} h={230} lines={0} fold={22} seed={730} />
      <Hand x={500} y={102} size={16} anchor="middle" weight={700}>
        questionnaire
      </Hand>
      {NEEDS.map((need, i) => {
        const y = 112 + i * 66
        return (
          <g key={need.part}>
            <Box x={424} y={y} w={30} h={30} r={4} fill={TONES[need.tone].tint} seed={740 + i} sw={1.5} />
            <Hand x={439} y={y + 22} size={18} anchor="middle" weight={700}>
              {need.part}
            </Hand>
            <Ink d={handLine(464, y + 10, 590, y + 10, 750 + i, 0.4) + handLine(464, y + 22, 560, y + 22, 760 + i, 0.4)} c="#cbbda6" w={1.6} />
          </g>
        )
      })}

      <Shadow x={696} y={floor + 2} rx={30} ry={4} />
      <Place x={696} y={floor} s={1.6} flip>
        <Pip mood="proud" arms="hold" tone="blue" seed={770}>
          <Box x={-12} y={-29} w={24} h={20} r={2} fill={PAPER} seed={771} sw={1.3} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Where it goes: the theory carried as a thread through every chapter.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-thf8-thread { animation: s-thf8-thread 6s ease-in-out infinite; }
.s-thf8-pip .pip-body { animation: s-thf8-bob 3s ease-in-out infinite; }
@keyframes s-thf8-thread {
  0%, 100% { stroke-dashoffset: 0; }
  20% { stroke-dashoffset: 1; }
  55%, 92% { stroke-dashoffset: 0; }
}
@keyframes s-thf8-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const CHAPTERS = ['1', '2', '3', '4', '5']
const TONES_ROW = ['grey', 'blue', 'green', 'amber', 'pink']

export function MistakesScene() {
  const floor = 340
  const top = 190
  return (
    <Scene w={800} h={310} top={36} css={mistakesCss} className="s-thf8" label="Five thesis chapters stand in a row, numbered one to five. A red thread starts at chapter two and runs through chapters three, four and five. Above chapter one a sheet that reads six theories is crossed out, and a paper character at the right waves">
      <Floor y={floor} x1={30} x2={770} seed={801} />

      {CHAPTERS.map((ch, i) => (
        <g key={ch}>
          <Book x={60 + i * 132} y={top} w={90} h={130} tone={TONES_ROW[i]} seed={810 + i} label={false} />
          <Hand x={115 + i * 132} y={top + 82} size={34} anchor="middle" weight={700}>
            {ch}
          </Hand>
        </g>
      ))}
      <Hand x={237} y={top - 12} size={16} anchor="middle" c={TONES.blue.deep} weight={700}>
        theory here
      </Hand>

      <Ink
        d={`M222 236Q261 210 300 210Q327 210 354 232Q392 210 430 210Q458 210 486 232Q523 210 560 210Q589 210 618 232`}
        c={TONES.red.deep}
        w={2.4}
        scale
        pathLength={1}
        dash="1"
        className="s-thf8-thread"
      />

      <Sheet x={70} y={66} w={96} h={96} lines={3} fold={14} seed={830} />
      <Hand x={118} y={136} size={15} anchor="middle" weight={700}>
        6 theories
      </Hand>
      <Cross x={118} y={112} s={2.6} seed={831} />

      <Shadow x={730} y={floor + 2} rx={26} ry={4} />
      <Place x={730} y={floor} s={1.45} flip>
        <g className="s-thf8-pip">
          <Pip mood="grin" arms="wave" tone="red" seed={840} />
        </g>
      </Place>
    </Scene>
  )
}
