import {
  Anim,
  Arrow,
  Blob,
  Box,
  Chai,
  Desk,
  Door,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pencil,
  Pip,
  Place,
  Plant,
  Poly,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TEXT_LINE,
  TONES,
  Target,
  Tuft,
  handEllipse,
  handLine,
  rng,
} from '../../ink/index.js'

/*
 * The people in these drawings are small pawns: a round head on a dome of a
 * body, coloured by the group they belong to. Anchor: the middle of the base.
 */
export function Folk({ x, y, s = 1, tone = 'amber', seed = 1 }) {
  const body = `M${x - 9 * s} ${y}Q${x - 9.5 * s} ${y - 14 * s} ${x} ${y - 15 * s}Q${x + 9.5 * s} ${y - 14 * s} ${x + 9 * s} ${y}Z`
  return (
    <g>
      <path d={body} fill={`url(#fill-${tone})`} />
      <Ink d={body} w={1.4} />
      <Oval cx={x} cy={y - 21 * s} rx={6 * s} fill={PAPER} seed={seed} sw={1.4} />
    </g>
  )
}

/* A loose ring drawn round a chosen person. */
function Ring({ x, y, s = 1, tone = 'red', seed = 1, className, style }) {
  return (
    <g className={className} style={style}>
      <Ink d={handEllipse(x, y - 13 * s, 15 * s, 19 * s, { seed, amp: 0.6, overlap: 0.15 })} c={TONES[tone].ink} w={2.4} />
    </g>
  )
}

/* People scattered over a box, in the given tones, with no two too close. */
function scatter(n, [x, y, w, h], tones, seed) {
  const r = rng(seed)
  const out = []
  let tries = 0
  while (out.length < n && tries < 2000) {
    tries += 1
    const px = x + r() * w
    const py = y + r() * h
    if (out.every((p) => Math.hypot(p.x - px, (p.y - py) * 1.3) > 30)) {
      out.push({ x: Math.round(px), y: Math.round(py), tone: tones[out.length % tones.length] })
    }
  }
  return out.sort((a, b) => a.y - b.y)
}

const MIX = ['amber', 'green', 'amber', 'blue', 'green', 'amber']

/* ------------------------------------------------------------------
   1. Population, frame, sample.
   ------------------------------------------------------------------ */

const whatCss = `
.s-smp1-arrow { animation: s-smp1-nudge 3s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-smp1-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
.s-smp1-pick { animation: s-smp1-hop 3s ease-in-out infinite; animation-delay: calc(var(--i) * 0.25s); }
@keyframes s-smp1-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-7px); }
}
.s-smp1-row { animation: s-smp1-mark 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
@keyframes s-smp1-mark {
  0%, 50%, 100% { opacity: 1; }
  70%, 85% { opacity: 0.15; }
}
`

const WHAT_FOLK = scatter(22, [70, 110, 230, 170], MIX, 7)

export function WhatScene() {
  const sample = [
    { x: 622, y: 200, tone: 'amber' },
    { x: 660, y: 200, tone: 'green' },
    { x: 698, y: 200, tone: 'amber' },
    { x: 641, y: 238, tone: 'blue' },
    { x: 679, y: 238, tone: 'amber' },
  ]
  return (
    <Scene
      w={800}
      h={330}
      top={20}
      css={whatCss}
      className="s-smp1"
      label="A wide field of little people in three colours labelled population, an arrow to a list labelled the frame with names being marked, and an arrow to a small circle labelled sample holding five people in the same mix of colours"
    >
      <Hand x={190} y={62} size={28} anchor="middle" weight={700}>
        population
      </Hand>
      <Blob
        points={[[50, 120], [120, 84], [250, 82], [330, 112], [348, 210], [320, 300], [200, 318], [80, 304], [40, 220]]}
        fill={TONES.green.tint}
        seed={11}
      />
      {WHAT_FOLK.map((p, i) => (
        <Folk key={i} x={p.x} y={p.y + 20} s={0.95} tone={p.tone} seed={20 + i} />
      ))}

      <g className="s-smp1-arrow">
        <Arrow from={[356, 196]} to={[402, 196]} bend={0} seed={50} w={2.2} />
      </g>

      <Sheet x={414} y={92} w={124} h={196} lines={0} fold={20} seed={51} />
      <Hand x={468} y={132} size={22} anchor="middle" weight={700}>
        the frame
      </Hand>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const y = 160 + i * 21
        return (
          <g key={i}>
            <Ink d={handLine(432, y, 432 + 60 + ((i * 17) % 26), y, 60 + i, 0.4)} c={TEXT_LINE} w={1.8} />
            {i % 2 === 0 ? (
              <g className="s-smp1-row" style={{ '--i': i / 2 }}>
                <Ink d={handLine(428, y, 516, y, 70 + i, 0.4)} c={TONES.amber.ink} w={7} o={0.45} />
              </g>
            ) : null}
          </g>
        )
      })}

      <g className="s-smp1-arrow" style={{ '--d': '-1.5s' }}>
        <Arrow from={[548, 196]} to={[586, 196]} bend={0} seed={80} w={2.2} />
      </g>

      <Hand x={662} y={110} size={28} anchor="middle" weight={700}>
        sample
      </Hand>
      <Oval cx={662} cy={210} rx={72} ry={70} fill={TONES.amber.tint} seed={81} sw={2} />
      {sample.map((p, i) => (
        <g key={i} className="s-smp1-pick" style={{ '--i': i }}>
          <Folk x={p.x} y={p.y + 20} s={0.95} tone={p.tone} seed={90 + i} />
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Two families: a lottery pot, and the nearest hands.
   ------------------------------------------------------------------ */

const familiesCss = `
.s-smp2-chit { animation: s-smp2-rise 4s ease-in-out infinite; animation-delay: calc(var(--i) * -1.3s); opacity: 0; }
@keyframes s-smp2-rise {
  0% { transform: translate(0, 20px) rotate(0deg); opacity: 0; }
  15% { opacity: 1; }
  60% { transform: translate(var(--dx), -60px) rotate(var(--r)); opacity: 1; }
  80%, 100% { transform: translate(var(--dx), -70px) rotate(var(--r)); opacity: 0; }
}
.s-smp2-pip .pip-arm-r { animation: s-smp2-reach 2.6s ease-in-out infinite; }
@keyframes s-smp2-reach {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
.s-smp2-near { animation: s-smp2-glow 2.6s ease-in-out infinite; }
@keyframes s-smp2-glow {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
`

export function FamiliesScene() {
  const far = [
    { x: 700, y: 200, tone: 'blue' },
    { x: 740, y: 228, tone: 'green' },
    { x: 690, y: 252, tone: 'amber' },
    { x: 744, y: 276, tone: 'blue' },
  ]
  const near = [
    { x: 548, y: 286, tone: 'amber' },
    { x: 586, y: 300, tone: 'amber' },
  ]
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={familiesCss}
      className="s-smp2"
      label="On the left, chits rise out of a lottery pot labelled chance picks, beside a paper character holding a chit. On the right, a paper character reaches for the two people standing nearest, while others stand further away, labelled you pick"
    >
      <Floor y={312} x1={30} x2={770} seed={200} />
      <Ink d={handLine(400, 40, 400, 312, 201, 1.2)} c={INK_SOFT} w={1.6} dash="6 8" />

      <Hand x={200} y={56} size={26} anchor="middle" weight={700}>
        probability
      </Hand>
      <Hand x={200} y={84} size={20} anchor="middle" c={INK_SOFT}>
        chance picks
      </Hand>
      <Hand x={600} y={56} size={26} anchor="middle" weight={700}>
        non-probability
      </Hand>
      <Hand x={600} y={84} size={20} anchor="middle" c={INK_SOFT}>
        you pick
      </Hand>

      {[0, 1, 2].map((i) => (
        <g key={i} className="s-smp2-chit" style={{ '--i': i, '--dx': `${(i - 1) * 34}px`, '--r': `${(i - 1) * 18}deg` }}>
          <Box x={140} y={186} w={26} h={16} fill={PAPER} seed={210 + i} sw={1.3} />
          <Ink d={handLine(145, 194, 160, 194, 215 + i, 0.3)} c={TEXT_LINE} w={1.4} />
        </g>
      ))}
      <Poly points={[[100, 214], [208, 214], [192, 310], [116, 310]]} fill="url(#fill-brown)" seed={220} />
      <Oval cx={154} cy={214} rx={58} ry={10} fill={TONES.brown.deep} seed={221} />
      <Hand x={154} y={270} size={20} anchor="middle" weight={700} c={PAPER}>
        all names
      </Hand>

      <Shadow x={290} y={314} rx={34} ry={4.5} />
      <Place x={290} y={312} s={1.55}>
        <Pip mood="happy" arms="hold" tone="green" look={-1.4} seed={230}>
          <Box x={-10} y={-34} w={20} h={12} fill={PAPER} seed={231} sw={1.2} />
        </Pip>
      </Place>

      <Door x={712} y={312} w={60} h={112} open={0.3} tone="amber" seed={240} />
      {far.map((p, i) => (
        <Folk key={i} x={p.x - 50} y={p.y + 20} s={0.9} tone={p.tone} seed={250 + i} />
      ))}
      {near.map((p, i) => (
        <g key={i}>
          <Folk x={p.x} y={p.y} s={0.9} tone={p.tone} seed={260 + i} />
          <Ring x={p.x} y={p.y} s={0.9} tone="red" seed={262 + i} className="s-smp2-near" />
        </g>
      ))}

      <Shadow x={470} y={314} rx={34} ry={4.5} />
      <Place x={470} y={312} s={1.55}>
        <g className="s-smp2-pip">
          <Pip mood="happy" arms="point" tone="pink" look={1.6} seed={270} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The four probability methods, one panel each.
   ------------------------------------------------------------------ */

const probCss = `
.s-smp3-ring { animation: s-smp3-pulse 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.35s); }
@keyframes s-smp3-pulse {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.25; }
}
`

function Panel({ x, y, w, h, title, tone, seed }) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} fill={PAPER} seed={seed} />
      <Hand x={x + 18} y={y + 32} size={23} weight={700}>
        {title}
      </Hand>
      <Ink d={handLine(x + 18, y + 40, x + 18 + title.length * 10.5, y + 40, seed + 1, 0.4)} c={TONES[tone].ink} w={2.2} />
    </g>
  )
}

/* A small person and, when chosen, a ring that pulses. */
function Mark({ x, y, tone, chosen, i, seed }) {
  return (
    <g>
      <Folk x={x} y={y} s={0.62} tone={chosen ? tone : 'grey'} seed={seed} />
      {chosen ? <Ring x={x} y={y} s={0.62} tone="red" seed={seed + 1} className="s-smp3-ring" style={{ '--i': i }} /> : null}
    </g>
  )
}

export function ProbabilityScene() {
  const random = new Set([2, 9, 13, 20, 22, 27])
  return (
    <Scene
      w={800}
      h={380}
      css={probCss}
      className="s-smp3"
      label="Four panels of little people. Simple random: six people circled anywhere in the crowd. Systematic: every fourth person in a line circled. Stratified: two people circled in each of three coloured bands. Cluster: two whole circles of people picked out of five"
    >
      <Panel x={20} y={14} w={370} h={170} title="simple random" tone="green" seed={300} />
      {Array.from({ length: 30 }, (_, i) => {
        const col = i % 10
        const row = Math.floor(i / 10)
        return <Mark key={i} x={52 + col * 33} y={88 + row * 38} tone="green" chosen={random.has(i)} i={i % 4} seed={310 + i * 2} />
      })}

      <Panel x={410} y={14} w={370} h={170} title="systematic" tone="blue" seed={380} />
      <Hand x={760} y={44} size={18} anchor="end" c={INK_SOFT}>
        start at 2, then every 4th
      </Hand>
      {Array.from({ length: 20 }, (_, i) => {
        const col = i % 10
        const row = Math.floor(i / 10)
        return <Mark key={i} x={442 + col * 33} y={106 + row * 48} tone="blue" chosen={i % 4 === 1} i={Math.floor(i / 4)} seed={390 + i * 2} />
      })}

      <Panel x={20} y={198} w={370} h={170} title="stratified" tone="amber" seed={440} />
      {['amber', 'green', 'blue'].map((tone, band) => (
        <g key={tone}>
          <rect x={36} y={244 + band * 40} width={338} height={36} fill={TONES[tone].tint} opacity="0.8" />
          {Array.from({ length: 9 }, (_, i) => (
            <Mark key={i} x={60 + i * 36} y={276 + band * 40} tone={tone} chosen={i === (band * 3 + 1) % 9 || i === (band * 2 + 6) % 9} i={band} seed={450 + band * 20 + i * 2} />
          ))}
        </g>
      ))}

      <Panel x={410} y={198} w={370} h={170} title="cluster" tone="pink" seed={520} />
      {[0, 1, 2, 3, 4].map((c) => {
        const cx = 456 + c * 68
        const cy = c % 2 ? 318 : 300
        const chosen = c === 1 || c === 4
        return (
          <g key={c}>
            <Oval cx={cx} cy={cy} rx={30} ry={34} fill={chosen ? TONES.pink.tint : PAPER} seed={530 + c} stroke={chosen ? TONES.pink.deep : INK} sw={chosen ? 2.4 : 1.5} />
            {[[-11, -6], [11, -6], [-11, 22], [11, 22]].map(([dx, dy], k) => (
              <Folk key={k} x={cx + dx} y={cy + dy} s={0.5} tone={chosen ? 'pink' : 'grey'} seed={540 + c * 8 + k} />
            ))}
            {chosen ? <Tick x={cx + 22} y={cy - 34} /> : null}
          </g>
        )
      })}
    </Scene>
  )
}

function Tick({ x, y }) {
  return <Ink d={`M${x - 8} ${y}q4 2 6 8q5 -12 13 -18`} c="#3f8f4f" w={3} />
}

/* ------------------------------------------------------------------
   4. The non-probability methods, one panel each.
   ------------------------------------------------------------------ */

const nonCss = `
.s-smp4-ring { animation: s-smp4-pulse 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-smp4-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.s-smp4-link { animation: s-smp4-grow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-smp4-grow {
  0%, 60%, 100% { opacity: 1; }
  75%, 85% { opacity: 0.2; }
}
.s-smp4-slot { animation: s-smp4-fill 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-smp4-fill {
  0%, 78%, 100% { opacity: 1; }
  84%, 94% { opacity: 0; }
}
`

export function NonProbabilityScene() {
  return (
    <Scene
      w={800}
      h={380}
      css={nonCss}
      className="s-smp4"
      label="Four panels. Convenience: only the people standing nearest a gate are circled. Purposive: only the people carrying a drip pipe are circled. Quota: two boxes of five slots each fill up. Snowball: one person points to the next, who points to the next"
    >
      <Panel x={20} y={14} w={370} h={170} title="convenience" tone="red" seed={600} />
      <Poly points={[[44, 168], [44, 92], [74, 80], [74, 168]]} fill="url(#fill-brown)" seed={610} />
      <Hand x={59} y={70} size={16} anchor="middle" c={INK_SOFT}>
        gate
      </Hand>
      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 6
        const row = Math.floor(i / 6)
        const x = 104 + col * 46
        const y = 120 + row * 44
        const chosen = col < 2
        return (
          <g key={i}>
            <Folk x={x} y={y} s={0.62} tone={chosen ? 'red' : 'grey'} seed={620 + i * 2} />
            {chosen ? <Ring x={x} y={y} s={0.62} seed={621 + i * 2} className="s-smp4-ring" style={{ '--i': i % 3 }} /> : null}
          </g>
        )
      })}

      <Panel x={410} y={14} w={370} h={170} title="purposive" tone="green" seed={660} />
      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 6
        const row = Math.floor(i / 6)
        const x = 450 + col * 52
        const y = 120 + row * 44
        const chosen = i === 2 || i === 7 || i === 10
        return (
          <g key={i}>
            <Folk x={x} y={y} s={0.62} tone={chosen ? 'green' : 'grey'} seed={670 + i * 2} />
            {chosen ? (
              <g>
                <Ink d={`M${x + 6} ${y - 4}q10 -2 12 -12`} c={TONES.blue.ink} w={2.6} />
                <circle cx={x + 18} cy={y - 17} r={2.2} fill={TONES.blue.ink} />
                <Ring x={x} y={y} s={0.62} tone="green" seed={671 + i * 2} className="s-smp4-ring" style={{ '--i': i % 3 }} />
              </g>
            ) : null}
          </g>
        )
      })}

      <Panel x={20} y={198} w={370} h={170} title="quota" tone="amber" seed={700} />
      {[
        { x: 44, label: '5 men', tone: 'blue' },
        { x: 212, label: '5 women', tone: 'pink' },
      ].map((box, b) => (
        <g key={box.label}>
          <Hand x={box.x + 76} y={268} size={20} anchor="middle" weight={700}>
            {box.label}
          </Hand>
          <Box x={box.x} y={278} w={152} h={60} r={6} fill={PAPER} seed={710 + b} />
          {[0, 1, 2, 3, 4].map((k) => (
            <g key={k}>
              <Ink d={handLine(box.x + 14 + k * 27, 330, box.x + 34 + k * 27, 330, 720 + b * 10 + k, 0.3)} c={TEXT_LINE} w={1.5} />
              <g className="s-smp4-slot" style={{ '--i': k + b * 5 }}>
                <Folk x={box.x + 24 + k * 27} y={328} s={0.55} tone={box.tone} seed={740 + b * 10 + k} />
              </g>
            </g>
          ))}
        </g>
      ))}

      <Panel x={410} y={198} w={370} h={170} title="snowball" tone="blue" seed={780} />
      {[
        [450, 300],
        [520, 330],
        [590, 290],
        [660, 330],
        [730, 296],
      ].map(([x, y], i, all) => (
        <g key={i} className={i ? 's-smp4-link' : undefined} style={i ? { '--i': i } : undefined}>
          {i ? <Arrow from={[all[i - 1][0] + 12, all[i - 1][1] - 14]} to={[x - 14, y - 14]} bend={-0.25} seed={790 + i} w={1.8} head={8} /> : null}
          <Folk x={x} y={y} s={0.7} tone="blue" seed={800 + i * 2} />
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The fork in the road.
   ------------------------------------------------------------------ */

const chooseCss = `
.s-smp5-board { animation: s-smp5-sway 5s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-smp5-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-2.5deg); }
}
.s-smp5-pip .pip-body { animation: s-smp5-think 3s ease-in-out infinite; }
@keyframes s-smp5-think {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
.s-smp5-q { animation: s-smp5-blink 3s ease-in-out infinite; opacity: 0; }
@keyframes s-smp5-blink {
  0%, 20% { opacity: 0; }
  35%, 70% { opacity: 1; }
  85%, 100% { opacity: 0; }
}
`

function Board({ x, y, w, text, sub, tone, dir, seed, d }) {
  const h = 56
  const tip = dir > 0 ? [[x + w, y], [x + w + 22, y + h / 2], [x + w, y + h]] : [[x, y], [x - 22, y + h / 2], [x, y + h]]
  const pts = dir > 0 ? [[x, y], ...tip, [x, y + h]] : [[x + w, y], [x + w, y + h], ...tip.reverse()]
  return (
    <Anim className="s-smp5-board" origin={[400, y + h / 2]} style={{ '--d': d }}>
      <Poly points={pts} fill={`url(#fill-${tone})`} seed={seed} />
      <Hand x={x + w / 2 + (dir > 0 ? 6 : -6)} y={y + 24} size={20} anchor="middle" weight={700}>
        {text}
      </Hand>
      <Hand x={x + w / 2 + (dir > 0 ? 6 : -6)} y={y + 46} size={17} anchor="middle" c={INK_SOFT}>
        {sub}
      </Hand>
    </Anim>
  )
}

export function ChooseScene() {
  return (
    <Scene
      w={800}
      h={340}
      css={chooseCss}
      className="s-smp5"
      label="A road splits in two at a signpost. The left board reads need reasons, purposive. The right board reads speak for everyone, probability. A paper character with a clipboard stands at the fork, thinking"
    >
      <Ink d="M330 340Q380 260 390 230Q300 210 60 196" c={INK} w={2} />
      <Ink d="M470 340Q420 260 410 230Q500 210 740 196" c={INK} w={2} />
      <Ink d="M390 230Q400 226 410 230" c={INK} w={2} />
      <Ink d="M360 300Q330 240 70 214" c={TEXT_LINE} w={1.6} dash="10 10" />
      <Ink d="M440 300Q470 240 730 214" c={TEXT_LINE} w={1.6} dash="10 10" />
      <Tuft x={110} y={250} seed={900} />
      <Tuft x={690} y={252} seed={901} />
      <Tuft x={250} y={312} seed={902} />
      <Tuft x={560} y={316} seed={903} />
      <Plant x={60} y={330} s={1} seed={904} />

      <Ink d={handLine(400, 230, 400, 46, 910, 0.4)} w={4} c={TONES.brown.deep} />
      <Board x={196} y={60} w={196} text="need reasons?" sub="purposive" tone="pink" dir={-1} seed={911} d="0s" />
      <Board x={408} y={124} w={196} text="speak for everyone?" sub="probability" tone="green" dir={1} seed={912} d="-2s" />

      <Shadow x={400} y={318} rx={34} ry={4.5} />
      <Place x={400} y={316} s={1.6}>
        <g className="s-smp5-pip">
          <Pip mood="focused" arms="think" tone="amber" look={0} seed={920} />
        </g>
      </Place>
      <g className="s-smp5-q">
        <Hand x={446} y={196} size={40} weight={700} c={TONES.amber.deep}>
          ?
        </Hand>
      </g>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Bias against chance: two targets.
   ------------------------------------------------------------------ */

const biasCss = `
.s-smp6-hit { animation: s-smp6-land 3s ease-in-out infinite; animation-delay: calc(var(--i) * 0.25s); }
@keyframes s-smp6-land {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
}
.s-smp6-pip .pip-arm-r { animation: s-smp6-point 3s ease-in-out infinite; }
@keyframes s-smp6-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

function Hits({ cx, cy, n, spread, dx, dy, seed, tone }) {
  const r = rng(seed)
  return Array.from({ length: n }, (_, i) => {
    const a = r() * Math.PI * 2
    const d = Math.sqrt(r()) * spread
    const x = Math.round(cx + dx + Math.cos(a) * d)
    const y = Math.round(cy + dy + Math.sin(a) * d)
    return (
      <g key={i} className="s-smp6-hit" style={{ '--i': i % 12, transformBox: 'fill-box', transformOrigin: 'center' }}>
        <circle cx={x} cy={y} r={4.6} fill={TONES[tone].ink} stroke={INK} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
      </g>
    )
  })
}

export function BiasScene() {
  return (
    <Scene
      w={800}
      h={350}
      top={10}
      css={biasCss}
      className="s-smp6"
      label="Two targets. On the left, many dots sit in a tight bunch far from the centre, labelled big but biased. On the right, a few dots are spread loosely around the centre, labelled small but fair. A paper character points at the fair one"
    >
      <Floor y={340} x1={30} x2={770} seed={1000} />

      <Target x={200} y={180} r={110} seed={1001} />
      <Hits cx={200} cy={180} n={40} spread={18} dx={58} dy={-50} seed={1002} tone="blue" />
      <Hand x={200} y={326} size={24} anchor="middle" weight={700}>
        big but biased
      </Hand>
      <Hand x={200} y={52} size={18} anchor="middle" c={INK_SOFT}>
        2.38 million replies, wrong lists
      </Hand>

      <Target x={510} y={180} r={110} seed={1003} />
      <Hits cx={510} cy={180} n={10} spread={48} dx={0} dy={0} seed={1004} tone="green" />
      <Hand x={510} y={326} size={24} anchor="middle" weight={700}>
        small but fair
      </Hand>
      <Hand x={510} y={52} size={18} anchor="middle" c={INK_SOFT}>
        drawn by chance
      </Hand>

      <Shadow x={700} y={342} rx={34} ry={4.5} />
      <Place x={700} y={340} s={1.6} flip>
        <g className="s-smp6-pip">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.6} seed={1010} />
        </g>
      </Place>
      <Sparkle x={640} y={92} s={11} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Writing it up: the sampling paragraph, ticked off.
   ------------------------------------------------------------------ */

function DrawTick({ x, y, className }) {
  return (
    <path
      className={className}
      d={`M${x} ${y}q3.5 2.5 6 8q6 -13 15 -19`}
      pathLength="1"
      strokeDasharray="1"
      fill="none"
      stroke="#3f8f4f"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

const WRITE_ROWS = ['population and frame', 'method, and why', 'size, and how decided', 'how people were picked', 'who said yes, who said no']

const writeCss = `
${WRITE_ROWS.map(
  (_, i) => `.s-smp7-tick-${i} { animation: s-smp7-tick-${i} 10s ease-in-out infinite; }
@keyframes s-smp7-tick-${i} {
  0%, ${8 + i * 12}% { stroke-dashoffset: 1; }
  ${13 + i * 12}%, 86% { stroke-dashoffset: 0; }
  94%, 100% { stroke-dashoffset: 1; }
}`,
).join('\n')}
.s-smp7-pip .pip-arm-r { animation: s-smp7-write 0.8s ease-in-out infinite alternate; }
@keyframes s-smp7-write {
  from { transform: rotate(0deg); }
  to { transform: rotate(-9deg); }
}
`

export function WriteScene() {
  return (
    <Scene
      w={800}
      h={350}
      top={10}
      css={writeCss}
      className="s-smp7"
      label="A sheet headed sampling lies on a desk with five lines ticked one by one: population and frame, method and why, size and how decided, how people were picked, who said yes and who said no. A paper character writes beside it with a cup of chai nearby"
    >
      <Desk y={312} x1={20} x2={780} seed={1100} />
      <Sheet x={190} y={30} w={360} h={276} lines={0} fold={24} seed={1101} />
      <Hand x={360} y={74} size={30} anchor="middle" weight={700}>
        sampling
      </Hand>
      <Ink d={handLine(296, 84, 424, 84, 1102, 0.6)} c={TONES.blue.ink} w={2.4} />
      {WRITE_ROWS.map((text, i) => {
        const y = 122 + i * 38
        return (
          <g key={text}>
            <Box x={214} y={y - 17} w={22} h={22} fill={PAPER} seed={1110 + i * 3} sw={1.5} />
            <DrawTick x={217} y={y - 7} className={`s-smp7-tick-${i}`} />
            <Hand x={252} y={y} size={22}>
              {text}
            </Hand>
          </g>
        )
      })}
      <Pencil x={560} y={290} length={100} angle={-30} tone="amber" seed={1130} />
      <Chai x={110} y={312} s={1.2} seed={1131} />

      <Shadow x={660} y={314} rx={36} ry={4.5} />
      <Place x={660} y={312} s={1.65}>
        <g className="s-smp7-pip">
          <Pip mood="focused" arms="write" tone="blue" look={-1.6} seed={1140} />
        </g>
      </Place>
    </Scene>
  )
}

