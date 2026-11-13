import {
  Anim,
  Arrow,
  Box,
  Calendar,
  Checklist,
  Crate,
  Cross,
  Envelope,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Moon,
  Motion,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Speech,
  StampMark,
  TONES,
  Tick,
  Type,
  handLine,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. What goes back: four files in a row, and an envelope.
   ------------------------------------------------------------------ */

const filesCss = `
.s-rrc1-file { animation: s-rrc1-lift 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1.1s); }
@keyframes s-rrc1-lift {
  0%, 18%, 100% { transform: translateY(0); }
  9% { transform: translateY(-9px); }
}
.s-rrc1-post { animation: s-rrc1-nudge 4s ease-in-out infinite; }
@keyframes s-rrc1-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
`

const FILES = [
  ['cover letter', 'to the editor', 'amber', 3],
  ['response letter', 'every comment', 'blue', 7],
  ['marked copy', 'changes shown', 'paper', 7],
  ['clean copy', 'no marks', 'green', 7],
]

export function FilesScene() {
  return (
    <Scene
      w={800}
      h={300}
      top={10}
      css={filesCss}
      className="s-rrc1"
      label="Four sheets stand in a row, labelled cover letter, response letter, marked copy with changes shown and clean copy with no marks. An arrow leads from them to an envelope addressed to the editor"
    >
      <Hand x={330} y={46} size={23} anchor="middle" weight={700}>
        what goes back to the journal
      </Hand>
      {FILES.map(([name, job, tone, lines], i) => {
        const x = 40 + i * 150
        return (
          <g key={name}>
            <Place x={0} y={0}>
              <Anim className="s-rrc1-file" style={{ '--i': i }}>
                <Sheet x={x} y={70} w={112} h={140} tone={tone} lines={lines} fold={16} seed={110 + i * 9} title={i < 2} />
                {i === 2 ? (
                  <g>
                    <rect x={x + 8} y={128} width={70} height={11} fill={TONES.amber.mid} opacity="0.6" />
                    <Ink d={handLine(x + 8, 113, x + 76, 113, 150, 0.4) + handLine(x + 8, 163, x + 62, 163, 151, 0.4)} c={TONES.red.ink} w={2.2} />
                  </g>
                ) : null}
              </Anim>
            </Place>
            <Hand x={x + 56} y={240} size={21} anchor="middle" weight={700}>
              {name}
            </Hand>
            <Hand x={x + 56} y={264} size={17} anchor="middle" c={INK_SOFT}>
              {job}
            </Hand>
          </g>
        )
      })}
      <Arrow from={[614, 140]} to={[672, 140]} bend={-0.15} seed={160} w={2.4} head={12} />
      <Place x={0} y={0}>
        <Anim className="s-rrc1-post">
          <Envelope x={684} y={108} w={92} h={62} seed={161} tone="amber" />
        </Anim>
      </Place>
      <Hand x={730} y={202} size={19} anchor="middle" c={INK_SOFT}>
        to the editor
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Sleep on it, then sort the comments into three boxes.
   ------------------------------------------------------------------ */

const sortCss = `
.s-rrc2-slip { animation: s-rrc2-drop 6s ease-in infinite; animation-delay: calc(var(--i) * 1s); }
@keyframes s-rrc2-drop {
  0%, 30%, 100% { transform: translateY(0); opacity: 1; }
  52% { transform: translateY(40px); opacity: 0; }
  64% { transform: translateY(0); opacity: 0; }
  76% { transform: translateY(0); opacity: 1; }
}
.s-rrc2 .pip-body { animation: s-rrc2-breathe 4s ease-in-out infinite; }
@keyframes s-rrc2-breathe {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
`

const BOXES = [
  ['agree', '15', 'green'],
  ['more work', '6', 'amber'],
  ['disagree', '2', 'red'],
]

export function SortScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={sortCss}
      className="s-rrc2"
      label="A sleepy paper character rests under a moon with the words day one, sleep on it. An arrow leads to three boxes labelled agree with 15 comments, more work with 6 and disagree with 2"
    >
      <Floor y={FLOOR} x1={40} x2={760} seed={201} />

      <Moon x={78} y={70} r={18} seed={202} />
      <Hand x={128} y={132} size={21} anchor="middle" weight={700}>
        day one:
      </Hand>
      <Hand x={128} y={158} size={21} anchor="middle" c={INK_SOFT}>
        sleep on it
      </Hand>
      <Shadow x={128} y={FLOOR + 3} rx={30} ry={5} />
      <Place x={128} y={FLOOR} s={1.7}>
        <Pip mood="sleepy" arms="down" tone="amber" seed={203} />
      </Place>

      <Arrow from={[196, 232]} to={[262, 232]} bend={-0.12} seed={204} w={2.4} head={12} />

      <Hand x={510} y={50} size={23} anchor="middle" weight={700}>
        day two: 23 comments, three boxes
      </Hand>
      {BOXES.map(([name, count, tone], i) => {
        const x = 286 + i * 160
        return (
          <g key={name}>
            <Hand x={x + 26} y={128} size={42} anchor="middle" weight={700} c={TONES[tone].deep}>
              {count}
            </Hand>
            <Place x={0} y={0}>
              <Anim className="s-rrc2-slip" style={{ '--i': i }}>
                <Sheet x={x + 62} y={98} w={46} h={54} lines={3} fold={9} seed={220 + i * 5} tone={tone} />
              </Anim>
            </Place>
            <Crate x={x} y={FLOOR - 96} w={132} h={96} label={name} seed={230 + i} />
          </g>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. The format: one letter, five parts, a label for each.
   ------------------------------------------------------------------ */

const formatCss = `
.s-rrc3-band { animation: s-rrc3-show 10s ease-in-out infinite; animation-delay: calc(var(--i) * 1.6s); }
@keyframes s-rrc3-show {
  0%, 16%, 100% { opacity: 0.6; }
  5%, 11% { opacity: 1; }
}
.s-rrc3-label { animation: s-rrc3-step 10s ease-in-out infinite; animation-delay: calc(var(--i) * 1.6s); }
@keyframes s-rrc3-step {
  0%, 16%, 100% { transform: translateX(0); }
  5%, 11% { transform: translateX(-8px); }
}
`

const BANDS = [
  ['thank you, and the main changes', 'amber', 'the opening'],
  ['Reviewer 1', 'grey', 'a heading each'],
  ['1.1 the comment, copied in full', 'red', 'their words'],
  ['Yes. We have added six samples.', 'green', 'your answer'],
  ['the new text, page 8, lines 171 to 180', 'blue', 'the change'],
]

export function FormatScene() {
  return (
    <Scene
      w={800}
      h={340}
      top={10}
      css={formatCss}
      className="s-rrc3"
      label="A response letter divided into five coloured bands, each with a label in the margin: the opening, a heading for each reviewer, the comment in their words, your answer, and the change with its page and lines"
    >
      <Box x={60} y={26} w={470} h={312} r={6} fill={PAPER} seed={301} sw={2.2} />
      {BANDS.map(([text, tone, label], i) => {
        const top = 42 + i * 58
        return (
          <g key={label}>
            <g className="s-rrc3-band" style={{ '--i': i }}>
              <rect x={76} y={top} width={438} height={48} rx={5} fill={TONES[tone].tint} />
              {i === 1 ? (
                <Type x={90} y={top + 30} size={17} weight={700}>
                  {text.toUpperCase()}
                </Type>
              ) : (
                <Hand x={90} y={top + 31} size={21}>
                  {text}
                </Hand>
              )}
            </g>
            <Ink d={handLine(520, top + 24, 566, top + 24, 310 + i, 0.4)} c={TONES[tone].ink} w={2} />
            <Place x={0} y={0}>
              <Anim className="s-rrc3-label" style={{ '--i': i }}>
                <Hand x={578} y={top + 31} size={23} weight={700} c={TONES[tone].deep}>
                  {label}
                </Hand>
              </Anim>
            </Place>
          </g>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Point by point: a one-word reply, and a reply with four parts.
   ------------------------------------------------------------------ */

const pointsCss = `
.s-rrc4-part { animation: s-rrc4-slide 8s ease-in-out infinite; animation-delay: calc(var(--i) * 1.2s); }
@keyframes s-rrc4-slide {
  0%, 18%, 100% { transform: translateX(0); }
  9% { transform: translateX(8px); }
}
.s-rrc4-no { animation: s-rrc4-pulse 3s ease-in-out infinite; }
@keyframes s-rrc4-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.s-rrc4 .pip-arm-r { animation: s-rrc4-point 3s ease-in-out infinite; }
@keyframes s-rrc4-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-9deg); }
}
`

const PARTS = [
  ['the answer: yes or no', 'amber'],
  ['what you did', 'green'],
  ['the new text, quoted', 'blue'],
  ['the page and the line', 'pink'],
]

export function PointsScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={320}
      top={10}
      css={pointsCss}
      className="s-rrc4"
      label="On the left a note that only says Done, marked with a red cross. On the right a reply card with four parts ticked: the answer yes or no, what you did, the new text quoted, and the page and the line. A paper character points to the card"
    >
      <Floor y={FLOOR} x1={40} x2={760} seed={401} />

      <Type x={150} y={58} size={15} anchor="middle" weight={700} c={TONES.red.deep}>
        A WEAK REPLY
      </Type>
      <Box x={56} y={76} w={188} h={112} r={8} fill={TONES.pink.tint} seed={402} sw={1.9} />
      <Hand x={138} y={146} size={40} anchor="middle" weight={700}>
        Done.
      </Hand>
      <g className="s-rrc4-no">
        <Cross x={218} y={100} s={1.3} seed={403} />
      </g>
      <Hand x={150} y={218} size={19} anchor="middle" c={INK_SOFT}>
        what was done?
      </Hand>
      <Hand x={150} y={242} size={19} anchor="middle" c={INK_SOFT}>
        and where?
      </Hand>

      <Type x={586} y={42} size={15} anchor="middle" weight={700} c={TONES.green.deep}>
        A STRONG REPLY
      </Type>
      <Box x={420} y={54} w={332} h={232} r={8} fill={PAPER} seed={410} sw={2.1} double />
      {PARTS.map(([text, tone], i) => {
        const y = 68 + i * 53
        return (
          <Place key={text} x={0} y={0}>
            <Anim className="s-rrc4-part" style={{ '--i': i }}>
              <rect x={434} y={y} width={304} height={44} rx={6} fill={TONES[tone].tint} />
              <Type x={448} y={y + 28} size={15} weight={700} c={TONES[tone].deep}>
                {`${i + 1}`}
              </Type>
              <Hand x={470} y={y + 30} size={22}>
                {text}
              </Hand>
              <Tick x={714} y={y + 24} s={0.85} />
            </Anim>
          </Place>
        )
      })}

      <Shadow x={330} y={FLOOR + 3} rx={28} ry={5} />
      <Place x={330} y={FLOOR} s={1.6}>
        <Pip mood="happy" arms="point" look={1.8} tone="amber" glasses seed={421} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Three comments, and the reply each one got.
   ------------------------------------------------------------------ */

const examplesCss = `
.s-rrc5-reply { animation: s-rrc5-answer 9s ease-in-out infinite; animation-delay: calc(var(--i) * 1.8s); }
@keyframes s-rrc5-answer {
  0%, 20%, 100% { transform: translateX(0); }
  8%, 12% { transform: translateX(7px); }
}
`

const PAIRS = [
  ['1.3', 'only three samples?', 'agreed. now six each', 'agree', 'green'],
  ['2.2', 'treatment not clear', 'our fault. rewritten', 'clarify', 'blue'],
  ['1.7', 'test for 12 months', 'cannot. now a limitation', 'cannot do', 'amber'],
]

export function ExamplesScene() {
  return (
    <Scene
      w={800}
      h={310}
      top={10}
      css={examplesCss}
      className="s-rrc5"
      label="Three rows, each a reviewer comment with an arrow to its reply: only three samples, agreed and now six each; treatment not clear, our fault and rewritten; test for 12 months, cannot and now a limitation. The rows are tagged agree, clarify and cannot do"
    >
      {PAIRS.map(([no, ask, reply, tag, tone], i) => {
        const y = 32 + i * 94
        return (
          <g key={no}>
            <Box x={36} y={y} w={262} h={76} r={10} fill={TONES.grey.tint} seed={500 + i} sw={1.8} />
            <Type x={52} y={y + 24} size={13} weight={700} c={TONES.grey.deep}>
              {`COMMENT ${no}`}
            </Type>
            <Hand x={52} y={y + 56} size={23}>
              {ask}
            </Hand>
            <Arrow from={[306, y + 38]} to={[346, y + 38]} bend={0} seed={510 + i} w={2.2} head={10} />
            <Place x={0} y={0}>
              <Anim className="s-rrc5-reply" style={{ '--i': i }}>
                <Box x={356} y={y} w={300} h={76} r={10} fill={TONES[tone].tint} seed={520 + i} sw={1.8} />
                <Type x={372} y={y + 24} size={13} weight={700} c={TONES[tone].deep}>
                  RESPONSE
                </Type>
                <Hand x={372} y={y + 56} size={23} weight={700}>
                  {reply}
                </Hand>
              </Anim>
            </Place>
            <Hand x={676} y={y + 46} size={22} weight={700} c={TONES[tone].deep}>
              {tag}
            </Hand>
          </g>
        )
      })}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Two reviewers, opposite requests, and the author in the middle.
   ------------------------------------------------------------------ */

const disagreeCss = `
.s-rrc6-say { animation: s-rrc6-bob 4s ease-in-out infinite; }
.s-rrc6-say2 { animation: s-rrc6-bob 4s ease-in-out infinite; animation-delay: -2s; }
@keyframes s-rrc6-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.s-rrc6-me .pip-arm-l, .s-rrc6-me .pip-arm-r { animation: s-rrc6-shrug 3s ease-in-out infinite; }
@keyframes s-rrc6-shrug {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function DisagreeScene() {
  const FLOOR = 300
  return (
    <Scene
      w={800}
      h={335}
      top={10}
      css={disagreeCss}
      className="s-rrc6"
      label="Two reviewers in glasses stand on either side. One says make it shorter and the other says add more studies. Between them a paper character shrugs under a note that reads say what you chose, and why, with the words or ask the editor below"
    >
      <Floor y={FLOOR} x1={40} x2={760} seed={601} />

      <Place x={0} y={0}>
        <Anim className="s-rrc6-say">
          <Speech x={36} y={36} w={226} h={76} tx={128} ty={176} seed={602} tone="blue">
            <Type x={149} y={60} size={13} anchor="middle" weight={700} c={TONES.blue.deep}>
              REVIEWER 1
            </Type>
            <Hand x={149} y={94} size={25} anchor="middle" weight={700}>
              make it shorter
            </Hand>
          </Speech>
        </Anim>
      </Place>
      <Shadow x={120} y={FLOOR + 3} rx={28} ry={5} />
      <Place x={120} y={FLOOR} s={1.6}>
        <Pip mood="focused" arms="point" look={1.8} tone="blue" glasses seed={603} />
      </Place>

      <Place x={0} y={0}>
        <Anim className="s-rrc6-say2">
          <Speech x={538} y={36} w={226} h={76} tx={672} ty={176} seed={604} tone="green">
            <Type x={651} y={60} size={13} anchor="middle" weight={700} c={TONES.green.deep}>
              REVIEWER 2
            </Type>
            <Hand x={651} y={94} size={25} anchor="middle" weight={700}>
              add more studies
            </Hand>
          </Speech>
        </Anim>
      </Place>
      <Shadow x={680} y={FLOOR + 3} rx={28} ry={5} />
      <Place x={680} y={FLOOR} s={1.6} flip>
        <Pip mood="focused" arms="point" look={1.8} tone="green" glasses seed={605} />
      </Place>

      <Box x={292} y={38} w={216} h={92} r={8} fill={TONES.amber.tint} seed={606} sw={2} />
      <Hand x={400} y={78} size={23} anchor="middle" weight={700}>
        say what you chose,
      </Hand>
      <Hand x={400} y={108} size={23} anchor="middle" weight={700}>
        and why
      </Hand>

      <Shadow x={400} y={FLOOR + 3} rx={34} ry={6} />
      <Place x={400} y={FLOOR} s={1.9}>
        <Pip className="s-rrc6-me" mood="worried" arms="shrug" tone="amber" seed={607} />
      </Place>
      <Hand x={400} y={332} size={20} anchor="middle" c={INK_SOFT}>
        or ask the editor
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The checklist, day 52 of 60, and the envelope on its way.
   ------------------------------------------------------------------ */

const checklistCss = `
.s-rrc7 .check-tick { animation: s-rrc7-draw 9s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s); }
@keyframes s-rrc7-draw {
  0%, 5% { stroke-dashoffset: 1; }
  16%, 88% { stroke-dashoffset: 0; }
  98%, 100% { stroke-dashoffset: 1; }
}
.s-rrc7-post { animation: s-rrc7-fly 3.6s ease-in-out infinite; }
@keyframes s-rrc7-fly {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -5px); }
}
.s-rrc7-stamp { animation: s-rrc7-thump 9s ease-in-out infinite; }
@keyframes s-rrc7-thump {
  0%, 60%, 100% { transform: scale(1); }
  64% { transform: scale(1.12); }
  68% { transform: scale(1); }
}
.s-rrc7 .pip-arm-r { animation: s-rrc7-wave 1.8s ease-in-out infinite; }
@keyframes s-rrc7-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(12deg); }
}
`

const CHECKS = [
  'every comment answered',
  'a direct answer first',
  'changed text quoted',
  'pages and lines given',
  'co-authors agree',
  'four files ready',
]

export function ChecklistScene() {
  const FLOOR = 304
  return (
    <Scene
      w={800}
      h={330}
      top={10}
      css={checklistCss}
      className="s-rrc7"
      label="A clipboard checklist with six green ticks: every comment answered, a direct answer first, changed text quoted, pages and lines given, co-authors agree and four files ready. A calendar shows day 52 of 60, an envelope flies off, a green stamp reads accepted and a paper character waves"
    >
      <Floor y={FLOOR} x1={40} x2={760} seed={701} />

      <Checklist x={56} y={50} w={310} items={6} done={6} seed={702} />
      {CHECKS.map((line, i) => (
        <g key={line}>
          <rect x={86} y={74 + i * 26} width={268} height={22} fill={PAPER} />
          <Hand x={92} y={93 + i * 26} size={20}>
            {line}
          </Hand>
        </g>
      ))}

      <Calendar x={410} y={54} w={96} h={104} day="52" month="DAY" tone="red" seed={710} />
      <Hand x={458} y={186} size={22} anchor="middle" c={INK_SOFT}>
        of 60
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-rrc7-post">
          <Motion x={606} y={98} angle={180} count={3} length={22} gap={11} seed={711} />
          <Envelope x={620} y={66} w={110} h={68} seed={712} tone="amber" />
        </Anim>
      </Place>
      <Hand x={675} y={166} size={22} anchor="middle" weight={700}>
        resubmitted
      </Hand>

      <Place x={682} y={240}>
        <Anim className="s-rrc7-stamp" spin>
          <StampMark x={0} y={0} w={136} h={46} text="ACCEPTED" tone="green" rotate={-8} size={20} bg={PAPER} seed={713} />
        </Anim>
      </Place>

      <Shadow x={536} y={FLOOR + 3} rx={30} ry={5} />
      <Place x={536} y={FLOOR} s={1.7}>
        <Pip mood="grin" arms="wave" look={1.8} tone="amber" glasses seed={721} />
      </Place>
    </Scene>
  )
}
