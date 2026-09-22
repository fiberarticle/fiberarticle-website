import { Button } from '@radix-ui/themes'
import { Link } from 'react-router-dom'

/**
 * Small pieces of the paper desk shared by the blog pages.
 */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** 2025-07-01 -> 1 Jul 2025, the same on the server and in every browser. */
export function formatDate(day) {
  const [year, month, date] = day.split('-').map(Number)
  return `${date} ${MONTHS[month - 1]} ${year}`
}

/* The double arrow the site's Sign up buttons carry. */
function Arrows() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 4.5 L13.4 12 L3 19.5 L3 14.6 L6.6 12 L3 9.4 Z" />
      <path d="M11.6 4.5 L22 12 L11.6 19.5 L11.6 14.6 L15.2 12 L11.6 9.4 Z" />
    </svg>
  )
}

/**
 * Buttons on the blog are the site's own Radix "classic" buttons, in the
 * brown the pricing page uses, so the blog asks for a click the same way
 * every other page does. `to` is a site path (router link) or a full URL.
 */
export function PaperButton({ to, variant = 'classic', onClick, children }) {
  const props = { variant, color: 'brown', size: '3', radius: 'large' }

  if (onClick) {
    return (
      <Button {...props} onClick={onClick}>
        {children}
      </Button>
    )
  }
  return (
    <Button {...props} asChild>
      {to.startsWith('/') ? <Link to={to}>{children}</Link> : <a href={to}>{children}</a>}
    </Button>
  )
}

export function SignUpButton() {
  return (
    <PaperButton to="https://app.fiberarticle.com">
      Try Now
      <Arrows />
    </PaperButton>
  )
}

/** The hatched progress bar from the penpal sidebar ("the tab"). */
export function HatchBar({ value = 0, label }) {
  return (
    <div
      className="hatch-bar"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value * 100)}
      style={{ '--value': value }}
    >
      <span />
    </div>
  )
}

export function Tape({ className = '', style }) {
  return <span className={`tape ${className}`.trim()} style={style} aria-hidden="true" />
}

export function Wavy({ className = '' }) {
  return <div className={`wavy ${className}`.trim()} aria-hidden="true" />
}
