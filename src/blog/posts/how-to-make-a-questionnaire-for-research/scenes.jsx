import {
  Anim,
  Arrow,
  Box,
  Clock,
  Cross,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  Oval,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  Poly,
  Scene,
  Shadow,
  Sheet,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'
import { Form } from './hero.jsx'

/* ------------------------------------------------------------------
   1. One master form, and three respondents holding the same copy.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-mqr1-p .pip-body { animation: s-mqr1-bob 3.6s ease-in-out infinite; }
.s-mqr1-p1 .pip-body { animation-delay: -1.2s; }
.s-mqr1-p2 .pip-body { animation-delay: -2.4s; }
@keyframes s-mqr1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.s-mqr1-arrow { animation: s-mqr1-pulse 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s); }
@keyframes s-mqr1-pulse {
  0%, 100% { opacity: 0.45; }
  40% { opacity: 1; }
}
`

const PEOPLE = [
  [460, 'pink'],
  [580, 'green'],
  [700, 'blue'],
]

export function MeaningScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={meaningCss}
      className="s-mqr1"
      label="One master questionnaire on the left sends arrows to three paper characters, each holding an identical copy of the same form"
    >
      <Hand x={400} y={44} size={27} anchor="middle" weight={700}>
        same questions, same order, for everyone
      </Hand>
      <Floor y={FLOOR} x1={60} x2={760} seed={101} />

      <Sheet x={110} y={90} w={150} h={186} lines={9} title seed={102} sw={2} />
      <Hand x={185} y={76} size={20} anchor="middle" c={INK_SOFT}>
        one form
      </Hand>

      {PEOPLE.map(([x], i) => (
        <Place key={x} x={0} y={0}>
          <Anim className="s-mqr1-arrow" style={{ '--i': i }}>
            <Arrow from={[272, 150 + i * 30]} to={[x - 40, 190]} bend={i === 0 ? -0.06 : i === 2 ? 0.06 : 0} seed={110 + i} c={INK_SOFT} w={1.6} />
          </Anim>
        </Place>
      ))}

      {PEOPLE.map(([x, tone], i) => (
        <g key={tone}>
          <Shadow x={x} y={FLOOR + 3} rx={28} ry={4} />
          <Place x={x} y={FLOOR} s={1.5}>
            <Pip mood="happy" arms="hold" look={-1} tone={tone} seed={120 + i * 7} className={`s-mqr1-p s-mqr1-p${i}`}>
              <Sheet x={-14} y={-29} w={28} h={25} lines={2} fold={6} title seed={130 + i} sw={1.3} />
            </Pip>
          </Place>
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Objectives first: four boxes feed the form; the rest goes in the bin.
   ------------------------------------------------------------------ */

const objectivesCss = `
.s-mqr2-line { animation: s-mqr2-glow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-mqr2-glow {
  0%, 100% { opacity: 0.4; }
  25%, 45% { opacity: 1; }
}
.s-mqr2-ball { animation: s-mqr2-drop 4s ease-in infinite; }
@keyframes s-mqr2-drop {
  0%, 10% { transform: translate(-70px, -80px); opacity: 0; }
  20% { transform: translate(-70px, -80px); opacity: 1; }
  55%, 100% { transform: translate(0, 0); opacity: 1; }
}
`

function Ball({ x, y, r = 11, seed = 1 }) {
  return (
    <g>
      <Oval cx={x} cy={y} rx={r} ry={r * 0.9} fill={PAPER} seed={seed} sw={1.5} />
      <Ink d={`M${x - r * 0.6} ${y - 2}q${r * 0.4} ${-r * 0.5} ${r * 0.8} 0q${r * 0.3} ${r * 0.4} ${r * 0.5} ${-r * 0.2}M${x - 3} ${y + r * 0.4}q3 -4 7 -2`} c={INK_SOFT} w={1.1} />
    </g>
  )
}

export function ObjectivesScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={objectivesCss}
      className="s-mqr2"
      label="Four boxes labelled objective one to four each send an arrow to the questions on a form, while crumpled questions that serve no objective drop into a bin marked cut"
    >
      {[1, 2, 3, 4].map((n, i) => {
        const y = 40 + i * 62
        const tone = ['amber', 'green', 'pink', 'blue'][i]
        return (
          <g key={n}>
            <Box x={60} y={y} w={170} h={46} r={8} fill={TONES[tone].tint} seed={200 + i} sw={1.7} />
            <Hand x={145} y={y + 31} size={22} anchor="middle" weight={700}>
              {`objective ${n}`}
            </Hand>
            <Place x={0} y={0}>
              <Anim className="s-mqr2-line" style={{ '--i': i }}>
                <Arrow from={[238, y + 23]} to={[362, 82 + i * 50]} bend={0.04} seed={210 + i} c={TONES[tone].deep} w={2} />
              </Anim>
            </Place>
          </g>
        )
      })}

      <Box x={370} y={36} w={190} h={236} r={6} fill={PAPER} seed={220} sw={2} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <Type x={384} y={88 + i * 50} size={15} weight={700} c={INK_SOFT}>
            {`Q${i * 3 + 1}`}
          </Type>
          <Ink d={handLine(420, 82 + i * 50, 540, 82 + i * 50, 230 + i, 0.4) + handLine(420, 96 + i * 50, 500, 96 + i * 50, 240 + i, 0.4)} c={TEXT_LINE} w={1.6} />
        </g>
      ))}

      <Floor y={FLOOR} x1={590} x2={770} seed={250} />
      <Poly points={[[628, 214], [724, 214], [714, FLOOR], [638, FLOOR]]} fill={TONES.grey.tint} seed={251} sw={1.8} />
      <Ink d={handLine(656, 226, 660, FLOOR - 8, 252, 0.3) + handLine(676, 226, 676, FLOOR - 8, 253, 0.3) + handLine(696, 226, 692, FLOOR - 8, 254, 0.3)} c={INK_SOFT} w={1.2} />
      <Ball x={660} y={206} seed={260} />
      <Ball x={688} y={202} r={12} seed={261} />
      <Place x={0} y={0}>
        <Anim className="s-mqr2-ball">
          <Ball x={676} y={190} r={10} seed={262} />
        </Anim>
      </Place>
      <Hand x={676} y={150} size={22} anchor="middle" weight={700} c={TONES.red.deep}>
        31 cut
      </Hand>
      <Hand x={676} y={120} size={16} anchor="middle" c={INK_SOFT}>
        no objective needs them
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Four kinds of question, side by side.
   ------------------------------------------------------------------ */

const typesCss = `
.s-mqr3-dot { animation: s-mqr3-slide 6s ease-in-out infinite; }
@keyframes s-mqr3-slide {
  0%, 12% { transform: translateX(0); }
  25%, 37% { transform: translateX(34px); }
  50%, 62% { transform: translateX(68px); }
  75%, 87% { transform: translateX(102px); }
  100% { transform: translateX(0); }
}
.s-mqr3-pen { animation: s-mqr3-write 2.4s ease-in-out infinite; }
@keyframes s-mqr3-write {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(40px); }
}
.s-mqr3-pick { animation: s-mqr3-blink 3s ease-in-out infinite; }
@keyframes s-mqr3-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
`

function Radio({ x, y, on = false, seed = 1, className }) {
  return (
    <g>
      <Oval cx={x} cy={y} rx={8} fill={PAPER} seed={seed} sw={1.5} />
      {on ? <circle className={className} cx={x} cy={y} r={4.5} fill={TONES.blue.ink} /> : null}
    </g>
  )
}

export function TypesScene() {
  const top = 70
  const panel = (x, tone, title, seed) => (
    <g>
      <Box x={x} y={top} w={170} h={200} r={10} fill={TONES[tone].tint} seed={seed} sw={1.8} />
      <Hand x={x + 85} y={top + 34} size={22} anchor="middle" weight={700}>
        {title}
      </Hand>
    </g>
  )
  return (
    <Scene
      w={800}
      h={310}
      top={20}
      css={typesCss}
      className="s-mqr3"
      label="Four panels show the main question types: a yes or no choice, a list where one option is picked, a five point agree scale with a dot sliding along it, and blank lines for an answer in your own words"
    >
      <Hand x={400} y={52} size={26} anchor="middle" weight={700}>
        closed questions, and one open
      </Hand>

      {panel(20, 'green', 'yes or no', 300)}
      <Radio x={70} y={160} on seed={301} className="s-mqr3-pick" />
      <Hand x={86} y={167} size={20}>yes</Hand>
      <Radio x={70} y={210} seed={302} />
      <Hand x={86} y={217} size={20}>no</Hand>

      {panel(214, 'amber', 'pick one', 310)}
      {['weekly', 'fortnightly', 'monthly'].map((word, i) => (
        <g key={word}>
          <Radio x={244} y={140 + i * 40} on={i === 2} seed={311 + i} className="s-mqr3-pick" />
          <Hand x={260} y={147 + i * 40} size={19}>{word}</Hand>
        </g>
      ))}

      {panel(408, 'pink', 'agree?', 320)}
      <Ink d={handLine(424, 186, 562, 186, 321, 0.4)} c={INK_SOFT} w={1.4} />
      {[1, 2, 3, 4, 5].map((n, i) => (
        <g key={n}>
          <Box x={424 + i * 34 - 12} y={174} w={24} h={24} r={4} fill={PAPER} seed={322 + i} sw={1.4} />
          <Type x={424 + i * 34} y={222} size={14} anchor="middle" weight={700} c={TONES.pink.deep}>
            {n}
          </Type>
        </g>
      ))}
      <Place x={0} y={0}>
        <Anim className="s-mqr3-dot">
          <circle cx={424} cy={186} r={7} fill={TONES.pink.ink} />
        </Anim>
      </Place>
      <Type x={418} y={252} size={11} c={INK_SOFT}>disagree</Type>
      <Type x={570} y={252} size={11} anchor="end" c={INK_SOFT}>agree</Type>

      {panel(602, 'blue', 'in your words', 330)}
      {[0, 1, 2].map((i) => (
        <Ink key={i} d={handLine(620, 150 + i * 36, 754, 150 + i * 36, 331 + i, 0.4)} c={TEXT_LINE} w={1.6} />
      ))}
      <Ink d={handLine(622, 144, 700, 143, 335, 0.6) + handLine(622, 180, 676, 181, 336, 0.6)} c={TONES.blue.deep} w={1.6} />
      <Place x={0} y={0}>
        <Anim className="s-mqr3-pen">
          <Pencil x={680} y={214} length={60} angle={-55} tone="amber" seed={337} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. A double-barrelled question, split into two good ones.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-mqr4-top { animation: s-mqr4-up 5s ease-in-out infinite; }
.s-mqr4-bottom { animation: s-mqr4-down 5s ease-in-out infinite; }
@keyframes s-mqr4-up {
  0%, 100% { transform: translate(-30px, 28px); opacity: 0.2; }
  30%, 80% { transform: translate(0, 0); opacity: 1; }
}
@keyframes s-mqr4-down {
  0%, 100% { transform: translate(-30px, -28px); opacity: 0.2; }
  30%, 80% { transform: translate(0, 0); opacity: 1; }
}
.s-mqr4-q { animation: s-mqr4-bob 2.4s ease-in-out infinite; }
@keyframes s-mqr4-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
`

export function MistakesScene() {
  const FLOOR = 306
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={mistakesCss}
      className="s-mqr4"
      label="A card asking about chit fund and bank in one question is crossed out in red above a puzzled paper character, and an arrow leads to two separate cards, one about a chit fund and one about a bank account, each with a green tick"
    >
      <Box x={60} y={40} w={290} h={96} r={10} fill={TONES.red.tint} seed={401} sw={2} />
      <Hand x={205} y={80} size={21} anchor="middle">
        Do you save in a chit fund
      </Hand>
      <Hand x={205} y={110} size={21} anchor="middle">
        and a bank account?
      </Hand>
      <Cross x={338} y={44} s={1.5} seed={402} />
      <Hand x={205} y={166} size={18} anchor="middle" c={TONES.red.deep} weight={700}>
        two questions in one
      </Hand>

      <Floor y={FLOOR} x1={80} x2={330} seed={403} />
      <Shadow x={205} y={FLOOR + 3} rx={28} ry={4} />
      <Place x={205} y={FLOOR} s={1.45}>
        <Pip mood="worried" arms="shrug" look={0} seed={404} />
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-mqr4-q">
          <Hand x={256} y={212} size={40} weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Arrow from={[364, 160]} to={[424, 160]} bend={0} seed={405} w={2.4} head={13} />

      <Place x={0} y={0}>
        <Anim className="s-mqr4-top">
          <Box x={436} y={52} w={340} h={74} r={10} fill={TONES.green.tint} seed={410} sw={2} />
          <Hand x={598} y={96} size={20} anchor="middle">
            Do you save in a chit fund?
          </Hand>
          <Tick x={756} y={70} s={1.2} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-mqr4-bottom">
          <Box x={436} y={196} w={340} h={74} r={10} fill={TONES.green.tint} seed={411} sw={2} />
          <Hand x={598} y={240} size={20} anchor="middle">
            Do you have a bank account?
          </Hand>
          <Tick x={756} y={214} s={1.2} />
        </Anim>
      </Place>
      <Hand x={606} y={172} size={18} anchor="middle" c={TONES.green.deep} weight={700}>
        one thing at a time
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The format: a form in sections, top to bottom, and a clock.
   ------------------------------------------------------------------ */

const formatCss = `
.s-mqr5-band { animation: s-mqr5-light 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s); }
@keyframes s-mqr5-light {
  0%, 16%, 100% { opacity: 0; }
  6%, 10% { opacity: 0.85; }
}
.s-mqr5 .clock-min { animation: s-mqr5-spin 9s linear infinite; }
@keyframes s-mqr5-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

const PARTS = [
  ['introduction', 'grey'],
  ['consent', 'green'],
  ['easy questions', 'amber'],
  ['harder questions', 'pink'],
  ['background', 'blue'],
  ['thank you', 'grey'],
]

export function FormatScene() {
  const FLOOR = 330
  return (
    <Scene
      w={800}
      h={340}
      top={10}
      css={formatCss}
      className="s-mqr5"
      label="A tall form divided into six bands from top to bottom, introduction, consent, easy questions, harder questions, background and thank you, beside a clock and a paper character pointing at it, with the words about ten minutes"
    >
      <Box x={250} y={26} w={260} h={296} r={8} fill={PAPER} seed={501} sw={2} />
      {PARTS.map(([word, tone], i) => {
        const y = 38 + i * 46
        return (
          <g key={word}>
            <rect x={262} y={y} width={236} height={38} rx={6} fill={`url(#fill-${tone})`} opacity="0.55" />
            <rect className="s-mqr5-band" style={{ '--i': i }} x={262} y={y} width={236} height={38} rx={6} fill={TONES[tone].mid} opacity="0" />
            <Box x={262} y={y} w={236} h={38} r={6} seed={510 + i} sw={1.3} />
            <Type x={276} y={y + 25} size={13} weight={700} c={INK_SOFT}>
              {`${i + 1}`}
            </Type>
            <Hand x={380} y={y + 27} size={21} anchor="middle" weight={700}>
              {word}
            </Hand>
            {word === 'consent' ? <Tick x={474} y={y + 18} s={1} /> : null}
          </g>
        )
      })}
      <Arrow from={[226, 50]} to={[226, 300]} bend={0} seed={520} c={INK_SOFT} w={1.6} />
      <Hand x={150} y={120} size={18} anchor="middle" c={INK_SOFT}>
        read from
      </Hand>
      <Hand x={150} y={142} size={18} anchor="middle" c={INK_SOFT}>
        top to bottom
      </Hand>

      <Clock x={630} y={110} r={50} seed={530} />
      <Hand x={630} y={196} size={22} anchor="middle" weight={700}>
        about 10 minutes
      </Hand>
      <Floor y={FLOOR} x1={560} x2={760} seed={531} />
      <Shadow x={650} y={FLOOR + 3} rx={28} ry={4} />
      <Place x={650} y={FLOOR} s={1.4} flip>
        <Pip mood="happy" arms="point" look={-1.4} tone="green" seed={532} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Translate, translate back, then try it on a few people.
   ------------------------------------------------------------------ */

const pilotCss = `
.s-mqr6-fwd { animation: s-mqr6-pulse 5s ease-in-out infinite; }
.s-mqr6-back { animation: s-mqr6-pulse 5s ease-in-out infinite; animation-delay: -2.5s; }
@keyframes s-mqr6-pulse {
  0%, 100% { opacity: 0.35; }
  30%, 50% { opacity: 1; }
}
.s-mqr6-lens { animation: s-mqr6-scan 6s ease-in-out infinite; }
@keyframes s-mqr6-scan {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(150px); }
}
.s-mqr6-q { animation: s-mqr6-pop 3s ease-in-out infinite; }
@keyframes s-mqr6-pop {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(-6px); opacity: 1; }
}
`

export function PilotScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={pilotCss}
      className="s-mqr6"
      label="An English form is translated into a Tamil form and translated back again, shown by two arrows, and on the right three paper characters try the form in a small pilot while a magnifying glass passes over their sheets"
    >
      <Sheet x={40} y={70} w={96} h={124} lines={6} title seed={601} />
      <Type x={88} y={222} size={16} anchor="middle" weight={700}>English</Type>
      <Sheet x={244} y={70} w={96} h={124} lines={6} title tone="amber" seed={602} />
      <Type x={292} y={222} size={16} anchor="middle" weight={700}>Tamil</Type>

      <Place x={0} y={0}>
        <Anim className="s-mqr6-fwd">
          <Arrow from={[146, 100]} to={[234, 100]} bend={-0.18} seed={603} w={2} c={TONES.green.deep} />
        </Anim>
      </Place>
      <Hand x={190} y={58} size={16} anchor="middle" c={TONES.green.deep}>
        forward
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-mqr6-back">
          <Arrow from={[234, 166]} to={[146, 166]} bend={-0.18} seed={604} w={2} c={TONES.blue.deep} />
        </Anim>
      </Place>
      <Hand x={190} y={210} size={16} anchor="middle" c={TONES.blue.deep}>
        back
      </Hand>

      <Ink d={handLine(400, 40, 400, 290, 605, 0.6)} c={TEXT_LINE} w={1.4} dash="5 7" />
      <Hand x={600} y={52} size={24} anchor="middle" weight={700}>
        pilot: a few people first
      </Hand>
      <Floor y={FLOOR} x1={430} x2={770} seed={606} />
      {[470, 600, 730].map((x, i) => (
        <g key={x}>
          <Shadow x={x} y={FLOOR + 3} rx={24} ry={4} />
          <Place x={x} y={FLOOR} s={1.35}>
            <Pip mood={i === 1 ? 'worried' : 'focused'} arms="hold" look={0} tone={['pink', 'amber', 'green'][i]} seed={610 + i * 5}>
              <Sheet x={-14} y={-29} w={28} h={25} lines={2} fold={6} tone="amber" seed={620 + i} sw={1.3} />
            </Pip>
          </Place>
        </g>
      ))}
      <Place x={0} y={0}>
        <Anim className="s-mqr6-q">
          <Hand x={622} y={176} size={34} weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-mqr6-lens">
          <Magnifier x={470} y={130} r={26} angle={45} tone="amber" seed={630} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The final form goes out, and the copies come back.
   ------------------------------------------------------------------ */

const sampleCss = `
.s-mqr7-fly { animation: s-mqr7-arrive 4.5s ease-in-out infinite; }
@keyframes s-mqr7-arrive {
  0%, 8% { transform: translate(-150px, -40px) rotate(-12deg); opacity: 0; }
  20% { opacity: 1; }
  55%, 85% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
.s-mqr7 .pip-arm-r { animation: s-mqr7-wave 1.8s ease-in-out infinite; }
@keyframes s-mqr7-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
`

export function SampleScene() {
  const FLOOR = 330
  return (
    <Scene
      w={800}
      h={346}
      top={10}
      css={sampleCss}
      className="s-mqr7"
      label="A finished questionnaire marked final form stands on the left, a cheerful paper character waves in the middle, and filled copies fly onto a growing pile of returned forms labelled sixty one back"
    >
      <Form x={40} y={30} w={230} rows={4} gap={52} title="final form" tickClass="s-mqr7-tick" seed={701} />

      <Floor y={FLOOR} x1={300} x2={770} seed={702} />
      <Shadow x={380} y={FLOOR + 3} rx={30} ry={4} />
      <Place x={380} y={FLOOR} s={1.7}>
        <Pip mood="grin" arms="wave" look={1.4} tone="blue" seed={703} />
      </Place>

      <Shadow x={640} y={FLOOR + 3} rx={72} ry={5} />
      <Pile x={640} y={FLOOR} w={140} count={12} seed={704} />
      <Place x={0} y={0}>
        <Anim className="s-mqr7-fly">
          <Sheet x={608} y={196} w={64} h={78} lines={5} title tone="paper" seed={705} />
        </Anim>
      </Place>
      <Hand x={640} y={110} size={26} anchor="middle" weight={700} c={TONES.green.deep}>
        61 back
      </Hand>
      <Hand x={640} y={134} size={16} anchor="middle" c={INK_SOFT}>
        in the first week
      </Hand>
      <Type x={155} y={344} size={13} anchor="middle" c={INK}>
        full copy goes in the appendix
      </Type>
    </Scene>
  )
}
