import {
  Anim,
  Arrow,
  Box,
  Cloud,
  Crate,
  Cross,
  Desk,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Thread,
  Tick,
  Type,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 12, seed, c = TEXT_LINE, w = 1.6, o }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} o={o} />
}

/* Two table legs under a desk top. */
function Legs({ x1, x2, top, floor, seed }) {
  return <Ink d={handLine(x1, top, x1 + 2, floor, seed, 0.4) + handLine(x2, top, x2 - 2, floor, seed + 1, 0.4)} w={3} c={TONES.brown.deep} />
}

/* The library box with coloured folder tabs over its rim. Anchor: top-left of the box. */
function Library({ x, y, w = 160, h = 110, label = 'my library', seed }) {
  const tabs = ['blue', 'pink', 'green', 'amber']
  const tw = (w - 30) / tabs.length
  return (
    <g>
      {tabs.map((tone, i) => (
        <Box key={tone} x={x + 15 + i * tw} y={y - 22} w={tw - 4} h={28} r={3} fill={`url(#fill-${tone})`} seed={seed + i} sw={1.4} />
      ))}
      <Crate x={x} y={y} w={w} h={h} seed={seed + 10} />
      <Box x={x + w / 2 - 52} y={y + h / 2 - 15} w={104} h={32} r={4} fill={PAPER} seed={seed + 11} sw={1.4} />
      <Hand x={x + w / 2} y={y + h / 2 + 7} size={19} anchor="middle" weight={700}>
        {label}
      </Hand>
    </g>
  )
}

/* ------------------------------------------------------------------
   1. A heap of loose PDFs and a typed list, then one tidy box.
   ------------------------------------------------------------------ */

const whyCss = `
.s-zot1-loose { animation: s-zot1-jiggle 2.6s ease-in-out infinite; animation-delay: var(--d, 0s); }
.s-zot1-spark { animation: s-zot1-twinkle 3s ease-in-out infinite; }
.s-zot1-nikhil .pip-body { animation: s-zot1-hop 3s ease-in-out infinite; }
@keyframes s-zot1-jiggle {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(5deg); }
}
@keyframes s-zot1-twinkle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.3) rotate(25deg); }
}
@keyframes s-zot1-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-8px); }
}
`

const LOOSE = [
  { x: 60, y: 168, r: -14, d: '0s', tone: 'paper' },
  { x: 104, y: 150, r: 9, d: '-0.6s', tone: 'blue' },
  { x: 150, y: 172, r: -4, d: '-1.2s', tone: 'paper' },
  { x: 82, y: 210, r: 16, d: '-1.8s', tone: 'amber' },
  { x: 136, y: 214, r: -10, d: '-0.9s', tone: 'paper' },
]

export function WhyScene() {
  const floor = 296
  return (
    <Scene w={800} h={310} css={whyCss} className="s-zot1" label="On the left a heap of loose PDFs and a hand typed reference list marked with red crosses; an arrow leads to a tidy library box with coloured folder tabs, and a happy paper character beside it">
      <Hand x={150} y={46} size={22} anchor="middle" c={INK_SOFT}>
        before
      </Hand>
      {LOOSE.map((sheet, i) => (
        <Place key={i} x={sheet.x} y={sheet.y} r={sheet.r}>
          <Anim className="s-zot1-loose" origin={[20, 26]} style={{ '--d': sheet.d }}>
            <Sheet x={0} y={0} w={42} h={54} tone={sheet.tone} lines={3} fold={10} seed={110 + i * 4} sw={1.4} />
          </Anim>
        </Place>
      ))}
      <Sheet x={210} y={70} w={90} h={150} lines={0} fold={14} seed={130} />
      <Hand x={222} y={100} size={14} weight={700}>
        typed list
      </Hand>
      <Lines x={222} y={116} rows={[60, 52, 64, 48, 58, 40, 56]} gap={13} seed={131} />
      <Cross x={286} y={130} s={0.6} seed={140} />
      <Cross x={286} y={182} s={0.6} seed={143} />

      <Arrow from={[330, 160]} to={[440, 160]} bend={-0.15} seed={150} c={INK_SOFT} w={1.8} />

      <Hand x={560} y={46} size={22} anchor="middle" c={INK_SOFT}>
        after
      </Hand>
      <Library x={480} y={150} w={170} h={110} seed={160} />
      <Place x={0} y={0}>
        <Anim className="s-zot1-spark" origin={[662, 112]}>
          <Sparkle x={662} y={112} s={12} />
        </Anim>
      </Place>
      <Floor y={floor} x1={30} x2={770} seed={170} />

      <Shadow x={720} y={floor + 3} rx={28} ry={4} />
      <Place x={720} y={floor} s={1.3}>
        <g className="s-zot1-nikhil">
          <Pip mood="grin" arms="up" tone="amber" seed={180} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Two pieces: the app on the laptop, the button in the browser,
      and a cloud that keeps a copy.
   ------------------------------------------------------------------ */

const installCss = `
.s-zot2-cloud { animation: s-zot2-float 5s ease-in-out infinite; }
.s-zot2-sync { animation: s-zot2-pulse 2.5s ease-in-out infinite; }
.s-zot2-nikhil .pip-arm-r { animation: s-zot2-tap 1.4s ease-in-out infinite; }
@keyframes s-zot2-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes s-zot2-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@keyframes s-zot2-tap {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

export function InstallScene() {
  const floor = 300
  const desk = 236
  const [sx, sy, sw, sh] = laptopScreen(400, desk, 230)
  return (
    <Scene w={800} h={312} css={installCss} className="s-zot2" label="A laptop on a desk shows a browser bar with a small save button and the Zotero app, a Word page with a Zotero tab sits beside it, and a cloud above keeps a synced copy, while a paper character points at the laptop">
      <Floor y={floor} x1={30} x2={770} seed={201} />
      <Legs x1={240} x2={580} top={desk + 18} floor={floor} seed={202} />
      <Desk y={desk} x1={220} x2={600} depth={18} seed={203} />
      <Laptop x={400} y={desk} w={230} seed={204} />

      {/* Browser bar with the Connector button. */}
      <Box x={sx + 4} y={sy + 4} w={sw - 8} h={20} r={3} fill={TONES.grey.tint} seed={205} sw={1.2} />
      <Box x={sx + sw - 40} y={sy + 7} w={30} h={14} r={3} fill={TONES.amber.mid} seed={206} sw={1.2} />
      <Type x={sx + sw - 25} y={sy + 18} size={9} anchor="middle" weight={700}>
        SAVE
      </Type>
      <Hand x={sx + 10} y={sy + 50} size={15} weight={700}>
        Zotero
      </Hand>
      <Lines x={sx + 10} y={sy + 62} rows={[100, 80, 92]} gap={10} seed={207} />
      <Hand x={sx + sw - 20} y={sy - 20} size={17} anchor="end" c={INK_SOFT}>
        connector button
      </Hand>
      <Arrow from={[sx + sw - 60, sy - 16]} to={[sx + sw - 30, sy + 4]} bend={0.2} seed={208} c={INK_SOFT} w={1.4} head={8} />

      {/* Word, with its new tab. */}
      <Sheet x={620} y={110} w={110} h={126} lines={0} fold={16} seed={210} />
      <Box x={630} y={124} w={74} h={22} r={3} fill={TONES.blue.mid} seed={211} sw={1.3} />
      <Hand x={667} y={141} size={14} anchor="middle" weight={700}>
        Zotero tab
      </Hand>
      <Lines x={632} y={164} rows={[80, 64, 76, 50, 70]} gap={13} seed={212} />
      <Arrow from={[sx + sw + 10, sy + 40]} to={[614, 160]} bend={-0.2} seed={213} c={INK_SOFT} w={1.4} dash="5 6" />

      {/* The cloud that keeps a copy. */}
      <Place x={0} y={0}>
        <Anim className="s-zot2-cloud">
          <Cloud x={150} y={64} s={1.3} seed={220} />
          <Hand x={150} y={66} size={18} anchor="middle" weight={700}>
            sync
          </Hand>
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-zot2-sync">
          <Arrow from={[200, 90]} to={[sx - 4, sy + 30]} bend={0.15} seed={221} c={TONES.blue.ink} w={1.6} dash="4 6" />
        </Anim>
      </Place>

      <Shadow x={130} y={floor + 3} rx={30} ry={4} />
      <Place x={130} y={floor} s={1.4}>
        <g className="s-zot2-nikhil">
          <Pip mood="focused" arms="point" tone="amber" look={1.6} seed={230} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Three doors into the same box: browser, identifier, PDF.
   ------------------------------------------------------------------ */

const addCss = `
.s-zot3-item { animation: s-zot3-slide 6s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-zot3-slide {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  40% { transform: translate(var(--tx), var(--ty)) scale(0.6); opacity: 1; }
  46% { transform: translate(var(--tx), var(--ty)) scale(0.5); opacity: 0; }
  47% { transform: translate(0, 0) scale(1); opacity: 0; }
  62%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
}
`

export function AddScene() {
  const floor = 300
  return (
    <Scene w={800} h={312} css={addCss} className="s-zot3" label="Three ways into one library box: a small laptop with a browser, a sticky note with a DOI, and a PDF file each send a paper sliding along an arrow into the box">
      <Laptop x={110} y={110} w={130} seed={301} />
      <Hand x={110} y={140} size={18} anchor="middle" c={INK_SOFT}>
        browser
      </Hand>

      <Sticky x={50} y={170} w={120} h={66} tone="amber" lines={0} seed={302} />
      <Type x={110} y={200} size={14} anchor="middle" weight={700}>
        DOI 10.xxxx
      </Type>
      <Hand x={110} y={224} size={15} anchor="middle" c={INK_SOFT}>
        or ISBN, PMID
      </Hand>

      <Sheet x={70} y={244} w={52} h={50} tone="red" lines={0} fold={12} seed={303} sw={1.5} />
      <Type x={93} y={276} size={13} anchor="middle" weight={700}>
        PDF
      </Type>
      <Hand x={136} y={280} size={15} c={INK_SOFT}>
        drag in
      </Hand>

      <Arrow from={[186, 70]} to={[470, 150]} bend={-0.12} seed={310} c={INK_SOFT} w={1.6} />
      <Arrow from={[186, 202]} to={[466, 196]} bend={0.04} seed={311} c={INK_SOFT} w={1.6} />
      <Arrow from={[200, 268]} to={[470, 236]} bend={0.1} seed={312} c={INK_SOFT} w={1.6} />

      {[
        { x: 190, y: 50, tx: '250px', ty: '86px', d: '0s', tone: 'paper' },
        { x: 190, y: 182, tx: '250px', ty: '0px', d: '-2s', tone: 'amber' },
        { x: 206, y: 248, tx: '240px', ty: '-40px', d: '-4s', tone: 'red' },
      ].map((item, i) => (
        <Place key={i} x={item.x} y={item.y}>
          <Anim className="s-zot3-item" style={{ '--tx': item.tx, '--ty': item.ty, '--d': item.d }}>
            <Sheet x={0} y={0} w={28} h={36} tone={item.tone} lines={2} fold={8} seed={320 + i * 3} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Library x={480} y={140} w={200} h={130} seed={330} />
      <Floor y={floor} x1={440} x2={770} seed={340} />
      <Hand x={580} y={60} size={20} anchor="middle" c={INK_SOFT}>
        then check the details
      </Hand>
      <Tick x={694} y={60} s={0.9} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Folders for chapters, one paper in two of them, coloured tags.
   ------------------------------------------------------------------ */

const organiseCss = `
.s-zot4-tag { animation: s-zot4-swing 3s ease-in-out infinite; animation-delay: var(--d, 0s); }
.s-zot4-thread { animation: s-zot4-glow 3s ease-in-out infinite; }
@keyframes s-zot4-swing {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}
@keyframes s-zot4-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
`

const FOLDERS = [
  { x: 60, label: 'ch 1 intro', tone: 'blue' },
  { x: 250, label: 'ch 2 review', tone: 'green' },
  { x: 440, label: 'ch 3 method', tone: 'amber' },
]

const TAGS = [
  { x: 640, y: 70, label: 'method', tone: 'blue', d: '0s' },
  { x: 650, y: 140, label: 'India', tone: 'pink', d: '-1s' },
  { x: 636, y: 210, label: 'to read', tone: 'red', d: '-2s' },
]

export function OrganiseScene() {
  const top = 110
  return (
    <Scene w={800} h={300} css={organiseCss} className="s-zot4" label="Three coloured chapter folders hold papers, one paper appears in two folders joined by a red thread, and coloured tags labelled method, India and to read swing on the right">
      {FOLDERS.map((folder, i) => (
        <g key={folder.label}>
          <Box x={folder.x + 10} y={top - 18} w={70} h={26} r={4} fill={`url(#fill-${folder.tone})`} seed={410 + i * 4} sw={1.4} />
          <Box x={folder.x} y={top} w={170} h={150} r={5} fill={`url(#fill-${folder.tone})`} seed={411 + i * 4} sw={1.8} />
          <Hand x={folder.x + 85} y={top + 140} size={19} anchor="middle" weight={700}>
            {folder.label}
          </Hand>
          <Sheet x={folder.x + 20} y={top + 16} w={44} h={56} lines={3} fold={10} seed={420 + i * 4} sw={1.4} />
          <Sheet x={folder.x + 72} y={top + 22} w={44} h={56} lines={3} fold={10} seed={421 + i * 4} sw={1.4} />
        </g>
      ))}
      {/* The same paper, in the intro and in the review. */}
      <Sheet x={60 + 120} y={top + 50} w={40} h={50} tone="pink" lines={2} fold={9} seed={440} sw={1.5} />
      <Sheet x={250 + 120} y={top + 50} w={40} h={50} tone="pink" lines={2} fold={9} seed={441} sw={1.5} />
      <Place x={0} y={0}>
        <Anim className="s-zot4-thread">
          <Thread points={[[200, top + 48], [280, top - 4], [390, top + 48]]} seed={442} />
        </Anim>
      </Place>
      <Hand x={290} y={top - 30} size={17} anchor="middle" c={TONES.red.deep}>
        same paper, not a copy
      </Hand>

      {TAGS.map((tag, i) => (
        <Place key={tag.label} x={0} y={0}>
          <Anim className="s-zot4-tag" origin={[tag.x, tag.y]} style={{ '--d': tag.d }}>
            <Ink d={handLine(tag.x, tag.y, tag.x + 12, tag.y + 18, 450 + i, 0.3)} w={1.3} c={INK_SOFT} />
            <Box x={tag.x + 4} y={tag.y + 18} w={110} h={34} r={8} fill={`url(#fill-${tag.tone})`} seed={460 + i * 3} sw={1.5} />
            <Hand x={tag.x + 59} y={tag.y + 42} size={19} anchor="middle" weight={700}>
              {tag.label}
            </Hand>
          </Anim>
        </Place>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Highlights on the page gathered into a note with page numbers.
   ------------------------------------------------------------------ */

const annotateCss = `
.s-zot5-hl { animation: s-zot5-mark 6s ease-in-out infinite; animation-delay: var(--d, 0s); }
.s-zot5-nikhil .pip-body { animation: s-zot5-lean 4s ease-in-out infinite; }
@keyframes s-zot5-mark {
  0%, 30%, 100% { opacity: 0.85; }
  15% { opacity: 0.35; }
}
@keyframes s-zot5-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

const MARKS = [
  { y: 92, w: 150, tone: 'amber', note: 'finding, p. 4', d: '0s' },
  { y: 152, w: 120, tone: 'blue', note: 'method, p. 6', d: '-2s' },
  { y: 212, w: 140, tone: 'red', note: 'limit, p. 9', d: '-4s' },
]

export function AnnotateScene() {
  const floor = 300
  return (
    <Scene w={800} h={312} css={annotateCss} className="s-zot5" label="A PDF page with yellow, blue and red highlights; arrows carry each highlight into a note that lists finding page 4, method page 6 and limit page 9, while a paper character reads">
      <Sheet x={200} y={30} w={210} h={250} lines={0} fold={22} seed={501} />
      <Type x={220} y={62} size={13} c={INK_SOFT} weight={700}>
        PDF
      </Type>
      {MARKS.map((mark, i) => (
        <g key={mark.note}>
          <Lines x={220} y={mark.y - 14} rows={[170, 150]} gap={11} seed={510 + i * 6} />
          <Place x={0} y={0}>
            <Anim className="s-zot5-hl" style={{ '--d': mark.d }}>
              <rect x={218} y={mark.y + 2} width={mark.w} height={12} fill={TONES[mark.tone].mid} opacity="0.85" />
            </Anim>
          </Place>
          <Lines x={220} y={mark.y + 8} rows={[mark.w - 4]} seed={520 + i * 6} c={INK_SOFT} />
          <Lines x={220} y={mark.y + 26} rows={[160]} seed={530 + i * 6} />
          <Arrow from={[mark.w + 226, mark.y + 8]} to={[500, 96 + i * 50]} bend={-0.1} seed={540 + i * 3} c={INK_SOFT} w={1.4} head={8} />
        </g>
      ))}

      <Sticky x={506} y={40} w={190} h={190} tone="green" lines={0} seed={550} />
      <Hand x={522} y={74} size={20} weight={700}>
        my note
      </Hand>
      {MARKS.map((mark, i) => (
        <g key={mark.note}>
          <rect x={522} y={90 + i * 50} width={12} height={12} fill={TONES[mark.tone].mid} />
          <Hand x={542} y={102 + i * 50} size={18}>
            {mark.note}
          </Hand>
        </g>
      ))}

      <Floor y={floor} x1={30} x2={190} seed={560} />
      <Shadow x={110} y={floor + 3} rx={28} ry={4} />
      <Place x={110} y={floor} s={1.35}>
        <g className="s-zot5-nikhil">
          <Pip mood="focused" arms="hold" tone="amber" glasses look={1.4} seed={570} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The Zotero tab in Word: search, press Enter, citation appears.
   ------------------------------------------------------------------ */

const citeCss = `
.s-zot6-caret { animation: s-zot6-blink 1.2s steps(1) infinite; }
.s-zot6-cite { animation: s-zot6-pop 5s ease-in-out infinite; }
@keyframes s-zot6-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes s-zot6-pop {
  0%, 60%, 100% { transform: scale(1); }
  70% { transform: scale(1.25); }
}
`

const BUTTONS = ['citation', 'bibliography', 'preferences', 'refresh', 'unlink']

export function CiteScene() {
  return (
    <Scene w={800} h={320} css={citeCss} className="s-zot6" label="A Word page with a Zotero tab of five buttons, citation, bibliography, preferences, refresh and unlink; a search box finds a jaggery paper and a numbered citation pops into the sentence, with a reference list below">
      <Box x={120} y={20} w={560} h={290} r={6} fill={PAPER} seed={601} sw={1.8} />
      <rect x={120} y={20} width={560} height={46} fill={TONES.blue.tint} />
      <Ink d={handLine(120, 66, 680, 66, 602, 0.4)} w={1.4} />
      {BUTTONS.map((label, i) => (
        <g key={label}>
          <Box x={134 + i * 108} y={30} w={98} h={28} r={4} fill={i === 0 ? TONES.amber.mid : PAPER} seed={610 + i * 2} sw={1.3} />
          <Hand x={183 + i * 108} y={50} size={15} anchor="middle" weight={i === 0 ? 700 : 400}>
            {label}
          </Hand>
        </g>
      ))}

      <Lines x={150} y={94} rows={[480, 450]} seed={620} />
      <Lines x={150} y={118} rows={[250]} seed={624} />
      <Place x={0} y={0}>
        <Anim className="s-zot6-cite" origin={[425, 118]}>
          <Box x={408} y={108} w={34} h={22} r={4} fill={TONES.blue.mid} seed={630} sw={1.3} />
          <Hand x={425} y={125} size={15} anchor="middle" weight={700}>
            [12]
          </Hand>
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-zot6-caret">
          <Ink d={handLine(448, 108, 448, 130, 631, 0.1)} w={2} c={TONES.red.ink} />
        </Anim>
      </Place>

      {/* The search box that pops up. */}
      <Box x={330} y={146} w={300} h={78} r={6} fill={TONES.amber.tint} seed={640} sw={1.6} />
      <Box x={342} y={156} w={276} h={26} r={13} fill={PAPER} seed={641} sw={1.3} />
      <Hand x={356} y={175} size={16}>
        jaggery quality
      </Hand>
      <Hand x={350} y={210} size={15} c={INK_SOFT}>
        found: 1 paper, press Enter
      </Hand>

      <Hand x={150} y={256} size={18} weight={700}>
        References
      </Hand>
      <Lines x={150} y={272} rows={[400, 360]} gap={13} seed={650} c={TONES.blue.ink} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Keep a working copy, unlink only the final copy, check the list.
   ------------------------------------------------------------------ */

const submitCss = `
.s-zot7-copy { animation: s-zot7-slide 6s ease-in-out infinite; }
.s-zot7-nikhil .pip-body { animation: s-zot7-hop 3s ease-in-out infinite; }
@keyframes s-zot7-slide {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
@keyframes s-zot7-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-8px); }
}
`

export function SubmitScene() {
  const floor = 300
  return (
    <Scene w={800} h={312} css={submitCss} className="s-zot7" label="A working copy with live citations stays linked to the library box, while a duplicate copy is stamped plain text after the citations are unlinked, and a happy paper character holds a ticked list">
      <Library x={40} y={130} w={140} h={100} seed={701} />
      <Thread points={[[180, 170], [220, 150], [262, 136]]} c={TONES.blue.ink} seed={702} />

      <Sheet x={262} y={60} w={150} h={190} lines={0} fold={18} seed={710} />
      <Hand x={278} y={92} size={18} weight={700}>
        working copy
      </Hand>
      <Lines x={278} y={112} rows={[110, 96, 104, 80, 100]} gap={14} seed={711} />
      <Hand x={337} y={230} size={15} anchor="middle" c={TONES.blue.deep}>
        citations still live
      </Hand>

      <Arrow from={[420, 150]} to={[476, 150]} bend={0} seed={720} c={INK_SOFT} w={1.6} />
      <Hand x={448} y={134} size={14} anchor="middle" c={INK_SOFT}>
        copy
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-zot7-copy">
          <Sheet x={484} y={60} w={150} h={190} lines={0} fold={18} seed={730} />
          <Hand x={500} y={92} size={18} weight={700}>
            final copy
          </Hand>
          <Lines x={500} y={112} rows={[110, 96, 104, 80, 100]} gap={14} seed={731} />
          <StampMark x={560} y={206} w={124} h={36} text="PLAIN TEXT" tone="green" rotate={-7} size={16} bg={PAPER} seed={732} />
        </Anim>
      </Place>

      <Floor y={floor} x1={650} x2={780} seed={740} />
      <Shadow x={712} y={floor + 3} rx={28} ry={4} />
      <Place x={712} y={floor} s={1.35}>
        <g className="s-zot7-nikhil">
          <Pip mood="proud" arms="hold" tone="amber" seed={750}>
            <Sheet x={-12} y={-30} w={24} h={26} lines={0} fold={6} seed={751} sw={1.2} />
            <Tick x={0} y={-18} s={0.5} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
