import {
  Anim,
  Arrow,
  Box,
  Checklist,
  Cross,
  Desk,
  Floor,
  Funnel,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  Puzzle,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Stack,
  StampMark,
  TEXT_LINE,
  TONES,
  Tick,
  handEllipse,
  handLine,
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

/* ------------------------------------------------------------------
   1. A plain bibliography, and the same list with a note under each.
   ------------------------------------------------------------------ */

const whatCss = `
.s-anb1-note { animation: s-anb1-pop 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 7.5s); }
.s-anb1-pip .pip-body { animation: s-anb1-bob 3.2s ease-in-out infinite; }
@keyframes s-anb1-pop {
  0%, 10% { transform: scale(1); opacity: 1; }
  16%, 34% { transform: scale(0.6); opacity: 0; }
  42% { transform: scale(1.06); opacity: 1; }
  48%, 100% { transform: scale(1); opacity: 1; }
}
@keyframes s-anb1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function WhatScene() {
  const floor = 300
  const L = 90
  const R = 470
  const W = 240
  return (
    <Scene w={800} h={290} top={22} css={whatCss} className="s-anb1" label="On the left a sheet labelled bibliography holds a plain list of citation lines. An arrow leads to the same list on the right, labelled annotated, where a green note sits under every citation">
      <Floor y={floor} x1={30} x2={770} seed={101} />

      <Box x={L} y={56} w={W} h={200} r={4} fill={PAPER} seed={102} sw={1.8} />
      <Hand x={L + W / 2} y={46} size={22} anchor="middle" weight={700}>
        bibliography
      </Hand>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Ink
          key={i}
          d={handLine(L + 18, 84 + i * 30, L + W - 30, 84 + i * 30, 110 + i * 2, 0.35) + handLine(L + 36, 95 + i * 30, L + 140, 95 + i * 30, 111 + i * 2, 0.35)}
          c={INK_SOFT}
          w={1.8}
        />
      ))}

      <Arrow from={[L + W + 18, 150]} to={[R - 20, 150]} bend={-0.12} seed={120} w={2} />
      <Hand x={(L + W + R) / 2} y={124} size={18} anchor="middle" c={INK_SOFT}>
        add a note
      </Hand>

      <Box x={R} y={56} w={W} h={200} r={4} fill={PAPER} seed={130} sw={1.8} />
      <Hand x={R + W / 2} y={46} size={22} anchor="middle" weight={700} c={TONES.green.deep}>
        annotated
      </Hand>
      {[0, 1, 2].map((i) => {
        const y = 78 + i * 62
        return (
          <g key={i}>
            <Ink d={handLine(R + 18, y, R + W - 30, y, 140 + i * 4, 0.35) + handLine(R + 36, y + 10, R + 140, y + 10, 141 + i * 4, 0.35)} c={INK_SOFT} w={1.8} />
            <Anim className="s-anb1-note" origin={[R + 40, y + 30]} style={{ '--i': i }}>
              <rect x={R + 34} y={y + 18} width={W - 56} height={30} fill={TONES.green.tint} />
              <Ink d={handLine(R + 34, y + 18, R + 34, y + 48, 142 + i * 4, 0.3)} c={TONES.green.ink} w={2} />
              <Lines x={R + 42} y={y + 28} rows={[150, 120]} seed={143 + i * 4} c={TONES.green.deep} w={1.5} o={0.8} />
            </Anim>
          </g>
        )
      })}

      <Shadow x={400} y={floor + 2} rx={26} ry={4} />
      <Place x={400} y={floor} s={1.25}>
        <g className="s-anb1-pip">
          <Pip mood="happy" arms="point" tone="pink" glasses look={1.6} seed={150} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Three jobs: describe, judge, connect.
   ------------------------------------------------------------------ */

const CARDS = [
  { x: 60, word: 'describe', ask: 'what is it about?', tone: 'blue' },
  { x: 300, word: 'judge', ask: 'is it any good?', tone: 'amber' },
  { x: 540, word: 'connect', ask: 'how will I use it?', tone: 'pink' },
]

const typesCss = `
.s-anb2-ring { animation: s-anb2-ring 9s ease-in-out infinite; animation-delay: calc(var(--i) * 3s - 9s); opacity: 0; }
.s-anb2 .scale-beam { animation: s-anb2-rock 4s ease-in-out infinite; }
.s-anb2-piece { animation: s-anb2-fit 4.5s ease-in-out infinite; }
@keyframes s-anb2-ring {
  0%, 30%, 100% { opacity: 0; }
  6%, 26% { opacity: 1; }
}
@keyframes s-anb2-rock {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}
@keyframes s-anb2-fit {
  0%, 100% { transform: translateX(0); }
  40%, 70% { transform: translateX(-14px); }
}
`

export function TypesScene() {
  const top = 70
  const h = 170
  return (
    <Scene w={800} h={290} top={20} css={typesCss} className="s-anb2" label="Three cards labelled describe, judge and connect. The first holds a page of text, the second a balance scale and the third two puzzle pieces fitting together, under the questions what is it about, is it any good and how will I use it">
      {CARDS.map((card, i) => (
        <g key={card.word}>
          <Box x={card.x} y={top} w={200} h={h} r={8} fill={TONES[card.tone].tint} seed={200 + i * 5} sw={1.8} />
          <Hand x={card.x + 100} y={top + 34} size={26} anchor="middle" weight={700}>
            {card.word}
          </Hand>
          <Hand x={card.x + 100} y={top + h + 34} size={19} anchor="middle" c={INK_SOFT}>
            {card.ask}
          </Hand>
          <Ink
            d={handEllipse(card.x + 100, top + h / 2, 118, 104, { seed: 210 + i, amp: 1.2 })}
            c={TONES.red.ink}
            w={2.2}
            className="s-anb2-ring"
            style={{ '--i': i }}
          />
        </g>
      ))}

      <Sheet x={128} y={top + 50} w={64} h={84} lines={5} fold={13} seed={220} />

      <Scale x={400} y={top + h - 12} s={0.62} seed={230} />

      <Place x={0} y={0}>
        <Puzzle x={608} y={top + 100} s={0.85} tone="amber" seed={240} />
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-anb2-piece">
          <Puzzle x={680} y={top + 100} s={0.85} tone="green" seed={241} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Many sources in, the useful few out.
   ------------------------------------------------------------------ */

const sourcesCss = `
.s-anb3-drop { animation: s-anb3-drop 6s ease-in infinite; animation-delay: calc(var(--i) * 2s - 6s); opacity: 0; }
.s-anb3-pip .pip-body { animation: s-anb3-lean 4s ease-in-out infinite; }
.s-anb3-lens { animation: s-anb3-scan 4s ease-in-out infinite; }
@keyframes s-anb3-drop {
  0% { transform: translateY(-40px) rotate(-12deg); opacity: 0; }
  12% { opacity: 1; }
  48% { transform: translateY(70px) rotate(8deg); opacity: 1; }
  58%, 100% { transform: translateY(110px) rotate(0deg); opacity: 0; }
}
@keyframes s-anb3-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
@keyframes s-anb3-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 6px); }
}
`

export function SourcesScene() {
  const floor = 300
  const fx = 400
  return (
    <Scene w={800} h={300} top={14} css={sourcesCss} className="s-anb3" label="Sheets fall into a big funnel from above, next to a tall pile labelled everything I found. Out of the funnel comes a small neat stack labelled the useful few, and a paper character holds a magnifying glass over it">
      <Floor y={floor} x1={30} x2={770} seed={301} />

      <Pile x={150} y={floor} w={120} count={18} seed={302} />
      <Hand x={150} y={floor - 112} size={20} anchor="middle" c={INK_SOFT}>
        everything I found
      </Hand>

      {[0, 1, 2].map((i) => (
        <Place key={i} x={fx - 50 + i * 46} y={60}>
          <Anim className="s-anb3-drop" style={{ '--i': i }}>
            <Sheet x={-14} y={-18} w={28} h={36} lines={3} fold={7} tone={['paper', 'amber', 'blue'][i]} seed={310 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Funnel x={fx} y={110} w={250} h={130} tone="green" seed={320} />

      <Stack x={fx} y={floor} w={54} h={56} count={3} spread={6} seed={330} tones={['paper', 'green', 'paper']} />
      <Hand x={fx + 100} y={floor - 14} size={20} anchor="middle" c={TONES.green.deep} weight={700}>
        the useful few
      </Hand>

      <Shadow x={640} y={floor + 2} rx={32} ry={4} />
      <Place x={640} y={floor} s={1.5} flip>
        <g className="s-anb3-pip">
          <Pip mood="focused" arms="point" tone="pink" glasses look={1.4} seed={340} />
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-anb3-lens">
          <Magnifier x={560} y={226} r={20} angle={30} tone="amber" seed={341} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. One annotation, written part by part.
   ------------------------------------------------------------------ */

const PARTS = [
  { label: 'what it is about', tone: 'blue', rows: [180, 130] },
  { label: 'how it was done', tone: 'amber', rows: [160] },
  { label: 'how good it is', tone: 'green', rows: [184, 110] },
  { label: 'what it does for me', tone: 'pink', rows: [150] },
]

const noteCss = `
.s-anb4-pip .pip-arm-r, .s-anb4-pen { animation: s-anb4-scribble 0.9s ease-in-out infinite; }
.s-anb4-pip .pip-body { animation: s-anb4-bob 3.4s ease-in-out infinite; }
@keyframes s-anb4-scribble {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
@keyframes s-anb4-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
${PARTS.map(
  (_, i) => `.s-anb4-p${i} { animation: s-anb4-p${i} 10s ease-in-out infinite; }
@keyframes s-anb4-p${i} {
  0%, 6% { transform: scaleX(1); }
  10%, ${14 + i * 18}% { transform: scaleX(0); }
  ${28 + i * 18}%, 100% { transform: scaleX(1); }
}`,
).join('\n')}
`

export function NoteScene() {
  const floor = 300
  const cx = 300
  const cy = 40
  return (
    <Scene w={800} h={290} top={22} css={noteCss} className="s-anb4" label="A large card holds four strips labelled what it is about, how it was done, how good it is and what it does for me. Each strip fills with handwriting in turn while a paper character writes with a pencil, beside a tag reading about 150 words">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Box x={cx} y={cy + 26} w={430} h={222} r={6} fill={PAPER} seed={402} sw={1.8} double />
      {PARTS.map((part, i) => {
        const y = cy + 44 + i * 50
        return (
          <g key={part.label}>
            <rect x={cx + 16} y={y} width={398} height={40} rx={4} fill={TONES[part.tone].tint} />
            <Hand x={cx + 28} y={y + 26} size={18} weight={700}>
              {part.label}
            </Hand>
            <Anim className={`s-anb4-p${i}`} origin={[cx + 218, y + 15]}>
              <Lines x={cx + 218} y={y + 15} rows={part.rows} gap={12} seed={410 + i * 7} c={TONES[part.tone].deep} w={1.6} o={0.8} />
            </Anim>
          </g>
        )
      })}

      <Box x={606} y={cy - 8} w={140} h={30} r={6} fill={TONES.amber.mid} seed={440} sw={1.5} />
      <Hand x={676} y={cy + 13} size={18} anchor="middle" weight={700}>
        about 150 words
      </Hand>

      <Shadow x={190} y={floor + 2} rx={38} ry={5} />
      <Place x={190} y={floor} s={1.8}>
        <g className="s-anb4-pip">
          <Pip mood="focused" arms="write" tone="pink" glasses look={1.6} seed={450}>
            <Anim className="s-anb4-pen" origin={[22, -39]}>
              <Pencil x={24} y={-20} length={30} angle={-60} tone="amber" seed={451} />
            </Anim>
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The two formats: the annotation indented half an inch in APA,
      one inch in MLA, under a citation with its hanging indent.
   ------------------------------------------------------------------ */

const PAGES = [
  { x: 70, style: 'APA', indent: 34, mark: '0.5 in', tone: 'blue' },
  { x: 430, style: 'MLA', indent: 68, mark: '1 in', tone: 'pink' },
]

const formatCss = `
.s-anb5-guide { animation: s-anb5-pulse 4s ease-in-out infinite; }
.s-anb5-slide { animation: s-anb5-slide 6s ease-in-out infinite; }
@keyframes s-anb5-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@keyframes s-anb5-slide {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-10px); }
  45%, 80% { transform: translateX(0); }
}
`

function Page({ x, style, indent, mark, tone, seed }) {
  const y = 66
  const m = x + 26
  const ruler = handLine(x, y - 22, x + 300, y - 22, seed, 0.3)
  let ticks = ''
  for (let i = 0; i <= 8; i++) ticks += handLine(x + 26 + i * 34, y - 22, x + 26 + i * 34, y - (i % 2 ? 26 : 30), seed + 1 + i, 0.1)
  return (
    <g>
      <rect x={x} y={y - 34} width={300} height={14} fill={TONES.amber.tint} />
      <Ink d={ruler + ticks} w={1.3} />
      <Box x={x} y={y} w={300} h={210} r={3} fill={PAPER} seed={seed + 20} sw={1.8} />
      <Hand x={x + 150} y={y + 30} size={22} anchor="middle" weight={700}>
        {style}
      </Hand>

      <Ink d={handLine(m, y + 54, x + 270, y + 54, seed + 30, 0.3) + handLine(m + 34, y + 68, x + 168, y + 68, seed + 31, 0.3)} c={INK} w={2} />
      <Hand x={x + 284} y={y + 72} size={14} anchor="end" c={INK_SOFT}>
        hanging indent
      </Hand>

      <Anim className="s-anb5-slide">
        <rect x={m + indent - 4} y={y + 84} width={270 - indent - 26 + 4} height={98} fill={TONES[tone].tint} />
        <Lines x={m + indent + 4} y={y + 98} rows={[200 - indent, 210 - indent, 190 - indent, 200 - indent, 130 - indent, 160 - indent, 100]} gap={12} seed={seed + 40} c={TONES[tone].deep} w={1.5} o={0.8} />
      </Anim>

      <Ink d={handLine(m + indent - 4, y - 18, m + indent - 4, y + 190, seed + 50, 0.2)} c={TONES.red.ink} w={1.6} dash="5 5" className="s-anb5-guide" />
      <Ink d={handLine(m, y - 18, m, y + 190, seed + 51, 0.2)} c={INK_SOFT} w={1.2} dash="3 5" />
      <Hand x={m + indent + 2} y={y + 206} size={18} weight={700} c={TONES.red.ink}>
        {mark}
      </Hand>
    </g>
  )
}

export function FormatScene() {
  return (
    <Scene w={800} h={290} top={22} css={formatCss} className="s-anb5" label="Two pages with rulers along the top, labelled APA and MLA. On each, a citation runs across with its second line indented, and the annotation sits below as a block, indented half an inch on the APA page and one inch on the MLA page, marked by dashed red guide lines">
      {PAGES.map((page, i) => (
        <Page key={page.style} {...page} seed={500 + i * 70} />
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Draft one pasted the summary; draft two is in Arpita's words.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-anb6-stamp { animation: s-anb6-thump 6s ease-in-out infinite; }
.s-anb6-tick { animation: s-anb6-tick 6s ease-in-out infinite; }
.s-anb6-pip .pip-body { animation: s-anb6-hop 6s ease-in-out infinite; }
@keyframes s-anb6-thump {
  0%, 100% { transform: scale(1); opacity: 1; }
  8% { transform: scale(1.35); opacity: 0; }
  18% { transform: scale(0.94); opacity: 1; }
  24% { transform: scale(1); }
}
@keyframes s-anb6-tick {
  0%, 40%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
  58% { transform: scale(1); }
}
@keyframes s-anb6-hop {
  0%, 46%, 64%, 100% { transform: translateY(0); }
  52% { transform: translateY(-8px); }
  58% { transform: translateY(0); }
}
`

export function ExampleScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={22} css={exampleCss} className="s-anb6" label="Two drafts of the same entry. The first, marked draft one, is a solid block of copied lines with a red stamp reading copied and a cross. An arrow leads to draft two, where a citation sits above a short green note in the student's own words, with a green tick, and a paper character hops beside it">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Sheet x={70} y={48} w={220} h={232} lines={0} fold={22} seed={602} />
      <Hand x={150} y={40} size={20} anchor="middle" c={INK_SOFT}>
        draft one
      </Hand>
      <Ink d={handLine(88, 90, 250, 90, 603, 0.3) + handLine(106, 101, 200, 101, 604, 0.3)} c={INK_SOFT} w={1.8} />
      <Lines x={88} y={122} rows={[180, 176, 182, 170, 180, 178, 174, 182, 160, 176, 120]} gap={12} seed={605} c={TONES.grey.ink} w={1.5} />
      <Place x={0} y={0}>
        <Anim className="s-anb6-stamp" origin={[180, 190]}>
          <StampMark x={180} y={190} w={130} h={44} text="COPIED" tone="red" rotate={-10} size={22} bg={PAPER} seed={606} />
        </Anim>
      </Place>
      <Cross x={262} y={66} s={1.1} seed={607} />

      <Arrow from={[310, 160]} to={[380, 160]} bend={-0.15} seed={610} w={2} />

      <Sheet x={400} y={48} w={220} h={232} lines={0} fold={22} seed={620} />
      <Hand x={480} y={40} size={20} anchor="middle" c={TONES.green.deep} weight={700}>
        draft two
      </Hand>
      <Ink d={handLine(418, 90, 580, 90, 621, 0.3) + handLine(436, 101, 530, 101, 622, 0.3)} c={INK_SOFT} w={1.8} />
      <rect x={430} y={118} width={168} height={110} fill={TONES.green.tint} />
      <Ink d={handLine(430, 118, 430, 228, 623, 0.3)} c={TONES.green.ink} w={2} />
      <Lines x={440} y={134} rows={[140, 150, 120, 146, 132, 150, 90, 110]} gap={12} seed={624} c={TONES.green.deep} w={1.5} o={0.85} />
      <Place x={0} y={0}>
        <Anim className="s-anb6-tick" origin={[580, 254]}>
          <Tick x={580} y={254} s={1.4} />
        </Anim>
      </Place>

      <Shadow x={700} y={floor + 2} rx={30} ry={4} />
      <Place x={700} y={floor} s={1.5} flip>
        <g className="s-anb6-pip">
          <Pip mood="grin" arms="up" tone="pink" glasses look={1.4} seed={630} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The last check, and the guide reading the list.
   ------------------------------------------------------------------ */

const checkCss = `
.s-anb7 .check-tick { animation: s-anb7-tick 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 7.5s); }
.s-anb7-guide .pip-body { animation: s-anb7-nod 3s ease-in-out infinite; }
.s-anb7-arpita .pip-body { animation: s-anb7-bob 3.6s ease-in-out infinite; }
.s-anb7-say { animation: s-anb7-say 7.5s ease-in-out infinite; }
@keyframes s-anb7-tick {
  0%, 30% { stroke-dashoffset: 1; }
  40%, 92% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-anb7-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-anb7-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-anb7-say {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

export function ChecklistScene() {
  const floor = 300
  const desk = 228
  return (
    <Scene w={800} h={290} top={22} css={checkCss} className="s-anb7" label="A clipboard checklist of five items is ticked off one by one on a desk. A paper character in glasses reads the annotated list and says in a speech bubble now I can see your thesis, while the student beside the desk smiles">
      <Floor y={floor} x1={30} x2={770} seed={701} />
      <Legs x1={250} x2={470} top={desk + 18} floor={floor} seed={702} />
      <Desk y={desk} x1={230} x2={490} depth={18} seed={703} />

      <Checklist x={290} y={60} w={150} items={5} done={5} seed={704} />

      <Shadow x={130} y={floor + 2} rx={30} ry={4} />
      <Place x={130} y={floor} s={1.5}>
        <g className="s-anb7-arpita">
          <Pip mood="happy" arms="down" tone="pink" glasses look={1.6} seed={710} />
        </g>
      </Place>

      <Shadow x={640} y={floor + 2} rx={30} ry={4} />
      <Place x={640} y={floor} s={1.5} flip>
        <g className="s-anb7-guide">
          <Pip mood="proud" arms="hold" tone="blue" glasses seed={720}>
            <Sheet x={-12} y={-31} w={24} h={28} tone="green" lines={3} fold={6} seed={721} sw={1.3} />
          </Pip>
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-anb7-say">
          <Speech x={540} y={40} w={220} h={62} tx={630} ty={176} seed={730}>
            <Hand x={650} y={66} size={19} anchor="middle" weight={700}>
              now I can see
            </Hand>
            <Hand x={650} y={88} size={19} anchor="middle" weight={700}>
              your thesis
            </Hand>
          </Speech>
        </Anim>
      </Place>
    </Scene>
  )
}
