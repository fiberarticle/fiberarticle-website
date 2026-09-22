import {
  Anim,
  Arrow,
  Cloud,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Magnifier,
  Pip,
  Place,
  Scene,
  Sheet,
  Shadow,
  Sun,
  TONES,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/**
 * The washing line of plagiarism: six sheets pegged out in the breeze, each
 * one a different kind. Pip walks the line with a magnifying glass, stops at
 * the far end with a start, turns round and walks back.
 */

const css = `
.s-tp0-sheet { animation: s-tp0-sway 5s ease-in-out infinite; }
.s-tp0-walker { animation: s-tp0-walk 14s ease-in-out infinite; }
.s-tp0 .pip-leg-l { animation: s-tp0-step 0.5s ease-in-out infinite alternate; }
.s-tp0 .pip-leg-r { animation: s-tp0-step 0.5s ease-in-out infinite alternate-reverse; }
.s-tp0-alert { animation: s-tp0-alert 14s ease-in-out infinite; }
.s-tp0-cloud { animation: s-tp0-drift 18s ease-in-out infinite; }

@keyframes s-tp0-sway {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(2.6deg); }
  70% { transform: rotate(-2.2deg); }
}
@keyframes s-tp0-walk {
  0%, 2% { transform: translateX(0) scaleX(1); }
  44% { transform: translateX(211px) scaleX(1); }
  52% { transform: translateX(211px) scaleX(-1); }
  94% { transform: translateX(0) scaleX(-1); }
  100% { transform: translateX(0) scaleX(1); }
}
@keyframes s-tp0-step {
  from { transform: rotate(-14deg); }
  to { transform: rotate(14deg); }
}
@keyframes s-tp0-alert {
  0%, 40% { opacity: 0; transform: translateY(6px) scale(0.6); }
  44% { opacity: 1; transform: translateY(-4px) scale(1.15); }
  47%, 53% { opacity: 1; transform: translateY(0) scale(1); }
  57%, 100% { opacity: 0; transform: translateY(6px) scale(0.6); }
}
@keyframes s-tp0-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(26px); }
}
`

/* Where each sheet hangs: x along the line and the y the line sags to there. */
const LINE = { x1: 49, x2: 751, y: 64, sag: 96 }
const lineY = (x) => {
  const t = (x - LINE.x1) / (LINE.x2 - LINE.x1)
  return LINE.y + LINE.sag * t * (1 - t)
}

function Peg({ x }) {
  return (
    <g>
      <rect x={x - 3} y={-6} width={6} height={15} rx={1.5} fill="url(#wood)" />
      <Ink d={handPoly([[x - 3, -6], [x + 3, -6], [x + 3, 9], [x - 3, 9]], { seed: x + 90, amp: 0.2, closed: true })} w={1.2} />
    </g>
  )
}

/* The mark that tells each sheet apart, drawn in the sheet's own units. */
function Mark({ kind }) {
  switch (kind) {
    case 'copy':
      return <Sheet x={-26} y={40} w={34} h={30} lines={2} fold={7} seed={301} sw={1.3} />
    case 'mosaic':
      return (
        <g>
          <path d="M-33 40h66v9h-66Z" fill="url(#fill-amber)" />
          <path d="M-33 51h66v9h-66Z" fill="url(#fill-blue)" />
          <path d="M-33 62h66v9h-66Z" fill="url(#fill-pink)" />
          <Ink d={handLine(-33, 50, 33, 50, 311, 0.4) + handLine(-33, 61, 33, 61, 312, 0.4)} w={1.2} />
        </g>
      )
    case 'reworded':
      return (
        <g>
          <path d="M0 52C-6 44 -16 44 -22 50C-26 54 -30 55 -33 52C-30 60 -18 62 -9 58C-5 56 -2 55 0 55C2 55 5 56 9 58C18 62 30 60 33 52C30 55 26 54 22 50C16 44 6 44 0 52Z" fill={INK} />
        </g>
      )
    case 'reused':
      return <Arrow from={[16, 70]} to={[18, 46]} bend={-0.9} seed={321} w={2} head={8} c={TONES.blue.deep} />
    case 'source':
      return (
        <g>
          <Ink d="M22 40L30 50" w={1.2} c={INK_SOFT} />
          <path d={polyPath([[20, 48], [40, 48], [44, 56], [40, 64], [20, 64]])} fill="url(#fill-amber)" />
          <Ink d={handPoly([[20, 48], [40, 48], [44, 56], [40, 64], [20, 64]], { seed: 331, amp: 0.3, closed: true })} w={1.3} />
          <Hand x={30} y={62} size={15} anchor="middle" weight={700}>
            ?
          </Hand>
        </g>
      )
    case 'oops':
    default:
      return (
        <g>
          <path d="M-4 50C2 42 12 48 10 54C16 52 20 60 13 63C18 70 8 74 4 68C0 76 -12 72 -9 65C-18 64 -16 55 -9 55C-14 48 -8 44 -4 50Z" fill={INK} opacity="0.85" />
          <circle cx={18} cy={46} r={2.2} fill={INK} opacity="0.8" />
          <circle cx={-18} cy={72} r={1.6} fill={INK} opacity="0.8" />
        </g>
      )
  }
}

const SHEETS = [
  { x: 108, kind: 'copy', label: 'copied', tone: 'paper', delay: 0 },
  { x: 222, kind: 'mosaic', label: 'patched', tone: 'paper', delay: -1.2 },
  { x: 336, kind: 'reworded', label: 'reworded', tone: 'paper', delay: -2.1 },
  { x: 450, kind: 'reused', label: 'reused', tone: 'paper', delay: -0.6 },
  { x: 564, kind: 'source', label: 'mis-cited', tone: 'paper', delay: -3 },
  { x: 678, kind: 'oops', label: 'oops', tone: 'paper', delay: -1.7 },
]

export default function Hero() {
  return (
    <Scene
      w={800}
      h={420}
      css={css}
      className="s-tp0"
      label="Six sheets hang on a washing line, each a different kind of plagiarism: copied, patched, reworded, reused, mis-cited and an accidental ink blot. A paper character walks under them with a magnifying glass."
    >
      <Place x={170} y={34}>
        <Anim className="s-tp0-cloud">
          <Cloud x={0} y={0} s={0.72} seed={7} />
        </Anim>
      </Place>
      <Sun x={600} y={30} r={15} seed={8} />

      <Ground y={372} bottom={420} seed={12} tufts={11} pebbles={5} grit={34} />

      {[44, 756].map((x, i) => (
        <g key={x}>
          <rect x={x - 5} y={54} width={10} height={320} fill="url(#wood)" />
          <Ink d={handPoly([[x - 5, 54], [x + 5, 54], [x + 5, 374], [x - 5, 374]], { seed: 20 + i, amp: 0.5, closed: true })} w={1.7} />
          <Ink d={handLine(x - 9, 54, x + 9, 54, 24 + i, 0.3)} w={2.2} />
        </g>
      ))}

      <Ink d={`M${LINE.x1} ${LINE.y}Q400 ${LINE.y + LINE.sag / 2} ${LINE.x2} ${LINE.y}`} w={1.5} c={INK_SOFT} />

      {SHEETS.map((sheet, i) => (
        <Place key={sheet.x} x={sheet.x} y={lineY(sheet.x)}>
          <Anim className="s-tp0-sheet" origin={[0, 0]} style={{ animationDelay: `${sheet.delay}s` }}>
            <Sheet x={-41} y={2} w={82} h={100} lines={2} fold={12} seed={200 + i * 13} tone={sheet.tone} />
            <Mark kind={sheet.kind} />
            <Hand x={0} y={95} size={16} anchor="middle" weight={700} c={INK_SOFT}>
              {sheet.label}
            </Hand>
            <Peg x={-24} />
            <Peg x={24} />
          </Anim>
        </Place>
      ))}

      <Place x={190} y={372} s={1.75}>
        <Anim className="s-tp0-walker" origin={[0, 0]}>
          <Shadow x={0} y={1.5} rx={22} ry={2.8} />
          <Pip mood="focused" arms="wave" look={1.5}>
            <Magnifier x={48} y={-88} r={14} angle={120} seed={41} />
            {/* Only there for the moment Pip spots something, so it is
                hidden in the still picture. */}
            <Anim className="s-tp0-alert" origin={[-18, -84]} style={{ opacity: 0 }}>
              <path d="M-21 -100L-15 -100L-16.4 -84L-19.6 -84Z" fill={TONES.red.ink} />
              <circle cx={-18} cy={-78} r={2.2} fill={TONES.red.ink} />
            </Anim>
          </Pip>
        </Anim>
      </Place>
    </Scene>
  )
}
