import {
  Anim,
  Box,
  Chart,
  Checklist,
  Clock,
  Cross,
  Floor,
  Hand,
  Hourglass,
  INK_SOFT,
  Ink,
  Laptop,
  PAPER,
  Pip,
  Place,
  Poly,
  Scene,
  Shadow,
  Sheet,
  Speech,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handEllipse,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/*
 * A pull-down projector screen on a tripod stand: the roller bar, the white
 * screen and a pole down to the floor. Anchor: top-left of the screen.
 * Children draw on the screen.
 */
export function Screen({ x, y, w = 300, h = 180, floor, seed = 1, children }) {
  const mid = x + w / 2
  return (
    <g>
      {floor ? (
        <Ink
          d={
            handLine(mid, y + h, mid, floor - 4, seed + 5, 0.3) +
            handLine(mid, floor - 34, mid - 34, floor, seed + 6, 0.3) +
            handLine(mid, floor - 34, mid + 34, floor, seed + 7, 0.3)
          }
          w={2.2}
        />
      ) : null}
      <Box x={x} y={y} w={w} h={h} fill={PAPER} seed={seed} sw={2.1} />
      <Box x={x - 8} y={y - 10} w={w + 16} h={11} r={4} fill={TONES.grey.mid} seed={seed + 1} sw={1.7} />
      {children}
    </g>
  )
}

/*
 * A small slide, the kind you see in a row of thumbnails. `kind` decides what
 * is on it: title, text, chart, photo or dense. Anchor: top-left.
 */
export function MiniSlide({ x, y, w = 70, h = 50, kind = 'text', tone = 'blue', seed = 1, sw = 1.6 }) {
  const t = TONES[tone] || TONES.blue
  let inner = null
  if (kind === 'title') {
    inner = (
      <Ink
        d={handLine(x + w * 0.18, y + h * 0.42, x + w * 0.82, y + h * 0.42, seed + 2, 0.3) + handLine(x + w * 0.3, y + h * 0.64, x + w * 0.7, y + h * 0.64, seed + 3, 0.3)}
        c={t.deep}
        w={2.4}
      />
    )
  } else if (kind === 'chart') {
    const base = y + h * 0.84
    inner = (
      <g>
        {[0.35, 0.6, 0.85].map((v, i) => {
          const bw = w * 0.14
          const bx = x + w * 0.22 + i * w * 0.2
          const bh = h * 0.6 * v
          return <rect key={i} x={bx} y={base - bh} width={bw} height={bh} fill={t.mid} />
        })}
        <Ink d={handLine(x + w * 0.16, base, x + w * 0.86, base, seed + 4, 0.3)} w={1.3} />
      </g>
    )
  } else if (kind === 'photo') {
    inner = (
      <g>
        <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} fill={TONES.blue.tint} />
        <path
          d={`M${x + 4} ${y + h * 0.72}Q${x + w * 0.3} ${y + h * 0.42} ${x + w * 0.55} ${y + h * 0.62}Q${x + w * 0.75} ${y + h * 0.48} ${x + w - 4} ${y + h * 0.6}V${y + h - 4}H${x + 4}Z`}
          fill={TONES.green.mid}
        />
        <circle cx={x + w * 0.78} cy={y + h * 0.28} r={Math.min(w, h) * 0.09} fill={TONES.amber.mid} />
        {[0.25, 0.42, 0.6].map((fx, i) => (
          <circle key={i} cx={x + fx * w} cy={y + h * 0.8} r={2.2} fill={TONES.pink.ink} />
        ))}
      </g>
    )
  } else {
    const rows = kind === 'dense' ? 7 : 3
    let d = ''
    for (let i = 0; i < rows; i++) {
      const ly = y + h * 0.2 + (i * h * 0.66) / Math.max(1, rows - 1)
      const len = (kind === 'dense' ? 0.78 : 0.55) - ((i * 13) % 5) * 0.04
      d += handLine(x + w * 0.12, ly, x + w * (0.12 + len), ly, seed + 10 + i, 0.25)
    }
    inner = <Ink d={d} c={kind === 'dense' ? INK_SOFT : TEXT_LINE} w={kind === 'dense' ? 1.1 : 2} />
  }
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={3} fill={PAPER} seed={seed} sw={sw} />
      {inner}
    </g>
  )
}

/* A wooden lectern, seen from the front. Anchor: bottom centre. */
export function Lectern({ x, y, s = 1, seed = 1 }) {
  const body = [
    [x - 34 * s, y - 78 * s],
    [x + 34 * s, y - 78 * s],
    [x + 26 * s, y],
    [x - 26 * s, y],
  ]
  const top = [
    [x - 46 * s, y - 92 * s],
    [x + 46 * s, y - 92 * s],
    [x + 40 * s, y - 78 * s],
    [x - 40 * s, y - 78 * s],
  ]
  return (
    <g>
      <Poly points={body} fill="url(#wood)" seed={seed} sw={1.9} />
      <Poly points={top} fill={TONES.brown.mid} seed={seed + 1} sw={1.9} />
      <Ink d={handLine(x - 18 * s, y - 50 * s, x + 18 * s, y - 50 * s, seed + 2, 0.3)} c={TONES.brown.deep} w={1.4} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Reading the paper aloud, or telling one clear message.
   ------------------------------------------------------------------ */

const talkCss = `
.s-hpr1-nod .pip-body { animation: s-hpr1-nod 3.2s ease-in-out infinite; }
@keyframes s-hpr1-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-7deg); }
}
.s-hpr1-zz { animation: s-hpr1-zz 3.2s ease-in-out infinite; }
@keyframes s-hpr1-zz {
  0%, 100% { transform: translateY(0); opacity: 0.9; }
  50% { transform: translateY(-8px); opacity: 0.35; }
}
.s-hpr1-point .pip-arm-r { animation: s-hpr1-point 2.6s ease-in-out infinite; }
@keyframes s-hpr1-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
.s-hpr1-happy .pip-body { animation: s-hpr1-hop 2.6s ease-in-out infinite; }
@keyframes s-hpr1-hop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function TalkScene() {
  const floor = 340
  return (
    <Scene
      w={800}
      h={330}
      top={30}
      css={talkCss}
      className="s-hpr1"
      label="On the left, a paper character reads her paper aloud, word for word, while a listener falls asleep, crossed out in red. On the right, the same character points at a sticky note that says one message beside a simple chart, and the listener smiles, with a green tick"
    >
      <Floor y={floor} x1={20} x2={380} seed={101} />
      <Floor y={floor} x1={420} x2={780} seed={102} />
      <Ink d={handLine(400, 60, 400, floor + 10, 103, 0.6)} c={INK_SOFT} w={1.3} dash="5 7" />

      {/* Left: reading the paper aloud. */}
      <Shadow x={110} y={floor + 2} rx={28} ry={4} />
      <Place x={110} y={floor} s={1.5}>
        <Pip mood="focused" arms="hold" tone="blue" look={0} seed={104}>
          <Sheet x={-15} y={-32} w={30} h={30} lines={3} fold={7} seed={105} sw={1.3} />
        </Pip>
      </Place>
      <Hand x={110} y={86} size={19} anchor="middle" weight={700} c={TONES.red.deep}>
        reading the paper
      </Hand>
      <Shadow x={290} y={floor + 2} rx={22} ry={4} />
      <Place x={290} y={floor} s={1.2} flip>
        <Pip mood="sleepy" arms="down" tone="paper" seed={106} />
      </Place>
      <g className="s-hpr1-zz">
        <Hand x={310} y={232} size={22} c={INK_SOFT} weight={700}>
          z
        </Hand>
        <Hand x={322} y={214} size={16} c={INK_SOFT} weight={700}>
          z
        </Hand>
      </g>
      <Cross x={350} y={110} s={1.4} seed={107} />

      {/* Right: one message, told. */}
      <Sticky x={560} y={70} w={130} h={66} tone="amber" lines={0} seed={108} />
      <Hand x={625} y={110} size={20} anchor="middle" weight={700}>
        one message
      </Hand>
      <Chart x={566} y={250} w={120} h={86} bars={[0.3, 0.55, 0.9]} tone="green" seed={109} />
      <Shadow x={490} y={floor + 2} rx={28} ry={4} />
      <Place x={490} y={floor} s={1.5}>
        <g className="s-hpr1-point">
          <Pip mood="happy" arms="point" tone="blue" look={1.5} seed={110} />
        </g>
      </Place>
      <Shadow x={730} y={floor + 2} rx={22} ry={4} />
      <Place x={730} y={floor} s={1.2} flip>
        <g className="s-hpr1-happy">
          <Pip mood="grin" arms="down" tone="paper" look={1} seed={111} />
        </g>
      </Place>
      <Hand x={600} y={300} size={19} anchor="middle" weight={700} c={TONES.green.deep}>
        telling the story
      </Hand>
      <Tick x={760} y={100} s={1.5} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The circular, the clock and the no-show rule.
   ------------------------------------------------------------------ */

const rulesCss = `
.s-hpr2 .clock-min { animation: s-hpr2-min 8s linear infinite; }
@keyframes s-hpr2-min {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.s-hpr2-pip .pip-body { animation: s-hpr2-lean 3.4s ease-in-out infinite; }
@keyframes s-hpr2-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
.s-hpr2-stamp { animation: s-hpr2-stamp 4s ease-in-out infinite; }
@keyframes s-hpr2-stamp {
  0%, 100% { transform: scale(1); }
  8% { transform: scale(1.12); }
  16% { transform: scale(1); }
}
`

/* A slice of a ring from minute a to minute b on a clock of `total` minutes. */
function ringSlice(cx, cy, r1, r2, a, b, total) {
  const ang = (m) => -Math.PI / 2 + (m / total) * Math.PI * 2
  const p = (r, m) => [cx + Math.cos(ang(m)) * r, cy + Math.sin(ang(m)) * r]
  const large = b - a > total / 2 ? 1 : 0
  const [x1, y1] = p(r2, a)
  const [x2, y2] = p(r2, b)
  const [x3, y3] = p(r1, b)
  const [x4, y4] = p(r1, a)
  return `M${x1} ${y1}A${r2} ${r2} 0 ${large} 1 ${x2} ${y2}L${x3} ${y3}A${r1} ${r1} 0 ${large} 0 ${x4} ${y4}Z`
}

export function RulesScene() {
  const floor = 340
  const cx = 400
  const cy = 170
  return (
    <Scene
      w={800}
      h={330}
      top={30}
      css={rulesCss}
      className="s-hpr2"
      label="A paper character reads a long conference circular with a checklist. Beside it a clock ringed in two colours shows twelve minutes to talk and three minutes for questions, and a red stamp says present in person"
    >
      <Floor y={floor} x1={20} x2={780} seed={201} />

      <Checklist x={130} y={70} w={130} items={5} done={2} seed={202} />
      <Hand x={195} y={58} size={20} anchor="middle" weight={700} c={TONES.blue.deep}>
        the circular
      </Hand>

      <Shadow x={80} y={floor + 2} rx={26} ry={4} />
      <Place x={80} y={floor} s={1.5}>
        <g className="s-hpr2-pip">
          <Pip mood="focused" arms="think" tone="blue" look={1.5} seed={203} />
        </g>
      </Place>

      <path d={ringSlice(cx, cy, 70, 92, 0, 12, 15)} fill="url(#fill-blue)" />
      <path d={ringSlice(cx, cy, 70, 92, 12, 15, 15)} fill="url(#fill-amber)" />
      <Ink d={handEllipse(cx, cy, 92, 92, { seed: 204, amp: 0.6 })} w={1.8} />
      <Clock x={cx} y={cy} r={68} seed={205} />
      <Hand x={cx - 120} y={cy + 118} size={19} weight={700} c={TONES.blue.deep}>
        12 min talk
      </Hand>
      <Hand x={cx - 40} y={cy - 104} size={19} anchor="middle" weight={700} c={TONES.amber.deep}>
        3 min questions
      </Hand>

      <Sheet x={590} y={120} w={120} h={150} lines={7} seed={206} title />
      <Place x={650} y={240}>
        <Anim className="s-hpr2-stamp" origin={[0, 0]}>
          <StampMark x={0} y={0} w={200} h={42} text="PRESENT IN PERSON" size={14} tone="red" rotate={-10} bg={PAPER} seed={207} />
        </Anim>
      </Place>
      <Hand x={650} y={104} size={18} anchor="middle" weight={700} c={TONES.red.deep}>
        no-show policy
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The format: a row of slides, most of them results.
   ------------------------------------------------------------------ */

const formatCss = `
.s-hpr3-slide { animation: s-hpr3-lift 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-hpr3-lift {
  0%, 20%, 100% { transform: translateY(0); }
  8% { transform: translateY(-9px); }
}
.s-hpr3-pip .pip-arm-r { animation: s-hpr3-wave 3s ease-in-out infinite; }
@keyframes s-hpr3-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
`

const FORMAT = [
  { label: 'title', n: 1, kind: 'title', tone: 'grey' },
  { label: 'background', n: 1, kind: 'photo', tone: 'amber' },
  { label: 'methods', n: 3, kind: 'text', tone: 'blue' },
  { label: 'results', n: 4, kind: 'chart', tone: 'green' },
  { label: 'summary', n: 1, kind: 'title', tone: 'pink' },
  { label: 'thanks', n: 1, kind: 'text', tone: 'grey' },
]

export function FormatScene() {
  const floor = 330
  const sw = 44
  const sh = 34
  const gap = 6
  const groupGap = 22
  let cursor = 70
  const groups = FORMAT.map((g) => {
    const start = cursor
    cursor += g.n * sw + (g.n - 1) * gap + groupGap
    return { ...g, start, end: cursor - groupGap }
  })
  let index = 0
  return (
    <Scene
      w={800}
      h={300}
      top={50}
      css={formatCss}
      className="s-hpr3"
      label="A row of small slides in order: one title slide, one background photo, three methods slides, four results slides with charts, one summary and one thank you slide. A bracket over the results says most of the time here, and a paper character points at the row"
    >
      <Floor y={floor} x1={20} x2={780} seed={301} />
      {groups.map((g, gi) => (
        <g key={g.label}>
          {Array.from({ length: g.n }, (_, k) => {
            const i = index++
            return (
              <g key={k} className="s-hpr3-slide" style={{ '--i': i }}>
                <MiniSlide x={g.start + k * (sw + gap)} y={150} w={sw} h={sh} kind={g.kind} tone={g.tone} seed={310 + i * 3} sw={1.4} />
              </g>
            )
          })}
          <Hand x={(g.start + g.end) / 2} y={216} size={16} anchor="middle" weight={700} c={TONES[g.tone].deep}>
            {g.label}
          </Hand>
          <Ink d={handLine(g.start, 200, g.end, 200, 360 + gi, 0.3)} c={TONES[g.tone].ink} w={2.2} />
        </g>
      ))}
      {(() => {
        const r = groups[3]
        return (
          <g>
            <Ink d={`M${r.start} 136Q${r.start} 120 ${r.start + 14} 120H${r.end - 14}Q${r.end} 120 ${r.end} 136`} c={TONES.green.deep} w={2} />
            <Hand x={(r.start + r.end) / 2} y={108} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
              most of the time here
            </Hand>
          </g>
        )
      })()}
      <Hand x={400} y={260} size={18} anchor="middle" c={INK_SOFT}>
        purpose, context, your work, conclusion
      </Hand>
      <Shadow x={740} y={floor + 2} rx={24} ry={4} />
      <Place x={740} y={floor} s={1.3} flip>
        <g className="s-hpr3-pip">
          <Pip mood="happy" arms="point" tone="blue" look={1.5} seed={370} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Thirty-one slides, or about one a minute.
   ------------------------------------------------------------------ */

const slidesCss = `
.s-hpr4-pile { animation: s-hpr4-wobble 2.4s ease-in-out infinite; }
@keyframes s-hpr4-wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-2.5deg); }
  75% { transform: rotate(2.5deg); }
}
.s-hpr4 .sand-top { animation: s-hpr4-top 6s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
@keyframes s-hpr4-top {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.4); }
}
.s-hpr4 .sand-bottom { animation: s-hpr4-bottom 6s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
@keyframes s-hpr4-bottom {
  0%, 100% { transform: scaleY(0.5); }
  50% { transform: scaleY(1); }
}
`

export function SlidesScene() {
  const floor = 340
  return (
    <Scene
      w={800}
      h={320}
      top={36}
      css={slidesCss}
      className="s-hpr4"
      label="On the left a tall, wobbling pile of thirty-one slides with a worried paper character beside it, crossed out. In the middle an hourglass. On the right a neat row of about a dozen slides, labelled about one a minute, with a green tick"
    >
      <Floor y={floor} x1={20} x2={780} seed={401} />

      <Place x={0} y={0}>
        <Anim className="s-hpr4-pile" origin={[150, floor]}>
          {Array.from({ length: 12 }, (_, i) => (
            <MiniSlide
              key={i}
              x={112 + ((i * 7) % 11) - 5}
              y={floor - 26 - i * 19}
              w={76}
              h={24}
              kind="dense"
              seed={410 + i}
              sw={1.3}
            />
          ))}
        </Anim>
      </Place>
      <Hand x={150} y={86} size={20} anchor="middle" weight={700} c={TONES.red.deep}>
        31 slides
      </Hand>
      <Cross x={230} y={110} s={1.4} seed={430} />
      <Shadow x={60} y={floor + 2} rx={22} ry={4} />
      <Place x={60} y={floor} s={1.3}>
        <Pip mood="worried" arms="shrug" tone="blue" look={1.5} seed={431} />
      </Place>

      <Hourglass x={330} y={250} s={1.3} seed={432} />
      <Hand x={330} y={190} size={18} anchor="middle" weight={700} c={TONES.amber.deep}>
        12 minutes
      </Hand>

      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 4
        const row = Math.floor(i / 4)
        const kinds = ['title', 'photo', 'text', 'text', 'text', 'chart', 'chart', 'chart', 'chart', 'photo', 'title', 'text']
        return (
          <MiniSlide
            key={i}
            x={440 + col * 76}
            y={140 + row * 56}
            w={64}
            h={44}
            kind={kinds[i]}
            tone={kinds[i] === 'chart' ? 'green' : 'blue'}
            seed={440 + i * 2}
            sw={1.4}
          />
        )
      })}
      <Hand x={580} y={120} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
        about one a minute
      </Hand>
      <Tick x={760} y={110} s={1.5} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Design: a wall of text, or one finding.
   ------------------------------------------------------------------ */

const designCss = `
.s-hpr5-ring { animation: s-hpr5-ring 3s ease-in-out infinite; }
@keyframes s-hpr5-ring {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
.s-hpr5-squint .pip-body { animation: s-hpr5-lean 3.2s ease-in-out infinite; }
@keyframes s-hpr5-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(6deg); }
}
.s-hpr5 .chart-bar { animation: s-hpr5-grow 5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.25s); }
@keyframes s-hpr5-grow {
  0%, 100% { transform: scaleY(1); }
  15% { transform: scaleY(0.3); }
  40%, 85% { transform: scaleY(1); }
}
`

export function DesignScene() {
  const floor = 340
  let dense = ''
  for (let i = 0; i < 12; i++) {
    const y = 104 + i * 12
    dense += handLine(76, y, 76 + 230 - ((i * 37) % 70), y, 510 + i, 0.25)
  }
  return (
    <Scene
      w={800}
      h={310}
      top={36}
      css={designCss}
      className="s-hpr5"
      label="Two slides side by side. The left one is packed with tiny lines of text and a paper character squints at it, crossed out. The right one has a short title, one bar chart with the tallest bar circled and three short bullets, and a happy paper character, with a green tick"
    >
      <Floor y={floor} x1={20} x2={780} seed={501} />

      <Box x={60} y={70} w={270} h={180} r={6} fill={PAPER} seed={502} sw={2} />
      <Ink d={handLine(76, 86, 250, 86, 503, 0.3)} c={INK_SOFT} w={1.6} />
      <Ink d={dense} c={INK_SOFT} w={1} />
      <Cross x={360} y={160} s={1.4} seed={504} />
      <Hand x={195} y={58} size={18} anchor="middle" weight={700} c={TONES.red.deep}>
        too small to read
      </Hand>
      <Shadow x={150} y={floor + 2} rx={20} ry={4} />
      <Place x={150} y={floor} s={1}>
        <g className="s-hpr5-squint">
          <Pip mood="worried" arms="think" tone="paper" look={0} seed={505} />
        </g>
      </Place>

      <Box x={450} y={70} w={290} h={180} r={6} fill={PAPER} seed={506} sw={2} />
      <Ink d={handLine(470, 92, 660, 92, 507, 0.3)} c={TONES.blue.deep} w={3.2} />
      <Chart x={474} y={226} w={140} h={100} bars={[0.35, 0.5, 0.62, 0.92]} tone="green" seed={508} />
      <g className="s-hpr5-ring" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <Ink d={handEllipse(588, 150, 22, 32, { seed: 509, amp: 0.8 })} c={TONES.red.ink} w={2.2} />
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={638} cy={150 + i * 26} r={3} fill={TONES.blue.ink} />
          <Ink d={handLine(648, 150 + i * 26, 720 - i * 12, 150 + i * 26, 510 + i, 0.3)} c={TEXT_LINE} w={2.4} />
        </g>
      ))}
      <Tick x={768} y={160} s={1.5} />
      <Hand x={595} y={58} size={18} anchor="middle" weight={700} c={TONES.green.deep}>
        one finding, easy to see
      </Hand>
      <Shadow x={680} y={floor + 2} rx={20} ry={4} />
      <Place x={680} y={floor} s={1}>
        <Pip mood="grin" arms="down" tone="paper" look={-1} seed={511} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Practise: aloud, timed, recorded, in front of labmates.
   ------------------------------------------------------------------ */

const practiseCss = `
.s-hpr6-speaker .pip-arm-r { animation: s-hpr6-gesture 2.2s ease-in-out infinite; }
@keyframes s-hpr6-gesture {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-16deg); }
}
.s-hpr6-rec { animation: s-hpr6-rec 1.6s steps(1, end) infinite; }
@keyframes s-hpr6-rec {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}
.s-hpr6 .clock-min { animation: s-hpr6-min 6s linear infinite; }
@keyframes s-hpr6-min {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.s-hpr6-friend .pip-body { animation: s-hpr6-nod 2.8s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-hpr6-nod {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function PractiseScene() {
  const floor = 340
  const [sx, sy, sw, sh] = laptopScreen(400, floor, 170)
  return (
    <Scene
      w={800}
      h={320}
      top={36}
      css={practiseCss}
      className="s-hpr6"
      label="A paper character practises her talk aloud in front of a laptop that is recording, with a blinking red dot, and a clock on the wall. Two labmates sit and listen, one holding a sticky note of feedback. Labels say aloud, timed and recorded"
    >
      <Floor y={floor} x1={20} x2={780} seed={601} />

      <Shadow x={150} y={floor + 2} rx={30} ry={5} />
      <Place x={150} y={floor} s={1.7}>
        <g className="s-hpr6-speaker">
          <Pip mood="happy" arms="point" tone="blue" look={1.5} seed={602} />
        </g>
      </Place>
      <Hand x={150} y={150} size={19} anchor="middle" weight={700} c={TONES.blue.deep}>
        aloud
      </Hand>

      <Laptop x={400} y={floor} w={170} seed={603}>
        <rect x={sx} y={sy} width={sw} height={sh} fill={TONES.blue.tint} />
        <Place x={sx + sw / 2} y={sy + sh - 4} s={0.7}>
          <Pip mood="happy" arms="down" tone="blue" lines={false} seed={604} />
        </Place>
        <g className="s-hpr6-rec">
          <circle cx={sx + 14} cy={sy + 12} r={5} fill={TONES.red.ink} />
        </g>
        <Type x={sx + 24} y={sy + 16} size={11} c={TONES.red.deep} weight={700}>
          REC
        </Type>
      </Laptop>
      <Hand x={400} y={232} size={19} anchor="middle" weight={700} c={TONES.red.deep}>
        recorded
      </Hand>

      <Clock x={400} y={110} r={34} seed={605} />
      <Hand x={450} y={116} size={19} weight={700} c={TONES.amber.deep}>
        timed
      </Hand>

      <Shadow x={600} y={floor + 2} rx={22} ry={4} />
      <Place x={600} y={floor} s={1.2} flip>
        <g className="s-hpr6-friend" style={{ '--d': '0s' }}>
          <Pip mood="focused" arms="hold" tone="paper" look={1} glasses seed={606}>
            <Sticky x={-13} y={-30} w={26} h={22} tone="pink" lines={2} seed={607} />
          </Pip>
        </g>
      </Place>
      <Shadow x={710} y={floor + 2} rx={22} ry={4} />
      <Place x={710} y={floor} s={1.2} flip>
        <g className="s-hpr6-friend" style={{ '--d': '-1.4s' }}>
          <Pip mood="happy" arms="think" tone="green" look={1} seed={608} />
        </g>
      </Place>
      <Hand x={655} y={200} size={18} anchor="middle" weight={700} c={TONES.green.deep}>
        honest labmates
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Questions: a hand goes up, an honest answer comes back.
   ------------------------------------------------------------------ */

const questionsCss = `
.s-hpr7-asker .pip-arm-r { animation: s-hpr7-raise 2.4s ease-in-out infinite; }
@keyframes s-hpr7-raise {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
}
.s-hpr7-q { animation: s-hpr7-q 2.4s ease-in-out infinite; }
@keyframes s-hpr7-q {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.s-hpr7-speaker .pip-body { animation: s-hpr7-calm 3.6s ease-in-out infinite; }
@keyframes s-hpr7-calm {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
`

export function QuestionsScene() {
  const floor = 340
  return (
    <Scene
      w={800}
      h={320}
      top={36}
      css={questionsCss}
      className="s-hpr7"
      label="A paper character at a lectern answers calmly, with a speech bubble saying we did not test that yet. Across the room a listener in glasses raises a hand, with a speech bubble holding a big question mark, and two other listeners watch"
    >
      <Floor y={floor} x1={20} x2={780} seed={701} />

      <Shadow x={170} y={floor + 2} rx={30} ry={5} />
      <Place x={170} y={floor} s={2}>
        <g className="s-hpr7-speaker">
          <Pip mood="happy" arms="hold" tone="blue" look={1.5} seed={702} />
        </g>
      </Place>
      <Lectern x={170} y={floor} s={0.75} seed={703} />
      <Speech x={60} y={64} w={250} h={64} tx={180} ty={170} seed={704}>
        <Hand x={185} y={104} size={19} anchor="middle" weight={700} c={TONES.blue.deep}>
          we did not test that yet
        </Hand>
      </Speech>

      <Speech x={540} y={60} w={80} h={64} tx={600} ty={170} seed={705} tone="amber">
        <g className="s-hpr7-q">
          <Hand x={580} y={110} size={44} anchor="middle" weight={700} c={TONES.amber.deep}>
            ?
          </Hand>
        </g>
      </Speech>

      {[
        { x: 500, mood: 'focused', tone: 'paper', seed: 710, cls: '' },
        { x: 600, mood: 'surprised', tone: 'green', seed: 712, cls: 's-hpr7-asker', arms: 'wave', glasses: true },
        { x: 700, mood: 'happy', tone: 'pink', seed: 714, cls: '' },
      ].map((p) => (
        <g key={p.seed}>
          <Shadow x={p.x} y={floor + 2} rx={22} ry={4} />
          <Place x={p.x} y={floor} s={1.25}>
            <g className={p.cls || undefined}>
              <Pip mood={p.mood} arms={p.arms || 'down'} tone={p.tone} glasses={p.glasses} look={-1.5} seed={p.seed} />
            </g>
          </Place>
        </g>
      ))}
      <Hand x={425} y={170} size={18} anchor="middle" c={INK_SOFT}>
        listen, then answer honestly
      </Hand>
    </Scene>
  )
}

