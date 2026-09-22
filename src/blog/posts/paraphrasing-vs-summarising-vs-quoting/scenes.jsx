import {
  Anim,
  Arrow,
  Book,
  Bulb,
  Chai,
  Cross,
  Desk,
  Floor,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  OpenBook,
  PAPER,
  Pile,
  Pip,
  Place,
  PushPin,
  Scene,
  Sheet,
  Shelf,
  Speech,
  Sticky,
  Sun,
  TONES,
  Thought,
  Tick,
  Type,
  Window,
  Worm,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'
import { QuoteMarks } from './hero.jsx'

/* ------------------------------------------------------------------
   1. Three tools: one long letter, passed on three ways.
   ------------------------------------------------------------------ */

const letterCss = `
.s-ps1-a { animation: s-ps1-a 9s ease-in-out infinite; }
.s-ps1-b { animation: s-ps1-b 9s ease-in-out infinite; }
.s-ps1-c { animation: s-ps1-c 9s ease-in-out infinite; }
@keyframes s-ps1-a {
  0%, 6% { transform: scale(1); opacity: 1; }
  10%, 16% { transform: scale(0.2); opacity: 0; }
  22% { transform: scale(1.1); opacity: 1; }
  26%, 100% { transform: scale(1); opacity: 1; }
}
@keyframes s-ps1-b {
  0%, 6% { transform: scale(1); opacity: 1; }
  10%, 36% { transform: scale(0.2); opacity: 0; }
  42% { transform: scale(1.1); opacity: 1; }
  46%, 100% { transform: scale(1); opacity: 1; }
}
@keyframes s-ps1-c {
  0%, 6% { transform: scale(1); opacity: 1; }
  10%, 56% { transform: scale(0.2); opacity: 0; }
  62% { transform: scale(1.1); opacity: 1; }
  66%, 100% { transform: scale(1); opacity: 1; }
}
`

export function LetterScene() {
  return (
    <Scene w={800} h={318} top={30} css={letterCss} className="s-ps1" label="A long letter pinned on the left, and three paper characters passing it on: one repeats a line in quotation marks, one retells a part in its own words, one sums it up in a single short line">
      <g transform="rotate(-3 92 118)">
        <Sheet x={40} y={48} w={104} h={150} lines={9} seed={101} />
      </g>
      <PushPin x={90} y={54} tone="red" seed={102} />
      <Hand x={92} y={236} size={22} anchor="middle" c={INK_SOFT}>
        the letter
      </Hand>

      <Floor y={306} x1={200} x2={760} seed={103} />

      <Place x={300} y={306} s={1.8} flip>
        <Pip mood="happy" arms="point" look={1} seed={104} />
      </Place>
      <Place x={480} y={306} s={1.8}>
        <Pip mood="focused" arms="think" tone="green" look={-0.5} seed={105} />
      </Place>
      <Place x={660} y={306} s={1.8}>
        <Pip mood="proud" arms="down" tone="pink" seed={106} />
      </Place>

      <Anim className="s-ps1-a" origin={[300, 170]}>
        <Speech x={232} y={76} w={138} h={60} tx={300} ty={170} seed={107}>
          <Place x={254} y={100} s={0.62}>
            <g transform="rotate(180)">
              <QuoteMarks r={9} />
            </g>
          </Place>
          <Ink d={handLine(272, 106, 330, 106, 108, 0.4)} w={2.2} />
          <Place x={352} y={98} s={0.62}>
            <QuoteMarks r={9} />
          </Place>
        </Speech>
      </Anim>

      <Anim className="s-ps1-b" origin={[478, 164]}>
        <Speech x={404} y={52} w={156} h={84} tx={478} ty={164} seed={109}>
          <Ink d={handLine(424, 76, 540, 76, 110, 0.9) + handLine(424, 94, 520, 94, 111, 0.9) + handLine(424, 112, 534, 112, 112, 0.9)} c={TONES.green.deep} w={2.2} />
        </Speech>
      </Anim>

      <Anim className="s-ps1-c" origin={[656, 176]}>
        <Speech x={620} y={100} w={82} h={44} tx={656} ty={176} seed={113}>
          <Ink d={handLine(638, 122, 684, 122, 114, 0.5)} c={TONES.pink.deep} w={2.6} />
        </Speech>
      </Anim>

      <Hand x={300} y={340} size={22} anchor="middle" weight={700}>
        quote
      </Hand>
      <Hand x={480} y={340} size={22} anchor="middle" weight={700}>
        paraphrase
      </Hand>
      <Hand x={660} y={340} size={22} anchor="middle" weight={700}>
        summary
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Quoting: tweezers lift the exact phrase into quotation marks.
   ------------------------------------------------------------------ */

const quoteCss = `
.s-ps2-lift { animation: s-ps2-lift 10s ease-in-out infinite; }
.s-ps2-landed { animation: s-ps2-landed 10s ease-in-out infinite; }
@keyframes s-ps2-lift {
  0%, 8% { transform: translate(0px, 0px); opacity: 1; }
  22% { transform: translate(100px, -78px); }
  32% { transform: translate(230px, -96px); }
  42% { transform: translate(380px, -32px); opacity: 1; }
  46% { transform: translate(380px, -44px); opacity: 0; }
  70% { transform: translate(0px, 0px); opacity: 0; }
  80%, 100% { transform: translate(0px, 0px); opacity: 1; }
}
@keyframes s-ps2-landed {
  0%, 42% { opacity: 0; }
  46%, 90% { opacity: 1; }
  96%, 100% { opacity: 0; }
}
`

function Tweezers() {
  return (
    <g>
      <path d="M-4 -2L6 -64L12 -64L2 -2Z" fill={TONES.grey.mid} />
      <path d="M4 -2L20 -62L26 -60L8 -1Z" fill={TONES.grey.mid} />
      <Ink d="M-4 -2L6 -64L12 -64L2 -2ZM4 -2L20 -62L26 -60L8 -1Z" w={1.4} />
      <Ink d="M9 -64Q16 -72 23 -61" w={1.8} />
    </g>
  )
}

function Phrase() {
  return (
    <g>
      <path d="M-26 -7h52v14h-52Z" fill={TONES.amber.tint} />
      <Ink d={handPoly([[-26, -7], [26, -7], [26, 7], [-26, 7]], { seed: 121, amp: 0.3, closed: true })} w={1.3} />
      <Ink d={handLine(-18, 0, 18, 0, 122, 0.3)} w={2} />
    </g>
  )
}

export function QuoteScene() {
  return (
    <Scene w={800} h={296} top={46} css={quoteCss} className="s-ps2" label="Tweezers lift one highlighted phrase out of an open book and set it between quotation marks on a page, which carries a small tag with the page number">
      <Desk y={300} depth={26} seed={120} />
      <OpenBook x={200} y={300} w={214} tone="blue" lines={6} seed={123} />
      <path d="M214 229h70v10h-70Z" fill={TONES.amber.mid} opacity="0.55" />

      <Ink d={handLine(566, 300, 594, 132, 124, 0.4) + handLine(694, 300, 666, 132, 125, 0.4) + handLine(630, 300, 630, 150, 126, 0.4)} w={2.4} c={TONES.brown.deep} />
      <g transform="rotate(2 630 206)">
        <Sheet x={580} y={140} w={100} h={132} lines={0} seed={127} />
        <Ink d={handLine(596, 174, 664, 174, 128, 0.4) + handLine(596, 232, 660, 232, 129, 0.4) + handLine(596, 250, 640, 250, 130, 0.4)} c={INK_SOFT} w={1.6} o={0.6} />
        <Place x={592} y={206} s={0.55}>
          <g transform="rotate(180)">
            <QuoteMarks r={9} />
          </g>
        </Place>
        <Place x={667} y={196} s={0.55}>
          <QuoteMarks r={9} />
        </Place>
        <Place x={630} y={203}>
          <Anim className="s-ps2-landed" style={{ opacity: 0 }}>
            <Phrase />
          </Anim>
        </Place>
      </g>
      <Type x={666} y={264} size={15} anchor="end" weight={700} c={TONES.red.deep}>
        p. 12
      </Type>

      {/* The still picture shows the tweezers at the book, taking the phrase. */}
      <Place x={250} y={234}>
        <Anim className="s-ps2-lift">
          <Phrase />
          <Place x={-6} y={-6}>
            <Tweezers />
          </Place>
        </Anim>
      </Place>

      <Place x={730} y={300} s={1.6} flip>
        <Pip mood="happy" arms="point" look={1.5} seed={132} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Paraphrasing: read, turn the page over, write it your way.
   ------------------------------------------------------------------ */

const rewriteCss = `
.s-ps3-front { animation: s-ps3-front 10s ease-in-out infinite; }
.s-ps3-back { animation: s-ps3-back 10s ease-in-out infinite; }
.s-ps3-idea { animation: s-ps3-idea 10s ease-in-out infinite; }
.s-ps3-line { animation: s-ps3-write 10s ease-in-out infinite; }
.s-ps3-line-2 { animation-name: s-ps3-write-2; }
.s-ps3-line-3 { animation-name: s-ps3-write-3; }
.s-ps3-line-4 { animation-name: s-ps3-write-4; }
@keyframes s-ps3-front {
  0%, 14% { transform: scaleX(1); opacity: 1; }
  20% { transform: scaleX(0); opacity: 1; }
  21%, 84% { transform: scaleX(0); opacity: 0; }
  85% { transform: scaleX(0); opacity: 1; }
  91%, 100% { transform: scaleX(1); opacity: 1; }
}
@keyframes s-ps3-back {
  0%, 20% { transform: scaleX(0); opacity: 0; }
  21% { transform: scaleX(0); opacity: 1; }
  27%, 78% { transform: scaleX(1); opacity: 1; }
  84% { transform: scaleX(0); opacity: 1; }
  85%, 100% { transform: scaleX(0); opacity: 0; }
}
@keyframes s-ps3-idea {
  0%, 28% { transform: scale(0.3); opacity: 0; }
  34% { transform: scale(1.1); opacity: 1; }
  38%, 80% { transform: scale(1); opacity: 1; }
  86%, 100% { transform: scale(0.3); opacity: 0; }
}
@keyframes s-ps3-write { 0%, 40% { stroke-dashoffset: 1; } 48%, 90% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
@keyframes s-ps3-write-2 { 0%, 48% { stroke-dashoffset: 1; } 56%, 90% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
@keyframes s-ps3-write-3 { 0%, 56% { stroke-dashoffset: 1; } 64%, 90% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
@keyframes s-ps3-write-4 { 0%, 64% { stroke-dashoffset: 1; } 72%, 90% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
`

function Easel({ x, y, seed }) {
  return <Ink d={handLine(x - 34, y, x - 22, y - 150, seed, 0.3) + handLine(x + 34, y, x + 22, y - 150, seed + 1, 0.3)} w={2.4} c={TONES.brown.deep} />
}

function Step({ x, y, n, word }) {
  return (
    <g>
      <circle cx={x - 34} cy={y - 8} r={13} fill={TONES.amber.tint} stroke={INK} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      <Hand x={x - 34} y={y} size={20} anchor="middle" weight={700}>
        {n}
      </Hand>
      <Hand x={x - 14} y={y} size={23} weight={700}>
        {word}
      </Hand>
    </g>
  )
}

export function RewriteScene() {
  const lines = [
    [612, 176, 690],
    [612, 196, 682],
    [612, 216, 694],
    [612, 236, 668],
  ]
  return (
    <Scene w={800} h={318} top={40} css={rewriteCss} className="s-ps3" label="A blue page on a stand is read and then turned face down; a paper character thinks, a light bulb appears, and new lines are written in green on a fresh page">
      <Desk y={300} depth={24} seed={140} />

      <Easel x={140} y={300} seed={141} />
      <Place x={140} y={196}>
        <Anim className="s-ps3-front" spin>
          <Sheet x={-50} y={-66} w={100} h={130} lines={8} tone="blue" seed={142} />
        </Anim>
        <Anim className="s-ps3-back" spin style={{ opacity: 0 }}>
          <path d="M-50 -66h100v130h-100Z" fill={PAPER} />
          <path d="M-50 -66h100v130h-100Z" fill="url(#ink-hatch-light)" opacity="0.5" />
          <Ink d={handPoly([[-50, -66], [50, -66], [50, 64], [-50, 64]], { seed: 143, amp: 0.5, closed: true })} w={1.8} />
        </Anim>
      </Place>

      <Place x={380} y={300} s={2}>
        <Pip mood="focused" arms="think" look={1} seed={144} />
      </Place>
      <Thought x={380} y={96} w={96} h={64} tx={392} ty={150} seed={145}>
        <Anim className="s-ps3-idea" spin>
          <Bulb x={380} y={92} s={0.62} seed={146} />
        </Anim>
      </Thought>

      <Easel x={650} y={300} seed={147} />
      <g transform="rotate(2 650 206)">
        <Sheet x={600} y={140} w={100} h={130} lines={0} tone="green" seed={148} />
        {lines.map(([x1, y, x2], i) => (
          <Ink
            key={y}
            d={handLine(x1, y, x2, y, 150 + i, 0.5)}
            c={TONES.green.deep}
            w={2.6}
            scale
            pathLength="1"
            dash="1"
            className={`s-ps3-line${i ? ` s-ps3-line-${i + 1}` : ''}`}
          />
        ))}
      </g>

      <Step x={176} y={350} n="1" word="read" />
      <Step x={414} y={350} n="2" word="close" />
      <Step x={680} y={350} n="3" word="write" />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Summarising: the bookworm crosses from a whole pile to one note.
   ------------------------------------------------------------------ */

const summaryCss = `
.s-ps4-crawl { animation: s-ps4-crawl 10s ease-in-out infinite; }
.s-ps4-note { animation: s-ps4-note 10s ease-in-out infinite; }
@keyframes s-ps4-crawl {
  0%, 6% { transform: translateX(-98px); opacity: 0; }
  12% { transform: translateX(-98px); opacity: 1; }
  70% { transform: translateX(104px); opacity: 1; }
  76%, 100% { transform: translateX(104px); opacity: 0; }
}
@keyframes s-ps4-note {
  0%, 70% { transform: scale(1) rotate(0deg); }
  75% { transform: scale(1.14) rotate(-3deg); }
  80%, 100% { transform: scale(1) rotate(0deg); }
}
`

function Ruler({ x1, x2, y }) {
  let ticks = ''
  for (let x = x1 + 12; x < x2 - 6; x += 12) {
    ticks += handLine(x, y, x, y + ((x - x1) % 48 === 12 ? 7 : 4), x, 0.1)
  }
  return (
    <g>
      <path d={`M${x1} ${y}h${x2 - x1}v12h${-(x2 - x1)}Z`} fill={TONES.amber.tint} />
      <Ink d={handPoly([[x1, y], [x2, y], [x2, y + 12], [x1, y + 12]], { seed: 161, amp: 0.4, closed: true })} w={1.6} />
      <Ink d={ticks} w={1} c={INK_SOFT} />
    </g>
  )
}

export function SummaryScene() {
  return (
    <Scene w={800} h={246} top={110} css={summaryCss} className="s-ps4" label="A bookworm crawls along a ruler from the top of a tall pile of papers to a single small note that holds just one line">
      <Floor y={320} x1={40} x2={760} seed={160} />
      <Pile x={196} y={320} w={150} count={18} seed={162} />
      <Hand x={196} y={348} size={22} anchor="middle" c={INK_SOFT}>
        the whole paper
      </Hand>

      <path d="M534 320h124v-30h-124Z" fill="url(#fill-blue)" />
      <path d="M546 290h100v-26h-100Z" fill="url(#fill-red)" />
      <Ink d={handPoly([[534, 320], [658, 320], [658, 290], [534, 290]], { seed: 163, amp: 0.4, closed: true }) + handPoly([[546, 290], [646, 290], [646, 264], [546, 264]], { seed: 164, amp: 0.4, closed: true })} w={1.6} />
      <Place x={600} y={228}>
        <Anim className="s-ps4-note" origin={[0, 36]}>
          <Sticky x={-38} y={0} w={76} h={36} tone="pink" lines={0} seed={165} />
          <Ink d={handLine(-26, 20, 22, 20, 166, 0.4)} c={TONES.pink.deep} w={2.8} />
        </Anim>
      </Place>
      <Hand x={600} y={348} size={22} anchor="middle" c={INK_SOFT}>
        one line
      </Hand>

      <Ruler x1={262} x2={558} y={228} />
      <Ink d={handLine(540, 240, 550, 264, 168, 0.4)} w={2.2} c={TONES.brown.deep} />

      <Place x={410} y={228} s={1.2}>
        <Anim className="s-ps4-crawl">
          <Worm seed={169} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. One sample passage, four results.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-ps5-flow { animation: s-ps5-flow 1.8s linear infinite; }
.s-ps5-mark { animation: s-ps5-mark 10s ease-in-out infinite; }
.s-ps5-mark-2 { animation-delay: 1.2s; }
.s-ps5-mark-3 { animation-delay: 2.4s; }
.s-ps5-mark-4 { animation-delay: 3.6s; }
@keyframes s-ps5-flow { to { stroke-dashoffset: -26; } }
@keyframes s-ps5-mark {
  0%, 20% { transform: scale(1); }
  26% { transform: scale(1.35); }
  32%, 100% { transform: scale(1); }
}
`

function Label({ x, y, children }) {
  return (
    <Hand x={x} y={y} size={22} weight={700} c={INK_SOFT}>
      {children}
    </Hand>
  )
}

function Mark({ y, bad, delay }) {
  return (
    <Place x={716} y={y}>
      <Anim className={`s-ps5-mark${delay ? ` s-ps5-mark-${delay}` : ''}`} spin>
        {bad ? <Cross x={0} y={0} s={1.2} seed={180} /> : <Tick x={0} y={0} s={1.3} />}
      </Anim>
    </Place>
  )
}

export function ExampleScene() {
  const from = [186, 190]
  return (
    <Scene w={800} h={326} top={34} css={exampleCss} className="s-ps5" label="One sample page on the left with dashed arrows to four results in a column: a line in quotation marks with a tick, a patched strip with a red cross, a fresh green page with a tick and a small pink note with a tick">
      <g transform="rotate(-3 124 190)">
        <Sheet x={70} y={120} w={108} h={140} lines={8} tone="blue" seed={170} />
      </g>
      <PushPin x={124} y={126} tone="amber" seed={171} />
      <Hand x={124} y={300} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        the sample
      </Hand>

      <g className="s-ps5-flow">
        <Arrow from={from} to={[346, 80]} bend={-0.1} seed={172} c={INK_SOFT} dash="6 7" />
        <Arrow from={from} to={[346, 156]} bend={-0.05} seed={173} c={INK_SOFT} dash="6 7" />
        <Arrow from={from} to={[346, 236]} bend={0.05} seed={174} c={INK_SOFT} dash="6 7" />
        <Arrow from={from} to={[346, 310]} bend={0.1} seed={175} c={INK_SOFT} dash="6 7" />
      </g>

      <path d="M360 54h124v52h-124Z" fill={PAPER} />
      <Ink d={handPoly([[360, 54], [484, 54], [484, 106], [360, 106]], { seed: 176, amp: 0.4, closed: true })} w={1.6} />
      <Place x={380} y={84} s={0.62}>
        <g transform="rotate(180)">
          <QuoteMarks r={9} />
        </g>
      </Place>
      <Ink d={handLine(396, 82, 444, 82, 177, 0.3)} w={2.2} />
      <Place x={464} y={74} s={0.62}>
        <QuoteMarks r={9} />
      </Place>
      <Label x={512} y={88}>
        quote
      </Label>
      <Mark y={78} />

      <path d="M360 134h124v17h-124Z" fill="url(#fill-blue)" />
      <path d="M360 151h124v16h-124Z" fill="url(#fill-pink)" />
      <path d="M360 167h124v17h-124Z" fill="url(#fill-blue)" />
      <Ink d={handPoly([[360, 134], [484, 134], [484, 184], [360, 184]], { seed: 178, amp: 0.4, closed: true }) + handLine(360, 151, 484, 151, 179, 0.5) + handLine(360, 167, 484, 167, 181, 0.5)} w={1.5} />
      <Label x={512} y={166}>
        patchwork
      </Label>
      <Mark y={158} bad delay={2} />

      <Sheet x={384} y={210} w={78} h={56} lines={3} fold={10} tone="green" seed={182} />
      <Label x={512} y={246}>
        paraphrase
      </Label>
      <Mark y={238} delay={3} />

      <Sticky x={392} y={290} w={62} h={40} tone="pink" lines={0} seed={183} />
      <Ink d={handLine(402, 312, 440, 312, 184, 0.4)} c={TONES.pink.deep} w={2.6} />
      <Label x={512} y={320}>
        summary
      </Label>
      <Mark y={312} delay={4} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Signal phrases: a signpost at the fork of the path.
   ------------------------------------------------------------------ */

const signCss = `
.s-ps6-board { animation: s-ps6-sway 4s ease-in-out infinite; }
.s-ps6-board-2 { animation-delay: -1.3s; }
.s-ps6-board-3 { animation-delay: -2.6s; }
.s-ps6-walker { animation: s-ps6-walk 11s ease-in-out infinite; }
.s-ps6 .s-ps6-walker .pip-leg-l { animation: s-ps6-step 0.5s ease-in-out infinite alternate; }
.s-ps6 .s-ps6-walker .pip-leg-r { animation: s-ps6-step 0.5s ease-in-out infinite alternate-reverse; }
@keyframes s-ps6-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-2.5deg); }
}
@keyframes s-ps6-walk {
  0%, 6% { transform: translateX(0); opacity: 0; }
  12% { opacity: 1; }
  80% { transform: translateX(196px); opacity: 1; }
  88%, 100% { transform: translateX(196px); opacity: 0; }
}
@keyframes s-ps6-step {
  from { transform: rotate(-16deg); }
  to { transform: rotate(16deg); }
}
`

function Board({ points, text, tx, ty, seed, tone, className, pivot }) {
  return (
    <Anim className={className} origin={pivot}>
      <path d={polyPath(points)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(points, { seed, amp: 0.4, closed: true })} w={1.8} />
      <Hand x={tx} y={ty} size={22} anchor="middle" weight={700}>
        {text}
      </Hand>
    </Anim>
  )
}

export function SignpostScene() {
  return (
    <Scene w={800} h={320} top={50} css={signCss} className="s-ps6" label="A wooden signpost with three arrow boards reading according to, argues and found, pointing to books and a shelf, while a small paper character follows the sign towards the books">
      <Ground y={318} bottom={370} seed={190} tufts={9} pebbles={4} grit={22} />

      <Book x={40} y={246} w={52} h={72} tone="green" seed={191} />
      <Book x={96} y={256} w={46} h={62} tone="blue" seed={192} />
      <Shelf x={604} y={160} w={170} rows={1} rowH={84} seed={193} />
      <Ink d={handLine(612, 252, 612, 318, 194, 0.3) + handLine(766, 252, 766, 318, 195, 0.3)} w={2.4} c={TONES.brown.deep} />

      <rect x={393} y={84} width={14} height={236} fill="url(#wood)" />
      <Ink d={handPoly([[393, 84], [407, 84], [407, 320], [393, 320]], { seed: 196, amp: 0.4, closed: true })} w={1.8} />

      <Board className="s-ps6-board" pivot={[400, 112]} points={[[236, 112], [258, 94], [398, 94], [398, 130], [258, 130]]} text="according to" tx={326} ty={120} seed={197} tone="amber" />
      <Board className="s-ps6-board s-ps6-board-2" pivot={[400, 158]} points={[[402, 140], [522, 140], [544, 158], [522, 176], [402, 176]]} text="argues" tx={466} ty={166} seed={198} tone="pink" />
      <Board className="s-ps6-board s-ps6-board-3" pivot={[400, 204]} points={[[262, 204], [282, 186], [398, 186], [398, 222], [282, 222]]} text="found" tx={338} ty={212} seed={199} tone="green" />

      <Place x={502} y={318} s={1.75}>
        <Pip mood="happy" arms="think" look={-1.6} glasses seed={200} />
      </Place>

      <Place x={352} y={318} s={1.1} flip>
        <Anim className="s-ps6-walker">
          <Pip mood="happy" arms="down" tone="amber" look={1.6} seed={201} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The practice routine: one tick a morning, all week.
   ------------------------------------------------------------------ */

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const practiceCss = `
${DAYS.map((_, i) => {
  const start = 8 + i * 9
  return `.s-ps7-tick-${i} { animation: s-ps7-tick-${i} 12s ease-in-out infinite; }
@keyframes s-ps7-tick-${i} {
  0%, ${start}% { stroke-dashoffset: 1; }
  ${start + 4}%, 90% { stroke-dashoffset: 0; }
  96%, 100% { stroke-dashoffset: 1; }
}`
}).join('\n')}
.s-ps7 .pip-arm-r { animation: s-ps7-write 0.5s ease-in-out infinite alternate; }
.s-ps7-writer .pip-body { animation: s-ps7-hop 12s ease-in-out infinite; }
@keyframes s-ps7-write {
  from { transform: rotate(-5deg); }
  to { transform: rotate(6deg); }
}
@keyframes s-ps7-hop {
  0%, 74%, 100% { transform: translateY(0); }
  78% { transform: translateY(-9px); }
  82% { transform: translateY(0); }
  85% { transform: translateY(-4px); }
  88% { transform: translateY(0); }
}
`

export function PracticeScene() {
  return (
    <Scene w={800} h={306} top={32} css={practiceCss} className="s-ps7" label="A morning scene: a sunny window, a week chart on the wall that fills with a tick for every day, and a paper character writing in an open notebook beside a glass of tea">
      <Window x={60} y={40} w={140} h={110} seed={211} />
      <Sun x={96} y={68} r={14} seed={210} />

      {DAYS.map((day, i) => {
        const x = 272 + i * 64
        return (
          <g key={i}>
            <path d={`M${x} 64h52v52h-52Z`} fill={PAPER} />
            <Ink d={handPoly([[x, 64], [x + 52, 64], [x + 52, 116], [x, 116]], { seed: 212 + i, amp: 0.4, closed: true })} w={1.6} />
            <Type x={x + 26} y={56} size={16} anchor="middle" weight={700} c={INK_SOFT}>
              {day}
            </Type>
            <path
              className={`s-ps7-tick-${i}`}
              d={`M${x + 12} 92q6 4 10 13q9 -20 22 -30`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke={TONES.green.ink}
              strokeWidth={3.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )
      })}

      <Desk y={300} depth={26} seed={220} />
      <OpenBook x={470} y={300} w={132} tone="green" lines={4} seed={222} />
      <Place x={360} y={300} s={2}>
        <g className="s-ps7-writer">
          <Pip mood="focused" arms="write" look={1.5} seed={221} />
        </g>
      </Place>
      <Chai x={650} y={300} s={1.25} seed={223} />
      <Hand x={540} y={178} size={23} c={INK_SOFT} rotate={-3}>
        one abstract a day
      </Hand>
    </Scene>
  )
}
