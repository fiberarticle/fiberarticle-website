import {
  Anim,
  Arrow,
  Blob,
  Box,
  Chai,
  Chart,
  Crate,
  Cross,
  Desk,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  OpenBook,
  Oval,
  PAPER,
  Pip,
  Place,
  Plant,
  Poly,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sprout,
  TEXT_LINE,
  TONES,
  Tick,
  Tree,
  Tuft,
  Type,
  Wave,
  ellipsePath,
  handEllipse,
  handLine,
} from '../../ink/index.js'

/*
 * The women in these drawings are small pawns: a round head on a dome of a
 * body, with a dupatta drawn over the head. Anchor: the middle of the base.
 */
function Folk({ x, y, s = 1, tone = 'pink', seed = 1 }) {
  const body = `M${x - 9 * s} ${y}Q${x - 9.5 * s} ${y - 14 * s} ${x} ${y - 15 * s}Q${x + 9.5 * s} ${y - 14 * s} ${x + 9 * s} ${y}Z`
  const cloth = `M${x - 8 * s} ${y - 17 * s}Q${x - 8.5 * s} ${y - 30 * s} ${x} ${y - 30 * s}Q${x + 8.5 * s} ${y - 30 * s} ${x + 8 * s} ${y - 17 * s}Q${x + 11 * s} ${y - 8 * s} ${x + 9.5 * s} ${y - 2 * s}`
  return (
    <g>
      <path d={body} fill={`url(#fill-${tone})`} />
      <Ink d={body} w={1.4} />
      <Oval cx={x} cy={y - 21 * s} rx={6 * s} fill={PAPER} seed={seed} sw={1.4} />
      <Ink d={cloth} c={TONES[tone].deep} w={1.6} />
    </g>
  )
}

/** A small clipboard with lines of writing. Anchor: top-left. */
function Clipboard({ x, y, w = 30, h = 36, seed = 1 }) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={2} fill={TONES.brown.tint} seed={seed} sw={1.3} />
      <rect x={x + 3} y={y + 4} width={w - 6} height={h - 7} fill={PAPER} />
      <Ink d={handLine(x + 6, y + h * 0.4, x + w - 6, y + h * 0.4, seed + 1, 0.2) + handLine(x + 6, y + h * 0.62, x + w - 9, y + h * 0.62, seed + 2, 0.2) + handLine(x + 6, y + h * 0.82, x + w - 12, y + h * 0.82, seed + 3, 0.2)} c={TEXT_LINE} w={1.3} />
      <rect x={x + w / 2 - 5} y={y - 2} width="10" height="5" rx="1" fill={TONES.grey.mid} />
    </g>
  )
}

/** An open eye, for watching. Anchor: centre. */
function Eye({ x, y, s = 1, seed = 1 }) {
  const lid = `M${x - 30 * s} ${y}Q${x} ${y - 24 * s} ${x + 30 * s} ${y}Q${x} ${y + 24 * s} ${x - 30 * s} ${y}Z`
  return (
    <g>
      <path d={lid} fill={PAPER} />
      <path d={ellipsePath(x, y, 11 * s, 11 * s)} fill="url(#fill-blue)" />
      <path d={ellipsePath(x, y, 5 * s, 5 * s)} fill={INK} />
      <circle cx={x - 3 * s} cy={y - 3 * s} r={1.8 * s} fill="#fffaf0" />
      <Ink d={handEllipse(x, y, 11 * s, 11 * s, { seed, amp: 0.4 })} w={1.4} />
      <Ink d={lid} w={1.8} />
      <Ink d={`M${x - 18 * s} ${y - 15 * s}l-4 -6M${x} ${y - 19 * s}v-7M${x + 18 * s} ${y - 15 * s}l4 -6`} w={1.5} />
    </g>
  )
}

/** A survey form: a sheet with tick boxes, some ticked. Anchor: top-left. */
function FormSheet({ x, y, w = 70, h = 90, rows = 4, done = 2, seed = 1, tone = 'paper' }) {
  const gap = (h - 22) / rows
  return (
    <g>
      <Sheet x={x} y={y} w={w} h={h} lines={0} fold={12} seed={seed} tone={tone} />
      {Array.from({ length: rows }, (_, i) => {
        const ry = y + 16 + i * gap
        return (
          <g key={i}>
            <Box x={x + 7} y={ry} w={9} h={9} fill={PAPER} seed={seed + 10 + i} sw={1.2} />
            <Ink d={handLine(x + 21, ry + 5, x + w - 10 - ((i * 7) % 12), ry + 5, seed + 20 + i, 0.3)} c={TEXT_LINE} w={1.5} />
            {i < done ? <Tick x={x + 11} y={ry + 4} s={0.5} w={2} /> : null}
          </g>
        )
      })}
    </g>
  )
}

/** A village house with a tiled roof. Anchor: bottom-left. */
function Hut({ x, y, w = 90, h = 56, tone = 'red', seed = 1 }) {
  const roof = [[x - 10, y - h], [x + w / 2, y - h - 36], [x + w + 10, y - h]]
  return (
    <g>
      <rect x={x} y={y - h} width={w} height={h} fill={TONES.amber.tint} />
      <rect x={x} y={y - h} width={w} height={h * 0.25} fill="url(#ink-hatch-light)" />
      <Ink d={handLine(x, y - h, x, y, seed, 0.4) + handLine(x + w, y - h, x + w, y, seed + 1, 0.4) + handLine(x, y, x + w, y, seed + 2, 0.4)} w={1.7} />
      <Poly points={roof} fill={`url(#fill-${tone})`} seed={seed + 3} />
      <rect x={x + w / 2 - 11} y={y - 34} width="22" height="34" fill={TONES.brown.mid} />
      <Ink d={handLine(x + w / 2 - 11, y, x + w / 2 - 11, y - 34, seed + 4, 0.3) + handLine(x + w / 2 - 11, y - 34, x + w / 2 + 11, y - 34, seed + 5, 0.3) + handLine(x + w / 2 + 11, y - 34, x + w / 2 + 11, y, seed + 6, 0.3)} w={1.5} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Primary and secondary data.
   ------------------------------------------------------------------ */

const whatCss = `
.s-dcm1-pip .pip-arm-r { animation: s-dcm1-ask 3s ease-in-out infinite; }
@keyframes s-dcm1-ask {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
.s-dcm1-talk { animation: s-dcm1-pop 3s ease-in-out infinite; }
@keyframes s-dcm1-pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
.s-dcm1-lens { animation: s-dcm1-scan 5s ease-in-out infinite; }
@keyframes s-dcm1-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, 6px); }
}
`

export function WhatScene() {
  return (
    <Scene
      w={800}
      h={340}
      css={whatCss}
      className="s-dcm1"
      label="On the left, labelled primary data, a paper character with a clipboard asks a woman a question outside a village house. On the right, labelled secondary data, a magnifying glass moves over a box of files, an open register and a report that already exist"
    >
      <Hand x={200} y={44} size={30} anchor="middle" weight={700}>
        primary data
      </Hand>
      <Hand x={200} y={72} size={19} anchor="middle" c={INK_SOFT}>
        you collect it, for your question
      </Hand>
      <Hand x={600} y={44} size={30} anchor="middle" weight={700}>
        secondary data
      </Hand>
      <Hand x={600} y={72} size={19} anchor="middle" c={INK_SOFT}>
        someone collected it already
      </Hand>

      <Ink d={handLine(400, 40, 400, 310, 2, 0.6)} c={INK_SOFT} w={1.4} dash="6 9" />

      <Floor y={300} x1={20} x2={380} seed={3} />
      <Hut x={40} y={300} w={96} h={60} seed={4} />
      <Tree x={362} y={300} s={0.75} seed={5} />
      <Place x={296} y={300} s={2.3}>
        <Folk x={0} y={0} tone="pink" seed={6} />
      </Place>
      <Shadow x={200} y={302} rx={30} ry={4} />
      <Place x={200} y={300} s={1.5}>
        <g className="s-dcm1-pip">
          <Pip mood="happy" arms="point" tone="amber" look={1.5} seed={7}>
            <Clipboard x={-34} y={-38} w={20} h={24} seed={8} />
          </Pip>
        </g>
      </Place>
      <Anim className="s-dcm1-talk" origin={[248, 150]}>
        <Speech x={190} y={110} w={96} h={42} tx={238} ty={178} seed={9}>
          <Hand x={238} y={139} size={20} anchor="middle" weight={700}>
            what for?
          </Hand>
        </Speech>
      </Anim>

      <Desk y={262} x1={420} x2={780} seed={10} />
      <Crate x={440} y={172} w={100} h={90} label="files" seed={11} />
      <OpenBook x={630} y={258} w={130} tone="green" seed={12} />
      <Sheet x={700} y={150} w={60} h={78} lines={4} seed={13} title />
      <Place x={0} y={0}>
        <Anim className="s-dcm1-lens">
          <Magnifier x={560} y={150} r={24} angle={40} tone="blue" seed={14} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Numbers, words, and both.
   ------------------------------------------------------------------ */

const typesCss = `
.s-dcm2 .chart-bar { animation: s-dcm2-grow 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-dcm2-grow {
  0%, 100% { transform: scaleY(1); }
  40% { transform: scaleY(0.75); }
}
.s-dcm2-bubble { animation: s-dcm2-float 4s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-dcm2-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
`

export function TypesScene() {
  return (
    <Scene
      w={800}
      h={340}
      css={typesCss}
      className="s-dcm2"
      label="Two overlapping circles. The left one, labelled numbers, holds a bar chart and the words survey and experiment. The right one, labelled words, holds speech bubbles and the words interview and focus group. Where they overlap sits an eye for observation and the words mixed methods"
    >
      <path d={ellipsePath(300, 172, 210, 128)} fill={TONES.blue.tint} opacity="0.85" />
      <path d={ellipsePath(500, 172, 210, 128)} fill={TONES.pink.tint} opacity="0.7" />
      <Ink d={handEllipse(300, 172, 210, 128, { seed: 1, amp: 0.6 })} w={2} />
      <Ink d={handEllipse(500, 172, 210, 128, { seed: 2, amp: 0.6 })} w={2} />

      <Hand x={184} y={104} size={30} anchor="middle" weight={700}>
        numbers
      </Hand>
      <Chart x={112} y={226} w={124} h={96} bars={[0.45, 0.8, 0.6, 0.95]} tone="blue" seed={3} />
      <Hand x={174} y={260} size={19} anchor="middle" c={INK_SOFT}>
        survey, experiment
      </Hand>

      <Hand x={616} y={104} size={30} anchor="middle" weight={700}>
        words
      </Hand>
      <g className="s-dcm2-bubble">
        <Speech x={560} y={112} w={110} h={40} tx={580} ty={168} seed={4}>
          <Ink d={handLine(574, 128, 650, 128, 5, 0.3) + handLine(574, 139, 626, 139, 6, 0.3)} c={TEXT_LINE} w={1.6} />
        </Speech>
      </g>
      <g className="s-dcm2-bubble" style={{ '--d': '-2s' }}>
        <Speech x={590} y={176} w={100} h={38} tx={668} ty={228} seed={7} tone="pink">
          <Ink d={handLine(604, 191, 672, 191, 8, 0.3) + handLine(604, 201, 646, 201, 9, 0.3)} c={TONES.pink.deep} w={1.6} o={0.6} />
        </Speech>
      </g>
      <Hand x={616} y={260} size={19} anchor="middle" c={INK_SOFT}>
        interview, focus group
      </Hand>

      <Eye x={400} y={136} s={0.95} seed={10} />
      <Hand x={400} y={192} size={22} anchor="middle" weight={700}>
        both
      </Hand>
      <Hand x={400} y={214} size={16} anchor="middle" c={INK_SOFT}>
        observation, records
      </Hand>
      <Hand x={400} y={330} size={20} anchor="middle" c={TONES.amber.deep} weight={700}>
        use both: mixed methods
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Questionnaire and schedule.
   ------------------------------------------------------------------ */

const surveyCss = `
.s-dcm3-phone { animation: s-dcm3-buzz 4s ease-in-out infinite; }
@keyframes s-dcm3-buzz {
  0%, 60%, 100% { transform: rotate(0deg); }
  65% { transform: rotate(-4deg); }
  70% { transform: rotate(4deg); }
  75% { transform: rotate(0deg); }
}
.s-dcm3-q { animation: s-dcm3-fade 4s ease-in-out infinite; opacity: 0.25; }
@keyframes s-dcm3-fade {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}
.s-dcm3-pip .pip-body { animation: s-dcm3-nod 3s ease-in-out infinite; }
@keyframes s-dcm3-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
.s-dcm3-tick { animation: s-dcm3-draw 3s ease-in-out infinite; }
@keyframes s-dcm3-draw {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.2; }
}
`

export function SurveyScene() {
  return (
    <Scene
      w={800}
      h={350}
      css={surveyCss}
      className="s-dcm3"
      label="Two panels. Questionnaire: a phone shows an English form and a woman stands looking at it with a question mark, while most people never reply. Schedule: a paper character sits beside a woman, reads each question aloud from a clipboard and ticks her answer on the form"
    >
      <Box x={20} y={20} w={370} h={310} r={10} fill={TONES.blue.tint} seed={1} sw={1.6} />
      <Box x={410} y={20} w={370} h={310} r={10} fill={TONES.green.tint} seed={2} sw={1.6} />
      <Hand x={205} y={60} size={28} anchor="middle" weight={700}>
        questionnaire
      </Hand>
      <Hand x={205} y={86} size={18} anchor="middle" c={INK_SOFT}>
        they fill it in alone
      </Hand>
      <Hand x={595} y={60} size={28} anchor="middle" weight={700}>
        schedule
      </Hand>
      <Hand x={595} y={86} size={18} anchor="middle" c={INK_SOFT}>
        you ask and write the answer
      </Hand>

      <Anim className="s-dcm3-phone" origin={[130, 230]}>
        <Box x={92} y={112} w={78} h={140} r={10} fill={INK_SOFT} seed={3} sw={1.8} />
        <rect x={99} y={124} width={64} height={114} fill={PAPER} />
        <Type x={131} y={142} size={11} anchor="middle" weight={700}>
          FORM
        </Type>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <Box x={104} y={152 + i * 20} w={8} h={8} fill={PAPER} seed={10 + i} sw={1} />
            <Ink d={handLine(117, 156 + i * 20, 152 - (i % 2) * 10, 156 + i * 20, 20 + i, 0.2)} c={TEXT_LINE} w={1.4} />
          </g>
        ))}
      </Anim>
      <Place x={270} y={300} s={2.3}>
        <Folk x={0} y={0} tone="pink" seed={30} />
      </Place>
      <g className="s-dcm3-q">
        <Hand x={300} y={226} size={42} weight={700} c={TONES.blue.deep}>
          ?
        </Hand>
      </g>
      <Floor y={300} x1={40} x2={370} seed={31} />
      <Hand x={205} y={322} size={17} anchor="middle" c={INK_SOFT}>
        many never reply
      </Hand>

      <Floor y={300} x1={430} x2={760} seed={40} />
      <Shadow x={510} y={302} rx={28} ry={4} />
      <Place x={510} y={300} s={1.5}>
        <g className="s-dcm3-pip">
          <Pip mood="happy" arms="hold" tone="amber" look={1.5} seed={41}>
            <Clipboard x={-13} y={-29} w={26} h={25} seed={42} />
          </Pip>
        </g>
      </Place>
      <Speech x={440} y={110} w={140} h={44} tx={505} ty={180} seed={43}>
        <Hand x={510} y={139} size={18} anchor="middle" weight={700}>
          loan kis liye?
        </Hand>
      </Speech>
      <Place x={690} y={300} s={2.3}>
        <Folk x={0} y={0} tone="green" seed={44} />
      </Place>
      <FormSheet x={620} y={130} w={62} h={80} rows={4} done={2} seed={45} />
      <g className="s-dcm3-tick">
        <Tick x={632} y={185} s={0.5} w={2} />
      </g>
      <Hand x={595} y={322} size={17} anchor="middle" c={INK_SOFT}>
        works even if she cannot read
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Interview and focus group.
   ------------------------------------------------------------------ */

const talkCss = `
.s-dcm4-b { animation: s-dcm4-swap 4s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-dcm4-swap {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.s-dcm4-ring { animation: s-dcm4-turn 5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s); }
@keyframes s-dcm4-turn {
  0%, 20%, 100% { transform: translateY(0); }
  10% { transform: translateY(-6px); }
}
`

export function TalkScene() {
  const circle = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2
    return { x: Math.round(590 + Math.cos(a) * 118), y: Math.round(220 + Math.sin(a) * 58), tone: ['pink', 'green', 'amber', 'blue'][i % 4] }
  }).sort((p, q) => p.y - q.y)
  return (
    <Scene
      w={800}
      h={340}
      css={talkCss}
      className="s-dcm4"
      label="On the left, labelled interview, a paper character and one woman sit facing each other with a small recorder between them and speech bubbles going both ways. On the right, labelled focus group, eight women sit in a ring on a mat while the paper character listens with a notebook"
    >
      <Hand x={190} y={48} size={30} anchor="middle" weight={700}>
        interview
      </Hand>
      <Hand x={190} y={74} size={18} anchor="middle" c={INK_SOFT}>
        one person, the why
      </Hand>
      <Hand x={590} y={48} size={30} anchor="middle" weight={700}>
        focus group
      </Hand>
      <Hand x={590} y={74} size={18} anchor="middle" c={INK_SOFT}>
        about 6 to 10 people, how a group decides
      </Hand>

      <Floor y={290} x1={30} x2={350} seed={1} />
      <Shadow x={110} y={292} rx={26} ry={4} />
      <Place x={110} y={290} s={1.45}>
        <Pip mood="focused" arms="write" tone="amber" look={1.5} seed={2} />
      </Place>
      <Place x={276} y={290} s={2.3}>
        <Folk x={0} y={0} tone="pink" seed={3} />
      </Place>
      <Box x={176} y={262} w={30} h={26} r={4} fill={TONES.grey.mid} seed={4} sw={1.4} />
      <Oval cx={191} cy={273} rx={6} fill={TONES.red.ink} seed={5} sw={1.1} />
      <g className="s-dcm4-b">
        <Speech x={50} y={104} w={124} h={40} tx={110} ty={168} seed={6}>
          <Hand x={110} y={131} size={19} anchor="middle" weight={700}>
            why a goat?
          </Hand>
        </Speech>
      </g>
      <g className="s-dcm4-b" style={{ '--d': '-2s' }}>
        <Speech x={208} y={134} w={130} h={44} tx={268} ty={196} seed={7} tone="pink">
          <Ink d={handLine(222, 150, 320, 150, 8, 0.3) + handLine(222, 162, 290, 162, 9, 0.3)} c={TONES.pink.deep} w={1.6} o={0.6} />
        </Speech>
      </g>

      <Blob points={[[460, 220], [500, 176], [590, 162], [690, 176], [726, 222], [690, 266], [590, 282], [494, 266]]} fill={TONES.amber.tint} seed={10} />
      <Wave x1={500} x2={680} y={222} amp={2} length={22} seed={11} c={TONES.amber.ink} o={0.6} />
      {circle.map((p, i) => (
        <Anim key={i} className="s-dcm4-ring" origin={[p.x, p.y]} style={{ '--i': i }}>
          <Folk x={p.x} y={p.y + 14} s={1.05} tone={p.tone} seed={20 + i} />
        </Anim>
      ))}
      <Place x={752} y={300} s={1.2}>
        <Pip mood="happy" arms="write" tone="amber" look={-1.5} seed={30} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Observation and experiment.
   ------------------------------------------------------------------ */

const observeCss = `
.s-dcm5-eye { animation: s-dcm5-look 5s ease-in-out infinite; }
@keyframes s-dcm5-look {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-14px); }
}
.s-dcm5-leader { animation: s-dcm5-speak 3s ease-in-out infinite; }
@keyframes s-dcm5-speak {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.s-dcm5-grow { animation: s-dcm5-sway 4s ease-in-out infinite; }
@keyframes s-dcm5-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
`

export function ObserveScene() {
  return (
    <Scene
      w={800}
      h={340}
      css={observeCss}
      className="s-dcm5"
      label="On the left, labelled observation, a paper character sits at the back of a group meeting with a checklist and watches as the group leader speaks for two quiet women. On the right, labelled experiment, two plots of soil marked A and B grow plants of different heights, with one thing changed between them"
    >
      <Hand x={200} y={44} size={30} anchor="middle" weight={700}>
        observation
      </Hand>
      <Hand x={200} y={70} size={18} anchor="middle" c={INK_SOFT}>
        watch what people actually do
      </Hand>
      <Hand x={610} y={44} size={30} anchor="middle" weight={700}>
        experiment
      </Hand>
      <Hand x={610} y={70} size={18} anchor="middle" c={INK_SOFT}>
        change one thing, measure the rest
      </Hand>

      <Floor y={296} x1={20} x2={380} seed={1} />
      <Place x={130} y={296} s={2.2}>
        <Anim className="s-dcm5-leader" origin={[0, 0]}>
          <Folk x={0} y={0} tone="amber" seed={2} />
        </Anim>
      </Place>
      <Place x={196} y={296} s={2}>
        <Folk x={0} y={0} tone="pink" seed={3} />
      </Place>
      <Place x={254} y={296} s={2}>
        <Folk x={0} y={0} tone="green" seed={4} />
      </Place>
      <Speech x={44} y={140} w={150} h={40} tx={126} ty={206} seed={5}>
        <Hand x={119} y={167} size={18} anchor="middle" weight={700}>
          she needs 5,000
        </Hand>
      </Speech>
      <Shadow x={330} y={298} rx={24} ry={4} />
      <Place x={330} y={296} s={1.3}>
        <Pip mood="focused" arms="write" tone="amber" look={-1.8} seed={6}>
          <Clipboard x={-34} y={-36} w={20} h={24} seed={7} />
        </Pip>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-dcm5-eye">
          <Eye x={330} y={128} s={0.8} seed={8} />
        </Anim>
      </Place>

      <Ink d={handLine(410, 50, 410, 310, 9, 0.6)} c={INK_SOFT} w={1.4} dash="6 9" />

      <Box x={450} y={250} w={140} h={46} fill="url(#soil)" seed={10} sw={1.6} />
      <Box x={630} y={250} w={140} h={46} fill="url(#soil)" seed={11} sw={1.6} />
      <Hand x={520} y={326} size={22} anchor="middle" weight={700}>
        A: as usual
      </Hand>
      <Hand x={700} y={326} size={22} anchor="middle" weight={700}>
        B: new dose
      </Hand>
      {[480, 520, 560].map((x, i) => (
        <Sprout key={i} x={x} y={250} s={0.9} seed={20 + i} />
      ))}
      {[660, 700, 740].map((x, i) => (
        <Anim key={i} className="s-dcm5-grow" origin={[x, 250]}>
          <Sprout x={x} y={250} s={1.6} seed={30 + i} />
        </Anim>
      ))}
      <Ink d={handLine(612, 130, 612, 250, 40, 0.3)} c={INK_SOFT} w={1.2} dash="4 6" />
      <Arrow from={[612, 196]} to={[612, 146]} bend={0} seed={41} c={TONES.green.deep} w={2} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Secondary data, checked before it is trusted.
   ------------------------------------------------------------------ */

const recordsCss = `
.s-dcm6-lens { animation: s-dcm6-move 6s ease-in-out infinite; }
@keyframes s-dcm6-move {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-150px, 10px); }
}
.s-dcm6-row { animation: s-dcm6-tick 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
@keyframes s-dcm6-tick {
  0%, 100% { opacity: 1; }
  30% { opacity: 0.25; }
}
`

export function RecordsScene() {
  return (
    <Scene
      w={800}
      h={340}
      css={recordsCss}
      className="s-dcm6"
      label="On a desk sit a survey report marked NFHS, a box of NSS data files, a laptop showing a table of open data and a group's open savings and loan register. A magnifying glass moves over them, and a sticky list beside them asks who collected it, when, how, and what each word means"
    >
      <Desk y={262} x1={20} x2={780} seed={1} />
      <Sheet x={40} y={120} w={96} h={140} lines={6} seed={2} tone="blue" title />
      <Type x={88} y={252} size={16} anchor="middle" weight={700}>
        NFHS
      </Type>
      <Crate x={156} y={170} w={110} h={92} label="NSS files" seed={3} />

      <Box x={290} y={150} w={150} h={100} r={6} fill={TONES.grey.mid} seed={4} sw={1.7} />
      <rect x={300} y={160} width={130} height={80} fill={PAPER} />
      {[0, 1, 2, 3].map((r) => (
        <Ink key={r} d={handLine(304, 176 + r * 18, 426, 176 + r * 18, 5 + r, 0.2)} c={TEXT_LINE} w={1.3} />
      ))}
      <Ink d={handLine(345, 164, 345, 236, 9, 0.2) + handLine(388, 164, 388, 236, 10, 0.2)} c={TEXT_LINE} w={1.3} />
      <Poly points={[[276, 250], [454, 250], [466, 262], [264, 262]]} fill={TONES.grey.tint} seed={11} />
      <Type x={365} y={150 - 8} size={14} anchor="middle" weight={700}>
        open data
      </Type>

      <OpenBook x={540} y={258} w={150} tone="red" lines={5} seed={12} />
      <Hand x={540} y={314} size={19} anchor="middle" c={INK_SOFT}>
        the group's loan register
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-dcm6-lens">
          <Magnifier x={430} y={120} r={26} angle={40} tone="amber" seed={13} />
        </Anim>
      </Place>

      <Box x={640} y={40} w={140} h={150} fill={TONES.amber.tint} seed={14} sw={1.6} />
      <Hand x={710} y={68} size={20} anchor="middle" weight={700}>
        check first
      </Hand>
      {['who?', 'when?', 'how?', 'which words?'].map((t, i) => (
        <g key={t} className="s-dcm6-row" style={{ '--i': i }}>
          <Tick x={660} y={92 + i * 25} s={0.55} w={2} />
          <Hand x={676} y={98 + i * 25} size={18}>
            {t}
          </Hand>
        </g>
      ))}
      <Chai x={730} y={262} s={0.9} seed={15} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Choosing: four stones on the path.
   ------------------------------------------------------------------ */

const chooseCss = `
.s-dcm7-walker { animation: s-dcm7-walk 8s ease-in-out infinite; }
@keyframes s-dcm7-walk {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(470px); }
}
.s-dcm7-walker .pip-leg-l { animation: s-dcm7-step 0.8s ease-in-out infinite; }
.s-dcm7-walker .pip-leg-r { animation: s-dcm7-step 0.8s ease-in-out infinite reverse; }
@keyframes s-dcm7-step {
  0%, 100% { transform: rotate(-8deg); }
  50% { transform: rotate(8deg); }
}
`

const STONES = [
  { x: 150, text: 'the question', sub: 'what or why?', tone: 'amber' },
  { x: 320, text: 'existing data?', sub: 'use it first', tone: 'blue' },
  { x: 490, text: 'the people', sub: 'reading, phones, time', tone: 'pink' },
  { x: 660, text: 'time, ethics', sub: 'can you do it?', tone: 'green' },
]

export function ChooseScene() {
  return (
    <Scene
      w={800}
      h={320}
      css={chooseCss}
      className="s-dcm7"
      label="A paper character walks along a path past four signboards in turn: the question, what or why; existing data, use it first; the people, reading, phones, time; and time and ethics, can you do it"
    >
      <Ink d="M30 286Q200 270 400 280T780 272" w={2} />
      <Ink d="M40 300Q220 292 400 298T770 292" c={TEXT_LINE} w={1.5} dash="10 10" />
      <Tuft x={60} y={282} seed={1} />
      <Tuft x={760} y={272} seed={2} />
      {STONES.map((s, i) => (
        <g key={i}>
          <Ink d={handLine(s.x, 276, s.x, 156, 10 + i, 0.4)} c={TONES.brown.deep} w={3.4} />
          <Box x={s.x - 74} y={84} w={148} h={74} r={6} fill={`url(#fill-${s.tone})`} seed={20 + i} sw={1.7} />
          <Hand x={s.x} y={114} size={20} anchor="middle" weight={700}>
            {s.text}
          </Hand>
          <Hand x={s.x} y={140} size={15} anchor="middle" c={INK_SOFT}>
            {s.sub}
          </Hand>
          <Type x={s.x} y={74} size={14} anchor="middle" weight={700} c={TONES[s.tone].deep}>
            {i + 1}
          </Type>
        </g>
      ))}
      <Shadow x={90} y={286} rx={24} ry={4} />
      <Place x={90} y={284} s={1.25}>
        <g className="s-dcm7-walker">
          <Pip mood="focused" arms="hold" tone="amber" look={1.8} seed={40}>
            <Clipboard x={-13} y={-29} w={26} h={25} seed={41} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Pilot first, then fieldwork.
   ------------------------------------------------------------------ */

const pilotCss = `
.s-dcm8-fix { animation: s-dcm8-write 5s ease-in-out infinite; }
@keyframes s-dcm8-write {
  0%, 100% { opacity: 1; }
  30% { opacity: 0.15; }
}
.s-dcm8-arrow { animation: s-dcm8-nudge 3s ease-in-out infinite; }
@keyframes s-dcm8-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
.s-dcm8-crowd { animation: s-dcm8-hop 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.25s); }
@keyframes s-dcm8-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-6px); }
}
`

export function PilotScene() {
  const crowd = [
    [600, 214], [640, 214], [680, 214], [720, 214],
    [580, 256], [620, 256], [660, 256], [700, 256], [740, 256],
  ]
  return (
    <Scene
      w={800}
      h={330}
      css={pilotCss}
      className="s-dcm8"
      label="On the left, labelled pilot, a small village house with a few women. In the middle, the schedule sheet with one confusing line, interest per annum, crossed out in red and rewritten as per 100 rupees each month. On the right, labelled fieldwork, a bigger group of women ready for the real survey"
    >
      <Hand x={130} y={50} size={28} anchor="middle" weight={700}>
        pilot
      </Hand>
      <Hand x={130} y={76} size={17} anchor="middle" c={INK_SOFT}>
        a few people, outside the sample
      </Hand>
      <Floor y={290} x1={20} x2={250} seed={1} />
      <Hut x={36} y={290} w={84} h={54} tone="red" seed={2} />
      <Place x={160} y={290} s={2}>
        <Folk x={0} y={0} tone="pink" seed={3} />
      </Place>
      <Place x={218} y={290} s={2}>
        <Folk x={0} y={0} tone="amber" seed={4} />
      </Place>

      <Sheet x={290} y={70} w={210} h={210} lines={0} fold={22} seed={5} />
      <Hand x={385} y={110} size={20} anchor="middle" weight={700}>
        schedule, draft 2
      </Hand>
      {[0, 1, 3, 4].map((i) => (
        <Ink key={i} d={handLine(306, 136 + i * 28, 470 - (i % 2) * 30, 136 + i * 28, 10 + i, 0.3)} c={TEXT_LINE} w={1.8} />
      ))}
      <Hand x={306} y={196} size={15} c={INK_SOFT}>
        interest per annum?
      </Hand>
      <Ink d={handLine(302, 190, 444, 188, 20, 0.4)} c={TONES.red.ink} w={2.6} />
      <Cross x={466} y={186} s={0.6} />
      <g className="s-dcm8-fix">
        <Hand x={304} y={218} size={14.5} c={TONES.green.deep} weight={700}>
          per 100 rupees, each month?
        </Hand>
      </g>

      <g className="s-dcm8-arrow">
        <Arrow from={[512, 180]} to={[562, 180]} bend={0} seed={30} w={2.4} />
      </g>

      <Hand x={660} y={50} size={28} anchor="middle" weight={700}>
        fieldwork
      </Hand>
      <Hand x={660} y={76} size={17} anchor="middle" c={INK_SOFT}>
        the real sample
      </Hand>
      <Blob points={[[566, 180], [620, 150], [700, 150], [770, 184], [764, 262], [700, 286], [620, 286], [560, 256]]} fill={TONES.green.tint} seed={31} />
      {crowd.map(([x, y], i) => (
        <g key={i} className="s-dcm8-crowd" style={{ '--i': i }}>
          <Folk x={x} y={y + 14} s={0.95} tone={['pink', 'amber', 'green', 'blue'][i % 4]} seed={40 + i} />
        </g>
      ))}
      <Plant x={30} y={290} s={0.7} seed={50} />
      <Ink d={handLine(560, 300, 780, 300, 51, 0.6)} w={1.6} />
      <Hand x={190} y={316} size={17} anchor="middle" c={INK}>
        8 women
      </Hand>
    </Scene>
  )
}

