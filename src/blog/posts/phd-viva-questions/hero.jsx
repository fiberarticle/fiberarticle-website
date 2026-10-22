import { Desk, Floor, Hand, Pip, Place, Scene, Shadow, Sheet, Speech, TONES, Tick } from '../../ink/index.js'
import { Audience, Lectern, SlideScreen } from './scenes.jsx'

/**
 * The open viva. On the left the board sits at a table, the examiner in
 * blue asking a question and the guide in green listening. Ankit stands by
 * the lectern under a slide of a rainy slope, answering, and a row of
 * juniors watches from the front bench. The question mark and the tick in
 * the two bubbles are the whole story of the day.
 */

const css = `
.s-viva0-ask { animation: s-viva0-pulse 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.s-viva0-reply { animation: s-viva0-pulse 4s ease-in-out infinite; animation-delay: -2s; transform-box: fill-box; transform-origin: center; }
.s-viva0-rain { animation: s-viva0-rain 1.6s linear infinite; animation-delay: calc(var(--i) * -0.3s); }
.s-viva0-me .pip-arm-r { animation: s-viva0-point 4s ease-in-out infinite; }
.s-viva0-crowd .pip-body { animation: s-viva0-bob 3s ease-in-out infinite; animation-delay: calc(var(--i) * -0.5s); }
@keyframes s-viva0-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
@keyframes s-viva0-rain {
  0%, 100% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(14px); opacity: 0; }
  90% { transform: translateY(0); opacity: 0; }
}
@keyframes s-viva0-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
@keyframes s-viva0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export default function Hero() {
  const stage = 300
  return (
    <Scene
      w={800}
      h={380}
      top={12}
      css={css}
      className="s-viva0"
      label="An open PhD viva in a seminar hall. An examiner and a guide sit at a table on the left, the examiner asking a question shown as a question mark. A paper character in glasses stands by a lectern under a slide of a rainy slope with a crack, answering with a tick in his bubble, while a row of small paper students watches from the front bench"
    >
      <Floor y={stage} x1={20} x2={780} seed={11} />

      <Place x={92} y={262} s={1.3}>
        <Pip mood="focused" arms="hold" tone="blue" glasses look={1.5} seed={12} />
      </Place>
      <Place x={196} y={262} s={1.3}>
        <Pip mood="happy" arms="hold" tone="green" look={1.5} seed={13} />
      </Place>
      <Desk y={236} x1={30} x2={270} seed={14} />
      <Sheet x={120} y={208} w={40} h={28} lines={2} fold={8} seed={15} />
      <Hand x={150} y={290} size={17} anchor="middle" c={TONES.brown.deep}>
        the board
      </Hand>

      <g className="s-viva0-ask">
        <Speech x={50} y={40} w={96} h={70} tx={92} ty={150} seed={16} tone="blue">
          <Hand x={98} y={92} size={46} anchor="middle" weight={700}>
            ?
          </Hand>
        </Speech>
      </g>

      <SlideScreen x={500} y={40} w={240} h={160} seed={17} rainClass="s-viva0-rain" />

      <Lectern x={470} y={stage} seed={18} />
      <Shadow x={390} y={stage + 2} rx={30} ry={4} />
      <Place x={390} y={stage} s={1.6}>
        <g className="s-viva0-me">
          <Pip mood="happy" arms="point" tone="amber" glasses look={1.6} seed={19} />
        </g>
      </Place>

      <g className="s-viva0-reply">
        <Speech x={300} y={56} w={92} h={66} tx={372} ty={176} seed={20} tone="green">
          <Tick x={346} y={90} s={1.6} />
        </Speech>
      </g>

      <Audience x={150} y={392} count={7} gap={84} seed={30} className="s-viva0-crowd" />
    </Scene>
  )
}
