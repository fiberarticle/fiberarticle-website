import {
  Anim,
  Flag,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TONES,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/**
 * On the right, a shiny "7 days!" ticket dangles on a fishing hook. On the
 * left stands a real journal, columns and all, with "peer reviewed" over
 * the door. Anil (blue) leans towards the bait, then turns as Swathi (green)
 * points him the other way.
 */

const css = `
.s-cj0-bait { animation: s-cj0-swing 4s ease-in-out infinite; }
.s-cj0-twinkle { animation: s-cj0-twinkle 2s ease-in-out infinite; }
.s-cj0-anil { animation: s-cj0-lean 12s ease-in-out infinite; }
.s-cj0-swathi .pip-arm-r { animation: s-cj0-point 12s ease-in-out infinite; }
@keyframes s-cj0-swing {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(4deg); }
  75% { transform: rotate(-4deg); }
}
@keyframes s-cj0-twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.6); }
}
@keyframes s-cj0-lean {
  0%, 8%, 44%, 88%, 100% { transform: rotate(0deg); }
  18%, 34% { transform: rotate(5deg); }
  54%, 78% { transform: rotate(-4deg); }
}
@keyframes s-cj0-point {
  0%, 40%, 62%, 100% { transform: rotate(0deg); }
  46%, 56% { transform: rotate(-9deg); }
}
`

const FLOOR = 366
const COLUMNS = [56, 100, 144, 188]

function Journal() {
  const roof = [
    [34, 186],
    [140, 130],
    [246, 186],
  ]
  return (
    <g>
      <path d="M30 354h220v12h-220Z" fill={TONES.grey.tint} />
      <path d="M40 342h200v12h-200Z" fill={TONES.grey.tint} />
      <Ink d={handPoly([[30, 354], [250, 354], [250, 366], [30, 366]], { seed: 11, amp: 0.4, closed: true })} w={1.6} />
      <Ink d={handPoly([[40, 342], [240, 342], [240, 354], [40, 354]], { seed: 12, amp: 0.4, closed: true })} w={1.6} />

      {COLUMNS.map((x, i) => (
        <g key={x}>
          <path d={`M${x} 216h18v126h-18Z`} fill={PAPER} />
          <path d={`M${x + 11} 216h7v126h-7Z`} fill="url(#ink-hatch-light)" />
          <Ink d={handPoly([[x, 216], [x + 18, 216], [x + 18, 342], [x, 342]], { seed: 13 + i, amp: 0.3, closed: true })} w={1.5} />
          <path d={`M${x - 3} 210h24v6h-24Z`} fill={TONES.grey.mid} />
          <Ink d={handPoly([[x - 3, 210], [x + 21, 210], [x + 21, 216], [x - 3, 216]], { seed: 20 + i, amp: 0.2, closed: true })} w={1.2} />
        </g>
      ))}

      <path d="M38 186h204v24h-204Z" fill={TONES.grey.tint} />
      <Ink d={handPoly([[38, 186], [242, 186], [242, 210], [38, 210]], { seed: 25, amp: 0.4, closed: true })} w={1.7} />
      <Hand x={140} y={204} size={20} anchor="middle" weight={700}>
        peer reviewed
      </Hand>
      <path d={polyPath(roof)} fill={PAPER} />
      <path d={polyPath(roof)} fill="url(#ink-hatch-light)" />
      <Ink d={handPoly(roof, { seed: 26, amp: 0.5, closed: true })} w={1.9} />
      <Flag x={140} y={131} h={54} tone="green" seed={27} />
    </g>
  )
}

function Bait() {
  return (
    <Anim className="s-cj0-bait" origin={[650, 0]}>
      <Ink d={handLine(650, -8, 650, 198, 30, 0.3)} w={1.3} c={INK_SOFT} />
      <Ink d="M650 196V220Q650 232 638 232Q626 232 626 220L631 214" w={2.2} c={TONES.grey.deep} />
      <circle cx={642} cy={237} r={5} fill="none" stroke={TONES.grey.deep} strokeWidth={1.8} vectorEffect="non-scaling-stroke" />
      <path d="M592 242h100q8 0 8 8v30q0 8 -8 8h-100q-8 0 -8 -8v-30q0 -8 8 -8Z" fill="url(#fill-amber)" />
      <Ink d={handPoly([[586, 242], [700, 242], [700, 288], [586, 288]], { seed: 31, amp: 0.4, closed: true })} w={1.8} />
      <Hand x={643} y={274} size={26} anchor="middle" weight={700} c={TONES.red.deep}>
        7 days!
      </Hand>
      {[
        [572, 232, 11, '0s'],
        [716, 250, 9, '-0.7s'],
        [704, 212, 7, '-1.4s'],
      ].map(([x, y, s, delay]) => (
        <Place key={x} x={x} y={y}>
          <Anim className="s-cj0-twinkle" spin style={{ animationDelay: delay }}>
            <Sparkle x={0} y={0} s={s} />
          </Anim>
        </Place>
      ))}
    </Anim>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={392}
      css={css}
      className="s-cj0"
      label="A shiny ticket reading 7 days! dangles on a fishing hook. A blue paper character leans towards it, while a green one points it towards a journal building with columns, a flag and a sign reading peer reviewed"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={9} />
      <Journal />
      <Bait />

      <Shadow x={318} y={FLOOR + 2} rx={54} ry={6} />
      <Place x={318} y={FLOOR} s={2.2} flip>
        <g className="s-cj0-swathi">
          <Pip mood="focused" arms="point" tone="green" look={-1.8} seed={41} />
        </g>
      </Place>

      <Shadow x={470} y={FLOOR + 2} rx={56} ry={6} />
      <Place x={470} y={FLOOR} s={2.3}>
        <Anim className="s-cj0-anil" origin={[0, 0]}>
          <Pip mood="surprised" arms="hold" tone="blue" look={1.8} seed={43}>
            <Sheet x={-12} y={-40} w={24} h={30} lines={2} fold={6} seed={44} sw={1.3} />
          </Pip>
        </Anim>
      </Place>
    </Scene>
  )
}
