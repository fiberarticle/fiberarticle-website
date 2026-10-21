import {
  Anim,
  Book,
  Checklist,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  Pip,
  Place,
  Scene,
  Shadow,
  Sheet,
  Speech,
  StampMark,
  TONES,
  Window,
  handLine,
  handPoly,
} from '../../ink/index.js'

/**
 * The list is closed. On the left the old UGC CARE register lies shut under
 * a red stamp, kept for reference. In the middle Simran holds her phone, a
 * "UGC CARE approved!" message hovering over it. On the right Dr. Gill runs
 * a magnifying glass over a journal page while the checks beside it are
 * ticked off one by one.
 */

const FLOOR = 372

const css = `
.s-ucl0-lens { animation: s-ucl0-scan 7s ease-in-out infinite; }
.s-ucl0-stamp { animation: s-ucl0-thud 7s ease-in-out infinite; }
.s-ucl0-msg { animation: s-ucl0-float 4s ease-in-out infinite; }
.s-ucl0-simran .pip-body { animation: s-ucl0-lean 7s ease-in-out infinite; }
.s-ucl0 .check-tick { animation: s-ucl0-tick 7s ease-in-out infinite; animation-delay: calc(var(--i) * 0.9s - 7s); }
@keyframes s-ucl0-scan {
  0%, 100% { transform: translate(0, 0); }
  30% { transform: translate(40px, 24px); }
  60% { transform: translate(6px, 52px); }
}
@keyframes s-ucl0-thud {
  0%, 70%, 100% { transform: scale(1); }
  76% { transform: scale(1.18); }
  82% { transform: scale(1); }
}
@keyframes s-ucl0-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
@keyframes s-ucl0-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}
@keyframes s-ucl0-tick {
  0%, 30% { stroke-dashoffset: 1; }
  40%, 90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
`

export default function Hero() {
  const table = 300
  return (
    <Scene
      w={800}
      h={404}
      css={css}
      className="s-ucl0"
      label="A thick register labelled UGC CARE list lies closed under a red stamp reading closed, while a paper character holds a phone showing a UGC CARE approved message, and a paper character in glasses checks a journal page with a magnifying glass beside a ticked checklist"
    >
      <Window x={330} y={40} w={120} h={92} seed={11} />
      <Floor y={FLOOR} x1={20} x2={780} seed={12} />

      {/* A low table with the closed register on it. */}
      <rect x={30} y={table} width={230} height={16} fill="url(#wood)" />
      <Ink d={handPoly([[30, table], [260, table], [260, table + 16], [30, table + 16]], { seed: 13, amp: 0.4, closed: true })} w={1.8} />
      <Ink d={handLine(44, table + 16, 46, FLOOR, 14, 0.4) + handLine(246, table + 16, 244, FLOOR, 15, 0.4)} w={3} c={TONES.brown.deep} />
      <path d={`M48 ${table - 14}h196v14h-196Z`} fill="#f5efe2" />
      <Ink d={handLine(48, table - 9, 244, table - 9, 16, 0.3) + handLine(48, table - 4, 244, table - 4, 17, 0.3)} w={1} c={INK_SOFT} />
      <Book x={44} y={table - 160} w={204} h={146} tone="green" seed={18} label={false} />
      <path d={`M74 ${table - 136}h164v44h-164Z`} fill="#fdfaf3" />
      <Ink d={handPoly([[74, table - 136], [238, table - 136], [238, table - 92], [74, table - 92]], { seed: 19, amp: 0.4, closed: true })} w={1.4} />
      <Hand x={156} y={table - 107} size={20} anchor="middle" weight={700}>
        UGC CARE list
      </Hand>
      <Place x={160} y={table - 50}>
        <Anim className="s-ucl0-stamp" spin>
          <StampMark x={0} y={0} w={118} h={40} text="CLOSED" tone="red" size={20} rotate={-9} bg="#fdfaf3" seed={20} />
        </Anim>
      </Place>
      <Hand x={146} y={FLOOR + 26} size={18} anchor="middle" c={INK_SOFT}>
        kept for reference only
      </Hand>

      <Place x={0} y={0}>
        <Anim className="s-ucl0-msg">
          <Speech x={278} y={160} w={236} h={56} tx={378} ty={242} tone="amber" seed={21}>
            <Hand x={396} y={196} size={20} anchor="middle" weight={700}>
              "UGC CARE approved!"
            </Hand>
          </Speech>
        </Anim>
      </Place>
      <Shadow x={384} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={384} y={FLOOR} s={1.65}>
        <g className="s-ucl0-simran">
          <Pip mood="worried" arms="hold" tone="amber" look={1.4} seed={30}>
            <path d="M-6 -36h12v20h-12Z" fill="#2f3a4f" />
            <Ink d={handPoly([[-6, -36], [6, -36], [6, -16], [-6, -16]], { seed: 31, amp: 0.2, closed: true })} w={1.3} />
          </Pip>
        </g>
      </Place>

      <Sheet x={560} y={84} w={120} h={150} lines={8} fold={20} seed={40} title />
      <Hand x={620} y={256} size={20} anchor="middle" c={INK_SOFT}>
        the journal
      </Hand>
      <Place x={0} y={0}>
        <Anim className="s-ucl0-lens">
          <Magnifier x={600} y={130} r={28} angle={50} tone="amber" seed={41} />
        </Anim>
      </Place>
      <Checklist x={666} y={250} w={112} items={3} done={3} seed={42} />

      <Shadow x={540} y={FLOOR + 3} rx={36} ry={5} />
      <Place x={540} y={FLOOR} s={1.65}>
        <Pip mood="focused" arms="point" tone="blue" glasses look={1.6} seed={50} />
      </Place>
    </Scene>
  )
}
