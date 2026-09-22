import {
  Anim,
  Arrow,
  Chart,
  Cloud,
  Desk,
  Flask,
  Floor,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scale,
  Scene,
  Sheet,
  Sparkle,
  StampMark,
  TONES,
  handLine,
  handPoly,
  polyPath,
  rng,
  wave,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. One question holds up the whole project: a tent and its pole.
   The tent lies in a heap, the pole rises, the canvas lifts with it.
   ------------------------------------------------------------------ */

const APEX = [380, 116]
const RIDGE = [540, 104]
const FRONT = [APEX, [510, 300], [250, 300]]
const DOOR = [[380, 176], [410, 300], [350, 300]]
const ROOF = [APEX, RIDGE, [668, 292], [510, 300]]
const HEAP = 'M250 300C270 272 330 258 390 258C450 258 520 266 580 276C622 283 650 290 668 297L668 300Z'
const PENNANT = [[380, 48], [446, 67], [380, 86]]

const tentCss = `
.s-rq1-tent { animation: s-rq1-pitch 10s ease-in-out infinite; }
.s-rq1-heap { opacity: 0; animation: s-rq1-heap 10s ease-in-out infinite; }
.s-rq1-sad { opacity: 0; animation: s-rq1-sad 10s ease-in-out infinite; }
.s-rq1-glad { animation: s-rq1-glad 10s ease-in-out infinite; }
.s-rq1-flag { animation: s-rq1-flutter 1.8s ease-in-out infinite; }
.s-rq1-pop { opacity: 0; animation: s-rq1-pop 10s ease-out infinite; }
@keyframes s-rq1-pitch {
  0%, 10% { transform: scaleY(0.3); opacity: 0; }
  13% { opacity: 1; }
  25% { transform: scaleY(1.07); }
  29% { transform: scaleY(0.97); }
  33%, 84% { transform: scaleY(1); opacity: 1; }
  93% { transform: scaleY(0.34); opacity: 1; }
  96%, 100% { transform: scaleY(0.3); opacity: 0; }
}
@keyframes s-rq1-heap {
  0%, 11% { opacity: 1; }
  17%, 90% { opacity: 0; }
  95%, 100% { opacity: 1; }
}
@keyframes s-rq1-sad {
  0%, 13% { opacity: 1; }
  17%, 88% { opacity: 0; }
  92%, 100% { opacity: 1; }
}
@keyframes s-rq1-glad {
  0%, 13% { opacity: 0; }
  17%, 88% { opacity: 1; }
  92%, 100% { opacity: 0; }
}
@keyframes s-rq1-flutter {
  0%, 100% { transform: scaleX(1) skewY(0deg); }
  50% { transform: scaleX(0.88) skewY(5deg); }
}
@keyframes s-rq1-pop {
  0%, 25% { opacity: 0; transform: scale(0.3); }
  29% { opacity: 1; transform: scale(1.2); }
  37% { opacity: 1; transform: scale(1); }
  45%, 100% { opacity: 0; transform: scale(0.6); }
}
`

export function TentScene() {
  const frontPath = polyPath(FRONT) + polyPath(DOOR)
  return (
    <Scene
      w={800}
      h={300}
      top={30}
      css={tentCss}
      className="s-rq1"
      label="A tent lies in a heap until its centre pole rises and lifts the canvas into shape. The pole is labelled one question, and a paper character beside the tent goes from worried to proud"
    >
      <Cloud x={132} y={92} s={0.6} seed={2} />
      <Cloud x={760} y={128} s={0.5} seed={3} />
      <Ground y={300} bottom={330} seed={4} tufts={7} pebbles={0} grit={14} />

      <Anim className="s-rq1-tent" origin={[380, 300]}>
        <Ink d={handLine(APEX[0], APEX[1], 168, 300, 5, 0.4)} w={1.3} c={INK_SOFT} />
        <Ink d={handLine(RIDGE[0], RIDGE[1], 742, 296, 6, 0.4)} w={1.3} c={INK_SOFT} />
        <Ink d={handLine(160, 292, 170, 304, 7, 0.2) + handLine(734, 288, 744, 300, 8, 0.2)} w={2.4} />

        <path d={polyPath(ROOF)} fill="url(#fill-green)" />
        <path d={polyPath(ROOF)} fill="url(#ink-hatch)" opacity="0.3" />
        <Ink d={handPoly(ROOF, { seed: 9, amp: 0.5, closed: true })} w={1.9} />

        <path d={polyPath(DOOR)} fill={TONES.green.deep} />
        <path d={polyPath(DOOR)} fill="url(#ink-hatch)" opacity="0.5" />
        <Ink d={handLine(380, 300, 380, 50, 10, 0.2)} w={3.4} c={TONES.brown.deep} />

        <path d={frontPath} fill="url(#fill-green)" fillRule="evenodd" />
        <Ink d={handPoly(FRONT, { seed: 11, amp: 0.5, closed: true })} w={2} />
        <Ink d={handPoly(DOOR, { seed: 12, amp: 0.4, closed: true })} w={1.6} />
        <Ink d={handLine(380, 118, 380, 48, 13, 0.2)} w={3.4} c={TONES.brown.deep} />

        <Anim className="s-rq1-flag" origin={[380, 67]}>
          <path d={polyPath(PENNANT)} fill="url(#fill-red)" />
          <Ink d={handPoly(PENNANT, { seed: 14, amp: 0.3, closed: true })} w={1.6} />
          <Hand x={401} y={76} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
            ?
          </Hand>
        </Anim>
      </Anim>

      <g className="s-rq1-heap">
        <path d={HEAP} fill="url(#fill-green)" />
        <path d={HEAP} fill="url(#ink-hatch)" opacity="0.25" />
        <Ink d={HEAP} w={1.9} />
        <Ink d="M330 280Q360 268 392 276M470 272Q510 266 546 280" w={1.2} c={TONES.green.deep} />
        <Ink d={handLine(470, 298, 700, 262, 15, 0.3)} w={3.4} c={TONES.brown.deep} />
      </g>

      <Place x={390} y={80}>
        <Anim className="s-rq1-pop" spin>
          <Sparkle x={-60} y={10} s={10} />
          <Sparkle x={74} y={-6} s={8} />
        </Anim>
      </Place>

      <Hand x={598} y={66} size={22} weight={700} c={INK_SOFT}>
        one question
      </Hand>
      <Arrow from={[592, 62]} to={[394, 100]} bend={0.12} seed={16} w={1.6} c={INK_SOFT} head={10} />

      <g className="s-rq1-sad">
        <Place x={110} y={300} s={1.9}>
          <Pip mood="worried" arms="shrug" look={1.5} seed={17} />
        </Place>
      </g>
      <g className="s-rq1-glad">
        <Place x={110} y={300} s={1.9}>
          <Pip mood="proud" arms="up" seed={17} />
        </Place>
      </g>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. From topic to question: four blocks climbed one hop at a time.
   ------------------------------------------------------------------ */

const STEPS = [
  { label: 'topic', tone: 'blue' },
  { label: 'reading', tone: 'green' },
  { label: 'focus', tone: 'pink' },
  { label: 'question', tone: 'amber' },
]
const STEP_X = 150
const STEP_W = 130
const STEP_H = 46
const FLOOR_Y = 300
const stepTop = (i) => FLOOR_Y - (i + 1) * STEP_H
const SPOTS = [[84, FLOOR_Y], ...STEPS.map((_, i) => [STEP_X + i * STEP_W + (i === 3 ? 50 : 65), stepTop(i)])]
const HOME = SPOTS[SPOTS.length - 1]

/* The climb, keyframe by keyframe: rest on a spot, hop over to the next. */
function climbKeyframes() {
  const at = ([x, y]) => `translate(${x - HOME[0]}px, ${y - HOME[1]}px)`
  const lines = [`0%, 6% { transform: ${at(SPOTS[0])}; opacity: 1; }`]
  for (let i = 1; i < SPOTS.length; i++) {
    const start = 6 + (i - 1) * 16
    const [ax, ay] = SPOTS[i - 1]
    const [bx, by] = SPOTS[i]
    lines.push(`${start + 4}% { transform: ${at([(ax + bx) / 2, Math.min(ay, by) - 34])}; }`)
    const rest = i === SPOTS.length - 1 ? '88' : `${start + 16}`
    lines.push(`${start + 8}%, ${rest}% { transform: ${at(SPOTS[i])}; opacity: 1; }`)
  }
  lines.push(`92% { transform: ${at(HOME)}; opacity: 0; }`)
  lines.push(`93% { transform: ${at(SPOTS[0])}; opacity: 0; }`)
  lines.push(`100% { transform: ${at(SPOTS[0])}; opacity: 1; }`)
  return lines.join('\n  ')
}

const stairsCss = `
.s-rq2-climber { animation: s-rq2-climb 10s ease-in-out infinite; }
.s-rq2-badge { animation: s-rq2-badge 10s ease-in-out infinite; }
.s-rq2-spark { opacity: 0; animation: s-rq2-spark 10s ease-in-out infinite; }
@keyframes s-rq2-climb {
  ${climbKeyframes()}
}
@keyframes s-rq2-badge {
  0%, 62% { transform: scale(1) rotate(0deg); }
  66% { transform: scale(1.22) rotate(-8deg); }
  70% { transform: scale(0.96) rotate(4deg); }
  74%, 100% { transform: scale(1) rotate(0deg); }
}
@keyframes s-rq2-spark {
  0%, 63% { opacity: 0; transform: scale(0.3); }
  67% { opacity: 1; transform: scale(1.15); }
  80% { opacity: 1; transform: scale(1); }
  88%, 100% { opacity: 0; transform: scale(0.5); }
}
`

export function StairsScene() {
  return (
    <Scene
      w={800}
      h={300}
      top={20}
      css={stairsCss}
      className="s-rq2"
      label="A paper character hops up four blocks labelled topic, reading, focus and question, to a round question mark sign at the top"
    >
      <Floor y={FLOOR_Y} x1={40} x2={760} seed={20} />
      {STEPS.map((step, i) => {
        const x = STEP_X + i * STEP_W
        const top = stepTop(i)
        const face = [[x, top], [x + STEP_W, top], [x + STEP_W, FLOOR_Y], [x, FLOOR_Y]]
        return (
          <g key={step.label}>
            <path d={polyPath(face)} fill={`url(#fill-${step.tone})`} />
            <rect x={x + STEP_W - 14} y={top} width={14} height={FLOOR_Y - top} fill="url(#ink-hatch-light)" />
            <Ink d={handPoly(face, { seed: 21 + i, amp: 0.5, closed: true })} w={2} />
            <Hand x={x + STEP_W / 2} y={top + 31} size={22} anchor="middle" weight={700} c={TONES[step.tone].deep}>
              {step.label}
            </Hand>
          </g>
        )
      })}

      <Ink d={handLine(664, stepTop(3), 664, 84, 25, 0.2)} w={3} />
      <Anim className="s-rq2-badge" origin={[664, 60]}>
        <Oval cx={664} cy={60} rx={26} fill="url(#fill-amber)" seed={26} sw={2} />
        <Hand x={664} y={73} size={36} anchor="middle" weight={700} c={TONES.amber.deep}>
          ?
        </Hand>
      </Anim>
      <Anim className="s-rq2-spark" spin>
        <Sparkle x={622} y={40} s={9} />
        <Sparkle x={712} y={52} s={11} />
        <Sparkle x={700} y={100} s={7} />
      </Anim>

      <Anim className="s-rq2-climber">
        <Place x={HOME[0]} y={HOME[1]} s={1.25}>
          <Pip mood="grin" arms="up" look={1} seed={27} />
        </Place>
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Five tests of a good question: a question card rides a belt
   through five gates, F I N E R, and each lights up as it passes.
   ------------------------------------------------------------------ */

const GATES = [
  { x: 220, letter: 'F', word: 'feasible' },
  { x: 330, letter: 'I', word: 'interesting' },
  { x: 440, letter: 'N', word: 'novel' },
  { x: 550, letter: 'E', word: 'ethical' },
  { x: 660, letter: 'R', word: 'relevant' },
]
const CARD_HOME = 490
const CARD_FROM = 140
const CARD_TO = 740
const RIDE = [6, 84]
const passAt = (x) => RIDE[0] + ((x - CARD_FROM) / (CARD_TO - CARD_FROM)) * (RIDE[1] - RIDE[0])
const f1 = (n) => n.toFixed(1)

const gateCss = GATES.map((gate, i) => {
  const t = passAt(gate.x)
  const lit = gate.x < CARD_HOME
  return `
.s-rq3-lit-${i} { ${lit ? '' : 'opacity: 0; '}animation: s-rq3-lit-${i} 10s linear infinite; }
.s-rq3-pop-${i} { animation: s-rq3-pop-${i} 10s ease-in-out infinite; }
@keyframes s-rq3-lit-${i} {
  0%, ${f1(t - 0.5)}% { opacity: 0; }
  ${f1(t + 1.5)}%, 92% { opacity: 1; }
  96%, 100% { opacity: 0; }
}
@keyframes s-rq3-pop-${i} {
  0%, ${f1(t - 0.5)}% { transform: scale(1); }
  ${f1(t + 1.5)}% { transform: scale(1.22); }
  ${f1(t + 4)}%, 100% { transform: scale(1); }
}`
}).join('')

const beltCss = `
.s-rq3-card { animation: s-rq3-ride 10s linear infinite; }
.s-rq3-belt { animation: s-rq3-belt 0.8s linear infinite; }
.s-rq3-roller { animation: s-rq3-roll 1.2s linear infinite; }
.s-rq3-tick { opacity: 0; animation: s-rq3-tick 10s ease-out infinite; }
@keyframes s-rq3-ride {
  0%, ${RIDE[0]}% { transform: translateX(${CARD_FROM - CARD_HOME}px); opacity: 1; }
  ${RIDE[1]}%, 92% { transform: translateX(${CARD_TO - CARD_HOME}px); opacity: 1; }
  95% { transform: translateX(${CARD_TO - CARD_HOME}px); opacity: 0; }
  96% { transform: translateX(${CARD_FROM - CARD_HOME}px); opacity: 0; }
  100% { transform: translateX(${CARD_FROM - CARD_HOME}px); opacity: 1; }
}
@keyframes s-rq3-belt { to { stroke-dashoffset: -20; } }
@keyframes s-rq3-roll { to { transform: rotate(360deg); } }
@keyframes s-rq3-tick {
  0%, 84% { opacity: 0; stroke-dashoffset: 1; }
  85% { opacity: 1; stroke-dashoffset: 1; }
  89%, 92% { opacity: 1; stroke-dashoffset: 0; }
  95%, 100% { opacity: 0; stroke-dashoffset: 0; }
}
${gateCss}
`

function Roller({ x, y }) {
  return (
    <g>
      <Oval cx={x} cy={y} rx={11} fill={TONES.grey.mid} seed={x} sw={1.6} />
      <Anim className="s-rq3-roller" origin={[x, y]}>
        <Ink d={`M${x - 8} ${y}H${x + 8}M${x} ${y - 8}V${y + 8}`} w={1.4} c={INK_SOFT} />
      </Anim>
    </g>
  )
}

export function FinerScene() {
  const belt = 'M128 262H742A14 14 0 0 1 742 290H128A14 14 0 0 1 128 262Z'
  const tick = `M${CARD_TO - 16} 150Q${CARD_TO - 9} 155 ${CARD_TO - 5} 164Q${CARD_TO + 4} 140 ${CARD_TO + 20} 128`
  return (
    <Scene
      w={800}
      h={254}
      top={96}
      css={beltCss}
      className="s-rq3"
      label="A question card rides a conveyor belt through five gates marked F, I, N, E and R, for feasible, interesting, novel, ethical and relevant; each gate lights green as the card passes, and a tick appears at the end"
    >
      <Floor y={340} x1={40} x2={760} seed={30} />
      <Ink d={handLine(160, 290, 156, 340, 31, 0.3) + handLine(710, 290, 714, 340, 32, 0.3)} w={3} />

      {GATES.map((gate, i) => (
        <g key={gate.letter}>
          <Ink d={handLine(gate.x - 40, 262, gate.x - 40, 180, 33 + i, 0.3) + handLine(gate.x + 40, 262, gate.x + 40, 180, 38 + i, 0.3)} w={3} />
          <rect x={gate.x - 46} y={172} width={92} height={9} fill="url(#wood)" />
          <Ink d={handPoly([[gate.x - 46, 172], [gate.x + 46, 172], [gate.x + 46, 181], [gate.x - 46, 181]], { seed: 43 + i, amp: 0.4, closed: true })} w={1.6} />
          <Anim className={`s-rq3-pop-${i}`} origin={[gate.x, 148]}>
            <circle cx={gate.x} cy={148} r={22} fill={PAPER} />
            <circle cx={gate.x} cy={148} r={22} fill="url(#fill-green)" className={`s-rq3-lit-${i}`} />
            <Oval cx={gate.x} cy={148} rx={22} seed={48 + i} sw={1.8} />
            <Hand x={gate.x} y={159} size={30} anchor="middle" weight={700}>
              {gate.letter}
            </Hand>
          </Anim>
          <Hand x={gate.x} y={322} size={20} anchor="middle" weight={700} c={INK_SOFT}>
            {gate.word}
          </Hand>
        </g>
      ))}

      <path d={belt} fill="url(#fill-grey)" />
      <Ink d={belt} w={1.9} />
      <Ink d="M132 268H738" w={1.4} c={TONES.grey.deep} dash="8 12" className="s-rq3-belt" />
      <Roller x={128} y={276} />
      <Roller x={742} y={276} />

      <Anim className="s-rq3-card">
        <Sheet x={CARD_HOME - 30} y={184} w={60} h={76} lines={0} fold={12} seed={53} />
        <Hand x={CARD_HOME} y={242} size={44} anchor="middle" weight={700} c={TONES.blue.ink}>
          ?
        </Hand>
      </Anim>
      <Ink d={tick} w={4} c={TONES.green.ink} pathLength={1} dash="1" className="s-rq3-tick" />

      <Place x={60} y={340} s={1.6}>
        <Pip mood="happy" arms="point" look={1.5} seed={54} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Types of question: a kirana counter with a UPI code. A customer
   pays, the speaker box chimes, and a coin flies to the tally board.
   ------------------------------------------------------------------ */

const AWNING_TOP = [224, 536, 80]
const AWNING_BOTTOM = [214, 546, 116]
const STRIPES = 8

function Awning() {
  const tx = (i) => AWNING_TOP[0] + (i * (AWNING_TOP[1] - AWNING_TOP[0])) / STRIPES
  const bx = (i) => AWNING_BOTTOM[0] + (i * (AWNING_BOTTOM[1] - AWNING_BOTTOM[0])) / STRIPES
  const y1 = AWNING_TOP[2]
  const y2 = AWNING_BOTTOM[2]
  let scallops = `M${bx(0)} ${y2}`
  for (let i = 0; i < STRIPES; i++) scallops += `Q${(bx(i) + bx(i + 1)) / 2} ${y2 + 22} ${bx(i + 1)} ${y2}`
  return (
    <g>
      {Array.from({ length: STRIPES }, (_, i) => {
        const fill = i % 2 ? PAPER : 'url(#fill-red)'
        const band = [[tx(i), y1], [tx(i + 1), y1], [bx(i + 1), y2], [bx(i), y2]]
        const lip = `M${bx(i)} ${y2}Q${(bx(i) + bx(i + 1)) / 2} ${y2 + 22} ${bx(i + 1)} ${y2}Z`
        return (
          <g key={i}>
            <path d={polyPath(band)} fill={fill} />
            <path d={lip} fill={fill} />
          </g>
        )
      })}
      <Ink d={Array.from({ length: STRIPES - 1 }, (_, i) => handLine(tx(i + 1), y1, bx(i + 1), y2 + 8, 60 + i, 0.2)).join('')} w={1.2} c={TONES.red.deep} />
      <Ink d={handLine(tx(0), y1, tx(STRIPES), y1, 70, 0.4) + handLine(tx(0), y1, bx(0), y2, 71, 0.3) + handLine(tx(STRIPES), y1, bx(STRIPES), y2, 72, 0.3)} w={1.9} />
      <Ink d={scallops} w={1.8} />
    </g>
  )
}

function QrCode({ x, y, size, seed }) {
  const cells = 9
  const cell = size / cells
  const r = rng(seed)
  const finder = (cx, cy) => (
    <g key={`${cx}-${cy}`}>
      <rect x={cx} y={cy} width={cell * 3} height={cell * 3} fill={INK} />
      <rect x={cx + cell * 0.7} y={cy + cell * 0.7} width={cell * 1.6} height={cell * 1.6} fill={PAPER} />
      <rect x={cx + cell} y={cy + cell} width={cell} height={cell} fill={INK} />
    </g>
  )
  const dots = []
  for (let row = 0; row < cells; row++) {
    for (let col = 0; col < cells; col++) {
      const inFinder = (row < 4 && col < 4) || (row < 4 && col > cells - 5) || (row > cells - 5 && col < 4)
      if (!inFinder && r() > 0.5) dots.push([x + col * cell, y + row * cell])
    }
  }
  return (
    <g>
      {dots.map(([dx, dy]) => (
        <rect key={`${dx}-${dy}`} x={dx} y={dy} width={cell} height={cell} fill={INK} />
      ))}
      {finder(x, y)}
      {finder(x + size - cell * 3, y)}
      {finder(x, y + size - cell * 3)}
    </g>
  )
}

function Phone() {
  return (
    <g>
      <rect x={30} y={-82} width={13} height={22} rx={2.5} fill={INK_SOFT} />
      <rect x={31.8} y={-79.5} width={9.4} height={16} rx={1} fill={TONES.blue.tint} />
      <Ink d={handPoly([[30, -82], [43, -82], [43, -60], [30, -60]], { seed: 80, amp: 0.2, closed: true })} w={1.2} />
      <Ink d="M33.6 -71Q35 -70 35.8 -67.6Q37.8 -73 40 -75" w={1.6} c={TONES.green.deep} className="s-rq4-paid" />
    </g>
  )
}

const TALLY_X = [664, 676, 688, 700]
const COIN_FROM = [318, 160]
const COIN_TO = [690, 184]

function coinPath() {
  const dx = COIN_TO[0] - COIN_FROM[0]
  const dy = COIN_TO[1] - COIN_FROM[1]
  const lift = 104
  const point = (u) => `translate(${(dx * u).toFixed(0)}px, ${(dy * u - 4 * lift * u * (1 - u)).toFixed(0)}px)`
  return [0, 0.25, 0.5, 0.75, 1].map((u, i) => `${20 + i * 5}% { transform: ${point(u)}; opacity: 1; }`).join('\n  ')
}

const stallCss = `
.s-rq4-lean { animation: s-rq4-lean 10s ease-in-out infinite; }
.s-rq4-paid { opacity: 0; animation: s-rq4-paid 10s ease-in-out infinite; }
.s-rq4-wave { opacity: 0; animation: s-rq4-wave 10s ease-out infinite; }
.s-rq4-coin { opacity: 0; animation: s-rq4-coin 10s ease-in-out infinite; }
.s-rq4-mark { animation: s-rq4-mark 10s ease-in-out infinite; }
@keyframes s-rq4-lean {
  0%, 4% { transform: rotate(0deg); }
  12%, 58% { transform: rotate(4deg); }
  68%, 100% { transform: rotate(0deg); }
}
@keyframes s-rq4-paid {
  0%, 14% { opacity: 0; }
  16%, 60% { opacity: 1; }
  64%, 100% { opacity: 0; }
}
@keyframes s-rq4-wave {
  0%, 16% { opacity: 0; transform: scale(0.7); }
  19% { opacity: 1; transform: scale(1); }
  30% { opacity: 0; transform: scale(1.25); }
  100% { opacity: 0; transform: scale(1.25); }
}
@keyframes s-rq4-coin {
  0%, 17% { transform: translate(0px, 0px); opacity: 0; }
  ${coinPath()}
  43% { transform: translate(${COIN_TO[0] - COIN_FROM[0]}px, ${COIN_TO[1] - COIN_FROM[1]}px); opacity: 0; }
  44%, 100% { transform: translate(0px, 0px); opacity: 0; }
}
@keyframes s-rq4-mark {
  0%, 40% { stroke-dashoffset: 1; opacity: 1; }
  46%, 90% { stroke-dashoffset: 0; opacity: 1; }
  95% { stroke-dashoffset: 0; opacity: 0; }
  96%, 100% { stroke-dashoffset: 1; opacity: 0; }
}
`

export function StallScene() {
  const wall = [[246, 116], [514, 116], [514, 212], [246, 212]]
  const counter = [[220, 222], [540, 222], [540, 310], [220, 310]]
  const board = [[590, 146], [770, 146], [770, 262], [590, 262]]
  const sachets = (x, top, count, seed) =>
    Array.from({ length: count }, (_, i) => {
      const tone = ['amber', 'pink', 'blue', 'green', 'red'][(i + seed) % 5]
      const y = top + i * 11
      return (
        <g key={i}>
          <rect x={x - 7} y={y} width={14} height={10} fill={`url(#fill-${tone})`} />
          <Ink d={handPoly([[x - 7, y], [x + 7, y], [x + 7, y + 10], [x - 7, y + 10]], { seed: seed + i, amp: 0.2, closed: true })} w={1} />
        </g>
      )
    })
  return (
    <Scene
      w={800}
      h={290}
      top={40}
      css={stallCss}
      className="s-rq4"
      label="At a small shop counter a customer scans a UPI code with a phone, the speaker box on the counter chimes, and a coin marked with the rupee sign flies to a chalkboard where another UPI tally mark is added next to the cash tally"
    >
      <Floor y={310} x1={30} x2={780} seed={60} />

      <path d={polyPath(wall)} fill="url(#fill-amber)" opacity="0.55" />
      <Ink d={handLine(376, 116, 376, 130, 61, 0.2) + handLine(498, 116, 498, 130, 62, 0.2)} w={1} c={INK_SOFT} />
      {sachets(376, 130, 5, 63)}
      {sachets(498, 130, 3, 66)}

      <Place x={440} y={250} s={1.5}>
        <Pip mood="happy" tone="green" look={-1.5} seed={67} />
      </Place>

      <rect x={231} y={112} width={10} height={198} fill="url(#wood)" />
      <rect x={519} y={112} width={10} height={198} fill="url(#wood)" />
      <Ink d={handPoly([[231, 112], [241, 112], [241, 310], [231, 310]], { seed: 68, amp: 0.3 }) + handPoly([[519, 112], [529, 112], [529, 310], [519, 310]], { seed: 69, amp: 0.3 })} w={1.5} />
      <Awning />

      <path d={polyPath(counter)} fill="url(#wood)" />
      <Ink d={handPoly(counter, { seed: 73, amp: 0.5, closed: true })} w={1.9} />
      <rect x={212} y={212} width={336} height={10} fill={TONES.brown.mid} />
      <Ink d={handPoly([[212, 212], [548, 212], [548, 222], [212, 222]], { seed: 74, amp: 0.4, closed: true })} w={1.7} />

      <rect x={236} y={140} width={46} height={72} rx={3} fill={PAPER} />
      <Ink d={handPoly([[236, 140], [282, 140], [282, 212], [236, 212]], { seed: 75, amp: 0.4, closed: true })} w={1.7} />
      <QrCode x={242} y={146} size={34} seed={76} />
      <Hand x={259} y={204} size={20} anchor="middle" weight={700} c={TONES.blue.deep}>
        UPI
      </Hand>

      <rect x={302} y={182} width={32} height={30} rx={6} fill={TONES.grey.mid} />
      <Ink d={handPoly([[302, 182], [334, 182], [334, 212], [302, 212]], { seed: 77, amp: 0.3, closed: true })} w={1.6} />
      <circle cx={318} cy={196} r={8} fill={TONES.grey.deep} />
      <circle cx={318} cy={196} r={3} fill={TONES.grey.tint} />
      {[0, 1, 2].map((i) => (
        <Anim key={i} className="s-rq4-wave" origin={[334, 196]} style={{ animationDelay: `${i * 0.25}s` }}>
          <Ink d={`M${342 + i * 8} ${186 - i * 4}Q${348 + i * 10} 196 ${342 + i * 8} ${206 + i * 4}`} w={1.8} c={TONES.green.deep} />
        </Anim>
      ))}

      <path d="M488 180h36v32h-36Z" fill="#eef4f6" />
      {[[496, 204, 'red'], [508, 200, 'amber'], [518, 206, 'green'], [500, 192, 'pink'], [514, 190, 'blue']].map(([cx, cy, tone]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={4.5} fill={TONES[tone].mid} />
      ))}
      <Ink d={handPoly([[488, 180], [524, 180], [524, 212], [488, 212]], { seed: 78, amp: 0.3, closed: true })} w={1.6} />
      <rect x={486} y={172} width={40} height={8} rx={2} fill={TONES.amber.mid} />
      <Ink d={handPoly([[486, 172], [526, 172], [526, 180], [486, 180]], { seed: 79, amp: 0.3, closed: true })} w={1.4} />

      <Ink d={handLine(606, 262, 596, 310, 81, 0.3) + handLine(754, 262, 764, 310, 82, 0.3)} w={3} c={TONES.brown.deep} />
      <path d={polyPath(board)} fill={TONES.green.deep} />
      <path d={polyPath(board)} fill="url(#ink-hatch-light)" opacity="0.5" />
      <Ink d={handPoly(board, { seed: 83, amp: 0.4, closed: true })} w={3.4} c={TONES.brown.ink} />
      <Hand x={604} y={196} size={24} weight={700} c={PAPER}>
        UPI
      </Hand>
      <Hand x={604} y={244} size={24} weight={700} c={PAPER}>
        cash
      </Hand>
      <Ink d={TALLY_X.map((x, i) => handLine(x, 172, x, 198, 84 + i, 0.3)).join('')} w={2.2} c={PAPER} />
      <Ink d={[664, 676].map((x, i) => handLine(x, 222, x, 248, 90 + i, 0.3)).join('')} w={2.2} c={PAPER} />
      <Ink d="M656 194L710 174" w={2.4} c={TONES.amber.mid} pathLength={1} dash="1" className="s-rq4-mark" />

      <Anim className="s-rq4-lean" origin={[130, 310]}>
        <Place x={130} y={310} s={2.1}>
          <Pip mood="happy" tone="blue" arms="wave" look={2} seed={92}>
            <Phone />
          </Pip>
        </Place>
      </Anim>

      <Anim className="s-rq4-coin" origin={COIN_FROM}>
        <Oval cx={COIN_FROM[0]} cy={COIN_FROM[1]} rx={15} fill="url(#fill-amber)" seed={93} sw={1.7} />
        <Hand x={COIN_FROM[0]} y={COIN_FROM[1] + 8} size={22} anchor="middle" weight={700} c={TONES.amber.deep}>
          ₹
        </Hand>
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Frameworks: a tray with four slots, P I C O. Each slot's piece
   drops in by itself, and a finished question rises out of the tray.
   ------------------------------------------------------------------ */

const SLOTS = [
  { x: 220, letter: 'P', tone: 'blue' },
  { x: 340, letter: 'I', tone: 'green' },
  { x: 460, letter: 'C', tone: 'amber' },
  { x: 580, letter: 'O', tone: 'pink' },
]
const DROP_AT = [6, 18, 30, 42]

const trayCss = `
${DROP_AT.map(
  (t, i) => `.s-rq5-drop-${i} { animation: s-rq5-drop-${i} 10s ease-in-out infinite; }
@keyframes s-rq5-drop-${i} {
  0%, ${t}% { transform: translateY(-150px); opacity: 0; }
  ${t + 1}% { opacity: 1; }
  ${t + 6}% { transform: translateY(0px); }
  ${t + 7.5}% { transform: translateY(-9px); }
  ${t + 9}%, 88% { transform: translateY(0px); opacity: 1; }
  94% { transform: translateY(0px); opacity: 0; }
  100% { transform: translateY(-150px); opacity: 0; }
}`,
).join('\n')}
.s-rq5-rise { animation: s-rq5-rise 10s ease-in-out infinite; }
.s-rq5-spark { opacity: 0; animation: s-rq5-spark 10s ease-in-out infinite; }
@keyframes s-rq5-rise {
  0%, 56% { transform: translateY(90px); opacity: 0; }
  59% { opacity: 1; }
  66% { transform: translateY(-8px); }
  70%, 88% { transform: translateY(0px); opacity: 1; }
  94% { transform: translateY(0px); opacity: 0; }
  100% { transform: translateY(90px); opacity: 0; }
}
@keyframes s-rq5-spark {
  0%, 66% { opacity: 0; transform: scale(0.3); }
  70% { opacity: 1; transform: scale(1.15); }
  84% { opacity: 1; transform: scale(1); }
  90%, 100% { opacity: 0; transform: scale(0.5); }
}
`

function SlotPiece({ index }) {
  switch (index) {
    case 0:
      return (
        <g>
          {[[196, 'blue'], [220, 'pink'], [244, 'green']].map(([x, tone], i) => (
            <Place key={x} x={x} y={262} s={0.52}>
              <Pip mood="happy" tone={tone} look={i - 1} seed={100 + i} />
            </Place>
          ))}
        </g>
      )
    case 1:
      return <Flask x={340} y={262} s={0.62} tone="blue" seed={104} />
    case 2:
      return <Scale x={460} y={262} s={0.34} seed={105} />
    default:
      return <Chart x={556} y={260} w={48} h={42} bars={[0.45, 0.7, 0.95]} tone="pink" seed={106} />
  }
}

export function TrayScene() {
  const inner = [[170, 232], [630, 232], [640, 252], [160, 252]]
  const front = [[160, 252], [640, 252], [640, 300], [160, 300]]
  return (
    <Scene
      w={800}
      h={286}
      top={40}
      css={trayCss}
      className="s-rq5"
      label="A wooden tray with four slots labelled P, I, C and O. A group of people, a flask, a balance and a chart drop into the slots one by one, then a card with a question mark rises out of the tray"
    >
      <Desk y={300} x1={80} x2={720} depth={20} seed={107} />

      <path d={polyPath(inner)} fill="url(#wood)" />
      <path d={polyPath(inner)} fill="url(#ink-hatch)" opacity="0.4" />
      <Ink d={handPoly(inner, { seed: 108, amp: 0.3, closed: true })} w={1.6} />
      <Ink d={[280, 400, 520].map((x, i) => handLine(x, 234, x, 252, 109 + i, 0.2)).join('')} w={1.6} />

      <Anim className="s-rq5-rise">
        <Sheet x={362} y={96} w={76} h={94} lines={0} fold={14} seed={112} />
        <Hand x={400} y={170} size={56} anchor="middle" weight={700} c={TONES.amber.ink}>
          ?
        </Hand>
      </Anim>

      {SLOTS.map((slot, i) => (
        <Anim key={slot.letter} className={`s-rq5-drop-${i}`}>
          <SlotPiece index={i} />
        </Anim>
      ))}

      <path d={polyPath(front)} fill="url(#wood)" />
      <Ink d={handPoly(front, { seed: 113, amp: 0.4, closed: true })} w={2} />
      <Ink d={[280, 400, 520].map((x, i) => handLine(x, 252, x, 300, 114 + i, 0.2)).join('')} w={1.6} />
      {SLOTS.map((slot, i) => (
        <g key={slot.letter}>
          <rect x={slot.x - 21} y={257} width={42} height={38} rx={4} fill={PAPER} />
          <Ink d={handPoly([[slot.x - 21, 257], [slot.x + 21, 257], [slot.x + 21, 295], [slot.x - 21, 295]], { seed: 117 + i, amp: 0.3, closed: true })} w={1.5} />
          <Hand x={slot.x} y={287} size={30} anchor="middle" weight={700} c={TONES[slot.tone].deep}>
            {slot.letter}
          </Hand>
        </g>
      ))}

      <Anim className="s-rq5-spark" spin>
        <Sparkle x={342} y={112} s={9} />
        <Sparkle x={460} y={96} s={11} />
        <Sparkle x={452} y={176} s={7} />
      </Anim>

      <Place x={730} y={300} s={1.8} flip>
        <Pip mood="happy" arms="point" look={1.5} seed={121} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Common mistakes: the vague draft is crumpled and lands in the
   bin, and a sharper draft takes its place on the easel.
   ------------------------------------------------------------------ */

const BALL_HOME = [272, 196]
const BIN_MOUTH = [640, 206]

function PaperBall({ x, y, seed }) {
  const lumps = [[-12, 1], [-9, -8], [-1, -12], [8, -9], [12, -1], [9, 8], [0, 11], [-8, 9]].map(([dx, dy]) => [x + dx, y + dy])
  return (
    <g>
      <path d={polyPath(lumps)} fill={PAPER} />
      <path d={polyPath([[x + 2, y - 11], [x + 12, y - 1], [x + 9, y + 8], [x + 2, y + 3]])} fill={TONES.grey.tint} />
      <Ink d={handPoly(lumps, { seed, amp: 0.6, closed: true })} w={1.4} />
      <Ink d={`M${x - 4} ${y - 11}L${x + 2} ${y + 3}L${x - 6} ${y + 9}M${x + 2} ${y + 3}L${x + 11} ${y - 2}`} w={1} c={INK_SOFT} />
    </g>
  )
}

function ballKeyframes() {
  const dx = BIN_MOUTH[0] - BALL_HOME[0]
  const dy = BIN_MOUTH[1] - BALL_HOME[1]
  const lift = 111
  const frames = [0, 0.25, 0.5, 0.75, 1].map((u, i) => {
    const x = (dx * u).toFixed(0)
    const y = (dy * u - 4 * lift * u * (1 - u)).toFixed(0)
    return `${18 + i * 5}% { transform: translate(${x}px, ${y}px) rotate(${i * 140}deg) scale(1); opacity: 1; }`
  })
  return frames.join('\n  ')
}

const binCss = `
.s-rq6-weak { opacity: 0; animation: s-rq6-weak 10s ease-in-out infinite; }
.s-rq6-good { animation: s-rq6-good 10s ease-in-out infinite; }
.s-rq6-tick { animation: s-rq6-tick 10s ease-in-out infinite; }
.s-rq6-ball { opacity: 0; animation: s-rq6-ball 10s linear infinite; }
.s-rq6-bin { animation: s-rq6-bin 10s ease-in-out infinite; }
@keyframes s-rq6-weak {
  0%, 10% { opacity: 1; transform: scale(1); }
  15% { opacity: 0; transform: scale(0.25); }
  16%, 90% { opacity: 0; transform: scale(1); }
  96%, 100% { opacity: 1; transform: scale(1); }
}
@keyframes s-rq6-good {
  0%, 44% { opacity: 0; transform: translateY(-14px); }
  52%, 88% { opacity: 1; transform: translateY(0px); }
  92% { opacity: 0; transform: translateY(0px); }
  93%, 100% { opacity: 0; transform: translateY(-14px); }
}
@keyframes s-rq6-tick {
  0%, 54% { stroke-dashoffset: 1; }
  60%, 100% { stroke-dashoffset: 0; }
}
@keyframes s-rq6-ball {
  0%, 11% { transform: translate(0px, 0px) rotate(0deg) scale(0.4); opacity: 0; }
  14% { transform: translate(0px, 0px) rotate(0deg) scale(1); opacity: 1; }
  ${ballKeyframes()}
  40% { transform: translate(${BIN_MOUTH[0] - BALL_HOME[0]}px, ${BIN_MOUTH[1] - BALL_HOME[1] + 14}px) rotate(600deg) scale(0.9); opacity: 0; }
  41%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(0.4); opacity: 0; }
}
@keyframes s-rq6-bin {
  0%, 38% { transform: rotate(0deg); }
  40% { transform: rotate(-5deg); }
  42% { transform: rotate(4deg); }
  44% { transform: rotate(-2deg); }
  46%, 100% { transform: rotate(0deg); }
}
`

export function BinScene() {
  const bin = [[602, 212], [678, 212], [668, 300], [612, 300]]
  const good = `M278 226Q283 229 286 236Q292 222 304 214`
  return (
    <Scene
      w={800}
      h={250}
      top={70}
      css={binCss}
      className="s-rq6"
      label="A paper character stands at an easel. A draft marked with red wavy lines crumples into a ball and flies into a bin labelled drafts, and a clean draft with a green tick appears in its place"
    >
      <Floor y={300} x1={40} x2={760} seed={130} />

      <Ink d={handLine(240, 256, 226, 300, 131, 0.3) + handLine(304, 256, 318, 300, 132, 0.3)} w={3} c={TONES.brown.deep} />
      <rect x={222} y={138} width={100} height={118} fill="url(#wood)" />
      <Ink d={handPoly([[222, 138], [322, 138], [322, 256], [222, 256]], { seed: 133, amp: 0.4, closed: true })} w={1.9} />
      <rect x={214} y={256} width={116} height={7} fill={TONES.brown.mid} />
      <Ink d={handPoly([[214, 256], [330, 256], [330, 263], [214, 263]], { seed: 134, amp: 0.3, closed: true })} w={1.5} />

      <g className="s-rq6-good">
        <Sheet x={234} y={146} w={76} h={100} lines={6} fold={14} seed={135} />
        <Ink d={good} w={3.4} c={TONES.green.ink} pathLength={1} dash="1" className="s-rq6-tick" />
      </g>
      <Anim className="s-rq6-weak" origin={[272, 196]}>
        <Sheet x={234} y={146} w={76} h={100} lines={6} fold={14} seed={136} />
        <Ink d={wave(242, 296, 176, { amp: 2.2, length: 8, seed: 137 }) + wave(242, 286, 206, { amp: 2.2, length: 8, seed: 138 })} w={1.7} c={TONES.red.ink} />
        <Hand x={292} y={240} size={26} anchor="middle" weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      </Anim>

      <Place x={150} y={300} s={2.1}>
        <Pip mood="focused" arms="point" look={1.5} seed={139} />
      </Place>
      <Pencil x={262} y={196} length={44} angle={165} tone="blue" seed={140} />

      <Anim className="s-rq6-bin" origin={[640, 300]}>
        <PaperBall x={626} y={206} seed={141} />
        <PaperBall x={652} y={208} seed={142} />
        <path d={polyPath(bin)} fill="url(#fill-grey)" />
        <Ink d={[618, 632, 646, 660].map((x, i) => handLine(x, 216, x + (x - 640) * 0.1, 296, 143 + i, 0.2)).join('')} w={1} c={TONES.grey.deep} />
        <Ink d={handPoly(bin, { seed: 147, amp: 0.4, closed: true })} w={1.9} />
        <path d="M600 212A40 7 0 0 0 680 212A40 7 0 0 0 600 212Z" fill="none" stroke={INK} strokeWidth={1.9} vectorEffect="non-scaling-stroke" />
        <rect x={610} y={250} width={60} height={26} rx={3} fill={PAPER} />
        <Hand x={640} y={270} size={20} anchor="middle" weight={700} c={INK_SOFT}>
          drafts
        </Hand>
      </Anim>
      <PaperBall x={706} y={290} seed={148} />

      <Anim className="s-rq6-ball" origin={BALL_HOME}>
        <PaperBall x={BALL_HOME[0]} y={BALL_HOME[1]} seed={149} />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Questions and hypotheses: a question becomes a prediction, the
   prediction goes to the test, and the result is stamped on it.
   ------------------------------------------------------------------ */

const hypoCss = `
.s-rq7-ask { animation: s-rq7-ask 10s ease-in-out infinite; }
.s-rq7-arrow-1 { animation: s-rq7-arrow-1 10s ease-in-out infinite; }
.s-rq7-card { animation: s-rq7-card 10s ease-in-out infinite; }
.s-rq7-arrow-2 { animation: s-rq7-arrow-2 10s ease-in-out infinite; }
.s-rq7-fizz { opacity: 0; animation: s-rq7-fizz 10s linear infinite; }
.s-rq7-bubble { animation: s-rq7-bubble 2s ease-in infinite; }
.s-rq7-stamp { animation: s-rq7-stamp 10s ease-out infinite; }
@keyframes s-rq7-ask {
  0%, 100% { transform: scale(1); }
  4% { transform: scale(1.08); }
  8% { transform: scale(1); }
}
@keyframes s-rq7-arrow-1 {
  0%, 6% { opacity: 0; transform: translateX(-12px); }
  12%, 90% { opacity: 1; transform: translateX(0px); }
  96%, 100% { opacity: 0; transform: translateX(0px); }
}
@keyframes s-rq7-card {
  0%, 12% { opacity: 0; transform: scale(0.8); }
  17% { opacity: 1; transform: scale(1.06); }
  21%, 90% { opacity: 1; transform: scale(1); }
  96%, 100% { opacity: 0; transform: scale(1); }
}
@keyframes s-rq7-arrow-2 {
  0%, 24% { opacity: 0; transform: translateX(-12px); }
  30%, 90% { opacity: 1; transform: translateX(0px); }
  96%, 100% { opacity: 0; transform: translateX(0px); }
}
@keyframes s-rq7-fizz {
  0%, 32% { opacity: 0; }
  36%, 64% { opacity: 1; }
  68%, 100% { opacity: 0; }
}
@keyframes s-rq7-bubble {
  0% { transform: translateY(0px); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: translateY(-58px); opacity: 0; }
}
@keyframes s-rq7-stamp {
  0%, 66% { opacity: 0; transform: scale(1.6); }
  70% { opacity: 1; transform: scale(0.95); }
  73%, 90% { opacity: 1; transform: scale(1); }
  96%, 100% { opacity: 0; transform: scale(1); }
}
`

export function HypothesisScene() {
  return (
    <Scene
      w={800}
      h={236}
      top={90}
      css={hypoCss}
      className="s-rq7"
      label="A card with a question mark, labelled question, leads by an arrow to a card showing a predicted rise, labelled hypothesis, which leads to a bubbling flask labelled test; the hypothesis card is then stamped supported while a paper character in glasses points at the flask"
    >
      <Floor y={300} x1={40} x2={760} seed={150} />

      {[
        [120, 'question'],
        [354, 'hypothesis'],
        [600, 'test'],
      ].map(([x, word]) => (
        <Hand key={word} x={x} y={132} size={22} anchor="middle" weight={700} c={INK_SOFT}>
          {word}
        </Hand>
      ))}

      <Anim className="s-rq7-ask" origin={[120, 214]}>
        <Sheet x={70} y={150} w={100} h={128} tone="amber" lines={0} fold={16} seed={151} />
        <Hand x={120} y={250} size={76} anchor="middle" weight={700} c={TONES.amber.deep}>
          ?
        </Hand>
      </Anim>

      <Anim className="s-rq7-arrow-1">
        <Arrow from={[184, 214]} to={[290, 214]} bend={0.25} seed={152} w={2} head={12} />
      </Anim>

      <Anim className="s-rq7-card" origin={[354, 214]}>
        <Sheet x={304} y={150} w={100} h={128} tone="blue" lines={0} fold={16} seed={153} />
        <Ink d={handLine(322, 172, 322, 226, 154, 0.3) + handLine(322, 226, 388, 226, 155, 0.3)} w={1.8} />
        <Ink d="M328 220Q350 212 380 182" w={2} dash="5 5" c={TONES.blue.deep} />
        <Ink d="M368 184L381 181L378 194" w={2} c={TONES.blue.deep} />
      </Anim>

      <Anim className="s-rq7-arrow-2">
        <Arrow from={[418, 214]} to={[522, 214]} bend={-0.25} seed={156} w={2} head={12} />
      </Anim>

      <Anim className="s-rq7-fizz">
        {[
          [594, 0],
          [604, -0.7],
          [598, -1.4],
        ].map(([x, delay]) => (
          <Anim key={delay} className="s-rq7-bubble" style={{ animationDelay: `${delay}s` }}>
            <circle cx={x} cy={210} r={4.5} fill={TONES.green.tint} stroke={TONES.green.deep} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
          </Anim>
        ))}
      </Anim>
      <Flask x={600} y={300} s={1.3} tone="green" seed={157} />

      <Anim className="s-rq7-stamp" origin={[354, 250]}>
        <StampMark x={354} y={250} w={146} h={40} text="SUPPORTED" tone="green" rotate={-9} size={20} bg={PAPER} seed={158} />
      </Anim>

      <Place x={724} y={300} s={2} flip>
        <Pip mood="focused" arms="point" glasses look={1.5} seed={159} />
      </Place>
    </Scene>
  )
}
