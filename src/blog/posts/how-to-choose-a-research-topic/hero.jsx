import {
  Anim,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Pip,
  Place,
  Plant,
  PushPin,
  Scene,
  Shadow,
  Sparkle,
  Sticky,
  TONES,
  handEllipse,
  handPoly,
} from '../../ink/index.js'

/**
 * A corkboard of possible topics, one idea per sticky note. Pip points at
 * the board, a red pen circles "eye care", the note gives a little shake and
 * a sparkle, and the circle fades so the choosing can start again.
 */

const NOTES = [
  { x: 180, y: 70, label: 'AI', tone: 'amber', r: -3 },
  { x: 290, y: 64, label: 'IoT', tone: 'blue', r: 2 },
  { x: 400, y: 72, label: 'crops', tone: 'green', r: -2 },
  { x: 510, y: 66, label: 'traffic', tone: 'pink', r: 3 },
  { x: 180, y: 178, label: 'eye care', tone: 'amber', r: 2, chosen: true },
  { x: 290, y: 184, label: 'Tamil', tone: 'green', r: -3 },
  { x: 400, y: 176, label: 'water', tone: 'blue', r: 2 },
  { x: 510, y: 182, label: 'robots', tone: 'red', r: -2 },
]

const css = `
.s-ct0-note { animation: s-ct0-sway 6s ease-in-out infinite; }
.s-ct0-ring { animation: s-ct0-ring 10s ease-in-out infinite; }
.s-ct0-chosen { animation: s-ct0-shake 10s ease-in-out infinite; }
.s-ct0-spark { animation: s-ct0-spark 10s ease-in-out infinite; }
.s-ct0 .pip-arm-r { animation: s-ct0-point 10s ease-in-out infinite; }
@keyframes s-ct0-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(1.6deg); }
}
@keyframes s-ct0-ring {
  0%, 16% { stroke-dashoffset: 1; opacity: 1; }
  34%, 84% { stroke-dashoffset: 0; opacity: 1; }
  92% { stroke-dashoffset: 0; opacity: 0; }
  93%, 100% { stroke-dashoffset: 1; opacity: 1; }
}
@keyframes s-ct0-shake {
  0%, 36%, 52%, 100% { transform: rotate(0deg); }
  40% { transform: rotate(-4deg); }
  44% { transform: rotate(4deg); }
  48% { transform: rotate(-2deg); }
}
@keyframes s-ct0-spark {
  0%, 38% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  44% { opacity: 1; transform: scale(1.15) rotate(25deg); }
  70% { opacity: 1; transform: scale(0.9) rotate(45deg); }
  80%, 100% { opacity: 0; transform: scale(0.3) rotate(60deg); }
}
@keyframes s-ct0-point {
  0%, 12%, 60%, 100% { transform: rotate(0deg); }
  20%, 50% { transform: rotate(8deg); }
}
`

function Note({ x, y, label, tone, r, seed }) {
  return (
    <g transform={`rotate(${r} ${x + 45} ${y + 38})`}>
      <Sticky x={x} y={y} w={90} h={76} tone={tone} lines={0} seed={seed} />
      <Hand x={x + 45} y={y + 50} size={21} anchor="middle" weight={700} c={INK}>
        {label}
      </Hand>
      <PushPin x={x + 45} y={y + 10} tone={tone === 'red' ? 'blue' : 'red'} seed={seed + 1} />
    </g>
  )
}

export default function Hero() {
  const chosen = NOTES.find((note) => note.chosen)
  const cx = chosen.x + 45
  const cy = chosen.y + 38
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-ct0"
      label="A corkboard full of sticky notes with possible research topics such as AI, crops, traffic and eye care, while a paper character points and a red pen circles eye care"
    >
      <rect x={146} y={32} width={482} height={264} rx={6} fill="url(#wood)" />
      <rect x={160} y={46} width={454} height={236} fill={TONES.brown.tint} />
      <rect x={160} y={46} width={454} height={236} fill="url(#ink-dots)" opacity="0.6" />
      <Ink d={handPoly([[146, 32], [628, 32], [628, 296], [146, 296]], { seed: 3, amp: 0.8, closed: true })} w={2} />
      <Ink d={handPoly([[160, 46], [614, 46], [614, 282], [160, 282]], { seed: 4, amp: 0.6, closed: true })} w={1.4} />

      {NOTES.map((note, i) => {
        const card = <Note {...note} seed={20 + i * 3} />
        if (note.chosen) {
          return (
            <Anim key={note.label} className="s-ct0-chosen" origin={[cx, cy - 30]}>
              {card}
            </Anim>
          )
        }
        return (
          <Anim
            key={note.label}
            className="s-ct0-note"
            origin={[note.x + 45, note.y + 6]}
            style={{ animationDelay: `${-i * 0.7}s` }}
          >
            {card}
          </Anim>
        )
      })}

      <Ink
        className="s-ct0-ring"
        d={handEllipse(cx, cy, 64, 54, { seed: 9, amp: 1.2, overlap: 0.12 })}
        c={TONES.red.ink}
        w={3.2}
        scale
        pathLength={1}
        dash="1"
      />
      <Place x={cx + 62} y={cy - 50}>
        <Anim className="s-ct0-spark" spin>
          <Sparkle x={0} y={0} s={12} />
        </Anim>
      </Place>

      <Floor y={372} x1={40} x2={760} seed={11} />
      <Plant x={86} y={372} s={1.3} seed={12} />
      <Shadow x={700} y={374} rx={52} ry={6} />
      <Place x={700} y={372} s={2.2} flip>
        <Pip mood="happy" arms="point" seed={13} />
      </Place>
      <Hand x={660} y={120} size={22} c={INK_SOFT} rotate={-6}>
        which one?
      </Hand>
    </Scene>
  )
}
