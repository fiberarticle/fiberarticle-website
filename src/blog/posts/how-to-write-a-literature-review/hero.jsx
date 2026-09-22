import { Anim, Box, Calendar, Flag, Floor, Hand, Pile, Pip, Place, Scene, TONES } from '../../ink/index.js'

/**
 * Seven steps from a pile of papers to a finished review. Pip climbs the
 * staircase one numbered step at a time, towards the flag at the top, while
 * the calendar on the wall counts six weeks.
 */

const STEPS = 7
const STEP_W = 72
const STEP_H = 38
const LEFT = 200
const FLOOR = 380
const TONE_CYCLE = ['amber', 'blue', 'green', 'pink']
const REST = 3

/* Pip stands in the middle of step k; offsets are measured from step REST. */
const hops = Array.from({ length: STEPS }, (_, k) => [(k - REST) * STEP_W, -(k - REST) * STEP_H])

const css = `
.s-wl0-climb { animation: s-wl0-climb 14s ease-in-out infinite; }
@keyframes s-wl0-climb {
${hops
  .map(([dx, dy], k) => {
    const at = 4 + k * 11
    return `  ${at}%, ${at + 5}% { transform: translate(${dx}px, ${dy}px); opacity: 1; }`
  })
  .join('\n')}
  0% { transform: translate(${hops[0][0]}px, ${hops[0][1]}px); opacity: 0; }
  86% { transform: translate(${hops[STEPS - 1][0]}px, ${hops[STEPS - 1][1]}px); opacity: 1; }
  94% { transform: translate(${hops[STEPS - 1][0]}px, ${hops[STEPS - 1][1]}px); opacity: 0; }
  95%, 100% { transform: translate(${hops[0][0]}px, ${hops[0][1]}px); opacity: 0; }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={366}
      top={26}
      css={css}
      className="s-wl0"
      label="A staircase of seven numbered steps rises from a pile of papers to a flag, with a paper character climbing it and a calendar on the wall counting six weeks"
    >
      <Calendar x={60} y={70} w={96} h={100} day="6" month="WEEKS" tone="red" seed={3} />
      <Floor y={FLOOR} x1={30} x2={770} seed={4} />
      <Pile x={120} y={FLOOR} w={120} count={10} seed={5} />

      {Array.from({ length: STEPS }, (_, i) => {
        const x = LEFT + i * STEP_W
        const top = FLOOR - (i + 1) * STEP_H
        return (
          <g key={i}>
            <Box x={x} y={top} w={STEP_W} h={(i + 1) * STEP_H} r={2} fill={`url(#fill-${TONE_CYCLE[i % 4]})`} seed={10 + i} />
            <Hand x={x + STEP_W / 2} y={top + 27} size={22} anchor="middle" weight={700} c={TONES[TONE_CYCLE[i % 4]].deep}>
              {i + 1}
            </Hand>
          </g>
        )
      })}

      <Flag x={LEFT + (STEPS - 0.5) * STEP_W} y={FLOOR - STEPS * STEP_H} h={64} tone="red" seed={20} />

      <Place x={LEFT + (REST + 0.5) * STEP_W} y={FLOOR - (REST + 1) * STEP_H}>
        <Anim className="s-wl0-climb">
          <Place s={1.25}>
            <Pip mood="focused" arms="up" seed={30} />
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}
