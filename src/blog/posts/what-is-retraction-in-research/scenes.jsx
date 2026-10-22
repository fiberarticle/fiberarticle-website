import {
  Anim,
  Arrow,
  Box,
  Cross,
  Envelope,
  Fingerprint,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  PAPER,
  Pencil,
  Pip,
  Place,
  PushPin,
  Scene,
  Scissors,
  Shadow,
  Sheet,
  Sparkle,
  StampMark,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6 }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} />
}

/* A cork board across the wall. Anchor: top-left. */
function Board({ x, y, w, h, seed }) {
  return <Box x={x} y={y} w={w} h={h} r={6} fill={`url(#fill-brown)`} seed={seed} sw={2.2} double />
}

/* ------------------------------------------------------------------
   1. Marked, not torn up: the retracted paper stays among the others.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-ret1-lens { animation: s-ret1-scan 7s ease-in-out infinite; }
.s-ret1-reader .pip-body { animation: s-ret1-lean 7s ease-in-out infinite; }
@keyframes s-ret1-scan {
  0%, 100% { transform: translate(0, 0); }
  30%, 45% { transform: translate(150px, 6px); }
  70% { transform: translate(300px, 0); }
}
@keyframes s-ret1-lean {
  0%, 100% { transform: rotate(0deg); }
  40% { transform: rotate(-3deg); }
}
`

const PAPERS = [
  { x: 200, seed: 110 },
  { x: 350, seed: 120, retracted: true },
  { x: 500, seed: 130 },
]

export function MeaningScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={meaningCss} className="s-ret1" label="Three papers are pinned to a cork board; the middle one is still there but stamped RETRACTED, while a magnifying glass moves along them and a paper character in glasses reads">
      <Board x={170} y={56} w={460} h={190} seed={101} />
      {PAPERS.map((p) => (
        <g key={p.x}>
          <Sheet x={p.x} y={78} w={100} h={140} tone="paper" lines={0} fold={16} seed={p.seed} />
          <PushPin x={p.x + 48} y={86} tone={p.retracted ? 'red' : 'blue'} seed={p.seed + 1} />
          <Lines x={p.x + 12} y={112} rows={[70, 60, 74, 50, 66, 58, 40]} gap={13} seed={p.seed + 2} />
          {p.retracted ? <StampMark x={p.x + 50} y={156} w={96} h={32} text="RETRACTED" size={13} tone="red" rotate={-14} bg={PAPER} seed={p.seed + 3} /> : null}
        </g>
      ))}
      <Place x={0} y={0}>
        <Anim className="s-ret1-lens">
          <Magnifier x={236} y={196} r={22} angle={45} tone="amber" seed={140} />
        </Anim>
      </Place>
      <Hand x={400} y={280} size={20} anchor="middle" c={INK_SOFT}>
        still on the board, but marked
      </Hand>

      <Floor y={floor} x1={30} x2={770} seed={102} />
      <Shadow x={720} y={floor + 3} rx={32} ry={4} />
      <Place x={720} y={floor} s={1.5} flip>
        <g className="s-ret1-reader">
          <Pip mood="focused" arms="point" tone="green" glasses look={1.4} seed={150} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Three notices, from a small fix to a full withdrawal.
   ------------------------------------------------------------------ */

const compareCss = `
.s-ret2-card { animation: s-ret2-lift 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 2.5s - 7.5s); }
@keyframes s-ret2-lift {
  0%, 30%, 100% { transform: translateY(0); }
  10%, 22% { transform: translateY(-12px); }
}
`

const NOTICES = [
  { word: 'correction', hint: 'small fix', tone: 'green', x: 90 },
  { word: 'concern', hint: 'a warning', tone: 'amber', x: 320 },
  { word: 'retraction', hint: 'withdrawn', tone: 'red', x: 550 },
]

export function CompareScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={20} css={compareCss} className="s-ret2" label="Three papers stand in a row: one marked correction with a small pencil fix, one marked concern with a big question mark, and one marked retraction with a red cross, above an arrow that grows from small to serious">
      {NOTICES.map((n, i) => (
        <Place key={n.word} x={0} y={0}>
          <Anim className="s-ret2-card" style={{ '--i': i }}>
            <Box x={n.x} y={50} w={160} h={36} r={6} fill={`url(#fill-${n.tone})`} seed={200 + i} sw={1.9} />
            <Hand x={n.x + 80} y={76} size={21} anchor="middle" weight={700}>
              {n.word}
            </Hand>
            <Sheet x={n.x + 30} y={100} w={100} h={130} tone="paper" lines={0} fold={16} seed={210 + i} />
            <Lines x={n.x + 42} y={134} rows={[70, 56, 72, 48, 64, 52]} gap={13} seed={220 + i * 5} />
          </Anim>
        </Place>
      ))}
      <Ink d={handLine(150, 158, 196, 158, 231, 0.3)} c={TONES.green.deep} w={2.6} />
      <Hand x={380} y={192} size={64} anchor="middle" weight={700} c={TONES.amber.ink}>
        ?
      </Hand>
      <Cross x={630} y={166} s={3.2} w={3.2} />

      <Arrow from={[110, 262]} to={[700, 262]} bend={0} seed={240} c={INK_SOFT} w={2} />
      <Hand x={170} y={290} size={18} anchor="middle" c={INK_SOFT}>
        small fix
      </Hand>
      <Hand x={630} y={290} size={18} anchor="middle" c={INK_SOFT}>
        do not use
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Honest error and misconduct both end in the same stamp.
   ------------------------------------------------------------------ */

const reasonCss = `
.s-ret3-mark { animation: s-ret3-pulse 4s ease-in-out infinite; }
.s-ret3-oops .pip-body { animation: s-ret3-shrug 4s ease-in-out infinite; }
.s-ret3 .blade-a { animation: s-ret3-snip 1.6s ease-in-out infinite; }
@keyframes s-ret3-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
@keyframes s-ret3-shrug {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes s-ret3-snip {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
`

export function ReasonScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={20} css={reasonCss} className="s-ret3" label="On the left a paper character shrugs beside a sheet with a wrong sum, labelled honest error; on the right scissors cut up an image beside an inky fingerprint, labelled misconduct; arrows from both lead to one red RETRACTED stamp in the middle">
      <Box x={60} y={44} w={200} h={38} r={6} fill="url(#fill-blue)" seed={301} sw={1.9} />
      <Hand x={160} y={71} size={22} anchor="middle" weight={700}>
        honest error
      </Hand>
      <Sheet x={150} y={110} w={96} h={110} tone="paper" lines={0} fold={14} seed={302} />
      <Type x={164} y={150} size={18}>
        2+2=5
      </Type>
      <Ink d={handLine(162, 156, 232, 140, 303, 0.4)} c={TONES.red.ink} w={2} />
      <Lines x={162} y={176} rows={[66, 50, 60]} gap={12} seed={304} />
      <Shadow x={92} y={floor + 3} rx={28} ry={4} />
      <Place x={92} y={floor} s={1.3}>
        <g className="s-ret3-oops">
          <Pip mood="worried" arms="shrug" tone="blue" seed={310} />
        </g>
      </Place>

      <Box x={540} y={44} w={200} h={38} r={6} fill="url(#fill-red)" seed={320} sw={1.9} />
      <Hand x={640} y={71} size={22} anchor="middle" weight={700}>
        misconduct
      </Hand>
      <Box x={560} y={110} w={110} h={86} fill={TONES.green.tint} seed={321} />
      <Ink d={handLine(560, 196, 600, 150, 322, 0.5) + handLine(600, 150, 630, 176, 323, 0.5) + handLine(630, 176, 670, 128, 324, 0.5)} c={TONES.green.deep} w={2} />
      <Ink d={handLine(612, 110, 640, 196, 325, 0.6)} c={INK} w={1.6} dash="5 5" />
      <Scissors x={680} y={160} s={1} angle={-30} seed={326} />
      <Fingerprint x={720} y={240} s={0.9} c={TONES.red.deep} seed={327} />

      <Arrow from={[260, 170]} to={[338, 210]} bend={-0.15} seed={330} c={INK_SOFT} w={1.6} />
      <Arrow from={[550, 170]} to={[470, 210]} bend={0.15} seed={331} c={INK_SOFT} w={1.6} />
      <Place x={0} y={0}>
        <Anim className="s-ret3-mark" spin>
          <StampMark x={404} y={234} w={150} h={46} text="RETRACTED" size={20} tone="red" rotate={-6} bg={PAPER} seed={332} />
        </Anim>
      </Place>
      <Floor y={floor} x1={30} x2={770} seed={333} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The labels: a watermarked PDF and a tagged database record.
   ------------------------------------------------------------------ */

const labelCss = `
.s-ret4-tag { animation: s-ret4-blink 3s ease-in-out infinite; }
.s-ret4-viewer .pip-body { animation: s-ret4-nod 3s ease-in-out infinite; }
@keyframes s-ret4-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
@keyframes s-ret4-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function LabelScene() {
  const floor = 312
  const [ix, iy, iw] = laptopScreen(480, floor, 300)
  return (
    <Scene w={800} h={290} top={30} css={labelCss} className="s-ret4" label="On the left a PDF page has the word RETRACTED written across it as a watermark; on the right a laptop shows a database record with a red tag that reads Retracted Publication and a link that reads Retraction in, while a paper character in glasses looks on">
      <Sheet x={80} y={50} w={180} h={236} tone="paper" lines={0} fold={22} seed={401} sw={2} />
      <Lines x={96} y={94} rows={[140, 120, 136, 100, 144, 116, 130, 90, 126, 108, 138, 96, 120, 80, 110]} gap={12} seed={402} />
      <Hand x={170} y={180} size={30} anchor="middle" weight={700} rotate={-40} c={TONES.red.ink} style={{ opacity: 0.6 }}>
        RETRACTED
      </Hand>
      <Hand x={170} y={308} size={18} anchor="middle" c={INK_SOFT}>
        the PDF
      </Hand>

      <Laptop x={480} y={floor} w={300} seed={410}>
        <Lines x={ix + 12} y={iy + 22} rows={[150, 110]} gap={14} seed={411} c={INK} w={2} />
        <Place x={0} y={0}>
          <Anim className="s-ret4-tag">
            <rect x={ix + 12} y={iy + 52} width={176} height={24} rx={4} fill={TONES.red.tint} />
            <Ink d={`M${ix + 12} ${iy + 52}h176v24h-176Z`} c={TONES.red.ink} w={1.6} />
            <Type x={ix + 100} y={iy + 69} size={13} weight={700} anchor="middle" c={TONES.red.deep}>
              Retracted Publication
            </Type>
          </Anim>
        </Place>
        <Type x={ix + 12} y={iy + 98} size={13} c={TONES.blue.deep}>
          Retraction in: ...
        </Type>
        <Lines x={ix + 12} y={iy + 116} rows={[iw - 40, iw - 70]} gap={12} seed={412} />
      </Laptop>

      <Floor y={floor} x1={30} x2={770} seed={413} />
      <Shadow x={712} y={floor + 3} rx={32} ry={4} />
      <Place x={712} y={floor} s={1.5} flip>
        <g className="s-ret4-viewer">
          <Pip mood="focused" arms="think" tone="pink" glasses look={1.4} seed={420} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Four places to check, ticked off one by one.
   ------------------------------------------------------------------ */

const PLACES = [
  { word: 'journal page', tone: 'blue' },
  { word: 'PubMed', tone: 'green' },
  { word: 'Retraction Watch', tone: 'amber' },
  { word: 'Crossref', tone: 'pink' },
]

const checkCss = `
.s-ret5-lens { animation: s-ret5-move 8s ease-in-out infinite; }
.s-ret5-ok { animation: s-ret5-tick 8s ease-in-out infinite; animation-delay: calc(var(--i) * 2s - 8s); }
.s-ret5-checker .pip-body { animation: s-ret5-bob 2.6s ease-in-out infinite; }
@keyframes s-ret5-move {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(170px); }
  50% { transform: translateX(340px); }
  75% { transform: translateX(510px); }
}
@keyframes s-ret5-tick {
  0%, 100% { opacity: 0.25; }
  10%, 40% { opacity: 1; }
}
@keyframes s-ret5-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function CheckScene() {
  return (
    <Scene w={800} h={250} top={30} css={checkCss} className="s-ret5" label="Four cards in a row read journal page, PubMed, Retraction Watch and Crossref, each with a green tick, while a magnifying glass slides along them">
      {PLACES.map((p, i) => {
        const x = 70 + i * 170
        return (
          <g key={p.word}>
            <Box x={x} y={70} w={150} h={120} r={8} fill={`url(#fill-${p.tone})`} seed={500 + i} sw={1.9} />
            <rect x={x + 10} y={84} width={130} height={34} rx={5} fill={PAPER} />
            <Hand x={x + 75} y={108} size={p.word.length > 12 ? 17 : 21} anchor="middle" weight={700}>
              {p.word}
            </Hand>
            <Place x={0} y={0}>
              <Anim className="s-ret5-ok" style={{ '--i': i }}>
                <Tick x={x + 75} y={152} s={1.5} />
              </Anim>
            </Place>
          </g>
        )
      })}
      <Place x={0} y={0}>
        <Anim className="s-ret5-lens">
          <Magnifier x={130} y={232} r={22} angle={40} tone="amber" seed={520} />
        </Anim>
      </Place>
      <Floor y={268} x1={30} x2={770} seed={521} />
      <Hand x={400} y={46} size={20} anchor="middle" c={INK_SOFT}>
        check the DOI in each place
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The reference list: out of the evidence, labelled if mentioned.
   ------------------------------------------------------------------ */

const citeCss = `
.s-ret6-pen { animation: s-ret6-write 1.8s ease-in-out infinite; }
.s-ret6-writer .pip-body { animation: s-ret6-bob 3s ease-in-out infinite; }
.s-ret6-spark { animation: s-ret6-spark 4s ease-in-out infinite; }
@keyframes s-ret6-write {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(14px, 1px); }
}
@keyframes s-ret6-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-ret6-spark {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
`

export function CiteScene() {
  const floor = 312
  const sx = 230
  return (
    <Scene w={800} h={290} top={30} css={citeCss} className="s-ret6" label="A reference list on a large sheet: one line used as evidence is crossed out in red, and another line now begins with RETRACTED in red letters, while a paper character with a pencil keeps writing">
      <Sheet x={sx} y={48} w={340} h={240} tone="paper" lines={0} fold={26} seed={601} sw={2} />
      <Hand x={sx + 22} y={88} size={22} weight={700}>
        references
      </Hand>
      <Lines x={sx + 22} y={112} rows={[270, 220]} gap={13} seed={602} />
      <Lines x={sx + 22} y={150} rows={[280, 200]} gap={13} seed={603} />
      <Ink d={handLine(sx + 16, 156, sx + 306, 152, 604, 0.6)} c={TONES.red.ink} w={2.6} />
      <Cross x={sx + 318} y={156} s={0.9} />
      <Type x={sx + 22} y={198} size={15} weight={700} c={TONES.red.deep}>
        RETRACTED:
      </Type>
      <Lines x={sx + 128} y={194} rows={[160]} gap={13} seed={605} />
      <Lines x={sx + 22} y={207} rows={[230]} gap={13} seed={606} />
      <Lines x={sx + 22} y={236} rows={[260, 180]} gap={13} seed={607} />
      <Place x={0} y={0}>
        <Anim className="s-ret6-spark">
          <Sparkle x={sx + 314} y={196} s={9} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-ret6-pen">
          <Pencil x={sx + 210} y={250} length={90} angle={-42} tone="amber" seed={608} />
        </Anim>
      </Place>

      <Floor y={floor} x1={30} x2={770} seed={609} />
      <Shadow x={110} y={floor + 3} rx={32} ry={4} />
      <Place x={110} y={floor} s={1.5}>
        <g className="s-ret6-writer">
          <Pip mood="focused" arms="point" tone="pink" look={1.6} seed={610} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Find your own mistake, write to the editor, and say so.
   ------------------------------------------------------------------ */

const ownCss = `
.s-ret7-letter { animation: s-ret7-fly 7s ease-in-out infinite; }
.s-ret7-author .pip-body { animation: s-ret7-bob 3s ease-in-out infinite; }
@keyframes s-ret7-fly {
  0%, 10% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  50%, 82% { transform: translate(360px, -40px) rotate(8deg); opacity: 1; }
  88% { transform: translate(360px, -40px) rotate(8deg); opacity: 0; }
  89% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  95%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
}
@keyframes s-ret7-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function OwnScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={ownCss} className="s-ret7" label="A paper character points at her own paper, where she has circled an error, and sends a letter flying across to a box labelled editor, where a second character waits">
      <Sheet x={180} y={92} w={120} h={150} tone="paper" lines={0} fold={18} seed={701} />
      <Lines x={194} y={128} rows={[86, 72, 90, 60, 80, 66, 50, 74]} gap={13} seed={702} />
      <Ink d="M226 170m-34 0a34 14 0 1 0 68 0a34 14 0 1 0 -68 0" c={TONES.red.ink} w={2.2} />
      <Hand x={240} y={270} size={19} anchor="middle" c={INK_SOFT}>
        my own error
      </Hand>

      <Box x={560} y={60} w={140} h={38} r={6} fill={TONES.amber.mid} seed={703} sw={2} />
      <Hand x={630} y={87} size={22} anchor="middle" weight={700}>
        editor
      </Hand>
      <Arrow from={[330, 140]} to={[600, 124]} bend={-0.12} seed={704} c={INK_SOFT} w={1.5} dash="5 7" />

      <Place x={0} y={0}>
        <Anim className="s-ret7-letter">
          <Envelope x={300} y={166} w={64} h={42} seed={705} />
        </Anim>
      </Place>

      <Floor y={floor} x1={30} x2={770} seed={706} />
      <Shadow x={96} y={floor + 3} rx={32} ry={4} />
      <Place x={96} y={floor} s={1.5}>
        <g className="s-ret7-author">
          <Pip mood="happy" arms="point" tone="pink" look={1.6} seed={710} />
        </g>
      </Place>
      <Shadow x={640} y={floor + 3} rx={32} ry={4} />
      <Place x={640} y={floor} s={1.5}>
        <Pip mood="happy" arms="hold" tone="blue" glasses look={-1.4} seed={720} />
      </Place>
    </Scene>
  )
}
