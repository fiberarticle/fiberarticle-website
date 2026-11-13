import {
  Anim,
  Box,
  Floor,
  Hand,
  INK_SOFT,
  Ink,
  Magnifier,
  PAPER,
  Pile,
  Pip,
  Place,
  PushPin,
  Scene,
  Shadow,
  TONES,
  Type,
  handPoly,
} from '../../ink/index.js'

/**
 * The map on the wall. Dhara stands in front of a big map of her field:
 * three coloured patches show what has been studied (interviews, surveys,
 * reports) and two dashed, empty patches with question marks show where
 * nobody has looked. A magnifying glass hovers over the empty patch on the right.
 */

const FLOOR = 356

const css = `
.s-scr0-lens { animation: s-scr0-scan 7s ease-in-out infinite; }
.s-scr0-gap { animation: s-scr0-pulse 3s ease-in-out infinite; }
.s-scr0-dhara .pip-arm-r { animation: s-scr0-point 3.2s ease-in-out infinite; }
.s-scr0-dhara .pip-body { animation: s-scr0-lean 6s ease-in-out infinite; }
@keyframes s-scr0-scan {
  0%, 100% { transform: translate(0, 0); }
  30% { transform: translate(-6px, -14px); }
  65% { transform: translate(8px, -6px); }
}
@keyframes s-scr0-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@keyframes s-scr0-point {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-12deg); }
}
@keyframes s-scr0-lean {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(2.5deg); }
}
`

/* A studied patch of the map: a tinted field with a name and a count. */
function Patch({ x, y, w, h, tone, name, count, seed }) {
  const t = TONES[tone]
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={`url(#fill-${tone})`} />
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.7, closed: true })} c={t.deep} w={1.8} />
      <Hand x={x + w / 2} y={y + h / 2 - 4} size={24} anchor="middle" weight={700}>
        {name}
      </Hand>
      <Hand x={x + w / 2} y={y + h / 2 + 28} size={26} anchor="middle" weight={700} c={t.deep}>
        {count}
      </Hand>
    </g>
  )
}

/* An empty patch: dashed outline, a name and a question mark. */
function Gap({ x, y, w, h, name, seed }) {
  return (
    <g>
      <Ink d={handPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { seed, amp: 0.7, closed: true })} c={INK_SOFT} w={1.8} dash="7 7" />
      <Hand x={x + w / 2} y={y + h / 2 - 6} size={21} anchor="middle" c={INK_SOFT}>
        {name}
      </Hand>
      <g className="s-scr0-gap">
        <Hand x={x + w / 2} y={y + h / 2 + 30} size={34} anchor="middle" weight={700} c={TONES.red.ink}>
          ?
        </Hand>
      </g>
    </g>
  )
}

export default function Hero() {
  return (
    <Scene
      w={800}
      h={400}
      css={css}
      className="s-scr0"
      label="A paper character in glasses points at a large wall map of a research field, where coloured patches are labelled interviews, surveys and reports and two dashed empty patches carry question marks, while a magnifying glass hovers over an empty patch"
    >
      <Floor y={FLOOR} x1={20} x2={780} seed={1} />

      {/* the map on the wall */}
      <Box x={262} y={30} w={510} h={292} r={6} fill={PAPER} seed={2} sw={2.2} double />
      <PushPin x={280} y={44} tone="red" seed={3} />
      <PushPin x={754} y={44} tone="blue" seed={4} />
      <Type x={517} y={62} size={16} anchor="middle" weight={700}>
        YOUNG CARERS IN INDIA: THE MAP
      </Type>

      <Patch x={284} y={78} w={176} h={108} tone="amber" name="interviews" count="19" seed={10} />
      <Patch x={470} y={78} w={140} h={108} tone="blue" name="surveys" count="8" seed={11} />
      <Patch x={284} y={196} w={136} h={108} tone="green" name="reports" count="5" seed={12} />
      <Gap x={430} y={196} w={180} h={108} name="followed over time" seed={13} />
      <Gap x={620} y={78} w={132} h={226} name="in villages" seed={14} />

      <Place x={0} y={0}>
        <Anim className="s-scr0-lens">
          <Magnifier x={694} y={258} r={22} angle={125} tone="amber" seed={20} />
        </Anim>
      </Place>

      {/* the papers the map was drawn from */}
      <Pile x={60} y={FLOOR} w={76} count={12} seed={30} />
      <Hand x={62} y={FLOOR - 72} size={20} anchor="middle" c={INK_SOFT}>
        32 sources
      </Hand>

      <Shadow x={172} y={FLOOR + 3} rx={40} ry={6} />
      <Place x={172} y={FLOOR} s={2.1}>
        <g className="s-scr0-dhara">
          <Pip mood="happy" arms="point" tone="green" glasses look={1.8} seed={40} />
        </g>
      </Place>

      <Hand x={400} y={390} size={25} anchor="middle" weight={700}>
        what is known, and what is missing
      </Hand>
      <Hand x={150} y={150} size={22} anchor="middle" weight={700}>
        the whole field,
      </Hand>
      <Hand x={150} y={176} size={22} anchor="middle" weight={700}>
        on one map
      </Hand>
    </Scene>
  )
}
