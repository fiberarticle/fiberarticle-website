import { Link } from 'react-router-dom'

import Inline from '../blog/inline.jsx'
import PaperFooter from '../blog/PaperFooter.jsx'
import { formatDate } from '../blog/ui.jsx'
import { headFor } from '../seo/head.js'
import { useHead } from '../seo/useHead.js'
import { LEGAL_CONTENT_BY_SLUG } from './content.js'
import { LEGAL_META, LEGAL_META_BY_SLUG, legalPath } from './meta.js'

function Block({ block }) {
  if (typeof block === 'string') {
    return (
      <p>
        <Inline text={block} />
      </p>
    )
  }
  return (
    <ul className="legal-list">
      {block.list.map((item) => (
        <li key={item}>
          <Inline text={item} />
        </li>
      ))}
    </ul>
  )
}

/**
 * One policy page (terms, privacy, refunds, delivery, contact), on the same
 * paper desk as the blog. Plain text on a napkin, the date it last changed,
 * and links to the other policies underneath.
 */
export default function LegalPage({ slug }) {
  const meta = LEGAL_META_BY_SLUG[slug]
  const content = LEGAL_CONTENT_BY_SLUG[slug]
  useHead(headFor(legalPath(slug)), `legal:${slug}`)

  return (
    <div className="desk">
      <main className="desk-inner">
        <article className="napkin napkin-frame legal">
          <header className="legal-head">
            <h1 className="legal-title">{meta.title}</h1>
            <p className="legal-updated">Last updated {formatDate(meta.updated)}</p>
          </header>

          <div className="prose legal-body">
            <p className="legal-intro">
              <Inline text={content.intro} />
            </p>
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
              </section>
            ))}
          </div>

          <nav className="legal-nav" aria-label="Policies">
            {LEGAL_META.map((page) =>
              page.slug === slug ? (
                <span key={page.slug} aria-current="page">
                  {page.title}
                </span>
              ) : (
                <Link key={page.slug} to={legalPath(page.slug)}>
                  {page.title}
                </Link>
              ),
            )}
          </nav>
        </article>
      </main>
      <PaperFooter />
    </div>
  )
}
