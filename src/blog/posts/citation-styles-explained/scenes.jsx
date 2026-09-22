import {
  Anim,
  Arrow,
  Calendar,
  Chai,
  Desk,
  Envelope,
  Floor,
  Ground,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  OpenBook,
  Oval,
  PAPER,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  Sheet,
  Shelf,
  Sparkle,
  Stamp,
  StampMark,
  Sticky,
  Sun,
  TEXT_LINE,
  TONES,
  Type,
  Worm,
  ellipsePath,
  handEllipse,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. Why citation styles exist: a signpost that points back to the
      source, with pages drifting off towards the shelf it names.
   ------------------------------------------------------------------ */

const signCss = `
.s-cs1-arm { animation: s-cs1-wiggle 6s ease-in-out infinite; }
.s-cs1-page { animation: s-cs1-fly 6s linear infinite; }
@keyframes s-cs1-wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(2.5deg); }
  75% { transform: rotate(-2deg); }
}
@keyframes s-cs1-fly {
  0% { transform: translate(0, 0) rotate(-6deg); opacity: 0; }
  10% { opacity: 1; }
  50% { transform: translate(70px, -14px) rotate(4deg); }
  88% { opacity: 1; }
  100% { transform: translate(140px, 30px) rotate(10deg); opacity: 0; }
}
`

const ARMS = [
  { y: 124, dir: -1, tone: 'amber', label: 'credit', delay: '0s' },
  { y: 174, dir: 1, tone: 'blue', label: 'find it', delay: '-2s' },
  { y: 224, dir: -1, tone: 'green', label: 'trust', delay: '-4s' },
]

function SignArm({ y, dir, tone, label, delay, seed }) {
  const tip = 400 + dir * 116
  const back = 400 - dir * 20
  const body = 400 + dir * 100
  const board = [
    [back, y - 16],
    [body, y - 16],
    [tip, y],
    [body, y + 16],
    [back, y + 16],
  ]
  return (
    <Anim className="s-cs1-arm" origin={[400, y]} style={{ animationDelay: delay }}>
      <path d={polyPath(board)} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly(board, { seed, amp: 0.5, closed: true })} w={1.8} />
      <Hand x={400 + dir * 48} y={y + 8} size={22} anchor="middle" weight={700}>
        {label}
      </Hand>
    </Anim>
  )
}

const PAGES = [
  { delay: '0s', still: true },
  { delay: '-2s', still: false },
  { delay: '-4s', still: false },
]

export function SignpostScene() {
  return (
    <Scene w={800} h={312} top={30} css={signCss} className="s-cs1" label="A signpost with three arms reading credit, find it and trust. A paper character thinks beside it while loose pages drift from the find it arm towards a bookshelf">
      <Sun x={724} y={78} r={17} seed={3} />
      <Ground y={300} bottom={342} seed={4} tufts={10} pebbles={4} grit={24} />

      <Shelf x={586} y={182} w={176} rows={1} rowH={110} seed={5} />

      <rect x={394} y={98} width={12} height={204} fill="url(#wood)" />
      <Ink d={handPoly([[394, 98], [406, 98], [406, 302], [394, 302]], { seed: 6, amp: 0.4, closed: true })} w={1.8} />
      <Ink d={handPoly([[388, 98], [400, 88], [412, 98]], { seed: 7, amp: 0.3, closed: true })} w={1.8} />
      {ARMS.map((arm, i) => (
        <SignArm key={arm.label} {...arm} seed={10 + i * 3} />
      ))}

      {PAGES.map((page, i) => (
        <Place key={i} x={500} y={152}>
          <Anim
            className="s-cs1-page"
            style={{
              animationDelay: page.delay,
              opacity: page.still ? 1 : 0,
              transform: page.still ? 'translate(70px, -14px) rotate(4deg)' : undefined,
            }}
          >
            <Sheet x={-11} y={-14} w={22} h={28} lines={3} fold={6} seed={20 + i} sw={1.3} />
          </Anim>
        </Place>
      ))}

      <Shadow x={196} y={302} rx={50} ry={6} />
      <Place x={196} y={300} s={2.1}>
        <Pip mood="happy" arms="think" look={1.6} seed={24} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. The two parts: a thread from the pointer in the text to the entry
      in the list, and a little card riding down it.
   ------------------------------------------------------------------ */

const threadCss = `
.s-cs2-car { animation: s-cs2-ride 8s ease-in-out infinite; }
.s-cs2-glow-a { animation: s-cs2-glow-a 8s ease-in-out infinite; }
.s-cs2-glow-b { animation: s-cs2-glow-b 8s ease-in-out infinite; }
@keyframes s-cs2-ride {
  0%, 8% { transform: translate(0, 0); opacity: 1; }
  22% { transform: translate(50px, 26.3px); }
  36% { transform: translate(100px, 41px); }
  50% { transform: translate(150px, 44.3px); }
  64% { transform: translate(200px, 36px); opacity: 1; }
  72% { transform: translate(200px, 36px); opacity: 0; }
  73% { transform: translate(0, 0); opacity: 0; }
  86%, 100% { transform: translate(0, 0); opacity: 1; }
}
@keyframes s-cs2-glow-a {
  0%, 100% { opacity: 0.55; }
  6%, 14% { opacity: 1; }
  20% { opacity: 0.55; }
}
@keyframes s-cs2-glow-b {
  0%, 60%, 100% { opacity: 0.55; }
  66%, 74% { opacity: 1; }
}
`

function TextLines({ x, rows, seed, c = TEXT_LINE }) {
  let d = ''
  rows.forEach(([y, length], i) => {
    d += handLine(x, y, x + length, y, seed + i, 0.4)
  })
  return <Ink d={d} c={c} w={1.7} />
}

export function ThreadScene() {
  return (
    <Scene w={800} h={318} top={20} css={threadCss} className="s-cs2" label="Two sheets side by side: a citation in the text on the left and its full entry in the reference list on the right, joined by a red thread with a small card sliding along it">
      <Sheet x={80} y={34} w={236} h={260} lines={0} fold={18} seed={31} />
      <TextLines x={102} seed={32} rows={[[90, 188], [114, 170], [138, 182], [186, 176], [210, 150], [234, 184], [258, 120]]} />
      <g className="s-cs2-glow-a">
        <rect x={146} y={150} width={146} height={24} rx={6} fill={TONES.amber.mid} opacity="0.7" />
      </g>
      <Ink d={handLine(102, 162, 140, 162, 33, 0.3)} c={TEXT_LINE} w={1.7} />
      <Hand x={150} y={168} size={20} weight={700}>
        (Keshav, 2007)
      </Hand>

      <Sheet x={484} y={34} w={236} h={260} lines={0} fold={18} seed={34} />
      <Hand x={504} y={80} size={22} weight={700}>
        references
      </Hand>
      <TextLines
        x={502}
        seed={35}
        rows={[[106, 196], [150, 186], [246, 196]]}
      />
      <TextLines x={518} seed={38} rows={[[122, 130], [166, 118], [218, 160], [262, 100]]} />
      <g className="s-cs2-glow-b">
        <rect x={496} y={186} width={166} height={24} rx={6} fill={TONES.amber.mid} opacity="0.7" />
      </g>
      <Hand x={502} y={204} size={20} weight={700}>
        Keshav, S. (2007)
      </Hand>

      <Ink d="M294 162Q394 226 494 198" c="#c9503a" w={1.9} />
      <circle cx={294} cy={162} r={3.4} fill="#c9503a" />
      <circle cx={494} cy={198} r={3.4} fill="#c9503a" />

      <Place x={294} y={162}>
        <Anim className="s-cs2-car" style={{ transform: 'translate(100px, 41px)' }}>
          <circle cx={0} cy={0} r={4.2} fill={PAPER} stroke={INK} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
          <Ink d={handLine(0, 4, 0, 10, 40, 0.1)} w={1.3} />
          <Sheet x={-11} y={10} w={22} h={26} lines={2} fold={6} seed={41} sw={1.3} tone="amber" />
        </Anim>
      </Place>

      <Hand x={198} y={326} size={24} anchor="middle" c={INK_SOFT}>
        in the text
      </Hand>
      <Hand x={602} y={326} size={24} anchor="middle" c={INK_SOFT}>
        at the end
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Author-date: a name card plus the year on the calendar makes the
      pointer, and the list is filed from A to Z.
   ------------------------------------------------------------------ */

const yearCss = `
.s-cs3-flip { animation: s-cs3-flip 10s ease-in-out infinite; }
.s-cs3-tag { animation: s-cs3-tag 10s ease-in-out infinite; }
.s-cs3-card { animation: s-cs3-card 10s ease-in-out infinite; }
.s-cs3-pip { animation: s-cs3-hop 10s ease-in-out infinite; }
@keyframes s-cs3-flip {
  0%, 6% { transform: scaleY(1); opacity: 1; }
  16% { transform: scaleY(0); opacity: 1; }
  17%, 88% { transform: scaleY(1); opacity: 0; }
  96%, 100% { transform: scaleY(1); opacity: 1; }
}
@keyframes s-cs3-tag {
  0%, 30% { opacity: 0; transform: scale(0.4); }
  38% { opacity: 1; transform: scale(1.12); }
  44%, 88% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.4); }
}
@keyframes s-cs3-card {
  0%, 56%, 100% { transform: translateY(0); }
  62%, 82% { transform: translateY(-14px); }
  88% { transform: translateY(0); }
}
@keyframes s-cs3-hop {
  0%, 40%, 56%, 100% { transform: translateY(0); }
  45% { transform: translateY(-7px); }
  50% { transform: translateY(0); }
}
`

const INDEX_CARDS = [
  { x: 574, letter: 'A', tone: 'paper' },
  { x: 612, letter: 'H', tone: 'paper' },
  { x: 650, letter: 'K', tone: 'amber' },
  { x: 688, letter: 'M', tone: 'paper' },
]

export function YearScene() {
  return (
    <Scene w={800} h={250} top={64} css={yearCss} className="s-cs3" label="A paper character holds a name card reading Keshav, plus a calendar showing 2007, equals a luggage tag reading Keshav, 2007. A card index filed from A to M sits below">
      <Floor y={300} x1={40} x2={760} seed={50} />

      <Shadow x={148} y={302} rx={52} ry={6} />
      <Place x={148} y={300} s={2.2}>
        <g className="s-cs3-pip">
          <Pip mood="happy" arms="hold" look={1.4} seed={51}>
            <path d="M-20 -38h40v24h-40Z" fill={PAPER} />
            <Ink d={handPoly([[-20, -38], [20, -38], [20, -14], [-20, -14]], { seed: 52, amp: 0.3, closed: true })} w={1.4} />
            <Type x={0} y={-22.5} size={9.4} anchor="middle" weight={700}>
              Keshav
            </Type>
          </Pip>
        </g>
      </Place>

      <Hand x={262} y={206} size={44} anchor="middle" weight={700} c={INK_SOFT}>
        +
      </Hand>

      <Calendar x={296} y={90} w={160} h={150} day="2007" month="YEAR" tone="amber" seed={53} />
      <Anim className="s-cs3-flip" origin={[376, 132]} style={{ opacity: 0 }}>
        <rect x={298} y={132} width={156} height={106} fill={PAPER} />
        <Ink d={handLine(298, 132, 454, 132, 54, 0.3)} w={1.4} />
        <text x={376} y={210} textAnchor="middle" fontSize={63} fontWeight="700" className="ink-hand" fill={INK_SOFT}>
          2006
        </text>
      </Anim>

      <Hand x={484} y={200} size={44} anchor="middle" weight={700} c={INK_SOFT}>
        =
      </Hand>

      <PushPin x={534} y={118} tone="red" seed={55} />
      <Ink d="M534 118Q528 140 536 158" w={1.3} c={INK_SOFT} />
      <Anim className="s-cs3-tag" origin={[640, 176]}>
        <path d={polyPath([[544, 152], [760, 152], [760, 200], [544, 200], [522, 176]])} fill={TONES.amber.tint} />
        <Ink d={handPoly([[544, 152], [760, 152], [760, 200], [544, 200], [522, 176]], { seed: 56, amp: 0.4, closed: true })} w={1.7} />
        <circle cx={536} cy={176} r={4} fill={PAPER} stroke={INK} strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
        <Hand x={652} y={186} size={24} anchor="middle" weight={700}>
          (Keshav, 2007)
        </Hand>
      </Anim>

      {INDEX_CARDS.map((card, i) => (
        <Anim key={card.letter} className={card.letter === 'K' ? 's-cs3-card' : undefined}>
          <path d={`M${card.x} 218h34v70h-34Z`} fill={card.tone === 'paper' ? PAPER : `url(#fill-${card.tone})`} />
          <Ink d={handPoly([[card.x, 218], [card.x + 34, 218], [card.x + 34, 288], [card.x, 288]], { seed: 60 + i, amp: 0.3, closed: true })} w={1.3} />
          <Hand x={card.x + 17} y={240} size={20} anchor="middle" weight={700}>
            {card.letter}
          </Hand>
        </Anim>
      ))}
      <path d="M560 246h190v54h-190Z" fill={TONES.brown.tint} />
      <path d="M560 246h190v54h-190Z" fill="url(#ink-hatch-light)" opacity="0.6" />
      <Ink d={handPoly([[560, 246], [750, 246], [750, 300], [560, 300]], { seed: 66, amp: 0.5, closed: true })} w={1.8} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. Numbered styles: a bank token machine hands out numbers in the
      order sources arrive, and three earlier tokens wait in the queue.
   ------------------------------------------------------------------ */

const tokenCss = `
.s-cs4-ticket { animation: s-cs4-ticket 9s ease-in-out infinite; }
.s-cs4-three { animation: s-cs4-three 9s ease-in-out infinite; }
.s-cs4-four { animation: s-cs4-four 9s ease-in-out infinite; }
.s-cs4-presser .pip-arm-r { animation: s-cs4-press 9s ease-in-out infinite; }
.s-cs4-queue { animation: s-cs4-bob 3s ease-in-out infinite; }
@keyframes s-cs4-ticket {
  0%, 18% { transform: translateY(-34px); opacity: 0; }
  20% { opacity: 1; }
  32%, 84% { transform: translateY(0); opacity: 1; }
  92%, 100% { transform: translateY(-34px); opacity: 0; }
}
@keyframes s-cs4-three {
  0%, 22% { opacity: 1; }
  26%, 90% { opacity: 0; }
  94%, 100% { opacity: 1; }
}
@keyframes s-cs4-four {
  0%, 22% { opacity: 0; }
  26%, 90% { opacity: 1; }
  94%, 100% { opacity: 0; }
}
@keyframes s-cs4-press {
  0%, 10%, 26%, 100% { transform: rotate(0deg); }
  16%, 20% { transform: rotate(-7deg); }
}
@keyframes s-cs4-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
`

const QUEUE = [
  { x: 540, tone: 'pink', label: '[1]', delay: '0s' },
  { x: 622, tone: 'green', label: '[2]', delay: '-1s' },
  { x: 704, tone: 'amber', label: '[3]', delay: '-2s' },
]

export function TokenScene() {
  return (
    <Scene w={800} h={240} top={76} css={tokenCss} className="s-cs4" label="A paper character presses the button on a bank token machine, which prints the number 4, while three other paper characters wait in a queue holding tokens 1, 2 and 3">
      <Floor y={304} x1={40} x2={760} seed={70} />

      <Ink d={handLine(400, 232, 400, 302, 71, 0.2)} w={5} c={TONES.grey.deep} />
      <path d={ellipsePath(400, 304, 42, 6)} fill={TONES.grey.mid} />
      <Ink d={handEllipse(400, 304, 42, 6, { seed: 72, amp: 0.3 })} w={1.5} />

      <path d="M336 104Q336 96 344 96H456Q464 96 464 104V224Q464 232 456 232H344Q336 232 336 224Z" fill="url(#fill-blue)" />
      <Ink d={handPoly([[338, 96], [462, 96], [464, 232], [336, 232]], { seed: 74, amp: 0.4, closed: true })} w={1.9} />
      <path d="M356 112h88v46h-88Z" fill="#2e3a4a" />
      <Ink d={handPoly([[356, 112], [444, 112], [444, 158], [356, 158]], { seed: 75, amp: 0.3, closed: true })} w={1.4} />
      <g className="s-cs4-three" style={{ opacity: 0 }}>
        <Type x={400} y={144} size={28} anchor="middle" weight={700} c={TONES.amber.mid}>
          [3]
        </Type>
      </g>
      <g className="s-cs4-four">
        <Type x={400} y={144} size={28} anchor="middle" weight={700} c={TONES.amber.mid}>
          [4]
        </Type>
      </g>
      <path d="M388 208h60v6h-60Z" fill={INK} />
      <Oval cx={352} cy={198} rx={9} fill="url(#fill-red)" seed={76} sw={1.5} />

      {/* The fresh token, hanging out of the slot in front of the machine. */}
      <Anim className="s-cs4-ticket">
        <path d="M394 212h48v38h-48Z" fill={PAPER} />
        <Ink d={handPoly([[394, 212], [442, 212], [442, 250], [394, 250]], { seed: 73, amp: 0.3, closed: true })} w={1.4} />
        <Type x={418} y={239} size={20} anchor="middle" weight={700}>
          [4]
        </Type>
      </Anim>

      <Shadow x={250} y={306} rx={52} ry={6} />
      <Place x={250} y={304} s={2.2}>
        <g className="s-cs4-presser">
          <Pip mood="focused" arms="point" look={1.4} seed={77} />
        </g>
      </Place>

      {QUEUE.map((pip, i) => (
        <g key={pip.label}>
          <Shadow x={pip.x} y={305} rx={32} ry={4} />
          <Place x={pip.x} y={304} s={1.3}>
            <g className="s-cs4-queue" style={{ animationDelay: pip.delay }}>
              <Pip mood="happy" arms="hold" tone={pip.tone} look={-1.6} seed={80 + i * 5} lines={false}>
                <path d="M-17 -36h34v22h-34Z" fill={PAPER} />
                <Ink d={handPoly([[-17, -36], [17, -36], [17, -14], [-17, -14]], { seed: 81 + i * 5, amp: 0.2, closed: true })} w={1.3} />
                <Type x={0} y={-20} size={15.5} anchor="middle" weight={700}>
                  {pip.label}
                </Type>
              </Pip>
            </g>
          </Place>
        </g>
      ))}
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Footnotes and MLA: a raised number sends the reader to the foot
      of the page, where the bookworm reads the note.
   ------------------------------------------------------------------ */

const noteCss = `
.s-cs5-sup { animation: s-cs5-sup 10s ease-in-out infinite; }
.s-cs5-dot { animation: s-cs5-dot 10s ease-in-out infinite; }
.s-cs5-foot { animation: s-cs5-foot 10s ease-in-out infinite; }
.s-cs5-sticky { animation: s-cs5-sway 7s ease-in-out infinite; }
@keyframes s-cs5-sup {
  0%, 6%, 20%, 100% { transform: scale(1); }
  12% { transform: scale(1.35); }
}
@keyframes s-cs5-dot {
  0%, 16% { transform: translate(0, 0); opacity: 0; }
  18% { transform: translate(0, 0); opacity: 1; }
  24% { transform: translate(-68.7px, -0.3px); }
  30% { transform: translate(-127.6px, 18.2px); }
  36% { transform: translate(-176.7px, 55.7px); }
  42% { transform: translate(-216px, 112px); opacity: 1; }
  46%, 100% { transform: translate(-216px, 112px); opacity: 0; }
}
@keyframes s-cs5-foot {
  0%, 40%, 58%, 100% { transform: scale(1); }
  46%, 52% { transform: scale(1.3); }
}
@keyframes s-cs5-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-2.5deg); }
}
`

export function FootnoteScene() {
  return (
    <Scene w={800} h={316} top={10} css={noteCss} className="s-cs5" label="A page of text with a small raised number 1, a dotted arrow leading down to footnote 1 at the foot of the page, a bookworm reading the note, and a pink sticky note reading Keshav 83">
      <Desk y={312} depth={22} seed={90} />

      <Sheet x={172} y={22} w={300} h={290} lines={0} fold={22} seed={91} />
      <TextLines x={196} seed={92} rows={[[70, 244], [94, 226], [142, 238], [166, 200], [190, 232]]} />
      <Ink d={handLine(196, 118, 414, 118, 97, 0.4)} c={TEXT_LINE} w={1.7} />
      <Anim className="s-cs5-sup" origin={[430, 104]}>
        <Oval cx={430} cy={104} rx={12} fill={TONES.amber.tint} seed={98} sw={1.2} />
        <Hand x={430} y={112} size={22} anchor="middle" weight={700} c={TONES.red.ink}>
          1
        </Hand>
      </Anim>

      <Ink d={handLine(196, 226, 304, 226, 99, 0.3)} w={1.5} />
      <Anim className="s-cs5-foot" origin={[204, 252]}>
        <Oval cx={204} cy={252} rx={11} fill={TONES.amber.tint} seed={100} sw={1.2} />
        <Hand x={204} y={259} size={20} anchor="middle" weight={700} c={TONES.red.ink}>
          1
        </Hand>
      </Anim>
      <TextLines x={224} seed={101} rows={[[250, 214], [272, 150]]} />

      <Arrow from={[428, 126]} to={[212, 238]} bend={0.35} seed={103} c={INK_SOFT} dash="5 6" head={10} />
      <Place x={428} y={126}>
        <Anim className="s-cs5-dot" style={{ opacity: 0 }}>
          <circle cx={0} cy={0} r={5} fill={TONES.amber.ink} />
        </Anim>
      </Place>

      <Place x={548} y={312} s={1.8} flip>
        <Worm seed={104} />
      </Place>

      <Anim className="s-cs5-sticky" origin={[660, 44]}>
        <g transform="rotate(4 660 84)">
          <Sticky x={582} y={46} w={156} h={80} tone="pink" lines={0} seed={105} />
          <Hand x={660} y={100} size={24} anchor="middle" weight={700}>
            (Keshav 83)
          </Hand>
        </g>
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. One paper, four styles: a rubber stamp works along four copies of
      the same page, leaving a different style on each.
   ------------------------------------------------------------------ */

const STAMPS = [
  { x: 24, text: 'APA 7', tone: 'amber', at: 8 },
  { x: 212, text: 'IEEE', tone: 'blue', at: 27 },
  { x: 400, text: 'VANCOUVER', tone: 'green', at: 46 },
  { x: 588, text: 'MLA 9', tone: 'pink', at: 65 },
]

const stampCss = `
.s-cs6-tool { animation: s-cs6-tool 12s ease-in-out infinite; }
${STAMPS.map(
  (stamp, i) => `
.s-cs6-mark-${i} { animation: s-cs6-mark-${i} 12s ease-in-out infinite; }
@keyframes s-cs6-mark-${i} {
  0%, ${stamp.at}% { opacity: 0; transform: scale(1.3); }
  ${stamp.at + 2}% { opacity: 1; transform: scale(1); }
  86% { opacity: 1; transform: scale(1); }
  92%, 100% { opacity: 0; transform: scale(1.3); }
}`,
).join('\n')}
@keyframes s-cs6-tool {
  0%, 3% { transform: translate(-564px, 0); }
  8% { transform: translate(-564px, 80px); }
  13% { transform: translate(-564px, 0); }
  22% { transform: translate(-376px, 0); }
  27% { transform: translate(-376px, 80px); }
  32% { transform: translate(-376px, 0); }
  41% { transform: translate(-188px, 0); }
  46% { transform: translate(-188px, 80px); }
  51% { transform: translate(-188px, 0); }
  60% { transform: translate(0, 0); }
  65% { transform: translate(0, 80px); }
  70%, 84% { transform: translate(0, 0); }
  94%, 100% { transform: translate(-564px, 0); }
}
`

export function StampsScene() {
  return (
    <Scene w={800} h={290} top={36} css={stampCss} className="s-cs6" label="Four copies of the same page in a row, stamped APA 7, IEEE, Vancouver and MLA 9, while a rubber stamp moves from one page to the next">
      <Desk y={296} depth={22} seed={110} />
      {STAMPS.map((stamp, i) => (
        <g key={stamp.text}>
          <Sheet x={stamp.x} y={126} w={170} h={164} lines={5} fold={16} seed={111} />
          <Anim className={`s-cs6-mark-${i}`} origin={[stamp.x + 85, 226]}>
            <StampMark x={stamp.x + 85} y={226} w={150} h={42} text={stamp.text} tone={stamp.tone} size={20} rotate={-6} seed={112 + i} />
          </Anim>
        </g>
      ))}
      <Anim className="s-cs6-tool">
        <Stamp x={673} y={120} s={1.2} tone="red" seed={117} />
      </Anim>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. Which style: a letter from the red post box brings the answer,
      and the journal's guide for authors says the same.
   ------------------------------------------------------------------ */

const letterCss = `
.s-cs7-fly { animation: s-cs7-fly 10s ease-in-out infinite; }
.s-cs7-pip { animation: s-cs7-hop 10s ease-in-out infinite; }
.s-cs7-stamp { animation: s-cs7-stamp 10s ease-in-out infinite; }
.s-cs7-mark { animation: s-cs7-mark 10s ease-in-out infinite; }
@keyframes s-cs7-fly {
  0%, 6% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  8% { opacity: 1; }
  18% { transform: translate(120px, -64px) rotate(-10deg); }
  28% { transform: translate(236px, -30px) rotate(6deg); opacity: 1; }
  32%, 100% { transform: translate(236px, -30px) rotate(6deg); opacity: 0; }
}
@keyframes s-cs7-hop {
  0%, 30%, 44%, 100% { transform: translateY(0); }
  35% { transform: translateY(-8px); }
  40% { transform: translateY(0); }
}
@keyframes s-cs7-stamp {
  0%, 32%, 44%, 100% { transform: scale(1); }
  37% { transform: scale(1.35); }
}
@keyframes s-cs7-mark {
  0%, 48%, 64%, 100% { opacity: 0.5; }
  54%, 58% { opacity: 1; }
}
`

function PostBox({ x, y, seed }) {
  const w = 90
  const top = y - 176
  const body = `M${x} ${y}V${top + 26}Q${x + w / 2} ${top - 8} ${x + w} ${top + 26}V${y}Z`
  return (
    <g>
      <path d={body} fill="url(#fill-red)" />
      <path d={`M${x} ${y - 20}h${w}v20h${-w}Z`} fill={TONES.red.deep} opacity="0.5" />
      <path d={`M${x} ${top + 26}h${w}v12h${-w}Z`} fill={TONES.red.deep} opacity="0.35" />
      <Ink d={body} w={1.9} />
      <path d={`M${x + 20} ${top + 50}h${w - 40}v8h${-(w - 40)}Z`} fill={INK} />
      <path d={`M${x + 14} ${top + 90}h${w - 28}v30h${-(w - 28)}Z`} fill={PAPER} />
      <Ink d={handPoly([[x + 14, top + 90], [x + w - 14, top + 90], [x + w - 14, top + 120], [x + 14, top + 120]], { seed, amp: 0.3, closed: true })} w={1.3} />
      <Type x={x + w / 2} y={top + 112} size={20} anchor="middle" weight={700}>
        POST
      </Type>
    </g>
  )
}

export function LetterScene() {
  return (
    <Scene w={800} h={276} top={40} css={letterCss} className="s-cs7" label="A letter flies out of a red Indian post box into the hands of a paper character, who holds it up to show a stamp reading APA 7. The journal's open guide for authors says APA 7 too">
      <Floor y={304} x1={30} x2={770} seed={120} />
      <PostBox x={64} y={304} seed={121} />

      <Place x={112} y={150}>
        <Anim className="s-cs7-fly" style={{ opacity: 0 }}>
          <Envelope x={-22} y={-15} w={44} h={30} seed={122} />
        </Anim>
      </Place>

      <Shadow x={360} y={306} rx={52} ry={6} />
      <Place x={360} y={304} s={2.2}>
        <g className="s-cs7-pip">
          <Pip mood="grin" arms="carry" seed={123}>
            <Sheet x={-27} y={-110} w={54} h={40} lines={2} fold={8} seed={124} sw={1.3} />
            <Anim className="s-cs7-stamp" origin={[2, -83]}>
              <StampMark x={2} y={-83} w={44} h={16} text="APA 7" size={9.2} tone="red" rotate={-6} seed={125} />
            </Anim>
          </Pip>
        </g>
      </Place>
      <Envelope x={432} y={276} w={56} h={30} open seed={126} />

      <Hand x={640} y={158} size={24} anchor="middle" weight={700} c={INK_SOFT}>
        for authors
      </Hand>
      <OpenBook x={640} y={286} w={170} tone="green" lines={0} seed={127} />
      <TextLines x={570} seed={128} rows={[[216, 56], [236, 50], [256, 58]]} />
      <g className="s-cs7-mark">
        <rect x={648} y={208} width={62} height={28} rx={6} fill={TONES.amber.mid} opacity="0.8" />
      </g>
      <Hand x={679} y={229} size={20} anchor="middle" weight={700}>
        APA 7
      </Hand>
      <TextLines x={654} seed={131} rows={[[256, 54]]} />
    </Scene>
  )
}

/* ------------------------------------------------------------------
   8. Let software do it: turn one dial from Chicago to APA and the
      reference list on the screen rearranges itself.
   ------------------------------------------------------------------ */

const dialCss = `
.s-cs8-knob { animation: s-cs8-knob 10s ease-in-out infinite; }
.s-cs8-chicago { animation: s-cs8-chicago 10s ease-in-out infinite; }
.s-cs8-apa { animation: s-cs8-apa 10s ease-in-out infinite; }
.s-cs8-spark { animation: s-cs8-spark 10s ease-in-out infinite; }
@keyframes s-cs8-knob {
  0%, 16% { transform: rotate(-45deg); }
  24%, 78% { transform: rotate(45deg); }
  86%, 100% { transform: rotate(-45deg); }
}
@keyframes s-cs8-chicago {
  0%, 18% { opacity: 1; }
  24%, 80% { opacity: 0; }
  86%, 100% { opacity: 1; }
}
@keyframes s-cs8-apa {
  0%, 18% { opacity: 0; }
  24%, 80% { opacity: 1; }
  86%, 100% { opacity: 0; }
}
@keyframes s-cs8-spark {
  0%, 22% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  28% { opacity: 1; transform: scale(1.15) rotate(20deg); }
  40% { opacity: 1; transform: scale(1) rotate(40deg); }
  48%, 100% { opacity: 0; transform: scale(0.3) rotate(60deg); }
}
`

/* The screen of a laptop at x 380, 320 wide: inside it runs from x 269 to
   491 and from y 150 to 283. */
function ChicagoList() {
  let lines = ''
  const rows = [178, 206, 234, 262]
  rows.forEach((y, i) => {
    lines += handLine(296, y, 296 + [170, 150, 176, 132][i], y, 140 + i, 0.3)
  })
  return (
    <g>
      {rows.map((y, i) => (
        <Type key={y} x={280} y={y + 6} size={16} weight={700} c={TONES.red.ink}>
          {i + 1}
        </Type>
      ))}
      <Ink d={lines} c={TEXT_LINE} w={1.8} />
    </g>
  )
}

function ApaList() {
  const rows = [178, 216, 254]
  return (
    <g>
      {rows.map((y, i) => (
        <g key={y}>
          <path d={`M282 ${y - 5}h44v10h-44Z`} fill={INK} opacity="0.75" />
          <path d={`M332 ${y - 6}h40v12h-40Z`} fill={TONES.amber.mid} />
          <Ink d={handLine(378, y, 378 + [96, 84, 100][i], y, 150 + i, 0.3) + handLine(298, y + 16, 298 + [150, 170, 126][i], y + 16, 153 + i, 0.3)} c={TEXT_LINE} w={1.8} />
        </g>
      ))}
    </g>
  )
}

export function DialScene() {
  return (
    <Scene w={800} h={262} top={60} css={dialCss} className="s-cs8" label="A laptop shows a reference list. A dial beside it turns from Chicago to APA, and the list on screen rearranges into the new style while a paper character holds a glass of chai">
      <Desk y={300} depth={22} seed={160} />
      <Laptop x={380} y={300} w={320} seed={161}>
        <g className="s-cs8-chicago" style={{ opacity: 0 }}>
          <ChicagoList />
        </g>
        <g className="s-cs8-apa">
          <ApaList />
        </g>
      </Laptop>
      <Place x={500} y={140}>
        <Anim className="s-cs8-spark" spin style={{ opacity: 0 }}>
          <Sparkle x={0} y={0} s={12} />
        </Anim>
      </Place>

      <Ink d="M546 262Q576 290 612 262" w={1.5} c={INK_SOFT} />
      <path d={ellipsePath(640, 214, 46, 46)} fill={TONES.grey.tint} />
      <Ink d={handEllipse(640, 214, 46, 46, { seed: 162, amp: 0.5 })} w={1.8} />
      <Anim className="s-cs8-knob" origin={[640, 214]} style={{ transform: 'rotate(45deg)' }}>
        <path d={ellipsePath(640, 214, 30, 30)} fill="url(#fill-amber)" />
        <Ink d={handEllipse(640, 214, 30, 30, { seed: 163, amp: 0.4 })} w={1.7} />
        <Ink d={handLine(640, 214, 640, 188, 164, 0.1)} w={3} />
      </Anim>
      <Hand x={586} y={160} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        Chicago
      </Hand>
      <Hand x={698} y={160} size={20} anchor="middle" weight={700} c={INK_SOFT}>
        APA
      </Hand>

      <Shadow x={124} y={302} rx={52} ry={6} />
      <Place x={124} y={300} s={2.2}>
        <Pip mood="proud" arms="hips" seed={165} />
      </Place>
      <Chai x={214} y={300} s={1.1} seed={166} />
    </Scene>
  )
}
