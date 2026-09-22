import { INK, PAPER, PAPER_SHADE, TEXT_LINE, TONES } from './palette.js'
import { Anim, Ink, Oval } from './prims.jsx'
import { ellipsePath, handEllipse, handLine, handPoly, polyPath, r1 } from './sketch.js'

/**
 * The recurring characters of the blog's drawings.
 *
 * Pip is a sheet of paper with a folded corner, the same sheet that sits in
 * the Fiberarticle logo, doing what a student does: reading, worrying,
 * writing, cheering. The bookworm reads.
 *
 * Every character is drawn at its own origin: (0, 0) is the ground point
 * between its feet. Put it somewhere with <Place x y s flip>. Its parts carry
 * class names a scene can animate (listed on each one), and each part already
 * has its pivot set, so `rotate()` swings an arm from the shoulder and a leg
 * from the hip.
 */

const cls = (...names) => names.filter(Boolean).join(' ')

/* Arm poses: shoulder, elbow, hand. Shoulders sit on the body's sides. */
const ARMS = {
  down: { l: [[-22, -40], [-29, -31], [-31, -22]], r: [[22, -40], [29, -31], [31, -22]] },
  up: { l: [[-22, -42], [-31, -54], [-33, -66]], r: [[22, -42], [31, -54], [33, -66]] },
  wave: { l: [[-22, -40], [-29, -31], [-31, -22]], r: [[22, -42], [32, -51], [37, -63]] },
  hold: { l: [[-22, -39], [-18, -29], [-8, -27]], r: [[22, -39], [18, -29], [8, -27]] },
  carry: { l: [[-22, -46], [-28, -60], [-16, -73]], r: [[22, -46], [28, -60], [16, -73]] },
  point: { l: [[-22, -40], [-29, -31], [-31, -22]], r: [[22, -41], [34, -44], [46, -47]] },
  think: { l: [[-22, -39], [-17, -29], [-8, -28]], r: [[22, -40], [18, -30], [9, -34]] },
  hips: { l: [[-22, -39], [-32, -33], [-23, -26]], r: [[22, -39], [32, -33], [23, -26]] },
  write: { l: [[-22, -40], [-29, -31], [-31, -22]], r: [[22, -39], [30, -28], [24, -18]] },
  shrug: { l: [[-22, -40], [-32, -40], [-37, -50]], r: [[22, -40], [32, -40], [37, -50]] },
}

function Arm({ side, pose, seed }) {
  const [shoulder, elbow, hand] = (ARMS[pose] || ARMS.down)[side]
  const d =
    `M${r1(shoulder[0])} ${r1(shoulder[1])}` +
    `Q${r1(elbow[0])} ${r1(elbow[1])} ${r1(hand[0])} ${r1(hand[1])}`
  return (
    <Anim className={`pip-arm-${side}`} origin={shoulder}>
      <Ink d={d} w={1.8} />
      <Oval cx={hand[0]} cy={hand[1]} rx={2.9} fill={PAPER} seed={seed} sw={1.5} />
    </Anim>
  )
}

function Mouth({ mood, seed }) {
  switch (mood) {
    case 'grin':
      return (
        <g>
          <path d="M-6 -36Q-1 -27.5 4 -36Z" fill="#9d4636" />
          <path d="M-3.4 -32.2Q-1 -30 1.4 -32.2Q-1 -33.6 -3.4 -32.2Z" fill="#ef8fa8" />
          <Ink d="M-6.4 -36.2Q-1 -35.4 4.4 -36.2Q-1 -27 -6.4 -36.2Z" w={1.5} />
        </g>
      )
    case 'worried':
      return <Ink d="M-6 -33.5Q-4 -36 -1.5 -34Q1 -32 3.5 -34.5" w={1.6} />
    case 'surprised':
      return (
        <g>
          <path d={ellipsePath(-1, -33.5, 2.4, 3)} fill={INK} />
          <Ink d={handEllipse(-1, -33.5, 2.4, 3, { seed, amp: 0.4 })} w={1.2} />
        </g>
      )
    case 'focused':
      return <Ink d={handLine(-5, -34.5, 3, -34.8, seed, 0.2)} w={1.7} />
    case 'sad':
      return <Ink d="M-5 -32Q-1 -36.5 3 -32" w={1.7} />
    case 'sleepy':
      return <Ink d="M-3 -33.5Q-1 -32 1 -33.5" w={1.5} />
    case 'happy':
    case 'proud':
    default:
      return <Ink d="M-5.5 -36Q-1 -30.5 3.5 -36" w={1.7} />
  }
}

function Eyes({ mood, look, delay }) {
  if (mood === 'sleepy' || mood === 'proud') {
    const closed =
      mood === 'proud'
        ? `M${-11 + look} -43Q${-8 + look} -47.5 ${-5 + look} -43M${3 + look} -43Q${6 + look} -47.5 ${9 + look} -43`
        : `M${-11 + look} -44Q${-8 + look} -41.5 ${-5 + look} -44M${3 + look} -44Q${6 + look} -41.5 ${9 + look} -44`
    return <Ink d={closed} w={1.6} />
  }
  return (
    <Anim className="pip-eyes" origin={[-1, -44]} style={{ animationDelay: delay }}>
      <path d={ellipsePath(-8 + look, -44, 2.3, 3)} fill={INK} />
      <path d={ellipsePath(6 + look, -44, 2.3, 3)} fill={INK} />
      <circle cx={-7.2 + look} cy={-45.2} r={0.8} fill="#fffaf0" />
      <circle cx={6.8 + look} cy={-45.2} r={0.8} fill="#fffaf0" />
    </Anim>
  )
}

const BROWS = {
  worried: 'M-11.5 -49.5Q-8.5 -51.5 -5 -51.8M3 -51.8Q6.5 -51.5 9.5 -49.5',
  surprised: 'M-11.5 -52Q-8 -54.5 -4.5 -53M2.5 -53Q6 -54.5 9.5 -52',
  focused: 'M-11.5 -50.6Q-8.2 -51.2 -5 -50.2M3 -50.2Q6.2 -51.2 9.5 -50.6',
  sad: 'M-11.5 -49Q-8.5 -50.5 -5 -52M3 -52Q6.5 -50.5 9.5 -49',
}

/**
 * Pip, the paper student.
 *
 *   mood    happy | grin | proud | worried | surprised | focused | sad | sleepy
 *   arms    down | up | wave | hold | carry | point | think | hips | write | shrug
 *   tone    paper | amber | pink | green | blue | red  (the colour of the sheet)
 *   look    eye offset, -2 (left) to 2 (right)
 *   glasses round reading glasses
 *   cap     'grad' for a graduation cap
 *
 * Animatable parts: .pip-body (all of Pip, legs included; pivots at the
 * feet, for hops, bobs and leans), .pip-arm-l and .pip-arm-r (pivot at the
 * shoulder), .pip-leg-l and .pip-leg-r (pivot at the hip) and .pip-eyes
 * (blinks every two seconds by itself while the drawing is on screen).
 * Children are drawn inside .pip-body, in Pip's own units, so anything Pip
 * holds moves with Pip; to swing a held thing with an arm, give it the arm's
 * animation and the same shoulder pivot.
 */
export function Pip({
  mood = 'happy',
  arms = 'down',
  tone = 'paper',
  look = 0,
  glasses = false,
  cap = null,
  blush = true,
  lines = true,
  seed = 3,
  className,
  children,
}) {
  const body = [
    [-22, -68],
    [10, -68],
    [22, -56],
    [22, -12],
    [-22, -12],
  ]
  const fold = [
    [10, -68],
    [10, -56],
    [22, -56],
  ]
  const fill = tone === 'paper' ? PAPER : `url(#fill-${tone})`
  const brows = BROWS[mood]

  return (
    <g className={cls('pip', className)}>
      {/* The legs live inside the body group, so a hop or a lean moves the
          whole of Pip and never parts the sheet from its feet. */}
      <Anim className="pip-body" origin={[0, 0]}>
        <Anim className="pip-leg-l" origin={[-8, -12]}>
          <Ink d={handLine(-8, -13, -9.5, -2, seed + 20, 0.3)} w={1.8} />
          <Oval cx={-12} cy={-0.6} rx={5} ry={2.5} fill={PAPER} seed={seed + 21} sw={1.5} />
        </Anim>
        <Anim className="pip-leg-r" origin={[8, -12]}>
          <Ink d={handLine(8, -13, 9.5, -2, seed + 22, 0.3)} w={1.8} />
          <Oval cx={12} cy={-0.6} rx={5} ry={2.5} fill={PAPER} seed={seed + 23} sw={1.5} />
        </Anim>

        <path d={polyPath(body)} fill={fill} />
        {/* A strip of shading down the right edge gives the sheet its depth. */}
        <path d={polyPath([[15.5, -56], [22, -56], [22, -12], [15.5, -12]])} fill="url(#ink-hatch-light)" />
        <path d={polyPath(fold)} fill={PAPER_SHADE} />
        <path d={polyPath(fold)} fill="url(#ink-hatch-light)" />
        <Ink d={handPoly(body, { seed, amp: 0.7, closed: true })} w={1.9} />
        <Ink d={handLine(10, -68, 10, -56, seed + 9, 0.3) + handLine(10, -56, 22, -56, seed + 10, 0.3)} w={1.4} />

        {lines ? (
          <Ink
            d={handLine(-14, -24, 13, -24, seed + 11, 0.4) + handLine(-14, -18.5, 5, -18.5, seed + 12, 0.4)}
            c={tone === 'paper' ? TEXT_LINE : TONES[tone]?.deep || TEXT_LINE}
            w={1.6}
            o={tone === 'paper' ? 1 : 0.55}
          />
        ) : null}

        {blush ? (
          <g opacity="0.9">
            <path d={ellipsePath(-15.5 + look * 0.4, -36.5, 3.6, 2.3)} fill="url(#fill-pink)" />
            <path d={ellipsePath(13.5 + look * 0.4, -36.5, 3.6, 2.3)} fill="url(#fill-pink)" />
          </g>
        ) : null}

        <Eyes mood={mood} look={look} delay={`${-(((seed * 37) % 19) / 10)}s`} />
        {brows ? <Ink d={brows} w={1.4} /> : null}
        <Mouth mood={mood} seed={seed + 30} />

        {glasses ? (
          <g>
            <Ink d={handEllipse(-8 + look, -44, 5.4, 5, { seed: seed + 40, amp: 0.4 })} w={1.4} />
            <Ink d={handEllipse(6 + look, -44, 5.4, 5, { seed: seed + 41, amp: 0.4 })} w={1.4} />
            <Ink d={`M${-2.6 + look} -44.6Q${-1 + look} -46.2 ${0.6 + look} -44.6`} w={1.3} />
          </g>
        ) : null}

        {cap === 'grad' ? (
          <g>
            <path d="M-9 -70Q1 -64 12 -70L11 -64Q1 -60 -8 -64Z" fill={INK} />
            <path d={polyPath([[-19, -72], [1, -79], [22, -72], [1, -66]])} fill={INK} />
            <Ink d={handPoly([[-19, -72], [1, -79], [22, -72], [1, -66]], { seed: seed + 50, amp: 0.4, closed: true })} w={1.4} />
            <Ink d="M1 -72.5Q12 -72 15.5 -69.5L16 -61" c={TONES.amber.ink} w={1.6} />
            <circle cx={16} cy={-60} r={1.8} fill={TONES.amber.ink} />
          </g>
        ) : null}

        <Arm side="l" pose={arms} seed={seed + 60} />
        <Arm side="r" pose={arms} seed={seed + 61} />

        {children}
      </Anim>
    </g>
  )
}

/**
 * The bookworm: a green worm in round glasses, head on the right, about 60
 * units long, resting on y = 0. Its segments carry .worm-seg and a --i index
 * so a scene can ripple them one after another.
 */
export function Worm({ seed = 9, className, mood = 'happy' }) {
  const segs = [
    { x: -44, r: 5.5 },
    { x: -35, r: 6.5 },
    { x: -25, r: 7.2 },
    { x: -14.5, r: 7.8 },
  ]
  return (
    <g className={cls('worm', className)}>
      {segs.map((seg, i) => (
        <g key={i} className="worm-seg" style={{ '--i': i }}>
          <path d={ellipsePath(seg.x, -seg.r, seg.r, seg.r)} fill="url(#fill-green)" />
          <Ink d={handEllipse(seg.x, -seg.r, seg.r, seg.r, { seed: seed + i, amp: 0.5 })} w={1.4} />
        </g>
      ))}
      <g className="worm-head">
        <path d={ellipsePath(0, -11, 11, 10.5)} fill="url(#fill-green)" />
        <Ink d={handEllipse(0, -11, 11, 10.5, { seed: seed + 9, amp: 0.5 })} w={1.6} />
        <Ink d={handEllipse(-3.5, -13, 3.6, 3.4, { seed: seed + 10, amp: 0.3 }) + handEllipse(5, -13, 3.6, 3.4, { seed: seed + 11, amp: 0.3 })} w={1.2} />
        <Ink d="M0 -13.4Q0.8 -14.6 1.5 -13.4" w={1.1} />
        <circle cx={-3.2} cy={-12.8} r={1.1} fill={INK} />
        <circle cx={5.3} cy={-12.8} r={1.1} fill={INK} />
        <Ink d={mood === 'surprised' ? 'M0 -5.5m-1.6 0a1.6 2 0 1 0 3.2 0a1.6 2 0 1 0 -3.2 0' : 'M-3 -6.5Q0.5 -3.5 4 -6.5'} w={1.4} />
        <Ink d="M-2 -21Q-4 -26 -1 -27.5M2.5 -21Q3.5 -26.5 7 -26.5" w={1.2} />
      </g>
    </g>
  )
}
