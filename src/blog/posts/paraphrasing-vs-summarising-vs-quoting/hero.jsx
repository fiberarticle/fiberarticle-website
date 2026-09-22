import {
  Anim,
  Desk,
  Funnel,
  Hand,
  INK,
  Ink,
  Pencil,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sticky,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * Three stations on one workbench. On the left a sheet stands between two
 * giant quotation marks that hug it tight (quoting keeps the exact words).
 * In the middle Pip rewrites a page in fresh green ink (paraphrasing). On the
 * right a tall page slides into a funnel and comes out as one small note
 * (summarising). Pages glide from station to station along the bench.
 */

const css = `
.s-ps0-open { animation: s-ps0-hug-l 6s ease-in-out infinite; }
.s-ps0-close { animation: s-ps0-hug-r 6s ease-in-out infinite; }
.s-ps0-pencil { animation: s-ps0-scribble 0.45s ease-in-out infinite alternate; }
.s-ps0-writer .pip-body { animation: s-ps0-hop 12s ease-in-out infinite; }
.s-ps0-tall { animation: s-ps0-feed 12s ease-in-out infinite; }
.s-ps0-note { animation: s-ps0-pop 12s ease-in-out infinite; }
.s-ps0-glide { animation: s-ps0-glide 4s linear infinite; }
.s-ps0-glide-late { animation: s-ps0-glide 4s linear -2s infinite; }

@keyframes s-ps0-hug-l {
  0%, 30%, 100% { transform: translateX(0); }
  40%, 50% { transform: translateX(7px); }
}
@keyframes s-ps0-hug-r {
  0%, 30%, 100% { transform: translateX(0); }
  40%, 50% { transform: translateX(-7px); }
}
@keyframes s-ps0-scribble {
  from { transform: rotate(-5deg); }
  to { transform: rotate(5deg); }
}
@keyframes s-ps0-hop {
  0%, 40%, 100% { transform: translateY(0); }
  44% { transform: translateY(-8px); }
  48% { transform: translateY(0); }
}
@keyframes s-ps0-feed {
  0%, 28% { transform: translateY(0); opacity: 1; }
  52% { transform: translateY(46px); opacity: 1; }
  57% { transform: translateY(46px); opacity: 0; }
  80% { transform: translateY(0); opacity: 0; }
  90%, 100% { transform: translateY(0); opacity: 1; }
}
@keyframes s-ps0-pop {
  0%, 56% { transform: scale(1); }
  61% { transform: scale(1.18); }
  66%, 100% { transform: scale(1); }
}
@keyframes s-ps0-glide {
  0% { transform: translate(0, 0); opacity: 0; }
  15% { opacity: 1; }
  50% { transform: translate(50px, -14px); }
  85% { opacity: 1; }
  100% { transform: translate(100px, 0); opacity: 0; }
}
`

/**
 * A pair of big closing quotation marks ("99"), drawn in the local units of
 * wherever it is placed; rotate it 180 degrees for the opening pair ("66").
 * Exported so the section drawings can use the same marks.
 */
export function QuoteMarks({ r = 9, tone = 'amber' }) {
  const comma = (cx) =>
    `M${cx + r} ${0}A${r} ${r} 0 1 0 ${cx - r * 0.05} ${r * 0.99}` +
    `C${cx - r * 0.2} ${r * 1.5} ${cx - r * 0.6} ${r * 2} ${cx - r * 1.1} ${r * 2.35}` +
    `C${cx + r * 0.5} ${r * 2.1} ${cx + r * 1.05} ${r * 1.2} ${cx + r} ${0}Z`
  const d = comma(-r * 1.25) + comma(r * 1.25)
  return (
    <g>
      <path d={d} fill={`url(#fill-${tone})`} />
      <Ink d={d} w={1.7} />
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={318}
      top={82}
      css={css}
      className="s-ps0"
      label="A workbench with three stations: a page held between two giant quotation marks, a paper character rewriting a page in its own words, and a funnel that turns a tall page into one small note"
    >
      <Desk y={322} depth={28} seed={3} />

      <Place x={84} y={236}>
        <Anim className="s-ps0-open">
          <g transform="rotate(180)">
            <QuoteMarks r={11} />
          </g>
        </Anim>
      </Place>
      <g transform="rotate(-3 150 266)">
        <Sheet x={112} y={206} w={76} h={96} lines={5} tone="blue" seed={11} />
      </g>
      <Place x={214} y={214}>
        <Anim className="s-ps0-close">
          <QuoteMarks r={11} />
        </Anim>
      </Place>
      <Shadow x={150} y={324} rx={56} ry={5} />

      <Place x={262} y={286}>
        <Anim className="s-ps0-glide">
          <Sheet x={-14} y={-18} w={28} h={34} lines={2} fold={7} tone="blue" seed={21} sw={1.3} />
        </Anim>
      </Place>
      <Place x={500} y={286}>
        <Anim className="s-ps0-glide-late">
          <Sheet x={-14} y={-18} w={28} h={34} lines={2} fold={7} tone="green" seed={22} sw={1.3} />
        </Anim>
      </Place>

      <Shadow x={400} y={324} rx={52} ry={6} />
      <Place x={400} y={322} s={2.05}>
        <g className="s-ps0-writer">
          <Pip mood="focused" arms="hold" look={0.5} seed={31}>
            <Sheet x={-14} y={-40} w={28} h={34} lines={3} fold={7} tone="green" seed={32} sw={1.3} />
            <Anim className="s-ps0-pencil" origin={[12, -24]}>
              <Pencil x={-3} y={-15} length={30} angle={-30} tone="amber" seed={33} />
            </Anim>
          </Pip>
        </g>
      </Place>

      <Ink d={handLine(620, 212, 598, 322, 41, 0.4) + handLine(680, 212, 702, 322, 42, 0.4)} w={2.2} c={TONES.brown.deep} />
      <Place x={650} y={104}>
        <Anim className="s-ps0-tall">
          <Sheet x={-30} y={0} w={60} h={112} lines={8} tone="pink" seed={43} />
        </Anim>
      </Place>
      <Funnel x={650} y={172} w={126} h={100} tone="grey" seed={44} />
      <Place x={650} y={322}>
        <Anim className="s-ps0-note" origin={[0, 0]}>
          <Sticky x={-25} y={-44} w={50} h={44} tone="pink" lines={1} seed={45} />
        </Anim>
      </Place>

      <Hand x={150} y={386} size={25} anchor="middle" weight={700} c={INK}>
        quote
      </Hand>
      <Hand x={400} y={386} size={25} anchor="middle" weight={700} c={INK}>
        paraphrase
      </Hand>
      <Hand x={650} y={386} size={25} anchor="middle" weight={700} c={INK}>
        summarise
      </Hand>
    </Scene>
  )
}
