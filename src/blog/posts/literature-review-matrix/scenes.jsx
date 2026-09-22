import {
  Anim,
  Arrow,
  Box,
  Chai,
  Crate,
  Desk,
  Floor,
  Grid,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  OpenBook,
  PAPER,
  Pencil,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Sticky,
  TEXT_LINE,
  TONES,
  Type,
  Worm,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  laptopScreen,
} from '../../ink/index.js'

/* A few short lines standing in for notes written in a table cell. */
function Notes({ x, y, w = 60, seed = 1, c = TEXT_LINE }) {
  return (
    <Ink
      d={handLine(x, y, x + w, y, seed, 0.3) + handLine(x, y + 11, x + w * 0.62, y + 11, seed + 1, 0.3)}
      c={c}
      w={1.8}
    />
  )
}

/* ------------------------------------------------------------------
   1. The seventy PDF problem: the box keeps filling up.
   ------------------------------------------------------------------ */

const crateCss = `
.s-lm1-fall { animation: s-lm1-fall 3.6s ease-in infinite; }
.s-lm1-pip .pip-body { animation: s-lm1-shiver 3.6s ease-in-out infinite; }
.s-lm1-ask { animation: s-lm1-ask 3.6s ease-in-out infinite; }
@keyframes s-lm1-fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  12% { opacity: 1; }
  70% { transform: translateY(88px) rotate(24deg); opacity: 1; }
  80% { transform: translateY(102px) rotate(28deg); opacity: 0; }
  81%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
}
@keyframes s-lm1-shiver {
  0%, 60%, 100% { transform: rotate(0deg); }
  66% { transform: rotate(-2.5deg); }
  72% { transform: rotate(2.5deg); }
  78% { transform: rotate(-1.5deg); }
}
@keyframes s-lm1-ask {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(-8deg); }
}
`

const SPILL = [
  { x: 272, y: 156, rot: -14 },
  { x: 306, y: 146, rot: 8 },
  { x: 344, y: 152, rot: -4 },
  { x: 380, y: 144, rot: 12 },
  { x: 414, y: 158, rot: -9 },
]

export function CrateScene() {
  return (
    <Scene w={800} h={306} top={24} css={crateCss} className="s-lm1" label="A cardboard box labelled 70 PDFs overflows with papers while more papers drop in from above, and a worried paper character beside it throws its hands up under a big question mark">
      <Floor y={320} x1={40} x2={760} seed={60} />

      {[0, 1, 2].map((i) => (
        <Place key={i} x={300 + i * 52} y={66 - i * 8}>
          <Anim className="s-lm1-fall" style={{ animationDelay: `${i * -1.2}s` }}>
            <Sheet x={-14} y={-18} w={28} h={36} lines={2} fold={7} seed={61 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      {SPILL.map((s, i) => (
        <g key={s.x} transform={`rotate(${s.rot} ${s.x + 18} ${s.y + 24})`}>
          <Sheet x={s.x} y={s.y} w={36} h={48} lines={3} fold={8} seed={65 + i} sw={1.4} />
        </g>
      ))}
      <Crate x={250} y={196} w={214} h={124} label="70 PDFs" seed={70} />

      <Place x={146} y={318}>
        <g transform="rotate(-8)">
          <Sticky x={0} y={-34} w={40} h={34} tone="amber" lines={2} seed={71} />
        </g>
      </Place>

      <Shadow x={596} y={322} rx={48} ry={6} />
      <Place x={596} y={320} s={2.1}>
        <g className="s-lm1-pip">
          <Pip mood="worried" arms="up" look={-1.5} seed={72} />
        </g>
      </Place>
      <Place x={648} y={150}>
        <Anim className="s-lm1-ask" spin>
          <Hand x={0} y={0} size={42} weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. What a matrix is: a row lights up for one paper, then a column
      lights up for one question.
   ------------------------------------------------------------------ */

const MX = 170
const MY = 60
const MCW = 110
const MRH = 44

const matrixCss = `
.s-lm2-row { animation: s-lm2-row 12s ease-in-out infinite; }
.s-lm2-col { animation: s-lm2-col 12s ease-in-out infinite; }
@keyframes s-lm2-row {
  0%, 12% { transform: translateY(0); opacity: 1; }
  15%, 27% { transform: translateY(${MRH}px); opacity: 1; }
  30%, 42% { transform: translateY(${MRH * 2}px); opacity: 1; }
  46% { transform: translateY(${MRH * 2}px); opacity: 0; }
  47%, 96% { transform: translateY(0); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes s-lm2-col {
  0%, 48% { transform: translateX(0); opacity: 0; }
  51%, 62% { transform: translateX(0); opacity: 1; }
  65%, 76% { transform: translateX(${MCW}px); opacity: 1; }
  79%, 90% { transform: translateX(${MCW * 2}px); opacity: 1; }
  94%, 100% { transform: translateX(${MCW * 2}px); opacity: 0; }
}
`

export function MatrixScene() {
  const head = ['paper', 'aim', 'method', 'findings']
  const cells = []
  for (let r = 1; r <= 4; r++) {
    for (let c = 0; c <= 3; c++) {
      const cx = MX + c * MCW
      const cy = MY + r * MRH
      cells.push(
        c === 0 ? (
          <Sheet key={`${r}-${c}`} x={cx + 44} y={cy + 6} w={22} h={32} lines={2} fold={6} seed={80 + r} sw={1.2} />
        ) : (
          <Notes key={`${r}-${c}`} x={cx + 16} y={cy + 18} w={50 + ((r * 11 + c * 5) % 24)} seed={90 + r * 5 + c} />
        ),
      )
    }
  }
  return (
    <Scene w={800} h={290} top={36} css={matrixCss} className="s-lm2" label="A table with a paper in each row and a question in each column. A band of colour moves down the rows, one paper at a time, and then another moves across the columns, one question at a time">
      <Grid x={MX} y={MY} cols={4} rows={5} cw={MCW} rh={MRH} header="amber" seed={100} />
      <rect x={MX + 2} y={MY + MRH + 2} width={MCW * 4 - 4} height={MRH - 4} fill={TONES.amber.mid} opacity="0.32" className="s-lm2-row" />
      <rect x={MX + MCW + 2} y={MY + MRH + 2} width={MCW - 4} height={MRH * 4 - 4} fill={TONES.blue.mid} opacity="0.3" className="s-lm2-col" />
      {head.map((word, c) => (
        <Hand key={word} x={MX + c * MCW + MCW / 2} y={MY + 30} size={21} anchor="middle" weight={700}>
          {word}
        </Hand>
      ))}
      {cells}

      <Arrow from={[704, 116]} to={[618, 124]} bend={0.15} seed={101} c={TONES.amber.deep} />
      <Hand x={708} y={104} size={21} anchor="middle" c={TONES.amber.deep} weight={700}>
        one paper
      </Hand>
      <Arrow from={[335, 314]} to={[335, 286]} bend={0} seed={102} c={TONES.blue.deep} />
      <Hand x={420} y={318} size={21} anchor="start" c={TONES.blue.deep} weight={700}>
        one question
      </Hand>

      <Shadow x={90} y={302} rx={38} ry={5} />
      <Place x={90} y={300} s={1.7}>
        <Pip mood="happy" arms="point" look={1.6} seed={103} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Choose your columns: the headings go up before the reading starts.
   ------------------------------------------------------------------ */

const HEADS = ['aim', 'method', 'sample', 'findings', 'limits']

const columnsCss = `
${HEADS.map((_, i) => `.s-lm3-word-${i} { animation: s-lm3-word-${i} 11s ease-in-out infinite; }
@keyframes s-lm3-word-${i} {
  0%, ${6 + i * 11}% { opacity: 0; transform: translateY(-4px); }
  ${11 + i * 11}%, 86% { opacity: 1; transform: translateY(0); }
  92%, 100% { opacity: 0; transform: translateY(-4px); }
}`).join('\n')}
.s-lm3-pip .pip-arm-r { animation: s-lm3-scribble 0.55s ease-in-out infinite alternate; }
@keyframes s-lm3-scribble { from { transform: rotate(-5deg); } to { transform: rotate(5deg); } }
`

export function ColumnsScene() {
  const left = 120
  const top = 44
  const width = 500
  const height = 246
  const colW = width / HEADS.length
  let rules = ''
  for (let i = 1; i < HEADS.length; i++) rules += handLine(left + i * colW, top + 18, left + i * colW, top + height - 14, 110 + i, 0.4)
  let rows = ''
  for (let y = top + 104; y < top + height - 10; y += 38) rows += handLine(left + 14, y, left + width - 14, y, 120 + y, 0.5)
  return (
    <Scene w={800} h={300} top={30} css={columnsCss} className="s-lm3" label="A paper character with a pencil writes column headings across the top of a large blank sheet on the wall: aim, method, sample, findings and limits">
      <Box x={left} y={top} w={width} h={height} fill={PAPER} seed={105} />
      <PushPin x={left + 18} y={top + 10} tone="green" seed={106} />
      <PushPin x={left + width - 18} y={top + 10} tone="pink" seed={107} />
      <Ink d={rules} c={INK_SOFT} w={1.2} />
      <Ink d={handLine(left + 10, top + 64, left + width - 10, top + 64, 108, 0.6)} w={2} />
      <Ink d={rows} c={TEXT_LINE} w={1.3} />
      {HEADS.map((word, i) => (
        <Hand key={word} x={left + colW * i + colW / 2} y={top + 50} size={22} anchor="middle" weight={700} className={`s-lm3-word-${i}`}>
          {word}
        </Hand>
      ))}

      <Floor y={320} x1={600} x2={790} seed={109} />
      <Shadow x={706} y={322} rx={46} ry={6} />
      <Place x={706} y={320} s={2} flip>
        <g className="s-lm3-pip">
          <Pip mood="focused" arms="point" look={1.6} seed={125}>
            <Pencil x={60} y={-52} length={40} angle={160} tone="amber" seed={126} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Fill it as you read: the bookworm reads, Pip writes the row.
   ------------------------------------------------------------------ */

const NOTE_LINES = [140, 162, 184, 206, 228, 250]

const notebookCss = `
${NOTE_LINES.map((_, i) => `.s-lm4-line-${i} { animation: s-lm4-line-${i} 10s ease-in-out infinite; }
@keyframes s-lm4-line-${i} {
  0%, ${4 + i * 10}% { transform: scaleX(0); opacity: 1; }
  ${11 + i * 10}%, 84% { transform: scaleX(1); opacity: 1; }
  92% { transform: scaleX(1); opacity: 0; }
  94%, 100% { transform: scaleX(0); opacity: 1; }
}`).join('\n')}
.s-lm4-pip .pip-arm-r { animation: s-lm4-write 0.5s ease-in-out infinite alternate; }
@keyframes s-lm4-write { from { transform: rotate(-6deg); } to { transform: rotate(6deg); } }
`

export function NotebookScene() {
  const nx = 410
  const ny = 110
  return (
    <Scene w={800} h={270} top={62} css={notebookCss} className="s-lm4" label="A bookworm in glasses reads an open book on a desk while a paper character writes a row of notes in a notebook beside it, with one line marked in quotation marks and a page number">
      <Desk y={300} depth={24} seed={130} />

      <OpenBook x={220} y={300} w={180} tone="blue" lines={5} seed={131} />
      <Place x={316} y={210} s={1.3}>
        <Worm seed={132} />
      </Place>

      <Box x={nx} y={ny} w={234} h={190} fill={PAPER} seed={133} />
      <rect x={nx + 4} y={ny + 4} width={226} height={182} fill="url(#ruled)" />
      <Ink d={handLine(nx + 30, ny + 6, nx + 30, ny + 186, 134, 0.3)} c={TONES.red.mid} w={1.4} />
      {NOTE_LINES.map((y, i) => {
        const quoted = i === 3
        const len = quoted ? 76 : 120 + ((i * 29) % 60)
        return (
          <g key={y} className={`s-lm4-line-${i}`} style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}>
            {quoted ? (
              <g>
                <Hand x={nx + 38} y={y + 10} size={24} weight={700} c={TONES.amber.deep}>
                  “
                </Hand>
                <Ink d={handLine(nx + 52, y, nx + 52 + len, y, 140 + i, 0.3)} c={INK} w={1.8} />
                <Hand x={nx + 58 + len} y={y + 10} size={24} weight={700} c={TONES.amber.deep}>
                  ”
                </Hand>
                <Type x={nx + 76 + len} y={y + 6} size={20} weight={700} c={TONES.amber.deep}>
                  p.12
                </Type>
              </g>
            ) : (
              <Ink d={handLine(nx + 40, y, nx + 40 + len, y, 140 + i, 0.3)} c={INK} w={1.8} />
            )}
          </g>
        )
      })}

      <Shadow x={712} y={302} rx={44} ry={6} />
      <Place x={712} y={300} s={1.9} flip>
        <g className="s-lm4-pip">
          <Pip mood="focused" arms="write" look={1.6} seed={150}>
            <Pencil x={30} y={-6} length={34} angle={-80} tone="blue" seed={151} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Read across and down: a loom, papers one way, questions the other,
      with a hole where the gap is.
   ------------------------------------------------------------------ */

const WARP = [236, 278, 320, 362, 404, 446, 488, 530, 572]
const WEFT = [84, 108, 132, 156, 180, 204, 228]
const WARP_TONES = ['blue', 'green', 'amber', 'pink']
const GAP_ROWS = [156, 180]
const GAP = [404, 530]

const loomCss = `
.s-lm5-shuttle { animation: s-lm5-shuttle 6s ease-in-out infinite; }
.s-lm5-thread { animation: s-lm5-thread 6s ease-in-out infinite; }
.s-lm5-ring { animation: s-lm5-ring 3s ease-in-out infinite; }
@keyframes s-lm5-shuttle {
  0% { transform: translateX(0); opacity: 0; }
  8% { opacity: 1; }
  70% { transform: translateX(340px); opacity: 1; }
  78% { transform: translateX(350px); opacity: 0; }
  79%, 100% { transform: translateX(0); opacity: 0; }
}
@keyframes s-lm5-thread {
  0%, 4% { transform: scaleX(0); opacity: 1; }
  70%, 86% { transform: scaleX(1); opacity: 1; }
  94%, 100% { transform: scaleX(1); opacity: 0; }
}
@keyframes s-lm5-ring {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
`

export function LoomScene() {
  let weft = ''
  WEFT.forEach((y, row) => {
    if (GAP_ROWS.includes(y)) {
      weft += handLine(226, y, GAP[0], y, 170 + row, 0.3) + handLine(GAP[1], y, 582, y, 180 + row, 0.3)
    } else {
      weft += handLine(226, y, 582, y, 170 + row, 0.3)
    }
  })
  const over = []
  WARP.forEach((x, k) => {
    WEFT.forEach((y, row) => {
      const hidden = GAP_ROWS.includes(y) && x > GAP[0] && x < GAP[1]
      if ((k + row) % 2 === 0 && !hidden) over.push({ x, y, tone: WARP_TONES[k % 4] })
    })
  })
  return (
    <Scene w={800} h={322} top={10} css={loomCss} className="s-lm5" label="A small loom with coloured threads running down for the questions and across for the papers. In the middle a hole is left where two rows of weaving are missing, circled in red and labelled gap">
      <Hand x={404} y={36} size={21} anchor="middle" weight={700} c={INK_SOFT}>
        questions
      </Hand>
      <rect x={190} y={42} width={428} height={14} fill="url(#wood)" />
      <rect x={190} y={286} width={428} height={14} fill="url(#wood)" />
      <rect x={190} y={42} width={14} height={258} fill="url(#wood)" />
      <rect x={604} y={42} width={14} height={258} fill="url(#wood)" />
      <Ink d={handPoly([[190, 42], [618, 42], [618, 300], [190, 300]], { seed: 160, amp: 0.6, closed: true }) + handPoly([[204, 56], [604, 56], [604, 286], [204, 286]], { seed: 161, amp: 0.4, closed: true })} w={1.7} />

      {WARP.map((x, k) => (
        <Ink key={x} d={handLine(x, 58, x, 284, 162 + k, 0.2)} c={TONES[WARP_TONES[k % 4]].ink} w={3} />
      ))}
      <Ink d={weft} c={TONES.brown.mid} w={7} />
      {over.map((o) => (
        <Ink key={`${o.x}-${o.y}`} d={`M${o.x} ${o.y - 6}L${o.x} ${o.y + 6}`} c={TONES[o.tone].ink} w={3} />
      ))}

      <g className="s-lm5-thread" style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}>
        <Ink d={handLine(226, 252, 582, 252, 190, 0.3)} c={TONES.brown.mid} w={7} />
      </g>
      <Place x={230} y={252}>
        <Anim className="s-lm5-shuttle">
          <path d={ellipsePath(0, 0, 22, 7)} fill="url(#wood)" />
          <Ink d={handEllipse(0, 0, 22, 7, { seed: 191, amp: 0.3 })} w={1.5} />
          <circle cx={-2} cy={0} r={2.6} fill={TONES.brown.deep} />
        </Anim>
      </Place>

      <g className="s-lm5-ring">
        <Ink d={handEllipse(467, 168, 78, 30, { seed: 192, amp: 0.8 })} c={TONES.red.ink} w={2.4} dash="7 5" />
      </g>
      <Hand x={690} y={180} size={24} anchor="middle" weight={700} c={TONES.red.ink}>
        gap
      </Hand>
      <Arrow from={[668, 174]} to={[552, 170]} bend={0.1} seed={193} c={TONES.red.ink} />
      <Hand x={690} y={112} size={21} anchor="middle" weight={700} c={INK_SOFT}>
        papers
      </Hand>
      <Arrow from={[656, 108]} to={[624, 108]} bend={0} seed={194} c={INK_SOFT} head={8} />

      <Shadow x={110} y={322} rx={40} ry={5} />
      <Place x={110} y={320} s={1.8}>
        <Pip mood="happy" arms="point" look={1.6} seed={195} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. From matrix to paragraph: one column's cells travel over and
      become lines of writing.
   ------------------------------------------------------------------ */

const PARA_LINES = [100, 122, 144, 166, 188, 210, 232, 254]

const paragraphCss = `
${PARA_LINES.map((_, i) => `.s-lm6-line-${i} { animation: s-lm6-line-${i} 12s ease-in-out infinite; }
@keyframes s-lm6-line-${i} {
  0%, ${10 + i * 7}% { transform: scaleX(0); opacity: 1; }
  ${15 + i * 7}%, 86% { transform: scaleX(1); opacity: 1; }
  93% { transform: scaleX(1); opacity: 0; }
  95%, 100% { transform: scaleX(0); opacity: 1; }
}`).join('\n')}
.s-lm6-cell { animation: s-lm6-cell 4s ease-in-out infinite; }
@keyframes s-lm6-cell {
  0% { transform: translate(0, 0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  50% { transform: translate(70px, -30px) scale(0.9); }
  82% { transform: translate(140px, 4px) scale(0.7); opacity: 1; }
  88% { transform: translate(144px, 6px) scale(0.6); opacity: 0; }
  89%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
}
`

export function ParagraphScene() {
  const gx = 50
  const gy = 70
  const cw = 72
  const rh = 40
  const heads = ['aim', 'result', 'gap']
  const sheetX = 452
  return (
    <Scene w={800} h={298} top={36} css={paragraphCss} className="s-lm6" label="On the left a small table with its result column highlighted; its cells float across along a dashed arrow and turn into lines of a paragraph on a sheet of paper on the right">
      <Grid x={gx} y={gy} cols={3} rows={4} cw={cw} rh={rh} header="green" seed={200} />
      <rect x={gx + cw + 2} y={gy + rh + 2} width={cw - 4} height={rh * 3 - 4} fill={TONES.amber.mid} opacity="0.35" />
      {heads.map((word, c) => (
        <Hand key={word} x={gx + c * cw + cw / 2} y={gy + 27} size={20} anchor="middle" weight={700}>
          {word}
        </Hand>
      ))}
      {[1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => <Notes key={`${r}-${c}`} x={gx + c * cw + 12} y={gy + r * rh + 14} w={40} seed={210 + r * 3 + c} />),
      )}

      <Arrow from={[284, 150]} to={[438, 158]} bend={-0.22} seed={220} c={INK_SOFT} dash="5 7" />
      {[0, 1, 2].map((i) => (
        <Place key={i} x={296} y={152}>
          <Anim className="s-lm6-cell" style={{ animationDelay: `${i * -1.33}s` }}>
            <rect x={-10} y={-8} width={20} height={16} rx={2} fill="url(#fill-amber)" />
            <Ink d={handPoly([[-10, -8], [10, -8], [10, 8], [-10, 8]], { seed: 221 + i, amp: 0.2, closed: true })} w={1.2} />
          </Anim>
        </Place>
      ))}

      <Sheet x={sheetX} y={52} w={262} h={250} lines={0} fold={24} seed={230} />
      {PARA_LINES.map((y, i) => {
        const start = i === 0 ? sheetX + 44 : sheetX + 22
        const end = i === PARA_LINES.length - 1 ? sheetX + 150 : sheetX + 236 - ((i * 17) % 30)
        return (
          <g key={y} className={`s-lm6-line-${i}`} style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}>
            <Ink d={handLine(start, y, end, y, 240 + i, 0.3)} c={INK_SOFT} w={1.8} />
            {i === 1 || i === 4 ? <rect x={end - 30} y={y - 5} width={24} height={10} rx={2} fill={TONES.amber.mid} opacity="0.8" /> : null}
          </g>
        )
      })}

      <Floor y={322} x1={30} x2={420} seed={250} />
      <Shadow x={360} y={324} rx={34} ry={5} />
      <Place x={360} y={322} s={1.3}>
        <Pip mood="happy" arms="wave" look={1.5} seed={251} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Tools: the matrix on a laptop, exported as a CSV file.
   ------------------------------------------------------------------ */

const toolsCss = `
.s-lm7-dot { animation: s-lm7-dot 8s ease-in-out infinite backwards; }
.s-lm7-csv { animation: s-lm7-csv 8s ease-in-out infinite; }
@keyframes s-lm7-dot {
  0%, 6% { opacity: 0; transform: scale(0.2); }
  12%, 86% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.2); }
}
@keyframes s-lm7-csv {
  0%, 44% { transform: translateX(-70px); opacity: 0; }
  56%, 88% { transform: translateX(0); opacity: 1; }
  96%, 100% { transform: translateX(-70px); opacity: 0; }
}
`

export function ToolsScene() {
  const [sx, sy, sw, sh] = laptopScreen(330, 320, 280)
  const cols = 4
  const rows = 5
  const cw = sw / cols
  const rh = sh / rows
  let grid = ''
  for (let c = 1; c < cols; c++) grid += handLine(sx + c * cw, sy + 2, sx + c * cw, sy + sh - 2, 260 + c, 0.2)
  for (let r = 1; r < rows; r++) grid += handLine(sx + 2, sy + r * rh, sx + sw - 2, sy + r * rh, 270 + r, 0.2)
  const dots = []
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      const i = (r - 1) * (cols - 1) + (c - 1)
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={sx + c * cw + cw / 2}
          cy={sy + r * rh + rh / 2}
          r={3.2}
          fill={[TONES.blue.ink, TONES.green.ink, TONES.pink.ink][c - 1]}
          className="s-lm7-dot"
          style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: `${i * 0.25}s` }}
        />,
      )
    }
  }
  return (
    <Scene w={800} h={262} top={70} css={toolsCss} className="s-lm7" label="A laptop on a desk shows the matrix as a spreadsheet filling up cell by cell, a sheet marked CSV slides out beside it, and a paper character waves next to a glass of chai">
      <Place x={498} y={196}>
        <Anim className="s-lm7-csv">
          <Sheet x={0} y={0} w={68} h={86} lines={0} fold={14} seed={280} />
          <Type x={30} y={56} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
            CSV
          </Type>
        </Anim>
      </Place>

      <Desk y={320} depth={24} seed={281} />
      <Laptop x={330} y={320} w={280} seed={282}>
        <rect x={sx} y={sy} width={sw} height={rh} fill="url(#fill-amber)" />
        <Ink d={grid} c={INK_SOFT} w={1} />
        {dots}
      </Laptop>

      <Chai x={620} y={320} s={1.2} seed={283} />
      <Shadow x={720} y={322} rx={42} ry={5} />
      <Place x={720} y={320} s={1.8}>
        <Pip mood="grin" arms="wave" look={-1.5} seed={284} />
      </Place>
    </Scene>
  )
}
