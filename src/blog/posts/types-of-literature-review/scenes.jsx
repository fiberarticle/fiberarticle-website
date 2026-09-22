import {
  Anim,
  Arrow,
  Box,
  Bulb,
  Cloud,
  Crate,
  Cross,
  Flag,
  Floor,
  Funnel,
  Hand,
  Hourglass,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  OpenBook,
  Oval,
  PAPER,
  PAPER_SHADE,
  Pile,
  Pip,
  Place,
  PushPin,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Spine,
  Stack,
  TEXT_LINE,
  TONES,
  Target,
  Tree,
  Worm,
  ellipsePath,
  handCurve,
  handEllipse,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Why the type matters: three roads to the same answer.
   ------------------------------------------------------------------ */

const routesCss = `
.s-tl1-plane { animation: s-tl1-fly 10s ease-in-out infinite; }
.s-tl1-cart { animation: s-tl1-roll 10s ease-in-out infinite; }
.s-tl1-worm { animation: s-tl1-crawl 16s linear infinite; }
@keyframes s-tl1-fly {
  0% { transform: translate(-223px, 40px) rotate(-22deg); opacity: 0; }
  6% { opacity: 1; }
  16% { transform: translate(-112px, 8px) rotate(-12deg); }
  30% { transform: translate(0, 0) rotate(2deg); }
  44% { transform: translate(114px, 17px) rotate(14deg); }
  58% { transform: translate(229px, 58px) rotate(25deg); opacity: 1; }
  63% { transform: translate(229px, 58px) rotate(25deg); opacity: 0; }
  64%, 100% { transform: translate(-223px, 40px) rotate(-22deg); opacity: 0; }
}
@keyframes s-tl1-roll {
  0% { transform: translateX(-200px); opacity: 0; }
  8% { opacity: 1; }
  62% { transform: translateX(200px); opacity: 1; }
  67% { transform: translateX(200px); opacity: 0; }
  68%, 100% { transform: translateX(-200px); opacity: 0; }
}
@keyframes s-tl1-crawl {
  0% { transform: translate(-200px, 14px); opacity: 0; }
  4% { opacity: 1; }
  16% { transform: translate(-140px, -2px); }
  33% { transform: translate(-70px, 18px); }
  50% { transform: translate(0, 0); }
  66% { transform: translate(70px, 18px); }
  83% { transform: translate(140px, 0); }
  93% { transform: translate(196px, -10px); opacity: 1; }
  96% { transform: translate(200px, -12px); opacity: 0; }
  97%, 100% { transform: translate(-200px, 14px); opacity: 0; }
}
`

function Plane() {
  const body = [[22, 0], [-18, -12], [-10, 0], [-18, 12]]
  return (
    <g>
      <path d={polyPath(body)} fill={PAPER} />
      <path d={polyPath([[22, 0], [-10, 0], [-18, 12]])} fill={PAPER_SHADE} />
      <Ink d={handPoly(body, { seed: 41, amp: 0.3, closed: true })} w={1.5} />
      <Ink d="M21 0L-10 0" w={1.1} />
    </g>
  )
}

function Cart() {
  return (
    <g>
      <Sheet x={-12} y={-46} w={20} h={20} lines={1} fold={5} seed={52} sw={1.2} />
      <Box x={-24} y={-31} w={48} h={24} r={3} fill="url(#fill-amber)" seed={51} />
      <Oval cx={-13} cy={-5} rx={5.5} fill={TONES.grey.mid} seed={53} sw={1.4} />
      <Oval cx={13} cy={-5} rx={5.5} fill={TONES.grey.mid} seed={54} sw={1.4} />
    </g>
  )
}

export function RoutesScene() {
  const sleepers = []
  for (let x = 198; x <= 622; x += 24) sleepers.push(x)
  return (
    <Scene w={800} h={300} top={20} css={routesCss} className="s-tl1" label="From a paper character standing for your question, three routes lead to the same target: a paper plane flying over the top marked scoping, a cart on rails marked systematic, and a bookworm on a winding path marked narrative">
      <Floor y={300} x1={30} x2={770} seed={60} />

      <Ink d="M180 110Q400 20 632 128" dash="3 9" c={INK_SOFT} w={1.4} />
      <Hand x={403} y={46} size={22} anchor="middle" weight={700} c={TONES.blue.deep}>
        scoping
      </Hand>
      <Place x={403} y={69}>
        <Anim className="s-tl1-plane">
          <Plane />
        </Anim>
      </Place>

      {sleepers.map((x) => (
        <rect key={x} x={x - 7} y={193} width={14} height={6} rx={1} fill="url(#wood)" />
      ))}
      <Ink d={handLine(190, 190, 632, 190, 61, 0.4)} w={2.6} />
      <Place x={410} y={190}>
        <Anim className="s-tl1-cart">
          <Cart />
        </Anim>
      </Place>
      <Hand x={528} y={176} size={22} anchor="middle" weight={700} c={TONES.green.deep}>
        systematic
      </Hand>

      <Ink d={handCurve([[190, 276], [260, 260], [330, 280], [400, 262], [470, 280], [540, 262], [612, 248]], { seed: 62, amp: 0.6 })} dash="2 8" c={INK_SOFT} w={1.6} />
      <Place x={400} y={262}>
        <Anim className="s-tl1-worm">
          <Place s={0.85}>
            <Worm seed={63} />
          </Place>
        </Anim>
      </Place>
      <Hand x={546} y={246} size={22} anchor="middle" weight={700} c={TONES.amber.deep}>
        narrative
      </Hand>

      <Target x={694} y={186} r={44} seed={64} />
      <Hand x={694} y={262} size={22} anchor="middle" c={INK_SOFT}>
        answer
      </Hand>

      <Hand x={100} y={170} size={22} anchor="middle" c={INK_SOFT}>
        your question
      </Hand>
      <Shadow x={100} y={302} rx={40} ry={5} />
      <Place x={100} y={300} s={1.7}>
        <Pip mood="happy" arms="point" look={1.5} seed={65} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Narrative review: a guide leads a small group past the sights.
   ------------------------------------------------------------------ */

const tourCss = `
.s-tl2-guide .pip-arm-r { animation: s-tl2-wave 5s ease-in-out infinite; }
.s-tl2-tourist .pip-body { animation: s-tl2-bob 2.4s ease-in-out infinite; animation-delay: var(--d, 0s); }
.s-tl2-spark { animation: s-tl2-spark 5s ease-in-out infinite; }
@keyframes s-tl2-wave {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-12deg); }
  40% { transform: rotate(6deg); }
  60% { transform: rotate(-8deg); }
}
@keyframes s-tl2-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-tl2-spark {
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.4; transform: scale(0.7) rotate(40deg); }
}
`

const TOURISTS = [
  { x: 212, tone: 'pink', delay: 0 },
  { x: 290, tone: 'blue', delay: -0.8 },
  { x: 368, tone: 'green', delay: -1.6 },
]

export function TourScene() {
  return (
    <Scene w={800} h={282} top={40} css={tourCss} className="s-tl2" label="A paper character holding a little flag guides three smaller paper characters past a row of giant books towards an open book on a pedestal">
      <Floor y={300} x1={20} x2={780} seed={70} />

      <Spine x={34} y={300} w={46} h={170} tone="blue" seed={71} />
      <Spine x={80} y={300} w={36} h={136} tone="amber" seed={72} />
      <Spine x={116} y={300} w={40} h={154} tone="green" seed={73} />

      {TOURISTS.map((t, i) => (
        <g key={t.x}>
          <Shadow x={t.x} y={301} rx={28} ry={4} />
          <Place x={t.x} y={300} s={1.25}>
            <g className="s-tl2-tourist" style={{ '--d': `${t.delay}s` }}>
              <Pip mood="happy" arms="down" tone={t.tone} look={1.6} seed={74 + i * 5} />
            </g>
          </Place>
        </g>
      ))}

      <Shadow x={486} y={302} rx={46} ry={6} />
      <Place x={486} y={300} s={2}>
        <g className="s-tl2-guide">
          <Pip mood="grin" arms="wave" look={1.6} seed={90}>
            <Flag x={37} y={-58} h={34} tone="amber" seed={91} />
          </Pip>
        </g>
      </Place>

      <Box x={604} y={246} w={120} h={54} r={3} fill="url(#fill-grey)" seed={92} />
      <OpenBook x={664} y={246} w={112} tone="red" lines={4} seed={93} />
      <Place x={734} y={180}>
        <Anim className="s-tl2-spark" spin>
          <Sparkle x={0} y={0} s={11} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Systematic review: records drop through the funnel; the excluded
      ones are set aside, and a few neat papers come out at the bottom.
   ------------------------------------------------------------------ */

const funnelCss = `
.s-tl3-drop { animation: s-tl3-drop 4.4s ease-in infinite; }
.s-tl3-out { animation: s-tl3-out 4.4s ease-in infinite; }
.s-tl3-cut { animation: s-tl3-cut 5.5s ease-in-out infinite; }
@keyframes s-tl3-drop {
  0%, 100% { transform: translateY(0); opacity: 1; }
  38% { transform: translateY(60px); opacity: 0; }
  39% { transform: translateY(-44px); opacity: 0; }
  62% { transform: translateY(-8px); opacity: 1; }
}
@keyframes s-tl3-out {
  0%, 100% { transform: translateY(0); opacity: 0; }
  20% { transform: translateY(0); opacity: 1; }
  70% { transform: translateY(20px); opacity: 1; }
  84% { transform: translateY(26px); opacity: 0; }
}
@keyframes s-tl3-cut {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  45% { transform: translate(104px, 28px) rotate(20deg); }
  70% { transform: translate(142px, 94px) rotate(34deg); opacity: 1; }
  78% { transform: translate(146px, 100px) rotate(36deg); opacity: 0; }
  79%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
`

const RECORDS = [
  { x: 326, rot: -8 },
  { x: 366, rot: 6 },
  { x: 406, rot: -4 },
  { x: 446, rot: 9 },
]

export function FunnelScene() {
  return (
    <Scene w={800} h={330} top={12} css={funnelCss} className="s-tl3" label="Many papers drop into a big funnel. Papers marked with a red cross are set aside into a box labelled excluded, and a small neat pile labelled included comes out at the bottom">
      <Floor y={330} x1={30} x2={770} seed={100} />

      <Hand x={150} y={74} size={22} anchor="middle" c={INK_SOFT}>
        records found
      </Hand>
      <Arrow from={[228, 72]} to={[312, 66]} bend={-0.15} seed={101} c={INK_SOFT} />
      <Hand x={160} y={176} size={22} anchor="middle" c={INK_SOFT}>
        screened
      </Hand>
      <Arrow from={[216, 170]} to={[300, 158]} bend={-0.12} seed={102} c={INK_SOFT} />

      {RECORDS.map((r, i) => (
        <Place key={r.x} x={r.x} y={46}>
          <Anim className="s-tl3-drop" style={{ animationDelay: `${i * -1.1}s` }}>
            <g transform={`rotate(${r.rot} 14 18)`}>
              <Sheet x={0} y={0} w={28} h={36} lines={2} fold={7} seed={103 + i} sw={1.3} />
            </g>
          </Anim>
        </Place>
      ))}

      <Funnel x={400} y={96} w={240} h={180} tone="green" seed={108} />

      <Place x={386} y={278}>
        <Anim className="s-tl3-out">
          <Sheet x={0} y={0} w={28} h={32} lines={2} fold={7} seed={109} sw={1.3} />
        </Anim>
      </Place>
      <Pile x={400} y={330} w={86} count={3} seed={110} />
      <Hand x={458} y={324} size={22} c={TONES.green.deep} weight={700}>
        included
      </Hand>

      <Place x={506} y={146}>
        <Anim className="s-tl3-cut">
          <Sheet x={0} y={0} w={28} h={34} lines={2} fold={7} seed={111} sw={1.3} />
          <Cross x={14} y={20} s={0.7} seed={112} />
        </Anim>
      </Place>
      <Crate x={600} y={250} w={150} h={80} label="excluded" seed={113} />

      <Shadow x={124} y={332} rx={38} ry={5} />
      <Place x={124} y={330} s={1.6}>
        <Pip mood="focused" arms="point" look={1.6} seed={114} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Meta-analysis: a forest plot fills in, study by study.
   ------------------------------------------------------------------ */

const STUDIES = [
  { y: 104, cx: 340, l: 44, r: 34, s: 10 },
  { y: 138, cx: 358, l: 30, r: 30, s: 15 },
  { y: 172, cx: 300, l: 70, r: 62, s: 8 },
  { y: 206, cx: 372, l: 26, r: 24, s: 14 },
  { y: 240, cx: 334, l: 52, r: 40, s: 11 },
]

const forestCss = `
${STUDIES.map((_, i) => `.s-tl4-row-${i} { animation: s-tl4-row-${i} 11s ease-in-out infinite; }
@keyframes s-tl4-row-${i} {
  0%, ${6 + i * 8}% { opacity: 0; }
  ${10 + i * 8}%, 86% { opacity: 1; }
  92%, 100% { opacity: 0; }
}`).join('\n')}
.s-tl4-diamond { animation: s-tl4-grow 11s ease-in-out infinite; }
.s-tl4 .pip-arm-r { animation: s-tl4-point 11s ease-in-out infinite; }
@keyframes s-tl4-grow {
  0%, 48% { opacity: 0; transform: scaleX(0); }
  54% { opacity: 1; transform: scaleX(1.15); }
  58%, 86% { opacity: 1; transform: scaleX(1); }
  92%, 100% { opacity: 0; transform: scaleX(0); }
}
@keyframes s-tl4-point {
  0%, 50%, 100% { transform: rotate(0deg); }
  56%, 80% { transform: rotate(8deg); }
}
`

export function ForestScene() {
  return (
    <Scene w={800} h={300} top={22} css={forestCss} className="s-tl4" label="A forest plot pinned to the wall: five studies each drawn as a square with a whisker on either side of a dashed no effect line, and a diamond at the bottom for the pooled result, with a paper character pointing at the diamond">
      <Box x={150} y={34} w={440} h={272} fill={PAPER} seed={120} />
      <PushPin x={172} y={46} tone="red" seed={121} />
      <PushPin x={568} y={46} tone="blue" seed={122} />

      <Hand x={400} y={70} size={20} anchor="middle" c={INK_SOFT}>
        no effect
      </Hand>
      <Ink d={handLine(400, 80, 400, 292, 123, 0.3)} dash="5 6" c={INK_SOFT} w={1.4} />

      {STUDIES.map((st, i) => (
        <g key={st.y}>
          <Ink d={handLine(176, st.y, 236, st.y, 124 + i, 0.3)} c={TEXT_LINE} w={2} />
          <g className={`s-tl4-row-${i}`}>
            <Ink d={handLine(st.cx - st.l, st.y, st.cx + st.r, st.y, 130 + i, 0.2)} w={1.7} />
            <Ink d={handLine(st.cx - st.l, st.y - 5, st.cx - st.l, st.y + 5, 140 + i, 0.1) + handLine(st.cx + st.r, st.y - 5, st.cx + st.r, st.y + 5, 145 + i, 0.1)} w={1.5} />
            <rect x={st.cx - st.s / 2} y={st.y - st.s / 2} width={st.s} height={st.s} fill={INK_SOFT} />
          </g>
        </g>
      ))}

      <Anim className="s-tl4-diamond" spin>
        <path d={polyPath([[302, 272], [338, 261], [374, 272], [338, 283]])} fill="url(#fill-amber)" />
        <Ink d={handPoly([[302, 272], [338, 261], [374, 272], [338, 283]], { seed: 150, amp: 0.3, closed: true })} w={1.7} />
      </Anim>
      <Hand x={452} y={280} size={20} c={TONES.amber.deep} weight={700}>
        pooled result
      </Hand>

      <Floor y={306} x1={600} x2={790} seed={151} />
      <Shadow x={694} y={308} rx={42} ry={5} />
      <Place x={694} y={306} s={1.9} flip>
        <Pip mood="happy" arms="point" look={1.6} seed={152} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Scoping review: a balloon ride over the fields, one of them bare.
   ------------------------------------------------------------------ */

const balloonCss = `
.s-tl5-ride { animation: s-tl5-ride 12s ease-in-out infinite; }
.s-tl5-cloud-a { animation: s-tl5-drift 18s ease-in-out infinite; }
.s-tl5-cloud-b { animation: s-tl5-drift 22s ease-in-out infinite reverse; }
.s-tl5-ask { animation: s-tl5-ask 3s ease-in-out infinite; }
@keyframes s-tl5-ride {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-26px, -6px); }
  50% { transform: translate(0, -10px); }
  75% { transform: translate(26px, -4px); }
}
@keyframes s-tl5-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(34px); }
}
@keyframes s-tl5-ask {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

const FIELDS = [
  { pts: [[0, 262], [150, 258], [160, 340], [0, 340]], tone: 'green' },
  { pts: [[150, 258], [300, 264], [290, 340], [160, 340]], tone: 'amber' },
  { pts: [[300, 264], [430, 258], [440, 340], [290, 340]], tone: null },
  { pts: [[430, 258], [570, 262], [560, 340], [440, 340]], tone: 'blue' },
  { pts: [[570, 262], [700, 258], [710, 340], [560, 340]], tone: 'green' },
  { pts: [[700, 258], [800, 262], [800, 340], [710, 340]], tone: 'amber' },
]

function Envelope() {
  const stripes = ['amber', null, 'pink', null, 'amber']
  return (
    <g>
      <defs>
        <clipPath id="s-tl5-env">
          <path d={ellipsePath(390, 96, 64, 74)} />
        </clipPath>
      </defs>
      <g clipPath="url(#s-tl5-env)">
        {stripes.map((tone, i) => (
          <rect key={i} x={326 + i * 25.6} y={20} width={25.7} height={154} fill={tone ? `url(#fill-${tone})` : PAPER} />
        ))}
        <path d={ellipsePath(414, 108, 46, 70)} fill="url(#ink-hatch-light)" />
      </g>
      {[339, 364, 416, 441].map((x) => (
        <Ink key={x} d={`M390 23Q${x} 96 390 169`} w={1} c={INK_SOFT} o={0.8} />
      ))}
      <Ink d={handEllipse(390, 96, 64, 74, { seed: 160, amp: 0.5 })} w={1.9} />
      <path d={polyPath([[362, 160], [418, 160], [408, 180], [372, 180]])} fill="url(#fill-red)" />
      <Ink d={handPoly([[362, 160], [418, 160], [408, 180], [372, 180]], { seed: 161, amp: 0.3, closed: true })} w={1.5} />
    </g>
  )
}

export function BalloonScene() {
  return (
    <Scene w={800} h={340} css={balloonCss} className="s-tl5" label="A paper character floats over a patchwork of fields in a striped hot air balloon, looking down through a magnifying glass. Most fields are planted, but one is bare and marked with a small flag and a question mark">
      <Place x={140} y={70}>
        <Anim className="s-tl5-cloud-a">
          <Cloud x={0} y={0} s={0.7} seed={162} />
        </Anim>
      </Place>
      <Place x={670} y={120}>
        <Anim className="s-tl5-cloud-b">
          <Cloud x={0} y={0} s={0.6} seed={163} />
        </Anim>
      </Place>

      {FIELDS.map((field, i) => (
        <g key={i}>
          <path d={polyPath(field.pts)} fill={field.tone ? `url(#fill-${field.tone})` : PAPER} />
          {field.tone ? (
            <Ink
              d={[0, 1, 2].map((k) => handLine(field.pts[0][0] + 22 + k * 40, 330, field.pts[0][0] + 42 + k * 40, 272, 170 + i * 3 + k, 0.4)).join('')}
              c={TONES[field.tone].deep}
              w={1.2}
              o={0.45}
            />
          ) : null}
          <Ink d={handPoly(field.pts, { seed: 180 + i, amp: 0.5, closed: true })} w={1.5} c={field.tone ? INK : INK_SOFT} dash={field.tone ? undefined : '5 6'} />
        </g>
      ))}
      <Tree x={82} y={306} s={0.32} seed={190} />
      <Tree x={636} y={304} s={0.3} seed={191} />
      <Flag x={352} y={322} h={40} tone="red" seed={192} />
      <Place x={404} y={302}>
        <Anim className="s-tl5-ask">
          <Hand x={0} y={0} size={28} weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Anim className="s-tl5-ride">
        <Envelope />
        <Ink d={handLine(372, 180, 370, 206, 193, 0.2) + handLine(408, 180, 410, 206, 194, 0.2)} w={1.3} />
        <Place x={390} y={236} s={0.8}>
          <Pip mood="focused" arms="point" look={1.5} seed={195}>
            <Magnifier x={58} y={-30} r={9} angle={235} seed={196} />
          </Pip>
        </Place>
        <Box x={364} y={206} w={52} h={32} r={4} fill="url(#wood)" seed={197} />
        <Ink d={handLine(366, 216, 414, 216, 198, 0.3) + handLine(366, 227, 414, 227, 199, 0.3)} w={1} c={TONES.brown.deep} />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Umbrella review: one cover over several systematic reviews.
   ------------------------------------------------------------------ */

const umbrellaCss = `
.s-tl6-rain { animation: s-tl6-fall 0.6s linear infinite; }
.s-tl6-pip .pip-body { animation: s-tl6-sway 6s ease-in-out infinite; }
@keyframes s-tl6-fall {
  from { transform: translateY(0); }
  to { transform: translateY(44px); }
}
@keyframes s-tl6-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-2.5deg); }
}
`

function Umbrella() {
  const cx = 37
  const canopy =
    `M${cx - 66} -104Q${cx - 60} -142 ${cx} -148Q${cx + 60} -142 ${cx + 66} -104` +
    `Q${cx + 55} -112 ${cx + 44} -104Q${cx + 33} -112 ${cx + 22} -104Q${cx + 11} -112 ${cx} -104` +
    `Q${cx - 11} -112 ${cx - 22} -104Q${cx - 33} -112 ${cx - 44} -104Q${cx - 55} -112 ${cx - 66} -104Z`
  let ribs = ''
  for (let k = -2; k <= 2; k++) {
    const tx = cx + k * 22
    ribs += `M${cx} -148Q${cx + k * 14} -130 ${tx} -104`
  }
  return (
    <g>
      <path d={canopy} fill="url(#fill-blue)" />
      <path d={`M${cx} -148Q${cx + 60} -142 ${cx + 66} -104L${cx} -104Z`} fill="url(#ink-hatch-light)" />
      <Ink d={canopy} w={1.8} />
      <Ink d={ribs} w={1} c={TONES.blue.deep} />
      <Ink d={`M${cx} -148L${cx} -155`} w={2} />
      <Ink d={`M${cx} -104L${cx} -58Q${cx} -50 ${cx - 6} -51`} w={2.2} />
    </g>
  )
}

function ReviewSheet({ x, seed }) {
  return (
    <g>
      <Sheet x={x} y={270} w={38} h={50} lines={1} fold={8} seed={seed} sw={1.4} />
      <path d={polyPath([[x + 8, 290], [x + 30, 290], [x + 22, 302], [x + 16, 302]])} fill="url(#fill-green)" />
      <Ink d={handPoly([[x + 8, 290], [x + 30, 290], [x + 22, 302], [x + 16, 302]], { seed: seed + 1, amp: 0.2, closed: true })} w={1.1} />
      <Ink d={`M${x + 19} 302V310`} w={1.4} />
    </g>
  )
}

export function UmbrellaScene() {
  const drops = []
  const columns = []
  for (let x = 40; x <= 296; x += 28) columns.push(x)
  for (let x = 612; x <= 772; x += 28) columns.push(x)
  columns.forEach((x, c) => {
    for (let y = -80; y <= 330; y += 44) {
      const jitter = ((c * 7 + y) % 13) - 6
      drops.push(`M${x + jitter} ${y + (c % 2) * 22}l-4 14`)
    }
  })
  return (
    <Scene w={800} h={320} top={10} css={umbrellaCss} className="s-tl6" label="A paper character holds a blue umbrella over three small papers, each marked with a funnel for a systematic review, while rain falls on either side">
      <defs>
        <clipPath id="s-tl6-rain-area">
          <rect x={0} y={10} width={312} height={308} />
          <rect x={600} y={10} width={200} height={308} />
        </clipPath>
      </defs>
      <g clipPath="url(#s-tl6-rain-area)">
        <g className="s-tl6-rain">
          <Ink d={drops.join('')} c="#8fb3dc" w={1.4} />
        </g>
      </g>
      <Ink d={[60, 150, 238, 628, 716].map((x) => `M${x - 5} 318l3 -4l2 4l3 -4`).join('')} c="#8fb3dc" w={1.3} />

      <Floor y={320} x1={20} x2={780} seed={200} />
      {[440, 486, 532].map((x, i) => (
        <ReviewSheet key={x} x={x} seed={201 + i * 3} />
      ))}

      <Shadow x={380} y={322} rx={46} ry={6} />
      <Place x={380} y={320} s={2}>
        <g className="s-tl6-pip">
          <Pip mood="happy" arms="wave" look={1.2} seed={210}>
            <Umbrella />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. How to choose: weighing time against rigour.
   ------------------------------------------------------------------ */

const choiceCss = `
.s-tl7 .scale-beam { animation: s-tl7-weigh 10s ease-in-out infinite; }
.s-tl7-idea { animation: s-tl7-idea 10s ease-in-out infinite; }
@keyframes s-tl7-weigh {
  0%, 60%, 100% { transform: rotate(0deg); }
  16% { transform: rotate(-7deg); }
  34% { transform: rotate(6deg); }
  50% { transform: rotate(-2deg); }
}
@keyframes s-tl7-idea {
  0%, 56% { opacity: 0; transform: scale(0.3); }
  62% { opacity: 1; transform: scale(1.15); }
  66%, 90% { opacity: 1; transform: scale(1); }
  96%, 100% { opacity: 0; transform: scale(0.3); }
}
`

export function ChoiceScene() {
  return (
    <Scene w={800} h={292} top={40} css={choiceCss} className="s-tl7" label="A balance scale weighs an hourglass marked time against a stack of papers marked rigour, while a paper character thinks it over until a light bulb appears">
      <Floor y={320} x1={40} x2={760} seed={220} />
      <Scale
        x={360}
        y={320}
        s={1.55}
        seed={221}
        left={<Hourglass x={239} y={190} s={0.72} seed={222} />}
        right={<Stack x={481} y={214} w={24} h={32} count={3} spread={8} seed={223} />}
      />
      <Hand x={239} y={292} size={24} anchor="middle" weight={700} c={TONES.amber.deep}>
        time
      </Hand>
      <Hand x={481} y={292} size={24} anchor="middle" weight={700} c={TONES.green.deep}>
        rigour
      </Hand>

      <Place x={652} y={150}>
        <Anim className="s-tl7-idea" spin>
          <Bulb x={0} y={0} s={0.85} seed={224} />
        </Anim>
      </Place>
      <Shadow x={652} y={322} rx={44} ry={6} />
      <Place x={652} y={320} s={1.9}>
        <Pip mood="focused" arms="think" look={-1.6} seed={225} />
      </Place>
    </Scene>
  )
}
