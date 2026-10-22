import {
  Anim,
  Arrow,
  Box,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sparkle,
  TEXT_LINE,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * Two names that matter on one byline. A paper stands in the middle with
 * four names across its top: Aravind's, first, is coloured in, and the
 * guide's, last, carries the star of the corresponding author. Aravind,
 * on the left, holds his data; Dr. Natarajan, on the right, sends the
 * paper's letter up to the journal and it comes back again.
 */

const FLOOR = 372

const NAMES = [
  { word: 'Aravind', tone: 'pink' },
  { word: 'Keerthana', tone: 'paper' },
  { word: 'Joseph', tone: 'paper' },
  { word: 'Usha *', tone: 'blue' },
]

const css = `
.s-fac0-letter { animation: s-fac0-post 6s ease-in-out infinite; }
.s-fac0-first .pip-body { animation: s-fac0-hop 3s ease-in-out infinite; }
.s-fac0-guide .pip-arm-r { animation: s-fac0-send 6s ease-in-out infinite; }
.s-fac0-spark { animation: s-fac0-glow 3s ease-in-out infinite; }
@keyframes s-fac0-post {
  0%, 12%, 100% { transform: translate(0, 0); }
  42%, 58% { transform: translate(-54px, -150px); }
  88% { transform: translate(0, 0); }
}
@keyframes s-fac0-hop {
  0%, 60%, 100% { transform: translateY(0); }
  70% { transform: translateY(-7px); }
  80% { transform: translateY(0); }
}
@keyframes s-fac0-send {
  0%, 12%, 88%, 100% { transform: rotate(0deg); }
  30%, 60% { transform: rotate(-18deg); }
}
@keyframes s-fac0-glow {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
`

export default function Hero() {
  const sx = 236
  const sy = 58
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-fac0"
      label="A research paper stands between two paper characters with four names across its top: the first name, Aravind, is coloured in and labelled first author, and the last, Usha, carries a star and is labelled corresponding author, while the character in glasses on the right sends an envelope up to a box marked journal"
    >
      <Sheet x={sx} y={sy} w={316} h={262} tone="paper" lines={0} fold={24} seed={11} sw={2} />
      <Hand x={sx + 22} y={sy + 46} size={21} weight={700}>
        mangrove bacteria and plastic
      </Hand>
      {NAMES.map((n, i) => {
        const x = sx + 18 + i * 70
        return (
          <g key={n.word}>
            <Box x={x} y={sy + 64} w={64} h={28} r={6} fill={n.tone === 'paper' ? PAPER : `url(#fill-${n.tone})`} seed={20 + i} sw={1.6} />
            <Hand x={x + 32} y={sy + 84} size={n.word.length > 7 ? 13 : 15} anchor="middle" weight={700}>
              {n.word}
            </Hand>
          </g>
        )
      })}
      <Ink
        d={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => handLine(sx + 22, sy + 120 + i * 14, sx + 22 + [262, 230, 250, 200, 266, 214, 240, 180, 252, 160][i], sy + 120 + i * 14, 30 + i * 3, 0.35)).join('')}
        c={TEXT_LINE}
        w={1.6}
      />
      <Place x={0} y={0}>
        <Anim className="s-fac0-spark">
          <Sparkle x={sx + 18} y={sy + 62} s={9} />
        </Anim>
      </Place>

      <Hand x={118} y={96} size={22} anchor="middle" weight={700} c={TONES.pink.deep}>
        first author
      </Hand>
      <Arrow from={[150, 110]} to={[sx + 30, sy + 98]} bend={0.25} seed={40} c={INK_SOFT} w={1.6} />

      <Box x={572} y={24} w={150} h={40} r={6} fill={TONES.amber.mid} seed={41} sw={2} />
      <Hand x={647} y={52} size={22} anchor="middle" weight={700}>
        journal
      </Hand>
      <Hand x={730} y={124} size={19} anchor="middle" weight={700} c={TONES.blue.deep}>
        corresponding
      </Hand>
      <Hand x={730} y={146} size={19} anchor="middle" weight={700} c={TONES.blue.deep}>
        author
      </Hand>
      <Arrow from={[676, 156]} to={[sx + 260, sy + 98]} bend={-0.2} seed={42} c={INK_SOFT} w={1.6} />

      <Place x={0} y={0}>
        <Anim className="s-fac0-letter">
          <Envelope x={644} y={224} w={54} h={36} seed={43} />
        </Anim>
      </Place>

      <Floor y={FLOOR} x1={20} x2={780} seed={44} />

      <Shadow x={120} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={120} y={FLOOR} s={1.7}>
        <g className="s-fac0-first">
          <Pip mood="proud" arms="hold" tone="pink" seed={50}>
            <Sheet x={-12} y={-30} w={24} h={26} tone="paper" lines={2} fold={6} seed={51} sw={1.3} />
          </Pip>
        </g>
      </Place>

      <Shadow x={700} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={700} y={FLOOR} s={1.7} flip>
        <g className="s-fac0-guide">
          <Pip mood="happy" arms="wave" tone="blue" glasses look={1.2} seed={60} />
        </g>
      </Place>
    </Scene>
  )
}
