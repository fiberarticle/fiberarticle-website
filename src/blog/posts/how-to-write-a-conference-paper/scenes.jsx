import {
  Anim,
  Arrow,
  Box,
  Calendar,
  Chart,
  Cross,
  Floor,
  Funnel,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  PAPER,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Book,
  Sparkle,
  Speech,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
  laptopScreen,
  rng,
} from '../../ink/index.js'

/*
 * A two-column conference paper, seen flat: a title bar across the top, then
 * two columns of text lines, with a small figure in the right column when
 * `figure` is set. Anchor: top-left.
 */
export function TwoColPaper({ x, y, w = 150, h = 200, seed = 1, figure = true, tone = 'blue', sw = 1.8 }) {
  const r = rng(seed)
  const pad = w * 0.08
  const colGap = w * 0.06
  const colW = (w - pad * 2 - colGap) / 2
  const top = y + h * 0.2
  const step = Math.max(6, h * 0.045)
  const figTop = y + h * 0.5
  const figH = h * 0.2
  let text = ''
  for (let c = 0; c < 2; c++) {
    const cx = x + pad + c * (colW + colGap)
    for (let ly = top; ly < y + h - pad; ly += step) {
      if (figure && c === 1 && ly > figTop - step * 0.5 && ly < figTop + figH + step * 0.5) continue
      const len = colW * (0.75 + r() * 0.25)
      text += handLine(cx, ly, cx + len, ly, seed + Math.round(ly), 0.2)
    }
  }
  const fx = x + pad + colW + colGap
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} fill={PAPER} seed={seed} sw={sw} />
      <Ink d={handLine(x + w * 0.2, y + h * 0.07, x + w * 0.8, y + h * 0.07, seed + 2, 0.3)} c={INK} w={2.6} />
      <Ink d={handLine(x + w * 0.32, y + h * 0.12, x + w * 0.68, y + h * 0.12, seed + 3, 0.3)} c={INK_SOFT} w={1.4} />
      <Ink d={text} c={TEXT_LINE} w={1.5} />
      {figure ? (
        <g>
          <rect x={fx} y={figTop} width={colW} height={figH} fill={TONES[tone].tint} />
          {[0.35, 0.6, 0.85].map((v, i) => (
            <rect key={i} x={fx + colW * (0.18 + i * 0.26)} y={figTop + figH * (1 - v * 0.85)} width={colW * 0.16} height={figH * v * 0.85} fill={TONES[tone].mid} />
          ))}
          <Ink d={handLine(fx, figTop + figH, fx + colW, figTop + figH, seed + 5, 0.2)} w={1.2} />
        </g>
      ) : null}
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Four kinds of conference paper, from long to short.
   ------------------------------------------------------------------ */

const typesCss = `
.s-hcp1-card { animation: s-hcp1-lift 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s); }
@keyframes s-hcp1-lift {
  0%, 24%, 100% { transform: translateY(0); }
  10% { transform: translateY(-10px); }
}
.s-hcp1-pip .pip-arm-r { animation: s-hcp1-point 2.8s ease-in-out infinite; }
@keyframes s-hcp1-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

export function TypesScene() {
  const floor = 330
  const kinds = [
    { label: 'full paper', sub: '6 to 10 pages', n: 4, tone: 'blue' },
    { label: 'short paper', sub: '2 to 4 pages', n: 2, tone: 'green' },
    { label: 'poster', sub: 'one board', n: 0, tone: 'amber' },
    { label: 'extended abstract', sub: 'a few pages', n: 1, tone: 'pink' },
  ]
  return (
    <Scene
      w={800}
      h={310}
      top={36}
      css={typesCss}
      className="s-hcp1"
      label="Four kinds of conference paper in a row: a full paper of four stacked two-column pages, a short paper of two pages, a poster on a board and an extended abstract of one page. A paper character points at the row"
    >
      <Floor y={floor} x1={20} x2={780} seed={101} />
      <Shadow x={70} y={floor + 2} rx={24} ry={4} />
      <Place x={70} y={floor} s={1.4}>
        <g className="s-hcp1-pip">
          <Pip mood="happy" arms="point" tone="green" look={1.5} seed={102} />
        </g>
      </Place>
      {kinds.map((k, i) => {
        const cx = 210 + i * 160
        return (
          <g key={k.label} className="s-hcp1-card" style={{ '--i': i }}>
            {k.n > 0 ? (
              Array.from({ length: k.n }, (_, j) => (
                <TwoColPaper
                  key={j}
                  x={cx - 46 + (k.n - 1 - j) * 8}
                  y={110 + (k.n - 1 - j) * -8 + 40}
                  w={92}
                  h={124}
                  seed={110 + i * 10 + j}
                  figure={j === 0}
                  tone={k.tone}
                  sw={1.5}
                />
              ))
            ) : (
              <g>
                <Box x={cx - 58} y={110} w={116} h={150} fill={TONES.amber.tint} seed={150} sw={1.8} />
                <Ink d={handLine(cx - 40, 128, cx + 40, 128, 151, 0.3)} c={INK} w={2.4} />
                <Chart x={cx - 44} y={200} w={56} h={50} bars={[0.4, 0.7, 0.9]} tone="amber" seed={152} />
                <Ink d={handLine(cx + 20, 160, cx + 48, 160, 153, 0.3) + handLine(cx + 20, 174, cx + 44, 174, 154, 0.3) + handLine(cx + 20, 188, cx + 48, 188, 155, 0.3)} c={TEXT_LINE} w={2} />
                <Ink d={handLine(cx - 40, 260, cx - 50, floor, 156, 0.3) + handLine(cx + 40, 260, cx + 50, floor, 157, 0.3)} c={TONES.brown.deep} w={2.2} />
              </g>
            )}
          </g>
        )
      })}
      {kinds.map((k, i) => (
        <g key={`l${i}`}>
          <Hand x={210 + i * 160} y={88} size={20} anchor="middle" weight={700} c={TONES[k.tone].deep}>
            {k.label}
          </Hand>
          {k.n > 0 ? (
            <Hand x={210 + i * 160} y={300} size={16} anchor="middle" c={INK_SOFT}>
              {k.sub}
            </Hand>
          ) : null}
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The call for papers, read with a magnifier, and the conference checked.
   ------------------------------------------------------------------ */

const callCss = `
.s-hcp2-lens { animation: s-hcp2-sweep 5s ease-in-out infinite; }
@keyframes s-hcp2-sweep {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-12px, 56px); }
}
.s-hcp2-tick { animation: s-hcp2-tick 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-hcp2-tick {
  0%, 100% { opacity: 1; }
  10% { opacity: 0; }
  30% { opacity: 1; }
}
.s-hcp2-pip .pip-body { animation: s-hcp2-lean 3.4s ease-in-out infinite; }
@keyframes s-hcp2-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
`

export function CallScene() {
  const floor = 340
  const asks = ['think', 'check', 'attend']
  return (
    <Scene
      w={800}
      h={320}
      top={36}
      css={callCss}
      className="s-hcp2"
      label="A paper character reads a call for papers through a magnifying glass. The sheet lists page limit, template, review and deadline, with ticks, beside a calendar for the deadline. On the right, three words with ticks: think, check, attend"
    >
      <Floor y={floor} x1={20} x2={780} seed={201} />

      <Shadow x={80} y={floor + 2} rx={26} ry={4} />
      <Place x={80} y={floor} s={1.5}>
        <g className="s-hcp2-pip">
          <Pip mood="focused" arms="think" tone="green" look={1.5} glasses seed={202} />
        </g>
      </Place>

      <Box x={170} y={78} w={190} h={164} r={4} fill={PAPER} seed={203} />
      <rect x={247} y={71} width="36" height="14" rx="3" fill={TONES.grey.mid} />
      {['page limit', 'template', 'review type', 'deadlines', 'proceedings'].map((t, i) => (
        <g key={t}>
          <Box x={184} y={98 + i * 28} w={15} h={15} fill={PAPER} seed={210 + i} sw={1.4} />
          <g className="s-hcp2-tick" style={{ '--i': i }}>
            <Tick x={192} y={105 + i * 28} s={0.75} />
          </g>
          <Hand x={210} y={111 + i * 28} size={16} c={INK}>
            {t}
          </Hand>
        </g>
      ))}
      <Hand x={265} y={62} size={22} anchor="middle" weight={700} c={TONES.blue.deep}>
        call for papers
      </Hand>
      <Place x={330} y={110}>
        <Anim className="s-hcp2-lens" origin={[0, 0]}>
          <Magnifier x={0} y={0} r={26} angle={45} tone="amber" seed={204} />
        </Anim>
      </Place>

      <Calendar x={410} y={170} w={84} h={90} day="15" month="SEP" tone="red" seed={205} />
      <Hand x={452} y={160} size={17} anchor="middle" weight={700} c={TONES.red.deep}>
        deadline
      </Hand>

      <Ink d={handLine(540, 70, 540, floor, 206, 0.6)} c={INK_SOFT} w={1.3} dash="5 7" />
      <Hand x={660} y={84} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
        is it genuine?
      </Hand>
      {asks.map((t, i) => (
        <g key={t}>
          <Hand x={600} y={140 + i * 56} size={26} weight={700} c={INK}>
            {t}
          </Hand>
          <Tick x={736} y={130 + i * 56} s={1.3} />
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The whole dissertation into a funnel, one idea out.
   ------------------------------------------------------------------ */

const contribCss = `
.s-hcp3-drop { animation: s-hcp3-drop 4.5s ease-in infinite; animation-delay: calc(var(--i) * -1.5s); opacity: 0; }
@keyframes s-hcp3-drop {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  70% { opacity: 1; }
  85%, 100% { transform: translate(var(--dx), 120px) rotate(20deg); opacity: 0; }
}
.s-hcp3-note { animation: s-hcp3-pop 4.5s ease-in-out infinite; }
@keyframes s-hcp3-pop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.s-hcp3-pip .pip-body { animation: s-hcp3-hop 2.6s ease-in-out infinite; }
@keyframes s-hcp3-hop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function ContributionScene() {
  const floor = 340
  const parts = ['review', 'survey', 'sensors', 'model']
  return (
    <Scene
      w={800}
      h={320}
      top={36}
      css={contribCss}
      className="s-hcp3"
      label="A tall pile of dissertation pages on the left. Pages labelled review, survey, sensors and model drop into a funnel, and out of the bottom comes one sticky note that says one idea. A happy paper character stands beside it"
    >
      <Floor y={floor} x1={20} x2={780} seed={301} />

      <Pile x={110} y={floor} w={120} count={22} seed={302} />
      <Hand x={110} y={210} size={20} anchor="middle" weight={700} c={TONES.red.deep}>
        dissertation
      </Hand>

      {parts.map((p, i) => (
        <g key={p}>
          <Sheet x={230 + i * 66} y={70} w={52} h={62} lines={3} fold={10} seed={310 + i} sw={1.4} />
          <Hand x={256 + i * 66} y={58} size={15} anchor="middle" c={INK_SOFT}>
            {p}
          </Hand>
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} className="s-hcp3-drop" style={{ '--i': i, '--dx': `${(1 - i) * 18}px`, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Sheet x={340 + (i - 1) * 30} y={100} w={30} h={36} lines={2} fold={7} seed={320 + i} sw={1.2} />
        </g>
      ))}

      <Funnel x={360} y={170} w={170} h={110} tone="blue" seed={330} />

      <Place x={0} y={0}>
        <Anim className="s-hcp3-note" origin={[360, 300]}>
          <Sticky x={310} y={284} w={100} h={46} tone="amber" lines={0} seed={331} />
          <Hand x={360} y={314} size={19} anchor="middle" weight={700}>
            one idea
          </Hand>
        </Anim>
      </Place>

      <Speech x={520} y={110} w={220} h={78} tx={600} ty={230} seed={332} tone="paper">
        <Hand x={630} y={142} size={17} anchor="middle" c={INK}>
          cheap sensors, corrected,
        </Hand>
        <Hand x={630} y={166} size={17} anchor="middle" c={INK}>
          can warn the villages
        </Hand>
      </Speech>
      <Shadow x={620} y={floor + 2} rx={26} ry={4} />
      <Place x={620} y={floor} s={1.5}>
        <g className="s-hcp3-pip">
          <Pip mood="grin" arms="up" tone="green" look={-1.5} seed={333} />
        </g>
      </Place>
      <Sparkle x={460} y={300} s={9} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The format: the parts of a paper laid out in two columns.
   ------------------------------------------------------------------ */

const formatCss = `
.s-hcp4-band { animation: s-hcp4-glow 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
@keyframes s-hcp4-glow {
  0%, 18%, 100% { opacity: 0.55; }
  8% { opacity: 1; }
}
.s-hcp4-pip .pip-arm-r { animation: s-hcp4-wave 3s ease-in-out infinite; }
@keyframes s-hcp4-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
`

export function FormatScene() {
  const floor = 350
  const x = 300
  const y = 40
  const w = 220
  const h = 290
  const colW = 92
  const left = x + 14
  const right = x + 14 + colW + 8
  const bands = [
    { label: 'title', x: x + 30, y: y + 12, w: w - 60, h: 18, tone: 'grey', side: 'l', ly: y + 24 },
    { label: 'abstract', x: x + 24, y: y + 38, w: w - 48, h: 30, tone: 'pink', side: 'l', ly: y + 58 },
    { label: 'introduction', x: left, y: y + 78, w: colW, h: 56, tone: 'amber', side: 'l', ly: y + 110 },
    { label: 'method', x: left, y: y + 142, w: colW, h: 132, tone: 'blue', side: 'l', ly: y + 210 },
    { label: 'results and discussion', x: right, y: y + 78, w: colW, h: 132, tone: 'green', side: 'r', ly: y + 140 },
    { label: 'conclusion', x: right, y: y + 218, w: colW, h: 26, tone: 'red', side: 'r', ly: y + 234 },
    { label: 'references', x: right, y: y + 252, w: colW, h: 26, tone: 'grey', side: 'r', ly: y + 268 },
  ]
  return (
    <Scene
      w={800}
      h={330}
      top={30}
      css={formatCss}
      className="s-hcp4"
      label="A two-column conference paper with each part shaded and labelled: title and abstract across the top, then introduction and method in the left column, and results and discussion, conclusion and references in the right column. A paper character points at it"
    >
      <Floor y={floor} x1={20} x2={780} seed={401} />
      <Box x={x} y={y} w={w} h={h} fill={PAPER} seed={402} sw={2} />
      {bands.map((b, i) => (
        <g key={b.label}>
          <g className="s-hcp4-band" style={{ '--i': i }}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={3} fill={`url(#fill-${b.tone})`} />
          </g>
          <Ink d={handLine(b.x + 6, b.y + b.h / 2, b.x + b.w - 8, b.y + b.h / 2, 410 + i, 0.2)} c={TONES[b.tone].deep} w={1.3} o={0.6} />
          {b.side === 'l' ? (
            <g>
              <Ink d={handLine(x - 12, b.ly - 6, b.x - 4, b.y + b.h / 2, 420 + i, 0.3)} c={INK_SOFT} w={1.2} />
              <Hand x={x - 18} y={b.ly} size={17} anchor="end" weight={700} c={TONES[b.tone].deep}>
                {b.label}
              </Hand>
            </g>
          ) : (
            <g>
              <Ink d={handLine(b.x + b.w + 4, b.y + b.h / 2, x + w + 12, b.ly - 6, 430 + i, 0.3)} c={INK_SOFT} w={1.2} />
              <Hand x={x + w + 18} y={b.ly} size={17} weight={700} c={TONES[b.tone].deep}>
                {b.label}
              </Hand>
            </g>
          )}
        </g>
      ))}
      <Hand x={x + w + 18} y={y + 164} size={15} c={INK_SOFT}>
        most of the pages
      </Hand>
      <Shadow x={90} y={floor + 2} rx={24} ry={4} />
      <Place x={90} y={floor} s={1.4}>
        <g className="s-hcp4-pip">
          <Pip mood="happy" arms="point" tone="green" look={1.5} seed={440} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Fifteen pages against a limit of twelve, and the name blacked out.
   ------------------------------------------------------------------ */

const templateCss = `
.s-hcp5-over { animation: s-hcp5-shake 2.6s ease-in-out infinite; }
@keyframes s-hcp5-shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
}
.s-hcp5-stamp { animation: s-hcp5-stamp 4s ease-in-out infinite; }
@keyframes s-hcp5-stamp {
  0%, 100% { transform: scale(1); }
  8% { transform: scale(1.12); }
  16% { transform: scale(1); }
}
.s-hcp5-pip .pip-arm-r { animation: s-hcp5-snip 1.8s ease-in-out infinite; }
@keyframes s-hcp5-snip {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

export function TemplateScene() {
  const floor = 340
  const pw = 34
  const ph = 46
  const pages = Array.from({ length: 15 }, (_, i) => ({ i, col: i % 5, row: Math.floor(i / 5) }))
  return (
    <Scene
      w={800}
      h={320}
      top={36}
      css={templateCss}
      className="s-hcp5"
      label="Fifteen small two-column pages in three rows. The first twelve fit inside a dashed line marked limit 12 pages, and the last three are crossed out in red. On the right, the first page of a paper has the author name blacked out and a stamp that says anonymous, for double-blind review"
    >
      <Floor y={floor} x1={20} x2={780} seed={501} />

      <Shadow x={70} y={floor + 2} rx={24} ry={4} />
      <Place x={70} y={floor} s={1.4}>
        <g className="s-hcp5-pip">
          <Pip mood="worried" arms="point" tone="green" look={1.5} seed={502} />
        </g>
      </Place>

      {pages.map((p) => {
        const px = 150 + p.col * (pw + 12)
        const py = 90 + p.row * (ph + 16)
        const over = p.i >= 12
        const page = <TwoColPaper x={px} y={py} w={pw} h={ph} seed={510 + p.i} figure={p.i % 4 === 1} tone="green" sw={1.3} />
        return over ? (
          <g key={p.i}>
            <g className="s-hcp5-over" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
              {page}
            </g>
            <Cross x={px + pw / 2} y={py + ph / 2} s={1.1} seed={530 + p.i} />
          </g>
        ) : (
          <g key={p.i}>{page}</g>
        )
      })}
      <Ink
        d={`M${140} ${80}H${150 + 5 * (pw + 12)}V${90 + 2 * (ph + 16) - 6}H${150 + 2 * (pw + 12) - 6}V${90 + 3 * (ph + 16) - 6}H${140}Z`}
        c={TONES.blue.ink}
        w={1.8}
        dash="6 6"
      />
      <Hand x={265} y={66} size={20} anchor="middle" weight={700} c={TONES.blue.deep}>
        limit: 12 pages
      </Hand>
      <Hand x={290} y={300} size={17} anchor="middle" weight={700} c={TONES.red.deep}>
        3 pages over
      </Hand>

      <Ink d={handLine(430, 70, 430, floor, 540, 0.6)} c={INK_SOFT} w={1.3} dash="5 7" />

      <Box x={500} y={70} w={210} h={240} fill={PAPER} seed={541} sw={2} />
      <Ink d={handLine(530, 96, 680, 96, 542, 0.3)} c={INK} w={3} />
      <rect x={555} y={110} width={100} height={14} fill={INK} />
      <rect x={570} y={130} width={70} height={10} fill={INK} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Ink key={i} d={handLine(520, 168 + i * 18, 520 + 170 - ((i * 23) % 50), 168 + i * 18, 550 + i, 0.25)} c={TEXT_LINE} w={2} />
      ))}
      <Place x={605} y={240}>
        <Anim className="s-hcp5-stamp" origin={[0, 0]}>
          <StampMark x={0} y={0} w={150} h={40} text="ANONYMOUS" size={16} tone="blue" rotate={-9} bg={PAPER} seed={560} />
        </Anim>
      </Place>
      <Hand x={605} y={56} size={18} anchor="middle" weight={700} c={TONES.blue.deep}>
        no names for review
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Submit, two reviewers, accepted, camera-ready.
   ------------------------------------------------------------------ */

const submitCss = `
.s-hcp6-up { animation: s-hcp6-up 3s ease-in-out infinite; }
@keyframes s-hcp6-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.s-hcp6-rev .pip-body { animation: s-hcp6-read 3.2s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-hcp6-read {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-5deg); }
}
.s-hcp6-stamp { animation: s-hcp6-stamp 4s ease-in-out infinite; }
@keyframes s-hcp6-stamp {
  0%, 100% { transform: scale(1); }
  8% { transform: scale(1.14); }
  16% { transform: scale(1); }
}
`

export function SubmitScene() {
  const floor = 340
  const [sx, sy, sw, sh] = laptopScreen(110, floor, 150)
  return (
    <Scene
      w={800}
      h={320}
      top={36}
      css={submitCss}
      className="s-hcp6"
      label="Four steps from left to right: a laptop uploads the paper, two reviewers in glasses read it, a red stamp says accepted with minor changes, and a final camera-ready paper with names restored gets a green tick"
    >
      <Floor y={floor} x1={20} x2={780} seed={601} />

      <Laptop x={110} y={floor} w={150} seed={602}>
        <rect x={sx} y={sy} width={sw} height={sh} fill={TONES.blue.tint} />
        <Place x={0} y={0}>
          <Anim className="s-hcp6-up" origin={[sx + sw / 2, sy + sh / 2]}>
            <Ink d={handLine(sx + sw / 2, sy + sh - 10, sx + sw / 2, sy + 14, 603, 0.3) + handLine(sx + sw / 2, sy + 14, sx + sw / 2 - 12, sy + 28, 604, 0.3) + handLine(sx + sw / 2, sy + 14, sx + sw / 2 + 12, sy + 28, 605, 0.3)} c={TONES.blue.deep} w={2.6} />
          </Anim>
        </Place>
      </Laptop>
      <Hand x={110} y={210} size={19} anchor="middle" weight={700} c={TONES.blue.deep}>
        submit
      </Hand>

      <Arrow from={[200, 250]} to={[250, 250]} bend={-0.2} seed={606} />

      {[
        { x: 290, seed: 610, tone: 'paper', d: '0s' },
        { x: 370, seed: 612, tone: 'amber', d: '-1.6s' },
      ].map((r) => (
        <g key={r.seed}>
          <Shadow x={r.x} y={floor + 2} rx={20} ry={4} />
          <Place x={r.x} y={floor} s={1.25}>
            <g className="s-hcp6-rev" style={{ '--d': r.d }}>
              <Pip mood="focused" arms="hold" tone={r.tone} glasses look={0} seed={r.seed}>
                <Sheet x={-14} y={-32} w={28} h={30} lines={3} fold={7} seed={r.seed + 1} sw={1.3} />
              </Pip>
            </g>
          </Place>
        </g>
      ))}
      <Hand x={330} y={210} size={19} anchor="middle" weight={700} c={TONES.amber.deep}>
        review
      </Hand>

      <Arrow from={[410, 250]} to={[455, 250]} bend={-0.2} seed={620} />

      <Sheet x={470} y={170} w={100} h={130} lines={6} seed={621} title />
      <Place x={520} y={240}>
        <Anim className="s-hcp6-stamp" origin={[0, 0]}>
          <StampMark x={0} y={0} w={120} h={38} text="ACCEPTED" size={16} tone="red" rotate={-10} bg={PAPER} seed={622} />
        </Anim>
      </Place>
      <Hand x={520} y={150} size={19} anchor="middle" weight={700} c={TONES.red.deep}>
        decision
      </Hand>

      <Arrow from={[585, 250]} to={[625, 250]} bend={-0.2} seed={623} />

      <TwoColPaper x={640} y={150} w={110} h={150} seed={624} tone="green" />
      <Tick x={760} y={150} s={1.5} />
      <Hand x={695} y={130} size={19} anchor="middle" weight={700} c={TONES.green.deep}>
        camera-ready
      </Hand>
      <Type x={695} y={328} size={13} anchor="middle" c={INK_SOFT}>
        names, ORCID, form
      </Type>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Conference paper plus new work makes a journal paper.
   ------------------------------------------------------------------ */

const journalCss = `
.s-hcp7-new { animation: s-hcp7-bob 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * -1.2s); }
@keyframes s-hcp7-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}
.s-hcp7-pip .pip-body { animation: s-hcp7-walk 2.4s ease-in-out infinite; }
@keyframes s-hcp7-walk {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function JournalScene() {
  const floor = 340
  return (
    <Scene
      w={800}
      h={320}
      top={36}
      css={journalCss}
      className="s-hcp7"
      label="A slim two-column conference paper plus new material, a second year of data shown as a bar chart and two more test sites, add up to a thick journal paper. A dotted line from the journal back to the conference paper says cite it"
    >
      <Floor y={floor} x1={20} x2={780} seed={701} />

      <TwoColPaper x={60} y={130} w={110} h={150} seed={702} tone="green" />
      <Hand x={115} y={116} size={18} anchor="middle" weight={700} c={TONES.green.deep}>
        conference paper
      </Hand>

      <Hand x={205} y={220} size={44} anchor="middle" weight={700} c={INK}>
        +
      </Hand>

      <g className="s-hcp7-new" style={{ '--i': 0 }}>
        <Box x={240} y={120} w={130} h={100} fill={PAPER} seed={703} sw={1.7} />
        <Chart x={258} y={206} w={96} h={72} bars={[0.45, 0.6, 0.8, 0.95]} tone="blue" seed={704} />
      </g>
      <Hand x={305} y={106} size={16} anchor="middle" weight={700} c={TONES.blue.deep}>
        a second year of data
      </Hand>
      <g className="s-hcp7-new" style={{ '--i': 1 }}>
        <Box x={240} y={230} w={130} h={62} fill={TONES.amber.tint} seed={705} sw={1.7} />
        <Hand x={305} y={252} size={15} anchor="middle" weight={700} c={TONES.amber.deep}>
          two more mines
        </Hand>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <path d={`M${280 + i * 26} ${284}l8 -20l8 20Z`} fill={i === 0 ? TONES.grey.mid : TONES.amber.mid} />
            <Ink d={`M${280 + i * 26} ${284}l8 -20l8 20`} w={1.3} />
          </g>
        ))}
      </g>

      <Arrow from={[390, 210]} to={[470, 210]} bend={-0.15} seed={706} w={2} />

      <Book x={490} y={110} w={120} h={170} tone="blue" seed={707} />
      <Hand x={550} y={96} size={18} anchor="middle" weight={700} c={TONES.blue.deep}>
        journal paper
      </Hand>

      <Ink d={`M520 284Q330 344 115 284`} c={TONES.red.ink} w={1.8} dash="4 6" />
      <Arrow from={[160, 296]} to={[118, 286]} bend={0} seed={710} c={TONES.red.ink} w={1.8} head={9} />
      <Hand x={430} y={332} size={16} anchor="middle" weight={700} c={TONES.red.deep}>
        cite the conference version
      </Hand>

      <Shadow x={700} y={floor + 2} rx={24} ry={4} />
      <Place x={700} y={floor} s={1.4} flip>
        <g className="s-hcp7-pip">
          <Pip mood="proud" arms="hips" tone="green" seed={708} />
        </g>
      </Place>
    </Scene>
  )
}
