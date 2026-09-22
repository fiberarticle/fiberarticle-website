import {
  Anim,
  Chai,
  Crate,
  Desk,
  Flag,
  Floor,
  Funnel,
  Hand,
  Hourglass,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Motion,
  OpenBook,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sprout,
  TONES,
  Target,
  Tick,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  laptopScreen,
  polyPath,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Why the topic matters: three signs pointing three ways, and the
      sand running out.
   ------------------------------------------------------------------ */

const signCss = `
.s-ct1-board { animation: s-ct1-sway 5s ease-in-out infinite; }
.s-ct1-q { animation: s-ct1-q 8s ease-in-out infinite; }
.s-ct1 .sand-top { transform-box: fill-box; transform-origin: 50% 100%; animation: s-ct1-drain 8s linear infinite; }
.s-ct1 .sand-bottom { transform-box: fill-box; transform-origin: 50% 100%; animation: s-ct1-fill 8s linear infinite; }
.s-ct1 .pip-body { animation: s-ct1-look 8s ease-in-out infinite; }
@keyframes s-ct1-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(2.5deg); }
}
@keyframes s-ct1-q {
  0%, 30% { opacity: 0; transform: translateY(8px) scale(0.6); }
  36%, 70% { opacity: 1; transform: translateY(0) scale(1); }
  78%, 100% { opacity: 0; transform: translateY(8px) scale(0.6); }
}
@keyframes s-ct1-drain {
  0% { transform: scaleY(1); }
  92% { transform: scaleY(0.12); }
  100% { transform: scaleY(1); }
}
@keyframes s-ct1-fill {
  0% { transform: scaleY(0.25); }
  92% { transform: scaleY(1); }
  100% { transform: scaleY(0.25); }
}
@keyframes s-ct1-look {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  60% { transform: rotate(3deg); }
}
`

const BOARDS = [
  { y: 118, label: 'AI', tone: 'amber' },
  { y: 162, label: 'IoT', tone: 'green' },
  { y: 206, label: 'cloud', tone: 'blue' },
]

export function SignpostScene() {
  return (
    <Scene w={800} h={270} top={70} css={signCss} className="s-ct1" label="A worried paper character looks up at a signpost with three arrows marked AI, IoT and cloud, while an hourglass beside it runs down">
      <Floor y={310} x1={60} x2={740} seed={101} />
      <rect x={426} y={100} width={9} height={211} fill="url(#wood)" />
      <Ink d={handPoly([[426, 100], [435, 100], [435, 311], [426, 311]], { seed: 102, amp: 0.4, closed: true })} w={1.6} />
      {BOARDS.map((board, i) => {
        const pts = [[438, board.y], [556, board.y], [578, board.y + 17], [556, board.y + 34], [438, board.y + 34]]
        return (
          <Anim key={board.label} className="s-ct1-board" origin={[431, board.y + 17]} style={{ animationDelay: `${-i * 1.3}s` }}>
            <path d={polyPath(pts)} fill={`url(#fill-${board.tone})`} />
            <Ink d={handPoly(pts, { seed: 103 + i, amp: 0.4, closed: true })} w={1.7} />
            <Hand x={500} y={board.y + 25} size={22} anchor="middle" weight={700}>
              {board.label}
            </Hand>
          </Anim>
        )
      })}

      <Shadow x={250} y={312} rx={52} ry={6} />
      <Place x={250} y={310} s={2.2}>
        <Pip mood="worried" arms="think" look={1.6} seed={108} />
      </Place>
      <Place x={214} y={126}>
        <Anim className="s-ct1-q" origin={[0, 0]}>
          <Hand x={0} y={0} size={38} weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Hourglass x={680} y={272} s={1.25} seed={109} />
      <Ink d="M680 272V300" w={1} c={TONES.amber.deep} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Start with what pulls you: ideas drift toward a magnet.
   ------------------------------------------------------------------ */

const magnetCss = `
.s-ct2-drift { animation: s-ct2-drift 9s ease-in infinite; }
.s-ct2-field { animation: s-ct2-field 1.8s ease-in-out infinite; }
@keyframes s-ct2-drift {
  0%, 8% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  52% { transform: translate(var(--dx), var(--dy)) rotate(-12deg); opacity: 1; }
  60% { transform: translate(var(--dx), var(--dy)) rotate(-12deg); opacity: 0; }
  61% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  72%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
}
@keyframes s-ct2-field {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
`

/* Held low in front of Pip, below its face, opening toward the ideas. */
function Magnet() {
  const shape = 'M322 246H282A31 31 0 0 0 282 308H322V290H282A13 13 0 0 1 282 264H322Z'
  return (
    <g>
      <path d={shape} fill="url(#fill-red)" />
      <path d="M304 246h18v18h-18ZM304 290h18v18h-18Z" fill={TONES.grey.mid} />
      <Ink d={shape} w={1.9} />
      <Ink d="M304 246v18M304 290v18" w={1.4} />
    </g>
  )
}

function Eye({ x, y }) {
  const lid = `M${x - 26} ${y}Q${x} ${y - 20} ${x + 26} ${y}Q${x} ${y + 20} ${x - 26} ${y}Z`
  return (
    <g>
      <path d={lid} fill={PAPER} />
      <path d={ellipsePath(x, y, 9, 9)} fill="url(#fill-blue)" />
      <circle cx={x} cy={y} r={4} fill={INK} />
      <circle cx={x - 2} cy={y - 2} r={1.4} fill="#ffffff" />
      <Ink d={lid} w={1.7} />
    </g>
  )
}

const PULLED = [
  { x: 560, y: 196, kind: 'eye', delay: 0 },
  { x: 690, y: 262, kind: 'book', delay: -3 },
  { x: 580, y: 318, kind: 'sprout', delay: -6 },
]

export function MagnetScene() {
  return (
    <Scene w={800} h={260} top={100} css={magnetCss} className="s-ct2" label="A paper character holds a big red magnet that pulls real-life ideas toward it: an eye from an eye camp, a book from a course and a sprout from a farm">
      <Floor y={340} x1={60} x2={760} seed={111} />
      <Shadow x={214} y={342} rx={52} ry={6} />
      <Place x={214} y={340} s={2.2}>
        <Pip mood="happy" arms="hold" look={1.8} seed={112} />
      </Place>
      <Magnet />
      <g className="s-ct2-field">
        <Motion x={338} y={277} angle={0} count={3} length={20} gap={10} seed={113} c={TONES.red.ink} w={1.4} />
      </g>

      {PULLED.map((item) => (
        <Anim
          key={item.kind}
          className="s-ct2-drift"
          origin={[item.x, item.y]}
          style={{ '--dx': `${352 - item.x}px`, '--dy': `${278 - item.y}px`, animationDelay: `${item.delay}s` }}
        >
          {item.kind === 'eye' ? <Eye x={item.x} y={item.y} /> : null}
          {item.kind === 'book' ? <OpenBook x={item.x} y={item.y + 20} w={62} tone="blue" lines={3} seed={114} /> : null}
          {item.kind === 'sprout' ? (
            <g>
              <path d={`M${item.x - 22} ${item.y + 4}h44l-6 18h-32Z`} fill="url(#fill-red)" />
              <Ink d={handPoly([[item.x - 22, item.y + 4], [item.x + 22, item.y + 4], [item.x + 16, item.y + 22], [item.x - 16, item.y + 22]], { seed: 115, amp: 0.3, closed: true })} w={1.5} />
              <Sprout x={item.x} y={item.y + 4} s={1.3} seed={116} />
            </g>
          ) : null}
        </Anim>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Run it through filters: many ideas go in, one comes out.
   ------------------------------------------------------------------ */

const funnelCss = `
.s-ct3-in { animation: s-ct3-in 9s ease-in infinite; }
.s-ct3-out { animation: s-ct3-out 9s ease-in-out infinite; }
@keyframes s-ct3-in {
  0% { transform: translateY(-40px); opacity: 0; }
  6% { opacity: 1; }
  30% { transform: translateY(70px); opacity: 1; }
  36%, 100% { transform: translateY(84px); opacity: 0; }
}
@keyframes s-ct3-out {
  0%, 44% { transform: translate(-160px, -40px) rotate(-30deg); opacity: 0; }
  48% { transform: translate(-160px, -40px) rotate(-30deg); opacity: 1; }
  56% { transform: translate(-80px, -70px) rotate(-12deg); }
  66%, 88% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  93%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
`

const FILTERS = [
  { y: 102, label: 'interest', side: 'left' },
  { y: 132, label: 'data', side: 'right' },
  { y: 162, label: 'time', side: 'left' },
  { y: 188, label: 'guide', side: 'right' },
]

/* A crumpled sheet: a lumpy outline and a few creases, no face-like marks. */
function PaperBall({ x, y, seed }) {
  const lumps = [[-12, 1], [-9, -8], [-1, -12], [8, -9], [12, -1], [9, 8], [0, 11], [-8, 9]].map(([dx, dy]) => [x + dx, y + dy])
  return (
    <g>
      <path d={polyPath(lumps)} fill={PAPER} />
      <path d={polyPath([[x + 2, y - 11], [x + 12, y - 1], [x + 9, y + 8], [x + 2, y + 3]])} fill={TONES.grey.tint} />
      <Ink d={handPoly(lumps, { seed, amp: 0.6, closed: true })} w={1.4} />
      <Ink d={`M${x - 4} ${y - 11}L${x + 2} ${y + 3}L${x - 6} ${y + 9}M${x + 2} ${y + 3}L${x + 11} ${y - 2}`} w={1} c={INK_SOFT} />
    </g>
  )
}

export function FunnelScene() {
  const halfAt = (y) => 110 - (110 - 26) * ((y - 70) / 125)
  return (
    <Scene w={800} h={344} top={20} css={funnelCss} className="s-ct3" label="Idea cards drop into a funnel with filter lines marked interest, data, time and guide, and a single card comes out of the bottom into a paper character's hands, while rejected ideas lie crumpled on the floor">
      <Funnel x={400} y={70} w={220} h={190} tone="blue" seed={121} />
      {FILTERS.map((f, i) => {
        const hw = halfAt(f.y) - 6
        return (
          <g key={f.label}>
            <Ink d={handLine(400 - hw, f.y, 400 + hw, f.y, 122 + i, 0.4)} dash="5 5" w={1.4} c={TONES.blue.deep} />
            <Hand x={f.side === 'left' ? 400 - hw - 14 : 400 + hw + 14} y={f.y + 7} size={20} anchor={f.side === 'left' ? 'end' : 'start'} weight={700} c={INK_SOFT}>
              {f.label}
            </Hand>
          </g>
        )
      })}

      {[
        { x: 350, delay: 0, tone: 'paper' },
        { x: 404, delay: -1.5, tone: 'pink' },
        { x: 452, delay: -3, tone: 'green' },
      ].map((card, i) => (
        <Place key={card.x} x={card.x} y={24}>
          <Anim className="s-ct3-in" style={{ animationDelay: `${card.delay}s`, opacity: 0 }}>
            <Sheet x={-15} y={-18} w={30} h={36} lines={2} fold={7} seed={125 + i} sw={1.3} tone={card.tone} />
          </Anim>
        </Place>
      ))}

      <Floor y={350} x1={80} x2={720} seed={128} />
      <PaperBall x={176} y={340} seed={129} />
      <PaperBall x={204} y={342} seed={130} />
      <PaperBall x={232} y={340} seed={131} />
      <Hand x={204} y={312} size={20} anchor="middle" c={INK_SOFT}>
        not now
      </Hand>

      <Shadow x={560} y={352} rx={46} ry={5} />
      <Place x={560} y={350} s={1.8}>
        <Pip mood="grin" arms="hold" look={-1} seed={132} />
      </Place>
      <Place x={560} y={304}>
        <Anim className="s-ct3-out" origin={[0, 0]}>
          <Sheet x={-16} y={-20} w={32} h={40} lines={3} fold={8} seed={133} sw={1.4} tone="amber" />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Narrow it down: rings from a field to a topic, and a dart in the centre.
   ------------------------------------------------------------------ */

const targetCss = `
.s-ct4-dart { animation: s-ct4-throw 9s ease-out infinite; }
.s-ct4-ring { animation: s-ct4-ring 9s ease-out infinite; }
.s-ct4 .pip-arm-r { animation: s-ct4-arm 9s ease-in-out infinite; }
@keyframes s-ct4-throw {
  0%, 10% { transform: translate(-150px, 12px) rotate(-8deg); opacity: 0; }
  12% { transform: translate(-150px, 12px) rotate(-8deg); opacity: 1; }
  22% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: rotate(4deg); }
  28% { transform: rotate(-2.5deg); }
  31%, 88% { transform: rotate(0deg); opacity: 1; }
  93%, 100% { transform: translate(-150px, 12px) rotate(-8deg); opacity: 0; }
}
@keyframes s-ct4-ring {
  0%, 21% { transform: scale(1); opacity: 0; }
  23% { transform: scale(1); opacity: 0.9; }
  40%, 100% { transform: scale(2.6); opacity: 0; }
}
@keyframes s-ct4-arm {
  0%, 4%, 18%, 100% { transform: rotate(0deg); }
  8% { transform: rotate(-24deg); }
  12% { transform: rotate(14deg); }
}
`

const RINGS = [
  { label: 'AI', y: 102, to: [512, 133] },
  { label: 'healthcare', y: 150, to: [492, 172] },
  { label: 'eye care', y: 198, to: [460, 196] },
  { label: 'screening', y: 246, to: [433, 191] },
]

function Dart() {
  return (
    <g>
      <Ink d={handLine(-60, 0, -2, 0, 141, 0.2)} w={2.4} c={TONES.brown.deep} />
      <path d="M0 0L-10 -4L-10 4Z" fill={TONES.grey.deep} />
      <path d="M-60 0L-70 -9L-64 0L-70 9Z" fill="url(#fill-amber)" />
      <Ink d="M-60 0L-70 -9L-64 0L-70 9Z" w={1.2} />
    </g>
  )
}

export function TargetScene() {
  return (
    <Scene w={800} h={300} top={50} css={targetCss} className="s-ct4" label="A target whose rings are labelled AI, healthcare, eye care and screening, with a dart thrown by a paper character landing in the centre">
      <Ink d={handLine(386, 290, 360, 340, 142, 0.4) + handLine(474, 290, 500, 340, 143, 0.4)} w={3} c={TONES.brown.deep} />
      <Target x={430} y={190} r={120} seed={144} />
      <Place x={432} y={190}>
        <Anim className="s-ct4-ring" spin style={{ opacity: 0 }}>
          <circle r={14} fill="none" stroke={TONES.red.ink} strokeWidth={2} vectorEffect="non-scaling-stroke" />
        </Anim>
      </Place>

      {RINGS.map((ring) => (
        <g key={ring.label}>
          <Ink d={`M586 ${ring.y - 6}Q540 ${ring.y - 6} ${ring.to[0]} ${ring.to[1]}`} dash="3 5" w={1.3} c={INK_SOFT} />
          <circle cx={ring.to[0]} cy={ring.to[1]} r={2.6} fill={INK} />
          <Hand x={594} y={ring.y} size={22} weight={700} c={INK}>
            {ring.label}
          </Hand>
        </g>
      ))}

      <Place x={432} y={190}>
        <Anim className="s-ct4-dart" origin={[0, 0]}>
          <Dart />
        </Anim>
      </Place>

      <Floor y={340} x1={60} x2={740} seed={145} />
      <Shadow x={150} y={342} rx={52} ry={6} />
      <Place x={150} y={340} s={2.2}>
        <Pip mood="focused" arms="wave" look={1.8} seed={146} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The one-hour test: search results fill the screen as the sand runs.
   ------------------------------------------------------------------ */

const [SX, SY, SW, SH] = laptopScreen(420, 320, 240)
const RESULT_ROWS = [0, 1, 2, 3]

const searchCss = `
.s-ct5-row { animation: s-ct5-row 10s ease-out infinite; }
.s-ct5 .sand-top { transform-box: fill-box; transform-origin: 50% 100%; animation: s-ct5-drain 10s linear infinite; }
.s-ct5 .sand-bottom { transform-box: fill-box; transform-origin: 50% 100%; animation: s-ct5-fill 10s linear infinite; }
${RESULT_ROWS.map(
  (i) => `.s-ct5-row-${i} { animation-name: s-ct5-row-${i}; }
@keyframes s-ct5-row-${i} {
  0%, ${10 + i * 14}% { opacity: 0; transform: translateX(-8px); }
  ${16 + i * 14}%, 86% { opacity: 1; transform: translateX(0); }
  92%, 100% { opacity: 0; transform: translateX(0); }
}`,
).join('\n')}
@keyframes s-ct5-drain {
  0% { transform: scaleY(1); }
  92% { transform: scaleY(0.12); }
  100% { transform: scaleY(1); }
}
@keyframes s-ct5-fill {
  0% { transform: scaleY(0.25); }
  92% { transform: scaleY(1); }
  100% { transform: scaleY(0.25); }
}
`

export function SearchScene() {
  return (
    <Scene w={800} h={250} top={100} css={searchCss} className="s-ct5" label="A paper character points at a laptop where search results appear one by one, while an hourglass labelled one hour runs down">
      <Desk y={320} depth={24} seed={151} />
      <Laptop x={420} y={320} w={240} seed={152}>
        <rect x={SX + 10} y={SY + 8} width={SW - 20} height={15} rx={7} fill="#ffffff" />
        <Ink d={handPoly([[SX + 10, SY + 8], [SX + SW - 10, SY + 8], [SX + SW - 10, SY + 23], [SX + 10, SY + 23]], { seed: 153, amp: 0.2, closed: true })} w={1.1} />
        <Ink d={handEllipse(SX + 20, SY + 15, 3.4, 3.4, { seed: 154, amp: 0.2 }) + `M${SX + 22.5} ${SY + 17.5}l3 3`} w={1.1} />
        <Ink d={handLine(SX + 30, SY + 15.5, SX + 96, SY + 15.5, 155, 0.2)} w={1.4} c={INK_SOFT} />
        {RESULT_ROWS.map((i) => {
          const ry = SY + 34 + i * 15
          return (
            <g key={i} className={`s-ct5-row s-ct5-row-${i}`}>
              <rect x={SX + 12} y={ry - 4} width={7} height={7} fill={`url(#fill-${['amber', 'green', 'blue', 'pink'][i]})`} />
              <Ink d={handLine(SX + 24, ry - 1, SX + 24 + (SW - 50) * (0.9 - i * 0.12), ry - 1, 156 + i, 0.2)} w={1.6} c={TONES.blue.deep} />
              <Ink d={handLine(SX + 24, ry + 4, SX + 24 + (SW - 70) * (0.7 + (i % 2) * 0.15), ry + 4, 160 + i, 0.2)} w={1.1} c={INK_SOFT} o={0.6} />
            </g>
          )
        })}
      </Laptop>

      <Hourglass x={630} y={268} s={1.3} seed={165} />
      <Ink d="M630 268V296" w={1} c={TONES.amber.deep} />
      <Hand x={630} y={214} size={22} anchor="middle" weight={700} c={INK_SOFT}>
        1 hour
      </Hand>

      <Shadow x={214} y={322} rx={48} ry={5} />
      <Place x={214} y={320} s={2.1}>
        <Pip mood="focused" arms="point" look={1.8} seed={166} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Talk to your guide: three one-page options, and one gets a tick.
   ------------------------------------------------------------------ */

const guideCss = `
.s-ct6-tick { animation: s-ct6-tick 9s ease-in-out infinite; }
.s-ct6-guide .pip-arm-r { animation: s-ct6-point 9s ease-in-out infinite; }
.s-ct6-option { animation: s-ct6-lift 9s ease-in-out infinite; }
@keyframes s-ct6-tick {
  0%, 46% { opacity: 0; transform: scale(0.3); }
  52% { opacity: 1; transform: scale(1.2); }
  56%, 86% { opacity: 1; transform: scale(1); }
  92%, 100% { opacity: 0; transform: scale(0.3); }
}
@keyframes s-ct6-point {
  0%, 100% { transform: rotate(0deg); }
  15%, 22% { transform: rotate(-10deg); }
  32%, 40% { transform: rotate(8deg); }
  48%, 86% { transform: rotate(-2deg); }
}
@keyframes s-ct6-lift {
  0%, 44%, 90%, 100% { transform: translateY(0); }
  50%, 84% { transform: translateY(-8px); }
}
`

export function GuideScene() {
  const sheets = [
    { x: 330, r: -6, tone: 'paper' },
    { x: 404, r: 0, tone: 'amber' },
    { x: 478, r: 6, tone: 'paper' },
  ]
  return (
    <Scene w={800} h={250} top={96} css={guideCss} className="s-ct6" label="A student paper character and a guide in glasses look at three one-page topic options on a desk; the guide points and the middle page gets a tick">
      <Desk y={320} depth={24} seed={171} />
      {sheets.map((sheet, i) => {
        const card = (
          <g transform={`rotate(${sheet.r} ${sheet.x} 284)`}>
            <Sheet x={sheet.x - 28} y={246} w={56} h={74} lines={5} fold={11} seed={172 + i} sw={1.5} tone={sheet.tone} />
          </g>
        )
        return i === 1 ? (
          <Anim key={sheet.x} className="s-ct6-option">
            {card}
          </Anim>
        ) : (
          <g key={sheet.x}>{card}</g>
        )
      })}
      <Place x={404} y={224}>
        <Anim className="s-ct6-tick" spin>
          <Tick x={0} y={0} s={1.5} />
        </Anim>
      </Place>

      <Chai x={268} y={320} s={1.05} seed={176} />

      <Shadow x={180} y={322} rx={48} ry={5} />
      <Place x={180} y={320} s={2.1}>
        <Pip mood="happy" arms="hold" tone="amber" look={1.8} seed={177} />
      </Place>

      <Shadow x={620} y={322} rx={52} ry={6} />
      <Place x={620} y={320} s={2.3} flip>
        <g className="s-ct6-guide">
          <Pip mood="happy" arms="point" tone="blue" glasses look={0.5} seed={178} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Warning signs: red flags planted in a trendy topic.
   ------------------------------------------------------------------ */

const flagsCss = `
.s-ct7-alert { animation: s-ct7-alert 8s ease-in-out infinite; }
.s-ct7-pip { animation: s-ct7-back 8s ease-in-out infinite; }
@keyframes s-ct7-alert {
  0%, 30% { opacity: 0; transform: translateY(6px) scale(0.6); }
  36% { opacity: 1; transform: translateY(-3px) scale(1.15); }
  40%, 70% { opacity: 1; transform: translateY(0) scale(1); }
  78%, 100% { opacity: 0; transform: translateY(6px) scale(0.6); }
}
@keyframes s-ct7-back {
  0%, 30%, 100% { transform: translateX(0); }
  38%, 72% { transform: translateX(-12px); }
}
`

export function FlagsScene() {
  return (
    <Scene w={800} h={250} top={90} css={flagsCss} className="s-ct7" label="A surprised paper character steps back from a box labelled trendy topic, which has three red flags planted in it">
      <Floor y={320} x1={60} x2={740} seed={181} />
      <Flag x={462} y={258} h={86} tone="red" seed={182} />
      <Flag x={530} y={258} h={104} tone="red" seed={183} />
      <Flag x={598} y={258} h={78} tone="red" seed={184} />
      <Crate x={420} y={250} w={220} h={70} label="trendy topic" seed={185} />

      <Shadow x={240} y={322} rx={50} ry={6} />
      <Place x={240} y={320} s={2.2}>
        <Anim className="s-ct7-pip">
          <Pip mood="surprised" arms="shrug" look={1.8} seed={186} />
        </Anim>
      </Place>
      <Place x={292} y={146}>
        <Anim className="s-ct7-alert" origin={[0, 0]} style={{ opacity: 0 }}>
          <path d="M-3.5 -30L3.5 -30L2 -6L-2 -6Z" fill={TONES.red.ink} />
          <circle cx={0} cy={2} r={3} fill={TONES.red.ink} />
        </Anim>
      </Place>
    </Scene>
  )
}
