import {
  Anim,
  Arrow,
  Burst,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Shelf,
  Stamp,
  StampMark,
  TEXT_LINE,
  TONES,
  handLine,
} from '../../ink/index.js'

/**
 * The paper stays, but it is marked. A research paper is pinned to the
 * wall with RETRACTED stamped across it, and the rubber stamp keeps
 * coming down on it. Nandini, below, looks up in surprise. Dr. Varghese
 * stands by the short retraction notice pinned beside it and points to it:
 * the notice says why.
 */

const FLOOR = 372

const css = `
.s-ret0-stamp { animation: s-ret0-press 6s ease-in-out infinite; }
.s-ret0-burst { animation: s-ret0-burst 6s ease-in-out infinite; }
.s-ret0-nandini .pip-body { animation: s-ret0-jump 6s ease-in-out infinite; }
.s-ret0-guide .pip-body { animation: s-ret0-nod 3s ease-in-out infinite; }
@keyframes s-ret0-press {
  0%, 30%, 100% { transform: translateY(0); }
  42%, 48% { transform: translateY(128px); }
  60% { transform: translateY(0); }
}
@keyframes s-ret0-burst {
  0%, 44%, 100% { opacity: 0; }
  50%, 70% { opacity: 1; }
}
@keyframes s-ret0-jump {
  0%, 44%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  56% { transform: translateY(0); }
}
@keyframes s-ret0-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export default function Hero() {
  const px = 316
  const py = 84
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-ret0"
      label="A research paper pinned to the wall has RETRACTED stamped across it while a rubber stamp presses down again; a paper character below looks up in surprise, and a second character in glasses points to the short retraction notice pinned beside it"
    >
      <Shelf x={34} y={70} w={200} rows={2} rowH={78} seed={11} />

      <Sheet x={px} y={py} w={176} h={226} tone="paper" lines={0} fold={22} seed={12} sw={2} />
      <PushPin x={px + 80} y={py + 10} tone="blue" seed={13} />
      <Hand x={px + 16} y={py + 52} size={18} weight={700}>
        blood sugar study
      </Hand>
      <Ink
        d={[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => handLine(px + 18, py + 74 + i * 15, px + 18 + [138, 120, 132, 96, 140, 110, 128, 84, 116][i], py + 74 + i * 15, 20 + i * 3, 0.35)).join('')}
        c={TEXT_LINE}
        w={1.6}
      />
      <StampMark x={px + 88} y={py + 140} w={150} h={46} text="RETRACTED" size={21} tone="red" rotate={-12} bg={PAPER} seed={14} />

      <Place x={0} y={0}>
        <Anim className="s-ret0-stamp">
          <Stamp x={px + 88} y={py - 2} s={1} tone="red" seed={15} />
        </Anim>
      </Place>

      <Sheet x={548} y={112} w={96} h={112} tone="pink" lines={0} fold={14} seed={16} />
      <PushPin x={590} y={120} tone="red" seed={17} />
      <Hand x={596} y={160} size={20} anchor="middle" weight={700}>
        notice
      </Hand>
      <Ink d={handLine(562, 178, 628, 178, 18, 0.3) + handLine(562, 190, 620, 190, 19, 0.3) + handLine(562, 202, 610, 202, 20, 0.3)} c={TONES.pink.deep} w={1.5} o={0.6} />
      <Hand x={596} y={250} size={18} anchor="middle" c={INK_SOFT}>
        it says why
      </Hand>
      <Arrow from={[546, 168]} to={[498, 196]} bend={0.2} seed={21} c={INK_SOFT} w={1.5} dash="5 6" />

      <Floor y={FLOOR} x1={20} x2={780} seed={22} />

      <Shadow x={222} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={222} y={FLOOR} s={1.7}>
        <g className="s-ret0-nandini">
          <Pip mood="surprised" arms="hold" tone="pink" look={1.8} seed={30}>
            <Sheet x={-12} y={-30} w={24} h={26} tone="paper" lines={2} fold={6} seed={31} sw={1.3} />
          </Pip>
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-ret0-burst" style={{ opacity: 0 }}>
          <Burst x={228} y={238} r={24} length={12} seed={32} />
        </Anim>
      </Place>

      <Shadow x={706} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={706} y={FLOOR} s={1.7} flip>
        <g className="s-ret0-guide">
          <Pip mood="focused" arms="point" tone="blue" glasses look={1.4} seed={40} />
        </g>
      </Place>
    </Scene>
  )
}
