import {
  Anim,
  Arrow,
  Box,
  Cross,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  Oval,
  PAPER,
  Pip,
  Place,
  Poly,
  Scene,
  Shadow,
  Sheet,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  handLine,
} from '../../ink/index.js'

/* A pooled-result diamond centred on (x, y). */
function Diamond({ x, y, w = 48, h = 22, tone = 'amber', seed = 1 }) {
  return (
    <Poly
      points={[
        [x - w / 2, y],
        [x, y - h / 2],
        [x + w / 2, y],
        [x, y + h / 2],
      ]}
      fill={TONES[tone].mid}
      seed={seed}
      amp={0.4}
    />
  )
}

/* One study on a forest plot: its line, then its square. */
function Study({ x, y, half, s, seed, tone = 'blue' }) {
  return (
    <g>
      <Ink d={handLine(x - half, y, x + half, y, seed, 0.3)} w={1.8} />
      <rect x={x - s / 2} y={y - s / 2} width={s} height={s} fill={TONES[tone].ink} stroke={INK} strokeWidth={1.2} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Small, uncertain results flow into one combined estimate.
   ------------------------------------------------------------------ */

const whatCss = `
.s-meta1-sheet { animation: s-meta1-bob 3s ease-in-out infinite; animation-delay: calc(var(--i) * -0.6s); }
.s-meta1-dia { animation: s-meta1-glow 6s ease-in-out infinite; }
.s-meta1-shreya .pip-arm-r { animation: s-meta1-point 3s ease-in-out infinite; }
@keyframes s-meta1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes s-meta1-glow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
@keyframes s-meta1-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

export function WhatScene() {
  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={whatCss}
      className="s-meta1"
      label="Four small study sheets, each with a wide uncertain line, send arrows into one sheet labelled analysis of analyses, which gives a single narrow diamond labelled one estimate, while a paper character points at it"
    >
      <Floor y={372} x1={30} x2={770} seed={101} />

      {[0, 1, 2, 3].map((i) => {
        const y = 40 + i * 78
        const half = [34, 22, 40, 28][i]
        const cx = [92, 108, 84, 100][i]
        return (
          <Place key={i} x={0} y={0}>
            <Anim className="s-meta1-sheet" style={{ '--i': i }}>
              <Sheet x={40} y={y} w={120} h={60} lines={0} fold={12} seed={110 + i} sw={1.5} />
              <Study x={cx} y={y + 32} half={half} s={7} seed={120 + i} />
              <Arrow from={[168, y + 30]} to={[300, 190]} bend={0.04 * (i - 1.5)} seed={130 + i} c={INK_SOFT} w={1.5} />
            </Anim>
          </Place>
        )
      })}

      <Sheet x={310} y={110} w={170} h={170} lines={0} fold={20} seed={140} sw={2} tone="blue" />
      <Hand x={393} y={180} size={22} anchor="middle" weight={700}>
        analysis
      </Hand>
      <Hand x={393} y={208} size={20} anchor="middle">
        of analyses
      </Hand>
      <Arrow from={[488, 196]} to={[548, 196]} seed={141} w={1.8} />

      <Anim className="s-meta1-dia" spin>
        <Diamond x={600} y={196} w={64} h={28} seed={142} />
      </Anim>
      <Hand x={600} y={250} size={22} anchor="middle" weight={700}>
        one estimate
      </Hand>

      <Shadow x={718} y={374} rx={30} ry={4} />
      <Place x={718} y={372} s={1.45} flip>
        <g className="s-meta1-shreya">
          <Pip mood="happy" arms="point" tone="pink" glasses look={1.4} seed={150} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The systematic review is the house; the meta analysis one room.
   ------------------------------------------------------------------ */

const versusCss = `
.s-meta2-note { animation: s-meta2-lift 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 6s); }
.s-meta2-room { animation: s-meta2-room 6s ease-in-out infinite; }
@keyframes s-meta2-lift {
  0%, 30%, 100% { transform: translateY(0); }
  12% { transform: translateY(-7px); }
}
@keyframes s-meta2-room {
  0%, 55%, 100% { transform: scale(1); }
  70%, 82% { transform: scale(1.04); }
}
`

export function VersusScene() {
  return (
    <Scene
      w={800}
      h={360}
      top={20}
      css={versusCss}
      className="s-meta2"
      label="A large box labelled systematic review holds sticky notes for question, search, screen and judge bias, and inside it a smaller blue box labelled meta analysis holds a diamond, while a paper character looks on with a magnifying glass"
    >
      <Floor y={372} x1={30} x2={770} seed={201} />

      <Box x={70} y={40} w={540} h={310} r={10} fill={TONES.green.tint} stroke={TONES.green.deep} seed={202} sw={2} />
      <Hand x={340} y={78} size={26} anchor="middle" weight={700}>
        systematic review
      </Hand>

      {['question', 'search', 'screen', 'judge bias'].map((word, i) => {
        const x = 96 + i * 128
        return (
          <Place key={word} x={0} y={0}>
            <Anim className="s-meta2-note" origin={[x + 54, 130]} style={{ '--i': i }}>
              <Sticky x={x} y={100} w={108} h={62} tone="amber" lines={0} seed={210 + i} />
              <Hand x={x + 54} y={138} size={19} anchor="middle" weight={700}>
                {word}
              </Hand>
            </Anim>
          </Place>
        )
      })}

      <Anim className="s-meta2-room" origin={[340, 270]}>
        <Box x={210} y={196} w={260} h={132} r={8} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={220} sw={1.8} />
        <Hand x={340} y={230} size={22} anchor="middle" weight={700}>
          meta analysis
        </Hand>
        <Study x={300} y={262} half={26} s={9} seed={221} />
        <Study x={330} y={282} half={18} s={12} seed={222} />
        <Diamond x={320} y={308} w={46} h={18} seed={223} />
        <Hand x={410} y={300} size={16} c={INK_SOFT} anchor="middle">
          optional
        </Hand>
      </Anim>

      <Shadow x={700} y={374} rx={30} ry={4} />
      <Place x={700} y={372} s={1.5} flip>
        <Pip mood="focused" arms="hold" tone="pink" glasses look={1.5} seed={230}>
          <Magnifier x={-6} y={-30} r={9} angle={60} tone="amber" seed={231} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Apples with apples: similar studies pool, mixed ones do not.
   ------------------------------------------------------------------ */

const poolCss = `
.s-meta3-fruit { animation: s-meta3-jig 4s ease-in-out infinite; animation-delay: calc(var(--i) * -0.5s); }
.s-meta3-mark { animation: s-meta3-mark 6s ease-in-out infinite; }
@keyframes s-meta3-jig {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes s-meta3-mark {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
`

/* A bowl, rim at y, centred on x. */
function Bowl({ x, y, w = 220, seed }) {
  const d = `M${x - w / 2} ${y}Q${x} ${y + w * 0.5} ${x + w / 2} ${y}Z`
  return (
    <g>
      <path d={d} fill={TONES.brown.tint} />
      <path d={d} fill="url(#ink-hatch-light)" />
      <Ink d={`M${x - w / 2} ${y}Q${x} ${y + w * 0.5} ${x + w / 2} ${y}`} w={2} />
      <Ink d={handLine(x - w / 2 - 6, y, x + w / 2 + 6, y, seed, 0.6)} w={2} />
    </g>
  )
}

function Apple({ x, y, seed }) {
  return (
    <g>
      <Oval cx={x} cy={y} rx={17} ry={15} fill={TONES.green.mid} seed={seed} />
      <Ink d={`M${x} ${y - 14}q2 -8 6 -10`} w={1.6} c={TONES.brown.deep} />
    </g>
  )
}

export function PoolScene() {
  const same = [
    [150, 196],
    [188, 192],
    [226, 198],
    [170, 168],
    [208, 166],
  ]
  return (
    <Scene
      w={800}
      h={340}
      top={40}
      css={poolCss}
      className="s-meta3"
      label="On the left a bowl of matching green apples is ticked and labelled pool the numbers; on the right a bowl of mixed fruit of different shapes and colours is crossed and labelled describe in words"
    >
      <Floor y={372} x1={30} x2={770} seed={301} />

      {same.map(([x, y], i) => (
        <Place key={i} x={0} y={0}>
          <Anim className="s-meta3-fruit" style={{ '--i': i }}>
            <Apple x={x} y={y} seed={310 + i} />
          </Anim>
        </Place>
      ))}
      <Bowl x={188} y={212} seed={320} />
      <g className="s-meta3-mark">
        <Tick x={188} y={96} s={2.2} />
      </g>
      <Hand x={188} y={350} size={24} anchor="middle" weight={700}>
        pool the numbers
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-meta3-fruit" style={{ '--i': 1 }}>
          <Apple x={540} y={194} seed={330} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-meta3-fruit" style={{ '--i': 2 }}>
          <Oval cx={580} cy={190} rx={18} fill={TONES.amber.mid} seed={331} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-meta3-fruit" style={{ '--i': 3 }}>
          <Poly points={[[600, 200], [636, 200], [618, 168]]} fill={TONES.red.mid} seed={332} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-meta3-fruit" style={{ '--i': 4 }}>
          <Oval cx={566} cy={164} rx={26} ry={10} fill={TONES.amber.tint} seed={333} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-meta3-fruit" style={{ '--i': 0 }}>
          <Box x={516} y={160} w={22} h={22} fill={TONES.pink.mid} seed={334} />
        </Anim>
      </Place>
      <Bowl x={576} y={212} seed={340} />
      <g className="s-meta3-mark">
        <Cross x={576} y={100} s={1.8} />
      </g>
      <Hand x={576} y={350} size={24} anchor="middle" weight={700}>
        describe in words
      </Hand>

      <Ink d={handLine(382, 80, 382, 360, 350, 1)} c={INK_SOFT} w={1.4} dash="6 8" />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Six steps, climbed one at a time.
   ------------------------------------------------------------------ */

const STEPS = ['question', 'search', 'extract', 'effect size', 'pool', 'check']

const stepsCss = `
.s-meta4-climber { animation: s-meta4-climb 9s ease-in-out infinite; }
.s-meta4-climber .pip-body { animation: s-meta4-hop 1.5s ease-in-out infinite; }
@keyframes s-meta4-climb {
  0%, 6% { transform: translate(0, 0); }
  16%, 22% { transform: translate(100px, -36px); }
  32%, 38% { transform: translate(200px, -72px); }
  48%, 54% { transform: translate(300px, -108px); }
  64%, 70% { transform: translate(400px, -144px); }
  80%, 88% { transform: translate(500px, -180px); }
  100% { transform: translate(0, 0); }
}
@keyframes s-meta4-hop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

export function StepsScene() {
  const base = 372
  return (
    <Scene
      w={800}
      h={300}
      top={84}
      css={stepsCss}
      className="s-meta4"
      label="A staircase of six steps labelled question, search, extract, effect size, pool and check, with a paper character climbing from the bottom step to the top"
    >
      <Floor y={base} x1={30} x2={770} seed={401} />
      {STEPS.map((word, i) => {
        const x = 70 + i * 100
        const top = base - 36 * (i + 1)
        const tone = ['amber', 'green', 'blue', 'pink', 'amber', 'green'][i]
        return (
          <g key={word}>
            <Box x={x} y={top} w={100} h={36 * (i + 1)} fill={TONES[tone].tint} seed={410 + i} sw={1.6} />
            <Hand x={x + 50} y={top + 25} size={17} anchor="middle" weight={700}>
              {word}
            </Hand>
          </g>
        )
      })}
      <Place x={120} y={base - 36}>
        <Anim className="s-meta4-climber">
          <Place s={1}>
            <Pip mood="focused" arms="carry" tone="pink" glasses look={1.5} seed={430}>
              <Sheet x={-14} y={-90} w={28} h={18} lines={1} fold={5} seed={431} sw={1.1} />
            </Pip>
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. A forest plot, labelled part by part.
   ------------------------------------------------------------------ */

const FOREST = [
  { name: 'Trial A', x: 330, half: 80, s: 15 },
  { name: 'Trial B', x: 390, half: 40, s: 28 },
  { name: 'Trial C', x: 470, half: 120, s: 10 },
]

const forestCss = `
.s-meta5-row { animation: s-meta5-nudge 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 8s); }
.s-meta5-dia { animation: s-meta5-dia 8s ease-in-out infinite; }
@keyframes s-meta5-nudge {
  0%, 20%, 100% { transform: translateX(0); }
  10% { transform: translateX(6px); }
}
@keyframes s-meta5-dia {
  0%, 55%, 100% { transform: scale(1); }
  65%, 80% { transform: scale(1.25); }
}
`

export function ForestScene() {
  const zero = 450
  const rowY = (i) => 90 + i * 64
  const dy = 300
  return (
    <Scene
      w={800}
      h={380}
      top={20}
      css={forestCss}
      className="s-meta5"
      label="A forest plot of three trials: Trial A with a medium square and a wide line, Trial B with the biggest square and a short line, Trial C with a small square and a very wide line crossing the dashed line of no effect, and a diamond at the bottom labelled pooled that sits to the left, on the side that favours walking"
    >
      <Box x={60} y={36} w={680} h={350} r={6} fill={PAPER} seed={501} sw={1.8} />
      <Ink d={handLine(zero, 56, zero, 340, 502, 0.3)} c={INK_SOFT} w={1.6} dash="6 6" />
      <Hand x={zero} y={366} size={17} anchor="middle" c={INK_SOFT}>
        no effect
      </Hand>
      <Hand x={zero - 20} y={330} size={17} anchor="end" c={TONES.green.deep} weight={700}>
        favours walking
      </Hand>
      <Hand x={zero + 20} y={330} size={17} c={TONES.red.deep} weight={700}>
        favours usual care
      </Hand>

      {FOREST.map((row, i) => (
        <g key={row.name} className="s-meta5-row" style={{ '--i': i }}>
          <Type80 x={86} y={rowY(i) + 6}>
            {row.name}
          </Type80>
          <Study x={row.x} y={rowY(i)} half={row.half} s={row.s} seed={510 + i} />
        </g>
      ))}
      <Ink d={handLine(86, dy - 24, 714, dy - 24, 520, 0.4)} c={TEXT_LINE} w={1.4} />
      <Hand x={86} y={dy + 8} size={22} weight={700}>
        pooled
      </Hand>
      <Anim className="s-meta5-dia" spin>
        <Diamond x={385} y={dy} w={68} h={20} seed={521} />
      </Anim>

      <Hand x={690} y={rowY(1) - 20} size={17} anchor="end" c={INK_SOFT}>
        big square, big weight
      </Hand>
      <Arrow from={[600, rowY(1) - 14]} to={[412, rowY(1) - 6]} bend={0.08} seed={530} c={INK_SOFT} w={1.4} />
      <Hand x={690} y={rowY(2) + 30} size={17} anchor="end" c={INK_SOFT}>
        wide line, unsure
      </Hand>
    </Scene>
  )
}

/* Study names in a drawing, in the typewriter face. */
function Type80({ x, y, children }) {
  return (
    <text x={x} y={y} fontSize={18} fill={INK} className="ink-type">
      {children}
    </text>
  )
}

/* ------------------------------------------------------------------
   6. Agreeing studies line up; disagreeing ones scatter.
   ------------------------------------------------------------------ */

const LOW = [
  [196, 18, 10],
  [204, 24, 9],
  [190, 16, 12],
  [200, 20, 10],
  [208, 22, 9],
]
const HIGH = [
  [540, 18, 10],
  [636, 24, 9],
  [584, 16, 12],
  [690, 20, 10],
  [608, 22, 9],
]

const hetCss = `
.s-meta6-spread { animation: s-meta6-drift 5s ease-in-out infinite; animation-delay: calc(var(--i) * -1s); }
.s-meta6-shreya .pip-arm-r { animation: s-meta6-scratch 2.4s ease-in-out infinite; }
@keyframes s-meta6-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(var(--dx)); }
}
@keyframes s-meta6-scratch {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
`

export function HeterogeneityScene() {
  const rowY = (i) => 80 + i * 40
  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={hetCss}
      className="s-meta6"
      label="Two small forest plots side by side: on the left five squares line up close together, labelled I squared low, the studies agree; on the right five squares scatter far apart, labelled I squared high, ask why"
    >
      <Floor y={372} x1={30} x2={770} seed={601} />

      <Box x={90} y={50} w={230} h={230} r={6} fill={TONES.green.tint} seed={602} sw={1.6} />
      <Ink d={handLine(240, 62, 240, 268, 603, 0.3)} c={INK_SOFT} w={1.4} dash="5 6" />
      {LOW.map(([x, half, s], i) => (
        <Study key={i} x={x} y={rowY(i)} half={half} s={s} seed={610 + i} />
      ))}
      <Hand x={205} y={316} size={24} anchor="middle" weight={700}>
        I² low
      </Hand>
      <Hand x={205} y={346} size={18} anchor="middle" c={INK_SOFT}>
        the studies agree
      </Hand>

      <Box x={480} y={50} w={260} h={230} r={6} fill={TONES.pink.tint} seed={620} sw={1.6} />
      <Ink d={handLine(680, 62, 680, 268, 621, 0.3)} c={INK_SOFT} w={1.4} dash="5 6" />
      {HIGH.map(([x, half, s], i) => (
        <Place key={i} x={0} y={0}>
          <Anim className="s-meta6-spread" style={{ '--i': i, '--dx': `${(i % 2 ? -1 : 1) * 8}px` }}>
            <Study x={x} y={rowY(i)} half={half} s={s} seed={630 + i} tone="pink" />
          </Anim>
        </Place>
      ))}
      <Hand x={610} y={316} size={24} anchor="middle" weight={700}>
        I² high
      </Hand>
      <Hand x={610} y={346} size={18} anchor="middle" c={INK_SOFT}>
        ask why
      </Hand>

      <Shadow x={400} y={374} rx={28} ry={4} />
      <Place x={400} y={372} s={1.4}>
        <g className="s-meta6-shreya">
          <Pip mood="worried" arms="think" tone="pink" glasses look={1.6} seed={640} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. A funnel plot with small studies missing from one corner.
   ------------------------------------------------------------------ */

const DOTS = [
  [400, 96],
  [392, 118],
  [410, 124],
  [380, 150],
  [418, 156],
  [400, 170],
  [366, 192],
  [432, 186],
  [350, 222],
  [388, 214],
  [446, 230],
  [340, 252],
  [372, 262],
  [306, 276],
  [424, 268],
]

const biasCss = `
.s-meta7-ring { animation: s-meta7-ring 4s ease-in-out infinite; }
.s-meta7-lens { animation: s-meta7-scan 6s ease-in-out infinite; }
@keyframes s-meta7-ring {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
@keyframes s-meta7-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-60px, 30px); }
}
`

export function BiasScene() {
  return (
    <Scene
      w={800}
      h={370}
      top={20}
      css={biasCss}
      className="s-meta7"
      label="A funnel plot drawn as an upside down funnel of dots, with big studies close together at the top and small studies spread at the bottom, and a dashed circle around an empty bottom right corner labelled missing studies, as a magnifying glass searches the plot"
    >
      <Floor y={372} x1={30} x2={770} seed={701} />

      <Ink d={handLine(220, 300, 600, 300, 702, 0.4) + handLine(220, 300, 220, 60, 703, 0.4)} w={1.8} />
      <Hand x={410} y={330} size={18} anchor="middle" c={INK_SOFT}>
        study result
      </Hand>
      <Hand x={196} y={180} size={18} anchor="middle" c={INK_SOFT} rotate={-90}>
        study size
      </Hand>
      <Ink d={handLine(400, 70, 270, 296, 704, 0.4) + handLine(400, 70, 530, 296, 705, 0.4)} c={INK_SOFT} w={1.3} dash="5 6" />
      <Ink d={handLine(400, 70, 400, 296, 706, 0.3)} c={INK_SOFT} w={1.1} o={0.6} />

      {DOTS.map(([x, y], i) => (
        <Oval key={i} cx={x} cy={y} rx={5} fill={TONES.blue.ink} seed={710 + i} sw={1.2} />
      ))}

      <g className="s-meta7-ring">
        <Oval cx={488} cy={272} rx={38} ry={24} stroke={TONES.red.ink} seed={730} sw={2} />
      </g>
      <Hand x={560} y={240} size={20} c={TONES.red.deep} weight={700}>
        missing studies?
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-meta7-lens">
          <Magnifier x={640} y={140} r={28} angle={45} tone="amber" seed={740} />
        </Anim>
      </Place>

      <Shadow x={110} y={374} rx={30} ry={4} />
      <Place x={110} y={372} s={1.45}>
        <Pip mood="focused" arms="point" tone="pink" glasses look={1.6} seed={750} />
      </Place>
    </Scene>
  )
}
