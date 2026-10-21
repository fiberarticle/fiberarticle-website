import {
  Anim,
  Box,
  Chai,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  Sheet,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handEllipse,
  handLine,
} from '../../ink/index.js'

/**
 * One line that promises everything. Ritika holds up her proposal, where
 * "all ethical considerations will be followed" sits circled in red, while
 * her guide points at the board that spells out what the line has to mean:
 * consent, privacy, no harm, approval and honest data, ticked one by one.
 */

const FLOOR = 372

const ITEMS = ['consent', 'privacy', 'no harm', 'approval', 'honest data']

const css = `
.s-eth0-ring { animation: s-eth0-pulse 3.2s ease-in-out infinite; }
.s-eth0-ask { animation: s-eth0-ask 6s ease-in-out infinite; }
.s-eth0-tick { animation: s-eth0-tick 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 7s); }
.s-eth0-ritika .pip-body { animation: s-eth0-bob 3s ease-in-out infinite; }
.s-eth0-guide .pip-arm-r { animation: s-eth0-point 2.4s ease-in-out infinite alternate; }
@keyframes s-eth0-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
@keyframes s-eth0-ask {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(6deg); }
}
@keyframes s-eth0-tick {
  0%, 100% { opacity: 1; }
  10% { opacity: 0; }
  22% { opacity: 1; }
}
@keyframes s-eth0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-eth0-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-9deg); }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-eth0"
      label="A paper character holds up a proposal whose only ethics line, all ethical considerations will be followed, is circled in red with a question mark, while a guide in glasses points at a board listing consent, privacy, no harm, approval and honest data, each ticked"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      <Sheet x={150} y={40} w={250} h={290} lines={0} fold={26} seed={14} sw={2} />
      <Type x={172} y={84} size={20} weight={700}>
        PROPOSAL
      </Type>
      <Ink d={handLine(172, 110, 360, 110, 15, 0.4) + handLine(172, 128, 330, 128, 16, 0.4) + handLine(172, 146, 350, 146, 17, 0.4)} c={TEXT_LINE} w={1.6} />
      <Hand x={172} y={186} size={20} weight={700} c={INK_SOFT}>
        ethics:
      </Hand>
      <Hand x={275} y={226} size={20} anchor="middle" weight={700}>
        all ethical considerations
      </Hand>
      <Hand x={275} y={252} size={20} anchor="middle" weight={700}>
        will be followed.
      </Hand>
      <Place x={275} y={236}>
        <Anim className="s-eth0-ring" origin={[0, 0]}>
          <Ink d={handEllipse(0, 0, 130, 36, { seed: 18, amp: 1.2, overlap: 0.18 })} c={TONES.red.ink} w={2.6} />
        </Anim>
      </Place>
      <Ink d={handLine(172, 296, 340, 296, 19, 0.4)} c={TEXT_LINE} w={1.6} />

      <Place x={426} y={150}>
        <Anim className="s-eth0-ask" origin={[0, 0]}>
          <Hand x={0} y={0} size={58} anchor="middle" weight={700} c={TONES.red.deep}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Box x={452} y={44} w={196} h={258} r={8} fill="#fdfaf3" seed={30} sw={2} double />
      <Hand x={550} y={84} size={22} anchor="middle" weight={700} c={TONES.pink.deep}>
        what it means
      </Hand>
      {ITEMS.map((item, i) => (
        <g key={item}>
          <Box x={472} y={108 + i * 38} w={20} h={20} seed={32 + i * 3} sw={1.5} fill="#ffffff" />
          <g className="s-eth0-tick" style={{ '--i': i }}>
            <Tick x={482} y={116 + i * 38} s={0.9} />
          </g>
          <Hand x={504} y={125 + i * 38} size={21} weight={700}>
            {item}
          </Hand>
        </g>
      ))}

      <Chai x={430} y={FLOOR} s={0.9} seed={40} />
      <Plant x={770} y={FLOOR} s={0.7} seed={42} />

      <Shadow x={708} y={FLOOR + 3} rx={34} ry={5} />
      <Place x={708} y={FLOOR} s={1.6} flip>
        <g className="s-eth0-guide">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.4} seed={50} />
        </g>
      </Place>

      <Shadow x={84} y={FLOOR + 3} rx={38} ry={5} />
      <Place x={84} y={FLOOR} s={1.75}>
        <g className="s-eth0-ritika">
          <Pip mood="worried" arms="point" tone="pink" look={1.6} seed={56} />
        </g>
      </Place>
    </Scene>
  )
}
