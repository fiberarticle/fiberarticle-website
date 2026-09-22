import {
  Anim,
  Bridge,
  Chai,
  Chart,
  Cross,
  Desk,
  EARTH,
  Floor,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pebble,
  Pencil,
  Pip,
  Place,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TEXT_LINE,
  TONES,
  Tick,
  Torch,
  TreasureMap,
  Tuft,
  Window,
  Worm,
  ellipsePath,
  handLine,
  handPoly,
  polyPath,
  wave,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. What a research gap is: a bridge with one plank missing.
   ------------------------------------------------------------------ */

const bridgeCss = `
.s-rg1-plank { animation: s-rg1-drop 10s ease-in-out infinite; }
.s-rg1 .pip-body { animation: s-rg1-cheer 10s ease-in-out infinite; }
@keyframes s-rg1-drop {
  0% { transform: translateY(0) rotate(-4deg); opacity: 1; }
  12% { transform: translateY(-6px) rotate(-2deg); }
  24% { transform: translateY(0) rotate(-4deg); }
  38% { transform: translateY(50px) rotate(0deg); }
  40% { transform: translateY(46px) rotate(0deg); }
  42%, 80% { transform: translateY(50px) rotate(0deg); opacity: 1; }
  86% { transform: translateY(50px) rotate(0deg); opacity: 0; }
  88% { transform: translateY(0) rotate(-4deg); opacity: 0; }
  96%, 100% { transform: translateY(0) rotate(-4deg); opacity: 1; }
}
@keyframes s-rg1-cheer {
  0%, 42%, 100% { transform: translateY(0); }
  46% { transform: translateY(-9px); }
  50% { transform: translateY(0); }
  54% { transform: translateY(-4px); }
  58% { transform: translateY(0); }
}
`

export function BridgeScene() {
  const left = [[20, 250], [196, 250], [184, 290], [172, 360], [20, 360]]
  const right = [[624, 250], [780, 250], [780, 360], [650, 360], [636, 296]]
  return (
    <Scene w={800} h={250} top={110} css={bridgeCss} className="s-rg1" label="A plank bridge crosses a gorge with one plank missing, and a floating plank drops into the gap while a paper character on the cliff cheers">
      <Ink d={wave(176, 648, 350, { amp: 3, length: 26, seed: 1 })} c={TONES.blue.ink} w={1.6} />
      {[left, right].map((cliff, i) => (
        <g key={i}>
          <path d={polyPath(cliff)} fill="url(#soil)" />
          <Ink d={handPoly(cliff, { seed: 2 + i, amp: 0.8, closed: true })} w={1.8} />
        </g>
      ))}
      {[40, 90, 150, 660, 700, 750].map((x, i) => (
        <Tuft key={x} x={x} y={250} s={1.1} seed={10 + i} />
      ))}

      <Bridge x={196} y={250} planks={11} pw={40} gapAt={6} seed={20} />
      <Ink d={handPoly([[438, 250], [472, 250], [472, 260], [438, 260]], { seed: 21, amp: 0.3, closed: true })} dash="3 4" w={1.3} c={INK_SOFT} />

      <Anim className="s-rg1-plank" origin={[455, 205]}>
        <rect x={438} y={200} width={34} height={10} fill="url(#wood)" />
        <Ink d={handPoly([[438, 200], [472, 200], [472, 210], [438, 210]], { seed: 22, amp: 0.3, closed: true })} w={1.5} />
      </Anim>

      <Hand x={455} y={300} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        the gap
      </Hand>
      <Ink d="M455 282V266" w={1.4} c={INK_SOFT} />
      <Ink d="M450 271L455 265L460 271" w={1.4} c={INK_SOFT} />

      <Place x={112} y={250} s={1.8}>
        <Pip mood="happy" arms="point" look={1.8} seed={23} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Kinds of gaps: every gap has its own shape.
   ------------------------------------------------------------------ */

function shapePath(kind, cx, cy, r) {
  if (kind === 'circle') return ellipsePath(cx, cy, r, r)
  if (kind === 'square') return polyPath([[cx - r * 0.85, cy - r * 0.85], [cx + r * 0.85, cy - r * 0.85], [cx + r * 0.85, cy + r * 0.85], [cx - r * 0.85, cy + r * 0.85]])
  if (kind === 'triangle') return polyPath([[cx, cy - r], [cx + r * 1.05, cy + r * 0.8], [cx - r * 1.05, cy + r * 0.8]])
  if (kind === 'hexagon') {
    const pts = []
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
    }
    return polyPath(pts)
  }
  const pts = []
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (Math.PI / 5) * i
    const rr = i % 2 ? r * 0.45 : r
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr])
  }
  return polyPath(pts)
}

function Block({ kind, x, y, r, tone }) {
  const d = shapePath(kind, x, y, r)
  return (
    <g>
      <path d={d} fill={`url(#fill-${tone})`} />
      <Ink d={d} w={1.7} />
    </g>
  )
}

const HOLES = [
  { kind: 'circle', x: 366 },
  { kind: 'square', x: 414 },
  { kind: 'triangle', x: 462 },
  { kind: 'star', x: 510 },
  { kind: 'hexagon', x: 558 },
]

const sorterCss = `
.s-rg2-block { animation: s-rg2-toss 9s ease-in-out infinite; }
.s-rg2-wobble { animation: s-rg2-wobble 3s ease-in-out infinite; }
@keyframes s-rg2-toss {
  0%, 10% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
  28% { transform: translate(121px, -80px) rotate(180deg) scale(1); }
  42% { transform: translate(242px, -18px) rotate(360deg) scale(1); opacity: 1; }
  48% { transform: translate(242px, -18px) rotate(360deg) scale(0.5); opacity: 0; }
  49% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0; }
  60%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
}
@keyframes s-rg2-wobble {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(6deg); }
}
`

export function SorterScene() {
  const front = [[330, 196], [590, 196], [590, 330], [330, 330]]
  const top = [[330, 196], [590, 196], [612, 176], [352, 176]]
  return (
    <Scene w={800} h={230} top={120} css={sorterCss} className="s-rg2" label="A wooden shape sorter with holes of five different shapes, and a paper character tossing a triangle block into the triangle hole, because every gap has its own shape">
      <Desk y={330} depth={24} seed={30} />
      <path d={polyPath(top)} fill={TONES.amber.tint} />
      <Ink d={handPoly(top, { seed: 31, amp: 0.5, closed: true })} w={1.6} />
      <path d={polyPath(front)} fill="url(#fill-amber)" />
      <Ink d={handPoly(front, { seed: 32, amp: 0.6, closed: true })} w={1.9} />
      <path d={polyPath([[590, 196], [612, 176], [612, 310], [590, 330]])} fill={TONES.amber.mid} />
      <Ink d={handPoly([[590, 196], [612, 176], [612, 310], [590, 330]], { seed: 33, amp: 0.4 })} w={1.6} />
      {HOLES.map((hole) => (
        <g key={hole.kind}>
          <path d={shapePath(hole.kind, hole.x, 262, 16)} fill="#3b2f28" />
          <Ink d={shapePath(hole.kind, hole.x, 262, 17)} w={1.5} />
        </g>
      ))}

      <Anim className="s-rg2-wobble" origin={[470, 186]}>
        <Block kind="square" x={470} y={172} r={16} tone="pink" />
      </Anim>
      <Block kind="star" x={656} y={310} r={20} tone="amber" />
      <Block kind="circle" x={706} y={313} r={16} tone="blue" />
      <Block kind="hexagon" x={750} y={313} r={16} tone="green" />

      <Shadow x={220} y={332} rx={48} ry={5} />
      <Place x={220} y={330} s={2.1}>
        <Pip mood="focused" arms="hold" look={1.8} seed={34} />
      </Place>
      <Anim className="s-rg2-block" spin>
        <Block kind="triangle" x={220} y={280} r={16} tone="red" />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Read the limitations first: a paper with its last sections
      highlighted, and the bookworm reading along.
   ------------------------------------------------------------------ */

const HIGHLIGHTS = [
  { y: 234, len: 96 },
  { y: 246, len: 84 },
  { y: 258, len: 70 },
  { y: 296, len: 92 },
  { y: 308, len: 64 },
]

const paperCss = `
${HIGHLIGHTS.map(
  (_, i) => `.s-rg3-hl-${i} { animation: s-rg3-hl-${i} 10s ease-out infinite; }
@keyframes s-rg3-hl-${i} {
  0%, ${12 + i * 9}% { transform: scaleX(0); }
  ${20 + i * 9}%, 86% { transform: scaleX(1); }
  92%, 100% { transform: scaleX(0); }
}`,
).join('\n')}
.s-rg3-pen { animation: s-rg3-pen 10s ease-in-out infinite; }
@keyframes s-rg3-pen {
  0%, 100% { transform: translate(0, 0); }
  30% { transform: translate(-3px, 6px); }
  60% { transform: translate(-2px, 12px); }
  80% { transform: translate(0, 4px); }
}
`

export function PaperScene() {
  const col1 = [130, 140, 150, 160, 170, 180, 190, 262, 272, 282, 292, 302, 312]
  const col2 = [130, 140, 150, 160, 170, 180, 190, 200]
  return (
    <Scene w={800} h={330} top={10} css={paperCss} className="s-rg3" label="A research paper with its limitations and future work sections highlighted in yellow, a bookworm reading along the top edge, and a paper character holding a highlighter">
      <Sheet x={230} y={46} w={250} h={280} lines={0} fold={22} seed={40} />
      <rect x={250} y={78} width={150} height={9} fill={INK} opacity="0.78" />
      <rect x={250} y={93} width={100} height={6} fill={INK_SOFT} opacity="0.7" />
      <Ink d={handLine(250, 110, 360, 110, 41, 0.3)} c={TEXT_LINE} w={1.4} />
      <Ink
        d={col1.map((y, i) => handLine(250, y, 250 + 80 - ((i * 17) % 24), y, 42 + i, 0.3)).join('')}
        c={TEXT_LINE}
        w={1.4}
      />
      <rect x={250} y={200} width={90} height={52} fill={PAPER} />
      <Ink d={handPoly([[250, 200], [340, 200], [340, 252], [250, 252]], { seed: 60, amp: 0.3, closed: true })} w={1.2} />
      <Chart x={260} y={246} w={70} h={40} bars={[0.35, 0.7, 0.55, 0.9]} tone="blue" seed={61} />
      <Ink
        d={col2.map((y, i) => handLine(358, y, 358 + 100 - ((i * 13) % 26), y, 62 + i, 0.3)).join('')}
        c={TEXT_LINE}
        w={1.4}
      />

      {HIGHLIGHTS.map((hl, i) => (
        <Anim key={hl.y} className={`s-rg3-hl-${i}`} style={{ transformBox: 'fill-box', transformOrigin: '0% 50%' }}>
          <rect x={356} y={hl.y - 5} width={hl.len} height={10} rx={3} fill={TONES.amber.mid} opacity="0.6" />
        </Anim>
      ))}
      <Hand x={358} y={222} size={20} weight={700}>
        Limitations
      </Hand>
      <Ink d={HIGHLIGHTS.slice(0, 3).map((hl, i) => handLine(360, hl.y, 360 + hl.len - 8, hl.y, 70 + i, 0.3)).join('')} c={INK_SOFT} w={1.4} />
      <Hand x={358} y={284} size={20} weight={700}>
        Future work
      </Hand>
      <Ink d={HIGHLIGHTS.slice(3).map((hl, i) => handLine(360, hl.y, 360 + hl.len - 8, hl.y, 74 + i, 0.3)).join('')} c={INK_SOFT} w={1.4} />

      <Place x={426} y={46} s={1.1}>
        <Worm seed={80} />
      </Place>

      <Floor y={330} x1={520} x2={760} seed={81} />
      <Shadow x={600} y={332} rx={46} ry={5} />
      <Place x={600} y={330} s={2.1} flip>
        <Pip mood="focused" arms="point" seed={82} />
      </Place>
      <Anim className="s-rg3-pen">
        <Pencil x={468} y={236} length={80} angle={-8} tone="pink" seed={83} />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Follow the disagreements: two studies on a scale that will not settle.
   ------------------------------------------------------------------ */

const scaleCss = `
.s-rg4 .scale-beam { animation: s-rg4-tip 6s ease-in-out infinite; }
.s-rg4-q { animation: s-rg4-q 3s ease-in-out infinite; }
@keyframes s-rg4-tip {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-7deg); }
  75% { transform: rotate(7deg); }
}
@keyframes s-rg4-q {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
`

export function ScaleScene() {
  const study = (x, mark) => (
    <g>
      <Sheet x={x - 18} y={168} w={36} h={46} lines={2} fold={8} seed={x} sw={1.4} />
      {mark === 'tick' ? <Tick x={x} y={196} s={0.8} /> : <Cross x={x} y={196} s={0.7} seed={x + 1} />}
    </g>
  )
  return (
    <Scene w={800} h={270} top={60} css={scaleCss} className="s-rg4" label="A balance scale holds a study with a tick on one side and a study with a cross on the other, tipping back and forth, while a puzzled paper character watches">
      <Floor y={320} x1={60} x2={740} seed={90} />
      <Scale x={400} y={320} s={1.6} seed={91} left={study(275, 'tick')} right={study(525, 'cross')} />
      <Place x={400} y={100}>
        <Anim className="s-rg4-q" spin>
          <Hand x={0} y={0} size={36} anchor="middle" weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>
      <Shadow x={150} y={322} rx={48} ry={5} />
      <Place x={150} y={320} s={2.1}>
        <Pip mood="worried" arms="think" look={1.8} seed={92} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Use review papers as maps: a map on an easel, X marks the gap.
   ------------------------------------------------------------------ */

const mapCss = `
.s-rg5-ring { animation: s-rg5-ring 3s ease-out infinite; }
.s-rg5-spark { animation: s-rg5-spark 6s ease-in-out infinite; }
@keyframes s-rg5-ring {
  0% { transform: scale(0.4); opacity: 0.9; }
  70%, 100% { transform: scale(2.2); opacity: 0; }
}
@keyframes s-rg5-spark {
  0%, 100% { transform: scale(0.8) rotate(0deg); opacity: 0.7; }
  50% { transform: scale(1.15) rotate(40deg); opacity: 1; }
}
`

export function MapScene() {
  return (
    <Scene w={800} h={290} top={60} css={mapCss} className="s-rg5" label="A treasure map stands on an easel with a dotted trail leading to an X, and a paper character points at it">
      <Floor y={330} x1={60} x2={740} seed={100} />
      <Ink d={handLine(320, 92, 290, 330, 101, 0.5) + handLine(556, 92, 586, 330, 102, 0.5)} w={3} c={TONES.brown.deep} />
      <TreasureMap x={288} y={100} w={300} h={188} seed={103} />
      <rect x={296} y={292} width={284} height={8} fill="url(#wood)" />
      <Ink d={handPoly([[296, 292], [580, 292], [580, 300], [296, 300]], { seed: 104, amp: 0.3, closed: true })} w={1.4} />
      <Place x={528} y={209}>
        <Anim className="s-rg5-ring" spin style={{ opacity: 0 }}>
          <circle r={14} fill="none" stroke={TONES.red.ink} strokeWidth={2} vectorEffect="non-scaling-stroke" />
        </Anim>
      </Place>
      <Place x={562} y={176}>
        <Anim className="s-rg5-spark" spin>
          <Sparkle x={0} y={0} s={10} />
        </Anim>
      </Place>
      <Shadow x={170} y={332} rx={48} ry={5} />
      <Place x={170} y={330} s={2.1}>
        <Pip mood="happy" arms="point" glasses look={1.8} seed={105} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Check the gap is real: one burrow is taken, the other still empty.
   ------------------------------------------------------------------ */

const burrowCss = `
.s-rg6-pop { animation: s-rg6-pop 9s ease-in-out infinite; }
.s-rg6-alert { animation: s-rg6-alert 9s ease-in-out infinite; }
.s-rg6-torch { animation: s-rg6-sweep 9s ease-in-out infinite; }
@keyframes s-rg6-pop {
  0%, 24% { transform: translateY(30px); }
  34% { transform: translateY(-5px); }
  38%, 76% { transform: translateY(0); }
  88%, 100% { transform: translateY(30px); }
}
@keyframes s-rg6-alert {
  0%, 34% { opacity: 0; transform: translateY(6px) scale(0.6); }
  40%, 72% { opacity: 1; transform: translateY(0) scale(1); }
  80%, 100% { opacity: 0; transform: translateY(6px) scale(0.6); }
}
@keyframes s-rg6-sweep {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(5deg); }
}
`

function Burrow({ x }) {
  const hole = `M${x - 24} 250C${x - 24} 290 ${x - 18} 322 ${x} 342C${x + 18} 322 ${x + 24} 290 ${x + 24} 250Z`
  return (
    <g>
      <path d={hole} fill="#e9d9bf" />
      <path d={hole} fill="url(#ink-hatch-light)" opacity="0.4" />
      <Ink d={`M${x - 24} 252C${x - 24} 290 ${x - 18} 322 ${x} 342C${x + 18} 322 ${x + 24} 290 ${x + 24} 252`} c={EARTH.soilLine} w={1.6} />
      <path d={ellipsePath(x, 250, 25, 6)} fill="#4a3a2c" />
    </g>
  )
}

export function BurrowScene() {
  return (
    <Scene w={800} h={280} top={90} css={burrowCss} className="s-rg6" label="A paper character shines a torch into one burrow in the ground to check it is empty, while a bookworm pops out of a second burrow that is already taken">
      <Ground y={250} bottom={370} seed={110} tufts={8} pebbles={0} grit={18} />
      <Pebble x={140} y={320} rx={9} ry={5} seed={114} />
      <Pebble x={430} y={300} rx={11} ry={6} seed={115} />
      <Pebble x={700} y={330} rx={8} ry={5} seed={116} />
      <Burrow x={300} />
      <Burrow x={566} />

      <Place x={580} y={244}>
        <Anim className="s-rg6-pop">
          <Place r={-90} s={1.3}>
            <Worm seed={111} />
          </Place>
        </Anim>
      </Place>
      <Place x={566} y={198}>
        <Anim className="s-rg6-alert" origin={[0, 0]} style={{ opacity: 0 }}>
          <path d="M-3 -24L3 -24L2 -4L-2 -4Z" fill={TONES.red.ink} />
          <circle cx={0} cy={3} r={2.8} fill={TONES.red.ink} />
        </Anim>
      </Place>

      <Hand x={606} y={214} size={22} weight={700} c={INK_SOFT}>
        taken
      </Hand>
      <Hand x={332} y={210} size={22} weight={700} c={INK_SOFT}>
        still empty
      </Hand>

      <Anim className="s-rg6-torch" origin={[215, 204]}>
        <Torch x={236} y={214} angle={25} reach={90} seed={112} />
      </Anim>
      <Place x={150} y={250} s={2.1}>
        <Pip mood="focused" arms="down" look={1.8} seed={113} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Write the gap in one sentence, then sleep.
   ------------------------------------------------------------------ */

const LINE_1 = wave(308, 462, 206, { amp: 3.4, length: 8, seed: 121 })
const LINE_2 = wave(308, 446, 228, { amp: 3.4, length: 8, seed: 122 })

const nightCss = `
.s-rg7-line-1 { animation: s-rg7-line-1 10s ease-in-out infinite; }
.s-rg7-line-2 { animation: s-rg7-line-2 10s ease-in-out infinite; }
.s-rg7-z { animation: s-rg7-z 4.5s ease-in-out infinite; }
@keyframes s-rg7-line-1 {
  0%, 8% { stroke-dashoffset: 1; }
  30%, 88% { stroke-dashoffset: 0; }
  94%, 100% { stroke-dashoffset: 1; }
}
@keyframes s-rg7-line-2 {
  0%, 30% { stroke-dashoffset: 1; }
  48%, 88% { stroke-dashoffset: 0; }
  94%, 100% { stroke-dashoffset: 1; }
}
@keyframes s-rg7-z {
  0%, 100% { transform: translateY(0); opacity: 0.35; }
  50% { transform: translateY(-8px); opacity: 1; }
}
`

export function NightScene() {
  return (
    <Scene w={800} h={290} top={40} css={nightCss} className="s-rg7" label="At night by a moonlit window, a content paper character writes one clear sentence on a sheet of paper, and little z letters float up as it settles to sleep">
      <Window x={600} y={56} w={160} h={124} night seed={120} />
      <Oval cx={716} cy={96} rx={19} fill="url(#fill-amber)" seed={123} sw={1.5} />
      <circle cx={710} cy={91} r={3.4} fill={TONES.amber.mid} />
      <circle cx={722} cy={103} r={2.4} fill={TONES.amber.mid} />
      <Sparkle x={632} y={82} s={5} />
      <Sparkle x={650} y={146} s={4} />

      <Desk y={320} depth={24} seed={124} />
      <Chai x={236} y={320} s={1} steam={false} seed={125} />
      <Sheet x={290} y={150} w={190} h={170} lines={0} fold={16} seed={126} />
      <Ink className="s-rg7-line-1" d={LINE_1} c={INK} w={1.7} scale pathLength={1} dash="1" />
      <Ink className="s-rg7-line-2" d={LINE_2} c={INK} w={1.7} scale pathLength={1} dash="1" />
      <Ink d={handLine(308, 252, 460, 252, 127, 0.3) + handLine(308, 272, 410, 272, 128, 0.3)} c={TEXT_LINE} w={1.5} />

      <Shadow x={528} y={322} rx={46} ry={5} />
      <Place x={528} y={320} s={2.1} flip>
        <Pip mood="proud" arms="write" seed={129} />
      </Place>
      {[
        { x: 520, y: 160, size: 22, d: 0 },
        { x: 540, y: 136, size: 27, d: -1.5 },
        { x: 562, y: 110, size: 32, d: -3 },
      ].map((z) => (
        <Anim key={z.x} className="s-rg7-z" style={{ animationDelay: `${z.d}s` }}>
          <Hand x={z.x} y={z.y} size={z.size} weight={700} c={TONES.blue.deep}>
            z
          </Hand>
        </Anim>
      ))}
    </Scene>
  )
}
