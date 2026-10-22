import {
  Anim,
  Arrow,
  Book,
  Box,
  Crate,
  Cross,
  Desk,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  Oval,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Spine,
  TONES,
  Tick,
  Type,
  Wave,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* A luggage tag with a DOI on it. Anchor: top-left. */
function Tag({ x, y, w = 150, text, tone = 'amber', size = 15, seed }) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={38} r={7} fill={TONES[tone].tint} seed={seed} sw={1.9} />
      <Oval cx={x + 13} cy={y + 19} rx={4.5} fill={PAPER} seed={seed + 1} sw={1.3} />
      <Type x={x + w / 2 + 9} y={y + 25} size={size} anchor="middle" weight={700}>
        {text}
      </Type>
    </g>
  )
}

/* Two table legs under a desk top. */
function Legs({ x1, x2, top, floor, seed }) {
  return <Ink d={handLine(x1, top, x1 + 2, floor, seed, 0.4) + handLine(x2, top, x2 - 2, floor, seed + 1, 0.4)} w={3} c={TONES.brown.deep} />
}

/* ------------------------------------------------------------------
   1. Three letters, three words.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-doi1-glow { animation: s-doi1-glow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 1s - 6s); }
.s-doi1-thinker .pip-body { animation: s-doi1-bob 3.2s ease-in-out infinite; }
@keyframes s-doi1-glow {
  0%, 15%, 55%, 100% { opacity: 0; }
  25%, 45% { opacity: 1; }
}
@keyframes s-doi1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const LETTERS = [
  { letter: 'D', word: 'digital', tone: 'blue' },
  { letter: 'O', word: 'object', tone: 'green' },
  { letter: 'I', word: 'identifier', tone: 'amber' },
]

export function MeaningScene() {
  return (
    <Scene
      w={800}
      h={290}
      top={20}
      css={meaningCss}
      className="s-doi1"
      label="The letters D, O and I stand in three boxes, with the words digital, object and identifier written under them, while a paper character beside them thinks it over"
    >
      {LETTERS.map((item, i) => {
        const x = 70 + i * 190
        return (
          <g key={item.letter}>
            <rect className="s-doi1-glow" style={{ '--i': i, opacity: 0 }} x={x - 6} y={54} width={152} height={132} rx={10} fill={TONES[item.tone].tint} />
            <Box x={x} y={60} w={140} h={120} r={8} fill={`url(#fill-${item.tone})`} seed={100 + i} sw={2.2} />
            <Hand x={x + 70} y={150} size={84} anchor="middle" weight={700}>
              {item.letter}
            </Hand>
            <Hand x={x + 70} y={226} size={28} anchor="middle" weight={700} c={TONES[item.tone].deep}>
              {item.word}
            </Hand>
          </g>
        )
      })}
      <Ink d={handLine(70, 246, 590, 246, 110, 0.6)} w={1.4} c={INK_SOFT} o={0.6} />
      <Hand x={330} y={278} size={20} anchor="middle" c={INK_SOFT}>
        a permanent name for one piece of research
      </Hand>

      <Shadow x={705} y={290} rx={34} ry={4} />
      <Place x={705} y={288} s={1.6}>
        <g className="s-doi1-thinker">
          <Pip mood="focused" arms="think" tone="amber" look={-1.6} seed={120} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Prefix, slash, suffix.
   ------------------------------------------------------------------ */

const formatCss = `
.s-doi2-glow { animation: s-doi2-glow 6s ease-in-out infinite; animation-delay: calc(var(--i) * 1.5s - 6s); }
.s-doi2-ten { animation: s-doi2-ring 6s ease-in-out infinite; }
@keyframes s-doi2-glow {
  0%, 15%, 55%, 100% { opacity: 0; }
  25%, 45% { opacity: 1; }
}
@keyframes s-doi2-ring {
  0%, 70%, 100% { transform: scale(1); }
  80%, 90% { transform: scale(1.15); }
}
`

export function FormatScene() {
  const top = 100
  return (
    <Scene
      w={800}
      h={270}
      top={30}
      css={formatCss}
      className="s-doi2"
      label="The example DOI 10.1000/182 is written in two boxes split by a slash; the first box is labelled prefix, who registered it, the second is labelled suffix, which item, and the 10 at the start is circled"
    >
      <rect className="s-doi2-glow" style={{ '--i': 0, opacity: 0 }} x={104} y={top - 6} width={292} height={84} rx={10} fill={TONES.blue.tint} />
      <Box x={110} y={top} w={280} h={72} r={8} fill={PAPER} seed={200} sw={2.2} />
      <Type x={250} y={top + 49} size={44} anchor="middle" weight={700}>
        10.1000
      </Type>

      <Hand x={440} y={top + 54} size={64} anchor="middle" weight={700}>
        /
      </Hand>

      <rect className="s-doi2-glow" style={{ '--i': 1, opacity: 0 }} x={484} y={top - 6} width={212} height={84} rx={10} fill={TONES.green.tint} />
      <Box x={490} y={top} w={200} h={72} r={8} fill={PAPER} seed={201} sw={2.2} />
      <Type x={590} y={top + 49} size={44} anchor="middle" weight={700}>
        182
      </Type>

      <Place x={0} y={0}>
        <Anim className="s-doi2-ten" origin={[184, top + 34]}>
          <Oval cx={184} cy={top + 34} rx={34} ry={28} stroke={TONES.red.ink} sw={2} seed={202} />
        </Anim>
      </Place>
      <Arrow from={[124, 52]} to={[166, top + 4]} bend={0.2} seed={203} c={TONES.red.ink} />
      <Hand x={70} y={48} size={20} c={TONES.red.deep}>
        nearly every DOI starts with 10
      </Hand>

      <Ink d={`M110 ${top + 86}Q110 ${top + 98} 130 ${top + 98}L234 ${top + 98}Q246 ${top + 98} 250 ${top + 110}Q254 ${top + 98} 266 ${top + 98}L370 ${top + 98}Q390 ${top + 98} 390 ${top + 86}`} w={1.8} />
      <Hand x={250} y={top + 138} size={24} anchor="middle" weight={700} c={TONES.blue.deep}>
        prefix
      </Hand>
      <Hand x={250} y={top + 164} size={19} anchor="middle" c={INK_SOFT}>
        who registered it
      </Hand>

      <Ink d={`M490 ${top + 86}Q490 ${top + 98} 510 ${top + 98}L574 ${top + 98}Q586 ${top + 98} 590 ${top + 110}Q594 ${top + 98} 606 ${top + 98}L670 ${top + 98}Q690 ${top + 98} 690 ${top + 86}`} w={1.8} />
      <Hand x={590} y={top + 138} size={24} anchor="middle" weight={700} c={TONES.green.deep}>
        suffix
      </Hand>
      <Hand x={590} y={top + 164} size={19} anchor="middle" c={INK_SOFT}>
        which item
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Look at the paper, then ask Crossref.
   ------------------------------------------------------------------ */

const findCss = `
.s-doi3-lens { animation: s-doi3-scan 6s ease-in-out infinite; }
.s-doi3-row { animation: s-doi3-row 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s - 6s); }
@keyframes s-doi3-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-70px, 0); }
}
@keyframes s-doi3-row {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
`

export function FindScene() {
  const floor = 318
  const desk = 252
  const [sx, sy, sw] = laptopScreen(600, desk, 280)
  return (
    <Scene
      w={800}
      h={300}
      top={22}
      css={findCss}
      className="s-doi3"
      label="A magnifying glass moves along the highlighted DOI line on the first page of a paper, while a laptop beside it shows a Crossref search with three results, each with a DOI"
    >
      <Floor y={floor} x1={30} x2={770} seed={301} />

      {/* The first page of a paper, DOI in the header. */}
      <Sheet x={70} y={52} w={210} h={262} lines={0} seed={302} />
      <rect x={82} y={66} width={170} height={20} rx={4} fill={TONES.amber.mid} opacity="0.7" />
      <Type x={88} y={81} size={13} weight={700}>
        https://doi.org/10...
      </Type>
      <path d="M86 104h120v7h-120Z" fill="#2b2521" opacity="0.75" />
      <Ink
        d={[132, 146, 160, 174, 196, 210, 224, 238, 260, 274, 288].map((ly, i) => handLine(86, ly, 86 + (i % 3 === 2 ? 120 : 172), ly, 310 + i, 0.35)).join('')}
        c="#cbbda6"
        w={1.5}
      />

      <Place x={0} y={0}>
        <Anim className="s-doi3-lens">
          <Magnifier x={214} y={76} r={24} angle={40} tone="amber" seed={320} />
        </Anim>
      </Place>

      <Shadow x={380} y={floor + 2} rx={30} ry={4} />
      <Place x={380} y={floor} s={1.45}>
        <Pip mood="happy" arms="point" tone="amber" look={1.6} seed={330} />
      </Place>

      <Legs x1={480} x2={720} top={desk + 20} floor={floor} seed={340} />
      <Desk y={desk} x1={460} x2={740} depth={20} seed={341} />
      <Laptop x={600} y={desk} w={280} seed={342}>
        <Box x={sx + 10} y={sy + 8} w={sw - 20} h={20} r={4} fill={PAPER} seed={343} sw={1.2} />
        <Type x={sx + 18} y={sy + 22} size={11} weight={700}>
          search.crossref.org
        </Type>
        {[0, 1, 2].map((i) => (
          <g key={i} className="s-doi3-row" style={{ '--i': i }}>
            <Ink d={handLine(sx + 14, sy + 44 + i * 22, sx + 112, sy + 44 + i * 22, 350 + i, 0.3)} c={INK_SOFT} w={1.6} />
            <Type x={sx + 122} y={sy + 48 + i * 22} size={11} c={TONES.blue.deep} weight={700}>
              10.xxxx
            </Type>
          </g>
        ))}
      </Laptop>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Three ways to write it, one to keep.
   ------------------------------------------------------------------ */

const citeCss = `
.s-doi4-tick { animation: s-doi4-pop 4s ease-in-out infinite; }
.s-doi4-writer .pip-arm-r { animation: s-doi4-write 0.9s ease-in-out infinite; }
@keyframes s-doi4-pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
}
@keyframes s-doi4-write {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

const FORMS = [
  { text: 'doi:10.1000/182', ok: false },
  { text: 'http://dx.doi.org/10.1000/182', ok: false },
  { text: 'https://doi.org/10.1000/182', ok: true },
]

export function CiteScene() {
  return (
    <Scene
      w={800}
      h={280}
      top={20}
      css={citeCss}
      className="s-doi4"
      label="An index card shows the same DOI written three ways; doi colon and the old dx link are struck through with red crosses, and the full https doi.org link is ticked in green, while a paper character writes beside it"
    >
      <Box x={210} y={40} w={500} h={230} r={6} fill={PAPER} seed={400} sw={2.2} double />
      <Ink d={handLine(226, 82, 694, 82, 401, 0.4)} c={TONES.red.ink} w={1.4} o={0.6} />
      <Hand x={232} y={72} size={22} weight={700}>
        reference 17: the DOI
      </Hand>

      {FORMS.map((form, i) => {
        const y = 128 + i * 52
        return (
          <g key={form.text}>
            <Type x={250} y={y} size={20} weight={700} c={form.ok ? TONES.green.deep : INK_SOFT}>
              {form.text}
            </Type>
            {form.ok ? (
              <Place x={0} y={0}>
                <Anim className="s-doi4-tick" origin={[662, y - 8]}>
                  <Tick x={662} y={y - 6} s={1.3} />
                </Anim>
              </Place>
            ) : (
              <g>
                <Ink d={handLine(244, y - 7, 250 + form.text.length * 12.2, y - 7, 410 + i, 0.6)} c={TONES.red.ink} w={2} />
                <Cross x={662} y={y - 7} s={0.9} seed={420 + i} />
              </g>
            )}
          </g>
        )
      })}

      <Shadow x={110} y={272} rx={32} ry={4} />
      <Place x={110} y={270} s={1.55}>
        <g className="s-doi4-writer">
          <Pip mood="focused" arms="write" tone="amber" look={1.6} seed={430} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. One number for the journal, the book and the paper.
   ------------------------------------------------------------------ */

const compareCss = `
.s-doi5-label { animation: s-doi5-bob 4s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 4s); }
@keyframes s-doi5-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

export function CompareScene() {
  const desk = 236
  return (
    <Scene
      w={800}
      h={290}
      top={10}
      css={compareCss}
      className="s-doi5"
      label="Three things on a desk with labels: a row of journal issues marked ISSN for the whole journal, a single book marked ISBN for one book, and a single paper marked DOI for one paper"
    >
      <Desk y={desk} x1={40} x2={760} depth={22} seed={500} />

      {/* A journal: many issues, one ISSN. */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Spine key={i} x={88 + i * 24} y={desk} w={22} h={110 - (i % 2) * 8} tone="blue" seed={501 + i} />
      ))}
      <Place x={0} y={0}>
        <Anim className="s-doi5-label" style={{ '--i': 0 }}>
          <Box x={92} y={44} w={140} h={48} r={6} fill={TONES.blue.mid} seed={510} sw={2} />
          <Type x={162} y={76} size={24} anchor="middle" weight={700}>
            ISSN
          </Type>
        </Anim>
      </Place>
      <Hand x={160} y={290} size={21} anchor="middle" c={INK_SOFT}>
        the whole journal
      </Hand>

      {/* A book: one ISBN. */}
      <Book x={358} y={desk - 120} w={92} h={120} tone="red" seed={520} />
      <Place x={0} y={0}>
        <Anim className="s-doi5-label" style={{ '--i': 1 }}>
          <Box x={334} y={44} w={140} h={48} r={6} fill={TONES.red.mid} seed={521} sw={2} />
          <Type x={404} y={76} size={24} anchor="middle" weight={700}>
            ISBN
          </Type>
        </Anim>
      </Place>
      <Hand x={404} y={290} size={21} anchor="middle" c={INK_SOFT}>
        one book
      </Hand>

      {/* A paper: one DOI. */}
      <Sheet x={606} y={desk - 120} w={92} h={120} lines={7} title seed={530} />
      <Place x={0} y={0}>
        <Anim className="s-doi5-label" style={{ '--i': 2 }}>
          <Box x={582} y={44} w={140} h={48} r={6} fill={TONES.green.mid} seed={531} sw={2} />
          <Type x={652} y={76} size={24} anchor="middle" weight={700}>
            DOI
          </Type>
        </Anim>
      </Place>
      <Hand x={652} y={290} size={21} anchor="middle" c={INK_SOFT}>
        one paper
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The journal or the repository registers it.
   ------------------------------------------------------------------ */

const getCss = `
.s-doi6-flow { animation: s-doi6-dash 2.2s linear infinite; }
.s-doi6-tag { animation: s-doi6-swing 5s ease-in-out infinite; }
@keyframes s-doi6-dash {
  from { stroke-dashoffset: 24; }
  to { stroke-dashoffset: 0; }
}
@keyframes s-doi6-swing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(5deg); }
}
`

export function GetScene() {
  return (
    <Scene
      w={800}
      h={290}
      top={20}
      css={getCss}
      className="s-doi6"
      label="Two rows: an accepted paper goes to the journal, which registers it with Crossref and gets back a DOI tag; a box of data goes to Zenodo, which gives it a DOI tag of its own"
    >
      {/* Row one: paper, journal, Crossref, DOI. */}
      <Sheet x={50} y={44} w={64} h={84} lines={5} title seed={600} />
      <Hand x={82} y={150} size={18} anchor="middle" c={INK_SOFT}>
        your paper
      </Hand>
      <Box x={180} y={60} w={130} h={54} r={6} fill={TONES.amber.mid} seed={601} sw={2} />
      <Hand x={245} y={95} size={23} anchor="middle" weight={700}>
        journal
      </Hand>
      <Box x={376} y={60} w={130} h={54} r={6} fill={TONES.blue.mid} seed={602} sw={2} />
      <Hand x={441} y={95} size={23} anchor="middle" weight={700}>
        Crossref
      </Hand>
      <g className="s-doi6-flow">
        <Ink d={handLine(122, 87, 172, 87, 603, 0.4)} w={1.8} c={TONES.blue.deep} dash="6 6" />
        <Ink d={handLine(316, 87, 368, 87, 604, 0.4)} w={1.8} c={TONES.blue.deep} dash="6 6" />
        <Ink d={handLine(512, 87, 566, 87, 605, 0.4)} w={1.8} c={TONES.blue.deep} dash="6 6" />
      </g>
      <Place x={0} y={0}>
        <Anim className="s-doi6-tag" origin={[585, 87]}>
          <Tag x={572} y={68} w={178} text="doi.org/10..." seed={606} />
        </Anim>
      </Place>

      <Wave x1={60} x2={740} y={178} amp={2.5} seed={607} c={INK_SOFT} o={0.5} />

      {/* Row two: data, Zenodo, DOI. */}
      <Crate x={42} y={208} w={84} h={58} label="data" seed={610} />
      <Box x={278} y={210} w={130} h={54} r={6} fill={TONES.green.mid} seed={611} sw={2} />
      <Hand x={343} y={245} size={23} anchor="middle" weight={700}>
        Zenodo
      </Hand>
      <g className="s-doi6-flow">
        <Ink d={handLine(134, 237, 270, 237, 612, 0.4)} w={1.8} c={TONES.green.deep} dash="6 6" />
        <Ink d={handLine(414, 237, 566, 237, 613, 0.4)} w={1.8} c={TONES.green.deep} dash="6 6" />
      </g>
      <Place x={0} y={0}>
        <Anim className="s-doi6-tag" origin={[585, 237]}>
          <Tag x={572} y={218} w={178} text="doi.org/10..." tone="green" seed={614} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Resolve it: one lands, one does not.
   ------------------------------------------------------------------ */

const checkCss = `
.s-doi7-mark { animation: s-doi7-pop 4s ease-in-out infinite; }
.s-doi7-flow { animation: s-doi7-dash 2.2s linear infinite; }
.s-doi7-checker .pip-body { animation: s-doi7-lean 4s ease-in-out infinite; }
@keyframes s-doi7-pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
@keyframes s-doi7-dash {
  from { stroke-dashoffset: 24; }
  to { stroke-dashoffset: 0; }
}
@keyframes s-doi7-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
`

export function CheckScene() {
  return (
    <Scene
      w={800}
      h={300}
      top={10}
      css={checkCss}
      className="s-doi7"
      label="Two DOIs are pasted after doi.org: on the left the result reads DOI not found with a red cross, on the right it opens the paper with a green tick, while a paper character in the middle checks them"
    >
      {/* Left: a DOI that goes nowhere. */}
      <Tag x={60} y={40} w={240} text="doi.org/10.xxxx/fake" tone="grey" size={14} seed={700} />
      <g className="s-doi7-flow">
        <Arrow from={[180, 84]} to={[180, 140]} bend={0} seed={701} c={TONES.red.deep} dash="6 6" />
      </g>
      <Box x={70} y={150} w={220} h={120} r={6} fill={TONES.red.tint} seed={702} sw={2} />
      <Hand x={180} y={196} size={24} anchor="middle" weight={700} c={TONES.red.deep}>
        DOI not found
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-doi7-mark" origin={[180, 236]}>
          <Cross x={180} y={236} s={1.4} seed={703} />
        </Anim>
      </Place>

      {/* Right: a DOI that lands on the paper. */}
      <Tag x={500} y={40} w={240} text="doi.org/10.1000/182" tone="green" size={14} seed={710} />
      <g className="s-doi7-flow">
        <Arrow from={[620, 84]} to={[620, 140]} bend={0} seed={711} c={TONES.green.deep} dash="6 6" />
      </g>
      <Box x={510} y={150} w={220} h={120} r={6} fill={TONES.green.tint} seed={712} sw={2} />
      <Sheet x={530} y={164} w={70} h={92} lines={5} title seed={713} />
      <Hand x={668} y={196} size={22} anchor="middle" weight={700} c={TONES.green.deep}>
        the paper
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-doi7-mark" origin={[668, 232]}>
          <Tick x={668} y={234} s={1.4} />
        </Anim>
      </Place>

      <Shadow x={400} y={292} rx={32} ry={4} />
      <Place x={400} y={290} s={1.55}>
        <g className="s-doi7-checker">
          <Pip mood="focused" arms="hips" tone="amber" look={0} seed={720} />
        </g>
      </Place>
    </Scene>
  )
}
