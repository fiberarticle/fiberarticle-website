import {
  Anim,
  Box,
  Chart,
  Flag,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  Pip,
  Place,
  Scene,
  Shadow,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * The fence around the findings. Hemlata looks through a magnifier at a
 * fenced field holding her results; three signs hang on the front fence,
 * one for each limitation she found, and a dotted path leaves through the
 * gate towards a flag for the next study. The signs swing a little and the
 * lens drifts from one sign to the next.
 */

const FLOOR = 376

const css = `
.s-wlim0-hemlata .pip-body { animation: s-wlim0-bob 3.2s ease-in-out infinite; }
.s-wlim0-lens { animation: s-wlim0-scan 8s ease-in-out infinite; }
.s-wlim0-sign { animation: s-wlim0-swing 4s ease-in-out infinite; animation-delay: calc(var(--i) * -1.3s); }
.s-wlim0-path { animation: s-wlim0-walk 2.4s linear infinite; }
@keyframes s-wlim0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-wlim0-scan {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-7deg); }
}
@keyframes s-wlim0-swing {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}
@keyframes s-wlim0-walk {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -24; }
}
`

const SIGNS = [
  { word: 'self-report', tone: 'amber' },
  { word: 'no lab test', tone: 'pink' },
  { word: 'near the city', tone: 'blue' },
]

/* One run of picket fence from x1 to x2, posts standing on y. */
function Fence({ x1, x2, y, h, seed, o }) {
  let posts = ''
  const count = Math.round((x2 - x1) / 28)
  for (let i = 0; i <= count; i++) {
    const px = x1 + ((x2 - x1) * i) / count
    posts += handLine(px, y, px, y - h, seed + i, 0.4)
  }
  const rails = handLine(x1 - 4, y - h * 0.35, x2 + 4, y - h * 0.35, seed + 60, 0.6) + handLine(x1 - 4, y - h * 0.8, x2 + 4, y - h * 0.8, seed + 61, 0.6)
  return <Ink d={posts + rails} c={TONES.brown.deep} w={2} o={o} />
}

export default function Hero() {
  const field = 'M330 170L630 170L676 334L284 334Z'
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-wlim0"
      label="A paper character looks through a magnifier at a fenced field of findings with a bar chart in it; three signs on the fence read self-report, no lab test and near the city, and a dotted path leads out of the gate to a flag marked next study"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      {/* the field of findings, fenced in */}
      <path d={field} fill={TONES.green.tint} />
      <path d={field} fill="url(#hatch-green)" opacity="0.25" />
      <Fence x1={330} x2={630} y={170} h={34} seed={12} o={0.6} />
      <Ink d={handLine(330, 170, 284, 334, 13, 0.6) + handLine(630, 170, 676, 334, 14, 0.6)} c={TONES.brown.deep} w={1.8} o={0.7} />
      <Hand x={480} y={206} size={24} anchor="middle" weight={700}>
        what we found
      </Hand>
      <Chart x={410} y={300} w={140} h={80} bars={[0.5, 0.85, 0.65]} tone="green" seed={15} />

      {/* the front fence, with a gap for the gate on the right */}
      <Fence x1={284} x2={600} y={350} h={46} seed={20} />
      <Ink d={handLine(600, 350, 600, 296, 21, 0.3) + handLine(676, 350, 676, 296, 22, 0.3)} c={TONES.brown.deep} w={3} />

      {SIGNS.map((sign, i) => {
        const x = 296 + i * 102
        const t = TONES[sign.tone]
        return (
          <Anim key={sign.word} className="s-wlim0-sign" origin={[x + 46, 318]} style={{ '--i': i }}>
            <Ink d={handLine(x + 20, 318, x + 46, 306, 30 + i, 0.2) + handLine(x + 72, 318, x + 46, 306, 33 + i, 0.2)} c={INK_SOFT} w={1.2} />
            <Box x={x} y={318} w={92} h={30} r={3} fill={t.tint} stroke={t.deep} seed={36 + i} sw={1.7} />
            <Hand x={x + 46} y={339} size={15} anchor="middle" weight={700}>
              {sign.word}
            </Hand>
          </Anim>
        )
      })}

      {/* the path out of the gate, to the next study */}
      <Ink className="s-wlim0-path" d="M638 352Q676 372 712 364Q736 358 742 346" c={TONES.red.ink} w={2.2} dash="7 5" scale />
      <Flag x={744} y={346} h={84} tone="red" seed={40} />
      <Hand x={760} y={238} size={17} anchor="end" c={TONES.red.deep} weight={700}>
        next study
      </Hand>

      {/* Hemlata with her magnifier */}
      <Place x={0} y={0}>
        <Anim className="s-wlim0-lens" origin={[204, 314]}>
          <Magnifier x={240} y={278} r={26} angle={130} tone="amber" seed={50} />
        </Anim>
      </Place>
      <Shadow x={140} y={FLOOR + 3} rx={38} ry={5} />
      <Place x={140} y={FLOOR} s={1.75}>
        <g className="s-wlim0-hemlata">
          <Pip mood="focused" arms="point" tone="blue" look={1.6} glasses seed={60} />
        </g>
      </Place>
      <Hand x={60} y={120} size={20} c={INK_SOFT}>
        how far does
      </Hand>
      <Hand x={60} y={146} size={20} c={INK_SOFT}>
        it reach?
      </Hand>
      <Ink d="M150 156Q170 190 160 230" c={INK_SOFT} w={1.4} />
    </Scene>
  )
}
