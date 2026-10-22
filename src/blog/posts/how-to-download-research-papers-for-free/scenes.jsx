import {
  Anim,
  Arrow,
  Box,
  Crate,
  Cross,
  Door,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Key,
  Laptop,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Shelf,
  Sparkle,
  StampMark,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  ellipsePath,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6 }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} />
}

/* A padlock. Anchor: centre of the body. */
function Padlock({ x, y, s = 1, seed }) {
  return (
    <g>
      <Ink d={`M${x - 11 * s} ${y - 10 * s}V${y - 20 * s}A${11 * s} ${11 * s} 0 0 1 ${x + 11 * s} ${y - 20 * s}V${y - 10 * s}`} w={3} />
      <Box x={x - 18 * s} y={y - 12 * s} w={36 * s} h={28 * s} r={4} fill="url(#fill-amber)" seed={seed} sw={2} />
      <path d={ellipsePath(x, y, 3.4 * s, 3.4 * s)} fill="#2b2521" />
      <path d={`M${x - 1.6 * s} ${y}h${3.2 * s}v${8 * s}h${-3.2 * s}Z`} fill="#2b2521" />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. One paper, three versions; only the last is locked.
   ------------------------------------------------------------------ */

const paywallCss = `
.s-dlp1-lock { animation: s-dlp1-rattle 5s ease-in-out infinite; }
.s-dlp1-free { animation: s-dlp1-lift 6s ease-in-out infinite; animation-delay: calc(var(--i) * 1s); }
@keyframes s-dlp1-rattle {
  0%, 60%, 100% { transform: rotate(0deg); }
  66% { transform: rotate(-10deg); }
  72% { transform: rotate(8deg); }
  78% { transform: rotate(0deg); }
}
@keyframes s-dlp1-lift {
  0%, 40%, 100% { transform: translateY(0); }
  20% { transform: translateY(-10px); }
}
`

const VERSIONS = [
  { x: 90, label: 'preprint', note: 'before review', tone: 'paper', free: true },
  { x: 320, label: 'accepted', note: 'after review', tone: 'paper', free: true },
  { x: 550, label: 'published', note: 'final journal PDF', tone: 'blue', free: false },
]

export function PaywallScene() {
  return (
    <Scene w={800} h={300} top={20} css={paywallCss} className="s-dlp1" label="Three versions of one paper stand in a row: a preprint and an accepted manuscript, both with green ticks marking them often free, and the final published version locked behind bars with a padlock">
      {VERSIONS.map((v, i) => (
        <g key={v.label}>
          <Hand x={v.x + 80} y={62} size={24} anchor="middle" weight={700}>
            {v.label}
          </Hand>
          <Hand x={v.x + 80} y={86} size={17} anchor="middle" c={INK_SOFT}>
            {v.note}
          </Hand>
          {v.free ? (
            <Place x={0} y={0}>
              <Anim className="s-dlp1-free" style={{ '--i': i }}>
                <Sheet x={v.x + 30} y={104} w={100} h={130} tone={v.tone} lines={0} fold={16} seed={110 + i * 10} />
                <Lines x={v.x + 42} y={138} rows={[70, 56, 72, 48, 64, 52]} gap={13} seed={112 + i * 10} />
                <Tick x={v.x + 118} y={226} s={1.6} />
              </Anim>
            </Place>
          ) : (
            <g>
              <Sheet x={v.x + 30} y={104} w={100} h={130} tone={v.tone} lines={0} fold={16} seed={130} title />
              <Lines x={v.x + 42} y={138} rows={[70, 56, 72, 48, 64, 52]} gap={13} seed={132} />
              <Ink d={[0, 1, 2, 3, 4].map((k) => handLine(v.x + 22 + k * 29, 96, v.x + 22 + k * 29, 244, 140 + k, 0.6)).join('')} w={3} c={TONES.grey.deep} />
              <Place x={v.x + 80} y={176}>
                <Anim className="s-dlp1-lock" origin={[0, -20]}>
                  <Padlock x={0} y={0} s={1.1} seed={150} />
                </Anim>
              </Place>
            </g>
          )}
        </g>
      ))}
      <Hand x={300} y={290} size={19} anchor="middle" c={TONES.green.deep}>
        often free, legally
      </Hand>
      <Hand x={630} y={290} size={19} anchor="middle" c={TONES.red.deep}>
        behind the paywall
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The library holds one national key.
   ------------------------------------------------------------------ */

const libraryCss = `
.s-dlp2-key { animation: s-dlp2-swing 4s ease-in-out infinite; }
.s-dlp2-star { animation: s-dlp2-glow 3s ease-in-out infinite; }
.s-dlp2-reader .pip-body { animation: s-dlp2-nod 4s ease-in-out infinite; }
@keyframes s-dlp2-swing {
  0%, 100% { transform: rotate(-8deg); }
  50% { transform: rotate(8deg); }
}
@keyframes s-dlp2-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}
@keyframes s-dlp2-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function LibraryScene() {
  const floor = 300
  const [sx, sy, sw, sh] = laptopScreen(560, 262, 210)
  return (
    <Scene w={800} h={290} top={30} css={libraryCss} className="s-dlp2" label="A library shelf full of journals with a big key labelled ONOS hanging from it, and a paper character at a laptop where a journal paper opens in full with the words full text">
      <Box x={40} y={50} w={300} h={34} r={6} fill="url(#fill-green)" seed={201} sw={1.9} />
      <Hand x={190} y={75} size={22} anchor="middle" weight={700}>
        university library
      </Hand>
      <Shelf x={60} y={96} w={260} rows={2} rowH={92} seed={202} />

      <Ink d={handLine(380, 40, 380, 104, 203, 0.4)} w={1.8} />
      <Place x={380} y={104}>
        <Anim className="s-dlp2-key" origin={[0, -64]}>
          <Key x={0} y={14} s={1.4} angle={90} tone="amber" seed={204} />
        </Anim>
      </Place>
      <Box x={404} y={124} w={74} h={34} r={6} fill="url(#fill-amber)" seed={205} sw={1.8} />
      <Hand x={441} y={149} size={22} anchor="middle" weight={700}>
        ONOS
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-dlp2-star" origin={[470, 102]}>
          <Sparkle x={470} y={102} s={8} />
        </Anim>
      </Place>

      <Laptop x={560} y={262} w={210} tone="grey" seed={206}>
        <rect x={sx} y={sy} width={sw} height={sh} fill={TONES.blue.tint} />
        <Sheet x={sx + 34} y={sy + 6} w={sw - 68} h={sh - 12} tone="paper" lines={0} fold={9} seed={207} title />
        <Lines x={sx + 44} y={sy + 30} rows={[58, 70, 50, 66]} gap={10} seed={208} />
      </Laptop>
      <Hand x={560} y={120} size={20} anchor="middle" c={TONES.green.deep}>
        full text
      </Hand>
      <Arrow from={[512, 124]} to={[540, 152]} bend={0.2} seed={209} c={INK_SOFT} w={1.4} />

      <Floor y={floor} x1={30} x2={770} seed={210} />
      <Shadow x={712} y={floor + 3} rx={30} ry={4} />
      <Place x={712} y={floor} s={1.4} flip>
        <g className="s-dlp2-reader">
          <Pip mood="happy" arms="point" tone="green" look={1.2} seed={211} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Google Scholar: the [PDF] link and All versions.
   ------------------------------------------------------------------ */

const scholarCss = `
.s-dlp3-ring { animation: s-dlp3-pulse 3s ease-in-out infinite; }
.s-dlp3-ring2 { animation: s-dlp3-pulse 3s ease-in-out infinite; animation-delay: 1.5s; }
.s-dlp3-pointer .pip-arm-r { animation: s-dlp3-tap 3s ease-in-out infinite; }
@keyframes s-dlp3-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.6; }
}
@keyframes s-dlp3-tap {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
`

export function ScholarScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={30} css={scholarCss} className="s-dlp3" label="A big search results page with three results; beside the first result a PDF link is circled in green, and under it the words All versions are circled too, while a paper character points at them">
      <Box x={60} y={46} w={560} h={240} r={10} fill={PAPER} seed={301} sw={2} double />
      <Box x={84} y={64} w={360} h={30} r={14} fill={TONES.grey.tint} seed={302} sw={1.6} />
      <Type x={100} y={85} size={16} c={INK_SOFT}>
        "exact title of the paper"
      </Type>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Ink d={handLine(90, 124 + i * 54, 90 + [300, 260, 280][i], 124 + i * 54, 310 + i, 0.4)} c={TONES.blue.ink} w={3} />
          <Lines x={90} y={140 + i * 54} rows={[330, 250]} gap={10} seed={320 + i * 4} />
        </g>
      ))}
      <Type x={480} y={130} size={20} weight={700} c={TONES.green.deep}>
        [PDF]
      </Type>
      <Place x={0} y={0}>
        <Anim className="s-dlp3-ring" origin={[510, 124]}>
          <Ink d={`M${474} ${124}a36 18 0 1 0 72 0a36 18 0 1 0 -72 0`} c={TONES.green.ink} w={2.2} />
        </Anim>
      </Place>
      <Type x={92} y={169} size={15} c={TONES.blue.deep}>
        All 6 versions
      </Type>
      <Place x={0} y={0}>
        <Anim className="s-dlp3-ring2" origin={[146, 164]}>
          <Ink d={`M${84} ${164}a62 15 0 1 0 124 0a62 15 0 1 0 -124 0`} c={TONES.amber.ink} w={2.2} />
        </Anim>
      </Place>

      <Floor y={floor} x1={30} x2={770} seed={330} />
      <Shadow x={700} y={floor + 3} rx={30} ry={4} />
      <Place x={700} y={floor} s={1.45} flip>
        <g className="s-dlp3-pointer">
          <Pip mood="focused" arms="point" tone="green" look={1.6} seed={331} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Unpaywall's green tab and the open shelves.
   ------------------------------------------------------------------ */

const openCss = `
.s-dlp4-tab { animation: s-dlp4-slide 5s ease-in-out infinite; }
.s-dlp4-door { animation: s-dlp4-hop 6s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s); }
@keyframes s-dlp4-slide {
  0%, 100% { transform: translateX(0); }
  40%, 60% { transform: translateX(-12px); }
}
@keyframes s-dlp4-hop {
  0%, 30%, 100% { transform: translateY(0); }
  15% { transform: translateY(-8px); }
}
`

const SOURCES = [
  { name: 'arXiv', tone: 'red' },
  { name: 'PMC', tone: 'blue' },
  { name: 'DOAJ', tone: 'amber' },
  { name: 'CORE', tone: 'pink' },
  { name: 'Shodhganga', tone: 'green' },
]

export function OpenScene() {
  const [sx, sy, sw, sh] = laptopScreen(200, 262, 260)
  return (
    <Scene w={800} h={290} top={30} css={openCss} className="s-dlp4" label="A laptop shows a locked paper page with a green tab at its edge marked free copy, and beside it a row of open doors labelled arXiv, PMC, DOAJ, CORE and Shodhganga with papers inside">
      <Laptop x={200} y={262} w={260} tone="grey" seed={401}>
        <rect x={sx} y={sy} width={sw} height={sh} fill={PAPER} />
        <Lines x={sx + 12} y={sy + 18} rows={[120, 100, 130, 90, 110]} gap={12} seed={402} />
        <Place x={sx + 80} y={sy + 62}>
          <Padlock x={0} y={0} s={0.6} seed={403} />
        </Place>
      </Laptop>
      <Place x={0} y={0}>
        <Anim className="s-dlp4-tab">
          <Box x={sx + sw - 14} y={sy + 20} w={64} h={58} r={8} fill="url(#fill-green)" seed={404} sw={1.8} />
          <Hand x={sx + sw + 18} y={sy + 46} size={16} anchor="middle" weight={700}>
            free
          </Hand>
          <Hand x={sx + sw + 18} y={sy + 66} size={16} anchor="middle" weight={700}>
            copy
          </Hand>
        </Anim>
      </Place>
      <Hand x={200} y={70} size={22} anchor="middle" weight={700}>
        Unpaywall
      </Hand>
      <Arrow from={[244, 76]} to={[sx + sw + 20, sy + 14]} bend={-0.25} seed={405} c={INK_SOFT} w={1.4} />

      {SOURCES.map((s, i) => (
        <Place key={s.name} x={0} y={0}>
          <Anim className="s-dlp4-door" style={{ '--i': i }}>
            <Door x={392 + i * 78} y={250} w={60} h={120} open={0.8} tone={s.tone} seed={410 + i * 5} />
            <Sheet x={408 + i * 78} y={162} w={26} h={34} tone="paper" lines={2} fold={7} seed={412 + i * 5} sw={1.3} />
          </Anim>
          <Hand x={422 + i * 78} y={278} size={s.name.length > 6 ? 15 : 18} anchor="middle" weight={700} c={TONES[s.tone].deep}>
            {s.name}
          </Hand>
        </Place>
      ))}
      <Ink d={handLine(370, 250, 780, 250, 430, 1)} w={1.8} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. A polite email, and a paper back by evening.
   ------------------------------------------------------------------ */

const askCss = `
.s-dlp5-mail { animation: s-dlp5-out 6s ease-in-out infinite; }
.s-dlp5-reply { animation: s-dlp5-back 6s ease-in-out infinite; }
@keyframes s-dlp5-out {
  0%, 100% { transform: translate(0, 0); opacity: 1; }
  40% { transform: translate(300px, -30px); opacity: 1; }
  45%, 95% { transform: translate(300px, -30px); opacity: 0; }
}
@keyframes s-dlp5-back {
  0%, 50% { transform: translate(0, 0); opacity: 0; }
  55% { transform: translate(0, 0); opacity: 1; }
  90% { transform: translate(-300px, 20px); opacity: 1; }
  100% { transform: translate(-300px, 20px); opacity: 0; }
}
`

export function AskScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={30} css={askCss} className="s-dlp5" label="A student paper character sends an envelope across to an author in glasses on the other side, who sends a paper back; between them a short note reads please share a copy and thank you">
      <Shadow x={130} y={floor + 3} rx={32} ry={4} />
      <Place x={130} y={floor} s={1.5}>
        <Pip mood="happy" arms="write" tone="green" look={1.6} seed={501} />
      </Place>
      <Hand x={130} y={110} size={20} anchor="middle" c={TONES.green.deep}>
        Nazia
      </Hand>

      <Shadow x={670} y={floor + 3} rx={32} ry={4} />
      <Place x={670} y={floor} s={1.5} flip>
        <Pip mood="happy" arms="hold" tone="blue" glasses look={1.6} seed={502} />
      </Place>
      <Hand x={670} y={110} size={20} anchor="middle" c={TONES.blue.deep}>
        the author
      </Hand>

      <Box x={290} y={52} w={220} h={92} r={8} fill="url(#fill-pink)" seed={503} sw={1.8} />
      <Hand x={400} y={84} size={19} anchor="middle">
        who I am, what I study,
      </Hand>
      <Hand x={400} y={108} size={19} anchor="middle">
        which paper, why I need it,
      </Hand>
      <Hand x={400} y={132} size={19} anchor="middle" weight={700}>
        thank you
      </Hand>

      <Ink d={handLine(190, 230, 610, 200, 504, 1.2)} c={INK_SOFT} w={1.4} dash="5 7" />
      <Place x={0} y={0}>
        <Anim className="s-dlp5-mail">
          <Envelope x={196} y={196} w={66} h={44} seed={505} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-dlp5-reply" style={{ opacity: 0 }}>
          <Sheet x={566} y={172} w={44} h={56} tone="paper" lines={3} fold={10} seed={506} title />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The shortcut is blocked; the legal road goes on.
   ------------------------------------------------------------------ */

const scihubCss = `
.s-dlp6-walker .pip-body { animation: s-dlp6-walk 2s ease-in-out infinite; }
.s-dlp6-stamp { animation: s-dlp6-thump 5s ease-in-out infinite; }
@keyframes s-dlp6-walk {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-3px) rotate(2deg); }
}
@keyframes s-dlp6-thump {
  0%, 70%, 100% { transform: scale(1); }
  76% { transform: scale(1.12); }
  82% { transform: scale(1); }
}
`

export function SciHubScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={30} css={scihubCss} className="s-dlp6" label="A road forks: the short path to the left is closed with a striped barrier stamped BLOCKED by court order, and a paper character walks the longer path to the right towards signs for the library, open access and the author">
      <path d="M380 300 Q300 230 150 200 L150 230 Q290 250 340 300Z" fill={TONES.grey.tint} />
      <path d="M420 300 Q500 220 700 190 L700 220 Q540 250 470 300Z" fill={TONES.green.tint} />
      <Ink d="M380 300 Q300 230 150 200M340 300 Q290 250 150 230" w={1.6} />
      <Ink d="M420 300 Q500 220 700 190M470 300 Q540 250 700 220" w={1.6} />

      <Box x={150} y={140} w={150} h={26} fill="url(#fill-red)" seed={601} sw={2} />
      <Ink d={[0, 1, 2, 3, 4].map((k) => handLine(162 + k * 28, 140, 176 + k * 28, 166, 602 + k, 0.3)).join('')} w={4} c={PAPER} />
      <Ink d={handLine(166, 166, 166, 214, 608, 0.3) + handLine(284, 166, 284, 214, 609, 0.3)} w={2.4} />
      <Hand x={225} y={120} size={20} anchor="middle" c={TONES.red.deep} weight={700}>
        shadow library shortcut
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-dlp6-stamp" origin={[225, 76]}>
          <StampMark x={225} y={76} w={170} h={42} text="BLOCKED" size={22} tone="red" rotate={-6} bg={PAPER} seed={610} />
        </Anim>
      </Place>
      <Hand x={225} y={198} size={15} anchor="middle" c={INK_SOFT}>
        by court order
      </Hand>

      {[
        { y: 66, t: 'library' },
        { y: 98, t: 'open access' },
        { y: 130, t: 'the author' },
      ].map((sgn, i) => (
        <g key={sgn.t}>
          <Box x={600} y={sgn.y} w={140} h={26} r={4} fill="url(#fill-green)" seed={620 + i} sw={1.7} />
          <Hand x={664} y={sgn.y + 19} size={17} anchor="middle" weight={700}>
            {sgn.t}
          </Hand>
          <Ink d={handLine(740, sgn.y + 13, 756, sgn.y + 13, 630 + i, 0.2) + handLine(748, sgn.y + 6, 756, sgn.y + 13, 640 + i, 0.2) + handLine(748, sgn.y + 20, 756, sgn.y + 13, 650 + i, 0.2)} w={2} />
        </g>
      ))}
      <Ink d={handLine(612, 156, 612, 210, 660, 0.3)} w={2.4} />

      <Cross x={370} y={160} s={1.2} />
      <Shadow x={470} y={floor - 30} rx={26} ry={4} />
      <Place x={470} y={floor - 30} s={1.3}>
        <g className="s-dlp6-walker">
          <Pip mood="happy" arms="down" tone="green" look={2} seed={670} />
        </g>
      </Place>
      <Floor y={floor} x1={30} x2={770} seed={680} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Read any legal version; cite the published one; file it away.
   ------------------------------------------------------------------ */

const versionCss = `
.s-dlp7-drop { animation: s-dlp7-file 5s ease-in-out infinite; }
.s-dlp7-saver .pip-arm-r { animation: s-dlp7-wave 5s ease-in-out infinite; }
@keyframes s-dlp7-file {
  0%, 20% { transform: translate(0, 0); opacity: 1; }
  60% { transform: translate(150px, 52px); opacity: 1; }
  70%, 90% { transform: translate(150px, 52px); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1; }
}
@keyframes s-dlp7-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

export function VersionScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={30} css={versionCss} className="s-dlp7" label="Three sheets: a preprint and an accepted manuscript marked read, and the published version marked cite this with a green tick; a paper drops into a reference box labelled my library, watched by a paper character">
      <Sheet x={60} y={70} w={96} h={124} tone="paper" lines={6} fold={15} seed={701} />
      <Hand x={108} y={56} size={19} anchor="middle" weight={700}>
        preprint
      </Hand>
      <Sheet x={190} y={70} w={96} h={124} tone="paper" lines={6} fold={15} seed={702} />
      <Hand x={238} y={56} size={19} anchor="middle" weight={700}>
        accepted
      </Hand>
      <Hand x={173} y={224} size={20} anchor="middle" c={TONES.blue.deep}>
        read
      </Hand>
      <Ink d={handLine(70, 210, 276, 210, 703, 0.4)} c={TONES.blue.ink} w={1.6} />

      <Sheet x={330} y={70} w={96} h={124} tone="blue" lines={6} fold={15} seed={704} title />
      <Hand x={378} y={56} size={19} anchor="middle" weight={700}>
        published
      </Hand>
      <Tick x={410} y={180} s={1.7} />
      <Hand x={378} y={224} size={20} anchor="middle" c={TONES.green.deep} weight={700}>
        cite this
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-dlp7-drop">
          <Sheet x={470} y={108} w={44} h={56} tone="paper" lines={3} fold={10} seed={705} />
        </Anim>
      </Place>
      <Crate x={580} y={176} w={120} h={86} label="my library" seed={706} />
      <Arrow from={[500, 96]} to={[630, 150]} bend={-0.25} seed={707} c={INK_SOFT} w={1.4} dash="5 6" />

      <Floor y={floor} x1={30} x2={770} seed={708} />
      <Shadow x={740} y={floor + 3} rx={24} ry={4} />
      <Place x={740} y={floor} s={1.2} flip>
        <g className="s-dlp7-saver">
          <Pip mood="proud" arms="wave" tone="green" seed={709} />
        </g>
      </Place>
    </Scene>
  )
}
