import {
  Anim,
  Blob,
  Chai,
  Clock,
  Crate,
  Desk,
  Flag,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Moon,
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
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  Window,
  Worm,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  laptopScreen,
  wave,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Everyone reads the abstract; few open the full paper.
   ------------------------------------------------------------------ */

const readersCss = `
.s-ab1-reader .pip-body { animation: s-ab1-read 4s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-ab1-read {
  0%, 40%, 100% { transform: translateY(0); }
  20% { transform: translateY(-5px); }
}
.s-ab1-page { animation: s-ab1-flip 8s ease-in-out infinite; }
@keyframes s-ab1-flip {
  0%, 50% { transform: scaleX(1); opacity: 0; }
  52% { transform: scaleX(1); opacity: 1; }
  66% { transform: scaleX(-1); opacity: 1; }
  68% { transform: scaleX(-1); opacity: 0; }
  69%, 100% { transform: scaleX(1); opacity: 0; }
}
`

const READERS = [
  { x: 62, tone: 'amber', look: 1.6, mood: 'happy', d: '0s', seed: 150 },
  { x: 124, tone: 'blue', look: 1.6, mood: 'focused', d: '-1.4s', seed: 154 },
  { x: 184, tone: 'paper', look: 1.2, mood: 'happy', d: '-2.7s', seed: 158 },
  { x: 404, tone: 'pink', look: -1.6, mood: 'happy', d: '-0.8s', seed: 162 },
]

/* The right-hand page of the open book, drawn from the spine, so it can
   turn over onto the left. */
const PAGE = 'M0 0Q37.5 -7 75 -3L75 -78Q37.5 -85 0 -73Z'

export function ReadersScene() {
  return (
    <Scene w={800} h={236} top={72} css={readersCss} className="s-ab1" label="Four paper characters crowd around a card on an easel marked abstract, while further along a single reader in glasses turns the pages of the full paper on a table">
      <Floor y={300} x1={30} x2={770} seed={140} />

      <Ink d={handLine(236, 300, 292, 84, 141, 0.4) + handLine(356, 300, 300, 84, 142, 0.4)} w={3} c={TONES.brown.deep} />
      <Sheet x={208} y={94} w={176} h={116} tone="pink" lines={0} seed={143} />
      <Hand x={292} y={146} size={28} anchor="middle" weight={700}>
        abstract
      </Hand>
      <Ink d={handLine(228, 168, 364, 168, 144, 0.4) + handLine(228, 180, 340, 180, 145, 0.4) + handLine(228, 192, 352, 192, 146, 0.4)} c={TONES.pink.deep} w={1.5} o={0.5} />
      <path d="M196 210h192v9h-192Z" fill="url(#wood)" />
      <Ink d={handPoly([[196, 210], [388, 210], [388, 219], [196, 219]], { seed: 147, amp: 0.4, closed: true })} w={1.7} />

      {READERS.map((reader) => (
        <g key={reader.seed}>
          <Shadow x={reader.x} y={302} rx={30} ry={4} />
          <Place x={reader.x} y={300} s={1.25}>
            <g className="s-ab1-reader" style={{ '--d': reader.d }}>
              <Pip mood={reader.mood} tone={reader.tone} look={reader.look} seed={reader.seed} />
            </g>
          </Place>
        </g>
      ))}

      <Ink d={handLine(556, 264, 552, 300, 170, 0.3) + handLine(684, 264, 688, 300, 171, 0.3)} w={2.6} c={TONES.brown.deep} />
      <path d="M540 256h160v8h-160Z" fill="url(#wood)" />
      <Ink d={handPoly([[540, 256], [700, 256], [700, 264], [540, 264]], { seed: 172, amp: 0.4, closed: true })} w={1.7} />
      <OpenBook x={620} y={254} w={150} tone="blue" seed={173} />
      <Place x={620} y={254}>
        <Anim className="s-ab1-page" origin={[0, 0]} style={{ opacity: 0 }}>
          <path d={PAGE} fill={PAPER} />
          <Ink d={PAGE} w={1.5} />
          <Ink d={handLine(12, -60, 62, -62, 174, 0.3) + handLine(12, -48, 58, -50, 175, 0.3) + handLine(12, -36, 64, -38, 176, 0.3) + handLine(12, -24, 50, -26, 177, 0.3)} c={TEXT_LINE} w={1.4} />
        </Anim>
      </Place>
      <Hand x={620} y={152} size={24} anchor="middle" weight={700}>
        full paper
      </Hand>

      <Shadow x={742} y={302} rx={30} ry={4} />
      <Place x={742} y={300} s={1.3} flip>
        <Pip mood="focused" arms="think" glasses tone="green" look={1.4} seed={178} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Structured and unstructured: a tiffin and a bowl.
   ------------------------------------------------------------------ */

const TX = 220
const TW = 150
const TH = 40
const TBASE = 262
const TIERS = [
  { label: 'conclusions', tone: 'pink' },
  { label: 'results', tone: 'amber' },
  { label: 'methods', tone: 'green' },
  { label: 'background', tone: 'blue' },
]

/* The tiers lift apart so each compartment shows on its own, then close.
   The lid (index 4) rises furthest. */
const tiffinCss = `
${[1, 2, 3, 4]
  .map(
    (i) => `.s-ab2-tier-${i} { animation: s-ab2-tier-${i} 9s ease-in-out infinite; }
@keyframes s-ab2-tier-${i} {
  0%, 20%, 86%, 100% { transform: translateY(0); }
  36%, 70% { transform: translateY(${-i * 8}px); }
}`,
  )
  .join('\n')}
.s-ab2-spoon { animation: s-ab2-stir 3s ease-in-out infinite; }
@keyframes s-ab2-stir {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-9deg); }
  70% { transform: rotate(7deg); }
}
.s-ab2-steam { animation: s-ab2-steam 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * -1.2s); }
@keyframes s-ab2-steam {
  0%, 100% { opacity: 0; transform: translateY(6px); }
  45% { opacity: 0.8; }
  90% { opacity: 0; transform: translateY(-12px); }
}
`

function Tier({ i, label, tone }) {
  const top = TBASE - (i + 1) * TH
  const x1 = TX - TW / 2
  const x2 = TX + TW / 2
  const band = [[TX - 62, top + 8], [TX + 62, top + 8], [TX + 62, top + 32], [TX - 62, top + 32]]
  return (
    <g>
      <path d={`M${x1} ${top}h${TW}v${TH}h${-TW}Z`} fill="url(#fill-grey)" />
      <path d={`M${x2 - 16} ${top}h16v${TH}h-16Z`} fill="url(#ink-hatch-light)" />
      <Ink d={handPoly([[x1, top], [x2, top], [x2, top + TH], [x1, top + TH]], { seed: 200 + i * 4, amp: 0.4, closed: true })} w={1.8} />
      <Ink d={handLine(x1 - 4, top + 1, x2 + 4, top + 1, 201 + i * 4, 0.3)} w={2.6} />
      <path d={`M${TX - 62} ${top + 8}h124v24h-124Z`} fill={TONES[tone].tint} />
      <Ink d={handPoly(band, { seed: 202 + i * 4, amp: 0.3, closed: true })} w={1.2} c={TONES[tone].deep} />
      <Hand x={TX} y={top + 27} size={20} anchor="middle" weight={700}>
        {label}
      </Hand>
    </g>
  )
}

function Tag({ x, y, w, text, seed, r = 0 }) {
  return (
    <Place x={x} y={y} r={r}>
      <Ink d={handLine(0, -10, 0, 2, seed, 0.2)} w={1.2} c={INK_SOFT} />
      <path d={`M${-w / 2} 2h${w}v30h${-w}Z`} fill={PAPER} />
      <Ink d={handPoly([[-w / 2, 2], [w / 2, 2], [w / 2, 32], [-w / 2, 32]], { seed: seed + 1, amp: 0.4, closed: true })} w={1.5} />
      <Hand x={0} y={25} size={22} anchor="middle" weight={700}>
        {text}
      </Hand>
    </Place>
  )
}

const BX = 560
const BOWL = `M${BX - 92} 206A92 56 0 0 0 ${BX + 92} 206Z`
const BITS = [
  [500, 204, 'blue'],
  [526, 210, 'green'],
  [548, 200, 'pink'],
  [574, 209, 'amber'],
  [612, 203, 'blue'],
  [534, 199, 'amber'],
  [594, 212, 'green'],
  [620, 210, 'pink'],
]

export function TiffinScene() {
  const lid = `M${TX - TW / 2} 102Q${TX - TW / 2 + 8} 86 ${TX} 86Q${TX + TW / 2 - 8} 86 ${TX + TW / 2} 102Z`
  return (
    <Scene w={800} h={276} top={36} css={tiffinCss} className="s-ab2" label="A four-tier steel tiffin whose compartments are labelled background, methods, results and conclusions lifts apart tier by tier, beside one steaming bowl with everything mixed together; the tags read structured and unstructured">
      <Desk y={262} x1={60} x2={740} seed={210} />

      {TIERS.map((tier, i) =>
        i === 0 ? (
          <Tier key={tier.label} i={0} {...tier} />
        ) : (
          <Anim key={tier.label} className={`s-ab2-tier-${i}`}>
            <Tier i={i} {...tier} />
          </Anim>
        ),
      )}
      <Anim className="s-ab2-tier-4">
        <path d={lid} fill="url(#fill-grey)" />
        <Ink d={lid} w={1.8} />
        <path d={ellipsePath(TX, 82, 10, 5)} fill={TONES.grey.mid} />
        <Ink d={handEllipse(TX, 82, 10, 5, { seed: 220, amp: 0.3 })} w={1.5} />
      </Anim>

      {[530, 560, 590].map((x, i) => (
        <g key={x} className="s-ab2-steam" style={{ '--i': i }}>
          <Ink d={`M${x} 184q-6 -10 0 -20t0 -20`} c={INK_SOFT} w={1.4} o={0.7} />
        </g>
      ))}
      <Anim className="s-ab2-spoon" origin={[604, 206]}>
        <Ink d={handLine(604, 206, 658, 148, 221, 0.2)} w={7} c={INK} />
        <Ink d={handLine(604, 206, 658, 148, 221, 0.2)} w={4} c={TONES.grey.tint} />
      </Anim>
      <path d={BOWL} fill="url(#fill-grey)" />
      <Ink d={`M${BX - 92} 206A92 56 0 0 0 ${BX + 92} 206`} w={1.9} />
      <path d={ellipsePath(BX, 206, 92, 14)} fill={TONES.amber.tint} />
      {BITS.map(([x, y, tone], i) => (
        <path key={i} d={ellipsePath(x, y, 7, 3.4)} fill={TONES[tone].mid} />
      ))}
      <Ink d={handEllipse(BX, 206, 92, 14, { seed: 222, amp: 0.5 })} w={1.9} />
      <Ink d={handLine(606, 205, 614, 198, 223, 0.2)} w={4} c={TONES.grey.mid} />

      <Place x={400} y={262} s={1.3}>
        <Worm seed={230} />
      </Place>

      <Tag x={TX} y={272} w={132} text="structured" seed={240} r={-2} />
      <Tag x={BX} y={272} w={152} text="unstructured" seed={242} r={2} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The five moves as stepping stones, sized by their share of words.
   ------------------------------------------------------------------ */

const STONES = [
  { x: 132, rx: 26, label: 'context' },
  { x: 234, rx: 26, label: 'gap' },
  { x: 346, rx: 36, label: 'method' },
  { x: 474, rx: 48, label: 'results' },
  { x: 590, rx: 30, label: 'implication' },
]
const HOP_FROM = 48
const HOP_TO = 700
const SPOTS = [[0, 0], ...STONES.map((stone) => [stone.x - HOP_FROM, 3]), [HOP_TO - HOP_FROM, 0]]
const pct = (n) => Math.round(n * 10) / 10

/* Pip crosses one stone at a time, pausing on each, then fades on the far
   bank and starts again from the near one. */
const movesCss = `
.s-ab3-hop { animation: s-ab3-hop 12s ease-in-out infinite; }
@keyframes s-ab3-hop {
  0%, 5% { transform: translate(0px, 0px); opacity: 1; }
${SPOTS.slice(1)
  .map(([x, y], k) => {
    const [px, py] = SPOTS[k]
    const t = 5 + k * 13.5
    return `  ${pct(t + 3.5)}% { transform: translate(${(px + x) / 2}px, ${Math.min(py, y) - 38}px); opacity: 1; }
  ${pct(t + 7)}%, ${pct(t + 13.5)}% { transform: translate(${x}px, ${y}px); opacity: 1; }`
  })
  .join('\n')}
  90% { transform: translate(${HOP_TO - HOP_FROM}px, 0px); opacity: 0; }
  91% { transform: translate(0px, 0px); opacity: 0; }
  96%, 100% { transform: translate(0px, 0px); opacity: 1; }
}
.s-ab3-ripple { animation: s-ab3-flow 2.4s linear infinite; }
@keyframes s-ab3-flow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -42; }
}
`

export function MovesScene() {
  return (
    <Scene w={800} h={196} top={124} css={movesCss} className="s-ab3" label="A paper character hops across a river on five stepping stones labelled context, gap, method, results and implication; the results stone is the largest, as that part deserves the most words">
      <path d="M70 252H666L648 312H88Z" fill={TONES.blue.tint} />
      <path d="M70 252H666L648 312H88Z" fill="url(#hatch-blue)" opacity="0.18" />
      <Ink d={handLine(70, 253, 666, 253, 300, 0.6)} w={1.4} c={TONES.blue.ink} />
      <Ink className="s-ab3-ripple" d={handLine(104, 280, 640, 280, 301, 0.5)} dash="16 26" c={TONES.blue.ink} w={1.6} o={0.6} />

      <path d="M20 250H70L88 312H20Z" fill="url(#fill-green)" />
      <Ink d={handPoly([[20, 250], [70, 250], [88, 312]], { seed: 302, amp: 0.5 })} w={1.8} />
      <path d="M648 312L666 250H790V312Z" fill="url(#fill-green)" />
      <Ink d={handPoly([[648, 312], [666, 250], [790, 250]], { seed: 303, amp: 0.5 })} w={1.8} />
      <Flag x={754} y={250} h={66} tone="amber" seed={304} />

      {STONES.map((stone, i) => (
        <g key={stone.label}>
          <path d={ellipsePath(stone.x, 266, stone.rx + 2, 6)} fill="url(#ink-hatch-light)" />
          <path d={ellipsePath(stone.x, 261, stone.rx, 9)} fill={TONES.grey.mid} />
          <Ink d={handEllipse(stone.x, 261, stone.rx, 9, { seed: 310 + i, amp: 0.5 })} w={1.7} />
          <Ink d={`M${stone.x - stone.rx * 0.55} 257Q${stone.x - stone.rx * 0.2} 254 ${stone.x + stone.rx * 0.15} 255`} c={PAPER} w={1.6} o={0.8} />
          <Hand x={stone.x} y={304} size={20} anchor="middle" weight={700}>
            {stone.label}
          </Hand>
        </g>
      ))}

      <Place x={HOP_FROM} y={250}>
        <Anim className="s-ab3-hop">
          <Place s={1.15}>
            <Pip mood="happy" arms="up" tone="pink" look={1.5} seed={320} />
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The vague draft goes in the bin; the specific one is posted.
   ------------------------------------------------------------------ */

function Crumple({ x, y, r, seed, tone = 'paper' }) {
  const points = []
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2
    const k = i % 2 ? 1 : 0.84
    points.push([x + Math.cos(a) * r * k, y + Math.sin(a) * r * k])
  }
  return (
    <g>
      <Blob points={points} seed={seed} amp={0.6} fill={tone === 'paper' ? PAPER : TONES[tone].tint} />
      <Ink d={handLine(x - r * 0.5, y - r * 0.2, x + r * 0.1, y + r * 0.3, seed + 1, 0.3) + handLine(x + r * 0.1, y - r * 0.5, x + r * 0.3, y + r * 0.1, seed + 2, 0.3)} w={1.1} c={INK_SOFT} />
    </g>
  )
}

const strongCss = `
.s-ab4-weak { animation: s-ab4-weak 10s ease-in-out infinite; }
@keyframes s-ab4-weak {
  0%, 10% { transform: scale(1); opacity: 1; }
  15%, 89% { transform: scale(0.3); opacity: 0; }
  95%, 100% { transform: scale(1); opacity: 1; }
}
.s-ab4-ball { animation: s-ab4-ball 10s ease-in-out infinite; }
@keyframes s-ab4-ball {
  0%, 12% { transform: translate(0px, 0px) rotate(0deg); opacity: 0; }
  15% { transform: translate(0px, 0px) rotate(0deg); opacity: 1; }
  24% { transform: translate(-82px, -84px) rotate(-160deg); opacity: 1; }
  33%, 86% { transform: translate(-164px, 30px) rotate(-320deg); opacity: 1; }
  88% { transform: translate(-164px, 30px) rotate(-320deg); opacity: 0; }
  89%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0; }
}
.s-ab4-strong { animation: s-ab4-strong 10s ease-in-out infinite; }
@keyframes s-ab4-strong {
  0%, 38% { transform: translate(0px, 0px) scale(1); opacity: 1; }
  46% { transform: translate(20px, -70px) scale(0.86); opacity: 1; }
  56% { transform: translate(182px, -70px) scale(0.72); opacity: 1; }
  68% { transform: translate(182px, 64px) scale(0.72); opacity: 1; }
  70%, 90% { transform: translate(182px, 64px) scale(0.72); opacity: 0; }
  91% { transform: translate(0px, 0px) scale(1); opacity: 0; }
  97%, 100% { transform: translate(0px, 0px) scale(1); opacity: 1; }
}
.s-ab4-spark { animation: s-ab4-spark 10s ease-in-out infinite; }
@keyframes s-ab4-spark {
  0%, 66% { opacity: 0; transform: scale(0.4); }
  71% { opacity: 1; transform: scale(1.15); }
  78% { opacity: 1; transform: scale(1); }
  84%, 100% { opacity: 0; transform: scale(0.4); }
}
`

export function StrongScene() {
  const bin = [[64, 214], [176, 214], [158, 300], [82, 300]]
  let mesh = ''
  for (let k = 1; k < 7; k++) mesh += handLine(64 + (k * 112) / 7, 216, 82 + (k * 76) / 7, 298, 400 + k, 0.3)
  const box = 'M640 170Q640 134 698 132Q756 134 756 170V300H640Z'
  return (
    <Scene w={800} h={230} top={78} css={strongCss} className="s-ab4" label="A paper character holds out two drafts: the one marked vague crumples into a ball and flies into a wastepaper bin, while the one marked 85 percent, n equals 300, floats across and drops into a red postbox labelled conference">
      <defs>
        {/* Below the slot, the letter is inside the postbox. */}
        <clipPath id="s-ab4-slot">
          <path d="M0 0H652V400H0ZM652 0H800V188H652Z" />
        </clipPath>
      </defs>
      <Floor y={300} x1={30} x2={770} seed={401} />

      <Crumple x={102} y={210} r={13} seed={410} tone="red" />
      <Crumple x={140} y={206} r={12} seed={413} />
      <Anim className="s-ab4-ball" spin style={{ opacity: 0 }}>
        <Crumple x={284} y={202} r={14} seed={416} tone="red" />
      </Anim>
      <path d={`M64 214H176L158 300H82Z`} fill="url(#fill-grey)" />
      <Ink d={mesh} w={1.1} c={INK_SOFT} />
      <Ink d={handPoly(bin, { seed: 420, amp: 0.5, closed: true })} w={1.8} />
      <Ink d={handLine(58, 214, 182, 214, 421, 0.3)} w={3} />

      <Anim className="s-ab4-weak" spin>
        <Sheet x={234} y={150} w={100} h={104} tone="red" lines={0} seed={422} />
        <Hand x={280} y={194} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
          vague
        </Hand>
        <Ink d={wave(248, 318, 214, { amp: 2.5, length: 14, seed: 423 }) + wave(248, 312, 228, { amp: 2.5, length: 14, seed: 424 }) + wave(248, 304, 242, { amp: 2.5, length: 14, seed: 425 })} c={TONES.red.deep} w={1.4} o={0.55} />
      </Anim>

      <path d={box} fill="url(#fill-red)" />
      <path d="M738 150V300H756V170Q756 158 748 150Z" fill="url(#ink-hatch-light)" />
      <Ink d={box} w={2} />
      <Ink d={handLine(640, 170, 756, 170, 430, 0.3)} w={2.4} />
      <path d="M663 184h70v7h-70Z" fill={INK} />
      <path d="M646 226h104v30h-104Z" fill={PAPER} />
      <Ink d={handPoly([[646, 226], [750, 226], [750, 256], [646, 256]], { seed: 431, amp: 0.4, closed: true })} w={1.5} />
      <Hand x={698} y={246} size={18} anchor="middle" weight={700}>
        conference
      </Hand>

      <g clipPath="url(#s-ab4-slot)">
        <Anim className="s-ab4-strong" spin>
          <Sheet x={466} y={150} w={100} h={104} tone="green" lines={0} seed={432} />
          <Type x={512} y={196} size={28} anchor="middle" weight={700} c={TONES.green.deep}>
            85%
          </Type>
          <Type x={516} y={227} size={17} anchor="middle" weight={700}>
            n = 300
          </Type>
        </Anim>
      </g>

      <Anim className="s-ab4-spark" spin style={{ opacity: 0 }}>
        <Sparkle x={764} y={176} s={9} />
      </Anim>
      <Anim className="s-ab4-spark" spin style={{ opacity: 0, animationDelay: '0.3s' }}>
        <Sparkle x={632} y={166} s={7} fill={TONES.green.mid} />
      </Anim>

      <Shadow x={400} y={302} rx={40} ry={5} />
      <Place x={400} y={300} s={1.8}>
        <Pip mood="happy" arms="shrug" tone="pink" seed={440} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Snip out the filler; the rest closes up under the limit.
   ------------------------------------------------------------------ */

const PX = 1.2
const BAR_X = 70
const BAR_Y = 190
const BAR_H = 40
const LIMIT_X = BAR_X + 250 * PX
const SEGMENTS = [
  { words: 30, tone: 'blue' },
  { words: 50, filler: true },
  { words: 30, tone: 'red' },
  { words: 60, tone: 'green' },
  { words: 60, filler: true },
  { words: 90, tone: 'amber' },
  { words: 53, filler: true },
  { words: 37, tone: 'pink' },
]

let cursor = BAR_X
let removed = 0
let fillers = 0
const BAR = SEGMENTS.map((seg, i) => {
  const w = Math.round(seg.words * PX * 10) / 10
  const item = { ...seg, i, x: cursor, w, shift: -removed, k: seg.filler ? fillers : -1 }
  cursor += w
  if (seg.filler) {
    removed += w
    fillers += 1
  }
  return item
})
const CUTS = BAR.filter((seg) => seg.filler).map((seg) => seg.x + seg.w / 2)
const DROP = [
  [-10, -14],
  [8, 12],
  [-6, -10],
]

const segmentRule = (seg) => {
  const name = `s-ab5-seg-${seg.i}`
  if (seg.filler) {
    const t = 10 + seg.k * 14
    const [dx, rot] = DROP[seg.k]
    return `.${name} { animation: ${name} 12s ease-in infinite; }
@keyframes ${name} {
  0%, ${t}% { transform: translate(0px, 0px) rotate(0deg); opacity: 1; }
  ${t + 8}%, 89% { transform: translate(${dx}px, 64px) rotate(${rot}deg); opacity: 0; }
  90%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 1; }
}`
  }
  if (!seg.shift) return ''
  return `.${name} { animation: ${name} 12s ease-in-out infinite; }
@keyframes ${name} {
  0%, 48% { transform: translateX(0px); }
  60%, 89% { transform: translateX(${Math.round(seg.shift * 10) / 10}px); }
  90%, 100% { transform: translateX(0px); }
}`
}

const limitCss = `
.s-ab5-bar { animation: s-ab5-bar 12s ease-in-out infinite; }
@keyframes s-ab5-bar {
  0%, 86% { opacity: 1; }
  89%, 91% { opacity: 0; }
  96%, 100% { opacity: 1; }
}
${BAR.map(segmentRule).filter(Boolean).join('\n')}
.s-ab5-cut { animation: s-ab5-cut 12s ease-in-out infinite; }
@keyframes s-ab5-cut {
  0%, 4% { transform: translate(0px, 0px); }
  8% { transform: translate(0px, 12px); }
  11% { transform: translate(0px, 0px); }
  18% { transform: translate(${CUTS[1] - CUTS[0]}px, 0px); }
  22% { transform: translate(${CUTS[1] - CUTS[0]}px, 12px); }
  25% { transform: translate(${CUTS[1] - CUTS[0]}px, 0px); }
  32% { transform: translate(${Math.round(CUTS[2] - CUTS[0])}px, 0px); }
  36% { transform: translate(${Math.round(CUTS[2] - CUTS[0])}px, 12px); }
  39%, 70% { transform: translate(${Math.round(CUTS[2] - CUTS[0])}px, 0px); }
  84%, 100% { transform: translate(0px, 0px); }
}
.s-ab5-cut .blade-a { animation: s-ab5-snip-a 12s ease-in-out infinite; }
.s-ab5-cut .blade-b { animation: s-ab5-snip-b 12s ease-in-out infinite; }
@keyframes s-ab5-snip-a {
  0%, 5%, 11%, 19%, 25%, 33%, 39%, 100% { transform: rotate(0deg); }
  8%, 22%, 36% { transform: rotate(7deg); }
}
@keyframes s-ab5-snip-b {
  0%, 5%, 11%, 19%, 25%, 33%, 39%, 100% { transform: rotate(0deg); }
  8%, 22%, 36% { transform: rotate(-7deg); }
}
.s-ab5-before { animation: s-ab5-before 12s ease-in-out infinite; }
@keyframes s-ab5-before {
  0%, 57% { opacity: 1; }
  61%, 90% { opacity: 0; }
  95%, 100% { opacity: 1; }
}
.s-ab5-after { animation: s-ab5-after 12s ease-in-out infinite; }
@keyframes s-ab5-after {
  0%, 57% { opacity: 0; }
  61%, 86% { opacity: 1; }
  90%, 100% { opacity: 0; }
}
.s-ab5-pip .pip-body { animation: s-ab5-nod 12s ease-in-out infinite; }
@keyframes s-ab5-nod {
  0%, 60%, 100% { transform: translateY(0); }
  64% { transform: translateY(-7px); }
  68% { transform: translateY(0); }
}
`

function Segment({ seg }) {
  const { x, w, i } = seg
  const shape = [[x, BAR_Y], [x + w, BAR_Y], [x + w, BAR_Y + BAR_H], [x, BAR_Y + BAR_H]]
  return (
    <g>
      <path d={`M${x} ${BAR_Y}h${w}v${BAR_H}h${-w}Z`} fill={seg.filler ? TONES.grey.tint : `url(#fill-${seg.tone})`} />
      {seg.filler ? <path d={`M${x} ${BAR_Y}h${w}v${BAR_H}h${-w}Z`} fill="url(#ink-hatch-light)" /> : null}
      <Ink d={handPoly(shape, { seed: 500 + i * 3, amp: 0.4, closed: true })} w={1.6} />
      {seg.filler ? (
        <Hand x={x + w / 2} y={BAR_Y + 27} size={20} anchor="middle" weight={700} c={INK_SOFT}>
          filler
        </Hand>
      ) : (
        <Ink d={handLine(x + 6, BAR_Y + 14, x + w - 6, BAR_Y + 14, 501 + i * 3, 0.3) + handLine(x + 6, BAR_Y + 26, x + w - 12, BAR_Y + 26, 502 + i * 3, 0.3)} c={TONES[seg.tone].deep} w={1.4} o={0.5} />
      )}
    </g>
  )
}

export function LimitScene() {
  return (
    <Scene w={800} h={222} top={88} css={limitCss} className="s-ab5" label="A strip of coloured sentences runs past a dashed line marked 250 words; scissors snip out the three grey filler pieces, the rest slide together under the line, and the counter drops from 410 words to 247">
      <Ink d={handLine(LIMIT_X, 164, LIMIT_X, 262, 520, 0.3)} dash="7 7" c={TONES.red.ink} w={2.2} />
      <Hand x={LIMIT_X} y={286} size={22} anchor="middle" weight={700} c={TONES.red.deep}>
        250 words
      </Hand>

      <Anim className="s-ab5-bar">
        {BAR.map((seg) => (
          <Anim key={seg.i} className={seg.filler || seg.shift ? `s-ab5-seg-${seg.i}` : undefined} spin={seg.filler}>
            <Segment seg={seg} />
          </Anim>
        ))}
      </Anim>

      <Place x={CUTS[0]} y={134}>
        <g className="s-ab5-cut">
          <Scissors x={0} y={0} s={0.8} angle={90} seed={530} />
        </g>
      </Place>

      <Anim className="s-ab5-before">
        <Type x={560} y={128} size={24} weight={700}>
          410 words
        </Type>
      </Anim>
      <Anim className="s-ab5-after" style={{ opacity: 0 }}>
        <Type x={560} y={128} size={24} weight={700} c={TONES.green.deep}>
          247 words
        </Type>
        <Tick x={704} y={118} s={1.2} />
      </Anim>

      <Floor y={300} x1={30} x2={780} seed={540} />
      <Shadow x={720} y={302} rx={36} ry={4} />
      <Place x={720} y={300} s={1.6} flip>
        <g className="s-ab5-pip">
          <Pip mood="focused" arms="think" tone="pink" look={1.2} seed={542} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. A reviewer's red pencil circles the usual problems.
   ------------------------------------------------------------------ */

const RINGS = [
  { cx: 358, cy: 157, rx: 34, ry: 17, t: 10 },
  { cx: 202, cy: 213, rx: 30, ry: 17, t: 24 },
  { cx: 344, cy: 241, rx: 84, ry: 18, t: 38 },
]
const ANGLES = [-20, 70, 160, 250, 340]
const ringPoint = (ring, deg) => {
  const a = (deg * Math.PI) / 180
  return [ring.cx + Math.cos(a) * ring.rx, ring.cy + Math.sin(a) * ring.ry]
}
const REST = ringPoint(RINGS[2], 340)
const at = ([x, y]) => `translate(${Math.round(x - REST[0])}px, ${Math.round(y - REST[1])}px)`

const reviewerCss = `
.s-ab6-pencil { animation: s-ab6-pencil 12s ease-in-out infinite; }
@keyframes s-ab6-pencil {
  0%, 4% { transform: translate(0px, 0px); }
${RINGS.map((ring) => ANGLES.map((deg, j) => `  ${ring.t + j * 2}% { transform: ${at(ringPoint(ring, deg))}; }`).join('\n')).join('\n')}
  ${RINGS[2].t + 8}%, 100% { transform: translate(0px, 0px); }
}
${RINGS.map(
  (ring, k) => `.s-ab6-ring-${k} { animation: s-ab6-ring-${k} 12s linear infinite; }
@keyframes s-ab6-ring-${k} {
  0%, ${ring.t}% { stroke-dashoffset: 1; opacity: 1; }
  ${ring.t + 8}%, 88% { stroke-dashoffset: 0; opacity: 1; }
  93% { stroke-dashoffset: 0; opacity: 0; }
  94% { stroke-dashoffset: 1; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 1; }
}`,
).join('\n')}
`

export function ReviewerScene() {
  const sheet = [[166, 96], [454, 96], [454, 290], [166, 290]]
  return (
    <Scene w={800} h={248} top={60} css={reviewerCss} className="s-ab6" label="An abstract on a clipboard while a red pencil circles three problems in turn: a citation marker, an undefined abbreviation and the vague phrase good results; a reviewer in glasses watches beside a pile of abstracts marked to review">
      <Floor y={300} x1={30} x2={770} seed={600} />

      <path d="M150 76h320v224h-320Z" fill="url(#wood)" />
      <Ink d={handPoly([[150, 76], [470, 76], [470, 300], [150, 300]], { seed: 601, amp: 0.6, closed: true })} w={2} />
      <path d="M166 96h288v194h-288Z" fill={PAPER} />
      <Ink d={handPoly(sheet, { seed: 602, amp: 0.5, closed: true })} w={1.6} />
      <path d="M270 66h80v26h-80Z" fill={TONES.grey.mid} />
      <Ink d={handPoly([[270, 66], [350, 66], [350, 92], [270, 92]], { seed: 603, amp: 0.3, closed: true })} w={1.6} />

      <Hand x={310} y={130} size={24} anchor="middle" weight={700}>
        abstract
      </Hand>
      <Ink
        d={
          handLine(184, 156, 326, 156, 604, 0.4) +
          handLine(392, 156, 436, 156, 605, 0.4) +
          handLine(184, 184, 436, 184, 606, 0.4) +
          handLine(232, 212, 436, 212, 607, 0.4) +
          handLine(184, 240, 262, 240, 608, 0.4) +
          handLine(184, 268, 360, 268, 609, 0.4)
        }
        c={TEXT_LINE}
        w={2}
      />
      <Type x={334} y={163} size={20} weight={700}>
        [12]
      </Type>
      <Type x={184} y={219} size={20} weight={700}>
        PPG
      </Type>
      <Type x={272} y={247} size={20} weight={700}>
        good results
      </Type>

      {RINGS.map((ring, k) => (
        <Ink
          key={k}
          className={`s-ab6-ring-${k}`}
          d={handEllipse(ring.cx, ring.cy, ring.rx, ring.ry, { seed: 610 + k, amp: 0.7, overlap: 0.15 })}
          scale
          pathLength="1"
          dash="1"
          c={TONES.red.ink}
          w={2.4}
        />
      ))}

      <Place x={REST[0]} y={REST[1]}>
        <Anim className="s-ab6-pencil">
          <Pencil x={0} y={0} length={96} angle={-50} tone="red" seed={640} />
        </Anim>
      </Place>

      <Pile x={722} y={300} w={92} count={12} seed={620} />
      <Hand x={722} y={226} size={22} anchor="middle" weight={700}>
        to review
      </Hand>

      <Shadow x={596} y={302} rx={40} ry={5} />
      <Place x={596} y={300} s={1.9} flip>
        <Pip mood="focused" arms="think" glasses tone="blue" look={1.4} seed={630} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Reading it aloud at half past eleven, then submitting.
   ------------------------------------------------------------------ */

const aloudCss = `
.s-ab7-clock .clock-min { transform: rotate(143deg); }
.s-ab7-clock .clock-hour { transform: rotate(41deg); }
.s-ab7-wave { animation: s-ab7-wave 1.8s ease-in-out infinite; animation-delay: calc(var(--i) * -0.3s); }
@keyframes s-ab7-wave {
  0%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
}
.s-ab7-friend .pip-body { animation: s-ab7-nod 10s ease-in-out infinite; }
@keyframes s-ab7-nod {
  0%, 24%, 34%, 56%, 66%, 100% { transform: translateY(0); }
  28%, 60% { transform: translateY(3px); }
}
.s-ab7-sent { animation: s-ab7-sent 10s ease-in-out infinite; }
@keyframes s-ab7-sent {
  0%, 78% { opacity: 0; }
  82%, 94% { opacity: 1; }
  98%, 100% { opacity: 0; }
}
`

const MOUTH = [406, 235]
const arc = (r) => {
  const dx = Math.cos((35 * Math.PI) / 180) * r
  const dy = Math.sin((35 * Math.PI) / 180) * r
  const [x, y] = MOUTH
  return `M${Math.round(x - dx)} ${Math.round(y - dy)}A${r} ${r} 0 0 0 ${Math.round(x - dx)} ${Math.round(y + dy)}`
}

export function AloudScene() {
  const [ix, iy, iw, ih] = laptopScreen(670, 236, 170)
  const bx = ix + iw / 2
  const by = iy + ih / 2
  const button = (fill) => (
    <g>
      <path d={`M${bx - 42} ${by - 15}h84v30h-84Z`} fill={fill} />
      <Ink d={handPoly([[bx - 42, by - 15], [bx + 42, by - 15], [bx + 42, by + 15], [bx - 42, by + 15]], { seed: 700, amp: 0.3, closed: true })} w={1.5} />
      <Hand x={bx} y={by + 7} size={20} anchor="middle" weight={700}>
        submit
      </Hand>
    </g>
  )
  return (
    <Scene w={800} h={236} top={74} css={aloudCss} className="s-ab7" label="Late at night, with the clock at half past eleven, a paper character reads a page aloud to a friend who nods along with a glass of chai nearby; on the desk a laptop shows a submit button, which turns green with a tick">
      <Window x={236} y={86} w={120} h={90} night seed={701} />
      <Moon x={326} y={108} r={11} seed={702} />
      <g className="s-ab7-clock">
        <Clock x={510} y={112} r={28} seed={703} />
      </g>

      <Floor y={300} x1={24} x2={776} seed={704} />
      <Ink d={handLine(572, 246, 568, 300, 705, 0.3) + handLine(768, 246, 772, 300, 706, 0.3)} w={2.6} c={TONES.brown.deep} />
      <path d="M556 236h228v10h-228Z" fill="url(#wood)" />
      <Ink d={handPoly([[556, 236], [784, 236], [784, 246], [556, 246]], { seed: 707, amp: 0.4, closed: true })} w={1.7} />
      <Laptop x={670} y={236} w={170} seed={708}>
        {button(TONES.blue.tint)}
        <g className="s-ab7-sent" style={{ opacity: 0 }}>
          {button(TONES.green.mid)}
          <Tick x={bx + 48} y={by - 16} s={0.9} />
        </g>
      </Laptop>

      <Crate x={40} y={252} w={70} h={48} seed={710} />
      <Chai x={75} y={252} s={0.9} seed={711} />
      <Shadow x={180} y={302} rx={34} ry={4} />
      <Place x={180} y={300} s={1.7}>
        <g className="s-ab7-friend">
          <Pip mood="happy" arms="think" tone="blue" look={1.5} seed={712} />
        </g>
      </Place>

      {[58, 72, 86].map((r, i) => (
        <g key={r} className="s-ab7-wave" style={{ '--i': i }}>
          <Ink d={arc(r)} w={2} c={TONES.pink.ink} />
        </g>
      ))}
      <Shadow x={404} y={302} rx={40} ry={5} />
      <Place x={404} y={300} s={1.9} flip>
        <Pip mood="happy" arms="hold" tone="pink" seed={720}>
          <Sheet x={-17} y={-31} w={34} h={28} lines={3} fold={6} seed={721} sw={1.3} />
        </Pip>
      </Place>
    </Scene>
  )
}
