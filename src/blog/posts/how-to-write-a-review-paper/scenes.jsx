import {
  Anim,
  Arrow,
  Box,
  Chart,
  Checklist,
  Cross,
  Door,
  Envelope,
  Flag,
  Flask,
  Floor,
  Grid,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pip,
  Place,
  Plant,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Spine,
  Sticky,
  TEXT_LINE,
  TONES,
  Thread,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. A research paper and a review paper, side by side.
   ------------------------------------------------------------------ */

const whatCss = `
.s-rvp1-in { animation: s-rvp1-in 4.5s ease-in-out infinite; animation-delay: calc(var(--i) * -1.5s); opacity: 0; }
@keyframes s-rvp1-in {
  0% { transform: translate(0, 0); opacity: 0; }
  15% { opacity: 1; }
  65% { transform: translate(-96px, var(--dy)); opacity: 1; }
  78%, 100% { transform: translate(-104px, var(--dy)); opacity: 0; }
}
.s-rvp1-flask { animation: s-rvp1-tilt 3s ease-in-out infinite; }
@keyframes s-rvp1-tilt {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-7deg); }
}
`

export function WhatScene() {
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={whatCss}
      className="s-rvp1"
      label="Two sheets side by side. The research paper on the left holds a flask and a bar chart, labelled new data. The review paper on the right holds a summary table, and small papers slide into it from the side, labelled published studies"
    >
      <Hand x={210} y={52} size={28} anchor="middle" weight={700}>
        research paper
      </Hand>
      <Sheet x={110} y={70} w={200} h={230} lines={2} fold={26} title seed={101} />
      <Place x={0} y={0}>
        <Anim className="s-rvp1-flask" origin={[170, 250]}>
          <Flask x={170} y={250} s={1.05} tone="green" seed={102} />
        </Anim>
      </Place>
      <Chart x={214} y={250} w={80} h={84} bars={[0.35, 0.6, 0.85]} tone="blue" seed={103} />
      <Hand x={210} y={284} size={20} anchor="middle" c={INK_SOFT}>
        new data
      </Hand>

      <Hand x={400} y={196} size={30} anchor="middle" weight={700} c={INK_SOFT}>
        vs
      </Hand>

      <Hand x={590} y={52} size={28} anchor="middle" weight={700}>
        review paper
      </Hand>
      <Sheet x={490} y={70} w={200} h={230} lines={2} fold={26} title seed={110} />
      <Grid x={512} y={146} cols={3} rows={4} cw={52} rh={26} header="amber" marks={{ '1,1': 'tick', '2,2': 'tick', '3,1': 'cross', '3,2': 'dot' }} seed={111} />
      <Hand x={590} y={284} size={20} anchor="middle" c={INK_SOFT}>
        published studies
      </Hand>

      <Sheet x={722} y={118} w={30} h={38} lines={2} fold={7} seed={120} sw={1.3} />
      <Sheet x={738} y={176} w={30} h={38} lines={2} fold={7} seed={121} sw={1.3} />
      <Sheet x={720} y={234} w={30} h={38} lines={2} fold={7} seed={122} sw={1.3} />
      {[0, 1, 2].map((i) => (
        <Place key={i} x={736} y={140 + i * 50}>
          <g className="s-rvp1-in" style={{ '--i': i, '--dy': `${(1 - i) * 22}px` }}>
            <Sheet x={-13} y={-17} w={26} h={34} lines={2} fold={6} seed={130 + i} sw={1.2} />
          </g>
        </Place>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. A shelf of reviews already written, with one space empty.
   ------------------------------------------------------------------ */

const checkCss = `
.s-rvp2-lens { animation: s-rvp2-scan 7s ease-in-out infinite; }
@keyframes s-rvp2-scan {
  0%, 100% { transform: translate(0, 0); }
  45% { transform: translate(-250px, 6px); }
  60% { transform: translate(-250px, 6px); }
}
.s-rvp2-gap { animation: s-rvp2-glow 3.5s ease-in-out infinite; }
@keyframes s-rvp2-glow {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.85; }
}
.s-rvp2-pip .pip-body { animation: s-rvp2-lean 7s ease-in-out infinite; }
@keyframes s-rvp2-lean {
  0%, 100% { transform: rotate(0deg); }
  45%, 60% { transform: rotate(-4deg); }
}
`

const BOOKS = [
  { w: 20, h: 118, tone: 'blue' },
  { w: 16, h: 104, tone: 'green' },
  { w: 22, h: 124, tone: 'amber' },
  { w: 18, h: 110, tone: 'red' },
  { w: 20, h: 98, tone: 'brown' },
  { w: 17, h: 120, tone: 'pink' },
  { w: 21, h: 112, tone: 'blue' },
  { w: 18, h: 106, tone: 'green' },
  { w: 20, h: 118, tone: 'amber' },
  null,
  { w: 19, h: 108, tone: 'red' },
  { w: 22, h: 122, tone: 'grey' },
  { w: 17, h: 100, tone: 'blue' },
  { w: 20, h: 114, tone: 'brown' },
]

export function CheckScene() {
  const SHELF = 250
  let bx = 70
  const spines = []
  let gapX = 0
  BOOKS.forEach((book, i) => {
    if (!book) {
      gapX = bx
      bx += 58
      return
    }
    spines.push(<Spine key={i} x={bx} y={SHELF} w={book.w} h={book.h} tone={book.tone} seed={200 + i} />)
    bx += book.w + 3
  })

  return (
    <Scene
      w={800}
      h={340}
      top={10}
      css={checkCss}
      className="s-rvp2"
      label="A shelf of published reviews with one empty space marked with a question mark and the words your angle. A paper character in glasses scans the shelf with a magnifying glass"
    >
      <Hand x={250} y={70} size={26} anchor="middle" weight={700}>
        reviews already published
      </Hand>
      {spines}
      <g className="s-rvp2-gap">
        <rect x={gapX + 4} y={SHELF - 116} width={50} height={114} fill={TONES.amber.tint} />
      </g>
      <Ink d={handLine(gapX + 4, SHELF - 116, gapX + 54, SHELF - 116, 230, 0.4) + handLine(gapX + 54, SHELF - 116, gapX + 54, SHELF, 231, 0.4) + handLine(gapX + 4, SHELF, gapX + 4, SHELF - 116, 232, 0.4)} c={TONES.red.ink} w={1.8} dash="6 6" />
      <Hand x={gapX + 29} y={SHELF - 48} size={44} anchor="middle" weight={700} c={TONES.red.ink}>
        ?
      </Hand>
      <rect x={56} y={SHELF} width={bx - 50} height="10" fill="url(#wood)" />
      <Ink d={handLine(56, SHELF, bx + 6, SHELF, 233, 0.5) + handLine(56, SHELF + 10, bx + 6, SHELF + 10, 234, 0.5)} w={1.8} />
      <Hand x={gapX + 29} y={SHELF + 42} size={22} anchor="middle" weight={700} c={TONES.red.ink}>
        your angle
      </Hand>

      <Floor y={322} x1={30} x2={770} seed={240} />
      <Shadow x={640} y={324} rx={40} ry={5} />
      <Place x={640} y={322} s={1.9} flip>
        <g className="s-rvp2-pip">
          <Pip mood="focused" arms="point" tone="amber" glasses look={1.6} seed={241} />
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-rvp2-lens">
          <Magnifier x={560} y={186} r={26} angle={50} tone="amber" seed={242} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Four doors, four kinds of review.
   ------------------------------------------------------------------ */

const typesCss = `
.s-rvp3-glow { animation: s-rvp3-glow 3.6s ease-in-out infinite; }
@keyframes s-rvp3-glow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}
.s-rvp3-pip .pip-arm-r { animation: s-rvp3-wave 3.6s ease-in-out infinite; }
@keyframes s-rvp3-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

const DOORS = [
  { x: 60, name: 'narrative', hint: 'a guided tour', tone: 'amber', open: 0.35 },
  { x: 220, name: 'systematic', hint: 'a fixed protocol', tone: 'blue', open: 0 },
  { x: 380, name: 'meta-analysis', hint: 'numbers pooled', tone: 'green', open: 0 },
  { x: 540, name: 'scoping', hint: 'a map of the field', tone: 'pink', open: 0 },
]

export function TypesScene() {
  const FLOOR = 310
  return (
    <Scene
      w={800}
      h={330}
      top={14}
      css={typesCss}
      className="s-rvp3"
      label="Four doors in a row labelled narrative, systematic, meta-analysis and scoping. The narrative door stands a little open with light behind it, the systematic door carries a PRISMA sign, and a paper character beside them points at the doors"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={300} />
      {DOORS.map((door, i) => (
        <g key={door.name}>
          <Hand x={door.x + 55} y={86} size={24} anchor="middle" weight={700}>
            {door.name}
          </Hand>
          <Hand x={door.x + 55} y={112} size={17} anchor="middle" c={INK_SOFT}>
            {door.hint}
          </Hand>
          <Door x={door.x} y={FLOOR} w={110} h={176} open={door.open} tone={door.tone} seed={310 + i * 3} />
        </g>
      ))}
      <g className="s-rvp3-glow">
        <path d={`M60 ${FLOOR}L60 ${FLOOR - 176}L170 ${FLOOR - 176}L170 ${FLOOR}Z`} fill={TONES.amber.mid} />
      </g>
      <Door x={60} y={FLOOR} w={110} h={176} open={0.35} tone="amber" seed={310} />
      <Box x={236} y={FLOOR - 140} w={78} h={26} fill={PAPER} seed={330} sw={1.4} />
      <Type x={275} y={FLOOR - 122} size={15} anchor="middle" weight={700}>
        PRISMA
      </Type>

      <Shadow x={712} y={FLOOR + 2} rx={36} ry={5} />
      <Place x={712} y={FLOOR} s={1.75} flip>
        <g className="s-rvp3-pip">
          <Pip mood="happy" arms="point" tone="blue" glasses look={1.2} seed={340} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The format of a review paper, section by section.
   ------------------------------------------------------------------ */

const formatCss = `
.s-rvp4-mark { animation: s-rvp4-scan 9s steps(1, end) infinite; }
@keyframes s-rvp4-scan {
  0% { transform: translateY(0); }
  12.5% { transform: translateY(var(--y1)); }
  25% { transform: translateY(var(--y2)); }
  37.5% { transform: translateY(var(--y3)); }
  50% { transform: translateY(var(--y4)); }
  62.5% { transform: translateY(var(--y5)); }
  75% { transform: translateY(var(--y6)); }
  87.5% { transform: translateY(var(--y7)); }
  100% { transform: translateY(0); }
}
.s-rvp4-pip .pip-body { animation: s-rvp4-bob 3s ease-in-out infinite; }
@keyframes s-rvp4-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const BANDS = [
  { name: 'title', h: 30 },
  { name: 'abstract', h: 34 },
  { name: 'introduction', h: 34 },
  { name: 'methods', h: 34 },
  { name: 'themes', h: 66 },
  { name: 'summary table', h: 42 },
  { name: 'future directions', h: 34 },
  { name: 'conclusion', h: 30 },
]

export function FormatScene() {
  const X = 250
  const W = 300
  const TOP = 44
  const tops = []
  let y = TOP
  for (const band of BANDS) {
    tops.push(y)
    y += band.h
  }
  const bottom = y
  const shifts = {}
  tops.forEach((t, i) => {
    if (i) shifts[`--y${i}`] = `${t - TOP}px`
  })

  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={formatCss}
      className="s-rvp4"
      label="A tall page divided into labelled bands: title, abstract, introduction, methods, themes, summary table, future directions and conclusion. A highlighter moves down the bands one by one, a paper character points at the page, and a sticky note says check the guide for authors"
    >
      <rect x={X} y={TOP} width={W} height={bottom - TOP} fill={PAPER} />
      <g className="s-rvp4-mark" style={shifts}>
        <rect x={X + 3} y={TOP + 2} width={W - 6} height={BANDS[0].h - 4} fill={TONES.amber.mid} opacity="0.45" />
      </g>
      {BANDS.map((band, i) => {
        const t = tops[i]
        const mid = t + band.h / 2
        return (
          <g key={band.name}>
            {i ? <Ink d={handLine(X, t, X + W, t, 400 + i, 0.4)} c={INK_SOFT} w={1.2} /> : null}
            <Hand x={X + 14} y={mid + 6} size={18} weight={700}>
              {band.name}
            </Hand>
            {band.name === 'themes' ? (
              <g>
                {[0, 1, 2].map((k) => (
                  <Ink key={k} d={handLine(X + 170, t + 16 + k * 17, X + 170 + 100 - k * 18, t + 16 + k * 17, 410 + k, 0.3)} c={[TONES.green.ink, TONES.blue.ink, TONES.pink.ink][k]} w={2} />
                ))}
              </g>
            ) : band.name === 'summary table' ? (
              <Grid x={X + 170} y={t + 6} cols={4} rows={2} cw={30} rh={15} header="green" seed={420} />
            ) : (
              <Ink d={handLine(X + 170, mid, X + 170 + 70 + ((i * 23) % 40), mid, 430 + i, 0.3)} c={TEXT_LINE} w={1.8} />
            )}
          </g>
        )
      })}
      <Ink d={handLine(X, TOP, X + W, TOP, 440, 0.6) + handLine(X + W, TOP, X + W, bottom, 441, 0.6) + handLine(X + W, bottom, X, bottom, 442, 0.6) + handLine(X, bottom, X, TOP, 443, 0.6)} w={2} />

      <Floor y={372} x1={30} x2={230} seed={450} />
      <Shadow x={130} y={374} rx={36} ry={5} />
      <Place x={130} y={372} s={1.8}>
        <g className="s-rvp4-pip">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.5} seed={451} />
        </g>
      </Place>

      <Sticky x={590} y={90} w={180} h={120} tone="pink" lines={0} seed={452} />
      <Hand x={680} y={138} size={21} anchor="middle" weight={700}>
        check the
      </Hand>
      <Hand x={680} y={166} size={21} anchor="middle" weight={700}>
        guide for authors
      </Hand>
      <PushPin x={677} y={98} tone="red" seed={453} />
      <Plant x={700} y={372} s={0.9} seed={454} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Seven steps up to a finished draft.
   ------------------------------------------------------------------ */

const stepsCss = `
.s-rvp5-pip { animation: s-rvp5-hop 2.4s ease-in-out infinite; }
@keyframes s-rvp5-hop {
  0%, 60%, 100% { transform: translateY(0); }
  75% { transform: translateY(-10px); }
}
.s-rvp5-flag .flag-cloth { animation: s-rvp5-flap 2.2s ease-in-out infinite; }
@keyframes s-rvp5-flap {
  0%, 100% { transform: skewY(0deg); }
  50% { transform: skewY(-5deg); }
}
`

const STEPS = ['aim', 'search', 'matrix', 'themes', 'draft', 'table', 'feedback']

export function StepsScene() {
  const FLOOR = 320
  const SW = 96
  const RISE = 32
  return (
    <Scene
      w={800}
      h={330}
      top={6}
      css={stepsCss}
      className="s-rvp5"
      label="Seven steps rising from left to right, labelled aim, search, matrix, themes, draft, table and feedback, with a flag on the top step. A paper character holding a pencil hops on the fourth step"
    >
      {STEPS.map((name, i) => {
        const x = 40 + i * SW
        const top = FLOOR - (i + 1) * RISE
        const tone = ['amber', 'green', 'blue', 'pink', 'amber', 'green', 'blue'][i]
        return (
          <g key={name}>
            <Box x={x} y={top} w={SW} h={FLOOR - top} fill={`url(#fill-${tone})`} seed={500 + i} />
            <Hand x={x + SW / 2} y={top + 24} size={19} anchor="middle" weight={700}>
              {name}
            </Hand>
            <Type x={x + SW / 2} y={FLOOR - 8} size={14} anchor="middle" c={INK_SOFT}>
              {String(i + 1)}
            </Type>
          </g>
        )
      })}
      <Floor y={FLOOR} x1={20} x2={780} seed={520} />

      <g className="s-rvp5-flag">
        <Flag x={40 + 6 * SW + 70} y={FLOOR - 7 * RISE} h={70} tone="red" seed={521} />
      </g>
      <Tick x={40 + 6 * SW + 30} y={FLOOR - 7 * RISE - 24} s={1.2} />

      <Place x={40 + 3 * SW + 48} y={FLOOR - 4 * RISE}>
        <g className="s-rvp5-pip">
          <Place s={1.5}>
            <Pip mood="grin" arms="up" tone="blue" glasses look={1} seed={530} />
          </Place>
        </g>
      </Place>
      <Shadow x={40 + 3 * SW + 48} y={FLOOR - 4 * RISE + 2} rx={26} ry={4} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. A stamp album of summaries, and a board of papers tied by one idea.
   ------------------------------------------------------------------ */

const synthCss = `
.s-rvp6-thread { animation: s-rvp6-pulse 4s ease-in-out infinite; animation-delay: calc(var(--i) * -1s); }
@keyframes s-rvp6-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.s-rvp6-theme { animation: s-rvp6-sway 4s ease-in-out infinite; }
@keyframes s-rvp6-sway {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}
`

export function SynthesisScene() {
  const album = []
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      const x = 74 + c * 92
      const y = 104 + r * 96
      album.push(
        <g key={`${r}-${c}`}>
          <Box x={x} y={y} w={76} h={80} fill={PAPER} seed={600 + r * 3 + c} sw={1.4} />
          <Sheet x={x + 20} y={y + 14} w={36} h={50} lines={3} fold={8} seed={610 + r * 3 + c} sw={1.3} />
        </g>,
      )
    }
  }
  const pinned = [
    { x: 470, y: 96 },
    { x: 670, y: 92 },
    { x: 462, y: 214 },
    { x: 676, y: 218 },
  ]
  const centre = [600, 186]

  return (
    <Scene
      w={800}
      h={340}
      top={20}
      css={synthCss}
      className="s-rvp6"
      label="On the left, papers sit apart in the boxes of a stamp album, labelled a summary, with a red cross. On the right, papers pinned to a board are tied by red threads to one sticky note in the middle, labelled a synthesis, with a green tick"
    >
      <Hand x={210} y={66} size={28} anchor="middle" weight={700}>
        a summary
      </Hand>
      <Box x={58} y={88} w={308} h={208} fill={TONES.brown.tint} seed={620} />
      {album}
      <Cross x={344} y={74} s={1.2} seed={621} />
      <Hand x={210} y={334} size={19} anchor="middle" c={INK_SOFT}>
        one paper, one paragraph
      </Hand>

      <Ink d={handLine(400, 60, 400, 330, 630, 1)} c={INK_SOFT} w={1.5} dash="6 8" />

      <Hand x={590} y={66} size={28} anchor="middle" weight={700}>
        a synthesis
      </Hand>
      <Box x={434} y={88} w={312} h={208} fill="url(#fill-brown)" seed={640} />
      {pinned.map((p, i) => (
        <g key={i}>
          <Sheet x={p.x - 20} y={p.y - 6} w={40} h={52} lines={3} fold={8} seed={650 + i} sw={1.3} />
          <PushPin x={p.x + 2} y={p.y + 4} tone={['red', 'blue', 'green', 'amber'][i]} seed={660 + i} />
        </g>
      ))}
      {pinned.map((p, i) => (
        <g key={`t${i}`} className="s-rvp6-thread" style={{ '--i': i }}>
          <Thread points={[[p.x + 4, p.y + 2], [(p.x + centre[0]) / 2, (p.y + centre[1]) / 2 + 10], centre]} seed={670 + i} w={2} />
        </g>
      ))}
      <Anim className="s-rvp6-theme" origin={centre}>
        <Sticky x={centre[0] - 46} y={centre[1] - 30} w={92} h={64} tone="amber" lines={0} seed={680} />
        <Hand x={centre[0]} y={centre[1] + 8} size={22} anchor="middle" weight={700}>
          one idea
        </Hand>
      </Anim>
      <Tick x={724} y={70} s={1.3} />
      <Hand x={590} y={334} size={19} anchor="middle" c={INK_SOFT}>
        many papers, compared
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Checked, proposed, then sent to the journal.
   ------------------------------------------------------------------ */

const publishCss = `
.s-rvp7-env { animation: s-rvp7-send 5s ease-in-out infinite; }
@keyframes s-rvp7-send {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  12% { opacity: 1; }
  50% { transform: translate(130px, -34px) rotate(-6deg); opacity: 1; }
  78% { transform: translate(236px, 0) rotate(0deg); opacity: 1; }
  86%, 100% { transform: translate(246px, 0) rotate(0deg); opacity: 0; }
}
.s-rvp7-pip .pip-body { animation: s-rvp7-bob 2.5s ease-in-out infinite; }
@keyframes s-rvp7-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.s-rvp7-bubble { animation: s-rvp7-nod 5s ease-in-out infinite; }
@keyframes s-rvp7-nod {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function PublishScene() {
  const FLOOR = 318
  return (
    <Scene
      w={800}
      h={330}
      top={8}
      css={publishCss}
      className="s-rvp7"
      label="A paper character holds an envelope beside a fully ticked checklist labelled PRISMA or SANRA. An envelope labelled proposal flies along a dashed arrow to a door marked journal, and a speech bubble from the door says send the full review"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={700} />

      <Checklist x={36} y={110} w={118} items={4} done={4} seed={701} />
      <Hand x={95} y={92} size={18} anchor="middle" weight={700}>
        PRISMA or SANRA
      </Hand>

      <Shadow x={230} y={FLOOR + 2} rx={36} ry={5} />
      <Place x={230} y={FLOOR} s={1.8}>
        <g className="s-rvp7-pip">
          <Pip mood="happy" arms="hold" tone="amber" glasses look={1.4} seed={710}>
            <Envelope x={-14} y={-29} w={28} h={18} seed={711} />
          </Pip>
        </g>
      </Place>

      <Arrow from={[300, 214]} to={[560, 214]} bend={-0.12} seed={720} w={1.8} dash="7 7" />
      <Place x={300} y={190}>
        <g className="s-rvp7-env">
          <Envelope x={0} y={0} w={64} h={42} seed={721} />
          <Type x={32} y={60} size={13} anchor="middle" weight={700} c={TONES.red.ink}>
            PROPOSAL
          </Type>
        </g>
      </Place>

      <Door x={600} y={FLOOR} w={110} h={186} open={0} tone="red" seed={730} />
      <Box x={612} y={FLOOR - 220} w={86} h={26} fill={PAPER} seed={731} sw={1.4} />
      <Type x={655} y={FLOOR - 202} size={15} anchor="middle" weight={700}>
        JOURNAL
      </Type>

      <g className="s-rvp7-bubble">
        <Speech x={430} y={30} w={230} h={54} tx={600} ty={104} seed={740}>
          <Hand x={545} y={64} size={21} anchor="middle" weight={700}>
            send the full review
          </Hand>
        </Speech>
      </g>
      <Plant x={752} y={FLOOR} s={0.85} seed={741} />
    </Scene>
  )
}
