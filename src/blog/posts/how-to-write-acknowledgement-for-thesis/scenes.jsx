import {
  Anim,
  Arrow,
  Cross,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
  handPoly,
} from '../../ink/index.js'
import { Butterfly, Heart } from './hero.jsx'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6, o }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} o={o} />
}

/* ------------------------------------------------------------------
   1. One page that names the people behind the work.
   ------------------------------------------------------------------ */

const whatCss = `
.s-ak1-heart { animation: s-ak1-beat 3s ease-in-out infinite; animation-delay: calc(var(--i) * -1s); }
.s-ak1-reader .pip-body { animation: s-ak1-lean 4s ease-in-out infinite; }
@keyframes s-ak1-beat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.25); }
  30% { transform: scale(1); }
}
@keyframes s-ak1-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

const ROWS = [
  { label: 'who guided you', tone: 'blue' },
  { label: 'who paid for it', tone: 'green' },
  { label: 'who helped', tone: 'amber' },
]

export function WhatScene() {
  const x = 250
  const y = 34
  return (
    <Scene w={800} h={320} top={20} css={whatCss} className="s-ak1" label="A page titled acknowledgement lists three kinds of thanks, who guided you, who paid for it and who helped, each with a beating heart, while a paper character in glasses reads it">
      <Floor y={330} x1={30} x2={770} seed={101} />
      <Sheet x={x} y={y} w={300} h={290} lines={0} fold={22} seed={102} sw={2} />
      <Hand x={x + 24} y={y + 44} size={26} weight={700}>
        acknowledgement
      </Hand>
      <Ink d={handLine(x + 24, y + 54, x + 230, y + 54, 103, 0.3)} c={TONES.pink.ink} w={2} />
      {ROWS.map((r, i) => {
        const ry = y + 96 + i * 66
        return (
          <g key={r.label}>
            <Place x={x + 40} y={ry}>
              <Anim className="s-ak1-heart" spin style={{ '--i': i }}>
                <Heart s={1.2} tone={r.tone} />
              </Anim>
            </Place>
            <Hand x={x + 66} y={ry + 7} size={21} weight={700}>
              {r.label}
            </Hand>
            <Lines x={x + 66} y={ry + 24} rows={[190, 140]} gap={10} seed={110 + i * 5} />
          </g>
        )
      })}
      <Shadow x={680} y={332} rx={34} ry={4} />
      <Place x={680} y={330} s={1.55} flip>
        <g className="s-ak1-reader">
          <Pip mood="happy" arms="hold" tone="blue" glasses look={1.6} seed={120} />
        </g>
      </Place>
      <Shadow x={130} y={332} rx={34} ry={4} />
      <Place x={130} y={330} s={1.55}>
        <Pip mood="proud" arms="hips" tone="amber" seed={125} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The front matter, in order, with the acknowledgement among it.
   ------------------------------------------------------------------ */

const placeCss = `
.s-ak2-mine { animation: s-ak2-lift 5s ease-in-out infinite; }
@keyframes s-ak2-lift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
`

const PAGES = ['title page', 'declaration', 'certificate', 'acknowledgement', 'abstract', 'contents', 'chapter 1']

export function PlaceScene() {
  const floor = 320
  return (
    <Scene w={800} h={300} top={30} css={placeCss} className="s-ak2" label="Seven pages stand in a row, title page, declaration, certificate, acknowledgement, abstract, contents and chapter 1, with the pink acknowledgement page lifted a little and a ruler beside it marked one page">
      <Floor y={floor} x1={20} x2={780} seed={201} />
      {PAGES.map((p, i) => {
        const px = 30 + i * 104
        const mine = p === 'acknowledgement'
        const sheet = (
          <g>
            <Sheet x={px} y={120} w={90} h={190} tone={mine ? 'pink' : 'paper'} lines={0} fold={14} seed={210 + i} sw={mine ? 2.2 : 1.6} />
            <Lines x={px + 12} y={200} rows={[60, 52, 64, 40, 56, 48]} gap={12} seed={220 + i * 7} c={mine ? TONES.pink.deep : TEXT_LINE} o={mine ? 0.5 : 1} />
          </g>
        )
        return (
          <g key={p}>
            {mine ? (
              <Anim className="s-ak2-mine">{sheet}</Anim>
            ) : (
              sheet
            )}
            <Hand x={px + 45} y={i % 2 ? 106 : 88} size={mine ? 19 : 16} anchor="middle" weight={mine ? 700 : 400} c={mine ? TONES.pink.deep : INK_SOFT}>
              {p}
            </Hand>
          </g>
        )
      })}
      <Arrow from={[30, 60]} to={[420, 60]} bend={0} seed={240} c={INK_SOFT} dash="5 6" />
      <Hand x={30} y={50} size={18} c={INK_SOFT}>
        front matter, in your university&apos;s order
      </Hand>
      <Sparkle x={450} y={140} s={9} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The order of thanks, from academic to personal.
   ------------------------------------------------------------------ */

const STEPS = [
  { label: 'supervisor', tone: 'blue' },
  { label: 'committee', tone: 'pink' },
  { label: 'funding', tone: 'green' },
  { label: 'helpers', tone: 'amber' },
  { label: 'family', tone: 'red' },
]

const orderCss = `
.s-ak3-step { animation: s-ak3-in 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s - 8s); }
.s-ak3-walker .pip-body { animation: s-ak3-bob 2s ease-in-out infinite; }
@keyframes s-ak3-in {
  0%, 2% { transform: translateX(-30px); opacity: 0; }
  8%, 84% { transform: translateX(0); opacity: 1; }
  92%, 100% { transform: translateX(0); opacity: 0; }
}
@keyframes s-ak3-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function OrderScene() {
  return (
    <Scene w={800} h={330} top={20} css={orderCss} className="s-ak3" label="Five steps go down like a staircase, labelled supervisor, committee, funding, helpers and family, with an arrow running from academic at the top to personal at the bottom">
      <Floor y={340} x1={30} x2={770} seed={301} />
      {STEPS.map((s, i) => {
        const sx = 190 + i * 70
        const sy = 50 + i * 56
        return (
          <g key={s.label} className="s-ak3-step" style={{ '--i': i }}>
            <path d={`M${sx} ${sy}h200v44h-200Z`} fill={`url(#fill-${s.tone})`} />
            <Ink d={handPoly([[sx, sy], [sx + 200, sy], [sx + 200, sy + 44], [sx, sy + 44]], { seed: 310 + i, amp: 0.4, closed: true })} w={1.7} c={TONES[s.tone].deep} />
            <Type x={sx + 18} y={sy + 29} size={15} weight={700}>
              {i + 1}
            </Type>
            <Hand x={sx + 44} y={sy + 30} size={22} weight={700}>
              {s.label}
            </Hand>
          </g>
        )
      })}
      <Arrow from={[150, 60]} to={[150, 300]} bend={0} seed={330} c={INK_SOFT} w={1.8} />
      <Hand x={140} y={44} size={18} anchor="end" c={INK_SOFT}>
        academic
      </Hand>
      <Hand x={140} y={322} size={18} anchor="end" c={INK_SOFT}>
        personal
      </Hand>
      <Shadow x={730} y={342} rx={32} ry={4} />
      <Place x={730} y={340} s={1.45} flip>
        <g className="s-ak3-walker">
          <Pip mood="happy" arms="point" tone="amber" look={1.6} seed={340} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The award letter, read for the exact name and number.
   ------------------------------------------------------------------ */

const fundingCss = `
.s-ak4-lens { animation: s-ak4-scan 6s ease-in-out infinite; }
.s-ak4-line { animation: s-ak4-draw 6s ease-out infinite; }
@keyframes s-ak4-scan {
  0%, 100% { transform: translate(0, 0); }
  40% { transform: translate(0, 42px); }
  70% { transform: translate(60px, 42px); }
}
@keyframes s-ak4-draw {
  0%, 30% { transform: scaleX(0); }
  50%, 90% { transform: scaleX(1); }
  100% { transform: scaleX(0); }
}
`

export function FundingScene() {
  return (
    <Scene w={800} h={320} top={20} css={fundingCss} className="s-ak4" label="An award letter reading fellowship, scheme and reference number is read with a magnifying glass, and an arrow carries those details into a line on the acknowledgement page">
      <Floor y={330} x1={30} x2={770} seed={401} />
      <Envelope x={60} y={250} w={90} h={60} open seed={402} />
      <Sheet x={110} y={40} w={250} h={260} lines={0} fold={20} seed={403} sw={2} />
      <Type x={130} y={78} size={18} weight={700}>
        AWARD LETTER
      </Type>
      <Ink d={handLine(130, 88, 330, 88, 404, 0.3)} c={TONES.green.ink} w={1.8} />
      {['fellowship: JRF', 'scheme: [name]', 'ref. no: [number]'].map((t, i) => (
        <Hand key={t} x={132} y={130 + i * 42} size={20} weight={700}>
          {t}
        </Hand>
      ))}
      <Lines x={132} y={256} rows={[180, 150]} gap={12} seed={410} />
      <Place x={0} y={0}>
        <Anim className="s-ak4-lens">
          <Magnifier x={300} y={124} r={24} angle={50} tone="amber" seed={420} />
        </Anim>
      </Place>

      <Arrow from={[372, 170]} to={[470, 170]} bend={-0.2} seed={430} c={INK_SOFT} />

      <Sheet x={480} y={60} w={240} h={230} tone="pink" lines={0} fold={18} seed={440} sw={2} />
      <Hand x={500} y={98} size={20} weight={700}>
        acknowledgement
      </Hand>
      <Lines x={500} y={124} rows={[180, 150]} gap={12} seed={441} c={TONES.pink.deep} o={0.5} />
      <Anim className="s-ak4-line" origin={[500, 168]}>
        <Ink d={handLine(500, 168, 690, 168, 442, 0.3) + handLine(500, 180, 640, 180, 443, 0.3)} c={TONES.green.deep} w={2.6} />
      </Anim>
      <Hand x={500} y={210} size={16} c={TONES.green.deep} weight={700}>
        funder named exactly
      </Hand>
      <Lines x={500} y={236} rows={[170, 120]} gap={12} seed={444} c={TONES.pink.deep} o={0.5} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. One page in her own words, signed at the end.
   ------------------------------------------------------------------ */

const sampleCss = `
.s-ak5-pencil { animation: s-ak5-write 6s ease-in-out infinite; }
.s-ak5-fly { animation: s-ak5-drift 7s ease-in-out infinite; }
.s-ak5 .s-ak0-wing { animation: s-ak5-flap 0.5s ease-in-out infinite alternate; }
@keyframes s-ak5-write {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-70px, 4px); }
  50% { transform: translate(-20px, 40px); }
  75% { transform: translate(-90px, 44px); }
}
@keyframes s-ak5-drift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-40px, -20px); }
}
@keyframes s-ak5-flap {
  from { transform: scaleX(1); }
  to { transform: scaleX(0.4); }
}
`

export function SampleScene() {
  const x = 230
  const y = 30
  const paras = [
    { label: 'supervisor', rows: [210, 200, 120] },
    { label: 'committee', rows: [200, 90] },
    { label: 'funding', rows: [214, 160] },
    { label: 'field help', rows: [206, 180] },
    { label: 'family', rows: [190, 110] },
  ]
  return (
    <Scene w={800} h={360} top={16} css={sampleCss} className="s-ak5" label="A single page titled acknowledgement with five short paragraphs labelled supervisor, committee, funding, field help and family, signed Bhavna at the bottom, while a pencil writes and a butterfly rests nearby">
      <Floor y={360} x1={30} x2={770} seed={501} />
      <Sheet x={x} y={y} w={300} h={326} lines={0} fold={22} seed={502} sw={2} />
      <Hand x={x + 22} y={y + 40} size={22} weight={700}>
        acknowledgement
      </Hand>
      {paras.map((p, i) => {
        const py = y + 66 + i * 50
        return (
          <g key={p.label}>
            <Hand x={x + 22} y={py + 4} size={14} c={TONES.green.deep} weight={700}>
              {p.label}
            </Hand>
            <Lines x={x + 22} y={py + 16} rows={p.rows} gap={10} seed={510 + i * 4} />
          </g>
        )
      })}
      <Hand x={x + 200} y={y + 314} size={22} c={TONES.blue.deep} weight={700}>
        Bhavna
      </Hand>
      <Place x={x + 260} y={y + 110}>
        <Anim className="s-ak5-pencil">
          <Pencil x={0} y={0} length={100} angle={-40} tone="amber" seed={530} />
        </Anim>
      </Place>
      <Place x={650} y={150}>
        <Anim className="s-ak5-fly">
          <Place s={1.6}>
            <Butterfly tone="blue" />
          </Place>
        </Anim>
      </Place>
      <Hand x={650} y={230} size={18} anchor="middle" c={INK_SOFT}>
        one page, her words
      </Hand>
      <Shadow x={130} y={362} rx={34} ry={4} />
      <Place x={130} y={360} s={1.6}>
        <Pip mood="focused" arms="write" tone="amber" look={1.6} seed={540} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The copied three-page draft out; the honest page in.
   ------------------------------------------------------------------ */

const mistakesCss = `
.s-ak6-bad { animation: s-ak6-shake 5s ease-in-out infinite; }
.s-ak6-good { animation: s-ak6-float 5s ease-in-out infinite; }
@keyframes s-ak6-shake {
  0%, 40%, 60%, 100% { transform: rotate(0deg); }
  45% { transform: rotate(-3deg); }
  55% { transform: rotate(3deg); }
}
@keyframes s-ak6-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

export function MistakesScene() {
  return (
    <Scene w={800} h={320} top={20} css={mistakesCss} className="s-ak6" label="On the left three overlapping pages marked copied and no funder are crossed out in red; on the right one neat pink page with the funder named is ticked in green">
      <Floor y={330} x1={30} x2={770} seed={601} />
      <Anim className="s-ak6-bad" origin={[220, 320]}>
        {[0, 1, 2].map((i) => (
          <Sheet key={i} x={90 + i * 26} y={50 + i * 18} w={190} h={250} lines={0} fold={16} seed={610 + i} sw={1.7} />
        ))}
        <Lines x={160} y={120} rows={[150, 140, 160, 130, 150, 120, 140, 100]} gap={14} seed={620} />
        <Type x={160} y={260} size={16} c={TONES.red.deep} weight={700}>
          COPIED
        </Type>
        <Hand x={160} y={290} size={18} c={TONES.red.deep} weight={700}>
          no funder?
        </Hand>
      </Anim>
      <Place x={300} y={86}>
        <Cross x={0} y={0} s={2.4} w={3.6} seed={630} />
      </Place>

      <Anim className="s-ak6-good">
        <Sheet x={470} y={50} w={220} h={250} tone="pink" lines={0} fold={18} seed={640} sw={2} />
        <Hand x={490} y={88} size={19} weight={700}>
          acknowledgement
        </Hand>
        <Lines x={490} y={112} rows={[170, 150, 120]} gap={11} seed={641} c={TONES.pink.deep} o={0.6} />
        <path d="M486 160h180v34h-180Z" fill={PAPER} />
        <Ink d={handPoly([[486, 160], [666, 160], [666, 194], [486, 194]], { seed: 642, amp: 0.3, closed: true })} w={1.3} c={TONES.green.deep} />
        <Hand x={496} y={183} size={15} c={TONES.green.deep} weight={700}>
          funder + ref. no.
        </Hand>
        <Lines x={490} y={214} rows={[160, 120, 140]} gap={11} seed={643} c={TONES.pink.deep} o={0.6} />
      </Anim>
      <Place x={680} y={70}>
        <Tick x={0} y={0} s={2} w={3.6} />
      </Place>
      <Sparkle x={730} y={150} s={9} />
    </Scene>
  )
}
