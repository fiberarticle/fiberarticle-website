import {
  Anim,
  Arrow,
  Box,
  Chart,
  Cross,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Moon,
  PAPER,
  Pip,
  Place,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Speech,
  StampMark,
  TEXT_LINE,
  TONES,
  Tick,
  handLine,
} from '../../ink/index.js'

/* A phone, screen lit. Anchor: top-left. The screen carries `glow`. */
function Phone({ x, y, w = 30, h = 52, seed, glow }) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={5} fill={TONES.grey.deep} seed={seed} sw={1.6} />
      <rect className={glow} x={x + 4} y={y + 6} width={w - 8} height={h - 14} rx={2} fill={TONES.blue.mid} />
      <circle cx={x + w / 2} cy={y + h - 4} r={1.6} fill={TONES.grey.tint} />
    </g>
  )
}

/* A tick that draws itself in, inside a box at (x, y). */
function DrawnTick({ x, y, i, className }) {
  return (
    <path
      className={className}
      style={{ '--i': i }}
      d={`M${x + 2} ${y + 9}q3 2 5 7q5 -11 13 -16`}
      pathLength="1"
      strokeDasharray="1"
      fill="none"
      stroke="#3f8f4f"
      strokeWidth={2.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

/* ------------------------------------------------------------------
   1. A question asks, a hypothesis predicts, the data check.
   ------------------------------------------------------------------ */

const CARDS = [
  { x: 60, tone: 'amber', label: 'question asks' },
  { x: 315, tone: 'blue', label: 'hypothesis predicts' },
  { x: 570, tone: 'green', label: 'data check' },
]

const predictCss = `
.s-hyp1-arrow { animation: s-hyp1-show 6s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 6s); }
.s-hyp1 .chart-bar { animation: s-hyp1-grow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s - 6s); }
.s-hyp1-rohini .pip-body { animation: s-hyp1-bob 3.2s ease-in-out infinite; }
@keyframes s-hyp1-show {
  0%, 10% { opacity: 0.15; }
  25%, 85% { opacity: 1; }
  100% { opacity: 0.15; }
}
@keyframes s-hyp1-grow {
  0%, 30% { transform: scaleY(0.2); }
  50%, 85% { transform: scaleY(1); }
  100% { transform: scaleY(0.2); }
}
@keyframes s-hyp1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function PredictScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={predictCss} className="s-hyp1" label="Three cards in a row joined by arrows: a question mark labelled question asks, a sheet reading I expect labelled hypothesis predicts, and a bar chart labelled data check, with a paper character holding a sheet below">
      <Floor y={floor} x1={30} x2={770} seed={101} />

      {CARDS.map((card, i) => (
        <g key={card.label}>
          <Box x={card.x} y={42} w={170} h={120} r={8} fill={TONES[card.tone].tint} seed={110 + i * 4} sw={1.8} />
          <Hand x={card.x + 85} y={192} size={21} anchor="middle" weight={700} c={INK_SOFT}>
            {card.label}
          </Hand>
        </g>
      ))}

      <Hand x={145} y={130} size={72} anchor="middle" weight={700} c={TONES.amber.deep}>
        ?
      </Hand>

      <Sheet x={350} y={56} w={100} h={92} lines={0} fold={14} seed={120} sw={1.6} />
      <Hand x={396} y={92} size={21} anchor="middle" weight={700}>
        I expect
      </Hand>
      <Ink d={handLine(366, 112, 428, 112, 121, 0.35) + handLine(366, 128, 414, 128, 122, 0.35)} c={TEXT_LINE} w={1.6} />

      <Chart x={600} y={148} w={110} h={88} bars={[0.35, 0.55, 0.8]} tone="green" seed={130} />

      {[0, 1].map((i) => (
        <g key={i} className="s-hyp1-arrow" style={{ '--i': i }}>
          <Arrow from={[238 + i * 255, 102]} to={[306 + i * 255, 102]} bend={-0.12} seed={140 + i * 3} w={2} />
        </g>
      ))}

      <Shadow x={400} y={floor + 2} rx={28} ry={4} />
      <Place x={400} y={floor} s={1.2}>
        <g className="s-hyp1-rohini">
          <Pip mood="happy" arms="hold" tone="pink" look={0.6} seed={150}>
            <Sheet x={-12} y={-31} w={24} h={26} tone="blue" lines={2} fold={6} seed={151} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The checklist every hypothesis must pass.
   ------------------------------------------------------------------ */

const CHECKS = ['testable', 'could be proved wrong', 'specific', 'based on reading']

const checklistCss = `
.s-hyp2-tick { animation: s-hyp2-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 8s); }
.s-hyp2-guide .pip-arm-r { animation: s-hyp2-point 2.4s ease-in-out infinite alternate; }
.s-hyp2-rohini .pip-body { animation: s-hyp2-nod 3s ease-in-out infinite; }
@keyframes s-hyp2-draw {
  0%, 15% { stroke-dashoffset: 1; }
  28%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-hyp2-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-7deg); }
}
@keyframes s-hyp2-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function ChecklistScene() {
  const floor = 300
  const bx = 250
  return (
    <Scene w={800} h={300} top={20} css={checklistCss} className="s-hyp2" label="A clipboard headed good hypothesis lists testable, could be proved wrong, specific and based on reading, each box ticked in green, while a guide in glasses points at it and a paper character nods">
      <Floor y={floor} x1={30} x2={770} seed={201} />

      <Box x={bx} y={40} w={300} h={248} r={8} fill={TONES.brown.tint} seed={202} sw={1.9} />
      <Box x={bx + 14} y={54} w={272} h={222} r={4} fill={PAPER} seed={203} sw={1.5} />
      <Box x={bx + 110} y={30} w={80} h={22} r={4} fill={TONES.grey.mid} seed={204} sw={1.5} />
      <Hand x={bx + 150} y={92} size={24} anchor="middle" weight={700}>
        good hypothesis
      </Hand>
      {CHECKS.map((item, i) => {
        const y = 112 + i * 40
        return (
          <g key={item}>
            <Box x={bx + 34} y={y} w={20} h={20} seed={210 + i * 3} sw={1.4} fill={PAPER} />
            <DrawnTick x={bx + 34} y={y} i={i} className="s-hyp2-tick" />
            <Hand x={bx + 68} y={y + 17} size={20} weight={700}>
              {item}
            </Hand>
          </g>
        )
      })}

      <Shadow x={140} y={floor + 2} rx={30} ry={4} />
      <Place x={140} y={floor} s={1.5}>
        <g className="s-hyp2-guide">
          <Pip mood="focused" arms="point" tone="blue" glasses look={1.4} seed={230} />
        </g>
      </Place>

      <Shadow x={670} y={floor + 2} rx={30} ry={4} />
      <Place x={670} y={floor} s={1.5}>
        <g className="s-hyp2-rohini">
          <Pip mood="happy" arms="hold" tone="pink" look={-1.4} seed={240}>
            <Sheet x={-12} y={-31} w={24} h={26} tone="blue" lines={2} fold={6} seed={241} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Independent on one side, dependent on the other.
   ------------------------------------------------------------------ */

const variablesCss = `
.s-hyp3-glow { animation: s-hyp3-glow 4s ease-in-out infinite; }
.s-hyp3-meter { animation: s-hyp3-drop 4s ease-in-out infinite; }
.s-hyp3-link { animation: s-hyp3-blink 4s ease-in-out infinite; }
.s-hyp3-crowd .pip-body { animation: s-hyp3-sway 3s ease-in-out infinite; animation-delay: calc(var(--i) * -1s); }
@keyframes s-hyp3-glow {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
@keyframes s-hyp3-drop {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(0.45); }
}
@keyframes s-hyp3-blink {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
@keyframes s-hyp3-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function VariablesScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={variablesCss} className="s-hyp3" label="A box labelled independent holds a glowing phone and the words phone time after lights out, an arrow marked linked to points to a box labelled dependent with a moon and a sleep meter, and three paper students stand below under the words who, one hostel">
      <Floor y={floor} x1={30} x2={770} seed={301} />

      <Box x={60} y={40} w={260} h={150} r={8} fill={TONES.amber.tint} seed={302} sw={1.8} />
      <Hand x={190} y={72} size={22} anchor="middle" weight={700} c={TONES.amber.deep}>
        independent
      </Hand>
      <Phone x={84} y={92} seed={303} glow="s-hyp3-glow" />
      <Hand x={130} y={120} size={20} weight={700}>
        phone time
      </Hand>
      <Hand x={130} y={146} size={20} weight={700}>
        after lights out
      </Hand>

      <Box x={480} y={40} w={260} h={150} r={8} fill={TONES.blue.tint} seed={304} sw={1.8} />
      <Hand x={610} y={72} size={22} anchor="middle" weight={700} c={TONES.blue.deep}>
        dependent
      </Hand>
      <Moon x={512} y={116} r={20} seed={305} />
      <Hand x={578} y={114} size={20} weight={700}>
        sleep quality
      </Hand>
      <Box x={560} y={132} w={150} h={18} r={4} fill={PAPER} seed={306} sw={1.4} />
      <Place x={0} y={0}>
        <Anim className="s-hyp3-meter" origin={[562, 141]}>
          <rect x={562} y={134} width={146} height={14} rx={3} fill="url(#fill-green)" />
        </Anim>
      </Place>

      <g className="s-hyp3-link">
        <Arrow from={[330, 116]} to={[470, 116]} bend={-0.15} seed={310} w={2.2} head={12} />
      </g>
      <Hand x={400} y={88} size={19} anchor="middle" c={INK_SOFT}>
        linked to?
      </Hand>

      <Hand x={400} y={220} size={19} anchor="middle" c={INK_SOFT}>
        who: one hostel
      </Hand>
      {[330, 400, 470].map((x, i) => (
        <g key={x}>
          <Shadow x={x} y={floor + 2} rx={18} ry={3} />
          <Place x={x} y={floor} s={0.9} flip={i === 2}>
            <g className="s-hyp3-crowd" style={{ '--i': i }}>
              <Pip mood={i === 1 ? 'sleepy' : 'happy'} arms="down" tone={['pink', 'green', 'amber'][i]} look={i === 2 ? 1 : -1} seed={320 + i * 10} />
            </g>
          </Place>
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Six steps up, from question to null and alternative.
   ------------------------------------------------------------------ */

const STEPS = ['question', 'read', 'variables', 'predict', 'check', 'H0 and H1']
const STEP_W = 108
const STEP_RISE = 32
const STEP_X = 76
const STEP_TOP = 268

const stepsCss = `
.s-hyp4-climber { animation: s-hyp4-climb 9s ease-in-out infinite; }
.s-hyp4-climber .pip-body { animation: s-hyp4-hop 1.5s ease-in-out infinite; }
@keyframes s-hyp4-climb {
  0%, 6% { transform: translate(-540px, 160px); opacity: 1; }
  16%, 20% { transform: translate(-432px, 128px); }
  30%, 34% { transform: translate(-324px, 96px); }
  44%, 48% { transform: translate(-216px, 64px); }
  58%, 62% { transform: translate(-108px, 32px); }
  72%, 88% { transform: translate(0, 0); opacity: 1; }
  94% { transform: translate(0, 0); opacity: 0; }
  96% { transform: translate(-540px, 160px); opacity: 0; }
  100% { transform: translate(-540px, 160px); opacity: 1; }
}
@keyframes s-hyp4-hop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function StepsScene() {
  const floor = 300
  const topX = STEP_X + 5 * STEP_W + STEP_W / 2
  const topY = STEP_TOP - 5 * STEP_RISE
  return (
    <Scene w={800} h={300} top={20} css={stepsCss} className="s-hyp4" label="Six steps rising from left to right, labelled question, read, variables, predict, check, and H0 and H1, with a paper character holding a sheet climbing them one by one">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      {STEPS.map((label, i) => {
        const x = STEP_X + i * STEP_W
        const y = STEP_TOP - i * STEP_RISE
        const tone = ['amber', 'green', 'blue', 'pink', 'amber', 'green'][i]
        return (
          <g key={label}>
            <Box x={x} y={y} w={STEP_W} h={floor - y} fill={TONES[tone].tint} seed={410 + i * 3} sw={1.7} />
            <Hand x={x + STEP_W / 2} y={y + 24} size={18} anchor="middle" weight={700}>
              {label}
            </Hand>
          </g>
        )
      })}

      <Place x={0} y={0}>
        <Anim className="s-hyp4-climber">
          <Place x={topX} y={topY} s={1.05}>
            <Pip mood="grin" arms="hold" tone="pink" look={1.2} seed={440}>
              <Sheet x={-11} y={-30} w={22} h={24} tone="blue" lines={2} fold={6} seed={441} sw={1.2} />
            </Pip>
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Four pairs of types, Rohini's choices ticked.
   ------------------------------------------------------------------ */

const PAIRS = [
  { left: 'simple', right: 'complex', pick: 'left' },
  { left: 'directional', right: 'non-directional', pick: 'left' },
  { left: 'associative', right: 'causal', pick: 'left' },
  { left: 'null', right: 'alternative', pick: 'both' },
]

const typesCss = `
.s-hyp5-row { animation: s-hyp5-lift 8s ease-in-out infinite; animation-delay: calc(var(--i) * 2s - 8s); }
.s-hyp5-rohini .pip-arm-r { animation: s-hyp5-point 2.4s ease-in-out infinite alternate; }
@keyframes s-hyp5-lift {
  0%, 100% { transform: translateY(0); }
  10%, 20% { transform: translateY(-4px); }
  30% { transform: translateY(0); }
}
@keyframes s-hyp5-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
`

export function TypesScene() {
  const floor = 300
  const lx = 190
  const rx = 440
  const cw = 200
  return (
    <Scene w={800} h={300} top={20} css={typesCss} className="s-hyp5" label="Four rows of paired cards, simple or complex, directional or non-directional, associative or causal, and null and alternative, with simple, directional, associative and both null and alternative ticked, and a paper character pointing at them">
      <Floor y={floor} x1={30} x2={770} seed={501} />

      {PAIRS.map((pair, i) => {
        const y = 40 + i * 62
        const ticks = pair.pick === 'both' ? [lx, rx] : [lx]
        return (
          <g key={pair.left} className="s-hyp5-row" style={{ '--i': i }}>
            <Box x={lx} y={y} w={cw} h={44} r={6} fill={TONES.blue.tint} seed={510 + i * 5} sw={1.6} />
            <Box x={rx} y={y} w={cw} h={44} r={6} fill={pair.pick === 'both' ? TONES.blue.tint : PAPER} seed={512 + i * 5} sw={1.6} />
            <Hand x={lx + cw / 2} y={y + 30} size={21} anchor="middle" weight={700}>
              {pair.left}
            </Hand>
            <Hand x={rx + cw / 2} y={y + 30} size={21} anchor="middle" weight={700} c={pair.pick === 'both' ? undefined : INK_SOFT}>
              {pair.right}
            </Hand>
            <Hand x={(lx + cw + rx) / 2} y={y + 29} size={18} anchor="middle" c={INK_SOFT}>
              {pair.pick === 'both' ? 'and' : 'or'}
            </Hand>
            {ticks.map((tx) => (
              <Tick key={tx} x={tx + cw - 16} y={y + 22} s={0.9} />
            ))}
          </g>
        )
      })}

      <Shadow x={96} y={floor + 2} rx={28} ry={4} />
      <Place x={96} y={floor} s={1.4}>
        <g className="s-hyp5-rohini">
          <Pip mood="focused" arms="point" tone="pink" look={1.4} seed={540} />
        </g>
      </Place>

      <Shadow x={720} y={floor + 2} rx={28} ry={4} />
      <Place x={720} y={floor} s={1.3} flip>
        <Pip mood="happy" arms="hold" tone="blue" glasses look={1.2} seed={550}>
          <Sheet x={-11} y={-30} w={22} h={24} tone="pink" lines={2} fold={6} seed={551} sw={1.2} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The scale: H0 against H1, and the sceptic who must be convinced.
   ------------------------------------------------------------------ */

const nullCss = `
.s-hyp6 .scale-beam { animation: s-hyp6-tip 6s ease-in-out infinite; }
.s-hyp6-guide .pip-body { animation: s-hyp6-lean 4s ease-in-out infinite; }
.s-hyp6-rohini .pip-arm-r { animation: s-hyp6-offer 2s ease-in-out infinite alternate; }
@keyframes s-hyp6-tip {
  0%, 15%, 100% { transform: rotate(0deg); }
  40%, 75% { transform: rotate(7deg); }
}
@keyframes s-hyp6-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
@keyframes s-hyp6-offer {
  from { transform: rotate(0deg); }
  to { transform: rotate(-6deg); }
}
`

export function NullScene() {
  const floor = 300
  const cx = 400
  const s = 1.3
  const top = floor - 120 * s
  const arm = 78 * s
  const panY = top + 52 * s
  return (
    <Scene w={800} h={300} top={20} css={nullCss} className="s-hyp6" label="A balance scale with H0, no relationship, in the left pan and H1, a relationship, in the right pan, tipping toward H1, between a sceptical guide saying convince me and a paper character offering a chart of her data">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Scale
        x={cx}
        y={floor}
        s={s}
        seed={610}
        left={
          <Hand x={cx - arm} y={panY - 6} size={28} anchor="middle" weight={700} c={TONES.red.deep}>
            H0
          </Hand>
        }
        right={
          <Hand x={cx + arm} y={panY - 6} size={28} anchor="middle" weight={700} c={TONES.green.deep}>
            H1
          </Hand>
        }
      />
      <Hand x={cx - arm} y={top - 22} size={18} anchor="middle" c={INK_SOFT}>
        no relationship
      </Hand>
      <Hand x={cx + arm} y={top - 22} size={18} anchor="middle" c={INK_SOFT}>
        a relationship
      </Hand>
      <Hand x={cx} y={60} size={22} anchor="middle" weight={700}>
        p below 0.05?
      </Hand>

      <Speech x={40} y={58} w={160} h={52} tx={112} ty={150} seed={620}>
        <Hand x={120} y={92} size={21} anchor="middle" weight={700}>
          convince me
        </Hand>
      </Speech>
      <Shadow x={110} y={floor + 2} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.45}>
        <g className="s-hyp6-guide">
          <Pip mood="focused" arms="hips" tone="blue" glasses look={1.4} seed={630} />
        </g>
      </Place>

      <Shadow x={690} y={floor + 2} rx={30} ry={4} />
      <Place x={690} y={floor} s={1.45} flip>
        <g className="s-hyp6-rohini">
          <Pip mood="happy" arms="point" tone="pink" look={1.4} seed={640} />
        </g>
      </Place>
      <Box x={600} y={92} w={110} h={80} r={6} fill={PAPER} seed={650} sw={1.6} />
      <Chart x={614} y={164} w={84} h={60} bars={[0.85, 0.6, 0.35]} tone="pink" seed={651} />
      <Hand x={655} y={86} size={18} anchor="middle" c={INK_SOFT}>
        my data
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. An opinion crossed out, a hypothesis approved.
   ------------------------------------------------------------------ */

const examplesCss = `
.s-hyp7-cross { animation: s-hyp7-show 8s ease-in-out infinite; }
.s-hyp7-stamp { animation: s-hyp7-press 8s ease-in-out infinite; }
.s-hyp7-rohini .pip-arm-r { animation: s-hyp7-write 0.8s ease-in-out infinite alternate; }
@keyframes s-hyp7-show {
  0%, 10% { opacity: 0; }
  20%, 90% { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes s-hyp7-press {
  0%, 45% { transform: scale(1.25); opacity: 0; }
  55%, 90% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}
@keyframes s-hyp7-write {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
`

export function ExamplesScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={examplesCss} className="s-hyp7" label="A sheet reading phones are bad, crossed out in red and labelled opinion, and an arrow to a second sheet reading more phone time, poorer sleep score, in one hostel, ticked and stamped approved, with a paper character writing between them">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Sheet x={60} y={40} w={220} h={170} lines={0} fold={20} seed={702} sw={1.8} />
      <Hand x={164} y={110} size={24} anchor="middle" weight={700}>
        phones are
      </Hand>
      <Hand x={164} y={142} size={24} anchor="middle" weight={700}>
        bad
      </Hand>
      <g className="s-hyp7-cross">
        <Cross x={170} y={124} s={4.2} w={3} seed={703} />
      </g>
      <Hand x={170} y={238} size={20} anchor="middle" weight={700} c={TONES.red.deep}>
        opinion
      </Hand>

      <Arrow from={[300, 126]} to={[470, 126]} bend={-0.18} seed={710} w={2.2} head={12} />

      <Sheet x={490} y={40} w={250} h={170} lines={0} fold={20} seed={720} sw={1.8} />
      <Hand x={606} y={92} size={21} anchor="middle" weight={700}>
        more phone time,
      </Hand>
      <Hand x={606} y={120} size={21} anchor="middle" weight={700}>
        poorer sleep score,
      </Hand>
      <Hand x={606} y={148} size={21} anchor="middle" weight={700}>
        in one hostel
      </Hand>
      <Tick x={712} y={78} s={1.2} />
      <Place x={0} y={0}>
        <Anim className="s-hyp7-stamp" origin={[640, 184]}>
          <StampMark x={640} y={184} w={136} h={38} text="APPROVED" tone="green" rotate={-6} size={18} bg={PAPER} seed={730} />
        </Anim>
      </Place>
      <Hand x={615} y={238} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
        hypothesis
      </Hand>

      <Shadow x={385} y={floor + 2} rx={28} ry={4} />
      <Place x={385} y={floor} s={1.2}>
        <g className="s-hyp7-rohini">
          <Pip mood="focused" arms="write" tone="pink" look={1.2} seed={740}>
            <Sheet x={10} y={-30} w={20} h={24} lines={2} fold={6} seed={741} sw={1.2} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
