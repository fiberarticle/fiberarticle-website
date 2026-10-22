import { Chart, Clock, Floor, Hand, INK_SOFT, Pip, Place, Plant, Scene, Shadow, Sparkle, TONES } from '../../ink/index.js'
import { Lectern, Screen } from './scenes.jsx'

/**
 * The talk. Nusrat stands at a lectern and points at a projector screen
 * with one bar chart and the words one message. Three listeners sit at the
 * front, and a clock on the wall keeps the time.
 */

const FLOOR = 372

const css = `
.s-hpr0-speaker .pip-arm-r { animation: s-hpr0-point 2.8s ease-in-out infinite; }
@keyframes s-hpr0-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
.s-hpr0 .chart-bar { animation: s-hpr0-grow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.3s); }
@keyframes s-hpr0-grow {
  0%, 100% { transform: scaleY(1); }
  12% { transform: scaleY(0.25); }
  35%, 90% { transform: scaleY(1); }
}
.s-hpr0 .clock-min { animation: s-hpr0-min 10s linear infinite; }
@keyframes s-hpr0-min {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.s-hpr0-listen .pip-body { animation: s-hpr0-nod 3s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes s-hpr0-nod {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.s-hpr0-spark { animation: s-hpr0-spark 2.6s ease-in-out infinite; animation-delay: calc(var(--i) * -0.9s); }
@keyframes s-hpr0-spark {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.5); opacity: 0.4; }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={392}
      top={4}
      css={css}
      className="s-hpr0"
      label="A paper character stands at a wooden lectern and points at a projector screen showing one bar chart and the words one message. Three small paper characters in the audience listen, and a clock on the wall keeps the time"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <Clock x={86} y={70} r={34} seed={2} />

      <Screen x={270} y={36} w={300} h={196} floor={FLOOR} seed={3}>
        <Hand x={420} y={78} size={26} anchor="middle" weight={700} c={TONES.blue.deep}>
          one message
        </Hand>
        <Chart x={330} y={210} w={180} h={110} bars={[0.3, 0.5, 0.68, 0.95]} tone="green" seed={4} />
      </Screen>

      {[
        [586, 40, 9],
        [254, 60, 7],
      ].map(([x, y, s], i) => (
        <g key={i} className="s-hpr0-spark" style={{ '--i': i, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Sparkle x={x} y={y} s={s} />
        </g>
      ))}

      <Shadow x={160} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={160} y={FLOOR} s={2.1}>
        <g className="s-hpr0-speaker">
          <Pip mood="happy" arms="point" tone="blue" look={1.5} seed={5} />
        </g>
      </Place>
      <Lectern x={160} y={FLOOR} s={0.78} seed={6} />

      {[
        { x: 600, tone: 'paper', mood: 'happy', seed: 10, d: '0s' },
        { x: 676, tone: 'amber', mood: 'focused', seed: 12, d: '-1s' },
        { x: 750, tone: 'pink', mood: 'grin', seed: 14, d: '-2s' },
      ].map((p) => (
        <g key={p.seed}>
          <Shadow x={p.x} y={FLOOR + 2} rx={20} ry={4} />
          <Place x={p.x} y={FLOOR} s={1.05}>
            <g className="s-hpr0-listen" style={{ '--d': p.d }}>
              <Pip mood={p.mood} arms="down" tone={p.tone} look={-1.5} seed={p.seed} />
            </g>
          </Place>
        </g>
      ))}

      <Hand x={676} y={268} size={17} anchor="middle" c={INK_SOFT}>
        the audience
      </Hand>

      <Plant x={40} y={FLOOR} s={0.8} seed={20} />
    </Scene>
  )
}
