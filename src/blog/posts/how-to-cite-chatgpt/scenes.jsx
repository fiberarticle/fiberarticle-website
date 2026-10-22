import {
  Anim,
  Arrow,
  Book,
  Bot,
  Box,
  Crate,
  Cross,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  OpenBook,
  PAPER,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Sticky,
  TEXT_LINE,
  TONES,
  Tick,
  Type,
  handEllipse,
  handLine,
  laptopScreen,
} from '../../ink/index.js'

/* A small paper slip with a word on it, for cards being sorted. Anchor: top-left. */
function Slip({ x, y, w = 112, h = 34, tone = 'paper', seed, children }) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} r={4} fill={tone === 'paper' ? PAPER : `url(#fill-${tone})`} seed={seed} sw={1.6} />
      {children}
    </g>
  )
}

/* A chain link, the sign for a shared chat. Anchor: centre. */
function Link({ x, y, s = 1, c = TONES.blue.deep, seed = 1 }) {
  return (
    <g>
      <Ink d={handEllipse(x - 9 * s, y, 12 * s, 7 * s, { seed, amp: 0.4 })} c={c} w={2.4} />
      <Ink d={handEllipse(x + 9 * s, y, 12 * s, 7 * s, { seed: seed + 1, amp: 0.4 })} c={c} w={2.4} />
    </g>
  )
}

/* ------------------------------------------------------------------
   1. Words or ideas from the chat need a citation; help needs a note.
   ------------------------------------------------------------------ */

const whenCss = `
.s-cgpt1-slip { opacity: 0; animation: s-cgpt1-drop 4.5s ease-in infinite; }
.s-cgpt1-sorter .pip-body { animation: s-cgpt1-lean 4.5s ease-in-out infinite; }
@keyframes s-cgpt1-drop {
  0%, 10% { opacity: 0; transform: translateY(-18px); }
  20% { opacity: 1; transform: translateY(-18px); }
  55% { opacity: 1; transform: translateY(50px); }
  65%, 100% { opacity: 0; transform: translateY(50px); }
}
@keyframes s-cgpt1-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-4deg); }
}
`

const CRATES = [
  { word: 'cite it', tone: 'blue', items: ['pasted words', 'survey ideas'] },
  { word: 'disclose it', tone: 'pink', items: ['grammar fix'] },
  { word: 'check the paper', tone: 'green', items: ['5 references'] },
]

export function WhenScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={whenCss} className="s-cgpt1" label="Three crates labelled cite it, disclose it and check the paper; slips reading pasted words and survey ideas sit in the first, grammar fix in the second and 5 references in the third, while a paper character sorts a new slip into them">
      <Floor y={floor} x1={30} x2={770} seed={101} />
      {CRATES.map((crate, i) => {
        const x = 200 + i * 196
        const t = TONES[crate.tone]
        return (
          <g key={crate.word}>
            {crate.items.map((item, j) => (
              <Slip key={item} x={x + 6 + j * 22} y={186 - j * 30} w={128} tone={crate.tone} seed={110 + i * 5 + j}>
                <Hand x={x + 70 + j * 22} y={209 - j * 30} size={17} anchor="middle" weight={700}>
                  {item}
                </Hand>
              </Slip>
            ))}
            <Crate x={x} y={226} w={170} h={104} seed={120 + i} />
            <Box x={x + 20} y={258} w={130} h={36} r={4} fill={t.tint} stroke={t.deep} seed={125 + i} sw={1.6} />
            <Hand x={x + 85} y={283} size={19} anchor="middle" weight={700} c={t.deep}>
              {crate.word}
            </Hand>
          </g>
        )
      })}
      <Anim className="s-cgpt1-slip">
        <Slip x={402} y={92} w={100} tone="paper" seed={130}>
          <Hand x={452} y={115} size={16} anchor="middle" c={INK_SOFT}>
            translation
          </Hand>
        </Slip>
      </Anim>
      <Shadow x={110} y={floor + 2} rx={28} ry={4} />
      <Place x={110} y={floor} s={1.45}>
        <g className="s-cgpt1-sorter">
          <Pip mood="focused" arms="point" tone="green" look={1.4} seed={131} />
        </g>
      </Place>
      <Hand x={70} y={96} size={19} c={INK_SOFT}>
        which box?
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. APA: one chat with a link, or the tool in general.
   ------------------------------------------------------------------ */

const apaCss = `
.s-cgpt2-link { animation: s-cgpt2-wiggle 3s ease-in-out infinite; }
.s-cgpt2-guide .pip-body { animation: s-cgpt2-bob 3s ease-in-out infinite; }
@keyframes s-cgpt2-wiggle {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}
@keyframes s-cgpt2-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function ApaScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={apaCss} className="s-cgpt2" label="Two reference cards in APA style: on the left, a chat with a link, OpenAI, 2026, August 14, the chat title, Generative AI chat, ChatGPT and a share link; on the right, the tool, OpenAI, 2026, ChatGPT, Large language model and chatgpt.com; a paper character points at both">
      <Floor y={floor} x1={30} x2={770} seed={201} />

      <Box x={150} y={70} w={290} h={200} r={6} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={202} sw={2} />
      <Type x={168} y={100} size={16} weight={700}>
        A CHAT
      </Type>
      <Anim className="s-cgpt2-link" origin={[410, 94]}>
        <Link x={410} y={94} s={1} seed={203} />
      </Anim>
      <Type x={168} y={136} size={15}>OpenAI. (2026, August 14).</Type>
      <Type x={168} y={162} size={15} style={{ fontStyle: 'italic' }}>
        Survey questions for
      </Type>
      <Type x={168} y={184} size={15} style={{ fontStyle: 'italic' }}>
        lake boatmen
      </Type>
      <Type x={168} y={210} size={15}>[Generative AI chat].</Type>
      <Type x={168} y={234} size={15}>ChatGPT.</Type>
      <Type x={168} y={258} size={15} c={TONES.blue.deep}>chatgpt.com/share/...</Type>

      <Box x={470} y={70} w={290} h={200} r={6} fill={TONES.amber.tint} stroke={TONES.amber.deep} seed={204} sw={2} />
      <Type x={488} y={100} size={16} weight={700}>
        THE TOOL
      </Type>
      <Type x={488} y={136} size={15}>OpenAI. (2026).</Type>
      <Type x={488} y={162} size={15} style={{ fontStyle: 'italic' }}>
        ChatGPT
      </Type>
      <Type x={488} y={188} size={15}>[Large language model].</Type>
      <Type x={488} y={214} size={15} c={TONES.amber.deep}>https://chatgpt.com</Type>
      <Hand x={615} y={256} size={17} anchor="middle" c={INK_SOFT}>
        year of the latest update
      </Hand>

      <Shadow x={80} y={floor + 2} rx={26} ry={4} />
      <Place x={80} y={floor} s={1.4}>
        <g className="s-cgpt2-guide">
          <Pip mood="happy" arms="point" tone="green" look={1.4} seed={205} />
        </g>
      </Place>
      <Hand x={455} y={312} size={20} anchor="middle" weight={700}>
        in the text: (OpenAI, 2026)
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. MLA: your prompt takes the place of the title.
   ------------------------------------------------------------------ */

const mlaCss = `
.s-cgpt3-prompt { animation: s-cgpt3-slide 5s ease-in-out infinite; }
@keyframes s-cgpt3-slide {
  0%, 15% { transform: translate(0, 0); }
  50%, 80% { transform: translate(14px, -6px); }
  100% { transform: translate(0, 0); }
}
`

export function MlaScene() {
  const floor = 330
  const [sx, sy, sw2] = laptopScreen(150, floor, 230)
  return (
    <Scene w={800} h={300} top={40} css={mlaCss} className="s-cgpt3" label="A laptop shows a prompt typed into a chat; a sticky note carrying the prompt in quotation marks moves to the first line of a Works Cited card, whose author line is crossed out, followed by ChatGPT, the model, OpenAI, the date and the link">
      <Floor y={floor} x1={30} x2={770} seed={301} />
      <Laptop x={150} y={floor} w={230} seed={302}>
        <Box x={sx + 10} y={sy + 12} w={sw2 - 20} h={30} r={8} fill={TONES.green.tint} stroke={TONES.green.deep} seed={303} sw={1.3} />
        <Hand x={sx + 20} y={sy + 33} size={15}>
          explain the lake in
        </Hand>
        <Hand x={sx + 20} y={sy + 66} size={15} c={INK_SOFT}>
          this folk song...
        </Hand>
      </Laptop>

      <Arrow from={[262, 214]} to={[318, 166]} bend={-0.2} seed={304} c={TONES.green.deep} w={2} />

      <Anim className="s-cgpt3-prompt">
        <Sticky x={250} y={74} w={150} h={80} tone="green" lines={0} seed={305} />
        <Hand x={325} y={108} size={17} anchor="middle" weight={700}>
          "Explain the
        </Hand>
        <Hand x={325} y={132} size={17} anchor="middle" weight={700}>
          meaning..." prompt
        </Hand>
      </Anim>

      <Box x={440} y={66} w={320} h={250} r={6} fill={PAPER} seed={306} sw={2} double />
      <Type x={460} y={96} size={16} weight={700}>
        WORKS CITED
      </Type>
      <Type x={460} y={130} size={15} c={INK_SOFT}>author</Type>
      <Ink d={handLine(456, 125, 530, 125, 307, 0.4)} c={TONES.red.ink} w={2.2} />
      <Hand x={548} y={131} size={16} c={TONES.red.deep}>
        none: AI is not one
      </Hand>
      <Box x={456} y={146} w={290} h={32} r={4} fill={TONES.green.tint} stroke={TONES.green.deep} seed={308} sw={1.4} />
      <Hand x={468} y={169} size={17}>
        "your prompt" prompt.
      </Hand>
      <Type x={460} y={204} size={15} style={{ fontStyle: 'italic' }}>
        ChatGPT,
      </Type>
      <Type x={548} y={204} size={15}>model, OpenAI,</Type>
      <Type x={460} y={232} size={15}>3 Sept. 2026,</Type>
      <Type x={460} y={260} size={15} c={TONES.blue.deep}>chatgpt.com/share/...</Type>
      <Hand x={600} y={298} size={17} anchor="middle" c={INK_SOFT}>
        in the text: ("Explain the meaning")
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Harvard changes between universities; Chicago and IEEE use notes.
   ------------------------------------------------------------------ */

const otherCss = `
.s-cgpt4-shrug .pip-body { animation: s-cgpt4-hop 3s ease-in-out infinite; }
.s-cgpt4-q { animation: s-cgpt4-float 3s ease-in-out infinite; animation-delay: calc(var(--i) * -1s); }
@keyframes s-cgpt4-hop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes s-cgpt4-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

export function OtherStylesScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={otherCss} className="s-cgpt4" label="Three panels: Harvard shows three different cards from three universities with question marks over them and a paper character shrugging; Chicago shows a page with a small footnote; IEEE shows an acknowledgments page with a line about the AI system used">
      <Floor y={floor} x1={30} x2={770} seed={401} />

      <Box x={30} y={60} w={300} h={260} fill={TONES.pink.tint} stroke={TONES.pink.deep} seed={402} sw={2} />
      <Type x={48} y={90} size={17} weight={700}>
        HARVARD
      </Type>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Sheet x={130 + i * 62} y={112 + (i % 2) * 14} w={56} h={72} lines={3} fold={11} seed={403 + i} />
          <Anim className="s-cgpt4-q" style={{ '--i': i }}>
            <Hand x={158 + i * 62} y={106 + (i % 2) * 14} size={22} anchor="middle" weight={700} c={TONES.pink.deep}>
              ?
            </Hand>
          </Anim>
        </g>
      ))}
      <Hand x={226} y={234} size={16} anchor="middle" c={INK_SOFT}>
        three universities,
      </Hand>
      <Hand x={226} y={256} size={16} anchor="middle" c={INK_SOFT}>
        three answers
      </Hand>
      <Shadow x={76} y={floor - 8} rx={22} ry={3} />
      <Place x={76} y={floor - 10} s={1.2}>
        <g className="s-cgpt4-shrug">
          <Pip mood="worried" arms="shrug" tone="pink" seed={406} />
        </g>
      </Place>

      <Box x={350} y={60} w={200} h={260} fill={TONES.amber.tint} stroke={TONES.amber.deep} seed={407} sw={2} />
      <Type x={368} y={90} size={17} weight={700}>
        CHICAGO
      </Type>
      <Sheet x={390} y={108} w={120} h={180} lines={6} fold={16} seed={408} />
      <Hand x={481} y={146} size={14} c={TONES.amber.deep} weight={700}>
        1
      </Hand>
      <Ink d={handLine(398, 250, 500, 250, 409, 0.3)} w={1.2} />
      <Hand x={400} y={268} size={12} c={TONES.amber.deep}>
        1. Generated by
      </Hand>
      <Hand x={400} y={282} size={12} c={TONES.amber.deep}>
        ChatGPT, OpenAI
      </Hand>

      <Box x={570} y={60} w={200} h={260} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={410} sw={2} />
      <Type x={588} y={90} size={17} weight={700}>
        IEEE
      </Type>
      <Sheet x={610} y={108} w={120} h={180} lines={0} fold={16} seed={411} />
      <Type x={620} y={146} size={11} weight={700}>
        ACKNOWLEDGMENT
      </Type>
      <Hand x={620} y={174} size={14}>
        AI system used:
      </Hand>
      <Hand x={620} y={196} size={14} c={TONES.blue.deep}>
        which sections,
      </Hand>
      <Hand x={620} y={218} size={14} c={TONES.blue.deep}>
        how much
      </Hand>
      <Tick x={690} y={258} s={1.2} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. The citation points to the chat; the prompt says what you asked.
   ------------------------------------------------------------------ */

const inTextCss = `
.s-cgpt5-thread { animation: s-cgpt5-march 2s linear infinite; }
.s-cgpt5-writer .pip-body { animation: s-cgpt5-bob 3s ease-in-out infinite; }
@keyframes s-cgpt5-march {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -22; }
}
@keyframes s-cgpt5-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

export function InTextScene() {
  const floor = 330
  const [sx, sy, sw2] = laptopScreen(150, floor, 220)
  return (
    <Scene w={800} h={300} top={40} css={inTextCss} className="s-cgpt5" label="A laptop shows a chat with a share button and a chain link; a dashed line runs from it to a thesis page where the words OpenAI, 2026 are highlighted beside the prompt in quotation marks, and on to a folder tab marked Appendix B">
      <Floor y={floor} x1={30} x2={770} seed={501} />
      <Laptop x={150} y={floor} w={220} seed={502}>
        <Box x={sx + sw2 - 64} y={sy + 8} w={56} h={24} r={6} fill={TONES.blue.tint} stroke={TONES.blue.deep} seed={503} sw={1.3} />
        <Type x={sx + sw2 - 36} y={sy + 25} size={12} anchor="middle" weight={700}>
          share
        </Type>
        <Ink d={handLine(sx + 12, sy + 48, sx + sw2 - 30, sy + 48, 504, 0.3) + handLine(sx + 12, sy + 62, sx + sw2 - 60, sy + 62, 505, 0.3)} c={TEXT_LINE} w={1.4} />
      </Laptop>
      <Link x={150} y={196} s={1.1} seed={506} />

      <Ink className="s-cgpt5-thread" d="M178 196Q260 140 330 150" c={TONES.blue.ink} w={2.2} dash="7 4" scale />

      <Sheet x={330} y={70} w={230} h={240} lines={0} fold={22} seed={507} />
      <Hand x={348} y={124} size={16}>
        When asked to suggest
      </Hand>
      <Hand x={348} y={148} size={16}>
        survey questions,
      </Hand>
      <path d="M346 158h126v28h-126Z" fill={TONES.amber.mid} opacity="0.55" />
      <Hand x={350} y={178} size={17} weight={700}>
        (OpenAI, 2026)
      </Hand>
      <Hand x={348} y={204} size={16}>
        proposed twelve...
      </Hand>
      <Hand x={348} y={240} size={15} c={INK_SOFT}>
        full chat: Appendix B
      </Hand>

      <Ink className="s-cgpt5-thread" d="M560 236Q610 256 640 228" c={TONES.blue.ink} w={2.2} dash="7 4" scale />
      <path d="M640 150h50l8 -12h70v170h-128Z" fill="url(#fill-amber)" />
      <Ink d="M640 150h50l8 -12h70v170h-128Z" w={1.8} />
      <Type x={704} y={196} size={15} anchor="middle" weight={700}>
        APPENDIX B
      </Type>
      <Hand x={704} y={226} size={15} anchor="middle" c={INK_SOFT}>
        prompts and
      </Hand>
      <Hand x={704} y={246} size={15} anchor="middle" c={INK_SOFT}>
        answers
      </Hand>

      <Shadow x={596} y={floor + 2} rx={22} ry={3} />
      <Place x={596} y={floor} s={1.1}>
        <g className="s-cgpt5-writer">
          <Pip mood="happy" arms="write" tone="green" seed={508} />
        </g>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. The chatbot points; the paper you open is the source.
   ------------------------------------------------------------------ */

const sourceCss = `
.s-cgpt6-lens { animation: s-cgpt6-scan 6s ease-in-out infinite; }
@keyframes s-cgpt6-scan {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(190px); }
}
`

const REFS = [
  { mark: 'tick', word: 'real' },
  { mark: 'tick', word: 'real' },
  { mark: 'tick', word: 'real' },
  { mark: 'odd', word: 'other lake' },
  { mark: 'gone', word: 'not found' },
]

export function SourceScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={sourceCss} className="s-cgpt6" label="A robot hands over five reference slips; a magnifying glass checks them, three marked real with ticks, one marked other lake with a question mark and one dashed slip marked not found with a cross; an arrow leads from the real ones to an open textbook and a paper character reading it">
      <Floor y={floor} x1={30} x2={770} seed={601} />
      <Shadow x={80} y={floor + 2} rx={30} ry={4} />
      <Bot x={80} y={floor} s={1.2} tone="blue" seed={602} />

      {REFS.map((ref, i) => {
        const x = 150 + i * 78
        const gone = ref.mark === 'gone'
        return (
          <g key={i}>
            {gone ? (
              <Ink d={handLine(x, 190, x + 66, 190, 610 + i, 0.3) + handLine(x + 66, 190, x + 66, 240, 611 + i, 0.3) + handLine(x + 66, 240, x, 240, 612 + i, 0.3) + handLine(x, 240, x, 190, 613 + i, 0.3)} c={INK_SOFT} w={1.6} dash="5 5" />
            ) : (
              <Box x={x} y={190} w={66} h={50} r={3} fill={PAPER} seed={620 + i} sw={1.5} />
            )}
            {!gone ? <Ink d={handLine(x + 8, 204, x + 54, 204, 630 + i, 0.3) + handLine(x + 8, 214, x + 44, 214, 635 + i, 0.3)} c={TONES.grey.mid} w={1.4} /> : null}
            <Hand x={x + 33} y={266} size={14} anchor="middle" c={INK_SOFT}>
              {ref.word}
            </Hand>
            {ref.mark === 'tick' ? <Tick x={x + 33} y={226} s={0.9} /> : null}
            {ref.mark === 'odd' ? (
              <Hand x={x + 33} y={234} size={24} anchor="middle" weight={700} c={TONES.amber.deep}>
                ?
              </Hand>
            ) : null}
            {gone ? <Cross x={x + 33} y={216} s={0.9} seed={640 + i} /> : null}
          </g>
        )
      })}

      <Place x={0} y={0}>
        <Anim className="s-cgpt6-lens">
          <Magnifier x={186} y={150} r={22} angle={60} tone="amber" seed={650} />
        </Anim>
      </Place>

      <Arrow from={[300, 286]} to={[560, 290]} bend={0.12} seed={651} c={TONES.green.deep} w={2} />
      <OpenBook x={640} y={276} w={140} tone="green" seed={652} />
      <Hand x={640} y={180} size={17} anchor="middle" c={TONES.green.deep} weight={700}>
        cite what you read
      </Hand>
      <Shadow x={735} y={floor + 2} rx={20} ry={3} />
      <Place x={735} y={floor} s={1}>
        <Pip mood="focused" arms="hold" tone="green" look={-1.6} glasses seed={653} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. A citation marks one passage; a disclosure describes your use.
   ------------------------------------------------------------------ */

const discloseCss = `
.s-cgpt7-pen { animation: s-cgpt7-sign 3.6s ease-in-out infinite; }
.s-cgpt7-guide .pip-body { animation: s-cgpt7-turn 4s ease-in-out infinite; }
@keyframes s-cgpt7-sign {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(18px, -2px); }
}
@keyframes s-cgpt7-turn {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}
`

export function DiscloseScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={discloseCss} className="s-cgpt7" label="On the left, a page with one quoted passage in a bracket and a citation tag beside it, labelled cite; on the right, a disclosure page that begins I used ChatGPT to, with a signature line and a pen, labelled disclose; a paper character stands between them">
      <Floor y={floor} x1={30} x2={770} seed={701} />

      <Sheet x={90} y={70} w={220} h={240} lines={0} fold={22} seed={702} />
      <Ink d={handLine(108, 110, 290, 110, 703, 0.3) + handLine(108, 126, 260, 126, 704, 0.3)} c={TONES.grey.mid} w={1.5} />
      <path d="M108 142h178v54h-178Z" fill={TONES.blue.tint} />
      <Ink d="M104 140q-6 0 -6 8v40q0 8 6 8" c={TONES.blue.deep} w={2.2} />
      <Hand x={114} y={164} size={15}>
        "ChatGPT's words
      </Hand>
      <Hand x={114} y={186} size={15}>
        in quotes"
      </Hand>
      <Ink d={handLine(108, 216, 290, 216, 705, 0.3) + handLine(108, 232, 250, 232, 706, 0.3) + handLine(108, 248, 280, 248, 707, 0.3)} c={TONES.grey.mid} w={1.5} />
      <Box x={196} y={196} w={108} h={26} r={6} fill={TONES.amber.tint} stroke={TONES.amber.deep} seed={708} sw={1.4} />
      <Hand x={250} y={214} size={14} anchor="middle" weight={700}>
        (OpenAI, 2026)
      </Hand>
      <Type x={200} y={296} size={16} anchor="middle" weight={700} c={TONES.blue.deep}>
        CITE
      </Type>

      <Shadow x={400} y={floor + 2} rx={24} ry={4} />
      <Place x={400} y={floor} s={1.3}>
        <g className="s-cgpt7-guide">
          <Pip mood="happy" arms="shrug" tone="green" seed={709} />
        </g>
      </Place>

      <Sheet x={490} y={70} w={220} h={240} lines={0} fold={22} seed={710} />
      <Type x={508} y={104} size={13} weight={700}>
        USE OF AI
      </Type>
      <Hand x={508} y={134} size={15}>
        I used ChatGPT to
      </Hand>
      <Hand x={508} y={156} size={15}>
        correct grammar and
      </Hand>
      <Hand x={508} y={178} size={15}>
        brainstorm questions.
      </Hand>
      <Hand x={508} y={200} size={15} c={INK_SOFT}>
        I checked all text.
      </Hand>
      <Ink d={handLine(512, 252, 660, 252, 711, 0.3)} w={1.4} />
      <Ink d="M520 246q8 -14 16 -2q6 10 14 -4q6 -8 12 2q8 10 20 -6" c={TONES.blue.deep} w={1.8} />
      <Place x={0} y={0}>
        <Anim className="s-cgpt7-pen">
          <Ink d={handLine(586, 240, 624, 206, 712, 0.2)} c={INK} w={4} />
          <Ink d={handLine(586, 240, 590, 236, 713, 0.1)} c={TONES.amber.ink} w={4} />
        </Anim>
      </Place>
      <Type x={600} y={296} size={16} anchor="middle" weight={700} c={TONES.pink.deep}>
        DISCLOSE
      </Type>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. One red circle became three clear fixes.
   ------------------------------------------------------------------ */

const exampleCss = `
.s-cgpt8-circle { animation: s-cgpt8-ring 5s ease-in-out infinite; }
.s-cgpt8-proud .pip-body { animation: s-cgpt8-hop 2.6s ease-in-out infinite; }
@keyframes s-cgpt8-ring {
  0%, 60% { stroke-dashoffset: 0; }
  72%, 80% { stroke-dashoffset: 1; }
  100% { stroke-dashoffset: 0; }
}
@keyframes s-cgpt8-hop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`

export function ExampleScene() {
  const floor = 330
  return (
    <Scene w={800} h={300} top={40} css={exampleCss} className="s-cgpt8" label="Before and after: a first draft page with ChatGPT, 2026 circled in red, and an arrow to the final page with a textbook citation, OpenAI, 2026 for the survey chat, Appendix B and a disclosure line, each with a green tick, while a paper character hops beside it">
      <Floor y={floor} x1={30} x2={770} seed={801} />
      <Type x={160} y={66} size={16} anchor="middle" weight={700} c={TONES.red.deep}>
        FIRST DRAFT
      </Type>
      <Sheet x={60} y={80} w={200} h={230} lines={0} fold={20} seed={802} />
      <Ink d={handLine(76, 120, 240, 120, 803, 0.3) + handLine(76, 138, 220, 138, 804, 0.3) + handLine(76, 156, 236, 156, 805, 0.3) + handLine(76, 174, 150, 174, 806, 0.3)} c={TONES.grey.mid} w={1.5} />
      <Hand x={160} y={204} size={18} anchor="middle" weight={700}>
        (ChatGPT, 2026)
      </Hand>
      <path
        className="s-cgpt8-circle"
        d={handEllipse(160, 198, 84, 22, { seed: 807, amp: 0.8 })}
        pathLength="1"
        strokeDasharray="1"
        fill="none"
        stroke={TONES.red.ink}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      <Ink d={handLine(76, 240, 230, 240, 808, 0.3) + handLine(76, 258, 200, 258, 809, 0.3)} c={TONES.grey.mid} w={1.5} />
      <Hand x={240} y={250} size={22} c={TONES.red.ink} weight={700}>
        ?
      </Hand>

      <Arrow from={[286, 196]} to={[360, 196]} bend={-0.1} seed={810} c={INK} w={2.2} />

      <Type x={500} y={66} size={16} anchor="middle" weight={700} c={TONES.green.deep}>
        FINAL VERSION
      </Type>
      <Sheet x={380} y={80} w={240} h={230} lines={0} fold={20} seed={811} />
      {['textbook cited', '(OpenAI, 2026)', 'Appendix B', 'disclosure line'].map((word, i) => (
        <g key={word}>
          <Hand x={398} y={132 + i * 44} size={18}>
            {word}
          </Hand>
          <Tick x={590} y={126 + i * 44} s={0.9} />
        </g>
      ))}

      <Book x={634} y={150} w={50} h={64} tone="green" seed={812} label />
      <Shadow x={736} y={floor + 2} rx={24} ry={4} />
      <Place x={736} y={floor} s={1.3}>
        <g className="s-cgpt8-proud">
          <Pip mood="grin" arms="up" tone="green" seed={813} />
        </g>
      </Place>
    </Scene>
  )
}
