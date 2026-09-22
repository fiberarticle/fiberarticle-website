import {
  Anim,
  Floor,
  Grid,
  Hand,
  INK_SOFT,
  Ink,
  Pile,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  TEXT_LINE,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * The matrix on the wall. Pages lift off the pile of PDFs on the floor and
 * fly into the table one by one, while Pip points at it. The last column,
 * "gaps", glows now and then: that is where the empty cells are.
 */

const css = `
.s-lm0-fly { animation: s-lm0-fly 7.5s ease-in-out infinite; }
.s-lm0-glow { animation: s-lm0-glow 5s ease-in-out infinite; }
.s-lm0-pip .pip-body { animation: s-lm0-bob 3.2s ease-in-out infinite; }
@keyframes s-lm0-fly {
  0% { transform: translate(0, 0) rotate(0deg) scale(0.8); opacity: 0; }
  10% { opacity: 1; }
  45% { transform: translate(-130px, -110px) rotate(-16deg) scale(1); }
  74% { transform: translate(-190px, -52px) rotate(-4deg) scale(0.9); opacity: 1; }
  80% { transform: translate(-194px, -48px) rotate(-2deg) scale(0.85); opacity: 0; }
  81%, 100% { transform: translate(0, 0) rotate(0deg) scale(0.8); opacity: 0; }
}
@keyframes s-lm0-glow {
  0%, 100% { opacity: 0.18; }
  50% { opacity: 0.42; }
}
@keyframes s-lm0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const X = 190
const Y = 44
const CW = 94
const RH = 54
const HEAD = ['paper', 'aim', 'method', 'findings', 'gaps']

function Cell({ r, c }) {
  const cx = X + c * CW
  const cy = Y + r * RH
  if (c === 0) return <Sheet x={cx + 35} y={cy + 10} w={24} h={34} lines={2} fold={6} seed={10 + r} sw={1.3} />
  if (c === 4 && (r === 2 || r === 3)) {
    return (
      <Hand x={cx + CW / 2} y={cy + 36} size={24} anchor="middle" weight={700} c={TONES.red.ink}>
        ?
      </Hand>
    )
  }
  const seed = 20 + r * 7 + c
  const long = 44 + ((r * 13 + c * 7) % 22)
  return (
    <Ink
      d={handLine(cx + 14, cy + 22, cx + 14 + long, cy + 22, seed, 0.3) + handLine(cx + 14, cy + 34, cx + 14 + long * 0.6, cy + 34, seed + 1, 0.3)}
      c={c === 4 ? INK_SOFT : TEXT_LINE}
      w={1.8}
    />
  )
}

export default function Hero() {
  const cells = []
  for (let r = 1; r <= 4; r++) for (let c = 0; c <= 4; c++) cells.push(<Cell key={`${r}-${c}`} r={r} c={c} />)

  return (
    <Scene
      w={800}
      h={380}
      top={12}
      css={css}
      className="s-lm0"
      label="A big table pinned to the wall with columns for paper, aim, method, findings and gaps. Pages fly from a pile of papers on the floor into the table, and a paper character in glasses points at it. Two cells in the gaps column hold question marks"
    >
      <Grid x={X} y={Y} cols={5} rows={5} cw={CW} rh={RH} header="amber" seed={3} />
      <rect x={X + 4 * CW + 3} y={Y + RH + 3} width={CW - 6} height={RH * 4 - 6} fill={TONES.pink.mid} className="s-lm0-glow" style={{ opacity: 0.3 }} />
      {HEAD.map((word, c) => (
        <Hand key={word} x={X + c * CW + CW / 2} y={Y + 35} size={20} anchor="middle" weight={700}>
          {word}
        </Hand>
      ))}
      {cells}
      <PushPin x={X + 14} y={Y + 8} tone="red" seed={4} />
      <PushPin x={X + 5 * CW - 14} y={Y + 8} tone="blue" seed={5} />

      <Floor y={372} x1={20} x2={780} seed={6} />
      <Pile x={716} y={372} w={100} count={9} seed={7} />

      {[0, 1, 2].map((i) => (
        <Place key={i} x={700} y={300}>
          <Anim className="s-lm0-fly" style={{ animationDelay: `${i * -2.5}s` }}>
            <Sheet x={-12} y={-16} w={24} h={32} lines={2} fold={6} seed={40 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Shadow x={100} y={374} rx={46} ry={6} />
      <Place x={100} y={372} s={2.1}>
        <g className="s-lm0-pip">
          <Pip mood="happy" arms="point" glasses look={1.6} seed={50} />
        </g>
      </Place>
    </Scene>
  )
}
