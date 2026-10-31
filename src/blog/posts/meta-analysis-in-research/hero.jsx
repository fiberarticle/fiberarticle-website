import {
  Anim,
  Box,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Pile,
  Pip,
  Place,
  Poly,
  Scene,
  Shadow,
  Sheet,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * The forest plot as a big board. Shreya stands beside it, pointing; study
 * sheets drift in from a pile on the left and each one becomes a square on
 * its line. The squares pulse one after another, and the pooled diamond at
 * the bottom swells when they have all been read.
 */

const FLOOR = 376
const BX = 250
const BY = 40
const BW = 400
const BH = 300
const ZERO = 520

/* Nine trials: centre (x), half width of the line, and the square's size. */
const ROWS = [
  { x: 470, half: 46, s: 10 },
  { x: 500, half: 22, s: 16 },
  { x: 548, half: 52, s: 8 },
  { x: 488, half: 30, s: 12 },
  { x: 462, half: 40, s: 9 },
  { x: 506, half: 18, s: 18 },
  { x: 530, half: 44, s: 9 },
  { x: 482, half: 26, s: 13 },
  { x: 494, half: 34, s: 11 },
]

const css = `
.s-meta0-sq { animation: s-meta0-pulse 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 9s); }
.s-meta0-dia { animation: s-meta0-swell 9s ease-in-out infinite; }
.s-meta0-fly { opacity: 0; animation: s-meta0-fly 4.5s ease-in-out infinite; animation-delay: var(--d, 0s); }
.s-meta0-shreya .pip-arm-r { animation: s-meta0-point 3s ease-in-out infinite; }
@keyframes s-meta0-pulse {
  0%, 10%, 100% { transform: scale(1); }
  5% { transform: scale(1.45); }
}
@keyframes s-meta0-swell {
  0%, 60%, 100% { transform: scale(1); }
  70%, 80% { transform: scale(1.18); }
}
@keyframes s-meta0-fly {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  12% { opacity: 1; }
  60% { transform: translate(120px, -40px) rotate(12deg); opacity: 1; }
  72%, 100% { transform: translate(150px, -44px) rotate(16deg); opacity: 0; }
}
@keyframes s-meta0-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

export default function Hero() {
  const rowY = (i) => BY + 34 + i * 23
  const dy = BY + BH - 46
  return (
    <Scene
      w={800}
      h={392}
      top={10}
      css={css}
      className="s-meta0"
      label="A paper character in glasses points at a big board showing a forest plot of nine trials, with squares of different sizes on their lines, a dashed line of no effect and a diamond at the bottom, while study sheets drift in from a pile"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={10} />

      <Pile x={110} y={FLOOR} w={90} count={14} seed={11} />
      <Hand x={110} y={FLOOR - 92} size={20} anchor="middle" c={INK_SOFT}>
        9 trials
      </Hand>
      {[0, 1].map((i) => (
        <Place key={i} x={96 + i * 8} y={190 - i * 10}>
          <Anim className="s-meta0-fly" style={{ '--d': `${-i * 2.2}s` }}>
            <Sheet x={0} y={0} w={28} h={36} lines={2} fold={8} seed={20 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Box x={BX} y={BY} w={BW} h={BH} r={6} fill="#fdfaf3" seed={30} sw={2} double />
      <Ink d={handLine(BX + 12, BY + BH, BX + 4, FLOOR, 31, 0.4) + handLine(BX + BW - 12, BY + BH, BX + BW - 4, FLOOR, 32, 0.4)} w={3} c={TONES.brown.deep} />

      <Ink d={handLine(ZERO, BY + 18, ZERO, BY + BH - 18, 33, 0.3)} c={INK_SOFT} w={1.6} dash="6 6" />

      {ROWS.map((row, i) => {
        const y = rowY(i)
        return (
          <g key={i}>
            <Ink d={handLine(row.x - row.half, y, row.x + row.half, y, 40 + i, 0.3)} w={1.8} />
            <Anim className="s-meta0-sq" spin style={{ '--i': i }}>
              <rect x={row.x - row.s / 2} y={y - row.s / 2} width={row.s} height={row.s} fill={TONES.blue.ink} stroke={INK} strokeWidth={1.2} />
            </Anim>
            <Ink d={handLine(BX + 22, y, BX + 22 + 30 + ((i * 13) % 26), y, 60 + i, 0.3)} c="#cbbda6" w={2.4} />
          </g>
        )
      })}

      <Anim className="s-meta0-dia" spin>
        <Poly
          points={[
            [470, dy],
            [494, dy - 11],
            [518, dy],
            [494, dy + 11],
          ]}
          fill={TONES.amber.mid}
          seed={70}
          amp={0.4}
        />
      </Anim>
      <Hand x={BX + 22} y={dy + 7} size={20} weight={700}>
        pooled
      </Hand>
      <Hand x={ZERO + 8} y={BY + BH - 6} size={16} c={INK_SOFT}>
        no effect
      </Hand>

      <Shadow x={712} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={712} y={FLOOR} s={1.8} flip>
        <g className="s-meta0-shreya">
          <Pip mood="happy" arms="point" tone="pink" glasses look={1.4} seed={80} />
        </g>
      </Place>
      <Hand x={712} y={FLOOR - 150} size={20} anchor="middle" c={INK}>
        one answer
      </Hand>
    </Scene>
  )
}
