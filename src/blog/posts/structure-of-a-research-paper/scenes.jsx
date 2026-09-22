import {
  Anim,
  Crate,
  Floor,
  Grid,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Key,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Sun,
  TEXT_LINE,
  TONES,
  Target,
  Type,
  curve,
  handCurve,
  handLine,
  handPoly,
  polyPath,
  Funnel,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. IMRaD as an hourglass.
   ------------------------------------------------------------------ */

const HX = 330
const GLASS =
  `M${HX - 110} 44C${HX - 110} 110 ${HX - 14} 140 ${HX - 14} 170` +
  `C${HX - 14} 200 ${HX - 110} 230 ${HX - 110} 296` +
  `L${HX + 110} 296C${HX + 110} 230 ${HX + 14} 200 ${HX + 14} 170` +
  `C${HX + 14} 140 ${HX + 110} 110 ${HX + 110} 44Z`

/* A small arrow steps down the side of the glass, part by part, in the
   order a reader meets them. */
const hourglassCss = `
.s-sp1-pointer { animation: s-sp1-step 10s ease-in-out infinite; }
@keyframes s-sp1-step {
  0%, 18% { transform: translateY(0); }
  25%, 43% { transform: translateY(58px); }
  50%, 68% { transform: translateY(112px); }
  75%, 93% { transform: translateY(180px); }
  100% { transform: translateY(0); }
}
`

const BANDS = [
  { y1: 44, y2: 120, tone: 'blue', letter: 'I', ly: 96, size: 36, label: 'introduction' },
  { y1: 120, y2: 170, tone: 'green', letter: 'M', ly: 154, size: 26, label: 'methods' },
  { y1: 170, y2: 222, tone: 'amber', letter: 'R', ly: 208, size: 26, label: 'results' },
  { y1: 222, y2: 296, tone: 'pink', letter: 'D', ly: 276, size: 36, label: 'discussion' },
]

export function HourglassScene() {
  return (
    <Scene w={800} h={306} top={16} css={hourglassCss} className="s-sp1" label="A tall hourglass divided into four coloured bands for introduction, methods, results and discussion, wide at the top, narrow in the middle and wide again at the bottom, with sand trickling through the waist">
      <defs>
        <clipPath id="s-sp1-glass">
          <path d={GLASS} />
        </clipPath>
      </defs>
      <Floor y={310} x1={40} x2={760} seed={100} />

      <g clipPath="url(#s-sp1-glass)">
        {BANDS.map((band) => (
          <path key={band.letter} d={`M${HX - 120} ${band.y1}h240v${band.y2 - band.y1}h-240Z`} fill={`url(#fill-${band.tone})`} />
        ))}
      </g>
      <Ink d={GLASS} w={2} />
      {BANDS.map((band) => (
        <Hand key={band.letter} x={HX} y={band.ly} size={band.size} anchor="middle" weight={700}>
          {band.letter}
        </Hand>
      ))}

      <path d={`M${HX - 126} 30h252v14h-252Z`} fill="url(#wood)" />
      <path d={`M${HX - 126} 296h252v14h-252Z`} fill="url(#wood)" />
      <Ink d={handPoly([[HX - 126, 30], [HX + 126, 30], [HX + 126, 44], [HX - 126, 44]], { seed: 101, amp: 0.4, closed: true }) + handPoly([[HX - 126, 296], [HX + 126, 296], [HX + 126, 310], [HX - 126, 310]], { seed: 102, amp: 0.4, closed: true })} w={1.8} />
      <Ink d={handLine(HX - 118, 44, HX - 118, 296, 103, 0.3) + handLine(HX + 118, 44, HX + 118, 296, 104, 0.3)} w={3} c={TONES.brown.deep} />

      {BANDS.map((band, i) => (
        <g key={band.label}>
          <Ink d={handLine(486, band.ly - 8, 540, band.ly - 8, 105 + i, 0.4)} dash="3 6" c={INK_SOFT} w={1.3} />
          <Hand x={552} y={band.ly} size={24} weight={700}>
            {band.label}
          </Hand>
        </g>
      ))}
      <Place x={470} y={BANDS[0].ly - 8}>
        <Anim className="s-sp1-pointer">
          <path d="M-8 0L8 -8L8 8Z" fill={TONES.amber.ink} />
          <Ink d="M-8 0L8 -8L8 8Z" w={1.3} />
        </Anim>
      </Place>

      <Shadow x={116} y={312} rx={44} ry={5} />
      <Place x={116} y={310} s={1.8}>
        <Pip mood="happy" arms="point" glasses tone="green" look={1.5} seed={110} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Title, abstract and keywords: the front door.
   ------------------------------------------------------------------ */

const doorCss = `
.s-sp2-leaf { animation: s-sp2-open 9s ease-in-out infinite; }
.s-sp2-glow { animation: s-sp2-glow 9s ease-in-out infinite; }
.s-sp2-keys { animation: s-sp2-swing 3s ease-in-out infinite; }
@keyframes s-sp2-open {
  0%, 36%, 90%, 100% { transform: scaleX(1); }
  48%, 76% { transform: scaleX(0.52); }
}
@keyframes s-sp2-glow {
  0%, 38%, 88%, 100% { opacity: 0; }
  50%, 74% { opacity: 1; }
}
@keyframes s-sp2-swing {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}
`

export function DoorScene() {
  const frame = [[470, 300], [470, 120], [584, 120], [584, 300]]
  return (
    <Scene w={800} h={252} top={68} css={doorCss} className="s-sp2" label="A door with a name plate reading title, a notice board beside it holding the abstract, and a ring of keys on the handle labelled keywords, while a reader studies the notice board">
      <Floor y={300} x1={40} x2={760} seed={120} />

      <path d="M440 78h174v34h-174Z" fill="url(#wood)" />
      <Ink d={handPoly([[440, 78], [614, 78], [614, 112], [440, 112]], { seed: 121, amp: 0.4, closed: true })} w={1.8} />
      <Hand x={527} y={103} size={24} anchor="middle" weight={700}>
        title
      </Hand>

      <path d={polyPath(frame)} fill="#3b322b" />
      <Anim className="s-sp2-glow" style={{ opacity: 0 }}>
        <path d="M472 300L584 300L700 318L420 318Z" fill={TONES.amber.tint} opacity="0.8" />
        <path d={polyPath([[472, 122], [582, 122], [582, 300], [472, 300]])} fill={TONES.amber.tint} opacity="0.55" />
      </Anim>
      <Anim className="s-sp2-leaf" origin={[470, 210]}>
        <path d="M470 120h114v180h-114Z" fill="url(#fill-blue)" />
        <Ink d={handPoly([[470, 120], [584, 120], [584, 300], [470, 300]], { seed: 122, amp: 0.4, closed: true })} w={1.8} />
        <Ink d={handPoly([[486, 138], [568, 138], [568, 202], [486, 202]], { seed: 123, amp: 0.3, closed: true }) + handPoly([[486, 222], [568, 222], [568, 284], [486, 284]], { seed: 124, amp: 0.3, closed: true })} w={1.2} c={TONES.blue.deep} />
        <circle cx={568} cy={214} r={4} fill={TONES.amber.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
        <Place x={568} y={218}>
          <Anim className="s-sp2-keys" origin={[0, 0]}>
            <Ink d="M0 0Q-4 10 0 16Q4 10 0 0" w={1.4} c={INK_SOFT} />
            <Key x={-4} y={24} s={0.42} angle={100} tone="amber" seed={125} />
            <Key x={6} y={24} s={0.42} angle={78} tone="green" seed={126} />
          </Anim>
        </Place>
      </Anim>
      <Ink d={handPoly(frame, { seed: 127, amp: 0.4 })} w={2.6} />
      <Hand x={600} y={262} size={22} weight={700} c={INK_SOFT}>
        keywords
      </Hand>

      <Ink d={handLine(292, 300, 300, 250, 128, 0.3) + handLine(408, 300, 400, 250, 129, 0.3)} w={2.4} c={TONES.brown.deep} />
      <path d="M270 132h160v118h-160Z" fill="url(#wood)" />
      <Ink d={handPoly([[270, 132], [430, 132], [430, 250], [270, 250]], { seed: 130, amp: 0.5, closed: true })} w={1.8} />
      <Sheet x={286} y={142} w={128} h={100} lines={0} seed={131} />
      <Hand x={350} y={170} size={22} anchor="middle" weight={700}>
        abstract
      </Hand>
      <Ink d={handLine(302, 190, 396, 190, 132, 0.4) + handLine(302, 206, 388, 206, 133, 0.4) + handLine(302, 222, 380, 222, 134, 0.4)} c={TEXT_LINE} w={1.6} />

      <Shadow x={160} y={302} rx={44} ry={5} />
      <Place x={160} y={300} s={1.8}>
        <Pip mood="focused" arms="think" look={1.6} seed={135} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Introduction: broad things go in, one question comes out.
   ------------------------------------------------------------------ */

const CARDS = [
  { text: 'the big picture', x: 40, y: 40, w: 172, dx: 274, dy: 6 },
  { text: 'what is known', x: 56, y: 98, w: 156, dx: 266, dy: -52 },
  { text: 'the gap', x: 100, y: 156, w: 112, dx: 244, dy: -110 },
]

const funnelCss = `
${CARDS.map((card, i) => {
  const start = 8 + i * 18
  return `.s-sp3-card-${i} { animation: s-sp3-card-${i} 11s ease-in-out infinite; }
@keyframes s-sp3-card-${i} {
  0%, ${start}% { transform: translate(0, 0) scale(1); opacity: 1; }
  ${start + 10}% { transform: translate(${card.dx}px, ${card.dy}px) scale(0.5); opacity: 0; }
  ${start + 11}%, 88% { transform: translate(0, 0) scale(1); opacity: 0; }
  94%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
}`
}).join('\n')}
.s-sp3-drop { animation: s-sp3-drop 11s ease-in infinite; }
.s-sp3-target { animation: s-sp3-pulse 11s ease-in-out infinite; }
@keyframes s-sp3-drop {
  0%, 66% { transform: translateY(0); opacity: 0; }
  68% { opacity: 1; }
  76% { transform: translateY(40px); opacity: 1; }
  78%, 100% { transform: translateY(40px); opacity: 0; }
}
@keyframes s-sp3-pulse {
  0%, 76%, 100% { transform: scale(1); }
  80% { transform: scale(1.15); }
  84% { transform: scale(1); }
}
`

export function FunnelScene() {
  return (
    <Scene w={800} h={304} top={26} css={funnelCss} className="s-sp3" label="Three cards, the big picture, what is known and the gap, slide into a wide funnel, and a single drop falls out of the narrow end onto a target labelled your question">
      <Floor y={318} x1={40} x2={760} seed={140} />

      {CARDS.map((card, i) => (
        <Anim key={card.text} className={`s-sp3-card-${i}`} spin>
          <path d={`M${card.x} ${card.y}h${card.w}v36h${-card.w}Z`} fill={PAPER} />
          <Ink d={handPoly([[card.x, card.y], [card.x + card.w, card.y], [card.x + card.w, card.y + 36], [card.x, card.y + 36]], { seed: 141 + i, amp: 0.4, closed: true })} w={1.6} />
          <Hand x={card.x + card.w / 2} y={card.y + 25} size={21} anchor="middle" weight={700}>
            {card.text}
          </Hand>
        </Anim>
      ))}

      <Funnel x={400} y={70} w={250} h={172} tone="amber" seed={145} />
      <Place x={400} y={250}>
        <Anim className="s-sp3-drop" style={{ opacity: 0 }}>
          <path d="M0 -6Q-5 2 0 6Q5 2 0 -6Z" fill={TONES.blue.mid} />
          <Ink d="M0 -6Q-5 2 0 6Q5 2 0 -6Z" w={1.2} />
        </Anim>
      </Place>
      <Place x={400} y={294}>
        <Anim className="s-sp3-target" spin>
          <Target x={0} y={0} r={22} seed={146} />
        </Anim>
      </Place>
      <Hand x={436} y={302} size={22} weight={700} c={INK_SOFT}>
        your question
      </Hand>

      <Shadow x={664} y={320} rx={46} ry={5} />
      <Place x={664} y={318} s={1.9} flip>
        <Pip mood="happy" arms="point" look={1.4} seed={147} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Methods: a recipe card, two panels and a meter.
   ------------------------------------------------------------------ */

const methodsCss = `
.s-sp4-brush { animation: s-sp4-brush 3s ease-in-out infinite; }
.s-sp4-needle { animation: s-sp4-needle 4s ease-in-out infinite; }
.s-sp4 .pip-arm-r { animation: s-sp4-write 0.5s ease-in-out infinite alternate; }
@keyframes s-sp4-brush {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(84px); }
}
@keyframes s-sp4-needle {
  0%, 100% { transform: rotate(-20deg); }
  50% { transform: rotate(18deg); }
}
@keyframes s-sp4-write { from { transform: rotate(-4deg); } to { transform: rotate(6deg); } }
`

function Panel({ x, dusty, seed }) {
  const top = [[x, 176], [x + 120, 156], [x + 132, 214], [x + 12, 234]]
  let grid = ''
  for (let i = 1; i < 4; i++) {
    const t = i / 4
    grid += handLine(x + 120 * t, 176 - 20 * t, x + 12 + 120 * t, 234 - 20 * t, seed + i, 0.2)
  }
  grid += handLine(x + 6, 205, x + 126, 185, seed + 9, 0.2)
  return (
    <g>
      <Ink d={handLine(x + 20, 230, x + 16, 300, seed + 10, 0.3) + handLine(x + 116, 212, x + 122, 300, seed + 11, 0.3)} w={2.4} c={TONES.grey.ink} />
      <path d={polyPath(top)} fill="url(#fill-blue)" />
      <Ink d={grid} w={1} c={TONES.blue.deep} />
      {dusty ? (
        <g opacity="0.75">
          {Array.from({ length: 26 }, (_, i) => (
            <circle key={i} cx={x + 14 + ((i * 37) % 110)} cy={186 + ((i * 23) % 38) - ((i * 37) % 110) / 6} r={1.5 + (i % 3) * 0.6} fill={TONES.brown.ink} />
          ))}
        </g>
      ) : null}
      <Ink d={handPoly(top, { seed, amp: 0.4, closed: true })} w={1.8} />
    </g>
  )
}

export function MethodsScene() {
  return (
    <Scene w={800} h={302} top={20} css={methodsCss} className="s-sp4" label="A recipe card of numbered steps beside a paper character taking notes, and two small rooftop solar panels, one being brushed clean and one left dusty, wired to a meter whose needle swings">
      <Floor y={300} x1={30} x2={770} seed={150} />
      <Sun x={748} y={58} r={18} seed={151} />

      <Sheet x={50} y={52} w={160} h={206} lines={0} seed={152} />
      <Hand x={130} y={86} size={24} anchor="middle" weight={700}>
        method
      </Hand>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={74} cy={120 + i * 34} r={11} fill={TONES.green.tint} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
          <Hand x={74} y={127 + i * 34} size={18} anchor="middle" weight={700}>
            {i + 1}
          </Hand>
          <Ink d={handLine(94, 120 + i * 34, 190 - (i % 2) * 22, 120 + i * 34, 153 + i, 0.3)} c={INK_SOFT} w={1.6} />
        </g>
      ))}

      <Shadow x={296} y={302} rx={46} ry={5} />
      <Place x={296} y={300} s={1.9}>
        <Pip mood="focused" arms="write" look={1.5} seed={160}>
          <Sheet x={10} y={-34} w={22} h={28} lines={3} fold={5} seed={161} sw={1.2} />
        </Pip>
      </Place>

      <Panel x={420} dusty={false} seed={162} />
      <Panel x={596} dusty seed={172} />
      <Place x={432} y={172}>
        <Anim className="s-sp4-brush">
          <path d="M0 0h26v-8h-26Z" fill="url(#wood)" />
          <Ink d={handPoly([[0, 0], [26, 0], [26, -8], [0, -8]], { seed: 180, amp: 0.2, closed: true })} w={1.3} />
          <Ink d="M3 0v6M8 0v7M13 0v6M18 0v7M23 0v6" w={1.1} c={TONES.brown.deep} />
          <Ink d="M13 -8L20 -26" w={2.2} c={TONES.brown.deep} />
        </Anim>
      </Place>

      <path d="M560 262h44v36h-44Z" fill={TONES.grey.tint} />
      <Ink d={handPoly([[560, 262], [604, 262], [604, 298], [560, 298]], { seed: 181, amp: 0.3, closed: true })} w={1.6} />
      <path d="M566 290A16 16 0 0 1 598 290Z" fill={PAPER} />
      <Place x={582} y={290}>
        <Anim className="s-sp4-needle" origin={[0, 0]}>
          <Ink d="M0 0L0 -13" w={1.6} c={TONES.red.ink} />
        </Anim>
      </Place>
      <Ink d={`M546 240Q556 262 566 264M${650} 236Q620 250 600 264`} c={INK_SOFT} w={1.3} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Results: the bars rise, error bars and all.
   ------------------------------------------------------------------ */

const BARS = [
  { x: 300, h: 170, tone: 'blue' },
  { x: 356, h: 160, tone: 'blue' },
  { x: 432, h: 118, tone: 'brown' },
  { x: 488, h: 104, tone: 'brown' },
]

const resultsCss = `
${BARS.map((_, i) => {
  const start = 6 + i * 10
  return `.s-sp5-bar-${i} { animation: s-sp5-bar-${i} 10s ease-out infinite; }
@keyframes s-sp5-bar-${i} {
  0%, ${start}% { transform: scaleY(0.04); }
  ${start + 10}%, 90% { transform: scaleY(1); }
  97%, 100% { transform: scaleY(0.04); }
}`
}).join('\n')}
.s-sp5-err { animation: s-sp5-err 10s ease-in-out infinite; }
@keyframes s-sp5-err {
  0%, 50% { opacity: 0; }
  56%, 90% { opacity: 1; }
  96%, 100% { opacity: 0; }
}
`

export function ResultsScene() {
  const base = 290
  return (
    <Scene w={800} h={272} top={46} css={resultsCss} className="s-sp5" label="A bar chart where two blue bars for the clean panels rise higher than two brown bars for the dusty ones, each with a small error bar, next to a small table of values and a paper character pointing at the chart">
      <Floor y={300} x1={30} x2={770} seed={190} />

      {BARS.map((bar, i) => (
        <Anim key={bar.x} className={`s-sp5-bar-${i}`} style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
          <path d={`M${bar.x} ${base}v${-bar.h}h40v${bar.h}Z`} fill={`url(#fill-${bar.tone})`} />
          <Ink d={handPoly([[bar.x, base], [bar.x, base - bar.h], [bar.x + 40, base - bar.h], [bar.x + 40, base]], { seed: 191 + i, amp: 0.4 })} w={1.6} />
        </Anim>
      ))}
      <g className="s-sp5-err">
        {BARS.map((bar, i) => {
          const cx = bar.x + 20
          const top = base - bar.h
          return <Ink key={i} d={`M${cx} ${top - 10}V${top + 10}M${cx - 6} ${top - 10}h12M${cx - 6} ${top + 10}h12`} w={1.5} c={INK} />
        })}
      </g>
      <Ink d={handLine(276, base, 552, base, 196, 0.5) + handLine(276, base, 276, 90, 197, 0.5)} w={2} />

      <path d="M292 72h16v14h-16Z" fill="url(#fill-blue)" />
      <Hand x={316} y={85} size={20} weight={700}>
        clean
      </Hand>
      <path d="M384 72h16v14h-16Z" fill="url(#fill-brown)" />
      <Hand x={408} y={85} size={20} weight={700}>
        dusty
      </Hand>

      <Grid x={590} y={118} cols={2} rows={4} cw={80} rh={30} header="amber" marks={{ '1,1': 'dash', '2,1': 'dash', '3,1': 'dash' }} seed={198} />

      <Shadow x={150} y={302} rx={46} ry={5} />
      <Place x={150} y={300} s={1.9}>
        <Pip mood="focused" arms="point" look={1.5} seed={199} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Discussion: from one rooftop out to a whole city.
   ------------------------------------------------------------------ */

const discussionCss = `
.s-sp6-scope { animation: s-sp6-scan 6s ease-in-out infinite; }
.s-sp6-spark { animation: s-sp6-spark 6s ease-in-out infinite; }
.s-sp6-spark-2 { animation-delay: -2s; }
.s-sp6-spark-3 { animation-delay: -4s; }
@keyframes s-sp6-scan {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-6deg); }
}
@keyframes s-sp6-spark {
  0%, 60%, 100% { opacity: 0; transform: scale(0.4); }
  70% { opacity: 1; transform: scale(1.1); }
  80% { opacity: 1; transform: scale(1); }
}
`

function House({ x, w, h, tone, seed }) {
  const roofY = 300 - h
  const body = [[x, 300], [x, roofY], [x + w, roofY], [x + w, 300]]
  const roof = [[x - 6, roofY], [x + w / 2, roofY - w * 0.42], [x + w + 6, roofY]]
  const panel = [[x + w * 0.52, roofY - w * 0.3], [x + w * 0.82, roofY - w * 0.12], [x + w * 0.74, roofY - w * 0.04], [x + w * 0.44, roofY - w * 0.22]]
  return (
    <g>
      <path d={polyPath(body)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(body, { seed, amp: 0.4 })} w={1.6} />
      <path d={polyPath(roof)} fill={TONES.red.tint} />
      <Ink d={handPoly(roof, { seed: seed + 1, amp: 0.4, closed: true })} w={1.6} />
      <path d={polyPath(panel)} fill="url(#fill-blue)" />
      <Ink d={handPoly(panel, { seed: seed + 2, amp: 0.2, closed: true })} w={1.2} />
      <path d={`M${x + w * 0.3} ${roofY + h * 0.3}h${w * 0.4}v${h * 0.28}h${-w * 0.4}Z`} fill={PAPER} />
      <Ink d={handPoly([[x + w * 0.3, roofY + h * 0.3], [x + w * 0.7, roofY + h * 0.3], [x + w * 0.7, roofY + h * 0.58], [x + w * 0.3, roofY + h * 0.58]], { seed: seed + 3, amp: 0.2, closed: true })} w={1.1} />
    </g>
  )
}

export function DiscussionScene() {
  const hill = [[0, 300], [60, 250], [130, 214], [196, 206], [262, 226], [330, 270], [360, 300]]
  return (
    <Scene w={800} h={280} top={38} css={discussionCss} className="s-sp6" label="A paper character on a small hill looks through a telescope at a town of houses with solar panels on their roofs, under the sun">
      <Sun x={740} y={78} r={20} seed={200} />
      <path d={`${curve(hill)}L0 300Z`} fill="url(#fill-green)" />
      <Ink d={handCurve(hill, { seed: 201, amp: 0.5 })} w={1.8} />
      <Floor y={300} x1={0} x2={800} seed={202} />

      <House x={384} w={70} h={62} tone="amber" seed={203} />
      <House x={476} w={82} h={84} tone="pink" seed={207} />
      <House x={582} w={66} h={56} tone="green" seed={211} />
      <House x={670} w={86} h={92} tone="blue" seed={215} />

      <Place x={516} y={176}>
        <Anim className="s-sp6-spark" spin style={{ opacity: 0 }}>
          <Sparkle x={0} y={0} s={10} />
        </Anim>
      </Place>
      <Place x={712} y={166}>
        <Anim className="s-sp6-spark s-sp6-spark-2" spin style={{ opacity: 0 }}>
          <Sparkle x={0} y={0} s={9} />
        </Anim>
      </Place>
      <Place x={420} y={200}>
        <Anim className="s-sp6-spark s-sp6-spark-3" spin style={{ opacity: 0 }}>
          <Sparkle x={0} y={0} s={8} />
        </Anim>
      </Place>

      <Shadow x={196} y={208} rx={36} ry={4} />
      <Place x={196} y={207} s={1.6}>
        <Pip mood="happy" arms="think" look={1.8} seed={219} />
      </Place>
      <Anim className="s-sp6-scope" origin={[216, 140]}>
        <path d="M216 136L276 120L279 131L219 147Z" fill="url(#fill-grey)" />
        <Ink d="M216 136L276 120L279 131L219 147Z" w={1.6} />
        <path d="M275 116L287 113L292 133L280 136Z" fill="url(#fill-amber)" />
        <Ink d="M275 116L287 113L292 133L280 136Z" w={1.5} />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. References and the rest: a box for every small part.
   ------------------------------------------------------------------ */

const LABELS = ['refs', 'thanks', 'data', 'funding']

const shelvesCss = `
${LABELS.map((_, i) => `.s-sp7-drop-${i} { animation: s-sp7-drop 6s ease-in infinite; animation-delay: ${-i * 1.5}s; }`).join('\n')}
@keyframes s-sp7-drop {
  0% { transform: translateY(0) rotate(-6deg); opacity: 0; }
  12% { opacity: 1; }
  60% { transform: translateY(64px) rotate(8deg); opacity: 1; }
  70%, 100% { transform: translateY(78px) rotate(8deg); opacity: 0; }
}
`

export function ShelvesScene() {
  return (
    <Scene w={800} h={190} top={130} css={shelvesCss} className="s-sp7" label="Four boxes labelled refs, thanks, data and funding, with a page dropping into each one in turn, while a paper character points at them">
      <Floor y={300} x1={30} x2={770} seed={220} />
      {LABELS.map((label, i) => {
        const x = 50 + i * 142
        return (
          <g key={label}>
            <Place x={x + 58} y={132}>
              <Anim className={`s-sp7-drop-${i}`} style={{ opacity: 0 }}>
                <Sheet x={-13} y={-16} w={26} h={32} lines={2} fold={6} seed={221 + i} sw={1.2} />
              </Anim>
            </Place>
            <Crate x={x} y={228} w={116} h={72} label={label} seed={225 + i} />
          </g>
        )
      })}
      <Shadow x={696} y={302} rx={44} ry={5} />
      <Place x={696} y={300} s={1.8} flip>
        <Pip mood="happy" arms="point" look={1.5} seed={230} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. The order to write it in: a tower built from the bottom up.
   ------------------------------------------------------------------ */

const TOWER = [
  { label: 'methods', tone: 'green' },
  { label: 'results', tone: 'amber' },
  { label: 'discussion', tone: 'red' },
  { label: 'introduction', tone: 'blue' },
  { label: 'conclusion', tone: 'pink' },
  { label: 'abstract', tone: 'amber' },
]

const orderCss = `
.s-sp8-top { animation: s-sp8-drop 10s ease-in infinite; }
.s-sp8-carrier .pip-body { animation: s-sp8-bob 2.4s ease-in-out infinite; }
@keyframes s-sp8-drop {
  0%, 14% { transform: translateY(-80px); opacity: 0; }
  18% { opacity: 1; }
  28% { transform: translateY(0); }
  31% { transform: translateY(-7px); }
  34%, 88% { transform: translateY(0); opacity: 1; }
  94%, 100% { transform: translateY(0); opacity: 0; }
}
@keyframes s-sp8-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function OrderScene() {
  return (
    <Scene w={800} h={236} top={84} css={orderCss} className="s-sp8" label="A tower of six blocks built from the bottom up, methods, results, discussion, introduction, conclusion and abstract, with the abstract block dropping on last while a paper character waits with a block marked title">
      <Floor y={300} x1={40} x2={760} seed={240} />
      {TOWER.map((block, i) => {
        const y = 300 - (i + 1) * 32
        const body = (
          <g>
            <path d={`M290 ${y}h140v32h-140Z`} fill={`url(#fill-${block.tone})`} />
            <Ink d={handPoly([[290, y], [430, y], [430, y + 32], [290, y + 32]], { seed: 241 + i, amp: 0.4, closed: true })} w={1.6} />
            <Hand x={360} y={y + 23} size={20} anchor="middle" weight={700}>
              {block.label}
            </Hand>
          </g>
        )
        return (
          <g key={block.label}>
            <circle cx={262} cy={y + 16} r={11} fill={PAPER} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
            <Type x={262} y={y + 21} size={13} anchor="middle" weight={700}>
              {i + 1}
            </Type>
            {i === TOWER.length - 1 ? <Anim className="s-sp8-top">{body}</Anim> : body}
          </g>
        )
      })}

      <Shadow x={560} y={302} rx={46} ry={5} />
      <Place x={560} y={300} s={1.9}>
        <g className="s-sp8-carrier">
          <Pip mood="happy" arms="carry" look={-1.5} seed={250}>
            <path d="M-26 -92h52v18h-52Z" fill="url(#fill-grey)" />
            <Ink d={handPoly([[-26, -92], [26, -92], [26, -74], [-26, -74]], { seed: 251, amp: 0.3, closed: true })} w={1.5} />
            <Hand x={0} y={-78.5} size={11} anchor="middle" weight={700}>
              title
            </Hand>
          </Pip>
        </g>
      </Place>
      <Hand x={640} y={140} size={21} c={INK_SOFT}>
        last of all
      </Hand>
    </Scene>
  )
}
