import {
  Anim,
  Arrow,
  Blob,
  Box,
  Chart,
  Checklist,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pip,
  Place,
  Plant,
  Poly,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Speech,
  Sticky,
  TEXT_LINE,
  TONES,
  Type,
  handLine,
  rng,
} from '../../ink/index.js'

/*
 * Blue is the counting side, quantitative research, and pink is the
 * listening side, qualitative research, in every drawing of this post.
 */

/* A small pawn of a person: a round head on a dome of a body. Anchor: the
   middle of the base. */
export function Folk({ x, y, s = 1, tone = 'amber', seed = 1 }) {
  const body = `M${x - 9 * s} ${y}Q${x - 9.5 * s} ${y - 14 * s} ${x} ${y - 15 * s}Q${x + 9.5 * s} ${y - 14 * s} ${x + 9 * s} ${y}Z`
  return (
    <g>
      <path d={body} fill={`url(#fill-${tone})`} />
      <Ink d={body} w={1.4} />
      <Oval cx={x} cy={y - 21 * s} rx={6 * s} fill={PAPER} seed={seed} sw={1.4} />
    </g>
  )
}

/* Tally marks in groups of five, the way a register is counted. */
function Tally({ x, y, n, seed = 1, c = TONES.blue.deep }) {
  let d = ''
  for (let i = 0; i < n; i++) {
    const group = Math.floor(i / 5)
    const k = i % 5
    const gx = x + group * 34
    if (k < 4) d += handLine(gx + k * 6, y, gx + k * 6 + 1, y - 18, seed + i, 0.3)
    else d += handLine(gx - 4, y - 4, gx + 24, y - 14, seed + i, 0.3)
  }
  return <Ink d={d} c={c} w={1.9} />
}

/* Two or three short lines of writing inside a bubble or a note. */
function Writing({ x, y, w, rows = 2, seed = 1, c = TEXT_LINE }) {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < rows; i++) {
    const len = w * (0.55 + r() * 0.4)
    d += handLine(x, y + i * 11, x + len, y + i * 11, seed + i * 3, 0.35)
  }
  return <Ink d={d} c={c} w={1.6} />
}

/* ------------------------------------------------------------------
   1. Numbers on one sheet, words on the other, about the same girls.
   ------------------------------------------------------------------ */

const whatCss = `
.s-qvq1-arrow { animation: s-qvq1-nudge 3s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-qvq1-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(var(--dx, 6px)); }
}
.s-qvq1-girl { animation: s-qvq1-hop 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s); }
@keyframes s-qvq1-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-7px); }
}
.s-qvq1-quote { animation: s-qvq1-float 4s ease-in-out infinite; }
@keyframes s-qvq1-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function WhatScene() {
  return (
    <Scene
      w={800}
      h={340}
      top={20}
      css={whatCss}
      className="s-qvq1"
      label="Three girls stand in the middle; an arrow leads to a sheet on the left labelled numbers, with tally marks counted for science, commerce and arts, and another to a sheet on the right labelled words, with a quoted sentence"
    >
      <Hand x={190} y={58} size={30} anchor="middle" weight={700} c={TONES.blue.deep}>
        numbers
      </Hand>
      <Sheet x={80} y={76} w={220} h={236} lines={0} fold={22} seed={11} tone="blue" />
      <Type x={100} y={140} size={17}>science</Type>
      <Tally x={196} y={142} n={4} seed={12} />
      <Type x={100} y={196} size={17}>commerce</Type>
      <Tally x={196} y={198} n={3} seed={20} />
      <Type x={100} y={252} size={17}>arts</Type>
      <Tally x={196} y={254} n={11} seed={30} />

      <Hand x={610} y={58} size={30} anchor="middle" weight={700} c={TONES.pink.deep}>
        words
      </Hand>
      <Sheet x={500} y={76} w={220} h={236} lines={0} fold={22} seed={41} tone="pink" />
      <g className="s-qvq1-quote">
        <Hand x={520} y={136} size={21}>
          "science means
        </Hand>
        <Hand x={520} y={164} size={21}>
          tuition in town,
        </Hand>
        <Hand x={520} y={192} size={21}>
          and the last bus
        </Hand>
        <Hand x={520} y={220} size={21}>
          comes at five"
        </Hand>
      </g>
      <Writing x={520} y={256} w={170} rows={3} seed={42} c={TONES.pink.deep} />

      <g className="s-qvq1-arrow" style={{ '--dx': '-6px' }}>
        <Arrow from={[364, 196]} to={[316, 196]} bend={0} seed={50} w={2.2} />
      </g>
      <g className="s-qvq1-arrow" style={{ '--d': '-1.5s' }}>
        <Arrow from={[436, 196]} to={[484, 196]} bend={0} seed={51} w={2.2} />
      </g>

      {[0, 1, 2].map((i) => (
        <g key={i} className="s-qvq1-girl" style={{ '--i': i }}>
          <Folk x={376 + i * 24} y={i === 1 ? 256 : 270} s={1.05} tone="amber" seed={60 + i} />
        </g>
      ))}
      <Ink d={handLine(352, 286, 448, 286, 70, 0.6)} w={1.6} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. A balance with a chart in one pan and a speech bubble in the other.
   ------------------------------------------------------------------ */

const differencesCss = `
.s-qvq2 .scale-beam { animation: s-qvq2-rock 5s ease-in-out infinite; }
@keyframes s-qvq2-rock {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
.s-qvq2-pip .pip-arm-r { animation: s-qvq2-wave 2.8s ease-in-out infinite; }
@keyframes s-qvq2-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
`

export function DifferencesScene() {
  const left = (
    <g>
      <Chart x={248} y={284} w={58} h={52} bars={[0.45, 0.7, 0.95]} tone="blue" seed={21} />
    </g>
  )
  const right = (
    <g>
      <Speech x={496} y={232} w={66} h={40} tx={520} ty={284} seed={22} tone="pink">
        <Hand x={529} y={260} size={20} anchor="middle" weight={700}>
          why?
        </Hand>
      </Speech>
    </g>
  )
  return (
    <Scene
      w={800}
      h={380}
      top={50}
      css={differencesCss}
      className="s-qvq2"
      label="A balance scale with a small bar chart in the left pan labelled quantitative and a speech bubble asking why in the right pan labelled qualitative, the beam rocking but staying level, while a paper character waves beside it"
    >
      <Floor y={392} x1={60} x2={740} seed={1} />
      <Hand x={200} y={118} size={30} anchor="middle" weight={700} c={TONES.blue.deep}>
        quantitative
      </Hand>
      <Hand x={200} y={146} size={20} anchor="middle" c={INK_SOFT}>
        measure and test
      </Hand>
      <Hand x={600} y={118} size={30} anchor="middle" weight={700} c={TONES.pink.deep}>
        qualitative
      </Hand>
      <Hand x={600} y={146} size={20} anchor="middle" c={INK_SOFT}>
        explore and explain
      </Hand>

      <Scale x={400} y={390} s={1.6} seed={23} left={left} right={right} />

      <Shadow x={680} y={394} rx={30} ry={4} />
      <Place x={680} y={392} s={1.4}>
        <g className="s-qvq2-pip">
          <Pip mood="happy" arms="wave" tone="amber" look={-1.2} seed={24} />
        </g>
      </Place>
      <Plant x={110} y={392} s={0.8} seed={25} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. One topic splits into a counting question and a listening one.
   ------------------------------------------------------------------ */

const examplesCss = `
.s-qvq3-bubble { animation: s-qvq3-bob 4s ease-in-out infinite; animation-delay: calc(var(--i) * -2s); }
@keyframes s-qvq3-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.s-qvq3 .chart-bar { animation: s-qvq3-grow 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-qvq3-grow {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.88); }
}
.s-qvq3-pip .pip-body { animation: s-qvq3-turn 6s ease-in-out infinite; }
@keyframes s-qvq3-turn {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
`

export function ExamplesScene() {
  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={examplesCss}
      className="s-qvq3"
      label="A card at the top reads Class 11 streams; one arrow leads down left to a bar chart under the words how many, and another leads down right to two speech bubbles under the word why, with a paper character between them"
    >
      <Box x={270} y={40} w={260} h={58} r={8} fill={TONES.amber.tint} seed={31} sw={2} />
      <Hand x={400} y={78} size={26} anchor="middle" weight={700}>
        Class 11 streams
      </Hand>
      <Arrow from={[320, 104]} to={[210, 156]} bend={0.12} seed={32} w={2} />
      <Arrow from={[480, 104]} to={[590, 156]} bend={-0.12} seed={33} w={2} />

      <Hand x={190} y={186} size={26} anchor="middle" weight={700} c={TONES.blue.deep}>
        how many?
      </Hand>
      <Chart x={110} y={330} w={170} h={118} bars={[0.38, 0.28, 0.92]} tone="blue" seed={34} />
      <Type x={151} y={352} size={14} anchor="middle">sci</Type>
      <Type x={201} y={352} size={14} anchor="middle">com</Type>
      <Type x={251} y={352} size={14} anchor="middle">arts</Type>

      <Hand x={610} y={186} size={26} anchor="middle" weight={700} c={TONES.pink.deep}>
        why?
      </Hand>
      <g className="s-qvq3-bubble" style={{ '--i': 0 }}>
        <Speech x={520} y={206} w={190} h={48} tx={560} ty={272} seed={35} tone="pink">
          <Hand x={615} y={237} size={19} anchor="middle">
            "no lab nearby"
          </Hand>
        </Speech>
      </g>
      <g className="s-qvq3-bubble" style={{ '--i': 1 }}>
        <Speech x={540} y={282} w={190} h={48} tx={690} ty={346} seed={36}>
          <Hand x={635} y={313} size={19} anchor="middle">
            "Papa chose arts"
          </Hand>
        </Speech>
      </g>

      <Shadow x={400} y={352} rx={28} ry={4} />
      <Place x={400} y={350} s={1.35}>
        <g className="s-qvq3-pip">
          <Pip mood="focused" arms="shrug" tone="paper" glasses seed={37} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. A questionnaire becomes a chart; an interview becomes themes.
   ------------------------------------------------------------------ */

const methodsCss = `
.s-qvq4 .check-tick { animation: s-qvq4-tick 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s); }
@keyframes s-qvq4-tick {
  0%, 15% { stroke-dashoffset: 1; }
  35%, 85% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
.s-qvq4-note { animation: s-qvq4-settle 5s ease-in-out infinite; animation-delay: calc(var(--i) * -1.2s); }
@keyframes s-qvq4-settle {
  0%, 100% { transform: rotate(0deg) translateY(0); }
  50% { transform: rotate(2deg) translateY(-3px); }
}
.s-qvq4-arrow { animation: s-qvq4-nudge 3s ease-in-out infinite; }
@keyframes s-qvq4-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}
`

export function MethodsScene() {
  const notes = [
    { x: 600, y: 120, tone: 'pink', word: 'travel', r: -4 },
    { x: 690, y: 132, tone: 'amber', word: 'family', r: 3 },
    { x: 640, y: 214, tone: 'green', word: 'fees', r: -2 },
  ]
  return (
    <Scene
      w={800}
      h={330}
      top={50}
      css={methodsCss}
      className="s-qvq4"
      label="On the left a ticked questionnaire with an arrow to a bar chart, labelled count; on the right a speech bubble from an interview with an arrow to sticky notes marked travel, family and fees, labelled code into themes"
    >
      <Hand x={200} y={86} size={28} anchor="middle" weight={700} c={TONES.blue.deep}>
        count
      </Hand>
      <Checklist x={60} y={116} w={120} items={4} done={4} seed={41} />
      <g className="s-qvq4-arrow">
        <Arrow from={[192, 200]} to={[236, 200]} bend={0} seed={42} w={2.2} />
      </g>
      <Chart x={250} y={300} w={120} h={140} bars={[0.5, 0.35, 0.95]} tone="blue" seed={43} />

      <Ink d={handLine(400, 96, 400, 330, 44, 1.2)} w={1.4} o={0.4} dash="6 8" />

      <Hand x={620} y={86} size={28} anchor="middle" weight={700} c={TONES.pink.deep}>
        code into themes
      </Hand>
      <Speech x={420} y={140} w={130} h={64} tx={450} ty={240} seed={45} tone="pink">
        <Writing x={436} y={162} w={100} rows={3} seed={46} c={TONES.pink.deep} />
      </Speech>
      <Folk x={448} y={300} s={1.2} tone="pink" seed={47} />
      <g className="s-qvq4-arrow">
        <Arrow from={[556, 196]} to={[594, 196]} bend={0} seed={48} w={2.2} />
      </g>
      {notes.map((n, i) => (
        <Place key={i} x={n.x} y={n.y} r={n.r}>
          <Anim className="s-qvq4-note" origin={[37, 0]} style={{ '--i': i }}>
            <Sticky x={0} y={0} w={78} h={72} tone={n.tone} lines={0} seed={50 + i} />
            <Hand x={39} y={44} size={19} anchor="middle" weight={700}>
              {n.word}
            </Hand>
          </Anim>
        </Place>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Many people measured lightly, or a few people heard fully.
   ------------------------------------------------------------------ */

const sampleCss = `
.s-qvq5-crowd { animation: s-qvq5-pulse 4s ease-in-out infinite; }
@keyframes s-qvq5-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
.s-qvq5-talk { animation: s-qvq5-bob 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * -1.2s); }
@keyframes s-qvq5-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

function crowd(n, [x, y, w, h], seed) {
  const r = rng(seed)
  const out = []
  let tries = 0
  while (out.length < n && tries < 3000) {
    tries += 1
    const px = x + r() * w
    const py = y + r() * h
    if (out.every((p) => Math.hypot(p.x - px, (p.y - py) * 1.3) > 24)) out.push({ x: Math.round(px), y: Math.round(py) })
  }
  return out.sort((a, b) => a.y - b.y)
}

const CROWD = crowd(34, [70, 130, 260, 150], 57)

export function SampleScene() {
  const few = [
    { x: 500, y: 300 },
    { x: 600, y: 300 },
    { x: 700, y: 300 },
  ]
  return (
    <Scene
      w={800}
      h={330}
      top={30}
      css={sampleCss}
      className="s-qvq5"
      label="On the left a big crowd of small blue people labelled many, measured; on the right three larger pink people, each with a speech bubble full of writing, labelled few, heard fully"
    >
      <Hand x={200} y={78} size={28} anchor="middle" weight={700} c={TONES.blue.deep}>
        many, measured
      </Hand>
      <Blob
        points={[[50, 200], [90, 120], [200, 104], [320, 120], [356, 206], [320, 300], [200, 318], [80, 298]]}
        fill={TONES.blue.tint}
        seed={51}
      />
      <g className="s-qvq5-crowd">
        {CROWD.map((p, i) => (
          <Folk key={i} x={p.x} y={p.y + 16} s={0.72} tone="blue" seed={60 + i} />
        ))}
      </g>

      <Ink d={handLine(400, 80, 400, 340, 52, 1.2)} w={1.4} o={0.4} dash="6 8" />

      <Hand x={600} y={78} size={28} anchor="middle" weight={700} c={TONES.pink.deep}>
        few, heard fully
      </Hand>
      {few.map((p, i) => (
        <g key={i}>
          <g className="s-qvq5-talk" style={{ '--i': i }}>
            <Speech x={p.x - 42} y={120} w={84} h={70} tx={p.x - 6} ty={238} seed={70 + i} tone={i === 1 ? 'pink' : 'paper'}>
              <Writing x={p.x - 32} y={140} w={64} rows={4} seed={74 + i} c={TONES.pink.deep} />
            </Speech>
          </g>
          <Folk x={p.x} y={p.y} s={1.6} tone="pink" seed={80 + i} />
        </g>
      ))}
      <Ink d={handLine(440, 302, 760, 302, 90, 0.6)} w={1.6} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The three core mixed methods designs, as rows of boxes.
   ------------------------------------------------------------------ */

const mixedCss = `
.s-qvq6-flow { animation: s-qvq6-nudge 3s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-qvq6-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
.s-qvq6-spark { animation: s-qvq6-twinkle 3s ease-in-out infinite; }
@keyframes s-qvq6-twinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
`

function Tag({ x, y, w = 120, kind, seed }) {
  const quan = kind === 'quan'
  return (
    <g>
      <Box x={x} y={y} w={w} h={40} r={6} fill={quan ? TONES.blue.tint : TONES.pink.tint} stroke={quan ? TONES.blue.deep : TONES.pink.deep} seed={seed} sw={2} />
      <Type x={x + w / 2} y={y + 26} size={17} anchor="middle" weight={700}>
        {quan ? 'numbers' : 'words'}
      </Type>
    </g>
  )
}

export function MixedScene() {
  return (
    <Scene
      w={800}
      h={340}
      top={20}
      css={mixedCss}
      className="s-qvq6"
      label="Three rows of boxes: convergent, where numbers and words run side by side into a circle marked compare; explanatory, where numbers lead to words; and exploratory, where words lead to numbers"
    >
      <Hand x={40} y={92} size={24} weight={700}>
        convergent
      </Hand>
      <Tag x={240} y={44} kind="quan" seed={61} />
      <Tag x={240} y={100} kind="qual" seed={62} />
      <g className="s-qvq6-flow" style={{ '--i': 0 }}>
        <Arrow from={[368, 64]} to={[470, 86]} bend={-0.1} seed={63} w={2} />
        <Arrow from={[368, 120]} to={[470, 98]} bend={0.1} seed={64} w={2} />
      </g>
      <Oval cx={540} cy={92} rx={62} ry={30} fill={TONES.amber.tint} seed={65} sw={2} />
      <Hand x={540} y={100} size={22} anchor="middle" weight={700}>
        compare
      </Hand>
      <g className="s-qvq6-spark">
        <Sparkle x={618} y={66} s={9} />
      </g>

      <Ink d={handLine(40, 160, 760, 160, 66, 0.8)} w={1.2} o={0.35} dash="5 8" />

      <Hand x={40} y={212} size={24} weight={700}>
        explanatory
      </Hand>
      <Tag x={240} y={186} kind="quan" seed={67} />
      <g className="s-qvq6-flow" style={{ '--i': 1 }}>
        <Arrow from={[368, 206]} to={[428, 206]} bend={0} seed={68} w={2} />
      </g>
      <Tag x={440} y={186} kind="qual" seed={69} />
      <Hand x={580} y={214} size={20} c={INK_SOFT}>
        survey, then interviews
      </Hand>

      <Ink d={handLine(40, 254, 760, 254, 70, 0.8)} w={1.2} o={0.35} dash="5 8" />

      <Hand x={40} y={306} size={24} weight={700}>
        exploratory
      </Hand>
      <Tag x={240} y={280} kind="qual" seed={71} />
      <g className="s-qvq6-flow" style={{ '--i': 2 }}>
        <Arrow from={[368, 300]} to={[428, 300]} bend={0} seed={72} w={2} />
      </g>
      <Tag x={440} y={280} kind="quan" seed={73} />
      <Hand x={580} y={308} size={20} c={INK_SOFT}>
        interviews, then survey
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. A signpost at a fork: how many, why, or both.
   ------------------------------------------------------------------ */

const chooseCss = `
.s-qvq7-sign { animation: s-qvq7-swing 5s ease-in-out infinite; animation-delay: calc(var(--i) * -1.6s); }
@keyframes s-qvq7-swing {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}
.s-qvq7-pip .pip-body { animation: s-qvq7-bob 3s ease-in-out infinite; }
@keyframes s-qvq7-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

function Sign({ x, y, w = 150, h = 40, dir = 1, tone, text, seed }) {
  const right = dir >= 0 ? [[x + w, y], [x + w + 18, y + h / 2], [x + w, y + h]] : [[x + w, y], [x + w, y + h]]
  const left = dir <= 0 ? [[x, y + h], [x - 18, y + h / 2], [x, y]] : [[x, y + h], [x, y]]
  const tip = [...right, ...left]
  return (
    <g>
      <Poly points={tip} fill={`url(#fill-${tone})`} seed={seed} sw={2} />
      <Hand x={x + w / 2} y={y + h / 2 + 7} size={21} anchor="middle" weight={700}>
        {text}
      </Hand>
    </g>
  )
}

export function ChooseScene() {
  return (
    <Scene
      w={800}
      h={376}
      top={40}
      css={chooseCss}
      className="s-qvq7"
      label="A paper character looks up at a signpost at a fork in the road; one sign points left to a bar chart and reads how many, one points right to a speech bubble and reads why, and one points both ways and reads both"
    >
      <Ink d="M420 398Q340 318 196 304" w={26} c={TONES.amber.tint} />
      <Ink d="M420 398Q500 318 636 302" w={26} c={TONES.amber.tint} />
      <Ink d="M420 398Q340 318 196 304" w={1.5} c={INK_SOFT} dash="7 9" />
      <Ink d="M420 398Q500 318 636 302" w={1.5} c={INK_SOFT} dash="7 9" />
      <Floor y={400} x1={60} x2={740} seed={81} />

      <Chart x={70} y={300} w={110} h={90} bars={[0.5, 0.8, 0.65]} tone="blue" seed={82} />
      <Speech x={620} y={220} w={120} h={58} tx={660} ty={300} seed={83} tone="pink">
        <Writing x={636} y={240} w={88} rows={2} seed={84} c={TONES.pink.deep} />
      </Speech>

      <Ink d={handLine(420, 396, 420, 100, 85, 0.4)} w={4} />
      <Ink d={handLine(426, 396, 426, 104, 86, 0.4)} w={1.4} o={0.5} />
      <Place x={420} y={118}>
        <Anim className="s-qvq7-sign" origin={[0, 0]} style={{ '--i': 0 }}>
          <Sign x={-170} y={0} w={150} dir={-1} tone="blue" text="how many?" seed={87} />
        </Anim>
      </Place>
      <Place x={420} y={170}>
        <Anim className="s-qvq7-sign" origin={[0, 0]} style={{ '--i': 1 }}>
          <Sign x={20} y={0} w={110} dir={1} tone="pink" text="why?" seed={88} />
        </Anim>
      </Place>
      <Place x={420} y={222}>
        <Anim className="s-qvq7-sign" origin={[0, 0]} style={{ '--i': 2 }}>
          <Sign x={-60} y={0} w={120} dir={0} tone="green" text="both?" seed={89} />
        </Anim>
      </Place>

      <Shadow x={300} y={402} rx={30} ry={4} />
      <Place x={300} y={400} s={1.5}>
        <g className="s-qvq7-pip">
          <Pip mood="focused" arms="think" tone="amber" glasses look={1.5} seed={90} />
        </g>
      </Place>
      <Plant x={740} y={400} s={0.8} seed={91} />
    </Scene>
  )
}
