import {
  Anim,
  Box,
  Chai,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pencil,
  Pile,
  Pip,
  Place,
  Poly,
  Scene,
  Shadow,
  TEXT_LINE,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * The questionnaire. A tall clipboard form stands in the middle with four
 * numbered questions, and a green tick draws itself into each box in turn.
 * Pip stands beside it with a pencil, writing; on the right a T-shirt sways
 * on its hanger (the knitwear units of Tiruppur) above a pile of returned
 * forms.
 */

const css = `
.s-mqr0-tick { animation: s-mqr0-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
@keyframes s-mqr0-draw {
  0%, 6% { stroke-dashoffset: 1; }
  18%, 84% { stroke-dashoffset: 0; }
  96%, 100% { stroke-dashoffset: 1; }
}
.s-mqr0 .pip-arm-r { animation: s-mqr0-scribble 1.4s ease-in-out infinite; }
@keyframes s-mqr0-scribble {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
.s-mqr0-shirt { animation: s-mqr0-sway 4.4s ease-in-out infinite; }
@keyframes s-mqr0-sway {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}
`

/** A T-shirt on a hanger. Anchor: the tip of the hook. */
export function Shirt({ x, y, s = 1, tone = 'pink', seed = 1 }) {
  const p = (px, py) => [x + px * s, y + py * s]
  const body = [
    p(-12, 26), p(-32, 32), p(-50, 52), p(-40, 64), p(-29, 56), p(-29, 118),
    p(29, 118), p(29, 56), p(40, 64), p(50, 52), p(32, 32), p(12, 26), p(0, 34),
  ]
  return (
    <g>
      <Ink d={`M${x} ${y + 12 * s}Q${x} ${y} ${x + 7 * s} ${y + 1 * s}Q${x + 12 * s} ${y + 4 * s} ${x + 8 * s} ${y + 9 * s}`} w={1.6} />
      <Ink d={handLine(x, y + 12 * s, x - 36 * s, y + 30 * s, seed, 0.3) + handLine(x, y + 12 * s, x + 36 * s, y + 30 * s, seed + 1, 0.3)} w={1.7} />
      <Poly points={body} fill={TONES[tone].tint} seed={seed + 2} amp={0.6} sw={1.8} />
      <Ink d={handLine(x - 14 * s, y + 80 * s, x + 14 * s, y + 80 * s, seed + 3, 0.3)} c={TONES[tone].ink} w={1.4} o={0.7} />
      <Ink d={handLine(x - 18 * s, y + 92 * s, x + 18 * s, y + 92 * s, seed + 4, 0.3)} c={TONES[tone].ink} w={1.4} o={0.7} />
    </g>
  )
}

/** A clipboard form with numbered question rows. Anchor: top-left. */
export function Form({ x, y, w = 250, rows = 4, gap = 52, title = 'questionnaire', tickClass, seed = 1 }) {
  const h = 80 + rows * gap
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={8} fill={PAPER} seed={seed} sw={2} />
      <rect x={x + w / 2 - 34} y={y - 10} width={68} height={22} rx={4} fill={TONES.grey.mid} />
      <Ink
        d={handLine(x + w / 2 - 34, y - 10, x + w / 2 + 34, y - 10, seed + 1, 0.3) + handLine(x + w / 2 + 34, y - 10, x + w / 2 + 34, y + 12, seed + 2, 0.3) + handLine(x + w / 2 + 34, y + 12, x + w / 2 - 34, y + 12, seed + 3, 0.3) + handLine(x + w / 2 - 34, y + 12, x + w / 2 - 34, y - 10, seed + 4, 0.3)}
        w={1.4}
      />
      <Hand x={x + w / 2} y={y + 46} size={25} anchor="middle" weight={700}>
        {title}
      </Hand>
      {Array.from({ length: rows }, (_, i) => {
        const ry = y + 70 + i * gap
        return (
          <g key={i}>
            <Type x={x + 16} y={ry + 16} size={15} weight={700} c={INK_SOFT}>
              {`${i + 1}.`}
            </Type>
            <Ink d={handLine(x + 42, ry + 6, x + w - 30, ry + 6, seed + 10 + i, 0.4)} c={TEXT_LINE} w={1.6} />
            <Box x={x + 42} y={ry + 16} w={18} h={18} seed={seed + 20 + i} sw={1.4} fill={PAPER} />
            <Ink d={handLine(x + 66, ry + 26, x + 120, ry + 26, seed + 30 + i, 0.3)} c={TEXT_LINE} w={1.4} />
            <Box x={x + 132} y={ry + 16} w={18} h={18} seed={seed + 40 + i} sw={1.4} fill={PAPER} />
            <Ink d={handLine(x + 156, ry + 26, x + w - 40, ry + 26, seed + 50 + i, 0.3)} c={TEXT_LINE} w={1.4} />
            <path
              className={tickClass}
              style={{ '--i': i }}
              d={`M${x + (i % 2 ? 133 : 43)} ${ry + 24}q4 3 6 9q6 -14 16 -20`}
              pathLength="1"
              strokeDasharray="1"
              fill="none"
              stroke="#3f8f4f"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )
      })}
    </g>
  )
}

export default function Hero() {
  const FLOOR = 362
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-mqr0"
      label="A paper character with a pencil stands beside a tall clipboard questionnaire whose four numbered questions are ticked one by one, while a pink T-shirt sways on a hanger above a pile of returned forms"
    >
      <Floor y={FLOOR} x1={40} x2={760} seed={2} />

      <Form x={290} y={44} w={250} rows={4} gap={58} tickClass="s-mqr0-tick" seed={10} />

      <Shadow x={180} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={180} y={FLOOR} s={2}>
        <Pip mood="focused" arms="write" look={1.6} tone="amber" seed={31} />
      </Place>
      <Pencil x={236} y={326} length={74} angle={-60} tone="amber" seed={32} />

      <Ink d={handLine(600, 46, 760, 46, 40, 0.5)} c={INK_SOFT} w={1.6} />
      <Anim className="s-mqr0-shirt" origin={[680, 46]}>
        <Shirt x={680} y={46} s={1.3} tone="pink" seed={41} />
      </Anim>

      <Shadow x={665} y={FLOOR + 3} rx={58} ry={5} />
      <Pile x={665} y={FLOOR} w={130} count={11} seed={50} />
      <Hand x={665} y={FLOOR - 68} size={20} anchor="middle" c={INK_SOFT}>
        returned forms
      </Hand>

      <Shadow x={92} y={FLOOR + 3} rx={18} ry={4} />
      <Chai x={92} y={FLOOR} s={0.9} seed={60} />
    </Scene>
  )
}
