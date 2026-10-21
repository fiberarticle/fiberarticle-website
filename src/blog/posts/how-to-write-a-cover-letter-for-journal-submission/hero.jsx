import {
  Anim,
  Arrow,
  Box,
  Chai,
  Clock,
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
  Window,
  handLine,
} from '../../ink/index.js'

/**
 * The letter goes first. Tanvi stands by her desk, where the cover letter
 * sits on top of her manuscript. The letter lifts off the pile, sails across
 * the room and lands in the hands of the editor, who reads it before the
 * paper, while the clock on the wall keeps running.
 */

const FLOOR = 372
const DESK = 290

const css = `
.s-cv0-letter { animation: s-cv0-fly 9s ease-in-out infinite; }
.s-cv0-tanvi .pip-body { animation: s-cv0-bob 3s ease-in-out infinite; }
.s-cv0-editor .pip-body { animation: s-cv0-lean 9s ease-in-out infinite; }
.s-cv0 .clock-min { animation: s-cv0-tick 6s linear infinite; }
.s-cv0 .clock-hour { animation: s-cv0-tick 72s linear infinite; }
@keyframes s-cv0-fly {
  0%, 12% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
  34% { transform: translate(180px, -90px) rotate(-12deg) scale(0.85); opacity: 1; }
  54%, 84% { transform: translate(364px, 154px) rotate(3deg) scale(0.6); opacity: 1; }
  88% { transform: translate(364px, 154px) rotate(3deg) scale(0.6); opacity: 0; }
  89% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0; }
  94%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
}
@keyframes s-cv0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes s-cv0-lean {
  0%, 52%, 90%, 100% { transform: rotate(0deg); }
  60%, 82% { transform: rotate(-4deg); }
}
@keyframes s-cv0-tick {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`

/* The cover letter, drawn from its own top-left corner. */
function Letter() {
  return (
    <g>
      <Sheet x={0} y={0} w={74} h={74} tone="pink" lines={0} fold={14} seed={21} />
      <Hand x={10} y={30} size={15} weight={700}>
        dear dr.
      </Hand>
      <Ink
        d={handLine(10, 42, 62, 42, 22, 0.3) + handLine(10, 52, 56, 52, 23, 0.3) + handLine(10, 62, 46, 62, 24, 0.3)}
        c={TONES.pink.deep}
        w={1.5}
        o={0.6}
      />
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-cv0"
      label="A paper character stands by her desk where a pink cover letter sits on top of a tall manuscript; the letter flies across the room into the hands of an editor in glasses below a wall clock"
    >
      <Window x={40} y={52} w={130} h={104} seed={11} />
      <Clock x={724} y={78} r={30} seed={12} />

      <Box x={596} y={128} w={110} h={38} r={6} fill={TONES.amber.mid} seed={13} sw={2} />
      <Hand x={651} y={155} size={24} anchor="middle" weight={700}>
        editor
      </Hand>

      <Floor y={FLOOR} x1={20} x2={780} seed={14} />

      <Ink d={handLine(166, DESK + 20, 168, FLOOR, 15, 0.4) + handLine(454, DESK + 20, 452, FLOOR, 16, 0.4)} w={3} c={TONES.brown.deep} />
      <Desk y={DESK} x1={150} x2={470} depth={20} seed={17} />
      <Pile x={300} y={DESK} w={124} count={10} seed={18} />
      <Hand x={372} y={DESK - 26} size={18} c={INK_SOFT}>
        manuscript
      </Hand>
      <Chai x={196} y={DESK} s={0.9} seed={19} />

      <Arrow from={[352, 150]} to={[612, 298]} bend={-0.25} seed={20} c={INK_SOFT} w={1.5} dash="5 7" />

      <Shadow x={95} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={95} y={FLOOR} s={1.7}>
        <g className="s-cv0-tanvi">
          <Pip mood="happy" arms="point" tone="green" look={1.6} seed={30} />
        </g>
      </Place>

      <Shadow x={650} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={650} y={FLOOR} s={1.7}>
        <g className="s-cv0-editor">
          <Pip mood="focused" arms="hold" tone="blue" glasses look={-1.4} seed={40} />
        </g>
      </Place>

      <Place x={264} y={164}>
        <Anim className="s-cv0-letter">
          <Letter />
        </Anim>
      </Place>
    </Scene>
  )
}
