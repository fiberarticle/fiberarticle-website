import {
  Anim,
  Floor,
  Hand,
  INK,
  Ink,
  PAPER,
  Pile,
  Pip,
  Place,
  Plant,
  Scene,
  Shadow,
  TONES,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * The blueprint of a paper on an easel. Coloured blocks for each part
 * (title, abstract, introduction, methods, results, discussion) slide in
 * from the pile of notes one after another until the page is complete,
 * while Pip points at the plan. Then the page clears and it builds again.
 */

const BLOCKS = [
  { label: 'title', y: 46, h: 24, tone: 'amber' },
  { label: 'abstract', y: 76, h: 28, tone: 'pink' },
  { label: 'introduction', y: 110, h: 42, tone: 'blue' },
  { label: 'methods', y: 158, h: 34, tone: 'green' },
  { label: 'results', y: 198, h: 34, tone: 'amber' },
  { label: 'discussion', y: 238, h: 40, tone: 'red' },
]

const css = `
${BLOCKS.map((_, i) => {
  const start = 6 + i * 11
  return `.s-sp0-block-${i} { animation: s-sp0-block-${i} 12s ease-in-out infinite; }
@keyframes s-sp0-block-${i} {
  0%, ${start}% { transform: translateX(-230px); opacity: 0; }
  ${start + 3}% { opacity: 1; }
  ${start + 8}%, 88% { transform: translateX(0); opacity: 1; }
  94%, 100% { transform: translateX(0); opacity: 0; }
}`
}).join('\n')}
.s-sp0-guide .pip-body { animation: s-sp0-nod 12s ease-in-out infinite; }
@keyframes s-sp0-nod {
  0%, 72%, 100% { transform: translateY(0); }
  76% { transform: translateY(-8px); }
  80% { transform: translateY(0); }
}
`

export default function Hero() {
  return (
    <Scene
      w={800}
      h={318}
      top={18}
      css={css}
      className="s-sp0"
      label="A research paper laid out as a blueprint on an easel, with coloured blocks for the title, abstract, introduction, methods, results and discussion sliding into place while a paper character points at it"
    >
      <Floor y={320} x1={30} x2={770} seed={3} />
      <Plant x={86} y={320} s={1.2} seed={4} />
      <Pile x={188} y={320} w={96} count={7} seed={5} />

      <Ink d={handLine(306, 320, 332, 30, 6, 0.4) + handLine(494, 320, 468, 30, 7, 0.4) + handLine(400, 320, 400, 290, 8, 0.3)} w={2.6} c={TONES.brown.deep} />
      <path d="M288 30h224v262h-224Z" fill={PAPER} />
      <Ink d={handPoly([[288, 30], [512, 30], [512, 292], [288, 292]], { seed: 9, amp: 0.7, closed: true })} w={2} />
      <path d="M378 22h44v14h-44Z" fill={TONES.grey.mid} />
      <Ink d={handPoly([[378, 22], [422, 22], [422, 36], [378, 36]], { seed: 10, amp: 0.3, closed: true })} w={1.4} />

      {BLOCKS.map((block, i) => (
        <g key={block.label}>
          <Ink d={handPoly([[304, block.y], [496, block.y], [496, block.y + block.h], [304, block.y + block.h]], { seed: 20 + i, amp: 0.4, closed: true })} dash="4 5" w={1.2} c={TONES.grey.ink} />
          <Anim className={`s-sp0-block-${i}`}>
            <path d={`M304 ${block.y}h192v${block.h}h-192Z`} fill={`url(#fill-${block.tone})`} />
            <Ink d={handPoly([[304, block.y], [496, block.y], [496, block.y + block.h], [304, block.y + block.h]], { seed: 30 + i, amp: 0.4, closed: true })} w={1.6} />
            <Hand x={400} y={block.y + block.h / 2 + 7} size={21} anchor="middle" weight={700} c={INK}>
              {block.label}
            </Hand>
          </Anim>
        </g>
      ))}

      <Shadow x={634} y={322} rx={50} ry={6} />
      <Place x={634} y={320} s={2.1} flip>
        <g className="s-sp0-guide">
          <Pip mood="happy" arms="point" glasses look={1.4} seed={41} />
        </g>
      </Place>
    </Scene>
  )
}
