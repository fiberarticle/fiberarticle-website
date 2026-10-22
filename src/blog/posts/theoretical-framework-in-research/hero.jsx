import { Arrow, Box, Cross, Floor, Hand, Ink, PAPER, Pip, Place, PushPin, Scene, Shadow, TONES, handEllipse, handLine } from '../../ink/index.js'
import { Card, HousePlan } from './scenes.jsx'

/**
 * Six theories on a board, five crossed out and one circled. An arrow takes
 * the circled one across to a blueprint, where the house of the study draws
 * itself line by line, and a paper character points at it.
 */

const FLOOR = 382

const css = `
.s-thf0-plan { animation: s-thf0-plan 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
.s-thf0-ring { animation: s-thf0-ring 8s ease-in-out infinite; }
.s-thf0-pip .pip-body { animation: s-thf0-bob 3s ease-in-out infinite; }
@keyframes s-thf0-plan {
  0%, 100% { stroke-dashoffset: 0; }
  10% { stroke-dashoffset: 1; }
  30%, 92% { stroke-dashoffset: 0; }
}
@keyframes s-thf0-ring {
  0%, 100% { stroke-dashoffset: 0; }
  4% { stroke-dashoffset: 1; }
  14%, 94% { stroke-dashoffset: 0; }
}
@keyframes s-thf0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const THEORIES = ['TAM', 'TPB', 'SDT', 'Piaget', 'Bandura', 'Rogers']

export default function Hero() {
  return (
    <Scene
      w={800}
      h={380}
      top={12}
      css={css}
      className="s-thf0"
      label="A board pinned with six theory cards, TAM, TPB, SDT, Piaget, Bandura and Rogers. Five are crossed out in red and SDT is circled in green. An arrow carries it to a blue blueprint labelled my theory, where a house is drawn in white lines, and a paper character points at the blueprint"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      <Ink d={handLine(80, 300, 64, FLOOR, 12, 0.4) + handLine(300, 300, 316, FLOOR, 13, 0.4)} w={2.2} c={TONES.brown.deep} />
      <Box x={40} y={40} w={300} h={262} r={8} fill={PAPER} stroke={TONES.brown.deep} seed={14} sw={2.4} />
      <PushPin x={58} y={54} tone="red" seed={15} />
      <PushPin x={320} y={54} tone="blue" seed={16} />
      <Hand x={190} y={76} size={21} anchor="middle" weight={700}>
        theories I read
      </Hand>

      {THEORIES.map((name, i) => {
        const x = 62 + (i % 2) * 140
        const y = 96 + Math.floor(i / 2) * 66
        const chosen = name === 'SDT'
        return (
          <g key={name}>
            <Card x={x} y={y} w={116} h={42} label={name} tone={chosen ? 'green' : null} size={19} seed={20 + i} />
            {chosen ? null : <Cross x={x + 58} y={y + 21} s={1.5} seed={30 + i} />}
          </g>
        )
      })}
      <Ink
        d={handEllipse(120, 183, 76, 36, { seed: 40, amp: 0.8 })}
        c={TONES.green.ink}
        w={2.6}
        scale
        pathLength={1}
        dash="1"
        className="s-thf0-ring"
      />

      <Arrow from={[186, 216]} to={[432, 224]} bend={0} seed={41} c={TONES.green.deep} w={2} />

      <Hand x={560} y={50} size={24} anchor="middle" weight={700}>
        my theory
      </Hand>
      <Box x={440} y={64} w={240} h={200} r={4} fill={TONES.blue.ink} stroke={TONES.blue.deep} seed={42} sw={2.2} />
      <rect x={440} y={64} width={240} height={200} fill="url(#hatch-blue)" opacity="0.35" />
      <HousePlan x={500} y={240} w={120} h={74} seed={43} className="s-thf0-plan" />

      <Shadow x={734} y={FLOOR + 3} rx={30} ry={5} />
      <Place x={734} y={FLOOR} s={1.7} flip>
        <g className="s-thf0-pip">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.5} seed={50} />
        </g>
      </Place>
    </Scene>
  )
}
