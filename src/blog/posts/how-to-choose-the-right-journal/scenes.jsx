import {
  Anim,
  Book,
  Desk,
  Dots,
  Envelope,
  Flag,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  Oval,
  PAPER,
  Pile,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Spine,
  StampMark,
  TEXT_LINE,
  TONES,
  Target,
  Tick,
  Type,
  Worm,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  polyPath,
  r1,
} from '../../ink/index.js'

function TextLines({ x, rows, seed, c = TEXT_LINE }) {
  let d = ''
  rows.forEach(([y, length], i) => {
    d += handLine(x, y, x + length, y, seed + i, 0.4)
  })
  return <Ink d={d} c={c} w={1.7} />
}

/* ------------------------------------------------------------------
   1. The email: a glittering badge, a seven day stamp, and a suspicious
      reader.
   ------------------------------------------------------------------ */

const emailCss = `
.s-cj1-badge { animation: s-cj1-badge 8s ease-in-out infinite; }
.s-cj1-mail { animation: s-cj1-mail 2s ease-in-out infinite; }
.s-cj1-ask { animation: s-cj1-ask 8s ease-in-out infinite; }
@keyframes s-cj1-badge {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(10deg) scale(1.08); }
  50% { transform: rotate(0deg) scale(1); }
  75% { transform: rotate(-10deg) scale(1.08); }
}
@keyframes s-cj1-mail {
  0%, 60%, 100% { transform: translateY(0); }
  70% { transform: translateY(-4px); }
  80% { transform: translateY(0); }
  88% { transform: translateY(-2px); }
}
@keyframes s-cj1-ask {
  0%, 26%, 44%, 100% { transform: scale(1); }
  32%, 38% { transform: scale(1.3); }
}
`

function starPoints(cx, cy, outer, inner, count) {
  return Array.from({ length: count * 2 }, (_, i) => {
    const angle = (i * Math.PI) / count - Math.PI / 2
    const radius = i % 2 ? inner : outer
    return [r1(cx + Math.cos(angle) * radius), r1(cy + Math.sin(angle) * radius)]
  })
}

export function EmailScene() {
  const star = starPoints(472, 212, 36, 26, 12)
  return (
    <Scene w={800} h={246} top={76} css={emailCss} className="s-cj1" label="A laptop shows a suspicious email with a glittering badge reading 8.9 and a stamp reading 7 DAYS. A paper character thinks hard beside it and a bookworm on the desk looks surprised">
      <Desk y={300} depth={22} seed={200} />
      <Laptop x={410} y={300} w={340} seed={201}>
        <path d="M292 141h237v22h-237Z" fill="url(#fill-red)" />
        <Anim className="s-cj1-mail">
          <Envelope x={300} y={145} w={24} h={14} seed={202} />
        </Anim>
        <TextLines x={302} seed={203} rows={[[182, 104], [198, 90], [214, 110]]} />
        <Anim className="s-cj1-badge" origin={[472, 212]}>
          <path d={polyPath(star)} fill="url(#fill-amber)" />
          <Ink d={handPoly(star, { seed: 204, amp: 0.3, closed: true })} w={1.5} />
          <Hand x={472} y={220} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
            8.9
          </Hand>
        </Anim>
        <StampMark x={360} y={256} w={112} h={32} text="7 DAYS" size={20} tone="red" rotate={-6} seed={205} />
      </Laptop>

      <Shadow x={150} y={302} rx={52} ry={6} />
      <Place x={150} y={300} s={2.2}>
        <Pip mood="focused" arms="think" tone="blue" look={1.6} seed={206} />
      </Place>
      <Anim className="s-cj1-ask" origin={[196, 110]}>
        <Hand x={196} y={122} size={36} anchor="middle" weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      </Anim>

      <Place x={622} y={300} s={1.6} flip>
        <Worm seed={207} mood="surprised" />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Scope and audience: a paper plane flies into a target marked scope.
   ------------------------------------------------------------------ */

const planeCss = `
.s-cj2-plane { animation: s-cj2-fly 9s ease-in-out infinite; }
.s-cj2-target { animation: s-cj2-wobble 9s ease-in-out infinite; }
@keyframes s-cj2-fly {
  0%, 4% { transform: translate(-354px, -6px) rotate(-31deg); opacity: 1; }
  12% { transform: translate(-265.9px, -45.4px) rotate(-16deg); }
  20% { transform: translate(-177.5px, -57.5px) rotate(1deg); }
  28% { transform: translate(-88.9px, -42.4px) rotate(18deg); }
  36%, 80% { transform: translate(0, 0) rotate(32deg); opacity: 1; }
  84% { transform: translate(0, 0) rotate(32deg); opacity: 0; }
  85% { transform: translate(-354px, -6px) rotate(-31deg); opacity: 0; }
  94%, 100% { transform: translate(-354px, -6px) rotate(-31deg); opacity: 1; }
}
@keyframes s-cj2-wobble {
  0%, 35%, 50%, 100% { transform: rotate(0deg); }
  38% { transform: rotate(2.5deg); }
  42% { transform: rotate(-2deg); }
  46% { transform: rotate(1deg); }
}
`

function PaperPlane({ seed }) {
  const top = [
    [22, 0],
    [-16, -11],
    [-9, 0],
  ]
  const bottom = [
    [22, 0],
    [-9, 0],
    [-16, 11],
  ]
  return (
    <g>
      <path d={polyPath(bottom)} fill={TONES.grey.tint} />
      <path d={polyPath(top)} fill={PAPER} />
      <Ink d={handPoly([[22, 0], [-16, -11], [-9, 0], [-16, 11]], { seed, amp: 0.2, closed: true })} w={1.5} />
      <Ink d={handLine(-9, 0, 22, 0, seed + 1, 0.1)} w={1.2} />
    </g>
  )
}

export function PlaneScene() {
  return (
    <Scene w={800} h={276} top={40} css={planeCss} className="s-cj2" label="A paper character has just thrown a paper plane along a dotted arc into the centre of a target labelled scope, with a pile of papers behind it">
      <Floor y={304} x1={30} x2={770} seed={210} />
      <Pile x={62} y={304} w={70} count={6} seed={211} />

      <Ink d="M244 162Q420 56 598 168" dash="3 9" c={INK_SOFT} w={1.4} />

      <Anim className="s-cj2-target" origin={[600, 304]}>
        <Ink d={handLine(566, 236, 544, 304, 212, 0.3) + handLine(634, 236, 656, 304, 213, 0.3) + handLine(556, 276, 644, 276, 214, 0.3)} w={2.4} c={TONES.brown.deep} />
        <Target x={600} y={170} r={78} seed={215} />
      </Anim>
      <Hand x={600} y={74} size={26} anchor="middle" weight={700}>
        scope
      </Hand>

      <Place x={598} y={168}>
        <Anim className="s-cj2-plane" spin style={{ transform: 'rotate(32deg)' }}>
          <PaperPlane seed={216} />
        </Anim>
      </Place>

      <Shadow x={160} y={306} rx={52} ry={6} />
      <Place x={160} y={304} s={2.2}>
        <Pip mood="happy" arms="wave" tone="blue" look={1.5} seed={217} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Indexing and metrics: quartiles as four steps within one subject,
      with a paper hopping up to the Q1 flag.
   ------------------------------------------------------------------ */

const STEPS = [
  { x: 150, top: 262, tone: 'grey', label: 'Q4' },
  { x: 280, top: 222, tone: 'blue', label: 'Q3' },
  { x: 410, top: 182, tone: 'green', label: 'Q2' },
  { x: 540, top: 142, tone: 'amber', label: 'Q1' },
]

const stairsCss = `
.s-cj3-hopper { animation: s-cj3-hop 10s ease-in-out infinite; }
.s-cj3-spark { animation: s-cj3-spark 10s ease-in-out infinite; }
@keyframes s-cj3-hop {
  0% { transform: translate(-390px, 120px); opacity: 0; }
  4% { transform: translate(-390px, 120px); opacity: 1; }
  10% { transform: translate(-325px, 44px); }
  16% { transform: translate(-260px, 80px); }
  22% { transform: translate(-195px, 4px); }
  28% { transform: translate(-130px, 40px); }
  34% { transform: translate(-65px, -36px); }
  40%, 80% { transform: translate(0, 0); opacity: 1; }
  86% { transform: translate(0, 0); opacity: 0; }
  90%, 100% { transform: translate(-390px, 120px); opacity: 0; }
}
@keyframes s-cj3-spark {
  0%, 38% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  44% { opacity: 1; transform: scale(1.15) rotate(20deg); }
  74% { opacity: 1; transform: scale(1) rotate(45deg); }
  82%, 100% { opacity: 0; transform: scale(0.3) rotate(60deg); }
}
`

export function StairsScene() {
  return (
    <Scene w={800} h={272} top={40} css={stairsCss} className="s-cj3" label="Four steps labelled Q4, Q3, Q2 and Q1 rise from left to right, each holding a few journals, with a flag on Q1. A small paper hops up the steps while a paper character points at them">
      <Floor y={300} x1={30} x2={770} seed={220} />
      <Hand x={232} y={112} size={24} anchor="middle" weight={700} c={INK_SOFT}>
        one subject
      </Hand>

      {STEPS.map((step, i) => (
        <g key={step.label}>
          <path d={`M${step.x} ${step.top}h130v${300 - step.top}h-130Z`} fill={`url(#fill-${step.tone})`} />
          <Ink d={handPoly([[step.x, step.top], [step.x + 130, step.top], [step.x + 130, 300], [step.x, 300]], { seed: 221 + i, amp: 0.5, closed: true })} w={1.8} />
          <Hand x={step.x + 40} y={step.top + 30} size={26} anchor="middle" weight={700} c={TONES[step.tone].deep}>
            {step.label}
          </Hand>
          <Spine x={step.x + 84} y={step.top} w={14} h={36 + i * 3} tone={['red', 'amber', 'blue', 'green'][i]} seed={230 + i} />
          <Spine x={step.x + 99} y={step.top} w={12} h={30 + i * 4} tone={['blue', 'pink', 'red', 'blue'][i]} seed={240 + i} />
        </g>
      ))}

      <Flag x={648} y={142} h={76} tone="red" seed={250} />
      <Place x={712} y={78}>
        <Anim className="s-cj3-spark" spin style={{ opacity: 0 }}>
          <Sparkle x={0} y={0} s={12} />
        </Anim>
      </Place>

      <Place x={570} y={142}>
        <Anim className="s-cj3-hopper">
          <Sheet x={-13} y={-32} w={26} h={32} lines={3} fold={7} seed={251} sw={1.3} tone="amber" />
        </Anim>
      </Place>

      <Shadow x={78} y={302} rx={44} ry={5} />
      <Place x={78} y={300} s={1.9}>
        <Pip mood="happy" arms="point" tone="blue" look={1.5} seed={252} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Open access and fees: a locked book, the open padlock, and a jar
      that fills with coins.
   ------------------------------------------------------------------ */

const lockCss = `
.s-cj4-shackle { animation: s-cj4-shackle 9s ease-in-out infinite; }
.s-cj4-coin-a { animation: s-cj4-coin-a 9s ease-in infinite; }
.s-cj4-coin-b { animation: s-cj4-coin-b 9s ease-in infinite; }
.s-cj4-locked { animation: s-cj4-jiggle 9s ease-in-out infinite; }
@keyframes s-cj4-shackle {
  0%, 8%, 22%, 100% { transform: translateY(0); }
  12% { transform: translateY(-9px); }
  16% { transform: translateY(0); }
  19% { transform: translateY(-4px); }
}
@keyframes s-cj4-coin-a {
  0%, 30% { transform: translateY(0); opacity: 0; }
  32% { opacity: 1; }
  42% { transform: translateY(150px); opacity: 1; }
  46%, 100% { transform: translateY(150px); opacity: 0; }
}
@keyframes s-cj4-coin-b {
  0%, 52% { transform: translateY(0); opacity: 0; }
  54% { opacity: 1; }
  64% { transform: translateY(138px); opacity: 1; }
  68%, 100% { transform: translateY(138px); opacity: 0; }
}
@keyframes s-cj4-jiggle {
  0%, 74%, 88%, 100% { transform: rotate(0deg); }
  77% { transform: rotate(-5deg); }
  81% { transform: rotate(4deg); }
  85% { transform: rotate(-2deg); }
}
`

function Shackle({ d }) {
  return (
    <g>
      <path d={d} fill="none" stroke={INK} strokeWidth={13} strokeLinecap="round" />
      <path d={d} fill="none" stroke={TONES.grey.tint} strokeWidth={8} strokeLinecap="round" />
    </g>
  )
}

function LockBody({ x, y, w, h, fill, seed }) {
  const body = `M${x + 8} ${y}H${x + w - 8}Q${x + w} ${y} ${x + w} ${y + 8}V${y + h - 8}Q${x + w} ${y + h} ${x + w - 8} ${y + h}H${x + 8}Q${x} ${y + h} ${x} ${y + h - 8}V${y + 8}Q${x} ${y} ${x + 8} ${y}Z`
  const cx = x + w / 2
  const cy = y + h * 0.45
  return (
    <g>
      <path d={body} fill={fill} />
      <Ink d={body} w={1.9} />
      <path d={ellipsePath(cx, cy, w * 0.08, w * 0.08)} fill={INK} />
      <path d={`M${cx - w * 0.035} ${cy}h${w * 0.07}l${w * 0.02} ${h * 0.24}h${-w * 0.11}Z`} fill={INK} />
    </g>
  )
}

function Coin({ x, y, seed }) {
  return <Oval cx={x} cy={y} rx={13} ry={5} fill="url(#fill-amber)" seed={seed} sw={1.4} />
}

export function PadlockScene() {
  return (
    <Scene w={800} h={258} top={76} css={lockCss} className="s-cj4" label="Three pictures in a row: a book behind a closed padlock labelled pay to read, a large open padlock labelled free to read, and a glass jar filling with coins labelled pay to publish">
      <Floor y={290} x1={40} x2={760} seed={260} />

      <Book x={90} y={120} w={100} h={150} tone="blue" seed={261} />
      <Anim className="s-cj4-locked" origin={[140, 266]}>
        <Shackle d="M120 218V198Q120 182 140 182Q160 182 160 198V218" />
        <LockBody x={108} y={214} w={64} h={52} fill={TONES.grey.mid} seed={262} />
      </Anim>
      <Hand x={140} y={322} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        pay to read
      </Hand>

      <Anim className="s-cj4-shackle">
        <Shackle d="M374 178V132Q374 108 400 108Q426 108 426 132V146" />
      </Anim>
      <LockBody x={350} y={172} w={100} h={90} fill="url(#fill-amber)" seed={263} />
      <Hand x={400} y={322} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        free to read
      </Hand>

      <path d="M634 150h52v16h-52Z" fill="#e8f1f5" />
      <path d="M614 166h92q8 0 8 10v104q0 10 -10 10h-88q-10 0 -10 -10v-104q0 -10 8 -10Z" fill="#e8f1f5" opacity="0.8" />
      <Coin x={660} y={276} seed={264} />
      <Coin x={652} y={266} seed={265} />
      <Coin x={668} y={256} seed={266} />
      <Ink d="M634 150h52v16M614 166h92q8 0 8 10v104q0 10 -10 10h-88q-10 0 -10 -10v-104q0 -10 8 -10M634 150v16" w={1.8} />
      <Ink d={handLine(622, 186, 622, 262, 267, 0.2)} c="#ffffff" w={3} o={0.8} />
      <Place x={660} y={96}>
        <Anim className="s-cj4-coin-a" style={{ opacity: 0 }}>
          <Coin x={0} y={0} seed={268} />
        </Anim>
      </Place>
      <Place x={664} y={96}>
        <Anim className="s-cj4-coin-b" style={{ opacity: 0 }}>
          <Coin x={0} y={0} seed={269} />
        </Anim>
      </Place>
      <Hand x={660} y={322} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        pay to publish
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Red flags: little red flags pop up on the email, line by line.
   ------------------------------------------------------------------ */

const FLAGS = [
  { x: 446, y: 110 },
  { x: 474, y: 146 },
  { x: 446, y: 182 },
  { x: 474, y: 218 },
  { x: 446, y: 254 },
]

const flagsCss = `
${FLAGS.map((_, i) => {
  const at = 6 + i * 8
  return `
.s-cj5-flag-${i} { animation: s-cj5-flag-${i} 10s ease-in-out infinite; }
@keyframes s-cj5-flag-${i} {
  0%, ${at}% { transform: scaleY(0); opacity: 0; }
  ${at + 3}% { transform: scaleY(1.15); opacity: 1; }
  ${at + 5}%, 84% { transform: scaleY(1); opacity: 1; }
  90%, 100% { transform: scaleY(1); opacity: 0; }
}`
}).join('\n')}
.s-cj5-anil { animation: s-cj5-shake 10s ease-in-out infinite; }
@keyframes s-cj5-shake {
  0%, 44%, 60%, 100% { transform: rotate(0deg); }
  48% { transform: rotate(-3deg); }
  52% { transform: rotate(3deg); }
  56% { transform: rotate(-2deg); }
}
`

export function FlagsScene() {
  return (
    <Scene w={800} h={302} top={14} css={flagsCss} className="s-cj5" label="A long email beginning Dear Esteemed fills up with little red flags, one on each suspicious line, while one paper character throws up its arms and another points at the letter">
      <Floor y={304} x1={30} x2={770} seed={270} />
      <Sheet x={230} y={26} w={320} h={270} lines={0} fold={24} seed={271} />
      <Hand x={254} y={72} size={22} weight={700}>
        Dear Esteemed...
      </Hand>
      <TextLines x={254} seed={272} rows={[[110, 180], [146, 206], [182, 176], [218, 206], [254, 170]]} />
      {FLAGS.map((flag, i) => (
        <Anim key={i} className={`s-cj5-flag-${i}`} origin={[flag.x, flag.y]}>
          <Flag x={flag.x} y={flag.y} h={30} tone="red" seed={273 + i} />
        </Anim>
      ))}

      <Shadow x={120} y={306} rx={50} ry={6} />
      <Place x={120} y={304} s={2.1}>
        <Anim className="s-cj5-anil" origin={[0, 0]}>
          <Pip mood="surprised" arms="up" tone="blue" seed={280} />
        </Anim>
      </Place>

      <Shadow x={664} y={306} rx={50} ry={6} />
      <Place x={664} y={304} s={2.1} flip>
        <Pip mood="focused" arms="point" tone="green" look={1} seed={281} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Checking a journal: a magnifying glass passes over the journal's
      ID card, and three checks get their ticks.
   ------------------------------------------------------------------ */

const CHECKS = [
  { y: 120, label: 'indexed' },
  { y: 170, label: 'real board' },
  { y: 220, label: 'clear fees' },
]

const passCss = `
.s-cj6-glass { animation: s-cj6-sweep 10s ease-in-out infinite; }
${CHECKS.map((_, i) => {
  const at = 48 + i * 10
  return `
.s-cj6-tick-${i} { animation: s-cj6-tick-${i} 10s ease-in-out infinite; }
@keyframes s-cj6-tick-${i} {
  0%, ${at}% { opacity: 0; transform: scale(0.4); }
  ${at + 3}% { opacity: 1; transform: scale(1.2); }
  ${at + 6}%, 90% { opacity: 1; transform: scale(1); }
  95%, 100% { opacity: 0; transform: scale(0.4); }
}`
}).join('\n')}
@keyframes s-cj6-sweep {
  0%, 5% { transform: translate(0, 0); }
  25% { transform: translate(180px, 20px); }
  45% { transform: translate(70px, 44px); }
  60%, 100% { transform: translate(0, 0); }
}
`

export function PassportScene() {
  let barcode = ''
  for (let x = 472; x <= 546; x += 4) {
    barcode += `M${x} 212V${x % 12 === 0 ? 244 : 238}`
  }
  return (
    <Scene w={800} h={270} top={48} css={passCss} className="s-cj6" label="A paper character in glasses points at a large journal ID card showing a book, an ISSN and a barcode, while a magnifying glass passes over it and three checks, indexed, real board and clear fees, are ticked">
      <Floor y={300} x1={30} x2={770} seed={290} />

      <path d="M280 64h280q12 0 12 12v164q0 12 -12 12h-280q-12 0 -12 -12v-164q0 -12 12 -12Z" fill={PAPER} />
      <path d="M280 64h280q12 0 12 12v22h-304v-22q0 -12 12 -12Z" fill="url(#fill-blue)" />
      <Ink d="M280 64h280q12 0 12 12v164q0 12 -12 12h-280q-12 0 -12 -12v-164q0 -12 12 -12Z" w={2} />
      <Ink d={handLine(268, 98, 572, 98, 291, 0.4)} w={1.4} />
      <Hand x={420} y={89} size={22} anchor="middle" weight={700}>
        journal ID
      </Hand>
      <path d="M288 114h84v90h-84Z" fill={TONES.grey.tint} />
      <Ink d={handPoly([[288, 114], [372, 114], [372, 204], [288, 204]], { seed: 292, amp: 0.3, closed: true })} w={1.4} />
      <Book x={302} y={126} w={56} h={68} tone="red" seed={293} label={false} />
      <Type x={392} y={134} size={20} weight={700}>
        ISSN
      </Type>
      <TextLines x={452} seed={294} rows={[[128, 96]]} c={INK_SOFT} />
      <TextLines x={392} seed={295} rows={[[162, 156], [190, 128]]} />
      <Ink d={barcode} w={1.6} />

      <Place x={330} y={160}>
        <Anim className="s-cj6-glass">
          <Magnifier x={0} y={0} r={34} angle={45} seed={296} />
        </Anim>
      </Place>

      {CHECKS.map((check, i) => (
        <g key={check.label}>
          <Anim className={`s-cj6-tick-${i}`} origin={[612, check.y - 6]}>
            <Tick x={612} y={check.y - 6} s={1.1} />
          </Anim>
          <Hand x={632} y={check.y} size={22} weight={700} c={INK_SOFT}>
            {check.label}
          </Hand>
        </g>
      ))}

      <Shadow x={128} y={302} rx={52} ry={6} />
      <Place x={128} y={300} s={2.2}>
        <Pip mood="focused" arms="point" tone="blue" glasses look={1.5} seed={297} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The shortlist: numbers 2 and 3 wait on the board while number 1
      goes into the post box.
   ------------------------------------------------------------------ */

const shortCss = `
.s-cj7-held { animation: s-cj7-held 10s ease-in-out infinite; }
.s-cj7-fly { animation: s-cj7-fly 10s ease-in-out infinite; }
.s-cj7-box { animation: s-cj7-box 10s ease-in-out infinite; }
@keyframes s-cj7-held {
  0%, 29% { opacity: 1; }
  30%, 90% { opacity: 0; }
  94%, 100% { opacity: 1; }
}
@keyframes s-cj7-fly {
  0%, 29% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0; }
  30% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
  40% { transform: translate(130px, -30px) scale(0.75) rotate(8deg); }
  50% { transform: translate(255px, 70px) scale(0.42) rotate(0deg); opacity: 1; }
  54% { transform: translate(255px, 78px) scale(0.3) rotate(0deg); opacity: 0; }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0; }
}
@keyframes s-cj7-box {
  0%, 52%, 64%, 100% { transform: rotate(0deg); }
  55% { transform: rotate(-3deg); }
  59% { transform: rotate(2deg); }
}
`

function PostBox({ x, y, seed }) {
  const w = 90
  const top = y - 176
  const body = `M${x} ${y}V${top + 26}Q${x + w / 2} ${top - 8} ${x + w} ${top + 26}V${y}Z`
  return (
    <g>
      <path d={body} fill="url(#fill-red)" />
      <path d={`M${x} ${y - 20}h${w}v20h${-w}Z`} fill={TONES.red.deep} opacity="0.5" />
      <path d={`M${x} ${top + 26}h${w}v12h${-w}Z`} fill={TONES.red.deep} opacity="0.35" />
      <Ink d={body} w={1.9} />
      <path d={`M${x + 20} ${top + 50}h${w - 40}v8h${-(w - 40)}Z`} fill={INK} />
      <path d={`M${x + 14} ${top + 90}h${w - 28}v30h${-(w - 28)}Z`} fill={PAPER} />
      <Ink d={handPoly([[x + 14, top + 90], [x + w - 14, top + 90], [x + w - 14, top + 120], [x + 14, top + 120]], { seed, amp: 0.3, closed: true })} w={1.3} />
      <Type x={x + w / 2} y={top + 112} size={20} anchor="middle" weight={700}>
        POST
      </Type>
    </g>
  )
}

function NumberBadge({ x, y, n, r = 14, size = 22 }) {
  return (
    <g>
      <path d={ellipsePath(x, y, r, r)} fill="url(#fill-amber)" />
      <Ink d={handEllipse(x, y, r, r, { seed: 300 + n, amp: 0.4 })} w={1.4} />
      <Hand x={x} y={y + size * 0.36} size={size} anchor="middle" weight={700}>
        {n}
      </Hand>
    </g>
  )
}

export function ShortlistScene() {
  return (
    <Scene w={800} h={266} top={50} css={shortCss} className="s-cj7" label="A cork board holds envelopes numbered 2 and 3, labelled backup and safe option, while a paper character carries envelope number 1 to a red post box, where it drops into the slot">
      <Floor y={304} x1={20} x2={780} seed={310} />

      <path d="M30 60h240v180h-240Z" fill="url(#wood)" />
      <path d="M40 70h220v160h-220Z" fill={TONES.brown.tint} />
      <Dots x={44} y={74} w={212} h={152} count={70} seed={311} c={TONES.brown.deep} o={0.35} />
      <Ink d={handPoly([[30, 60], [270, 60], [270, 240], [30, 240]], { seed: 312, amp: 0.5, closed: true })} w={1.9} />
      <Ink d={handPoly([[40, 70], [260, 70], [260, 230], [40, 230]], { seed: 313, amp: 0.4, closed: true })} w={1.2} />

      <Envelope x={56} y={92} w={90} h={58} seed={314} />
      <PushPin x={101} y={94} tone="blue" seed={315} />
      <NumberBadge x={140} y={96} n={2} />
      <Hand x={101} y={178} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        backup
      </Hand>
      <Envelope x={156} y={124} w={90} h={58} seed={316} />
      <PushPin x={201} y={126} tone="green" seed={317} />
      <NumberBadge x={240} y={128} n={3} />
      <Hand x={201} y={212} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        safe option
      </Hand>

      <Anim className="s-cj7-box" origin={[655, 304]}>
        <PostBox x={610} y={304} seed={318} />
      </Anim>

      <Hand x={462} y={178} size={20} weight={700} c={INK_SOFT}>
        first choice
      </Hand>
      <Shadow x={400} y={306} rx={52} ry={6} />
      <Place x={400} y={304} s={2.2}>
        <Pip mood="grin" arms="carry" tone="blue" seed={319}>
          <g className="s-cj7-held">
            <Envelope x={-24} y={-104} w={48} h={30} seed={320} />
            <NumberBadge x={18} y={-102} n={1} r={7} size={11} />
          </g>
        </Pip>
      </Place>
      <Place x={400} y={108}>
        <Anim className="s-cj7-fly" style={{ opacity: 0 }}>
          <Envelope x={-53} y={-33} w={106} h={66} seed={321} />
        </Anim>
      </Place>
    </Scene>
  )
}
