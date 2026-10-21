import {
  Anim,
  Arrow,
  Box,
  Chai,
  Clock,
  Floor,
  Hand,
  INK,
  Ink,
  Mountain,
  PAPER,
  Pencil,
  Pip,
  Place,
  Plant,
  Poly,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Sun,
  TEXT_LINE,
  TONES,
  Tree,
  Type,
  curve,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/* A tick that can be drawn on with stroke-dashoffset (pathLength 1). */
function DrawTick({ x, y, className, style }) {
  return (
    <path
      className={className}
      style={style}
      d={`M${x} ${y}q3.5 2.5 6 8q6 -13 15 -19`}
      pathLength="1"
      strokeDasharray="1"
      fill="none"
      stroke="#3f8f4f"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

/* Keyframes that tick box i of n in turn, hold, then clear for the loop. */
function tickFrames(prefix, n, first = 8, step = 11) {
  let out = ''
  for (let i = 0; i < n; i++) {
    const start = first + i * step
    out += `.${prefix}-tick-${i} { animation: ${prefix}-tick-${i} 10s ease-in-out infinite; }
@keyframes ${prefix}-tick-${i} {
  0%, ${start}% { stroke-dashoffset: 1; }
  ${start + 5}%, 86% { stroke-dashoffset: 0; }
  94%, 100% { stroke-dashoffset: 1; }
}
`
  }
  return out
}

/* ------------------------------------------------------------------
   1. The four questions an introduction answers.
   ------------------------------------------------------------------ */

const JOB_ROWS = ['what is this about?', 'what is known?', 'what is missing?', 'what will you do?']

const jobCss = `
${tickFrames('s-rpi1', 4)}
.s-rpi1-pip .pip-body { animation: s-rpi1-nod 2.5s ease-in-out infinite; }
@keyframes s-rpi1-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function JobScene() {
  return (
    <Scene w={800} h={268} top={40} css={jobCss} className="s-rpi1" label="A page headed introduction is pinned to the wall with four questions on it, what is this about, what is known, what is missing and what will you do, each ticked in turn while a paper character in glasses reads it">
      <Floor y={300} x1={30} x2={770} seed={100} />
      <Plant x={110} y={300} s={1.3} seed={101} />

      <Sheet x={210} y={52} w={330} h={232} lines={0} fold={20} seed={102} />
      <PushPin x={375} y={62} tone="red" seed={103} />
      <Hand x={375} y={100} size={28} anchor="middle" weight={700}>
        introduction
      </Hand>
      <Ink d={handLine(300, 108, 450, 108, 104, 0.6)} c={TONES.amber.ink} w={2.4} />
      {JOB_ROWS.map((text, i) => {
        const y = 140 + i * 38
        return (
          <g key={text}>
            <Box x={238} y={y - 16} w={20} h={20} fill={PAPER} seed={110 + i * 3} sw={1.5} />
            <DrawTick x={240} y={y - 7} className={`s-rpi1-tick-${i}`} />
            <Hand x={272} y={y} size={23}>
              {text}
            </Hand>
          </g>
        )
      })}

      <Shadow x={660} y={302} rx={38} ry={4.5} />
      <Place x={660} y={300} s={1.7}>
        <g className="s-rpi1-pip">
          <Pip mood="focused" arms="think" glasses tone="amber" look={-1.6} seed={120} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The funnel: three frames, each closer than the last.
   ------------------------------------------------------------------ */

const funnelCss = `
${[0, 1]
  .map(
    (i) => `.s-rpi2-arrow-${i} { animation: s-rpi2-arrow-${i} 6s ease-in-out infinite; }
@keyframes s-rpi2-arrow-${i} {
  0%, ${10 + i * 30}%, ${50 + i * 30}%, 100% { transform: translateX(0); }
  ${30 + i * 30}% { transform: translateX(8px); }
}`,
  )
  .join('\n')}
.s-rpi2-pip .pip-arm-r { animation: s-rpi2-point 3s ease-in-out infinite; }
@keyframes s-rpi2-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

/* A red chilli pod lying on its side. */
function Chilli({ x, y, s = 1, r = 0, seed }) {
  const d = `M${-11 * s} 0Q${-4 * s} ${-5 * s} ${8 * s} ${-2 * s}Q${12 * s} 0 ${8 * s} ${2 * s}Q${-4 * s} ${4.5 * s} ${-11 * s} 0Z`
  return (
    <Place x={x} y={y} r={r}>
      <path d={d} fill={`url(#fill-red)`} />
      <Ink d={d} w={1.2} />
      <Ink d={handLine(-11 * s, 0, -15 * s, -3 * s, seed, 0.2)} c={TONES.green.deep} w={1.8} />
    </Place>
  )
}

const MAT_CHILLIES = [
  [372, 196, -6],
  [398, 202, 8],
  [426, 194, -2],
  [452, 203, 12],
  [478, 195, -10],
  [386, 210, 4],
  [440, 212, -8],
]

export function FunnelScene() {
  return (
    <Scene w={800} h={256} top={44} css={funnelCss} className="s-rpi2" label="Three frames get smaller from left to right: hills and a tree marked chilli farms of Assam, red chillies drying on a mat in the sun marked drying after harvest, and a small solar dryer marked this study, with a paper character pointing at the last">
      {/* Frame one: the broad area. */}
      <Box x={30} y={56} w={256} h={190} fill={TONES.blue.tint} seed={200} sw={2} />
      <path d="M30 216h256v30h-256Z" fill="url(#fill-green)" />
      <Mountain x={40} y={218} w={200} h={120} seed={201} snow={false} />
      <Tree x={250} y={220} s={0.8} seed={202} />
      <Ink d={handLine(30, 216, 286, 216, 203, 0.6)} w={1.6} />
      <Hand x={158} y={278} size={21} anchor="middle" weight={700}>
        chilli farms of Assam
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-rpi2-arrow-0">
          <Arrow from={[296, 150]} to={[332, 150]} bend={0} seed={204} w={2.2} />
        </Anim>
      </Place>

      {/* Frame two: drying after harvest. */}
      <Box x={340} y={92} w={180} h={136} fill={PAPER} seed={210} sw={2} />
      <Sun x={488} y={124} r={14} seed={211} />
      <Poly points={[[356, 188], [506, 188], [512, 220], [350, 220]]} fill={`url(#fill-brown)`} seed={212} sw={1.5} />
      {MAT_CHILLIES.map(([x, y, r], i) => (
        <Chilli key={i} x={x} y={y} r={r} s={0.9} seed={213 + i} />
      ))}
      <Hand x={430} y={258} size={21} anchor="middle" weight={700}>
        drying after harvest
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-rpi2-arrow-1">
          <Arrow from={[528, 160]} to={[562, 160]} bend={0} seed={220} w={2.2} />
        </Anim>
      </Place>

      {/* Frame three: the one dryer this study tests. */}
      <Box x={570} y={118} w={130} h={100} fill={PAPER} seed={230} sw={2.2} />
      <Box x={570} y={118} w={130} h={100} seed={231} sw={1.2} double />
      <Ink d={handLine(596, 204, 594, 214, 232, 0.2) + handLine(674, 204, 676, 214, 233, 0.2)} w={2} c={TONES.brown.deep} />
      <path d="M590 178h90v26h-90Z" fill="url(#wood)" />
      <path d={polyPath([[590, 178], [680, 150], [680, 178]])} fill={TONES.blue.tint} opacity="0.85" />
      <path d={polyPath([[590, 178], [680, 150], [680, 178]])} fill="url(#hatch-blue)" opacity="0.5" />
      <Chilli x={628} y={172} s={0.7} r={-4} seed={234} />
      <Chilli x={656} y={170} s={0.7} r={6} seed={235} />
      <Ink d={handPoly([[590, 178], [680, 150], [680, 204], [590, 204]], { seed: 236, amp: 0.4, closed: true })} w={1.7} />
      <Hand x={635} y={146} size={18} anchor="middle" weight={700} c={TONES.red.deep}>
        this study
      </Hand>

      <Shadow x={756} y={262} rx={26} ry={4} />
      <Place x={756} y={260} s={1.3} flip>
        <g className="s-rpi2-pip">
          <Pip mood="happy" arms="point" tone="green" look={1.4} seed={240} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The CARS model: a crowded hill, one empty patch, a new flag.
   ------------------------------------------------------------------ */

const hillY = (x) => 300 - 146 * Math.exp(-(((x - 340) / 168) ** 2))

const HILL = (() => {
  const pts = []
  for (let x = 30; x <= 650; x += 20) pts.push([x, hillY(x)])
  return pts
})()

const OLD_FLAGS = [
  { x: 150, tone: 'blue', seed: 310 },
  { x: 215, tone: 'amber', seed: 312 },
  { x: 272, tone: 'grey', seed: 314 },
  { x: 418, tone: 'pink', seed: 316 },
  { x: 486, tone: 'blue', seed: 318 },
  { x: 548, tone: 'amber', seed: 320 },
]

const carsCss = `
.s-rpi3-plant { animation: s-rpi3-plant 8s ease-in-out infinite; }
@keyframes s-rpi3-plant {
  0%, 12% { transform: translateY(-70px); opacity: 0; }
  20% { transform: translateY(-70px); opacity: 1; }
  32% { transform: translateY(4px); opacity: 1; }
  36%, 90% { transform: translateY(0); opacity: 1; }
  96%, 100% { transform: translateY(0); opacity: 0; }
}
.s-rpi3-spark { animation: s-rpi3-spark 8s ease-in-out infinite; }
@keyframes s-rpi3-spark {
  0%, 32% { opacity: 0; transform: scale(0.4); }
  38% { opacity: 1; transform: scale(1.1); }
  50%, 100% { opacity: 0; transform: scale(0.4); }
}
.s-rpi3-pip .pip-body { animation: s-rpi3-hop 8s ease-in-out infinite; }
@keyframes s-rpi3-hop {
  0%, 34%, 46%, 100% { transform: translateY(0); }
  38% { transform: translateY(-10px); }
  42% { transform: translateY(0); }
}
`

export function CarsScene() {
  const top = hillY(340)
  return (
    <Scene w={800} h={262} top={50} css={carsCss} className="s-rpi3" label="A green hill is crowded with small flags of earlier studies, marked territory, with one empty patch at the top marked the niche, where a new red flag marked your study is planted while a paper character cheers">
      <Floor y={300} x1={20} x2={780} seed={300} />
      <path d={`${curve(HILL)}L650 300L30 300Z`} fill="url(#fill-green)" />
      <Ink d={curve(HILL)} w={2} />
      <Hand x={340} y={286} size={24} anchor="middle" weight={700} c={TONES.green.deep}>
        territory
      </Hand>

      {OLD_FLAGS.map((flag) => (
        <Ink key={flag.seed} d={handLine(flag.x - 8, hillY(flag.x) + 1, flag.x + 8, hillY(flag.x) + 1, flag.seed + 1, 0.2)} w={1.4} o={0.6} />
      ))}
      {OLD_FLAGS.map((flag) => (
        <g key={`f${flag.seed}`}>
          <PlainFlag x={flag.x} y={hillY(flag.x) + 2} tone={flag.tone} seed={flag.seed} />
        </g>
      ))}

      {/* The niche: an empty patch, ringed in dashes. */}
      <path d={`M${340 - 24} ${top + 2}A24 7 0 1 0 ${340 + 24} ${top + 2}A24 7 0 1 0 ${340 - 24} ${top + 2}Z`} fill={PAPER} opacity="0.7" />
      <Ink d={`M${340 - 24} ${top + 2}A24 7 0 1 0 ${340 + 24} ${top + 2}A24 7 0 1 0 ${340 - 24} ${top + 2}Z`} w={1.6} dash="5 5" c={TONES.red.deep} />
      <Hand x={168} y={96} size={23} weight={700} c={TONES.red.deep}>
        the niche
      </Hand>
      <Arrow from={[230, 104]} to={[318, 148]} bend={-0.2} seed={330} c={TONES.red.deep} w={1.8} />

      <Place x={0} y={0}>
        <Anim className="s-rpi3-plant">
          <PlainFlag x={340} y={top + 3} h={78} tone="red" seed={332} />
        </Anim>
      </Place>
      <Hand x={420} y={82} size={23} weight={700}>
        your study
      </Hand>
      <Arrow from={[418, 88]} to={[386, 86]} bend={0.1} seed={334} w={1.8} />
      <Anim className="s-rpi3-spark" spin style={{ opacity: 0 }}>
        <Sparkle x={300} y={92} s={9} />
      </Anim>

      <Shadow x={712} y={302} rx={34} ry={4.5} />
      <Place x={712} y={300} s={1.6} flip>
        <g className="s-rpi3-pip">
          <Pip mood="grin" arms="up" tone="amber" look={1.4} seed={340} />
        </g>
      </Place>
    </Scene>
  )
}

/* A small flag on a pole, without the shared waving cloth. */
function PlainFlag({ x, y, h = 56, tone, seed }) {
  const cloth = `M${x} ${y - h}Q${x + 16} ${y - h - 6} ${x + 32} ${y - h + 2}L${x + 30} ${y - h + 22}Q${x + 16} ${y - h + 15} ${x} ${y - h + 20}Z`
  return (
    <g>
      <path d={cloth} fill={`url(#fill-${tone})`} />
      <Ink d={cloth} w={1.4} />
      <Ink d={handLine(x, y, x, y - h - 3, seed, 0.3)} w={2.2} />
    </g>
  )
}

/* ------------------------------------------------------------------
   4. Six steps, ticked off in the notebook.
   ------------------------------------------------------------------ */

const STEP_ROWS = ['open with the problem', 'background', 'the gap', 'aim or question', 'contribution', 'roadmap, if needed']

const stepsCss = `
${tickFrames('s-rpi4', 6, 6, 10)}
.s-rpi4-pip .pip-arm-r { animation: s-rpi4-write 0.8s ease-in-out infinite; }
@keyframes s-rpi4-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
}
`

export function StepsScene() {
  return (
    <Scene w={800} h={282} top={30} css={stepsCss} className="s-rpi4" label="A notebook page lists six steps, open with the problem, background, the gap, aim or question, contribution and roadmap if needed, each ticked in turn while a paper character writes with a pencil">
      <Floor y={300} x1={30} x2={770} seed={400} />
      <Clock x={700} y={90} r={28} seed={401} />
      <Chai x={690} y={300} s={1.3} seed={402} />

      <Sheet x={240} y={40} w={340} h={250} lines={0} fold={18} seed={403} />
      <rect x={250} y={60} width={316} height={222} fill="url(#ruled)" opacity="0.8" />
      <Ink d={handLine(282, 46, 282, 286, 404, 0.4)} c={TONES.red.mid} w={1.6} />
      {STEP_ROWS.map((text, i) => {
        const y = 88 + i * 35
        return (
          <g key={text}>
            <Box x={292} y={y - 17} w={20} h={20} fill={PAPER} seed={410 + i * 3} sw={1.5} />
            <DrawTick x={294} y={y - 8} className={`s-rpi4-tick-${i}`} />
            <Hand x={324} y={y} size={22}>
              {text}
            </Hand>
          </g>
        )
      })}

      <Shadow x={140} y={302} rx={38} ry={4.5} />
      <Place x={140} y={300} s={1.8}>
        <g className="s-rpi4-pip">
          <Pip mood="focused" arms="write" tone="blue" look={1.6} seed={430}>
            <Anim className="pip-arm-r" origin={[22, -39]}>
              <Pencil x={36} y={-12} length={34} angle={-70} tone="amber" seed={431} />
            </Anim>
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The gap statement: a hanging card that says however.
   ------------------------------------------------------------------ */

const gapCss = `
.s-rpi5-swing { animation: s-rpi5-swing 4s ease-in-out infinite; }
@keyframes s-rpi5-swing {
  0%, 100% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
}
.s-rpi5-ask { animation: s-rpi5-ask 3s ease-in-out infinite; }
@keyframes s-rpi5-ask {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
`

export function GapScene() {
  return (
    <Scene w={800} h={270} top={36} css={gapCss} className="s-rpi5" label="A blue page marked what is known and a red page marked what is missing hang on either side of a swinging card that reads however, with arrows from one page through the card to the other, while a paper character points up at the card">
      <Floor y={300} x1={30} x2={770} seed={500} />

      <Sheet x={50} y={70} w={200} h={168} tone="blue" lines={0} fold={18} seed={501} />
      <Hand x={150} y={110} size={23} anchor="middle" weight={700}>
        what is known
      </Hand>
      <Ink d={handLine(76, 140, 222, 140, 502, 0.4) + handLine(76, 162, 210, 162, 503, 0.4) + handLine(76, 184, 218, 184, 504, 0.4) + handLine(76, 206, 180, 206, 505, 0.4)} c={TONES.blue.deep} w={1.6} o={0.6} />

      <Sheet x={550} y={70} w={200} h={168} tone="red" lines={0} fold={18} seed={506} />
      <Hand x={650} y={110} size={23} anchor="middle" weight={700}>
        what is missing
      </Hand>
      <Anim className="s-rpi5-ask" origin={[650, 176]}>
        <Hand x={650} y={200} size={64} anchor="middle" weight={700} c={TONES.red.deep}>
          ?
        </Hand>
      </Anim>

      <Arrow from={[256, 160]} to={[312, 152]} bend={-0.1} seed={510} w={2} />
      <Arrow from={[490, 152]} to={[544, 160]} bend={-0.1} seed={512} w={2} />

      <Anim className="s-rpi5-swing" origin={[400, 44]}>
        <Ink d={handLine(400, 44, 352, 118, 514, 0.2) + handLine(400, 44, 448, 118, 515, 0.2)} w={1.4} />
        <circle cx={400} cy={44} r={4} fill={TONES.grey.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
        <Box x={318} y={116} w={164} h={64} r={6} fill="url(#fill-amber)" seed={516} sw={2} />
        <Hand x={400} y={160} size={34} anchor="middle" weight={700}>
          however,
        </Hand>
      </Anim>

      <Shadow x={400} y={302} rx={34} ry={4.5} />
      <Place x={400} y={300} s={1.4}>
        <Pip mood="happy" arms="up" tone="green" look={0} seed={520} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The example: a wandering draft and a four-paragraph rewrite.
   ------------------------------------------------------------------ */

const PARAS = [
  { label: 'context', tone: 'amber' },
  { label: 'what is known', tone: 'blue' },
  { label: 'the gap', tone: 'red' },
  { label: 'the aim', tone: 'green' },
]

const exampleCss = `
${PARAS.map(
  (_, i) => `.s-rpi6-para-${i} { animation: s-rpi6-para-${i} 9s ease-in-out infinite; }
@keyframes s-rpi6-para-${i} {
  0%, ${8 + i * 12}% { opacity: 0; transform: translateX(-10px); }
  ${14 + i * 12}%, 88% { opacity: 1; transform: translateX(0); }
  95%, 100% { opacity: 0; transform: translateX(-10px); }
}`,
).join('\n')}
.s-rpi6-pip .pip-body { animation: s-rpi6-bob 3s ease-in-out infinite; }
@keyframes s-rpi6-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function ExampleScene() {
  return (
    <Scene w={800} h={276} top={34} css={exampleCss} className="s-rpi6" label="On the left a thick draft marked five pages opens with since ancient times, struck through in red; an arrow leads to a single page on the right with four coloured paragraphs, context, what is known, the gap and the aim, while a paper character smiles between them">
      <Floor y={300} x1={30} x2={770} seed={600} />

      <Sheet x={92} y={62} w={210} h={226} lines={0} seed={601} />
      <Sheet x={80} y={70} w={210} h={226} lines={0} seed={602} />
      <Sheet x={66} y={78} w={210} h={220} lines={0} seed={603} />
      <Hand x={172} y={54} size={22} anchor="middle" weight={700}>
        5 pages
      </Hand>
      <Hand x={84} y={118} size={23}>
        Since ancient times,
      </Hand>
      <Ink d={handLine(80, 112, 262, 108, 604, 0.6)} c={TONES.red.ink} w={2.6} />
      {[146, 168, 190, 212, 234, 256, 278].map((y, i) => (
        <Ink key={y} d={handLine(86, y, 250 - (i % 3) * 22, y, 605 + i, 0.4)} c={TEXT_LINE} w={1.6} />
      ))}

      <Arrow from={[300, 150]} to={[470, 150]} bend={-0.12} seed={620} w={2.2} />

      <Sheet x={492} y={54} w={240} h={236} lines={0} fold={18} seed={621} />
      {PARAS.map((para, i) => {
        const y = 78 + i * 52
        return (
          <g key={para.label} className={`s-rpi6-para-${i}`}>
            <path d={`M514 ${y}h188v40h-188Z`} fill={TONES[para.tone].tint} />
            <Ink d={handPoly([[514, y], [702, y], [702, y + 40], [514, y + 40]], { seed: 630 + i * 3, amp: 0.4, closed: true })} c={TONES[para.tone].deep} w={1.4} />
            <Hand x={526} y={y + 27} size={21} weight={700}>
              {para.label}
            </Hand>
          </g>
        )
      })}

      <Shadow x={386} y={302} rx={30} ry={4} />
      <Place x={386} y={300} s={1.35}>
        <g className="s-rpi6-pip">
          <Pip mood="grin" arms="hips" tone="pink" look={1.6} seed={650} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Length and tense: one sheet in ten, and three verb cards.
   ------------------------------------------------------------------ */

const TENSES = [
  { word: 'is', note: 'present', tone: 'green', x: 150 },
  { word: 'was', note: 'past', tone: 'blue', x: 320 },
  { word: 'has been', note: 'present perfect', tone: 'amber', x: 510 },
]

const lengthCss = `
.s-rpi7-lift { animation: s-rpi7-lift 4s ease-in-out infinite; }
@keyframes s-rpi7-lift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.s-rpi7-pip .pip-arm-r { animation: s-rpi7-point 3s ease-in-out infinite; }
@keyframes s-rpi7-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

export function LengthScene() {
  const sheets = []
  for (let i = 0; i < 10; i++) {
    const x = 62 + i * 66
    sheets.push(
      i === 0 ? (
        <Anim key={i} className="s-rpi7-lift">
          <Sheet x={x} y={98} w={54} h={70} tone="amber" lines={3} fold={11} seed={700 + i} />
        </Anim>
      ) : (
        <Sheet key={i} x={x} y={98} w={54} h={70} lines={3} fold={11} seed={700 + i} />
      ),
    )
  }
  return (
    <Scene w={800} h={286} top={50} css={lengthCss} className="s-rpi7" label="Ten pages stand in a row with the first, in amber, marked about one in ten, and below them three cards show the verbs is, was and has been for the present, past and present perfect tenses, while a paper character points at them">
      <Floor y={332} x1={30} x2={770} seed={720} />
      <Hand x={62} y={84} size={22} weight={700} c={TONES.amber.deep}>
        intro: about one in ten
      </Hand>
      {sheets}
      <Ink d={`M62 182Q62 192 72 192H${(62 + 9 * 66 + 54 + 62) / 2 - 10}Q${(62 + 9 * 66 + 54 + 62) / 2} 192 ${(62 + 9 * 66 + 54 + 62) / 2} 200Q${(62 + 9 * 66 + 54 + 62) / 2} 192 ${(62 + 9 * 66 + 54 + 62) / 2 + 10} 192H${62 + 9 * 66 + 44}Q${62 + 9 * 66 + 54} 192 ${62 + 9 * 66 + 54} 182`} w={1.6} />
      <Type x={(62 + 9 * 66 + 54 + 62) / 2} y={222} size={17} anchor="middle" c={TONES.grey.deep}>
        the whole paper
      </Type>

      {TENSES.map((t, i) => {
        const w = t.word.length > 3 ? 150 : 100
        return (
          <g key={t.word}>
            <Box x={t.x - w / 2} y={244} w={w} h={50} r={6} fill={`url(#fill-${t.tone})`} seed={730 + i * 2} sw={1.8} />
            <Hand x={t.x} y={279} size={28} anchor="middle" weight={700}>
              {t.word}
            </Hand>
            <Type x={t.x} y={316} size={15} anchor="middle" c={TONES.grey.deep}>
              {t.note}
            </Type>
          </g>
        )
      })}

      <Shadow x={706} y={334} rx={30} ry={4} />
      <Place x={706} y={332} s={1.35} flip>
        <g className="s-rpi7-pip">
          <Pip mood="happy" arms="point" tone="paper" look={1.4} seed={740} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Mistakes, and writing the introduction last.
   ------------------------------------------------------------------ */

const ORDER = ['methods', 'results', 'discussion', 'introduction']

const lastCss = `
.s-rpi8-strike { animation: s-rpi8-strike 7s ease-in-out infinite; }
@keyframes s-rpi8-strike {
  0%, 10% { stroke-dashoffset: 1; }
  24%, 88% { stroke-dashoffset: 0; }
  96%, 100% { stroke-dashoffset: 1; }
}
.s-rpi8-pip .pip-body { animation: s-rpi8-hop 7s ease-in-out infinite; }
@keyframes s-rpi8-hop {
  0%, 40%, 56%, 100% { transform: translateY(0); }
  44% { transform: translateY(-10px); }
  48% { transform: translateY(0); }
  52% { transform: translateY(-5px); }
}
.s-rpi8-spark { animation: s-rpi8-spark 7s ease-in-out infinite; }
@keyframes s-rpi8-spark {
  0%, 40% { opacity: 0; transform: scale(0.4); }
  46% { opacity: 1; transform: scale(1.1); }
  58%, 100% { opacity: 0; transform: scale(0.4); }
}
`

export function LastScene() {
  return (
    <Scene w={800} h={294} top={20} css={lastCss} className="s-rpi8" label="A first draft beginning since ancient times is struck through with a red line, and beside it four blocks rise like stairs marked methods, results, discussion and introduction, with a paper character standing on the last and highest one">
      <Floor y={300} x1={30} x2={770} seed={800} />

      <Sheet x={48} y={70} w={290} h={210} lines={0} fold={20} seed={801} />
      <PushPin x={193} y={80} tone="blue" seed={802} />
      <Hand x={72} y={128} size={25}>
        Since ancient times,
      </Hand>
      <Hand x={72} y={160} size={25}>
        chillies have been...
      </Hand>
      <Ink
        d="M66 118Q180 112 300 116M66 150Q170 146 300 150"
        c={TONES.red.ink}
        w={3}
        scale
        pathLength="1"
        strokeDasharray="1"
        className="s-rpi8-strike"
      />
      {[194, 216, 238, 258].map((y, i) => (
        <Ink key={y} d={handLine(72, y, 300 - (i % 2) * 40, y, 803 + i, 0.4)} c={TEXT_LINE} w={1.6} />
      ))}

      {ORDER.map((label, i) => {
        const x = 378 + i * 98
        const top = 250 - i * 42
        const last = i === ORDER.length - 1
        return (
          <g key={label}>
            <Box x={x} y={top} w={94} h={300 - top} fill={last ? 'url(#fill-amber)' : `url(#fill-grey)`} seed={820 + i * 2} sw={1.8} />
            <Type x={x + 10} y={top + 20} size={15} weight={700} c={TONES.grey.deep}>
              {i + 1}
            </Type>
            <Hand x={x + 47} y={top + 40} size={label.length > 10 ? 15 : label.length > 8 ? 16 : 19} anchor="middle" weight={700}>
              {label}
            </Hand>
          </g>
        )
      })}

      <Anim className="s-rpi8-spark" spin style={{ opacity: 0 }}>
        <Sparkle x={760} y={84} s={9} />
      </Anim>
      <Place x={725} y={124} s={1.15}>
        <g className="s-rpi8-pip">
          <Pip mood="proud" arms="up" tone="green" look={0} seed={840} />
        </g>
      </Place>
    </Scene>
  )
}
