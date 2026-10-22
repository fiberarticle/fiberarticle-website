import {
  Anim,
  Chart,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Speech,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * Two ways of asking about the same thing. On the left, the counting side:
 * a bar chart under the words how many. On the right, the listening side:
 * speech bubbles under the word why. Anjali stands between them in her
 * reading glasses, turning from one to the other.
 */

const FLOOR = 372

const css = `
.s-qvq0-pip .pip-body { animation: s-qvq0-turn 6s ease-in-out infinite; }
@keyframes s-qvq0-turn {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
.s-qvq0 .chart-bar { animation: s-qvq0-grow 4.5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.35s); }
@keyframes s-qvq0-grow {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.86); }
}
.s-qvq0-bubble { animation: s-qvq0-float 4s ease-in-out infinite; animation-delay: calc(var(--i) * -2s); }
@keyframes s-qvq0-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
`

function Lines({ x, y, widths, seed }) {
  let d = ''
  widths.forEach((w, i) => {
    d += handLine(x, y + i * 13, x + w, y + i * 13, seed + i * 3, 0.35)
  })
  return <Ink d={d} c={TONES.pink.deep} w={1.8} o={0.8} />
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-qvq0"
      label="A paper character in glasses stands between a bar chart labelled quantitative, how many, on the left and two speech bubbles labelled qualitative, why, on the right"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <Hand x={170} y={70} size={34} anchor="middle" weight={700} c={TONES.blue.deep}>
        quantitative
      </Hand>
      <Hand x={170} y={102} size={24} anchor="middle" c={INK_SOFT}>
        how many?
      </Hand>
      <Chart x={64} y={FLOOR - 16} w={220} h={200} bars={[0.42, 0.3, 0.88, 0.6]} tone="blue" seed={2} />
      <Type x={170} y={FLOOR + 20} size={15} anchor="middle" c={INK_SOFT}>
        numbers
      </Type>

      <Hand x={630} y={70} size={34} anchor="middle" weight={700} c={TONES.pink.deep}>
        qualitative
      </Hand>
      <Hand x={630} y={102} size={24} anchor="middle" c={INK_SOFT}>
        why?
      </Hand>
      <g className="s-qvq0-bubble" style={{ '--i': 0 }}>
        <Speech x={520} y={136} w={210} h={74} tx={566} ty={236} seed={3} tone="pink">
          <Lines x={540} y={160} widths={[160, 120, 140]} seed={4} />
        </Speech>
      </g>
      <g className="s-qvq0-bubble" style={{ '--i': 1 }}>
        <Speech x={560} y={240} w={180} h={64} tx={700} ty={334} seed={5}>
          <Lines x={578} y={262} widths={[130, 100, 120]} seed={6} />
        </Speech>
      </g>
      <Type x={630} y={FLOOR + 20} size={15} anchor="middle" c={INK_SOFT}>
        words
      </Type>
      <Plant x={756} y={FLOOR} s={0.8} seed={7} />

      <Shadow x={400} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={400} y={FLOOR} s={1.8}>
        <Anim className="s-qvq0-pip">
          <Pip mood="happy" arms="shrug" tone="amber" glasses seed={8} />
        </Anim>
      </Place>
    </Scene>
  )
}
