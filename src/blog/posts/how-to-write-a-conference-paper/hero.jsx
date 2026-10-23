import { Anim, Arrow, Calendar, Floor, Hand, INK_SOFT, Pile, Pip, Place, Plant, Scene, Scissors, Shadow, Sparkle, Sticky, TONES } from '../../ink/index.js'
import { TwoColPaper } from './scenes.jsx'

/**
 * The cut. Ritesh stands between the tall pile of his dissertation and the
 * neat two-column paper it becomes, scissors in hand, with the deadline on
 * the wall and the one idea on a sticky note.
 */

const FLOOR = 372

const css = `
.s-hcp0 .blade-a { animation: s-hcp0-snip-a 1.6s ease-in-out infinite; }
@keyframes s-hcp0-snip-a {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
.s-hcp0 .blade-b { animation: s-hcp0-snip-b 1.6s ease-in-out infinite; }
@keyframes s-hcp0-snip-b {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(14deg); }
}
.s-hcp0-pip .pip-body { animation: s-hcp0-bob 3s ease-in-out infinite; }
@keyframes s-hcp0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.s-hcp0-paper { animation: s-hcp0-float 4.2s ease-in-out infinite; }
@keyframes s-hcp0-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(-1deg); }
}
.s-hcp0-spark { animation: s-hcp0-spark 2.6s ease-in-out infinite; animation-delay: calc(var(--i) * -0.9s); }
@keyframes s-hcp0-spark {
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
      className="s-hcp0"
      label="A green paper character holds a pair of scissors between a tall pile of dissertation pages marked 64 pages and a neat two-column conference paper marked 12 pages, with a calendar showing the deadline and a sticky note that says one idea"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <Pile x={140} y={FLOOR} w={150} count={40} seed={2} />
      <Hand x={140} y={150} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
        64 pages
      </Hand>
      <Hand x={140} y={124} size={18} anchor="middle" c={INK_SOFT}>
        the dissertation
      </Hand>

      <Shadow x={330} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={330} y={FLOOR} s={2.1}>
        <g className="s-hcp0-pip">
          <Pip mood="focused" arms="hold" tone="green" look={1.5} seed={3} />
        </g>
      </Place>
      <Scissors x={330} y={FLOOR - 60} s={0.8} angle={-20} seed={4} />

      <Arrow from={[400, 250]} to={[480, 250]} bend={-0.25} seed={5} w={2} />

      <Place x={0} y={0}>
        <Anim className="s-hcp0-paper" origin={[590, 360]}>
          <TwoColPaper x={500} y={120} w={180} h={240} seed={6} tone="green" sw={2.2} />
        </Anim>
      </Place>
      <Hand x={590} y={104} size={24} anchor="middle" weight={700} c={TONES.green.deep}>
        12 pages
      </Hand>

      <Calendar x={690} y={40} w={84} h={90} day="15" month="SEP" tone="red" seed={7} />
      <Sticky x={690} y={190} w={96} h={64} tone="amber" lines={0} seed={8} />
      <Hand x={738} y={228} size={20} anchor="middle" weight={700}>
        one idea
      </Hand>

      {[
        [480, 140, 9],
        [700, 300, 7],
      ].map(([x, y, s], i) => (
        <g key={i} className="s-hcp0-spark" style={{ '--i': i, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Sparkle x={x} y={y} s={s} />
        </g>
      ))}

      <Plant x={750} y={FLOOR} s={0.8} seed={10} />
    </Scene>
  )
}
