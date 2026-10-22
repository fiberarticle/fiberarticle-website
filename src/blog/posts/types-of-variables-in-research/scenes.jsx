import {
  Anim,
  Arrow,
  Box,
  Chai,
  Clock,
  Cross,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pencil,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Sun,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
  handPoly,
} from '../../ink/index.js'
import { Gauge, Mat } from './hero.jsx'

/* ------------------------------------------------------------------
   1. Five clerks, five readings: blood pressure varies.
   ------------------------------------------------------------------ */

const variableCss = `
.s-tvr1-tag { animation: s-tvr1-pop 5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s); }
@keyframes s-tvr1-pop {
  0%, 100% { transform: translateY(0); }
  12% { transform: translateY(-6px); }
  24% { transform: translateY(0); }
}
.s-tvr1-pip .pip-body { animation: s-tvr1-sway 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * -0.5s); }
@keyframes s-tvr1-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(2.5deg); }
}
`

const CLERKS = [
  ['128', 'amber'],
  ['146', 'pink'],
  ['135', 'blue'],
  ['152', 'green'],
  ['131', 'red'],
]

export function VariableScene() {
  const FLOOR = 320
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={variableCss}
      className="s-tvr1"
      label="Five paper characters stand in a row, each with a tag above showing a different blood pressure reading, 128, 146, 135, 152 and 131, under the words blood pressure varies"
    >
      <Floor y={FLOOR} x1={40} x2={760} seed={101} />
      <Hand x={400} y={66} size={30} anchor="middle" weight={700}>
        blood pressure varies
      </Hand>
      <Hand x={400} y={94} size={19} anchor="middle" c={INK_SOFT}>
        so it is a variable
      </Hand>
      {CLERKS.map(([reading, tone], i) => {
        const x = 130 + i * 135
        return (
          <g key={i}>
            <Place x={0} y={0}>
              <Anim className="s-tvr1-tag" style={{ '--i': i }}>
                <Box x={x - 40} y={126} w={80} h={42} r={8} fill={PAPER} seed={110 + i} />
                <Type x={x} y={155} size={22} anchor="middle" weight={700}>
                  {reading}
                </Type>
                <Ink d={handLine(x, 170, x, 200, 120 + i, 0.3)} c={INK_SOFT} w={1.2} dash="3 4" />
              </Anim>
            </Place>
            <Shadow x={x} y={FLOOR + 3} rx={26} ry={4} />
            <Place x={x} y={FLOOR} s={1.4}>
              <g className="s-tvr1-pip" style={{ '--i': i }}>
                <Pip mood={i === 3 ? 'worried' : 'happy'} arms="down" tone={tone} look={i < 2 ? 1.2 : -1.2} seed={130 + i} />
              </g>
            </Place>
          </g>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Independent to dependent: the arrow only goes one way.
   ------------------------------------------------------------------ */

const ivdvCss = `
.s-tvr2-go { animation: s-tvr2-push 3.6s ease-in-out infinite; }
@keyframes s-tvr2-push {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
.s-tvr2-needle { animation: s-tvr2-drop 3.6s ease-in-out infinite; }
@keyframes s-tvr2-drop {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-30deg); }
}
.s-tvr2-no { animation: s-tvr2-blink 3.6s ease-in-out infinite; }
@keyframes s-tvr2-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
`

export function IndependentDependentScene() {
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={ivdvCss}
      className="s-tvr2"
      label="A box labelled independent, what you change, holding a yoga mat, with a bold arrow to a blood pressure dial labelled dependent, what you measure, and below it a dashed arrow going back the other way, crossed out"
    >
      <Hand x={160} y={70} size={26} anchor="middle" weight={700}>
        independent
      </Hand>
      <Hand x={160} y={96} size={19} anchor="middle" c={INK_SOFT}>
        what you change
      </Hand>
      <Box x={60} y={112} w={200} h={110} r={14} fill={TONES.amber.tint} seed={201} sw={2} />
      <Hand x={160} y={162} size={30} anchor="middle" weight={700}>
        yoga
      </Hand>
      <Mat x={106} y={204} w={100} seed={202} />

      <Place x={0} y={0}>
        <Anim className="s-tvr2-go">
          <Arrow from={[272, 160]} to={[500, 160]} bend={-0.06} seed={203} w={3} head={16} />
        </Anim>
      </Place>
      <Hand x={386} y={130} size={20} anchor="middle" c={INK_SOFT}>
        causes a change in
      </Hand>

      <Hand x={630} y={70} size={26} anchor="middle" weight={700}>
        dependent
      </Hand>
      <Hand x={630} y={96} size={19} anchor="middle" c={INK_SOFT}>
        what you measure
      </Hand>
      <Gauge x={630} y={186} r={66} needle="s-tvr2-needle" reading="BP" seed={204} />

      <g className="s-tvr2-no">
        <Arrow from={[500, 280]} to={[272, 280]} bend={0.06} seed={205} w={2} dash="7 7" c={INK_SOFT} />
        <Cross x={386} y={278} s={1.3} seed={206} />
      </g>
      <Hand x={386} y={320} size={18} anchor="middle" c={TONES.red.deep}>
        BP does not decide who did yoga
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Held constant: the same hour, the same monitor, no tea.
   ------------------------------------------------------------------ */

const controlCss = `
.s-tvr3-lock { animation: s-tvr3-click 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-tvr3-click {
  0%, 100% { transform: translateY(0); }
  15% { transform: translateY(-5px); }
  30% { transform: translateY(0); }
}
.s-tvr3-pip .pip-body { animation: s-tvr3-rest 4s ease-in-out infinite; }
@keyframes s-tvr3-rest {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
`

/* A small padlock. Anchor: centre of the body. */
function Padlock({ x, y, seed = 1 }) {
  return (
    <g>
      <Ink d={`M${x - 9} ${y - 8}V${y - 16}A9 9 0 0 1 ${x + 9} ${y - 16}V${y - 8}`} w={2.4} />
      <Box x={x - 14} y={y - 8} w={28} h={22} r={4} fill={TONES.amber.mid} seed={seed} sw={1.8} />
      <Oval cx={x} cy={y + 2} rx={2.6} fill={INK} stroke={null} />
    </g>
  )
}

export function ControlScene() {
  const FLOOR = 320
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={controlCss}
      className="s-tvr3"
      label="Three things held constant, each under a padlock: a clock at nine, one digital blood pressure monitor, and a glass of chai crossed out, beside a paper character resting on a chair before the reading"
    >
      <Hand x={330} y={60} size={28} anchor="middle" weight={700}>
        held constant
      </Hand>

      {/* the same hour */}
      <g className="s-tvr3-lock" style={{ '--i': 0 }}>
        <Padlock x={110} y={108} seed={301} />
      </g>
      <Clock x={110} y={196} r={44} seed={302} />
      <Hand x={110} y={284} size={19} anchor="middle">
        9 to 10 am
      </Hand>

      {/* the same monitor */}
      <g className="s-tvr3-lock" style={{ '--i': 1 }}>
        <Padlock x={330} y={108} seed={303} />
      </g>
      <Box x={276} y={150} w={108} h={92} r={10} fill={TONES.grey.tint} seed={304} sw={2} />
      <Box x={290} y={164} w={80} h={36} r={4} fill={TONES.blue.tint} seed={305} sw={1.4} />
      <Type x={330} y={189} size={18} anchor="middle" weight={700}>
        120/80
      </Type>
      <Oval cx={330} cy={222} rx={9} fill={TONES.red.mid} seed={306} sw={1.4} />
      <Hand x={330} y={284} size={19} anchor="middle">
        one monitor
      </Hand>

      {/* no tea */}
      <g className="s-tvr3-lock" style={{ '--i': 2 }}>
        <Padlock x={530} y={108} seed={307} />
      </g>
      <Chai x={530} y={240} s={1.3} steam seed={308} />
      <Cross x={530} y={200} s={2.2} seed={309} />
      <Hand x={530} y={284} size={19} anchor="middle">
        no tea first
      </Hand>

      {/* resting on a chair */}
      <Floor y={FLOOR} x1={620} x2={780} seed={310} />
      <Ink d={handLine(660, 262, 740, 262, 311, 0.4) + handLine(664, 262, 664, FLOOR, 312, 0.4) + handLine(736, 262, 736, FLOOR, 313, 0.4) + handLine(736, 262, 744, 196, 314, 0.4)} w={2.4} c={TONES.brown.ink} />
      <Place x={700} y={262} s={1.15}>
        <g className="s-tvr3-pip">
          <Pip mood="sleepy" arms="hold" tone="blue" seed={315} />
        </g>
      </Place>
      <Hand x={700} y={140} size={18} anchor="middle" c={INK_SOFT}>
        5 minutes rest
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The hidden third factor: heat behind iced coffee and heat stroke.
   ------------------------------------------------------------------ */

const confoundCss = `
.s-tvr4 .sun-rays { animation: s-tvr4-spin 12s linear infinite; transform-box: fill-box; transform-origin: center; }
@keyframes s-tvr4-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.s-tvr4-push { animation: s-tvr4-pulse 3s ease-in-out infinite; }
@keyframes s-tvr4-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.s-tvr4-pip .pip-body { animation: s-tvr4-wilt 3s ease-in-out infinite; }
@keyframes s-tvr4-wilt {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
`

/* A tall glass of iced coffee with ice cubes and a straw. Anchor: bottom centre. */
function IcedCoffee({ x, y, seed = 1 }) {
  const glass = [
    [x - 26, y - 100],
    [x + 26, y - 100],
    [x + 20, y],
    [x - 20, y],
  ]
  return (
    <g>
      <path d={`M${x - 24} ${y - 78}L${x + 24} ${y - 78}L${x + 20} ${y}L${x - 20} ${y}Z`} fill="url(#chai)" />
      <Box x={x - 16} y={y - 86} w={14} h={14} r={2} fill="#eef5fb" seed={seed} sw={1.2} />
      <Box x={x + 2} y={y - 74} w={14} h={14} r={2} fill="#eef5fb" seed={seed + 1} sw={1.2} />
      <Ink d={handLine(x + 8, y - 70, x + 22, y - 128, seed + 2, 0.3)} c={TONES.red.ink} w={3.4} />
      <Ink d={handPoly(glass, { seed: seed + 3, amp: 0.4, closed: true })} w={2} />
    </g>
  )
}

export function ConfoundScene() {
  const FLOOR = 320
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={confoundCss}
      className="s-tvr4"
      label="A hot sun labelled temperature sends arrows down to a glass of iced coffee and to a sweating paper character labelled heat stroke, while a dashed arrow from the coffee to the character is crossed out"
    >
      <Sun x={400} y={86} r={36} seed={401} />
      <Hand x={400} y={160} size={24} anchor="middle" weight={700} c={TONES.amber.deep}>
        temperature
      </Hand>
      <g className="s-tvr4-push">
        <Arrow from={[352, 120]} to={[214, 186]} bend={0.12} seed={402} w={2.4} c={TONES.amber.deep} />
        <Arrow from={[448, 120]} to={[584, 186]} bend={-0.12} seed={403} w={2.4} c={TONES.amber.deep} />
      </g>

      <Floor y={FLOOR} x1={60} x2={740} seed={404} />
      <IcedCoffee x={170} y={FLOOR} seed={405} />
      <Hand x={250} y={250} size={20}>
        iced coffee sales
      </Hand>

      <Shadow x={630} y={FLOOR + 3} rx={28} ry={4} />
      <Place x={630} y={FLOOR} s={1.45}>
        <g className="s-tvr4-pip">
          <Pip mood="worried" arms="down" tone="red" look={-1.4} seed={406} />
        </g>
      </Place>
      <Oval cx={664} cy={210} rx={3} ry={5} fill={TONES.blue.mid} seed={407} sw={1} />
      <Oval cx={600} cy={222} rx={2.6} ry={4.4} fill={TONES.blue.mid} seed={408} sw={1} />
      <Hand x={520} y={250} size={20} anchor="end">
        heat stroke
      </Hand>

      <Arrow from={[300, 290]} to={[500, 290]} bend={-0.05} seed={409} w={1.8} dash="7 7" c={INK_SOFT} />
      <Cross x={400} y={288} s={1.3} seed={410} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. A mediator sits on the path; a moderator turns a dial on it.
   ------------------------------------------------------------------ */

const mediatorCss = `
.s-tvr5-knob { animation: s-tvr5-turn 5s ease-in-out infinite; }
@keyframes s-tvr5-turn {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(70deg); }
}
.s-tvr5-flow { animation: s-tvr5-flow 3s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s); }
@keyframes s-tvr5-flow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
`

function Node({ x, y, w = 120, text, tone, seed }) {
  return (
    <g>
      <Box x={x - w / 2} y={y - 26} w={w} h={52} r={10} fill={TONES[tone].tint} seed={seed} sw={2} />
      <Hand x={x} y={y + 9} size={24} anchor="middle" weight={700}>
        {text}
      </Hand>
    </g>
  )
}

export function MediatorModeratorScene() {
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={mediatorCss}
      className="s-tvr5"
      label="Two rows. Top, labelled mediator: yoga, then stress, then BP, joined by arrows, with stress sitting on the path. Bottom, labelled moderator: yoga with an arrow to BP and a dial labelled age turning on the arrow to make the effect stronger or weaker"
    >
      <Hand x={60} y={72} size={22} weight={700} c={TONES.pink.deep}>
        mediator: how it works
      </Hand>
      <Node x={150} y={124} text="yoga" tone="amber" seed={501} />
      <Node x={400} y={124} text="stress" tone="pink" seed={502} />
      <Node x={650} y={124} text="BP" tone="red" seed={503} />
      <g className="s-tvr5-flow" style={{ '--i': 0 }}>
        <Arrow from={[214, 124]} to={[334, 124]} bend={-0.08} seed={504} w={2.4} />
      </g>
      <g className="s-tvr5-flow" style={{ '--i': 1 }}>
        <Arrow from={[464, 124]} to={[584, 124]} bend={-0.08} seed={505} w={2.4} />
      </g>

      <Ink d={handLine(40, 180, 760, 180, 506, 1)} c={TEXT_LINE} w={1.4} />

      <Hand x={60} y={216} size={22} weight={700} c={TONES.blue.deep}>
        moderator: for whom
      </Hand>
      <Node x={150} y={272} text="yoga" tone="amber" seed={507} />
      <Node x={650} y={272} text="BP" tone="red" seed={508} />
      <Arrow from={[214, 272]} to={[584, 272]} bend={-0.03} seed={509} w={2.4} />
      <Ink d={handLine(400, 270, 400, 248, 510, 0.3)} w={1.8} />
      <Oval cx={400} cy={228} rx={22} fill={TONES.blue.tint} seed={511} sw={2} />
      <Anim className="s-tvr5-knob" origin={[400, 228]}>
        <Ink d={handLine(400, 228, 400, 210, 512, 0.2)} w={3} />
      </Anim>
      <Hand x={436} y={222} size={20} weight={700}>
        age
      </Hand>
      <Hand x={436} y={244} size={16} c={INK_SOFT}>
        stronger or weaker
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Labels in boxes, numbers counted, numbers measured.
   ------------------------------------------------------------------ */

const dataCss = `
.s-tvr6-label { animation: s-tvr6-hop 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.35s); }
@keyframes s-tvr6-hop {
  0%, 100% { transform: translateY(0); }
  15% { transform: translateY(-5px); }
  30% { transform: translateY(0); }
}
.s-tvr6-tally { animation: s-tvr6-fade 4s ease-in-out infinite; }
@keyframes s-tvr6-fade {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.s-tvr6-pointer { animation: s-tvr6-slide 5s ease-in-out infinite; }
@keyframes s-tvr6-slide {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-26px); }
}
`

export function DataTypesScene() {
  const tallies = []
  for (let g = 0; g < 4; g++) {
    const gx = 318 + g * 38
    for (let i = 0; i < 4; i++) tallies.push(handLine(gx + i * 7, 150, gx + i * 7, 200, 610 + g * 5 + i, 0.4))
    tallies.push(handLine(gx - 4, 190, gx + 26, 160, 630 + g, 0.4))
  }
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={dataCss}
      className="s-tvr6"
      label="Three panels: categories, with three labels in boxes reading clerk, officer and manager; counted, with tally marks for yoga sessions attended; and measured, with a ruler and a pointer at 72.5 kilograms"
    >
      {/* categorical */}
      <Hand x={130} y={64} size={26} anchor="middle" weight={700}>
        categories
      </Hand>
      <Hand x={130} y={88} size={17} anchor="middle" c={INK_SOFT}>
        nominal or ordinal
      </Hand>
      {[
        ['clerk', 'amber'],
        ['officer', 'green'],
        ['manager', 'blue'],
      ].map(([name, tone], i) => (
        <g key={name} className="s-tvr6-label" style={{ '--i': i }}>
          <Box x={50} y={112 + i * 58} w={160} h={44} r={8} fill={TONES[tone].tint} seed={601 + i} sw={1.8} />
          <Hand x={130} y={142 + i * 58} size={22} anchor="middle">
            {name}
          </Hand>
        </g>
      ))}

      <Ink d={handLine(256, 60, 256, 300, 605, 1)} c={TEXT_LINE} w={1.4} />

      {/* discrete */}
      <Hand x={384} y={64} size={26} anchor="middle" weight={700}>
        counted
      </Hand>
      <Hand x={384} y={88} size={17} anchor="middle" c={INK_SOFT}>
        discrete
      </Hand>
      <g className="s-tvr6-tally">
        <Ink d={tallies.join('')} w={2.2} />
      </g>
      <Type x={384} y={250} size={22} anchor="middle" weight={700}>
        20 sessions
      </Type>
      <Hand x={384} y={280} size={17} anchor="middle" c={INK_SOFT}>
        no half sessions
      </Hand>

      <Ink d={handLine(512, 60, 512, 300, 606, 1)} c={TEXT_LINE} w={1.4} />

      {/* continuous */}
      <Hand x={656} y={64} size={26} anchor="middle" weight={700}>
        measured
      </Hand>
      <Hand x={656} y={88} size={17} anchor="middle" c={INK_SOFT}>
        continuous
      </Hand>
      <Box x={540} y={172} w={232} h={40} r={4} fill={TONES.amber.tint} seed={640} sw={1.8} />
      {Array.from({ length: 23 }, (_, i) => (
        <Ink key={i} d={handLine(550 + i * 10, 172, 550 + i * 10, 172 + (i % 5 === 0 ? 18 : 9), 650 + i, 0.2)} w={1.2} />
      ))}
      {[70, 71, 72, 73, 74].map((n, i) => (
        <Type key={n} x={550 + i * 50} y={206} size={12} anchor="middle" c={INK_SOFT}>
          {String(n)}
        </Type>
      ))}
      <Place x={0} y={0}>
        <Anim className="s-tvr6-pointer">
          <path d="M675 166L667 150L683 150Z" fill={TONES.red.ink} />
          <Ink d={handPoly([[675, 166], [667, 150], [683, 150]], { seed: 680, amp: 0.3, closed: true })} w={1.4} />
        </Anim>
      </Place>
      <Type x={656} y={250} size={22} anchor="middle" weight={700}>
        72.5 kg
      </Type>
      <Hand x={656} y={280} size={17} anchor="middle" c={INK_SOFT}>
        half a kilo makes sense
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Four steps: nominal, ordinal, interval, ratio.
   ------------------------------------------------------------------ */

const levelsCss = `
.s-tvr7-climb { animation: s-tvr7-hop 3s ease-in-out infinite; }
@keyframes s-tvr7-hop {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(0); }
}
.s-tvr7-star { animation: s-tvr7-twinkle 3s ease-in-out infinite; }
@keyframes s-tvr7-twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
`

const LEVELS = [
  ['nominal', 'blood group', 'blue'],
  ['ordinal', 'job grade', 'green'],
  ['interval', 'Celsius', 'amber'],
  ['ratio', 'weight, BP', 'red'],
]

export function LevelsScene() {
  const FLOOR = 320
  const stepW = 160
  const rise = 50
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={levelsCss}
      className="s-tvr7"
      label="A staircase of four steps rising from left to right, labelled nominal with blood group, ordinal with job grade, interval with Celsius and ratio with weight and BP, with a paper character climbing toward the top step and a sparkle above it"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={701} />
      {LEVELS.map(([name, example, tone], i) => {
        const x = 60 + i * stepW
        const top = FLOOR - 80 - rise * i
        return (
          <g key={name}>
            <Box x={x} y={top} w={stepW} h={FLOOR - top} fill={TONES[tone].tint} seed={710 + i} sw={2} />
            <Hand x={x + stepW / 2} y={top + 32} size={24} anchor="middle" weight={700}>
              {name}
            </Hand>
            <Hand x={x + stepW / 2} y={top + 56} size={17} anchor="middle" c={INK_SOFT}>
              {example}
            </Hand>
          </g>
        )
      })}
      <Hand x={140} y={150} size={20} c={INK_SOFT} anchor="middle">
        labels only
      </Hand>
      <Hand x={620} y={52} size={20} c={INK_SOFT} anchor="middle">
        equal gaps and a true zero
      </Hand>
      <Anim className="s-tvr7-star" spin>
        <Sparkle x={760} y={86} s={12} />
      </Anim>

      <Place x={460} y={FLOOR - 80 - rise * 2} s={1.1}>
        <g className="s-tvr7-climb">
          <Pip mood="happy" arms="up" tone="paper" glasses look={1.6} seed={730} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Devansh's variable table, with a tick at last.
   ------------------------------------------------------------------ */

const identifyCss = `
.s-tvr8-row { animation: s-tvr8-write 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-tvr8-write {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
}
.s-tvr8-tick { animation: s-tvr8-pop 3s ease-in-out infinite; }
@keyframes s-tvr8-pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
.s-tvr8-pip .pip-body { animation: s-tvr8-bounce 3s ease-in-out infinite; }
@keyframes s-tvr8-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

const ROWS = [
  ['yoga', 'independent', 'nominal'],
  ['systolic BP', 'dependent', 'ratio'],
  ['stress', 'mediating', 'interval'],
  ['age', 'moderating', 'ratio'],
  ['BP medicine', 'adjusted for', 'nominal'],
]

export function IdentifyScene() {
  const FLOOR = 320
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={identifyCss}
      className="s-tvr8"
      label="A sheet titled variables of the study with three columns, variable, role and level, filled in for yoga, systolic BP, stress, age and BP medicine, with a pencil beside it, a green tick at the corner and a proud paper character"
    >
      <Sheet x={60} y={40} w={500} h={270} lines={0} fold={24} seed={801} />
      <Hand x={290} y={80} size={26} anchor="middle" weight={700}>
        variables of the study
      </Hand>
      {['variable', 'role', 'level'].map((h, i) => (
        <Type key={h} x={96 + i * 160} y={116} size={15} weight={700} c={INK_SOFT}>
          {h}
        </Type>
      ))}
      <Ink d={handLine(90, 126, 530, 126, 802, 0.5)} w={1.6} />
      {ROWS.map(([name, role, level], i) => (
        <g key={name} className="s-tvr8-row" style={{ '--i': i }}>
          <Hand x={96} y={156 + i * 32} size={19}>
            {name}
          </Hand>
          <Hand x={256} y={156 + i * 32} size={19}>
            {role}
          </Hand>
          <Hand x={416} y={156 + i * 32} size={19}>
            {level}
          </Hand>
        </g>
      ))}
      <Ink d={handLine(244, 110, 244, 296, 803, 0.4) + handLine(404, 110, 404, 296, 804, 0.4)} c={TEXT_LINE} w={1.2} />
      <Anim className="s-tvr8-tick" spin>
        <Tick x={490} y={70} s={1.6} />
      </Anim>
      <Pencil x={572} y={300} length={120} angle={-60} tone="amber" seed={805} />

      <Floor y={FLOOR} x1={600} x2={780} seed={806} />
      <Shadow x={700} y={FLOOR + 3} rx={30} ry={4} />
      <Place x={700} y={FLOOR} s={1.5} flip>
        <g className="s-tvr8-pip">
          <Pip mood="proud" arms="hips" tone="green" seed={807} />
        </g>
      </Place>
      <Plant x={780} y={FLOOR} s={0.6} seed={808} />
    </Scene>
  )
}
