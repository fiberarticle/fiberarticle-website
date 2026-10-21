import {
  Anim,
  Box,
  Desk,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * The last page. Bhavna writes a short page marked acknowledgement on top of
 * her tall thesis, her butterfly net leaning on the desk. Little hearts float
 * up from the page to three labels: guide, funder and family. A butterfly
 * from her fieldwork flutters over the desk.
 */

const FLOOR = 372
const DESK = 286

const css = `
.s-ak0-heart { animation: s-ak0-rise 6s ease-in-out infinite; animation-delay: calc(var(--i) * -2s); }
.s-ak0-fly { animation: s-ak0-path 9s ease-in-out infinite; }
.s-ak0-wing { animation: s-ak0-flap 0.5s ease-in-out infinite alternate; }
.s-ak0-writer .pip-arm-r { animation: s-ak0-write 0.8s ease-in-out infinite alternate; }
@keyframes s-ak0-rise {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-14px); opacity: 0.7; }
}
@keyframes s-ak0-path {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(60px, -30px); }
  50% { transform: translate(120px, 0); }
  75% { transform: translate(60px, 24px); }
}
@keyframes s-ak0-flap {
  from { transform: scaleX(1); }
  to { transform: scaleX(0.4); }
}
@keyframes s-ak0-write {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
`

/* A heart. Anchor: centre. */
export function Heart({ s = 1, tone = 'pink' }) {
  const d = `M0 ${8 * s}C${-14 * s} ${-2 * s} ${-8 * s} ${-14 * s} 0 ${-6 * s}C${8 * s} ${-14 * s} ${14 * s} ${-2 * s} 0 ${8 * s}Z`
  return (
    <g>
      <path d={d} fill={`url(#fill-${tone})`} />
      <Ink d={d} w={1.4} />
    </g>
  )
}

/* A butterfly with wings that flap. Anchor: centre of the body. */
export function Butterfly({ tone = 'amber', className = 's-ak0-wing' }) {
  const wings = 'M0 0C-14 -20 -26 -6 -16 4C-24 12 -10 20 0 4C10 20 24 12 16 4C26 -6 14 -20 0 0Z'
  return (
    <g>
      <g className={className} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <path d={wings} fill={`url(#fill-${tone})`} />
        <Ink d={wings} w={1.3} />
      </g>
      <Ink d="M0 -8V10M0 -8l-4 -7M0 -8l4 -7" w={1.6} />
    </g>
  )
}

const THANKS = [
  { x: 470, label: 'guide', tone: 'blue' },
  { x: 590, label: 'funder', tone: 'green' },
  { x: 710, label: 'family', tone: 'amber' },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-ak0"
      label="A paper character with a butterfly net beside her writes a short page titled acknowledgement on top of a tall thesis, while hearts float up to three labels, guide, funder and family, and a butterfly flutters overhead"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={11} />
      <Ink d={handLine(176, DESK + 18, 178, FLOOR, 12, 0.4) + handLine(424, DESK + 18, 422, FLOOR, 13, 0.4)} w={3} c={TONES.brown.deep} />
      <Desk y={DESK} x1={160} x2={440} depth={18} seed={14} />

      <Pile x={330} y={DESK} w={150} count={18} seed={15} />
      <Hand x={420} y={DESK - 40} size={18} c={INK_SOFT}>
        240 pages
      </Hand>
      <Place x={250} y={DESK - 166} r={-4}>
        <Sheet x={0} y={0} w={164} h={74} tone="pink" lines={0} fold={14} seed={16} />
        <Hand x={12} y={30} size={17} weight={700}>
          acknowledgement
        </Hand>
        <Ink d={handLine(12, 44, 138, 44, 17, 0.3) + handLine(12, 54, 96, 54, 18, 0.3) + handLine(12, 64, 70, 64, 19, 0.3)} c={TONES.pink.deep} w={1.4} o={0.6} />
      </Place>

      {/* The butterfly net, leaning on the desk. */}
      <Ink d={handLine(22, FLOOR, 44, 200, 20, 0.5)} w={2.6} c={TONES.brown.deep} />
      <Ink d="M44 200c-30 -6 -40 -40 -10 -56c26 -10 44 18 26 44c-6 8 -12 12 -16 12" w={1.6} />
      <path d="M44 200c-30 -6 -40 -40 -10 -56c26 -10 44 18 26 44c-6 8 -12 12 -16 12Z" fill="url(#ink-hatch-light)" />

      {THANKS.map((t, i) => (
        <g key={t.label}>
          <Box x={t.x - 46} y={60} w={92} h={34} r={6} fill={`url(#fill-${t.tone})`} seed={30 + i} />
          <Hand x={t.x} y={84} size={20} anchor="middle" weight={700}>
            {t.label}
          </Hand>
          <Place x={t.x} y={128}>
            <Anim className="s-ak0-heart" style={{ '--i': i }}>
              <Heart s={1.3} tone="pink" />
            </Anim>
          </Place>
        </g>
      ))}

      <Place x={560} y={240}>
        <Anim className="s-ak0-fly">
          <Butterfly tone="amber" />
        </Anim>
      </Place>

      <Shadow x={112} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={112} y={FLOOR} s={1.75}>
        <g className="s-ak0-writer">
          <Pip mood="happy" arms="write" tone="amber" look={1.6} seed={40} />
        </g>
      </Place>
    </Scene>
  )
}
