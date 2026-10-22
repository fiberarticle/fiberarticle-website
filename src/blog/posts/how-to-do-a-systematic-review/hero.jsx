import {
  Anim,
  Checklist,
  Floor,
  Funnel,
  Hand,
  INK_SOFT,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
} from '../../ink/index.js'

/**
 * The review as a funnel. Zoya lifts sheets from a tall pile of search
 * results into the funnel's mouth; inside, the records are searched and
 * screened, and only a small neat stack of included studies drops out at
 * the bottom. Amrita, the second screener, ticks her clipboard on the right.
 */

const FLOOR = 372

const css = `
.s-slr0-fall { opacity: 0; animation: s-slr0-fall 4s ease-in infinite; animation-delay: var(--d, 0s); }
.s-slr0-drip { opacity: 0; animation: s-slr0-drip 4s ease-in infinite; }
.s-slr0-zoya .pip-body { animation: s-slr0-lift 4s ease-in-out infinite; }
.s-slr0-amrita .pip-arm-r { animation: s-slr0-tick 2s ease-in-out infinite; }
.s-slr0 .check-tick { animation: s-slr0-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 8s); }
@keyframes s-slr0-fall {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  45% { transform: translate(110px, 40px) rotate(18deg); opacity: 1; }
  55%, 100% { transform: translate(130px, 70px) rotate(24deg); opacity: 0; }
}
@keyframes s-slr0-drip {
  0%, 60% { transform: translateY(0); opacity: 0; }
  66% { opacity: 1; }
  88% { transform: translateY(46px); opacity: 1; }
  96%, 100% { transform: translateY(46px); opacity: 0; }
}
@keyframes s-slr0-lift {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-4px); }
}
@keyframes s-slr0-tick {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
@keyframes s-slr0-draw {
  0%, 20% { stroke-dashoffset: 1; }
  30%, 90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-slr0"
      label="A paper character in glasses lifts papers from a tall pile into a big funnel marked search and screen, and a small stack of fourteen included studies sits under its spout, while a second screener ticks a clipboard"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={10} />

      <Pile x={90} y={FLOOR} w={100} count={22} seed={11} />
      <Hand x={90} y={FLOOR - 128} size={20} anchor="middle" c={INK_SOFT}>
        1,146 records
      </Hand>

      <Funnel x={410} y={92} w={250} h={220} tone="green" seed={12} />
      <Hand x={410} y={140} size={24} anchor="middle" weight={700}>
        search
      </Hand>
      <Hand x={410} y={186} size={22} anchor="middle" weight={700}>
        screen
      </Hand>

      {[0, 1, 2].map((i) => (
        <Place key={i} x={250 + i * 6} y={36 - i * 4}>
          <Anim className="s-slr0-fall" style={{ '--d': `${-i * 1.3}s` }}>
            <Sheet x={0} y={0} w={30} h={38} lines={2} fold={8} seed={20 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Place x={0} y={0}>
        <Anim className="s-slr0-drip">
          <Sheet x={398} y={300} w={24} h={14} lines={0} fold={5} seed={30} sw={1.2} />
        </Anim>
      </Place>
      <Pile x={410} y={FLOOR} w={70} count={4} seed={31} />
      <Hand x={456} y={FLOOR - 8} size={20} c={INK_SOFT}>
        14 studies
      </Hand>

      <Shadow x={215} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={215} y={FLOOR} s={1.7}>
        <g className="s-slr0-zoya">
          <Pip mood="focused" arms="carry" tone="pink" glasses look={1.4} seed={40}>
            <Sheet x={-16} y={-92} w={32} h={22} lines={1} fold={6} seed={41} sw={1.2} />
          </Pip>
        </g>
      </Place>

      <Checklist x={588} y={110} w={120} items={4} done={4} seed={50} />
      <Shadow x={730} y={FLOOR + 3} rx={34} ry={5} />
      <Place x={730} y={FLOOR} s={1.6} flip>
        <g className="s-slr0-amrita">
          <Pip mood="happy" arms="point" tone="blue" look={1.4} seed={60} />
        </g>
      </Place>
    </Scene>
  )
}
