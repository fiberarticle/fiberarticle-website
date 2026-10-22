import {
  Anim,
  Arrow,
  Blob,
  Box,
  Chai,
  Chart,
  Crate,
  Cross,
  Desk,
  Envelope,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Oval,
  PAPER,
  Pencil,
  Pip,
  Place,
  PushPin,
  Scale,
  Scene,
  Scissors,
  Shadow,
  Sheet,
  Speech,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6 }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} />
}

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

/* A strip of blot with dark bands. `smudge` blurs one band. Anchor: top-left. */
function Blot({ x, y, seed, bands = 4, smudge = -1, clean = -1 }) {
  return (
    <g>
      <Box x={x} y={y} w={bands * 34 + 16} h={46} fill={TONES.grey.tint} seed={seed} sw={1.7} />
      {Array.from({ length: bands }, (_, i) => {
        const cx = x + 25 + i * 34
        if (i === smudge) {
          return <Oval key={i} cx={cx} cy={y + 23} rx={14} ry={9} fill={TONES.grey.mid} stroke={TONES.grey.ink} seed={seed + i + 1} sw={1} />
        }
        return <Oval key={i} cx={cx} cy={y + 23} rx={13} ry={4.5} fill={i === clean ? TONES.red.ink : INK} stroke={null} seed={seed + i + 1} />
      })}
    </g>
  )
}

/* ------------------------------------------------------------------
   1. The three acts at the core, and honest error kept outside.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-rmc1-card { animation: s-rmc1-lift 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 2.5s - 7.5s); }
@keyframes s-rmc1-lift {
  0%, 30%, 100% { transform: translateY(0); }
  10%, 22% { transform: translateY(-12px); }
}
`

const ACTS = [
  { word: 'fabrication', hint: 'making it up', x: 60 },
  { word: 'falsification', hint: 'bending it', x: 300 },
  { word: 'plagiarism', hint: 'taking credit', x: 540 },
]

export function MeaningScene() {
  return (
    <Scene w={800} h={290} top={20} css={meaningCss} className="s-rmc1" label="Three red cards stand side by side: fabrication with a made up number, falsification with a bar chart whose bar is bent, and plagiarism with one page copied onto another; below them a blue dotted box says honest error is not misconduct">
      {ACTS.map((act, i) => (
        <Place key={act.word} x={0} y={0}>
          <Anim className="s-rmc1-card" style={{ '--i': i }}>
            <Box x={act.x} y={40} w={200} h={170} r={8} fill={TONES.red.tint} seed={110 + i} sw={2} double />
            <Hand x={act.x + 100} y={72} size={24} anchor="middle" weight={700}>
              {act.word}
            </Hand>
            <Hand x={act.x + 100} y={196} size={17} anchor="middle" c={INK_SOFT}>
              {act.hint}
            </Hand>
          </Anim>
        </Place>
      ))}

      <Sheet x={110} y={86} w={70} h={86} tone="paper" lines={0} fold={12} seed={120} />
      <Type x={120} y={124} size={16}>
        0.81
      </Type>
      <Type x={120} y={150} size={16} c={TONES.red.ink} weight={700}>
        0.80?
      </Type>
      <Pencil x={184} y={150} length={70} angle={-40} tone="amber" seed={121} />

      <Chart x={340} y={176} w={120} h={80} bars={[0.5, 0.62, 0.95, 0.7]} tone="blue" seed={130} />
      <Arrow from={[440, 98]} to={[421, 110]} bend={0.3} seed={131} c={TONES.red.ink} w={1.8} head={8} />

      <Sheet x={570} y={90} w={56} h={74} tone="paper" lines={5} fold={10} seed={140} />
      <Sheet x={654} y={100} w={56} h={74} tone="pink" lines={5} fold={10} seed={140} />
      <Arrow from={[624, 128]} to={[652, 134]} bend={-0.3} seed={141} c={INK_SOFT} w={1.6} head={8} />

      <Box x={250} y={238} w={300} h={40} r={8} fill={TONES.blue.tint} seed={150} sw={1.6} />
      <Hand x={400} y={265} size={19} anchor="middle">
        honest error: not misconduct
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Fabrication: two real plates in the notebook, a third invented.
   ------------------------------------------------------------------ */

const fabricationCss = `
.s-rmc2-pen { animation: s-rmc2-write 3s ease-in-out infinite; }
.s-rmc2-kunal .pip-body { animation: s-rmc2-shake 3s ease-in-out infinite; }
@keyframes s-rmc2-write {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(10px, -3px); }
  50% { transform: translate(20px, 0); }
  75% { transform: translate(10px, 3px); }
}
@keyframes s-rmc2-shake {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-3deg); }
  60% { transform: rotate(3deg); }
}
`

export function FabricationScene() {
  const floor = 296
  return (
    <Scene w={800} h={290} top={20} css={fabricationCss} className="s-rmc2" label="A spoilt culture plate with fungus sits beside an open lab notebook listing plate 1 at 0.82 and plate 2 at 0.79, while a pencil writes an invented 0.80 for plate 3 that is crossed out in red; a worried paper character shakes its head">
      <Plate x={60} y={150} seed={200} spoilt />
      <Hand x={113} y={140} size={18} anchor="middle" c={TONES.green.deep}>
        fungus
      </Hand>

      <Sheet x={250} y={40} w={290} h={220} tone="paper" lines={0} fold={24} seed={210} sw={2} />
      <Hand x={274} y={84} size={22} weight={700}>
        cell survival
      </Hand>
      <Ink d={handLine(272, 96, 500, 96, 211, 0.3)} w={1.4} />
      <Type x={276} y={130} size={19}>
        plate 1
      </Type>
      <Type x={430} y={130} size={19}>
        0.82
      </Type>
      <Type x={276} y={166} size={19}>
        plate 2
      </Type>
      <Type x={430} y={166} size={19}>
        0.79
      </Type>
      <Type x={276} y={202} size={19}>
        plate 3
      </Type>
      <Hand x={430} y={204} size={24} c={TONES.red.ink} weight={700}>
        0.80
      </Hand>
      <Cross x={452} y={196} s={1.6} w={3} seed={212} />
      <Hand x={276} y={242} size={17} c={INK_SOFT}>
        never read
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-rmc2-pen">
          <Pencil x={486} y={204} length={110} angle={-38} tone="red" seed={213} />
        </Anim>
      </Place>

      <Floor y={floor} x1={580} x2={780} seed={214} />
      <Shadow x={690} y={floor + 3} rx={32} ry={4} />
      <Place x={690} y={floor} s={1.6} flip>
        <g className="s-rmc2-kunal">
          <Pip mood="worried" arms="down" tone="amber" glasses look={1.4} seed={220} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Falsification: an odd reading erased, a clean band pasted in.
   ------------------------------------------------------------------ */

const falsificationCss = `
.s-rmc3-rub { animation: s-rmc3-rub 1.6s ease-in-out infinite; }
.s-rmc3-band { animation: s-rmc3-move 5s ease-in-out infinite; }
.s-rmc3 .blade-a { animation: s-rmc3-snip 1.6s ease-in-out infinite; }
@keyframes s-rmc3-rub {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(12px, -4px); }
}
@keyframes s-rmc3-move {
  0%, 15% { transform: translate(0, 0); }
  55%, 85% { transform: translate(0, -78px); }
  100% { transform: translate(0, 0); }
}
@keyframes s-rmc3-snip {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-14deg); }
}
`

export function FalsificationScene() {
  return (
    <Scene w={800} h={290} top={20} css={falsificationCss} className="s-rmc3" label="On the left a bar chart has one short bar being rubbed out by a pencil eraser, labelled drop the odd one; on the right a clean band cut from an old blot moves up to replace a smudged band in a new blot, labelled paste a clean band; both carry a red cross">
      <Chart x={70} y={230} w={220} h={150} bars={[0.62, 0.7, 0.66, 0.24]} tone="blue" seed={300} />
      <Place x={0} y={0}>
        <Anim className="s-rmc3-rub">
          <Pencil x={200} y={112} length={118} angle={58} tone="amber" seed={303} />
        </Anim>
      </Place>
      <Hand x={180} y={268} size={20} anchor="middle" weight={700}>
        drop the odd one?
      </Hand>
      <Cross x={300} y={262} s={1.2} w={2.6} seed={304} />

      <Hand x={600} y={58} size={18} anchor="middle" c={INK_SOFT}>
        new blot
      </Hand>
      <Blot x={522} y={70} seed={310} smudge={2} />
      <Hand x={600} y={226} size={18} anchor="middle" c={INK_SOFT}>
        old blot, other experiment
      </Hand>
      <Blot x={522} y={150} seed={320} />
      <Place x={0} y={0}>
        <Anim className="s-rmc3-band">
          <Box x={597} y={162} w={36} h={22} fill="none" stroke={TONES.red.ink} seed={330} sw={1.8} />
        </Anim>
      </Place>
      <Scissors x={730} y={170} s={0.8} angle={-20} seed={331} />
      <Hand x={600} y={268} size={20} anchor="middle" weight={700}>
        paste a clean band?
      </Hand>
      <Cross x={730} y={262} s={1.2} w={2.6} seed={332} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The other notes on the board: beyond fabrication and falsification.
   ------------------------------------------------------------------ */

const otherCss = `
.s-rmc4-note { animation: s-rmc4-swing 4s ease-in-out infinite; animation-delay: calc(var(--i) * -0.8s); }
@keyframes s-rmc4-swing {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}
`

const NOTES = [
  { text: ['copied', 'words'], tone: 'pink', x: 80, y: 60 },
  { text: ['gift', 'author'], tone: 'amber', x: 210, y: 140 },
  { text: ['same paper', 'twice'], tone: 'blue', x: 330, y: 56 },
  { text: ['hidden', 'interest'], tone: 'green', x: 460, y: 140 },
  { text: ['leaked', 'review'], tone: 'red', x: 580, y: 60 },
]

export function OtherScene() {
  return (
    <Scene w={800} h={290} top={20} css={otherCss} className="s-rmc4" label="A cork board holds five pinned notes that sway gently: copied words, gift author, same paper twice, hidden interest and leaked review">
      <Box x={50} y={36} w={700} h={240} r={8} fill="url(#fill-brown)" seed={400} sw={2.2} double />
      {NOTES.map((n, i) => (
        <Place key={n.text.join(' ')} x={0} y={0}>
          <Anim className="s-rmc4-note" origin={[n.x + 60, n.y + 8]} style={{ '--i': i }}>
            <Sticky x={n.x} y={n.y} w={120} h={92} tone={n.tone} lines={0} seed={410 + i} />
            <Hand x={n.x + 60} y={n.y + 46} size={20} anchor="middle" weight={700}>
              {n.text[0]}
            </Hand>
            <Hand x={n.x + 60} y={n.y + 72} size={20} anchor="middle" weight={700}>
              {n.text[1]}
            </Hand>
            <PushPin x={n.x + 60} y={n.y + 10} tone="red" seed={420 + i} />
          </Anim>
        </Place>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The grey zone between clean practice and misconduct.
   ------------------------------------------------------------------ */

const greyCss = `
.s-rmc5-walker { animation: s-rmc5-slide 6s ease-in-out infinite; }
@keyframes s-rmc5-slide {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(110px); }
}
`

export function GreyScene() {
  const ground = 200
  return (
    <Scene w={800} h={290} top={20} css={greyCss} className="s-rmc5" label="A long band runs from a green zone marked clean practice, through a grey zone marked with p-hacking, HARKing, selective reporting and salami slicing, to a red zone marked misconduct; a paper character slides back and forth into the grey">
      <Box x={40} y={ground} w={220} h={40} fill={TONES.green.tint} seed={500} sw={1.8} />
      <Box x={260} y={ground} w={300} h={40} fill={TONES.grey.mid} seed={501} sw={1.8} />
      <Box x={560} y={ground} w={200} h={40} fill={TONES.red.mid} seed={502} sw={1.8} />
      <Hand x={150} y={ground + 28} size={20} anchor="middle" weight={700}>
        clean practice
      </Hand>
      <Hand x={410} y={ground + 28} size={20} anchor="middle" weight={700}>
        grey zone
      </Hand>
      <Hand x={660} y={ground + 28} size={20} anchor="middle" weight={700}>
        misconduct
      </Hand>

      <Hand x={330} y={70} size={19} anchor="middle" c={INK_SOFT}>
        p-hacking
      </Hand>
      <Hand x={490} y={70} size={19} anchor="middle" c={INK_SOFT}>
        HARKing
      </Hand>
      <Hand x={330} y={110} size={19} anchor="middle" c={INK_SOFT}>
        selective reporting
      </Hand>
      <Hand x={490} y={110} size={19} anchor="middle" c={INK_SOFT}>
        salami slicing
      </Hand>
      <Arrow from={[410, 122]} to={[410, 160]} bend={0} seed={510} c={INK_SOFT} w={1.5} head={8} />

      <Arrow from={[120, 272]} to={[700, 272]} bend={0} seed={511} c={INK_SOFT} w={1.8} />
      <Hand x={410} y={298} size={17} anchor="middle" c={INK_SOFT}>
        a slippery slope
      </Hand>

      <Place x={190} y={ground}>
        <Anim className="s-rmc5-walker">
          <Place x={0} y={0} s={1.3}>
            <Pip mood="surprised" arms="shrug" tone="amber" glasses look={1.2} seed={520} />
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Honest error against misconduct: intent tips the scale.
   ------------------------------------------------------------------ */

const errorCss = `
.s-rmc6 .scale-beam { animation: s-rmc6-rock 5s ease-in-out infinite; }
.s-rmc6-think .pip-body { animation: s-rmc6-tilt 5s ease-in-out infinite; }
@keyframes s-rmc6-rock {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}
@keyframes s-rmc6-tilt {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function ErrorScene() {
  const floor = 290
  return (
    <Scene w={800} h={290} top={20} css={errorCss} className="s-rmc6" label="A balance scale holds a sheet marked oops in the left pan and a sheet with a red cross in the right pan, under the word intent; honest error is written on the left and misconduct on the right, while a paper character in glasses thinks">
      <Hand x={400} y={64} size={26} anchor="middle" weight={700} c={TONES.amber.deep}>
        intent?
      </Hand>
      <Scale
        x={400}
        y={floor}
        s={1.4}
        seed={600}
        left={
          <g>
            <Sheet x={272} y={148} w={40} h={48} tone="blue" lines={0} fold={8} seed={601} />
            <Hand x={292} y={180} size={14} anchor="middle" weight={700}>
              oops
            </Hand>
          </g>
        }
        right={
          <g>
            <Sheet x={488} y={148} w={40} h={48} tone="red" lines={0} fold={8} seed={602} />
            <Cross x={508} y={174} s={0.9} w={2.4} seed={603} />
          </g>
        }
      />
      <Hand x={190} y={150} size={22} anchor="middle" weight={700} c={TONES.blue.deep}>
        honest error
      </Hand>
      <Hand x={620} y={150} size={22} anchor="middle" weight={700} c={TONES.red.deep}>
        misconduct
      </Hand>
      <Floor y={floor} x1={60} x2={740} seed={604} />
      <Shadow x={110} y={floor + 3} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.4}>
        <g className="s-rmc6-think">
          <Pip mood="focused" arms="think" tone="amber" glasses look={1.6} seed={610} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. In India: a complaint goes to the DAIP, then the IAIP.
   ------------------------------------------------------------------ */

const consequenceCss = `
.s-rmc7-letter { animation: s-rmc7-travel 7s ease-in-out infinite; }
@keyframes s-rmc7-travel {
  0%, 10% { transform: translateX(0); opacity: 1; }
  40%, 48% { transform: translateX(190px); opacity: 1; }
  75%, 82% { transform: translateX(380px); opacity: 1; }
  92% { transform: translateX(380px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
`

export function ConsequenceScene() {
  return (
    <Scene w={800} h={290} top={20} css={consequenceCss} className="s-rmc7" label="A complaint letter travels from the left to a box labelled DAIP, which investigates, then to a box labelled IAIP, which decides; at the end a red stamp reads PENALTY, and beneath the row a journal paper carries a RETRACTED stamp">
      <Place x={0} y={0}>
        <Anim className="s-rmc7-letter">
          <Envelope x={46} y={70} w={84} h={56} seed={700} />
        </Anim>
      </Place>
      <Hand x={88} y={150} size={18} anchor="middle" c={INK_SOFT}>
        complaint
      </Hand>

      <Arrow from={[146, 98]} to={[220, 98]} bend={0} seed={701} c={INK_SOFT} w={1.7} />
      <Box x={230} y={60} w={130} h={76} r={8} fill={TONES.amber.tint} seed={702} sw={2} />
      <Hand x={295} y={106} size={26} anchor="middle" weight={700}>
        DAIP
      </Hand>
      <Hand x={295} y={160} size={17} anchor="middle" c={INK_SOFT}>
        investigates
      </Hand>

      <Arrow from={[370, 98]} to={[440, 98]} bend={0} seed={703} c={INK_SOFT} w={1.7} />
      <Box x={450} y={60} w={130} h={76} r={8} fill={TONES.blue.tint} seed={704} sw={2} />
      <Hand x={515} y={106} size={26} anchor="middle" weight={700}>
        IAIP
      </Hand>
      <Hand x={515} y={160} size={17} anchor="middle" c={INK_SOFT}>
        decides
      </Hand>

      <Arrow from={[590, 98]} to={[630, 98]} bend={0} seed={705} c={INK_SOFT} w={1.7} />
      <StampMark x={700} y={98} w={120} h={44} text="PENALTY" size={19} tone="red" rotate={-8} bg={PAPER} seed={706} />

      <Sheet x={330} y={190} w={140} h={90} tone="paper" lines={0} fold={14} seed={710} />
      <Lines x={344} y={218} rows={[100, 84, 96, 70]} gap={13} seed={711} />
      <StampMark x={400} y={240} w={118} h={34} text="RETRACTED" size={15} tone="red" rotate={-10} bg={PAPER} seed={712} />
      <Hand x={250} y={250} size={17} anchor="end" c={INK_SOFT}>
        and the journal
      </Hand>
      <Hand x={250} y={272} size={17} anchor="end" c={INK_SOFT}>
        acts on its own
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Protect yourself: a dated notebook, raw data, and telling the guide.
   ------------------------------------------------------------------ */

const protectCss = `
.s-rmc8-kunal .pip-arm-r { animation: s-rmc8-write 1.4s ease-in-out infinite; }
.s-rmc8-guide .pip-body { animation: s-rmc8-nod 3s ease-in-out infinite; }
@keyframes s-rmc8-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg); }
}
@keyframes s-rmc8-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function ProtectScene() {
  const desk = 226
  return (
    <Scene w={800} h={290} top={20} css={protectCss} className="s-rmc8" label="On a desk, a lab notebook reads day 12, plate 3 contaminated, discarded, with a tick, beside a box labelled raw data and a glass of chai; a paper character writes in the notebook while its guide, in glasses, says thank you for telling me">
      <Desk y={desk} x1={40} x2={560} seed={800} />
      <Sheet x={180} y={66} w={210} h={160} tone="paper" lines={0} fold={20} seed={801} sw={2} />
      <Hand x={198} y={106} size={20} weight={700}>
        day 12
      </Hand>
      <Hand x={198} y={136} size={18}>
        plate 3 contaminated
      </Hand>
      <Hand x={198} y={162} size={18}>
        discarded, redo
      </Hand>
      <Tick x={360} y={190} s={1.3} />
      <Lines x={198} y={190} rows={[110, 90]} gap={13} seed={802} />

      <Crate x={420} y={150} w={110} h={76} label="raw data" seed={803} />
      <Chai x={160} y={desk} s={1} seed={804} />

      <Shadow x={96} y={293} rx={32} ry={4} />
      <Place x={96} y={290} s={1.5}>
        <g className="s-rmc8-kunal">
          <Pip mood="focused" arms="write" tone="amber" glasses look={1.4} seed={810} />
        </g>
      </Place>

      <Speech x={570} y={40} w={200} h={70} tx={680} ty={140} seed={820}>
        <Hand x={670} y={70} size={18} anchor="middle">
          thank you for
        </Hand>
        <Hand x={670} y={94} size={18} anchor="middle">
          telling me
        </Hand>
      </Speech>
      <Floor y={290} x1={30} x2={780} seed={821} />
      <Shadow x={690} y={293} rx={32} ry={4} />
      <Place x={690} y={290} s={1.6} flip>
        <g className="s-rmc8-guide">
          <Pip mood="happy" arms="hold" tone="blue" glasses look={1.4} seed={830} />
        </g>
      </Place>
    </Scene>
  )
}
