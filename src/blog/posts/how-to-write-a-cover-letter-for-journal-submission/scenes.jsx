import {
  Anim,
  EARTH,
  Box,
  Checklist,
  Clock,
  Cross,
  Desk,
  Envelope,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  OpenBook,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  StampMark,
  TEXT_LINE,
  TONES,
  Thought,
  Tick,
  Type,
  Window,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  laptopScreen,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6, o }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} o={o} />
}

/* Two table legs under a desk top. */
function Legs({ x1, x2, top, floor, seed }) {
  return <Ink d={handLine(x1, top, x1 + 2, floor, seed, 0.4) + handLine(x2, top, x2 - 2, floor, seed + 1, 0.4)} w={3} c={TONES.brown.deep} />
}

/* ------------------------------------------------------------------
   1. The editor meets the letter first, with little time to spare.
   ------------------------------------------------------------------ */

const purposeCss = `
.s-cv1 .clock-min { animation: s-cv1-spin 4s linear infinite; }
.s-cv1 .clock-hour { animation: s-cv1-spin 48s linear infinite; }
.s-cv1-drop { animation: s-cv1-drop 6s ease-in infinite; animation-delay: var(--d, 0s); }
.s-cv1-editor .pip-body { animation: s-cv1-nod 3s ease-in-out infinite; }
.s-cv1-thought { animation: s-cv1-float 5s ease-in-out infinite; }
@keyframes s-cv1-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes s-cv1-drop {
  0%, 60% { transform: translateY(-60px); opacity: 0; }
  66% { opacity: 1; }
  76%, 92% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0); opacity: 0; }
}
@keyframes s-cv1-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-cv1-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

const PILES = [
  { x: 380, count: 12, d: '0s' },
  { x: 500, count: 9, d: '-2s' },
  { x: 620, count: 14, d: '-4s' },
]

export function PurposeScene() {
  const desk = 250
  return (
    <Scene w={800} h={300} top={20} css={purposeCss} className="s-cv1" label="An editor in glasses holds a pink cover letter and thinks why this journal, beside a desk with three tall piles of new manuscripts, each topped with a letter, under a fast spinning wall clock">
      <Clock x={712} y={72} r={30} seed={101} />
      <Floor y={312} x1={30} x2={770} seed={102} />
      <Legs x1={300} x2={700} top={desk + 20} floor={312} seed={103} />
      <Desk y={desk} x1={280} x2={720} depth={20} seed={104} />

      {PILES.map((pile, i) => (
        <g key={pile.x}>
          <Pile x={pile.x} y={desk} w={92} count={pile.count} seed={110 + i * 5} />
          <Sheet x={pile.x - 20} y={desk - pile.count * 5 - 34} w={40} h={34} tone="pink" lines={2} fold={9} seed={130 + i} sw={1.4} />
          <Place x={0} y={0}>
            <Anim className="s-cv1-drop" style={{ '--d': pile.d, opacity: 0 }}>
              <Sheet x={pile.x - 20} y={desk - pile.count * 5 - 52} w={40} h={16} tone="paper" lines={0} fold={6} seed={140 + i} sw={1.3} />
            </Anim>
          </Place>
        </g>
      ))}
      <Hand x={500} y={desk + 50} size={20} anchor="middle" c={INK_SOFT}>
        new papers today
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-cv1-thought">
          <Thought x={150} y={74} w={210} h={74} tx={168} ty={168} seed={150}>
            <Hand x={150} y={83} size={22} anchor="middle" weight={700}>
              why this journal?
            </Hand>
          </Thought>
        </Anim>
      </Place>

      <Shadow x={160} y={314} rx={34} ry={4} />
      <Place x={160} y={312} s={1.5}>
        <g className="s-cv1-editor">
          <Pip mood="focused" arms="hold" tone="blue" glasses look={0.6} seed={160}>
            <Sheet x={-12} y={-29} w={24} h={24} tone="pink" lines={2} fold={6} seed={161} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Read the guide for authors before writing a word.
   ------------------------------------------------------------------ */

const guideCss = `
.s-cv2-lens { animation: s-cv2-scan 7s ease-in-out infinite; }
.s-cv2 .check-tick { animation: s-cv2-tick 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 7s); }
.s-cv2-reader .pip-body { animation: s-cv2-lean 7s ease-in-out infinite; }
@keyframes s-cv2-scan {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(84px, 4px); }
  50% { transform: translate(140px, 30px); }
  75% { transform: translate(40px, 30px); }
}
@keyframes s-cv2-tick {
  0%, 30% { stroke-dashoffset: 1; }
  40%, 90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-cv2-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function GuideScene() {
  const desk = 250
  return (
    <Scene w={800} h={290} top={30} css={guideCss} className="s-cv2" label="A paper character in glasses points at a large open book marked guide for authors while a magnifying glass moves along its lines, beside a clipboard of rules being ticked off">
      <Floor y={312} x1={30} x2={770} seed={201} />
      <Legs x1={210} x2={530} top={desk + 20} floor={312} seed={202} />
      <Desk y={desk} x1={190} x2={550} depth={20} seed={203} />

      <OpenBook x={370} y={desk - 4} w={290} tone="red" lines={6} seed={204} />
      <path d="M270 44h200v34h-200Z" fill={TONES.amber.mid} />
      <Ink d={handPoly([[270, 44], [470, 44], [470, 78], [270, 78]], { seed: 205, amp: 0.4, closed: true })} w={1.8} />
      <Hand x={370} y={69} size={22} anchor="middle" weight={700}>
        guide for authors
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-cv2-lens">
          <Magnifier x={278} y={150} r={26} angle={50} tone="amber" seed={206} />
        </Anim>
      </Place>

      <Checklist x={40} y={78} w={120} items={4} done={4} seed={207} />
      <Hand x={100} y={246} size={20} anchor="middle" c={INK_SOFT}>
        its own rules
      </Hand>

      <Shadow x={650} y={314} rx={36} ry={4} />
      <Place x={650} y={312} s={1.55} flip>
        <g className="s-cv2-reader">
          <Pip mood="focused" arms="point" tone="green" glasses look={1.5} seed={210} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The seven parts of the letter, stacked in order.
   ------------------------------------------------------------------ */

const PARTS = [
  { label: 'dear dr. menon', tone: 'grey' },
  { label: 'title and type', tone: 'blue' },
  { label: 'what we found', tone: 'green' },
  { label: 'why this journal', tone: 'amber' },
  { label: 'the statements', tone: 'pink' },
  { label: 'disclosures', tone: 'red' },
  { label: 'name and contact', tone: 'brown' },
]

const partsCss = `
.s-cv3-strip { animation: s-cv3-build 10s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s - 10s); }
.s-cv3-guide .pip-arm-r { animation: s-cv3-point 2.5s ease-in-out infinite alternate; }
@keyframes s-cv3-build {
  0%, 3% { transform: translateX(-40px); opacity: 0; }
  9%, 72% { transform: translateX(0); opacity: 1; }
  78%, 100% { transform: translateX(0); opacity: 0; }
}
@keyframes s-cv3-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-10deg); }
}
`

export function PartsScene() {
  const x = 230
  const y = 34
  const w = 300
  return (
    <Scene w={800} h={400} top={14} css={partsCss} className="s-cv3" label="One page of a letter built from seven coloured strips stacked in order: dear dr. menon, title and type, what we found, why this journal, the statements, disclosures, and name and contact, while a paper character points at it">
      <Floor y={398} x1={40} x2={760} seed={301} />
      <Sheet x={x} y={y} w={w} h={350} lines={0} fold={22} seed={302} sw={2} />
      {PARTS.map((part, i) => {
        const top = y + 34 + i * 44
        const t = TONES[part.tone]
        return (
          <g key={part.label} className="s-cv3-strip" style={{ '--i': i }}>
            <path d={`M${x + 18} ${top}h${w - 36}v34h${-(w - 36)}Z`} fill={t.tint} />
            <path d={`M${x + 18} ${top}h10v34h-10Z`} fill={t.mid} />
            <Ink d={handPoly([[x + 18, top], [x + w - 18, top], [x + w - 18, top + 34], [x + 18, top + 34]], { seed: 310 + i * 3, amp: 0.4, closed: true })} w={1.4} c={t.deep} />
            <Hand x={x + 40} y={top + 25} size={21} weight={700}>
              {part.label}
            </Hand>
          </g>
        )
      })}

      <Hand x={130} y={140} size={22} anchor="middle" c={INK_SOFT}>
        one page,
      </Hand>
      <Hand x={130} y={168} size={22} anchor="middle" c={INK_SOFT}>
        seven parts
      </Hand>

      <Shadow x={640} y={400} rx={38} ry={4} />
      <Place x={640} y={398} s={1.7} flip>
        <g className="s-cv3-guide">
          <Pip mood="happy" arms="point" tone="amber" look={1.6} seed={330} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. One page, four short paragraphs, then the name.
   ------------------------------------------------------------------ */

const formatCss = `
.s-cv4-pencil { animation: s-cv4-write 8s ease-in-out infinite; }
.s-cv4-badge { animation: s-cv4-pop 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 8s); }
.s-cv4-writer .pip-body { animation: s-cv4-bob 2.6s ease-in-out infinite; }
@keyframes s-cv4-write {
  0%, 100% { transform: translate(0, 0); }
  12% { transform: translate(-60px, 2px); }
  25% { transform: translate(0, 50px); }
  37% { transform: translate(-60px, 52px); }
  50% { transform: translate(0, 100px); }
  62% { transform: translate(-60px, 102px); }
  75% { transform: translate(0, 150px); }
  87% { transform: translate(-60px, 152px); }
}
@keyframes s-cv4-pop {
  0%, 100% { transform: scale(1); }
  6% { transform: scale(1.25); }
  12% { transform: scale(1); }
}
@keyframes s-cv4-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const PARAS = [
  { rows: [176, 150, 120], label: 'what' },
  { rows: [180, 168, 90], label: 'found' },
  { rows: [172, 140, 110], label: 'fit' },
  { rows: [178, 160, 72], label: 'statements' },
]

export function FormatScene() {
  const x = 270
  const y = 30
  const w = 260
  const h = 340
  return (
    <Scene w={800} h={380} top={16} css={formatCss} className="s-cv4" label="A single page with a short heading, four short numbered paragraphs and a signature, measured by a ruler marked one page, while a pencil writes the paragraphs one after another">
      <Floor y={384} x1={40} x2={760} seed={401} />
      <Sheet x={x} y={y} w={w} h={h} lines={0} fold={20} seed={402} sw={2} />
      <Lines x={x + 22} y={y + 30} rows={[70, 110]} gap={10} seed={403} c={INK_SOFT} w={1.5} />

      {PARAS.map((para, i) => {
        const top = y + 66 + i * 50
        return (
          <g key={para.label}>
            <Place x={x + 34} y={top + 10}>
              <Anim className="s-cv4-badge" spin style={{ '--i': i }}>
                <path d={ellipsePath(0, 0, 13, 13)} fill={TONES.green.mid} />
                <Ink d={handEllipse(0, 0, 13, 13, { seed: 410 + i, amp: 0.4 })} w={1.5} />
                <Hand x={0} y={7} size={19} anchor="middle" weight={700}>
                  {i + 1}
                </Hand>
              </Anim>
            </Place>
            <Lines x={x + 58} y={top + 2} rows={para.rows.map((r) => r * 0.95)} gap={11} seed={420 + i * 5} />
          </g>
        )
      })}
      <Ink d={`M${x + 140} ${y + 300}q10 -18 18 -4t16 -2q8 -10 14 2t22 -6`} w={1.8} c={TONES.blue.deep} />

      <Place x={x + 214} y={y + 70}>
        <Anim className="s-cv4-pencil">
          <Pencil x={0} y={0} length={96} angle={-40} tone="amber" seed={430} />
        </Anim>
      </Place>

      <path d={`M${x + w + 26} ${y}h22v${h}h-22Z`} fill="url(#fill-amber)" />
      <Ink d={handPoly([[x + w + 26, y], [x + w + 48, y], [x + w + 48, y + h], [x + w + 26, y + h]], { seed: 431, amp: 0.4, closed: true })} w={1.6} />
      <Ink d={Array.from({ length: 17 }, (_, i) => handLine(x + w + 26, y + 10 + i * 20, x + w + (i % 2 ? 34 : 38), y + 10 + i * 20, 432 + i, 0.2)).join('')} w={1.2} />
      <Hand x={x + w + 66} y={y + h / 2} size={24} weight={700} rotate={90}>
        one page
      </Hand>

      <Shadow x={150} y={386} rx={36} ry={4} />
      <Place x={150} y={384} s={1.6}>
        <g className="s-cv4-writer">
          <Pip mood="happy" arms="write" tone="green" look={1.6} seed={440} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Tanvi's letter on the laptop, with the maize field it came from.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-cv5-cursor { animation: s-cv5-blink 1s steps(1) infinite; }
.s-cv5-line { animation: s-cv5-type 9s ease-out infinite; animation-delay: calc(var(--i) * 0.8s - 9s); }
.s-cv5-worm { animation: s-cv5-inch 2.4s ease-in-out infinite; }
.s-cv5-leaf { animation: s-cv5-sway 5s ease-in-out infinite; }
@keyframes s-cv5-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes s-cv5-type {
  0%, 4% { transform: scaleX(0); }
  14%, 86% { transform: scaleX(1); }
  92%, 100% { transform: scaleX(0); }
}
@keyframes s-cv5-inch {
  0%, 100% { transform: scaleX(1) translateY(0); }
  50% { transform: scaleX(0.82) translateY(-3px); }
}
@keyframes s-cv5-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(2.5deg); }
}
`

/* A maize plant: a tall stalk, long arching leaves and one cob. Drawn from
   where the stalk meets the soil. */
function Maize({ seed }) {
  const leaves = [
    'M0 -38Q-40 -84 -86 -50Q-46 -52 0 -52Z',
    'M0 -68Q40 -114 90 -86Q48 -80 0 -84Z',
    'M0 -104Q-36 -152 -80 -128Q-40 -122 0 -118Z',
    'M0 -136Q30 -182 70 -166Q32 -156 0 -150Z',
  ]
  return (
    <g>
      <Ink d={handLine(0, 0, 2, -186, seed, 0.6)} w={4} c={TONES.green.deep} />
      {leaves.map((d, i) => (
        <g key={i}>
          <path d={d} fill="url(#fill-green)" />
          <Ink d={d} w={1.4} />
        </g>
      ))}
      <path d={ellipsePath(10, -96, 9, 22)} fill="url(#fill-amber)" />
      <Ink d={handEllipse(10, -96, 9, 22, { seed: seed + 1, amp: 0.4 })} w={1.5} />
      <Ink d="M4 -76Q-2 -96 6 -120M16 -76Q22 -96 14 -120" w={1.3} c={TONES.green.deep} />
      <Ink d="M2 -186Q-8 -200 -12 -210M2 -186Q6 -202 4 -214M2 -186Q12 -198 18 -206" w={1.4} c={TONES.brown.ink} />
    </g>
  )
}

/* The armyworm: a short striped caterpillar, head on the right. */
function Caterpillar() {
  const segs = [-24, -16, -8, 0]
  return (
    <g>
      {segs.map((x, i) => (
        <g key={x}>
          <path d={ellipsePath(x, -5, 5.5, 5)} fill={TONES.brown.mid} />
          <Ink d={handEllipse(x, -5, 5.5, 5, { seed: 560 + i, amp: 0.4 })} w={1.1} />
        </g>
      ))}
      <path d={ellipsePath(9, -6, 6, 5.5)} fill={TONES.brown.ink} />
      <Ink d={handEllipse(9, -6, 6, 5.5, { seed: 565, amp: 0.4 })} w={1.2} />
      <circle cx={11} cy={-7} r={1.1} fill={PAPER} />
    </g>
  )
}

export function ExampleScene() {
  const [sx, sy, sw] = laptopScreen(330, 300, 340)
  const rows = [190, 214, 160, 206, 176, 120]
  return (
    <Scene w={800} h={290} top={26} css={exampleCss} className="s-cv5" label="A laptop on a desk shows a letter that begins dear dr. menon, with lines of text typing themselves in, next to a maize plant with a small caterpillar on one of its leaves">
      <Window x={40} y={48} w={120} h={100} seed={501} />
      <Desk y={300} x1={20} x2={780} depth={22} seed={502} />

      <Laptop x={330} y={300} w={340} seed={503}>
        <Hand x={sx + 18} y={sy + 30} size={19} weight={700}>
          Dear Dr. Menon,
        </Hand>
        {rows.map((len, i) => (
          <Anim key={i} className="s-cv5-line" origin={[sx + 18, 0]} style={{ '--i': i }}>
            <Ink d={handLine(sx + 18, sy + 50 + i * 14, sx + 18 + len * (sw / 260), sy + 50 + i * 14, 510 + i, 0.3)} c={TEXT_LINE} w={2} />
          </Anim>
        ))}
        <g className="s-cv5-cursor">
          <path d={`M${sx + 18 + 120 * (sw / 260) + 6} ${sy + 113}h3v14h-3Z`} fill={INK} />
        </g>
      </Laptop>

      <Place x={630} y={300} s={1.15}>
        <Anim className="s-cv5-leaf" origin={[0, 0]}>
          <Maize seed={540} />
          <Place x={50} y={-89} r={-8} s={0.9}>
            <Anim className="s-cv5-worm" origin={[-24, 0]}>
              <Caterpillar />
            </Anim>
          </Place>
        </Anim>
      </Place>
      <path d="M586 300Q630 280 674 300Z" fill="url(#soil)" />
      <Ink d="M586 300Q630 280 674 300" w={1.6} c={EARTH.soilLine} />
      <Hand x={736} y={282} size={18} anchor="middle" c={INK_SOFT}>
        the study
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The first draft and the second, side by side.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-cv6-bad { animation: s-cv6-shake 5s ease-in-out infinite; }
.s-cv6-good { animation: s-cv6-glow 5s ease-in-out infinite; }
.s-cv6-mark { animation: s-cv6-pop 5s ease-in-out infinite; }
@keyframes s-cv6-shake {
  0%, 40%, 60%, 100% { transform: rotate(-4deg); }
  45% { transform: rotate(-7deg); }
  50% { transform: rotate(-1deg); }
  55% { transform: rotate(-6deg); }
}
@keyframes s-cv6-glow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
@keyframes s-cv6-pop {
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
}
`

export function MistakesScene() {
  return (
    <Scene w={800} h={330} top={14} css={mistakesCss} className="s-cv6" label="Two letters side by side: the first, tilted and crossed out in red, says dear sir or madam with a pasted abstract and the word groundbreaking; the second, ticked in green, says dear dr. menon with four short neat paragraphs">
      <Desk y={322} x1={30} x2={770} depth={22} seed={601} />

      <Anim className="s-cv6-bad" origin={[230, 320]}>
        <Sheet x={110} y={40} w={240} h={276} lines={0} fold={20} seed={602} sw={1.9} />
        <Hand x={130} y={86} size={22} weight={700}>
          Dear Sir/Madam,
        </Hand>
        <path d="M128 102h196v120h-196Z" fill={TONES.amber.tint} />
        <path d="M206 96h40v14h-40Z" fill={TONES.grey.mid} opacity="0.7" />
        <Ink d={handPoly([[128, 102], [324, 102], [324, 222], [128, 222]], { seed: 603, amp: 0.5, closed: true })} w={1.4} c={TONES.amber.deep} />
        <Type x={140} y={128} size={15} c={TONES.amber.deep} weight={700}>
          ABSTRACT
        </Type>
        <Lines x={140} y={146} rows={[168, 160, 172, 150, 164, 120]} gap={12} seed={604} c={TONES.amber.deep} w={1.3} o={0.6} />
        <Hand x={130} y={252} size={22} weight={700} c={TONES.red.deep}>
          groundbreaking!!
        </Hand>
        <Lines x={130} y={278} rows={[150, 120]} gap={12} seed={605} />
      </Anim>
      <Place x={322} y={66}>
        <Anim className="s-cv6-mark" spin>
          <Cross x={0} y={0} s={2.2} w={3.4} seed={606} />
        </Anim>
      </Place>

      <Anim className="s-cv6-good">
        <Sheet x={450} y={40} w={240} h={276} lines={0} fold={20} seed={610} sw={1.9} />
        <Hand x={470} y={86} size={22} weight={700}>
          Dear Dr. Menon,
        </Hand>
        {[0, 1, 2, 3].map((i) => (
          <Lines key={i} x={470} y={112 + i * 42} rows={[190, 176, 120].map((r) => r - i * 6)} gap={11} seed={611 + i * 4} />
        ))}
        <Ink d="M560 296q10 -16 18 -4t16 -2q8 -10 14 2t20 -6" w={1.8} c={TONES.blue.deep} />
      </Anim>
      <Place x={684} y={66}>
        <Anim className="s-cv6-mark" spin style={{ animationDelay: '-2.5s' }}>
          <Tick x={0} y={0} s={2} w={3.6} />
        </Anim>
      </Place>
      <Sparkle x={730} y={130} s={10} />
      <Sparkle x={420} y={290} s={7} fill={TONES.pink.mid} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Every box ticked; the letter goes in with the paper.
   ------------------------------------------------------------------ */

const sendCss = `
.s-cv7-env { animation: s-cv7-post 6s ease-in-out infinite; }
.s-cv7 .check-tick { animation: s-cv7-tick 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 6s); }
.s-cv7-sender .pip-body { animation: s-cv7-reach 6s ease-in-out infinite; }
.s-cv7-stamp { animation: s-cv7-stamp 6s ease-in-out infinite; }
@keyframes s-cv7-post {
  0%, 20% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  40% { transform: translate(130px, -14px) rotate(4deg); opacity: 1; }
  52% { transform: translate(150px, 16px) rotate(4deg); opacity: 0; }
  53%, 80% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  90%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
}
@keyframes s-cv7-tick {
  0%, 10% { stroke-dashoffset: 1; }
  20%, 85% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-cv7-reach {
  0%, 20%, 60%, 100% { transform: rotate(0deg); }
  38%, 46% { transform: rotate(5deg); }
}
@keyframes s-cv7-stamp {
  0%, 52% { opacity: 0; transform: scale(1.3); }
  58%, 92% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.3); }
}
`

/* A red Indian post box on a short pillar. Anchor: bottom centre. */
function PostBox({ x, y, seed }) {
  const body = `M${x - 46} ${y - 18}V${y - 150}Q${x - 46} ${y - 192} ${x} ${y - 192}Q${x + 46} ${y - 192} ${x + 46} ${y - 150}V${y - 18}Z`
  return (
    <g>
      <path d={`M${x - 54} ${y}h108v-18h-108Z`} fill={TONES.grey.mid} />
      <Ink d={handPoly([[x - 54, y], [x + 54, y], [x + 54, y - 18], [x - 54, y - 18]], { seed, amp: 0.3, closed: true })} w={1.6} />
      <path d={body} fill="url(#fill-red)" />
      <path d={`M${x + 28} ${y - 18}V${y - 160}Q${x + 40} ${y - 150} ${x + 46} ${y - 140}V${y - 18}Z`} fill="url(#ink-hatch-light)" />
      <Ink d={body} w={2} />
      <path d={`M${x - 52} ${y - 160}h104v10h-104Z`} fill={TONES.red.deep} />
      <path d={`M${x - 26} ${y - 138}h52v9h-52Z`} fill={INK} />
      <Ink d={handPoly([[x - 26, y - 138], [x + 26, y - 138], [x + 26, y - 129], [x - 26, y - 129]], { seed: seed + 1, amp: 0.2, closed: true })} w={1.4} />
      <Box x={x - 30} y={y - 112} w={60} h={38} r={4} fill={PAPER} seed={seed + 2} sw={1.5} />
      <Hand x={x} y={y - 86} size={19} anchor="middle" weight={700}>
        journal
      </Hand>
    </g>
  )
}

export function SendScene() {
  const floor = 330
  return (
    <Scene w={800} h={310} top={30} css={sendCss} className="s-cv7" label="A paper character posts an envelope into a red post box marked journal, next to a clipboard with every box ticked and a stamp that says sent">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Checklist x={70} y={96} w={150} items={7} done={7} seed={702} />
      <Hand x={145} y={84} size={20} anchor="middle" c={INK_SOFT}>
        last check
      </Hand>

      <PostBox x={560} y={floor} seed={703} />
      <Place x={0} y={0}>
        <Anim className="s-cv7-stamp" origin={[680, 120]} style={{ opacity: 0 }}>
          <StampMark x={680} y={120} w={110} h={42} text="SENT" tone="green" rotate={-10} bg={PAPER} seed={704} />
        </Anim>
      </Place>

      <Shadow x={400} y={floor + 2} rx={38} ry={4} />
      <Place x={400} y={floor} s={1.7}>
        <g className="s-cv7-sender">
          <Pip mood="grin" arms="carry" tone="green" look={1.6} seed={710} />
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-cv7-env">
          <Envelope x={378} y={176} w={64} h={42} tone="pink" seed={711} />
        </Anim>
      </Place>
    </Scene>
  )
}
