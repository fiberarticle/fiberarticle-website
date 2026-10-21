import {
  Anim,
  Floor,
  Funnel,
  Hand,
  INK_SOFT,
  Pile,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
} from '../../ink/index.js'

/**
 * Many papers in, one review out. Sheets lift off a tall pile of papers on
 * the floor and drop into a funnel; at the spout a single sheet waits,
 * labelled review, and Sanjana points at it.
 */

const FLOOR = 362

const css = `
.s-rvp0-fly { animation: s-rvp0-fly 6.6s ease-in-out infinite; opacity: 0; }
@keyframes s-rvp0-fly {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  48% { transform: translate(120px, -168px) rotate(-18deg); opacity: 1; }
  70% { transform: translate(196px, -150px) rotate(8deg); opacity: 1; }
  80% { transform: translate(200px, -118px) rotate(2deg); opacity: 0; }
  81%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
}
.s-rvp0-out { animation: s-rvp0-out 3.3s ease-in-out infinite; }
@keyframes s-rvp0-out {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.s-rvp0-spark { animation: s-rvp0-spark 3.3s ease-in-out infinite; }
@keyframes s-rvp0-spark {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.6); }
}
.s-rvp0-pip .pip-body { animation: s-rvp0-bob 3s ease-in-out infinite; }
@keyframes s-rvp0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={372}
      top={4}
      css={css}
      className="s-rvp0"
      label="Papers fly from a tall pile into a big funnel, and a single sheet labelled review comes out at the bottom, while a paper character in glasses points at it"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <Hand x={130} y={266} size={26} anchor="middle" weight={700}>
        140 papers
      </Hand>
      <Pile x={130} y={FLOOR} w={130} count={16} seed={2} />

      {[0, 1, 2].map((i) => (
        <Place key={i} x={118} y={262}>
          <Anim className="s-rvp0-fly" style={{ animationDelay: `${i * -2.2}s` }}>
            <Sheet x={-13} y={-17} w={26} h={34} lines={2} fold={7} seed={10 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Funnel x={330} y={96} w={190} h={130} tone="green" seed={3} />
      <Sheet x={236} y={40} w={30} h={38} lines={2} fold={7} seed={4} sw={1.3} />
      <Sheet x={392} y={46} w={30} h={38} lines={2} fold={7} seed={5} sw={1.3} />

      <Place x={0} y={0}>
        <Anim className="s-rvp0-out" origin={[330, 300]}>
          <Sheet x={296} y={238} w={68} h={88} lines={5} fold={14} title seed={6} />
        </Anim>
      </Place>
      <Hand x={330} y={352} size={22} anchor="middle" weight={700}>
        review
      </Hand>
      <Anim className="s-rvp0-spark" spin>
        <Sparkle x={384} y={244} s={10} />
      </Anim>
      <Anim className="s-rvp0-spark" spin style={{ animationDelay: '-1.6s' }}>
        <Sparkle x={278} y={262} s={7} />
      </Anim>

      <Hand x={470} y={120} size={20} anchor="start" c={INK_SOFT}>
        compare, group, judge
      </Hand>

      <Shadow x={590} y={FLOOR + 3} rx={44} ry={5} />
      <Place x={590} y={FLOOR} s={2.1} flip>
        <g className="s-rvp0-pip">
          <Pip mood="happy" arms="point" tone="blue" glasses look={1.4} seed={7} />
        </g>
      </Place>

      <Plant x={736} y={FLOOR} s={0.95} seed={8} />
    </Scene>
  )
}
