import { Anim, Arrow, Box, Floor, Hand, PAPER, Pencil, Pip, Place, PushPin, Scene, Shadow, TONES } from '../../ink/index.js'
import { Link, Node, Sources } from './scenes.jsx'

/**
 * The framework board. Esther's eight boxes are pinned up: four causes on
 * the left, intention in the middle, continued use on the right, age pressing
 * on the last arrow and shop type held below as a control. The arrows draw
 * themselves on one after another while a pencil hovers by them, and the
 * theory book and the pile of papers they came from sit on the floor.
 */

const FLOOR = 382

const css = `
.s-cfw0-draw { animation: s-cfw0-draw 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.8s); }
.s-cfw0-pencil { animation: s-cfw0-pencil 9s ease-in-out infinite; }
.s-cfw0-pip .pip-body { animation: s-cfw0-bob 3s ease-in-out infinite; }
@keyframes s-cfw0-draw {
  0%, 100% { stroke-dashoffset: 0; }
  8% { stroke-dashoffset: 1; }
  24%, 92% { stroke-dashoffset: 0; }
}
@keyframes s-cfw0-pencil {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-8px, 6px) rotate(-4deg); }
  50% { transform: translate(6px, -4px) rotate(3deg); }
  75% { transform: translate(-4px, 3px) rotate(-2deg); }
}
@keyframes s-cfw0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const CAUSES = [
  { label: 'useful', tone: 'green' },
  { label: 'easy', tone: 'green' },
  { label: 'trust', tone: 'amber' },
  { label: 'signal', tone: 'pink' },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={380}
      top={12}
      css={css}
      className="s-cfw0"
      label="A board pinned with a framework diagram: four boxes, useful, easy, trust and signal, have arrows to a box called intention, which points to a box called still using. A box for age presses on the last arrow and shop type sits below. A pencil draws the arrows, a book marked theory and a pile of papers sit on the floor, and a paper character in glasses points at the board"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      <Box x={230} y={24} w={540} h={300} r={10} fill={PAPER} stroke={TONES.brown.deep} seed={12} sw={2.4} />
      <PushPin x={250} y={38} tone="red" seed={13} />
      <PushPin x={750} y={38} tone="blue" seed={14} />
      <Hand x={266} y={64} size={22} weight={700}>
        my framework
      </Hand>

      {CAUSES.map((cause, i) => {
        const y = 84 + i * 56
        return (
          <g key={cause.label}>
            <Node x={256} y={y} w={104} h={34} label={cause.label} tone={cause.tone} size={17} seed={20 + i} />
            <Link from={[364, y + 17]} to={[458, 184]} bend={i < 2 ? 0.05 : -0.05} seed={30 + i} className="s-cfw0-draw" style={{ '--i': i }} />
          </g>
        )
      })}

      <Node x={462} y={166} w={120} h={38} label="intention" tone="amber" size={18} seed={40} />
      <Link from={[586, 185]} to={[636, 185]} seed={41} w={2.2} className="s-cfw0-draw" style={{ '--i': 4 }} />
      <Node x={640} y={166} w={116} h={38} label="still using" tone="blue" size={17} seed={42} />

      <Node x={570} y={70} w={70} h={32} label="age" tone="pink" size={16} seed={43} />
      <Link from={[605, 106]} to={[611, 176]} seed={44} c={TONES.pink.deep} />

      <Node x={640} y={262} w={116} h={34} label="shop type" tone="grey" size={16} seed={45} />
      <Link from={[698, 258]} to={[698, 210]} seed={46} c={TONES.grey.deep} dashed />

      <Place x={0} y={0}>
        <Anim className="s-cfw0-pencil" origin={[402, 238]}>
          <Pencil x={402} y={238} length={96} angle={68} tone="amber" seed={47} />
        </Anim>
      </Place>

      <Sources floor={FLOOR} />
      <Arrow from={[150, 300]} to={[226, 250]} bend={-0.2} seed={48} c={TONES.green.deep} dash="4 6" />

      <Shadow x={510} y={FLOOR + 3} rx={34} ry={5} />
      <Place x={510} y={FLOOR} s={1.75}>
        <g className="s-cfw0-pip">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.5} seed={50} />
        </g>
      </Place>
    </Scene>
  )
}
