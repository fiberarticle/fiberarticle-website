import {
  Anim,
  Arrow,
  Book,
  Box,
  Crate,
  Cross,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  PAPER,
  Pip,
  Place,
  Scene,
  Scissors,
  Shadow,
  Sheet,
  StampMark,
  Thought,
  Tick,
  TONES,
  Type,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. A database, an editor and a reader all meet the title first.
   ------------------------------------------------------------------ */

const purposeCss = `
.s-ptl1-ray { animation: s-ptl1-look 4.5s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 4.5s); }
.s-ptl1-cursor { animation: s-ptl1-blink 1.2s steps(1) infinite; }
.s-ptl1-editor .pip-body { animation: s-ptl1-lean 4s ease-in-out infinite; }
@keyframes s-ptl1-look {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
@keyframes s-ptl1-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes s-ptl1-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
`

export function PurposeScene() {
  const floor = 330
  const [ix, iy, iw] = laptopScreen(130, floor, 200)
  return (
    <Scene
      w={800}
      h={300}
      top={40}
      css={purposeCss}
      className="s-ptl1"
      label="A title card in the middle is looked at by three readers: a laptop search box on the left labelled database, a paper character with a red pencil labelled editor, and a paper character thinking should I click, labelled reader"
    >
      <Floor y={floor} x1={20} x2={780} seed={101} />

      {/* the title card everyone looks at */}
      <Box x={290} y={62} w={220} h={92} r={6} fill={PAPER} stroke={TONES.blue.deep} seed={102} sw={2.2} double />
      <Type x={400} y={90} size={14} anchor="middle" c={INK_SOFT}>
        TITLE
      </Type>
      <Hand x={400} y={118} size={19} anchor="middle" weight={700}>
        pine needle briquettes
      </Hand>
      <Hand x={400} y={141} size={17} anchor="middle">
        as village fuel
      </Hand>

      {/* the database */}
      <Laptop x={130} y={floor} w={200} seed={103} />
      <Box x={ix + 8} y={iy + 18} w={iw - 16} h={26} r={10} fill={PAPER} seed={104} sw={1.4} />
      <Type x={ix + 16} y={iy + 36} size={12}>
        pine needle
      </Type>
      <path className="s-ptl1-cursor" d={`M${ix + 104} ${iy + 23}v16`} stroke={TONES.blue.ink} strokeWidth={2} />
      <Hand x={130} y={floor + 30} size={18} anchor="middle" c={INK_SOFT}>
        database
      </Hand>

      {/* the editor */}
      <Shadow x={400} y={floor + 2} rx={28} ry={4} />
      <Place x={400} y={floor} s={1.4}>
        <g className="s-ptl1-editor">
          <Pip mood="focused" arms="think" tone="blue" look={0} glasses seed={105} />
        </g>
      </Place>
      <Hand x={400} y={floor + 30} size={18} anchor="middle" c={INK_SOFT}>
        editor
      </Hand>

      {/* the reader */}
      <Thought x={668} y={118} w={150} h={62} tx={660} ty={210} seed={106}>
        <Hand x={668} y={124} size={18} anchor="middle" weight={700}>
          should I click?
        </Hand>
      </Thought>
      <Shadow x={660} y={floor + 2} rx={28} ry={4} />
      <Place x={660} y={floor} s={1.4}>
        <Pip mood="worried" arms="hold" tone="amber" look={-1.6} seed={107} />
      </Place>
      <Hand x={660} y={floor + 30} size={18} anchor="middle" c={INK_SOFT}>
        reader
      </Hand>

      {/* everyone looks at the title */}
      {[
        [[200, 196], [292, 140]],
        [[400, 222], [400, 160]],
        [[612, 196], [506, 140]],
      ].map(([from, to], i) => (
        <g key={i} className="s-ptl1-ray" style={{ '--i': i }}>
          <Arrow from={from} to={to} bend={i === 1 ? 0 : i ? 0.12 : -0.12} seed={110 + i} c={TONES.red.ink} w={1.8} dash="5 6" />
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Three types: describe, declare, ask.
   ------------------------------------------------------------------ */

const typesCss = `
.s-ptl2-q { animation: s-ptl2-wobble 3s ease-in-out infinite; }
.s-ptl2-stamp { animation: s-ptl2-press 3.6s ease-in-out infinite; }
.s-ptl2-lens { animation: s-ptl2-scan 4s ease-in-out infinite; }
@keyframes s-ptl2-wobble {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}
@keyframes s-ptl2-press {
  0%, 100% { transform: scale(1); }
  45% { transform: scale(1); }
  55% { transform: scale(1.12); }
  65% { transform: scale(1); }
}
@keyframes s-ptl2-scan {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(18px, 8px); }
}
`

const TYPES = [
  { word: 'descriptive', note: 'what was studied', tone: 'blue' },
  { word: 'declarative', note: 'what was found', tone: 'amber' },
  { word: 'question', note: 'what was asked', tone: 'pink' },
]

export function TypesScene() {
  const top = 60
  const h = 220
  return (
    <Scene
      w={800}
      h={270}
      top={44}
      css={typesCss}
      className="s-ptl2"
      label="Three cards side by side: descriptive with a magnifying glass over a page, labelled what was studied; declarative with a stamp reading found, labelled what was found; and question with a large wobbling question mark, labelled what was asked"
    >
      {TYPES.map((type, i) => {
        const x = 40 + i * 250
        const t = TONES[type.tone]
        return (
          <g key={type.word}>
            <Box x={x} y={top} w={220} h={h} r={8} fill={t.tint} stroke={t.deep} seed={201 + i} sw={2} />
            <Hand x={x + 110} y={top + 36} size={26} anchor="middle" weight={700}>
              {type.word}
            </Hand>
            <Hand x={x + 110} y={top + h - 18} size={18} anchor="middle" c={INK_SOFT}>
              {type.note}
            </Hand>
          </g>
        )
      })}

      <Sheet x={100} y={110} w={84} h={104} lines={6} fold={16} seed={210} />
      <Place x={0} y={0}>
        <Anim className="s-ptl2-lens">
          <Magnifier x={140} y={152} r={28} angle={45} tone="blue" seed={211} />
        </Anim>
      </Place>

      <g className="s-ptl2-stamp" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <StampMark x={400} y={168} w={140} h={54} text="FOUND" tone="red" rotate={-8} size={24} bg={PAPER} seed={212} />
      </g>

      <g className="s-ptl2-q" style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }}>
        <Hand x={650} y={226} size={110} anchor="middle" weight={700} c={TONES.pink.deep}>
          ?
        </Hand>
      </g>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Three sentences, joined, then trimmed.
   ------------------------------------------------------------------ */

const stepsCss = `
.s-ptl3 .blade-a { animation: s-ptl3-snip-a 2s ease-in-out infinite; }
.s-ptl3 .blade-b { animation: s-ptl3-snip-b 2s ease-in-out infinite; }
.s-ptl3-scrap { animation: s-ptl3-fall 6s ease-in infinite; }
@keyframes s-ptl3-snip-a {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(12deg); }
}
@keyframes s-ptl3-snip-b {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
@keyframes s-ptl3-fall {
  0%, 40% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  80% { transform: translate(-10px, 46px) rotate(-14deg); opacity: 0; }
  81%, 92% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
}
`

export function StepsScene() {
  return (
    <Scene
      w={800}
      h={320}
      top={20}
      css={stepsCss}
      className="s-ptl3"
      label="On the left a sheet with three numbered sentences about the study; an arrow leads to a long strip marked 20 words, where scissors snip off the extra words; a second arrow leads to a shorter strip marked 13 words with a green tick"
    >
      {/* step 1: three sentences */}
      <Sheet x={36} y={60} w={170} h={200} lines={0} fold={22} seed={301} />
      {['what we made', 'what we measured', 'what we compared'].map((line, i) => (
        <g key={line}>
          <Type x={52} y={112 + i * 50} size={16} weight={700} c={TONES.green.deep}>
            {i + 1}.
          </Type>
          <Hand x={74} y={112 + i * 50} size={16}>
            {line}
          </Hand>
          <Ink d={handLine(74, 124 + i * 50, 186, 124 + i * 50, 302 + i, 0.4)} c={TONES.grey.mid} w={1.4} />
        </g>
      ))}
      <Hand x={121} y={290} size={18} anchor="middle" c={INK_SOFT}>
        three sentences
      </Hand>

      <Arrow from={[214, 160]} to={[262, 112]} bend={-0.2} seed={310} w={2} />

      {/* step 3: joined into one long line */}
      <Box x={270} y={70} w={490} h={46} r={4} fill={TONES.amber.tint} stroke={TONES.amber.deep} seed={311} sw={1.8} />
      <g className="s-ptl3-scrap">
        <Hand x={290} y={100} size={17} c={INK_SOFT}>
          calorific value, ash content and burning time of
        </Hand>
      </g>
      <Hand x={642} y={100} size={17} weight={700}>
        briquettes...
      </Hand>
      <Type x={760} y={58} size={15} anchor="end" c={TONES.red.deep} weight={700}>
        20 WORDS
      </Type>
      <Scissors x={624} y={134} s={0.8} angle={-90} seed={312} />

      <Arrow from={[520, 170]} to={[480, 214]} bend={0.2} seed={313} w={2} />

      {/* step 4: trimmed */}
      <Box x={290} y={222} w={400} h={50} r={6} fill={PAPER} stroke={TONES.green.deep} seed={314} sw={2.2} double />
      <Hand x={490} y={254} size={20} anchor="middle" weight={700}>
        pine needle briquettes: fuel properties
      </Hand>
      <Type x={690} y={296} size={15} anchor="end" c={TONES.green.deep} weight={700}>
        13 WORDS
      </Type>
      <Tick x={726} y={248} s={1.3} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Too short, about right, too long.
   ------------------------------------------------------------------ */

const lengthCss = `
.s-ptl4-ok { animation: s-ptl4-glow 3s ease-in-out infinite; }
.s-ptl4-tail { animation: s-ptl4-drift 4s ease-in-out infinite; }
@keyframes s-ptl4-glow {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 0.95; }
}
@keyframes s-ptl4-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
`

export function LengthScene() {
  const ticks = []
  for (let i = 0; i <= 20; i++) ticks.push(i)
  const rx = 150
  const unit = 26
  return (
    <Scene
      w={800}
      h={300}
      top={20}
      css={lengthCss}
      className="s-ptl4"
      label="A ruler counting words from 0 to 20 with three title strips above it: a short red strip crossed out as too short, a green strip from 10 to 15 words ticked as about right, and a strip running off the edge crossed out as too long"
    >
      {/* the good range glows on the ruler */}
      <rect className="s-ptl4-ok" x={rx + 10 * unit} y={60} width={5 * unit} height={210} fill={TONES.green.tint} />

      {/* too short */}
      <Box x={rx} y={74} w={4 * unit} h={38} r={4} fill={TONES.red.tint} stroke={TONES.red.deep} seed={401} sw={1.8} />
      <Hand x={rx + 2 * unit} y={99} size={16} anchor="middle">
        a study on...
      </Hand>
      <Cross x={rx + 4 * unit + 24} y={93} s={1.1} seed={402} />
      <Hand x={40} y={99} size={18} c={INK_SOFT}>
        too short
      </Hand>

      {/* about right */}
      <Box x={rx} y={130} w={14 * unit} h={38} r={4} fill={PAPER} stroke={TONES.green.deep} seed={403} sw={2} />
      <Hand x={rx + 7 * unit} y={155} size={17} anchor="middle" weight={700}>
        material, outcome, comparison
      </Hand>
      <Tick x={rx + 14 * unit + 26} y={150} s={1.2} />
      <Hand x={40} y={155} size={18} c={INK_SOFT}>
        about right
      </Hand>

      {/* too long, running off the page */}
      <g className="s-ptl4-tail">
        <Box x={rx} y={186} w={24 * unit} h={38} r={4} fill={TONES.amber.tint} stroke={TONES.amber.deep} seed={404} sw={1.8} />
        <Hand x={rx + 14} y={211} size={16} c={INK_SOFT}>
          every measurement, the district, the year, the sample size, the...
        </Hand>
      </g>
      <Hand x={40} y={211} size={18} c={INK_SOFT}>
        too long
      </Hand>

      {/* the ruler */}
      <rect x={rx - 6} y={246} width={20 * unit + 12} height={30} fill={TONES.amber.tint} />
      <Ink d={handLine(rx - 6, 246, rx + 20 * unit + 6, 246, 405, 0.4) + handLine(rx - 6, 276, rx + 20 * unit + 6, 276, 406, 0.4)} w={1.8} />
      {ticks.map((i) => (
        <g key={i}>
          <Ink d={handLine(rx + i * unit, 246, rx + i * unit, i % 5 ? 254 : 260, 410 + i, 0.1)} w={1.3} />
          {i % 5 === 0 ? (
            <Type x={rx + i * unit} y={272} size={11} anchor="middle">
              {String(i)}
            </Type>
          ) : null}
        </g>
      ))}
      <Hand x={rx + 20 * unit + 18} y={268} size={16} c={INK_SOFT}>
        words
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Keywords first; filler into the box.
   ------------------------------------------------------------------ */

const keywordsCss = `
.s-ptl5-word { animation: s-ptl5-drop 7s ease-in infinite; animation-delay: calc(var(--i) * 1s - 7s); }
.s-ptl5-mark { animation: s-ptl5-sweep 7s ease-in-out infinite; }
@keyframes s-ptl5-drop {
  0%, 20% { transform: translate(0, 0); opacity: 1; }
  55% { transform: translate(0, 70px); opacity: 0; }
  56%, 85% { transform: translate(0, 0); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1; }
}
@keyframes s-ptl5-sweep {
  0%, 10% { stroke-dashoffset: 1; }
  30%, 90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
`

const CUT = [
  { word: 'a study on', x: 360, y: 160 },
  { word: '!', x: 470, y: 150 },
  { word: 'RF/RHD', x: 548, y: 168 },
  { word: 'factors', x: 650, y: 152 },
]

export function KeywordsScene() {
  const floor = 330
  return (
    <Scene
      w={800}
      h={310}
      top={30}
      css={keywordsCss}
      className="s-ptl5"
      label="A title strip with its first words, chir pine needle briquettes, highlighted and labelled search words first, while small cards reading a study on, an exclamation mark, RF slash RHD and factors drop into a box labelled cut, watched by a paper character"
    >
      <Floor y={floor} x1={20} x2={780} seed={501} />

      <path
        className="s-ptl5-mark"
        d="M62 84L330 85"
        pathLength="1"
        strokeDasharray="1"
        fill="none"
        stroke={TONES.amber.mid}
        strokeWidth={28}
        strokeLinecap="round"
        opacity="0.75"
      />
      <Box x={44} y={56} w={712} h={56} r={6} stroke={TONES.blue.deep} seed={502} sw={2.2} double />
      <Hand x={64} y={92} size={24} weight={700}>
        chir pine needle briquettes
      </Hand>
      <Hand x={372} y={92} size={21} c={INK_SOFT}>
        with three binders: fuel properties...
      </Hand>
      <Arrow from={[130, 160]} to={[160, 118]} bend={0.2} seed={503} c={TONES.amber.deep} w={1.8} />
      <Hand x={60} y={182} size={18} c={TONES.amber.deep} weight={700}>
        search words first
      </Hand>

      {CUT.map((cut, i) => (
        <g key={cut.word} className="s-ptl5-word" style={{ '--i': i }}>
          <Box x={cut.x - 44} y={cut.y - 22} w={88} h={34} r={4} fill={PAPER} stroke={TONES.red.deep} seed={510 + i} sw={1.5} />
          <Hand x={cut.x} y={cut.y + 2} size={17} anchor="middle">
            {cut.word}
          </Hand>
        </g>
      ))}
      <Crate x={410} y={floor - 78} w={300} h={78} label="cut" seed={520} />

      <Shadow x={240} y={floor + 2} rx={28} ry={4} />
      <Place x={240} y={floor} s={1.4}>
        <Pip mood="happy" arms="hips" tone="pink" look={1.4} seed={521} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Before and after.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-ptl6-arrow path:first-child { animation: s-ptl6-march 1.6s linear infinite; }
.s-ptl6-manish .pip-body { animation: s-ptl6-hop 2.8s ease-in-out infinite; }
@keyframes s-ptl6-march {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -24px; }
}
@keyframes s-ptl6-hop {
  0%, 60%, 100% { transform: translateY(0); }
  75% { transform: translateY(-8px); }
}
`

export function ExampleScene() {
  const floor = 336
  return (
    <Scene
      w={800}
      h={320}
      top={30}
      css={exampleCss}
      className="s-ptl6"
      label="Two pages side by side: on the left, before, with the titles a study on pine needles and from fire to fuel both crossed out; on the right, after, with the title chir pine needle briquettes with three binders: fuel properties compared with oak firewood and a green tick, while a paper character hops beside it"
    >
      <Floor y={floor} x1={20} x2={780} seed={601} />

      <Sheet x={40} y={60} w={250} h={250} lines={0} fold={26} seed={602} />
      <Type x={60} y={96} size={15} weight={700} c={TONES.red.deep}>
        BEFORE
      </Type>
      <Hand x={60} y={146} size={20}>
        A Study on Pine Needles
      </Hand>
      <Ink d={handLine(56, 140, 270, 138, 603, 0.6)} c={TONES.red.ink} w={2.4} />
      <Hand x={60} y={202} size={18}>
        From Fire to Fuel: Turning
      </Hand>
      <Hand x={60} y={226} size={18}>
        the Hills&apos; Burning Problem
      </Hand>
      <Hand x={60} y={250} size={18}>
        into an Answer!
      </Hand>
      <Ink d={handLine(56, 186, 270, 256, 604, 0.6) + handLine(56, 256, 270, 186, 605, 0.6)} c={TONES.red.ink} w={2.2} />

      <Arrow className="s-ptl6-arrow" from={[300, 190]} to={[380, 190]} bend={-0.15} seed={606} c={TONES.green.deep} w={2.2} dash="6 6" />

      <Sheet x={392} y={60} w={270} h={250} lines={0} fold={26} seed={607} />
      <Type x={412} y={96} size={15} weight={700} c={TONES.green.deep}>
        AFTER
      </Type>
      {['Chir pine needle briquettes', 'with three binders: fuel', 'properties compared with', 'oak firewood'].map((line, i) => (
        <Hand key={line} x={412} y={146 + i * 30} size={20} weight={700}>
          {line}
        </Hand>
      ))}
      <Tick x={620} y={276} s={1.5} />

      <Shadow x={724} y={floor + 2} rx={28} ry={4} />
      <Place x={724} y={floor} s={1.4} flip>
        <g className="s-ptl6-manish">
          <Pip mood="grin" arms="up" tone="green" look={1.2} glasses seed={608} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The running title on every page, and the thesis title approved.
   ------------------------------------------------------------------ */

const thesisCss = `
.s-ptl7-head { animation: s-ptl7-glow 3.5s ease-in-out infinite; }
.s-ptl7-stamp { animation: s-ptl7-press 4s ease-in-out infinite; }
@keyframes s-ptl7-glow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.9; }
}
@keyframes s-ptl7-press {
  0%, 100% { transform: scale(1); }
  40% { transform: scale(1); }
  50% { transform: scale(1.1); }
  60% { transform: scale(1); }
}
`

export function ThesisScene() {
  const floor = 336
  return (
    <Scene
      w={800}
      h={320}
      top={30}
      css={thesisCss}
      className="s-ptl7"
      label="On the left, two journal pages each with the running title chir pine needle briquettes as fuel along the top and a page number; on the right, a bound thesis with an approved stamp and a note that a title change needs committee approval, beside a paper character in a graduation cap"
    >
      <Floor y={floor} x1={20} x2={780} seed={701} />

      {[0, 1].map((i) => {
        const x = 30 + i * 196
        return (
          <g key={i}>
            <Sheet x={x} y={80} w={180} h={236} lines={0} fold={0} seed={702 + i} />
            <rect className="s-ptl7-head" x={x + 8} y={90} width={164} height={24} fill={TONES.amber.mid} />
            <Hand x={x + 90} y={107} size={11.5} anchor="middle" weight={700}>
              chir pine needle briquettes as fuel
            </Hand>
            {[0, 1, 2, 3, 4, 5, 6].map((r) => (
              <Ink key={r} d={handLine(x + 14, 140 + r * 22, x + 150 - ((r * 13) % 40), 140 + r * 22, 710 + i * 10 + r, 0.4)} c={TONES.grey.mid} w={1.5} />
            ))}
            <Type x={x + 90} y={304} size={13} anchor="middle" c={INK_SOFT}>
              {String(4 + i)}
            </Type>
          </g>
        )
      })}
      <Hand x={230} y={62} size={18} anchor="middle" c={INK_SOFT}>
        running title, 35 characters
      </Hand>

      <Book x={460} y={130} w={150} h={190} tone="green" seed={730} label={false} />
      <Hand x={547} y={182} size={14} anchor="middle" weight={700}>
        MSc dissertation
      </Hand>
      <Ink d={handLine(500, 196, 596, 196, 731, 0.4)} c={TONES.green.deep} w={1.6} />
      <g className="s-ptl7-stamp" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <StampMark x={540} y={262} w={120} h={44} text="APPROVED" tone="red" rotate={-10} size={17} bg={PAPER} seed={732} />
      </g>
      <Hand x={540} y={104} size={16} anchor="middle" c={INK_SOFT}>
        changes need the committee
      </Hand>

      <Shadow x={700} y={floor + 2} rx={28} ry={4} />
      <Place x={700} y={floor} s={1.45} flip>
        <Pip mood="proud" arms="point" tone="amber" cap="grad" seed={733} />
      </Place>
    </Scene>
  )
}
