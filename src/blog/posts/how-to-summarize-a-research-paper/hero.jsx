import { Anim, Arrow, Floor, Funnel, Hand, INK_SOFT, Pencil, Pile, Pip, Place, Scene, Shadow, Sheet } from '../../ink/index.js'
import { SummaryCard } from './scenes.jsx'

/**
 * A tall pile of pages, a funnel and one small card. Pages lift off the pile
 * and drop into the funnel; out of its spout comes the summary card, whose
 * four lines (asked, did, found, means) write themselves one after another,
 * while a paper character with a pencil looks on.
 */

const FLOOR = 382

const css = `
.s-srp0-fly { animation: s-srp0-fly 6s ease-in-out infinite; }
.s-srp0-line { animation: s-srp0-line 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s); }
.s-srp0-pip .pip-arm-r { animation: s-srp0-write 0.9s ease-in-out infinite; }
.s-srp0-pip .pip-body { animation: s-srp0-bob 3s ease-in-out infinite; }
@keyframes s-srp0-fly {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  50% { transform: translate(110px, -150px) rotate(14deg); opacity: 1; }
  72% { transform: translate(196px, -126px) rotate(4deg); opacity: 1; }
  78% { transform: translate(200px, -110px) rotate(2deg); opacity: 0; }
  79%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
@keyframes s-srp0-line {
  0%, 100% { stroke-dashoffset: 0; }
  8% { stroke-dashoffset: 1; }
  26%, 92% { stroke-dashoffset: 0; }
}
@keyframes s-srp0-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-9deg); }
}
@keyframes s-srp0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={380}
      top={12}
      css={css}
      className="s-srp0"
      label="A tall pile of pages labelled 22 pages. Pages fly from it into a blue funnel, and an arrow leads from the funnel to one small card labelled my summary, with four short lines marked asked, did, found and means. A paper character holding a pencil stands beside the card"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <Pile x={140} y={FLOOR} w={150} count={24} seed={2} />
      <Hand x={140} y={240} size={24} anchor="middle" weight={700}>
        22 pages
      </Hand>

      {[0, 1, 2].map((i) => (
        <Place key={i} x={150} y={250}>
          <Anim className="s-srp0-fly" style={{ opacity: 0, animationDelay: `${i * -2}s` }}>
            <Sheet x={-14} y={-18} w={28} h={36} lines={2} fold={7} seed={10 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Funnel x={350} y={124} w={170} h={150} tone="blue" seed={3} />
      <Hand x={350} y={96} size={18} anchor="middle" c={INK_SOFT}>
        read, then pick
      </Hand>
      <Arrow from={[360, 284]} to={[446, 284]} bend={-0.12} seed={4} w={2} />

      <SummaryCard x={456} y={176} w={190} h={190} seed={5} lineClass="s-srp0-line" />

      <Shadow x={712} y={FLOOR + 3} rx={30} ry={5} />
      <Place x={712} y={FLOOR} s={1.75} flip>
        <g className="s-srp0-pip">
          <Pip mood="focused" arms="write" tone="green" glasses look={1.4} seed={20}>
            <Pencil x={25} y={-17} length={34} angle={-62} tone="amber" seed={21} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
