import {
  Anim,
  Arrow,
  Box,
  Burst,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  TEXT_LINE,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * Copying from yourself. A highlighted paragraph keeps sliding out of last
 * year's conference paper and into this year's journal draft. Above them the
 * journal's similarity report reads 41 percent, and the source it names is
 * "you". Harini, below, looks up at it in surprise.
 */

const FLOOR = 372

const css = `
.s-slf0-chunk { animation: s-slf0-slide 6s ease-in-out infinite; }
.s-slf0-burst { animation: s-slf0-flash 6s ease-in-out infinite; }
.s-slf0-report { animation: s-slf0-tilt 6s ease-in-out infinite; }
.s-slf0-harini .pip-body { animation: s-slf0-jump 6s ease-in-out infinite; }
@keyframes s-slf0-slide {
  0%, 12% { transform: translate(0, 0); opacity: 1; }
  48%, 70% { transform: translate(290px, 10px); opacity: 1; }
  80% { transform: translate(290px, 10px); opacity: 0; }
  81% { transform: translate(0, 0); opacity: 0; }
  92%, 100% { transform: translate(0, 0); opacity: 1; }
}
@keyframes s-slf0-flash {
  0%, 50%, 100% { opacity: 0; }
  56%, 72% { opacity: 1; }
}
@keyframes s-slf0-tilt {
  0%, 50%, 100% { transform: rotate(0deg); }
  58% { transform: rotate(-4deg); }
  66% { transform: rotate(2deg); }
}
@keyframes s-slf0-jump {
  0%, 50%, 100% { transform: translateY(0); }
  56% { transform: translateY(-8px); }
  62% { transform: translateY(0); }
}
`

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 13, seed, c = TEXT_LINE, w = 1.6 }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} />
}

/* The copied paragraph: a pink highlighted block of lines. Anchor: top-left. */
function Chunk({ x, y, seed }) {
  return (
    <g>
      <rect x={x - 4} y={y - 8} width={118} height={46} rx={4} fill={TONES.pink.tint} />
      <rect x={x - 4} y={y - 8} width={118} height={46} rx={4} fill="url(#hatch-pink)" opacity="0.6" />
      <Lines x={x} y={y} rows={[104, 96, 84]} gap={14} seed={seed} c={TONES.pink.deep} w={1.8} />
    </g>
  )
}

export default function Hero() {
  const lx = 70
  const rx = 360
  const top = 96
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-slf0"
      label="A highlighted paragraph slides out of last year's conference paper and into a new journal draft, while a similarity report above reads 41 percent with the source named as you, and a paper character below looks up in surprise"
    >
      <Sheet x={lx} y={top} w={170} h={226} tone="paper" lines={0} fold={22} seed={11} sw={2} />
      <Hand x={lx + 16} y={top + 40} size={19} weight={700}>
        conference
      </Hand>
      <Hand x={lx + 16} y={top + 62} size={19} weight={700}>
        paper, 2025
      </Hand>
      <Lines x={lx + 18} y={top + 90} rows={[130, 112]} seed={12} />
      <Chunk x={lx + 22} y={top + 132} seed={13} />
      <Lines x={lx + 18} y={top + 192} rows={[124, 96]} seed={14} />

      <Sheet x={rx} y={top} w={180} h={236} tone="paper" lines={0} fold={22} seed={21} sw={2} />
      <Hand x={rx + 16} y={top + 40} size={19} weight={700}>
        journal draft
      </Hand>
      <Lines x={rx + 18} y={top + 76} rows={[140, 120, 132]} seed={22} />
      <Chunk x={rx + 22} y={top + 142} seed={23} />
      <Lines x={rx + 18} y={top + 200} rows={[136, 110]} seed={24} />

      <Arrow from={[lx + 150, top + 70]} to={[rx - 4, top + 74]} bend={-0.18} seed={25} c={INK_SOFT} w={1.5} dash="5 6" />
      <Hand x={(lx + rx) / 2 + 66} y={top + 18} size={17} anchor="middle" c={INK_SOFT}>
        copy, paste
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-slf0-chunk">
          <Chunk x={lx + 22} y={top + 132} seed={13} />
        </Anim>
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-slf0-report" origin={[660, 60]}>
          <Box x={586} y={52} w={170} h={118} r={8} fill="url(#fill-amber)" seed={31} sw={2} double />
          <Type x={671} y={78} size={14} weight={700} anchor="middle">
            similarity report
          </Type>
          <Hand x={671} y={126} size={44} weight={700} anchor="middle" c={TONES.red.deep}>
            41%
          </Hand>
          <Type x={671} y={154} size={15} anchor="middle">
            source: you
          </Type>
        </Anim>
      </Place>

      <Floor y={FLOOR} x1={20} x2={780} seed={40} />

      <Shadow x={668} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={668} y={FLOOR} s={1.7}>
        <g className="s-slf0-harini">
          <Pip mood="surprised" arms="shrug" tone="green" look={-0.6} seed={50} />
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-slf0-burst" style={{ opacity: 0 }}>
          <Burst x={672} y={234} r={24} length={12} seed={52} />
        </Anim>
      </Place>
    </Scene>
  )
}
