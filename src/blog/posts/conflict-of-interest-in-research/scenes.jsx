import {
  Anim,
  Arrow,
  Book,
  Box,
  Calendar,
  Checklist,
  Cross,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  Oval,
  PAPER,
  Pip,
  Place,
  Poly,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'

import { SprayCan } from './hero.jsx'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 12, seed, c = TEXT_LINE, w = 1.6 }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} />
}

/* A little stack of coins. Anchor: bottom centre. */
function Coins({ x, y, count = 3, seed }) {
  return (
    <g>
      {Array.from({ length: count }, (_, i) => (
        <Oval key={i} cx={x + (i % 2) * 3} cy={y - 5 - i * 7} rx={15} ry={5} fill={TONES.amber.mid} seed={seed + i} sw={1.5} />
      ))}
    </g>
  )
}

/* A small building with columns, for the university. Anchor: bottom centre. */
function Campus({ x, y, seed }) {
  return (
    <g>
      <Poly points={[[x - 30, y - 44], [x, y - 62], [x + 30, y - 44]]} fill="url(#fill-red)" seed={seed} sw={1.6} />
      <Box x={x - 26} y={y - 44} w={52} h={44} fill={PAPER} seed={seed + 1} sw={1.6} />
      <Ink d={handLine(x - 14, y - 40, x - 14, y, seed + 2, 0.2) + handLine(x, y - 40, x, y, seed + 3, 0.2) + handLine(x + 14, y - 40, x + 14, y, seed + 4, 0.2)} w={1.4} c={INK_SOFT} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. The main duty on one pan, a second interest on the other, and
      the judgment wobbling in between.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-coi1 .scale-beam { animation: s-coi1-tip 6s ease-in-out infinite; }
.s-coi1-reader .pip-body { animation: s-coi1-nod 3s ease-in-out infinite; }
@keyframes s-coi1-tip {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(5deg); }
  60% { transform: rotate(-3deg); }
}
@keyframes s-coi1-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function MeaningScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={24} css={meaningCss} className="s-coi1" label="A balance scale holds a sheet labelled the true result on one pan and coins and a book on the other, labelled a second interest such as money, friends, beliefs or rivals, while a paper character in glasses watches it wobble">
      <Scale
        x={360}
        y={floor}
        s={1.5}
        seed={101}
        left={
          <g>
            <Sheet x={223} y={146} w={40} h={50} tone="paper" lines={3} fold={9} seed={102} />
          </g>
        }
        right={
          <g>
            <Coins x={462} y={197} count={3} seed={103} />
            <Book x={482} y={163} w={26} h={34} tone="blue" seed={106} label={false} />
          </g>
        }
      />
      <Hand x={243} y={60} size={20} anchor="middle" weight={700}>
        the true result
      </Hand>
      <Hand x={477} y={60} size={20} anchor="middle" weight={700} c={TONES.pink.deep}>
        a second interest
      </Hand>
      <Hand x={477} y={84} size={16} anchor="middle" c={INK_SOFT}>
        money, friends, beliefs, rivals
      </Hand>

      <Floor y={floor} x1={30} x2={770} seed={110} />
      <Shadow x={660} y={floor + 3} rx={32} ry={4} />
      <Place x={660} y={floor} s={1.5} flip>
        <g className="s-coi1-reader">
          <Pip mood="focused" arms="think" tone="blue" glasses look={1.4} seed={120} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Five boxes on the back of an exam sheet: the five types.
   ------------------------------------------------------------------ */

const typesCss = `
.s-coi2-card { animation: s-coi2-lift 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 1.5s - 7.5s); }
@keyframes s-coi2-lift {
  0%, 24%, 100% { transform: translateY(0); }
  10% { transform: translateY(-10px); }
}
`

const TYPES = [
  { word: 'financial', tone: 'amber' },
  { word: 'personal', tone: 'pink' },
  { word: 'academic', tone: 'blue' },
  { word: 'institutional', tone: 'red' },
  { word: 'reviewer', tone: 'green' },
]

function TypeIcon({ i, x, y }) {
  if (i === 0) return <Coins x={x} y={y + 22} count={3} seed={210} />
  if (i === 1) {
    return (
      <g>
        <Place x={x - 14} y={y + 24} s={0.55}>
          <Pip mood="happy" arms="down" tone="pink" look={1} seed={211} />
        </Place>
        <Place x={x + 14} y={y + 24} s={0.55} flip>
          <Pip mood="happy" arms="down" tone="amber" look={1} seed={212} />
        </Place>
      </g>
    )
  }
  if (i === 2) return <Book x={x - 18} y={y - 22} w={36} h={44} tone="blue" seed={213} label={false} />
  if (i === 3) return <Campus x={x} y={y + 24} seed={214} />
  return <Magnifier x={x - 4} y={y - 4} r={16} angle={45} tone="green" seed={215} />
}

export function TypesScene() {
  return (
    <Scene w={800} h={220} top={34} css={typesCss} className="s-coi2" label="Five cards in a row labelled financial with coins, personal with two friends, academic with a book, institutional with a university building, and reviewer with a magnifying glass, each lifting in turn">
      {TYPES.map((t, i) => {
        const x = 40 + i * 148
        return (
          <Place key={t.word} x={0} y={0}>
            <Anim className="s-coi2-card" style={{ '--i': i }}>
              <Box x={x} y={60} w={130} h={170} r={8} fill={`url(#fill-${t.tone})`} seed={200 + i} sw={1.9} />
              <rect x={x + 10} y={72} width={110} height={100} rx={6} fill={PAPER} />
              <TypeIcon i={i} x={x + 65} y={122} />
              <Hand x={x + 65} y={206} size={t.word.length > 10 ? 17 : 20} anchor="middle" weight={700}>
                {t.word}
              </Hand>
            </Anim>
          </Place>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Small things that still count, each with its tag.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-coi3-tag { animation: s-coi3-swing 4s ease-in-out infinite; animation-delay: calc(var(--i) * -1s); }
.s-coi3-spark { animation: s-coi3-twinkle 2.4s ease-in-out infinite; }
@keyframes s-coi3-swing {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}
@keyframes s-coi3-twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
`

function Tag({ x, y, to, text, i, tone = 'amber' }) {
  const w = text.length * 9 + 24
  return (
    <Place x={0} y={0}>
      <Anim className="s-coi3-tag" origin={[x, to]} style={{ '--i': i }}>
        <Ink d={handLine(x, y + 28, x, to, 300 + i, 0.2)} w={1.3} c={INK_SOFT} dash="4 4" />
        <Box x={x - w / 2} y={y} w={w} h={28} r={5} fill={TONES[tone].mid} seed={310 + i} sw={1.6} />
        <Hand x={x} y={y + 20} size={16} anchor="middle" weight={700}>
          {text}
        </Hand>
      </Anim>
    </Place>
  )
}

/* A train ticket. Anchor: top-left. */
function Ticket({ x, y, seed }) {
  return (
    <g>
      <Box x={x} y={y} w={124} h={48} r={4} fill="url(#fill-blue)" seed={seed} sw={1.7} />
      <Ink d={handLine(x + 98, y + 4, x + 98, y + 44, seed + 1, 0.2)} w={1.2} dash="3 4" />
      <Type x={x + 10} y={y + 20} size={11} weight={700}>
        PBN to HYB
      </Type>
      <Lines x={x + 10} y={y + 32} rows={[48]} seed={seed + 2} c={TONES.blue.deep} />
    </g>
  )
}

export function ExampleScene() {
  const floor = 300
  return (
    <Scene w={800} h={230} top={84} css={exampleCss} className="s-coi3" label="On a long desk sit a spray can tagged free sample, a train ticket tagged paid travel, a small paper character tagged a cousin in sales, and a sticky note tagged advisory panel, each tag swinging gently">
      <SprayCan x={120} y={floor} s={1.2} seed={320} />
      <Tag x={120} y={120} to={floor - 102} text="free sample" i={0} />

      <Ticket x={240} y={floor - 50} seed={330} />
      <Tag x={302} y={150} to={floor - 50} text="paid travel" i={1} tone="blue" />

      <Shadow x={476} y={floor + 3} rx={24} ry={4} />
      <Place x={476} y={floor} s={1.2}>
        <Pip mood="happy" arms="wave" tone="amber" look={-1} seed={340} />
      </Place>
      <Tag x={476} y={100} to={floor - 86} text="a cousin in sales" i={2} tone="pink" />

      <Sticky x={610} y={floor - 78} w={88} h={74} tone="green" lines={3} seed={350} />
      <Tag x={654} y={130} to={floor - 78} text="advisory panel" i={3} tone="green" />

      <Place x={0} y={0}>
        <Anim className="s-coi3-spark">
          <Sparkle x={176} y={floor - 70} s={9} />
          <Sparkle x={726} y={floor - 60} s={7} />
        </Anim>
      </Place>
      <Floor y={floor} x1={30} x2={770} seed={360} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Authors, reviewers, editors and the ethics committee each raise
      a hand to declare their own.
   ------------------------------------------------------------------ */

const whoCss = `
.s-coi4-p .pip-body { animation: s-coi4-step 8s ease-in-out infinite; animation-delay: calc(var(--i) * 2s - 8s); }
@keyframes s-coi4-step {
  0%, 25%, 100% { transform: translateY(0); }
  8%, 17% { transform: translateY(-10px); }
}
`

const WHO = [
  { word: 'authors', tone: 'pink', mood: 'happy' },
  { word: 'reviewers', tone: 'green', mood: 'focused' },
  { word: 'editors', tone: 'blue', mood: 'happy' },
  { word: 'ethics committee', tone: 'amber', mood: 'focused' },
]

export function WhoScene() {
  const floor = 250
  return (
    <Scene w={800} h={290} top={30} css={whoCss} className="s-coi4" label="Four paper characters stand in a row labelled authors, reviewers, editors and ethics committee, each holding up a small declaration sheet and stepping forward in turn, under a sign that says each declares their own">
      {WHO.map((p, i) => {
        const x = 120 + i * 186
        return (
          <g key={p.word}>
            <Shadow x={x} y={floor + 3} rx={32} ry={4} />
            <Place x={x} y={floor} s={1.6}>
              <g className="s-coi4-p" style={{ '--i': i }}>
                <Pip mood={p.mood} arms="hold" tone={p.tone} glasses={i === 3} look={0.8} seed={400 + i * 7}>
                  <Sheet x={-11} y={-29} w={22} h={22} tone="paper" lines={1} fold={6} seed={440 + i} sw={1.4} />
                </Pip>
              </g>
            </Place>
            <Hand x={x} y={floor + 34} size={p.word.length > 10 ? 18 : 21} anchor="middle" weight={700}>
              {p.word}
            </Hand>
          </g>
        )
      })}
      <Box x={250} y={44} w={300} h={46} r={10} fill={PAPER} seed={430} sw={1.8} />
      <Hand x={400} y={76} size={22} anchor="middle" weight={700}>
        each declares their own
      </Hand>
      <Floor y={floor} x1={30} x2={770} seed={431} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Writing the statement: a checklist, a 36 month calendar, and
      envelopes from every co-author.
   ------------------------------------------------------------------ */

const statementCss = `
.s-coi5 .check-tick { stroke-dashoffset: 0; animation: s-coi5-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
.s-coi5-env { animation: s-coi5-fly 6s ease-in-out infinite; animation-delay: calc(var(--i) * -2s); }
@keyframes s-coi5-draw {
  0%, 4% { stroke-dashoffset: 1; }
  12%, 100% { stroke-dashoffset: 0; }
}
@keyframes s-coi5-fly {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
`

export function StatementScene() {
  return (
    <Scene w={800} h={290} top={20} css={statementCss} className="s-coi5" label="A clipboard checklist with five boxes being ticked, a calendar page that reads 36 months, and three envelopes labelled from each co-author beside a sheet titled competing interests">
      <Checklist x={70} y={60} w={170} items={5} done={5} seed={501} />
      <Hand x={155} y={262} size={17} anchor="middle" c={INK_SOFT}>
        read the journal rules
      </Hand>

      <Calendar x={300} y={66} w={110} h={118} day="36" month="MONTHS" tone="pink" seed={502} />
      <Hand x={355} y={214} size={17} anchor="middle" c={INK_SOFT}>
        the usual window
      </Hand>

      {[0, 1, 2].map((i) => (
        <Place key={i} x={0} y={0}>
          <Anim className="s-coi5-env" style={{ '--i': i }}>
            <Envelope x={466 + i * 18} y={80 + i * 46} w={74} h={46} seed={510 + i} />
          </Anim>
        </Place>
      ))}
      <Hand x={520} y={262} size={17} anchor="middle" c={INK_SOFT}>
        from each co-author
      </Hand>
      <Arrow from={[580, 150]} to={[618, 150]} bend={0} seed={520} c={INK_SOFT} w={1.6} />

      <Sheet x={626} y={56} w={130} h={170} tone="paper" lines={0} fold={16} seed={521} sw={2} />
      <Hand x={691} y={92} size={15} anchor="middle" weight={700}>
        competing
      </Hand>
      <Hand x={691} y={110} size={15} anchor="middle" weight={700}>
        interests
      </Hand>
      <Lines x={642} y={134} rows={[96, 84, 98, 70, 88, 60]} gap={13} seed={522} c={TONES.pink.deep} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. One wrong sentence crossed out, two honest ones in its place.
   ------------------------------------------------------------------ */

const sampleCss = `
.s-coi6-x { animation: s-coi6-pulse 5s ease-in-out infinite; }
.s-coi6-new { animation: s-coi6-glow 5s ease-in-out infinite; }
.s-coi6-writer .pip-arm-r { animation: s-coi6-scribble 1.2s ease-in-out infinite; }
@keyframes s-coi6-pulse {
  0%, 100% { transform: scale(1); }
  20% { transform: scale(1.25); }
  35% { transform: scale(1); }
}
@keyframes s-coi6-glow {
  0%, 40%, 100% { transform: scale(1); }
  60% { transform: scale(1.03); }
}
@keyframes s-coi6-scribble {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

export function SampleScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={20} css={sampleCss} className="s-coi6" label="A sheet that says no conflict of interest is crossed out in red, and an arrow leads to a second sheet that names the free spray, the guide's honorarium and that the company had no role, with a green tick, while a paper character writes">
      <Sheet x={60} y={60} w={200} h={180} tone="paper" lines={0} fold={20} seed={601} sw={2} />
      <Hand x={160} y={120} size={19} anchor="middle" c={INK_SOFT}>
        the authors declare
      </Hand>
      <Hand x={160} y={146} size={19} anchor="middle" c={INK_SOFT}>
        no conflict of
      </Hand>
      <Hand x={160} y={172} size={19} anchor="middle" c={INK_SOFT}>
        interest.
      </Hand>
      <Place x={160} y={146}>
        <Anim className="s-coi6-x" origin={[0, 0]}>
          <Cross x={0} y={0} s={3.4} w={3} seed={602} />
        </Anim>
      </Place>

      <Arrow from={[280, 150]} to={[352, 150]} bend={0} seed={603} c={INK_SOFT} w={1.7} />

      <Place x={0} y={0}>
        <Anim className="s-coi6-new" origin={[480, 150]}>
          <Sheet x={370} y={48} w={230} h={204} tone="paper" lines={0} fold={22} seed={604} sw={2.1} />
          <Hand x={392} y={96} size={18} weight={700} c={TONES.green.deep}>
            spray supplied free
          </Hand>
          <Hand x={392} y={126} size={18} weight={700} c={TONES.green.deep}>
            guide: honorarium
          </Hand>
          <Hand x={392} y={156} size={18} weight={700} c={TONES.green.deep}>
            company had no role
          </Hand>
          <Lines x={392} y={184} rows={[170, 140]} gap={14} seed={605} />
        </Anim>
      </Place>
      <Tick x={580} y={232} s={1.6} />

      <Floor y={floor} x1={30} x2={770} seed={606} />
      <Shadow x={690} y={floor + 3} rx={32} ry={4} />
      <Place x={690} y={floor} s={1.5} flip>
        <g className="s-coi6-writer">
          <Pip mood="happy" arms="write" tone="pink" glasses look={1.4} seed={610} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Declared, the paper goes to review; hidden and found later, it
      carries a notice.
   ------------------------------------------------------------------ */

const consequenceCss = `
.s-coi7-stamp { animation: s-coi7-press 4s ease-in-out infinite; }
.s-coi7-happy .pip-body { animation: s-coi7-hop 4s ease-in-out infinite; }
@keyframes s-coi7-press {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}
@keyframes s-coi7-hop {
  0%, 60%, 100% { transform: translateY(0); }
  70% { transform: translateY(-7px); }
  80% { transform: translateY(0); }
}
`

export function ConsequenceScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={consequenceCss} className="s-coi7" label="Two papers side by side: one labelled declared carries a green stamp that reads TO REVIEW, and one labelled hidden, found later carries a red stamp that reads CORRECTION, while a paper character hops happily beside the first">
      <Box x={170} y={44} w={180} h={36} r={6} fill="url(#fill-green)" seed={701} sw={1.9} />
      <Hand x={260} y={70} size={20} anchor="middle" weight={700}>
        declared
      </Hand>
      <Sheet x={200} y={98} w={120} h={160} tone="paper" lines={0} fold={18} seed={702} />
      <Lines x={214} y={136} rows={[90, 76, 92, 64, 84, 70, 56, 80]} gap={13} seed={703} />
      <Place x={0} y={0}>
        <Anim className="s-coi7-stamp" spin>
          <StampMark x={260} y={186} w={112} h={36} text="TO REVIEW" size={15} tone="green" rotate={-8} bg={PAPER} seed={704} />
        </Anim>
      </Place>

      <Box x={450} y={44} w={240} h={36} r={6} fill="url(#fill-red)" seed={710} sw={1.9} />
      <Hand x={570} y={70} size={20} anchor="middle" weight={700}>
        hidden, found later
      </Hand>
      <Sheet x={510} y={98} w={120} h={160} tone="paper" lines={0} fold={18} seed={711} />
      <Lines x={524} y={136} rows={[90, 76, 92, 64, 84, 70, 56, 80]} gap={13} seed={712} />
      <StampMark x={570} y={186} w={124} h={36} text="CORRECTION" size={15} tone="red" rotate={-12} bg={PAPER} seed={713} />

      <Floor y={floor} x1={30} x2={770} seed={714} />
      <Shadow x={92} y={floor + 3} rx={32} ry={4} />
      <Place x={92} y={floor} s={1.5}>
        <g className="s-coi7-happy">
          <Pip mood="grin" arms="up" tone="pink" glasses look={1.6} seed={720} />
        </g>
      </Place>
    </Scene>
  )
}
