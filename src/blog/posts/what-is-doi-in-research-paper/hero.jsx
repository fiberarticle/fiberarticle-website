import {
  Anim,
  Arrow,
  Box,
  Cross,
  Door,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * The address changes, the name does not. Ruchi points at her paper, which
 * carries a DOI on a luggage tag. The old web link, a grey door, is crossed
 * out; a dotted line runs from the tag through doi.org to the green door
 * where the paper lives now.
 */

const FLOOR = 372

const css = `
.s-doi0-ruchi .pip-body { animation: s-doi0-bob 3s ease-in-out infinite; }
.s-doi0-tag { animation: s-doi0-swing 5s ease-in-out infinite; }
.s-doi0-link { animation: s-doi0-flow 2.4s linear infinite; }
.s-doi0-hub { animation: s-doi0-pulse 4s ease-in-out infinite; }
.s-doi0-glint { animation: s-doi0-glint 6s ease-in-out infinite; }
@keyframes s-doi0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-doi0-swing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
@keyframes s-doi0-flow {
  from { stroke-dashoffset: 24; }
  to { stroke-dashoffset: 0; }
}
@keyframes s-doi0-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
@keyframes s-doi0-glint {
  0%, 30%, 70%, 100% { opacity: 0; transform: scale(0.6); }
  45%, 55% { opacity: 1; transform: scale(1); }
}
`

/* The luggage tag with the DOI on it, drawn from its own top-left corner. */
function Tag() {
  return (
    <g>
      <Box x={0} y={0} w={150} h={42} r={7} fill={TONES.amber.tint} seed={21} sw={2} />
      <Oval cx={14} cy={21} rx={5} fill={PAPER} seed={22} sw={1.4} />
      <Type x={84} y={27} size={16} anchor="middle" weight={700}>
        10.1000/182
      </Type>
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-doi0"
      label="A paper character points at her paper, which carries a luggage tag reading 10.1000/182; a grey door marked old link is crossed out, while a dotted line runs from the tag through a box marked doi.org to an open green door where the paper now lives"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={10} />

      {/* Ruchi's paper, leaning on the floor. */}
      <Place x={246} y={FLOOR} r={-4}>
        <Sheet x={-56} y={-150} w={112} h={150} lines={8} title seed={11} />
      </Place>

      {/* The tag, tied to the paper with a thread. */}
      <Ink d={handLine(300, 262, 330, 296, 12, 0.6)} w={1.4} c={TONES.brown.deep} />
      <Place x={322} y={276}>
        <Anim className="s-doi0-tag" origin={[14, 21]}>
          <Tag />
        </Anim>
      </Place>

      {/* doi.org, the forwarding desk in the middle. */}
      <g className="s-doi0-link">
        <Arrow from={[400, 274]} to={[440, 214]} bend={0.1} seed={13} c={TONES.blue.deep} w={1.8} dash="6 6" />
        <Arrow from={[530, 168]} to={[692, 248]} bend={-0.18} seed={14} c={TONES.blue.deep} w={1.8} dash="6 6" />
      </g>
      <Place x={0} y={0}>
        <Anim className="s-doi0-hub" origin={[455, 173]}>
          <Box x={380} y={140} w={150} h={66} r={8} fill={TONES.blue.mid} seed={15} sw={2.2} />
          <Hand x={455} y={183} size={28} anchor="middle" weight={700}>
            doi.org
          </Hand>
        </Anim>
      </Place>

      {/* The old address, crossed out. */}
      <Door x={556} y={FLOOR} w={72} h={124} tone="grey" seed={16} />
      <Cross x={592} y={300} s={1.6} seed={17} />
      <Hand x={592} y={238} size={19} anchor="middle" c={INK_SOFT}>
        old link
      </Hand>

      {/* The new address, where the paper is now. */}
      <Door x={672} y={FLOOR} w={76} h={128} open={0.55} tone="green" seed={18} />
      <Sheet x={704} y={286} w={36} h={48} lines={3} seed={19} />

      <Shadow x={110} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={110} y={FLOOR} s={1.8}>
        <g className="s-doi0-ruchi">
          <Pip mood="grin" arms="point" tone="amber" look={1.4} seed={20} />
        </g>
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-doi0-glint" origin={[760, 236]} style={{ opacity: 0 }}>
          <Sparkle x={760} y={236} s={12} />
        </Anim>
      </Place>
    </Scene>
  )
}
