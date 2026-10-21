import {
  Anim,
  Book,
  Box,
  Chai,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pencil,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * The annotated bibliography on the wall. A tall sheet carries three
 * entries: a dark citation line with its hanging second line, and a green
 * note under each. Pip stands beside it, pencil in hand, and the lines of
 * the last note are written in again one by one.
 */

const WRITE = [0, 1, 2, 3]

const css = `
.s-anb0-pip .pip-body { animation: s-anb0-bob 3.4s ease-in-out infinite; }
.s-anb0-pip .pip-arm-r, .s-anb0-pen { animation: s-anb0-scribble 0.9s ease-in-out infinite; }
@keyframes s-anb0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-anb0-scribble {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-7deg); }
}
${WRITE.map(
  (i) => `.s-anb0-w${i} { animation: s-anb0-w${i} 9s ease-in-out infinite; }
@keyframes s-anb0-w${i} {
  0%, 8% { transform: scaleX(1); }
  12%, ${18 + i * 14}% { transform: scaleX(0); }
  ${28 + i * 14}%, 100% { transform: scaleX(1); }
}`,
).join('\n')}
`

const SX = 196
const SY = 34
const SW = 360
const SH = 334

/* One entry: the citation (two dark lines, the second indented) and the
   note under it, a green block of handwriting set in further. */
function Entry({ y, notes, seed, writing = false }) {
  const cite = handLine(SX + 22, y, SX + SW - 40, y, seed, 0.35) + handLine(SX + 46, y + 12, SX + 200, y + 12, seed + 1, 0.35)
  const nx = SX + 46
  const nh = notes.length * 11 + 12
  return (
    <g>
      <Ink d={cite} c={INK_SOFT} w={2} />
      <rect x={nx - 6} y={y + 22} width={SW - 74} height={nh} fill={TONES.green.tint} />
      <Ink d={handLine(nx - 6, y + 22, nx - 6, y + 22 + nh, seed + 2, 0.3)} c={TONES.green.ink} w={2} />
      {notes.map((len, i) => {
        const ly = y + 34 + i * 11
        const line = <Ink d={handLine(nx + 4, ly, nx + 4 + len, ly, seed + 5 + i, 0.35)} c={TONES.green.deep} w={1.6} o={0.8} />
        return writing ? (
          <Anim key={i} className={`s-anb0-w${i}`} origin={[nx + 4, ly]}>
            {line}
          </Anim>
        ) : (
          <g key={i}>{line}</g>
        )
      })}
    </g>
  )
}

export default function Hero() {
  const floor = 372
  return (
    <Scene
      w={800}
      h={380}
      top={12}
      css={css}
      className="s-anb0"
      label="A tall sheet titled annotated bibliography is pinned to the wall with three entries, each a citation with a green note of handwriting under it. A paper character in glasses writes the last note with a pencil, beside a stack of books and a glass of chai"
    >
      <Box x={SX} y={SY} w={SW} h={SH} r={4} fill={PAPER} seed={2} sw={1.9} />
      <PushPin x={SX + 22} y={SY + 10} tone="red" seed={3} />
      <PushPin x={SX + SW - 22} y={SY + 10} tone="blue" seed={4} />
      <Hand x={SX + SW / 2} y={SY + 44} size={27} anchor="middle" weight={700}>
        annotated bibliography
      </Hand>
      <Ink d={handLine(SX + 70, SY + 54, SX + SW - 70, SY + 54, 5, 0.6)} c={TONES.green.ink} w={2.2} />

      <Entry y={SY + 82} notes={[230, 250, 196]} seed={10} />
      <Entry y={SY + 168} notes={[240, 214, 236, 150]} seed={30} />
      <Entry y={SY + 265} notes={[226, 244, 180]} seed={50} writing />

      <Floor y={floor} x1={20} x2={780} seed={6} />

      <Book x={50} y={floor - 30} w={110} h={30} tone="blue" seed={7} label={false} />
      <Book x={58} y={floor - 58} w={98} h={28} tone="amber" seed={8} label={false} />
      <Book x={46} y={floor - 84} w={106} h={26} tone="red" seed={9} label={false} />
      <Book x={62} y={floor - 108} w={90} h={24} tone="green" seed={11} label={false} />
      <Chai x={128} y={floor - 108} s={0.9} seed={12} />

      <Shadow x={612} y={floor + 2} rx={44} ry={6} />
      <Place x={612} y={floor} s={2.1} flip>
        <g className="s-anb0-pip">
          <Pip mood="focused" arms="write" tone="pink" glasses look={1.2} seed={60}>
            <Anim className="s-anb0-pen" origin={[22, -39]}>
              <Pencil x={24} y={-20} length={30} angle={-60} tone="amber" seed={61} />
            </Anim>
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
