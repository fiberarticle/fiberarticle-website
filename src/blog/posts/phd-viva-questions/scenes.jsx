import {
  Anim,
  Arrow,
  Box,
  Calendar,
  Chai,
  Checklist,
  Desk,
  Envelope,
  Floor,
  Globe,
  Hand,
  Hourglass,
  INK,
  INK_SOFT,
  Ink,
  Lamp,
  Laptop,
  Mountain,
  PAPER,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Speech,
  StampMark,
  Sticky,
  TONES,
  Tick,
  Thought,
  Cloud,
  Door,
  handLine,
} from '../../ink/index.js'

/*
 * A projector screen on a stand with a slide about landslides: a slope, a
 * rain cloud and a crack. The rain drops carry .s-viva-rain with --i so a
 * scene can let them fall. Anchor: top-left of the screen.
 */
export function SlideScreen({ x, y, w = 220, h = 150, seed = 1, rainClass }) {
  const sx = x + 14
  const sy = y + 14
  const sw = w - 28
  const sh = h - 28
  const drops = [0, 1, 2, 3, 4]
  return (
    <g>
      <Ink d={handLine(x + w / 2, y - 14, x + w / 2, y, seed + 1, 0.2)} w={2} />
      <Box x={x - 8} y={y - 18} w={w + 16} h={10} r={4} fill={TONES.grey.mid} seed={seed + 2} sw={1.5} />
      <Box x={x} y={y} w={w} h={h} fill={PAPER} seed={seed} sw={2} />
      <Mountain x={sx + sw * 0.18} y={sy + sh} w={sw * 0.72} h={sh * 0.62} seed={seed + 3} snow={false} />
      <Ink
        d={`M${sx + sw * 0.5} ${sy + sh * 0.6}l6 10l-5 8l7 9`}
        c={TONES.red.ink}
        w={2}
      />
      <Cloud x={sx + sw * 0.26} y={sy + sh * 0.2} s={0.55} seed={seed + 4} />
      {drops.map((i) => (
        <g key={i} className={rainClass} style={{ '--i': i }}>
          <Ink d={handLine(sx + sw * 0.12 + i * 11, sy + sh * 0.36, sx + sw * 0.1 + i * 11, sy + sh * 0.46, seed + 10 + i, 0.2)} c={TONES.blue.ink} w={1.8} />
        </g>
      ))}
    </g>
  )
}

/* A lectern: a sloped top on a narrow wooden stand. Anchor: bottom centre. */
export function Lectern({ x, y, h = 92, seed = 1 }) {
  return (
    <g>
      <Box x={x - 18} y={y - h + 18} w={36} h={h - 18} fill="url(#wood)" seed={seed} sw={1.8} />
      <Box x={x - 40} y={y - 6} w={80} h={6} fill={TONES.brown.mid} seed={seed + 1} sw={1.5} />
      <path d={`M${x - 46} ${y - h + 22}L${x + 46} ${y - h + 10}L${x + 46} ${y - h + 22}L${x - 46} ${y - h + 30}Z`} fill={TONES.brown.mid} />
      <Ink d={`M${x - 46} ${y - h + 22}L${x + 46} ${y - h + 10}L${x + 46} ${y - h + 22}L${x - 46} ${y - h + 30}Z`} w={1.8} />
    </g>
  )
}

/* A row of small paper students seen from behind the front bench. */
export function Audience({ x, y, count = 5, gap = 70, seed = 1, className, tones = ['paper', 'blue', 'amber', 'green', 'pink', 'paper', 'blue'] }) {
  const people = []
  for (let i = 0; i < count; i++) people.push(i)
  return (
    <g>
      {people.map((i) => (
        <Place key={i} x={x + i * gap} y={y} s={0.9}>
          <g className={className} style={{ '--i': i }}>
            <Pip mood={i % 2 ? 'focused' : 'happy'} tone={tones[i % tones.length]} look={i < count / 2 ? 1.5 : -1.5} seed={seed + i * 7} />
          </g>
        </Place>
      ))}
      <Box x={x - 44} y={y - 26} w={(count - 1) * gap + 88} h={30} r={4} fill="url(#wood)" seed={seed + 90} sw={1.8} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. What a viva is: the thesis on the table, and three things the
      examiners want to know about the person who wrote it.
   ------------------------------------------------------------------ */

const defineCss = `
.s-viva1-tick { animation: s-viva1-tick 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s); }
.s-viva1-pip .pip-body { animation: s-viva1-bob 3s ease-in-out infinite; }
@keyframes s-viva1-tick {
  0%, 100% { opacity: 1; transform: scale(1); }
  10% { opacity: 0; transform: scale(0.6); }
  22%, 90% { opacity: 1; transform: scale(1); }
}
@keyframes s-viva1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const AIMS = [
  { text: 'your own work?', tone: 'amber' },
  { text: 'you understand it?', tone: 'blue' },
  { text: 'adds to knowledge?', tone: 'green' },
]

export function DefineScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={defineCss} className="s-viva1" label="A thick thesis lies on a table beside a paper character in glasses. Three notes ask what the viva checks: is it your own work, do you understand it, and does it add to knowledge, and each note gets a green tick">
      <Floor y={floor} x1={30} x2={770} seed={101} />
      <Desk y={262} x1={120} x2={390} seed={102} />
      <Pile x={250} y={262} w={150} count={9} seed={103} />
      <Hand x={250} y={176} size={22} anchor="middle" weight={700}>
        the thesis
      </Hand>

      {AIMS.map((aim, i) => {
        const y = 76 + i * 72
        return (
          <g key={aim.text}>
            <Box x={470} y={y} w={230} h={50} r={8} fill={TONES[aim.tone].tint} seed={110 + i} />
            <Hand x={490} y={y + 33} size={21} weight={700}>
              {aim.text}
            </Hand>
            <Anim className="s-viva1-tick" spin style={{ '--i': i }}>
              <Tick x={728} y={y + 24} s={1.3} />
            </Anim>
            <Arrow from={[440, 200 - (1 - i) * 10]} to={[466, y + 26]} bend={0.1} seed={120 + i} c={INK_SOFT} w={1.4} head={8} />
          </g>
        )
      })}

      <Shadow x={70} y={floor + 2} rx={28} ry={4} />
      <Place x={70} y={floor} s={1.55}>
        <g className="s-viva1-pip">
          <Pip mood="happy" arms="point" tone="amber" glasses look={1.6} seed={130} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. How it works in India: the thesis goes out to two examiners and
      the viva happens only when both send it back accepted.
   ------------------------------------------------------------------ */

const processCss = `
.s-viva2-env { animation: s-viva2-env 6s ease-in-out infinite; animation-delay: calc(var(--i) * -3s); }
.s-viva2-stamp { animation: s-viva2-stamp 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-viva2-env {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -6px); }
}
@keyframes s-viva2-stamp {
  0%, 100% { opacity: 1; transform: scale(1); }
  12% { opacity: 0; transform: scale(1.3); }
  24%, 92% { opacity: 1; transform: scale(1); }
}
`

export function ProcessScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={processCss} className="s-viva2" label="A thesis is sent in two envelopes to two external examiners, one in India and one abroad beside a globe. Both stamp it accepted, and an arrow leads to an open door marked viva">
      <Floor y={floor} x1={20} x2={780} seed={201} />

      <Sheet x={40} y={186} w={92} h={120} lines={6} fold={18} seed={202} title />
      <Hand x={86} y={176} size={20} anchor="middle" weight={700}>
        thesis
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-viva2-env" style={{ '--i': 0 }}>
          <Envelope x={150} y={96} w={66} h={44} seed={203} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-viva2-env" style={{ '--i': 1 }}>
          <Envelope x={176} y={176} w={66} h={44} seed={204} />
        </Anim>
      </Place>
      <Arrow from={[120, 182]} to={[150, 140]} bend={0.1} seed={205} c={INK_SOFT} head={8} />
      <Arrow from={[136, 230]} to={[172, 210]} bend={-0.1} seed={206} c={INK_SOFT} head={8} />

      <Hand x={300} y={136} size={18} anchor="middle" c={INK_SOFT}>
        in India
      </Hand>
      <Place x={300} y={floor} s={1.4}>
        <Pip mood="focused" arms="hold" tone="blue" glasses seed={207} />
      </Place>

      <Hand x={430} y={136} size={18} anchor="middle" c={INK_SOFT}>
        abroad
      </Hand>
      <Place x={430} y={floor} s={1.4}>
        <Pip mood="focused" arms="hold" tone="pink" look={-1} seed={210} />
      </Place>
      <Globe x={498} y={282} r={20} seed={209} />

      <g className="s-viva2-stamp" style={{ '--i': 0, transformBox: 'fill-box', transformOrigin: 'center' }}>
        <StampMark x={300} y={186} w={100} h={34} text="ACCEPT" tone="green" rotate={-7} size={16} bg={PAPER} seed={211} />
      </g>
      <g className="s-viva2-stamp" style={{ '--i': 1, transformBox: 'fill-box', transformOrigin: 'center' }}>
        <StampMark x={430} y={186} w={100} h={34} text="ACCEPT" tone="green" rotate={6} size={16} bg={PAPER} seed={212} />
      </g>
      <Arrow from={[530, 214]} to={[612, 214]} bend={-0.1} seed={213} c={TONES.amber.deep} w={2.2} />
      <Hand x={572} y={196} size={16} anchor="middle" c={TONES.amber.deep} weight={700}>
        both yes
      </Hand>

      <Door x={640} y={floor} w={84} h={150} open={0.4} tone="amber" seed={214} />
      <Hand x={682} y={176} size={24} anchor="middle" weight={700}>
        viva
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Common questions: a board of question shapes, and a scholar
      sorting them.
   ------------------------------------------------------------------ */

const questionsCss = `
.s-viva3-q { animation: s-viva3-q 4s ease-in-out infinite; animation-delay: calc(var(--i) * -0.7s); }
.s-viva3-pip .pip-body { animation: s-viva3-sway 5s ease-in-out infinite; }
@keyframes s-viva3-q {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(2deg); }
}
@keyframes s-viva3-sway {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}
`

const ASKED = [
  { text: 'why this topic?', tone: 'amber' },
  { text: 'what is new?', tone: 'green' },
  { text: 'why this method?', tone: 'blue' },
  { text: 'what does it mean?', tone: 'pink' },
  { text: 'weakest part?', tone: 'red' },
  { text: 'what next?', tone: 'amber' },
]

export function QuestionsScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={questionsCss} className="s-viva3" label="A board of six notes, each a common viva question: why this topic, what is new, why this method, what does it mean, weakest part and what next. A paper character in glasses stands thinking in front of it">
      <Floor y={floor} x1={30} x2={770} seed={301} />
      <Box x={220} y={48} w={540} h={250} r={10} fill={PAPER} stroke={TONES.brown.deep} seed={302} sw={2.4} />

      {ASKED.map((q, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 240 + col * 172
        const y = 70 + row * 112
        return (
          <g key={q.text}>
            <Anim className="s-viva3-q" spin style={{ '--i': i }}>
              <Box x={x} y={y} w={160} h={86} r={6} fill={TONES[q.tone].tint} seed={310 + i} />
              <Hand x={x + 80} y={y + 49} size={16} anchor="middle" weight={700}>
                {q.text}
              </Hand>
            </Anim>
          </g>
        )
      })}

      <Shadow x={110} y={floor + 2} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.6}>
        <g className="s-viva3-pip">
          <Pip mood="focused" arms="think" tone="amber" glasses look={1.4} seed={320} />
        </g>
      </Place>
      <Thought x={110} y={110} w={96} h={60} tx={118} ty={210} seed={321}>
        <Hand x={110} y={124} size={34} anchor="middle" weight={700}>
          ?
        </Hand>
      </Thought>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Answering: pause, point first, then the limit and the way ahead.
   ------------------------------------------------------------------ */

const answerCss = `
.s-viva4-line { animation: s-viva4-line 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
.s-viva4-nod .pip-body { animation: s-viva4-nod 2.4s ease-in-out infinite; }
.s-viva4-sand { animation: s-viva4-sand 6s ease-in-out infinite; }
@keyframes s-viva4-line {
  0%, 100% { opacity: 1; }
  10% { opacity: 0; }
  24%, 92% { opacity: 1; }
}
@keyframes s-viva4-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
@keyframes s-viva4-sand {
  0%, 100% { transform: rotate(0deg); }
  45% { transform: rotate(0deg); }
  55% { transform: rotate(180deg); }
  95% { transform: rotate(180deg); }
}
`

const ANSWER = ['1. the point first', '2. the honest limit', '3. the way forward']

export function AnswerScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={answerCss} className="s-viva4" label="A paper character answers from a lectern. A speech bubble shows the answer in order: the point first, the honest limit, the way forward. An hourglass beside them stands for taking a moment, and an examiner at a table nods">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Shadow x={110} y={floor + 2} rx={28} ry={4} />
      <Place x={110} y={floor} s={1.55}>
        <Pip mood="happy" arms="point" tone="amber" glasses look={1.6} seed={403} />
      </Place>
      <Lectern x={196} y={floor} seed={402} />

      <Speech x={240} y={60} w={290} h={150} tx={150} ty={200} seed={404}>
        {ANSWER.map((line, i) => (
          <g key={line} className="s-viva4-line" style={{ '--i': i }}>
            <Hand x={262} y={104 + i * 38} size={22} weight={700} c={i === 1 ? TONES.red.deep : INK}>
              {line}
            </Hand>
          </g>
        ))}
      </Speech>

      <Anim className="s-viva4-sand" spin>
        <Hourglass x={300} y={278} s={0.9} seed={405} />
      </Anim>
      <Hand x={340} y={290} size={18} c={INK_SOFT}>
        take a moment
      </Hand>

      <Desk y={286} x1={560} x2={780} seed={406} />
      <Sheet x={600} y={258} w={44} h={28} lines={2} fold={8} seed={407} />
      <Place x={690} y={286} s={1.4} flip>
        <g className="s-viva4-nod">
          <Pip mood="happy" arms="hold" tone="blue" glasses look={1.4} seed={408} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The presentation: one clear slide, eyes on the room.
   ------------------------------------------------------------------ */

const slidesCss = `
.s-viva5-rain { animation: s-viva5-rain 1.6s linear infinite; animation-delay: calc(var(--i) * -0.3s); }
.s-viva5-pip .pip-arm-r { animation: s-viva5-point 4s ease-in-out infinite; }
@keyframes s-viva5-rain {
  0%, 100% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(14px); opacity: 0; }
  90% { transform: translateY(0); opacity: 0; }
}
@keyframes s-viva5-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

export function SlidesScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={slidesCss} className="s-viva5" label="A paper character points at a projector screen showing one clear slide of a rainy slope with a crack in it. A laptop on a lectern counts 18 slides, and a small stack of backup slides waits beside it">
      <Floor y={floor} x1={30} x2={770} seed={501} />
      <SlideScreen x={300} y={70} w={260} h={170} seed={502} rainClass="s-viva5-rain" />
      <Ink d={handLine(430, 240, 430, floor, 503, 0.3)} w={2} />
      <Ink d={handLine(400, floor, 460, floor, 504, 0.3)} w={2.2} />

      <Shadow x={200} y={floor + 2} rx={30} ry={4} />
      <Place x={200} y={floor} s={1.6}>
        <g className="s-viva5-pip">
          <Pip mood="happy" arms="point" tone="amber" glasses look={1.6} seed={505} />
        </g>
      </Place>

      <Lectern x={660} y={floor} seed={506} />
      <Laptop x={660} y={floor - 72} w={110} seed={507} />
      <Hand x={660} y={floor - 97} size={14} anchor="middle" weight={700}>
        18 slides
      </Hand>

      <Sheet x={70} y={230} w={44} h={56} lines={3} fold={9} seed={508} />
      <Sheet x={80} y={240} w={44} h={56} lines={3} fold={9} seed={509} />
      <Hand x={98} y={320} size={16} anchor="middle" c={INK_SOFT}>
        backup
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Preparing: five weeks, a checklist, a one-page summary and chai.
   ------------------------------------------------------------------ */

const prepareCss = `
.s-viva6 .check-tick { animation: s-viva6-tick 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s); }
.s-viva6-pip .pip-body { animation: s-viva6-read 4s ease-in-out infinite; }
@keyframes s-viva6-tick {
  0%, 100% { stroke-dashoffset: 0; }
  8% { stroke-dashoffset: 1; }
  22%, 92% { stroke-dashoffset: 0; }
}
@keyframes s-viva6-read {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function PrepareScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={prepareCss} className="s-viva6" label="A paper character in glasses reads a thesis at a desk under a lamp, with a glass of chai. Beside the desk a calendar says five weeks, a sticky note says one page, and a checklist is being ticked off">
      <Floor y={floor} x1={30} x2={770} seed={601} />
      <Calendar x={70} y={70} w={96} h={104} day="5" month="WEEKS" tone="red" seed={602} />
      <Sticky x={76} y={200} w={96} h={84} tone="amber" lines={2} seed={603} />
      <Hand x={124} y={232} size={20} anchor="middle" weight={700}>
        one page
      </Hand>

      <Desk y={266} x1={210} x2={520} seed={604} />
      <Lamp x={250} y={266} s={1} seed={605} />
      <Pile x={370} y={266} w={120} count={9} seed={606} />
      <Chai x={470} y={266} s={1} seed={607} />
      <Shadow x={572} y={floor + 2} rx={28} ry={4} />
      <Place x={572} y={floor} s={1.5}>
        <g className="s-viva6-pip">
          <Pip mood="focused" arms="hold" tone="amber" glasses look={1.4} seed={608}>
            <Sheet x={-15} y={-30} w={30} h={17} lines={2} fold={6} seed={610} />
          </Pip>
        </g>
      </Place>

      <Checklist x={634} y={74} w={136} items={6} done={6} seed={609} />
      <Hand x={702} y={60} size={18} anchor="middle" weight={700}>
        before the viva
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. After: a tabbed thesis in, a short list of corrections out, and
      the thesis on its way to INFLIBNET.
   ------------------------------------------------------------------ */

const afterCss = `
.s-viva7-pip .pip-body { animation: s-viva7-hop 2.4s ease-in-out infinite; }
.s-viva7-pip .pip-arm-l { animation: s-viva7-wave 2.4s ease-in-out infinite; }
.s-viva7-pip .pip-arm-r { animation: s-viva7-wave 2.4s ease-in-out infinite reverse; }
@keyframes s-viva7-hop {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-9px); }
  60% { transform: translateY(0); }
}
@keyframes s-viva7-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

export function AfterScene() {
  const floor = 340
  return (
    <Scene w={800} h={310} top={34} css={afterCss} className="s-viva7" label="A thesis with coloured tabs leads by an arrow to a short list of two corrections, both ticked, and then to a cloud marked INFLIBNET. A paper character cheers with both arms up">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Sheet x={60} y={130} w={110} h={150} lines={7} fold={18} seed={702} title />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={170} y={150 + i * 34} width={14} height={18} fill={TONES[['pink', 'blue', 'green'][i]].mid} stroke={INK} strokeWidth={1.2} />
      ))}
      <Hand x={115} y={308} size={18} anchor="middle" c={INK_SOFT}>
        your marked copy
      </Hand>
      <Arrow from={[200, 200]} to={[262, 200]} seed={703} c={TONES.amber.deep} w={2} />

      <Box x={272} y={120} w={196} h={150} r={6} fill={PAPER} seed={704} />
      <Hand x={370} y={152} size={20} anchor="middle" weight={700}>
        corrections
      </Hand>
      <Hand x={296} y={196} size={19}>
        1. p. 84, line 12
      </Hand>
      <Hand x={296} y={234} size={19}>
        2. fig. 5.3 label
      </Hand>
      <Tick x={446} y={188} s={0.9} />
      <Tick x={446} y={226} s={0.9} />
      <Arrow from={[476, 194]} to={[516, 160]} bend={-0.1} seed={705} c={TONES.amber.deep} w={2} />

      <Cloud x={590} y={130} s={1.4} seed={706} />
      <Hand x={590} y={138} size={18} anchor="middle" weight={700}>
        INFLIBNET
      </Hand>

      <Shadow x={640} y={floor + 2} rx={30} ry={4} />
      <Place x={640} y={floor} s={1.55}>
        <g className="s-viva7-pip">
          <Pip mood="grin" arms="up" tone="amber" glasses seed={707} />
        </g>
      </Place>
    </Scene>
  )
}
