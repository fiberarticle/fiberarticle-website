import {
  Anim,
  Arrow,
  Box,
  Checklist,
  Desk,
  Door,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Key,
  Laptop,
  Magnifier,
  Oval,
  PAPER,
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
  Type,
  handLine,
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

/* The green iD badge: a circle with "iD" in it. Anchor: centre. */
function Badge({ x, y, r = 16, seed }) {
  return (
    <g>
      <Oval cx={x} cy={y} rx={r} fill={TONES.green.ink} seed={seed} />
      <Hand x={x} y={y + r * 0.4} size={r * 1.1} anchor="middle" weight={700} c={PAPER}>
        iD
      </Hand>
    </g>
  )
}

/* ------------------------------------------------------------------
   1. One name, many researchers.
   ------------------------------------------------------------------ */

const nameCss = `
.s-oid1-lens { animation: s-oid1-scan 6s ease-in-out infinite; }
.s-oid1-thought { animation: s-oid1-float 5s ease-in-out infinite; }
@keyframes s-oid1-scan {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(0, 26px); }
  50% { transform: translate(0, 52px); }
  75% { transform: translate(0, 78px); }
}
@keyframes s-oid1-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

const RESULTS = [
  { field: 'food', tone: 'amber' },
  { field: 'physics', tone: 'blue' },
  { field: 'botany', tone: 'green' },
  { field: 'nursing', tone: 'pink' },
]

export function NameScene() {
  const desk = 258
  const [sx, sy] = laptopScreen(470, desk, 300)
  return (
    <Scene
      w={800}
      h={300}
      top={20}
      css={nameCss}
      className="s-oid1"
      label="A paper character looks at a laptop listing four search results all by G. Kaur in different fields, food, physics, botany and nursing, while a magnifying glass moves down the list and she wonders which one is her"
    >
      <Floor y={318} x1={30} x2={770} seed={101} />
      <Legs x1={330} x2={620} top={desk + 20} floor={318} seed={102} />
      <Desk y={desk} x1={310} x2={640} depth={20} seed={103} />

      <Laptop x={470} y={desk} w={300} seed={104}>
        {RESULTS.map((row, i) => (
          <g key={row.field}>
            <circle cx={sx + 16} cy={sy + 22 + i * 26} r={5} fill={TONES[row.tone].ink} />
            <Hand x={sx + 28} y={sy + 28 + i * 26} size={17} weight={700}>
              G. Kaur
            </Hand>
            <Hand x={sx + 104} y={sy + 28 + i * 26} size={15} c={INK_SOFT}>
              {row.field}
            </Hand>
          </g>
        ))}
      </Laptop>

      <Place x={0} y={0}>
        <Anim className="s-oid1-lens">
          <Magnifier x={sx + 190} y={sy + 22} r={18} angle={40} tone="amber" seed={105} />
        </Anim>
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-oid1-thought">
          <Thought x={150} y={80} w={200} h={70} tx={150} ty={170} seed={106}>
            <Hand x={150} y={89} size={22} anchor="middle" weight={700}>
              which one is me?
            </Hand>
          </Thought>
        </Anim>
      </Place>

      <Shadow x={150} y={320} rx={34} ry={4} />
      <Place x={150} y={318} s={1.55}>
        <Pip mood="worried" arms="think" tone="amber" look={1.6} seed={110} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. One iD carries your work to everyone who needs it.
   ------------------------------------------------------------------ */

const whyCss = `
.s-oid2-flow { animation: s-oid2-dash 2.2s linear infinite; }
.s-oid2-hub { animation: s-oid2-pulse 4s ease-in-out infinite; }
@keyframes s-oid2-dash {
  from { stroke-dashoffset: 24; }
  to { stroke-dashoffset: 0; }
}
@keyframes s-oid2-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
`

const SPOKES = [
  { label: 'journal', x: 110, y: 70, tone: 'blue' },
  { label: 'university', x: 560, y: 70, tone: 'amber' },
  { label: 'funder', x: 110, y: 230, tone: 'pink' },
  { label: 'IRINS profile', x: 560, y: 230, tone: 'red' },
]

export function WhyScene() {
  const cx = 400
  const cy = 170
  return (
    <Scene
      w={800}
      h={300}
      top={30}
      css={whyCss}
      className="s-oid2"
      label="A green iD badge with a sixteen digit number sits in the middle, and dotted lines run from it to four boxes marked journal, university, funder and IRINS profile"
    >
      {SPOKES.map((spoke, i) => {
        const bx = spoke.x + 65
        const by = spoke.y + 22
        return (
          <g key={spoke.label}>
            <g className="s-oid2-flow">
              <Ink d={handLine(cx + (bx < cx ? -60 : 60), cy, bx + (bx < cx ? 70 : -70), by, 200 + i, 0.5)} c={TONES.green.deep} w={1.8} dash="6 6" />
            </g>
            <Box x={spoke.x} y={spoke.y} w={130} h={44} r={6} fill={TONES[spoke.tone].mid} seed={210 + i} sw={2} />
            <Hand x={bx} y={by + 8} size={spoke.label.length > 10 ? 18 : 21} anchor="middle" weight={700}>
              {spoke.label}
            </Hand>
          </g>
        )
      })}

      <Place x={0} y={0}>
        <Anim className="s-oid2-hub" origin={[cx, cy]}>
          <Box x={cx - 92} y={cy - 46} w={184} h={92} r={8} fill={TONES.green.tint} seed={220} sw={2} />
          <Badge x={cx - 58} y={cy - 12} r={20} seed={221} />
          <Hand x={cx - 26} y={cy - 6} size={20} weight={700}>
            one iD
          </Hand>
          <Type x={cx} y={cy + 32} size={13} anchor="middle" weight={700}>
            0000-0002-1825-0097
          </Type>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The registration form, filled one field at a time.
   ------------------------------------------------------------------ */

const registerCss = `
.s-oid3 .check-tick { animation: s-oid3-tick 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 8s); }
.s-oid3-mail { animation: s-oid3-pop 8s ease-in-out infinite; }
.s-oid3-writer .pip-arm-r { animation: s-oid3-type 0.8s ease-in-out infinite; }
@keyframes s-oid3-tick {
  0%, 30% { stroke-dashoffset: 1; }
  40%, 90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-oid3-pop {
  0%, 62% { transform: translateY(16px) scale(0.8); opacity: 0; }
  70%, 92% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(16px) scale(0.8); opacity: 0; }
}
@keyframes s-oid3-type {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

const FIELDS = ['name', 'email', 'backup email', 'password', 'affiliation']

export function RegisterScene() {
  const desk = 262
  const [sx, sy, sw] = laptopScreen(400, desk, 320)
  return (
    <Scene
      w={800}
      h={300}
      top={22}
      css={registerCss}
      className="s-oid3"
      label="A paper character types at a laptop showing a registration form with fields for name, email, backup email, password and affiliation, beside a checklist being ticked off and an envelope marked verify that pops up at the end"
    >
      <Floor y={320} x1={30} x2={770} seed={301} />
      <Legs x1={230} x2={570} top={desk + 20} floor={320} seed={302} />
      <Desk y={desk} x1={210} x2={590} depth={20} seed={303} />

      <Laptop x={400} y={desk} w={320} seed={304}>
        {FIELDS.map((field, i) => (
          <g key={field}>
            <Hand x={sx + 12} y={sy + 22 + i * 24} size={14} c={INK_SOFT}>
              {field}
            </Hand>
            <Box x={sx + 104} y={sy + 9 + i * 24} w={sw - 120} h={17} r={3} fill={PAPER} seed={310 + i} sw={1.2} />
          </g>
        ))}
      </Laptop>

      <Checklist x={630} y={86} w={120} items={5} done={5} seed={320} />

      <Place x={0} y={0}>
        <Anim className="s-oid3-mail" origin={[690, 300]} style={{ opacity: 0 }}>
          <Envelope x={642} y={258} w={96} h={56} open seed={330} tone="green" />
          <Hand x={690} y={250} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
            verify
          </Hand>
        </Anim>
      </Place>

      <Shadow x={130} y={322} rx={34} ry={4} />
      <Place x={130} y={320} s={1.55}>
        <g className="s-oid3-writer">
          <Pip mood="focused" arms="point" tone="amber" look={1.6} seed={340} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Four groups of four, and a check character at the end.
   ------------------------------------------------------------------ */

const formatCss = `
.s-oid4-group { animation: s-oid4-glow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 6s); }
.s-oid4-check { animation: s-oid4-ring 6s ease-in-out infinite; }
@keyframes s-oid4-glow {
  0%, 20%, 60%, 100% { opacity: 0; }
  30%, 50% { opacity: 1; }
}
@keyframes s-oid4-ring {
  0%, 70%, 100% { transform: scale(1); }
  80%, 90% { transform: scale(1.18); }
}
`

const GROUPS = ['0000', '0002', '1825', '0097']

export function FormatScene() {
  const top = 110
  return (
    <Scene
      w={800}
      h={260}
      top={40}
      css={formatCss}
      className="s-oid4"
      label="The example iD 0000-0002-1825-0097 is written in four boxes of four digits; a bracket under the first fifteen says digits, and the last digit is circled and labelled check character, with a note that X means 10"
    >
      {GROUPS.map((group, i) => {
        const x = 90 + i * 160
        return (
          <g key={group}>
            <rect className="s-oid4-group" style={{ '--i': i, opacity: 0 }} x={x - 4} y={top - 4} width={128} height={64} rx={8} fill={TONES.amber.tint} />
            <Box x={x} y={top} w={120} h={56} r={6} fill={i === 3 ? TONES.green.tint : PAPER} seed={400 + i} sw={2} />
            <Type x={x + 60} y={top + 38} size={30} anchor="middle" weight={700}>
              {group}
            </Type>
            {i < 3 ? (
              <Hand x={x + 140} y={top + 38} size={30} anchor="middle" weight={700}>
                -
              </Hand>
            ) : null}
          </g>
        )
      })}

      <Ink d={`M90 ${top + 72}Q90 ${top + 84} 110 ${top + 84}L350 ${top + 84}Q362 ${top + 84} 366 ${top + 96}Q370 ${top + 84} 382 ${top + 84}L628 ${top + 84}Q644 ${top + 84} 644 ${top + 72}`} w={1.8} />
      <Hand x={366} y={top + 124} size={22} anchor="middle" c={INK_SOFT}>
        the first fifteen are digits
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-oid4-check" origin={[657, top + 28]}>
          <Ink d={`M650 ${top + 4}Q666 ${top} 672 ${top + 14}Q678 ${top + 32} 668 ${top + 48}Q656 ${top + 58} 646 ${top + 46}Q638 ${top + 28} 643 ${top + 12}Q646 ${top + 6} 652 ${top + 4}`} c={TONES.red.ink} w={2.4} />
        </Anim>
      </Place>
      <Arrow from={[640, 72]} to={[656, top - 6]} bend={-0.2} seed={410} c={TONES.red.deep} />
      <Hand x={560} y={66} size={22} weight={700} c={TONES.red.deep}>
        check character
      </Hand>
      <Box x={30} y={36} w={128} h={46} r={5} fill={TONES.amber.mid} seed={411} sw={1.8} />
      <Hand x={94} y={66} size={22} anchor="middle" weight={700}>
        X means 10
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Papers travel from the databases into one record.
   ------------------------------------------------------------------ */

const recordCss = `
.s-oid5-paper { animation: s-oid5-slide 6s ease-in-out infinite; animation-delay: calc(var(--i) * -2s); }
.s-oid5-keeper .pip-body { animation: s-oid5-bob 3s ease-in-out infinite; }
@keyframes s-oid5-slide {
  0% { transform: translate(0, 0); opacity: 0; }
  10% { opacity: 1; }
  70% { transform: translate(300px, var(--dy)); opacity: 1; }
  80%, 100% { transform: translate(300px, var(--dy)); opacity: 0; }
}
@keyframes s-oid5-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const SOURCES = [
  { label: 'Scopus', y: 60, tone: 'amber', dy: '60px' },
  { label: 'Crossref', y: 140, tone: 'blue', dy: '0px' },
  { label: 'BibTeX file', y: 220, tone: 'pink', dy: '-60px' },
]

export function RecordScene() {
  return (
    <Scene
      w={800}
      h={310}
      top={30}
      css={recordCss}
      className="s-oid5"
      label="Small papers slide from three boxes marked Scopus, Crossref and BibTeX file into a large ORCID record sheet with a green iD badge and a list of works, while a paper character beside it smiles"
    >
      {SOURCES.map((source, i) => (
        <g key={source.label}>
          <Box x={40} y={source.y} w={150} h={46} r={6} fill={TONES[source.tone].mid} seed={500 + i} sw={2} />
          <Hand x={115} y={source.y + 31} size={21} anchor="middle" weight={700}>
            {source.label}
          </Hand>
          <Ink d={handLine(196, source.y + 23, 470, 163, 510 + i, 0.5)} c={INK_SOFT} w={1.3} dash="4 7" o={0.7} />
        </g>
      ))}

      {SOURCES.map((source, i) => (
        <Place key={source.label} x={196} y={source.y + 6}>
          <Anim className="s-oid5-paper" style={{ '--i': i, '--dy': source.dy, opacity: 0 }}>
            <Sheet x={0} y={0} w={30} h={36} tone="paper" lines={2} fold={8} seed={520 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Sheet x={480} y={50} w={180} h={250} tone="paper" lines={0} fold={22} seed={530} />
      <Badge x={510} y={88} r={16} seed={531} />
      <Hand x={534} y={95} size={19} weight={700}>
        my record
      </Hand>
      <Hand x={500} y={136} size={17} weight={700} c={TONES.green.deep}>
        works
      </Hand>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={500} y={150 + i * 28} width={10} height={10} fill={TONES.green.mid} />
          <Lines x={518} y={156 + i * 28} rows={[118 - (i % 3) * 18]} seed={540 + i * 5} />
        </g>
      ))}

      <Shadow x={725} y={302} rx={30} ry={4} />
      <Place x={725} y={300} s={1.3} flip>
        <g className="s-oid5-keeper">
          <Pip mood="happy" arms="hips" tone="amber" look={1.2} seed={550} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Everyone, trusted parties, only me.
   ------------------------------------------------------------------ */

const visibilityCss = `
.s-oid6-key { animation: s-oid6-turn 4s ease-in-out infinite; }
.s-oid6-glint { animation: s-oid6-glint 5s ease-in-out infinite; }
.s-oid6-guide .pip-arm-r { animation: s-oid6-point 4s ease-in-out infinite; }
@keyframes s-oid6-turn {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-24deg); }
}
@keyframes s-oid6-glint {
  0%, 30%, 70%, 100% { opacity: 0; }
  45%, 55% { opacity: 1; }
}
@keyframes s-oid6-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

export function VisibilityScene() {
  const floor = 300
  return (
    <Scene
      w={800}
      h={300}
      top={26}
      css={visibilityCss}
      className="s-oid6"
      label="Three doors stand in a row: a wide open green door marked everyone, a half open amber door with a key marked trusted parties, and a closed red door marked only me, while a paper character points at them"
    >
      <Ink d={handLine(40, floor, 760, floor, 601, 0.6)} w={1.8} />

      <Door x={200} y={floor} w={84} h={150} open={0.7} tone="green" seed={602} />
      <Hand x={242} y={floor - 166} size={22} anchor="middle" weight={700}>
        everyone
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-oid6-glint" style={{ opacity: 0 }}>
          <Sparkle x={300} y={floor - 120} s={10} />
        </Anim>
      </Place>

      <Door x={380} y={floor} w={84} h={150} open={0.3} tone="amber" seed={603} />
      <Hand x={422} y={floor - 166} size={22} anchor="middle" weight={700}>
        trusted parties
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-oid6-key" origin={[478, floor - 66]}>
          <Key x={478} y={floor - 66} s={0.8} angle={0} tone="amber" seed={604} />
        </Anim>
      </Place>

      <Door x={560} y={floor} w={84} h={150} open={0} tone="red" seed={605} />
      <Hand x={602} y={floor - 166} size={22} anchor="middle" weight={700}>
        only me
      </Hand>

      <Shadow x={100} y={floor + 2} rx={30} ry={4} />
      <Place x={100} y={floor} s={1.4}>
        <g className="s-oid6-guide">
          <Pip mood="happy" arms="point" tone="blue" glasses look={1.6} seed={610} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The duplicate record folds into the one you keep.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-oid7-spare { animation: s-oid7-merge 7s ease-in-out infinite; }
.s-oid7-harmeet .pip-body { animation: s-oid7-sway 3.5s ease-in-out infinite; }
@keyframes s-oid7-merge {
  0%, 30% { transform: translate(0, 0) scale(1); opacity: 1; }
  70% { transform: translate(-190px, 0) scale(0.5); opacity: 0; }
  71%, 85% { transform: translate(0, 0) scale(1); opacity: 0; }
  100% { transform: translate(0, 0) scale(1); opacity: 1; }
}
@keyframes s-oid7-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

/* An ORCID record card, drawn from its own top-left corner. */
function RecordCard({ tone, seed, label }) {
  return (
    <g>
      <Sheet x={0} y={0} w={150} h={180} tone="paper" lines={0} fold={20} seed={seed} />
      <Badge x={26} y={34} r={14} seed={seed + 1} />
      <Hand x={48} y={40} size={17} weight={700}>
        Harmeet S.
      </Hand>
      <Lines x={16} y={74} rows={[110, 90, 116, 70]} gap={16} seed={seed + 2} />
      <rect x={16} y={140} width={118} height={24} rx={4} fill={TONES[tone].mid} />
      <Hand x={75} y={158} size={16} anchor="middle" weight={700}>
        {label}
      </Hand>
    </g>
  )
}

export function MistakesScene() {
  const floor = 306
  return (
    <Scene
      w={800}
      h={310}
      top={10}
      css={mistakesCss}
      className="s-oid7"
      label="Two ORCID record cards with the same name stand side by side; the one stamped duplicate shrinks and slides into the record being kept, while a worried paper character watches"
    >
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Place x={250} y={70}>
        <RecordCard tone="green" seed={710} label="keep" />
      </Place>

      <Place x={440} y={70}>
        <Anim className="s-oid7-spare" origin={[75, 90]}>
          <RecordCard tone="red" seed={720} label="old email" />
          <StampMark x={80} y={92} w={130} h={40} text="DUPLICATE" tone="red" rotate={-12} size={18} bg={PAPER} seed={730} />
        </Anim>
      </Place>

      <Arrow from={[520, 62]} to={[360, 62]} bend={0.12} seed={740} c={TONES.red.deep} />
      <Hand x={440} y={30} size={18} anchor="middle" c={INK_SOFT}>
        remove duplicate record
      </Hand>

      <Shadow x={690} y={floor + 2} rx={32} ry={4} />
      <Place x={690} y={floor} s={1.5} flip>
        <g className="s-oid7-harmeet">
          <Pip mood="worried" arms="shrug" tone="pink" look={1.4} seed={750} />
        </g>
      </Place>

      <Shadow x={110} y={floor + 2} rx={32} ry={4} />
      <Place x={110} y={floor} s={1.5}>
        <Pip mood="happy" arms="point" tone="amber" look={1.6} seed={760} />
      </Place>
    </Scene>
  )
}
