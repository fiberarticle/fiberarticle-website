import {
  Anim,
  Box,
  Floor,
  Funnel,
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
 * Pressing a study into one line. Three strips of paper, each holding one
 * plain sentence about Manish's study, slide down into a funnel; out of the
 * spout comes a single title strip whose keywords a highlighter sweeps.
 * A magnifying glass reads along it while Manish points at it.
 */

const FLOOR = 386

const STRIPS = [
  { word: 'what we made', x: 150, y: 46, tone: 'amber' },
  { word: 'what we measured', x: 300, y: 18, tone: 'green' },
  { word: 'what we compared', x: 450, y: 46, tone: 'blue' },
]

const css = `
.s-ptl0-strip { animation: s-ptl0-drop 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s - 7.5s); }
.s-ptl0-mark { animation: s-ptl0-sweep 7.5s ease-in-out infinite; }
.s-ptl0-lens { animation: s-ptl0-scan 7.5s ease-in-out infinite; }
.s-ptl0-manish .pip-body { animation: s-ptl0-bob 3s ease-in-out infinite; }
@keyframes s-ptl0-drop {
  0%, 12% { transform: translateY(0); opacity: 1; }
  34% { transform: translateY(70px); opacity: 0; }
  35%, 60% { transform: translateY(-20px); opacity: 0; }
  76%, 100% { transform: translateY(0); opacity: 1; }
}
@keyframes s-ptl0-sweep {
  0%, 30% { stroke-dashoffset: 0; }
  38% { stroke-dashoffset: 1; }
  52%, 100% { stroke-dashoffset: 0; }
}
@keyframes s-ptl0-scan {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-170px); }
}
@keyframes s-ptl0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export default function Hero() {
  const tx = 92
  const ty = 296
  const tw = 476
  const th = 58
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-ptl0"
      label="Three paper strips reading what we made, what we measured and what we compared slide into a funnel, and one title strip reading pine needle briquettes: fuel properties comes out below with its keywords highlighted, while a magnifying glass moves along it and a paper character in glasses points at it"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />

      {/* the three plain sentences about the study */}
      {STRIPS.map((strip, i) => {
        const t = TONES[strip.tone]
        return (
          <g key={strip.word} className="s-ptl0-strip" style={{ '--i': i }}>
            <Box x={strip.x} y={strip.y} w={190} h={44} r={4} fill={t.tint} stroke={t.deep} seed={20 + i * 5} sw={1.8} />
            <Hand x={strip.x + 95} y={strip.y + 29} size={19} anchor="middle" weight={700}>
              {strip.word}
            </Hand>
          </g>
        )
      })}

      <Funnel x={330} y={128} w={250} h={150} tone="amber" seed={31} />

      {/* the one line that comes out */}
      <path
        className="s-ptl0-mark"
        d={`M${tx + 70} ${ty + 30}L${tx + 300} ${ty + 31}`}
        pathLength="1"
        strokeDasharray="1"
        fill="none"
        stroke={TONES.amber.mid}
        strokeWidth={26}
        strokeLinecap="round"
        opacity="0.7"
      />
      <Box x={tx} y={ty} w={tw} h={th} r={6} stroke={TONES.blue.deep} seed={41} sw={2.2} double />
      <Hand x={tx + tw / 2} y={ty + 38} size={23} anchor="middle" weight={700}>
        pine needle briquettes: fuel properties
      </Hand>
      <Ink d={handLine(330, 280, 330, 292, 43, 0.3)} c={INK_SOFT} w={1.6} dash="3 4" />
      <Hand x={tx + tw / 2} y={ty + th + 22} size={16} anchor="middle" c={INK_SOFT}>
        one line a database can find
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-ptl0-lens">
          <Magnifier x={500} y={322} r={30} angle={50} tone="green" seed={51} />
        </Anim>
      </Place>

      <Shadow x={690} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={690} y={FLOOR} s={1.7} flip>
        <g className="s-ptl0-manish">
          <Pip mood="happy" arms="point" tone="green" look={1.6} glasses seed={61} />
        </g>
      </Place>
    </Scene>
  )
}
