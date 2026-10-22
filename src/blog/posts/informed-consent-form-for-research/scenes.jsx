import {
  Anim,
  Arrow,
  Box,
  Calendar,
  Cross,
  Fingerprint,
  Floor,
  Hand,
  INK,
  INK_FAINT,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  Oval,
  PAPER,
  PAPER_SHADE,
  Pencil,
  Pip,
  Place,
  Poly,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handEllipse,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   Shared pieces: the auto-rickshaw the drivers wait in, and the
   headphones of the hearing test.
   ------------------------------------------------------------------ */

/** An auto-rickshaw seen from the side, facing right. Anchor: ground under its middle. */
export function Auto({ x = 0, y = 0, s = 1, seed = 900 }) {
  return (
    <Place x={x} y={y} s={s}>
      <Poly points={[[-68, -62], [-62, -104], [22, -108], [48, -64]]} fill={TONES.grey.deep} seed={seed} sw={1.9} />
      <Poly points={[[16, -100], [24, -102], [42, -68], [30, -68]]} fill={TONES.blue.tint} seed={seed + 1} sw={1.4} />
      <Poly points={[[-74, -64], [50, -64], [72, -44], [70, -22], [-74, -22]]} fill="url(#fill-amber)" seed={seed + 2} sw={1.9} />
      <Box x={-62} y={-60} w={52} h={30} r={4} fill={PAPER_SHADE} seed={seed + 3} sw={1.4} />
      <Ink d={handLine(-74, -36, 70, -36, seed + 4, 0.3)} c={TONES.green.ink} w={3} />
      <Oval cx={64} cy={-52} rx={5} fill={TONES.amber.tint} seed={seed + 5} sw={1.4} />
      {[-46, 54].map((wx, i) => (
        <g key={wx}>
          <Oval cx={wx} cy={-12} rx={12} fill={INK_SOFT} seed={seed + 6 + i} sw={1.8} />
          <Oval cx={wx} cy={-12} rx={4.5} fill={PAPER} seed={seed + 8 + i} sw={1.2} />
        </g>
      ))}
    </Place>
  )
}

/** Headphones to put on a Pip, drawn in Pip's own units. */
function Headphones({ seed = 950 }) {
  return (
    <g>
      <Ink d="M-25 -42Q-26 -82 0 -82Q26 -82 25 -42" c={INK} w={2.4} />
      <Box x={-30} y={-50} w={9} h={16} r={3} fill={TONES.red.mid} seed={seed} sw={1.5} />
      <Box x={21} y={-50} w={9} h={16} r={3} fill={TONES.red.mid} seed={seed + 1} sw={1.5} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Two papers: the information sheet, then the consent form.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-icf1-read .pip-body { animation: s-icf1-lean 3.4s ease-in-out infinite; }
.s-icf1-arrow { animation: s-icf1-nudge 2.6s ease-in-out infinite; }
.s-icf1-sign { animation: s-icf1-sign 5s ease-in-out infinite; }
@keyframes s-icf1-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-icf1-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
@keyframes s-icf1-sign {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(14px, -2px) rotate(3deg); }
  50% { transform: translate(28px, 0) rotate(0deg); }
  75% { transform: translate(14px, 2px) rotate(-3deg); }
}
`

export function MeaningScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={meaningCss} className="s-icf1" label="A paper character reads a long sheet marked information sheet, and an arrow leads from it to a short sheet marked consent form, where a pencil signs on the line, with the labels first understand and then sign">
      <Floor y={floor} x1={30} x2={770} seed={101} />

      <Shadow x={110} y={floor + 2} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.45}>
        <g className="s-icf1-read">
          <Pip mood="focused" arms="hold" tone="pink" look={1.6} seed={102}>
            <Sheet x={-15} y={-34} w={30} h={30} lines={3} fold={6} seed={103} sw={1.3} />
          </Pip>
        </g>
      </Place>

      <Sheet x={200} y={44} w={180} h={230} lines={11} fold={22} seed={104} sw={1.9} />
      <Type x={214} y={260} size={14} weight={700} c={TONES.pink.deep}>
        INFORMATION SHEET
      </Type>
      <Hand x={290} y={40} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        1. understand
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-icf1-arrow">
          <Arrow from={[396, 160]} to={[466, 160]} bend={-0.15} seed={105} w={2.2} head={12} />
        </Anim>
      </Place>

      <Sheet x={484} y={84} w={170} h={190} lines={0} fold={20} seed={106} sw={1.9} />
      <Type x={500} y={124} size={14} weight={700} c={TONES.blue.deep}>
        CONSENT FORM
      </Type>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Box x={500} y={140 + i * 26} w={14} h={14} seed={107 + i * 3} sw={1.3} fill={PAPER} />
          <Tick x={507} y={147 + i * 26} s={0.7} />
          <Ink d={handLine(524, 148 + i * 26, 620, 148 + i * 26, 108 + i * 3, 0.4)} c={TEXT_LINE} w={1.5} />
        </g>
      ))}
      <Ink d={handLine(500, 252, 600, 252, 116, 0.4)} w={1.5} />
      <Ink d="M504 248q8 -12 14 -2q6 8 12 -4q5 -8 10 2q4 6 10 -2" c={TONES.blue.ink} w={1.6} />
      <Place x={562} y={246}>
        <Anim className="s-icf1-sign">
          <Pencil x={0} y={0} length={80} angle={-55} tone="amber" seed={117} />
        </Anim>
      </Place>
      <Hand x={570} y={70} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        2. sign
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Ten elements, and the copied form ticks only three.
   ------------------------------------------------------------------ */

const ELEMENTS = [
  ['research', true],
  ['purpose', true],
  ['time', false],
  ['benefits', false],
  ['risks', false],
  ['privacy', false],
  ['payment', false],
  ['injury care', false],
  ['can withdraw', true],
  ['contacts', false],
]

const elementsCss = `
.s-icf2-mark { animation: s-icf2-mark 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s - 8s); }
.s-icf2-lens { animation: s-icf2-scan 6s ease-in-out infinite; }
@keyframes s-icf2-mark {
  0%, 100% { opacity: 1; }
  8% { opacity: 0.15; }
  16% { opacity: 1; }
}
@keyframes s-icf2-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(0, 120px); }
}
`

export function ElementsScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={elementsCss} className="s-icf2" label="A board lists ten elements of consent, research, purpose, time, benefits, risks, privacy, payment, injury care, can withdraw and contacts, with only three ticked and seven crossed out, while a worried paper character checks it with a magnifying glass">
      <Floor y={floor} x1={30} x2={770} seed={201} />

      <Box x={220} y={40} w={420} h={240} r={8} fill={PAPER} seed={202} sw={2} double />
      <Hand x={430} y={76} size={22} anchor="middle" weight={700} c={TONES.pink.deep}>
        does the form say...
      </Hand>
      {ELEMENTS.map(([word, ok], i) => {
        const col = i < 5 ? 0 : 1
        const row = i % 5
        const bx = 246 + col * 200
        const by = 96 + row * 36
        return (
          <g key={word}>
            <Box x={bx} y={by} w={20} h={20} seed={210 + i * 3} sw={1.4} fill="#ffffff" />
            <g className="s-icf2-mark" style={{ '--i': i }}>
              {ok ? <Tick x={bx + 10} y={by + 8} s={0.85} /> : <Cross x={bx + 10} y={by + 10} s={0.6} w={2} seed={240 + i} />}
            </g>
            <Hand x={bx + 32} y={by + 17} size={19} weight={700} c={ok ? INK : INK_SOFT}>
              {word}
            </Hand>
          </g>
        )
      })}

      <Place x={690} y={110}>
        <Anim className="s-icf2-lens">
          <Magnifier x={0} y={0} r={22} angle={40} tone="amber" seed={260} />
        </Anim>
      </Place>

      <Shadow x={110} y={floor + 2} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.45}>
        <Pip mood="worried" arms="think" tone="pink" look={1.6} seed={262} />
      </Place>
      <Hand x={110} y={170} size={30} anchor="middle" weight={700} c={TONES.red.deep}>
        3 / 10
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The format from top to bottom.
   ------------------------------------------------------------------ */

const PARTS = ['title', 'who we are', 'why', 'what you do', 'risks', 'benefits', 'privacy', 'payment', 'your rights', 'contacts']

const formatCss = `
.s-icf3-part { animation: s-icf3-glow 10s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 10s); }
.s-icf3-thumb { animation: s-icf3-press 4s ease-in-out infinite; }
@keyframes s-icf3-glow {
  0%, 12%, 100% { opacity: 0.35; }
  4%, 8% { opacity: 1; }
}
@keyframes s-icf3-press {
  0%, 100% { transform: translateY(0); }
  40%, 60% { transform: translateY(4px); }
}
`

export function FormatScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={formatCss} className="s-icf3" label="A tall information sheet lists its parts in order, title, who we are, why, what you do, risks, benefits, privacy, payment, your rights and contacts, and beside it the consent page has tick boxes, a signature line, a thumb impression and a witness line">
      <Floor y={floor} x1={30} x2={770} seed={301} />

      <Sheet x={130} y={30} w={290} h={262} lines={0} fold={24} seed={302} sw={1.9} />
      {PARTS.map((part, i) => {
        const col = i < 5 ? 0 : 1
        const row = i % 5
        const px = 148 + col * 134
        const py = 76 + row * 42
        return (
          <g key={part}>
            <rect className="s-icf3-part" style={{ '--i': i }} x={px - 4} y={py - 18} width={126} height={28} rx={5} fill={TONES.pink.tint} />
            <Type x={px} y={py} size={12} weight={700} c={TONES.pink.deep}>
              {`${i + 1}.`}
            </Type>
            <Hand x={px + 26} y={py + 1} size={16} weight={700}>
              {part}
            </Hand>
            <Ink d={handLine(px + 2, py + 12, px + 112, py + 12, 310 + i, 0.3)} c={TEXT_LINE} w={1.3} />
          </g>
        )
      })}

      <Arrow from={[430, 160]} to={[476, 160]} bend={0.1} seed={330} w={2} head={11} />

      <Sheet x={486} y={60} w={200} h={232} lines={0} fold={22} seed={331} sw={1.9} />
      <Type x={502} y={104} size={14} weight={700} c={TONES.blue.deep}>
        11. CONSENT
      </Type>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <Box x={502} y={118 + i * 22} w={13} h={13} seed={332 + i * 2} sw={1.2} fill={PAPER} />
          <Ink d={handLine(522, 125 + i * 22, 620, 125 + i * 22, 333 + i * 2, 0.3)} c={TEXT_LINE} w={1.4} />
        </g>
      ))}
      <Ink d={handLine(502, 232, 590, 232, 342, 0.4) + handLine(502, 272, 590, 272, 343, 0.4)} w={1.5} />
      <Type x={502} y={248} size={11} c={INK_SOFT}>
        participant
      </Type>
      <Type x={502} y={286} size={11} c={INK_SOFT}>
        researcher / witness
      </Type>
      <Place x={0} y={0}>
        <Anim className="s-icf3-thumb">
          <Fingerprint x={640} y={222} s={0.8} c={TONES.blue.ink} seed={344} />
        </Anim>
      </Place>

      <Shadow x={740} y={floor + 2} rx={24} ry={4} />
      <Place x={740} y={floor} s={1.15} flip>
        <Pip mood="happy" arms="point" tone="green" glasses look={1.2} seed={350} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. One long legal sentence, turned into what the driver will feel.
   ------------------------------------------------------------------ */

const plainCss = `
.s-icf4-driver .pip-arm-r { animation: s-icf4-raise 3s ease-in-out infinite; }
.s-icf4-beep { opacity: 0; animation: s-icf4-beep 3s ease-in-out infinite; }
@keyframes s-icf4-raise {
  0%, 30%, 100% { transform: rotate(0deg); }
  45%, 75% { transform: rotate(-14deg); }
}
@keyframes s-icf4-beep {
  0%, 20%, 60%, 100% { opacity: 0; }
  30%, 50% { opacity: 1; }
}
`

export function PlainScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={plainCss} className="s-icf4" label="On the left a dense paragraph with the words hereby and pure tone audiometry crossed out in red; an arrow leads to a driver wearing headphones who raises his hand when he hears a soft beep, under a note saying raise your hand at each beep">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Box x={50} y={50} w={290} h={200} r={6} fill={PAPER} seed={402} sw={1.8} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Ink key={i} d={handLine(68, 74 + i * 20, 68 + 250 - (i % 3) * 30, 74 + i * 20, 403 + i, 0.3)} c={TEXT_LINE} w={1.4} />
      ))}
      <rect x={66} y={98} width={140} height={28} fill={PAPER} />
      <Type x={72} y={118} size={17} weight={700}>
        I hereby...
      </Type>
      <Ink d={handLine(68, 112, 200, 106, 420, 0.4)} c={TONES.red.ink} w={2.4} />
      <rect x={66} y={178} width={250} height={28} fill={PAPER} />
      <Type x={72} y={198} size={17} weight={700}>
        pure tone audiometry
      </Type>
      <Ink d={handLine(68, 192, 312, 186, 421, 0.4)} c={TONES.red.ink} w={2.4} />

      <Arrow from={[354, 150]} to={[420, 150]} bend={-0.2} seed={422} w={2.2} head={12} />

      <Sticky x={440} y={46} w={170} h={96} tone="green" lines={0} seed={423} />
      <Hand x={525} y={86} size={19} anchor="middle" weight={700} c={TONES.green.deep}>
        raise your hand
      </Hand>
      <Hand x={525} y={112} size={19} anchor="middle" weight={700} c={TONES.green.deep}>
        at each beep
      </Hand>

      <g className="s-icf4-beep">
        <Hand x={720} y={130} size={22} weight={700} c={TONES.red.deep}>
          beep
        </Hand>
        <Ink d="M700 150q6 -8 0 -16M710 156q10 -14 0 -28" c={TONES.red.ink} w={1.8} />
      </g>

      <Shadow x={640} y={floor + 2} rx={30} ry={4} />
      <Place x={640} y={floor} s={1.55}>
        <g className="s-icf4-driver">
          <Pip mood="focused" arms="wave" tone="amber" look={1.2} seed={430}>
            <Headphones seed={431} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Read aloud in Telugu, a witness listening, a thumb impression.
   ------------------------------------------------------------------ */

const languageCss = `
.s-icf5-bubble { animation: s-icf5-float 4s ease-in-out infinite; }
.s-icf5-thumb { animation: s-icf5-show 6s ease-in-out infinite; }
.s-icf5-witness .pip-body { animation: s-icf5-nod 3.6s ease-in-out infinite; }
@keyframes s-icf5-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
@keyframes s-icf5-show {
  0%, 100% { opacity: 1; }
  15% { opacity: 0.2; }
  30% { opacity: 1; }
}
@keyframes s-icf5-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function LanguageScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={languageCss} className="s-icf5" label="A student reads the form aloud in Telugu to an auto driver, a witness in glasses who is not part of the study listens beside them, and the consent form shows a blue thumb impression in place of a signature, with an auto-rickshaw parked behind">
      <Floor y={floor} x1={30} x2={770} seed={501} />

      <Auto x={330} y={floor} s={0.95} seed={502} />

      <Place x={0} y={0}>
        <Anim className="s-icf5-bubble">
          <Speech x={70} y={34} w={200} h={70} tx={120} ty={154} seed={503}>
            <Hand x={170} y={66} size={21} anchor="middle" weight={700}>
              read aloud
            </Hand>
            <Hand x={170} y={92} size={21} anchor="middle" weight={700} c={TONES.pink.deep}>
              in Telugu
            </Hand>
          </Speech>
        </Anim>
      </Place>

      <Shadow x={110} y={floor + 2} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.4}>
        <Pip mood="happy" arms="hold" tone="pink" look={1.6} seed={510}>
          <Sheet x={-14} y={-33} w={28} h={30} lines={3} fold={6} seed={511} sw={1.3} />
        </Pip>
      </Place>

      <Shadow x={220} y={floor + 2} rx={30} ry={4} />
      <Place x={220} y={floor} s={1.45} flip>
        <Pip mood="focused" arms="think" tone="amber" look={1.4} seed={520} />
      </Place>

      <Shadow x={460} y={floor + 2} rx={26} ry={4} />
      <Place x={460} y={floor} s={1.2} flip>
        <g className="s-icf5-witness">
          <Pip mood="happy" arms="down" tone="blue" glasses look={1.6} seed={530} />
        </g>
      </Place>
      <Hand x={460} y={196} size={18} anchor="middle" weight={700} c={INK_SOFT}>
        witness
      </Hand>

      <Sheet x={560} y={60} w={180} h={220} lines={5} fold={20} seed={540} sw={1.9} />
      <Type x={576} y={158} size={13} weight={700} c={INK_SOFT}>
        CONSENT
      </Type>
      <Ink d={handLine(576, 236, 650, 236, 541, 0.4)} w={1.5} />
      <Type x={576} y={256} size={11} c={INK_SOFT}>
        thumb impression
      </Type>
      <g className="s-icf5-thumb">
        <Ink d={handEllipse(700, 226, 16, 20, { seed: 542, amp: 0.4 })} c={TONES.blue.ink} w={1} o={0.4} />
        <Fingerprint x={700} y={224} s={0.9} c={TONES.blue.ink} seed={543} />
      </g>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The information on the first page; questions open after yes.
   ------------------------------------------------------------------ */

const surveyCss = `
.s-icf6-click { animation: s-icf6-click 4s ease-in-out infinite; }
.s-icf6-next { animation: s-icf6-slide 4s ease-in-out infinite; }
@keyframes s-icf6-click {
  0%, 100% { transform: translate(0, 0); }
  30%, 45% { transform: translate(-6px, -6px); }
}
@keyframes s-icf6-slide {
  0%, 35%, 100% { transform: translateX(0); }
  55%, 85% { transform: translateX(10px); }
}
`

export function SurveyScene() {
  const floor = 300
  const [sx, sy, sw, sh] = laptopScreen(250, 280, 340)
  return (
    <Scene w={800} h={300} top={20} css={surveyCss} className="s-icf6" label="A laptop shows the first page of an online form with information lines and two choices, I agree and I do not agree, with the first one chosen, and an arrow leads to the next page of questions, now open">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Laptop x={250} y={280} w={340} seed={602} />
      <Type x={sx + 14} y={sy + 26} size={14} weight={700} c={TONES.pink.deep}>
        ABOUT THIS STUDY
      </Type>
      {[0, 1, 2, 3].map((i) => (
        <Ink key={i} d={handLine(sx + 14, sy + 44 + i * 14, sx + sw - 30 - (i % 2) * 40, sy + 44 + i * 14, 603 + i, 0.3)} c={TEXT_LINE} w={1.3} />
      ))}
      <Oval cx={sx + 22} cy={sy + 108} rx={7} fill={PAPER} seed={610} sw={1.4} />
      <circle cx={sx + 22} cy={sy + 108} r={3.6} fill={TONES.green.ink} />
      <Hand x={sx + 36} y={sy + 114} size={16} weight={700}>
        I agree
      </Hand>
      <Oval cx={sx + 122} cy={sy + 108} rx={7} fill={PAPER} seed={611} sw={1.4} />
      <Hand x={sx + 136} y={sy + 114} size={16} weight={700} c={INK_SOFT}>
        I do not agree
      </Hand>

      <Place x={sx + 30} y={sy + 116}>
        <Anim className="s-icf6-click">
          <Poly points={[[0, 0], [0, 22], [6, 16], [11, 26], [15, 24], [10, 14], [18, 14]]} fill="#ffffff" seed={612} sw={1.4} />
        </Anim>
      </Place>

      <Arrow from={[440, 150]} to={[500, 150]} bend={-0.15} seed={620} w={2.2} head={12} />

      <Place x={0} y={0}>
        <Anim className="s-icf6-next">
          <Sheet x={516} y={50} w={180} h={220} lines={0} fold={20} seed={621} sw={1.9} />
          {['Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => (
            <g key={q}>
              <Type x={532} y={104 + i * 40} size={15} weight={700} c={TONES.blue.deep}>
                {q}
              </Type>
              <Ink d={handLine(564, 100 + i * 40, 670, 100 + i * 40, 622 + i, 0.3)} c={TEXT_LINE} w={1.4} />
            </g>
          ))}
        </Anim>
      </Place>
      <Hand x={606} y={40} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
        then the questions
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. A parent's consent, a child's assent, and fresh consent later.
   ------------------------------------------------------------------ */

const assentCss = `
.s-icf7-child .pip-body { animation: s-icf7-hop 2.8s ease-in-out infinite; }
.s-icf7-loop { animation: s-icf7-turn 6s linear infinite; }
@keyframes s-icf7-hop {
  0%, 60%, 100% { transform: translateY(0); }
  75% { transform: translateY(-8px); }
}
@keyframes s-icf7-turn {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export function AssentScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={assentCss} className="s-icf7" label="A parent labelled consent stands beside a small child labelled assent who holds a little sheet saying my yes, and on the right a calendar and a fresh form with a circular arrow show consent taken again when the study changes">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Shadow x={130} y={floor + 2} rx={30} ry={4} />
      <Place x={130} y={floor} s={1.55}>
        <Pip mood="happy" arms="hold" tone="blue" look={1.4} seed={702}>
          <Sheet x={-14} y={-33} w={28} h={30} lines={3} fold={6} seed={703} sw={1.3} />
        </Pip>
      </Place>
      <Hand x={130} y={168} size={22} anchor="middle" weight={700} c={TONES.blue.deep}>
        consent
      </Hand>

      <Shadow x={240} y={floor + 2} rx={20} ry={3} />
      <Place x={240} y={floor} s={0.95}>
        <g className="s-icf7-child">
          <Pip mood="grin" arms="up" tone="amber" look={-1} seed={710} />
        </g>
      </Place>
      <Sticky x={276} y={196} w={84} h={58} tone="amber" lines={0} seed={711} />
      <Hand x={316} y={232} size={18} anchor="middle" weight={700} c={TONES.amber.deep}>
        my yes
      </Hand>
      <Hand x={240} y={204} size={22} anchor="middle" weight={700} c={TONES.amber.deep}>
        assent
      </Hand>

      <Ink d={handLine(400, 60, 400, 280, 712, 1)} c={INK_FAINT} w={1.4} dash="6 8" />

      <Calendar x={450} y={80} w={90} h={96} day="?" month="LATER" tone="red" seed={720} />
      <Sheet x={590} y={70} w={150} h={190} lines={6} fold={18} seed={721} sw={1.9} />
      <Type x={606} y={240} size={13} weight={700} c={TONES.red.deep}>
        FRESH CONSENT
      </Type>
      <Place x={500} y={232}>
        <Anim className="s-icf7-loop" spin>
          <Ink d="M-26 0A26 26 0 1 1 0 26" c={TONES.red.ink} w={2.2} />
          <Ink d={handLine(0, 26, 10, 18, 722, 0.3) + handLine(0, 26, 10, 34, 723, 0.3)} c={TONES.red.ink} w={2.2} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. The final form, and the first driver who said yes.
   ------------------------------------------------------------------ */

const sampleCss = `
.s-icf8-tick { stroke-dashoffset: 0; animation: s-icf8-draw 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 6s); }
.s-icf8-ramesh .pip-arm-r { animation: s-icf8-wave 1.6s ease-in-out infinite alternate; }
@keyframes s-icf8-draw {
  0%, 100% { stroke-dashoffset: 0; }
  10% { stroke-dashoffset: 1; }
  25% { stroke-dashoffset: 0; }
}
@keyframes s-icf8-wave {
  from { transform: rotate(0deg); }
  to { transform: rotate(-16deg); }
}
`

export function SampleScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={sampleCss} className="s-icf8" label="The final information sheet in Telugu and English sits beside a consent form with four ticked boxes, a signature and a thumb impression line, while a smiling auto driver waves next to his auto-rickshaw">
      <Floor y={floor} x1={30} x2={770} seed={801} />

      <Sheet x={50} y={50} w={170} h={228} lines={12} fold={20} seed={802} sw={1.9} />
      <Type x={66} y={266} size={12} weight={700} c={TONES.pink.deep}>
        TELUGU + ENGLISH
      </Type>

      <Sheet x={240} y={50} w={190} h={228} lines={0} fold={20} seed={803} sw={1.9} />
      <Type x={256} y={92} size={14} weight={700} c={TONES.blue.deep}>
        CONSENT FORM
      </Type>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <Box x={256} y={108 + i * 26} w={15} h={15} seed={804 + i * 3} sw={1.3} fill={PAPER} />
          <path
            className="s-icf8-tick"
            style={{ '--i': i }}
            d={`M258 ${115 + i * 26}q3 2 5 7q5 -11 13 -16`}
            pathLength="1"
            strokeDasharray="1"
            fill="none"
            stroke="#3f8f4f"
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Ink d={handLine(280, 116 + i * 26, 404, 116 + i * 26, 805 + i * 3, 0.3)} c={TEXT_LINE} w={1.4} />
        </g>
      ))}
      <Ink d={handLine(256, 236, 340, 236, 820, 0.4) + handLine(256, 262, 340, 262, 821, 0.4)} w={1.5} />
      <Ink d="M260 232q8 -12 14 -2q6 8 12 -4q5 -8 10 2" c={TONES.blue.ink} w={1.6} />
      <Fingerprint x={384} y={240} s={0.75} c={TONES.blue.ink} seed={822} />

      <Auto x={670} y={floor} s={1} seed={830} />

      <Shadow x={500} y={floor + 2} rx={30} ry={4} />
      <Place x={500} y={floor} s={1.5}>
        <g className="s-icf8-ramesh">
          <Pip mood="grin" arms="wave" tone="amber" look={-1.2} seed={840} />
        </g>
      </Place>
      <Hand x={500} y={170} size={20} anchor="middle" weight={700} c={INK}>
        30 minutes? okay.
      </Hand>
    </Scene>
  )
}
