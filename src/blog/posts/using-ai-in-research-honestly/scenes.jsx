import {
  Anim,
  Bot,
  Box,
  Chai,
  Clock,
  Cross,
  Desk,
  Envelope,
  Floor,
  Hand,
  INK,
  INK_SOFT,
  Ink,
  Laptop,
  Magnifier,
  OpenBook,
  PAPER,
  Pencil,
  Pip,
  Place,
  Scale,
  Scene,
  Shadow,
  Sheet,
  Shelf,
  Speech,
  StampMark,
  Sticky,
  Thought,
  Tick,
  TONES,
  Type,
  ellipsePath,
  handCurve,
  handLine,
  handPoly,
  polyPath,
} from '../../ink/index.js'

/* ------------------------------------------------------------------
   1. The reference that did not exist: the search comes back empty.
   ------------------------------------------------------------------ */

const searchCss = `
.s-ai1-typed { animation: s-ai1-type 10s ease-in-out infinite; }
.s-ai1-dots { animation: s-ai1-dots 10s steps(1) infinite; }
.s-ai1-none { animation: s-ai1-none 10s ease-in-out infinite; }
.s-ai1-drop { animation: s-ai1-drop 10s ease-in infinite; }
@keyframes s-ai1-type {
  0%, 4% { transform: scaleX(1); }
  8% { transform: scaleX(0); }
  26%, 100% { transform: scaleX(1); }
}
@keyframes s-ai1-dots {
  0% { opacity: 0; }
  30% { opacity: 1; }
  36% { opacity: 0.3; }
  42% { opacity: 1; }
  48%, 100% { opacity: 0; }
}
@keyframes s-ai1-none {
  0%, 48% { opacity: 0; transform: scale(0.6); }
  53% { opacity: 1; transform: scale(1.12); }
  57%, 94% { opacity: 1; transform: scale(1); }
  98%, 100% { opacity: 0; transform: scale(0.6); }
}
@keyframes s-ai1-drop {
  0%, 56% { opacity: 0; transform: translateY(0); }
  60% { opacity: 1; transform: translateY(0); }
  76% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 0; transform: translateY(12px); }
}
`

export function SearchScene() {
  return (
    <Scene w={800} h={200} top={120} css={searchCss} className="s-ai1" label="A guide points at a laptop where a search for a reference comes back with no results, while a worried paper character looks on">
      <Desk y={300} depth={20} seed={100} />

      <Shadow x={190} y={302} rx={48} ry={5} />
      <Place x={190} y={300} s={1.75}>
        <Pip mood="focused" arms="point" tone="blue" glasses look={1.6} seed={101} />
      </Place>

      <Laptop x={404} y={300} w={250} seed={102}>
        <path d="M330 192h148v20h-148Z" fill={PAPER} />
        <Ink d={handPoly([[330, 192], [478, 192], [478, 212], [330, 212]], { seed: 103, amp: 0.3, closed: true })} w={1.3} />
        <Anim className="s-ai1-typed" origin={[338, 202]}>
          <Ink d={handLine(338, 202, 430, 202, 104, 0.3)} w={2} />
        </Anim>
        <path d={ellipsePath(462, 200, 4.5, 4.5)} fill="none" stroke={INK} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        <Ink d="M465 203L470 208" w={1.6} />
        <g className="s-ai1-dots" style={{ opacity: 0 }}>
          <circle cx={392} cy={238} r={3} fill={INK_SOFT} />
          <circle cx={404} cy={238} r={3} fill={INK_SOFT} />
          <circle cx={416} cy={238} r={3} fill={INK_SOFT} />
        </g>
        <Anim className="s-ai1-none" origin={[404, 250]}>
          <Type x={404} y={256} size={17} anchor="middle" weight={700} c={TONES.red.deep}>
            no results
          </Type>
        </Anim>
      </Laptop>

      <Shadow x={626} y={302} rx={48} ry={5} />
      <Place x={626} y={300} s={1.75}>
        <Pip mood="worried" arms="down" look={-1.8} seed={105}>
          <Anim className="s-ai1-drop" style={{ opacity: 0 }}>
            <path d="M-26 -62Q-30 -55 -26 -52Q-22 -55 -26 -62Z" fill={TONES.blue.mid} />
            <Ink d="M-26 -62Q-30 -55 -26 -52Q-22 -55 -26 -62Z" w={1.1} />
          </Anim>
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   2. Where AI helps: a tutor with a small toolbox.
   ------------------------------------------------------------------ */

const helpCss = `
.s-ai2-tool { animation: s-ai2-bob 3.6s ease-in-out infinite; }
.s-ai2-tool-2 { animation-delay: -0.9s; }
.s-ai2-tool-3 { animation-delay: -1.8s; }
.s-ai2-tool-4 { animation-delay: -2.7s; }
.s-ai2-flow { animation: s-ai2-flow 1.6s linear infinite; }
@keyframes s-ai2-bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-7px) rotate(3deg); }
}
@keyframes s-ai2-flow { to { stroke-dashoffset: -24; } }
`

export function HelpScene() {
  return (
    <Scene w={800} h={250} top={70} css={helpCss} className="s-ai2" label="A friendly robot offers a small set of tools, a magnifying glass, a pencil, a code bracket and a note, to a paper character reading an open book">
      <Floor y={300} x1={60} x2={740} seed={110} />

      <Shadow x={186} y={302} rx={46} ry={5} />
      <Place x={186} y={300}>
        <Bot x={0} y={0} s={1.45} tone="green" seed={111} />
      </Place>

      <Ink d="M246 248Q400 150 548 236" c={INK_SOFT} w={1.6} dash="5 7" className="s-ai2-flow" />

      <Place x={300} y={150}>
        <Anim className="s-ai2-tool" spin>
          <Magnifier x={0} y={0} r={16} angle={130} tone="blue" seed={112} />
        </Anim>
      </Place>
      <Place x={384} y={116}>
        <Anim className="s-ai2-tool s-ai2-tool-2" spin>
          <Pencil x={-26} y={10} length={64} angle={-24} tone="amber" seed={113} />
        </Anim>
      </Place>
      <Place x={470} y={112}>
        <Anim className="s-ai2-tool s-ai2-tool-3" spin>
          <Type x={0} y={10} size={30} anchor="middle" weight={700} c={TONES.blue.deep}>
            {'{ }'}
          </Type>
        </Anim>
      </Place>
      <Place x={548} y={150}>
        <Anim className="s-ai2-tool s-ai2-tool-4" spin>
          <Sticky x={-22} y={-20} w={44} h={40} tone="amber" lines={2} seed={114} />
        </Anim>
      </Place>

      <Shadow x={620} y={302} rx={52} ry={6} />
      <Place x={620} y={300} s={2}>
        <Pip mood="happy" arms="hold" look={-1} glasses seed={115}>
          <OpenBook x={0} y={-18} w={40} tone="blue" lines={3} seed={116} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   3. Where it goes wrong: three confident claims, three red crosses.
   ------------------------------------------------------------------ */

const wrongCss = `
.s-ai3-mark { animation: s-ai3-mark 9s ease-in-out infinite; }
.s-ai3-mark-2 { animation-name: s-ai3-mark-2; }
.s-ai3-mark-3 { animation-name: s-ai3-mark-3; }
@keyframes s-ai3-mark {
  0%, 12% { opacity: 0; transform: scale(0.3); }
  18% { opacity: 1; transform: scale(1.3); }
  22%, 88% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.3); }
}
@keyframes s-ai3-mark-2 {
  0%, 32% { opacity: 0; transform: scale(0.3); }
  38% { opacity: 1; transform: scale(1.3); }
  42%, 88% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.3); }
}
@keyframes s-ai3-mark-3 {
  0%, 52% { opacity: 0; transform: scale(0.3); }
  58% { opacity: 1; transform: scale(1.3); }
  62%, 88% { opacity: 1; transform: scale(1); }
  94%, 100% { opacity: 0; transform: scale(0.3); }
}
`

function Padlock({ x, y }) {
  return (
    <g>
      <Ink d={`M${x - 8} ${y - 6}V${y - 13}Q${x - 8} ${y - 22} ${x} ${y - 22}Q${x + 8} ${y - 22} ${x + 8} ${y - 13}V${y - 6}`} w={2.4} c={INK_SOFT} />
      <path d={`M${x - 13} ${y - 7}h26v21h-26Z`} fill="url(#fill-amber)" />
      <Ink d={handPoly([[x - 13, y - 7], [x + 13, y - 7], [x + 13, y + 14], [x - 13, y + 14]], { seed: 139, amp: 0.3, closed: true })} w={1.5} />
      <circle cx={x} cy={y + 3} r={2.6} fill={INK} />
    </g>
  )
}

export function WrongScene() {
  const rows = [
    { y: 76, label: 'made-up source' },
    { y: 122, label: 'out of date' },
    { y: 168, label: 'private data' },
  ]
  return (
    <Scene w={800} h={292} top={30} css={wrongCss} className="s-ai3" label="A robot speaks confidently in a big speech bubble listing a made-up source, an out of date answer and private data, and a red cross appears beside each one">
      <Floor y={310} x1={40} x2={760} seed={130} />
      <Shadow x={132} y={312} rx={44} ry={5} />
      <Place x={132} y={310}>
        <Bot x={0} y={0} s={1.45} tone="blue" seed={131} />
      </Place>

      <Speech x={236} y={40} w={520} h={164} tx={188} ty={214} seed={132}>
        <g>
          <Sheet x={268} y={rows[0].y - 18} w={30} h={34} lines={2} fold={7} seed={133} sw={1.3} />
          <Clock x={283} y={rows[1].y} r={15} seed={134} />
          <Padlock x={283} y={rows[2].y} />
        </g>
        {rows.map((row, i) => (
          <g key={row.label}>
            <Hand x={322} y={row.y + 8} size={23} weight={700}>
              {row.label}
            </Hand>
            <Ink d={handLine(510, row.y, 650, row.y, 135 + i, 0.6)} dash="3 7" c={INK_SOFT} w={1.3} />
            <Place x={690} y={row.y}>
              <Anim className={`s-ai3-mark${i ? ` s-ai3-mark-${i + 1}` : ''}`} spin>
                <Cross x={0} y={0} s={1.2} seed={136 + i} />
              </Anim>
            </Place>
          </g>
        ))}
      </Speech>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   4. The rules: the balance only settles when you sign.
   ------------------------------------------------------------------ */

const rulesCss = `
.s-ai4 .scale-beam { animation: s-ai4-tilt 9s ease-in-out infinite; }
@keyframes s-ai4-tilt {
  0%, 100% { transform: rotate(0deg); }
  12% { transform: rotate(-8deg); }
  26% { transform: rotate(6deg); }
  38% { transform: rotate(-4deg); }
  48% { transform: rotate(2deg); }
  56%, 92% { transform: rotate(0deg); }
}
`

function SignedSheet({ x, y }) {
  return (
    <g>
      <Sheet x={x - 22} y={y - 50} w={44} h={50} lines={3} fold={9} seed={141} sw={1.4} />
      <Ink d={`M${x - 14} ${y - 10}q5 -10 9 -2t8 -3q3 6 11 -1`} c={TONES.blue.deep} w={1.8} />
    </g>
  )
}

export function RulesScene() {
  return (
    <Scene w={800} h={262} top={96} css={rulesCss} className="s-ai4" label="A balance scale with a small robot in one pan and a signed page in the other; it wobbles and then settles level while a paper character points at the signed page">
      <Floor y={334} x1={140} x2={760} seed={140} />
      <Scale
        x={400}
        y={334}
        s={1.5}
        seed={142}
        left={
          <Place x={283} y={234}>
            <Bot x={0} y={0} s={0.42} tone="blue" seed={143} />
          </Place>
        }
        right={<SignedSheet x={517} y={236} />}
      />
      <Hand x={283} y={290} size={22} anchor="middle" c={INK_SOFT}>
        the tool
      </Hand>
      <Hand x={517} y={290} size={22} anchor="middle" c={INK_SOFT}>
        your name
      </Hand>
      <Shadow x={690} y={336} rx={46} ry={5} />
      <Place x={690} y={334} s={1.8} flip>
        <Pip mood="proud" arms="point" seed={144} />
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   5. Verify: the glass goes down the list, line by line.
   ------------------------------------------------------------------ */

const LINES = [0, 1, 2, 3, 4, 5, 6]
const FAKE = [2, 5]
const lineY = (i) => 72 + i * 32

const verifyCss = `
.s-ai5-glass { animation: s-ai5-glass 12s ease-in-out infinite; }
@keyframes s-ai5-glass {
  0%, 3% { transform: translateY(${lineY(0) - lineY(2)}px); }
  ${LINES.map((i) => `${8 + i * 11}% { transform: translateY(${lineY(i) - lineY(2)}px); }`).join('\n  ')}
  88% { transform: translateY(${lineY(6) - lineY(2)}px); }
  100% { transform: translateY(${lineY(0) - lineY(2)}px); }
}
${LINES.map((i) => {
  const at = 8 + i * 11
  return `.s-ai5-mark-${i} { animation: s-ai5-mark-${i} 12s ease-in-out infinite; }
@keyframes s-ai5-mark-${i} {
  0%, ${at}% { opacity: 0; transform: scale(0.4); }
  ${at + 3}% { opacity: 1; transform: scale(1.2); }
  ${at + 5}%, 90% { opacity: 1; transform: scale(1); }
  96%, 100% { opacity: 0; transform: scale(0.4); }
}`
}).join('\n')}
`

export function VerifyScene() {
  return (
    <Scene w={800} h={302} top={30} css={verifyCss} className="s-ai5" label="A paper character checks a list of seven references with a magnifying glass; five get a green tick and two are struck through with a red cross">
      <Desk y={318} depth={14} seed={150} />
      <Ink d={handLine(200, 318, 216, 290, 151, 0.3) + handLine(404, 318, 388, 290, 152, 0.3)} w={2.4} c={TONES.brown.deep} />
      <path d="M176 40h252v252h-252Z" fill={PAPER} />
      <Ink d={handPoly([[176, 40], [428, 40], [428, 292], [176, 292]], { seed: 153, amp: 0.6, closed: true })} w={1.9} />
      {LINES.map((i) => {
        const y = lineY(i)
        const fake = FAKE.includes(i)
        return (
          <g key={i}>
            <Type x={190} y={y + 5} size={13} weight={700} c={INK_SOFT}>
              [{i + 1}]
            </Type>
            <Ink d={handLine(222, y, 364 - (i % 3) * 18, y, 154 + i, 0.3)} w={1.8} c={fake ? INK_SOFT : INK} />
            <Place x={400} y={y}>
              <Anim className={`s-ai5-mark-${i}`} spin>
                {fake ? (
                  <g>
                    <Ink d={handLine(-182, 0, -40, 1, 160 + i, 0.3)} c={TONES.red.ink} w={2.2} />
                    <Cross x={0} y={0} s={0.9} seed={162 + i} />
                  </g>
                ) : (
                  <Tick x={0} y={2} s={1} />
                )}
              </Anim>
            </Place>
          </g>
        )
      })}

      <Place x={300} y={lineY(2)}>
        <Anim className="s-ai5-glass">
          <Magnifier x={0} y={0} r={20} angle={30} tone="amber" seed={170} />
        </Anim>
      </Place>

      <Shadow x={540} y={320} rx={46} ry={5} />
      <Place x={540} y={318} s={1.9} flip>
        <Pip mood="focused" arms="point" look={1.6} seed={171} />
      </Place>

      <Box x={626} y={286} w={124} h={32} r={3} fill="url(#fill-green)" seed={172} />
      <Box x={636} y={256} w={104} h={30} r={3} fill="url(#fill-blue)" seed={173} />
      <Box x={620} y={228} w={118} h={28} r={3} fill="url(#fill-amber)" seed={174} />
      <Hand x={688} y={212} size={21} anchor="middle" c={INK_SOFT}>
        the originals
      </Hand>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   6. Grounded versus free-writing: memory on the left, threads to real
      books on the right.
   ------------------------------------------------------------------ */

const groundedCss = `
.s-ai6-ghost { animation: s-ai6-ghost 2.8s ease-in-out infinite; }
.s-ai6-swirl { animation: s-ai6-spin 9s linear infinite; }
.s-ai6-thread { animation: s-ai6-thread 10s ease-in-out infinite; }
.s-ai6-thread-2 { animation-name: s-ai6-thread-2; }
.s-ai6-thread-3 { animation-name: s-ai6-thread-3; }
@keyframes s-ai6-ghost { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
@keyframes s-ai6-spin { to { transform: rotate(360deg); } }
@keyframes s-ai6-thread { 0%, 10% { stroke-dashoffset: 1; } 30%, 88% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
@keyframes s-ai6-thread-2 { 0%, 22% { stroke-dashoffset: 1; } 42%, 88% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
@keyframes s-ai6-thread-3 { 0%, 34% { stroke-dashoffset: 1; } 54%, 88% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
`

function GhostTag({ x, y, seed }) {
  const shape = [[x, y], [x + 26, y], [x + 31, y + 8], [x + 26, y + 16], [x, y + 16]]
  return <Ink d={handPoly(shape, { seed, amp: 0.3, closed: true })} dash="3 4" w={1.4} c={INK_SOFT} />
}

export function GroundedScene() {
  const books = [[640, 120], [690, 116], [738, 120]]
  const from = [516, 264]
  return (
    <Scene w={800} h={300} top={20} css={groundedCss} className="s-ai6" label="On the left a robot writes from a swirling cloud of memory, and its citation tags are only dashed outlines. On the right a paper character's page is tied by red threads to real books on a shelf.">
      <Floor y={300} x1={30} x2={770} seed={180} />
      <Ink d={handLine(400, 40, 400, 290, 181, 0.6)} dash="3 9" c={INK_SOFT} w={1.4} />

      <Hand x={200} y={50} size={25} anchor="middle" weight={700}>
        from memory
      </Hand>
      <Hand x={600} y={50} size={25} anchor="middle" weight={700}>
        from real papers
      </Hand>

      <Shadow x={106} y={302} rx={40} ry={5} />
      <Place x={106} y={300}>
        <Bot x={0} y={0} s={1.3} tone="grey" seed={182} />
      </Place>
      <Thought x={176} y={116} w={128} h={70} tx={128} ty={164} seed={183}>
        <Anim className="s-ai6-swirl" spin>
          <Ink d={handCurve([[176, 116], [186, 110], [188, 122], [170, 126], [160, 110], [178, 98], [200, 108], [202, 130]], { seed: 184, amp: 0.4 })} w={1.6} c={TONES.pink.deep} />
        </Anim>
      </Thought>
      <Sheet x={256} y={168} w={80} h={104} lines={4} seed={185} />
      <g className="s-ai6-ghost">
        <GhostTag x={266} y={236} seed={186} />
        <GhostTag x={302} y={250} seed={187} />
      </g>

      <Shelf x={604} y={90} w={170} rows={1} rowH={84} seed={188} />
      <Ink d={handLine(612, 182, 612, 300, 189, 0.3) + handLine(766, 182, 766, 300, 190, 0.3)} w={2.4} c={TONES.brown.deep} />
      {books.map(([bx, by], i) => (
        <Ink
          key={bx}
          d={handCurve([from, [(from[0] + bx) / 2, by + 70 - i * 10], [bx, by]], { seed: 191 + i, amp: 0.5 })}
          c={TONES.red.ink}
          w={2}
          scale
          pathLength="1"
          dash="1"
          className={`s-ai6-thread${i ? ` s-ai6-thread-${i + 1}` : ''}`}
        />
      ))}
      <Shadow x={494} y={302} rx={46} ry={5} />
      <Place x={494} y={300} s={1.8}>
        <Pip mood="happy" arms="hold" look={1.2} seed={194}>
          <Sheet x={-13} y={-34} w={26} h={30} lines={3} fold={6} seed={195} sw={1.3} />
        </Pip>
      </Place>
    </Scene>
  )
}

/* ------------------------------------------------------------------
   7. A simple disclosure: two lines of thanks, then into the envelope.
   ------------------------------------------------------------------ */

const disclosureCss = `
.s-ai7-line { animation: s-ai7-line 10s ease-in-out infinite; }
.s-ai7-line-2 { animation-name: s-ai7-line-2; }
.s-ai7-stamp { animation: s-ai7-stamp 10s ease-in-out infinite; }
.s-ai7 .pip-arm-r { animation: s-ai7-write 0.5s ease-in-out infinite alternate; }
@keyframes s-ai7-line { 0%, 10% { stroke-dashoffset: 1; } 28%, 90% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
@keyframes s-ai7-line-2 { 0%, 28% { stroke-dashoffset: 1; } 46%, 90% { stroke-dashoffset: 0; } 96%, 100% { stroke-dashoffset: 1; } }
@keyframes s-ai7-stamp {
  0%, 58% { opacity: 0; transform: scale(1.8); }
  64% { opacity: 0.95; transform: scale(0.94); }
  68%, 90% { opacity: 0.9; transform: scale(1); }
  96%, 100% { opacity: 0; transform: scale(1.8); }
}
@keyframes s-ai7-write { from { transform: rotate(-5deg); } to { transform: rotate(6deg); } }
`

export function DisclosureScene() {
  return (
    <Scene w={800} h={228} top={92} css={disclosureCss} className="s-ai7" label="A paper character writes two short lines of thanks on a page that has a tiny robot drawn in the corner, and an envelope beside it is stamped declared">
      <Desk y={300} depth={20} seed={200} />
      <Ink d={handLine(330, 300, 346, 150, 201, 0.3) + handLine(458, 300, 442, 150, 202, 0.3)} w={2.4} c={TONES.brown.deep} />
      <path d="M318 112h152v168h-152Z" fill={PAPER} />
      <Ink d={handPoly([[318, 112], [470, 112], [470, 280], [318, 280]], { seed: 203, amp: 0.6, closed: true })} w={1.9} />
      <Hand x={394} y={146} size={24} anchor="middle" weight={700}>
        thanks
      </Hand>
      <Ink d={handLine(336, 178, 450, 178, 204, 0.4)} c={INK_SOFT} w={1.6} o={0.6} />
      <Ink d={handLine(336, 200, 440, 200, 205, 0.4)} c={INK_SOFT} w={1.6} o={0.6} />
      <Ink d={handLine(336, 222, 452, 222, 206, 0.4)} c={TONES.blue.deep} w={2.2} scale pathLength="1" dash="1" className="s-ai7-line" />
      <Ink d={handLine(336, 244, 420, 244, 207, 0.4)} c={TONES.blue.deep} w={2.2} scale pathLength="1" dash="1" className="s-ai7-line s-ai7-line-2" />
      <Place x={448} y={272}>
        <Bot x={0} y={0} s={0.2} tone="blue" seed={208} />
      </Place>

      <Shadow x={276} y={302} rx={46} ry={5} />
      <Place x={272} y={300} s={2}>
        <Pip mood="focused" arms="write" look={1.4} seed={209} />
      </Place>

      <Envelope x={522} y={228} w={112} h={72} seed={210} />
      <Place x={578} y={264}>
        <Anim className="s-ai7-stamp" spin>
          <StampMark x={0} y={0} w={96} h={26} text="DECLARED" size={12} rotate={-8} tone="green" bg={PAPER} seed={211} />
        </Anim>
      </Place>
      <Chai x={706} y={300} s={1.2} seed={212} />
    </Scene>
  )
}
