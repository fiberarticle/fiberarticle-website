import {
  Anim,
  Floor,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  TONES,
  Type,
  handCurve,
  handLine,
  polyPath,
  r1,
} from '../../ink/index.js'

/**
 * The similarity check: a lens sweeps down a page where some lines are
 * highlighted, and the needle of a dial settles near 18 percent, in the
 * amber band. Pip watches the dial from the side, a little nervous.
 */

const css = `
.s-pc0-lens { animation: s-pc0-scan 10s ease-in-out infinite; }
.s-pc0-needle { animation: s-pc0-needle 10s ease-in-out infinite; }
.s-pc0-pip .pip-body { animation: s-pc0-shiver 10s ease-in-out infinite; }
@keyframes s-pc0-scan {
  0%, 100% { transform: translateY(0); }
  45% { transform: translateY(150px); }
  55% { transform: translateY(150px); }
}
@keyframes s-pc0-needle {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(-24deg); }
  30% { transform: rotate(14deg); }
  45% { transform: rotate(-6deg); }
  58% { transform: rotate(3deg); }
  70% { transform: rotate(0deg); }
}
@keyframes s-pc0-shiver {
  0%, 60%, 100% { transform: rotate(0deg); }
  64% { transform: rotate(-2deg); }
  68% { transform: rotate(2deg); }
  72% { transform: rotate(-1deg); }
}
`

const GX = 590
const GY = 252
const R = 118

/* A point on the dial for a value from 0 to 100. */
function dial(value, radius) {
  const a = ((180 - value * 1.8) * Math.PI) / 180
  return [GX + Math.cos(a) * radius, GY - Math.sin(a) * radius]
}

function Band({ from, to, color }) {
  const [x1, y1] = dial(from, R)
  const [x2, y2] = dial(to, R)
  return <path d={`M${r1(x1)} ${r1(y1)}A${R} ${R} 0 0 1 ${r1(x2)} ${r1(y2)}`} fill="none" stroke={color} strokeWidth={22} />
}

function rim(radius, seed) {
  const pts = []
  for (let v = 0; v <= 100; v += 10) pts.push(dial(v, radius))
  return handCurve(pts, { seed, amp: 0.5 })
}

const LINES = [112, 134, 156, 178, 200, 222, 244, 266, 288, 310, 332]
const MARKS = { 1: 'amber', 2: 'amber', 5: 'blue', 6: 'blue', 8: 'pink' }

export default function Hero() {
  const [nx, ny] = dial(18, 98)
  const needle = polyPath([[GX - 5, GY], [nx, ny], [GX + 5, GY]])
  return (
    <Scene
      w={800}
      h={404}
      top={4}
      css={css}
      className="s-pc0"
      label="A magnifying glass sweeps down a page with some lines highlighted in colour, while the needle on a dial settles at 18 percent in the amber zone and a nervous paper character watches"
    >
      <Floor y={390} x1={20} x2={780} seed={3} />

      <Sheet x={56} y={36} w={292} h={344} lines={0} fold={30} seed={4} />
      {LINES.map((y, i) => {
        const len = 190 + ((i * 37) % 50)
        const tone = MARKS[i]
        return (
          <g key={y}>
            {tone ? <rect x={78} y={y - 8} width={len + 12} height={16} rx={3} fill={TONES[tone].mid} opacity="0.55" /> : null}
            <Ink d={handLine(84, y, 84 + len, y, 10 + i, 0.3)} c={INK_SOFT} w={1.7} />
          </g>
        )
      })}

      <Anim className="s-pc0-lens">
        <Magnifier x={244} y={150} r={46} angle={42} seed={30} />
      </Anim>

      <Band from={0} to={10} color={TONES.green.mid} />
      <Band from={10} to={40} color={TONES.amber.mid} />
      <Band from={40} to={60} color={TONES.pink.mid} />
      <Band from={60} to={100} color={TONES.red.mid} />
      <Ink d={rim(R + 11, 31) + rim(R - 11, 32)} w={1.7} />
      {[0, 10, 40, 60, 100].map((v, i) => {
        const [x1, y1] = dial(v, R - 11)
        const [x2, y2] = dial(v, R + 11)
        return <Ink key={v} d={handLine(x1, y1, x2, y2, 40 + i, 0.2)} w={1.5} />
      })}
      <Type x={GX - R} y={GY + 26} size={20} anchor="middle" c={INK_SOFT}>
        0%
      </Type>
      <Type x={GX + R} y={GY + 26} size={20} anchor="middle" c={INK_SOFT}>
        100%
      </Type>

      <Anim className="s-pc0-needle" origin={[GX, GY]}>
        <path d={needle} fill={INK} />
      </Anim>
      <circle cx={GX} cy={GY} r={9} fill={TONES.grey.mid} stroke={INK} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
      <Type x={GX} y={GY + 64} size={44} anchor="middle" weight={700} c={TONES.red.ink}>
        18%
      </Type>

      <Shadow x={744} y={392} rx={36} ry={5} />
      <Place x={744} y={390} s={1.5}>
        <g className="s-pc0-pip">
          <Pip mood="worried" arms="down" look={-1.8} seed={50} />
        </g>
      </Place>
    </Scene>
  )
}
