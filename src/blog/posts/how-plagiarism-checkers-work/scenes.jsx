import {
  Anim,
  Arrow,
  Box,
  Clock,
  Crate,
  Cross,
  Desk,
  Envelope,
  Fingerprint,
  Floor,
  Globe,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Moon,
  Motion,
  Oval,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Shelf,
  Sparkle,
  Speech,
  TONES,
  Tick,
  Type,
  Window,
  ellipsePath,
  handCurve,
  handEllipse,
  handLine,
  handPoly,
  laptopScreen,
  polyPath,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. What the percentage measures: 18 percent on the screen, late at
      night, and a very worried Pip.
   ------------------------------------------------------------------ */

const panicCss = `
.s-pc1-num { animation: s-pc1-pulse 2.4s ease-in-out infinite; }
.s-pc1-pip .pip-body { animation: s-pc1-shiver 2.4s ease-in-out infinite; }
.s-pc1-drop { animation: s-pc1-drop 2.4s ease-in infinite; }
@keyframes s-pc1-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
@keyframes s-pc1-shiver {
  0%, 40%, 100% { transform: rotate(0deg); }
  48% { transform: rotate(-2deg); }
  56% { transform: rotate(2deg); }
  64% { transform: rotate(-1deg); }
}
@keyframes s-pc1-drop {
  0% { transform: translateY(0); opacity: 0; }
  20% { opacity: 1; }
  80% { transform: translateY(16px); opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
}
`

export function PanicScene() {
  const [sx, sy, sw, sh] = laptopScreen(410, 300, 300)
  return (
    <Scene w={800} h={280} top={40} css={panicCss} className="s-pc1" label="At night, with the moon in the window and a clock on the wall, a laptop screen shows a similarity email reading 18 percent, and a worried paper character throws up its hands">
      <Window x={70} y={60} w={140} h={110} night seed={10} />
      <Moon x={108} y={96} r={15} seed={11} />
      <Clock x={272} y={104} r={28} seed={12} />

      <Desk y={300} depth={24} seed={13} />
      <Laptop x={410} y={300} w={300} seed={14}>
        <Envelope x={sx + 14} y={sy + 14} w={44} h={30} seed={15} />
        <Type x={sx + 70} y={sy + 36} size={20} c={INK_SOFT}>
          similarity
        </Type>
        <Place x={sx + sw / 2} y={sy + sh - 30}>
          <Anim className="s-pc1-num" spin>
            <Type x={0} y={16} size={46} anchor="middle" weight={700} c={TONES.red.ink}>
              18%
            </Type>
          </Anim>
        </Place>
      </Laptop>

      <Shadow x={652} y={302} rx={46} ry={6} />
      <Place x={652} y={300} s={2}>
        <g className="s-pc1-pip">
          <Pip mood="worried" arms="up" look={-1.8} seed={16} />
        </g>
      </Place>
      <Place x={704} y={172}>
        <Anim className="s-pc1-drop">
          <path d="M0 -9Q6 0 4 5Q0 9 -4 5Q-6 0 0 -9Z" fill={TONES.blue.tint} />
          <Ink d="M0 -9Q6 0 4 5Q0 9 -4 5Q-6 0 0 -9Z" w={1.3} c={TONES.blue.deep} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. How a checker reads: a strip of words runs into the machine and
      fingerprints come out the other side.
   ------------------------------------------------------------------ */

const PRINTS = [
  { x: 578, y: 180, tone: 'blue' },
  { x: 648, y: 180, tone: 'green' },
  { x: 718, y: 180, tone: 'pink' },
  { x: 578, y: 258, tone: 'amber' },
  { x: 648, y: 258, tone: 'blue' },
  { x: 718, y: 258, tone: 'green' },
]

const printCss = `
.s-pc2-strip { animation: s-pc2-slide 1.6s linear infinite; }
.s-pc2-gear { animation: s-pc2-turn 3s linear infinite; }
.s-pc2-light { animation: s-pc2-blink 1.6s steps(1) infinite; }
${PRINTS.map((_, i) => `.s-pc2-print-${i} { animation: s-pc2-print-${i} 9s ease-in-out infinite; }
@keyframes s-pc2-print-${i} {
  0%, ${6 + i * 9}% { opacity: 0; transform: scale(0.4); }
  ${12 + i * 9}%, 86% { opacity: 1; transform: scale(1); }
  93%, 100% { opacity: 0; transform: scale(0.4); }
}`).join('\n')}
@keyframes s-pc2-slide { from { transform: translateX(0); } to { transform: translateX(44px); } }
@keyframes s-pc2-turn { to { transform: rotate(360deg); } }
@keyframes s-pc2-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }
`

const WORD_TONES = ['amber', 'blue', 'green', 'pink']

export function FingerprintScene() {
  const words = []
  for (let k = 0; k < 11; k++) {
    const x = -84 + k * 44
    words.push(<rect key={k} x={x} y={194} width={34} height={12} rx={4} fill={TONES[WORD_TONES[k % 4]].mid} />)
  }
  let spokes = ''
  for (let k = 0; k < 6; k++) {
    const a = (k * Math.PI) / 3
    spokes += `M415 222L${(415 + Math.cos(a) * 18).toFixed(1)} ${(222 + Math.sin(a) * 18).toFixed(1)}`
  }
  return (
    <Scene w={800} h={262} top={60} css={printCss} className="s-pc2" label="A strip of words slides into a machine labelled fingerprints, with brackets marking overlapping pieces of text, and small coloured fingerprints appear one by one on the other side">
      <Desk y={300} depth={24} seed={20} />

      <Anim className="s-pc2-strip">
        <rect x={-90} y={188} width={432} height={24} fill={PAPER} />
        {words}
        <Ink d={handLine(-90, 188, 342, 188, 21, 0.3) + handLine(-90, 212, 342, 212, 22, 0.3)} w={1.5} />
      </Anim>

      <Ink d="M150 178q0 -8 8 -8h54q8 0 8 -8q0 8 8 8h54q8 0 8 8" c={TONES.blue.deep} w={1.8} />
      <Ink d="M194 160q0 -8 8 -8h54q8 0 8 -8q0 8 8 8h54q8 0 8 8" c={TONES.pink.deep} w={1.8} />
      <Hand x={250} y={126} size={20} anchor="middle" c={INK_SOFT}>
        overlapping pieces
      </Hand>

      <Box x={330} y={142} w={170} h={158} r={8} fill="url(#fill-grey)" seed={23} />
      <rect x={330} y={184} width={8} height={32} fill={INK} opacity="0.75" />
      <circle cx={476} cy={162} r={6} fill={TONES.red.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" className="s-pc2-light" />
      <Oval cx={415} cy={222} rx={24} fill={PAPER} seed={24} />
      <Anim className="s-pc2-gear" origin={[415, 222]}>
        <Ink d={spokes} w={1.6} c={INK_SOFT} />
      </Anim>
      <Hand x={415} y={284} size={20} anchor="middle" weight={700}>
        fingerprints
      </Hand>

      <Arrow from={[508, 220]} to={[540, 220]} bend={0} seed={25} head={9} />
      {PRINTS.map((p, i) => (
        <g key={i} className={`s-pc2-print-${i}`} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Fingerprint x={p.x} y={p.y} s={0.95} c={TONES[p.tone].deep} seed={30 + i} />
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. What it compares against: dotted lines run from Pip's page to the
      web, the journals, past theses and earlier submissions.
   ------------------------------------------------------------------ */

const SOURCE_POINTS = [
  { to: [164, 176], spark: [172, 108] },
  { to: [305, 124], spark: [396, 34] },
  { to: [520, 152], spark: [614, 58] },
  { to: [664, 190], spark: [752, 168] },
]

const sourcesCss = `
.s-pc3-link { animation: s-pc3-flow 1.4s linear infinite; }
${SOURCE_POINTS.map((_, i) => `.s-pc3-spark-${i} { animation: s-pc3-spark-${i} 8s ease-in-out infinite; }
@keyframes s-pc3-spark-${i} {
  0%, ${8 + i * 16}% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  ${14 + i * 16}% { opacity: 1; transform: scale(1.2) rotate(20deg); }
  ${20 + i * 16}%, 86% { opacity: 1; transform: scale(1) rotate(30deg); }
  94%, 100% { opacity: 0; transform: scale(0.3) rotate(40deg); }
}`).join('\n')}
@keyframes s-pc3-flow { to { stroke-dashoffset: -24; } }
`

export function SourcesScene() {
  return (
    <Scene w={800} h={316} top={14} css={sourcesCss} className="s-pc3" label="A paper character holds up its page while dotted lines connect it to four collections: web pages shown as a globe, journals on a shelf, a box of past theses, and a pile of earlier submissions">
      <Floor y={320} x1={30} x2={770} seed={40} />

      {SOURCE_POINTS.map((s, i) => (
        <Ink key={i} d={handLine(400, 238, s.to[0], s.to[1], 41 + i, 0.5)} dash="4 8" c={INK_SOFT} w={1.5} className="s-pc3-link" />
      ))}

      <Globe x={120} y={150} r={46} seed={45} />
      <Hand x={120} y={238} size={21} anchor="middle" weight={700}>
        web pages
      </Hand>

      <Shelf x={220} y={24} w={170} rows={1} rowH={84} seed={46} />
      <Hand x={305} y={148} size={21} anchor="middle" weight={700}>
        journals
      </Hand>

      <Crate x={452} y={64} w={156} h={84} label="past theses" seed={47} />

      <Pile x={704} y={214} w={100} count={8} seed={48} />
      <Hand x={704} y={246} size={21} anchor="middle" weight={700}>
        submissions
      </Hand>

      {SOURCE_POINTS.map((s, i) => (
        <g key={i} className={`s-pc3-spark-${i}`} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Sparkle x={s.spark[0]} y={s.spark[1]} s={10} />
        </g>
      ))}

      <Shadow x={400} y={322} rx={46} ry={6} />
      <Place x={400} y={320} s={2}>
        <Pip mood="focused" arms="hold" seed={49}>
          <Sheet x={-13} y={-42} w={26} h={32} lines={2} fold={7} seed={50} sw={1.3} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Reading a report: highlights in the text, and a source list with
      one bar per source.
   ------------------------------------------------------------------ */

const REPORT_LINES = [104, 124, 144, 164, 184, 204, 224, 244, 264, 284]
const HIGHLIGHTS = [
  { line: 1, tone: 'amber' },
  { line: 2, tone: 'amber' },
  { line: 4, tone: 'blue' },
  { line: 5, tone: 'blue' },
  { line: 7, tone: 'pink' },
]
const BARS = [
  { y: 148, tone: 'amber', w: 150, label: '6%' },
  { y: 192, tone: 'blue', w: 100, label: '4%' },
  { y: 236, tone: 'pink', w: 75, label: '3%' },
]

const reportCss = `
${HIGHLIGHTS.map((_, i) => `.s-pc4-hl-${i} { animation: s-pc4-hl-${i} 10s ease-in-out infinite; }
@keyframes s-pc4-hl-${i} {
  0%, ${6 + i * 8}% { transform: scaleX(0); }
  ${12 + i * 8}%, 88% { transform: scaleX(1); }
  95%, 100% { transform: scaleX(0); }
}`).join('\n')}
${BARS.map((_, i) => `.s-pc4-bar-${i} { animation: s-pc4-bar-${i} 10s ease-in-out infinite; }
@keyframes s-pc4-bar-${i} {
  0%, ${50 + i * 6}% { transform: scaleX(0); }
  ${58 + i * 6}%, 88% { transform: scaleX(1); }
  95%, 100% { transform: scaleX(0); }
}`).join('\n')}
`

export function ReportScene() {
  return (
    <Scene w={800} h={302} top={26} css={reportCss} className="s-pc4" label="A similarity report with some lines highlighted in amber, blue and pink, next to a list of sources where each colour has its own bar and percentage, adding up to 18 percent">
      <Place x={-20}>
        <Box x={56} y={40} w={348} h={270} fill={PAPER} seed={60} />
        <Hand x={78} y={76} size={22} weight={700}>
          similarity report
        </Hand>
        {REPORT_LINES.map((y, i) => {
          const len = 250 + ((i * 29) % 56)
          const mark = HIGHLIGHTS.findIndex((h) => h.line === i)
          return (
            <g key={y}>
              {mark >= 0 ? (
                <rect
                  x={78}
                  y={y - 7}
                  width={len + 6}
                  height={14}
                  rx={3}
                  fill={TONES[HIGHLIGHTS[mark].tone].mid}
                  opacity="0.6"
                  className={`s-pc4-hl-${mark}`}
                  style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
                />
              ) : null}
              <Ink d={handLine(82, y, 82 + len, y, 61 + i, 0.3)} c={INK_SOFT} w={1.6} />
            </g>
          )
        })}

        <Box x={430} y={68} w={280} h={214} fill={PAPER} seed={70} />
        <Hand x={452} y={104} size={22} weight={700}>
          sources
        </Hand>
        <Type x={690} y={104} size={26} anchor="end" weight={700} c={TONES.red.ink}>
          18%
        </Type>
        {BARS.map((bar, i) => (
          <g key={bar.y}>
            <Oval cx={460} cy={bar.y} rx={8} fill={TONES[bar.tone].mid} seed={71 + i} sw={1.3} />
            <rect
              x={478}
              y={bar.y - 7}
              width={bar.w}
              height={14}
              rx={3}
              fill={TONES[bar.tone].mid}
              className={`s-pc4-bar-${i}`}
              style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
            />
            <Type x={690} y={bar.y + 7} size={20} anchor="end">
              {bar.label}
            </Type>
          </g>
        ))}
      </Place>

      <Floor y={320} x1={580} x2={790} seed={75} />
      <Shadow x={738} y={322} rx={32} ry={4} />
      <Place x={738} y={320} s={1.4} flip>
        <Pip mood="focused" arms="point" look={1.6} seed={76} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Similarity is not plagiarism: harmless matches fall through the
      sieve; the copied one stays behind.
   ------------------------------------------------------------------ */

const sieveCss = `
.s-pc5-through { animation: s-pc5-through 9s ease-in-out infinite; }
.s-pc5-caught { animation: s-pc5-caught 9s ease-in-out infinite; }
@keyframes s-pc5-through {
  0% { transform: translateY(-200px); opacity: 0; }
  8% { opacity: 1; }
  60%, 86% { transform: translateY(0); opacity: 1; }
  94% { transform: translateY(0); opacity: 0; }
  95%, 100% { transform: translateY(-200px); opacity: 0; }
}
@keyframes s-pc5-caught {
  0% { transform: translateY(-150px); opacity: 0; }
  8% { opacity: 1; }
  40% { transform: translateY(0); }
  45% { transform: translateY(-12px); }
  50%, 86% { transform: translateY(0); opacity: 1; }
  94% { transform: translateY(0); opacity: 0; }
  95%, 100% { transform: translateY(-150px); opacity: 0; }
}
`

function Strip({ kind, seed }) {
  const fill = kind === 'copied' ? 'url(#fill-red)' : PAPER
  return (
    <g>
      <rect x={-34} y={-10} width={68} height={20} rx={3} fill={fill} />
      <Ink d={handPoly([[-34, -10], [34, -10], [34, 10], [-34, 10]], { seed, amp: 0.3, closed: true })} w={1.4} />
      {kind === 'quote' ? (
        <g>
          <Hand x={-28} y={12} size={22} weight={700} c={TONES.amber.deep}>
            “
          </Hand>
          <Ink d={handLine(-14, 0, 14, 0, seed + 1, 0.2)} c={INK_SOFT} w={1.4} />
          <Hand x={18} y={12} size={22} weight={700} c={TONES.amber.deep}>
            ”
          </Hand>
        </g>
      ) : null}
      {kind === 'ref' ? (
        <Type x={0} y={7} size={20} anchor="middle" weight={700} c={TONES.blue.deep}>
          [1]
        </Type>
      ) : null}
      {kind === 'plain' ? <Ink d={handLine(-24, -2, 24, -2, seed + 2, 0.2) + handLine(-24, 4, 10, 4, seed + 3, 0.2)} c={INK_SOFT} w={1.3} /> : null}
      {kind === 'copied' ? (
        <Hand x={0} y={7} size={20} anchor="middle" weight={700} c={TONES.red.deep}>
          copied
        </Hand>
      ) : null}
    </g>
  )
}

export function SieveScene() {
  const rim = ellipsePath(360, 150, 150, 18)
  const bowl = 'M210 150Q218 224 360 228Q502 224 510 150Z'
  return (
    <Scene w={800} h={312} top={18} css={sieveCss} className="s-pc5" label="A paper character holds a big sieve. Strips with quotation marks, a reference number and a plain phrase fall through into a box labelled fine, while a red strip marked copied stays in the sieve to be checked">
      <Floor y={320} x1={30} x2={770} seed={80} />

      {[
        { x: 304, kind: 'quote', rot: -10, delay: 0 },
        { x: 360, kind: 'ref', rot: 6, delay: -3 },
        { x: 414, kind: 'plain', rot: -4, delay: -6 },
      ].map((s, i) => (
        <Place key={s.kind} x={s.x} y={246}>
          <Anim className="s-pc5-through" style={{ animationDelay: `${s.delay}s` }}>
            <g transform={`rotate(${s.rot})`}>
              <Strip kind={s.kind} seed={81 + i * 4} />
            </g>
          </Anim>
        </Place>
      ))}
      <Crate x={286} y={250} w={150} h={70} label="fine" seed={94} />

      <path d={bowl} fill={PAPER} opacity="0.5" />
      <path d={bowl} fill="url(#ink-hatch)" />
      <path d={bowl} fill="url(#ink-hatch-2)" />
      <path d={rim} fill={PAPER} opacity="0.4" />
      <Ink d={handCurve([[210, 150], [240, 206], [300, 226], [360, 229], [420, 226], [480, 206], [510, 150]], { seed: 95, amp: 0.5 })} w={1.9} />
      <Ink d={handEllipse(360, 150, 150, 18, { seed: 96, amp: 0.5 })} w={2} />

      <Place x={346} y={194}>
        <Anim className="s-pc5-caught">
          <g transform="rotate(-6)">
            <Strip kind="copied" seed={97} />
          </g>
        </Anim>
      </Place>

      <path d={polyPath([[506, 150], [512, 142], [612, 222], [604, 230]])} fill="url(#wood)" />
      <Ink d={handPoly([[506, 150], [512, 142], [612, 222], [604, 230]], { seed: 98, amp: 0.3, closed: true })} w={1.5} />

      <Hand x={452} y={96} size={21} anchor="middle" weight={700} c={TONES.red.ink}>
        check this
      </Hand>
      <Arrow from={[430, 104]} to={[378, 176]} bend={0.2} seed={99} c={TONES.red.ink} />

      <Shadow x={692} y={322} rx={46} ry={6} />
      <Place x={692} y={320} s={2} flip>
        <Pip mood="focused" arms="point" look={1.6} seed={100} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The UGC levels: a scale in four bands, and the marker sliding from
      18 percent down into Level 0 once the report is read properly.
   ------------------------------------------------------------------ */

const yOf = (v) => 300 - v * 2.6

const levelsCss = `
.s-pc6-ball { animation: s-pc6-slide 10s ease-in-out infinite; }
.s-pc6-tick { animation: s-pc6-tick 10s ease-in-out infinite; }
.s-pc6-before { animation: s-pc6-before 10s ease-in-out infinite; }
.s-pc6-after { animation: s-pc6-after 10s ease-in-out infinite; }
@keyframes s-pc6-slide {
  0%, 28% { transform: translateY(${(yOf(18) - yOf(6)).toFixed(1)}px); }
  46%, 88% { transform: translateY(0); }
  96%, 100% { transform: translateY(${(yOf(18) - yOf(6)).toFixed(1)}px); }
}
@keyframes s-pc6-tick {
  0%, 46% { opacity: 0; transform: scale(0.4); }
  52% { opacity: 1; transform: scale(1.2); }
  56%, 88% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.4); }
}
@keyframes s-pc6-before {
  0%, 30% { opacity: 1; }
  38%, 90% { opacity: 0; }
  98%, 100% { opacity: 1; }
}
@keyframes s-pc6-after {
  0%, 30% { opacity: 0; }
  38%, 90% { opacity: 1; }
  98%, 100% { opacity: 0; }
}
`

const BANDS = [
  { from: 0, to: 10, tone: 'green', label: 'Level 0' },
  { from: 10, to: 40, tone: 'amber', label: 'Level 1' },
  { from: 40, to: 60, tone: 'pink', label: 'Level 2' },
  { from: 60, to: 100, tone: 'red', label: 'Level 3' },
]

export function LevelsScene() {
  const bx = 250
  const bw = 42
  return (
    <Scene w={800} h={306} top={24} css={levelsCss} className="s-pc6" label="A tall scale divided into Level 0 up to 10 percent, Level 1 up to 40, Level 2 up to 60 and Level 3 above. A marker slides from 18 percent down to 6 percent, a tick appears beside Level 0, and a paper character says the new number">
      {BANDS.map((b) => (
        <rect key={b.label} x={bx} y={yOf(b.to)} width={bw} height={yOf(b.from) - yOf(b.to)} fill={`url(#fill-${b.tone})`} />
      ))}
      <Ink d={handPoly([[bx, yOf(100)], [bx + bw, yOf(100)], [bx + bw, yOf(0)], [bx, yOf(0)]], { seed: 110, amp: 0.5, closed: true })} w={1.9} />
      {[10, 40, 60].map((v, i) => (
        <g key={v}>
          <Ink d={handLine(bx - 6, yOf(v), bx + bw, yOf(v), 111 + i, 0.2)} w={1.5} />
          <Type x={bx - 12} y={yOf(v) + 7} size={20} anchor="end" c={INK_SOFT}>
            {`${v}%`}
          </Type>
        </g>
      ))}
      {BANDS.map((b) => (
        <Hand key={b.label} x={bx + bw + 14} y={(yOf(b.from) + yOf(b.to)) / 2 + 7} size={22} weight={700} c={TONES[b.tone].deep}>
          {b.label}
        </Hand>
      ))}

      <Anim className="s-pc6-ball">
        <circle cx={bx + bw / 2} cy={yOf(6)} r={11} fill={PAPER} stroke={INK} strokeWidth={2.4} vectorEffect="non-scaling-stroke" />
        <circle cx={bx + bw / 2} cy={yOf(6)} r={4} fill={INK} />
      </Anim>
      <g className="s-pc6-tick" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <Tick x={412} y={288} s={1.2} />
      </g>

      <Floor y={320} x1={440} x2={780} seed={115} />
      <Speech x={470} y={96} w={150} h={62} tx={548} ty={178} seed={116}>
        <Type x={545} y={137} size={30} anchor="middle" weight={700} c={TONES.red.ink} className="s-pc6-before" style={{ opacity: 0 }}>
          18%
        </Type>
        <Type x={545} y={137} size={30} anchor="middle" weight={700} c={TONES.green.deep} className="s-pc6-after">
          6%
        </Type>
      </Speech>
      <Shadow x={562} y={322} rx={46} ry={6} />
      <Place x={562} y={320} s={2}>
        <Pip mood="happy" arms="hips" look={-1.4} seed={117} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. What checkers cannot see: the net catches the copied page while the
      reworded page, the translated page and a picture fly past.
   ------------------------------------------------------------------ */

const netCss = `
.s-pc7-fly-a { animation: s-pc7-fly-a 9s linear infinite; }
.s-pc7-fly-b { animation: s-pc7-fly-b 9s linear infinite; }
.s-pc7-fly-c { animation: s-pc7-fly-c 9s linear infinite; }
.s-pc7 .pip-arm-r { animation: s-pc7-swing 4.5s ease-in-out infinite; }
@keyframes s-pc7-fly-a {
  0% { transform: translateX(260px); opacity: 0; }
  8% { opacity: 1; }
  82% { transform: translateX(-190px); opacity: 1; }
  90% { transform: translateX(-220px); opacity: 0; }
  91%, 100% { transform: translateX(260px); opacity: 0; }
}
@keyframes s-pc7-fly-b {
  0% { transform: translateX(160px); opacity: 0; }
  8% { opacity: 1; }
  82% { transform: translateX(-270px); opacity: 1; }
  90% { transform: translateX(-300px); opacity: 0; }
  91%, 100% { transform: translateX(160px); opacity: 0; }
}
@keyframes s-pc7-fly-c {
  0% { transform: translateX(300px); opacity: 0; }
  8% { opacity: 1; }
  82% { transform: translateX(-150px); opacity: 1; }
  90% { transform: translateX(-180px); opacity: 0; }
  91%, 100% { transform: translateX(300px); opacity: 0; }
}
@keyframes s-pc7-swing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-7deg); }
}
`

function Net() {
  const bag = 'M80 -92Q84 -52 106 -54Q124 -58 120 -92Z'
  return (
    <g>
      <Ink d="M46 -47L82 -80" c={TONES.brown.deep} w={3} />
      <path d={bag} fill={PAPER} opacity="0.5" />
      <g transform="rotate(-8 99 -84)">
        <Sheet x={92} y={-84} w={14} h={18} lines={1} fold={4} seed={120} tone="red" sw={1.1} />
      </g>
      <path d={bag} fill="url(#ink-hatch)" />
      <path d={bag} fill="url(#ink-hatch-2)" />
      <Ink d={bag} w={1.5} />
      <Ink d={handEllipse(100, -92, 20, 7, { seed: 121, amp: 0.3 })} w={2.2} />
    </g>
  )
}

function Disguised() {
  return (
    <g>
      <Sheet x={-20} y={-26} w={40} h={52} lines={0} fold={9} seed={122} />
      <Ink d={handEllipse(-8, -8, 5, 5, { seed: 123, amp: 0.2 }) + handEllipse(6, -8, 5, 5, { seed: 124, amp: 0.2 })} w={1.6} />
      <path d="M-1 4C-4 1 -9 1 -12 4C-13 5 -15 5 -16 4C-15 9 -8 10 -4 7C-2 6 -1 6 -1 6C0 6 1 6 3 7C7 10 14 9 15 4C14 5 12 5 11 4C8 1 3 1 -1 4Z" fill={INK} />
    </g>
  )
}

function Translated() {
  return (
    <g>
      <Sheet x={-20} y={-26} w={40} h={52} lines={0} fold={9} seed={125} />
      <Hand x={-2} y={14} size={28} anchor="middle" weight={700} c={TONES.green.deep}>
        अ
      </Hand>
    </g>
  )
}

function Picture() {
  return (
    <g>
      <Box x={-26} y={-20} w={52} h={40} fill={TONES.blue.tint} seed={126} sw={1.6} />
      <path d={polyPath([[-22, 16], [-8, -2], [4, 10], [12, 2], [22, 16]])} fill="url(#fill-green)" />
      <circle cx={14} cy={-9} r={5} fill={TONES.amber.mid} />
    </g>
  )
}

export function NetScene() {
  return (
    <Scene w={800} h={316} top={14} css={netCss} className="s-pc7" label="A paper character swings a net that has caught a red copied page, while a page in a false moustache, a page in Hindi and a small picture fly past untouched">
      <Floor y={320} x1={30} x2={770} seed={127} />

      <Place x={560} y={66}>
        <Anim className="s-pc7-fly-a">
          <Motion x={38} y={0} angle={0} count={3} length={20} gap={9} seed={128} c={INK_SOFT} />
          <Disguised />
        </Anim>
      </Place>
      <Place x={640} y={224}>
        <Anim className="s-pc7-fly-b">
          <Motion x={38} y={0} angle={0} count={3} length={20} gap={9} seed={129} c={INK_SOFT} />
          <Translated />
        </Anim>
      </Place>
      <Place x={520} y={276}>
        <Anim className="s-pc7-fly-c">
          <Motion x={42} y={0} angle={0} count={3} length={18} gap={8} seed={130} c={INK_SOFT} />
          <Picture />
        </Anim>
      </Place>

      <Shadow x={190} y={322} rx={46} ry={6} />
      <Place x={190} y={320} s={2}>
        <Pip mood="focused" arms="point" look={1.6} seed={131}>
          <Net />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Bringing it down honestly: the red passage becomes a quotation,
      the new report reads 6 percent, and tricks are crossed out.
   ------------------------------------------------------------------ */

const fixCss = `
.s-pc8-red { animation: s-pc8-red 10s ease-in-out infinite; }
.s-pc8-quote { animation: s-pc8-quote 10s ease-in-out infinite; }
.s-pc8-new { animation: s-pc8-new 10s ease-in-out infinite; }
.s-pc8 .pip-arm-r { animation: s-pc8-write 0.5s ease-in-out infinite alternate; }
@keyframes s-pc8-red {
  0%, 20% { opacity: 0.65; }
  32%, 94% { opacity: 0; }
  100% { opacity: 0.65; }
}
@keyframes s-pc8-quote {
  0%, 30% { opacity: 0; transform: scale(0.5); }
  38% { opacity: 1; transform: scale(1.15); }
  42%, 94% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.5); }
}
@keyframes s-pc8-new {
  0%, 46% { opacity: 0; transform: scale(0.6); }
  54% { opacity: 1; transform: scale(1.1); }
  58%, 94% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.6); }
}
@keyframes s-pc8-write { from { transform: rotate(-6deg); } to { transform: rotate(6deg); } }
`

export function FixScene() {
  const lines = [100, 120, 140, 160, 180, 200, 220, 240, 260]
  return (
    <Scene w={800} h={276} top={46} css={fixCss} className="s-pc8" label="A paper character with a pencil turns a red copied line into a proper quotation, a new report beside it shows 6 percent with a green tick, and a dice marked no tricks is crossed out">
      <Desk y={300} depth={24} seed={140} />

      <Box x={206} y={70} w={232} h={222} fill={PAPER} seed={141} />
      {lines.map((y, i) => {
        const len = 170 + ((i * 23) % 30)
        return <Ink key={y} d={handLine(228, y, 228 + len, y, 142 + i, 0.3)} c={INK_SOFT} w={1.6} />
      })}
      <rect x={224} y={152} width={186} height={16} rx={3} fill={TONES.red.mid} className="s-pc8-red" style={{ opacity: 0 }} />
      <g className="s-pc8-quote" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <Hand x={212} y={172} size={24} weight={700} c={TONES.green.deep}>
          “
        </Hand>
        <Hand x={404} y={172} size={24} weight={700} c={TONES.green.deep}>
          ”
        </Hand>
      </g>

      <Shadow x={132} y={302} rx={44} ry={6} />
      <Place x={132} y={300} s={2}>
        <Pip mood="focused" arms="write" look={1.6} seed={150}>
          <Pencil x={30} y={-6} length={34} angle={-80} tone="amber" seed={151} />
        </Pip>
      </Place>

      <Sheet x={478} y={92} w={150} h={200} lines={0} fold={22} seed={152} />
      <Hand x={553} y={134} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        new report
      </Hand>
      <g className="s-pc8-new" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <Type x={553} y={212} size={44} anchor="middle" weight={700} c={TONES.green.deep}>
          6%
        </Type>
        <Tick x={553} y={250} s={1.4} />
      </g>

      <Box x={664} y={168} w={54} h={54} r={7} fill={PAPER} seed={153} />
      {[
        [678, 182],
        [691, 195],
        [704, 208],
        [704, 182],
        [678, 208],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3.6} fill={INK} />
      ))}
      <Cross x={691} y={195} s={2.3} seed={154} />
      <Hand x={691} y={266} size={20} anchor="middle" weight={700} c={TONES.red.ink}>
        no tricks
      </Hand>
    </Scene>
  )
}
