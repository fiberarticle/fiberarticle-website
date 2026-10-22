import {
  Anim,
  Arrow,
  Box,
  Chai,
  Cross,
  Desk,
  Envelope,
  Flask,
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
  Scale,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6 }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} />
}

/* A name on a byline: a small rounded card with a word in it. Anchor: top-left. */
function Chip({ x, y, w = 76, h = 30, word, tone = 'paper', seed, size = 16 }) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={6} fill={tone === 'paper' ? PAPER : `url(#fill-${tone})`} seed={seed} sw={1.6} />
      <Hand x={x + w / 2} y={y + h / 2 + size * 0.36} size={size} anchor="middle" weight={700}>
        {word}
      </Hand>
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Two roles side by side: the one who did the work, the one who
      talks to the journal.
   ------------------------------------------------------------------ */

const differenceCss = `
.s-fac1-worker .pip-arm-r { animation: s-fac1-write 1.6s ease-in-out infinite; }
.s-fac1-talker .pip-body { animation: s-fac1-bob 3s ease-in-out infinite; }
.s-fac1-letter { animation: s-fac1-float 5s ease-in-out infinite; }
@keyframes s-fac1-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
@keyframes s-fac1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes s-fac1-float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, -26px); }
}
`

export function DifferenceScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={differenceCss} className="s-fac1" label="On the left a paper character labelled first author writes beside a flask and a pile of papers, marked did most of the work; on the right a character in glasses labelled corresponding author sends an envelope to a box marked journal, marked talks to the journal">
      <Box x={70} y={46} w={240} h={40} r={6} fill="url(#fill-pink)" seed={101} sw={1.9} />
      <Hand x={190} y={74} size={23} anchor="middle" weight={700}>
        first author
      </Hand>
      <Flask x={250} y={floor} s={1.1} tone="green" seed={102} />
      <Pile x={340} y={floor} w={70} count={6} seed={103} />
      <Shadow x={130} y={floor + 3} rx={32} ry={4} />
      <Place x={130} y={floor} s={1.6}>
        <g className="s-fac1-worker">
          <Pip mood="focused" arms="write" tone="pink" look={1.5} seed={110} />
        </g>
      </Place>
      <Hand x={190} y={140} size={19} anchor="middle" c={INK_SOFT}>
        did most of the work
      </Hand>

      <Ink d={handLine(400, 60, 400, 300, 120, 1.4)} c={INK_SOFT} w={1.4} dash="4 8" />

      <Box x={490} y={46} w={260} h={40} r={6} fill="url(#fill-blue)" seed={121} sw={1.9} />
      <Hand x={620} y={74} size={23} anchor="middle" weight={700}>
        corresponding author
      </Hand>
      <Box x={640} y={120} w={120} h={38} r={6} fill={TONES.amber.mid} seed={122} sw={1.9} />
      <Hand x={700} y={146} size={20} anchor="middle" weight={700}>
        journal
      </Hand>
      <Arrow from={[560, 200]} to={[636, 150]} bend={-0.2} seed={123} c={INK_SOFT} w={1.5} dash="5 6" />
      <Place x={0} y={0}>
        <Anim className="s-fac1-letter">
          <Envelope x={556} y={178} w={46} h={30} seed={124} />
        </Anim>
      </Place>
      <Hand x={680} y={244} size={19} anchor="middle" c={INK_SOFT}>
        talks to the journal
      </Hand>
      <Shadow x={510} y={floor + 3} rx={32} ry={4} />
      <Place x={510} y={floor} s={1.6}>
        <g className="s-fac1-talker">
          <Pip mood="happy" arms="point" tone="blue" glasses look={1.5} seed={130} />
        </g>
      </Place>

      <Floor y={floor} x1={30} x2={770} seed={131} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The corresponding author's road: four stops, one envelope.
   ------------------------------------------------------------------ */

const STOPS = [
  { word: 'submission', tone: 'pink' },
  { word: 'peer review', tone: 'amber' },
  { word: 'publication', tone: 'green' },
  { word: 'years later', tone: 'blue' },
]

const dutiesCss = `
.s-fac2-letter { animation: s-fac2-travel 8s ease-in-out infinite; }
.s-fac2-ok { animation: s-fac2-tick 8s ease-in-out infinite; animation-delay: calc(var(--i) * 2s - 8s); }
@keyframes s-fac2-travel {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(170px); }
  50% { transform: translateX(340px); }
  75% { transform: translateX(510px); }
}
@keyframes s-fac2-tick {
  0%, 100% { opacity: 0.3; }
  10%, 40% { opacity: 1; }
}
`

export function DutiesScene() {
  return (
    <Scene w={800} h={260} top={30} css={dutiesCss} className="s-fac2" label="Four cards in a row read submission, peer review, publication and years later, each with a green tick, while an envelope travels along beneath them from the first to the last">
      <Hand x={400} y={54} size={20} anchor="middle" c={INK_SOFT}>
        every letter goes to the corresponding author
      </Hand>
      {STOPS.map((stop, i) => {
        const x = 70 + i * 170
        return (
          <g key={stop.word}>
            <Box x={x} y={76} w={150} h={110} r={8} fill={`url(#fill-${stop.tone})`} seed={200 + i} sw={1.9} />
            <rect x={x + 10} y={90} width={130} height={34} rx={5} fill={PAPER} />
            <Hand x={x + 75} y={114} size={20} anchor="middle" weight={700}>
              {stop.word}
            </Hand>
            <Place x={0} y={0}>
              <Anim className="s-fac2-ok" style={{ '--i': i }}>
                <Tick x={x + 75} y={152} s={1.5} />
              </Anim>
            </Place>
          </g>
        )
      })}
      <Ink d={handLine(110, 236, 690, 236, 210, 0.8)} c={INK_SOFT} w={1.5} dash="5 7" />
      <Place x={0} y={0}>
        <Anim className="s-fac2-letter">
          <Envelope x={120} y={214} w={50} h={32} seed={211} />
        </Anim>
      </Place>
      <Floor y={272} x1={30} x2={770} seed={212} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Four boxes to tick. All four: authors. Fewer: acknowledgements.
   ------------------------------------------------------------------ */

const CRITERIA = ['real contribution', 'draft or revise', 'final approval', 'accountable']

const criteriaCss = `
.s-fac3-tick { animation: s-fac3-in 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 8s); }
.s-fac3-reader .pip-body { animation: s-fac3-lean 4s ease-in-out infinite; }
@keyframes s-fac3-in {
  0%, 100% { opacity: 0.25; }
  12%, 60% { opacity: 1; }
}
@keyframes s-fac3-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function CriteriaScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={criteriaCss} className="s-fac3" label="A clipboard lists four boxes, real contribution, draft or revise, final approval and accountable, each being ticked; an arrow marked all four leads to a byline sheet labelled authors, and an arrow marked fewer leads to a sticky note labelled acknowledgements">
      <Box x={170} y={50} w={240} h={236} r={6} fill={PAPER} seed={301} sw={2} />
      <rect x={262} y={42} width="56" height="16" rx="3" fill={TONES.grey.mid} />
      <Ink d={handLine(262, 42, 318, 42, 302, 0.3) + handLine(262, 58, 318, 58, 303, 0.3)} w={1.4} />
      {CRITERIA.map((word, i) => {
        const y = 84 + i * 50
        return (
          <g key={word}>
            <Box x={190} y={y} w={22} h={22} seed={310 + i} sw={1.5} fill={PAPER} />
            <Hand x={226} y={y + 18} size={19}>
              {word}
            </Hand>
            <Place x={0} y={0}>
              <Anim className="s-fac3-tick" style={{ '--i': i }}>
                <Tick x={200} y={y + 10} s={1.2} />
              </Anim>
            </Place>
          </g>
        )
      })}

      <Arrow from={[420, 110]} to={[520, 92]} bend={-0.15} seed={320} c={INK_SOFT} w={1.6} />
      <Hand x={466} y={84} size={17} anchor="middle" c={TONES.green.deep} weight={700}>
        all four
      </Hand>
      <Sheet x={530} y={48} w={160} h={100} tone="paper" lines={0} fold={16} seed={321} />
      <Hand x={548} y={80} size={19} weight={700}>
        authors
      </Hand>
      <Lines x={548} y={100} rows={[120, 100, 112]} gap={13} seed={322} c={INK} w={1.8} />

      <Arrow from={[420, 220]} to={[530, 228]} bend={0.12} seed={330} c={INK_SOFT} w={1.6} />
      <Hand x={472} y={250} size={17} anchor="middle" c={TONES.amber.deep} weight={700}>
        fewer
      </Hand>
      <Sticky x={540} y={184} w={150} h={84} tone="amber" lines={0} seed={331} />
      <Lines x={556} y={232} rows={[100, 80]} gap={13} seed={333} c={TONES.amber.deep} w={1.4} />
      <Hand x={615} y={206} size={16} anchor="middle" weight={700}>
        acknowledgements
      </Hand>

      <Floor y={floor} x1={30} x2={770} seed={332} />
      <Shadow x={90} y={floor + 3} rx={30} ry={4} />
      <Place x={90} y={floor} s={1.4}>
        <g className="s-fac3-reader">
          <Pip mood="focused" arms="point" tone="green" look={1.6} seed={340} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Two bylines: the lab sciences' order and the mathematicians'.
   ------------------------------------------------------------------ */

const LAB = [
  { word: 'Aravind', tone: 'pink', note: 'first' },
  { word: 'Keerthana', tone: 'paper', note: 'middle' },
  { word: 'Joseph', tone: 'paper', note: 'middle' },
  { word: 'Usha *', tone: 'blue', note: 'last' },
]

const MATHS = ['Bose', 'Das', 'Iyer', 'Rao']

const orderCss = `
.s-fac4-chip { animation: s-fac4-lift 8s ease-in-out infinite; animation-delay: calc(var(--i) * 2s - 8s); }
@keyframes s-fac4-lift {
  0%, 30%, 100% { transform: translateY(0); }
  10%, 20% { transform: translateY(-10px); }
}
`

export function OrderScene() {
  return (
    <Scene w={800} h={280} top={20} css={orderCss} className="s-fac4" label="Two bylines: the top one, labelled lab sciences, reads Aravind, Keerthana, Joseph and Usha with a star, marked first, middle, middle and last; the bottom one, labelled mathematics, reads Bose, Das, Iyer and Rao, marked A to Z">
      <Hand x={60} y={74} size={21} weight={700} c={TONES.pink.deep}>
        lab sciences
      </Hand>
      {LAB.map((n, i) => {
        const x = 230 + i * 130
        return (
          <g key={n.word}>
            <Place x={0} y={0}>
              <Anim className="s-fac4-chip" style={{ '--i': i }}>
                <Chip x={x} y={50} w={110} h={36} word={n.word} tone={n.tone} seed={400 + i} size={19} />
              </Anim>
            </Place>
            <Hand x={x + 55} y={116} size={18} anchor="middle" c={INK_SOFT}>
              {n.note}
            </Hand>
          </g>
        )
      })}
      <Envelope x={740} y={58} w={30} h={20} seed={410} />

      <Ink d={handLine(60, 160, 740, 160, 411, 1)} c={INK_SOFT} w={1.3} dash="4 8" />

      <Hand x={60} y={218} size={21} weight={700} c={TONES.blue.deep}>
        mathematics
      </Hand>
      {MATHS.map((word, i) => (
        <Chip key={word} x={230 + i * 130} y={194} w={110} h={36} word={word} seed={420 + i} size={19} />
      ))}
      <Arrow from={[240, 262]} to={[690, 262]} bend={0} seed={430} c={INK_SOFT} w={1.6} />
      <Hand x={465} y={290} size={18} anchor="middle" c={INK_SOFT}>
        A to Z, order says nothing about the work
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The scale: first author and corresponding author, level.
   ------------------------------------------------------------------ */

const valueCss = `
.s-fac5 .scale-beam { animation: s-fac5-rock 5s ease-in-out infinite; }
.s-fac5-student .pip-body { animation: s-fac5-tilt 5s ease-in-out infinite; }
@keyframes s-fac5-rock {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  75% { transform: rotate(-3deg); }
}
@keyframes s-fac5-tilt {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
`

export function ValueScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={valueCss} className="s-fac5" label="A balance scale holds a sheet marked first in one pan and an envelope marked corresponding in the other, rocking but level, beside a sticky note that reads UGC 2018, 70 percent group, both roles, while a paper character in a graduation cap watches">
      <Scale
        x={360}
        y={floor}
        s={1.5}
        seed={501}
        left={
          <g>
            <Sheet x={222} y={168} w={30} h={36} tone="pink" lines={2} fold={8} seed={502} sw={1.4} />
            <Hand x={243} y={156} size={17} anchor="middle" weight={700}>
              first
            </Hand>
          </g>
        }
        right={
          <g>
            <Envelope x={460} y={178} w={40} h={26} seed={503} />
            <Hand x={477} y={156} size={17} anchor="middle" weight={700}>
              corresponding
            </Hand>
          </g>
        }
      />
      <Sticky x={580} y={70} w={170} h={110} tone="amber" lines={0} seed={504} />
      <Type x={665} y={110} size={16} anchor="middle" weight={700}>
        UGC 2018
      </Type>
      <Hand x={665} y={140} size={18} anchor="middle">
        same 70% group
      </Hand>
      <Hand x={665} y={162} size={18} anchor="middle">
        for both roles
      </Hand>

      <Floor y={floor} x1={30} x2={770} seed={505} />
      <Shadow x={110} y={floor + 3} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.5}>
        <g className="s-fac5-student">
          <Pip mood="focused" arms="think" tone="pink" cap="grad" look={1.6} seed={510} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. A name dropped in for a favour, and a name left out.
   ------------------------------------------------------------------ */

const giftCss = `
.s-fac6-gift { animation: s-fac6-drop 6s ease-in-out infinite; }
.s-fac6-no { animation: s-fac6-flash 6s ease-in-out infinite; }
.s-fac6-ghost { animation: s-fac6-fade 4s ease-in-out infinite; }
@keyframes s-fac6-drop {
  0%, 100% { transform: translateY(-30px); }
  40%, 70% { transform: translateY(0); }
}
@keyframes s-fac6-flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
@keyframes s-fac6-fade {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
`

export function GiftScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={giftCss} className="s-fac6" label="A byline of three names sits on a sheet; a fifth name card tied with a ribbon, labelled gift, drops in from above and gets a red cross, while outside the sheet a dashed empty card labelled left out stands beside a question mark">
      <Sheet x={110} y={80} w={470} h={170} tone="paper" lines={0} fold={20} seed={601} sw={2} />
      <Chip x={130} y={110} w={100} h={34} word="Aravind" tone="pink" seed={602} size={18} />
      <Chip x={240} y={110} w={100} h={34} word="Joseph" seed={603} size={18} />
      <Chip x={350} y={110} w={100} h={34} word="Usha *" tone="blue" seed={604} size={18} />
      <Lines x={134} y={180} rows={[400, 360, 420, 300]} gap={14} seed={605} />

      <Place x={0} y={0}>
        <Anim className="s-fac6-gift">
          <Box x={462} y={108} w={100} h={38} r={6} fill="url(#fill-red)" seed={610} sw={1.8} />
          <Ink d={handLine(512, 108, 512, 146, 611, 0.3)} c={TONES.amber.deep} w={3} />
          <Ink d="M512 108q-12 -14 -18 -4q4 8 18 4q12 -14 18 -4q-4 8 -18 4" c={TONES.amber.deep} w={2} />
          <Hand x={512} y={170} size={18} anchor="middle" weight={700} c={TONES.red.deep}>
            gift
          </Hand>
          <Anim className="s-fac6-no">
            <Cross x={512} y={127} s={2} w={3} />
          </Anim>
        </Anim>
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-fac6-ghost">
          <Ink d={`M630 186h110v36h-110Z`} c={INK_SOFT} w={1.6} dash="5 6" />
          <Hand x={685} y={210} size={18} anchor="middle" c={INK_SOFT}>
            Keerthana?
          </Hand>
        </Anim>
      </Place>
      <Hand x={685} y={170} size={40} anchor="middle" weight={700} c={TONES.amber.ink}>
        ?
      </Hand>
      <Hand x={685} y={250} size={18} anchor="middle" c={INK_SOFT}>
        left out
      </Hand>

      <Floor y={floor} x1={30} x2={770} seed={620} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. One meeting at the start: who does what, written down.
   ------------------------------------------------------------------ */

const ROLES = ['conceptualization', 'investigation', 'formal analysis', 'supervision']

const agreeCss = `
.s-fac7-pen { animation: s-fac7-write 1.8s ease-in-out infinite; }
.s-fac7-a .pip-body { animation: s-fac7-nod 3s ease-in-out infinite; }
.s-fac7-b .pip-body { animation: s-fac7-nod 3s ease-in-out infinite; animation-delay: -1.5s; }
@keyframes s-fac7-write {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(16px, 1px); }
}
@keyframes s-fac7-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function AgreeScene() {
  const desk = 250
  return (
    <Scene w={800} h={290} top={30} css={agreeCss} className="s-fac7" label="Two paper characters stand on either side of a desk with glasses of chai, agreeing over a sheet titled who does what that lists conceptualization, investigation, formal analysis and supervision, each with a name tick, while a pencil writes; a speech bubble says before we start">
      <Desk y={desk} x1={150} x2={650} seed={701} />
      <Sheet x={270} y={72} w={260} h={170} tone="paper" lines={0} fold={20} seed={702} sw={2} />
      <Hand x={290} y={106} size={21} weight={700}>
        who does what
      </Hand>
      {ROLES.map((role, i) => {
        const y = 136 + i * 26
        return (
          <g key={role}>
            <Hand x={292} y={y} size={17}>
              {role}
            </Hand>
            <Tick x={446} y={y - 6} s={0.9} />
          </g>
        )
      })}
      <Place x={0} y={0}>
        <Anim className="s-fac7-pen">
          <Pencil x={478} y={214} length={80} angle={-40} tone="amber" seed={703} />
        </Anim>
      </Place>
      <Chai x={210} y={desk} s={1} seed={704} />
      <Chai x={590} y={desk} s={1} seed={705} />

      <Speech x={44} y={40} w={170} h={50} tx={100} ty={190} seed={706}>
        <Hand x={129} y={72} size={19} anchor="middle">
          before we start
        </Hand>
      </Speech>

      <Shadow x={90} y={313} rx={30} ry={4} />
      <Place x={90} y={310} s={1.5}>
        <g className="s-fac7-a">
          <Pip mood="happy" arms="point" tone="pink" look={1.6} seed={710} />
        </g>
      </Place>
      <Shadow x={710} y={313} rx={30} ry={4} />
      <Place x={710} y={310} s={1.5} flip>
        <g className="s-fac7-b">
          <Pip mood="happy" arms="hold" tone="blue" glasses look={1.4} seed={720} />
        </g>
      </Place>
      <Floor y={310} x1={30} x2={770} seed={730} />
    </Scene>
  )
}
