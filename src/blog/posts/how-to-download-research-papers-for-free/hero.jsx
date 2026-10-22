import {
  Anim,
  Arrow,
  Box,
  Door,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TONES,
  ellipsePath,
  handEllipse,
} from '../../ink/index.js'

/**
 * The front door is locked, but the other doors are open. A tall red door
 * marked paywall carries a padlock that rattles now and then. Beside it
 * stand three open doors, library, open access and the author, warm light
 * spilling out. A paper floats out of the open doors towards the hands
 * of Nazia, who has turned away from the lock and is smiling.
 */

const FLOOR = 370

const css = `
.s-dlp0-lock { animation: s-dlp0-rattle 5s ease-in-out infinite; }
.s-dlp0-paper { animation: s-dlp0-float 6s ease-in-out infinite; }
.s-dlp0-shine { animation: s-dlp0-twinkle 3s ease-in-out infinite; }
.s-dlp0-nazia .pip-body { animation: s-dlp0-bob 3s ease-in-out infinite; }
@keyframes s-dlp0-rattle {
  0%, 70%, 100% { transform: rotate(0deg); }
  74% { transform: rotate(-9deg); }
  78% { transform: rotate(8deg); }
  82% { transform: rotate(-5deg); }
  86% { transform: rotate(0deg); }
}
@keyframes s-dlp0-float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-8px, -10px) rotate(-4deg); }
}
@keyframes s-dlp0-twinkle {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.6); opacity: 0.5; }
}
@keyframes s-dlp0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
`

/* A padlock. Anchor: centre of the body. */
function Padlock({ x, y, s = 1, seed }) {
  return (
    <g>
      <Ink d={`M${x - 11 * s} ${y - 10 * s}V${y - 20 * s}A${11 * s} ${11 * s} 0 0 1 ${x + 11 * s} ${y - 20 * s}V${y - 10 * s}`} w={3} />
      <Box x={x - 18 * s} y={y - 12 * s} w={36 * s} h={28 * s} r={4} fill="url(#fill-amber)" seed={seed} sw={2} />
      <path d={ellipsePath(x, y, 3.4 * s, 3.4 * s)} fill="#2b2521" />
      <path d={`M${x - 1.6 * s} ${y}h${3.2 * s}v${8 * s}h${-3.2 * s}Z`} fill="#2b2521" />
    </g>
  )
}

const OPEN = [
  { x: 250, label: 'library', tone: 'green', seed: 20 },
  { x: 370, label: 'open access', tone: 'blue', seed: 30 },
  { x: 490, label: 'the author', tone: 'pink', seed: 40 },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-dlp0"
      label="A tall red door marked paywall is shut with a padlock; beside it three open doors marked library, open access and the author let out warm light, and a research paper floats out from the open doors towards a smiling paper character who has turned away from the lock"
    >
      <Door x={70} y={FLOOR} w={118} h={236} open={0} tone="red" seed={11} />
      <Box x={84} y={FLOOR - 220} w={90} h={32} r={5} fill={PAPER} seed={12} sw={1.8} />
      <Hand x={129} y={FLOOR - 197} size={20} anchor="middle" weight={700}>
        paywall
      </Hand>
      <Place x={129} y={FLOOR - 112}>
        <Anim className="s-dlp0-lock" origin={[0, -20]}>
          <Padlock x={0} y={0} s={1.2} seed={13} />
        </Anim>
      </Place>

      {OPEN.map((d) => (
        <g key={d.label}>
          <Door x={d.x} y={FLOOR} w={96} h={190} open={0.85} tone={d.tone} seed={d.seed} />
          <Hand x={d.x + 48} y={FLOOR - 202} size={20} anchor="middle" weight={700} c={TONES[d.tone].deep}>
            {d.label}
          </Hand>
          <path d={`M${d.x + 6} ${FLOOR}L${d.x + 90} ${FLOOR}L${d.x + 122} ${FLOOR + 22}L${d.x - 18} ${FLOOR + 22}Z`} fill={TONES.amber.tint} opacity="0.7" />
        </g>
      ))}

      <Place x={0} y={0}>
        <Anim className="s-dlp0-shine" origin={[452, 126]}>
          <Sparkle x={452} y={126} s={9} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-dlp0-shine" origin={[584, 134]}>
          <Sparkle x={584} y={134} s={7} />
        </Anim>
      </Place>

      <Arrow from={[548, 236]} to={[618, 206]} bend={-0.25} seed={51} c={INK_SOFT} w={1.5} dash="5 6" />
      <Place x={0} y={0}>
        <Anim className="s-dlp0-paper" origin={[652, 200]}>
          <Sheet x={626} y={164} w={50} h={64} tone="paper" lines={3} fold={11} seed={52} title />
        </Anim>
      </Place>

      <Floor y={FLOOR} x1={20} x2={780} seed={53} />

      <Shadow x={722} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={722} y={FLOOR} s={1.6}>
        <g className="s-dlp0-nazia">
          <Pip mood="grin" arms="up" tone="green" look={-1.4} seed={60} />
        </g>
      </Place>

      <Ink d={handEllipse(129, FLOOR - 112, 34, 34, { seed: 70, amp: 0.8 })} c={TONES.red.ink} w={1.4} o={0.5} />
    </Scene>
  )
}
