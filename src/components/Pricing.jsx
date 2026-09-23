import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@radix-ui/themes'
import { Link } from 'react-router-dom'
import { CircleCheck, CircleX, FileText, Mail, Package } from 'lucide-react'

import {
  Body,
  Card,
  Header,
  List,
  ListItem,
  MainPrice,
  Period,
  Plan,
  PlanName,
  Price,
  Separator,
} from '@/components/ui/pricing-card.tsx'

/**
 * Pricing page: two plans over the full-bleed backdrop.
 *
 * The cards are the shadcn pricing-card primitives, used as shipped. Nothing in
 * global.css targets them; every visual choice is a Tailwind class handed to
 * the components through their own className prop.
 *
 * Both calls to action are Radix Themes buttons so they match the Sign up
 * button in the navbar rather than inventing a second button style: silver
 * (gray + highContrast) for the use-it-yourself plan, the brown accent for the
 * one where we do the work.
 *
 * The two cards are given identical weight on purpose. Ringing the paid one in
 * a coloured outer glow to mark it as the upsell read as decoration for its own
 * sake; the plan names and the wording carry the difference instead.
 *
 * The pair stays side by side on phones rather than stacking. That is a
 * deliberate call: comparing two plans is the whole job of this page, and one
 * above the other means scrolling to compare. The cost is that every size below
 * sm has to come down hard, which is what the paired classes throughout are
 * doing - roughly 145px of text column per card on a 390px screen.
 *
 * The first card is the product itself. Every feature in the app is locked
 * until an account pays once; the payment happens inside the app (Razorpay),
 * so this card only sends people to sign up. The second card is work we do by
 * hand, so its call to action is an email.
 */

const CONTACT_EMAIL = 'admin@fiberarticle.com'

/* Prefilled either way, so an enquiry arrives with a usable subject line
   instead of the empty one a bare link produces. */
const CONTACT_SUBJECT = 'Article Work Enquiry'

/* The button opens Gmail's web composer in a new tab rather than firing a
   mailto:. A mailto: only works if the visitor's browser or OS has a mail
   handler registered, and on a machine that has never set one the click does
   nothing at all - no tab, no error, no feedback. Most people writing to us
   about a paper are on Gmail, so this is the path that actually works.

   The address printed under the button is deliberately not a link at all, so
   the button is the single place on the page that opens a mail client. */
const GMAIL_HREF =
  'https://mail.google.com/mail/?view=cm&fs=1' +
  `&to=${encodeURIComponent(CONTACT_EMAIL)}` +
  `&su=${encodeURIComponent(CONTACT_SUBJECT)}`

/* Written as plainly as possible. The earlier list used the product's own
   vocabulary, which only makes sense to someone who already knows the tool. */
const SELF_INCLUDED = [
  'Run as many researches as you want',
  'Searches 200 million+ papers on arXiv, OpenAlex, Semantic Scholar and Crossref',
  'Shows you the source paper behind every line it writes',
  'Writes literature reviews and complete articles',
  'Formats to your journal template and exports',
  'Use your own API key, or run a model on your machine',
]

/* Deliberately the same four jobs the other card promises, so the two lists
   read against each other and the difference is concrete rather than vague. */
const SELF_EXCLUDED = [
  'Dataset collection and preprocessing',
  'Programming and scripts',
  'Implementations and evaluations',
  'Figure and table generation',
]

/* Deliberately all in "we", so the difference from the first plan is obvious
   at a glance: there, you drive the tool; here, we do the work. */
const SERVICE_INCLUDED = [
  'We read the literature and write the review',
  'We write the code and run the experiments',
  'We collect and prepare the dataset',
  'We evaluate it and report the results',
  'We produce the figures and tables',
  'We write the full manuscript',
  'We format it for the journal you are targeting',
  'You get every final file, ready to submit',
]

/* Every policy page, linked under the cards. All sales are final, so the
   terms and the refund policy sit right next to the price. */
const LEGAL_LINKS = [
  ['/terms/', 'Terms'],
  ['/privacy/', 'Privacy'],
  ['/refund-policy/', 'Refunds'],
  ['/shipping-policy/', 'Delivery'],
  ['/contact/', 'Contact'],
]

/* The plan name is the page's heading now, so it is sized and coloured to lead
   the card rather than label it. */
const PLAN_HEADING =
  'items-start text-[0.72rem] leading-snug font-semibold text-white sm:text-[0.95rem]'

/* No badge in the row any more, so it is just the heading with its spacing.

   min-h reserves three lines on phones. The second heading wraps to three at
   that width and the first one to two, which left the two header panels ending at
   different heights - visible as a step between the cards. Reserving the taller
   of the two makes both panels finish level. Dropped from sm up, where both
   headings sit on one line anyway. */
const PLAN_ROW = 'mb-4 min-h-12 items-start sm:mb-7 sm:min-h-0'

/* One treatment for both cards. border-2 overrides the primitive's 1px edge,
   which disappeared against the backdrop. The solid fill overrides its
   dark:bg-transparent: left see-through, the card sitting over the bright part
   of the image turned orange while the other stayed black, so the pair never
   looked like a matched set. */
const CARD_EDGE =
  'flex max-w-sm flex-col border-2 border-white/[0.14] bg-[#0a0809]/85 p-1 dark:border-white/[0.14] dark:bg-[#0a0809]/85 sm:p-2'

const HEADER = 'p-3 sm:p-6'
const BODY = 'flex flex-1 flex-col gap-4 p-3 pt-3 sm:gap-7 sm:p-6 sm:pt-4'
const LIST = 'flex flex-col gap-2.5 sm:gap-3.5'
const ITEM = 'gap-2 text-[0.68rem] leading-snug sm:gap-3 sm:text-sm'
const TICK = 'mt-0.5 size-3 shrink-0 sm:size-4'
const PLAN_ICON = 'mt-0.5 size-3 shrink-0 text-[#c2842b] sm:size-4'
const SEPARATOR = 'gap-2 text-[0.6rem] sm:gap-3 sm:text-sm'

/* Radix Themes props take responsive objects, so the buttons shrink with
   everything else instead of staying at desktop height. */
const BUTTON_SIZE = { initial: '1', sm: '3' }

export default function Pricing() {
  const reduce = useReducedMotion()

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section className="fa-pricing w-full isolate min-h-screen overflow-hidden relative bg-[#050406]">
      {/* Served from public/ rather than the reference's remote URL, so the page
          does not depend on a third-party bucket staying up and no visitor IP
          is handed to it. bg-[#050406] above is the colour behind it while the
          image loads, so there is no white flash. */}
      <img
        src="/pricing/pricing-bg.jpg"
        alt=""
        className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />

      {/* pt clears the fixed navbar, which floats over the page rather than
          taking up space in the flow. */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-3 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-28">
        {/* No page heading. The two lines that were here now sit on the cards
            themselves as their plan names, which says the same thing once
            instead of twice and lets the backdrop carry the top of the page. */}

        {/* 52rem is exactly two 24rem cards plus the 4rem gap, so on desktop each
            column is the width of the card it holds and the gap you set is the
            gap you get. At the old max-w-6xl the columns were far wider than the
            cards, which put ~200px of dead space between them. */}
        <div className="grid w-full max-w-[52rem] grid-cols-2 justify-items-center gap-5 sm:gap-16">
          <motion.div className="flex w-full justify-center" {...rise(0)}>
            <Card className={CARD_EDGE}>
              <Header className={HEADER}>
                <Plan className={PLAN_ROW}>
                  <PlanName className={PLAN_HEADING}>
                    <Package className={PLAN_ICON} />
                    Use it yourself, pay once
                  </PlanName>
                </Plan>

                {/* Stacked on phones purely to match the paid card, whose price
                    has to stack for width. Both blocks are then the same number
                    of lines, so the two header panels end level with each other
                    instead of one sitting a line lower. */}
                <Price className="mb-3 flex-col items-start gap-0 sm:mb-5 sm:flex-row sm:items-end sm:gap-1">
                  <MainPrice className="text-base text-white sm:text-3xl">
                    ₹19,999
                  </MainPrice>
                  <Period className="pb-0 text-[0.62rem] sm:pb-1 sm:text-sm">
                    one-time
                  </Period>
                </Price>

                <Button
                  asChild
                  variant="classic"
                  color="gray"
                  highContrast
                  size={BUTTON_SIZE}
                  radius="large"
                  style={{ width: '100%' }}
                >
                  <a href="https://app.fiberarticle.com">
                    Sign up
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3 4.5 L13.4 12 L3 19.5 L3 14.6 L6.6 12 L3 9.4 Z" />
                      <path d="M11.6 4.5 L22 12 L11.6 19.5 L11.6 14.6 L15.2 12 L11.6 9.4 Z" />
                    </svg>
                  </a>
                </Button>

              </Header>

              <Body className={BODY}>
                <List className={LIST}>
                  {SELF_INCLUDED.map((item) => (
                    <ListItem key={item} className={ITEM}>
                      <CircleCheck className={`${TICK} text-[#50c158]`} />
                      {item}
                    </ListItem>
                  ))}
                </List>

                <Separator className={SEPARATOR}>Not included</Separator>

                <List className={LIST}>
                  {SELF_EXCLUDED.map((item) => (
                    <ListItem
                      key={item}
                      className={`${ITEM} text-muted-foreground/70`}
                    >
                      <CircleX className={`${TICK} text-[#e5484d]`} />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Body>
            </Card>
          </motion.div>

          <motion.div className="flex w-full justify-center" {...rise(0.12)}>
            <Card className={CARD_EDGE}>
              <Header className={HEADER}>
                <Plan className={PLAN_ROW}>
                  <PlanName className={PLAN_HEADING}>
                    <FileText className={PLAN_ICON} />
                    If you want us to do it for you
                  </PlanName>
                </Plan>

                {/* items-center instead of the primitive's items-end. "Contact
                    us" is a phrase, not a figure, so sitting the small text on
                    its baseline dropped it well below the cap height and read
                    as a separate line. Centred it sat a touch high against the
                    x-height, so it is nudged back down 3px. Transform rather
                    than margin, so the nudge cannot shift the row. */}
                {/* Stacked on phones. "Contact us" plus "per article" needs
                    more width than the narrow column has, and side by side the
                    heading itself broke across two lines. */}
                <Price className="mb-3 flex-col items-start gap-0 sm:mb-5 sm:flex-row sm:items-center sm:gap-1">
                  <MainPrice className="text-base text-white sm:text-[1.65rem]">
                    Contact us
                  </MainPrice>
                  <Period className="pb-0 text-[0.62rem] sm:translate-y-[3px] sm:text-sm">
                    per article
                  </Period>
                </Price>

                <Button
                  asChild
                  variant="classic"
                  color="brown"
                  size={BUTTON_SIZE}
                  radius="large"
                  style={{ width: '100%' }}
                >
                  <a
                    href={GMAIL_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="size-3 sm:size-4" />
                    Email us
                  </a>
                </Button>
              </Header>

              <Body className={BODY}>
                <List className={LIST}>
                  {SERVICE_INCLUDED.map((item) => (
                    <ListItem key={item} className={ITEM}>
                      <CircleCheck className={`${TICK} text-[#50c158]`} />
                      {item}
                    </ListItem>
                  ))}
                </List>

                <Separator className={SEPARATOR}>Write to us</Separator>

                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Plain text, not a link. The Email us button is the only
                      thing on this page that opens a mail client, so this is
                      the address to read and copy - clicking it should do
                      nothing. Still selectable, which is the point of it.
                      Sized so it holds one line in the narrow phone column;
                      break-all is the fallback if it ever does not. */}
                  <p className="block break-all rounded-lg border border-dashed border-[#b3782d]/40 bg-[#b3782d]/[0.1] px-0 py-2 text-center font-mono text-[0.52rem] text-[#d7a25f] select-all sm:px-3 sm:py-3 sm:text-sm">
                    {CONTACT_EMAIL}
                  </p>

                  <p className="text-center text-[0.6rem] leading-relaxed text-white/40 sm:text-xs">
                    Tell us your topic and your target journal. Typical
                    turnaround is three to four days.
                  </p>
                </div>
              </Body>
            </Card>
          </motion.div>
        </div>

        {/* What the one-time price means, under both cards so the two header
            panels stay the same height. */}
        <p className="mt-8 max-w-xl text-center text-[0.7rem] leading-relaxed text-white/60 sm:mt-12 sm:text-sm">
          The ₹19,999 is paid once and opens every feature for good. Payment
          gateway charges are added at checkout.
        </p>

        {/* The policies a buyer agrees to, one tap away from the price. */}
        <nav
          aria-label="Policies"
          className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[0.7rem] text-white/50 sm:mt-5 sm:gap-x-6 sm:text-xs"
        >
          {LEGAL_LINKS.map(([to, label]) => (
            <Link key={to} to={to} className="underline-offset-4 transition-colors hover:text-white/85 hover:underline">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
