import {
  Anim,
  Arrow,
  Copier,
  Cross,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  OpenBook,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
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

/* A hand-drawn rectangle with a flat fill. */
function Panel({ x, y, w, h, fill, seed, c, sw = 1.7 }) {
  return (
    <g>
      <path d={`M${x} ${y}h${w}v${h}h${-w}Z`} fill={fill} />
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.45, closed: true })} w={sw} c={c} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. One list, two groups.
   ------------------------------------------------------------------ */

const groupsCss = `
.s-ucl1-row { animation: s-ucl1-mark 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 8s); }
.s-ucl1-guide .pip-arm-r { animation: s-ucl1-point 2.6s ease-in-out infinite alternate; }
@keyframes s-ucl1-mark {
  0%, 100% { opacity: 0.35; }
  10%, 40% { opacity: 1; }
  60% { opacity: 0.35; }
}
@keyframes s-ucl1-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-10deg); }
}
`

export function GroupsScene() {
  const x = 150
  const y = 30
  const w = 460
  const h = 290
  const col = (cx, tone, title, sub, seed) => (
    <g>
      <Panel x={cx} y={y + 58} w={200} h={36} fill={TONES[tone].mid} seed={seed} />
      <Hand x={cx + 100} y={y + 84} size={24} anchor="middle" weight={700}>
        {title}
      </Hand>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} className="s-ucl1-row" style={{ '--i': i + (tone === 'blue' ? 5 : 0) }}>
          <path d={ellipsePath(cx + 14, y + 120 + i * 26, 5, 5)} fill={TONES[tone].ink} />
          <Ink d={handLine(cx + 28, y + 120 + i * 26, cx + 120 + ((i * 37) % 60), y + 120 + i * 26, seed + 10 + i, 0.35)} c={TEXT_LINE} w={1.8} />
        </g>
      ))}
      <Hand x={cx + 100} y={y + 268} size={18} anchor="middle" c={INK_SOFT}>
        {sub}
      </Hand>
    </g>
  )
  return (
    <Scene w={800} h={350} top={14} css={groupsCss} className="s-ucl1" label="A large list headed UGC CARE list split into two columns: Group I, journals reviewed by UGC's own method, and Group II, journals indexed in Scopus and Web of Science, while a paper character points at it">
      <Floor y={358} x1={40} x2={760} seed={101} />
      <Sheet x={x} y={y} w={w} h={h} lines={0} fold={24} seed={102} sw={2} />
      <Hand x={x + 26} y={y + 38} size={26} weight={700}>
        UGC CARE list
      </Hand>
      <Ink d={handLine(x + w / 2, y + 56, x + w / 2, y + h - 14, 103, 0.5)} w={1.4} c={INK_SOFT} dash="4 6" />
      {col(x + 16, 'red', 'Group I', 'checked by UGC', 110)}
      {col(x + w / 2 + 14, 'blue', 'Group II', 'Scopus, Web of Science', 130)}

      <Shadow x={690} y={360} rx={36} ry={4} />
      <Place x={690} y={358} s={1.65} flip>
        <g className="s-ucl1-guide">
          <Pip mood="happy" arms="point" tone="blue" glasses look={1.6} seed={150} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The timeline from decision to closed list.
   ------------------------------------------------------------------ */

const STEPS = [
  { when: 'Oct 2024', what: 'decided', tone: 'grey' },
  { when: 'Feb 2025', what: 'list stopped', tone: 'red' },
  { when: 'Jun 2025', what: 'approved', tone: 'amber' },
  { when: 'Jul 2025', what: 'parameters out', tone: 'green' },
  { when: 'Dec 2025', what: 'letter to HEIs', tone: 'blue' },
]

const timelineCss = `
.s-ucl2-dot { animation: s-ucl2-pop 10s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s - 10s); }
.s-ucl2-walker .pip-arm-r { animation: s-ucl2-step 2.4s ease-in-out infinite alternate; }
@keyframes s-ucl2-pop {
  0%, 100% { transform: scale(1); }
  5% { transform: scale(1.35); }
  10% { transform: scale(1); }
}
@keyframes s-ucl2-step {
  from { transform: rotate(0deg); }
  to { transform: rotate(-10deg); }
}
`

export function TimelineScene() {
  const y = 170
  const x0 = 100
  const gap = 150
  return (
    <Scene w={800} h={236} top={96} css={timelineCss} className="s-ucl2" label="A timeline with five points: October 2024 decided, February 2025 list stopped, June 2025 approved, July 2025 parameters out, December 2025 letter to HEIs, while a paper character points back along it">
      <Ink d={handLine(x0 - 50, y, x0 + gap * 4 + 50, y, 201, 0.8)} w={2.6} />
      <Arrow from={[x0 + gap * 4 + 30, y]} to={[x0 + gap * 4 + 66, y]} bend={0} seed={202} w={2.6} />
      {STEPS.map((step, i) => {
        const cx = x0 + i * gap
        return (
          <g key={step.when}>
            <Place x={cx} y={y}>
              <Anim className="s-ucl2-dot" spin style={{ '--i': i }}>
                <path d={ellipsePath(0, 0, 16, 16)} fill={TONES[step.tone].mid} />
                <Ink d={handEllipse(0, 0, 16, 16, { seed: 210 + i, amp: 0.4 })} w={1.8} />
              </Anim>
            </Place>
            <Hand x={cx} y={y - 34} size={22} anchor="middle" weight={700}>
              {step.when}
            </Hand>
            <Hand x={cx} y={y + 48} size={19} anchor="middle" c={INK_SOFT}>
              {step.what}
            </Hand>
          </g>
        )
      })}
      <Shadow x={660} y={312} rx={28} ry={4} />
      <Place x={660} y={310} s={1.1} flip>
        <g className="s-ucl2-walker">
          <Pip mood="focused" arms="point" tone="amber" look={1.6} seed={230} />
        </g>
      </Place>
      <Cross x={x0 + gap} y={y + 82} s={1.2} seed={240} />
      <Hand x={x0 + gap + 20} y={y + 90} size={18} c={TONES.red.deep}>
        no new journals added
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Why it stopped: a list that kept changing, and copies.
   ------------------------------------------------------------------ */

const whyCss = `
.s-ucl3-in { animation: s-ucl3-in 6s ease-in-out infinite; }
.s-ucl3-out { animation: s-ucl3-out 6s ease-in-out infinite; }
.s-ucl3 .copy-sheet { animation: s-ucl3-copy 3s ease-in-out infinite; }
@keyframes s-ucl3-in {
  0%, 100% { transform: translateX(-30px); opacity: 0; }
  30%, 70% { transform: translateX(0); opacity: 1; }
}
@keyframes s-ucl3-out {
  0%, 30% { transform: translateX(0); opacity: 1; }
  70%, 100% { transform: translateX(40px); opacity: 0; }
}
@keyframes s-ucl3-copy {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-22px); }
}
`

export function WhyScene() {
  return (
    <Scene w={800} h={330} top={10} css={whyCss} className="s-ucl3" label="On the left a journal list with one entry sliding in and another sliding out, labelled kept changing; on the right a photocopier makes copies of a journal page, labelled cloned journals">
      <Floor y={330} x1={30} x2={770} seed={301} />
      <Sheet x={110} y={40} w={200} h={240} lines={0} fold={22} seed={302} sw={2} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Lines key={i} x={130} y={84 + i * 30} rows={[120 + ((i * 29) % 40)]} seed={310 + i * 2} />
      ))}
      <Place x={0} y={0}>
        <g className="s-ucl3-in">
          <Ink d={handLine(130, 114, 260, 114, 330, 0.3)} c={TONES.green.ink} w={2.4} />
          <Hand x={268} y={120} size={20} weight={700} c={TONES.green.deep}>
            +
          </Hand>
        </g>
      </Place>
      <Place x={0} y={0}>
        <g className="s-ucl3-out">
          <Ink d={handLine(130, 204, 250, 204, 331, 0.3)} c={TONES.red.ink} w={2.4} />
          <Hand x={262} y={210} size={22} weight={700} c={TONES.red.deep}>
            x
          </Hand>
        </g>
      </Place>
      <Hand x={210} y={310} size={21} anchor="middle" c={INK_SOFT}>
        kept changing
      </Hand>

      <Sheet x={470} y={100} w={70} h={92} tone="green" lines={4} fold={14} seed={340} title />
      <Arrow from={[548, 140]} to={[586, 196]} bend={-0.3} seed={341} c={INK_SOFT} />
      <Copier x={600} y={290} s={1.05} seed={342} />
      {[0, 1].map((i) => (
        <Sheet key={i} x={418 + i * 14} y={236 + i * 10} w={62} h={44} tone="green" lines={2} fold={9} seed={350 + i} sw={1.4} />
      ))}
      <Hand x={600} y={316} size={21} anchor="middle" c={INK_SOFT}>
        cloned journals
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Eight groups of questions.
   ------------------------------------------------------------------ */

const PARAMS = [
  { label: 'basics', tone: 'grey' },
  { label: 'editorial board', tone: 'blue' },
  { label: 'policy and fees', tone: 'amber' },
  { label: 'content', tone: 'green' },
  { label: 'standards', tone: 'brown' },
  { label: 'ethics', tone: 'red' },
  { label: 'visibility', tone: 'pink' },
  { label: 'impact', tone: 'blue' },
]

const paramsCss = `
.s-ucl4-tick { animation: s-ucl4-tick 10s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s - 10s); }
.s-ucl4-guide .pip-arm-r { animation: s-ucl4-point 2.4s ease-in-out infinite alternate; }
@keyframes s-ucl4-tick {
  0%, 4% { stroke-dashoffset: 1; }
  12%, 86% { stroke-dashoffset: 0; }
  94%, 100% { stroke-dashoffset: 1; }
}
@keyframes s-ucl4-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-10deg); }
}
`

export function ParametersScene() {
  const x0 = 40
  const y0 = 40
  const cw = 150
  const ch = 96
  return (
    <Scene w={800} h={300} top={20} css={paramsCss} className="s-ucl4" label="Eight cards in two rows, each ticked in turn: basics, editorial board, policy and fees, content, standards, ethics, visibility and impact, with a paper character pointing at them">
      <Floor y={302} x1={30} x2={770} seed={401} />
      {PARAMS.map((p, i) => {
        const cx = x0 + (i % 4) * (cw + 12)
        const cy = y0 + Math.floor(i / 4) * (ch + 14)
        return (
          <g key={p.label}>
            <Panel x={cx} y={cy} w={cw} h={ch} fill={TONES[p.tone].tint} seed={410 + i * 3} c={TONES[p.tone].deep} />
            <Hand x={cx + cw / 2} y={cy + 36} size={20} anchor="middle" weight={700}>
              {p.label}
            </Hand>
            <path
              className="s-ucl4-tick"
              style={{ '--i': i }}
              d={`M${cx + cw / 2 - 14} ${cy + 62}q5 3 8 11q8 -16 20 -24`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke="#3f8f4f"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )
      })}
      <Shadow x={720} y={304} rx={30} ry={4} />
      <Place x={720} y={302} s={1.45} flip>
        <g className="s-ucl4-guide">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.6} seed={450} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The real journal and its clone.
   ------------------------------------------------------------------ */

const cloneCss = `
.s-ucl5-lens { animation: s-ucl5-swap 8s ease-in-out infinite; }
.s-ucl5-offer { animation: s-ucl5-float 4s ease-in-out infinite; }
@keyframes s-ucl5-swap {
  0%, 100% { transform: translateX(0); }
  40%, 50% { transform: translateX(260px); }
}
@keyframes s-ucl5-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

function JournalPage({ x, y, address, seed }) {
  return (
    <g>
      <Sheet x={x} y={y} w={190} h={190} lines={0} fold={22} seed={seed} sw={2} />
      <Hand x={x + 18} y={y + 44} size={22} weight={700}>
        Journal of
      </Hand>
      <Hand x={x + 18} y={y + 70} size={22} weight={700}>
        Folk Studies
      </Hand>
      <Lines x={x + 18} y={y + 96} rows={[140, 120, 150]} gap={14} seed={seed + 2} />
      <Panel x={x + 14} y={y + 144} w={162} h={30} fill={PAPER} seed={seed + 5} sw={1.3} />
      <text x={x + 95} y={y + 165} textAnchor="middle" fontSize={15} className="ink-type" fill={INK_SOFT}>
        {address}
      </text>
    </g>
  )
}

export function CloneScene() {
  return (
    <Scene w={800} h={330} top={10} css={cloneCss} className="s-ucl5" label="Two journal pages with the same title, Journal of Folk Studies; under the real one the web address belongs to a university department and gets a green tick, under the copy the address differs and gets a red cross, while an offer reads publish in 7 days">
      <Floor y={330} x1={30} x2={770} seed={501} />
      <JournalPage x={70} y={70} address="dept. website" seed={510} />
      <JournalPage x={330} y={70} address="fast-publish site" seed={520} />
      <Tick x={164} y={292} s={1.3} />
      <Cross x={424} y={296} s={1.1} seed={530} />
      <Hand x={164} y={60} size={20} anchor="middle" c={TONES.green.deep}>
        the real one
      </Hand>
      <Hand x={424} y={60} size={20} anchor="middle" c={TONES.red.deep}>
        the copy
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-ucl5-lens">
          <Magnifier x={140} y={124} r={24} angle={40} tone="amber" seed={540} />
        </Anim>
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-ucl5-offer">
          <Speech x={570} y={56} w={196} h={86} tx={640} ty={176} tone="pink" seed={550}>
            <Hand x={668} y={92} size={20} anchor="middle" weight={700}>
              publish in 7 days
            </Hand>
            <Hand x={668} y={122} size={18} anchor="middle">
              certificate given
            </Hand>
          </Speech>
        </Anim>
      </Place>
      <Shadow x={660} y={332} rx={32} ry={4} />
      <Place x={660} y={330} s={1.5}>
        <Pip mood="worried" arms="hold" tone="amber" look={-1.4} seed={560}>
          <path d="M-6 -36h12v20h-12Z" fill="#2f3a4f" />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Checking the journal on the laptop, together.
   ------------------------------------------------------------------ */

const CHECKS = [
  { label: 'university rule', ok: true },
  { label: 'title and ISSN', ok: true },
  { label: 'website matches', ok: false },
  { label: 'indexing on source', ok: false },
]

const checkCss = `
.s-ucl6-mark { animation: s-ucl6-pop 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 8s); }
.s-ucl6-gill .pip-arm-r { animation: s-ucl6-point 2.4s ease-in-out infinite alternate; }
@keyframes s-ucl6-pop {
  0%, 100% { transform: scale(1); }
  6% { transform: scale(1.35); }
  12% { transform: scale(1); }
}
@keyframes s-ucl6-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-9deg); }
}
`

export function CheckScene() {
  const lx = 400
  const ly = 300
  const lw = 400
  const [sx, sy] = laptopScreen(lx, ly, lw)
  return (
    <Scene w={800} h={340} top={10} css={checkCss} className="s-ucl6" label="A laptop screen lists four checks for a journal: university rule and title and ISSN are ticked, website matches and indexing on source are crossed, while a supervisor in glasses points and a student watches">
      <Floor y={322} x1={30} x2={770} seed={601} />
      <rect x={170} y={ly} width={460} height={14} fill="url(#wood)" />
      <Ink d={handPoly([[170, ly], [630, ly], [630, ly + 14], [170, ly + 14]], { seed: 602, amp: 0.4, closed: true })} w={1.7} />
      <Laptop x={lx} y={ly} w={lw} seed={603} />
      {CHECKS.map((c, i) => {
        const ry = sy + 32 + i * 34
        return (
          <g key={c.label}>
            <Hand x={sx + 62} y={ry + 7} size={20}>
              {c.label}
            </Hand>
            <Place x={sx + 34} y={ry}>
              <Anim className="s-ucl6-mark" spin style={{ '--i': i }}>
                {c.ok ? <Tick x={0} y={0} s={0.9} /> : <Cross x={0} y={0} s={0.8} seed={610 + i} />}
              </Anim>
            </Place>
          </g>
        )
      })}

      <Shadow x={110} y={324} rx={34} ry={4} />
      <Place x={110} y={322} s={1.55}>
        <g className="s-ucl6-gill">
          <Pip mood="focused" arms="point" tone="blue" glasses look={1.6} seed={620} />
        </g>
      </Place>
      <Shadow x={690} y={324} rx={34} ry={4} />
      <Place x={690} y={322} s={1.55} flip>
        <Pip mood="surprised" arms="down" tone="amber" look={1.6} seed={630} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The university's own rules, and a real review on its way.
   ------------------------------------------------------------------ */

const rulesCss = `
.s-ucl7-mail { animation: s-ucl7-fly 8s ease-in-out infinite; }
.s-ucl7-reader .pip-body { animation: s-ucl7-hop 8s ease-in-out infinite; }
@keyframes s-ucl7-fly {
  0%, 10% { transform: translate(-80px, -50px) rotate(-10deg); opacity: 0; }
  20% { opacity: 1; }
  40%, 88% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  96%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
@keyframes s-ucl7-hop {
  0%, 44%, 60%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
`

export function RulesScene() {
  return (
    <Scene w={800} h={320} top={10} css={rulesCss} className="s-ucl7" label="An open book labelled university rules on a stand with a sticky note saying ask the research cell, and a paper character happily receiving an envelope marked minor revisions">
      <Floor y={312} x1={30} x2={770} seed={701} />
      <Ink d={handLine(250, 212, 230, 312, 702, 0.4) + handLine(250, 212, 270, 312, 703, 0.4)} w={3} c={TONES.brown.deep} />
      <OpenBook x={250} y={214} w={280} tone="blue" lines={6} seed={704} />
      <Panel x={160} y={40} w={180} h={36} fill={TONES.blue.mid} seed={705} />
      <Hand x={250} y={66} size={22} anchor="middle" weight={700}>
        university rules
      </Hand>
      <Sticky x={40} y={150} w={110} h={86} tone="amber" lines={0} seed={706} />
      <Hand x={95} y={184} size={18} anchor="middle" weight={700}>
        ask the
      </Hand>
      <Hand x={95} y={208} size={18} anchor="middle" weight={700}>
        research cell
      </Hand>

      <Place x={450} y={130}>
        <Anim className="s-ucl7-mail">
          <Envelope x={0} y={0} w={110} h={70} tone="green" seed={710} />
          <Hand x={55} y={98} size={18} anchor="middle" weight={700} c={TONES.green.deep}>
            minor revisions
          </Hand>
        </Anim>
      </Place>

      <Shadow x={690} y={314} rx={32} ry={4} />
      <Place x={690} y={312} s={1.5} flip>
        <g className="s-ucl7-reader">
          <Pip mood="grin" arms="up" tone="amber" look={1.6} seed={720} />
        </g>
      </Place>
    </Scene>
  )
}
