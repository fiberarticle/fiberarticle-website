import { Anim, Arrow, Cross, Floor, Hand, Pip, Place, Plant, Scene, Shadow, Sparkle, TONES } from '../../ink/index.js'
import { Paper, ProfileCard } from './scenes.jsx'

/**
 * The profile, sorted. Aswathy stands beside a big profile card with her
 * photo, a verified tick and her papers. Her own amber papers float into it
 * from the left; grey papers by other A. Rajs, crossed out, drift away to
 * the right.
 */

const FLOOR = 380

const css = `
.s-gsp0-pip .pip-body { animation: s-gsp0-bob 3s ease-in-out infinite; }
@keyframes s-gsp0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.s-gsp0-in { animation: s-gsp0-in 4s ease-in-out infinite; animation-delay: calc(var(--i) * -2s); }
@keyframes s-gsp0-in {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -6px); }
}
.s-gsp0-out { animation: s-gsp0-out 4s ease-in-out infinite; animation-delay: calc(var(--i) * -2s); }
@keyframes s-gsp0-out {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(12px, 4px) rotate(5deg); }
}
.s-gsp0-spark { animation: s-gsp0-spark 2.6s ease-in-out infinite; animation-delay: calc(var(--i) * -0.9s); }
@keyframes s-gsp0-spark {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.5); opacity: 0.4; }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={392}
      top={8}
      css={css}
      className="s-gsp0"
      label="A paper character in glasses stands beside a large profile card with a photo, the name Aswathy Raj, a verified email tick and a list of papers with citation counts. Her own amber papers float into the card from the left, while grey papers by other A. Rajs, crossed out in red, drift away to the right"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      <ProfileCard x={270} y={40} w={300} h={290} rows={5} seed={2} />

      {[
        { x: 200, y: 110, r: -8 },
        { x: 214, y: 220, r: 6 },
      ].map((p, i) => (
        <Place key={i} x={0} y={0}>
          <Anim className="s-gsp0-in" style={{ '--i': i }}>
            <Paper x={p.x} y={p.y} tone="amber" seed={10 + i} r={p.r} />
          </Anim>
        </Place>
      ))}
      <Arrow from={[230, 150]} to={[262, 168]} bend={0.1} seed={14} c={TONES.green.deep} w={2.2} />

      {[
        { x: 650, y: 100, r: 10, label: 'A. Raj, cardiology' },
        { x: 700, y: 236, r: -6, label: 'A. Raj, economics' },
      ].map((p, i) => (
        <Place key={i} x={0} y={0}>
          <Anim className="s-gsp0-out" style={{ '--i': i }}>
            <Paper x={p.x} y={p.y} tone="grey" label={p.label} seed={20 + i} r={p.r} />
            <Cross x={p.x} y={p.y} s={1.5} seed={24 + i} />
          </Anim>
        </Place>
      ))}
      <Arrow from={[580, 190]} to={[640, 214]} bend={-0.1} seed={28} c={TONES.red.deep} w={2.2} dash="5 6" />

      {[
        [560, 36, 9],
        [258, 48, 7],
      ].map(([x, y, s], i) => (
        <g key={i} className="s-gsp0-spark" style={{ '--i': i, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <Sparkle x={x} y={y} s={s} />
        </g>
      ))}

      <Hand x={420} y={362} size={20} anchor="middle" weight={700} c={TONES.blue.deep}>
        only my papers, under my name
      </Hand>

      <Plant x={756} y={FLOOR} s={0.85} seed={30} />

      <Shadow x={110} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={110} y={FLOOR} s={1.9}>
        <g className="s-gsp0-pip">
          <Pip mood="happy" arms="point" tone="amber" glasses look={1.5} seed={31} />
        </g>
      </Place>
    </Scene>
  )
}
