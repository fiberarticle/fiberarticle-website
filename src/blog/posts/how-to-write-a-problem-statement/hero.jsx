import {
  Anim,
  Box,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Shelf,
  TEXT_LINE,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * The village library and its register. On the left a full bookshelf under a
 * library sign and an empty reading bench; on the right a big page from the
 * register with two numbers that do not match, 1,140 enrolled and 50 who
 * came. Pip leans in with a magnifying glass, and a red ring is drawn round
 * the small number again and again.
 */

const css = `
.s-wps0 .pip-body { animation: s-wps0-lean 4s ease-in-out infinite; }
.s-wps0-glass { animation: s-wps0-sweep 4s ease-in-out infinite; }
.s-wps0-ring { animation: s-wps0-circle 6s ease-in-out infinite; }
.s-wps0-ask { animation: s-wps0-bob 3s ease-in-out infinite; }
@keyframes s-wps0-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-wps0-sweep {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(14px, 6px); }
}
@keyframes s-wps0-circle {
  0%, 100% { stroke-dashoffset: 0; }
  40% { stroke-dashoffset: 0; }
  50% { stroke-dashoffset: 1; }
  70% { stroke-dashoffset: 0; }
}
@keyframes s-wps0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
`

/** A plain wooden bench, front view. Anchor: bottom-left foot. */
export function Bench({ x, y, w = 150, h = 44, seed = 1 }) {
  return (
    <g>
      <rect x={x} y={y - h} width={w} height={10} fill="url(#wood)" />
      <Ink d={handLine(x, y - h, x + w, y - h, seed, 0.5) + handLine(x + w, y - h, x + w, y - h + 10, seed + 1, 0.3) + handLine(x + w, y - h + 10, x, y - h + 10, seed + 2, 0.5) + handLine(x, y - h + 10, x, y - h, seed + 3, 0.3)} w={1.7} />
      <Ink d={handLine(x + 14, y - h + 10, x + 10, y, seed + 4, 0.4) + handLine(x + w - 14, y - h + 10, x + w - 10, y, seed + 5, 0.4)} w={2.2} />
      <Ink d={handLine(x + 13, y - h * 0.4, x + w - 13, y - h * 0.4, seed + 6, 0.4)} w={1.4} />
    </g>
  )
}

export default function Hero() {
  const FLOOR = 352
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-wps0"
      label="A paper character holds a magnifying glass over a library register that shows 1,140 children enrolled and only 50 who came, beside a full bookshelf and an empty reading bench"
    >
      <Floor y={FLOOR} x1={30} x2={770} seed={1} />

      {/* the library: a sign, a full shelf, an empty bench */}
      <Box x={64} y={40} w={206} h={40} r={6} fill={TONES.amber.tint} seed={2} sw={1.8} />
      <Type x={167} y={66} size={17} anchor="middle" weight={700}>
        VILLAGE LIBRARY
      </Type>
      <Shelf x={48} y={96} w={236} rows={2} rowH={82} seed={12} />
      <Ink d={handLine(46, 260, 46, FLOOR, 3, 0.5) + handLine(286, 260, 286, FLOOR, 4, 0.5)} w={1.8} />
      <Bench x={96} y={FLOOR} w={150} h={46} seed={20} />
      <Hand x={171} y={FLOOR + 34} size={19} anchor="middle" c={INK_SOFT}>
        nobody on the bench
      </Hand>

      {/* the register page */}
      <Box x={500} y={46} w={262} h={258} r={6} fill={PAPER} seed={30} sw={2.2} double />
      <rect x={500} y={46} width={262} height={44} fill={TONES.blue.tint} />
      <Ink d={handLine(500, 90, 762, 90, 31, 0.5)} w={1.6} />
      <Type x={631} y={75} size={17} anchor="middle" weight={700}>
        REGISTER
      </Type>
      <Hand x={524} y={132} size={24} c={INK_SOFT}>
        enrolled
      </Hand>
      <Hand x={742} y={142} size={44} anchor="end" weight={700} c={TONES.blue.deep}>
        1,140
      </Hand>
      <Ink d={handLine(520, 164, 742, 164, 32, 0.5)} c={TEXT_LINE} w={1.6} />
      <Hand x={524} y={222} size={24} c={INK_SOFT}>
        came today
      </Hand>
      <Hand x={730} y={232} size={50} anchor="end" weight={700} c={TONES.red.deep}>
        50
      </Hand>
      <path
        className="s-wps0-ring"
        d="M664 216Q662 182 702 180Q746 180 744 216Q742 250 700 250Q662 250 666 208"
        pathLength="1"
        strokeDasharray="1"
        fill="none"
        stroke={TONES.red.ink}
        strokeWidth={3.4}
        strokeLinecap="round"
      />
      <Ink d={handLine(520, 268, 690, 268, 33, 0.5) + handLine(520, 286, 640, 286, 34, 0.5)} c={TEXT_LINE} w={1.6} />

      <Place x={600} y={388}>
        <Anim className="s-wps0-ask">
          <Hand x={0} y={0} size={27} anchor="middle" weight={700} c={INK}>
            what is the problem, exactly?
          </Hand>
        </Anim>
      </Place>

      {/* Pip with the magnifying glass */}
      <Shadow x={346} y={FLOOR + 3} rx={40} ry={6} />
      <Place x={346} y={FLOOR} s={2.1}>
        <Pip mood="surprised" arms="point" look={2} tone="amber" seed={41} />
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-wps0-glass">
          <Magnifier x={476} y={216} r={26} angle={145} tone="amber" seed={42} />
        </Anim>
      </Place>
    </Scene>
  )
}
