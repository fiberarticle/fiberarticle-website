import {
  Anim,
  Arrow,
  Book,
  Box,
  Cross,
  Crate,
  Desk,
  Envelope,
  Floor,
  Hand,
  Hourglass,
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
  Scissors,
  Shadow,
  Sheet,
  Sparkle,
  Speech,
  StampMark,
  Sticky,
  TONES,
  Tick,
  Type,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. The thick dissertation is cut down into a slim paper.
   ------------------------------------------------------------------ */

const readyCss = `
.s-pbl1 .blade-a { animation: s-pbl1-snip-a 1.6s ease-in-out infinite; }
.s-pbl1 .blade-b { animation: s-pbl1-snip-b 1.6s ease-in-out infinite; }
.s-pbl1-paper { animation: s-pbl1-float 4s ease-in-out infinite; }
@keyframes s-pbl1-snip-a {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(9deg); }
}
@keyframes s-pbl1-snip-b {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-9deg); }
}
@keyframes s-pbl1-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

const PARTS = ['introduction', 'methods', 'results', 'discussion']

export function ReadyScene() {
  const floor = 330
  const px = 420
  const py = 92
  return (
    <Scene w={800} h={300} top={50} css={readyCss} className="s-pbl1" label="A tall pile of pages labelled dissertation, 96 pages, is cut by a pair of scissors into one slim paper with four parts, introduction, methods, results and discussion, beside a sticky note listing three agreed authors">
      <Floor y={floor} x1={30} x2={770} seed={101} />
      <Pile x={130} y={floor} w={130} count={34} seed={102} />
      <Hand x={130} y={118} size={20} anchor="middle" weight={700}>
        dissertation
      </Hand>
      <Hand x={130} y={140} size={16} anchor="middle" c={INK_SOFT}>
        96 pages
      </Hand>

      <Scissors x={285} y={190} s={0.9} angle={-8} seed={103} />
      <Arrow from={[240, 250]} to={[400, 250]} bend={0.12} seed={104} c={TONES.red.ink} w={2} />
      <Hand x={320} y={284} size={17} anchor="middle" c={TONES.red.deep}>
        cut and rewrite
      </Hand>

      <Anim className="s-pbl1-paper">
        <Sheet x={px} y={py} w={150} h={214} lines={0} fold={20} seed={105} sw={2} />
        <Type x={px + 16} y={py + 34} size={15} weight={700}>
          PAPER
        </Type>
        {PARTS.map((part, i) => {
          const t = TONES[['blue', 'amber', 'green', 'pink'][i]]
          const y = py + 52 + i * 38
          return (
            <g key={part}>
              <rect x={px + 12} y={y} width={126} height={28} rx={4} fill={t.tint} />
              <Ink d={handLine(px + 12, y + 28, px + 138, y + 28, 106 + i, 0.3)} c={t.deep} w={1.4} />
              <Hand x={px + 75} y={y + 20} size={16} anchor="middle">
                {part}
              </Hand>
            </g>
          )
        })}
      </Anim>

      <Sticky x={618} y={118} w={140} h={124} tone="amber" lines={0} seed={110} />
      <Hand x={688} y={154} size={18} anchor="middle" weight={700}>
        authors
      </Hand>
      {['Revathi', 'Dr. Senthil', 'colleague'].map((name, i) => (
        <g key={name}>
          <Tick x={640} y={176 + i * 22} s={0.6} />
          <Hand x={654} y={182 + i * 22} size={15}>
            {name}
          </Hand>
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Three journals that fit, and the advertisement that does not.
   ------------------------------------------------------------------ */

const journalCss = `
.s-pbl2-lens { animation: s-pbl2-scan 6s ease-in-out infinite; }
.s-pbl2-ad { animation: s-pbl2-shake 3s ease-in-out infinite; }
@keyframes s-pbl2-scan {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(150px); }
}
@keyframes s-pbl2-shake {
  0%, 70%, 100% { transform: rotate(0deg); }
  78% { transform: rotate(-4deg); }
  86% { transform: rotate(4deg); }
  94% { transform: rotate(-2deg); }
}
`

const JOURNALS = [
  { word: 'scope fits', tone: 'blue' },
  { word: 'indexed', tone: 'green' },
  { word: 'fees shown', tone: 'amber' },
]

export function JournalScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={46} css={journalCss} className="s-pbl2" label="Three journal covers labelled scope fits, indexed and fees shown, each with a green tick, while a magnifying glass moves along them, and on the right an advertisement envelope promising publish in 7 days, crossed out in red">
      <Floor y={floor} x1={30} x2={770} seed={201} />
      {JOURNALS.map((j, i) => {
        const x = 60 + i * 140
        return (
          <g key={j.word}>
            <Shadow x={x + 50} y={floor + 2} rx={46} ry={4} />
            <Book x={x} y={floor - 140} w={100} h={140} tone={j.tone} seed={202 + i * 4} />
            <Hand x={x + 50} y={floor - 156} size={17} anchor="middle" weight={700}>
              {j.word}
            </Hand>
            <Tick x={x + 58} y={floor - 30} s={1.1} />
          </g>
        )
      })}
      <Anim className="s-pbl2-lens">
        <Magnifier x={110} y={232} r={30} angle={50} tone="amber" seed={215} />
      </Anim>

      <Anim className="s-pbl2-ad" origin={[640, 250]}>
        <Envelope x={572} y={196} w={136} h={90} seed={216} />
        <Speech x={540} y={80} w={210} h={70} tx={630} ty={192} seed={217}>
          <Hand x={645} y={108} size={18} anchor="middle">
            publish in 7 days!
          </Hand>
          <Hand x={645} y={134} size={16} anchor="middle" c={INK_SOFT}>
            fee first, review later
          </Hand>
        </Speech>
      </Anim>
      <Cross x={640} y={242} s={3.2} w={3.4} seed={218} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The guide for authors, read with a highlighter.
   ------------------------------------------------------------------ */

const RULES = ['word limit', 'headings', 'reference style', 'figures', 'blinding', 'statements']

const guideCss = `
.s-pbl3-mark { animation: s-pbl3-sweep 12s ease-in-out infinite; animation-delay: calc(var(--i) * 1.3s - 12s); }
.s-pbl3-reader .pip-body { animation: s-pbl3-lean 4s ease-in-out infinite; }
@keyframes s-pbl3-sweep {
  0%, 12% { stroke-dashoffset: 1; }
  24%, 88% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-pbl3-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
`

export function GuideScene() {
  const floor = 350
  const gx = 250
  const gy = 40
  const gw = 300
  return (
    <Scene w={800} h={330} top={30} css={guideCss} className="s-pbl3" label="A large sheet titled guide for authors lists six rules, word limit, headings, reference style, figures, blinding and statements, which a highlighter marks one by one, while a paper character in glasses reads it and a sticky note says CTRI number before the first patient">
      <Floor y={floor} x1={30} x2={770} seed={301} />
      <Sheet x={gx} y={gy} w={gw} h={300} lines={0} fold={26} seed={302} sw={2} />
      <Hand x={gx + 24} y={gy + 44} size={26} weight={700}>
        guide for authors
      </Hand>
      <Ink d={handLine(gx + 24, gy + 54, gx + 220, gy + 54, 303, 0.5)} c={TONES.red.ink} w={2} />
      {RULES.map((rule, i) => {
        const y = gy + 92 + i * 36
        return (
          <g key={rule}>
            <path
              className="s-pbl3-mark"
              style={{ '--i': i }}
              d={`M${gx + 40} ${y - 7}L${gx + gw - 40} ${y - 8}`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke={TONES.amber.mid}
              strokeWidth={22}
              strokeLinecap="round"
              opacity="0.7"
            />
            <Box x={gx + 24} y={y - 15} w={14} h={14} seed={304 + i} sw={1.3} fill={PAPER} />
            <Hand x={gx + 50} y={y} size={19}>
              {rule}
            </Hand>
          </g>
        )
      })}

      <Shadow x={150} y={floor + 2} rx={34} ry={5} />
      <Place x={150} y={floor} s={1.7}>
        <g className="s-pbl3-reader">
          <Pip mood="focused" arms="point" tone="blue" look={1.8} glasses seed={310} />
        </g>
      </Place>

      <Sticky x={598} y={150} w={150} h={110} tone="green" lines={0} seed={311} />
      <Hand x={673} y={190} size={20} anchor="middle" weight={700}>
        CTRI number
      </Hand>
      <Hand x={673} y={216} size={15} anchor="middle" c={INK_SOFT}>
        registered before
      </Hand>
      <Hand x={673} y={236} size={15} anchor="middle" c={INK_SOFT}>
        the first patient
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Six labelled files drop into the submission box.
   ------------------------------------------------------------------ */

const FILES = ['cover letter', 'title page', 'manuscript', 'figures', 'declarations', 'checklist']

const filesCss = `
.s-pbl4-file { animation: s-pbl4-drop 6s ease-in-out infinite; animation-delay: calc(var(--i) * -1s); }
@keyframes s-pbl4-drop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
`

export function FilesScene() {
  const floor = 350
  return (
    <Scene w={800} h={320} top={40} css={filesCss} className="s-pbl4" label="Six sheets labelled cover letter, title page, manuscript, figures, declarations and checklist float in an arc above an open cardboard box marked submission, with arrows leading into it">
      <Floor y={floor} x1={30} x2={770} seed={401} />
      {FILES.map((file, i) => {
        const x = 52 + i * 120
        const y = 70 + Math.abs(i - 2.5) * 22
        return (
          <g key={file}>
            <Anim className="s-pbl4-file" style={{ '--i': i }}>
              <Sheet x={x} y={y} w={74} h={92} lines={4} fold={14} seed={402 + i * 5} tone={['paper', 'paper', 'blue', 'green', 'amber', 'pink'][i]} />
            </Anim>
            <Hand x={x + 37} y={y + 116} size={16} anchor="middle" weight={700}>
              {file}
            </Hand>
          </g>
        )
      })}
      <Arrow from={[262, 238]} to={[334, 272]} bend={0.15} seed={440} c={INK_SOFT} />
      <Arrow from={[538, 238]} to={[466, 272]} bend={-0.15} seed={441} c={INK_SOFT} />
      <Crate x={320} y={270} w={160} h={80} label="submission" seed={442} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The journal portal and its status line.
   ------------------------------------------------------------------ */

const STATUS = ['submitted', 'with editor', 'under review', 'decision']

const portalCss = `
.s-pbl5-dot { animation: s-pbl5-move 10s ease-in-out infinite; }
.s-pbl5-typist .pip-arm-r { animation: s-pbl5-tap 1.2s ease-in-out infinite; }
@keyframes s-pbl5-move {
  0%, 12% { transform: translateX(0); }
  30%, 40% { transform: translateX(98px); }
  58%, 68% { transform: translateX(196px); }
  86%, 92% { transform: translateX(294px); }
  100% { transform: translateX(0); }
}
@keyframes s-pbl5-tap {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
}
`

export function PortalScene() {
  const floor = 350
  const lx = 470
  const lw = 520
  const [ix, iy, iw] = laptopScreen(lx, floor, lw)
  const track = iy + 150
  const x0 = ix + 46
  return (
    <Scene w={800} h={330} top={30} css={portalCss} className="s-pbl5" label="A laptop shows a journal portal with a manuscript number and a status line with four stops, submitted, with editor, under review and decision, while a dot moves along it and a paper character stands beside the laptop">
      <Floor y={floor} x1={30} x2={770} seed={501} />
      <Laptop x={lx} y={floor} w={lw} seed={502}>
        <rect x={ix} y={iy} width={iw} height={34} fill={TONES.blue.tint} />
        <Type x={ix + 16} y={iy + 23} size={16} weight={700}>
          JOURNAL PORTAL
        </Type>
        <Hand x={ix + 16} y={iy + 72} size={20}>
          manuscript no. 2417
        </Hand>
        <Hand x={ix + 16} y={iy + 100} size={16} c={INK_SOFT}>
          status of your submission
        </Hand>
        <Ink d={handLine(x0, track, x0 + 294, track, 503, 0.4)} w={2.2} c={TONES.grey.ink} />
        {STATUS.map((word, i) => (
          <g key={word}>
            <circle cx={x0 + i * 98} cy={track} r={6} fill={PAPER} stroke={TONES.grey.ink} strokeWidth={1.8} vectorEffect="non-scaling-stroke" />
            <Hand x={x0 + i * 98} y={track + 30} size={15} anchor="middle">
              {word}
            </Hand>
          </g>
        ))}
        <Anim className="s-pbl5-dot">
          <circle cx={x0} cy={track} r={9} fill={TONES.green.ink} stroke="#2b2521" strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
        </Anim>
      </Laptop>

      <Shadow x={110} y={floor + 2} rx={32} ry={5} />
      <Place x={110} y={floor} s={1.7}>
        <g className="s-pbl5-typist">
          <Pip mood="worried" arms="point" tone="blue" look={1.8} seed={510} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Two reviewers, one decision letter, one reply.
   ------------------------------------------------------------------ */

const reviewCss = `
.s-pbl6-writer .pip-arm-r { animation: s-pbl6-write 1.4s ease-in-out infinite; }
.s-pbl6-reviewer .pip-body { animation: s-pbl6-nod 3.4s ease-in-out infinite; }
@keyframes s-pbl6-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
@keyframes s-pbl6-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function ReviewScene() {
  const floor = 350
  return (
    <Scene w={800} h={330} top={30} css={reviewCss} className="s-pbl6" label="Two reviewer characters ask how many dropped out and tone this claim down, a decision letter in the middle is stamped major revision, and on the right a paper character at a desk writes a response point by point">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Speech x={20} y={52} w={204} h={58} tx={86} ty={190} seed={602}>
        <Hand x={122} y={88} size={17} anchor="middle">
          how many dropped out?
        </Hand>
      </Speech>
      <Speech x={140} y={126} w={190} h={58} tx={214} ty={236} seed={603} tone="pink">
        <Hand x={235} y={162} size={17} anchor="middle">
          tone this claim down
        </Hand>
      </Speech>
      {[
        { x: 84, tone: 'green', seed: 610 },
        { x: 212, tone: 'pink', seed: 611 },
      ].map((r) => (
        <g key={r.seed}>
          <Shadow x={r.x} y={floor + 2} rx={28} ry={4} />
          <Place x={r.x} y={floor} s={1.45}>
            <g className="s-pbl6-reviewer">
              <Pip mood="focused" arms="think" tone={r.tone} glasses look={1.5} seed={r.seed} />
            </g>
          </Place>
        </g>
      ))}

      <Sheet x={330} y={110} w={150} h={196} lines={6} fold={20} seed={612} />
      <Type x={346} y={142} size={14} weight={700}>
        DECISION
      </Type>
      <StampMark x={405} y={250} w={140} h={40} text="MAJOR REVISION" tone="amber" rotate={-7} size={13} bg={PAPER} seed={613} />

      <Place x={590} y={floor} s={1.5}>
        <g className="s-pbl6-writer">
          <Pip mood="focused" arms="point" tone="blue" look={1.8} seed={617} />
        </g>
      </Place>
      <Desk y={300} x1={520} x2={780} seed={614} />
      <Sheet x={650} y={210} w={88} h={90} lines={5} fold={14} seed={615} tone="green" />
      <Hand x={694} y={198} size={15} anchor="middle" c={INK_SOFT}>
        point by point
      </Hand>
      <Pencil x={710} y={276} length={70} angle={-60} tone="amber" seed={616} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. After acceptance: licence, proofs, then the DOI.
   ------------------------------------------------------------------ */

const acceptedCss = `
.s-pbl7-hero .pip-body { animation: s-pbl7-hop 2.4s ease-in-out infinite; }
.s-pbl7-twinkle { animation: s-pbl7-twinkle 2.8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 2.8s); }
@keyframes s-pbl7-hop {
  0%, 60%, 100% { transform: translateY(0); }
  75% { transform: translateY(-10px); }
}
@keyframes s-pbl7-twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}
`

export function AcceptedScene() {
  const floor = 340
  return (
    <Scene w={800} h={320} top={30} css={acceptedCss} className="s-pbl7" label="Three stops after acceptance: a licence sheet stamped CC BY, proofs with a pencil and an hourglass marked 48 hours to one week, and an open journal with a DOI tag beside a cheering paper character">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Sheet x={50} y={120} w={140} h={180} lines={6} fold={20} seed={702} />
      <StampMark x={120} y={250} w={92} h={38} text="CC BY" tone="blue" rotate={-8} size={18} bg={PAPER} seed={703} />
      <Hand x={120} y={326} size={18} anchor="middle" weight={700}>
        1 licence
      </Hand>

      <Arrow from={[200, 210]} to={[250, 210]} bend={0} seed={704} c={INK_SOFT} />

      <Sheet x={262} y={120} w={140} h={180} lines={7} fold={20} seed={705} tone="amber" />
      <Pencil x={360} y={200} length={90} angle={-50} tone="red" seed={706} />
      <Hourglass x={432} y={250} s={1.1} seed={707} />
      <Hand x={340} y={326} size={18} anchor="middle" weight={700}>
        2 proofs
      </Hand>
      <Hand x={432} y={102} size={15} anchor="middle" c={INK_SOFT}>
        48 hours to a week
      </Hand>

      <Arrow from={[466, 210]} to={[516, 210]} bend={0} seed={708} c={INK_SOFT} />

      <OpenBook x={600} y={250} w={150} tone="red" seed={709} />
      <Box x={560} y={268} w={80} h={30} r={6} fill={TONES.green.tint} stroke={TONES.green.deep} seed={710} sw={1.6} />
      <Type x={600} y={289} size={16} weight={700} anchor="middle">
        DOI
      </Type>
      <Hand x={600} y={326} size={18} anchor="middle" weight={700}>
        3 online
      </Hand>
      {[
        [540, 140],
        [664, 130],
        [600, 104],
      ].map(([sx, sy], i) => (
        <g key={i} className="s-pbl7-twinkle" style={{ '--i': i, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Sparkle x={sx} y={sy} s={9} />
        </g>
      ))}

      <Shadow x={730} y={floor + 2} rx={28} ry={4} />
      <Place x={730} y={floor} s={1.45}>
        <g className="s-pbl7-hero">
          <Pip mood="grin" arms="up" tone="blue" look={-1.6} seed={711} />
        </g>
      </Place>
    </Scene>
  )
}
