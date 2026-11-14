import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@radix-ui/themes'
import { Link } from 'react-router-dom'
import { Check, HandHelping, Info, Infinity as InfinityIcon, Mail, X } from 'lucide-react'

/**
 * Pricing page: two plans over the full-bleed backdrop.
 *
 * Each card is built in two parts. The head is a lit, coloured panel (brown for
 * the plan you use yourself, green for the one we do for you) with a flame of
 * the same colour burning above it. Under the head sits a dark panel whose rim
 * glows in that colour and holds what the plan covers. Every colour, gradient,
 * blur and animation lives in global.css under "Pricing cards", keyed off the
 * card's data-tone, so this file only lays out the content.
 *
 * The pair stays side by side on phones rather than stacking. That is a
 * deliberate call: comparing two plans is the whole job of this page, and one
 * above the other means scrolling to compare. The cost is that every size below
 * sm has to come down hard, which global.css does for the phone width.
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

/* The four agents the app is built around lead the list, each named in bold
   with "AI" in front so a visitor knows what kind of tool it is, followed by
   what you can do with the result. Each name takes its agent's colour from
   the app's dashboard (amber, green, pink, blue: the logo palette).
   [name, text, colour]; rows without a name are plain sentences. */
const SELF_INCLUDED = [
  ['AI Researcher:', 'finds the right papers from 200 million+ across scholarly indexes.', '#fca91e'],
  ['AI Literature Reviewer:', 'builds your evidence matrix and shows the gaps to work on.', '#50c158'],
  ['AI Article Writer:', 'researches your topic, then writes a full manuscript.', '#ff7db1'],
  ['AI Assistant:', 'answers your research questions with citations from real papers.', '#4f90e4'],
  [null, 'Format to your journal’s template and export to Word, PDF or LaTeX.'],
  [null, 'Use our AI, your own API key or a local model.'],
]

/* Deliberately the same four jobs the other card promises, so the two lists
   read against each other and the difference is concrete rather than vague. */
const SELF_EXCLUDED = [
  'Dataset collection and processing',
  'Programming and scripts',
  'Implementations and evaluations',
  'Figures and tables generation',
]

/* Deliberately all in "we", so the difference from the first plan is obvious
   at a glance: there, you drive the tool; here, we do the work. */
const SERVICE_INCLUDED = [
  'Our team reviews the existing literature and identifies the research problem.',
  'We collect, clean, and prepare the datasets.',
  'We write the code and scripts, run experiments, and evaluate the results.',
  'We create the figures, tables, and illustrations.',
  'We prepare the complete research manuscript.',
  'We format the manuscript according to your target journal’s guidelines.',
  'We deliver all final files, ready for submission.',
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

/* The tongues of the flame above each card, left to right. Each has its own
   height and flicker timing (negative delays start them mid-cycle), so the
   flame never pulses as one block. */
const TONGUES = [
  { left: '10%', height: '66%', duration: '3.7s', delay: '-1.2s' },
  { left: '28%', height: '75%', duration: '3.2s', delay: '-2.3s' },
  { left: '42%', height: '72%', duration: '4.1s', delay: '-0.4s' },
  { left: '56%', height: '70%', duration: '3.4s', delay: '-1.8s' },
  { left: '70%', height: '64%', duration: '3.9s', delay: '-2.9s' },
]

/* The double chevron every Sign up button on the site carries. */
function Chevrons() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 4.5 L13.4 12 L3 19.5 L3 14.6 L6.6 12 L3 9.4 Z" />
      <path d="M11.6 4.5 L22 12 L11.6 19.5 L11.6 14.6 L15.2 12 L11.6 9.4 Z" />
    </svg>
  )
}

/* A card's call to action: the same silver Radix "classic" button as Sign up
   in the navbar (gray + highContrast), one size up and stretched across the
   card. It drops back to the navbar's size on phones. */
function PlanButton({ children, ...link }) {
  return (
    <Button
      asChild
      variant="classic"
      color="gray"
      highContrast
      radius="large"
      size={{ initial: '2', sm: '3' }}
      className="fa-plan-cta"
    >
      <a {...link}>{children}</a>
    </Button>
  )
}

/* The flame above a card and the line of text it lights. */
function Flame({ icon: Icon, label, accent }) {
  return (
    <div className="fa-plan-flame">
      <div className="fa-plan-fire" aria-hidden="true">
        <div className="fa-plan-fire-sway">
          <div className="fa-plan-fire-body" />
        </div>
        {TONGUES.map((tongue) => (
          <span
            key={tongue.left}
            className="fa-plan-fire-tongue"
            style={{
              left: tongue.left,
              height: tongue.height,
              '--fa-tongue-duration': tongue.duration,
              '--fa-tongue-delay': tongue.delay,
            }}
          />
        ))}
      </div>
      <p className="fa-plan-flame-label">
        <Icon className="fa-plan-flame-icon" aria-hidden="true" />
        {label}
        <span className="fa-plan-accent">{accent}</span>
      </p>
    </div>
  )
}

/* One plan: the lit head with the price and the call to action, then the
   glowing panel with what the plan covers (passed in as children). */
function Plan({ tone, flame, title, price, caption, action, note, panelIcon: PanelIcon, panelLabel, children }) {
  return (
    <article className="fa-plan" data-tone={tone}>
      <Flame {...flame} />

      <div className="fa-plan-head">
        {/* The lit surface, painted in two layers: a blurred copy underneath
            gives the soft bottom edge and corners, the sharp copy on top keeps
            the upper edge crisp. */}
        <div className="fa-plan-art" aria-hidden="true">
          <div className="fa-plan-art-blur">
            <div />
          </div>
          <div className="fa-plan-art-crisp" />
        </div>

        <h2 className="fa-plan-title">{title}</h2>

        <p className="fa-plan-price">
          <span className="fa-plan-amount">{price}</span>
          {caption ? <span className="fa-plan-caption">{caption}</span> : null}
        </p>

        <div className="fa-plan-action">
          {action}
          <p className="fa-plan-note">
            <Info className="fa-plan-note-icon" aria-hidden="true" />
            {note}
          </p>
        </div>
      </div>

      <section className="fa-plan-panel">
        <div className="fa-plan-panel-glow" aria-hidden="true">
          <div className="fa-plan-panel-burn" />
          <div className="fa-plan-panel-lit">
            <div className="fa-plan-panel-fill" />
            <div className="fa-plan-panel-rim" />
          </div>
        </div>

        <p className="fa-plan-panel-head">
          <PanelIcon className="fa-plan-panel-icon" aria-hidden="true" />
          <span className="fa-plan-accent">{panelLabel}</span>
        </p>

        <div className="fa-plan-panel-body">
          <div className="fa-plan-panel-inner">{children}</div>
        </div>
      </section>
    </article>
  )
}

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
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-3 pt-28 pb-8 sm:px-6 sm:pt-36 sm:pb-12">
        {/* No page heading. The two plan names on the cards say what the page
            is about, and the backdrop carries the top of the page. */}

        <div className="fa-plans">
          <motion.div className="fa-plan-slot" {...rise(0)}>
            <Plan
              tone="brown"
              flame={{ icon: InfinityIcon, label: 'Pay once', accent: 'use it yourself' }}
              title="Use it yourself, pay now"
              price="₹19,999"
              caption="one-time"
              action={
                <PlanButton href="https://app.fiberarticle.com">
                  Sign up
                  <Chevrons />
                </PlanButton>
              }
              note="Pay by UPI, card, netbanking or wallet"
              panelIcon={InfinityIcon}
              panelLabel="What you get"
            >
              <section className="fa-plan-group">
                <ul className="fa-plan-list">
                  {SELF_INCLUDED.map(([name, text, colour]) => (
                    <li key={text} className="fa-plan-row">
                      <Check className="fa-plan-tick" aria-hidden="true" />
                      {/* One span, so the bold name and its sentence wrap as
                          one line of text beside the tick. */}
                      <span>
                        {name ? (
                          <strong className="fa-plan-feature" style={{ color: colour }}>
                            {name}
                          </strong>
                        ) : null}
                        {name ? ' ' : null}
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="fa-plan-group">
                <h3 className="fa-plan-group-title">Not included</h3>
                <ul className="fa-plan-list">
                  {SELF_EXCLUDED.map((item) => (
                    <li key={item} className="fa-plan-row fa-plan-row-out">
                      <X className="fa-plan-tick" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Plan>
          </motion.div>

          <motion.div className="fa-plan-slot" {...rise(0.12)}>
            <Plan
              tone="green"
              flame={{ icon: HandHelping, label: 'Done for you', accent: 'start to finish' }}
              title="If you want us to do it for you"
              price="Contact us"
              action={
                <PlanButton
                  href={GMAIL_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail aria-hidden="true" />
                  Email us
                </PlanButton>
              }
              note="You get your work done in 1 to 2 weeks"
              panelIcon={HandHelping}
              panelLabel="What we do"
            >
              <section className="fa-plan-group">
                <ul className="fa-plan-list">
                  {SERVICE_INCLUDED.map((item) => (
                    <li key={item} className="fa-plan-row">
                      <Check className="fa-plan-tick" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="fa-plan-group">
                <h3 className="fa-plan-group-title">Write to us</h3>
                {/* Plain text, not a link. The Email us button is the only
                    thing on this page that opens a mail client, so this is
                    the address to read and copy - clicking it should do
                    nothing. Still selectable, which is the point of it.
                    Sized in global.css so it holds one line in the narrow
                    phone column; break-all is the fallback if it ever does
                    not. */}
                <p className="fa-plan-email">{CONTACT_EMAIL}</p>
                <p className="fa-plan-email-note">
                  Tell us your topic and your target journal.
                </p>
              </section>
            </Plan>
          </motion.div>
        </div>

        {/* What the one-time price means, under both cards so the two header
            panels stay the same height. */}
        <p className="mt-8 max-w-xl text-center text-[0.7rem] leading-relaxed text-white/60 sm:mt-12 sm:text-sm">
          The ₹19,999 is paid once and opens every feature. Payment
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
