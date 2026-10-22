import {
  Anim,
  Arrow,
  Box,
  Calendar,
  Chart,
  Checklist,
  Cross,
  Envelope,
  Flag,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Key,
  Magnifier,
  Oval,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Stack,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handEllipse,
  handLine,
} from '../../ink/index.js'

/*
 * The profile page, drawn as a card: a round photo, a name, a verified line,
 * then one row per paper with a citation count on the right. Anchor: top-left.
 */
export function ProfileCard({ x, y, w = 280, h = 260, rows = 4, verified = true, name = 'Aswathy Raj', seed = 1, rowClass }) {
  const rowTop = y + 96
  const gap = Math.min(34, (h - 110) / Math.max(1, rows))
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={10} fill={PAPER} seed={seed} sw={2.2} />
      <rect x={x + 2} y={y + 2} width={w - 4} height={14} rx={8} fill={TONES.blue.tint} />
      <Oval cx={x + 44} cy={y + 52} rx={24} fill={TONES.amber.tint} seed={seed + 1} sw={1.6} />
      <circle cx={x + 37} cy={y + 49} r={2} fill={INK} />
      <circle cx={x + 51} cy={y + 49} r={2} fill={INK} />
      <Ink d={`M${x + 37} ${y + 59}Q${x + 44} ${y + 65} ${x + 51} ${y + 59}`} w={1.5} />
      <Hand x={x + 80} y={y + 50} size={21} weight={700}>
        {name}
      </Hand>
      {verified ? (
        <g>
          <Tick x={x + 92} y={y + 68} s={0.6} />
          <Type x={x + 104} y={y + 73} size={12} c={INK_SOFT}>
            verified email
          </Type>
        </g>
      ) : (
        <Type x={x + 82} y={y + 73} size={12} c={INK_SOFT}>
          email not verified
        </Type>
      )}
      {Array.from({ length: rows }, (_, i) => {
        const ry = rowTop + i * gap
        return (
          <g key={i} className={rowClass} style={rowClass ? { '--i': i } : undefined}>
            <Ink d={handLine(x + 18, ry, x + w - 70 - ((i * 23) % 40), ry, seed + 10 + i, 0.4)} c={TONES.blue.ink} w={2.2} />
            <Ink d={handLine(x + 18, ry + 11, x + w - 110 - ((i * 31) % 50), ry + 11, seed + 20 + i, 0.4)} c={TEXT_LINE} w={1.6} />
            <Type x={x + w - 22} y={ry + 6} size={14} anchor="end" c={INK}>
              {[12, 7, 4, 1, 0, 0][i]}
            </Type>
          </g>
        )
      })}
    </g>
  )
}

/* A small paper, tilted, with a label under it. Anchor: centre. */
export function Paper({ x, y, tone = 'amber', label, seed = 1, r = 0 }) {
  return (
    <g transform={r ? `rotate(${r} ${x} ${y})` : undefined}>
      <Sheet x={x - 22} y={y - 28} w={44} h={56} tone={tone} lines={3} fold={10} seed={seed} sw={1.5} />
      {label ? (
        <Hand x={x} y={y + 46} size={14} anchor="middle" c={INK_SOFT}>
          {label}
        </Hand>
      ) : null}
    </g>
  )
}

/* A padlock, shackle open or shut. Anchor: centre of the body. */
export function Padlock({ x, y, open = false, tone = 'amber', seed = 1 }) {
  const shackle = open
    ? `M${x - 13} ${y - 14}V${y - 30}Q${x - 13} ${y - 46} ${x + 1} ${y - 46}Q${x + 15} ${y - 46} ${x + 15} ${y - 36}`
    : `M${x - 13} ${y - 14}V${y - 28}Q${x - 13} ${y - 44} ${x} ${y - 44}Q${x + 13} ${y - 44} ${x + 13} ${y - 28}V${y - 14}`
  return (
    <g>
      <Ink d={shackle} w={4} c={TONES.grey.deep} />
      <Box x={x - 22} y={y - 16} w={44} h={36} r={5} fill={`url(#fill-${tone})`} seed={seed} sw={1.8} />
      <circle cx={x} cy={y} r={4} fill={INK} />
      <Ink d={handLine(x, y + 2, x, y + 10, seed + 1, 0.2)} w={2.4} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. What a profile shows.
   ------------------------------------------------------------------ */

const whatCss = `
.s-gsp1-row { animation: s-gsp1-row 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-gsp1-row {
  0%, 60%, 100% { opacity: 1; }
  70% { opacity: 0.35; }
}
.s-gsp1 .chart-bar { animation: s-gsp1-grow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-gsp1-grow {
  0%, 100% { transform: scaleY(1); }
  12% { transform: scaleY(0.2); }
  35%, 90% { transform: scaleY(1); }
}
.s-gsp1-pip .pip-body { animation: s-gsp1-bob 3s ease-in-out infinite; }
@keyframes s-gsp1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function WhatScene() {
  const floor = 340
  return (
    <Scene
      w={800}
      h={320}
      top={30}
      css={whatCss}
      className="s-gsp1"
      label="A profile card with a photo, the name Aswathy Raj, a verified email tick and a list of papers with citation counts. Beside it a small table of three numbers and a bar graph of citations over time, with labels saying your papers, who cites them and three numbers"
    >
      <Floor y={floor} x1={20} x2={780} seed={101} />
      <ProfileCard x={180} y={56} w={290} h={250} rows={4} seed={102} rowClass="s-gsp1-row" />

      <Box x={500} y={70} w={170} h={104} r={8} fill={PAPER} seed={110} />
      {['citations', 'h-index', 'i10-index'].map((t, i) => (
        <g key={t}>
          <Type x={514} y={100 + i * 28} size={13} c={INK}>
            {t}
          </Type>
          <Ink d={handLine(606, 96 + i * 28, 626, 96 + i * 28, 111 + i, 0.3) + handLine(636, 96 + i * 28, 656, 96 + i * 28, 115 + i, 0.3)} c={TONES.pink.ink} w={3} />
        </g>
      ))}
      <Chart x={510} y={296} w={160} h={90} bars={[0.2, 0.35, 0.5, 0.8]} tone="blue" seed={120} />

      <Hand x={714} y={128} size={18} weight={700} c={TONES.pink.deep}>
        three
      </Hand>
      <Hand x={714} y={150} size={18} weight={700} c={TONES.pink.deep}>
        numbers
      </Hand>
      <Hand x={690} y={262} size={18} weight={700} c={TONES.blue.deep}>
        who cites,
      </Hand>
      <Hand x={690} y={284} size={18} weight={700} c={TONES.blue.deep}>
        and when
      </Hand>

      <Shadow x={92} y={floor + 2} rx={28} ry={4} />
      <Place x={92} y={floor} s={1.5}>
        <g className="s-gsp1-pip">
          <Pip mood="happy" arms="point" tone="amber" glasses look={1.5} seed={130} />
        </g>
      </Place>
      <Hand x={92} y={186} size={18} anchor="middle" weight={700} c={TONES.amber.deep}>
        your papers
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Before you start: two envelopes, a name, a few interests.
   ------------------------------------------------------------------ */

const beforeCss = `
.s-gsp2-env { animation: s-gsp2-float 4s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-gsp2-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.s-gsp2-pip .pip-arm-r { animation: s-gsp2-tap 2.4s ease-in-out infinite; }
@keyframes s-gsp2-tap {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

export function BeforeScene() {
  const floor = 330
  return (
    <Scene
      w={800}
      h={320}
      top={14}
      css={beforeCss}
      className="s-gsp2"
      label="Two envelopes, one labelled personal account with the note to sign in, and one labelled university email with the note to verify. Next to them a card with the name Aswathy Raj and A. Raj, and a sticky note of interests, while a paper character points at them"
    >
      <Floor y={floor} x1={20} x2={780} seed={201} />

      <g className="s-gsp2-env">
        <Envelope x={200} y={96} w={130} h={86} open seed={202} />
      </g>
      <Hand x={265} y={36} size={19} anchor="middle" weight={700}>
        personal account
      </Hand>
      <Hand x={265} y={214} size={18} anchor="middle" c={TONES.green.deep} weight={700}>
        sign in with this
      </Hand>

      <g className="s-gsp2-env" style={{ '--d': '-2s' }}>
        <Envelope x={370} y={96} w={130} h={86} tone="blue" seed={203} />
      </g>
      <Hand x={435} y={36} size={19} anchor="middle" weight={700}>
        university email
      </Hand>
      <Hand x={435} y={214} size={18} anchor="middle" c={TONES.blue.deep} weight={700}>
        verify with this
      </Hand>

      <Box x={540} y={84} w={200} h={88} r={8} fill={PAPER} seed={204} />
      <Hand x={556} y={114} size={16} c={INK_SOFT}>
        name on my papers
      </Hand>
      <Hand x={556} y={142} size={20} weight={700}>
        Aswathy Raj
      </Hand>
      <Hand x={680} y={142} size={16} c={INK_SOFT}>
        A. Raj
      </Hand>

      <Sticky x={560} y={200} w={160} h={84} tone="amber" lines={0} seed={205} />
      <Hand x={572} y={236} size={16} weight={700}>
        carbon dots
      </Hand>
      <Hand x={572} y={262} size={16} weight={700}>
        lead sensing
      </Hand>

      <Shadow x={100} y={floor + 2} rx={28} ry={4} />
      <Place x={100} y={floor} s={1.5}>
        <g className="s-gsp2-pip">
          <Pip mood="focused" arms="point" tone="green" look={1.5} seed={206} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The six steps, in a row of stepping stones.
   ------------------------------------------------------------------ */

const stepsCss = `
.s-gsp3-stone { animation: s-gsp3-glow 7.2s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s); }
@keyframes s-gsp3-glow {
  0%, 20%, 100% { opacity: 0; }
  6%, 14% { opacity: 1; }
}
.s-gsp3-pip .pip-body { animation: s-gsp3-hop 1.8s ease-in-out infinite; }
@keyframes s-gsp3-hop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

export function StepsScene() {
  const floor = 300
  const steps = [
    { label: 'sign in', icon: 'key' },
    { label: 'the form', icon: 'form' },
    { label: 'add papers', icon: 'papers' },
    { label: 'updates', icon: 'list' },
    { label: 'verify', icon: 'mail' },
    { label: 'go public', icon: 'flag' },
  ]
  return (
    <Scene
      w={800}
      h={210}
      top={120}
      css={stepsCss}
      className="s-gsp3"
      label="Six numbered stepping stones in a row, each with a small object above it: a key for sign in, a form, a stack of papers, a checklist for updates, an envelope to verify and a flag for go public. A paper character stands on the first stone"
    >
      <Floor y={floor + 18} x1={20} x2={780} seed={301} />
      {steps.map((st, i) => {
        const cx = 160 + i * 110
        return (
          <g key={st.label}>
            <g className="s-gsp3-stone" style={{ '--i': i }}>
              <Ink d={handEllipse(cx, floor, 46, 15, { seed: 310 + i, amp: 0.6 })} c={TONES.amber.ink} w={4} o={0.6} />
            </g>
            <Oval cx={cx} cy={floor} rx={40} ry={11} fill={TONES.grey.tint} seed={320 + i} sw={1.6} />
            <Hand x={cx} y={floor + 5} size={15} anchor="middle" weight={700}>
              {i + 1}
            </Hand>
            <Hand x={cx} y={256} size={17} anchor="middle" weight={700}>
              {st.label}
            </Hand>
            {st.icon === 'key' ? <Key x={cx - 26} y={190} s={0.8} angle={-10} seed={330} /> : null}
            {st.icon === 'form' ? <Sheet x={cx - 24} y={150} w={48} h={66} lines={4} fold={11} seed={331} /> : null}
            {st.icon === 'papers' ? <Stack x={cx} y={222} w={40} h={52} count={3} spread={8} seed={332} tones={['amber', 'paper', 'amber']} /> : null}
            {st.icon === 'list' ? <Checklist x={cx - 34} y={150} w={68} items={2} done={1} seed={333} /> : null}
            {st.icon === 'mail' ? <Envelope x={cx - 34} y={168} w={68} h={46} tone="blue" seed={334} /> : null}
            {st.icon === 'flag' ? <Flag x={cx - 14} y={226} h={70} tone="green" seed={335} /> : null}
          </g>
        )
      })}
      <Place x={62} y={floor + 12} s={1.05}>
        <g className="s-gsp3-pip">
          <Pip mood="happy" arms="wave" tone="amber" glasses look={1.5} seed={340} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Adding the right papers, throwing out the wrong ones.
   ------------------------------------------------------------------ */

const addCss = `
.s-gsp4-in { animation: s-gsp4-in 4s ease-in-out infinite; animation-delay: calc(var(--i) * -1.3s); }
@keyframes s-gsp4-in {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
.s-gsp4-out { animation: s-gsp4-out 4s ease-in-out infinite; animation-delay: calc(var(--i) * -1.3s); }
@keyframes s-gsp4-out {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  50% { transform: translateX(10px) rotate(4deg); }
}
`

export function AddScene() {
  const mine = [
    { y: 92, label: 'carbon dots' },
    { y: 184, label: 'lead sensing' },
    { y: 276, label: 'proceedings' },
  ]
  const theirs = [
    { y: 92, label: 'cardiology' },
    { y: 184, label: 'civil engg.' },
    { y: 276, label: 'economics' },
  ]
  return (
    <Scene
      w={800}
      h={340}
      top={20}
      css={addCss}
      className="s-gsp4"
      label="On the left three amber papers labelled carbon dots, lead sensing and proceedings move with arrows into a profile card in the middle. On the right three grey papers labelled cardiology, civil engineering and economics, each crossed out in red, move away from the card toward a box labelled trash"
    >
      <Hand x={90} y={46} size={20} anchor="middle" weight={700} c={TONES.amber.deep}>
        mine: add
      </Hand>
      {mine.map((p, i) => (
        <g key={p.label}>
          <Place x={0} y={0}>
            <Anim className="s-gsp4-in" style={{ '--i': i }}>
              <Paper x={90} y={p.y} tone="amber" label={p.label} seed={410 + i} />
            </Anim>
          </Place>
          <Arrow from={[130, p.y]} to={[244, 120 + i * 60]} bend={0} seed={420 + i} c={TONES.green.deep} w={2} />
        </g>
      ))}

      <ProfileCard x={256} y={60} w={270} h={250} rows={4} seed={430} />

      <Hand x={680} y={46} size={20} anchor="middle" weight={700} c={TONES.red.deep}>
        not mine: delete
      </Hand>
      {theirs.map((p, i) => (
        <g key={p.label}>
          <Arrow from={[540, 120 + i * 60]} to={[628, p.y]} bend={0} seed={440 + i} c={TONES.red.deep} w={2} dash="5 6" />
          <Place x={0} y={0}>
            <Anim className="s-gsp4-out" style={{ '--i': i }}>
              <Paper x={666} y={p.y} tone="grey" label={p.label} seed={450 + i} />
              <Cross x={666} y={p.y} s={1.4} seed={460 + i} />
            </Anim>
          </Place>
        </g>
      ))}
      <Box x={716} y={300} w={66} h={46} r={4} fill={TONES.grey.tint} seed={470} />
      <Hand x={749} y={330} size={15} anchor="middle" weight={700}>
        trash
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Public and verified: two locks, both open.
   ------------------------------------------------------------------ */

const publicCss = `
.s-gsp5-spark { animation: s-gsp5-spark 2.4s ease-in-out infinite; animation-delay: calc(var(--i) * -0.8s); }
@keyframes s-gsp5-spark {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.5); opacity: 0.4; }
}
.s-gsp5-lens { animation: s-gsp5-scan 4s ease-in-out infinite; }
@keyframes s-gsp5-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 4px); }
}
.s-gsp5-pip .pip-body { animation: s-gsp5-bob 3s ease-in-out infinite; }
@keyframes s-gsp5-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function PublicScene() {
  const floor = 330
  return (
    <Scene
      w={800}
      h={310}
      top={30}
      css={publicCss}
      className="s-gsp5"
      label="Two open padlocks labelled public and verified email lead with arrows to a search box with the name Aswathy Raj, under which her profile card now appears as the first result, while a paper character cheers"
    >
      <Floor y={floor} x1={20} x2={780} seed={501} />

      <Padlock x={110} y={140} open tone="green" seed={502} />
      <Hand x={110} y={196} size={19} anchor="middle" weight={700}>
        public
      </Hand>
      <Type x={110} y={216} size={12} anchor="middle" c={INK_SOFT}>
        box ticked
      </Type>
      <Padlock x={250} y={140} open tone="blue" seed={503} />
      <Hand x={250} y={196} size={19} anchor="middle" weight={700}>
        verified email
      </Hand>
      <Type x={250} y={216} size={12} anchor="middle" c={INK_SOFT}>
        link clicked
      </Type>
      <Arrow from={[300, 150]} to={[384, 118]} bend={-0.15} seed={504} w={2.2} />

      <Box x={396} y={84} w={300} h={44} r={22} fill={PAPER} seed={505} sw={2} />
      <Hand x={424} y={113} size={20} weight={700}>
        Aswathy Raj
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-gsp5-lens">
          <Magnifier x={672} y={104} r={13} angle={45} tone="blue" seed={506} />
        </Anim>
      </Place>

      <Box x={396} y={146} w={300} h={110} r={8} fill={TONES.green.tint} seed={507} />
      <Oval cx={432} cy={184} rx={20} fill={TONES.amber.tint} seed={508} sw={1.5} />
      <Hand x={464} y={180} size={18} weight={700}>
        Aswathy Raj
      </Hand>
      <Type x={464} y={200} size={12} c={INK_SOFT}>
        Physics, Kottayam
      </Type>
      <Tick x={680} y={176} s={1.1} />
      <Ink d={handLine(420, 226, 660, 226, 509, 0.4) + handLine(420, 242, 600, 242, 510, 0.4)} c={TEXT_LINE} w={1.8} />

      {[
        [716, 150, 8],
        [740, 200, 6],
        [380, 270, 6],
      ].map(([x, y, s], i) => (
        <g key={i} className="s-gsp5-spark" style={{ '--i': i, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Sparkle x={x} y={y} s={s} />
        </g>
      ))}

      <Shadow x={560} y={floor + 2} rx={24} ry={4} />
      <Place x={560} y={floor} s={1.2}>
        <g className="s-gsp5-pip">
          <Pip mood="grin" arms="up" tone="amber" glasses seed={511} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The numbers and the citation alert.
   ------------------------------------------------------------------ */

const metricsCss = `
.s-gsp6 .chart-bar { animation: s-gsp6-grow 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-gsp6-grow {
  0%, 100% { transform: scaleY(1); }
  12% { transform: scaleY(0.2); }
  35%, 90% { transform: scaleY(1); }
}
.s-gsp6-mail { animation: s-gsp6-fly 5s ease-in-out infinite; }
@keyframes s-gsp6-fly {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-12px, -8px) rotate(-4deg); }
}
`

export function MetricsScene() {
  return (
    <Scene
      w={800}
      h={300}
      top={30}
      css={metricsCss}
      className="s-gsp6"
      label="A table with rows for citations, h-index and i10-index and two columns, All and Recent, next to a bar chart of citations rising over the years, and an envelope labelled new citation flying in with a sparkle"
    >
      <Box x={60} y={70} w={290} h={176} r={8} fill={PAPER} seed={601} sw={2} />
      <Type x={226} y={100} size={14} anchor="middle" c={INK_SOFT} weight={700}>
        All
      </Type>
      <Type x={300} y={100} size={14} anchor="middle" c={INK_SOFT} weight={700}>
        Recent
      </Type>
      <Ink d={handLine(70, 112, 340, 112, 602, 0.4)} c={INK_SOFT} w={1.4} />
      {['citations', 'h-index', 'i10-index'].map((t, i) => (
        <g key={t}>
          <Hand x={80} y={148 + i * 38} size={19} weight={700}>
            {t}
          </Hand>
          <Oval cx={226} cy={142 + i * 38} rx={18} ry={11} fill={TONES.pink.tint} seed={610 + i} sw={1.3} />
          <Oval cx={300} cy={142 + i * 38} rx={18} ry={11} fill={TONES.blue.tint} seed={620 + i} sw={1.3} />
        </g>
      ))}

      <Chart x={400} y={256} w={220} h={160} bars={[0.12, 0.25, 0.4, 0.62, 0.86]} tone="blue" seed={630} />
      <Type x={510} y={278} size={13} anchor="middle" c={INK_SOFT}>
        citations each year
      </Type>

      <Place x={0} y={0}>
        <Anim className="s-gsp6-mail">
          <Envelope x={652} y={96} w={96} h={64} tone="amber" seed={640} />
          <Sparkle x={752} y={88} s={9} />
        </Anim>
      </Place>
      <Hand x={700} y={190} size={18} anchor="middle" weight={700} c={TONES.amber.deep}>
        new citation!
      </Hand>
      <Type x={700} y={212} size={12} anchor="middle" c={INK_SOFT}>
        Follow, then alerts
      </Type>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Keeping it clean: a monthly check with a magnifier and a pencil.
   ------------------------------------------------------------------ */

const tidyCss = `
.s-gsp7-lens { animation: s-gsp7-scan 5s ease-in-out infinite; }
@keyframes s-gsp7-scan {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(70px); }
}
.s-gsp7-strike { animation: s-gsp7-strike 5s ease-in-out infinite; }
@keyframes s-gsp7-strike {
  0%, 100% { stroke-dashoffset: 0; }
  40% { stroke-dashoffset: 1; }
  60%, 90% { stroke-dashoffset: 0; }
}
.s-gsp7-pip .pip-arm-r { animation: s-gsp7-write 1.6s ease-in-out infinite; }
@keyframes s-gsp7-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

export function TidyScene() {
  const floor = 330
  return (
    <Scene
      w={800}
      h={310}
      top={30}
      css={tidyCss}
      className="s-gsp7"
      label="A calendar page marked monthly check hangs beside a profile card. A magnifying glass moves down the list of papers and one row that is not hers is struck through in red, while a paper character writes with a pencil and a note says homepage: ORCID link"
    >
      <Floor y={floor} x1={20} x2={780} seed={701} />
      <Calendar x={60} y={70} w={96} h={104} day="1" month="MONTHLY" tone="green" seed={702} />
      <Hand x={108} y={206} size={17} anchor="middle" weight={700}>
        monthly check
      </Hand>

      <ProfileCard x={230} y={50} w={300} h={260} rows={5} seed={710} />
      <path
        d="M244 207L470 207"
        stroke={TONES.red.ink}
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        className="s-gsp7-strike"
      />
      <Place x={0} y={0}>
        <Anim className="s-gsp7-lens">
          <Magnifier x={552} y={150} r={22} angle={40} tone="amber" seed={720} />
        </Anim>
      </Place>

      <Sticky x={600} y={56} w={150} h={70} tone="green" lines={0} seed={730} />
      <Hand x={614} y={86} size={15} weight={700}>
        homepage:
      </Hand>
      <Hand x={614} y={110} size={15} weight={700}>
        ORCID link
      </Hand>

      <Shadow x={680} y={floor + 2} rx={24} ry={4} />
      <Place x={680} y={floor} s={1.15}>
        <g className="s-gsp7-pip">
          <Pip mood="focused" arms="write" tone="amber" glasses look={-1.5} seed={740}>
            <Pencil x={26} y={-14} length={34} angle={-60} tone="blue" seed={741} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
