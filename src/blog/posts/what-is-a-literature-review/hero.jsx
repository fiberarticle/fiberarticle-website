import { Anim, Floor, Hand, Ink, Pip, Place, Scene, Sheet, Shadow, Speech, TONES, ellipsePath, handEllipse } from '../../ink/index.js'

/**
 * Papers in conversation. Four papers sit around a table and talk: one
 * agrees, one objects, one adds a condition, one asks why. Pip, in reading
 * glasses, takes notes at the side. That note-taking is the literature
 * review: not four separate summaries, but an account of the conversation.
 */

const css = `
.s-lr0-say-0 { animation: s-lr0-say-0 10s ease-in-out infinite; }
.s-lr0-say-1 { animation: s-lr0-say-1 10s ease-in-out infinite; }
.s-lr0-say-2 { animation: s-lr0-say-2 10s ease-in-out infinite; }
.s-lr0-say-3 { animation: s-lr0-say-3 10s ease-in-out infinite; }
.s-lr0-note .pip-arm-r { animation: s-lr0-scribble 0.6s ease-in-out infinite alternate; }
${[0, 1, 2, 3]
  .map((i) => {
    const on = 4 + i * 20
    return `@keyframes s-lr0-say-${i} {
  0%, ${on}% { transform: scale(0.4); opacity: 0; }
  ${on + 4}% { transform: scale(1.08); opacity: 1; }
  ${on + 7}%, 88% { transform: scale(1); opacity: 1; }
  94%, 100% { transform: scale(0.4); opacity: 0; }
}`
  })
  .join('\n')}
@keyframes s-lr0-scribble { from { transform: rotate(-4deg); } to { transform: rotate(5deg); } }
`

/* Who sits where, what they say, and where their speech bubble floats. */
const TALKERS = [
  { x: 150, y: 380, s: 1.4, tone: 'blue', look: 2, bubble: [52, 196, 116, 50], say: 'agreed!' },
  { x: 300, y: 300, s: 1.3, tone: 'pink', look: 0.5, bubble: [214, 104, 108, 50], say: 'but...' },
  { x: 430, y: 300, s: 1.3, tone: 'amber', look: -0.5, bubble: [382, 64, 132, 50], say: 'not always' },
  { x: 580, y: 380, s: 1.4, tone: 'green', look: -2, bubble: [566, 196, 94, 50], say: 'why?' },
]

export default function Hero() {
  const table = ellipsePath(365, 300, 172, 34)
  return (
    <Scene
      w={800}
      h={352}
      top={46}
      css={css}
      className="s-lr0"
      label="Four papers sit around a table and talk, saying agreed, but, not always and why, while a paper character in reading glasses takes notes on the conversation"
    >
      <Floor y={380} x1={30} x2={770} seed={3} />

      {TALKERS.slice(1, 3).map((t, i) => (
        <Place key={t.tone} x={t.x} y={t.y} s={t.s}>
          <Pip mood={i === 0 ? 'worried' : 'focused'} arms={i === 0 ? 'shrug' : 'hips'} tone={t.tone} look={t.look} seed={10 + i * 7} />
        </Place>
      ))}

      <Ink d="M365 330L356 378M365 330L376 378" w={3} c={TONES.brown.deep} />
      <path d={table} fill="url(#wood)" />
      <Ink d={handEllipse(365, 300, 172, 34, { seed: 20, amp: 0.4 })} w={2} />
      <Sheet x={330} y={288} w={40} h={16} lines={0} fold={5} seed={21} sw={1.2} />

      <Shadow x={150} y={382} rx={36} ry={5} />
      <Place x={150} y={380} s={1.4}>
        <Pip mood="grin" arms="up" tone="blue" look={2} seed={30} />
      </Place>
      <Shadow x={580} y={382} rx={36} ry={5} />
      <Place x={580} y={380} s={1.4}>
        <Pip mood="surprised" arms="point" tone="green" look={-2} seed={37} />
      </Place>

      {TALKERS.map((t, i) => {
        const [bx, by, bw, bh] = t.bubble
        const head = t.y - 68 * t.s - 6
        return (
          <Anim key={t.say} className={`s-lr0-say-${i}`} origin={[bx + bw / 2, by + bh]}>
            <Speech x={bx} y={by} w={bw} h={bh} tx={t.x + (i < 2 ? -6 : 6)} ty={head} seed={40 + i} tone="paper">
              <Hand x={bx + bw / 2} y={by + bh / 2 + 7} size={21} anchor="middle" weight={700}>
                {t.say}
              </Hand>
            </Speech>
          </Anim>
        )
      })}

      <Shadow x={712} y={382} rx={40} ry={5} />
      <Place x={712} y={380} s={1.8}>
        <g className="s-lr0-note">
          <Pip mood="focused" arms="write" glasses look={-1.5} seed={50}>
            <Sheet x={10} y={-44} w={30} h={36} lines={3} fold={7} tone="paper" seed={51} sw={1.3} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}
