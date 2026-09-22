import InkDefs from './ink/defs.jsx'
import { Scene, useStage } from './ink/stage.jsx'
import { Pip } from './ink/cast.jsx'
import { Anim, Arrow, Hand, Place, Shadow } from './ink/prims.jsx'
import { Sheet } from './ink/props.jsx'
import { Floor } from './ink/sets.jsx'
import PaperFooter from './PaperFooter.jsx'
import { PaperButton } from './ui.jsx'
import { headFor } from '../seo/head.js'
import { useHead } from '../seo/useHead.js'

const css = `
.s-lost-sheet { animation: s-lost-drift 7s ease-in-out infinite; }
.s-lost-pip { animation: s-lost-look 7s ease-in-out infinite; }
@keyframes s-lost-drift {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  30% { transform: translate(18px, 26px) rotate(12deg); }
  60% { transform: translate(-6px, 44px) rotate(-6deg); }
  80% { transform: translate(4px, 12px) rotate(3deg); }
}
@keyframes s-lost-look {
  0%, 100% { transform: rotate(0deg); }
  35% { transform: rotate(-5deg); }
  65% { transform: rotate(4deg); }
}
`

function LostScene() {
  return (
    <Scene w={520} h={300} label="Pip, the paper character, shrugs while a loose page drifts down out of reach" css={css}>
      <Floor y={262} x1={20} x2={500} />
      <Place x={332} y={60}>
        <Anim className="s-lost-sheet" spin>
          <Sheet x={0} y={0} w={54} h={68} lines={3} seed={7} />
        </Anim>
      </Place>
      <Hand x={402} y={96} size={30} c="#c24f38" weight={700}>
        ?
      </Hand>
      <Arrow from={[392, 140]} to={[364, 182]} bend={-0.25} seed={4} c="#6b6058" />
      <Shadow x={200} y={262} rx={46} ry={6} />
      <Place x={200} y={262} s={2.2}>
        <Anim className="s-lost-pip" origin={[0, 0]}>
          <Pip mood="worried" arms="shrug" look={1.5} />
        </Anim>
      </Place>
    </Scene>
  )
}

export default function NotFound() {
  useHead(headFor('/404'), 'missing')
  const [ref, playing] = useStage()

  return (
    <div className="desk">
      <InkDefs />
      <main>
        <section ref={ref} className="napkin napkin-frame missing ink-stage" data-play={playing ? '' : undefined}>
          <div>
            <LostScene />
          </div>
          <div>
            <h1>This page does not exist.</h1>
            <p>The link may be old or mistyped. Every blog is still here.</p>
            <div className="missing-actions">
              <PaperButton to="/blogs/">All blogs</PaperButton>
              <PaperButton to="/" variant="outline">
                Home
              </PaperButton>
            </div>
          </div>
        </section>
      </main>
      <PaperFooter />
    </div>
  )
}
