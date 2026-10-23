import {
  Anim,
  Arrow,
  Box,
  Cross,
  Ground,
  Hand,
  INK_SOFT,
  Ink,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sprout,
  Sun,
  TONES,
  Type,
  handLine,
} from '../../ink/index.js'

/**
 * The thing nobody wrote down. Gauri stands in her soybean plot beside a can
 * of spray the company gave her for free. Across from her, the journal's
 * declaration form: the word "none" is struck out, and under it the free
 * spray and her guide's honorarium are written in. A pencil keeps adding to
 * the list, and a dashed line ties the can to the form.
 */

const GROUND = 332

const css = `
.s-coi0-pencil { animation: s-coi0-write 3s ease-in-out infinite; }
.s-coi0-x { animation: s-coi0-strike 6s ease-in-out infinite; }
.s-coi0-tag { animation: s-coi0-swing 4s ease-in-out infinite; }
.s-coi0-gauri .pip-body { animation: s-coi0-lean 6s ease-in-out infinite; }
@keyframes s-coi0-write {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(14px, 2px) rotate(-4deg); }
  50% { transform: translate(28px, 0) rotate(0deg); }
  75% { transform: translate(14px, -2px) rotate(3deg); }
}
@keyframes s-coi0-strike {
  0%, 40%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
  60% { transform: scale(1); }
}
@keyframes s-coi0-swing {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}
@keyframes s-coi0-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(4deg); }
}
`

/* A spray can for the field. Anchor: bottom centre. */
export function SprayCan({ x, y, s = 1, seed = 1 }) {
  const w = 36 * s
  const h = 74 * s
  return (
    <g>
      <Box x={x - w / 2} y={y - h} w={w} h={h} r={6 * s} fill="url(#fill-green)" seed={seed} sw={1.9} />
      <rect x={x - w / 2 + 4 * s} y={y - h * 0.68} width={w - 8 * s} height={h * 0.36} rx={3} fill={PAPER} />
      <Ink d={handLine(x - w / 2 + 8 * s, y - h * 0.56, x + w / 2 - 8 * s, y - h * 0.56, seed + 2, 0.3) + handLine(x - w / 2 + 8 * s, y - h * 0.44, x + w / 2 - 12 * s, y - h * 0.44, seed + 3, 0.3)} c={TONES.green.deep} w={1.5} />
      <Box x={x - 9 * s} y={y - h - 12 * s} w={18 * s} h={12 * s} r={3} fill={TONES.grey.mid} seed={seed + 4} sw={1.6} />
      <Ink d={handLine(x + 9 * s, y - h - 7 * s, x + 18 * s, y - h - 9 * s, seed + 5, 0.2)} w={2.2} />
    </g>
  )
}

export default function Hero() {
  const fx = 486
  const fy = 46
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-coi0"
      label="A paper character stands in a row of soybean sprouts beside a spray can tagged free, while a journal declaration form across from her has the word none crossed out and a free spray and an honorarium written in below it"
    >
      <Ground y={GROUND} x1={0} x2={800} bottom={404} seed={11} tufts={10} pebbles={6} />
      {[44, 92, 140].map((sx, i) => (
        <Sprout key={sx} x={sx} y={GROUND + 1} s={1.2 + (i % 2) * 0.15} seed={20 + i} />
      ))}

      <Shadow x={290} y={GROUND + 3} rx={26} ry={4} />
      <SprayCan x={290} y={GROUND} s={1.2} seed={30} />
      <Place x={0} y={0}>
        <Anim className="s-coi0-tag" origin={[270, 256]}>
          <Ink d={handLine(270, 256, 258, 266, 33, 0.3)} w={1.3} c={INK_SOFT} />
          <Box x={202} y={262} w={56} h={28} r={5} fill={TONES.amber.mid} seed={34} sw={1.6} />
          <Hand x={230} y={282} size={18} anchor="middle" weight={700}>
            free
          </Hand>
        </Anim>
      </Place>

      <Shadow x={410} y={GROUND + 3} rx={32} ry={4} />
      <Place x={410} y={GROUND} s={1.7}>
        <g className="s-coi0-gauri">
          <Pip mood="worried" arms="think" tone="pink" glasses look={1.6} seed={40} />
        </g>
      </Place>

      <Sun x={110} y={84} r={24} seed={12} />
      <Arrow from={[318, 196]} to={[fx - 8, 222]} bend={-0.22} seed={45} c={INK_SOFT} w={1.5} dash="5 6" />
      <Hand x={414} y={150} size={17} anchor="middle" c={INK_SOFT}>
        declare it
      </Hand>

      <Sheet x={fx} y={fy} w={268} h={262} tone="paper" lines={0} fold={24} seed={50} sw={2.1} />
      <Type x={fx + 22} y={fy + 38} size={14} weight={700}>
        DECLARATION
      </Type>
      <Hand x={fx + 22} y={fy + 70} size={20} weight={700}>
        competing interests:
      </Hand>
      <Box x={fx + 22} y={fy + 84} w={224} h={154} r={6} fill={TONES.pink.tint} seed={51} sw={1.5} />
      <Hand x={fx + 44} y={fy + 118} size={24} c={INK_SOFT}>
        none
      </Hand>
      <Place x={fx + 70} y={fy + 110}>
        <Anim className="s-coi0-x" origin={[0, 0]}>
          <Cross x={0} y={0} s={2.3} w={2.8} seed={52} />
        </Anim>
      </Place>
      <Hand x={fx + 38} y={fy + 156} size={19} weight={700} c={TONES.green.deep}>
        free spray, X Agro
      </Hand>
      <Hand x={fx + 38} y={fy + 186} size={19} weight={700} c={TONES.green.deep}>
        guide: honorarium
      </Hand>
      <Ink d={handLine(fx + 38, fy + 220, fx + 128, fy + 220, 53, 0.4)} c={TONES.green.deep} w={1.6} o={0.6} />

      <Place x={fx + 132} y={fy + 220}>
        <Anim className="s-coi0-pencil">
          <Pencil x={0} y={0} length={86} angle={-16} tone="amber" seed={54} />
        </Anim>
      </Place>
    </Scene>
  )
}
