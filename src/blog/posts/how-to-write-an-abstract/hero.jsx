import {
  Anim,
  Clock,
  Floor,
  Hand,
  INK,
  Ink,
  PAPER,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TONES,
  Type,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * The abstract machine. A thick draft marked 410 words rides a conveyor
 * into a machine whose sign reads max 250 words. Rollers spin in its
 * window, one card marked abstract slides out onto the tray, and Pip
 * points at it. Then the belt brings in the next draft.
 */

const css = `
.s-ab0-feed { animation: s-ab0-feed 10s ease-in-out infinite; }
@keyframes s-ab0-feed {
  0%, 6% { transform: translateX(0); opacity: 1; }
  40% { transform: translateX(250px); opacity: 1; }
  42%, 88% { transform: translateX(250px); opacity: 0; }
  89% { transform: translateX(0); opacity: 0; }
  96%, 100% { transform: translateX(0); opacity: 1; }
}
.s-ab0-card { animation: s-ab0-card 10s ease-in-out infinite; }
@keyframes s-ab0-card {
  0%, 44% { transform: translateX(-180px); opacity: 1; }
  60%, 88% { transform: translateX(0); opacity: 1; }
  93% { transform: translateX(0); opacity: 0; }
  94% { transform: translateX(-180px); opacity: 0; }
  97%, 100% { transform: translateX(-180px); opacity: 1; }
}
.s-ab0-roll-a { animation: s-ab0-spin 2.4s linear infinite; }
.s-ab0-roll-b { animation: s-ab0-spin 2.4s linear infinite reverse; }
.s-ab0-wheel { animation: s-ab0-spin 1.6s linear infinite; }
@keyframes s-ab0-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.s-ab0-spark { animation: s-ab0-spark 10s ease-in-out infinite; }
@keyframes s-ab0-spark {
  0%, 58% { opacity: 0; transform: scale(0.4); }
  64% { opacity: 1; transform: scale(1.15); }
  74% { opacity: 1; transform: scale(1); }
  82%, 100% { opacity: 0; transform: scale(0.4); }
}
.s-ab0-pip .pip-body { animation: s-ab0-nod 10s ease-in-out infinite; }
@keyframes s-ab0-nod {
  0%, 60%, 100% { transform: translateY(0); }
  64% { transform: translateY(-9px); }
  68% { transform: translateY(0); }
  72% { transform: translateY(-5px); }
  76% { transform: translateY(0); }
}
`

function Roller({ cx, cy, tone, seed, className }) {
  return (
    <Anim className={className} origin={[cx, cy]}>
      <path d={ellipsePath(cx, cy, 17, 17)} fill={`url(#fill-${tone})`} />
      <Ink d={handEllipse(cx, cy, 17, 17, { seed, amp: 0.4 })} w={1.6} />
      <Ink
        d={handLine(cx - 15, cy, cx + 15, cy, seed + 1, 0.2) + handLine(cx - 7.5, cy - 13, cx + 7.5, cy + 13, seed + 2, 0.2) + handLine(cx - 7.5, cy + 13, cx + 7.5, cy - 13, seed + 3, 0.2)}
        w={1.3}
        c={TONES[tone].deep}
      />
      <circle cx={cx} cy={cy} r={3} fill={INK} />
    </Anim>
  )
}

const WHEELS = [62, 128, 194, 260, 318]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={264}
      top={62}
      css={css}
      className="s-ab0"
      label="A thick stack of pages marked 410 words rides a conveyor into a machine with spinning rollers and a sign reading max 250 words, and a single card marked abstract, 247 words, slides out onto a tray while a paper character points at it"
    >
      <Floor y={318} x1={24} x2={776} seed={3} />
      <Clock x={200} y={96} r={24} seed={4} />

      {/* The conveyor: legs, belt and turning wheels. */}
      <Ink d={handLine(72, 250, 66, 318, 5, 0.4) + handLine(300, 250, 306, 318, 6, 0.4)} w={2.6} c={TONES.brown.deep} />
      <path d="M47 236H329A7 7 0 0 1 329 250H47A7 7 0 0 1 47 236Z" fill={TONES.grey.mid} />
      <Ink d="M47 236H329A7 7 0 0 1 329 250H47A7 7 0 0 1 47 236Z" w={1.8} />
      {WHEELS.map((x, i) => (
        <Anim key={x} className="s-ab0-wheel" origin={[x, 243]}>
          <circle cx={x} cy={243} r={4.6} fill={PAPER} stroke={INK} strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
          <Ink d={handLine(x - 4, 243, x + 4, 243, 7 + i, 0.1)} w={1.1} />
        </Anim>
      ))}

      {/* The long draft rides in and vanishes behind the machine. */}
      <Anim className="s-ab0-feed">
        <Pile x={130} y={236} w={104} count={14} seed={8} />
        <Hand x={130} y={154} size={22} anchor="middle" weight={700}>
          410 words
        </Hand>
      </Anim>

      {/* The card waits behind the machine, then slides out onto the tray. */}
      <Anim className="s-ab0-card">
        <Sheet x={510} y={174} w={130} h={88} tone="pink" lines={0} seed={9} />
        <Hand x={570} y={216} size={25} anchor="middle" weight={700} c={INK}>
          abstract
        </Hand>
        <Type x={572} y={246} size={20} anchor="middle" weight={700} c={TONES.pink.deep}>
          247 words
        </Type>
      </Anim>

      {/* The tray. */}
      <Ink d={handLine(502, 270, 498, 318, 10, 0.4) + handLine(646, 270, 650, 318, 11, 0.4)} w={2.6} c={TONES.brown.deep} />
      <path d="M488 262h172v9h-172Z" fill="url(#wood)" />
      <Ink d={handPoly([[488, 262], [660, 262], [660, 271], [488, 271]], { seed: 12, amp: 0.4, closed: true })} w={1.7} />

      {/* The machine. */}
      <path d="M332 300h14v18h-14ZM454 300h14v18h-14Z" fill={TONES.grey.mid} />
      <Ink d={handPoly([[332, 300], [346, 300], [346, 318], [332, 318]], { seed: 13, amp: 0.3, closed: true }) + handPoly([[454, 300], [468, 300], [468, 318], [454, 318]], { seed: 14, amp: 0.3, closed: true })} w={1.4} />
      <Ink d={handLine(352, 132, 352, 108, 15, 0.3) + handLine(448, 132, 448, 108, 16, 0.3)} w={2.4} c={TONES.brown.deep} />
      <path d="M326 80h148v30h-148Z" fill={PAPER} />
      <Ink d={handPoly([[326, 80], [474, 80], [474, 110], [326, 110]], { seed: 17, amp: 0.5, closed: true })} w={1.8} />
      <Hand x={400} y={102} size={21} anchor="middle" weight={700}>
        max 250 words
      </Hand>

      <path d="M320 130h160v170h-160Z" fill="url(#fill-blue)" />
      <path d="M462 130h18v170h-18Z" fill="url(#ink-hatch-light)" />
      <Ink d={handPoly([[320, 130], [480, 130], [480, 300], [320, 300]], { seed: 18, amp: 0.6, closed: true })} w={2} />
      <path d="M324 158h12v80h-12ZM464 166h12v92h-12Z" fill={INK} opacity="0.78" />

      <path d={ellipsePath(400, 190, 42, 42)} fill={PAPER} />
      <Roller cx={381} cy={190} tone="amber" seed={20} className="s-ab0-roll-a" />
      <Roller cx={419} cy={190} tone="pink" seed={24} className="s-ab0-roll-b" />
      <Ink d={handEllipse(400, 190, 42, 42, { seed: 28, amp: 0.5 })} w={2} />

      {[
        [374, 'green'],
        [400, 'amber'],
        [426, 'red'],
      ].map(([x, tone], i) => (
        <g key={tone}>
          <path d={ellipsePath(x, 264, 6.5, 6.5)} fill={TONES[tone].mid} />
          <Ink d={handEllipse(x, 264, 6.5, 6.5, { seed: 30 + i, amp: 0.3 })} w={1.4} />
        </g>
      ))}

      <Anim className="s-ab0-spark" spin style={{ opacity: 0 }}>
        <Sparkle x={654} y={166} s={10} />
      </Anim>
      <Anim className="s-ab0-spark" spin style={{ opacity: 0, animationDelay: '0.25s' }}>
        <Sparkle x={516} y={158} s={7} fill={TONES.pink.mid} />
      </Anim>

      <Shadow x={722} y={320} rx={44} ry={5} />
      <Place x={722} y={318} s={1.8} flip>
        <g className="s-ab0-pip">
          <Pip mood="happy" arms="point" tone="green" look={1.2} seed={40} />
        </g>
      </Place>
    </Scene>
  )
}
