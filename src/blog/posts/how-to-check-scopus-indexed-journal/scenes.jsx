import {
  Anim,
  Arrow,
  Book,
  Box,
  Checklist,
  Cross,
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
  Sheet,
  Shelf,
  Spine,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* A few lines of text, as a pen would draw them. rows: [length, ...]. */
function Lines({ x, y, rows, gap = 11, seed, c = TEXT_LINE, w = 1.6 }) {
  const d = rows.map((len, i) => handLine(x, y + i * gap, x + len, y + i * gap, seed + i * 3, 0.35)).join('')
  return <Ink d={d} c={c} w={w} />
}

/* A web page in a browser window, with its address on top. Anchor: top-left. */
function Page({ x, y, w, h, address, seed, fill = PAPER }) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={6} fill={fill} seed={seed} sw={1.9} />
      <rect x={x + 2} y={y + 2} width={w - 4} height={22} fill={TONES.grey.tint} />
      <Ink d={handLine(x, y + 24, x + w, y + 24, seed + 1, 0.3)} w={1.4} />
      <circle cx={x + 11} cy={y + 13} r={3} fill={TONES.red.mid} />
      <circle cx={x + 21} cy={y + 13} r={3} fill={TONES.amber.mid} />
      <Type x={x + 32} y={y + 17} size={11} c={INK_SOFT}>
        {address}
      </Type>
    </g>
  )
}

/* ------------------------------------------------------------------
   1. A publisher applies, the board decides, and the journal goes in.
   ------------------------------------------------------------------ */

const meaningCss = `
.s-sco1-book { animation: s-sco1-travel 8s ease-in-out infinite; }
.s-sco1 .check-tick { animation: s-sco1-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s); }
.s-sco1-pub .pip-body { animation: s-sco1-bob 4s ease-in-out infinite; }
@keyframes s-sco1-travel {
  0%, 12% { transform: translate(0, 0); opacity: 1; }
  40%, 52% { transform: translate(250px, -6px); opacity: 1; }
  80%, 88% { transform: translate(500px, 0); opacity: 1; }
  94% { transform: translate(500px, 0); opacity: 0; }
  95% { transform: translate(0, 0); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1; }
}
@keyframes s-sco1-draw {
  0%, 30% { stroke-dashoffset: 1; }
  45%, 90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes s-sco1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function MeaningScene() {
  const floor = 300
  return (
    <Scene w={800} h={290} top={20} css={meaningCss} className="s-sco1" label="A publisher holds out a journal, which travels to a board marked CSAB with a checklist being ticked, and then into a bookcase marked Scopus; a note says authors do not pay">
      <Hand x={110} y={170} size={21} anchor="middle" weight={700}>
        publisher
      </Hand>
      <Shadow x={110} y={floor + 3} rx={32} ry={4} />
      <Place x={110} y={floor} s={1.5}>
        <g className="s-sco1-pub">
          <Pip mood="happy" arms="point" tone="amber" look={1.6} seed={110} />
        </g>
      </Place>

      <Box x={300} y={40} w={180} h={38} r={6} fill="url(#fill-blue)" seed={120} sw={1.9} />
      <Hand x={390} y={67} size={22} anchor="middle" weight={700}>
        CSAB review
      </Hand>
      <Checklist x={330} y={104} w={120} items={5} done={5} seed={121} />

      <Box x={590} y={40} w={170} h={38} r={6} fill="url(#fill-green)" seed={130} sw={1.9} />
      <Hand x={675} y={67} size={22} anchor="middle" weight={700}>
        Scopus
      </Hand>
      <Shelf x={600} y={96} w={150} rows={2} rowH={78} seed={131} />

      <Arrow from={[180, 210]} to={[300, 196]} bend={-0.1} seed={140} c={INK_SOFT} w={1.6} dash="5 6" />
      <Arrow from={[470, 196]} to={[590, 210]} bend={-0.1} seed={141} c={INK_SOFT} w={1.6} dash="5 6" />

      <Place x={0} y={0}>
        <Anim className="s-sco1-book">
          <Book x={146} y={226} w={40} h={52} tone="red" seed={150} />
        </Anim>
      </Place>

      <Hand x={675} y={292} size={18} anchor="middle" c={INK_SOFT}>
        authors do not pay
      </Hand>
      <Floor y={floor} x1={30} x2={560} seed={160} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The ISSN goes in, the official record comes out.
   ------------------------------------------------------------------ */

const stepsCss = `
.s-sco2-note { animation: s-sco2-slide 7s ease-in-out infinite; }
.s-sco2-ok { animation: s-sco2-ok 7s ease-in-out infinite; }
.s-sco2-typer .pip-arm-r { animation: s-sco2-type 0.9s ease-in-out infinite; }
@keyframes s-sco2-slide {
  0%, 10% { transform: translate(0, 0); opacity: 1; }
  40% { transform: translate(196px, 10px); opacity: 1; }
  48% { transform: translate(196px, 10px); opacity: 0; }
  92% { transform: translate(0, 0); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1; }
}
@keyframes s-sco2-ok {
  0%, 45%, 100% { opacity: 0.2; }
  58%, 90% { opacity: 1; }
}
@keyframes s-sco2-type {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
}
`

export function StepsScene() {
  const floor = 300
  const [ix, iy, iw] = laptopScreen(400, floor, 300)
  return (
    <Scene w={800} h={290} top={20} css={stepsCss} className="s-sco2" label="A sticky note with an ISSN slides into the search box on a laptop showing Scopus Sources; a record card appears beside it with the coverage line and a green tick, while a paper character types">
      <Place x={0} y={0}>
        <Anim className="s-sco2-note">
          <Sticky x={110} y={70} w={110} h={70} tone="amber" lines={0} seed={210} />
          <Type x={165} y={102} size={13} weight={700} anchor="middle">
            ISSN
          </Type>
          <Type x={165} y={122} size={12} anchor="middle">
            2345-6789
          </Type>
        </Anim>
      </Place>

      <Laptop x={400} y={floor} w={300} seed={220}>
        <Type x={ix + 10} y={iy + 18} size={13} weight={700} c={TONES.blue.deep}>
          Scopus Sources
        </Type>
        <rect x={ix + 10} y={iy + 30} width={iw - 20} height={26} rx={4} fill={PAPER} />
        <Ink d={`M${ix + 10} ${iy + 30}h${iw - 20}v26h${-(iw - 20)}Z`} c={INK} w={1.4} />
        <Type x={ix + 18} y={iy + 48} size={12} c={INK_SOFT}>
          search by ISSN
        </Type>
        <Lines x={ix + 10} y={iy + 76} rows={[iw - 60, iw - 90, iw - 70]} gap={14} seed={221} />
      </Laptop>

      <Arrow from={[560, 180]} to={[612, 150]} bend={-0.2} seed={230} c={INK_SOFT} w={1.6} />
      <Place x={0} y={0}>
        <Anim className="s-sco2-ok">
          <Sheet x={620} y={70} w={140} h={170} tone="paper" lines={0} fold={18} seed={240} />
          <Hand x={636} y={108} size={18} weight={700}>
            the record
          </Hand>
          <Lines x={636} y={128} rows={[100, 80]} gap={13} seed={241} />
          <rect x={632} y={158} width={116} height={22} rx={3} fill={TONES.green.tint} />
          <Type x={638} y={173} size={11} weight={700} c={TONES.green.deep}>
            to Present
          </Type>
          <Tick x={728} y={170} s={1.1} />
          <Lines x={636} y={200} rows={[96, 70]} gap={13} seed={242} />
        </Anim>
      </Place>

      <Floor y={floor} x1={30} x2={770} seed={250} />
      <Shadow x={130} y={floor + 3} rx={32} ry={4} />
      <Place x={130} y={floor} s={1.5}>
        <g className="s-sco2-typer">
          <Pip mood="focused" arms="point" tone="pink" look={1.6} seed={260} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The lines on the record that matter most.
   ------------------------------------------------------------------ */

const ROWS = [
  { label: 'coverage years', value: '2004 to Present', tone: 'green' },
  { label: 'coverage status', value: 'current', tone: 'green' },
  { label: 'publisher', value: 'matches the site', tone: 'blue' },
  { label: 'ISSN, E-ISSN', value: 'match the site', tone: 'blue' },
  { label: 'subject area', value: 'fits your paper', tone: 'amber' },
  { label: 'CiteScore, SJR', value: 'compare in field', tone: 'amber' },
]

const detailsCss = `
.s-sco3-hl { animation: s-sco3-hl 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.5s - 9s); }
.s-sco3-reader .pip-body { animation: s-sco3-lean 4.5s ease-in-out infinite; }
@keyframes s-sco3-hl {
  0%, 20%, 100% { opacity: 0.25; }
  5%, 15% { opacity: 1; }
}
@keyframes s-sco3-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

export function DetailsScene() {
  const floor = 312
  const x = 160
  return (
    <Scene w={800} h={300} top={20} css={detailsCss} className="s-sco3" label="A large source details card lists coverage years 2004 to Present, coverage status current, publisher, ISSN and E-ISSN, subject area, and CiteScore and SJR, with each line lit up in turn while a paper character in glasses reads it">
      <Sheet x={x} y={36} w={440} h={262} tone="paper" lines={0} fold={26} seed={301} sw={2} />
      <Hand x={x + 22} y={74} size={22} weight={700}>
        source details
      </Hand>
      {ROWS.map((row, i) => {
        const ry = 92 + i * 32
        return (
          <g key={row.label}>
            <Place x={0} y={0}>
              <Anim className="s-sco3-hl" style={{ '--i': i }}>
                <rect x={x + 16} y={ry} width={404} height={26} rx={4} fill={TONES[row.tone].tint} />
              </Anim>
            </Place>
            <Type x={x + 26} y={ry + 18} size={13} weight={700} c={INK}>
              {row.label}
            </Type>
            <Hand x={x + 200} y={ry + 19} size={17} c={TONES[row.tone].deep}>
              {row.value}
            </Hand>
          </g>
        )
      })}

      <Floor y={floor} x1={30} x2={770} seed={320} />
      <Shadow x={696} y={floor + 3} rx={32} ry={4} />
      <Place x={696} y={floor} s={1.5} flip>
        <g className="s-sco3-reader">
          <Pip mood="focused" arms="point" tone="green" glasses look={1.4} seed={330} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The coverage line stops; papers after that point are not added.
   ------------------------------------------------------------------ */

const discCss = `
.s-sco4-drop { animation: s-sco4-drop 6s ease-in-out infinite; }
.s-sco4-no { animation: s-sco4-no 6s ease-in-out infinite; }
.s-sco4-grow { animation: s-sco4-grow 6s ease-in-out infinite; }
@keyframes s-sco4-drop {
  0%, 60%, 100% { transform: translateY(0); opacity: 1; }
  70% { transform: translateY(-30px); opacity: 0; }
  80% { transform: translateY(-30px); opacity: 1; }
}
@keyframes s-sco4-no {
  0%, 85%, 100% { opacity: 1; }
  65%, 80% { opacity: 0; }
}
@keyframes s-sco4-grow {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(12px); }
}
`

export function DiscontinuedScene() {
  const l = 120
  const r = 680
  return (
    <Scene w={800} h={280} top={20} css={discCss} className="s-sco4" label="Two coverage lines run across the years: the top one in green runs on to Present with an arrow, while the bottom one in red stops in a past year at a sign reading coverage discontinued, and a new paper dropping after that point gets a red cross">
      <Hand x={l} y={60} size={20} weight={700} c={TONES.green.deep}>
        still covered
      </Hand>
      <Ink d={handLine(l, 92, r - 40, 92, 401, 0.6)} c={TONES.green.ink} w={6} />
      <Place x={0} y={0}>
        <Anim className="s-sco4-grow">
          <Arrow from={[r - 60, 92]} to={[r, 92]} bend={0} seed={402} c={TONES.green.ink} w={3} head={14} />
        </Anim>
      </Place>
      <Hand x={r + 10} y={98} size={18} c={INK_SOFT}>
        Present
      </Hand>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Sheet key={i} x={l + 10 + i * 74} y={104} w={22} h={28} tone="paper" lines={2} fold={6} seed={410 + i} sw={1.3} />
      ))}

      <Hand x={l} y={178} size={20} weight={700} c={TONES.red.deep}>
        coverage discontinued
      </Hand>
      <Ink d={handLine(l, 210, 420, 210, 420, 0.6)} c={TONES.red.ink} w={6} />
      <Ink d={handLine(424, 194, 424, 226, 421, 0.3)} c={INK} w={3} />
      <Ink d={handLine(430, 210, r, 210, 422, 0.6)} c={INK_SOFT} w={2} dash="4 8" />
      {[0, 1, 2, 3].map((i) => (
        <Sheet key={i} x={l + 10 + i * 74} y={222} w={22} h={28} tone="paper" lines={2} fold={6} seed={430 + i} sw={1.3} />
      ))}
      <Place x={0} y={0}>
        <Anim className="s-sco4-drop">
          <Sheet x={540} y={222} w={22} h={28} tone="pink" lines={2} fold={6} seed={440} sw={1.3} />
        </Anim>
      </Place>
      <Place x={0} y={0}>
        <Anim className="s-sco4-no">
          <Cross x={551} y={236} s={1.3} seed={441} />
        </Anim>
      </Place>
      <Hand x={600} y={244} size={18} c={INK_SOFT}>
        not added
      </Hand>
      <Hand x={424} y={276} size={17} anchor="middle" c={INK_SOFT}>
        last year covered
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The same title and ISSN, on a website the journal never owned.
   ------------------------------------------------------------------ */

const cloneCss = `
.s-sco5-lens { animation: s-sco5-look 6s ease-in-out infinite; }
.s-sco5-mark { animation: s-sco5-mark 6s ease-in-out infinite; }
.s-sco5-sleuth .pip-body { animation: s-sco5-bob 3s ease-in-out infinite; }
@keyframes s-sco5-look {
  0%, 100% { transform: translateX(0); }
  40%, 60% { transform: translateX(300px); }
}
@keyframes s-sco5-mark {
  0%, 30%, 100% { opacity: 1; }
  45% { opacity: 0.35; }
}
@keyframes s-sco5-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function CloneScene() {
  const floor = 312
  return (
    <Scene w={800} h={300} top={20} css={cloneCss} className="s-sco5" label="Two web pages look almost the same, with the same journal title and ISSN; the one reached through the publisher's own site has a green tick, the copy at a different web address gets a red cross, while a magnifying glass compares the addresses and a paper character watches">
      <Page x={100} y={50} w={240} h={190} address="www.publisher.org" seed={501} />
      <Hand x={120} y={110} size={20} weight={700}>
        Journal Title
      </Hand>
      <Type x={120} y={134} size={12} c={INK_SOFT}>
        ISSN 2345-6789
      </Type>
      <Lines x={120} y={160} rows={[180, 150, 170, 120]} gap={14} seed={502} />
      <Tick x={318} y={78} s={1.4} />
      <Hand x={220} y={264} size={18} anchor="middle" c={INK_SOFT}>
        from the publisher
      </Hand>

      <Page x={420} y={50} w={240} h={190} address="www.publisher-org.co" seed={510} fill={TONES.red.tint} />
      <Hand x={440} y={110} size={20} weight={700}>
        Journal Title
      </Hand>
      <Type x={440} y={134} size={12} c={INK_SOFT}>
        ISSN 2345-6789
      </Type>
      <Lines x={440} y={160} rows={[180, 150, 170, 120]} gap={14} seed={511} c={TONES.red.mid} />
      <Place x={0} y={0}>
        <Anim className="s-sco5-mark">
          <Cross x={638} y={80} s={1.4} seed={512} />
          <StampMark x={560} y={200} w={120} h={38} text="HIJACKED" size={16} tone="red" rotate={-8} bg={TONES.red.tint} seed={513} />
        </Anim>
      </Place>
      <Hand x={540} y={264} size={18} anchor="middle" c={INK_SOFT}>
        a different address
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-sco5-lens">
          <Magnifier x={200} y={168} r={18} angle={40} tone="amber" seed={520} />
        </Anim>
      </Place>

      <Floor y={floor} x1={30} x2={770} seed={530} />
      <Shadow x={730} y={floor + 3} rx={30} ry={4} />
      <Place x={730} y={floor} s={1.4} flip>
        <g className="s-sco5-sleuth">
          <Pip mood="surprised" arms="think" tone="blue" glasses look={1.4} seed={540} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. One official record, and a few quick checks around it.
   ------------------------------------------------------------------ */

const CHECKS = [
  { word: 'SCImago', hint: 'Q1 to Q4', tone: 'amber', x: 60, y: 60 },
  { word: 'ISSN Portal', hint: 'number and title', tone: 'pink', x: 590, y: 60 },
  { word: 'Web of Science', hint: 'the other list', tone: 'blue', x: 60, y: 196 },
  { word: 'your library', hint: 'your own rules', tone: 'green', x: 590, y: 196 },
]

const secondCss = `
.s-sco6-card { animation: s-sco6-lift 8s ease-in-out infinite; animation-delay: calc(var(--i) * 2s - 8s); }
.s-sco6-main { animation: s-sco6-glow 4s ease-in-out infinite; }
@keyframes s-sco6-lift {
  0%, 30%, 100% { transform: translateY(0); }
  10%, 20% { transform: translateY(-8px); }
}
@keyframes s-sco6-glow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
`

export function SecondScene() {
  return (
    <Scene w={800} h={290} top={30} css={secondCss} className="s-sco6" label="In the middle a large card reads Scopus record, official, with a green tick; four smaller cards around it read SCImago with Q1 to Q4, ISSN Portal, Web of Science and your library, each with an arrow pointing in to the middle card">
      <Place x={0} y={0}>
        <Anim className="s-sco6-main">
          <rect x={286} y={96} width={228} height={150} rx={10} fill={TONES.green.tint} />
        </Anim>
      </Place>
      <Box x={290} y={100} w={220} h={142} r={8} fill={PAPER} seed={601} sw={2.2} double />
      <Hand x={400} y={146} size={26} anchor="middle" weight={700}>
        Scopus record
      </Hand>
      <Hand x={400} y={178} size={19} anchor="middle" c={INK_SOFT}>
        the official answer
      </Hand>
      <Tick x={400} y={212} s={1.6} />

      {CHECKS.map((c, i) => (
        <Place key={c.word} x={0} y={0}>
          <Anim className="s-sco6-card" style={{ '--i': i }}>
            <Box x={c.x} y={c.y} w={150} h={84} r={6} fill={`url(#fill-${c.tone})`} seed={610 + i} sw={1.8} />
            <rect x={c.x + 10} y={c.y + 12} width={130} height={30} rx={4} fill={PAPER} />
            <Hand x={c.x + 75} y={c.y + 34} size={c.word.length > 11 ? 17 : 20} anchor="middle" weight={700}>
              {c.word}
            </Hand>
            <Hand x={c.x + 75} y={c.y + 68} size={16} anchor="middle" c={TONES[c.tone].deep}>
              {c.hint}
            </Hand>
          </Anim>
        </Place>
      ))}

      <Arrow from={[214, 110]} to={[284, 136]} bend={0.1} seed={630} c={INK_SOFT} w={1.5} dash="5 6" />
      <Arrow from={[586, 110]} to={[516, 136]} bend={-0.1} seed={631} c={INK_SOFT} w={1.5} dash="5 6" />
      <Arrow from={[214, 232]} to={[284, 208]} bend={-0.1} seed={632} c={INK_SOFT} w={1.5} dash="5 6" />
      <Arrow from={[586, 232]} to={[516, 208]} bend={0.1} seed={633} c={INK_SOFT} w={1.5} dash="5 6" />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The conference is an event; Scopus indexes the series behind it.
   ------------------------------------------------------------------ */

const confCss = `
.s-sco7-lens { animation: s-sco7-move 7s ease-in-out infinite; }
.s-sco7-q { animation: s-sco7-q 3.5s ease-in-out infinite; }
.s-sco7-speaker .pip-arm-r { animation: s-sco7-wave 2.4s ease-in-out infinite; }
@keyframes s-sco7-move {
  0%, 100% { transform: translateX(0); }
  45%, 60% { transform: translateX(84px); }
}
@keyframes s-sco7-q {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
@keyframes s-sco7-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
`

export function ConferenceScene() {
  const floor = 300
  const shelfY = 236
  const vols = [
    { x: 470, tone: 'blue', year: '2024', ok: true },
    { x: 554, tone: 'blue', year: '2025', ok: true },
    { x: 638, tone: 'amber', year: '2026', ok: false },
  ]
  return (
    <Scene w={800} h={290} top={20} css={confCss} className="s-sco7" label="On the left a conference poster carries a Scopus logo and a question mark beside a paper character presenting; on the right a shelf of proceedings volumes from one book series, the earlier volumes ticked as found in Scopus and the newest one still marked with a question mark, while a magnifying glass checks them">
      <Box x={70} y={40} w={200} h={150} r={6} fill="url(#fill-pink)" seed={701} sw={1.9} />
      <rect x={82} y={52} width={176} height={36} rx={4} fill={PAPER} />
      <Hand x={170} y={78} size={22} anchor="middle" weight={700}>
        conference
      </Hand>
      <Lines x={90} y={110} rows={[150, 120, 140]} gap={14} seed={702} c={TONES.pink.deep} />
      <Box x={96} y={150} w={92} h={28} r={4} fill={PAPER} seed={703} sw={1.4} />
      <Type x={142} y={169} size={13} weight={700} anchor="middle" c={TONES.blue.deep}>
        Scopus?
      </Type>
      <Place x={0} y={0}>
        <Anim className="s-sco7-q">
          <Hand x={226} y={178} size={40} anchor="middle" weight={700} c={TONES.amber.ink}>
            ?
          </Hand>
        </Anim>
      </Place>

      <Arrow from={[290, 120]} to={[440, 140]} bend={-0.15} seed={710} c={INK_SOFT} w={1.6} />
      <Hand x={366} y={104} size={18} anchor="middle" c={INK_SOFT}>
        ask for the series
      </Hand>

      <Hand x={590} y={70} size={21} anchor="middle" weight={700}>
        proceedings series
      </Hand>
      {vols.map((v, i) => (
        <g key={v.year}>
          <Spine x={v.x} y={shelfY} w={60} h={120} tone={v.tone} seed={720 + i} />
          <rect x={v.x + 8} y={shelfY - 74} width={44} height={22} fill={PAPER} />
          <Type x={v.x + 30} y={shelfY - 58} size={13} weight={700} anchor="middle">
            {v.year}
          </Type>
          {v.ok ? (
            <Tick x={v.x + 30} y={shelfY - 92} s={1.2} />
          ) : (
            <Hand x={v.x + 30} y={shelfY - 84} size={30} anchor="middle" weight={700} c={TONES.amber.ink}>
              ?
            </Hand>
          )}
        </g>
      ))}
      <Ink d={handLine(450, shelfY, 720, shelfY, 730, 0.5)} c={INK} w={2.4} />
      <Place x={0} y={0}>
        <Anim className="s-sco7-lens">
          <Magnifier x={500} y={258} r={18} angle={-40} tone="amber" seed={740} />
        </Anim>
      </Place>

      <Floor y={floor} x1={30} x2={420} seed={750} />
      <Shadow x={330} y={floor + 3} rx={30} ry={4} />
      <Place x={330} y={floor} s={1.4} flip>
        <g className="s-sco7-speaker">
          <Pip mood="happy" arms="point" tone="amber" look={1.4} seed={760} />
        </g>
      </Place>
    </Scene>
  )
}
