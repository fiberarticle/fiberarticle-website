import {
  Anim,
  Chai,
  Clock,
  Desk,
  Hand,
  Ink,
  Magnifier,
  OpenBook,
  PAPER,
  Pile,
  Pip,
  Place,
  Scene,
  TEXT_LINE,
  Worm,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * Reading in passes. Pip runs a magnifying glass down the open paper, a
 * page turns over, the bookworm reads along the top edge, and three numbered
 * tabs mark the three passes. The clock on the wall keeps its own time.
 */

const SPINE = 400
const BOOK_Y = 330
const HALF = 140
const PAGE_H = 146

const PAGE = `M${SPINE} ${BOOK_Y}Q${SPINE + HALF * 0.5} ${BOOK_Y - 7} ${SPINE + HALF} ${BOOK_Y - 3}L${SPINE + HALF} ${BOOK_Y - PAGE_H}Q${SPINE + HALF * 0.5} ${BOOK_Y - PAGE_H - 7} ${SPINE} ${BOOK_Y - PAGE_H + 5}Z`

const css = `
.s-rp0 .pip-arm-r,
.s-rp0-tool { animation: s-rp0-scan 7s ease-in-out infinite; }
.s-rp0-turn { animation: s-rp0-turn 7s ease-in-out infinite; }
.s-rp0 .clock-min { animation: s-rp0-tick 7s linear infinite; }
@keyframes s-rp0-scan {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(9deg); }
  50% { transform: rotate(18deg); }
  75% { transform: rotate(7deg); }
}
@keyframes s-rp0-turn {
  0%, 54% { transform: scaleX(1); opacity: 0; }
  56% { transform: scaleX(1); opacity: 1; }
  70% { transform: scaleX(-1); opacity: 1; }
  78% { transform: scaleX(-1); opacity: 0; }
  80%, 100% { transform: scaleX(1); opacity: 0; }
}
@keyframes s-rp0-tick { to { transform: rotate(360deg); } }
`

const TABS = [
  { x: 292, n: '1', tone: 'amber' },
  { x: 324, n: '2', tone: 'pink' },
  { x: 356, n: '3', tone: 'green' },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={354}
      top={16}
      css={css}
      className="s-rp0"
      label="A paper character in reading glasses runs a magnifying glass down an open paper marked with three numbered tabs, while a bookworm reads along the top of the page"
    >
      <Clock x={700} y={92} r={40} seed={3} />
      <Desk y={340} depth={30} seed={4} />
      <Pile x={718} y={340} w={112} count={8} seed={5} />
      <Chai x={626} y={340} s={1.25} seed={6} />

      {TABS.map((tab, i) => (
        <g key={tab.n}>
          <path d={`M${tab.x - 12} 196V150h24V196Z`} fill={`url(#fill-${tab.tone})`} />
          <Ink d={handPoly([[tab.x - 12, 196], [tab.x - 12, 150], [tab.x + 12, 150], [tab.x + 12, 196]], { seed: 10 + i, amp: 0.3 })} w={1.4} />
          <Hand x={tab.x} y={173} size={20} anchor="middle" weight={700}>
            {tab.n}
          </Hand>
        </g>
      ))}

      <OpenBook x={SPINE} y={BOOK_Y} w={HALF * 2} tone="blue" lines={6} seed={20} />

      <Anim className="s-rp0-turn" origin={[SPINE, BOOK_Y - PAGE_H / 2]} style={{ opacity: 0 }}>
        <path d={PAGE} fill={PAPER} />
        <Ink
          d={[0, 1, 2, 3].map((i) => handLine(SPINE + 14, 214 + i * 24, SPINE + 96 + (i % 2) * 20, 214 + i * 24, 30 + i, 0.4)).join('')}
          c={TEXT_LINE}
          w={1.4}
        />
        <Ink d={PAGE} w={1.7} />
      </Anim>

      <Place x={516} y={186} s={1.05}>
        <Worm seed={40} />
      </Place>

      <Place x={150} y={340} s={2.2}>
        <Pip mood="focused" arms="point" glasses look={1.5} seed={50}>
          <Anim className="s-rp0-tool" origin={[22, -41]}>
            <Magnifier x={60} y={-60} r={12} angle={135} tone="amber" seed={51} />
          </Anim>
        </Pip>
      </Place>
    </Scene>
  )
}
