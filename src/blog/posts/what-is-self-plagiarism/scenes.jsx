import {
  Anim,
  Arrow,
  Book,
  Box,
  Calendar,
  Checklist,
  Cross,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pencil,
  Pip,
  Place,
  PushPin,
  Scene,
  Scissors,
  Shadow,
  Sheet,
  Sparkle,
  StampMark,
  TEXT_LINE,
  TONES,
  Thought,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 12, seed, c = TEXT_LINE, w = 1.6 }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} />
}

/* A cork board across the wall. Anchor: top-left. */
function Board({ x, y, w, h, seed }) {
  return <Box x={x} y={y} w={w} h={h} r={6} fill="url(#fill-brown)" seed={seed} sw={2.2} double />
}

/* ------------------------------------------------------------------
   1. The reader believes the page is new; an older copy sits behind it.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-slf1-old { animation: s-slf1-peek 7s ease-in-out infinite; }
.s-slf1-reader .pip-body { animation: s-slf1-nod 3.5s ease-in-out infinite; }
@keyframes s-slf1-peek {
  0%, 20%, 100% { transform: translate(0, 0); }
  45%, 70% { transform: translate(96px, 0); }
}
@keyframes s-slf1-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function MeaningScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={meaningCss} className="s-slf1" label="A reader in glasses thinks new work about a sheet in front of her, while an older copy of the same sheet with the same lines slides out from behind it, labelled published in 2025">
      <Place x={0} y={0}>
        <Anim className="s-slf1-old">
          <Sheet x={244} y={70} w={130} h={170} tone="pink" lines={0} fold={18} seed={101} />
          <Lines x={258} y={110} rows={[96, 80, 100, 70, 90, 60, 84, 74]} gap={14} seed={102} c={TONES.pink.deep} />
        </Anim>
      </Place>
      <Sheet x={350} y={80} w={130} h={170} tone="paper" lines={0} fold={18} seed={103} sw={2} />
      <Lines x={364} y={120} rows={[96, 80, 100, 70, 90, 60, 84, 74]} gap={14} seed={102} />
      <Hand x={300} y={276} size={18} anchor="middle" c={TONES.pink.deep}>
        published in 2025
      </Hand>
      <Hand x={444} y={276} size={18} anchor="middle" c={INK_SOFT}>
        sent as new
      </Hand>

      <Thought x={640} y={96} w={150} h={66} tx={650} ty={188} seed={110}>
        <Hand x={640} y={104} size={22} anchor="middle" weight={700}>
          new work!
        </Hand>
      </Thought>

      <Floor y={floor} x1={30} x2={770} seed={111} />
      <Shadow x={650} y={floor + 3} rx={32} ry={4} />
      <Place x={650} y={floor} s={1.5} flip>
        <g className="s-slf1-reader">
          <Pip mood="happy" arms="hold" tone="blue" glasses look={1.4} seed={120} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The UGC public notice of 20 April 2020, pinned up with five crosses.
   ------------------------------------------------------------------ */

const ugcCss = `
.s-slf2-x { animation: s-slf2-mark 7.5s ease-in-out infinite; animation-delay: calc(var(--i) * 1.5s - 7.5s); }
.s-slf2-reader .pip-body { animation: s-slf2-bob 3s ease-in-out infinite; }
@keyframes s-slf2-mark {
  0%, 30%, 100% { transform: scale(1); }
  10% { transform: scale(1.35); }
}
@keyframes s-slf2-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function UgcScene() {
  const floor = 312
  const nx = 270
  const ny = 46
  return (
    <Scene w={800} h={290} top={30} css={ugcCss} className="s-slf2" label="A public notice titled self-plagiarism is pinned to a board beside a calendar page for 20 April, with five lines each marked by a red cross and the words without due and full citation, while a paper character points at it">
      <Board x={150} y={40} w={500} h={228} seed={201} />
      <Calendar x={176} y={74} w={78} h={86} day="20" month="APR" tone="red" seed={202} />
      <Hand x={215} y={190} size={20} anchor="middle" weight={700}>
        2020
      </Hand>

      <Sheet x={nx} y={ny + 10} w={250} h={196} tone="paper" lines={0} fold={20} seed={203} sw={2} />
      <PushPin x={nx + 124} y={ny + 18} tone="blue" seed={204} />
      <Type x={nx + 125} y={ny + 46} size={14} weight={700} anchor="middle">
        UGC PUBLIC NOTICE
      </Type>
      <Hand x={nx + 125} y={ny + 70} size={20} weight={700} anchor="middle">
        self-plagiarism
      </Hand>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <Place x={nx + 26} y={ny + 94 + i * 22}>
            <Anim className="s-slf2-x" origin={[0, 0]} style={{ '--i': i }}>
              <Cross x={0} y={0} s={0.55} w={2} seed={210 + i} />
            </Anim>
          </Place>
          <Lines x={nx + 42} y={ny + 94 + i * 22} rows={[[170, 150, 176, 140, 160][i]]} seed={220 + i * 4} />
        </g>
      ))}
      <Box x={540} y={150} w={100} h={88} r={6} fill={TONES.amber.mid} seed={230} sw={1.8} />
      <Hand x={590} y={176} size={15} anchor="middle" weight={700}>
        without due
      </Hand>
      <Hand x={590} y={196} size={15} anchor="middle" weight={700}>
        and full
      </Hand>
      <Hand x={590} y={216} size={15} anchor="middle" weight={700}>
        citation
      </Hand>

      <Floor y={floor} x1={30} x2={770} seed={231} />
      <Shadow x={720} y={floor + 3} rx={32} ry={4} />
      <Place x={720} y={floor} s={1.5} flip>
        <g className="s-slf2-reader">
          <Pip mood="focused" arms="point" tone="amber" glasses look={1.4} seed={240} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Salami slicing: one thick study cut into four thin papers.
   ------------------------------------------------------------------ */

const sliceCss = `
.s-slf3 .blade-a { animation: s-slf3-snip 1.4s ease-in-out infinite; }
.s-slf3-thin { animation: s-slf3-fan 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s - 6s); }
@keyframes s-slf3-snip {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-16deg); }
}
@keyframes s-slf3-fan {
  0%, 100% { transform: translateY(0); }
  20% { transform: translateY(-10px); }
  40% { transform: translateY(0); }
}
`

export function SliceScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={20} css={sliceCss} className="s-slf3" label="On the left a thick paper labelled one study with four coloured bands; scissors cut it, and on the right four thin papers stand in a row, each holding one band, labelled four papers">
      <Sheet x={80} y={60} w={170} h={200} tone="paper" lines={0} fold={22} seed={301} sw={2.2} />
      <Hand x={165} y={98} size={21} anchor="middle" weight={700}>
        one study
      </Hand>
      {['green', 'amber', 'pink', 'blue'].map((tone, i) => (
        <g key={tone}>
          <rect x={98} y={116 + i * 34} width={134} height={24} rx={4} fill={`url(#fill-${tone})`} />
          <Lines x={108} y={128 + i * 34} rows={[100]} seed={310 + i * 3} c={TONES[tone].deep} />
        </g>
      ))}
      <Scissors x={290} y={160} s={1.1} angle={0} seed={320} />
      <Arrow from={[330, 186]} to={[420, 186]} bend={0} seed={321} c={INK_SOFT} w={1.6} />

      {['green', 'amber', 'pink', 'blue'].map((tone, i) => {
        const x = 446 + i * 78
        return (
          <Place key={tone} x={0} y={0}>
            <Anim className="s-slf3-thin" style={{ '--i': i }}>
              <Sheet x={x} y={110} w={62} h={120} tone="paper" lines={0} fold={12} seed={330 + i} />
              <rect x={x + 8} y={150} width={46} height={22} rx={3} fill={`url(#fill-${tone})`} />
              <Lines x={x + 12} y={190} rows={[36, 28]} gap={11} seed={340 + i * 3} />
            </Anim>
          </Place>
        )
      })}
      <Hand x={600} y={84} size={21} anchor="middle" weight={700}>
        four papers?
      </Hand>
      <Floor y={floor} x1={30} x2={770} seed={350} />
      <Hand x={600} y={266} size={18} anchor="middle" c={INK_SOFT}>
        same data, sliced thin
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. A thesis and a conference paper both grow into journal papers,
      each with its history said out loud.
   ------------------------------------------------------------------ */

const thesisCss = `
.s-slf4-new { animation: s-slf4-grow 5s ease-in-out infinite; }
.s-slf4-spark { animation: s-slf4-twinkle 2.5s ease-in-out infinite; }
@keyframes s-slf4-grow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
@keyframes s-slf4-twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
`

export function ThesisScene() {
  return (
    <Scene w={800} h={290} top={20} css={thesisCss} className="s-slf4" label="Two rows: a thesis book with an arrow labelled cite and tell the editor leading to a journal paper with a green tick; and a small conference paper with an arrow leading to a bigger journal paper with new data added in green, also ticked">
      <Book x={92} y={30} w={70} h={86} tone="blue" seed={401} label={false} />
      <Hand x={127} y={140} size={17} anchor="middle">
        thesis
      </Hand>
      <Arrow from={[186, 90]} to={[470, 90]} bend={0} seed={402} c={INK_SOFT} w={1.6} />
      <Hand x={328} y={78} size={18} anchor="middle" c={INK_SOFT}>
        cite it, tell the editor
      </Hand>
      <Sheet x={494} y={40} w={84} h={104} tone="paper" lines={4} fold={14} seed={403} />
      <Hand x={536} y={160} size={17} anchor="middle">
        journal paper
      </Hand>
      <Tick x={612} y={92} s={1.6} />

      <Sheet x={102} y={180} w={56} h={72} tone="pink" lines={3} fold={10} seed={410} />
      <Hand x={130} y={272} size={17} anchor="middle">
        conference paper
      </Hand>
      <Arrow from={[186, 220]} to={[470, 220]} bend={0} seed={411} c={INK_SOFT} w={1.6} />
      <Hand x={328} y={208} size={18} anchor="middle" c={INK_SOFT}>
        cite it, add what is new
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-slf4-new" origin={[536, 226]}>
          <Sheet x={494} y={170} w={84} h={110} tone="paper" lines={0} fold={14} seed={412} />
          <Lines x={504} y={200} rows={[56, 48]} seed={413} c={TONES.pink.deep} />
          <rect x={502} y={222} width={64} height={40} rx={4} fill="url(#fill-green)" />
          <Type x={534} y={247} size={13} weight={700} anchor="middle" c={TONES.green.deep}>
            + new
          </Type>
        </Anim>
      </Place>
      <Tick x={612} y={222} s={1.6} />
      <Place x={0} y={0}>
        <Anim className="s-slf4-spark">
          <Sparkle x={588} y={180} s={9} />
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Section by section: methods cited can stay, results cannot repeat.
   ------------------------------------------------------------------ */

const sectionCss = `
.s-slf5-lens { animation: s-slf5-scan 8s ease-in-out infinite; }
@keyframes s-slf5-scan {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(150px); }
  50% { transform: translateX(300px); }
  75% { transform: translateX(450px); }
}
`

const PARTS = [
  { word: 'introduction', verdict: 'write fresh', tone: 'amber', mark: 'pencil' },
  { word: 'methods', verdict: 'reuse + cite', tone: 'green', mark: 'tick' },
  { word: 'results', verdict: 'never again', tone: 'red', mark: 'cross' },
  { word: 'discussion', verdict: 'write fresh', tone: 'amber', mark: 'pencil' },
]

export function SectionScene() {
  return (
    <Scene w={800} h={260} top={30} css={sectionCss} className="s-slf5" label="Four cards for the parts of a paper: introduction marked write fresh, methods marked reuse and cite with a green tick, results marked never again with a red cross, and discussion marked write fresh, while a magnifying glass slides along them">
      {PARTS.map((p, i) => {
        const x = 70 + i * 170
        return (
          <g key={p.word}>
            <Box x={x} y={60} w={150} h={140} r={8} fill={`url(#fill-${p.tone})`} seed={500 + i} sw={1.9} />
            <rect x={x + 10} y={74} width={130} height={34} rx={5} fill={PAPER} />
            <Hand x={x + 75} y={98} size={p.word.length > 10 ? 18 : 21} anchor="middle" weight={700}>
              {p.word}
            </Hand>
            {p.mark === 'tick' ? <Tick x={x + 75} y={142} s={1.5} /> : null}
            {p.mark === 'cross' ? <Cross x={x + 75} y={142} s={1.3} /> : null}
            {p.mark === 'pencil' ? <Pencil x={x + 58} y={154} length={50} angle={-35} tone="amber" seed={510 + i} /> : null}
            <Hand x={x + 75} y={186} size={17} anchor="middle" c={INK_SOFT}>
              {p.verdict}
            </Hand>
          </g>
        )
      })}
      <Place x={0} y={0}>
        <Anim className="s-slf5-lens">
          <Magnifier x={130} y={240} r={20} angle={40} tone="amber" seed={520} />
        </Anim>
      </Place>
      <Floor y={274} x1={30} x2={770} seed={521} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The routine: a checklist, a fresh draft, and a letter to the editor.
   ------------------------------------------------------------------ */

const avoidCss = `
.s-slf6-letter { animation: s-slf6-fly 7s ease-in-out infinite; }
.s-slf6-writer .pip-body { animation: s-slf6-bob 3s ease-in-out infinite; }
@keyframes s-slf6-fly {
  0%, 10% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  50%, 80% { transform: translate(250px, -50px) rotate(8deg); opacity: 1; }
  86% { transform: translate(250px, -50px) rotate(8deg); opacity: 0; }
  87% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  95%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
}
@keyframes s-slf6-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function AvoidScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={avoidCss} className="s-slf6" label="A paper character stands by a clipboard checklist with most boxes ticked, and an envelope labelled earlier version cited flies across to a box labelled editor">
      <Checklist x={170} y={70} w={150} items={5} done={4} seed={601} />
      <Hand x={245} y={286} size={18} anchor="middle" c={INK_SOFT}>
        cite, rewrite, disclose
      </Hand>

      <Box x={600} y={60} w={140} h={38} r={6} fill={TONES.amber.mid} seed={602} sw={2} />
      <Hand x={670} y={87} size={22} anchor="middle" weight={700}>
        editor
      </Hand>
      <Arrow from={[400, 176]} to={[640, 112]} bend={-0.14} seed={603} c={INK_SOFT} w={1.5} dash="5 7" />

      <Place x={0} y={0}>
        <Anim className="s-slf6-letter">
          <Envelope x={360} y={170} w={70} h={46} seed={604} />
        </Anim>
      </Place>
      <Sheet x={590} y={150} w={120} h={110} tone="paper" lines={0} fold={14} seed={605} />
      <Hand x={650} y={186} size={15} anchor="middle" weight={700}>
        an earlier
      </Hand>
      <Hand x={650} y={206} size={15} anchor="middle" weight={700}>
        version was
      </Hand>
      <Hand x={650} y={226} size={15} anchor="middle" weight={700} c={TONES.green.deep}>
        cited as ref 12
      </Hand>

      <Floor y={floor} x1={30} x2={770} seed={606} />
      <Shadow x={92} y={floor + 3} rx={32} ry={4} />
      <Place x={92} y={floor} s={1.5}>
        <g className="s-slf6-writer">
          <Pip mood="happy" arms="point" tone="green" look={1.6} seed={610} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Caught at submission you revise; caught after publication the
      paper itself is marked.
   ------------------------------------------------------------------ */

const outcomeCss = `
.s-slf7-stamp { animation: s-slf7-pulse 4s ease-in-out infinite; }
.s-slf7-relief .pip-body { animation: s-slf7-hop 4s ease-in-out infinite; }
@keyframes s-slf7-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
@keyframes s-slf7-hop {
  0%, 60%, 100% { transform: translateY(0); }
  70% { transform: translateY(-7px); }
  80% { transform: translateY(0); }
}
`

export function OutcomeScene() {
  const floor = 312
  return (
    <Scene w={800} h={290} top={30} css={outcomeCss} className="s-slf7" label="Two papers side by side: one labelled at submission carries an amber stamp that reads REVISE, and one labelled after publication carries a red stamp that reads RETRACTED, while a paper character stands relieved beside the first">
      <Box x={150} y={44} w={200} h={36} r={6} fill="url(#fill-amber)" seed={701} sw={1.9} />
      <Hand x={250} y={70} size={20} anchor="middle" weight={700}>
        at submission
      </Hand>
      <Sheet x={190} y={98} w={120} h={160} tone="paper" lines={0} fold={18} seed={702} />
      <Lines x={204} y={136} rows={[90, 76, 92, 64, 84, 70, 56, 80]} gap={13} seed={703} />
      <Place x={0} y={0}>
        <Anim className="s-slf7-stamp" spin>
          <StampMark x={250} y={186} w={104} h={36} text="REVISE" size={17} tone="amber" rotate={-10} bg={PAPER} seed={704} />
        </Anim>
      </Place>

      <Box x={450} y={44} w={220} h={36} r={6} fill="url(#fill-red)" seed={710} sw={1.9} />
      <Hand x={560} y={70} size={20} anchor="middle" weight={700}>
        after publication
      </Hand>
      <Sheet x={500} y={98} w={120} h={160} tone="paper" lines={0} fold={18} seed={711} />
      <Lines x={514} y={136} rows={[90, 76, 92, 64, 84, 70, 56, 80]} gap={13} seed={712} />
      <StampMark x={560} y={186} w={112} h={36} text="RETRACTED" size={15} tone="red" rotate={-12} bg={PAPER} seed={713} />

      <Floor y={floor} x1={30} x2={770} seed={714} />
      <Shadow x={92} y={floor + 3} rx={32} ry={4} />
      <Place x={92} y={floor} s={1.5}>
        <g className="s-slf7-relief">
          <Pip mood="grin" arms="up" tone="green" look={1.6} seed={720} />
        </g>
      </Place>
    </Scene>
  )
}
