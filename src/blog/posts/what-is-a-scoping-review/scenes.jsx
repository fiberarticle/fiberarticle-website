import {
  Anim,
  Arrow,
  Box,
  Chart,
  Checklist,
  Cross,
  Floor,
  Grid,
  Hand,
  INK_SOFT,
  Ink,
  Ladder,
  Magnifier,
  PAPER,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sticky,
  TONES,
  Target,
  Thought,
  TreasureMap,
  Type,
  handLine,
  handPoly,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. The view from the ladder: where the papers pile up, and where
      the ground is bare.
   ------------------------------------------------------------------ */

const viewCss = `
.s-scr1-dhara .pip-body { animation: s-scr1-look 5s ease-in-out infinite; }
.s-scr1-bare { animation: s-scr1-blink 3s ease-in-out infinite; }
@keyframes s-scr1-look {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
@keyframes s-scr1-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
`

const HEAPS = [
  { x: 330, count: 17, name: 'a lot' },
  { x: 480, count: 6, name: 'a little' },
]

export function ViewScene() {
  const FLOOR = 330
  return (
    <Scene
      w={800}
      h={350}
      top={10}
      css={viewCss}
      className="s-scr1"
      label="A paper character stands on a ladder and looks out over three spots on the ground: a tall pile of papers labelled a lot, a short pile labelled a little, and an empty dashed outline labelled nothing yet"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={101} />

      <Ladder x={96} y={FLOOR} h={150} w={48} rungs={6} seed={102} />
      <Place x={120} y={FLOOR - 150} s={1.5}>
        <g className="s-scr1-dhara">
          <Pip mood="happy" arms="point" tone="green" glasses look={2} seed={103} />
        </g>
      </Place>

      <Hand x={480} y={52} size={24} anchor="middle" weight={700}>
        how much is there, and of what kind?
      </Hand>
      <Arrow from={[206, 110]} to={[300, 190]} bend={-0.18} seed={104} c={INK_SOFT} w={1.6} dash="5 6" />

      {HEAPS.map((heap, i) => (
        <g key={heap.name}>
          <Pile x={heap.x} y={FLOOR} w={96} count={heap.count} seed={110 + i * 7} />
          <Hand x={heap.x} y={FLOOR - heap.count * 5 - 16} size={22} anchor="middle" weight={700}>
            {heap.name}
          </Hand>
        </g>
      ))}

      <Ink d={handPoly([[588, FLOOR - 4], [588, FLOOR - 74], [692, FLOOR - 74], [692, FLOOR - 4]], { seed: 130, amp: 0.6 })} c={TONES.red.ink} w={1.8} dash="7 7" />
      <g className="s-scr1-bare">
        <Hand x={640} y={FLOOR - 28} size={32} anchor="middle" weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      </g>
      <Hand x={640} y={FLOOR - 90} size={22} anchor="middle" weight={700}>
        nothing yet
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Six reasons for a scoping review, on six notes.
   ------------------------------------------------------------------ */

const whenCss = `
.s-scr2-note { animation: s-scr2-pop 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 9s); }
@keyframes s-scr2-pop {
  0%, 20%, 100% { transform: translateY(0) rotate(0deg); }
  8% { transform: translateY(-9px) rotate(-1.5deg); }
}
`

const REASONS = [
  ['types of', 'evidence', 'amber'],
  ['key concepts', 'and definitions', 'pink'],
  ['how the research', 'is done', 'blue'],
  ['key factors', 'of a concept', 'green'],
  ['before a', 'systematic review', 'red'],
  ['knowledge', 'gaps', 'amber'],
]

export function WhenScene() {
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={whenCss}
      className="s-scr2"
      label="Six numbered sticky notes give the reasons for a scoping review: types of evidence, key concepts and definitions, how the research is done, key factors of a concept, before a systematic review, and knowledge gaps"
    >
      {REASONS.map(([a, b, tone], i) => {
        const x = 50 + (i % 3) * 240
        const y = 34 + Math.floor(i / 3) * 150
        return (
          <Place key={a} x={0} y={0}>
            <Anim className="s-scr2-note" origin={[x + 110, y + 60]} style={{ '--i': i }}>
              <Sticky x={x} y={y} w={220} h={124} tone={tone} lines={0} seed={210 + i} />
              <Type x={x + 16} y={y + 40} size={20} weight={700} c={TONES[tone].deep}>
                {i + 1}
              </Type>
              <Hand x={x + 118} y={y + 66} size={22} anchor="middle" weight={700}>
                {a}
              </Hand>
              <Hand x={x + 118} y={y + 96} size={22} anchor="middle" weight={700}>
                {b}
              </Hand>
            </Anim>
          </Place>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The whole map, or one point on it.
   ------------------------------------------------------------------ */

const vsCss = `
.s-scr3-lens { animation: s-scr3-roam 8s ease-in-out infinite; }
.s-scr3-aim { animation: s-scr3-hit 4s ease-in-out infinite; }
.s-scr3-dhara .pip-body { animation: s-scr3-sway 5s ease-in-out infinite; }
@keyframes s-scr3-roam {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(110px, 24px); }
  66% { transform: translate(40px, 70px); }
}
@keyframes s-scr3-hit {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(9px, 6px); }
}
@keyframes s-scr3-sway {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
`

export function VsScene() {
  const FLOOR = 340
  return (
    <Scene
      w={800}
      h={360}
      top={10}
      css={vsCss}
      className="s-scr3"
      label="On the left a wide folded map with a magnifying glass roaming over it, labelled scoping review, what is out there. On the right a target with an arrow in the centre, labelled systematic review, does it work. A paper character stands between them"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={301} />

      <Hand x={180} y={50} size={25} anchor="middle" weight={700}>
        scoping review
      </Hand>
      <TreasureMap x={50} y={78} w={260} h={150} seed={302} />
      <Place x={0} y={0}>
        <Anim className="s-scr3-lens">
          <Magnifier x={110} y={120} r={22} angle={50} tone="green" seed={303} />
        </Anim>
      </Place>
      <Hand x={180} y={280} size={23} anchor="middle" c={INK_SOFT}>
        what is out there?
      </Hand>

      <Hand x={620} y={50} size={25} anchor="middle" weight={700}>
        systematic review
      </Hand>
      <Target x={620} y={156} r={74} seed={310} />
      <Place x={0} y={0}>
        <Anim className="s-scr3-aim">
          <Arrow from={[500, 96]} to={[614, 152]} bend={-0.1} seed={311} c={TONES.red.deep} w={2.6} head={14} />
        </Anim>
      </Place>
      <Hand x={620} y={280} size={23} anchor="middle" c={INK_SOFT}>
        does it work?
      </Hand>

      <Shadow x={400} y={FLOOR + 3} rx={32} ry={5} />
      <Place x={400} y={FLOOR} s={1.6}>
        <g className="s-scr3-dhara">
          <Pip mood="surprised" arms="shrug" tone="green" glasses seed={320} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Four names: the papers the method was built from.
   ------------------------------------------------------------------ */

const frameworkCss = `
.s-scr4-card { animation: s-scr4-lift 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1.4s - 8s); }
@keyframes s-scr4-lift {
  0%, 22%, 100% { transform: translateY(0); }
  10% { transform: translateY(-10px); }
}
`

const NAMES = [
  { tag: '2005', a: 'Arksey and', b: 'O\'Malley', note: 'five stages', tone: 'amber' },
  { tag: '2010', a: 'Levac and', b: 'colleagues', note: 'sharper stages', tone: 'pink' },
  { tag: 'MANUAL', a: 'JBI', b: 'guidance', note: 'PCC, protocol', tone: 'blue' },
  { tag: '2018', a: 'PRISMA-ScR', b: 'checklist', note: 'what to report', tone: 'green' },
]

export function FrameworkScene() {
  return (
    <Scene
      w={800}
      h={300}
      top={10}
      css={frameworkCss}
      className="s-scr4"
      label="Four cards in a row joined by arrows: 2005 Arksey and O'Malley, five stages; 2010 Levac and colleagues, sharper stages; the JBI manual guidance, PCC and protocol; and 2018 PRISMA-ScR checklist, what to report"
    >
      {NAMES.map((n, i) => {
        const x = 34 + i * 190
        const t = TONES[n.tone]
        return (
          <g key={n.tag}>
            <Place x={0} y={0}>
              <Anim className="s-scr4-card" style={{ '--i': i }}>
                <Box x={x} y={50} w={162} h={190} r={8} fill={PAPER} seed={410 + i * 3} sw={2} double />
                <rect x={x} y={50} width={162} height={42} fill={t.tint} />
                <Ink d={handLine(x, 92, x + 162, 92, 420 + i, 0.5)} c={t.deep} w={1.5} />
                <Type x={x + 81} y={78} size={18} anchor="middle" weight={700} c={t.deep}>
                  {n.tag}
                </Type>
                <Hand x={x + 81} y={134} size={24} anchor="middle" weight={700}>
                  {n.a}
                </Hand>
                <Hand x={x + 81} y={164} size={24} anchor="middle" weight={700}>
                  {n.b}
                </Hand>
                <Hand x={x + 81} y={214} size={20} anchor="middle" c={INK_SOFT}>
                  {n.note}
                </Hand>
              </Anim>
            </Place>
            {i < NAMES.length - 1 ? <Arrow from={[x + 166, 145]} to={[x + 187, 145]} bend={0} seed={430 + i} w={2} head={8} /> : null}
          </g>
        )
      })}
      <Hand x={400} y={282} size={22} anchor="middle" c={INK_SOFT}>
        how to do it, and then how to report it
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. A worry becomes three notes: P, C and C.
   ------------------------------------------------------------------ */

const pccCss = `
.s-scr5-strip { animation: s-scr5-slide 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 8s); }
.s-scr5-dhara .pip-body { animation: s-scr5-nod 4s ease-in-out infinite; }
@keyframes s-scr5-slide {
  0%, 24%, 100% { transform: translateX(0); }
  10% { transform: translateX(10px); }
}
@keyframes s-scr5-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

const PCC = [
  { letter: 'P', word: 'population', text: 'children under 18', tone: 'amber' },
  { letter: 'C', word: 'concept', text: 'caring for family', tone: 'green' },
  { letter: 'C', word: 'context', text: 'India', tone: 'blue' },
]

export function PccScene() {
  const FLOOR = 340
  return (
    <Scene
      w={800}
      h={360}
      top={10}
      css={pccCss}
      className="s-scr5"
      label="A paper character thinks what do we know, and an arrow turns the thought into three notes: P, population, children under 18; C, concept, caring for family; C, context, India"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={501} />

      <Thought x={150} y={86} w={210} h={84} tx={140} ty={200} seed={502}>
        <Hand x={150} y={95} size={23} anchor="middle" weight={700}>
          what do we know?
        </Hand>
      </Thought>
      <Shadow x={130} y={FLOOR + 3} rx={34} ry={5} />
      <Place x={130} y={FLOOR} s={1.6}>
        <g className="s-scr5-dhara">
          <Pip mood="focused" arms="think" tone="green" glasses look={1.6} seed={503} />
        </g>
      </Place>

      <Arrow from={[268, 110]} to={[330, 140]} bend={-0.2} seed={504} c={INK_SOFT} w={1.8} />

      {PCC.map((p, i) => {
        const y = 36 + i * 98
        const t = TONES[p.tone]
        return (
          <Place key={p.word} x={0} y={0}>
            <Anim className="s-scr5-strip" style={{ '--i': i }}>
              <Box x={346} y={y} w={410} h={82} r={8} fill={t.tint} stroke={t.deep} seed={510 + i * 3} sw={1.8} />
              <Hand x={370} y={y + 58} size={48} weight={700} c={t.deep}>
                {p.letter}
              </Hand>
              <Type x={424} y={y + 32} size={15} weight={700} c={INK_SOFT}>
                {p.word}
              </Type>
              <Hand x={424} y={y + 62} size={25} weight={700}>
                {p.text}
              </Hand>
            </Anim>
          </Place>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. One row per source, then count what the rows show.
   ------------------------------------------------------------------ */

const chartCss = `
.s-scr6-row { animation: s-scr6-glow 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1.4s - 8s); }
.s-scr6 .chart-bar { animation: s-scr6-grow 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 8s); }
@keyframes s-scr6-glow {
  0%, 20%, 100% { opacity: 0; }
  6%, 14% { opacity: 0.7; }
}
@keyframes s-scr6-grow {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.93); }
}
`

const COLS = ['year', 'place', 'design', 'name used']

export function ChartScene() {
  const gx = 60
  const gy = 70
  const cw = 92
  const rh = 36
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={chartCss}
      className="s-scr6"
      label="A charting table with columns for year, place, design and name used and one row for each source, with an arrow to a bar chart that counts 19 interview studies, 8 surveys and 5 reports"
    >
      <Hand x={gx + cw * 2} y={46} size={23} anchor="middle" weight={700}>
        the charting form: one row per source
      </Hand>
      <Grid x={gx} y={gy} cols={4} rows={6} cw={cw} rh={rh} header="amber" seed={602} />
      {COLS.map((c, i) => (
        <Type key={c} x={gx + i * cw + cw / 2} y={gy + 23} size={14} anchor="middle" weight={700}>
          {c}
        </Type>
      ))}
      {[1, 2, 3, 4, 5].map((r) => (
        <g key={r}>
          <rect className="s-scr6-row" style={{ '--i': r - 1, opacity: 0 }} x={gx + 2} y={gy + r * rh + 3} width={cw * 4 - 4} height={rh - 6} fill={TONES.green.mid} />
          {[0, 1, 2, 3].map((c) => (
            <Ink
              key={c}
              d={handLine(gx + c * cw + 12, gy + r * rh + rh / 2, gx + c * cw + 12 + 34 + ((r * 7 + c * 13) % 32), gy + r * rh + rh / 2, 610 + r * 5 + c, 0.4)}
              c={INK_SOFT}
              w={1.7}
              o={0.75}
            />
          ))}
        </g>
      ))}

      <Arrow from={[446, 180]} to={[506, 180]} bend={-0.15} seed={640} w={2.4} head={12} />

      <Hand x={640} y={46} size={23} anchor="middle" weight={700}>
        then count
      </Hand>
      <Chart x={530} y={270} w={220} h={190} bars={[0.95, 0.4, 0.25]} tone="blue" seed={650} />
      {[
        ['19', 'interviews', 578],
        ['8', 'surveys', 648],
        ['5', 'reports', 716],
      ].map(([n, name, x], i) => (
        <g key={name}>
          <Hand x={x} y={270 - 190 * 0.9 * [0.95, 0.4, 0.25][i] - 8} size={22} anchor="middle" weight={700}>
            {n}
          </Hand>
          <Hand x={x} y={296} size={16} anchor="middle" c={INK_SOFT}>
            {name}
          </Hand>
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Three habits to drop, and one checklist to keep.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-scr7-bad { animation: s-scr7-shake 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 6s); }
.s-scr7 .check-tick { animation: s-scr7-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 8s); }
.s-scr7-dhara .pip-arm-r { animation: s-scr7-wave 2.6s ease-in-out infinite; }
@keyframes s-scr7-shake {
  0%, 16%, 100% { transform: rotate(0deg); }
  4% { transform: rotate(-3deg); }
  10% { transform: rotate(3deg); }
}
@keyframes s-scr7-draw {
  0%, 12% { stroke-dashoffset: 1; }
  24%, 92% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-scr7-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

const BAD = [
  ['a shortcut', 'red'],
  ['no protocol', 'amber'],
  ['advice for', 'pink'],
]

export function MistakesScene() {
  const FLOOR = 330
  return (
    <Scene
      w={800}
      h={350}
      top={10}
      css={mistakesCss}
      className="s-scr7"
      label="Three sticky notes are crossed out: a shortcut, no protocol and advice for practice. Beside them a clipboard checklist labelled PRISMA-ScR has every box ticked, and a paper character in a graduation cap waves"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={701} />

      <Hand x={236} y={48} size={23} anchor="middle" weight={700}>
        three habits to drop
      </Hand>
      {BAD.map(([text, tone], i) => {
        const x = 40 + i * 140
        return (
          <Place key={text} x={0} y={0}>
            <Anim className="s-scr7-bad" origin={[x + 60, 130]} style={{ '--i': i }}>
              <Sticky x={x} y={72} w={124} h={118} tone={tone} lines={0} seed={710 + i} />
              <Hand x={x + 62} y={i === 2 ? 106 : 116} size={21} anchor="middle" weight={700}>
                {text}
              </Hand>
              {i === 2 ? (
                <Hand x={x + 62} y={130} size={21} anchor="middle" weight={700}>
                  practice
                </Hand>
              ) : null}
              <Cross x={x + 62} y={160} s={1.9} w={2.8} seed={720 + i} />
            </Anim>
          </Place>
        )
      })}

      <Hand x={560} y={48} size={23} anchor="middle" weight={700}>
        one to keep: PRISMA-ScR
      </Hand>
      <Checklist x={490} y={76} w={140} items={5} done={5} seed={730} />
      <Hand x={560} y={268} size={19} anchor="middle" c={INK_SOFT}>
        every item reported
      </Hand>

      <Shadow x={712} y={FLOOR + 3} rx={34} ry={5} />
      <Place x={712} y={FLOOR} s={1.7}>
        <g className="s-scr7-dhara">
          <Pip mood="proud" arms="wave" tone="green" glasses cap="grad" seed={740} />
        </g>
      </Place>
    </Scene>
  )
}
