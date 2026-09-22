import {
  Anim,
  Arrow,
  Bot,
  Bulb,
  Chai,
  Checklist,
  Copier,
  Crate,
  Cross,
  Desk,
  Floor,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  OpenBook,
  PAPER,
  Pencil,
  Pip,
  Place,
  PushPin,
  Scene,
  Scissors,
  Shadow,
  Sheet,
  Sparkle,
  Stack,
  StampMark,
  TONES,
  Tick,
  Type,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. What plagiarism really means: an idea changes owners mid-air.
   ------------------------------------------------------------------ */

const ideaCss = `
.s-tp1-bulb { animation: s-tp1-fly 9s ease-in-out infinite; }
.s-tp1-strike { animation: s-tp1-strike 9s ease-in-out infinite; }
.s-tp1-mine { animation: s-tp1-mine 9s ease-in-out infinite; }
.s-tp1-owner { animation: s-tp1-hop 9s ease-in-out infinite; }
.s-tp1-loser .pip-arm-r { animation: s-tp1-reach 9s ease-in-out infinite; }
@keyframes s-tp1-fly {
  0%, 8% { transform: translate(-170px, 28px); opacity: 1; }
  19% { transform: translate(-100px, 9.7px); }
  30% { transform: translate(0, 0); }
  41% { transform: translate(100px, 9.7px); }
  52%, 74% { transform: translate(170px, 28px); opacity: 1; }
  79% { transform: translate(170px, 28px); opacity: 0; }
  80% { transform: translate(-170px, 28px); opacity: 0; }
  90%, 100% { transform: translate(-170px, 28px); opacity: 1; }
}
@keyframes s-tp1-strike {
  0%, 30% { opacity: 0; }
  34%, 76% { opacity: 1; }
  79%, 100% { opacity: 0; }
}
@keyframes s-tp1-mine {
  0%, 36% { opacity: 0; transform: scale(0.4); }
  42% { opacity: 1; transform: scale(1.12); }
  46%, 76% { opacity: 1; transform: scale(1); }
  79%, 100% { opacity: 0; transform: scale(0.4); }
}
@keyframes s-tp1-hop {
  0%, 52%, 100% { transform: translateY(0); }
  56% { transform: translateY(-8px); }
  60% { transform: translateY(0); }
  64% { transform: translateY(-4px); }
  68% { transform: translateY(0); }
}
@keyframes s-tp1-reach {
  0%, 30%, 100% { transform: rotate(0deg); }
  40%, 70% { transform: rotate(-24deg); }
}
`

export function IdeaScene() {
  return (
    <Scene w={800} h={296} top={40} css={ideaCss} className="s-tp1" label="A light bulb idea floats from one paper character to another, and the label on it changes from hers to mine">
      <Ink d="M230 120Q400 64 570 120" dash="3 9" c={INK_SOFT} w={1.4} />
      <Floor y={320} x1={70} x2={730} />

      <Shadow x={230} y={322} rx={52} ry={6} />
      <Place x={230} y={320} s={2.1}>
        <g className="s-tp1-loser">
          <Pip mood="surprised" arms="point" tone="blue" look={1.8} seed={11} />
        </g>
      </Place>

      <Shadow x={570} y={322} rx={52} ry={6} />
      <Place x={570} y={320} s={2.1}>
        <g className="s-tp1-owner">
          <Pip mood="grin" arms="hips" tone="amber" look={-1.5} seed={23} />
        </g>
      </Place>

      <Place x={400} y={92}>
        <Anim className="s-tp1-bulb">
          <Bulb x={0} y={0} s={1} seed={31} />
          <Ink d="M9 30Q20 40 30 30" w={1.2} c={INK_SOFT} />
          <path d={polyPath([[26, 22], [110, 22], [116, 36], [110, 50], [26, 50]])} fill={PAPER} />
          <Ink d={handPoly([[26, 22], [110, 22], [116, 36], [110, 50], [26, 50]], { seed: 33, amp: 0.4, closed: true })} w={1.4} />
          <circle cx={34} cy={36} r={2.4} fill="none" stroke={INK} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
          <Hand x={42} y={43} size={19} weight={700}>
            hers
          </Hand>
          <g className="s-tp1-strike">
            <Ink d={handLine(40, 37, 80, 35, 35, 0.3)} c={TONES.red.ink} w={2.4} />
          </g>
          <Anim className="s-tp1-mine" origin={[96, 20]}>
            <Hand x={80} y={16} size={19} weight={700} c={TONES.red.ink} rotate={-6}>
              mine
            </Hand>
          </Anim>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Direct plagiarism: the photocopier.
   ------------------------------------------------------------------ */

const copierCss = `
.s-tp2 .copy-sheet { animation: s-tp2-print 8s ease-in-out infinite; }
.s-tp2-scan { animation: s-tp2-scan 8s ease-in-out infinite; }
.s-tp2-stamp { animation: s-tp2-stamp 8s ease-in-out infinite; }
.s-tp2-pip { animation: s-tp2-flinch 8s ease-in-out infinite; }
@keyframes s-tp2-print {
  0%, 6% { transform: translateX(0); opacity: 1; }
  10% { transform: translateX(0); opacity: 0; }
  12% { transform: translateX(48px); opacity: 0; }
  20% { transform: translateX(48px); opacity: 1; }
  42%, 100% { transform: translateX(0); opacity: 1; }
}
@keyframes s-tp2-scan {
  0%, 12% { transform: translateX(0); opacity: 0; }
  15% { opacity: 1; }
  38% { transform: translateX(150px); opacity: 1; }
  41%, 100% { transform: translateX(150px); opacity: 0; }
}
@keyframes s-tp2-stamp {
  0%, 6% { opacity: 0.9; transform: scale(1); }
  10%, 48% { opacity: 0; transform: scale(1.8); }
  53% { opacity: 0.95; transform: scale(0.92); }
  57%, 100% { opacity: 0.9; transform: scale(1); }
}
@keyframes s-tp2-flinch {
  0%, 52%, 100% { transform: translateX(0) rotate(0deg); }
  55% { transform: translateX(4px) rotate(4deg); }
  60%, 80% { transform: translateX(2px) rotate(2deg); }
}
`

export function CopierScene() {
  return (
    <Scene w={800} h={262} top={110} css={copierCss} className="s-tp2" label="A photocopier copies an open book and pushes out a copy that gets stamped COPY, while a paper character holding a stack of copies looks worried">
      <Desk y={330} depth={30} seed={41} />
      <Copier x={214} y={330} s={1.35} seed={42} />
      <OpenBook x={320} y={184} w={96} tone="blue" lines={4} seed={43} />
      <Place x={236} y={186}>
        <Anim className="s-tp2-scan">
          <rect x={0} y={-3} width={12} height={5} rx={2} fill={TONES.amber.mid} style={{ opacity: 0 }} />
        </Anim>
      </Place>
      <Place x={190} y={282}>
        <Anim className="s-tp2-stamp" spin>
          <StampMark x={0} y={0} w={66} h={24} text="COPY" size={13} rotate={-10} seed={44} />
        </Anim>
      </Place>

      <Shadow x={560} y={332} rx={54} ry={6} />
      <Place x={560} y={330} s={2.2}>
        <g className="s-tp2-pip">
          <Pip mood="worried" arms="hold" look={-1.8} seed={45}>
            <Stack x={0} y={-8} w={20} h={26} count={3} spread={9} seed={46} />
          </Pip>
        </g>
      </Place>

      <Chai x={712} y={330} s={1.2} seed={47} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Mosaic plagiarism: strips cut from three papers fly into a
      patchwork while Pip stands by with the glue.
   ------------------------------------------------------------------ */

/* Strips leave the scissors (360, 150), rise to (480, 150) and land in the
   patchwork at (600, 250). Each strip sits at the middle of that arc and
   its keyframes carry it from the start to the end relative to there. */
const STRIPS = [
  { tone: 'pink', delay: '0s', still: true },
  { tone: 'blue', delay: '-3s', still: false },
  { tone: 'green', delay: '-6s', still: false },
]

const patchCss = `
.s-tp3 .blade-a { animation: s-tp3-snip-a 1.4s ease-in-out infinite; }
.s-tp3 .blade-b { animation: s-tp3-snip-b 1.4s ease-in-out infinite; }
.s-tp3-strip { animation: s-tp3-fly 9s linear infinite; }
@keyframes s-tp3-snip-a { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(9deg); } }
@keyframes s-tp3-snip-b { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-9deg); } }
@keyframes s-tp3-fly {
  0% { transform: translate(-120px, 0) rotate(-10deg); opacity: 0; }
  4% { opacity: 1; }
  8.3% { transform: translate(-60px, -12.5px) rotate(0deg); }
  16.7% { transform: translate(0, 0) rotate(8deg); }
  25% { transform: translate(60px, 37.5px) rotate(14deg); }
  30% { opacity: 1; }
  33.3%, 100% { transform: translate(120px, 100px) rotate(20deg); opacity: 0; }
}
`

/* A glue stick in Pip's pointing hand (46, -47), in Pip's own units. */
function GlueStick() {
  return (
    <g>
      <path d="M41.5 -58h9v21h-9Z" fill="url(#fill-amber)" />
      <path d="M41 -65h10v7h-10Z" fill={TONES.red.mid} />
      <Ink d={handPoly([[41, -65], [51, -65], [51, -37], [41, -37]], { seed: 59, amp: 0.2, closed: true })} w={1.4} />
      <Ink d={handLine(41, -58, 51, -58, 58, 0.1)} w={1.2} />
    </g>
  )
}

function PatchStrip({ y, h, tone, seed }) {
  return (
    <g>
      <path d={`M552 ${y}h174v${h}h-174Z`} fill={`url(#fill-${tone})`} />
      <Ink d={handLine(552, y + h, 726, y + h, seed, 0.9)} w={1.2} c={INK_SOFT} dash="4 4" />
    </g>
  )
}

export function PatchworkScene() {
  const strips = [
    { y: 70, h: 34, tone: 'blue' },
    { y: 104, h: 28, tone: 'pink' },
    { y: 132, h: 38, tone: 'green' },
    { y: 170, h: 30, tone: 'blue' },
    { y: 200, h: 36, tone: 'pink' },
    { y: 236, h: 30, tone: 'green' },
  ]
  return (
    <Scene w={800} h={372} css={patchCss} className="s-tp3" label="Three coloured papers are cut into strips that fly into a patchwork page stitched together from all three, while a paper character holds a glue stick">
      <g transform="rotate(-4 88 90)">
        <Sheet x={40} y={40} w={96} h={118} tone="blue" lines={5} seed={51} />
      </g>
      <PushPin x={88} y={46} tone="red" seed={52} />
      <g transform="rotate(3 198 84)">
        <Sheet x={150} y={30} w={96} h={118} tone="green" lines={5} seed={53} />
      </g>
      <PushPin x={198} y={36} tone="amber" seed={54} />
      <g transform="rotate(-2 308 92)">
        <Sheet x={260} y={40} w={96} h={118} tone="pink" lines={5} seed={55} />
      </g>
      <PushPin x={308} y={46} tone="blue" seed={56} />

      <Place x={400} y={112}>
        <Scissors x={0} y={0} s={1} angle={196} seed={57} />
      </Place>

      <g transform="rotate(2 639 170)">
        <path d="M546 60h186v236h-186Z" fill={PAPER} />
        {strips.map((strip, i) => (
          <PatchStrip key={i} {...strip} seed={60 + i} />
        ))}
        <Ink d={handPoly([[546, 60], [732, 60], [732, 296], [546, 296]], { seed: 67, amp: 0.8, closed: true })} w={1.9} />
      </g>

      <Floor y={336} x1={20} x2={780} seed={68} />
      <Shadow x={460} y={338} rx={44} ry={5} />
      <Place x={460} y={336} s={1.9}>
        <Pip mood="grin" arms="point" look={1.8} seed={69}>
          <GlueStick />
        </Pip>
      </Place>

      {STRIPS.map((strip, i) => (
        <Place key={strip.tone} x={480} y={150}>
          <Anim
            className="s-tp3-strip"
            style={{ animationDelay: strip.delay, opacity: strip.still ? 1 : 0 }}
          >
            <path d="M-16 -4h32v8h-32Z" fill={`url(#fill-${strip.tone})`} />
            <Ink d={handPoly([[-16, -4], [16, -4], [16, 4], [-16, 4]], { seed: 80 + i, amp: 0.2, closed: true })} w={1.2} />
          </Anim>
        </Place>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Paraphrasing plagiarism: the same face under a disguise.
   ------------------------------------------------------------------ */

const disguiseCss = `
.s-tp4-mask { animation: s-tp4-lift 8s ease-in-out infinite; }
.s-tp4-equals { animation: s-tp4-equals 8s ease-in-out infinite; }
.s-tp4-lens { animation: s-tp4-peer 8s ease-in-out infinite; }
@keyframes s-tp4-lift {
  0%, 36%, 80%, 100% { transform: translateY(0) rotate(0deg); }
  46% { transform: translateY(-30px) rotate(-8deg); }
  52%, 68% { transform: translateY(-26px) rotate(-5deg); }
}
@keyframes s-tp4-equals {
  0%, 44% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.2); }
  54%, 70% { opacity: 1; transform: scale(1); }
  76%, 100% { opacity: 0; transform: scale(0.3); }
}
@keyframes s-tp4-peer {
  0%, 30%, 100% { transform: translate(0, 0) rotate(0deg); }
  44%, 72% { transform: translate(-22px, -4px) rotate(-8deg); }
}
`

/* Glasses, bushy brows, a big nose and a moustache, in Pip's own units. */
function Disguise() {
  return (
    <g>
      <path d="M-15 -52Q-8 -58 -2 -52Q-8 -55 -15 -52ZM1 -52Q7 -58 14 -52Q7 -55 1 -52Z" fill={INK} stroke={INK} strokeWidth={2} vectorEffect="non-scaling-stroke" />
      <Ink d={handEllipse(-8, -44, 6.2, 6, { seed: 101, amp: 0.3 }) + handEllipse(6, -44, 6.2, 6, { seed: 102, amp: 0.3 })} w={2.2} />
      <Ink d="M-2 -45Q-1 -47 0 -45" w={2} />
      <path d={ellipsePath(-1, -37, 4.6, 5.4)} fill="#f2b79d" />
      <Ink d={handEllipse(-1, -37, 4.6, 5.4, { seed: 103, amp: 0.3 })} w={1.4} />
      <path d="M-1 -31C-4 -34 -10 -34 -13 -31C-15 -29 -17 -29 -18 -31C-17 -26 -9 -25 -5 -28C-3 -29 -2 -29 -1 -29C0 -29 1 -29 3 -28C7 -25 15 -26 16 -31C15 -29 13 -29 11 -31C8 -34 2 -34 -1 -31Z" fill={INK} />
    </g>
  )
}

export function DisguiseScene() {
  return (
    <Scene w={800} h={246} top={126} css={disguiseCss} className="s-tp4" label="Two identical paper characters stand side by side. One wears a false nose, glasses and moustache; when the disguise lifts, an equals sign appears between them">
      <Floor y={318} x1={60} x2={740} seed={110} />

      <Shadow x={250} y={320} rx={54} ry={6} />
      <Place x={250} y={318} s={2.3}>
        <Pip mood="happy" arms="down" seed={111} />
      </Place>
      <Hand x={250} y={356} size={24} anchor="middle" c={INK_SOFT}>
        the original idea
      </Hand>

      <Place x={400} y={196}>
        <Anim className="s-tp4-equals" spin>
          <Ink d={handLine(-16, -6, 16, -6, 112, 0.3) + handLine(-16, 7, 16, 7, 113, 0.3)} w={4} c={TONES.red.ink} />
        </Anim>
      </Place>

      <Shadow x={540} y={320} rx={54} ry={6} />
      <Place x={540} y={318} s={2.3}>
        <Pip mood="happy" arms="down" seed={111}>
          <Anim className="s-tp4-mask" origin={[0, -40]}>
            <Disguise />
          </Anim>
        </Pip>
      </Place>
      <Hand x={540} y={356} size={24} anchor="middle" c={INK_SOFT}>
        the same idea, reworded
      </Hand>

      <Place x={664} y={214}>
        <Anim className="s-tp4-lens">
          <Magnifier x={0} y={0} r={24} angle={50} seed={115} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Self-plagiarism: last year's paper looks back from the mirror.
   ------------------------------------------------------------------ */

const mirrorCss = `
.s-tp5-shine { animation: s-tp5-shine 7s ease-in-out infinite; }
.s-tp5-hopper { animation: s-tp5-hop 7s ease-in-out infinite; }
.s-tp5-q { animation: s-tp5-q 7s ease-in-out infinite; }
@keyframes s-tp5-shine {
  0%, 20% { transform: translateX(-160px); }
  60%, 100% { transform: translateX(170px); }
}
@keyframes s-tp5-hop {
  0%, 60%, 100% { transform: translateY(0); }
  66% { transform: translateY(-7px); }
  72% { transform: translateY(0); }
}
@keyframes s-tp5-q {
  0%, 62% { opacity: 0; transform: translateY(8px); }
  68%, 88% { opacity: 1; transform: translateY(0); }
  94%, 100% { opacity: 0; transform: translateY(8px); }
}
`

function YearSheet({ year, seed }) {
  return (
    <g>
      <Sheet x={-15} y={-36} w={30} h={34} lines={0} fold={7} seed={seed} sw={1.3} />
      <Type x={0} y={-14} size={9} anchor="middle" weight={700}>
        {year}
      </Type>
    </g>
  )
}

export function MirrorScene() {
  const glass = ellipsePath(510, 186, 86, 116)
  return (
    <Scene w={800} h={318} top={26} css={mirrorCss} className="s-tp5" label="A paper character holds up this year's paper in front of a mirror, and its reflection holds up the very same paper from last year">
      <defs>
        <clipPath id="s-tp5-glass">
          <path d={glass} />
        </clipPath>
      </defs>
      <Floor y={334} x1={60} x2={740} seed={120} />

      <Ink d={handLine(470, 296, 446, 334, 121, 0.4) + handLine(550, 296, 574, 334, 122, 0.4)} w={3} c={TONES.brown.deep} />
      <path d={glass} fill="#e3eef4" />
      <g clipPath="url(#s-tp5-glass)">
        <g opacity="0.72">
          <Place x={510} y={300} s={1.95} flip>
            <g className="s-tp5-hopper">
              <Pip mood="proud" arms="hold" seed={123} />
            </g>
          </Place>
          <Place x={510} y={300} s={1.95}>
            <g className="s-tp5-hopper">
              <YearSheet year="2024" seed={124} />
            </g>
          </Place>
        </g>
        <path d={glass} fill={TONES.blue.tint} opacity="0.35" />
        <Anim className="s-tp5-shine">
          <Ink d={handLine(470, 50, 420, 320, 125, 0.2)} c="#ffffff" w={9} o={0.55} scale />
          <Ink d={handLine(496, 50, 446, 320, 126, 0.2)} c="#ffffff" w={4} o={0.5} scale />
        </Anim>
      </g>
      <path d={glass} fill="none" stroke={TONES.brown.mid} strokeWidth={12} />
      <Ink d={handEllipse(510, 186, 93, 123, { seed: 127, amp: 0.5 })} w={1.9} />
      <Ink d={handEllipse(510, 186, 80, 110, { seed: 128, amp: 0.4 })} w={1.4} />

      <Place x={626} y={84}>
        <Anim className="s-tp5-q">
          <Hand x={0} y={0} size={42} weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Shadow x={270} y={336} rx={52} ry={6} />
      <Place x={270} y={334} s={2.1}>
        <g className="s-tp5-hopper">
          <Pip mood="proud" arms="hold" seed={123}>
            <YearSheet year="2025" seed={129} />
          </Pip>
        </g>
      </Place>
      <Hand x={196} y={112} size={22} c={INK_SOFT} rotate={-4}>
        "brand new!"
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Source-based plagiarism: tags delivered to the right crate, the
      wrong crate, and a crate that does not exist.
   ------------------------------------------------------------------ */

const cratesCss = `
.s-tp6-walk { animation: s-tp6-walk 9s ease-in-out infinite; }
.s-tp6-walk .pip-leg-l { animation: s-tp6-step 0.45s ease-in-out infinite alternate; }
.s-tp6-walk .pip-leg-r { animation: s-tp6-step 0.45s ease-in-out infinite alternate-reverse; }
.s-tp6-mark { animation: s-tp6-mark 9s ease-in-out infinite; }
.s-tp6-ghost { animation: s-tp6-ghost 3s ease-in-out infinite; }
@keyframes s-tp6-walk {
  0%, 4% { transform: translateX(0); opacity: 1; }
  34%, 78% { transform: translateX(-40px); opacity: 1; }
  84% { transform: translateX(-40px); opacity: 0; }
  86% { transform: translateX(0); opacity: 0; }
  94%, 100% { transform: translateX(0); opacity: 1; }
}
@keyframes s-tp6-step {
  from { transform: rotate(-12deg); }
  to { transform: rotate(12deg); }
}
@keyframes s-tp6-mark {
  0%, 36% { opacity: 0; transform: scale(0.3); }
  42% { opacity: 1; transform: scale(1.2); }
  46%, 78% { opacity: 1; transform: scale(1); }
  84%, 100% { opacity: 0; transform: scale(0.3); }
}
@keyframes s-tp6-ghost {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
`

/* A citation tag held up over Pip's head (carry pose), in Pip's units. */
function Tag({ label, seed }) {
  const shape = [[-19, -94], [13, -94], [19, -85], [13, -76], [-19, -76]]
  return (
    <g>
      <path d={polyPath(shape)} fill="url(#fill-amber)" />
      <Ink d={handPoly(shape, { seed, amp: 0.2, closed: true })} w={1.2} />
      <Type x={-3} y={-81} size={11} anchor="middle" weight={700}>
        {label}
      </Type>
    </g>
  )
}

function Carrier({ x, mood, label, seed }) {
  return (
    <Place x={x} y={318} s={1.15}>
      <Anim className="s-tp6-walk">
        <Pip mood={mood} arms="carry" seed={seed}>
          <Tag label={label} seed={seed + 1} />
        </Pip>
      </Anim>
    </Place>
  )
}

export function CratesScene() {
  const crates = [
    { x: 60, label: 'paper A', mark: 'tick', walker: 262, tag: 'A', mood: 'happy' },
    { x: 312, label: 'paper B', mark: 'cross', walker: 514, tag: 'A', mood: 'worried' },
  ]
  return (
    <Scene w={800} h={236} top={136} css={cratesCss} className="s-tp6" label="Paper characters deliver citation tags to boxes of papers. One tag reaches the right box and gets a tick, one reaches the wrong box and gets a cross, and one heads for a box that does not exist">
      <Ground y={318} bottom={372} seed={130} tufts={10} pebbles={4} grit={26} />

      {crates.map((crate, i) => (
        <g key={crate.x}>
          <Crate x={crate.x} y={236} w={134} h={82} label={crate.label} seed={131 + i} />
          <Place x={crate.x + 67} y={210}>
            <Anim className="s-tp6-mark" spin>
              {crate.mark === 'tick' ? <Tick x={0} y={0} s={1.5} /> : <Cross x={0} y={0} s={1.3} seed={133 + i} />}
            </Anim>
          </Place>
          <Carrier x={crate.walker} mood={crate.mood} label={`[${crate.tag}]`} seed={135 + i * 4} />
        </g>
      ))}

      <g className="s-tp6-ghost">
        <Ink d={handPoly([[566, 236], [700, 236], [700, 318], [566, 318]], { seed: 140, amp: 0.8, closed: true })} dash="6 7" w={1.8} c={INK_SOFT} />
        <Hand x={633} y={294} size={46} anchor="middle" weight={700} c={INK_SOFT}>
          ?
        </Hand>
      </g>
      <Place x={640} y={210}>
        <Anim className="s-tp6-mark" spin>
          <Hand x={0} y={10} size={30} anchor="middle" weight={700} c={TONES.red.ink}>
            ?!
          </Hand>
        </Anim>
      </Place>
      <Carrier x={766} mood="surprised" label="[?]" seed={142} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Translation and AI: two new ways for a page to change hands.
   ------------------------------------------------------------------ */

const translateCss = `
.s-tp7-flow { animation: s-tp7-flow 1.6s linear infinite; }
.s-tp7-page { animation: s-tp7-page 8s ease-in-out infinite; }
.s-tp7-hand { animation: s-tp7-hand 8s ease-in-out infinite; }
.s-tp7-sign .pip-arm-r { animation: s-tp7-scribble 0.5s ease-in-out infinite alternate; }
@keyframes s-tp7-flow { to { stroke-dashoffset: -24; } }
@keyframes s-tp7-page {
  0%, 8% { transform: translate(-126px, 6px); opacity: 0; }
  14% { transform: translate(-126px, 6px); opacity: 1; }
  46%, 82% { transform: translate(0, 0); opacity: 1; }
  90%, 100% { transform: translate(0, 0); opacity: 0; }
}
@keyframes s-tp7-hand {
  0%, 44% { opacity: 0; }
  52%, 84% { opacity: 1; }
  92%, 100% { opacity: 0; }
}
@keyframes s-tp7-scribble { from { transform: rotate(-6deg); } to { transform: rotate(6deg); } }
`

export function TranslateScene() {
  return (
    <Scene w={800} h={326} top={16} css={translateCss} className="s-tp7" label="On the left, a Hindi book is translated into an English page without any credit. On the right, a robot hands a written page to a paper character, who signs it as its own">
      <Floor y={330} x1={30} x2={770} seed={150} />
      <Ink d={handLine(400, 40, 400, 312, 151, 0.6)} dash="3 9" c={INK_SOFT} w={1.4} />

      <Hand x={200} y={52} size={26} anchor="middle" weight={700}>
        translated
      </Hand>
      <Hand x={600} y={52} size={26} anchor="middle" weight={700}>
        AI-written
      </Hand>

      <OpenBook x={112} y={250} w={150} tone="green" lines={0} seed={152} />
      <Hand x={74} y={232} size={44} anchor="middle" weight={700} c={TONES.green.deep}>
        अ
      </Hand>
      <Hand x={150} y={232} size={40} anchor="middle" weight={700} c={TONES.green.deep}>
        क
      </Hand>
      <Ink d="M130 164Q200 104 262 150" c={INK_SOFT} w={1.8} dash="5 7" className="s-tp7-flow" />
      <Arrow from={[252, 142]} to={[268, 156]} bend={0} seed={153} c={INK_SOFT} head={9} />

      <Shadow x={300} y={332} rx={46} ry={5} />
      <Place x={300} y={330} s={1.95}>
        <Pip mood="grin" arms="hold" look={-1} seed={154}>
          <Sheet x={-13} y={-42} w={26} h={30} lines={0} fold={6} seed={155} sw={1.3} />
          <Type x={0} y={-21} size={11} anchor="middle" weight={700}>
            A
          </Type>
        </Pip>
      </Place>

      <Place x={520} y={330}>
        <Bot x={0} y={0} s={1.4} tone="blue" seed={156} />
      </Place>
      <Type x={520} y={286} size={16} anchor="middle" weight={700}>
        AI
      </Type>

      <Shadow x={690} y={332} rx={48} ry={5} />
      <Place x={690} y={330} s={2} flip>
        <g className="s-tp7-sign">
          <Pip mood="happy" arms="write" look={1.5} seed={157} />
        </g>
      </Place>
      <Place x={640} y={286}>
        <Anim className="s-tp7-page">
          <Sheet x={-22} y={-30} w={44} h={52} lines={3} fold={9} seed={158} sw={1.4} />
          <Anim className="s-tp7-hand">
            <Hand x={0} y={18} size={13} anchor="middle" weight={700} c={TONES.red.ink}>
              by me
            </Hand>
          </Anim>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Accidental plagiarism: the checklist that prevents it.
   ------------------------------------------------------------------ */

const TICKS = 6
const tickCss = Array.from({ length: TICKS }, (_, i) => {
  const start = 8 + i * 8
  return `
.s-tp8 .check-row:nth-child(${i + 1}) .check-tick { animation: s-tp8-tick-${i} 10s ease-in-out infinite; }
@keyframes s-tp8-tick-${i} {
  0%, ${start}% { stroke-dashoffset: 1; opacity: 1; }
  ${start + 5}%, 86% { stroke-dashoffset: 0; opacity: 1; }
  92% { stroke-dashoffset: 0; opacity: 0; }
  96%, 100% { stroke-dashoffset: 1; opacity: 1; }
}`
}).join('\n')

const checkCss = `
${tickCss}
.s-tp8 .pip-arm-r { animation: s-tp8-tap 10s ease-in-out infinite; }
.s-tp8-star { animation: s-tp8-star 10s ease-in-out infinite; }
@keyframes s-tp8-tap {
  0%, 100% { transform: rotate(0deg); }
  10%, 30%, 50%, 70% { transform: rotate(-6deg); }
  20%, 40%, 60% { transform: rotate(3deg); }
}
@keyframes s-tp8-star {
  0%, 62% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  68% { opacity: 1; transform: scale(1.2) rotate(30deg); }
  72%, 86% { opacity: 1; transform: scale(1) rotate(45deg); }
  92%, 100% { opacity: 0; transform: scale(0.3) rotate(60deg); }
}
`

export function CheckScene() {
  return (
    <Scene w={800} h={262} top={116} css={checkCss} className="s-tp8" label="A paper character points at a checklist while ticks appear one by one next to every good habit">
      <Desk y={344} depth={30} seed={160} />
      <Shadow x={425} y={344} rx={130} ry={6} />
      <Checklist x={300} y={152} w={250} items={TICKS} done={TICKS} seed={161} />
      <Place x={582} y={150}>
        <Anim className="s-tp8-star" spin>
          <Sparkle x={0} y={0} s={16} />
        </Anim>
      </Place>

      <Shadow x={178} y={346} rx={54} ry={6} />
      <Place x={178} y={344} s={2.3}>
        <Pip mood="proud" arms="point" seed={162} />
      </Place>

      <Pencil x={572} y={338} length={118} angle={-3} tone="amber" seed={163} />
      <Chai x={742} y={344} s={1.2} seed={164} />
    </Scene>
  )
}
