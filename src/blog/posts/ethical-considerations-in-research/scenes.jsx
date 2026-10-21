import {
  Anim,
  Arrow,
  Box,
  Calendar,
  Checklist,
  Crate,
  Cross,
  Desk,
  Floor,
  Grid,
  Hand,
  INK_SOFT,
  Ink,
  Key,
  Pip,
  Place,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Stack,
  Stamp,
  StampMark,
  Sticky,
  TEXT_LINE,
  TONES,
  Type,
  handEllipse,
  handLine,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. One line in the proposal, five duties underneath it.
   ------------------------------------------------------------------ */

const DUTIES = [
  { x: 380, y: 44, tone: 'pink', word: 'consent' },
  { x: 500, y: 44, tone: 'blue', word: 'privacy' },
  { x: 620, y: 44, tone: 'amber', word: 'no harm' },
  { x: 440, y: 150, tone: 'green', word: 'fair choice' },
  { x: 580, y: 150, tone: 'red', word: 'honest data' },
]

const meaningCss = `
.s-eth1-note { animation: s-eth1-lift 6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.5s - 6s); }
.s-eth1-ritika .pip-body { animation: s-eth1-bob 3.2s ease-in-out infinite; }
@keyframes s-eth1-lift {
  0%, 40%, 100% { transform: translateY(0); }
  20% { transform: translateY(-7px); }
}
@keyframes s-eth1-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function MeaningScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={meaningCss} className="s-eth1" label="A proposal sheet with the single line all ethical considerations sends an arrow to five sticky notes reading consent, privacy, no harm, fair choice and honest data, while a paper character watches in surprise">
      <Floor y={floor} x1={30} x2={770} seed={101} />

      <Sheet x={130} y={70} w={170} h={190} lines={0} fold={20} seed={102} sw={1.8} />
      <Ink d={handLine(148, 112, 270, 112, 103, 0.4) + handLine(148, 130, 250, 130, 104, 0.4)} c={TEXT_LINE} w={1.5} />
      <Hand x={215} y={176} size={19} anchor="middle" weight={700}>
        all ethical
      </Hand>
      <Hand x={215} y={200} size={19} anchor="middle" weight={700}>
        considerations
      </Hand>
      <Ink d={handLine(150, 210, 282, 210, 105, 0.5)} c={TONES.red.ink} w={2.2} />

      <Arrow from={[308, 170]} to={[372, 140]} bend={-0.2} seed={106} w={2} head={11} />

      {DUTIES.map((d, i) => (
        <g key={d.word} className="s-eth1-note" style={{ '--i': i }}>
          <Sticky x={d.x} y={d.y} w={108} h={88} tone={d.tone} lines={0} seed={110 + i * 4} />
          <Hand x={d.x + 54} y={d.y + 56} size={d.word.length > 8 ? 18 : 21} anchor="middle" weight={700} c={TONES[d.tone].deep}>
            {d.word}
          </Hand>
        </g>
      ))}

      <Shadow x={64} y={floor + 2} rx={28} ry={4} />
      <Place x={64} y={floor} s={1.35}>
        <g className="s-eth1-ritika">
          <Pip mood="surprised" arms="think" tone="pink" look={1.6} seed={130} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Consent read aloud, a witness beside her, a free choice.
   ------------------------------------------------------------------ */

const consentCss = `
.s-eth2-bubble { animation: s-eth2-float 4s ease-in-out infinite; }
.s-eth2-woman .pip-body { animation: s-eth2-nod 3.4s ease-in-out infinite; }
.s-eth2-ritika .pip-body { animation: s-eth2-bob 3s ease-in-out infinite; }
@keyframes s-eth2-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
@keyframes s-eth2-nod {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-3deg); }
  60% { transform: rotate(1deg); }
}
@keyframes s-eth2-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
`

export function ConsentScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={consentCss} className="s-eth2" label="A student reads an information sheet aloud in Hindi and Chhattisgarhi to a woman, saying you can say no, any time, while a witness in glasses stands beside them and a thumb impression and a signature line wait on the consent form">
      <Floor y={floor} x1={30} x2={770} seed={201} />

      <Place x={0} y={0}>
        <Anim className="s-eth2-bubble">
          <Speech x={150} y={40} w={250} h={86} tx={176} ty={150} seed={202}>
            <Hand x={275} y={76} size={22} anchor="middle" weight={700}>
              you can say no,
            </Hand>
            <Hand x={275} y={106} size={22} anchor="middle" weight={700} c={TONES.pink.deep}>
              any time
            </Hand>
          </Speech>
        </Anim>
      </Place>

      <Shadow x={150} y={floor + 2} rx={30} ry={4} />
      <Place x={150} y={floor} s={1.4}>
        <g className="s-eth2-ritika">
          <Pip mood="happy" arms="hold" tone="pink" look={1.6} seed={210}>
            <Sheet x={-14} y={-33} w={28} h={30} lines={3} fold={6} seed={211} sw={1.3} />
          </Pip>
        </g>
      </Place>
      <Type x={150} y={316} size={13} anchor="middle" weight={700} c={INK_SOFT}>
        Hindi, Chhattisgarhi
      </Type>

      <Shadow x={400} y={floor + 2} rx={30} ry={4} />
      <Place x={400} y={floor} s={1.4} flip>
        <g className="s-eth2-woman">
          <Pip mood="focused" arms="think" tone="amber" look={1.4} seed={220} />
        </g>
      </Place>

      <Shadow x={540} y={floor + 2} rx={26} ry={4} />
      <Place x={540} y={floor} s={1.2} flip>
        <Pip mood="happy" arms="down" tone="blue" glasses look={1} seed={230} />
      </Place>
      <Hand x={540} y={204} size={18} anchor="middle" weight={700} c={INK_SOFT}>
        witness
      </Hand>

      <Sheet x={612} y={70} w={140} h={190} lines={4} fold={18} seed={240} sw={1.8} />
      <Type x={626} y={186} size={13} weight={700} c={INK_SOFT}>
        CONSENT
      </Type>
      <Ink d={handLine(626, 236, 700, 236, 241, 0.4)} w={1.5} />
      <Ink d={handEllipse(726, 228, 11, 14, { seed: 242, amp: 0.5 }) + handEllipse(726, 228, 6, 8, { seed: 243, amp: 0.5 })} c={TONES.blue.ink} w={1.4} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Names become codes; the key lives in a locked box.
   ------------------------------------------------------------------ */

const CODES = ['W07', 'W08', 'W09', 'W10']

const privacyCss = `
.s-eth3-key { animation: s-eth3-jiggle 3s ease-in-out infinite; }
.s-eth3-code { animation: s-eth3-show 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.6s - 7s); }
@keyframes s-eth3-jiggle {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
@keyframes s-eth3-show {
  0%, 100% { opacity: 1; }
  10% { opacity: 0.2; }
  22% { opacity: 1; }
}
`

export function PrivacyScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={privacyCss} className="s-eth3" label="A sheet of names scribbled out becomes a sheet of codes W07 to W10, and the key that links them sits in a separate locked box, while a paper character holds the box">
      <Floor y={floor} x1={30} x2={770} seed={301} />

      <Sheet x={60} y={50} w={160} h={210} lines={0} fold={20} seed={302} sw={1.8} />
      <Hand x={140} y={96} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        names
      </Hand>
      {[0, 1, 2, 3].map((i) => (
        <Ink key={i} d={handLine(84, 130 + i * 32, 196, 126 + i * 32, 310 + i, 1.4) + handLine(84, 124 + i * 32, 196, 132 + i * 32, 320 + i, 1.4)} c={INK_SOFT} w={2} />
      ))}

      <Arrow from={[230, 156]} to={[300, 156]} bend={0.1} seed={330} w={2} head={11} />

      <Sheet x={310} y={50} w={160} h={210} lines={0} fold={20} seed={332} sw={1.8} />
      <Hand x={390} y={96} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        codes
      </Hand>
      {CODES.map((code, i) => (
        <g key={code} className="s-eth3-code" style={{ '--i': i }}>
          <Type x={340} y={136 + i * 32} size={20} weight={700} c={TONES.blue.deep}>
            {code}
          </Type>
          <Ink d={handLine(392, 130 + i * 32, 450, 130 + i * 32, 340 + i, 0.4)} c={TEXT_LINE} w={1.5} />
        </g>
      ))}

      <Ink d={handLine(500, 40, 500, 290, 350, 1)} c={INK_SOFT} w={1.4} dash="6 7" />
      <Hand x={500} y={36} size={16} anchor="middle" weight={700} c={INK_SOFT}>
        kept apart
      </Hand>

      <Crate x={560} y={190} w={110} h={80} label="key list" seed={360} />
      <Place x={606} y={174}>
        <Anim className="s-eth3-key" origin={[0, 0]}>
          <Key x={0} y={0} s={0.9} angle={-20} tone="amber" seed={362} />
        </Anim>
      </Place>

      <Shadow x={730} y={floor + 2} rx={26} ry={4} />
      <Place x={730} y={floor} s={1.2} flip>
        <Pip mood="focused" arms="point" tone="pink" look={1.4} seed={370} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Risks against benefits, weighed before the first interview.
   ------------------------------------------------------------------ */

const harmCss = `
.s-eth4 .scale-beam { animation: s-eth4-rock 5s ease-in-out infinite; }
.s-eth4-guide .pip-arm-r { animation: s-eth4-point 2.4s ease-in-out infinite alternate; }
@keyframes s-eth4-rock {
  0%, 100% { transform: rotate(3deg); }
  50% { transform: rotate(-2deg); }
}
@keyframes s-eth4-point {
  from { transform: rotate(0deg); }
  to { transform: rotate(-8deg); }
}
`

export function HarmScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={harmCss} className="s-eth4" label="A balance scale with a red sheet labelled risks, listing stigma and lost work, in one pan and a green sheet labelled benefits in the other, rocking gently, with the words fair pay, not a bribe, and a guide in glasses pointing at it">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Scale
        x={400}
        y={floor}
        s={1.4}
        seed={402}
        left={<Sheet x={270} y={150} w={42} h={55} tone="red" lines={3} fold={8} seed={404} sw={1.4} />}
        right={<Sheet x={488} y={150} w={42} h={55} tone="green" lines={3} fold={8} seed={406} sw={1.4} />}
      />
      <Hand x={291} y={262} size={22} anchor="middle" weight={700} c={TONES.red.deep}>
        risks
      </Hand>
      <Hand x={509} y={262} size={22} anchor="middle" weight={700} c={TONES.green.deep}>
        benefits
      </Hand>

      <Hand x={150} y={70} size={19} anchor="middle" weight={700} c={INK_SOFT}>
        stigma, lost work,
      </Hand>
      <Hand x={150} y={94} size={19} anchor="middle" weight={700} c={INK_SOFT}>
        painful memories
      </Hand>
      <Box x={600} y={56} w={160} h={66} r={8} fill={TONES.amber.tint} seed={410} sw={1.6} />
      <Hand x={680} y={84} size={19} anchor="middle" weight={700}>
        fair pay for time,
      </Hand>
      <Hand x={680} y={108} size={19} anchor="middle" weight={700} c={TONES.red.deep}>
        not a bribe
      </Hand>

      <Shadow x={90} y={floor + 2} rx={30} ry={4} />
      <Place x={90} y={floor} s={1.4}>
        <g className="s-eth4-guide">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.4} seed={420} />
        </g>
      </Place>

      <Shadow x={712} y={floor + 2} rx={28} ry={4} />
      <Place x={712} y={floor} s={1.3} flip>
        <Pip mood="focused" arms="think" tone="pink" look={1.2} seed={430} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Children: consent from a parent, and the child's own assent.
   ------------------------------------------------------------------ */

const KIDS = [
  { x: 300, s: 0.8, tone: 'amber', age: 'below 7', rule: 'parent\'s consent' },
  { x: 470, s: 0.95, tone: 'blue', age: '7 to 12', rule: '+ oral assent' },
  { x: 640, s: 1.1, tone: 'green', age: '12 to 18', rule: '+ written assent' },
]

const vulnerableCss = `
.s-eth5-kid .pip-body { animation: s-eth5-hop 3.6s ease-in-out infinite; animation-delay: calc(var(--i) * 0.4s - 3.6s); }
.s-eth5-parent .pip-arm-r { animation: s-eth5-wave 2.6s ease-in-out infinite alternate; }
@keyframes s-eth5-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-6px); }
}
@keyframes s-eth5-wave {
  from { transform: rotate(0deg); }
  to { transform: rotate(-10deg); }
}
`

export function VulnerableScene() {
  const floor = 290
  return (
    <Scene w={800} h={300} top={20} css={vulnerableCss} className="s-eth5" label="A parent stands beside three children of growing height labelled below 7 with parent's consent, 7 to 12 with oral assent added, and 12 to 18 with written assent added, under a heading that reads two permissions for a child">
      <Floor y={floor} x1={30} x2={770} seed={501} />

      <Hand x={400} y={56} size={24} anchor="middle" weight={700} c={TONES.amber.deep}>
        two permissions for a child
      </Hand>

      <Shadow x={110} y={floor + 2} rx={30} ry={4} />
      <Place x={110} y={floor} s={1.45}>
        <g className="s-eth5-parent">
          <Pip mood="happy" arms="wave" tone="red" look={1.4} seed={510} />
        </g>
      </Place>
      <Hand x={110} y={178} size={18} anchor="middle" weight={700} c={INK_SOFT}>
        parent
      </Hand>

      {KIDS.map((kid, i) => (
        <g key={kid.age}>
          <Shadow x={kid.x} y={floor + 2} rx={20 * kid.s} ry={3} />
          <Place x={kid.x} y={floor} s={kid.s}>
            <g className="s-eth5-kid" style={{ '--i': i }}>
              <Pip mood="grin" arms="down" tone={kid.tone} look={-1} seed={520 + i * 5} />
            </g>
          </Place>
          <Box x={kid.x - 70} y={98} w={140} h={74} r={8} fill={TONES[kid.tone].tint} seed={540 + i * 3} sw={1.5} />
          <Hand x={kid.x} y={128} size={21} anchor="middle" weight={700}>
            {kid.age}
          </Hand>
          <Hand x={kid.x} y={156} size={16} anchor="middle" weight={700} c={TONES[kid.tone].deep}>
            {kid.rule}
          </Hand>
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The committee stamps the proposal before fieldwork begins.
   ------------------------------------------------------------------ */

const committeeCss = `
.s-eth6-stamp { animation: s-eth6-press 6s ease-in-out infinite; }
.s-eth6-mark { animation: s-eth6-ink 6s ease-in-out infinite; }
.s-eth6-ritika .pip-body { animation: s-eth6-bob 3s ease-in-out infinite; }
@keyframes s-eth6-press {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-22px); }
  45% { transform: translateY(0); }
}
@keyframes s-eth6-ink {
  0%, 100% { opacity: 1; }
  30%, 44% { opacity: 0; }
  50% { opacity: 1; }
}
@keyframes s-eth6-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function CommitteeScene() {
  const floor = 300
  const desk = 214
  return (
    <Scene w={800} h={300} top={20} css={committeeCss} className="s-eth6" label="Three ethics committee members sit behind a desk where a stamp has just marked a proposal approved, beside a calendar, while a student waits on the left holding her papers before going into the field">
      <Floor y={floor} x1={30} x2={770} seed={601} />

      <Calendar x={690} y={36} w={68} h={74} day="2" month="NOV" tone="red" seed={602} />

      {[400, 515, 725].map((x, i) => (
        <Place key={x} x={x} y={desk + 24} s={1.2}>
          <Pip mood={i === 1 ? 'happy' : 'focused'} arms="down" tone={['paper', 'blue', 'amber'][i]} glasses={i !== 2} look={i === 2 ? -1.4 : 1.4} seed={610 + i * 5} />
        </Place>
      ))}
      <Desk y={desk} x1={340} x2={780} depth={24} seed={630} />
      <Ink d={handLine(360, desk + 24, 360, floor, 631, 0.3) + handLine(760, desk + 24, 760, floor, 632, 0.3)} w={2} />

      <Sheet x={560} y={desk - 62} w={118} h={62} lines={2} fold={12} seed={640} sw={1.6} />
      <g className="s-eth6-mark">
        <StampMark x={616} y={desk - 24} w={94} h={30} text="APPROVED" tone="green" rotate={-6} size={14} bg="#fdfaf3" seed={642} />
      </g>
      <Place x={0} y={0}>
        <Anim className="s-eth6-stamp">
          <Stamp x={616} y={desk - 66} s={0.8} tone="green" seed={644} />
        </Anim>
      </Place>

      <Hand x={150} y={70} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        approval first,
      </Hand>
      <Hand x={150} y={96} size={20} anchor="middle" weight={700} c={TONES.green.deep}>
        fieldwork after
      </Hand>

      <Shadow x={150} y={floor + 2} rx={30} ry={4} />
      <Place x={150} y={floor} s={1.4}>
        <g className="s-eth6-ritika">
          <Pip mood="worried" arms="hold" tone="pink" look={1.6} seed={650}>
            <Stack x={0} y={-6} w={22} h={28} count={3} spread={8} seed={651} />
          </Pip>
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Blanks reported as blanks, not filled in with an average.
   ------------------------------------------------------------------ */

const honestyCss = `
.s-eth7-cross { animation: s-eth7-strike 6s ease-in-out infinite; }
.s-eth7-ritika .pip-body { animation: s-eth7-hop 3.4s ease-in-out infinite; }
@keyframes s-eth7-strike {
  0%, 100% { opacity: 1; transform: scale(1); }
  15% { opacity: 0.2; transform: scale(0.8); }
  30% { opacity: 1; transform: scale(1); }
}
@keyframes s-eth7-hop {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-6px); }
}
`

export function HonestyScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={honestyCss} className="s-eth7" label="A data table with some ticked cells and some dashes for missing answers, labelled missing, 11, reported, beside a sticky note that says fill with the average? crossed out in red, while a paper character stands proudly">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Grid
        x={70}
        y={56}
        cols={4}
        rows={6}
        cw={70}
        rh={34}
        header="pink"
        marks={{ '1,1': 'tick', '1,3': 'dash', '2,2': 'tick', '2,3': 'tick', '3,1': 'dash', '3,3': 'tick', '4,2': 'dash', '4,1': 'tick', '5,3': 'dash', '5,2': 'tick' }}
        seed={702}
      />
      <Type x={105} y={79} size={14} anchor="middle" weight={700}>
        W
      </Type>
      {['W07', 'W08', 'W09', 'W10', 'W11'].map((code, i) => (
        <Type key={code} x={105} y={113 + i * 34} size={14} anchor="middle" weight={700} c={TONES.blue.deep}>
          {code}
        </Type>
      ))}
      <Type x={175} y={79} size={14} anchor="middle" weight={700}>
        hours
      </Type>
      <Type x={245} y={79} size={14} anchor="middle" weight={700}>
        pain
      </Type>
      <Type x={315} y={79} size={14} anchor="middle" weight={700}>
        cough
      </Type>
      <Hand x={210} y={282} size={20} anchor="middle" weight={700} c={TONES.blue.deep}>
        missing: 11, reported
      </Hand>

      <Sticky x={420} y={70} w={160} h={110} tone="amber" lines={0} seed={720} />
      <Hand x={500} y={118} size={20} anchor="middle" weight={700}>
        fill with
      </Hand>
      <Hand x={500} y={144} size={20} anchor="middle" weight={700}>
        the average?
      </Hand>
      <Place x={500} y={128}>
        <Anim className="s-eth7-cross" origin={[0, 0]}>
          <Cross x={0} y={0} s={4} w={3} seed={722} />
        </Anim>
      </Place>
      <Hand x={500} y={222} size={18} anchor="middle" weight={700} c={TONES.red.deep}>
        done quietly, that is
      </Hand>
      <Hand x={500} y={246} size={18} anchor="middle" weight={700} c={TONES.red.deep}>
        falsification
      </Hand>

      <Shadow x={696} y={floor + 2} rx={30} ry={4} />
      <Place x={696} y={floor} s={1.4} flip>
        <g className="s-eth7-ritika">
          <Pip mood="proud" arms="hips" tone="pink" seed={730} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. The vague line, rewritten as steps actually taken.
   ------------------------------------------------------------------ */

const STEPS = ['approval', 'consent', 'risks', 'confidentiality', 'payment']

const writingCss = `
.s-eth8 .check-tick { stroke-dashoffset: 0; animation: s-eth8-draw 8s ease-in-out infinite; animation-delay: calc(var(--i) * 0.7s - 8s); }
.s-eth8-guide .pip-body { animation: s-eth8-nod 3s ease-in-out infinite; }
@keyframes s-eth8-draw {
  0%, 100% { stroke-dashoffset: 0; }
  6% { stroke-dashoffset: 1; }
  20% { stroke-dashoffset: 0; }
}
@keyframes s-eth8-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function WritingScene() {
  const floor = 300
  return (
    <Scene w={800} h={300} top={20} css={writingCss} className="s-eth8" label="A small sheet with the line will be followed crossed out points with an arrow to a clipboard checklist of approval, consent, risks, confidentiality and payment, all ticked, while a guide in glasses nods and the student holds her revised proposal">
      <Floor y={floor} x1={30} x2={770} seed={801} />

      <Sheet x={170} y={90} w={130} h={150} lines={2} fold={16} seed={802} sw={1.7} />
      <Hand x={235} y={176} size={17} anchor="middle" weight={700}>
        will be followed
      </Hand>
      <Ink d={handLine(176, 170, 294, 172, 803, 0.6)} c={TONES.red.ink} w={2.4} />

      <Arrow from={[308, 166]} to={[378, 166]} bend={-0.15} seed={804} w={2} head={11} />

      <Checklist x={390} y={44} w={210} items={5} done={5} seed={810} />
      {STEPS.map((step, i) => (
        <Rect key={step} y={74 + i * 26} />
      ))}
      {STEPS.map((step, i) => (
        <Hand key={step} x={426} y={86 + i * 26} size={17} weight={700}>
          {step}
        </Hand>
      ))}

      <Shadow x={86} y={floor + 2} rx={28} ry={4} />
      <Place x={86} y={floor} s={1.35}>
        <Pip mood="proud" arms="hold" tone="pink" seed={830}>
          <Sheet x={-12} y={-31} w={24} h={26} tone="pink" lines={2} fold={6} seed={831} sw={1.3} />
        </Pip>
      </Place>

      <Shadow x={704} y={floor + 2} rx={30} ry={4} />
      <Place x={704} y={floor} s={1.4} flip>
        <g className="s-eth8-guide">
          <Pip mood="happy" arms="think" tone="green" glasses look={1.4} seed={840} />
        </g>
      </Place>
    </Scene>
  )
}

/* The checklist draws its own text lines; this pale strip sits over each
   one so the step names written on top stay readable. */
function Rect({ y }) {
  return <rect x={420} y={y} width={170} height={18} fill="#fdfaf3" />
}
