import {
  Anim,
  Cloud,
  Envelope,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  PAPER,
  Pip,
  Place,
  Scene,
  Sun,
  TONES,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/**
 * The review journey as a railway line. A little train carrying the paper
 * pulls through three stations with yellow Indian Railways style boards,
 * "editor", "reviewers" and "decision", stopping at each, while Pip waves it
 * off from the platform. The wheels only turn while the train moves.
 */

const PLATFORM = 342
const RAIL = 372
const STATIONS = [
  { x: 170, label: 'editor' },
  { x: 420, label: 'reviewers' },
  { x: 670, label: 'decision' },
]

/* The train is 284 long; parked under "reviewers" its left end is at 278. */
const TRAIN_X = 278

const css = `
.s-pr0-train { animation: s-pr0-run 14s ease-in-out infinite; }
.s-pr0-wheel { animation: s-pr0-roll 14s ease-in-out infinite; }
.s-pr0-puff { animation: s-pr0-puff 2.4s ease-out infinite; }
.s-pr0-waver .pip-arm-r { animation: s-pr0-wave 1.2s ease-in-out infinite alternate; }
.s-pr0-cloud { animation: s-pr0-drift 18s ease-in-out infinite; }
@keyframes s-pr0-run {
  0% { transform: translateX(-600px); opacity: 1; }
  12%, 22% { transform: translateX(-250px); }
  36%, 48% { transform: translateX(0); }
  62%, 74% { transform: translateX(250px); }
  88% { transform: translateX(600px); opacity: 1; }
  89% { transform: translateX(600px); opacity: 0; }
  90% { transform: translateX(-600px); opacity: 0; }
  91%, 100% { transform: translateX(-600px); opacity: 1; }
}
@keyframes s-pr0-roll {
  0% { transform: rotate(0deg); }
  12%, 22% { transform: rotate(1430deg); }
  36%, 48% { transform: rotate(2450deg); }
  62%, 74% { transform: rotate(3470deg); }
  88%, 100% { transform: rotate(5040deg); }
}
@keyframes s-pr0-puff {
  0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
  12% { transform: translate(-4px, -6px) scale(0.62); opacity: 0.9; }
  100% { transform: translate(-34px, -46px) scale(1.5); opacity: 0; }
}
@keyframes s-pr0-wave {
  from { transform: rotate(0deg); }
  to { transform: rotate(-16deg); }
}
@keyframes s-pr0-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(30px); }
}
`

function Board({ x, label, seed }) {
  const left = x - 75
  const top = 110
  return (
    <g>
      <rect x={x - 54} y={156} width={7} height={PLATFORM - 156} fill={TONES.grey.mid} />
      <rect x={x + 47} y={156} width={7} height={PLATFORM - 156} fill={TONES.grey.mid} />
      <Ink d={handLine(x - 50, 156, x - 50, PLATFORM, seed, 0.3) + handLine(x + 51, 156, x + 51, PLATFORM, seed + 1, 0.3)} w={1.3} c={INK_SOFT} />
      <path d={`M${left} ${top}h150v46h-150Z`} fill={TONES.amber.mid} />
      <Ink d={handPoly([[left, top], [left + 150, top], [left + 150, top + 46], [left, top + 46]], { seed: seed + 2, amp: 0.4, closed: true })} w={3} />
      <Hand x={x} y={top + 32} size={26} anchor="middle" weight={700}>
        {label}
      </Hand>
    </g>
  )
}

function Wheel({ cx, cy, r, seed }) {
  return (
    <Anim className="s-pr0-wheel" spin>
      <path d={ellipsePath(cx, cy, r, r)} fill={TONES.grey.mid} />
      <Ink d={handEllipse(cx, cy, r, r, { seed, amp: 0.3 })} w={1.6} />
      <Ink d={`M${cx - r * 0.78} ${cy}H${cx + r * 0.78}M${cx} ${cy - r * 0.78}V${cy + r * 0.78}`} w={1.2} />
      <circle cx={cx} cy={cy} r={2.4} fill={INK} />
    </Anim>
  )
}

/* Drawn from its own left end on the rail, at (0, 0). */
function Train() {
  const cab = [[124, -106], [184, -106], [184, -20], [124, -20]]
  const boiler = 'M184 -80H258Q268 -80 268 -70V-20H184Z'
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <Place key={i} x={244} y={-116}>
          <Anim className="s-pr0-puff" style={{ animationDelay: `${-i * 0.8}s`, transform: `translate(${-10 * (i + 1)}px, ${-14 * (i + 1)}px) scale(${0.8 + i * 0.2})`, opacity: 0.6 }}>
            <path d={ellipsePath(0, 0, 11, 9)} fill={PAPER} />
            <Ink d={handEllipse(0, 0, 11, 9, { seed: 60 + i, amp: 0.5 })} w={1.2} c={INK_SOFT} />
          </Anim>
        </Place>
      ))}

      <path d="M4 -50h102v30h-102Z" fill="url(#fill-blue)" />
      <Ink d={handPoly([[4, -50], [106, -50], [106, -20], [4, -20]], { seed: 70, amp: 0.4, closed: true })} w={1.8} />
      <Envelope x={18} y={-92} w={72} h={42} seed={71} />
      <path d="M50 -92h8v42h-8Z" fill={TONES.red.mid} opacity="0.9" />
      <Ink d={handLine(106, -30, 124, -30, 72, 0.2)} w={2.4} />

      <path d={boiler} fill="url(#fill-red)" />
      <Ink d={boiler} w={1.8} />
      <Ink d={handLine(212, -80, 212, -20, 73, 0.2) + handLine(240, -80, 240, -20, 74, 0.2)} w={1.2} c={TONES.red.deep} />
      <path d={polyPath(cab)} fill="url(#fill-red)" />
      <Ink d={handPoly(cab, { seed: 75, amp: 0.4, closed: true })} w={1.8} />
      <path d="M118 -114h72v8h-72Z" fill={INK} />
      <path d="M138 -94h32v26h-32Z" fill={PAPER} />
      <Ink d={handPoly([[138, -94], [170, -94], [170, -68], [138, -68]], { seed: 76, amp: 0.3, closed: true })} w={1.3} />
      <circle cx={149} cy={-83} r={1.8} fill={INK} />
      <circle cx={159} cy={-83} r={1.8} fill={INK} />
      <Ink d="M149 -78Q154 -74 159 -78" w={1.3} />
      <path d="M236 -104h18v24h-18Z" fill={TONES.grey.mid} />
      <path d="M230 -112h30v8h-30Z" fill={TONES.grey.deep} />
      <Ink d={handPoly([[236, -104], [254, -104], [254, -80], [236, -80]], { seed: 77, amp: 0.2, closed: true })} w={1.4} />
      <circle cx={270} cy={-62} r={6} fill={TONES.amber.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
      <path d={polyPath([[266, -26], [286, -4], [266, -4]])} fill={TONES.grey.mid} />
      <Ink d={handPoly([[266, -26], [286, -4], [266, -4]], { seed: 78, amp: 0.2, closed: true })} w={1.4} />

      <Wheel cx={28} cy={-10} r={11} seed={80} />
      <Wheel cx={82} cy={-10} r={11} seed={81} />
      <Wheel cx={152} cy={-13} r={13} seed={82} />
      <Wheel cx={204} cy={-13} r={13} seed={83} />
      <Wheel cx={248} cy={-13} r={13} seed={84} />
      <Ink d={handLine(152, -13, 248, -13, 85, 0.1)} w={2.6} c={TONES.grey.deep} />
    </g>
  )
}

export default function Hero() {
  let sleepers = ''
  for (let x = 10; x < 800; x += 36) sleepers += `M${x} ${RAIL}h18v8h-18Z`

  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-pr0"
      label="A little train carrying an envelope pulls along a railway through three stations with yellow boards reading editor, reviewers and decision, while a paper character waves from the platform"
    >
      <Sun x={740} y={48} r={18} seed={3} />
      <Place x={320} y={52}>
        <Anim className="s-pr0-cloud">
          <Cloud x={0} y={0} s={0.8} seed={4} />
        </Anim>
      </Place>

      <path d={`M0 ${PLATFORM}h800v20h-800Z`} fill={TONES.grey.tint} />
      <path d={`M0 ${PLATFORM + 12}h800v4h-800Z`} fill={TONES.amber.mid} />
      <Ink d={handLine(0, PLATFORM, 800, PLATFORM, 5, 1)} w={1.8} />
      {STATIONS.map((station, i) => (
        <Board key={station.label} {...station} seed={10 + i * 5} />
      ))}

      <Place x={54} y={PLATFORM} s={1.5}>
        <g className="s-pr0-waver">
          <Pip mood="happy" arms="wave" tone="blue" look={1.5} seed={30} />
        </g>
      </Place>

      <path d={sleepers} fill="url(#wood)" />
      <Ink d={handLine(0, RAIL, 800, RAIL, 40, 0.8)} w={2.4} />
      <Ink d={handLine(0, RAIL + 12, 800, RAIL + 12, 41, 1)} w={1.4} o={0.5} />

      <Place x={TRAIN_X} y={RAIL}>
        <Anim className="s-pr0-train">
          <Train />
        </Anim>
      </Place>
    </Scene>
  )
}
