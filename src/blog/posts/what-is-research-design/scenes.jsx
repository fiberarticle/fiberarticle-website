import {
  Anim,
  Arrow,
  Box,
  Chai,
  Chart,
  Checklist,
  Clock,
  Desk,
  Door,
  Flag,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  Oval,
  PAPER,
  Pip,
  Place,
  Plant,
  Poly,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'

/*
 * The girls in these drawings are small pawns: a round head on a dome of a
 * body, coloured by the section they belong to. Anchor: the middle of the
 * base. `rope` draws a skipping rope looped over the head.
 */
export function Kid({ x, y, s = 1, tone = 'amber', rope = false, seed = 1 }) {
  const body = `M${x - 9 * s} ${y}Q${x - 9.5 * s} ${y - 14 * s} ${x} ${y - 15 * s}Q${x + 9.5 * s} ${y - 14 * s} ${x + 9 * s} ${y}Z`
  return (
    <g>
      {rope ? (
        <Ink
          d={`M${x - 11 * s} ${y - 6 * s}Q${x - 16 * s} ${y - 46 * s} ${x} ${y - 40 * s}Q${x + 16 * s} ${y - 46 * s} ${x + 11 * s} ${y - 6 * s}`}
          c={TONES.red.ink}
          w={1.8}
        />
      ) : null}
      <path d={body} fill={`url(#fill-${tone})`} />
      <Ink d={body} w={1.4} />
      <Oval cx={x} cy={y - 21 * s} rx={6 * s} fill={PAPER} seed={seed} sw={1.4} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Design, methods, methodology.
   ------------------------------------------------------------------ */

const whatCss = `
.s-rsd1-arrow { animation: s-rsd1-nudge 3s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-rsd1-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
.s-rsd1-mark { animation: s-rsd1-mark 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-rsd1-mark {
  0%, 60%, 100% { opacity: 1; }
  75%, 85% { opacity: 0.15; }
}
.s-rsd1 .clock-min { animation: s-rsd1-spin 8s linear infinite; }
@keyframes s-rsd1-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export function WhatScene() {
  const marks = [
    [168, 132],
    [224, 132],
    [168, 214],
    [224, 214],
  ]
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={whatCss}
      className="s-rsd1"
      label="Three panels joined by arrows: a blue plan labelled design that compares a girl with a skipping rope and a girl without, ticked before and after; a clock, a checklist and a chart labelled methods; and a sheet titled Chapter 3 labelled methodology"
    >
      <Hand x={145} y={62} size={28} anchor="middle" weight={700}>
        design
      </Hand>
      <Box x={40} y={78} w={210} h={192} r={8} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={11} sw={2} />
      <Ink d={handLine(130, 92, 130, 256, 12, 0.4) + handLine(52, 172, 238, 172, 13, 0.4)} c={TONES.blue.ink} w={1.2} o={0.6} dash="4 5" />
      <Hand x={168} y={106} size={15} anchor="middle" c={TONES.blue.deep}>
        before
      </Hand>
      <Hand x={224} y={106} size={15} anchor="middle" c={TONES.blue.deep}>
        after
      </Hand>
      <Kid x={88} y={158} s={1.05} tone="amber" rope seed={14} />
      <Kid x={88} y={242} s={1.05} tone="green" seed={15} />
      {marks.map(([x, y], i) => (
        <g key={i} className="s-rsd1-mark" style={{ '--i': i }}>
          <Tick x={x} y={y} s={0.9} />
        </g>
      ))}

      <g className="s-rsd1-arrow">
        <Arrow from={[262, 176]} to={[302, 176]} bend={0} seed={16} w={2.2} />
      </g>

      <Hand x={404} y={62} size={28} anchor="middle" weight={700}>
        methods
      </Hand>
      <Clock x={358} y={128} r={30} seed={17} />
      <Checklist x={410} y={92} w={84} items={3} done={3} seed={18} />
      <Chart x={322} y={272} w={100} h={70} bars={[0.5, 0.8, 0.65]} tone="amber" seed={19} />

      <g className="s-rsd1-arrow" style={{ '--d': '-1.5s' }}>
        <Arrow from={[506, 176]} to={[546, 176]} bend={0} seed={20} w={2.2} />
      </g>

      <Hand x={660} y={62} size={28} anchor="middle" weight={700}>
        methodology
      </Hand>
      <Sheet x={586} y={80} w={150} h={196} lines={0} fold={22} seed={21} />
      <Hand x={654} y={126} size={24} anchor="middle" weight={700}>
        Chapter 3
      </Hand>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Ink key={i} d={handLine(604, 152 + i * 19, 604 + 74 + ((i * 23) % 40), 152 + i * 19, 22 + i, 0.4)} c={TEXT_LINE} w={1.8} />
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Three questions: describe, relate, test.
   ------------------------------------------------------------------ */

const typesCss = `
.s-rsd2-path { animation: s-rsd2-glow 4.5s ease-in-out infinite; animation-delay: calc(var(--i) * 1.5s); }
@keyframes s-rsd2-glow {
  0%, 40%, 100% { opacity: 1; }
  15%, 25% { opacity: 0.25; }
}
.s-rsd2-pip .pip-body { animation: s-rsd2-tilt 4s ease-in-out infinite; }
@keyframes s-rsd2-tilt {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
.s-rsd2-dot { animation: s-rsd2-pop 3s ease-in-out infinite; animation-delay: calc(var(--i) * 0.2s); }
@keyframes s-rsd2-pop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-5px); }
}
`

const SCATTER = [
  [348, 290],
  [366, 278],
  [384, 282],
  [402, 262],
  [420, 256],
  [438, 240],
  [456, 236],
]

export function TypesScene() {
  const boxes = [
    { x: 60, label: 'describe', sub: 'how many?', tone: 'amber' },
    { x: 310, label: 'relate', sub: 'move together?', tone: 'green' },
    { x: 560, label: 'test', sub: 'does it change?', tone: 'blue' },
  ]
  return (
    <Scene
      w={800}
      h={340}
      top={0}
      css={typesCss}
      className="s-rsd2"
      label="A card reading your question at the top, with arrows down to three boxes: describe, how many, with a bar chart; relate, move together, with rising dots; and test, does it change, with a girl skipping in group A and a girl without a rope in group B. A paper character thinks beside the card"
    >
      <Box x={316} y={18} w={168} h={56} r={8} fill={PAPER} seed={30} sw={2} />
      <Hand x={400} y={54} size={24} anchor="middle" weight={700}>
        your question
      </Hand>
      <Shadow x={716} y={151} rx={20} ry={3} />
      <Place x={714} y={150} s={1.1}>
        <g className="s-rsd2-pip">
          <Pip mood="focused" arms="think" tone="amber" look={-1.5} seed={31} />
        </g>
      </Place>

      {boxes.map((b, i) => (
        <g key={b.label}>
          <g className="s-rsd2-path" style={{ '--i': i }}>
            <Arrow from={[400, 80]} to={[b.x + 90, 144]} bend={i === 0 ? 0.12 : i === 2 ? -0.12 : 0} seed={32 + i} w={2} c={TONES[b.tone].deep} />
          </g>
          <Box x={b.x} y={150} w={180} h={176} r={10} fill={TONES[b.tone].tint} seed={40 + i} sw={2} />
          <Hand x={b.x + 90} y={184} size={26} anchor="middle" weight={700}>
            {b.label}
          </Hand>
          <Hand x={b.x + 90} y={210} size={18} anchor="middle" c={INK_SOFT}>
            {b.sub}
          </Hand>
        </g>
      ))}

      <Chart x={92} y={306} w={116} h={78} bars={[0.45, 0.8, 0.6, 0.95]} tone="amber" seed={50} />

      <Ink d={handLine(336, 306, 470, 306, 51, 0.5) + handLine(336, 306, 336, 226, 52, 0.5)} w={1.9} />
      <Ink d={handLine(346, 296, 462, 232, 53, 0.6)} c={TONES.green.deep} w={1.5} dash="5 5" />
      {SCATTER.map(([x, y], i) => (
        <g key={i} className="s-rsd2-dot" style={{ '--i': i }}>
          <circle cx={x} cy={y} r={4.2} fill={TONES.green.mid} stroke="#2b2521" strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
        </g>
      ))}

      <Kid x={612} y={296} s={1.1} tone="amber" rope seed={54} />
      <Kid x={688} y={296} s={1.1} tone="green" seed={55} />
      <Type x={612} y={318} size={15} anchor="middle" weight={700}>
        A
      </Type>
      <Type x={688} y={318} size={15} anchor="middle" weight={700}>
        B
      </Type>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Describe and relate.
   ------------------------------------------------------------------ */

const describeCss = `
.s-rsd3 .chart-bar { animation: s-rsd3-grow 5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-rsd3-grow {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.86); }
}
.s-rsd3-ask { animation: s-rsd3-ask 3s ease-in-out infinite; }
@keyframes s-rsd3-ask {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}
.s-rsd3-dot { animation: s-rsd3-blink 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.25s); }
@keyframes s-rsd3-blink {
  0%, 60%, 100% { opacity: 1; }
  75% { opacity: 0.3; }
}
`

const FALLING = [
  [506, 128],
  [530, 150],
  [552, 140],
  [574, 172],
  [598, 166],
  [620, 198],
  [642, 192],
  [664, 226],
  [690, 220],
  [712, 250],
]

export function DescribeScene() {
  return (
    <Scene
      w={800}
      h={330}
      top={30}
      css={describeCss}
      className="s-rsd3"
      label="On the left a bar chart labelled how many, counting girls. On the right a scatter plot of screen time against endurance whose dots fall from left to right along a dashed line, labelled move together, with a large question mark beside it"
    >
      <Hand x={190} y={76} size={28} anchor="middle" weight={700}>
        how many?
      </Hand>
      <Hand x={190} y={102} size={18} anchor="middle" c={INK_SOFT}>
        descriptive
      </Hand>
      <Chart x={80} y={300} w={230} h={170} bars={[0.45, 0.72, 0.38, 0.88]} tone="amber" seed={60} />
      {[0, 1, 2, 3].map((i) => (
        <Kid key={i} x={113 + i * 54} y={330} s={0.8} tone={['amber', 'green', 'blue', 'pink'][i]} seed={61 + i} />
      ))}

      <Ink d={handLine(400, 60, 400, 340, 65, 1.2)} c={INK_SOFT} w={1.6} dash="6 8" />

      <Hand x={610} y={76} size={28} anchor="middle" weight={700}>
        move together?
      </Hand>
      <Hand x={610} y={102} size={18} anchor="middle" c={INK_SOFT}>
        correlational
      </Hand>
      <Ink d={handLine(484, 290, 744, 290, 66, 0.6) + handLine(484, 290, 484, 116, 67, 0.6)} w={2} />
      <Hand x={614} y={318} size={19} anchor="middle">
        screen time
      </Hand>
      <Hand x={470} y={206} size={19} anchor="middle" rotate={-90}>
        endurance
      </Hand>
      <Ink d={handLine(498, 122, 724, 260, 68, 0.8)} c={TONES.pink.deep} w={1.6} dash="6 6" />
      {FALLING.map(([x, y], i) => (
        <g key={i} className="s-rsd3-dot" style={{ '--i': i }}>
          <circle cx={x} cy={y} r={4.6} fill={TONES.pink.mid} stroke="#2b2521" strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
        </g>
      ))}
      <Place x={0} y={0}>
        <Anim className="s-rsd3-ask" origin={[712, 160]}>
          <Hand x={712} y={176} size={54} anchor="middle" weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Chance deals the groups, or the sections already exist.
   ------------------------------------------------------------------ */

const experimentCss = `
.s-rsd4-die { animation: s-rsd4-roll 3s ease-in-out infinite; }
@keyframes s-rsd4-roll {
  0%, 100% { transform: rotate(0deg) translateY(0); }
  30% { transform: rotate(-20deg) translateY(-8px); }
  60% { transform: rotate(14deg) translateY(0); }
}
.s-rsd4-split { animation: s-rsd4-pulse 3s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-rsd4-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.s-rsd4-hop { animation: s-rsd4-hop 1.6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.2s); }
@keyframes s-rsd4-hop {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-7px); }
}
`

const MIXED = ['amber', 'green', 'blue', 'amber', 'pink', 'green']

export function ExperimentScene() {
  return (
    <Scene
      w={800}
      h={340}
      top={10}
      css={experimentCss}
      className="s-rsd4"
      label="On the left, labelled true experiment, a rolling die sends a mixed row of girls into two circles, A and B, each with the same mix of colours. On the right, labelled quasi-experiment, girls stand in front of two classroom doors marked 7 A and 7 B, and the girls of 7 A hold skipping ropes"
    >
      <Floor y={322} x1={30} x2={770} seed={70} />
      <Ink d={handLine(400, 30, 400, 322, 71, 1.2)} c={INK_SOFT} w={1.6} dash="6 8" />

      <Hand x={200} y={50} size={26} anchor="middle" weight={700}>
        true experiment
      </Hand>
      <Hand x={200} y={76} size={18} anchor="middle" c={INK_SOFT}>
        chance makes the groups
      </Hand>
      {MIXED.map((tone, i) => (
        <Kid key={i} x={92 + i * 30} y={136} s={0.85} tone={tone} seed={72 + i} />
      ))}
      <Place x={0} y={0}>
        <Anim className="s-rsd4-die" origin={[328, 128]}>
          <Box x={312} y={112} w={32} h={32} r={5} fill={PAPER} seed={80} sw={1.8} />
          {[
            [320, 120],
            [336, 120],
            [328, 128],
            [320, 136],
            [336, 136],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={2.4} fill="#2b2521" />
          ))}
        </Anim>
      </Place>
      <g className="s-rsd4-split">
        <Arrow from={[150, 152]} to={[118, 196]} bend={0.1} seed={81} w={2} />
      </g>
      <g className="s-rsd4-split" style={{ '--d': '-1.5s' }}>
        <Arrow from={[220, 152]} to={[262, 196]} bend={-0.1} seed={82} w={2} />
      </g>
      <Oval cx={110} cy={252} rx={70} ry={50} fill={TONES.amber.tint} seed={83} sw={2} />
      <Oval cx={290} cy={252} rx={70} ry={50} fill={TONES.green.tint} seed={84} sw={2} />
      {['amber', 'blue', 'green'].map((tone, i) => (
        <Kid key={`a${i}`} x={78 + i * 32} y={276} s={0.9} tone={tone} seed={85 + i} />
      ))}
      {['green', 'amber', 'pink'].map((tone, i) => (
        <Kid key={`b${i}`} x={258 + i * 32} y={276} s={0.9} tone={tone} seed={88 + i} />
      ))}
      <Type x={110} y={234} size={18} anchor="middle" weight={700}>
        A
      </Type>
      <Type x={290} y={234} size={18} anchor="middle" weight={700}>
        B
      </Type>

      <Hand x={600} y={50} size={26} anchor="middle" weight={700}>
        quasi-experiment
      </Hand>
      <Hand x={600} y={76} size={18} anchor="middle" c={INK_SOFT}>
        the groups already exist
      </Hand>
      <Door x={452} y={322} w={100} h={170} tone="blue" seed={90} />
      <Door x={652} y={322} w={100} h={170} tone="pink" seed={91} />
      <Box x={470} y={116} w={64} h={30} r={4} fill={PAPER} seed={92} sw={1.6} />
      <Box x={670} y={116} w={64} h={30} r={4} fill={PAPER} seed={93} sw={1.6} />
      <Type x={502} y={137} size={18} anchor="middle" weight={700}>
        7 A
      </Type>
      <Type x={702} y={137} size={18} anchor="middle" weight={700}>
        7 B
      </Type>
      {[0, 1, 2].map((i) => (
        <g key={`q${i}`} className="s-rsd4-hop" style={{ '--i': i }}>
          <Kid x={460 + i * 40} y={318} s={1.35} tone="blue" rope seed={94 + i} />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <Kid key={`r${i}`} x={662 + i * 40} y={318} s={1.35} tone="pink" seed={97 + i} />
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Time: once, again and again, forward and back.
   ------------------------------------------------------------------ */

const timeCss = `
.s-rsd5-grow { animation: s-rsd5-hop 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-rsd5-hop {
  0%, 40%, 100% { transform: translateY(0); }
  20% { transform: translateY(-8px); }
}
.s-rsd5-fwd { animation: s-rsd5-fwd 3s ease-in-out infinite; }
@keyframes s-rsd5-fwd {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(8px); }
}
.s-rsd5-back { animation: s-rsd5-back 3s ease-in-out infinite; }
@keyframes s-rsd5-back {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-8px); }
}
`

export function TimeScene() {
  return (
    <Scene
      w={800}
      h={340}
      top={14}
      css={timeCss}
      className="s-rsd5"
      label="Top left, a single photo frame of three girls labelled cross-sectional, once. Top right, the same girl drawn three times, growing taller in Class 6, Class 7 and Class 8, labelled longitudinal. Below, along a time line, an arrow runs forward from exposure to outcome for a cohort study and another runs back from outcome to exposure for a case-control study"
    >
      <Hand x={160} y={52} size={24} anchor="middle" weight={700}>
        cross-sectional
      </Hand>
      <Box x={90} y={66} w={140} h={96} r={6} fill={TONES.amber.tint} seed={100} sw={2.2} double />
      {['amber', 'green', 'blue'].map((tone, i) => (
        <Kid key={i} x={124 + i * 36} y={150} s={1} tone={tone} seed={101 + i} />
      ))}
      <Type x={160} y={184} size={16} anchor="middle" c={INK_SOFT}>
        once
      </Type>

      <Hand x={560} y={52} size={24} anchor="middle" weight={700}>
        longitudinal
      </Hand>
      <Ink d={handLine(420, 150, 700, 150, 104, 0.6)} c={INK_SOFT} w={1.4} dash="3 6" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <g className="s-rsd5-grow" style={{ '--i': i }}>
            <Kid x={430 + i * 130} y={150} s={1 + i * 0.25} tone="amber" seed={105 + i} />
          </g>
          <Type x={430 + i * 130} y={184} size={15} anchor="middle" c={INK_SOFT}>
            {`Class ${6 + i}`}
          </Type>
        </g>
      ))}

      <Ink d={handLine(40, 320, 750, 320, 110, 0.8)} w={2.2} />
      <Ink d={handLine(750, 320, 738, 312, 111, 0.3) + handLine(750, 320, 738, 328, 112, 0.3)} w={2.2} />
      <Hand x={744} y={346} size={18} anchor="end" c={INK_SOFT}>
        time
      </Hand>

      <Hand x={220} y={236} size={22} anchor="middle" weight={700} c={TONES.green.deep}>
        cohort: forward
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-rsd5-fwd">
          <Arrow from={[96, 266]} to={[344, 266]} bend={0} seed={113} w={2.6} c={TONES.green.deep} head={14} />
        </Anim>
      </Place>
      <Type x={96} y={296} size={15} anchor="start">
        exposure
      </Type>
      <Type x={344} y={296} size={15} anchor="end">
        outcome
      </Type>

      <Hand x={580} y={236} size={22} anchor="middle" weight={700} c={TONES.red.deep}>
        case-control: back
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-rsd5-back">
          <Arrow from={[704, 266]} to={[456, 266]} bend={0} seed={114} w={2.6} c={TONES.red.deep} head={14} />
        </Anim>
      </Place>
      <Type x={704} y={296} size={15} anchor="end">
        outcome
      </Type>
      <Type x={456} y={296} size={15} anchor="start">
        exposure
      </Type>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Qualitative designs.
   ------------------------------------------------------------------ */

const qualCss = `
.s-rsd6-lens { animation: s-rsd6-scan 5s ease-in-out infinite; }
@keyframes s-rsd6-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(18px, 12px); }
}
.s-rsd6-pip .pip-arm-r { animation: s-rsd6-write 1.4s ease-in-out infinite; }
@keyframes s-rsd6-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-9deg); }
}
.s-rsd6-note { animation: s-rsd6-rise 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-rsd6-rise {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.s-rsd6-say { animation: s-rsd6-say 3s ease-in-out infinite; }
@keyframes s-rsd6-say {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
`

export function QualitativeScene() {
  const labels = [
    { x: 100, title: 'case study', sub: 'one case, up close' },
    { x: 300, title: 'ethnography', sub: 'living among them' },
    { x: 500, title: 'grounded theory', sub: 'theory from the data' },
    { x: 700, title: 'phenomenology', sub: 'in their own words' },
  ]
  return (
    <Scene
      w={800}
      h={320}
      top={30}
      css={qualCss}
      className="s-rsd6"
      label="Four small pictures in a row: a magnifying glass over one school with a flag, labelled case study; a paper character writing notes between two girls, labelled ethnography; three sticky notes with arrows up to a box marked theory, labelled grounded theory; and a girl with a speech bubble saying how it felt, labelled phenomenology"
    >
      <Floor y={316} x1={20} x2={780} seed={120} />
      {labels.map((l) => (
        <g key={l.title}>
          <Hand x={l.x} y={66} size={24} anchor="middle" weight={700}>
            {l.title}
          </Hand>
          <Hand x={l.x} y={92} size={17} anchor="middle" c={INK_SOFT}>
            {l.sub}
          </Hand>
        </g>
      ))}
      {[200, 400, 600].map((x, i) => (
        <Ink key={x} d={handLine(x, 60, x, 300, 121 + i, 1)} c={INK_SOFT} w={1.2} dash="4 8" o={0.6} />
      ))}

      <Poly points={[[40, 214], [100, 168], [160, 214]]} fill="url(#fill-red)" seed={125} />
      <Box x={48} y={214} w={104} h={102} fill={TONES.amber.tint} seed={126} sw={1.8} />
      <Box x={88} y={266} w={24} h={50} fill="url(#fill-brown)" seed={127} sw={1.5} />
      <Box x={60} y={232} w={20} h={18} fill={PAPER} seed={128} sw={1.3} />
      <Box x={120} y={232} w={20} h={18} fill={PAPER} seed={129} sw={1.3} />
      <Flag x={100} y={170} h={44} tone="green" seed={130} />
      <Place x={0} y={0}>
        <Anim className="s-rsd6-lens">
          <Magnifier x={132} y={196} r={26} angle={50} tone="amber" seed={131} />
        </Anim>
      </Place>

      <Kid x={236} y={314} s={1.2} tone="blue" seed={135} />
      <Kid x={366} y={314} s={1.2} tone="pink" seed={136} />
      <Shadow x={300} y={318} rx={26} ry={4} />
      <Place x={300} y={316} s={1.4}>
        <g className="s-rsd6-pip">
          <Pip mood="focused" arms="write" tone="green" look={1} seed={137}>
            <Sheet x={10} y={-34} w={22} h={26} lines={2} fold={6} seed={138} sw={1.3} />
          </Pip>
        </g>
      </Place>

      <Box x={450} y={126} w={100} h={42} r={6} fill={TONES.blue.tint} seed={140} sw={1.8} />
      <Hand x={500} y={155} size={22} anchor="middle" weight={700}>
        theory
      </Hand>
      {[
        [420, 236],
        [478, 252],
        [536, 232],
      ].map(([x, y], i) => (
        <g key={i}>
          <Arrow from={[x + 20, y - 8]} to={[480 + i * 20, 176]} bend={0} seed={141 + i} w={1.6} c={INK_SOFT} head={9} />
          <g className="s-rsd6-note" style={{ '--i': i }}>
            <Sticky x={x} y={y} w={44} h={42} tone={['amber', 'pink', 'green'][i]} lines={2} seed={144 + i} />
          </g>
        </g>
      ))}

      <Kid x={690} y={314} s={2.2} tone="amber" seed={150} />
      <Place x={0} y={0}>
        <Anim className="s-rsd6-say" origin={[700, 180]}>
          <Speech x={622} y={140} w={156} h={64} tx={688} ty={254} seed={151}>
            <Hand x={700} y={180} size={21} anchor="middle">
              how it felt
            </Hand>
          </Speech>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Choosing, and writing it down.
   ------------------------------------------------------------------ */

const chooseCss = `
.s-rsd7 .check-tick { animation: s-rsd7-tick 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-rsd7-tick {
  0%, 100% { stroke-dashoffset: 0; }
  6% { stroke-dashoffset: 1; }
  16%, 90% { stroke-dashoffset: 0; }
}
.s-rsd7-pip .pip-arm-r { animation: s-rsd7-write 1.2s ease-in-out infinite; }
@keyframes s-rsd7-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
.s-rsd7-word { animation: s-rsd7-word 6s ease-in-out infinite; }
@keyframes s-rsd7-word {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.4; }
}
`

export function ChooseScene() {
  return (
    <Scene
      w={800}
      h={330}
      top={0}
      css={chooseCss}
      className="s-rsd7"
      label="A clipboard with five ticked boxes, a paper character writing notes beside a desk with a cup of chai, and a sheet pinned to the wall titled Chapter 3 that reads design: quasi-experimental, with a pre-test and a post-test"
    >
      <Floor y={316} x1={24} x2={776} seed={159} />
      <Checklist x={44} y={92} w={136} items={5} done={5} seed={160} />

      <Box x={400} y={22} w={260} h={176} r={4} fill={PAPER} seed={161} sw={2} />
      <PushPin x={530} y={34} tone="blue" seed={162} />
      <Hand x={530} y={70} size={26} anchor="middle" weight={700}>
        Chapter 3
      </Hand>
      <Hand x={420} y={104} size={20}>
        design:
      </Hand>
      <g className="s-rsd7-word">
        <Hand x={420} y={132} size={22} weight={700} c={TONES.green.deep}>
          quasi-experimental
        </Hand>
      </g>
      <Hand x={420} y={160} size={18} c={INK_SOFT}>
        pre-test and post-test
      </Hand>
      <Ink d={handLine(420, 180, 620, 180, 163, 0.4)} c={TEXT_LINE} w={1.8} />

      <Desk y={240} x1={560} x2={780} seed={170} />
      <Ink d={handLine(578, 262, 578, 316, 171, 0.3) + handLine(762, 262, 762, 316, 172, 0.3)} w={2} />
      <Sheet x={600} y={218} w={64} h={20} lines={0} fold={6} seed={173} sw={1.4} />
      <Chai x={730} y={240} s={1} seed={174} />
      <Plant x={290} y={316} s={0.85} seed={175} />

      <Shadow x={470} y={318} rx={30} ry={4.5} />
      <Place x={470} y={316} s={1.6}>
        <g className="s-rsd7-pip">
          <Pip mood="happy" arms="write" tone="amber" glasses look={1.2} seed={176}>
            <Sheet x={14} y={-36} w={22} h={28} lines={2} fold={6} seed={177} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
