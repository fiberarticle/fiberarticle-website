import {
  Anim,
  Arrow,
  Book,
  Bot,
  Box,
  Cross,
  Desk,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  OpenBook,
  Oval,
  PAPER,
  PAPER_SHADE,
  Pencil,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Speech,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/* A coloured tag drawn round its centre, with its mark written on it. */
function Tag({ w = 28, h = 28, tone, mark, size = 20, seed = 1 }) {
  const pts = [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]]
  return (
    <g>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={4} fill={TONES[tone].mid} />
      <Ink d={handPoly(pts, { seed, amp: 0.3, closed: true })} w={1.4} />
      {mark ? (
        <Hand x={0} y={size * 0.62} size={size} anchor="middle" weight={700}>
          {mark}
        </Hand>
      ) : null}
    </g>
  )
}

/* A small note card drawn round its centre, its top band in its colour. */
function MiniCard({ tone, seed }) {
  const pts = [[-23, -20], [23, -20], [23, 20], [-23, 20]]
  return (
    <g>
      <path d={polyPath(pts)} fill={PAPER} />
      <rect x={-23} y={-20} width={46} height={10} fill={TONES[tone].mid} />
      <Ink d={handLine(-16, 1, 15, 1, seed, 0.3) + handLine(-16, 10, 6, 10, seed + 1, 0.3)} c={TEXT_LINE} w={1.5} />
      <Ink d={handPoly(pts, { seed: seed + 2, amp: 0.4, closed: true })} w={1.5} />
    </g>
  )
}

/* A word in a sentence, drawn as a coloured block. Anchor: top-left. */
function Word({ x = 0, y = 0, w, h = 18, fill, seed }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={fill} />
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.3, closed: true })} w={1.3} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Plagiarism starts in your notes: a tagged note flies from the
      notebook to the draft, its tag falls off on the way, and the line
      lands in the draft with nothing to say where it came from.
   ------------------------------------------------------------------ */

const peelCss = `
.s-ap1-card { animation: s-ap1-card 8s ease-in-out infinite; }
.s-ap1-cardtag { animation: s-ap1-cardtag 8s linear infinite; }
.s-ap1-tag { animation: s-ap1-tag 8s ease-in-out infinite; }
.s-ap1-bad { animation: s-ap1-bad 8s ease-in-out infinite; }
.s-ap1-ask { animation: s-ap1-ask 8s ease-out infinite; }
@keyframes s-ap1-card {
  0% { opacity: 0; transform: translate(0px, 0px) rotate(0deg) scale(1); }
  5% { opacity: 1; transform: translate(0px, 0px) rotate(0deg) scale(1); }
  30% { opacity: 1; transform: translate(171px, -75px) rotate(-6deg) scale(1); }
  52% { opacity: 1; transform: translate(407px, -25px) rotate(0deg) scale(1); }
  56% { opacity: 0; transform: translate(407px, -25px) rotate(0deg) scale(0.8); }
  57%, 100% { opacity: 0; transform: translate(0px, 0px) rotate(0deg) scale(1); }
}
@keyframes s-ap1-cardtag {
  0%, 29.5% { opacity: 1; }
  30%, 97% { opacity: 0; }
  98%, 100% { opacity: 1; }
}
@keyframes s-ap1-tag {
  0%, 29.5% { opacity: 0; transform: translate(-2px, -129px) rotate(9deg); }
  30% { opacity: 1; transform: translate(-2px, -129px) rotate(9deg); }
  38% { opacity: 1; transform: translate(-22px, -86px) rotate(-30deg); }
  45% { opacity: 1; transform: translate(10px, -38px) rotate(28deg); }
  51% { opacity: 1; transform: translate(0px, 0px) rotate(0deg); }
  54% { opacity: 1; transform: translate(0px, -5px) rotate(5deg); }
  57%, 90% { opacity: 1; transform: translate(0px, 0px) rotate(0deg); }
  95% { opacity: 0; transform: translate(0px, 0px) rotate(0deg); }
  96%, 100% { opacity: 0; transform: translate(-2px, -129px) rotate(9deg); }
}
@keyframes s-ap1-bad {
  0%, 52% { opacity: 0; }
  56%, 90% { opacity: 1; }
  95%, 100% { opacity: 0; }
}
@keyframes s-ap1-ask {
  0%, 57% { opacity: 0; transform: scale(0.4); }
  61% { opacity: 1; transform: scale(1.2); }
  64%, 88% { opacity: 1; transform: scale(1); }
  92%, 100% { opacity: 0; transform: scale(0.4); }
}
`

const DRAFT = [
  { y: 140, len: 128 },
  { y: 160, len: 112 },
  { y: 180, len: 134 },
  { y: 220, len: 104 },
  { y: 240, len: 130 },
  { y: 260, len: 88 },
]

export function PeelScene() {
  const lines = DRAFT.map((l, i) => handLine(558, l.y, 558 + l.len, l.y, 120 + i, 0.3)).join('')
  return (
    <Scene
      w={800}
      h={270}
      top={50}
      css={peelCss}
      className="s-ap1"
      label="A note card with a coloured source tag flies in an arc from an open notebook labelled notes towards a sheet labelled draft; on the way, under the words a week later, its tag falls off onto the desk, the note lands in the draft as a red line, and a paper character beside the draft looks puzzled"
    >
      <Desk y={296} depth={22} seed={110} />

      <OpenBook x={160} y={292} w={180} tone="blue" lines={5} seed={111} />
      <Hand x={112} y={184} size={24} anchor="middle" weight={700}>
        notes
      </Hand>

      <Arrow from={[222, 214]} to={[546, 190]} bend={-0.3} dash="5 7" c={INK_SOFT} w={1.5} head={10} seed={112} />
      <Hand x={384} y={112} size={22} anchor="middle" c={INK_SOFT}>
        a week later
      </Hand>

      <Sheet x={540} y={92} w={170} h={200} lines={0} fold={26} seed={113} />
      <Ink d={lines} c={TEXT_LINE} w={1.7} />
      <Hand x={625} y={82} size={24} anchor="middle" weight={700}>
        draft
      </Hand>
      <g className="s-ap1-bad">
        <rect x={552} y={192} width={132} height={16} rx={3} fill={TONES.red.mid} opacity="0.7" />
        <Ink d={handLine(558, 200, 678, 200, 126, 0.3)} c={TONES.red.deep} w={1.8} />
      </g>

      <Place x={352} y={282}>
        <Anim className="s-ap1-tag">
          <Place r={-15}>
            <Tag tone="blue" mark="“ ”" seed={114} />
          </Place>
        </Anim>
      </Place>

      <Place x={205} y={225}>
        <Anim className="s-ap1-card" style={{ opacity: 0 }}>
          <rect x={-44} y={-21} width={88} height={42} rx={3} fill={PAPER} />
          <Ink d={handLine(-6, -6, 34, -6, 115, 0.3) + handLine(-6, 7, 24, 7, 116, 0.3)} c={TEXT_LINE} w={1.6} />
          <Ink d={handPoly([[-44, -21], [44, -21], [44, 21], [-44, 21]], { seed: 117, amp: 0.4, closed: true })} w={1.6} />
          <g className="s-ap1-cardtag">
            <Place x={-26}>
              <Tag tone="blue" mark="“ ”" seed={114} />
            </Place>
          </g>
        </Anim>
      </Place>

      <Shadow x={755} y={298} rx={32} ry={4} />
      <Place x={755} y={296} s={1.5}>
        <Pip mood="worried" arms="think" tone="blue" look={-1.5} seed={118} />
      </Place>
      <Place x={774} y={172}>
        <Anim className="s-ap1-ask" spin style={{ opacity: 0 }}>
          <Hand x={0} y={15} size={44} anchor="middle" weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. A note-taking system: Pip sends each note card into the tray for
      its kind, and every card wears the colour of its tray.
   ------------------------------------------------------------------ */

const TRAYS = [
  { x: 250, tone: 'blue', word: 'quote' },
  { x: 390, tone: 'green', word: 'paraphrase' },
  { x: 530, tone: 'pink', word: 'summary' },
  { x: 670, tone: 'amber', word: 'my idea' },
]

/* When each card leaves the notebook (percent of the loop). */
const TOSS = [4, 26, 48, 70]
const NOTEBOOK = [96, 244]
const DROP_Y = 278

const SLOTS = [
  { dx: -26, top: 222, r: -8 },
  { dx: 0, top: 216, r: 2 },
  { dx: 25, top: 226, r: 9 },
]

const traysCss = `
${TRAYS.map((tray, i) => {
  const a = TOSS[i]
  const sx = NOTEBOOK[0] - tray.x
  const sy = NOTEBOOK[1] - DROP_Y
  return `.s-ap2-fly-${i} { animation: s-ap2-fly-${i} 10s ease-in-out infinite; }
@keyframes s-ap2-fly-${i} {
  0%, ${a}% { opacity: 0; transform: translate(${sx}px, ${sy}px) rotate(0deg); }
  ${a + 2}% { opacity: 1; transform: translate(${sx}px, ${sy}px) rotate(0deg); }
  ${a + 9}% { opacity: 1; transform: translate(${sx / 2}px, -128px) rotate(-12deg); }
  ${a + 14}% { opacity: 1; transform: translate(0px, -73px) rotate(0deg); }
  ${a + 18}% { opacity: 1; transform: translate(0px, 0px) rotate(0deg); }
  ${a + 19}% { opacity: 0; transform: translate(0px, 0px) rotate(0deg); }
  ${a + 20}%, 100% { opacity: 0; transform: translate(${sx}px, ${sy}px) rotate(0deg); }
}`
}).join('\n')}
.s-ap2-pip .pip-body { animation: s-ap2-nod 10s ease-in-out infinite; }
@keyframes s-ap2-nod {
  0% { transform: translateY(0px); }
  ${TOSS.map((a) => `${a}% { transform: translateY(0px); } ${a + 2}% { transform: translateY(-6px); } ${a + 5}% { transform: translateY(0px); }`).join('\n  ')}
  100% { transform: translateY(0px); }
}
`

function TrayBack({ x, tone, seed }) {
  return (
    <g>
      <rect x={x - 54} y={232} width={108} height={68} fill={TONES[tone].tint} />
      <Ink d={handPoly([[x - 54, 300], [x - 54, 232], [x + 54, 232], [x + 54, 300]], { seed, amp: 0.4 })} w={1.6} />
    </g>
  )
}

function TrayFront({ x, tone, word, seed }) {
  const pts = [[x - 58, 254], [x + 58, 254], [x + 58, 300], [x - 58, 300]]
  return (
    <g>
      <path d={polyPath(pts)} fill={TONES[tone].mid} />
      <Ink d={handPoly(pts, { seed, amp: 0.4, closed: true })} w={1.8} />
      <Hand x={x} y={284} size={20} anchor="middle" weight={700}>
        {word}
      </Hand>
    </g>
  )
}

export function TraysScene() {
  return (
    <Scene
      w={800}
      h={214}
      top={112}
      css={traysCss}
      className="s-ap2"
      label="A paper character in glasses holds a green notebook and sends note cards one at a time into four trays on a desk, labelled quote, paraphrase, summary and my idea, each card tagged in the colour of its tray"
    >
      <Desk y={300} depth={22} seed={130} />

      <Shadow x={96} y={302} rx={36} ry={5} />
      <Place x={96} y={300} s={1.8}>
        <g className="s-ap2-pip">
          <Pip mood="focused" arms="hold" glasses look={1.2} seed={131}>
            <Book x={-13} y={-29} w={26} h={18} tone="green" label={false} seed={132} />
          </Pip>
        </g>
      </Place>

      {TRAYS.map((tray, i) => (
        <TrayBack key={i} x={tray.x} tone={tray.tone} seed={133 + i} />
      ))}
      {TRAYS.map((tray, i) =>
        SLOTS.map((slot, k) => (
          <Place key={`${i}-${k}`} x={tray.x + slot.dx} y={slot.top + 20} r={slot.r}>
            <MiniCard tone={tray.tone} seed={140 + i * 9 + k * 3} />
          </Place>
        )),
      )}

      {TRAYS.map((tray, i) => (
        <Place key={i} x={tray.x} y={DROP_Y}>
          <Anim className={`s-ap2-fly-${i}`} style={{ opacity: 0 }}>
            <MiniCard tone={tray.tone} seed={180 + i * 3} />
          </Anim>
        </Place>
      ))}

      {TRAYS.map((tray, i) => (
        <TrayFront key={i} x={tray.x} tone={tray.tone} word={tray.word} seed={190 + i} />
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Quote, paraphrase or summarise: one sentence of coloured words,
      kept whole inside quotation marks, rebuilt into a new shape, or
      squeezed down to its main point. Every panel ends with [1].
   ------------------------------------------------------------------ */

const PANELS = [
  { x: 136, tone: 'blue', word: 'quote' },
  { x: 400, tone: 'green', word: 'paraphrase' },
  { x: 664, tone: 'pink', word: 'summary' },
]
const PW = 232
const PT = 50
const PH = 206

/* The source sentence, one block per word. */
const SENTENCE = [
  { w: 34, tone: 'amber', x: 62 },
  { w: 26, tone: 'blue', x: 102 },
  { w: 40, tone: 'green', x: 134 },
  { w: 30, tone: 'pink', x: 180 },
]

/* The same words rebuilt: where each ends up, and how far it travels. */
const REBUILT = [
  { w: 34, tone: 'amber', x: 406, y: 124, ox: -80, oy: 14 },
  { w: 26, tone: 'blue', x: 405, y: 152, ox: -39, oy: -14 },
  { w: 40, tone: 'green', x: 360, y: 124, ox: 38, oy: 14 },
  { w: 30, tone: 'pink', x: 369, y: 152, ox: 75, oy: -14 },
]

/* A long passage, row by row. */
const LONG = [
  [30, 22, 36, 28, 40],
  [26, 38, 24, 34, 30],
  [36, 28, 40],
]
const LONG_TONES = ['amber', 'blue', 'green', 'pink', 'blue']

/* When each panel's [1] gives a little bounce. */
const CITE_PULSE = [18, 37, 33]

const stationsCss = `
.s-ap3-ql { animation: s-ap3-ql 10s ease-out infinite; }
.s-ap3-qr { animation: s-ap3-qr 10s ease-out infinite; }
.s-ap3-long { animation: s-ap3-long 10s ease-in-out infinite; }
.s-ap3-short { animation: s-ap3-short 10s ease-out infinite; }
${REBUILT.map((b, i) => `.s-ap3-w-${i} { animation: s-ap3-w-${i} 10s ease-in-out infinite; }
@keyframes s-ap3-w-${i} {
  0%, 14% { opacity: 1; transform: translate(${b.ox}px, ${b.oy}px); }
  24% { opacity: 1; transform: translate(${b.ox / 2}px, ${b.oy / 2 - 22}px); }
  34%, 88% { opacity: 1; transform: translate(0px, 0px); }
  92% { opacity: 0; transform: translate(0px, 0px); }
  93% { opacity: 0; transform: translate(${b.ox}px, ${b.oy}px); }
  97%, 100% { opacity: 1; transform: translate(${b.ox}px, ${b.oy}px); }
}`).join('\n')}
${CITE_PULSE.map((p, i) => `.s-ap3-cite-${i} { animation: s-ap3-cite-${i} 10s ease-in-out infinite; }
@keyframes s-ap3-cite-${i} {
  0%, ${p}% { transform: scale(1); }
  ${p + 3}% { transform: scale(1.22); }
  ${p + 6}%, 100% { transform: scale(1); }
}`).join('\n')}
@keyframes s-ap3-ql {
  0%, 4% { opacity: 0; transform: translateX(-26px); }
  16%, 90% { opacity: 1; transform: translateX(0px); }
  95%, 100% { opacity: 0; transform: translateX(-26px); }
}
@keyframes s-ap3-qr {
  0%, 4% { opacity: 0; transform: translateX(26px); }
  16%, 90% { opacity: 1; transform: translateX(0px); }
  95%, 100% { opacity: 0; transform: translateX(26px); }
}
@keyframes s-ap3-long {
  0%, 14% { transform: scale(1, 1); }
  24% { transform: scale(0.9, 0.78); }
  30%, 100% { transform: scale(1, 1); }
}
@keyframes s-ap3-short {
  0%, 22% { opacity: 0; transform: scale(0.3); }
  28% { opacity: 1; transform: scale(1.15); }
  32%, 90% { opacity: 1; transform: scale(1); }
  95%, 100% { opacity: 0; transform: scale(0.3); }
}
`

function Panel({ x, tone, word, seed }) {
  const l = x - PW / 2
  const band = `M${l} ${PT + 12}Q${l} ${PT} ${l + 12} ${PT}H${l + PW - 12}Q${l + PW} ${PT} ${l + PW} ${PT + 12}V${PT + 40}H${l}Z`
  return (
    <g>
      <rect x={l} y={PT} width={PW} height={PH} rx={12} fill={PAPER} />
      <path d={band} fill={TONES[tone].mid} />
      <Ink d={handLine(l, PT + 40, l + PW, PT + 40, seed, 0.4)} w={1.4} />
      <Box x={l} y={PT} w={PW} h={PH} r={12} seed={seed + 1} sw={1.8} />
      <Hand x={x} y={PT + 29} size={24} anchor="middle" weight={700}>
        {word}
      </Hand>
    </g>
  )
}

function Cite({ x, index }) {
  return (
    <Place x={x} y={230}>
      <Anim className={`s-ap3-cite-${index}`} spin>
        <rect x={-25} y={-15} width={50} height={30} rx={8} fill={TONES.amber.tint} />
        <Ink d={handPoly([[-25, -15], [25, -15], [25, 15], [-25, 15]], { seed: 200 + index, amp: 0.3, closed: true })} w={1.4} />
        <Type x={0} y={7} size={20} anchor="middle" weight={700}>
          [1]
        </Type>
      </Anim>
    </Place>
  )
}

export function StationsScene() {
  const rows = []
  LONG.forEach((row, r) => {
    let x = 572
    row.forEach((w, k) => {
      rows.push(<Word key={`${r}-${k}`} x={x} y={100 + r * 18} w={w} h={12} fill={TONES[LONG_TONES[k]].tint} seed={210 + r * 7 + k} />)
      x += w + 5
    })
  })

  return (
    <Scene
      w={800}
      h={230}
      top={38}
      css={stationsCss}
      className="s-ap3"
      label="Three panels labelled quote, paraphrase and summary: quotation marks close around a sentence drawn as coloured word blocks, the same blocks rearrange into a new shape, and three long lines squeeze down into one short line, and each panel ends with the citation [1]"
    >
      {PANELS.map((p, i) => (
        <Panel key={i} {...p} seed={220 + i * 3} />
      ))}

      {SENTENCE.map((b, i) => (
        <Word key={i} x={b.x} y={141} w={b.w} fill={TONES[b.tone].mid} seed={230 + i} />
      ))}
      <Anim className="s-ap3-ql">
        <Hand x={58} y={180} size={54} anchor="end" weight={700} c={TONES.blue.ink}>
          “
        </Hand>
      </Anim>
      <Anim className="s-ap3-qr">
        <Hand x={214} y={180} size={54} anchor="start" weight={700} c={TONES.blue.ink}>
          ”
        </Hand>
      </Anim>

      {REBUILT.map((b, i) => (
        <Place key={i} x={b.x} y={b.y}>
          <Anim className={`s-ap3-w-${i}`}>
            <Word w={b.w} fill={TONES[b.tone].mid} seed={240 + i} />
          </Anim>
        </Place>
      ))}

      <Anim className="s-ap3-long" spin>
        {rows}
      </Anim>
      <Arrow from={[664, 156]} to={[664, 180]} bend={0} head={8} seed={250} />
      <Anim className="s-ap3-short" spin>
        <Word x={624} y={188} w={34} fill={TONES.amber.mid} seed={251} />
        <Word x={664} y={188} w={40} fill={TONES.green.mid} seed={252} />
      </Anim>

      {PANELS.map((p, i) => (
        <Cite key={i} x={p.x} index={i} />
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Cite as you write: a pencil writes the draft line by line, a
      citation number appears the moment a sourced line is finished,
      and the matching entry joins the reference list at once.
   ------------------------------------------------------------------ */

const WRITE = [
  { y: 140, x2: 262, cite: '[1]' },
  { y: 170, x2: 318 },
  { y: 200, x2: 256, cite: '[2]' },
  { y: 230, x2: 244, cite: '[3]' },
  { y: 260, x2: 300 },
]
const PEN_X = 92
const PEN_REST = [300, 260]

/* When each line starts (percent of the loop); each takes 10 percent. */
const LINE_AT = [4, 19, 34, 49, 64]

/* The cited lines, when their number appears, and where their entry sits. */
const CITED = [
  { line: 0, at: 15, ry: 166, len: [118, 80] },
  { line: 2, at: 45, ry: 208, len: [100, 96] },
  { line: 3, at: 60, ry: 250, len: [126, 60] },
]

const penAt = (x, y) => `transform: translate(${x - PEN_REST[0]}px, ${y - PEN_REST[1]}px);`

const citeCss = `
.s-ap4-pen { animation: s-ap4-pen 10s linear infinite; }
@keyframes s-ap4-pen {
  0% { ${penAt(PEN_X, WRITE[0].y)} }
  ${WRITE.map((l, i) => `${LINE_AT[i]}% { ${penAt(PEN_X, l.y)} }\n  ${LINE_AT[i] + 10}% { ${penAt(l.x2, l.y)} }`).join('\n  ')}
  90% { ${penAt(PEN_REST[0], PEN_REST[1])} }
  100% { ${penAt(PEN_X, WRITE[0].y)} }
}
${WRITE.map((l, i) => `.s-ap4-line-${i} { animation: s-ap4-line-${i} 10s linear infinite; }
@keyframes s-ap4-line-${i} {
  0%, ${LINE_AT[i]}% { stroke-dashoffset: 1; opacity: 0; }
  ${LINE_AT[i] + 0.5}% { stroke-dashoffset: 1; opacity: 1; }
  ${LINE_AT[i] + 10}%, 90% { stroke-dashoffset: 0; opacity: 1; }
  95% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}`).join('\n')}
${CITED.map((c, k) => `.s-ap4-mark-${k} { animation: s-ap4-mark-${k} 10s ease-out infinite; }
.s-ap4-entry-${k} { animation: s-ap4-entry-${k} 10s ease-out infinite; }
.s-ap4-link-${k} { animation: s-ap4-link-${k} 10s ease-out infinite; }
@keyframes s-ap4-mark-${k} {
  0%, ${c.at}% { opacity: 0; transform: scale(0.3); }
  ${c.at + 3}% { opacity: 1; transform: scale(1.25); }
  ${c.at + 5}%, 90% { opacity: 1; transform: scale(1); }
  95%, 100% { opacity: 0; transform: scale(0.3); }
}
@keyframes s-ap4-entry-${k} {
  0%, ${c.at + 1}% { opacity: 0; transform: translateX(-14px); }
  ${c.at + 5}%, 90% { opacity: 1; transform: translateX(0px); }
  95%, 100% { opacity: 0; transform: translateX(-14px); }
}
@keyframes s-ap4-link-${k} {
  0%, ${c.at + 1}% { opacity: 0; }
  ${c.at + 5}%, 90% { opacity: 1; }
  95%, 100% { opacity: 0; }
}`).join('\n')}
.s-ap4-pip .pip-body { animation: s-ap4-nod 10s ease-in-out infinite; }
@keyframes s-ap4-nod {
  0% { transform: translateY(0px); }
  ${CITED.map((c) => `${c.at + 2}% { transform: translateY(0px); } ${c.at + 4}% { transform: translateY(-6px); } ${c.at + 7}% { transform: translateY(0px); }`).join('\n  ')}
  100% { transform: translateY(0px); }
}
`

export function CiteScene() {
  return (
    <Scene
      w={800}
      h={292}
      top={44}
      css={citeCss}
      className="s-ap4"
      label="A pencil writes lines on a sheet labelled draft; each time it finishes a line that uses a source, a citation number [1], [2] or [3] appears at its end, and at the same moment a matching numbered entry appears on a reference list beside it, joined by a dotted line, while a paper character points at the list"
    >
      <Desk y={318} depth={22} seed={300} />

      <Sheet x={70} y={64} w={280} h={250} lines={0} fold={30} seed={301} />
      <Hand x={92} y={106} size={24} weight={700}>
        draft
      </Hand>
      {WRITE.map((l, i) => (
        <Ink
          key={i}
          d={handLine(PEN_X, l.y, l.x2, l.y, 302 + i, 0.3)}
          c={INK_SOFT}
          w={1.9}
          pathLength="1"
          dash="1"
          scale
          className={`s-ap4-line-${i}`}
        />
      ))}

      <Sheet x={440} y={92} w={210} h={222} lines={0} fold={26} seed={310} />
      <Hand x={540} y={132} size={24} anchor="middle" weight={700}>
        references
      </Hand>

      {CITED.map((c, k) => {
        const l = WRITE[c.line]
        return (
          <g key={k}>
            <Ink
              d={`M${l.x2 + 48} ${l.y - 2}Q${(l.x2 + 48 + 450) / 2} ${Math.min(l.y, c.ry) - 26} 450 ${c.ry}`}
              c={INK_SOFT}
              w={1.4}
              dash="3 6"
              className={`s-ap4-link-${k}`}
            />
            <Anim className={`s-ap4-mark-${k}`} spin>
              <Type x={l.x2 + 8} y={l.y + 7} size={20} weight={700} c={TONES.blue.deep}>
                {l.cite}
              </Type>
            </Anim>
            <Anim className={`s-ap4-entry-${k}`}>
              <Type x={458} y={c.ry + 7} size={20} weight={700} c={TONES.blue.deep}>
                {k + 1}.
              </Type>
              <Ink d={handLine(490, c.ry, 490 + c.len[0], c.ry, 320 + k, 0.3)} c={INK_SOFT} w={1.7} />
              <Ink d={handLine(490, c.ry + 14, 490 + c.len[1], c.ry + 14, 330 + k, 0.3)} c={TEXT_LINE} w={1.5} />
            </Anim>
          </g>
        )
      })}

      <Place x={PEN_REST[0]} y={PEN_REST[1]}>
        <Anim className="s-ap4-pen">
          <Pencil x={0} y={0} length={100} angle={-50} seed={340} />
        </Anim>
      </Place>

      <Shadow x={730} y={320} rx={30} ry={4} />
      <Place x={730} y={318} s={1.6} flip>
        <g className="s-ap4-pip">
          <Pip mood="happy" arms="point" glasses look={1.2} seed={341} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Common knowledge: Ohm's law on the board needs no citation, the
      pH limits taken from a standard get a citation tag. Pip turns to
      point at one and then the other.
   ------------------------------------------------------------------ */

const knowCss = `
.s-ap5-tick { animation: s-ap5-tick 8s ease-out infinite; }
.s-ap5-tag { animation: s-ap5-tag 8s ease-in-out infinite; }
.s-ap5-pip .pip-body { animation: s-ap5-turn 8s ease-in-out infinite; }
@keyframes s-ap5-tick {
  0%, 8% { stroke-dashoffset: 1; opacity: 0; }
  8.5% { stroke-dashoffset: 1; opacity: 1; }
  18%, 90% { stroke-dashoffset: 0; opacity: 1; }
  95% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}
@keyframes s-ap5-tag {
  0%, 38% { opacity: 0; transform: translateY(-50px) rotate(-50deg); }
  44% { opacity: 1; transform: translateY(0px) rotate(28deg); }
  50% { opacity: 1; transform: translateY(0px) rotate(-14deg); }
  56% { opacity: 1; transform: translateY(0px) rotate(7deg); }
  62%, 90% { opacity: 1; transform: translateY(0px) rotate(0deg); }
  95% { opacity: 0; transform: translateY(0px) rotate(0deg); }
  96%, 100% { opacity: 0; transform: translateY(-50px) rotate(-50deg); }
}
@keyframes s-ap5-turn {
  0%, 30% { transform: scaleX(-1); }
  35%, 90% { transform: scaleX(1); }
  95%, 100% { transform: scaleX(-1); }
}
`

export function KnowledgeScene() {
  const frame = [[48, 88], [318, 88], [318, 258], [48, 258]]
  const board = [[60, 100], [306, 100], [306, 246], [60, 246]]
  const tag = [[-6, 20], [50, 20], [50, 54], [-6, 54]]
  return (
    <Scene
      w={800}
      h={268}
      top={42}
      css={knowCss}
      className="s-ap5"
      label="Under the words common knowledge, a green board reads V = IR and gets a green tick; under the words cite it, a sheet reads pH 6.5 to 8.5 and a tag marked [4] swings onto it, while a paper character between them turns to point at each in turn"
    >
      <Floor y={298} x1={30} x2={770} seed={400} />

      <Hand x={183} y={72} size={24} anchor="middle" weight={700} c={TONES.green.deep}>
        common knowledge
      </Hand>
      <rect x={48} y={88} width={270} height={170} fill="url(#wood)" />
      <Ink d={handPoly(frame, { seed: 401, amp: 0.5, closed: true })} w={1.8} />
      <rect x={60} y={100} width={246} height={146} fill={TONES.green.deep} />
      <rect x={60} y={100} width={246} height={146} fill="url(#ink-hatch-light)" opacity="0.5" />
      <Ink d={handPoly(board, { seed: 402, amp: 0.4, closed: true })} w={1.5} />
      <Ink d={handLine(84, 222, 150, 216, 403, 0.6) + handLine(220, 124, 270, 128, 404, 0.6)} c={PAPER} w={1.2} o={0.35} />
      <Hand x={183} y={192} size={50} anchor="middle" weight={700} c={PAPER}>
        V = IR
      </Hand>
      <Oval cx={304} cy={98} rx={22} fill={PAPER} seed={405} />
      <path
        className="s-ap5-tick"
        d="M293 99q4 3 6 9q6 -14 16 -20"
        pathLength="1"
        strokeDasharray="1"
        fill="none"
        stroke={TONES.green.deep}
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Hand x={607} y={72} size={24} anchor="middle" weight={700} c={TONES.amber.deep}>
        cite it
      </Hand>
      <Sheet x={482} y={88} w={250} h={172} lines={0} fold={28} seed={410} />
      <Hand x={504} y={136} size={26} weight={700} c={INK_SOFT}>
        pH
      </Hand>
      <Hand x={598} y={200} size={40} anchor="middle" weight={700}>
        6.5 to 8.5
      </Hand>
      <Ink d={handLine(506, 226, 690, 226, 411, 0.3) + handLine(506, 242, 640, 242, 412, 0.3)} c={TEXT_LINE} w={1.6} />

      <Place x={722} y={132}>
        <Anim className="s-ap5-tag">
          <Ink d="M0 0Q-2 12 2 28" c={INK_SOFT} w={1.4} />
          <rect x={-6} y={20} width={56} height={34} rx={5} fill={TONES.amber.mid} />
          <Ink d={handPoly(tag, { seed: 413, amp: 0.3, closed: true })} w={1.5} />
          <circle cx={2} cy={28} r={3} fill={PAPER} stroke={INK_SOFT} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
          <Type x={26} y={44} size={22} anchor="middle" weight={700}>
            [4]
          </Type>
        </Anim>
      </Place>
      <PushPin x={722} y={132} tone="red" seed={414} />

      <Shadow x={400} y={300} rx={30} ry={4} />
      <Place x={400} y={298} s={1.6}>
        <g className="s-ap5-pip">
          <Pip mood="focused" arms="point" glasses look={1.4} seed={415} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. AI tools: a chatbot pushes out three neat references, a lens
      checks each one, and only the first turns out to be real.
   ------------------------------------------------------------------ */

const CARDS6 = [265, 405, 545]
const CARD_Y = 176
const BOT = [110, 312]
const SLOT6 = [110, 261]
const LENS_REST = [672, 120]

/* When each card comes out of the bot, and when the lens decides on it. */
const OUT = [3, 10, 17]
const CHECK = [41, 57, 73]

const lensTo = (i) => `translate(${CARDS6[i] - LENS_REST[0]}px, ${CARD_Y - 6 - LENS_REST[1]}px)`
const lensNudge = (i) => `translate(${CARDS6[i] - LENS_REST[0] + 8}px, ${CARD_Y - 12 - LENS_REST[1]}px)`

const aiCss = `
.s-ap6-lens { animation: s-ap6-lens 10s ease-in-out infinite; }
@keyframes s-ap6-lens {
  0%, 24% { transform: translate(0px, 0px); }
  32% { transform: ${lensTo(0)}; }
  36% { transform: ${lensNudge(0)}; }
  40% { transform: ${lensTo(0)}; }
  48% { transform: ${lensTo(1)}; }
  52% { transform: ${lensNudge(1)}; }
  56% { transform: ${lensTo(1)}; }
  64% { transform: ${lensTo(2)}; }
  68% { transform: ${lensNudge(2)}; }
  72% { transform: ${lensTo(2)}; }
  84%, 100% { transform: translate(0px, 0px); }
}
${CARDS6.map((cx, i) => {
  const start = `translate(${SLOT6[0] - cx}px, ${SLOT6[1] - CARD_Y}px) scale(0.2)`
  const fake = i > 0
  return `.s-ap6-card-${i} { animation: s-ap6-card-${i} 10s ease-in-out infinite; }
@keyframes s-ap6-card-${i} {
  0%, ${OUT[i]}% { opacity: 0; transform: ${start}; }
  ${OUT[i] + 1}% { opacity: 1; transform: ${start}; }
  ${OUT[i] + 6}% { opacity: 1; transform: translate(0px, 0px) scale(1); }
  ${fake ? `${CHECK[i]}% { opacity: 1; transform: translate(0px, 0px) scale(1); }\n  ${CHECK[i] + 4}%, 90% { opacity: 0.3; transform: translate(0px, 0px) scale(1); }` : '90% { opacity: 1; transform: translate(0px, 0px) scale(1); }'}
  94% { opacity: 0; transform: translate(0px, 0px) scale(1); }
  95%, 100% { opacity: 0; transform: ${start}; }
}
.s-ap6-mark-${i} { animation: s-ap6-mark-${i} 10s ease-out infinite; }
@keyframes s-ap6-mark-${i} {
  0%, ${CHECK[i]}% { opacity: 0; transform: scale(0.4); }
  ${CHECK[i] + 3}% { opacity: 1; transform: scale(1.15); }
  ${CHECK[i] + 6}%, 90% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.4); }
}`
}).join('\n')}
`

export function AiScene() {
  return (
    <Scene
      w={800}
      h={270}
      top={56}
      css={aiCss}
      className="s-ap6"
      label="A friendly robot pushes out three reference cards numbered 1 to 3; a magnifying glass checks them one by one: the first gets a green tick and the word real, while the other two fade and get red crosses above the words not found, as a paper character in glasses watches"
    >
      <Floor y={312} x1={30} x2={770} seed={500} />

      <Shadow x={BOT[0]} y={314} rx={40} ry={5} />
      <Bot x={BOT[0]} y={BOT[1]} s={1.5} seed={501} />

      {CARDS6.map((cx, i) => (
        <Place key={i} x={cx} y={CARD_Y}>
          <Anim className={`s-ap6-card-${i}`} style={i > 0 ? { opacity: 0.3 } : undefined}>
            <Sheet x={-56} y={-40} w={112} h={80} lines={0} fold={16} seed={510 + i * 5} />
            <Type x={-46} y={-12} size={20} weight={700}>
              [{i + 1}]
            </Type>
            <Ink d={handLine(-46, 8, 38, 8, 511 + i * 5, 0.3) + handLine(-46, 22, 20, 22, 512 + i * 5, 0.3)} c={TEXT_LINE} w={1.6} />
          </Anim>
        </Place>
      ))}

      <Anim className="s-ap6-mark-0" spin>
        <Tick x={CARDS6[0] + 24} y={CARD_Y - 16} s={1.4} />
      </Anim>
      <Anim className="s-ap6-mark-0" spin>
        <Hand x={CARDS6[0]} y={250} size={22} anchor="middle" weight={700} c={TONES.green.deep}>
          real
        </Hand>
      </Anim>
      {[1, 2].map((i) => (
        <Anim key={i} className={`s-ap6-mark-${i}`} spin>
          <Cross x={CARDS6[i]} y={CARD_Y} s={1.8} seed={520 + i} />
        </Anim>
      ))}
      <Anim className="s-ap6-mark-2" spin>
        <Hand x={(CARDS6[1] + CARDS6[2]) / 2} y={250} size={22} anchor="middle" weight={700} c={TONES.red.ink}>
          not found
        </Hand>
      </Anim>

      <Place x={LENS_REST[0]} y={LENS_REST[1]}>
        <Anim className="s-ap6-lens">
          <Magnifier x={0} y={0} r={30} angle={45} seed={530} />
        </Anim>
      </Place>

      <Shadow x={712} y={314} rx={34} ry={5} />
      <Place x={712} y={312} s={1.8}>
        <Pip mood="focused" arms="think" glasses look={-1.8} seed={531} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The final check: six ticks on the clipboard, the report slides
      into its envelope, the flap folds shut, and Pip cheers.
   ------------------------------------------------------------------ */

const ROWS7 = [130, 110, 140, 100, 124, 90]
const TICK_AT = ROWS7.map((_, i) => 4 + i * 6)
const ROW_Y = (i) => 140 + i * 26
const SPARKS7 = [
  [366, 186],
  [574, 176],
  [470, 118],
]

const finalCss = `
${ROWS7.map((_, i) => `.s-ap7-tick-${i} { animation: s-ap7-tick-${i} 10s ease-out infinite; }
@keyframes s-ap7-tick-${i} {
  0% { stroke-dashoffset: 0; opacity: 0; }
  ${TICK_AT[i]}% { stroke-dashoffset: 1; opacity: 0; }
  ${TICK_AT[i] + 0.5}% { stroke-dashoffset: 1; opacity: 1; }
  ${TICK_AT[i] + 4}%, 90% { stroke-dashoffset: 0; opacity: 1; }
  94%, 100% { stroke-dashoffset: 0; opacity: 0; }
}`).join('\n')}
${SPARKS7.map((_, k) => `.s-ap7-spark-${k} { animation: s-ap7-spark-${k} 10s ease-out infinite; }
@keyframes s-ap7-spark-${k} {
  0%, ${66 + k * 3}% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  ${70 + k * 3}% { opacity: 1; transform: scale(1.2) rotate(20deg); }
  ${78 + k * 3}%, 100% { opacity: 0; transform: scale(0.6) rotate(40deg); }
}`).join('\n')}
.s-ap7-report { animation: s-ap7-report 10s ease-in-out infinite; }
.s-ap7-open { animation: s-ap7-open 10s ease-in-out infinite; }
.s-ap7-shut { animation: s-ap7-shut 10s ease-in-out infinite; }
.s-ap7-seal { animation: s-ap7-seal 10s ease-out infinite; }
.s-ap7-say { animation: s-ap7-say 10s ease-out infinite; }
.s-ap7-pip .pip-body { animation: s-ap7-hop 10s ease-in-out infinite; }
@keyframes s-ap7-report {
  0%, 40% { opacity: 1; transform: translateY(-136px); }
  54%, 92% { opacity: 1; transform: translateY(0px); }
  93% { opacity: 0; transform: translateY(0px); }
  94% { opacity: 0; transform: translateY(-136px); }
  100% { opacity: 1; transform: translateY(-136px); }
}
@keyframes s-ap7-open {
  0%, 56% { opacity: 1; transform: scaleY(1); }
  60% { opacity: 1; transform: scaleY(0); }
  61%, 94% { opacity: 0; transform: scaleY(0); }
  95% { opacity: 1; transform: scaleY(0); }
  98%, 100% { opacity: 1; transform: scaleY(1); }
}
@keyframes s-ap7-shut {
  0%, 60% { transform: scaleY(0); }
  64%, 92% { transform: scaleY(1); }
  95%, 100% { transform: scaleY(0); }
}
@keyframes s-ap7-seal {
  0%, 64% { opacity: 0; transform: scale(0.2); }
  67% { opacity: 1; transform: scale(1.3); }
  70%, 91% { opacity: 1; transform: scale(1); }
  93%, 100% { opacity: 0; transform: scale(0.2); }
}
@keyframes s-ap7-say {
  0%, 70% { opacity: 0; transform: scale(0.3); }
  74% { opacity: 1; transform: scale(1.08); }
  77%, 91% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.3); }
}
@keyframes s-ap7-hop {
  0%, 70% { transform: translateY(0px); }
  74% { transform: translateY(-12px); }
  78% { transform: translateY(0px); }
  82% { transform: translateY(-8px); }
  86%, 100% { transform: translateY(0px); }
}
`

export function FinalScene() {
  const paper = [[74, 86], [278, 86], [278, 300], [74, 300]]
  const clip = [[146, 58], [206, 58], [206, 80], [146, 80]]
  const body = [[380, 200], [560, 200], [560, 310], [380, 310]]
  const openFlap = [[380, 200], [470, 138], [560, 200]]
  const shutFlap = [[380, 200], [470, 262], [560, 200]]

  return (
    <Scene
      w={800}
      h={290}
      top={46}
      css={finalCss}
      className="s-ap7"
      label="On a clipboard titled final check, six boxes get green ticks one by one; then the report slides into an envelope, the flap folds shut with a red seal, and a cheering paper character says a day early"
    >
      <Desk y={310} depth={22} seed={600} />

      <Box x={60} y={66} w={232} h={244} r={10} fill={TONES.brown.mid} seed={601} sw={1.8} />
      <path d={polyPath(paper)} fill={PAPER} />
      <Ink d={handPoly(paper, { seed: 602, amp: 0.4, closed: true })} w={1.5} />
      <path d={polyPath(clip)} fill={TONES.grey.mid} />
      <Ink d={handPoly(clip, { seed: 603, amp: 0.3, closed: true })} w={1.6} />
      <Hand x={176} y={124} size={24} anchor="middle" weight={700}>
        final check
      </Hand>
      {ROWS7.map((len, i) => {
        const y = ROW_Y(i)
        return (
          <g key={i}>
            <Box x={90} y={y} w={16} h={16} fill={PAPER} seed={610 + i * 3} sw={1.4} />
            <Ink d={handLine(118, y + 9, 118 + len, y + 9, 611 + i * 3, 0.4)} c={TEXT_LINE} w={1.7} />
            <path
              className={`s-ap7-tick-${i}`}
              d={`M91 ${y + 8}q3 2 5 7q5 -11 13 -16`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke={TONES.green.deep}
              strokeWidth={2.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )
      })}

      <path d={polyPath(body)} fill={PAPER_SHADE} />
      <Anim className="s-ap7-open" origin={[470, 200]} style={{ opacity: 0 }}>
        <path d={polyPath(openFlap)} fill={PAPER_SHADE} />
        <path d={polyPath(openFlap)} fill="url(#ink-hatch-light)" />
        <Ink d={handPoly(openFlap, { seed: 620, amp: 0.4 })} w={1.5} />
      </Anim>
      <Place x={410} y={206}>
        <Anim className="s-ap7-report">
          <Sheet x={0} y={0} w={120} h={94} lines={4} fold={14} title seed={621} />
        </Anim>
      </Place>
      <path d={polyPath(body)} fill={PAPER} />
      <Ink d={handPoly([[380, 310], [470, 252], [560, 310]], { seed: 622, amp: 0.4 })} c={INK_SOFT} w={1.3} />
      <Ink d={handPoly(body, { seed: 623, amp: 0.5, closed: true })} w={1.8} />
      <Anim className="s-ap7-shut" origin={[470, 200]}>
        <path d={polyPath(shutFlap)} fill={PAPER_SHADE} />
        <Ink d={handPoly(shutFlap, { seed: 624, amp: 0.4 })} w={1.6} />
      </Anim>
      <Place x={470} y={252}>
        <Anim className="s-ap7-seal" spin>
          <Oval cx={0} cy={0} rx={10} fill={TONES.red.mid} seed={625} />
        </Anim>
      </Place>
      {SPARKS7.map(([x, y], k) => (
        <Place key={k} x={x} y={y}>
          <Anim className={`s-ap7-spark-${k}`} spin style={{ opacity: 0 }}>
            <Sparkle x={0} y={0} s={10} />
          </Anim>
        </Place>
      ))}

      <Anim className="s-ap7-say" origin={[680, 182]}>
        <Speech x={560} y={74} w={196} h={62} tx={680} ty={182} seed={630}>
          <Hand x={658} y={114} size={26} anchor="middle" weight={700}>
            a day early
          </Hand>
        </Speech>
      </Anim>

      <Shadow x={690} y={312} rx={34} ry={5} />
      <Place x={690} y={310} s={1.8}>
        <g className="s-ap7-pip">
          <Pip mood="grin" arms="up" glasses seed={631} />
        </g>
      </Place>
    </Scene>
  )
}
