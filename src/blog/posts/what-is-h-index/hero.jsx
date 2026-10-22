import {
  Anim,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Oval,
  Pip,
  Place,
  Scene,
  Shadow,
  Sparkle,
  TONES,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * The staircase. Tenzin's eight papers stand as bars, sorted from the most
 * cited to the least, with their ranks underneath. A dotted line climbs one
 * step per rank; the last bar that still reaches the line is paper six, so
 * her h-index is 6. The two tallest bars are broken at the top, because a
 * very high count changes nothing.
 */

const BASE = 330
const U = 18
const X0 = 214
const BW = 46
const STEP = 60
const CITES = [24, 15, 9, 7, 6, 6, 3, 1]

const css = `
.s-hix0-bar { animation: s-hix0-rise 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.25s - 9s); transform-box: fill-box; transform-origin: 50% 100%; }
.s-hix0-ring { animation: s-hix0-pulse 3s ease-in-out infinite; }
.s-hix0-tenzin .pip-arm-r { animation: s-hix0-point 3s ease-in-out infinite alternate; }
@keyframes s-hix0-rise {
  0%, 4% { transform: scaleY(0.05); }
  14%, 86% { transform: scaleY(1); }
  96%, 100% { transform: scaleY(0.05); }
}
@keyframes s-hix0-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
@keyframes s-hix0-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-9deg); }
}
`

export default function Hero() {
  const cx = (i) => X0 + i * STEP + BW / 2
  const crossX = cx(5)
  const crossY = BASE - 6 * U
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-hix0"
      label="Eight bars of citations sorted from tallest to shortest above their ranks one to eight, with a dotted line climbing one step per rank; it meets the sixth bar, marked h equals 6, while a paper character points at it"
    >
      <Floor y={BASE} x1={60} x2={760} seed={11} />
      {CITES.map((c, i) => {
        const x = X0 + i * STEP
        const broken = c > 12
        const h = Math.min(c, 12) * U
        const top = BASE - h
        const tone = i < 6 ? 'red' : 'grey'
        return (
          <g key={i}>
            <g className="s-hix0-bar" style={{ '--i': i }}>
              <rect x={x} y={top} width={BW} height={h} fill={`url(#fill-${tone})`} />
              <Ink d={handPoly([[x, BASE], [x, top], [x + BW, top], [x + BW, BASE]], { seed: 20 + i, amp: 0.4 })} w={1.6} />
              {broken ? <path d={`M${x - 3} ${top + 26}l12 -6l12 6l12 -6l12 6v8l-12 -6l-12 6l-12 -6l-12 6Z`} fill="#f7f1e4" /> : null}
            </g>
            <Hand x={x + BW / 2} y={top - 10} size={20} anchor="middle" weight={700}>
              {c}
            </Hand>
            <Hand x={x + BW / 2} y={BASE + 28} size={20} anchor="middle" c={INK_SOFT}>
              {i + 1}
            </Hand>
          </g>
        )
      })}
      <Hand x={X0 - 18} y={BASE + 28} size={18} anchor="end" c={INK_SOFT}>
        rank
      </Hand>

      <Ink
        d={CITES.map(
          (_, i) =>
            handLine(cx(i) - STEP / 2, BASE - i * U, cx(i) - STEP / 2, BASE - (i + 1) * U, 40 + i, 0.2) +
            handLine(cx(i) - STEP / 2, BASE - (i + 1) * U, cx(i) + STEP / 2, BASE - (i + 1) * U, 60 + i, 0.2),
        ).join('')}
        c={TONES.blue.deep}
        w={2}
        dash="4 6"
      />
      <Hand x={cx(7) + 36} y={BASE - 8 * U + 4} size={17} c={TONES.blue.deep}>
        citations
      </Hand>
      <Hand x={cx(7) + 36} y={BASE - 8 * U + 24} size={17} c={TONES.blue.deep}>
        = rank
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-hix0-ring" origin={[crossX, crossY]}>
          <Oval cx={crossX} cy={crossY} rx={16} ry={16} stroke={TONES.amber.deep} sw={2.4} seed={50} />
        </Anim>
      </Place>
      <Sparkle x={crossX + 30} y={crossY - 44} s={9} />
      <Hand x={crossX + 20} y={crossY - 64} size={30} weight={700} c={TONES.red.deep}>
        h = 6
      </Hand>

      <Shadow x={110} y={BASE + 3} rx={36} ry={5} />
      <Place x={110} y={BASE} s={1.7}>
        <g className="s-hix0-tenzin">
          <Pip mood="happy" arms="point" tone="green" look={1.6} seed={60} />
        </g>
      </Place>
    </Scene>
  )
}
