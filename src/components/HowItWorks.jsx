import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * How it works: five pinned note cards scattered over ruled paper, joined by a
 * dashed line that keeps travelling.
 *
 * Desktop places the cards by hand on a fixed 1000 x 1130 board and draws one
 * long trail behind them (see .how-card:nth-of-type in global.css). Phones keep
 * the same look with a different trick: the cards lean left and right down the
 * column, and a short curve is drawn in the gap between each pair. Per-gap
 * curves are used because a card's height changes with its text, so one long
 * path could not stay attached to every card.
 */

const STEPS = [
  {
    tone: 'amber',
    title: 'Tell your topic',
    text: 'Ask what you want to get researched, in natural language.',
  },
  {
    tone: 'blue',
    title: 'It finds the papers',
    text: '200 million+ papers across arXiv, OpenAlex, Semantic Scholar and Crossref.',
  },
  {
    tone: 'pink',
    title: 'It reads everything',
    text: 'Open access PDFs are read in full, every point tied to its paper.',
  },
  {
    tone: 'green',
    title: 'It writes for you',
    text: 'A full article or review, section by section, backed by real papers.',
  },
  {
    tone: 'amber',
    title: 'You edit and export',
    text: 'Edit with AI help, pick a journal template, export in your format.',
  },
]

/* The dashed trail, drawn in the same 1000 x 1130 board the cards are placed
   on, so the curves meet the cards. One short curve per hop (card 1 to 2, 2 to
   3, and so on), each starting just outside the card it leaves so the line
   never slips under a tilted corner. Edit the numbers here if a card moves. */
const TRAIL = [
  'M 440 150 C 520 158, 500 240, 556 256',
  'M 706 392 C 700 450, 520 442, 440 468',
  'M 440 620 C 545 632, 560 694, 608 702',
  'M 706 819 C 700 878, 520 902, 440 928',
].join(' ')

/* The two short curves used in the gaps on phones. A card leaning left is
   followed by one leaning right, so the curve has to swing the other way each
   time. Both are drawn in a 100 x 72 box that is stretched to the column width. */
const LINK_LEFT_TO_RIGHT = 'M 24 0 C 24 34, 76 40, 76 72'
const LINK_RIGHT_TO_LEFT = 'M 76 0 C 76 34, 24 40, 24 72'

function Pin() {
  return (
    <svg
      className="how-pin"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
    </svg>
  )
}

/* One travelling dashed line, wherever it is drawn. -140 is a whole number of
   14px dash cycles (8 on, 6 off), so the loop restarts with no visible jump.
   The offset is counted in path length, so the short phone curves travel at the
   same speed as the long desktop trail. */
function Dashes({ d, reduce }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="rgba(35, 32, 33, 0.22)"
      strokeWidth="2"
      strokeDasharray="8 6"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      initial={false}
      animate={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: -140 }}
      transition={
        reduce ? { duration: 0 } : { duration: 3, repeat: Infinity, ease: 'linear' }
      }
    />
  )
}

export default function HowItWorks() {
  const reduce = useReducedMotion()

  return (
    <section className="section-light how" id="how-it-works">
      {/* Ruled paper lines, running the full width of the section. */}
      <span className="how-rules" aria-hidden="true" />

      <div className="container how-inner">
        <div className="section-head how-head">
          <h2>From topic to a finished article</h2>
        </div>

        <div className="how-stack">
          {/* Desktop trail. Hidden on phones, where the gap curves take over. */}
          <svg
            className="how-trail"
            viewBox="0 0 1000 1130"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <Dashes d={TRAIL} reduce={reduce} />
          </svg>

          {STEPS.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && (
                <svg
                  className="how-link"
                  viewBox="0 0 100 72"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {/* Card 1 leans left, card 2 right, and so on, so odd gaps
                      curve one way and even gaps the other. */}
                  <Dashes
                    d={i % 2 ? LINK_LEFT_TO_RIGHT : LINK_RIGHT_TO_LEFT}
                    reduce={reduce}
                  />
                </svg>
              )}

              <div className={`how-card how-tone-${step.tone}`}>
                <div className="how-card-paper">
                  <Pin />
                  <div className="how-card-note">
                    <span className="how-num">{`0${i + 1}`}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
