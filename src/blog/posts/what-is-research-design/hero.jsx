import { Anim, Arrow, Box, Floor, Hand, INK_SOFT, Ink, PAPER, Pip, Place, Plant, PushPin, Scene, Shadow, Sticky, TONES, Tick, Tuft, handLine } from '../../ink/index.js'
import { Kid } from './scenes.jsx'

/**
 * The plan on the board. Lalit's design is pinned up: a question on a sticky
 * note, then two rows, Section A with skipping ropes and Section B with its
 * usual warm-up, each ticked before and after twelve weeks. In front of the
 * board Lalit himself skips, the rope swinging over his head and under his
 * feet while he hops.
 */

const FLOOR = 372

const css = `
.s-rsd0-pip .pip-body { animation: s-rsd0-hop 1.2s ease-in-out infinite; }
@keyframes s-rsd0-hop {
  0%, 100% { transform: translateY(-7px); }
  50% { transform: translateY(0); }
}
.s-rsd0-rope { animation: s-rsd0-swing 1.2s ease-in-out infinite; }
@keyframes s-rsd0-swing {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(-2.4); }
}
.s-rsd0-tick { animation: s-rsd0-tick 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
@keyframes s-rsd0-tick {
  0%, 60%, 100% { opacity: 1; }
  72%, 84% { opacity: 0.15; }
}
.s-rsd0-arrow { animation: s-rsd0-nudge 3s ease-in-out infinite; }
@keyframes s-rsd0-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}
`

const COLS = [
  { x: 494, label: 'before' },
  { x: 592, label: '12 weeks' },
  { x: 690, label: 'after' },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={380}
      top={8}
      css={css}
      className="s-rsd0"
      label="A paper character skips with a red rope in front of a pinned plan titled my design: a question mark on a sticky note points to two rows, section 7 A with skipping ropes and section 7 B with the usual warm-up, each ticked before and after twelve weeks"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <Box x={250} y={20} w={520} h={290} r={10} fill={PAPER} stroke={TONES.brown.deep} seed={2} sw={2.4} />
      <PushPin x={270} y={34} tone="red" seed={3} />
      <PushPin x={750} y={34} tone="blue" seed={4} />
      <Hand x={290} y={66} size={26} weight={700}>
        my design
      </Hand>

      <Sticky x={276} y={150} w={70} h={70} tone="pink" lines={0} seed={5} />
      <Hand x={311} y={204} size={48} anchor="middle" weight={700} c={TONES.pink.deep}>
        ?
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-rsd0-arrow">
          <Arrow from={[354, 186]} to={[386, 186]} bend={0} seed={6} w={2.2} />
        </Anim>
      </Place>

      {COLS.map((col) => (
        <Hand key={col.label} x={col.x} y={102} size={19} anchor="middle" c={INK_SOFT} weight={700}>
          {col.label}
        </Hand>
      ))}
      <Ink d={handLine(398, 116, 748, 116, 7, 0.5)} w={1.6} />
      <Ink d={handLine(398, 206, 748, 206, 8, 0.5)} c={INK_SOFT} w={1.2} dash="5 6" />
      <Ink d={handLine(448, 92, 448, 290, 9, 0.5) + handLine(642, 92, 642, 290, 10, 0.5) + handLine(544, 92, 544, 290, 11, 0.5)} c={INK_SOFT} w={1.2} dash="5 6" />

      <Kid x={418} y={180} s={1.2} tone="blue" rope seed={12} />
      <Kid x={418} y={270} s={1.2} tone="pink" seed={13} />
      <Hand x={418} y={200} size={15} anchor="middle" weight={700}>
        7 A
      </Hand>
      <Hand x={418} y={290} size={15} anchor="middle" weight={700}>
        7 B
      </Hand>

      <Hand x={592} y={164} size={20} anchor="middle" c={TONES.red.deep}>
        skipping
      </Hand>
      <Hand x={592} y={254} size={20} anchor="middle" c={INK_SOFT}>
        usual warm-up
      </Hand>
      {[
        [494, 158],
        [690, 158],
        [494, 248],
        [690, 248],
      ].map(([x, y], i) => (
        <g key={i} className="s-rsd0-tick" style={{ '--i': i }}>
          <Tick x={x} y={y} s={1.1} />
        </g>
      ))}

      <Tuft x={34} y={FLOOR} seed={14} />
      <Tuft x={238} y={FLOOR} seed={15} />
      <Plant x={736} y={FLOOR} s={0.85} seed={16} />

      <Shadow x={130} y={FLOOR + 3} rx={38} ry={5} />
      <Place x={130} y={FLOOR} s={1.8}>
        <g className="s-rsd0-pip">
          <Pip mood="grin" arms="down" tone="amber" look={1} seed={17}>
            <Anim className="s-rsd0-rope" origin={[0, -22]}>
              <Ink d="M-31 -22Q-28 4 0 4Q28 4 31 -22" c={TONES.red.ink} w={2.4} />
            </Anim>
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
