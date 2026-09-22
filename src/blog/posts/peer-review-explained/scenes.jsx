import {
  Anim,
  Calendar,
  Chai,
  Chart,
  Clock,
  Desk,
  Envelope,
  Flag,
  Floor,
  Hand,
  Hourglass,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  Speech,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

function TextLines({ x, rows, seed, c = TEXT_LINE, w = 1.7 }) {
  let d = ''
  rows.forEach(([y, length], i) => {
    d += handLine(x, y, x + length, y, seed + i, 0.4)
  })
  return <Ink d={d} c={c} w={w} />
}

/* ------------------------------------------------------------------
   1. After you press submit: one click, and the paper flies out of the
      window to the journal on the hill.
   ------------------------------------------------------------------ */

const submitCss = `
.s-pr1 .pip-arm-r { animation: s-pr1-press 10s ease-in-out infinite; }
.s-pr1-button { animation: s-pr1-button 10s ease-in-out infinite; }
.s-pr1-submit { animation: s-pr1-submit 10s ease-in-out infinite; }
.s-pr1-sent { animation: s-pr1-sent 10s ease-in-out infinite; }
.s-pr1-status { animation: s-pr1-status 10s ease-in-out infinite; }
.s-pr1-sheet { animation: s-pr1-fly 10s ease-in-out infinite; }
@keyframes s-pr1-press {
  0%, 6%, 16%, 100% { transform: rotate(0deg); }
  10%, 12% { transform: rotate(6deg); }
}
@keyframes s-pr1-button {
  0%, 9%, 15%, 100% { transform: scale(1); }
  11%, 13% { transform: scale(0.93); }
}
@keyframes s-pr1-submit {
  0%, 13% { opacity: 1; }
  15%, 92% { opacity: 0; }
  96%, 100% { opacity: 1; }
}
@keyframes s-pr1-sent {
  0%, 13% { opacity: 0; }
  15%, 92% { opacity: 1; }
  96%, 100% { opacity: 0; }
}
@keyframes s-pr1-status {
  0%, 20% { opacity: 0; }
  26%, 92% { opacity: 1; }
  96%, 100% { opacity: 0; }
}
@keyframes s-pr1-fly {
  0%, 15% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0; }
  17% { opacity: 1; }
  30% { transform: translate(160px, -120px) scale(0.8) rotate(-12deg); }
  44% { transform: translate(287px, -74px) scale(0.4) rotate(6deg); opacity: 1; }
  48%, 99% { transform: translate(287px, -74px) scale(0.4) rotate(6deg); opacity: 0; }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0; }
}
`

/* A small journal building, drawn from the middle of its base. */
function MiniJournal() {
  const roof = [
    [-61, -58],
    [0, -90],
    [61, -58],
  ]
  return (
    <g>
      <path d="M-55 -58h110v58h-110Z" fill={PAPER} />
      {[-41, -7, 27].map((dx, i) => (
        <g key={dx}>
          <path d={`M${dx} -50h14v50h-14Z`} fill={TONES.grey.tint} />
          <Ink d={handPoly([[dx, -50], [dx + 14, -50], [dx + 14, 0], [dx, 0]], { seed: 400 + i, amp: 0.2, closed: true })} w={1.2} />
        </g>
      ))}
      <Ink d={handPoly([[-55, -58], [55, -58], [55, 0], [-55, 0]], { seed: 404, amp: 0.4, closed: true })} w={1.6} />
      <path d={polyPath(roof)} fill={PAPER} />
      <path d={polyPath(roof)} fill="url(#ink-hatch-light)" />
      <Ink d={handPoly(roof, { seed: 405, amp: 0.4, closed: true })} w={1.6} />
      <Flag x={0} y={-90} h={30} tone="green" seed={406} />
    </g>
  )
}

/* The view through the window: sky, a green hill and the journal on it. */
function HillView({ x, y, w, h }) {
  const ridge = `M${x} ${y + h}Q${x + 70} ${y + h - 66} ${x + 130} ${y + h - 52}Q${x + 170} ${y + h - 44} ${x + w} ${y + h - 40}`
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={TONES.blue.tint} />
      <path d={`${ridge}V${y + h}Z`} fill={TONES.green.tint} />
      <Ink d={ridge} w={1.5} c={TONES.green.deep} />
      <Place x={x + 95} y={y + 104} s={0.62}>
        <MiniJournal />
      </Place>
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed: 407, amp: 0.5, closed: true })} w={2.4} />
      <rect x={x - 8} y={y + h} width={w + 16} height={8} fill="url(#wood)" />
      <Ink d={handLine(x - 8, y + h + 8, x + w + 8, y + h + 8, 408, 0.4)} w={1.6} />
    </g>
  )
}

export function SubmitScene() {
  return (
    <Scene w={800} h={292} top={30} css={submitCss} className="s-pr1" label="A paper character presses the submit button on a laptop, the button changes to sent with the status under review, and the paper flies out of the window to a journal building on a hill">
      <Desk y={300} depth={22} seed={410} />
      <HillView x={572} y={62} w={190} h={146} />

      <Laptop x={392} y={300} w={300} seed={411}>
        <path d="M288 159h208v18h-208Z" fill="url(#fill-blue)" />
        <TextLines x={298} seed={412} rows={[[188, 120]]} />
        <Anim className="s-pr1-button" origin={[380, 214]}>
          <path d="M330 196h100q8 0 8 8v20q0 8 -8 8h-100q-8 0 -8 -8v-20q0 -8 8 -8Z" fill="url(#fill-amber)" />
          <Ink d={handPoly([[322, 196], [438, 196], [438, 232], [322, 232]], { seed: 413, amp: 0.3, closed: true })} w={1.6} />
          <g className="s-pr1-submit" style={{ opacity: 0 }}>
            <Hand x={380} y={222} size={24} anchor="middle" weight={700}>
              submit
            </Hand>
          </g>
          <g className="s-pr1-sent">
            <Hand x={380} y={222} size={24} anchor="middle" weight={700} c={TONES.green.deep}>
              sent
            </Hand>
          </g>
        </Anim>
        <g className="s-pr1-status">
          <Hand x={392} y={266} size={20} anchor="middle" weight={700} c={INK_SOFT}>
            under review
          </Hand>
        </g>
      </Laptop>

      <Shadow x={196} y={302} rx={50} ry={6} />
      <Place x={196} y={300} s={2.2}>
        <Pip mood="happy" arms="point" tone="blue" look={1.5} seed={415} />
      </Place>
      <Chai x={690} y={300} s={1.1} seed={416} />

      <Place x={380} y={214}>
        <Anim className="s-pr1-sheet" style={{ opacity: 0 }}>
          <Sheet x={-16} y={-20} w={32} h={40} lines={3} fold={8} seed={414} sw={1.3} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The desk check: the editor sorts papers into two trays, out to
      reviewers or back to the author, under a busy clock.
   ------------------------------------------------------------------ */

const traysCss = `
.s-pr2 .clock-min { animation: s-pr2-turn 5s linear infinite; }
.s-pr2 .clock-hour { animation: s-pr2-turn 60s linear infinite; }
.s-pr2-left { animation: s-pr2-left 10s ease-in-out infinite; }
.s-pr2-right { animation: s-pr2-right 10s ease-in-out infinite; }
.s-pr2-editor { animation: s-pr2-sway 10s ease-in-out infinite; }
@keyframes s-pr2-turn { to { transform: rotate(360deg); } }
@keyframes s-pr2-left {
  0%, 8% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  22% { transform: translate(-110px, -70px) rotate(-14deg); }
  32% { transform: translate(-214px, -24px) rotate(-6deg); opacity: 1; }
  36%, 99% { transform: translate(-214px, -24px) rotate(-6deg); opacity: 0; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
@keyframes s-pr2-right {
  0%, 52% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  54% { opacity: 1; }
  66% { transform: translate(110px, -70px) rotate(14deg); }
  76% { transform: translate(214px, -24px) rotate(6deg); opacity: 1; }
  80%, 99% { transform: translate(214px, -24px) rotate(6deg); opacity: 0; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
@keyframes s-pr2-sway {
  0%, 6%, 38%, 50%, 82%, 100% { transform: rotate(0deg); }
  14%, 30% { transform: rotate(-4deg); }
  58%, 74% { transform: rotate(4deg); }
}
`

/* A small table with an in-tray on it and a label under the top. */
function TrayTable({ x, label, seed }) {
  const tray = [
    [x + 22, 196],
    [x + 158, 196],
    [x + 148, 222],
    [x + 32, 222],
  ]
  return (
    <g>
      <Sheet x={x + 50} y={180} w={74} h={30} lines={2} fold={8} seed={seed} sw={1.2} />
      <Sheet x={x + 58} y={186} w={70} h={26} lines={1} fold={7} seed={seed + 1} sw={1.2} />
      <path d={polyPath(tray)} fill={TONES.grey.tint} opacity="0.95" />
      <Ink d={handPoly(tray, { seed: seed + 2, amp: 0.4, closed: true })} w={1.7} />
      <path d={`M${x} 222h180v10h-180Z`} fill="url(#wood)" />
      <Ink d={handPoly([[x, 222], [x + 180, 222], [x + 180, 232], [x, 232]], { seed: seed + 3, amp: 0.4, closed: true })} w={1.6} />
      <Ink d={handLine(x + 12, 232, x + 10, 300, seed + 4, 0.3) + handLine(x + 168, 232, x + 170, 300, seed + 5, 0.3)} w={2.4} c={TONES.brown.deep} />
      <Hand x={x + 90} y={266} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        {label}
      </Hand>
    </g>
  )
}

export function TraysScene() {
  return (
    <Scene w={800} h={280} top={40} css={traysCss} className="s-pr2" label="An editor in glasses holds a paper under a busy wall clock and sorts papers into two trays, one labelled to reviewers and one labelled back to author">
      <Floor y={300} x1={30} x2={770} seed={420} />
      <Clock x={400} y={88} r={32} seed={421} />

      <TrayTable x={96} label="to reviewers" seed={422} />
      <TrayTable x={524} label="back to author" seed={430} />

      <Shadow x={400} y={302} rx={52} ry={6} />
      <Place x={400} y={300} s={2.2}>
        <Anim className="s-pr2-editor" origin={[0, 0]}>
          <Pip mood="focused" arms="hold" tone="pink" glasses seed={440}>
            <Sheet x={-13} y={-40} w={26} h={30} lines={2} fold={6} seed={441} sw={1.3} />
          </Pip>
        </Anim>
      </Place>

      <Place x={400} y={214}>
        <Anim className="s-pr2-left" style={{ opacity: 0 }}>
          <Sheet x={-16} y={-20} w={32} h={40} lines={3} fold={8} seed={442} sw={1.3} />
        </Anim>
      </Place>
      <Place x={400} y={214}>
        <Anim className="s-pr2-right" style={{ opacity: 0 }}>
          <Sheet x={-16} y={-20} w={32} h={40} lines={3} fold={8} seed={443} sw={1.3} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Review models: who wears the blindfold in single-blind,
      double-blind and open review.
   ------------------------------------------------------------------ */

const blindCss = `
.s-pr3-tails { animation: s-pr3-flutter 1.6s ease-in-out infinite; }
.s-pr3-search { animation: s-pr3-search 6s ease-in-out infinite; }
.s-pr3-open .pip-arm-r { animation: s-pr3-wave 1.3s ease-in-out infinite alternate; }
@keyframes s-pr3-flutter {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(14deg); }
}
@keyframes s-pr3-search {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-3deg); }
  70% { transform: rotate(3deg); }
}
@keyframes s-pr3-wave {
  from { transform: rotate(0deg); }
  to { transform: rotate(-18deg); }
}
`

/* A dark band over the eyes, knotted at the side, in Pip's own units. */
function Blindfold() {
  return (
    <g>
      <path d="M-23 -49Q0 -52 23 -49V-39Q0 -42 -23 -39Z" fill={INK} />
      <Anim className="s-pr3-tails" origin={[-23, -44]}>
        <path d="M-23 -45L-34 -52L-32 -45Z" fill={INK} />
        <path d="M-23 -43L-33 -37L-30 -44Z" fill={INK} />
      </Anim>
    </g>
  )
}

const PANELS = [
  { cx: 133, label: 'single-blind', authorBlind: true, reviewerBlind: false },
  { cx: 400, label: 'double-blind', authorBlind: true, reviewerBlind: true },
  { cx: 667, label: 'open', authorBlind: false, reviewerBlind: false },
]

export function BlindfoldScene() {
  return (
    <Scene w={800} h={210} top={106} css={blindCss} className="s-pr3" label="Three pairs of paper characters, an author and a reviewer. In single-blind review only the author wears a blindfold, in double-blind review both do, and in open review both wave at each other">
      <Floor y={262} x1={30} x2={770} seed={450} />
      <Ink d={handLine(266, 124, 266, 256, 451, 0.5) + handLine(533, 124, 533, 256, 452, 0.5)} dash="3 9" c={INK_SOFT} w={1.4} />

      {PANELS.map((panel, i) => {
        const open = !panel.authorBlind && !panel.reviewerBlind
        return (
          <g key={panel.label}>
            <Shadow x={panel.cx - 70} y={264} rx={38} ry={5} />
            <Place x={panel.cx - 70} y={262} s={1.7}>
              <g className={open ? 's-pr3-open' : 's-pr3-search'}>
                <Pip mood="happy" arms={open ? 'wave' : 'down'} look={1.6} seed={460 + i * 4}>
                  {panel.authorBlind ? <Blindfold /> : null}
                </Pip>
              </g>
            </Place>
            <Shadow x={panel.cx + 70} y={264} rx={38} ry={5} />
            <Place x={panel.cx + 70} y={262} s={1.7} flip>
              <g className={open ? 's-pr3-open' : panel.reviewerBlind ? 's-pr3-search' : undefined}>
                <Pip mood={panel.reviewerBlind ? 'happy' : 'focused'} arms={open ? 'wave' : 'down'} tone="blue" glasses={!panel.reviewerBlind} look={1.6} seed={462 + i * 4}>
                  {panel.reviewerBlind ? <Blindfold /> : null}
                </Pip>
              </g>
            </Place>
            <Hand x={panel.cx} y={300} size={24} anchor="middle" weight={700} c={INK_SOFT}>
              {panel.label}
            </Hand>
          </g>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. What reviewers look for: three reviewers around one manuscript,
      two with magnifying glasses, leaving notes on it.
   ------------------------------------------------------------------ */

const NOTES = [
  { x: 446, y: 128, tone: 'pink', at: 20 },
  { x: 310, y: 174, tone: 'amber', at: 40 },
  { x: 446, y: 236, tone: 'blue', at: 60 },
]

const reviewCss = `
.s-pr4-left .pip-arm-r, .s-pr4-left .s-pr4-glass { animation: s-pr4-sweep 4s ease-in-out infinite; }
.s-pr4-right .pip-arm-r, .s-pr4-right .s-pr4-glass { animation: s-pr4-sweep 4s ease-in-out infinite; animation-delay: -2s; }
.s-pr4-ask { animation: s-pr4-ask 10s ease-in-out infinite; }
${NOTES.map(
  (note, i) => `
.s-pr4-note-${i} { animation: s-pr4-note-${i} 10s ease-in-out infinite; }
@keyframes s-pr4-note-${i} {
  0%, ${note.at}% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
  ${note.at + 4}% { opacity: 1; transform: scale(1.1) rotate(3deg); }
  ${note.at + 7}%, 88% { opacity: 1; transform: scale(1) rotate(0deg); }
  94%, 100% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
}`,
).join('\n')}
@keyframes s-pr4-sweep {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
@keyframes s-pr4-ask {
  0%, 60%, 78%, 100% { transform: scale(1); }
  66%, 72% { transform: scale(1.3); }
}
`

/* A reviewer with a magnifying glass that moves with the waving arm. */
function Inspector({ tone, seed }) {
  return (
    <Pip mood="focused" arms="wave" tone={tone} glasses look={1.6} seed={seed}>
      <Anim className="s-pr4-glass" origin={[22, -42]}>
        <Magnifier x={48} y={-88} r={13} angle={120} seed={seed + 1} />
      </Anim>
    </Pip>
  )
}

export function ReviewersScene() {
  return (
    <Scene w={800} h={316} top={0} css={reviewCss} className="s-pr4" label="A manuscript stands in the middle with a chart on it. Two reviewers with magnifying glasses inspect it from either side and a third sits on top thinking, while comment notes appear on the pages">
      <Floor y={300} x1={30} x2={770} seed={470} />

      <Sheet x={300} y={96} w={200} h={200} lines={0} fold={18} seed={471} />
      <path d="M318 112h110v10h-110Z" fill={INK} opacity="0.75" />
      <TextLines x={318} seed={472} rows={[[140, 120], [156, 146], [172, 104]]} />
      <Chart x={322} y={272} w={100} h={62} bars={[0.5, 0.8, 0.62, 0.95]} tone="green" seed={473} />
      <TextLines x={432} seed={474} rows={[[216, 50], [232, 44], [248, 50]]} />

      {NOTES.map((note, i) => (
        <Anim key={i} className={`s-pr4-note-${i}`} origin={[note.x + 22, note.y + 20]}>
          <Sticky x={note.x} y={note.y} w={44} h={40} tone={note.tone} lines={2} seed={475 + i} />
        </Anim>
      ))}

      <Shadow x={200} y={302} rx={46} ry={5} />
      <Place x={200} y={300} s={1.9}>
        <g className="s-pr4-left">
          <Inspector tone="amber" seed={480} />
        </g>
      </Place>

      <Shadow x={600} y={302} rx={46} ry={5} />
      <Place x={600} y={300} s={1.9} flip>
        <g className="s-pr4-right">
          <Inspector tone="green" seed={482} />
        </g>
      </Place>

      <Place x={440} y={96} s={1.2}>
        <Pip mood="focused" arms="think" tone="pink" look={-1} seed={484} />
      </Place>
      <Anim className="s-pr4-ask" origin={[520, 40]}>
        <Hand x={520} y={52} size={34} anchor="middle" weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The decision: a big letter gets its stamp, and Pip realises it is
      not a no.
   ------------------------------------------------------------------ */

const decisionCss = `
.s-pr5-stamp { animation: s-pr5-stamp 10s ease-in-out infinite; }
.s-pr5-pip { animation: s-pr5-jump 10s ease-in-out infinite; }
.s-pr5-bubble { animation: s-pr5-bubble 10s ease-in-out infinite; }
@keyframes s-pr5-stamp {
  0%, 12% { opacity: 0; transform: scale(1.7); }
  16% { opacity: 1; transform: scale(0.94); }
  19%, 90% { opacity: 1; transform: scale(1); }
  95%, 100% { opacity: 0; transform: scale(1.7); }
}
@keyframes s-pr5-jump {
  0%, 16%, 26%, 100% { transform: translateY(0); }
  20% { transform: translateY(-8px); }
}
@keyframes s-pr5-bubble {
  0%, 44% { opacity: 0; transform: scale(0.4); }
  50% { opacity: 1; transform: scale(1.08); }
  54%, 88% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.4); }
}
`

export function DecisionScene() {
  return (
    <Scene w={800} h={290} top={26} css={decisionCss} className="s-pr5" label="A paper character looks surprised at a large decision letter stamped MAJOR REVISION, then a speech bubble says not a no!">
      <Floor y={300} x1={30} x2={770} seed={490} />

      <Sheet x={380} y={36} w={290} h={256} lines={0} fold={22} seed={491} />
      <Hand x={404} y={80} size={24} weight={700}>
        Decision
      </Hand>
      <TextLines x={404} seed={492} rows={[[112, 220], [132, 190], [224, 214], [244, 170], [264, 200]]} />
      <Anim className="s-pr5-stamp" origin={[525, 176]}>
        <StampMark x={525} y={176} w={250} h={50} text="MAJOR REVISION" size={22} tone="amber" rotate={-6} seed={493} />
      </Anim>

      <Envelope x={268} y={270} w={58} h={30} open seed={494} />

      <Shadow x={180} y={302} rx={52} ry={6} />
      <Place x={180} y={300} s={2.2}>
        <g className="s-pr5-pip">
          <Pip mood="surprised" arms="shrug" tone="blue" look={1.6} seed={495} />
        </g>
      </Place>

      <Anim className="s-pr5-bubble" origin={[150, 110]}>
        <Speech x={52} y={50} w={178} h={56} tx={168} ty={140} seed={496}>
          <Hand x={141} y={87} size={26} anchor="middle" weight={700}>
            not a no!
          </Hand>
        </Speech>
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Answering reviewers: a two-column response letter fills in row by
      row, each row ticked when it is answered.
   ------------------------------------------------------------------ */

const ROWS = [
  { top: 96, at: 10 },
  { top: 158, at: 34 },
  { top: 220, at: 58 },
]

const responseCss = `
.s-pr6-writer .pip-arm-r, .s-pr6-pen { animation: s-pr6-scribble 0.5s ease-in-out infinite alternate; }
${ROWS.map(
  (row, i) => `
.s-pr6-reply-${i} { animation: s-pr6-reply-${i} 12s ease-in-out infinite; }
.s-pr6-tick-${i} { animation: s-pr6-tick-${i} 12s ease-in-out infinite; }
@keyframes s-pr6-reply-${i} {
  0%, ${row.at}% { transform: scaleX(0); opacity: 1; }
  ${row.at + 12}%, 88% { transform: scaleX(1); opacity: 1; }
  94% { transform: scaleX(1); opacity: 0; }
  96%, 100% { transform: scaleX(0); opacity: 1; }
}
@keyframes s-pr6-tick-${i} {
  0%, ${row.at + 12}% { opacity: 0; transform: scale(0.3); }
  ${row.at + 15}% { opacity: 1; transform: scale(1.2); }
  ${row.at + 18}%, 88% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.3); }
}`,
).join('\n')}
@keyframes s-pr6-scribble {
  from { transform: rotate(-4deg); }
  to { transform: rotate(4deg); }
}
`

export function ResponseScene() {
  return (
    <Scene w={800} h={300} top={16} css={responseCss} className="s-pr6" label="A paper character writes a response letter with two columns, comment and response. Each reply is written in row by row and gets a green tick">
      <Desk y={300} depth={22} seed={500} />

      <Pile x={110} y={300} w={86} count={9} seed={533} />
      <Chai x={196} y={300} s={1.1} seed={532} />

      <Sheet x={250} y={30} w={340} h={262} lines={0} fold={22} seed={501} />
      <Hand x={334} y={72} size={22} anchor="middle" weight={700}>
        comment
      </Hand>
      <Hand x={496} y={72} size={22} anchor="middle" weight={700}>
        response
      </Hand>
      <Ink d={handLine(266, 84, 572, 84, 502, 0.4) + handLine(420, 56, 420, 280, 503, 0.4)} w={1.5} />

      {ROWS.map((row, i) => (
        <g key={row.top}>
          <TextLines x={270} seed={510 + i * 6} rows={[[row.top + 10, 128], [row.top + 28, 96]]} c={INK_SOFT} w={1.6} />
          <Anim className={`s-pr6-reply-${i}`} origin={[432, row.top + 20]}>
            <TextLines x={432} seed={513 + i * 6} rows={[[row.top + 8, 100], [row.top + 24, 108], [row.top + 40, 76]]} />
          </Anim>
          <Anim className={`s-pr6-tick-${i}`} origin={[554, row.top + 38]}>
            <Tick x={552} y={row.top + 42} s={0.9} />
          </Anim>
          {i < ROWS.length - 1 ? <Ink d={handLine(266, row.top + 56, 572, row.top + 56, 520 + i, 0.4)} c={TEXT_LINE} w={1.2} /> : null}
        </g>
      ))}

      <Shadow x={650} y={302} rx={52} ry={6} />
      <Place x={650} y={300} s={2.2} flip>
        <g className="s-pr6-writer">
          <Pip mood="focused" arms="write" tone="blue" look={1.4} seed={530}>
            <Anim className="s-pr6-pen" origin={[22, -39]}>
              <Pencil x={26} y={-16} length={34} angle={-80} tone="amber" seed={531} />
            </Anim>
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The wait, and what comes next: ninety days on the calendar, the
      sand running out, and then the accepted letter arrives.
   ------------------------------------------------------------------ */

const waitCss = `
.s-pr7 .sand-top, .s-pr7 .sand-bottom { transform-box: fill-box; transform-origin: 50% 100%; }
.s-pr7 .sand-top { animation: s-pr7-top 12s ease-in-out infinite; }
.s-pr7 .sand-bottom { animation: s-pr7-bottom 12s ease-in-out infinite; }
.s-pr7 .clock-min { animation: s-pr7-turn 3s linear infinite; }
.s-pr7 .clock-hour { animation: s-pr7-turn 36s linear infinite; }
.s-pr7-waiting { animation: s-pr7-waiting 12s ease-in-out infinite; }
.s-pr7-happy { animation: s-pr7-happy 12s ease-in-out infinite; }
.s-pr7-letter { animation: s-pr7-letter 12s ease-in-out infinite; }
.s-pr7-page { animation: s-pr7-page 4s ease-out infinite; }
.s-pr7-spark { animation: s-pr7-spark 2s ease-in-out infinite; }
@keyframes s-pr7-turn { to { transform: rotate(360deg); } }
@keyframes s-pr7-top {
  0% { transform: scaleY(1); }
  60%, 94% { transform: scaleY(0.15); }
  100% { transform: scaleY(1); }
}
@keyframes s-pr7-bottom {
  0% { transform: scaleY(0.3); }
  60%, 94% { transform: scaleY(1); }
  100% { transform: scaleY(0.3); }
}
@keyframes s-pr7-waiting {
  0%, 58% { opacity: 1; }
  62%, 94% { opacity: 0; }
  98%, 100% { opacity: 1; }
}
@keyframes s-pr7-happy {
  0%, 58% { opacity: 0; }
  62%, 94% { opacity: 1; }
  98%, 100% { opacity: 0; }
}
@keyframes s-pr7-letter {
  0%, 48% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  50% { opacity: 1; }
  56% { transform: translate(-150px, 10px) rotate(-8deg); }
  60% { transform: translate(-290px, 40px) rotate(4deg); opacity: 1; }
  62%, 99% { transform: translate(-290px, 40px) rotate(4deg); opacity: 0; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
@keyframes s-pr7-page {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  10% { transform: translate(0, 0) rotate(0deg); opacity: 0.9; }
  99% { transform: translate(80px, -36px) rotate(40deg); opacity: 0; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
@keyframes s-pr7-spark {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.6); }
}
`

function AcceptedLetter() {
  return (
    <g>
      <Sheet x={-38} y={-114} w={76} h={44} lines={0} fold={9} seed={560} sw={1.3} />
      <StampMark x={0} y={-91} w={70} h={18} text="ACCEPTED" size={9.2} tone="green" rotate={-6} seed={561} />
    </g>
  )
}

export function WaitScene() {
  return (
    <Scene w={800} h={276} top={40} css={waitCss} className="s-pr7" label="A calendar reads day 90, an hourglass runs down and a clock spins while a paper character waits sleepily. Then a letter flies in and the character holds it up, stamped ACCEPTED">
      <Floor y={300} x1={30} x2={770} seed={540} />

      <Calendar x={56} y={60} w={120} h={136} day="90" month="DAY" tone="red" seed={541} />
      {[0, 1].map((i) => (
        <Place key={i} x={150} y={118}>
          <Anim className="s-pr7-page" style={{ animationDelay: `${-i * 2}s`, opacity: 0 }}>
            <path d="M0 0h26v30h-26Z" fill={PAPER} />
            <Ink d={handPoly([[0, 0], [26, 0], [26, 30], [0, 30]], { seed: 542 + i, amp: 0.3, closed: true })} w={1.2} />
          </Anim>
        </Place>
      ))}

      <Hourglass x={262} y={254} s={1.5} seed={544} />
      <Clock x={690} y={160} r={38} seed={547} />

      <Shadow x={470} y={302} rx={52} ry={6} />
      <Place x={470} y={300} s={2.2}>
        <g className="s-pr7-waiting" style={{ opacity: 0 }}>
          <Pip mood="sleepy" arms="down" tone="blue" seed={545} />
        </g>
        <g className="s-pr7-happy">
          <Pip mood="grin" arms="carry" tone="blue" seed={545}>
            <AcceptedLetter />
          </Pip>
        </g>
      </Place>

      <g className="s-pr7-happy">
        {[
          [362, 84, 11, '0s'],
          [584, 110, 9, '-0.6s'],
          [574, 58, 7, '-1.2s'],
        ].map(([x, y, s, delay]) => (
          <Place key={x} x={x} y={y}>
            <Anim className="s-pr7-spark" spin style={{ animationDelay: delay }}>
              <Sparkle x={0} y={0} s={s} />
            </Anim>
          </Place>
        ))}
      </g>

      <Place x={760} y={64}>
        <Anim className="s-pr7-letter" style={{ opacity: 0 }}>
          <Envelope x={-30} y={-20} w={60} h={40} seed={546} />
        </Anim>
      </Place>
    </Scene>
  )
}
