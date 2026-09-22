import {
  Anim,
  Box,
  Bulb,
  Chai,
  Clock,
  Desk,
  Ink,
  Lamp,
  OpenBook,
  PAPER_SHADE,
  Pile,
  Pip,
  Place,
  Scene,
  Shadow,
  Shelf,
  Sparkle,
  Sticky,
  TEXT_LINE,
} from '../ink/index.js'

/**
 * The reading desk at the top of the blog index. Pip reads at a desk beside
 * a pile of books and two piles of papers, turning a page every five
 * seconds; now and then an idea lights up overhead. The clock on the wall
 * keeps turning.
 *
 * The page turn is two copies of a page laid over the open book: the right
 * page folds in towards the spine, then the left one unfolds away from it.
 * Both are hidden in the still picture, where the book simply lies open.
 */

/* The open book Pip holds, in Pip's units: spine at x 0, bottom at y -18. */
const BOOK = { y: -18, half: 20, h: 20.8 }
const right =
  `M0 ${BOOK.y}Q${BOOK.half * 0.5} ${BOOK.y - 7} ${BOOK.half} ${BOOK.y - 3}` +
  `L${BOOK.half} ${BOOK.y - BOOK.h}Q${BOOK.half * 0.5} ${BOOK.y - BOOK.h - 7} 0 ${BOOK.y - BOOK.h + 5}Z`
const left =
  `M0 ${BOOK.y}Q${-BOOK.half * 0.5} ${BOOK.y - 7} ${-BOOK.half} ${BOOK.y - 3}` +
  `L${-BOOK.half} ${BOOK.y - BOOK.h}Q${-BOOK.half * 0.5} ${BOOK.y - BOOK.h - 7} 0 ${BOOK.y - BOOK.h + 5}Z`

const css = `
.s-desk .pip-eyes { animation: s-desk-blink 2s ease-in-out infinite; }
.s-desk-turn-r { animation: s-desk-fold 5s ease-in-out infinite; }
.s-desk-turn-l { animation: s-desk-unfold 5s ease-in-out infinite; }
.s-desk-idea { animation: s-desk-idea 12s ease-in-out infinite; }
.s-desk-spark { animation: s-desk-spark 12s ease-in-out infinite; }
.s-desk .clock-min { animation: s-desk-turn 12s linear infinite; }
.s-desk .clock-hour { animation: s-desk-turn 144s linear infinite; }

@keyframes s-desk-blink {
  0%, 86%, 100% { transform: scaleY(1); }
  93% { transform: scaleY(0.1); }
}
@keyframes s-desk-fold {
  0% { transform: scaleX(1); opacity: 0; }
  2% { transform: scaleX(1); opacity: 1; }
  13% { transform: scaleX(0.04); opacity: 1; }
  13.5%, 100% { transform: scaleX(1); opacity: 0; }
}
@keyframes s-desk-unfold {
  0%, 13% { transform: scaleX(0.04); opacity: 0; }
  13.5% { transform: scaleX(0.04); opacity: 1; }
  24% { transform: scaleX(1); opacity: 1; }
  28%, 100% { transform: scaleX(1); opacity: 0; }
}
@keyframes s-desk-idea {
  0%, 34% { opacity: 0; transform: scale(0.2); }
  40% { opacity: 1; transform: scale(1.15); }
  44%, 74% { opacity: 1; transform: scale(1); }
  82%, 100% { opacity: 0; transform: scale(0.6); }
}
@keyframes s-desk-spark {
  0%, 38% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  44% { opacity: 1; transform: scale(1.1) rotate(20deg); }
  70% { opacity: 1; transform: scale(0.9) rotate(45deg); }
  80%, 100% { opacity: 0; transform: scale(0.3) rotate(60deg); }
}
@keyframes s-desk-turn {
  to { transform: rotate(360deg); }
}
`

/* A page mid-turn: shaded paper with a few lines of print. */
function TurningPage({ d, className, lines }) {
  return (
    <Anim className={className} origin={[0, BOOK.y - 10]} style={{ opacity: 0 }}>
      <path d={d} fill={PAPER_SHADE} />
      <Ink d={lines} c={TEXT_LINE} w={1.3} />
      <Ink d={d} w={1.6} />
    </Anim>
  )
}

export default function DeskScene() {
  return (
    <Scene
      w={800}
      h={372}
      css={css}
      className="s-desk"
      label="A paper character in round glasses reads a book at a desk beside a pile of books and two piles of papers, turning a page every few seconds"
    >
      <Shelf x={36} y={14} w={244} rows={1} rowH={92} seed={14} />
      <Place x={548} y={34}>
        <g transform="rotate(-5)">
          <Sticky x={0} y={0} w={76} h={70} tone="pink" lines={3} seed={9} />
        </g>
      </Place>
      <Clock x={714} y={78} r={36} seed={21} />

      <Desk y={340} x1={0} x2={800} depth={32} seed={33} />

      <Box x={30} y={306} w={144} h={34} r={3} fill="url(#fill-blue)" seed={61} />
      <Box x={44} y={274} w={120} h={32} r={3} fill="url(#fill-green)" seed={62} />
      <Box x={26} y={244} w={132} h={30} r={3} fill="url(#fill-amber)" seed={63} />

      {/* Two piles of papers already read, between the books and Pip. */}
      <Pile x={250} y={340} w={96} count={9} seed={64} />
      <Pile x={354} y={340} w={80} count={5} seed={65} />

      <Shadow x={474} y={342} rx={66} ry={7} />
      <Place x={474} y={340} s={2.5}>
        <Pip mood="focused" arms="hold" glasses look={-0.5}>
          <OpenBook x={0} y={BOOK.y} w={BOOK.half * 2} tone="red" lines={3} seed={71} />
          <TurningPage
            className="s-desk-turn-r"
            d={right}
            lines={`M4 ${BOOK.y - 15}Q10 ${BOOK.y - 17.5} 15 ${BOOK.y - 14.5}M4 ${BOOK.y - 10}Q10 ${BOOK.y - 12.5} 14 ${BOOK.y - 9.5}`}
          />
          <TurningPage
            className="s-desk-turn-l"
            d={left}
            lines={`M-4 ${BOOK.y - 15}Q-10 ${BOOK.y - 17.5} -15 ${BOOK.y - 14.5}M-4 ${BOOK.y - 10}Q-10 ${BOOK.y - 12.5} -14 ${BOOK.y - 9.5}`}
          />
        </Pip>
      </Place>

      <Place x={474} y={116}>
        <Anim className="s-desk-idea" spin style={{ opacity: 0 }}>
          <Bulb x={0} y={0} s={1.1} seed={80} />
        </Anim>
      </Place>
      <Place x={540} y={94}>
        <Anim className="s-desk-spark" spin style={{ opacity: 0 }}>
          <Sparkle x={0} y={0} s={12} />
        </Anim>
      </Place>
      <Place x={408} y={150}>
        <Anim className="s-desk-spark" spin style={{ opacity: 0 }}>
          <Sparkle x={0} y={0} s={9} fill="#f5a9c7" />
        </Anim>
      </Place>

      <Chai x={616} y={340} s={1.3} seed={90} />
      <Place x={734} y={340} s={1.42} flip>
        <Lamp x={0} y={0} tone="green" seed={95} />
      </Place>
    </Scene>
  )
}
