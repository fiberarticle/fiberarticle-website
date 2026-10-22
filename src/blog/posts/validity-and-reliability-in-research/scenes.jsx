import {
  Anim,
  Arrow,
  Blob,
  Box,
  Calendar,
  Checklist,
  Chart,
  Cross,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pip,
  Place,
  Plant,
  Puzzle,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TEXT_LINE,
  TONES,
  Target,
  Thought,
  Tick,
  Type,
  handLine,
  handPoly,
} from '../../ink/index.js'
import { Dart } from './hero.jsx'

/* ------------------------------------------------------------------
   1. The anganwadi weighing scale: the same wrong reading every time.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-var1-needle { animation: s-var1-settle 4s ease-in-out infinite; }
@keyframes s-var1-settle {
  0%, 100% { transform: rotate(0deg); }
  12% { transform: rotate(-28deg); }
  24% { transform: rotate(9deg); }
  34% { transform: rotate(-4deg); }
  42% { transform: rotate(0deg); }
}
.s-var1-row { animation: s-var1-show 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-var1-show {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.s-var1-pip .pip-body { animation: s-var1-lean 3.4s ease-in-out infinite; }
@keyframes s-var1-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function MeaningScene() {
  const FLOOR = 330
  const cx = 250
  const cy = 196
  return (
    <Scene
      w={800}
      h={330}
      top={20}
      css={meaningCss}
      className="s-var1"
      label="A baby weighing scale whose needle settles on 12.5 kilograms while the true weight is 12, beside a sheet of three identical readings marked consistent with a tick and correct with a cross"
    >
      <Floor y={FLOOR} x1={40} x2={760} seed={101} />

      {/* the scale: a dial on a stand with a pan */}
      <Box x={cx - 10} y={cy + 66} w={20} h={FLOOR - cy - 76} fill={TONES.grey.mid} seed={102} />
      <path d={`M${cx - 70} ${FLOOR}h140l-14 -12h-112Z`} fill="url(#wood)" />
      <Ink d={handPoly([[cx - 70, FLOOR], [cx + 70, FLOOR], [cx + 56, FLOOR - 12], [cx - 56, FLOOR - 12]], { seed: 103, amp: 0.4, closed: true })} />
      <Oval cx={cx} cy={cy} rx={70} fill={PAPER} seed={104} sw={2.2} />
      <Oval cx={cx} cy={cy} rx={62} fill="none" seed={105} sw={1} />
      {[-60, -30, 0, 30, 60].map((a, i) => {
        const r = (a - 90) * (Math.PI / 180)
        return (
          <Ink
            key={i}
            d={handLine(cx + Math.cos(r) * 50, cy + Math.sin(r) * 50, cx + Math.cos(r) * 60, cy + Math.sin(r) * 60, 106 + i, 0.2)}
            w={1.6}
          />
        )
      })}
      <Type x={cx - 50} y={cy - 22} size={13} c={INK_SOFT}>
        11
      </Type>
      <Type x={cx} y={cy - 36} size={13} anchor="middle" c={INK_SOFT}>
        12
      </Type>
      <Type x={cx + 40} y={cy - 22} size={13} c={INK_SOFT}>
        13
      </Type>
      {/* where the true weight sits, in green */}
      <Ink d={handLine(cx, cy - 62, cx, cy - 48, 110, 0.2)} c={TONES.green.ink} w={3} />
      <Anim className="s-var1-needle" origin={[cx, cy]}>
        <Ink d={handLine(cx, cy, cx + 21, cy - 41, 111, 0.2)} c={TONES.red.ink} w={3} />
      </Anim>
      <Oval cx={cx} cy={cy} rx={6} fill={INK} stroke={null} />
      <Type x={cx} y={cy + 36} size={16} anchor="middle" weight={700}>
        12.5 kg
      </Type>
      <Hand x={cx} y={84} size={22} anchor="middle" c={TONES.green.deep}>
        true weight: 12 kg
      </Hand>

      {/* the readings */}
      <Sheet x={470} y={64} w={210} h={238} lines={0} fold={22} seed={120} />
      <Hand x={566} y={108} size={22} anchor="middle" weight={700}>
        weighed 3 times
      </Hand>
      {[0, 1, 2].map((i) => (
        <g key={i} className="s-var1-row" style={{ '--i': i }}>
          <Type x={500} y={146 + i * 28} size={17}>
            {`try ${i + 1}: 12.5 kg`}
          </Type>
        </g>
      ))}
      <Hand x={500} y={244} size={19}>
        consistent
      </Hand>
      <Tick x={608} y={236} s={1.1} />
      <Hand x={500} y={278} size={19}>
        correct
      </Hand>
      <Cross x={600} y={272} s={0.9} seed={121} />

      <Shadow x={730} y={FLOOR + 3} rx={26} ry={4} />
      <Place x={730} y={FLOOR} s={1.2}>
        <g className="s-var1-pip">
          <Pip mood="worried" arms="think" tone="amber" glasses look={-1.6} seed={122} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Four targets: neither, reliable only, centred but loose, both.
   ------------------------------------------------------------------ */

const differenceCss = `
.s-var2-dart { animation: s-var2-land 5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.18s); }
@keyframes s-var2-land {
  0%, 70%, 100% { transform: translate(0, 0); }
  76% { transform: translate(4px, -4px); }
  82% { transform: translate(0, 0); }
}
.s-var2-best { animation: s-var2-glow 5s ease-in-out infinite; }
@keyframes s-var2-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}
`

const BOARDS = [
  {
    x: 104,
    label: 'neither',
    sub: 'all over',
    tone: 'red',
    darts: [[70, 150], [140, 128], [120, 210], [64, 196], [146, 176]],
  },
  {
    x: 302,
    label: 'reliable',
    sub: 'tight, off centre',
    tone: 'blue',
    darts: [[322, 132], [334, 128], [328, 142], [316, 140]],
  },
  {
    x: 500,
    label: 'loose',
    sub: 'around the centre',
    tone: 'amber',
    darts: [[474, 150], [530, 160], [492, 200], [520, 196]],
  },
  {
    x: 698,
    label: 'both',
    sub: 'tight, on centre',
    tone: 'green',
    darts: [[696, 176], [704, 170], [702, 184], [690, 180]],
  },
]

export function DifferenceScene() {
  let n = 0
  return (
    <Scene
      w={800}
      h={300}
      top={40}
      css={differenceCss}
      className="s-var2"
      label="Four targets in a row: darts scattered all over the first, a tight group off centre on the second labelled reliable, a loose spread around the centre on the third, and a tight group on the centre of the fourth labelled both"
    >
      {BOARDS.map((b, bi) => (
        <g key={bi}>
          <Target x={b.x} y={174} r={74} seed={200 + bi * 5} />
          {b.darts.map(([x, y], i) => {
            n += 1
            return (
              <Place key={i} x={0} y={0}>
                <Anim className="s-var2-dart" style={{ '--i': n }}>
                  <Dart x={x} y={y} tone={b.tone} s={0.85} seed={220 + n} />
                </Anim>
              </Place>
            )
          })}
          <Hand x={b.x} y={290} size={24} anchor="middle" weight={700}>
            {b.label}
          </Hand>
          <Hand x={b.x} y={316} size={17} anchor="middle" c={INK_SOFT}>
            {b.sub}
          </Hand>
        </g>
      ))}
      <Anim className="s-var2-best" spin>
        <Sparkle x={772} y={94} s={12} />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Three kinds of consistency: over time, between raters, across items.
   ------------------------------------------------------------------ */

const reliabilityCss = `
.s-var3-eq { animation: s-var3-pulse 3s ease-in-out infinite; }
@keyframes s-var3-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.s-var3-rater .pip-arm-r { animation: s-var3-mark 2.4s ease-in-out infinite; }
@keyframes s-var3-mark {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
.s-var3 .chart-bar { animation: s-var3-rise 4s ease-in-out infinite; }
@keyframes s-var3-rise {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.78); }
}
`

export function ReliabilityTypesScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={reliabilityCss}
      className="s-var3"
      label="Three panels: the same form filled two weeks apart with nearly the same score, two raters giving one answer the same mark, and five item bars that rise and fall together"
    >
      {/* test-retest */}
      <Hand x={130} y={52} size={24} anchor="middle" weight={700}>
        test-retest
      </Hand>
      <Sheet x={36} y={96} w={74} h={96} lines={3} seed={301} />
      <Type x={73} y={176} size={20} anchor="middle" weight={700}>
        34
      </Type>
      <Sheet x={150} y={96} w={74} h={96} lines={3} seed={302} />
      <Type x={187} y={176} size={20} anchor="middle" weight={700}>
        33
      </Type>
      <g className="s-var3-eq">
        <Hand x={130} y={152} size={30} anchor="middle" weight={700}>
          =
        </Hand>
      </g>
      <Calendar x={92} y={208} w={76} h={78} day="+14" month="DAYS" tone="amber" seed={303} />

      <Ink d={handLine(266, 60, 266, 290, 304, 1)} c={TEXT_LINE} w={1.4} />

      {/* inter-rater */}
      <Hand x={400} y={52} size={24} anchor="middle" weight={700}>
        inter-rater
      </Hand>
      <Sheet x={364} y={88} w={72} h={90} lines={4} seed={311} />
      <Speech2 x={290} y={92} text="4" />
      <Speech2 x={460} y={92} text="4" />
      <Floor y={FLOOR} x1={290} x2={510} seed={312} />
      <Place x={322} y={FLOOR} s={1.05}>
        <g className="s-var3-rater">
          <Pip mood="focused" arms="write" tone="blue" look={1.4} seed={313} />
        </g>
      </Place>
      <Place x={478} y={FLOOR} s={1.05} flip>
        <g className="s-var3-rater">
          <Pip mood="focused" arms="write" tone="pink" look={1.4} seed={314} />
        </g>
      </Place>

      <Ink d={handLine(534, 60, 534, 290, 315, 1)} c={TEXT_LINE} w={1.4} />

      {/* internal consistency */}
      <Hand x={668} y={52} size={24} anchor="middle" weight={700}>
        internal consistency
      </Hand>
      <Chart x={586} y={250} w={170} h={140} bars={[0.72, 0.78, 0.7, 0.76, 0.74]} tone="green" seed={321} />
      <Hand x={668} y={282} size={17} anchor="middle" c={INK_SOFT}>
        items move together
      </Hand>
    </Scene>
  )
}

/* A small score bubble above a rater. Anchor: top-left. */
function Speech2({ x, y, text }) {
  return (
    <g>
      <Box x={x} y={y} w={52} h={40} r={10} fill={PAPER} seed={x} />
      <Type x={x + 26} y={y + 28} size={20} anchor="middle" weight={700}>
        {text}
      </Type>
      <Ink d={handLine(x + 26, y + 40, x + 26, y + 70, x + 1, 0.3)} c={INK_SOFT} w={1.2} dash="3 4" />
    </g>
  )
}

/* ------------------------------------------------------------------
   4. Content validity: the questions must cover every part of the idea.
   ------------------------------------------------------------------ */

const validityCss = `
.s-var4-piece { animation: s-var4-fit 5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-var4-fit {
  0%, 100% { transform: translate(0, 0); }
  40% { transform: translate(-6px, 4px); }
}
.s-var4-stray { animation: s-var4-drift 4s ease-in-out infinite; }
@keyframes s-var4-drift {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(6px, -6px) rotate(8deg); }
}
.s-var4-pip .pip-body { animation: s-var4-nod 3s ease-in-out infinite; }
@keyframes s-var4-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function ValidityTypesScene() {
  const FLOOR = 330
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={validityCss}
      className="s-var4"
      label="A thought cloud labelled burnout holding three puzzle pieces, each a part of the idea, with a stray piece labelled tiredness outside it crossed out, while an expert checks every question on a clipboard"
    >
      <Thought x={300} y={176} w={350} h={236} seed={401} />
      <Hand x={300} y={102} size={28} anchor="middle" weight={700}>
        burnout
      </Hand>
      {[
        [220, 190, 'amber'],
        [300, 200, 'pink'],
        [380, 190, 'blue'],
      ].map(([x, y, tone], i) => (
        <Place key={i} x={x} y={y}>
          <Anim className="s-var4-piece" style={{ '--i': i }}>
            <Puzzle x={0} y={0} s={0.95} tone={tone} seed={410 + i} />
          </Anim>
        </Place>
      ))}
      <Hand x={300} y={250} size={18} anchor="middle" c={INK_SOFT}>
        every part, and only these
      </Hand>

      <Place x={84} y={84}>
        <Anim className="s-var4-stray" spin>
          <Puzzle x={0} y={0} s={0.7} tone="grey" seed={420} />
        </Anim>
      </Place>
      <Hand x={84} y={146} size={18} anchor="middle" c={INK_SOFT}>
        tiredness?
      </Hand>
      <Cross x={84} y={84} s={1.6} seed={421} />

      <Checklist x={540} y={110} w={120} items={4} done={4} seed={430} />
      <Hand x={600} y={88} size={20} anchor="middle" weight={700}>
        expert review
      </Hand>
      <Floor y={FLOOR} x1={500} x2={780} seed={431} />
      <Shadow x={720} y={FLOOR + 3} rx={26} ry={4} />
      <Place x={720} y={FLOOR} s={1.25} flip>
        <g className="s-var4-pip">
          <Pip mood="focused" arms="point" tone="green" glasses look={1.6} seed={432} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Inside the study, a confound; outside it, a question of travel.
   ------------------------------------------------------------------ */

const internalCss = `
.s-var5-confound { animation: s-var5-sneak 4s ease-in-out infinite; }
@keyframes s-var5-sneak {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(8px); }
}
.s-var5-q { animation: s-var5-blink 3s ease-in-out infinite; }
@keyframes s-var5-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.s-var5-trip { animation: s-var5-go 4.5s ease-in-out infinite; }
@keyframes s-var5-go {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
`

export function InternalExternalScene() {
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={internalCss}
      className="s-var5"
      label="On the left, inside a box labelled internal, a workshop arrow and a dashed pay rise arrow both point at falling burnout bars, with a question mark over which caused it; on the right, labelled external, an arrow carries the result from a rural block to a city with a question mark"
    >
      <Box x={30} y={60} w={430} h={270} r={14} fill={TONES.amber.tint} seed={501} />
      <Hand x={245} y={96} size={26} anchor="middle" weight={700}>
        internal: was it really the cause?
      </Hand>
      <Sheet x={60} y={130} w={110} h={64} lines={2} tone="paper" seed={502} />
      <Hand x={115} y={180} size={18} anchor="middle">
        workshop
      </Hand>
      <Arrow from={[176, 162]} to={[282, 196]} bend={-0.1} seed={503} w={2.2} />
      <Place x={0} y={0}>
        <Anim className="s-var5-confound">
          <Box x={60} y={232} w={110} h={48} r={8} fill={TONES.green.tint} seed={504} />
          <Hand x={115} y={264} size={18} anchor="middle">
            pay rise
          </Hand>
          <Arrow from={[176, 254]} to={[282, 230]} bend={0.1} seed={505} w={2} dash="6 6" />
        </Anim>
      </Place>
      <Chart x={296} y={300} w={140} h={130} bars={[0.9, 0.7, 0.45]} tone="red" seed={506} />
      <Hand x={366} y={322} size={17} anchor="middle" c={INK_SOFT}>
        burnout falls
      </Hand>
      <g className="s-var5-q">
        <Hand x={420} y={150} size={44} anchor="middle" weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      </g>

      <Hand x={630} y={96} size={26} anchor="middle" weight={700}>
        external: does it travel?
      </Hand>
      <Village x={540} y={250} />
      <Hand x={540} y={290} size={17} anchor="middle" c={INK_SOFT}>
        rural block
      </Hand>
      <City x={720} y={250} />
      <Hand x={720} y={290} size={17} anchor="middle" c={INK_SOFT}>
        city
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-var5-trip">
          <Arrow from={[576, 168]} to={[676, 168]} bend={-0.25} seed={510} w={2.2} />
        </Anim>
      </Place>
      <g className="s-var5-q">
        <Hand x={630} y={140} size={34} anchor="middle" weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      </g>
    </Scene>
  )
}

/* A couple of huts under a tree. Anchor: bottom centre. */
function Village({ x, y }) {
  const hut = (hx, w, tone, seed) => (
    <g>
      <Box x={hx - w / 2} y={y - w * 0.7} w={w} h={w * 0.7} fill={TONES[tone].tint} seed={seed} />
      <path d={`M${hx - w / 2 - 6} ${y - w * 0.7}L${hx} ${y - w * 1.25}L${hx + w / 2 + 6} ${y - w * 0.7}Z`} fill="url(#fill-brown)" />
      <Ink d={handPoly([[hx - w / 2 - 6, y - w * 0.7], [hx, y - w * 1.25], [hx + w / 2 + 6, y - w * 0.7]], { seed: seed + 1, amp: 0.4, closed: true })} />
    </g>
  )
  return (
    <g>
      {hut(x - 24, 40, 'amber', 520)}
      {hut(x + 26, 34, 'pink', 523)}
      <Ink d={handLine(x - 60, y, x + 60, y, 526, 0.6)} w={1.8} />
    </g>
  )
}

/* Three tall blocks of flats. Anchor: bottom centre. */
function City({ x, y }) {
  const blocks = [
    [x - 44, 26, 80, 'blue'],
    [x - 14, 30, 110, 'grey'],
    [x + 20, 26, 92, 'blue'],
  ]
  return (
    <g>
      {blocks.map(([bx, w, h, tone], i) => (
        <g key={i}>
          <Box x={bx} y={y - h} w={w} h={h} fill={TONES[tone].tint} seed={530 + i} />
          {[0, 1, 2, 3].map((r) => (
            <rect key={r} x={bx + 6} y={y - h + 10 + r * 20} width={w - 12} height={7} fill={TONES[tone].mid} />
          ))}
        </g>
      ))}
      <Ink d={handLine(x - 60, y, x + 60, y, 536, 0.6)} w={1.8} />
    </g>
  )
}

/* ------------------------------------------------------------------
   6. The alpha dial: too low, a comfortable band, and possible repeats.
   ------------------------------------------------------------------ */

const alphaCss = `
.s-var6-needle { animation: s-var6-sweep 6s ease-in-out infinite; }
@keyframes s-var6-sweep {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-38deg); }
  60% { transform: rotate(0deg); }
}
.s-var6-pip .pip-arm-r { animation: s-var6-point 3s ease-in-out infinite; }
@keyframes s-var6-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

function dial(cx, cy, r, v) {
  const a = Math.PI * (1 - v)
  return [cx + Math.cos(a) * r, cy - Math.sin(a) * r]
}

function arc(cx, cy, r, v1, v2) {
  const [x1, y1] = dial(cx, cy, r, v1)
  const [x2, y2] = dial(cx, cy, r, v2)
  return `M${x1.toFixed(1)} ${y1.toFixed(1)}A${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`
}

export function AlphaScene() {
  const cx = 330
  const cy = 280
  const R = 170
  const tip = dial(cx, cy, R - 30, 0.82)
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={alphaCss}
      className="s-var6"
      label="A half-circle dial for Cronbach's alpha from 0 to 1, red below 0.7, green from 0.7 to 0.9 and amber above 0.9 marked check for repeats, with the needle settling in the green band"
    >
      <Ink d={arc(cx, cy, R, 0.01, 0.7)} c={TONES.red.mid} w={26} scale />
      <Ink d={arc(cx, cy, R, 0.7, 0.9)} c={TONES.green.mid} w={26} scale />
      <Ink d={arc(cx, cy, R, 0.9, 0.99)} c={TONES.amber.mid} w={26} scale />
      <Ink d={arc(cx, cy, R + 14, 0, 1)} w={1.8} />
      <Ink d={arc(cx, cy, R - 14, 0, 1)} w={1.8} />
      {[0, 0.7, 0.9, 1].map((v, i) => {
        const [x1, y1] = dial(cx, cy, R - 14, v)
        const [x2, y2] = dial(cx, cy, R + 24, v)
        const [tx, ty] = dial(cx, cy, R + 44, v)
        return (
          <g key={i}>
            <Ink d={handLine(x1, y1, x2, y2, 600 + i, 0.3)} w={2} />
            <Type x={tx} y={ty + 6} size={17} anchor="middle" weight={700}>
              {String(v)}
            </Type>
          </g>
        )
      })}
      <Hand x={cx - 120} y={cy - 40} size={18} anchor="middle" c={TONES.red.deep}>
        too low
      </Hand>
      <Hand x={566} y={150} size={18} c={TONES.amber.deep}>
        above 0.9:
      </Hand>
      <Hand x={566} y={174} size={18} c={TONES.amber.deep}>
        check for repeats
      </Hand>
      <Hand x={cx} y={cy - 36} size={30} anchor="middle" weight={700}>
        alpha
      </Hand>
      <Anim className="s-var6-needle" origin={[cx, cy]}>
        <Ink d={handLine(cx, cy, tip[0], tip[1], 610, 0.2)} w={4} />
      </Anim>
      <Oval cx={cx} cy={cy} rx={10} fill={INK} stroke={null} />

      <Floor y={FLOOR} x1={600} x2={780} seed={620} />
      <Shadow x={690} y={FLOOR + 3} rx={26} ry={4} />
      <Place x={690} y={FLOOR} s={1.3} flip>
        <g className="s-var6-pip">
          <Pip mood="happy" arms="point" tone="amber" glasses look={1.4} seed={621} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Four pillars of trustworthiness holding up the findings.
   ------------------------------------------------------------------ */

const qualitativeCss = `
.s-var7-roof { animation: s-var7-settle 4s ease-in-out infinite; }
@keyframes s-var7-settle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.s-var7-pillar { animation: s-var7-glow 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-var7-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
}
`

const PILLARS = [
  ['credibility', 'amber'],
  ['transferability', 'green'],
  ['dependability', 'blue'],
  ['confirmability', 'pink'],
]

export function QualitativeScene() {
  const FLOOR = 320
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={qualitativeCss}
      className="s-var7"
      label="A long sheet labelled findings resting on four pillars named credibility, transferability, dependability and confirmability"
    >
      <Floor y={FLOOR} x1={60} x2={740} seed={701} />
      <path d={`M90 ${FLOOR}h620v-14h-620Z`} fill={TONES.grey.tint} />
      <Ink d={handPoly([[90, FLOOR], [710, FLOOR], [710, FLOOR - 14], [90, FLOOR - 14]], { seed: 702, amp: 0.4, closed: true })} />
      {PILLARS.map(([name, tone], i) => {
        const x = 130 + i * 150
        return (
          <g key={name} className="s-var7-pillar" style={{ '--i': i }}>
            <Box x={x} y={130} w={90} h={FLOOR - 144} fill={TONES[tone].tint} seed={710 + i} />
            <Ink d={handLine(x + 22, 140, x + 22, FLOOR - 24, 720 + i, 0.4) + handLine(x + 68, 140, x + 68, FLOOR - 24, 730 + i, 0.4)} c={TONES[tone].ink} w={1.4} o={0.7} />
            <Hand x={x + 51} y={FLOOR - 90} size={i === 1 ? 14 : 15} anchor="middle" weight={700} rotate={-90}>
              {name}
            </Hand>
          </g>
        )
      })}
      <Place x={0} y={0}>
        <Anim className="s-var7-roof">
          <Sheet x={100} y={74} w={600} h={56} lines={0} fold={18} seed={740} />
          <Hand x={400} y={112} size={28} anchor="middle" weight={700}>
            findings
          </Hand>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. From a borrowed English form to a checked Odia one.
   ------------------------------------------------------------------ */

const ensureCss = `
.s-var8 .check-tick { animation: s-var8-tick 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-var8-tick {
  0%, 10% { stroke-dashoffset: 1; }
  30%, 100% { stroke-dashoffset: 0; }
}
.s-var8-walk { animation: s-var8-step 6s ease-in-out infinite; }
@keyframes s-var8-step {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(16px); }
}
.s-var8-walk .pip-leg-l { animation: s-var8-legl 0.75s ease-in-out infinite; }
.s-var8-walk .pip-leg-r { animation: s-var8-legr 0.75s ease-in-out infinite; }
@keyframes s-var8-legl {
  0%, 100% { transform: rotate(10deg); }
  50% { transform: rotate(-10deg); }
}
@keyframes s-var8-legr {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
}
`

const STEPS = ['translate', 'experts', 'pilot', 'alpha']

export function EnsureScene() {
  const FLOOR = 320
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={ensureCss}
      className="s-var8"
      label="A form labelled English on the left and a form labelled Odia with a green tick on the right, joined by four stepping stones named translate, experts, pilot and alpha, with a paper character walking across"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={801} />
      <Sheet x={40} y={120} w={100} h={130} lines={6} seed={802} />
      <Hand x={90} y={100} size={22} anchor="middle" weight={700}>
        English form
      </Hand>
      <Sheet x={660} y={120} w={100} h={130} lines={6} tone="green" seed={803} />
      <Hand x={710} y={100} size={22} anchor="middle" weight={700}>
        Odia form
      </Hand>
      <Tick x={724} y={276} s={1.8} />

      {STEPS.map((name, i) => {
        const x = 220 + i * 120
        return (
          <g key={name}>
            <Blob
              points={[[x - 50, FLOOR - 4], [x - 44, FLOOR - 34], [x, FLOOR - 42], [x + 44, FLOOR - 34], [x + 50, FLOOR - 4], [x, FLOOR + 2]]}
              fill={TONES.grey.tint}
              seed={810 + i}
            />
            <Hand x={x} y={FLOOR - 13} size={18} anchor="middle" weight={700}>
              {name}
            </Hand>
          </g>
        )
      })}
      <Checklist x={420} y={50} w={110} items={4} done={4} seed={820} />

      <Place x={340} y={FLOOR - 40} s={1.15}>
        <g className="s-var8-walk">
          <Pip mood="happy" arms="hold" tone="amber" glasses look={1.6} seed={821} />
        </g>
      </Place>
      <Plant x={770} y={FLOOR} s={0.7} seed={822} />
    </Scene>
  )
}
