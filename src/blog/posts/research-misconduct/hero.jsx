import {
  Anim,
  Blob,
  Box,
  Cross,
  Desk,
  Hand,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Speech,
  TEXT_LINE,
  TONES,
  Window,
  handLine,
} from '../../ink/index.js'

/**
 * One plate went wrong. Two culture plates sit on the bench with their
 * wells coloured evenly; the third has fungus growing in it and a big
 * question mark. Kunal stands on the left holding his lab notebook, and a
 * senior on the right offers the easy way out in a speech bubble that is
 * crossed out in red.
 */

const DESK = 272

const css = `
.s-rmc0-kunal .pip-body { animation: s-rmc0-sway 5s ease-in-out infinite; }
.s-rmc0-senior .pip-body { animation: s-rmc0-lean 5s ease-in-out infinite; }
.s-rmc0-bubble { animation: s-rmc0-bob 5s ease-in-out infinite; }
.s-rmc0-cross { animation: s-rmc0-mark 5s ease-in-out infinite; }
.s-rmc0-ask { animation: s-rmc0-pulse 2.5s ease-in-out infinite; }
@keyframes s-rmc0-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
@keyframes s-rmc0-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
@keyframes s-rmc0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
@keyframes s-rmc0-mark {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
@keyframes s-rmc0-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
`

/* A culture plate from above: a tray of round wells. Anchor: top-left. */
function Plate({ x, y, seed, spoilt = false }) {
  const wells = []
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) wells.push([x + 18 + c * 22, y + 16 + r * 20, r * 4 + c])
  }
  return (
    <g>
      <Box x={x} y={y} w={106} h={72} r={8} fill={PAPER} seed={seed} sw={1.9} />
      {wells.map(([wx, wy, i]) => (
        <Oval key={i} cx={wx} cy={wy} rx={7} fill={spoilt && i % 3 !== 1 ? 'url(#fill-green)' : 'url(#fill-pink)'} seed={seed + i + 1} sw={1.2} />
      ))}
      {spoilt ? (
        <Blob
          points={[[x + 30, y + 30], [x + 52, y + 18], [x + 76, y + 30], [x + 70, y + 52], [x + 44, y + 58], [x + 26, y + 46]]}
          fill={TONES.green.mid}
          stroke={TONES.green.deep}
          seed={seed + 20}
          sw={1.4}
        />
      ) : null}
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-rmc0"
      label="Two culture plates on a lab bench have evenly coloured wells while the third has fungus growing in it and a question mark above it; a paper character in glasses holds a lab notebook, and a second character offers a speech bubble saying just make it up, crossed out in red"
    >
      <Window x={40} y={40} w={140} h={110} seed={10} />

      <Desk y={DESK} x1={150} x2={650} seed={11} />
      <Plate x={190} y={DESK - 76} seed={20} />
      <Plate x={318} y={DESK - 76} seed={40} />
      <Plate x={446} y={DESK - 76} seed={60} spoilt />
      <Hand x={243} y={DESK - 88} size={20} anchor="middle" weight={700}>
        plate 1
      </Hand>
      <Hand x={371} y={DESK - 88} size={20} anchor="middle" weight={700}>
        plate 2
      </Hand>
      <Hand x={499} y={DESK - 88} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
        plate 3
      </Hand>
      <Place x={499} y={150}>
        <Anim className="s-rmc0-ask" origin={[0, -20]}>
          <Hand x={0} y={0} size={56} anchor="middle" weight={700} c={TONES.amber.ink}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-rmc0-bubble">
          <Speech x={540} y={50} w={230} h={70} tx={700} ty={196} seed={80}>
            <Hand x={655} y={94} size={26} anchor="middle" weight={700}>
              just make it up
            </Hand>
          </Speech>
          <Place x={655} y={85}>
            <Anim className="s-rmc0-cross" spin>
              <Cross x={0} y={0} s={3.4} w={3.6} seed={81} />
            </Anim>
          </Place>
        </Anim>
      </Place>

      <Shadow x={90} y={DESK + 82} rx={40} ry={5} />
      <Place x={90} y={DESK + 80} s={1.7}>
        <g className="s-rmc0-kunal">
          <Pip mood="worried" arms="hold" tone="amber" glasses look={1.6} seed={90}>
            <Sheet x={-13} y={-32} w={26} h={28} tone="paper" lines={0} fold={6} seed={91} sw={1.3} />
            <Ink d={handLine(-9, -22, 7, -22, 92, 0.2) + handLine(-9, -16, 4, -16, 93, 0.2)} c={TEXT_LINE} w={1.3} />
          </Pip>
        </g>
      </Place>
      <Hand x={90} y={DESK + 110} size={18} anchor="middle" c={INK_SOFT}>
        Kunal
      </Hand>

      <Shadow x={712} y={DESK + 82} rx={40} ry={5} />
      <Place x={712} y={DESK + 80} s={1.7} flip>
        <g className="s-rmc0-senior">
          <Pip mood="happy" arms="shrug" tone="grey" look={1.6} seed={100} />
        </g>
      </Place>
      <Hand x={712} y={DESK + 110} size={18} anchor="middle" c={INK_SOFT}>
        a senior
      </Hand>
    </Scene>
  )
}
