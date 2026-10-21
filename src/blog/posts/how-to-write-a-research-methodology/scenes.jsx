import {
  Anim,
  Box,
  Chart,
  Desk,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  Oval,
  PAPER,
  Pip,
  Place,
  Poly,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Stamp,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  handEllipse,
  handLine,
  handPoly,
  laptopScreen,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6, o }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} o={o} />
}

/* Two table legs under a desk top. */
function Legs({ x1, x2, top, floor, seed }) {
  return <Ink d={handLine(x1, top, x1 + 2, floor, seed, 0.4) + handLine(x2, top, x2 - 2, floor, seed + 1, 0.4)} w={3} c={TONES.brown.deep} />
}

/* ------------------------------------------------------------------
   1. One methods section, and the three readers it must satisfy.
   ------------------------------------------------------------------ */

const READERS = [
  { x: 430, label: 'examiner', tone: 'blue' },
  { x: 560, label: 'reviewer', tone: 'green' },
  { x: 690, label: 'next researcher', tone: 'pink' },
]

const readersCss = `
.s-pz1-copy { animation: s-pz1-send 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 7s); }
.s-pz1-reader .pip-body { animation: s-pz1-nod 3s ease-in-out infinite; }
.s-pz1-abhi .pip-body { animation: s-pz1-bob 3.4s ease-in-out infinite; }
@keyframes s-pz1-send {
  0%, 8% { transform: translate(0, 0); opacity: 0; }
  12% { transform: translate(0, 0); opacity: 1; }
  40% { transform: translate(var(--tx), -60px); opacity: 1; }
  52% { transform: translate(var(--tx), 0); opacity: 1; }
  58%, 100% { transform: translate(var(--tx), 0); opacity: 0; }
}
@keyframes s-pz1-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-pz1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function ReadersScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={readersCss} className="s-pz1" label="A paper character holds a methods sheet, and copies fly to three readers in glasses labelled examiner, reviewer and next researcher, under the questions can I trust it and can I repeat it">
      <Floor y={floor} x1={30} x2={770} seed={101} />

      <Box x={70} y={52} w={190} h={40} r={6} fill={TONES.amber.tint} seed={102} sw={1.6} />
      <Hand x={165} y={79} size={21} anchor="middle" weight={700}>
        can I trust it?
      </Hand>
      <Box x={470} y={52} w={210} h={40} r={6} fill={TONES.green.tint} seed={103} sw={1.6} />
      <Hand x={575} y={79} size={21} anchor="middle" weight={700}>
        can I repeat it?
      </Hand>

      {READERS.map((reader, i) => (
        <g key={reader.label}>
          <Hand x={reader.x} y={188} size={20} anchor="middle" c={INK_SOFT}>
            {reader.label}
          </Hand>
          <Shadow x={reader.x} y={floor + 2} rx={26} ry={4} />
          <Place x={reader.x} y={floor} s={1.25} flip={i === 2}>
            <g className="s-pz1-reader">
              <Pip mood="focused" arms="hold" tone={reader.tone} glasses look={-1.2} seed={110 + i * 10}>
                <Sheet x={-11} y={-30} w={22} h={24} tone="amber" lines={2} fold={6} seed={111 + i * 10} sw={1.3} />
              </Pip>
            </g>
          </Place>
          <Place x={0} y={0}>
            <Anim className="s-pz1-copy" style={{ '--i': i, '--tx': `${reader.x - 150}px`, opacity: 0 }}>
              <Sheet x={138} y={226} w={24} h={26} tone="amber" lines={2} fold={6} seed={140 + i} sw={1.3} />
            </Anim>
          </Place>
        </g>
      ))}

      <Shadow x={150} y={floor + 3} rx={34} ry={4} />
      <Place x={150} y={floor} s={1.6}>
        <g className="s-pz1-abhi">
          <Pip mood="happy" arms="hold" tone="amber" look={1.4} seed={150}>
            <Sheet x={-13} y={-31} w={26} h={28} tone="amber" lines={3} fold={7} seed={151} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. A signpost: numbers, words or both.
   ------------------------------------------------------------------ */

const SIGNS = [
  { label: 'numbers', y: 70, dir: 1, tone: 'blue' },
  { label: 'words', y: 128, dir: -1, tone: 'pink' },
  { label: 'both', y: 186, dir: 1, tone: 'green' },
]

const designCss = `
.s-pz2-sign { animation: s-pz2-swing 6s ease-in-out infinite; animation-delay: calc(var(--i) * -2s); }
.s-pz2-sign-both { animation: s-pz2-glow 6s ease-in-out infinite; }
.s-pz2-abhi .pip-body { animation: s-pz2-lean 4s ease-in-out infinite; }
@keyframes s-pz2-swing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-2deg); }
}
@keyframes s-pz2-glow {
  0%, 40%, 100% { opacity: 0; }
  55%, 85% { opacity: 1; }
}
@keyframes s-pz2-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function DesignScene() {
  const floor = 300
  const post = 420
  return (
    <Scene w={800} h={300} top={20} css={designCss} className="s-pz2" label="A signpost with three arrows reading numbers, words and both, with both circled, and a paper character holding a sheet marked my question looking up at it">
      <Floor y={floor} x1={30} x2={770} seed={201} />
      <path d={`M${post - 7} 52h14v${floor - 52}h-14Z`} fill="url(#wood)" />
      <Ink d={handPoly([[post - 7, 52], [post + 7, 52], [post + 7, floor], [post - 7, floor]], { seed: 202, amp: 0.4, closed: true })} w={1.8} />

      {SIGNS.map((sign, i) => {
        const x0 = sign.dir > 0 ? post - 20 : post + 20
        const x1 = x0 + sign.dir * 190
        const tip = x1 + sign.dir * 30
        const pts = [[x0, sign.y], [x1, sign.y], [tip, sign.y + 22], [x1, sign.y + 44], [x0, sign.y + 44]]
        return (
          <Anim key={sign.label} className="s-pz2-sign" origin={[post, sign.y + 22]} style={{ '--i': i }}>
            <Poly points={pts} fill={TONES[sign.tone].tint} seed={210 + i * 3} sw={1.8} />
            <Hand x={(x0 + x1) / 2} y={sign.y + 31} size={24} anchor="middle" weight={700}>
              {sign.label}
            </Hand>
          </Anim>
        )
      })}
      <Ink d={handEllipse(post + 95, 208, 70, 30, { seed: 220, amp: 1 })} c={TONES.red.ink} w={2.2} className="s-pz2-sign-both" />

      <Hand x={712} y={98} size={20} anchor="middle" c={INK_SOFT}>
        quantitative
      </Hand>
      <Hand x={130} y={146} size={20} anchor="middle" c={INK_SOFT}>
        qualitative
      </Hand>
      <Hand x={712} y={214} size={20} anchor="middle" c={INK_SOFT}>
        mixed methods
      </Hand>

      <Shadow x={150} y={floor + 2} rx={32} ry={4} />
      <Place x={150} y={floor} s={1.5}>
        <g className="s-pz2-abhi">
          <Pip mood="focused" arms="hold" tone="amber" look={1.6} seed={230}>
            <Sheet x={-13} y={-31} w={26} h={28} tone="green" lines={2} fold={7} seed={231} sw={1.3} />
          </Pip>
        </g>
      </Place>
      <Hand x={150} y={floor - 112} size={18} anchor="middle" weight={700}>
        my question
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Every school on the list, four picked by lottery.
   ------------------------------------------------------------------ */

const PICKED = [3, 8, 14, 21]

function School({ x, y, seed, tone }) {
  return (
    <g>
      <Poly points={[[x - 4, y + 12], [x + 18, y - 2], [x + 40, y + 12]]} fill={TONES.red.mid} seed={seed} sw={1.4} />
      <Box x={x} y={y + 12} w={36} h={24} fill={tone} seed={seed + 1} sw={1.4} />
      <path d={`M${x + 14} ${y + 24}h8v12h-8Z`} fill={TONES.brown.mid} />
    </g>
  )
}

const sampleCss = `
.s-pz3-ring { animation: s-pz3-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 8s); }
.s-pz3-slip { animation: s-pz3-hop 2.6s ease-in-out infinite; }
@keyframes s-pz3-draw {
  0%, 15% { stroke-dashoffset: 1; }
  28%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-pz3-hop {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(-6deg); }
}
`

export function SampleScene() {
  const floor = 300
  const gx = 290
  const gy = 70
  return (
    <Scene w={800} h={300} top={20} css={sampleCss} className="s-pz3" label="A grid of twenty four small school buildings, four of them circled in red, while a paper character beside a bowl of paper slips holds one up, labelled all schools in the block and four by lottery">
      <Floor y={floor} x1={30} x2={770} seed={301} />
      <Hand x={500} y={52} size={22} anchor="middle" c={INK_SOFT}>
        all schools in the block
      </Hand>
      {Array.from({ length: 24 }, (_, n) => {
        const col = n % 6
        const row = Math.floor(n / 6)
        const x = gx + col * 72
        const y = gy + row * 52
        const picked = PICKED.indexOf(n)
        return (
          <g key={n}>
            <School x={x} y={y} seed={310 + n * 3} tone={picked >= 0 ? TONES.amber.tint : PAPER} />
            {picked >= 0 ? (
              <path
                className="s-pz3-ring"
                style={{ '--i': picked }}
                d={handEllipse(x + 18, y + 18, 32, 26, { seed: 400 + n, amp: 0.8 })}
                pathLength="1"
                strokeDasharray="1"
                fill="none"
                stroke={TONES.red.ink}
                strokeWidth={2.4}
                strokeLinecap="round"
              />
            ) : null}
          </g>
        )
      })}
      <Hand x={140} y={110} size={22} anchor="middle" weight={700} c={TONES.red.deep}>
        four by lottery
      </Hand>

      <path d="M70 266Q70 296 110 296Q150 296 150 266Z" fill={TONES.blue.tint} />
      <Ink d="M64 266Q70 300 110 300Q150 300 156 266Z" w={1.8} />
      <Ink d={handLine(62, 266, 158, 266, 420, 0.4)} w={1.8} />
      <Sheet x={88} y={250} w={16} h={18} lines={0} fold={4} seed={421} sw={1.1} />
      <Sheet x={112} y={252} w={16} h={16} lines={0} fold={4} seed={422} sw={1.1} />

      <Shadow x={210} y={floor + 2} rx={30} ry={4} />
      <Place x={210} y={floor} s={1.45}>
        <Pip mood="happy" arms="carry" tone="amber" look={1.4} seed={430} />
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-pz3-slip">
          <Sheet x={198} y={168} w={24} h={22} tone="amber" lines={1} fold={5} seed={431} sw={1.3} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The procedure, step by step, and the plate on the scale.
   ------------------------------------------------------------------ */

const STEPS = ['weigh serving', 'serve meal', 'weigh leftovers', 'taste rating', 'interviews']

const procedureCss = `
.s-pz4 .s-pz4-tick { animation: s-pz4-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 8s); }
.s-pz4 .scale-beam { animation: s-pz4-tip 5s ease-in-out infinite; }
.s-pz4-abhi .pip-arm-r { animation: s-pz4-write 0.8s ease-in-out infinite alternate; }
@keyframes s-pz4-draw {
  0%, 20% { stroke-dashoffset: 1; }
  30%, 90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-pz4-tip {
  0%, 100% { transform: rotate(0deg); }
  30%, 60% { transform: rotate(-5deg); }
}
@keyframes s-pz4-write {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
`

export function ProcedureScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={procedureCss} className="s-pz4" label="A card headed procedure lists weigh serving, serve meal, weigh leftovers, taste rating and interviews, each numbered and ticked, beside a balance scale weighing a plate of food to the gram, while a paper character in glasses writes it all down">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Box x={50} y={44} w={260} h={240} r={6} fill={PAPER} seed={402} sw={1.9} />
      <Hand x={180} y={80} size={24} anchor="middle" weight={700}>
        procedure
      </Hand>
      {STEPS.map((item, i) => {
        const y = 108 + i * 36
        return (
          <g key={item}>
            <Box x={68} y={y} w={18} h={18} seed={410 + i * 3} sw={1.4} fill={PAPER} />
            <path
              className="s-pz4-tick"
              style={{ '--i': i }}
              d={`M70 ${y + 9}q3 2 5 7q5 -11 13 -16`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke="#3f8f4f"
              strokeWidth={2.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Hand x={98} y={y + 16} size={20} weight={700}>
              {`${i + 1}. ${item}`}
            </Hand>
          </g>
        )
      })}

      <Scale
        x={480}
        y={floor}
        s={1.1}
        seed={420}
        left={
          <g>
            <Oval cx={394} cy={218} rx={24} ry={6} fill={PAPER} seed={421} sw={1.5} />
            <Oval cx={388} cy={212} rx={6} ry={4} fill={TONES.brown.mid} seed={422} sw={1.2} />
            <Oval cx={400} cy={213} rx={5} ry={3.5} fill={TONES.amber.mid} seed={423} sw={1.2} />
          </g>
        }
        right={
          <g>
            <Box x={556} y={206} w={18} h={14} fill={TONES.grey.mid} seed={424} sw={1.4} />
            <Box x={576} y={210} w={12} h={10} fill={TONES.grey.mid} seed={425} sw={1.3} />
          </g>
        }
      />
      <Hand x={480} y={130} size={20} anchor="middle" c={INK_SOFT}>
        to the gram
      </Hand>

      <Shadow x={700} y={floor + 2} rx={30} ry={4} />
      <Place x={700} y={floor} s={1.45} flip>
        <g className="s-pz4-abhi">
          <Pip mood="focused" arms="write" tone="amber" glasses look={1.2} seed={430}>
            <Sheet x={10} y={-30} w={20} h={24} lines={2} fold={6} seed={431} sw={1.2} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The analysis: software, test and the reason for it.
   ------------------------------------------------------------------ */

const analysisCss = `
.s-pz5 .chart-bar { animation: s-pz5-grow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s - 6s); }
.s-pz5-abhi .pip-arm-r { animation: s-pz5-type 0.5s ease-in-out infinite alternate; }
.s-pz5-abhi .pip-arm-l { animation: s-pz5-type 0.5s ease-in-out infinite alternate-reverse; }
@keyframes s-pz5-grow {
  0%, 5% { transform: scaleY(0); }
  20%, 85% { transform: scaleY(1); }
  95%, 100% { transform: scaleY(0); }
}
@keyframes s-pz5-type {
  from { transform: rotate(0deg); }
  to { transform: rotate(6deg); }
}
`

export function AnalysisScene() {
  const floor = 312
  const desk = 252
  const lx = 330
  const lw = 260
  const [ix, iy, iw, ih] = laptopScreen(lx, desk, lw)
  return (
    <Scene w={800} h={300} top={20} css={analysisCss} className="s-pz5" label="An open laptop on a desk shows a bar chart, with sticky notes beside it reading paired test, software version and p less than 0.05, while a paper character types at it">
      <Floor y={floor} x1={30} x2={770} seed={501} />
      <Legs x1={150} x2={620} top={desk + 20} floor={floor} seed={502} />
      <Desk y={desk} x1={130} x2={640} depth={20} seed={503} />
      <Laptop x={lx} y={desk} w={lw} seed={504}>
        <Chart x={ix + 26} y={iy + ih - 10} w={iw - 52} h={ih - 26} bars={[0.82, 0.5, 0.78, 0.46, 0.86, 0.52]} tone="green" seed={505} />
      </Laptop>

      <Place x={0} y={0}>
        <g transform="rotate(-4 520 110)">
          <Sticky x={490} y={70} w={120} h={60} tone="amber" lines={0} seed={510} />
          <Hand x={550} y={108} size={20} anchor="middle" weight={700}>
            paired test
          </Hand>
        </g>
        <g transform="rotate(3 650 160)">
          <Sticky x={620} y={130} w={120} h={60} tone="blue" lines={0} seed={511} />
          <Hand x={680} y={168} size={19} anchor="middle" weight={700}>
            name, version
          </Hand>
        </g>
        <g transform="rotate(-3 160 120)">
          <Sticky x={110} y={84} w={110} h={60} tone="pink" lines={0} seed={512} />
          <Hand x={165} y={122} size={21} anchor="middle" weight={700}>
            p &lt; 0.05
          </Hand>
        </g>
      </Place>

      <Shadow x={700} y={floor + 2} rx={30} ry={4} />
      <Place x={700} y={floor} s={1.45} flip>
        <g className="s-pz5-abhi">
          <Pip mood="focused" arms="hold" tone="amber" look={1.4} seed={520} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Ethics: the committee's stamp, a parent's consent, a child's yes.
   ------------------------------------------------------------------ */

const ethicsCss = `
.s-pz6-stamp { animation: s-pz6-press 5s ease-in-out infinite; }
.s-pz6-mark { animation: s-pz6-show 5s ease-in-out infinite; }
.s-pz6-child .pip-body { animation: s-pz6-hop 2.4s ease-in-out infinite; }
@keyframes s-pz6-press {
  0%, 15%, 85%, 100% { transform: translate(0, 0); }
  30% { transform: translate(-160px, -20px); }
  40%, 48% { transform: translate(-160px, 26px); }
  60% { transform: translate(-160px, -20px); }
}
@keyframes s-pz6-show {
  0%, 38% { opacity: 0; }
  45%, 95% { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes s-pz6-hop {
  0%, 60%, 100% { transform: translateY(0); }
  75% { transform: translateY(-6px); }
}
`

export function EthicsScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={ethicsCss} className="s-pz6" label="A rubber stamp presses ethics committee approved onto a study plan, and beside it a parent says I consent while a small child says yes, I will take part">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Sheet x={80} y={92} w={220} h={190} lines={0} fold={20} seed={602} sw={1.9} />
      <Hand x={180} y={128} size={22} anchor="middle" weight={700}>
        study plan
      </Hand>
      <Lines x={100} y={150} rows={[170, 150, 176, 120, 160]} gap={14} seed={603} />
      <g className="s-pz6-mark">
        <StampMark x={190} y={240} w={160} h={44} text="EC APPROVED" tone="green" rotate={-6} size={19} bg={PAPER} seed={604} />
      </g>
      <Place x={0} y={0}>
        <Anim className="s-pz6-stamp">
          <Stamp x={350} y={192} s={1} tone="green" seed={605} />
        </Anim>
      </Place>

      <Speech x={420} y={58} w={170} h={50} tx={500} ty={150} seed={610}>
        <Hand x={505} y={90} size={21} anchor="middle" weight={700}>
          I consent
        </Hand>
      </Speech>
      <Speech x={600} y={120} w={170} h={64} tx={650} ty={222} tone="amber" seed={611}>
        <Hand x={685} y={148} size={20} anchor="middle" weight={700}>
          yes, I will
        </Hand>
        <Hand x={685} y={172} size={20} anchor="middle" weight={700}>
          take part
        </Hand>
      </Speech>
      <Hand x={462} y={294} size={18} anchor="end" c={INK_SOFT}>
        parent
      </Hand>
      <Hand x={640} y={294} size={18} c={INK_SOFT}>
        child, 7 to 18
      </Hand>

      <Shadow x={500} y={floor + 2} rx={32} ry={4} />
      <Place x={500} y={floor} s={1.45}>
        <Pip mood="happy" arms="hold" tone="green" look={1.2} seed={620}>
          <Sheet x={-12} y={-30} w={24} h={26} lines={2} fold={6} seed={621} sw={1.3} />
        </Pip>
      </Place>
      <Shadow x={610} y={floor + 2} rx={20} ry={3} />
      <Place x={610} y={floor} s={0.95}>
        <g className="s-pz6-child">
          <Pip mood="grin" arms="wave" tone="pink" look={-1} seed={630} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The subheadings, in the order the work was done.
   ------------------------------------------------------------------ */

const PARTS = [
  { label: 'design', tone: 'grey' },
  { label: 'setting', tone: 'amber' },
  { label: 'sample', tone: 'green' },
  { label: 'tools', tone: 'blue' },
  { label: 'procedure', tone: 'pink' },
  { label: 'analysis', tone: 'red' },
  { label: 'ethics', tone: 'brown' },
]

const orderCss = `
.s-pz7-step { animation: s-pz7-rise 10s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 10s); transform-box: fill-box; transform-origin: 50% 100%; }
.s-pz7-guide .pip-arm-r { animation: s-pz7-point 2.5s ease-in-out infinite alternate; }
@keyframes s-pz7-rise {
  0%, 3% { transform: scaleY(0); opacity: 0; }
  9%, 74% { transform: scaleY(1); opacity: 1; }
  80%, 100% { transform: scaleY(1); opacity: 0; }
}
@keyframes s-pz7-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-12deg); }
}
`

export function OrderScene() {
  const floor = 330
  const bw = 88
  return (
    <Scene w={800} h={330} top={20} css={orderCss} className="s-pz7" label="Seven coloured blocks rise like a staircase from left to right, labelled design, setting, sample, tools, procedure, analysis and ethics, while a paper character points at them">
      <Floor y={floor} x1={20} x2={780} seed={701} />
      {PARTS.map((part, i) => {
        const x = 36 + i * (bw + 4)
        const h = 36 + i * 32
        const top = floor - h
        const t = TONES[part.tone]
        return (
          <g key={part.label} className="s-pz7-step" style={{ '--i': i }}>
            <rect x={x} y={top} width={bw} height={h} fill={t.tint} />
            <rect x={x} y={top} width={bw} height={8} fill={t.mid} />
            <Ink d={handPoly([[x, top], [x + bw, top], [x + bw, floor], [x, floor]], { seed: 710 + i * 3, amp: 0.4, closed: true })} w={1.6} c={t.deep} />
            <Hand x={x + bw / 2} y={top + 28} size={18} anchor="middle" weight={700}>
              {part.label}
            </Hand>
          </g>
        )
      })}

      <Hand x={190} y={80} size={22} anchor="middle" c={INK_SOFT}>
        past tense, and in
      </Hand>
      <Hand x={190} y={106} size={22} anchor="middle" c={INK_SOFT}>
        the order you did it
      </Hand>

      <Shadow x={738} y={floor + 2} rx={28} ry={4} />
      <Place x={738} y={floor} s={1.3} flip>
        <g className="s-pz7-guide">
          <Pip mood="happy" arms="point" tone="green" look={1.4} seed={730} />
        </g>
      </Place>
    </Scene>
  )
}
