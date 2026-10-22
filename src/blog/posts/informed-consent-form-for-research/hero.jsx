import {
  Anim,
  Box,
  Floor,
  Hand,
  Ink,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'
import { Auto } from './scenes.jsx'

/**
 * Two forms for the same study. Sravani holds up the copied one, a long
 * page of small print that opens with "I hereby", and the driver beside his
 * auto scratches his head at it. On the right is the form he can follow:
 * what we will do, how long, any risk, and that he can stop any time.
 */

const FLOOR = 372

const ITEMS = ['what we will do', 'how long: 30 min', 'any risk', 'you can stop any time']

const css = `
.s-icf0-small { animation: s-icf0-sway 5s ease-in-out infinite; }
.s-icf0-ask { animation: s-icf0-ask 6s ease-in-out infinite; }
.s-icf0-tick { animation: s-icf0-tick 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 7s); }
.s-icf0-sravani .pip-body { animation: s-icf0-bob 3s ease-in-out infinite; }
.s-icf0-driver .pip-arm-r { animation: s-icf0-scratch 1.2s ease-in-out infinite alternate; }
@keyframes s-icf0-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-1.5deg); }
}
@keyframes s-icf0-ask {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(6deg); }
}
@keyframes s-icf0-tick {
  0%, 100% { opacity: 1; }
  10% { opacity: 0; }
  22% { opacity: 1; }
}
@keyframes s-icf0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-icf0-scratch {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
`

export default function Hero() {
  const small = []
  for (let i = 0; i < 17; i++) {
    const y = 96 + i * 13
    small.push(handLine(128, y, 128 + 136 - ((i * 37) % 5) * 12, y, 20 + i, 0.25))
  }

  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-icf0"
      label="A paper character holds up a long consent form full of small print that begins I hereby, while an auto-rickshaw driver scratches his head with a question mark, and beside them a short form in big friendly writing says what we will do, how long 30 minutes, any risk, and you can stop any time, each ticked"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      <Sheet x={112} y={30} w={176} h={330} lines={0} fold={24} seed={14} sw={2} />
      <Type x={128} y={76} size={17} weight={700}>
        I hereby...
      </Type>
      <Ink d={small.join('')} c={TEXT_LINE} w={1.2} />
      <Ink d={handLine(128, 336, 218, 336, 40, 0.4)} w={1.5} />

      <Place x={352} y={200}>
        <Anim className="s-icf0-ask" origin={[0, 0]}>
          <Hand x={0} y={0} size={58} anchor="middle" weight={700} c={TONES.red.deep}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Auto x={716} y={FLOOR} s={0.95} seed={60} />

      <Place x={0} y={0}>
        <Anim className="s-icf0-small" origin={[535, 280]}>
          <Box x={404} y={46} w={262} h={214} r={8} fill="#fdfaf3" seed={30} sw={2} double />
          <Hand x={535} y={86} size={21} anchor="middle" weight={700} c={TONES.pink.deep}>
            the form he can follow
          </Hand>
          {ITEMS.map((item, i) => (
            <g key={item}>
              <Box x={422} y={108 + i * 38} w={20} h={20} seed={32 + i * 3} sw={1.5} fill="#ffffff" />
              <g className="s-icf0-tick" style={{ '--i': i }}>
                <Tick x={432} y={116 + i * 38} s={0.9} />
              </g>
              <Hand x={454} y={125 + i * 38} size={20} weight={700}>
                {item}
              </Hand>
            </g>
          ))}
        </Anim>
      </Place>

      <Shadow x={350} y={FLOOR + 3} rx={34} ry={5} />
      <Place x={350} y={FLOOR} s={1.6} flip>
        <g className="s-icf0-driver">
          <Pip mood="worried" arms="think" tone="amber" look={1.4} seed={50} />
        </g>
      </Place>

      <Shadow x={60} y={FLOOR + 3} rx={38} ry={5} />
      <Place x={60} y={FLOOR} s={1.7}>
        <g className="s-icf0-sravani">
          <Pip mood="happy" arms="point" tone="pink" look={1.6} seed={56} />
        </g>
      </Place>

    </Scene>
  )
}
