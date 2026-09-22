import {
  Anim,
  Arrow,
  Box,
  Bulb,
  Chai,
  Chart,
  Clock,
  Desk,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  Motion,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  Plant,
  Scale,
  Scene,
  Sheet,
  Sparkle,
  Sticky,
  TEXT_LINE,
  TONES,
  Type,
  Worm,
  handLine,
  handPoly,
  wave,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. A paper is not a novel: it is a cabinet of labelled drawers.
   ------------------------------------------------------------------ */

const DRAWERS = ['abstract', 'introduction', 'methods', 'results', 'discussion', 'references']
const DRAWER_Y = (i) => 52 + i * 46

const cabinetCss = `
.s-rp1-glow-0 { animation: s-rp1-glow-0 10s ease-in-out infinite; }
.s-rp1-glow-3 { animation: s-rp1-glow-3 10s ease-in-out infinite; }
.s-rp1-fly-0 { animation: s-rp1-fly-0 10s ease-in-out infinite; }
.s-rp1-fly-3 { animation: s-rp1-fly-3 10s ease-in-out infinite; }
@keyframes s-rp1-glow-0 { 0%, 4%, 44%, 100% { opacity: 0; } 8%, 38% { opacity: 1; } }
@keyframes s-rp1-glow-3 { 0%, 50%, 92%, 100% { opacity: 0; } 54%, 86% { opacity: 1; } }
@keyframes s-rp1-fly-0 {
  0%, 8% { transform: translate(0, 0); opacity: 0; }
  11% { transform: translate(0, 0); opacity: 1; }
  24%, 32% { transform: translate(-128px, 174px); opacity: 1; }
  42% { transform: translate(0, 0); opacity: 1; }
  45%, 100% { transform: translate(0, 0); opacity: 0; }
}
@keyframes s-rp1-fly-3 {
  0%, 54% { transform: translate(0, 0); opacity: 0; }
  57% { transform: translate(0, 0); opacity: 1; }
  70%, 78% { transform: translate(-128px, 36px); opacity: 1; }
  88% { transform: translate(0, 0); opacity: 1; }
  91%, 100% { transform: translate(0, 0); opacity: 0; }
}
`

export function CabinetScene() {
  return (
    <Scene
      w={800}
      h={326}
      top={14}
      css={cabinetCss}
      className="s-rp1"
      label="A research paper drawn as a cabinet of labelled drawers, from abstract to references, and a paper character taking out only the drawer it needs"
    >
      <Floor y={330} x1={30} x2={770} seed={3} />
      <rect x={282} y={30} width={236} height={300} fill="url(#wood)" />
      <Ink d={handPoly([[282, 30], [518, 30], [518, 330], [282, 330]], { seed: 4, amp: 0.6, closed: true })} w={2} />
      <Ink d={handLine(274, 30, 526, 30, 5, 0.4)} w={2.6} />

      {DRAWERS.map((label, i) => {
        const y = DRAWER_Y(i)
        return (
          <g key={label}>
            <Box x={298} y={y} w={204} h={38} r={3} fill={PAPER} seed={10 + i} sw={1.5} />
            {i === 0 || i === 3 ? (
              <rect className={`s-rp1-glow-${i}`} x={298} y={y} width={204} height={38} rx={3} fill="url(#fill-amber)" style={{ opacity: 0 }} />
            ) : null}
            <Hand x={390} y={y + 26} size={20} anchor="middle" weight={700}>
              {label}
            </Hand>
            <circle cx={482} cy={y + 19} r={4.2} fill={TONES.brown.mid} stroke={INK} strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
          </g>
        )
      })}

      {[0, 3].map((i) => (
        <Place key={i} x={390} y={DRAWER_Y(i) + 10}>
          <Anim className={`s-rp1-fly-${i}`} style={{ opacity: 0 }}>
            <Sheet x={-18} y={-22} w={36} h={44} lines={3} fold={8} tone={i === 0 ? 'blue' : 'green'} seed={20 + i} sw={1.4} />
          </Anim>
        </Place>
      ))}

      <Place x={170} y={330} s={2}>
        <Pip mood="happy" arms="point" look={1.5} seed={30} />
      </Place>
      <Plant x={640} y={330} s={1.25} seed={31} />
      <Clock x={690} y={104} r={34} seed={32} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Three passes, three panels.
   ------------------------------------------------------------------ */

const PANELS = [
  { x: 30, n: '1', time: '10 min', tone: 'amber' },
  { x: 282, n: '2', time: '1 hour', tone: 'blue' },
  { x: 534, n: '3', time: 'hours', tone: 'green' },
]

const passCss = `
.s-rp2-frame-0 { animation: s-rp2-frame-0 9s ease-in-out infinite; }
.s-rp2-frame-1 { animation: s-rp2-frame-1 9s ease-in-out infinite; }
.s-rp2-frame-2 { animation: s-rp2-frame-2 9s ease-in-out infinite; }
.s-rp2-glance { animation: s-rp2-glance 1.8s ease-in-out infinite; }
.s-rp2-look .pip-arm-r,
.s-rp2-look-tool { animation: s-rp2-look 4s ease-in-out infinite; }
.s-rp2-write .pip-arm-r { animation: s-rp2-write 0.6s ease-in-out infinite alternate; }
@keyframes s-rp2-frame-0 { 0%, 100% { opacity: 1; } 30%, 96% { opacity: 0; } }
@keyframes s-rp2-frame-1 { 0%, 30%, 66%, 100% { opacity: 0; } 34%, 62% { opacity: 1; } }
@keyframes s-rp2-frame-2 { 0%, 64%, 100% { opacity: 0; } 68%, 94% { opacity: 1; } }
@keyframes s-rp2-glance { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-6deg); } }
@keyframes s-rp2-look { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(12deg); } }
@keyframes s-rp2-write { from { transform: rotate(-4deg); } to { transform: rotate(5deg); } }
`

export function PassesScene() {
  return (
    <Scene
      w={800}
      h={296}
      top={14}
      css={passCss}
      className="s-rp2"
      label="Three panels show the three passes: a quick ten minute glance at a paper, an hour with a magnifying glass, and hours of careful work with notes and a lit bulb"
    >
      {PANELS.map((panel, i) => (
        <g key={panel.n}>
          <Box x={panel.x} y={24} w={236} h={272} r={6} fill="#fffdf7" seed={40 + i} sw={1.6} />
          <rect
            className={`s-rp2-frame-${i}`}
            x={panel.x + 3}
            y={27}
            width={230}
            height={266}
            rx={5}
            fill="none"
            stroke={TONES[panel.tone].ink}
            strokeWidth={3.5}
            style={{ opacity: i === 0 ? 1 : 0 }}
          />
          <Hand x={panel.x + 18} y={64} size={34} weight={700} c={TONES[panel.tone].deep}>
            {panel.n}
          </Hand>
          <Hand x={panel.x + 48} y={62} size={20} c={INK_SOFT}>
            {panel.time}
          </Hand>
        </g>
      ))}

      <Place x={132} y={280} s={1.55}>
        <Pip mood="surprised" arms="hold" look={0.5} seed={50}>
          <Anim className="s-rp2-glance" origin={[0, -8]}>
            <Sheet x={-14} y={-40} w={28} h={34} lines={3} fold={7} seed={51} sw={1.3} />
          </Anim>
        </Pip>
      </Place>
      <Motion x={200} y={150} angle={200} count={3} length={16} gap={8} seed={52} c={INK_SOFT} />

      <Sheet x={446} y={178} w={46} h={58} lines={4} fold={10} tone="blue" seed={53} />
      <Place x={356} y={280} s={1.55}>
        <g className="s-rp2-look">
          <Pip mood="focused" arms="point" glasses look={1.5} seed={54}>
            <Anim className="s-rp2-look-tool" origin={[22, -41]}>
              <Magnifier x={58} y={-58} r={11} angle={135} seed={55} />
            </Anim>
          </Pip>
        </g>
      </Place>

      <Ink d={handLine(682, 150, 668, 280, 56, 0.3) + handLine(730, 150, 744, 280, 57, 0.3) + handLine(672, 240, 740, 240, 61, 0.3)} w={2.2} c={TONES.brown.deep} />
      <Sheet x={664} y={138} w={80} h={96} lines={5} fold={14} seed={62} />
      <Place x={610} y={96}>
        <Bulb x={0} y={0} s={0.7} seed={58} />
      </Place>
      <Place x={612} y={280} s={1.55}>
        <g className="s-rp2-write">
          <Pip mood="focused" arms="write" glasses seed={59}>
            <Pencil x={26} y={-17} length={36} angle={-58} tone="amber" seed={60} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. A smarter reading order, numbered on the paper itself.
   ------------------------------------------------------------------ */

const BLOCKS = [
  { key: 'title', x: 180, y: 52, w: 360, h: 28, tone: 'amber', order: 1 },
  { key: 'abstract', x: 180, y: 88, w: 440, h: 34, tone: 'blue', order: 2 },
  { key: 'intro', x: 180, y: 132, w: 210, h: 44, tone: 'paper', order: 5 },
  { key: 'methods', x: 180, y: 184, w: 210, h: 44, tone: 'paper', order: 6 },
  { key: 'figures', x: 406, y: 132, w: 214, h: 96, tone: 'green', order: 4 },
  { key: 'conclusion', x: 180, y: 238, w: 440, h: 48, tone: 'pink', order: 3 },
]
const STOPS = [...BLOCKS].sort((a, b) => a.order - b.order).map((b) => [b.x, b.y])

const orderCss = `
.s-rp3-lens { animation: s-rp3-hop 12s ease-in-out infinite; }
@keyframes s-rp3-hop {
${STOPS.map(([x, y], i) => {
  const at = i * 16
  const dx = x - STOPS[0][0]
  const dy = y - STOPS[0][1]
  return `  ${at}%, ${at + 9}% { transform: translate(${dx}px, ${dy}px); }`
}).join('\n')}
  100% { transform: translate(0, 0); }
}
`

export function OrderScene() {
  const route = STOPS.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join('')
  return (
    <Scene
      w={800}
      h={324}
      top={4}
      css={orderCss}
      className="s-rp3"
      label="A research paper drawn as blocks, numbered in the order to read them: title, abstract, conclusion, figures, introduction, then methods, with a magnifying glass hopping from one to the next"
    >
      <Sheet x={150} y={26} w={500} h={292} lines={0} fold={26} seed={70} />
      {BLOCKS.map((block, i) => (
        <g key={block.key}>
          <Box
            x={block.x}
            y={block.y}
            w={block.w}
            h={block.h}
            r={3}
            fill={block.tone === 'paper' ? '#fbf6ec' : `url(#fill-${block.tone})`}
            seed={71 + i}
            sw={1.4}
          />
          <Hand x={block.x + block.w / 2} y={block.y + Math.min(block.h, 34) / 2 + 7} size={20} anchor="middle" weight={700}>
            {block.key}
          </Hand>
        </g>
      ))}
      <Ink d={wave(430, 596, 192, { amp: 10, length: 40, seed: 78 })} c={TONES.green.deep} w={2} />
      <Ink d={route} dash="4 7" c={TONES.red.ink} w={1.6} o={0.8} />
      {BLOCKS.map((block) => (
        <g key={`n${block.key}`}>
          <circle cx={block.x} cy={block.y} r={14} fill={PAPER} stroke={INK} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
          <Hand x={block.x} y={block.y + 7} size={20} anchor="middle" weight={700} c={TONES.red.deep}>
            {block.order}
          </Hand>
        </g>
      ))}
      <Place x={STOPS[0][0]} y={STOPS[0][1]}>
        <Anim className="s-rp3-lens">
          <Magnifier x={30} y={-28} r={15} angle={130} seed={79} />
        </Anim>
      </Place>

      <Floor y={318} x1={660} x2={790} seed={80} />
      <Place x={722} y={318} s={1.5} flip>
        <Pip mood="happy" arms="point" seed={81} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Let the figures talk: bars, error bars, and a closer look.
   ------------------------------------------------------------------ */

const BARS = [0.45, 0.62, 0.58, 0.85]
const CHART = { x: 260, y: 290, w: 300, h: 220 }
const gapW = CHART.w / (BARS.length * 1.6 + 0.6)
const ERRORS = [18, 26, 22, 14]

const figureCss = `
.s-rp4 .chart-bar { animation: s-rp4-grow 9s ease-out infinite; animation-delay: calc(var(--i) * 0.2s); }
.s-rp4-err { animation: s-rp4-err 9s ease-in-out infinite; }
.s-rp4-lens { animation: s-rp4-lens 9s ease-in-out infinite; }
@keyframes s-rp4-grow {
  0%, 4% { transform: scaleY(1); }
  8% { transform: scaleY(0.04); }
  24%, 100% { transform: scaleY(1); }
}
@keyframes s-rp4-err { 0%, 4% { opacity: 1; } 8%, 26% { opacity: 0; } 32%, 100% { opacity: 1; } }
@keyframes s-rp4-lens {
  0%, 30% { transform: translate(0, 0); }
  48%, 58% { transform: translate(68px, 10px); }
  76%, 86% { transform: translate(137px, -46px); }
  100% { transform: translate(0, 0); }
}
`

export function FigureScene() {
  const bars = BARS.map((v, i) => {
    const x = CHART.x + gapW * 0.8 + i * gapW * 1.6 + gapW / 2
    const top = CHART.y - CHART.h * 0.9 * v
    return { x, top, e: ERRORS[i] }
  })
  return (
    <Scene
      w={800}
      h={306}
      top={30}
      css={figureCss}
      className="s-rp4"
      label="A bar chart with error bars, a y axis labelled score and a note saying n equals 12, examined with a magnifying glass while a paper character points at it"
    >
      <Chart x={CHART.x} y={CHART.y} w={CHART.w} h={CHART.h} bars={BARS} tone="blue" seed={90} />
      <g className="s-rp4-err">
        {bars.map((bar, i) => (
          <Ink
            key={i}
            d={
              handLine(bar.x, bar.top - bar.e, bar.x, bar.top + bar.e, 91 + i, 0.2) +
              handLine(bar.x - 7, bar.top - bar.e, bar.x + 7, bar.top - bar.e, 95 + i, 0.2) +
              handLine(bar.x - 7, bar.top + bar.e, bar.x + 7, bar.top + bar.e, 99 + i, 0.2)
            }
            w={1.7}
          />
        ))}
      </g>
      {['A', 'B', 'C', 'D'].map((label, i) => (
        <Type key={label} x={bars[i].x} y={CHART.y + 22} size={20} anchor="middle" weight={700}>
          {label}
        </Type>
      ))}
      <Hand x={244} y={184} size={20} anchor="middle" rotate={-90} c={INK_SOFT} weight={700}>
        score
      </Hand>
      <Hand x={600} y={96} size={22} weight={700} c={TONES.red.ink}>
        n = 12
      </Hand>
      <Arrow from={[616, 104]} to={[572, 128]} bend={-0.25} seed={103} c={TONES.red.ink} head={8} />

      <Place x={bars[1].x} y={bars[1].top}>
        <Anim className="s-rp4-lens">
          <Magnifier x={0} y={0} r={22} angle={50} seed={104} />
        </Anim>
      </Place>

      <Floor y={300} x1={30} x2={214} seed={105} />
      <Place x={122} y={300} s={1.9}>
        <Pip mood="focused" arms="point" glasses look={1.5} seed={106} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Read like a friendly critic: weigh the claim against the evidence.
   ------------------------------------------------------------------ */

const EVIDENCE = [0, 1, 2]

const criticCss = `
.s-rp5 .scale-beam { animation: s-rp5-tilt 10s ease-in-out infinite; }
${EVIDENCE.map(
  (i) => `.s-rp5-ev-${i} { animation: s-rp5-ev-${i} 10s ease-in infinite; }
@keyframes s-rp5-ev-${i} {
  0%, ${8 + i * 14}% { transform: translateY(-70px); opacity: 0; }
  ${10 + i * 14}% { opacity: 1; }
  ${18 + i * 14}%, 88% { transform: translateY(0); opacity: 1; }
  94%, 100% { transform: translateY(0); opacity: 0; }
}`,
).join('\n')}
@keyframes s-rp5-tilt {
  0%, 10% { transform: rotate(-6deg); }
  34% { transform: rotate(-1deg); }
  50%, 86% { transform: rotate(6deg); }
  100% { transform: rotate(-6deg); }
}
`

export function CriticScene() {
  const s = 1.3
  const top = 320 - 120 * s
  const leftPan = 400 - 78 * s
  const rightPan = 400 + 78 * s
  const panY = top + 52 * s
  return (
    <Scene
      w={800}
      h={306}
      top={32}
      css={criticCss}
      className="s-rp5"
      label="A balance scale with one big claim on one pan and pieces of evidence dropping onto the other, watched by a paper character in thinking pose"
    >
      <Floor y={320} x1={40} x2={760} seed={110} />
      <Scale
        x={400}
        y={320}
        s={s}
        seed={111}
        left={
          <Sheet x={leftPan - 24} y={panY - 56} w={48} h={58} lines={3} fold={10} tone="amber" seed={112} />
        }
        right={
          <g>
            {EVIDENCE.map((i) => (
              <g key={i} className={`s-rp5-ev-${i}`}>
                <path d={`M${rightPan - 24} ${panY - 2 - i * 9}h48v-8h-48Z`} fill={i % 2 ? '#fbf6ec' : PAPER} />
                <Ink d={handPoly([[rightPan - 24, panY - 2 - i * 9], [rightPan + 24, panY - 2 - i * 9], [rightPan + 24, panY - 10 - i * 9], [rightPan - 24, panY - 10 - i * 9]], { seed: 113 + i, amp: 0.2, closed: true })} w={1.3} />
              </g>
            ))}
          </g>
        }
      />
      <Hand x={leftPan} y={panY + 50} size={20} anchor="middle" c={INK_SOFT} weight={700}>
        claim
      </Hand>
      <Hand x={rightPan} y={panY + 50} size={20} anchor="middle" c={INK_SOFT} weight={700}>
        evidence
      </Hand>

      <Place x={130} y={320} s={1.9}>
        <Pip mood="focused" arms="think" glasses look={1.8} seed={120} />
      </Place>
      <Place x={650} y={96} r={4}>
        <Sticky x={0} y={0} w={82} h={78} tone="amber" lines={0} seed={121} />
      </Place>
      <Hand x={691} y={158} size={46} anchor="middle" weight={700} c={TONES.red.ink}>
        ?
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Notes you can use later, and a bookworm keeping watch.
   ------------------------------------------------------------------ */

const NOTE_ROWS = [
  { y: 112, label: 'summary' },
  { y: 162, label: 'method' },
  { y: 212, label: 'numbers' },
  { y: 262, label: 'quotes' },
]

const notesCss = `
${NOTE_ROWS.map(
  (_, i) => `.s-rp6-line-${i} { animation: s-rp6-line-${i} 9s linear infinite; }
@keyframes s-rp6-line-${i} {
  0%, ${6 + i * 20}% { stroke-dashoffset: 1; opacity: 1; }
  ${20 + i * 20}%, 90% { stroke-dashoffset: 0; opacity: 1; }
  95% { stroke-dashoffset: 0; opacity: 0; }
  97%, 100% { stroke-dashoffset: 1; opacity: 1; }
}`,
).join('\n')}
.s-rp6 .pip-arm-r { animation: s-rp6-scribble 0.55s ease-in-out infinite alternate; }
@keyframes s-rp6-scribble { from { transform: rotate(-4deg); } to { transform: rotate(5deg); } }
`

export function NotesScene() {
  return (
    <Scene
      w={800}
      h={300}
      top={40}
      css={notesCss}
      className="s-rp6"
      label="A paper character writes a note card with lines for summary, method, numbers and quotes, while a bookworm peeks over a pile of books"
    >
      <Desk y={318} depth={24} seed={130} />
      <Box x={300} y={70} w={290} h={226} r={4} fill={PAPER} seed={131} />
      <Ink d={handLine(300, 88, 590, 88, 132, 0.5)} c={TONES.red.mid} w={1.4} />
      {NOTE_ROWS.map((row, i) => (
        <g key={row.label}>
          <Hand x={316} y={row.y + 6} size={20} weight={700}>
            {row.label}
          </Hand>
          <Ink
            d={wave(418, 566, row.y, { amp: 2.2, length: 9, seed: 133 + i })}
            c={INK}
            w={1.8}
            scale
            pathLength="1"
            dash="1"
            className={`s-rp6-line-${i}`}
          />
          <Ink d={handLine(312, row.y + 18, 578, row.y + 18, 140 + i, 0.4)} c={TEXT_LINE} w={1.1} />
        </g>
      ))}
      <Hand x={404} y={274} size={34} weight={700} c={TONES.red.ink}>
        “
      </Hand>
      <Hand x={568} y={274} size={34} weight={700} c={TONES.red.ink}>
        ”
      </Hand>

      <Place x={236} y={318} s={1.95}>
        <Pip mood="focused" arms="write" seed={150}>
          <Pencil x={26} y={-17} length={30} angle={-70} tone="amber" seed={151} />
        </Pip>
      </Place>

      <Box x={612} y={284} w={144} h={34} r={3} fill="url(#fill-red)" seed={152} />
      <Box x={628} y={256} w={112} h={28} r={3} fill="url(#fill-green)" seed={153} />
      <Place x={696} y={256} s={1.2} flip>
        <Worm seed={154} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Know when to stop: skim many, read some, study a few.
   ------------------------------------------------------------------ */

const stopCss = `
.s-rp7-hop-a { animation: s-rp7-hop-a 6s ease-in-out infinite; }
.s-rp7-hop-b { animation: s-rp7-hop-b 6s ease-in-out infinite; }
.s-rp7-star { animation: s-rp7-star 3s ease-in-out infinite; }
@keyframes s-rp7-hop-a {
  0%, 8% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  12% { opacity: 1; }
  24% { transform: translate(110px, -70px) rotate(14deg); }
  38% { transform: translate(220px, 38px) rotate(4deg); opacity: 1; }
  44%, 100% { transform: translate(220px, 38px) rotate(4deg); opacity: 0; }
}
@keyframes s-rp7-hop-b {
  0%, 52% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  56% { opacity: 1; }
  68% { transform: translate(100px, -64px) rotate(-12deg); }
  82% { transform: translate(200px, 22px) rotate(-4deg); opacity: 1; }
  88%, 100% { transform: translate(200px, 22px) rotate(-4deg); opacity: 0; }
}
@keyframes s-rp7-star {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(20deg); }
}
`

export function StopScene() {
  return (
    <Scene
      w={800}
      h={222}
      top={128}
      css={stopCss}
      className="s-rp7"
      label="Three piles of papers get smaller from left to right, labelled skim, read and study, with pages hopping from one pile to the next and a star over the smallest pile"
    >
      <Floor y={300} x1={40} x2={760} seed={160} />
      <Pile x={180} y={300} w={150} count={16} seed={161} />
      <Pile x={400} y={300} w={124} count={8} seed={162} />
      <Pile x={600} y={300} w={104} count={3} seed={163} />
      <Place x={600} y={262}>
        <Anim className="s-rp7-star" spin>
          <Sparkle x={0} y={0} s={14} />
        </Anim>
      </Place>

      <Place x={180} y={210}>
        <Anim className="s-rp7-hop-a" style={{ opacity: 0 }}>
          <Sheet x={-15} y={-19} w={30} h={38} lines={2} fold={7} seed={164} sw={1.3} />
        </Anim>
      </Place>
      <Place x={400} y={250}>
        <Anim className="s-rp7-hop-b" style={{ opacity: 0 }}>
          <Sheet x={-15} y={-19} w={30} h={38} lines={2} fold={7} tone="amber" seed={165} sw={1.3} />
        </Anim>
      </Place>

      {[
        [180, 'skim'],
        [400, 'read'],
        [600, 'study'],
      ].map(([x, label]) => (
        <Hand key={label} x={x} y={332} size={22} anchor="middle" weight={700}>
          {label}
        </Hand>
      ))}

      <Place x={728} y={300} s={1.5}>
        <Pip mood="proud" arms="hold" seed={170}>
          <Chai x={0} y={-12} s={0.42} seed={171} />
        </Pip>
      </Place>
    </Scene>
  )
}
