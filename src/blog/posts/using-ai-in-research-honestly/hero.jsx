import {
  Anim,
  Bot,
  Desk,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  TONES,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/**
 * A robot hands Pip a stream of neat reference slips along an arc. A
 * magnifying glass drifts over them one by one; the third slip is only a
 * dashed outline, and a red question mark pops up over it before the glass
 * moves on.
 */

const css = `
.s-ai0-glass { animation: s-ai0-glass 12s ease-in-out infinite; }
.s-ai0-ask { animation: s-ai0-ask 12s ease-in-out infinite; }
.s-ai0-ghost { animation: s-ai0-ghost 2.6s ease-in-out infinite; }
.s-ai0-slip { animation: s-ai0-bob 3.4s ease-in-out infinite; }
.s-ai0-slip-2 { animation-delay: -0.9s; }
.s-ai0-slip-3 { animation-delay: -1.8s; }
.s-ai0-slip-4 { animation-delay: -2.6s; }
.s-ai0-reader .pip-body { animation: s-ai0-start 12s ease-in-out infinite; }

@keyframes s-ai0-glass {
  0%, 4% { transform: translate(-130px, 39px); }
  16% { transform: translate(-65px, 3px); }
  30%, 56% { transform: translate(0, 0); }
  70% { transform: translate(65px, 30px); }
  86% { transform: translate(65px, 30px); }
  100% { transform: translate(-130px, 39px); }
}
@keyframes s-ai0-ask {
  0%, 32% { opacity: 0; transform: translateY(8px) scale(0.5); }
  37% { opacity: 1; transform: translateY(-3px) scale(1.15); }
  41%, 54% { opacity: 1; transform: translateY(0) scale(1); }
  58%, 100% { opacity: 0; transform: translateY(8px) scale(0.5); }
}
@keyframes s-ai0-ghost {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
@keyframes s-ai0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
@keyframes s-ai0-start {
  0%, 34%, 100% { transform: translateY(0); }
  38% { transform: translateY(-7px); }
  42% { transform: translateY(0); }
}
`

/* The four slips sit along the arc from the robot's hand to Pip. */
const SLIPS = [
  { x: 301, y: 186, rot: -8, ghost: false },
  { x: 366, y: 149, rot: -3, ghost: false },
  { x: 431, y: 146, rot: 3, ghost: true },
  { x: 496, y: 177, rot: 8, ghost: false },
]

function Slip({ ghost, seed }) {
  const box = [[-29, -18], [29, -18], [29, 18], [-29, 18]]
  if (ghost) {
    return (
      <g className="s-ai0-ghost">
        <Ink d={handPoly(box, { seed, amp: 0.5, closed: true })} dash="4 5" w={1.6} c={INK_SOFT} />
        <Ink d={handLine(-19, -6, 17, -6, seed + 1, 0.3) + handLine(-19, 6, 8, 6, seed + 2, 0.3)} dash="3 5" w={1.4} c={INK_SOFT} />
      </g>
    )
  }
  return (
    <g>
      <path d={polyPath(box)} fill={PAPER} />
      <Ink d={handPoly(box, { seed, amp: 0.5, closed: true })} w={1.6} />
      <Ink d={handLine(-19, -6, 17, -6, seed + 1, 0.3)} w={1.8} />
      <Ink d={handLine(-19, 6, 8, 6, seed + 2, 0.3)} w={1.4} c={INK_SOFT} />
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={272}
      top={60}
      css={css}
      className="s-ai0"
      label="A friendly robot hands a paper character a stream of reference slips. A magnifying glass passes over them and stops on one that is only a dashed outline, where a red question mark appears."
    >
      <Desk y={300} depth={26} seed={3} />

      <Shadow x={170} y={302} rx={50} ry={5} />
      <Place x={170} y={300}>
        <Bot x={0} y={0} s={1.5} tone="blue" seed={11} />
      </Place>

      {SLIPS.map((slip, i) => (
        <Place key={slip.x} x={slip.x} y={slip.y}>
          <Anim className={`s-ai0-slip${i ? ` s-ai0-slip-${i + 1}` : ''}`}>
            <g transform={`rotate(${slip.rot})`}>
              <Slip ghost={slip.ghost} seed={20 + i * 5} />
            </g>
          </Anim>
        </Place>
      ))}

      <Place x={431} y={146}>
        <Anim className="s-ai0-glass">
          <Magnifier x={0} y={0} r={31} angle={118} tone="amber" seed={41} />
          <Anim className="s-ai0-ask" origin={[0, -52]}>
            <Hand x={0} y={-44} size={40} anchor="middle" weight={700} c={TONES.red.ink}>
              ?
            </Hand>
          </Anim>
        </Anim>
      </Place>

      <Shadow x={640} y={302} rx={50} ry={6} />
      <Place x={640} y={300} s={2}>
        <g className="s-ai0-reader">
          <Pip mood="surprised" arms="hold" look={-1.8} seed={51}>
            <Sheet x={-14} y={-30} w={28} h={30} lines={3} fold={6} seed={52} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
