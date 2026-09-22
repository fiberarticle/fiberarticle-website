import {
  Anim,
  Floor,
  Ink,
  Pip,
  Place,
  Scene,
  Shadow,
  Sparkle,
  Spine,
  TONES,
  Torch,
  Worm,
  handLine,
  handPoly,
  rng,
} from '../../ink/index.js'

/**
 * The literature as a full bookshelf with one empty slot. Pip sweeps a
 * torch along the shelves and settles on the gap, which glows while a
 * bookworm reads on top of the shelf.
 */

const ROWS = [140, 250, 360]
const GAP = { row: 1, x1: 298, x2: 332 }
const TONE_CYCLE = ['blue', 'green', 'amber', 'red', 'pink', 'brown', 'grey']

/* Books for every row, deterministic, leaving the gap empty. */
function books() {
  const r = rng(41)
  const out = []
  ROWS.forEach((bottom, row) => {
    let x = 130
    while (x < 508) {
      const w = 14 + Math.floor(r() * 11)
      const h = 70 + Math.floor(r() * 22)
      if (row === GAP.row && x + w > GAP.x1 && x < GAP.x2) {
        x = GAP.x2 + 1
        continue
      }
      if (x + w > 510) break
      out.push({ x, y: bottom, w, h, tone: TONE_CYCLE[Math.floor(r() * TONE_CYCLE.length)], seed: 100 + out.length })
      x += w + 1
    }
  })
  return out
}

const BOOKS = books()

const css = `
.s-rg0-torch { animation: s-rg0-sweep 10s ease-in-out infinite; }
.s-rg0-glow { animation: s-rg0-glow 10s ease-in-out infinite; }
.s-rg0-spark { animation: s-rg0-spark 10s ease-in-out infinite; }
@keyframes s-rg0-sweep {
  0%, 100% { transform: rotate(9deg); }
  22% { transform: rotate(-11deg); }
  40%, 88% { transform: rotate(0deg); }
}
@keyframes s-rg0-glow {
  0%, 36% { opacity: 0.15; }
  46%, 86% { opacity: 0.95; }
  96%, 100% { opacity: 0.15; }
}
@keyframes s-rg0-spark {
  0%, 44% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(25deg); }
  54%, 84% { opacity: 1; transform: scale(1) rotate(45deg); }
  92%, 100% { opacity: 0; transform: scale(0.3) rotate(60deg); }
}
`

export default function Hero() {
  const gapTop = ROWS[GAP.row] - 92
  return (
    <Scene
      w={800}
      h={430}
      top={-30}
      css={css}
      className="s-rg0"
      label="A tall bookshelf full of books with one empty slot. A paper character shines a torch along the shelves until the beam rests on the empty slot, which glows, while a bookworm reads on top of the shelf"
    >
      <Floor y={374} x1={40} x2={760} seed={2} />

      <Anim className="s-rg0-glow">
        <rect x={GAP.x1} y={gapTop} width={GAP.x2 - GAP.x1} height={92} fill={TONES.amber.tint} />
        <rect x={GAP.x1} y={gapTop} width={GAP.x2 - GAP.x1} height={92} fill="url(#hatch-amber)" opacity="0.5" />
      </Anim>

      {BOOKS.map((book) => (
        <Spine key={`${book.x}-${book.y}`} x={book.x} y={book.y} w={book.w} h={book.h} tone={book.tone} seed={book.seed} />
      ))}

      {ROWS.map((bottom, i) => (
        <g key={bottom}>
          <rect x={118} y={bottom} width={404} height={9} fill="url(#wood)" />
          <Ink d={handPoly([[118, bottom], [522, bottom], [522, bottom + 9], [118, bottom + 9]], { seed: 10 + i, amp: 0.5, closed: true })} w={1.6} />
        </g>
      ))}
      <rect x={112} y={26} width={10} height={346} fill="url(#wood)" />
      <rect x={518} y={26} width={10} height={346} fill="url(#wood)" />
      <rect x={112} y={26} width={416} height={10} fill="url(#wood)" />
      <Ink d={handPoly([[112, 26], [528, 26], [528, 372], [112, 372]], { seed: 14, amp: 0.7, closed: true })} w={2} />
      <Ink d={handLine(122, 36, 518, 36, 15, 0.4)} w={1.3} />

      <Place x={315} y={gapTop - 12}>
        <Anim className="s-rg0-spark" spin>
          <Sparkle x={0} y={0} s={12} />
        </Anim>
      </Place>

      <Place x={214} y={26} s={1.15}>
        <Worm seed={21} />
      </Place>

      <Anim className="s-rg0-torch" origin={[513, 273]}>
        <Torch x={452} y={252} angle={-162.6} reach={150} seed={22} />
      </Anim>

      <Shadow x={610} y={376} rx={50} ry={6} />
      <Place x={610} y={374} s={2.1} flip>
        <Pip mood="focused" arms="point" look={0.5} seed={23} />
      </Place>
    </Scene>
  )
}
