import {
  Anim,
  Box,
  Calendar,
  Chai,
  Cloud,
  Crate,
  Desk,
  Floor,
  Funnel,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  PushPin,
  Scene,
  Scissors,
  Sheet,
  Sun,
  TONES,
  Tree,
  Dots,
  ellipsePath,
  handCurve,
  handLine,
  handPoly,
  polyPath,
  wave,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Where papers live: one signpost, many directions.
   ------------------------------------------------------------------ */

const signCss = `
.s-sd1-board { animation: s-sd1-sway 5s ease-in-out infinite; }
.s-sd1-q { animation: s-sd1-bob 3s ease-in-out infinite; }
.s-sd1 .pip-body { animation: s-sd1-look 8s ease-in-out infinite; }
.s-sd1-cloud { animation: s-sd1-drift 16s ease-in-out infinite; }
@keyframes s-sd1-sway {
  0%, 100% { transform: rotate(0deg); }
  35% { transform: rotate(2.5deg); }
  70% { transform: rotate(-2deg); }
}
@keyframes s-sd1-bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(8deg); }
}
@keyframes s-sd1-look {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-4deg); }
  55% { transform: rotate(4deg); }
}
@keyframes s-sd1-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(24px); }
}
`

const POLE = 400

function Board({ y, dir, label, tone, seed, delay }) {
  const s = dir === 'right' ? 1 : -1
  const pts = [
    [POLE + 6 * s, y - 17],
    [POLE + 156 * s, y - 17],
    [POLE + 174 * s, y],
    [POLE + 156 * s, y + 17],
    [POLE + 6 * s, y + 17],
  ]
  return (
    <Anim className="s-sd1-board" origin={[POLE, y]} style={{ animationDelay: `${delay}s` }}>
      <path d={polyPath(pts)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(pts, { seed, amp: 0.5, closed: true })} w={1.8} />
      <circle cx={POLE + 14 * s} cy={y} r={2.4} fill={INK} />
      <Hand x={POLE + 86 * s} y={y + 7} size={21} anchor="middle" weight={700}>
        {label}
      </Hand>
    </Anim>
  )
}

export function SignpostScene() {
  return (
    <Scene
      w={800}
      h={312}
      top={20}
      css={signCss}
      className="s-sd1"
      label="A puzzled paper character looks up at a signpost whose boards point to PubMed, IEEE Xplore, arXiv and Shodhganga"
    >
      <Place x={120} y={62}>
        <Anim className="s-sd1-cloud">
          <Cloud x={0} y={0} s={0.6} seed={3} />
        </Anim>
      </Place>
      <Ground y={300} bottom={332} seed={5} tufts={10} pebbles={3} grit={20} />
      <Tree x={700} y={300} s={1.15} seed={6} />

      <rect x={POLE - 6} y={40} width={12} height={262} fill="url(#wood)" />
      <Ink d={handPoly([[POLE - 6, 40], [POLE + 6, 40], [POLE + 6, 302], [POLE - 6, 302]], { seed: 7, amp: 0.4, closed: true })} w={1.8} />
      <Ink d={handLine(POLE - 11, 40, POLE + 11, 40, 8, 0.3)} w={2.4} />

      <Board y={78} dir="left" label="PubMed" tone="amber" seed={10} delay={0} />
      <Board y={124} dir="right" label="IEEE Xplore" tone="blue" seed={12} delay={-1.3} />
      <Board y={170} dir="left" label="arXiv" tone="green" seed={14} delay={-2.4} />
      <Board y={216} dir="right" label="Shodhganga" tone="pink" seed={16} delay={-0.7} />

      <Place x={140} y={300} s={2}>
        <Pip mood="worried" arms="think" look={2} seed={18} />
      </Place>
      <Place x={176} y={138}>
        <Anim className="s-sd1-q" spin>
          <Hand x={0} y={0} size={40} weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Keywords: a sentence is cut into the three ideas inside it.
   ------------------------------------------------------------------ */

const CARDS = [
  { word: 'music', tone: 'amber', x: 185, from: [260, 70] },
  { word: 'anxiety', tone: 'blue', x: 400, from: [411, 70] },
  { word: 'surgery', tone: 'green', x: 615, from: [575, 70] },
]
const CARD_Y = 194

const cardCss = CARDS.map((card, i) => {
  const a = 6 + i * 22
  const dx = card.from[0] - card.x
  const dy = card.from[1] - CARD_Y
  return `
.s-sd2-card-${i} { animation: s-sd2-card-${i} 9s ease-in-out infinite; }
@keyframes s-sd2-card-${i} {
  0%, ${a}% { transform: translate(0, 0); opacity: 1; }
  ${a + 4}% { transform: translate(0, 0); opacity: 0; }
  ${a + 5}% { transform: translate(${dx}px, ${dy}px); opacity: 0; }
  ${a + 10}%, ${a + 14}% { transform: translate(${dx}px, ${dy}px); opacity: 1; }
  ${a + 24}%, 100% { transform: translate(0, 0); opacity: 1; }
}`
}).join('\n')

const keywordCss = `
${cardCss}
.s-sd2 .blade-a { animation: s-sd2-snip-a 1.2s ease-in-out infinite; }
.s-sd2 .blade-b { animation: s-sd2-snip-b 1.2s ease-in-out infinite; }
@keyframes s-sd2-snip-a { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(10deg); } }
@keyframes s-sd2-snip-b { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-10deg); } }
`

export function KeywordScene() {
  return (
    <Scene
      w={800}
      h={292}
      top={24}
      css={keywordCss}
      className="s-sd2"
      label="A long question written on a strip of paper is cut into three word cards, music, anxiety and surgery, which drop into three separate boxes"
    >
      <Box x={70} y={44} w={660} h={48} r={4} fill={PAPER} seed={21} />
      <text x={400} y={76} textAnchor="middle" fontSize={24} className="ink-hand">
        <tspan fill={INK_SOFT}>does </tspan>
        <tspan fill={TONES.amber.deep} fontWeight={700}>
          music
        </tspan>
        <tspan fill={INK_SOFT}> reduce </tspan>
        <tspan fill={TONES.blue.deep} fontWeight={700}>
          anxiety
        </tspan>
        <tspan fill={INK_SOFT}> before </tspan>
        <tspan fill={TONES.green.deep} fontWeight={700}>
          surgery
        </tspan>
        <tspan fill={INK_SOFT}>?</tspan>
      </text>
      <Place x={742} y={66}>
        <Scissors x={0} y={0} s={0.8} angle={180} seed={22} />
      </Place>

      <Floor y={300} x1={40} x2={780} seed={23} />

      {CARDS.map((card, i) => (
        <Place key={card.word} x={card.x} y={CARD_Y}>
          <Anim className={`s-sd2-card-${i}`}>
            <Box x={-56} y={-18} w={112} h={36} r={5} fill={`url(#fill-${card.tone})`} seed={30 + i} />
            <Hand x={0} y={8} size={22} anchor="middle" weight={700}>
              {card.word}
            </Hand>
          </Anim>
        </Place>
      ))}
      {CARDS.map((card, i) => (
        <Crate key={card.word} x={card.x - 75} y={212} w={150} h={88} seed={40 + i} />
      ))}

      <Place x={740} y={300} s={1.4} flip>
        <Pip mood="happy" arms="point" seed={50} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. AND, OR, NOT, drawn as three pairs of circles.
   ------------------------------------------------------------------ */

const VENN = [
  { cx: 150, op: 'AND', tone: 'amber' },
  { cx: 400, op: 'OR', tone: 'green' },
  { cx: 650, op: 'NOT', tone: 'pink' },
]
const VY = 140
const VR = 72

const vennCss = `
.s-sd3-shade-0 { animation: s-sd3-pulse-0 9s ease-in-out infinite; }
.s-sd3-shade-1 { animation: s-sd3-pulse-1 9s ease-in-out infinite; }
.s-sd3-shade-2 { animation: s-sd3-pulse-2 9s ease-in-out infinite; }
.s-sd3-op-0 { animation: s-sd3-pop-0 9s ease-in-out infinite; }
.s-sd3-op-1 { animation: s-sd3-pop-1 9s ease-in-out infinite; }
.s-sd3-op-2 { animation: s-sd3-pop-2 9s ease-in-out infinite; }
@keyframes s-sd3-pulse-0 { 0%, 100% { opacity: 0.45; } 6%, 26% { opacity: 1; } 32% { opacity: 0.45; } }
@keyframes s-sd3-pulse-1 { 0%, 34%, 100% { opacity: 0.45; } 40%, 60% { opacity: 1; } 66% { opacity: 0.45; } }
@keyframes s-sd3-pulse-2 { 0%, 68%, 100% { opacity: 0.45; } 74%, 94% { opacity: 1; } }
@keyframes s-sd3-pop-0 { 0%, 100% { transform: scale(1); } 8% { transform: scale(1.2); } 14% { transform: scale(1); } }
@keyframes s-sd3-pop-1 { 0%, 38%, 100% { transform: scale(1); } 42% { transform: scale(1.2); } 48% { transform: scale(1); } }
@keyframes s-sd3-pop-2 { 0%, 72%, 100% { transform: scale(1); } 76% { transform: scale(1.2); } 82% { transform: scale(1); } }
`

function Venn({ cx, op, tone, i }) {
  const a = [cx - 38, VY]
  const b = [cx + 38, VY]
  const circleA = ellipsePath(a[0], a[1], VR, VR)
  const circleB = ellipsePath(b[0], b[1], VR, VR)
  const fill = `url(#fill-${tone})`
  return (
    <g>
      <defs>
        <clipPath id={`s-sd3-clip-${i}`}>
          <path d={circleA} />
        </clipPath>
        <mask id={`s-sd3-mask-${i}`} maskUnits="userSpaceOnUse" x={cx - 120} y={VY - 90} width={240} height={180}>
          <rect x={cx - 120} y={VY - 90} width={240} height={180} fill="#fff" />
          <path d={circleB} fill="#000" />
        </mask>
      </defs>
      <g className={`s-sd3-shade-${i}`}>
        {op === 'AND' ? <path d={circleB} fill={fill} clipPath={`url(#s-sd3-clip-${i})`} /> : null}
        {op === 'OR' ? (
          <>
            <path d={circleA} fill={fill} />
            <path d={circleB} fill={fill} />
          </>
        ) : null}
        {op === 'NOT' ? <path d={circleA} fill={fill} mask={`url(#s-sd3-mask-${i})`} /> : null}
      </g>
      <Oval cx={a[0]} cy={a[1]} rx={VR} seed={60 + i * 2} sw={1.8} />
      <Oval cx={b[0]} cy={b[1]} rx={VR} seed={61 + i * 2} sw={1.8} />
      <Hand x={cx - 72} y={VY + 6} size={18} anchor="middle" weight={700}>
        music
      </Hand>
      <Hand x={cx + 72} y={VY + 6} size={18} anchor="middle" weight={700}>
        anxiety
      </Hand>
      <Place x={cx} y={VY + 108}>
        <Anim className={`s-sd3-op-${i}`} spin>
          <Hand x={0} y={0} size={32} anchor="middle" weight={700} c={TONES[tone].deep}>
            {op}
          </Hand>
        </Anim>
      </Place>
    </g>
  )
}

export function BooleanScene() {
  return (
    <Scene
      w={800}
      h={230}
      top={50}
      css={vennCss}
      className="s-sd3"
      label="Three pairs of overlapping circles for music and anxiety: AND shades only the overlap, OR shades both circles, and NOT shades music without anxiety"
    >
      {VENN.map((v, i) => (
        <Venn key={v.op} {...v} i={i} />
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Filters: a funnel turns a shower of papers into one good one.
   ------------------------------------------------------------------ */

/* [x, y] where each falling paper rests in the still picture, just above
   the funnel's mouth. */
const DROPS = [
  [318, 40],
  [362, 31],
  [406, 40],
  [450, 31],
  [494, 40],
]

const funnelCss = `
${DROPS.map(
  (_, i) => `.s-sd4-drop-${i} { animation: s-sd4-drop 4s ease-in infinite; animation-delay: ${-i * 0.8}s; }`,
).join('\n')}
.s-sd4-out { animation: s-sd4-out 4s ease-in-out infinite; }
.s-sd4-cheer .pip-body { animation: s-sd4-hop 4s ease-in-out infinite; }
@keyframes s-sd4-drop {
  0% { transform: translateY(-90px) rotate(-10deg); opacity: 0; }
  15% { opacity: 1; }
  70% { transform: translateY(48px) rotate(12deg); opacity: 1; }
  85%, 100% { transform: translateY(70px) rotate(16deg); opacity: 0; }
}
@keyframes s-sd4-out {
  0%, 30% { transform: translateY(0); opacity: 1; }
  38% { transform: translateY(0); opacity: 0; }
  40% { transform: translateY(-34px); opacity: 0; }
  48% { transform: translateY(-34px); opacity: 1; }
  62%, 100% { transform: translateY(0); opacity: 1; }
}
@keyframes s-sd4-hop {
  0%, 60%, 100% { transform: translateY(0); }
  68% { transform: translateY(-9px); }
  76% { transform: translateY(0); }
}
`

function FilterTag({ x, label, seed }) {
  return (
    <g>
      <Ink d={handLine(x, 76, x, 100, seed, 0.2)} w={1.2} c={INK_SOFT} />
      <Box x={x - 26} y={100} w={52} h={28} r={4} fill={PAPER} seed={seed + 1} sw={1.5} />
      <Hand x={x} y={120} size={20} anchor="middle" weight={700}>
        {label}
      </Hand>
    </g>
  )
}

export function FunnelScene() {
  return (
    <Scene
      w={800}
      h={342}
      top={10}
      css={funnelCss}
      className="s-sd4"
      label="Papers rain into a funnel labelled year, type and free, a big pile waits on one side, and a single good paper drops out into a box while a paper character cheers"
    >
      <Floor y={340} x1={30} x2={770} seed={70} />
      <Pile x={150} y={340} w={140} count={15} seed={71} />

      {DROPS.map(([x, y], i) => (
        <Place key={i} x={x} y={y}>
          <Anim className={`s-sd4-drop-${i}`} spin>
            <Sheet x={-14} y={-18} w={28} h={36} lines={2} fold={6} seed={72 + i} sw={1.3} tone={['paper', 'blue', 'paper', 'pink', 'paper'][i]} />
          </Anim>
        </Place>
      ))}

      <Funnel x={400} y={72} w={250} h={210} tone="blue" seed={80} />
      <FilterTag x={332} label="year" seed={81} />
      <FilterTag x={400} label="type" seed={83} />
      <FilterTag x={468} label="free" seed={85} />

      <Place x={400} y={300}>
        <Anim className="s-sd4-out">
          <Sheet x={-16} y={-20} w={32} h={40} lines={2} fold={7} tone="amber" seed={86} sw={1.4} />
        </Anim>
      </Place>
      <Crate x={340} y={300} w={120} h={40} seed={87} />

      <Place x={620} y={340} s={2}>
        <g className="s-sd4-cheer">
          <Pip mood="grin" arms="up" seed={88} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The citation trail: older papers on one side, newer on the other.
   ------------------------------------------------------------------ */

const KEY_PIN = [357, 110]
const TRAIL = [
  { at: [96, 52], side: 'old', tone: 'paper' },
  { at: [104, 178], side: 'old', tone: 'blue' },
  { at: [206, 118], side: 'old', tone: 'paper' },
  { at: [452, 52], side: 'new', tone: 'green' },
  { at: [548, 118], side: 'new', tone: 'paper' },
  { at: [456, 190], side: 'new', tone: 'pink' },
]

const trailPaths = TRAIL.map((paper, i) => {
  const pin = [paper.at[0] + 33, paper.at[1] + 8]
  const mid = [(pin[0] + KEY_PIN[0]) / 2, (pin[1] + KEY_PIN[1]) / 2 + 16]
  return handCurve([KEY_PIN, mid, pin], { seed: 90 + i, amp: 0.4 })
})

const trailCss = `
${TRAIL.map((_, i) => {
  const start = 4 + i * 14
  return `
.s-sd5-pulse-${i} { animation: s-sd5-pulse-${i} 9s linear infinite; }
.s-sd5-wig-${i} { animation: s-sd5-wig-${i} 9s ease-in-out infinite; }
@keyframes s-sd5-pulse-${i} {
  0%, ${start}% { stroke-dashoffset: 0.16; }
  ${start + 10}%, 100% { stroke-dashoffset: -1; }
}
@keyframes s-sd5-wig-${i} {
  0%, ${start + 9}% { transform: rotate(0deg); }
  ${start + 11}% { transform: rotate(-4deg); }
  ${start + 13}% { transform: rotate(3deg); }
  ${start + 15}%, 100% { transform: rotate(0deg); }
}`
}).join('\n')}
`

export function TrailScene() {
  return (
    <Scene
      w={800}
      h={344}
      top={6}
      css={trailCss}
      className="s-sd5"
      label="A key paper is pinned in the middle of a cork board, with red threads to three older papers on the left and three newer papers on the right, and a paper character points at it"
    >
      <rect x={60} y={20} width={580} height={290} rx={4} fill="url(#wood)" />
      <Ink d={handPoly([[60, 20], [640, 20], [640, 310], [60, 310]], { seed: 100, amp: 0.6, closed: true })} w={1.9} />
      <rect x={72} y={32} width={556} height={266} fill={TONES.brown.tint} />
      <Dots x={76} y={36} w={548} h={258} count={90} seed={101} c={TONES.brown.ink} o={0.35} />
      <Ink d={handPoly([[72, 32], [628, 32], [628, 298], [72, 298]], { seed: 102, amp: 0.4, closed: true })} w={1.3} c={INK_SOFT} />

      {TRAIL.map((paper, i) => (
        <Anim key={i} className={`s-sd5-wig-${i}`} origin={[paper.at[0] + 33, paper.at[1] + 8]}>
          <Sheet x={paper.at[0]} y={paper.at[1]} w={66} h={82} lines={4} tone={paper.tone} seed={110 + i * 3} />
        </Anim>
      ))}
      <Sheet x={312} y={98} w={90} h={112} lines={6} tone="amber" seed={130} />

      {trailPaths.map((d, i) => (
        <Ink key={`t${i}`} d={d} c="#c9503a" w={1.7} />
      ))}
      {trailPaths.map((d, i) => (
        <Ink
          key={`p${i}`}
          d={d}
          c={TONES.amber.mid}
          w={4.5}
          scale
          pathLength="1"
          dash="0.16 1.2"
          className={`s-sd5-pulse-${i}`}
          style={{ strokeDashoffset: 0.16 }}
        />
      ))}

      {TRAIL.map((paper, i) => (
        <PushPin key={`pin${i}`} x={paper.at[0] + 33} y={paper.at[1] + 8} tone={i % 2 ? 'blue' : 'red'} seed={140 + i} />
      ))}
      <PushPin x={KEY_PIN[0]} y={KEY_PIN[1]} tone="green" seed={150} />

      <Hand x={150} y={292} size={22} anchor="middle" c={INK_SOFT} weight={700}>
        older
      </Hand>
      <Hand x={520} y={292} size={22} anchor="middle" c={INK_SOFT} weight={700}>
        newer
      </Hand>

      <Floor y={340} x1={20} x2={780} seed={151} />
      <Place x={715} y={340} s={1.85} flip>
        <Pip mood="surprised" arms="point" seed={152} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The search log fills itself in, one row per search.
   ------------------------------------------------------------------ */

const COLS = [
  [196, 300],
  [300, 410],
  [410, 520],
  [520, 620],
]
const ROWS = [98, 138, 178, 218]
const HEADS = ['date', 'where', 'search', 'found']

const cells = ROWS.flatMap((y, r) =>
  COLS.map(([x1, x2], c) => ({
    key: `${r}-${c}`,
    r,
    c,
    d: wave(x1 + 14, x2 - (c === 3 ? 40 : 14), y, { amp: 2.2, length: 9, seed: 160 + r * 7 + c }),
    start: 8 + r * 20 + c * 4,
  })),
)

const logCss = `
${cells
  .map(
    (cell) => `
.s-sd6-cell-${cell.key} { animation: s-sd6-cell-${cell.key} 10s linear infinite; }
@keyframes s-sd6-cell-${cell.key} {
  0%, ${cell.start}% { stroke-dashoffset: 1; opacity: 1; }
  ${cell.start + 4}%, 90% { stroke-dashoffset: 0; opacity: 1; }
  95% { stroke-dashoffset: 0; opacity: 0; }
  96%, 100% { stroke-dashoffset: 1; opacity: 1; }
}`,
  )
  .join('\n')}
${ROWS.map((_, r) => {
  const done = 8 + r * 20 + 16
  return `
.s-sd6-num-${r} { animation: s-sd6-num-${r} 10s linear infinite; }
@keyframes s-sd6-num-${r} {
  0%, ${done}% { opacity: 0; }
  ${done + 2}%, 90% { opacity: 1; }
  95%, 100% { opacity: 0; }
}`
}).join('\n')}
.s-sd6-pencil { animation: s-sd6-pencil 10s ease-in-out infinite; }
@keyframes s-sd6-pencil {
${ROWS.map((y, r) => {
  const start = 8 + r * 20
  return `  ${start}% { transform: translate(${COLS[0][0] + 14 - 612}px, ${y - 222}px); }
  ${start + 16}% { transform: translate(${COLS[3][1] - 40 - 612}px, ${y - 222}px); }`
}).join('\n')}
  0%, 96%, 100% { transform: translate(0, 0); }
}
`

export function LogScene() {
  return (
    <Scene
      w={800}
      h={316}
      top={20}
      css={logCss}
      className="s-sd6"
      label="A notebook page ruled into a search log with columns for date, where, search and found, filling up row by row while a pencil writes"
    >
      <Desk y={306} depth={26} seed={170} />
      <rect x={196} y={34} width={424} height={256} fill={PAPER} />
      <rect x={196} y={34} width={424} height={44} fill="url(#fill-amber)" />
      <Ink
        d={[78, 118, 158, 198, 238].map((y, i) => handLine(196, y, 620, y, 171 + i, 0.5)).join('')}
        c={TONES.blue.mid}
        w={1.2}
      />
      <Ink d={COLS.slice(1).map(([x], i) => handLine(x, 34, x, 290, 180 + i, 0.4)).join('')} c={INK_SOFT} w={1.1} o={0.6} />
      <Ink d={handPoly([[196, 34], [620, 34], [620, 290], [196, 290]], { seed: 185, amp: 0.7, closed: true })} w={1.9} />
      {HEADS.map((head, i) => (
        <Hand key={head} x={(COLS[i][0] + COLS[i][1]) / 2} y={64} size={20} anchor="middle" weight={700}>
          {head}
        </Hand>
      ))}
      {cells.map((cell) => (
        <Ink
          key={cell.key}
          d={cell.d}
          c={INK}
          w={1.8}
          scale
          pathLength="1"
          dash="1"
          className={`s-sd6-cell-${cell.key}`}
        />
      ))}
      {ROWS.map((y, r) => (
        <g key={r} className={`s-sd6-num-${r}`}>
          <Hand x={COLS[3][1] - 26} y={y + 6} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
            {['84', '61', '50', '12'][r]}
          </Hand>
        </g>
      ))}

      <Place x={612} y={222}>
        <Anim className="s-sd6-pencil">
          <Pencil x={0} y={0} length={90} angle={-52} tone="amber" seed={190} />
        </Anim>
      </Place>

      <Calendar x={660} y={40} w={88} h={92} day="12" month="AUG" tone="red" seed={191} />
      <Chai x={722} y={306} s={1.15} seed={192} />

      <Place x={120} y={306} s={1.9}>
        <Pip mood="happy" arms="point" seed={193} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Let tools carry it: four feeds, one conveyor, one tidy box.
   ------------------------------------------------------------------ */

const FEEDS = [
  { x: 150, tone: 'blue' },
  { x: 250, tone: 'green' },
  { x: 350, tone: 'amber' },
  { x: 450, tone: 'pink' },
]
const BELT = { x1: 100, x2: 560, y: 236 }
const RIDERS = [130, 222, 314, 406, 498]
const RIDER_TONES = ['blue', 'green', 'amber', 'pink', 'blue']

const beltCss = `
.s-sd7-ride { animation: s-sd7-ride 3s linear infinite; }
.s-sd7-ride-first { animation: s-sd7-ride 3s linear infinite, s-sd7-in 3s linear infinite; }
.s-sd7-ride-last { animation: s-sd7-ride 3s linear infinite, s-sd7-out 3s linear infinite; }
${FEEDS.map((_, i) => `.s-sd7-fall-${i} { animation: s-sd7-fall 3s ease-in infinite; animation-delay: ${-i * 0.75}s; }`).join('\n')}
.s-sd7-roll { animation: s-sd7-spin 1.2s linear infinite; }
@keyframes s-sd7-ride { from { transform: translateX(0); } to { transform: translateX(92px); } }
@keyframes s-sd7-in { 0% { opacity: 0; } 30%, 100% { opacity: 1; } }
@keyframes s-sd7-out { 0%, 55% { opacity: 1; } 100% { opacity: 0; } }
@keyframes s-sd7-fall {
  0% { transform: translateY(0); opacity: 0; }
  20% { opacity: 1; }
  80% { transform: translateY(78px); opacity: 1; }
  100% { transform: translateY(86px); opacity: 0; }
}
@keyframes s-sd7-spin { to { transform: rotate(360deg); } }
`

export function ConveyorScene() {
  const rollers = []
  for (let x = BELT.x1; x <= BELT.x2; x += 46) rollers.push(x)
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={beltCss}
      className="s-sd7"
      label="Four little funnels drop papers onto a conveyor belt that carries them into a box labelled your list, while a paper character relaxes with a glass of chai"
    >
      <Sun x={742} y={62} r={16} seed={200} />
      {FEEDS.map((feed, i) => (
        <g key={feed.x}>
          <Place x={feed.x} y={112}>
            <Anim className={`s-sd7-fall-${i}`}>
              <Sheet x={-12} y={-15} w={24} h={30} lines={2} fold={5} tone={feed.tone} seed={201 + i} sw={1.2} />
            </Anim>
          </Place>
          <Funnel x={feed.x} y={40} w={70} h={64} tone={feed.tone} seed={210 + i * 3} />
        </g>
      ))}

      <Floor y={330} x1={20} x2={780} seed={230} />
      <Ink d={handLine(BELT.x1 + 20, 252, BELT.x1 + 12, 330, 231, 0.3) + handLine(BELT.x2 - 20, 252, BELT.x2 - 12, 330, 232, 0.3)} w={3} c={INK_SOFT} />

      {RIDERS.map((x, i) => (
        <Place key={x} x={x} y={BELT.y - 6}>
          <Anim className={i === 0 ? 's-sd7-ride-first' : i === RIDERS.length - 1 ? 's-sd7-ride-last' : 's-sd7-ride'}>
            <Sheet x={-17} y={-42} w={34} h={42} lines={3} fold={7} tone={RIDER_TONES[i]} seed={240 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <path d={`M${BELT.x1} ${BELT.y - 6}H${BELT.x2}A8 8 0 0 1 ${BELT.x2} ${BELT.y + 10}H${BELT.x1}A8 8 0 0 1 ${BELT.x1} ${BELT.y - 6}Z`} fill={TONES.grey.tint} />
      <Ink d={`M${BELT.x1} ${BELT.y - 6}H${BELT.x2}A8 8 0 0 1 ${BELT.x2} ${BELT.y + 10}H${BELT.x1}A8 8 0 0 1 ${BELT.x1} ${BELT.y - 6}Z`} w={1.8} />
      {rollers.map((x) => (
        <Anim key={x} className="s-sd7-roll" origin={[x, BELT.y + 2]}>
          <circle cx={x} cy={BELT.y + 2} r={5} fill={TONES.grey.mid} stroke={INK} strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
          <path d={`M${x - 4} ${BELT.y + 2}H${x + 4}`} stroke={INK} strokeWidth={1.1} vectorEffect="non-scaling-stroke" />
        </Anim>
      ))}

      <Crate x={596} y={244} w={150} h={86} label="your list" seed={250} />

      <Place x={50} y={330} s={1.5}>
        <Pip mood="proud" arms="hold" seed={260}>
          <Chai x={0} y={-12} s={0.42} seed={261} />
        </Pip>
      </Place>
    </Scene>
  )
}
