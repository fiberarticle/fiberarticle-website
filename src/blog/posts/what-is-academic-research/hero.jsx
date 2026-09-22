import {
  Anim,
  Bulb,
  Chart,
  Cloud,
  Dots,
  EARTH,
  Flask,
  Ground,
  Hand,
  INK,
  Ink,
  OpenBook,
  Oval,
  Pebble,
  Pip,
  Place,
  Scene,
  Sheet,
  TONES,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/**
 * From a question to an answer. Pip hops across stepping stones from a big
 * question mark to a lamp that lights up on arrival, while underground a
 * line of little carts rolls the evidence along: books, flasks, charts.
 * The carts keep a fixed spacing and each rolls exactly one gap per beat,
 * so the line never seems to restart.
 */

const CART_GAP = 96
const CARTS = [180, 276, 372, 468, 564]
const LOADS = ['book', 'flask', 'chart', 'sheet', 'book']

const css = `
.s-ar0-pip { animation: s-ar0-hop 14s ease-in-out infinite; }
svg.s-ar0 .s-ar0-bulb .bulb-rays { animation: s-ar0-rays 14s ease-in-out infinite; }
.s-ar0-halo { animation: s-ar0-halo 14s ease-in-out infinite; }
.s-ar0-cart { animation: s-ar0-roll 3s linear infinite; }
.s-ar0-cart-first { animation: s-ar0-roll 3s linear infinite, s-ar0-in 3s linear infinite; }
.s-ar0-cart-last { animation: s-ar0-roll 3s linear infinite, s-ar0-out 3s linear infinite; }
.s-ar0-wheel { animation: s-ar0-spin 1s linear infinite; }
.s-ar0-cloud { animation: s-ar0-drift 18s ease-in-out infinite; }

@keyframes s-ar0-hop {
  0%, 4% { transform: translate(-80px, 0); opacity: 1; }
  8% { transform: translate(-60px, -12px); }
  12% { transform: translate(-40px, 0); }
  16% { transform: translate(-20px, -12px); }
  20% { transform: translate(0, 0); }
  24% { transform: translate(20px, -12px); }
  28% { transform: translate(40px, 0); }
  32% { transform: translate(60px, -12px); }
  36%, 72% { transform: translate(80px, 0); opacity: 1; }
  78% { transform: translate(80px, 0); opacity: 0; }
  79% { transform: translate(-80px, 0); opacity: 0; }
  86%, 100% { transform: translate(-80px, 0); opacity: 1; }
}
@keyframes s-ar0-rays {
  0%, 30% { opacity: 0.15; }
  36%, 72% { opacity: 1; }
  80%, 100% { opacity: 0.15; }
}
@keyframes s-ar0-halo {
  0%, 30% { opacity: 0; transform: scale(0.7); }
  38%, 72% { opacity: 0.85; transform: scale(1); }
  80%, 100% { opacity: 0; transform: scale(0.7); }
}
@keyframes s-ar0-roll {
  from { transform: translateX(0); }
  to { transform: translateX(${CART_GAP}px); }
}
@keyframes s-ar0-in {
  0% { opacity: 0; }
  30%, 100% { opacity: 1; }
}
@keyframes s-ar0-out {
  0%, 60% { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes s-ar0-spin {
  to { transform: rotate(360deg); }
}
@keyframes s-ar0-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(28px); }
}
`

/* The load each cart carries, drawn in the cart's own units (cart top at y = -22). */
function Load({ kind }) {
  if (kind === 'book') return <OpenBook x={0} y={-22} w={30} tone="red" lines={2} seed={31} />
  if (kind === 'flask') return <Flask x={0} y={-22} s={0.32} tone="blue" seed={32} />
  if (kind === 'chart') return <Chart x={-13} y={-23} w={26} h={20} bars={[0.45, 0.8, 0.6]} tone="green" seed={33} />
  return <Sheet x={-9} y={-44} w={18} h={22} lines={2} fold={5} seed={34} sw={1.3} />
}

/* A little mine cart on the rails, wheels at the bottom (y = 0). */
function Cart({ kind, seed }) {
  const body = [[-20, -22], [20, -22], [16, -6], [-16, -6]]
  return (
    <g>
      <Load kind={kind} />
      <path d={polyPath(body)} fill="url(#wood)" />
      <Ink d={handPoly(body, { seed, amp: 0.3, closed: true })} w={1.5} />
      <Ink d={handLine(-18, -16, 18, -16, seed + 1, 0.2)} w={1} c={EARTH.soilLine} />
      {[-10, 10].map((wx) => (
        <Place key={wx} x={wx} y={-4}>
          <Anim className="s-ar0-wheel" spin>
            <circle r={4.6} fill={TONES.grey.mid} stroke={INK} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
            <path d="M-3.4 0H3.4M0 -3.4V3.4" stroke={INK} strokeWidth={1} vectorEffect="non-scaling-stroke" />
          </Anim>
        </Place>
      ))}
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-ar0"
      label="A paper character hops across stepping stones from a big question mark toward a lamp that lights up, while underground little carts roll books, flasks and charts along a tunnel"
    >
      <Place x={380} y={70}>
        <Anim className="s-ar0-cloud">
          <Cloud x={0} y={0} s={0.8} seed={5} />
        </Anim>
      </Place>
      <Cloud x={560} y={48} s={0.5} seed={6} />

      <Ground
        y={310}
        bottom={400}
        seed={12}
        tufts={10}
        pebbles={0}
        grit={0}
        holes={[
          [112, 356, 46, 30],
          [688, 356, 46, 30],
        ]}
        tunnel="M150 330H650Q666 356 650 382H150Q134 356 150 330Z"
      />
      <Ink d="M156 330Q400 327 644 330M156 382Q400 384 644 382" c={EARTH.soilLine} w={1.6} />
      <Dots x={170} y={314} w={460} h={12} count={16} seed={13} c={EARTH.soilLine} o={0.5} />
      <Dots x={170} y={387} w={460} h={10} count={12} seed={14} c={EARTH.soilLine} o={0.5} />
      <Pebble x={28} y={390} rx={9} ry={5} seed={15} />
      <Pebble x={770} y={338} rx={8} ry={5} seed={16} />
      <Ink d={handLine(152, 377, 648, 377, 41, 0.6) + handLine(152, 381, 648, 381, 42, 0.6)} c={INK} w={1.3} />

      {CARTS.map((x, i) => (
        <Place key={x} x={x} y={377}>
          <Anim className={i === 0 ? 's-ar0-cart-first' : i === CARTS.length - 1 ? 's-ar0-cart-last' : 's-ar0-cart'}>
            <Cart kind={LOADS[i]} seed={50 + i * 5} />
          </Anim>
        </Place>
      ))}

      <rect x={108} y={186} width={8} height={126} fill="url(#wood)" />
      <Ink d={handPoly([[108, 186], [116, 186], [116, 312], [108, 312]], { seed: 20, amp: 0.4, closed: true })} w={1.6} />
      <Oval cx={112} cy={146} rx={46} fill="url(#fill-amber)" seed={21} sw={2} />
      <Hand x={112} y={174} size={80} anchor="middle" weight={700} c={INK}>
        ?
      </Hand>

      <rect x={684} y={210} width={8} height={102} fill="url(#wood)" />
      <Ink d={handPoly([[684, 210], [692, 210], [692, 312], [684, 312]], { seed: 22, amp: 0.4, closed: true })} w={1.6} />
      <Place x={688} y={152}>
        <Anim className="s-ar0-halo" spin>
          <circle r={62} fill={TONES.amber.tint} opacity="0.85" />
        </Anim>
      </Place>
      <g className="s-ar0-bulb">
        <Bulb x={688} y={158} s={1.5} seed={23} />
      </g>

      {[240, 320, 400, 480, 560].map((x, i) => (
        <Pebble key={x} x={x} y={309} rx={19} ry={5} seed={60 + i} />
      ))}

      <Place x={400} y={308} s={2}>
        <Anim className="s-ar0-pip">
          <Pip mood="happy" arms="hold" glasses look={1}>
            <Sheet x={-12} y={-30} w={24} h={28} lines={3} fold={6} seed={70} sw={1.3} />
          </Pip>
        </Anim>
      </Place>
    </Scene>
  )
}
