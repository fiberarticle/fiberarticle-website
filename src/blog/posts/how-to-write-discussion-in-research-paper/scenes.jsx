import {
  Anim,
  Box,
  Bulb,
  Chart,
  Cross,
  Floor,
  Flag,
  Ground,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pile,
  Pip,
  Place,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Speech,
  Sprout,
  Sticky,
  TONES,
  Thought,
  Tick,
  Torch,
  Type,
  handLine,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Two rooms: what happened, and what it means.
   ------------------------------------------------------------------ */

const purposeCss = `
.s-dsc1-thinker .pip-body { animation: s-dsc1-sway 3s ease-in-out infinite; }
.s-dsc1 .bulb-rays { animation: s-dsc1-glow 3s ease-in-out infinite; }
@keyframes s-dsc1-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-3deg); }
}
@keyframes s-dsc1-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
`

export function PurposeScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={50} css={purposeCss} className="s-dsc1" label="Two rooms side by side: in the results room a bar chart stands on its own, and in the discussion room a paper character thinks under a lit bulb about what the chart means">
      <Box x={60} y={80} w={320} h={250} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={101} sw={2} />
      <Box x={420} y={80} w={320} h={250} fill={TONES.green.tint} stroke={TONES.green.deep} seed={102} sw={2} />
      <Type x={80} y={112} size={18} weight={700}>
        RESULTS
      </Type>
      <Type x={440} y={112} size={18} weight={700}>
        DISCUSSION
      </Type>
      <Floor y={floor} x1={40} x2={760} seed={103} />
      <Chart x={130} y={300} w={190} h={140} bars={[0.5, 0.9, 0.45, 0.7]} tone="blue" seed={104} />
      <Hand x={220} y={145} size={18} anchor="middle" c={INK_SOFT}>
        what happened
      </Hand>

      <Bulb x={680} y={140} s={0.9} seed={105} />
      <Thought x={600} y={170} w={160} h={64} tx={530} ty={230} seed={106}>
        <Hand x={600} y={168} size={17} anchor="middle">
          what does it
        </Hand>
        <Hand x={600} y={188} size={17} anchor="middle" weight={700}>
          mean?
        </Hand>
      </Thought>
      <Shadow x={510} y={floor + 2} rx={30} ry={4} />
      <Place x={510} y={floor} s={1.5}>
        <g className="s-dsc1-thinker">
          <Pip mood="focused" arms="think" tone="amber" look={1.4} seed={107} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Five steps, climbed one at a time.
   ------------------------------------------------------------------ */

const STEPS = [
  { word: 'main finding', tone: 'blue' },
  { word: 'strengths, weaknesses', tone: 'amber' },
  { word: 'other studies', tone: 'pink' },
  { word: 'meaning', tone: 'green' },
  { word: 'open questions', tone: 'red' },
]

const structureCss = `
.s-dsc2-climber { animation: s-dsc2-climb 10s ease-in-out infinite; }
@keyframes s-dsc2-climb {
  0%, 8% { transform: translate(0, 0); }
  20%, 26% { transform: translate(130px, -40px); }
  38%, 44% { transform: translate(260px, -80px); }
  56%, 62% { transform: translate(390px, -120px); }
  74%, 86% { transform: translate(520px, -160px); }
  100% { transform: translate(0, 0); }
}
`

export function StructureScene() {
  const base = 340
  return (
    <Scene w={800} h={330} top={30} css={structureCss} className="s-dsc2" label="Five steps rise from left to right, labelled main finding, strengths and weaknesses, other studies, meaning and open questions, and a paper character climbs them one by one">
      <Floor y={base} x1={20} x2={780} seed={201} />
      {STEPS.map((step, i) => {
        const x = 60 + i * 130
        const top = base - 40 - i * 40
        const t = TONES[step.tone]
        return (
          <g key={step.word}>
            <Box x={x} y={top} w={130} h={base - top} fill={t.tint} stroke={t.deep} seed={210 + i} sw={1.8} />
            <Hand x={x + 65} y={top + 28} size={i === 1 ? 14 : 17} anchor="middle">
              {step.word}
            </Hand>
          </g>
        )
      })}
      <Place x={0} y={0}>
        <Anim className="s-dsc2-climber">
          <Place x={100} y={base - 40} s={1.1}>
            <Pip mood="happy" arms="up" tone="amber" seed={220} />
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. One sentence in the spotlight; the tables stay in the results.
   ------------------------------------------------------------------ */

const findingCss = `
.s-dsc3 .torch-beam { animation: s-dsc3-flicker 3.4s ease-in-out infinite; }
@keyframes s-dsc3-flicker {
  0%, 100% { opacity: 0.75; }
  50% { opacity: 1; }
}
`

export function FindingScene() {
  return (
    <Scene w={800} h={300} top={40} css={findingCss} className="s-dsc3" label="A torch shines on a single card that reads poor sleep was more common with phones in bed, while a pile of tables beside it is crossed out with a note saying not every number again">
      <Floor y={320} x1={30} x2={770} seed={301} />
      <Torch x={150} y={200} angle={0} reach={300} seed={302} />
      <Box x={330} y={130} w={250} h={130} r={6} fill={PAPER} stroke={TONES.blue.deep} seed={303} sw={2.2} />
      <Hand x={455} y={170} size={19} anchor="middle" weight={700}>
        poor sleep was
      </Hand>
      <Hand x={455} y={198} size={19} anchor="middle" weight={700}>
        more common among
      </Hand>
      <Hand x={455} y={226} size={19} anchor="middle" weight={700}>
        phone-in-bed users
      </Hand>
      <Hand x={455} y={110} size={17} anchor="middle" c={INK_SOFT}>
        one sentence
      </Hand>
      <Pile x={690} y={320} w={100} count={14} seed={304} />
      <Cross x={690} y={270} s={2} seed={305} />
      <Hand x={690} y={210} size={16} anchor="middle" c={TONES.red.deep}>
        not every
      </Hand>
      <Hand x={690} y={230} size={16} anchor="middle" c={TONES.red.deep}>
        number again
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Your finding on one pan, earlier studies on the other.
   ------------------------------------------------------------------ */

const compareCss = `
.s-dsc4 .scale-beam { animation: s-dsc4-tip 5s ease-in-out infinite; }
.s-dsc4-reader .pip-body { animation: s-dsc4-lean 5s ease-in-out infinite; }
@keyframes s-dsc4-tip {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}
@keyframes s-dsc4-lean {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}
`

export function CompareScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={50} css={compareCss} className="s-dsc4" label="A balance scale holds the student's own finding on one pan and two earlier studies on the other, tipping gently, while a paper character asks why they differ">
      <Floor y={floor} x1={40} x2={760} seed={401} />
      <Scale
        x={400}
        y={floor}
        s={1.6}
        seed={402}
        left={<Sheet x={255} y={172} w={40} h={50} tone="amber" lines={3} fold={9} seed={403} />}
        right={
          <g>
            <Sheet x={489} y={174} w={36} h={48} tone="blue" lines={3} fold={8} seed={404} />
            <Sheet x={525} y={178} w={36} h={44} tone="blue" lines={3} fold={8} seed={405} />
          </g>
        }
      />
      <Hand x={275} y={290} size={18} anchor="middle" c={INK_SOFT}>
        my finding
      </Hand>
      <Hand x={525} y={290} size={18} anchor="middle" c={INK_SOFT}>
        earlier studies
      </Hand>
      <Shadow x={680} y={floor + 2} rx={30} ry={4} />
      <Place x={680} y={floor} s={1.5}>
        <g className="s-dsc4-reader">
          <Pip mood="focused" arms="think" tone="green" glasses look={-1.5} seed={406} />
        </g>
      </Place>
      <Speech x={600} y={92} w={150} h={50} tx={660} ty={200} seed={407}>
        <Hand x={675} y={124} size={19} anchor="middle" weight={700}>
          why different?
        </Hand>
      </Speech>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Your own study under the reviewer's lens.
   ------------------------------------------------------------------ */

const LIMITS = ['cause? link only', 'self-reported', '3 hostels only']

const limitsCss = `
.s-dsc5-lens { animation: s-dsc5-scan 7.5s ease-in-out infinite; }
@keyframes s-dsc5-scan {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(0, 62px); }
  66% { transform: translate(0, 124px); }
}
`

export function LimitsScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={limitsCss} className="s-dsc5" label="A paper character holds up a magnifying glass to their own study, where three sticky notes mark its limits: it shows a link but not a cause, the answers were self-reported, and it covered only three hostels">
      <Floor y={floor} x1={30} x2={770} seed={501} />
      <Sheet x={300} y={70} w={190} h={250} lines={0} fold={20} seed={502} />
      <Type x={318} y={110} size={15} weight={700}>
        MY STUDY
      </Type>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Ink key={i} d={handLine(318, 136 + i * 28, 318 + 110 + (i % 3) * 20, 136 + i * 28, 503 + i, 0.3)} c="#cbbda6" w={1.6} />
      ))}
      {LIMITS.map((limit, i) => (
        <g key={limit}>
          <Sticky x={510} y={96 + i * 62} w={170} h={50} tone={['pink', 'amber', 'blue'][i]} lines={0} seed={510 + i} />
          <Hand x={595} y={128 + i * 62} size={18} anchor="middle" weight={700}>
            {limit}
          </Hand>
        </g>
      ))}
      <Place x={0} y={0}>
        <Anim className="s-dsc5-lens">
          <Magnifier x={400} y={150} r={30} angle={45} tone="amber" seed={520} />
        </Anim>
      </Place>
      <Shadow x={160} y={floor + 2} rx={30} ry={4} />
      <Place x={160} y={floor} s={1.5}>
        <Pip mood="focused" arms="point" tone="amber" glasses look={1.5} seed={521} />
      </Place>
      <Hand x={160} y={190} size={18} anchor="middle" c={INK_SOFT}>
        say it yourself
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. A small, sure step and a sign to the next study.
   ------------------------------------------------------------------ */

const futureCss = `
.s-dsc6-walker { animation: s-dsc6-walk 6s ease-in-out infinite; }
.s-dsc6 .flag-cloth { animation: s-dsc6-wave 2.4s ease-in-out infinite; }
@keyframes s-dsc6-walk {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(60px); }
}
@keyframes s-dsc6-wave {
  0%, 100% { transform: skewY(0deg); }
  50% { transform: skewY(-5deg); }
}
`

export function FutureScene() {
  const ground = 300
  return (
    <Scene w={800} h={300} top={40} css={futureCss} className="s-dsc6" label="A paper character walks along a path past a young sprout toward a signpost that reads next study: follow students for a semester, with a small flag planted where the current study ends">
      <Ground y={ground} bottom={340} seed={601} tufts={8} pebbles={5} />
      <Ink d={handLine(60, ground - 2, 740, ground - 2, 602, 0.6)} c={TONES.brown.mid} w={1.4} dash="6 8" />
      <Sprout x={280} y={ground} s={1.4} seed={603} />
      <Flag x={330} y={ground} h={80} tone="amber" seed={604} />
      <Hand x={330} y={ground - 100} size={16} anchor="middle" c={INK_SOFT}>
        my study ends here
      </Hand>
      <Ink d={handLine(600, ground, 600, ground - 150, 605, 0.3)} w={3} c={TONES.brown.deep} />
      <Box x={520} y={ground - 170} w={200} h={70} r={4} fill={TONES.green.tint} stroke={TONES.green.deep} seed={606} sw={2} />
      <Hand x={620} y={ground - 140} size={19} anchor="middle" weight={700}>
        next study:
      </Hand>
      <Hand x={620} y={ground - 116} size={16} anchor="middle">
        follow one semester
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-dsc6-walker">
          <Place x={130} y={ground} s={1.4}>
            <Pip mood="happy" arms="carry" tone="amber" look={1.5} seed={607} />
          </Place>
        </Anim>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. The first draft shouted; the second explained.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-dsc7-shout { animation: s-dsc7-shake 1.6s ease-in-out infinite; }
.s-dsc7-calm .pip-body { animation: s-dsc7-nod 3s ease-in-out infinite; }
@keyframes s-dsc7-shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
}
@keyframes s-dsc7-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
`

export function ExampleScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={exampleCss} className="s-dsc7" label="On the left a loud speech bubble shouts ban all phones and is crossed out in red; on the right a calm paper character holds a page that says a link, in three hostels, worth testing, with a green tick">
      <Floor y={floor} x1={30} x2={770} seed={701} />
      <Place x={0} y={0}>
        <Anim className="s-dsc7-shout" origin={[200, 160]}>
          <Speech x={80} y={90} w={240} h={90} tx={170} ty={250} seed={702} tone="red">
            <Hand x={200} y={132} size={21} anchor="middle" weight={700} c={TONES.red.deep}>
              BAN ALL PHONES!
            </Hand>
            <Hand x={200} y={162} size={18} anchor="middle" c={TONES.red.deep}>
              phones destroy sleep
            </Hand>
          </Speech>
        </Anim>
      </Place>
      <Cross x={200} y={235} s={2.4} seed={703} />
      <Hand x={200} y={300} size={18} anchor="middle" c={INK_SOFT}>
        first draft
      </Hand>

      <Shadow x={470} y={floor + 2} rx={30} ry={4} />
      <Place x={470} y={floor} s={1.5}>
        <g className="s-dsc7-calm">
          <Pip mood="happy" arms="point" tone="amber" look={1.5} seed={704} />
        </g>
      </Place>
      <Sheet x={540} y={90} w={200} h={200} lines={0} fold={20} seed={705} />
      {['a link, not a cause', 'in three hostels', 'worth testing', 'over a semester'].map((line, i) => (
        <Hand key={line} x={558} y={140 + i * 32} size={18} c={TONES.blue.deep}>
          {line}
        </Hand>
      ))}
      <Tick x={700} y={260} s={2} />
    </Scene>
  )
}
