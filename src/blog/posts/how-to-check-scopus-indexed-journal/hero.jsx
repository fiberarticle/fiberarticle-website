import {
  Anim,
  Box,
  Burst,
  Cross,
  Desk,
  Envelope,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Speech,
  StampMark,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/**
 * The email says Scopus; the record decides. Rutuja, on the left, holds
 * the email that promises a Scopus indexed journal. In the middle, the
 * laptop shows the official Scopus record, found by ISSN, with its
 * coverage running to Present and a green tick, while a magnifying glass
 * reads it. On the right, the website the email led to has the same title
 * but is crossed out and stamped FAKE, and Dr. Shaikh points to the record.
 */

const FLOOR = 372

const css = `
.s-sco0-lens { animation: s-sco0-scan 7s ease-in-out infinite; }
.s-sco0-tick { animation: s-sco0-tick 7s ease-in-out infinite; }
.s-sco0-burst { animation: s-sco0-burst 7s ease-in-out infinite; }
.s-sco0-rutuja .pip-body { animation: s-sco0-bob 3.5s ease-in-out infinite; }
.s-sco0-guide .pip-arm-r { animation: s-sco0-point 3.5s ease-in-out infinite; }
@keyframes s-sco0-scan {
  0%, 100% { transform: translate(0, 0); }
  35%, 55% { transform: translate(-150px, 62px); }
  75% { transform: translate(-60px, 66px); }
}
@keyframes s-sco0-tick {
  0%, 30%, 100% { opacity: 0.35; }
  45%, 85% { opacity: 1; }
}
@keyframes s-sco0-burst {
  0%, 40%, 100% { opacity: 0; }
  50%, 70% { opacity: 1; }
}
@keyframes s-sco0-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes s-sco0-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-8deg); }
}
`

export default function Hero() {
  const desk = 300
  const [ix, iy, iw] = laptopScreen(400, desk, 290)
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-sco0"
      label="A paper character holds an email that says Scopus indexed, Q1, publish in 15 days; in the middle a laptop shows the official Scopus record found by ISSN, with coverage to Present and a green tick, while a magnifying glass reads it; on the right a copied journal website is crossed out and stamped FAKE, and a second character in glasses points to the record"
    >
      <Speech x={30} y={64} w={210} h={92} tx={112} ty={196} seed={11} tone="amber">
        <Hand x={135} y={96} size={21} anchor="middle" weight={700}>
          Scopus indexed!
        </Hand>
        <Hand x={135} y={124} size={19} anchor="middle">
          Q1, publish in 15 days
        </Hand>
        <Ink d={handLine(70, 138, 200, 138, 12, 0.3)} c={TONES.amber.deep} w={1.4} o={0.6} />
      </Speech>

      <Desk y={desk} x1={236} x2={566} seed={13} />
      <Laptop x={400} y={desk} w={290} seed={14}>
        <rect x={ix} y={iy} width={iw} height={20} fill={TONES.blue.tint} />
        <Type x={ix + 8} y={iy + 15} size={13} weight={700} c={TONES.blue.deep}>
          Scopus Sources
        </Type>
        <Type x={ix + 8} y={iy + 42} size={12} c={INK}>
          ISSN 2345-6789
        </Type>
        <Ink d={handLine(ix + 8, iy + 56, ix + 150, iy + 56, 15, 0.3)} c={TEXT_LINE} w={1.6} />
        <rect x={ix + 6} y={iy + 66} width={124} height={22} rx={3} fill={TONES.green.tint} />
        <Type x={ix + 10} y={iy + 81} size={11.5} weight={700} c={TONES.green.deep}>
          2004 to Present
        </Type>
        <Ink d={handLine(ix + 8, iy + 102, ix + 130, iy + 102, 16, 0.3)} c={TEXT_LINE} w={1.6} />
        <Place x={0} y={0}>
          <Anim className="s-sco0-tick">
            <Tick x={ix + iw - 20} y={iy + 76} s={1.3} />
          </Anim>
        </Place>
      </Laptop>
      <Place x={0} y={0}>
        <Anim className="s-sco0-lens">
          <Magnifier x={540} y={170} r={20} angle={50} tone="amber" seed={17} />
        </Anim>
      </Place>

      <Box x={584} y={70} w={168} h={150} r={6} fill={PAPER} seed={20} sw={1.9} />
      <rect x={586} y={72} width={164} height={22} fill={TONES.grey.tint} />
      <Ink d={handLine(584, 94, 752, 94, 21, 0.3)} w={1.4} />
      <Type x={596} y={88} size={11} c={INK_SOFT}>
        www.copy-site.co
      </Type>
      <Hand x={600} y={124} size={18} weight={700}>
        same title
      </Hand>
      <Ink d={handLine(600, 142, 724, 142, 22, 0.3) + handLine(600, 156, 704, 156, 23, 0.3) + handLine(600, 170, 716, 170, 24, 0.3)} c={TEXT_LINE} w={1.6} />
      <StampMark x={676} y={186} w={96} h={36} text="FAKE" size={20} tone="red" rotate={-10} bg={PAPER} seed={25} />
      <Cross x={740} y={110} s={1.1} seed={26} />
      <Hand x={668} y={244} size={18} anchor="middle" c={INK_SOFT}>
        not the journal
      </Hand>

      <Floor y={FLOOR} x1={20} x2={780} seed={27} />

      <Shadow x={118} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={118} y={FLOOR} s={1.7}>
        <g className="s-sco0-rutuja">
          <Pip mood="worried" arms="hold" tone="pink" look={1.6} seed={30}>
            <Envelope x={-14} y={-31} w={28} h={17} seed={31} />
          </Pip>
        </g>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-sco0-burst" style={{ opacity: 0 }}>
          <Burst x={124} y={240} r={22} length={11} seed={32} />
        </Anim>
      </Place>

      <Shadow x={680} y={FLOOR + 3} rx={40} ry={5} />
      <Place x={680} y={FLOOR} s={1.7} flip>
        <g className="s-sco0-guide">
          <Pip mood="focused" arms="point" tone="blue" glasses look={1.4} seed={40} />
        </g>
      </Place>
    </Scene>
  )
}
