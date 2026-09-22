import {
  Anim,
  Cloud,
  Ground,
  Hand,
  INK,
  Ink,
  Mountain,
  Pip,
  Place,
  Scene,
  Shadow,
  Sun,
  TONES,
  Tree,
  Worm,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/**
 * The crossroads: a signpost with four arms, one for each big family of
 * review. Pip stands at the foot of it, thinking, while the bookworm sits on
 * the top arm reading the words. The arms creak in the breeze one after
 * another, and the question mark over Pip bobs.
 */

const css = `
.s-tl0-board { animation: s-tl0-creak 6s ease-in-out infinite; }
.s-tl0-pip .pip-body { animation: s-tl0-sway 7s ease-in-out infinite; }
.s-tl0-pip .pip-arm-r { animation: s-tl0-scratch 7s ease-in-out infinite; }
.s-tl0-ask { animation: s-tl0-bob 3.5s ease-in-out infinite; }
.s-tl0-cloud { animation: s-tl0-drift 16s ease-in-out infinite; }
@keyframes s-tl0-creak {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(2.4deg); }
  60% { transform: rotate(-1.8deg); }
}
@keyframes s-tl0-sway {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-3deg); }
  65% { transform: rotate(2.5deg); }
}
@keyframes s-tl0-scratch {
  0%, 40%, 70%, 100% { transform: rotate(0deg); }
  48%, 62% { transform: rotate(-10deg); }
  55% { transform: rotate(4deg); }
}
@keyframes s-tl0-bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(8deg); }
}
@keyframes s-tl0-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-30px); }
}
`

const POLE = 400

/* One arm of the signpost, pointing left or right, nailed to the pole. */
function Board({ y, dir, label, tone, seed, delay }) {
  const pts =
    dir === 'left'
      ? [[226, y], [240, y - 18], [408, y - 18], [408, y + 18], [240, y + 18]]
      : [[392, y - 18], [560, y - 18], [574, y], [560, y + 18], [392, y + 18]]
  const cx = dir === 'left' ? 318 : 482
  return (
    <Anim className="s-tl0-board" origin={[POLE, y]} style={{ animationDelay: `${delay}s` }}>
      <path d={polyPath(pts)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(pts, { seed, amp: 0.5, closed: true })} w={1.8} />
      <circle cx={POLE} cy={y} r={2.6} fill={INK} />
      <Hand x={cx} y={y + 7} size={21} anchor="middle" weight={700}>
        {label}
      </Hand>
    </Anim>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-tl0"
      label="A paper character stands thinking at a signpost with four arms, marked narrative, systematic, scoping and meta-analysis, while a bookworm in glasses sits on the top arm reading it"
    >
      <Sun x={92} y={66} r={20} seed={3} />
      <Place x={640} y={62}>
        <Anim className="s-tl0-cloud">
          <Cloud x={0} y={0} s={0.8} seed={5} />
        </Anim>
      </Place>

      <Mountain x={-40} y={338} w={250} h={92} seed={7} snow={false} />
      <Mountain x={470} y={338} w={230} h={118} seed={8} snow={false} />
      <Mountain x={596} y={338} w={220} h={158} seed={9} />

      <Ground y={336} bottom={400} seed={11} tufts={10} pebbles={5} grit={30} />

      <Tree x={722} y={336} s={0.85} seed={13} />

      <rect x={POLE - 7} y={94} width={14} height={244} fill="url(#wood)" />
      <Ink d={handPoly([[POLE - 7, 94], [POLE + 7, 94], [POLE + 7, 338], [POLE - 7, 338]], { seed: 15, amp: 0.5, closed: true })} w={1.8} />
      <path d={polyPath([[POLE - 14, 96], [POLE, 80], [POLE + 14, 96]])} fill={TONES.brown.mid} />
      <Ink d={handPoly([[POLE - 14, 96], [POLE, 80], [POLE + 14, 96]], { seed: 16, amp: 0.3, closed: true })} w={1.6} />

      <Board y={128} dir="left" label="narrative" tone="amber" seed={21} delay={0} />
      <Board y={174} dir="right" label="systematic" tone="green" seed={23} delay={-1.5} />
      <Board y={220} dir="left" label="scoping" tone="blue" seed={25} delay={-3} />
      <Board y={266} dir="right" label="meta-analysis" tone="pink" seed={27} delay={-4.5} />

      <Place x={300} y={110} s={0.95}>
        <Worm seed={31} />
      </Place>

      <Shadow x={168} y={338} rx={46} ry={6} />
      <Place x={168} y={336} s={2}>
        <g className="s-tl0-pip">
          <Pip mood="focused" arms="think" look={1.8} seed={33} />
        </g>
      </Place>
      <Place x={198} y={178}>
        <Anim className="s-tl0-ask" spin>
          <Hand x={0} y={0} size={38} weight={700} c={TONES.red.ink}>
            ?
          </Hand>
        </Anim>
      </Place>
    </Scene>
  )
}
