import { Fragment } from 'react'
import { Link } from 'react-router-dom'

/**
 * The little markup post text is written in:
 *
 *   **bold**     *italic*     ==highlighter==     [words](/blogs/a-post/)
 *
 * Links that start with / stay inside the site (and use the router); any
 * other link opens in a new tab. Markup can nest one inside another.
 */

function tokens() {
  return /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|==(.+?)==|\*(?!\s)(.+?)\*/g
}

function parse(text, prefix) {
  const out = []
  const re = tokens()
  let last = 0
  let match
  let n = 0

  while ((match = re.exec(text))) {
    if (match.index > last) out.push(text.slice(last, match.index))
    const key = `${prefix}-${n++}`
    const [, linkText, href, bold, mark, italic] = match

    if (linkText !== undefined) {
      out.push(
        href.startsWith('/') ? (
          <Link key={key} to={href}>
            {parse(linkText, key)}
          </Link>
        ) : (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer">
            {parse(linkText, key)}
          </a>
        ),
      )
    } else if (bold !== undefined) {
      out.push(<strong key={key}>{parse(bold, key)}</strong>)
    } else if (mark !== undefined) {
      out.push(
        <mark key={key} className="hl-mark">
          {parse(mark, key)}
        </mark>,
      )
    } else {
      out.push(<em key={key}>{parse(italic, key)}</em>)
    }
    last = re.lastIndex
  }

  if (last < text.length) out.push(text.slice(last))
  return out
}

export default function Inline({ text }) {
  return <Fragment>{parse(String(text), 'i')}</Fragment>
}
