import {
  Anim,
  Arrow,
  Book,
  Box,
  Cross,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sticky,
  TONES,
  Tick,
  TreasureMap,
  handLine,
  r1,
} from '../../ink/index.js'

/* A box in a framework diagram: a rounded card with a word or two in it. */
export function Node({ x, y, w = 100, h = 34, label, tone, size = 16, seed = 1, sw = 1.7 }) {
  const t = tone ? TONES[tone] : null
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={7} fill={t ? t.tint : PAPER} stroke={INK} seed={seed} sw={sw} />
      <Hand x={x + w / 2} y={y + h / 2 + size * 0.36} size={size} anchor="middle" weight={700}>
        {label}
      </Hand>
    </g>
  )
}

/*
 * An arrow between two boxes. The shaft is drawn with pathLength 1 and a
 * scaling stroke, so a scene can draw it on with stroke-dashoffset; the head
 * stays put, so the still picture always shows a finished arrow.
 */
export function Link({ from, to, bend = 0, seed = 1, c = INK, w = 1.8, className, style, dashed = false }) {
  const [x1, y1] = from
  const [x2, y2] = to
  const cx = (x1 + x2) / 2 - (y2 - y1) * bend
  const cy = (y1 + y2) / 2 + (x2 - x1) * bend
  const angle = Math.atan2(y2 - cy, x2 - cx)
  const head = 10
  const h1 = [x2 + Math.cos(angle + Math.PI * 0.82) * head, y2 + Math.sin(angle + Math.PI * 0.82) * head]
  const h2 = [x2 + Math.cos(angle - Math.PI * 0.82) * head, y2 + Math.sin(angle - Math.PI * 0.82) * head]
  const shaft = `M${r1(x1)} ${r1(y1)}Q${r1(cx)} ${r1(cy)} ${r1(x2)} ${r1(y2)}`
  return (
    <g>
      {dashed ? (
        <Ink d={shaft} c={c} w={w} dash="5 6" />
      ) : (
        <Ink d={shaft} c={c} w={w} scale pathLength={1} dash="1" className={className} style={style} />
      )}
      <Ink d={handLine(x2, y2, ...h1, seed + 3, 0.3) + handLine(x2, y2, ...h2, seed + 5, 0.3)} c={c} w={w} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. What it is: a map of one study, its boxes and its arrows.
   ------------------------------------------------------------------ */

const defineCss = `
.s-cfw1-draw { animation: s-cfw1-draw 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s); }
.s-cfw1-pip .pip-body { animation: s-cfw1-bob 3s ease-in-out infinite; }
@keyframes s-cfw1-draw {
  0%, 100% { stroke-dashoffset: 0; }
  14% { stroke-dashoffset: 1; }
  40%, 90% { stroke-dashoffset: 0; }
}
@keyframes s-cfw1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function DefineScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={defineCss} className="s-cfw1" label="A paper character points at a large sheet laid out like a map, with three boxes labelled useful, intention and still using joined by arrows, and notes beside it saying what you study and how they connect">
      <Floor y={floor} x1={30} x2={770} seed={101} />
      <Sheet x={170} y={56} w={360} h={250} lines={0} fold={26} seed={102} sw={2} />

      <Node x={190} y={100} w={104} label="useful" tone="green" seed={103} />
      <Node x={298} y={210} w={112} label="intention" tone="amber" seed={104} />
      <Node x={404} y={100} w={112} label="still using" tone="blue" seed={105} />
      <Link from={[248, 136]} to={[330, 206]} bend={0.12} seed={106} className="s-cfw1-draw" style={{ '--i': 0 }} />
      <Link from={[380, 206]} to={[452, 138]} bend={0.12} seed={107} className="s-cfw1-draw" style={{ '--i': 1 }} />

      <Hand x={668} y={112} size={20} anchor="middle" weight={700}>
        what you study
      </Hand>
      <Arrow from={[600, 120]} to={[524, 118]} bend={-0.1} seed={108} c={TONES.green.deep} />
      <Hand x={668} y={200} size={20} anchor="middle" weight={700}>
        how they connect
      </Hand>
      <Arrow from={[596, 208]} to={[430, 176]} bend={0.08} seed={109} c={TONES.amber.deep} />

      <Shadow x={92} y={floor + 2} rx={30} ry={4} />
      <Place x={92} y={floor} s={1.6}>
        <g className="s-cfw1-pip">
          <Pip mood="happy" arms="point" tone="green" look={1.6} seed={110} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Theory vs conceptual framework: the big map and the one route.
   ------------------------------------------------------------------ */

const versusCss = `
.s-cfw2-pip .pip-body { animation: s-cfw2-sway 5s ease-in-out infinite; }
.s-cfw2-route { animation: s-cfw2-route 5s ease-in-out infinite; }
@keyframes s-cfw2-sway {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-cfw2-route {
  0%, 100% { stroke-dashoffset: 0; }
  20% { stroke-dashoffset: 1; }
  55% { stroke-dashoffset: 0; }
}
`

export function VersusScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={versusCss} className="s-cfw2" label="On the left a big folded map labelled the theory, broad and tested. On the right a small sheet labelled your study, with three boxes and arrows, narrow and made for one study. A paper character stands between them, looking from one to the other">
      <Floor y={floor} x1={30} x2={770} seed={201} />

      <Hand x={190} y={70} size={24} anchor="middle" weight={700}>
        the theory
      </Hand>
      <TreasureMap x={56} y={88} w={268} h={170} seed={202} />
      <Hand x={190} y={296} size={18} anchor="middle" c={INK_SOFT}>
        broad, tested, used again
      </Hand>

      <Arrow from={[330, 120]} to={[486, 120]} bend={-0.12} seed={203} c={TONES.green.deep} />
      <Hand x={408} y={92} size={17} anchor="middle" c={TONES.green.deep} weight={700}>
        narrows to
      </Hand>

      <Hand x={624} y={70} size={24} anchor="middle" weight={700}>
        your study
      </Hand>
      <Sheet x={506} y={88} w={236} h={180} lines={0} fold={20} seed={204} />
      <Node x={522} y={124} w={84} h={30} label="useful" tone="green" size={14} seed={205} />
      <Node x={522} y={196} w={84} h={30} label="signal" tone="pink" size={14} seed={206} />
      <Node x={640} y={160} w={88} h={30} label="still using" tone="blue" size={14} seed={207} />
      <Link from={[606, 140]} to={[640, 168]} seed={208} className="s-cfw2-route" />
      <Link from={[606, 210]} to={[640, 184]} seed={209} className="s-cfw2-route" />
      <Hand x={624} y={296} size={18} anchor="middle" c={INK_SOFT}>
        narrow, made for one study
      </Hand>

      <Shadow x={408} y={floor + 2} rx={28} ry={4} />
      <Place x={408} y={floor} s={1.5}>
        <g className="s-cfw2-pip">
          <Pip mood="focused" arms="think" tone="green" glasses seed={210} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The variables: cause, step between, effect, a hand on the arrow
      and one held still.
   ------------------------------------------------------------------ */

const variablesCss = `
.s-cfw3-press { animation: s-cfw3-press 3.6s ease-in-out infinite; }
.s-cfw3-flow { animation: s-cfw3-flow 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-cfw3-press {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}
@keyframes s-cfw3-flow {
  0%, 100% { stroke-dashoffset: 0; }
  25% { stroke-dashoffset: 1; }
  60% { stroke-dashoffset: 0; }
}
`

export function VariablesScene() {
  const y = 190
  return (
    <Scene w={800} h={290} top={44} css={variablesCss} className="s-cfw3" label="Three boxes in a row joined by arrows: independent, mediating and dependent. A box labelled moderating presses down on the second arrow from above, and a box labelled control sits pinned to one side with a tick beside it">
      <Node x={40} y={y} w={150} h={46} label="independent" tone="green" size={19} seed={301} />
      <Node x={320} y={y} w={150} h={46} label="mediating" tone="amber" size={19} seed={302} />
      <Node x={600} y={y} w={150} h={46} label="dependent" tone="blue" size={19} seed={303} />
      <Link from={[194, y + 23]} to={[316, y + 23]} seed={304} w={2.2} className="s-cfw3-flow" style={{ '--i': 0 }} />
      <Link from={[474, y + 23]} to={[596, y + 23]} seed={305} w={2.2} className="s-cfw3-flow" style={{ '--i': 1 }} />

      <Hand x={115} y={y + 76} size={16} anchor="middle" c={INK_SOFT}>
        the cause
      </Hand>
      <Hand x={395} y={y + 76} size={16} anchor="middle" c={INK_SOFT}>
        how it works
      </Hand>
      <Hand x={675} y={y + 76} size={16} anchor="middle" c={INK_SOFT}>
        the outcome
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-cfw3-press">
          <Node x={466} y={70} w={136} h={40} label="moderating" tone="pink" size={18} seed={306} />
          <Ink d={handLine(534, 112, 534, 166, 307, 0.4)} w={2.2} c={TONES.pink.deep} />
          <Ink d={handLine(524, 158, 534, 168, 308, 0.2) + handLine(544, 158, 534, 168, 309, 0.2)} w={2.2} c={TONES.pink.deep} />
        </Anim>
      </Place>
      <Hand x={612} y={96} size={15} c={INK_SOFT}>
        changes the strength
      </Hand>

      <Node x={120} y={70} w={120} h={40} label="control" tone="grey" size={18} seed={310} />
      <PushPin x={130} y={74} tone="red" seed={311} />
      <PushPin x={230} y={74} tone="red" seed={312} />
      <Hand x={260} y={96} size={15} c={INK_SOFT}>
        held steady
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The steps: six notes on the wall, visited one after another.
   ------------------------------------------------------------------ */

const STEP_WORDS = ['question', 'concepts', 'cause, effect', 'add more', 'reasons', 'narrative']
const STEP_TONES = ['blue', 'green', 'amber', 'pink', 'red', 'green']

const stepsCss = `
.s-cfw4-walker { animation: s-cfw4-walk 12s ease-in-out infinite; }
.s-cfw4-walker .pip-body { animation: s-cfw4-step 1s ease-in-out infinite; }
@keyframes s-cfw4-walk {
  0%, 6% { transform: translateX(0); }
  14%, 20% { transform: translateX(118px); }
  28%, 34% { transform: translateX(236px); }
  42%, 48% { transform: translateX(354px); }
  56%, 62% { transform: translateX(472px); }
  70%, 86% { transform: translateX(590px); }
  100% { transform: translateX(0); }
}
@keyframes s-cfw4-step {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function StepsScene() {
  const floor = 330
  return (
    <Scene w={800} h={250} top={92} css={stepsCss} className="s-cfw4" label="Six numbered sticky notes on a wall read question, concepts, cause and effect, add more, reasons and narrative, and a paper character walks along beneath them from the first to the last">
      <Floor y={floor} x1={20} x2={780} seed={401} />
      {STEP_WORDS.map((word, i) => {
        const x = 34 + i * 122
        return (
          <g key={word} transform={`rotate(${i % 2 ? 2.5 : -2.5} ${x + 50} ${152})`}>
            <Sticky x={x} y={110} w={104} h={96} tone={STEP_TONES[i]} lines={0} seed={402 + i} />
            <Hand x={x + 52} y={152} size={30} anchor="middle" weight={700}>
              {i + 1}
            </Hand>
            <Hand x={x + 52} y={184} size={word.length > 10 ? 15 : 17} anchor="middle" weight={700}>
              {word}
            </Hand>
          </g>
        )
      })}
      <Place x={86} y={floor}>
        <g className="s-cfw4-walker">
          <Shadow x={0} y={2} rx={24} ry={4} />
          <Place s={1.35}>
            <Pip mood="focused" arms="hold" tone="green" glasses seed={410}>
              <Sheet x={-12} y={-34} w={24} h={30} lines={2} fold={6} seed={411} sw={1.3} />
            </Pip>
          </Place>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The example: Esther's eight boxes, each arrow with its reason.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-cfw5-tag { animation: s-cfw5-tag 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1s); }
.s-cfw5-draw { animation: s-cfw5-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1s); }
@keyframes s-cfw5-tag {
  0%, 100% { transform: translateY(0); }
  8% { transform: translateY(-5px); }
  16% { transform: translateY(0); }
}
@keyframes s-cfw5-draw {
  0%, 100% { stroke-dashoffset: 0; }
  6% { stroke-dashoffset: 1; }
  18% { stroke-dashoffset: 0; }
}
`

/* The four causes on the left, top to bottom. */
const CAUSES = [
  { label: 'useful', tone: 'green', tag: 'TAM' },
  { label: 'easy', tone: 'green', tag: 'TAM' },
  { label: 'trust', tone: 'amber', tag: 'studies' },
  { label: 'signal', tone: 'pink', tag: 'pilot' },
]

export function ExampleScene() {
  return (
    <Scene w={800} h={360} top={10} css={exampleCss} className="s-cfw5" label="A framework diagram on a board: four boxes on the left, useful, easy, trust and signal, each with an arrow to a box called intention, which points to a box called still using. A box for age presses on the last arrow and a box for shop type sits below as a control. Small tags on the arrows name each source: TAM, studies and pilot">
      <Box x={20} y={26} w={760} h={330} r={10} fill={PAPER} stroke={TONES.brown.deep} seed={501} sw={2.2} />
      <PushPin x={40} y={40} tone="blue" seed={502} />
      <PushPin x={760} y={40} tone="red" seed={503} />

      {CAUSES.map((cause, i) => {
        const y = 62 + i * 72
        // Each tag sits on the middle of its own arrow, like a label on a line.
        const tagX = 225
        const tagY = (y + 18 + 186) / 2 + 13
        return (
          <g key={cause.label}>
            <Node x={50} y={y} w={120} h={36} label={cause.label} tone={cause.tone} size={18} seed={510 + i} />
            <Link from={[174, y + 18]} to={[340, 186]} bend={i < 2 ? 0.06 : -0.06} seed={520 + i} className="s-cfw5-draw" style={{ '--i': i }} />
            <Anim className="s-cfw5-tag" style={{ '--i': i }}>
              <Box x={tagX} y={tagY - 24} w={64} h={22} r={4} fill={TONES[cause.tone].mid} stroke={INK_SOFT} seed={530 + i} sw={1.2} />
              <Hand x={tagX + 32} y={tagY - 8} size={14} anchor="middle" weight={700}>
                {cause.tag}
              </Hand>
            </Anim>
          </g>
        )
      })}

      <Node x={344} y={166} w={140} h={40} label="intention" tone="amber" size={19} seed={540} />
      <Link from={[488, 186]} to={[600, 186]} seed={541} w={2.2} className="s-cfw5-draw" style={{ '--i': 4 }} />
      <Node x={604} y={166} w={150} h={40} label="still using" tone="blue" size={19} seed={542} />

      <Node x={500} y={70} w={84} h={34} label="age" tone="pink" size={17} seed={543} />
      <Link from={[542, 108]} to={[544, 176]} seed={544} c={TONES.pink.deep} />

      <Node x={604} y={282} w={150} h={36} label="shop type" tone="grey" size={17} seed={545} />
      <Link from={[679, 278]} to={[679, 212]} seed={546} c={INK_SOFT} dashed />
      <Hand x={596} y={306} size={14} anchor="end" c={INK_SOFT}>
        control
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Qualitative: an interview adds a box the map did not have.
   ------------------------------------------------------------------ */

const qualCss = `
.s-cfw6-new { animation: s-cfw6-new 7s ease-in-out infinite; }
.s-cfw6-talk .pip-arm-r { animation: s-cfw6-talk 1.4s ease-in-out infinite; }
.s-cfw6-pencil { animation: s-cfw6-pencil 7s ease-in-out infinite; }
@keyframes s-cfw6-new {
  0%, 100% { opacity: 1; }
  10%, 30% { opacity: 0; }
  50% { opacity: 1; }
}
@keyframes s-cfw6-talk {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
@keyframes s-cfw6-pencil {
  0%, 100% { transform: translate(0, 0); }
  30% { transform: translate(-10px, 4px); }
  40% { transform: translate(8px, -3px); }
  50% { transform: translate(-6px, 2px); }
}
`

export function QualitativeScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={qualCss} className="s-cfw6" label="A shopkeeper speaks to a researcher who holds a notebook. Beside them a pencil map of boxes gains a new box, fear of fraud, drawn in after the interview">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Speech x={70} y={70} w={210} h={70} tx={128} ty={176} seed={602}>
        <Hand x={175} y={100} size={17} anchor="middle">
          they show a fake
        </Hand>
        <Hand x={175} y={124} size={17} anchor="middle" weight={700}>
          payment screen
        </Hand>
      </Speech>
      <Shadow x={120} y={floor + 2} rx={28} ry={4} />
      <Place x={120} y={floor} s={1.5}>
        <g className="s-cfw6-talk">
          <Pip mood="worried" arms="wave" tone="pink" look={1.5} seed={603} />
        </g>
      </Place>
      <Shadow x={290} y={floor + 2} rx={28} ry={4} />
      <Place x={290} y={floor} s={1.5} flip>
        <Pip mood="focused" arms="hold" tone="green" glasses look={1.5} seed={604}>
          <Sheet x={-12} y={-34} w={24} h={30} lines={2} fold={6} seed={605} sw={1.3} />
        </Pip>
      </Place>

      <Sheet x={400} y={60} w={350} h={262} lines={0} fold={24} seed={606} />
      <Node x={420} y={100} w={100} h={32} label="useful" size={15} seed={607} sw={1.3} />
      <Node x={420} y={168} w={100} h={32} label="trust" size={15} seed={608} sw={1.3} />
      <Node x={620} y={134} w={110} h={32} label="still using" size={15} seed={609} sw={1.3} />
      <Link from={[522, 116]} to={[618, 146]} seed={610} c={INK_SOFT} w={1.4} dashed />
      <Link from={[522, 184]} to={[618, 154]} seed={611} c={INK_SOFT} w={1.4} dashed />
      <g className="s-cfw6-new">
        <Node x={420} y={244} w={130} h={34} label="fear of fraud" tone="amber" size={15} seed={612} />
        <Link from={[552, 256]} to={[640, 170]} seed={613} c={TONES.amber.deep} w={1.6} dashed />
      </g>
      <Place x={0} y={0}>
        <Anim className="s-cfw6-pencil">
          <Pencil x={580} y={292} length={90} angle={-40} tone="green" seed={614} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Mistakes: the arrow with no reason is rubbed out, and the
      framework is carried into every chapter.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-cfw7-rub { animation: s-cfw7-rub 2.4s ease-in-out infinite; }
.s-cfw7-carry { animation: s-cfw7-carry 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
@keyframes s-cfw7-rub {
  0%, 100% { transform: translate(0, 0) rotate(-12deg); }
  50% { transform: translate(26px, -6px) rotate(-12deg); }
}
@keyframes s-cfw7-carry {
  0%, 100% { transform: translateY(0); }
  10% { transform: translateY(-6px); }
  20% { transform: translateY(0); }
}
`

const CHAPTERS = ['method', 'results', 'discussion']

export function MistakesScene() {
  const floor = 340
  return (
    <Scene w={800} h={300} top={44} css={mistakesCss} className="s-cfw7" label="On a board, one arrow has a tick and a small source tag while another arrow, marked no source, is crossed out and being rubbed away with an eraser. On the right, the framework is carried into three chapters, method, results and discussion, each with a tick">
      <Floor y={floor} x1={30} x2={770} seed={701} />
      <Box x={40} y={64} w={380} h={240} r={8} fill={PAPER} stroke={TONES.brown.deep} seed={702} sw={2} />

      <Node x={64} y={100} w={104} h={34} label="trust" tone="amber" size={16} seed={703} />
      <Node x={64} y={226} w={104} h={34} label="luck" tone="grey" size={16} seed={704} />
      <Node x={292} y={164} w={110} h={34} label="still using" tone="blue" size={16} seed={705} />
      <Link from={[172, 117]} to={[288, 174]} seed={706} />
      <Tick x={214} y={118} s={1} />
      <Box x={234} y={96} w={62} h={22} r={4} fill={TONES.green.tint} stroke={INK_SOFT} seed={707} sw={1.2} />
      <Hand x={265} y={112} size={13} anchor="middle" weight={700}>
        source
      </Hand>

      <Link from={[172, 243]} to={[288, 190]} seed={708} c={INK_SOFT} />
      <Hand x={214} y={262} size={14} anchor="middle" weight={700} c={TONES.red.ink}>
        no source
      </Hand>
      <Cross x={214} y={226} s={1.1} />
      <Place x={246} y={204}>
        <Anim className="s-cfw7-rub">
          <Box x={-18} y={-12} w={40} h={22} r={4} fill={TONES.pink.mid} seed={709} sw={1.5} />
        </Anim>
      </Place>

      <Arrow from={[430, 180]} to={[488, 180]} bend={0} seed={710} c={TONES.green.deep} />
      {CHAPTERS.map((word, i) => {
        const x = 500 + i * 92
        return (
          <g key={word}>
            <Place x={0} y={0}>
              <Anim className="s-cfw7-carry" style={{ '--i': i }}>
                <Sheet x={x} y={120} w={76} h={100} lines={3} fold={14} seed={711 + i} />
                <Tick x={x + 38} y={196} s={0.9} />
              </Anim>
            </Place>
            <Hand x={x + 38} y={248} size={16} anchor="middle" weight={700}>
              {word}
            </Hand>
          </g>
        )
      })}

      <Shadow x={472} y={floor + 2} rx={24} ry={4} />
      <Place x={472} y={floor} s={1.2}>
        <Pip mood="proud" arms="hips" tone="green" seed={720} />
      </Place>
    </Scene>
  )
}

/* The theory book and the pile of papers the framework is built from,
   kept here so the hero can share them. */
export function Sources({ floor }) {
  return (
    <g>
      <Book x={40} y={floor - 72} w={58} h={72} tone="green" seed={801} />
      <Hand x={69} y={floor - 84} size={17} anchor="middle" weight={700}>
        theory
      </Hand>
      <Pile x={150} y={floor} w={78} count={8} seed={802} />
      <Hand x={150} y={floor - 52} size={17} anchor="middle" weight={700}>
        papers
      </Hand>
    </g>
  )
}
