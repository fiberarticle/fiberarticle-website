import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Blocks } from './blocks.jsx'
import Inline from './inline.jsx'
import InkDefs from './ink/defs.jsx'
import { InkFigure } from './ink/stage.jsx'
import PaperFooter from './PaperFooter.jsx'
import PaperLoading from './PaperLoading.jsx'
import { POSTS_BY_SLUG, postPath, relatedPosts } from './registry.js'
import StoryCard from './StoryCard.jsx'
import { TOPICS_BY_ID } from './topics.js'
import { HatchBar, SignUpButton, Wavy, formatDate } from './ui.jsx'
import { useModule } from '../lib/lazy.js'
import { heroKey, postKey } from '../routes.js'
import { headFor } from '../seo/head.js'
import { useHead } from '../seo/useHead.js'

/**
 * Where the reader is in the blog: which section is being read, which are
 * behind them, and how far through the whole blog they are. One scroll
 * listener, throttled to a frame; state only changes when an answer does.
 * The thin bar at the top of small screens is written straight to its style
 * so it can follow every frame without re-rendering the page.
 */
function useReading(articleRef, barRef, sectionIds) {
  const [state, setState] = useState({ active: -1, percent: 0 })

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const article = articleRef.current
      if (!article) return

      const rect = article.getBoundingClientRect()
      const viewport = window.innerHeight
      const travel = Math.max(1, rect.height - viewport * 0.6)
      const progress = Math.min(1, Math.max(0, -rect.top / travel))

      const line = viewport * 0.34
      let active = -1
      sectionIds.forEach((id, i) => {
        const node = document.getElementById(id)
        if (node && node.getBoundingClientRect().top <= line) active = i
      })

      if (barRef.current) barRef.current.style.setProperty('--progress', progress.toFixed(4))

      const percent = Math.round(progress * 100)
      setState((prev) => (prev.active === active && prev.percent === percent ? prev : { active, percent }))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [articleRef, barRef, sectionIds])

  return state
}

function Contents({ sections, active }) {
  return (
    <ol>
      {sections.map((section, i) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className={[i === active ? 'is-active' : null, i < active ? 'is-read' : null].filter(Boolean).join(' ') || undefined}
            aria-current={i === active ? 'location' : undefined}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  )
}

function PostLayout({ post, content }) {
  const topic = TOPICS_BY_ID[post.topic]
  const articleRef = useRef(null)
  const barRef = useRef(null)
  const sectionIds = useRef(content.sections.map((s) => s.id)).current
  const { active, percent } = useReading(articleRef, barRef, sectionIds)
  const Hero = content.hero.Art
  const related = relatedPosts(post.slug, 3)

  return (
    <div className={`desk tone-${topic.tone}`}>
      <InkDefs />
      <div ref={barRef} className="read-progress" aria-hidden="true" />

      <div className="desk-inner post-layout">
        <aside className="post-rail">
          <div className="notebook-wrap">
            <nav className="notebook toc" aria-label="In this blog">
              <p className="toc-title">in this blog</p>
              <Contents sections={content.sections} active={active} />
              <div className="toc-tab">
                <span>read</span>
                <HatchBar value={percent / 100} label="How much of this blog you have read" />
                <span className="toc-pct">{percent}%</span>
              </div>
              <Link className="toc-back" to="/blogs/">
                all blogs
              </Link>
            </nav>
          </div>
        </aside>

        <article ref={articleRef} className="napkin napkin-frame post">
          <InkFigure hero caption={content.hero.caption}>
            <Hero />
          </InkFigure>

          <header className="post-head">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-dek">{post.dek}</p>
            <p className="check-line post-meta">
              <span>✓ {post.minutes} min read</span>
              <span className="dot">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="dot">·</span>
              <Link to={`/blogs/?shelf=${topic.id}`}>{topic.label}</Link>
            </p>
          </header>

          <div className="prose post-intro">
            {content.intro.map((paragraph, i) => (
              <p key={i}>
                <Inline text={paragraph} />
              </p>
            ))}
          </div>

          <details className="toc-mobile">
            <summary>in this blog</summary>
            <Contents sections={content.sections} active={-1} />
          </details>

          {content.sections.map((section, i) => (
            <Fragment key={section.id}>
              <Wavy className="post-divider" />
              <section id={section.id} className="post-section" aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>
                  <span className="scribble">{section.title}</span>
                </h2>
                <InkFigure number={i + 1} caption={section.caption}>
                  <section.Art />
                </InkFigure>
                <div className="prose">
                  <Blocks blocks={section.body} />
                </div>
              </section>
            </Fragment>
          ))}

          <div className="post-end">
            {content.takeaways?.length ? (
              <div className="notebook-wrap">
                <section className="notebook takeaways" aria-labelledby="takeaways-title">
                  <h2 id="takeaways-title">what to remember</h2>
                  <ul>
                    {content.takeaways.map((item, i) => (
                      <li key={i}>
                        <Inline text={item} />
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            ) : null}

            {content.faq?.length ? (
              <section className="qa" aria-labelledby="qa-title">
                <h2 id="qa-title">
                  <span className="scribble">quick questions</span>
                </h2>
                {content.faq.map((item, i) => (
                  <div key={i} className="qa-item">
                    <h3>
                      <Inline text={item.q} />
                    </h3>
                    <div className="prose">
                      <p>
                        <Inline text={item.a} />
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            ) : null}

            <aside className="post-cta" aria-label="Try Fiberarticle">
              <div>
                <h2>{content.cta?.title || 'Want a hand with the reading?'}</h2>
                <p>
                  <Inline
                    text={
                      content.cta?.text ||
                      'Fiberarticle searches arXiv, OpenAlex, Semantic Scholar and Crossref for you, reads the open-access papers, and shows the source behind every line it writes. It is free to use yourself.'
                    }
                  />
                </p>
              </div>
              <div className="post-cta-actions">
                <SignUpButton />
              </div>
            </aside>
          </div>
        </article>
      </div>

      {related.length ? (
        <section className="on-table" aria-labelledby="on-table-title">
          <h2 id="on-table-title" className="section-label">
            <span className="scribble">more blogs</span>
          </h2>
          <div className="story-grid">
            {related.map((item, i) => (
              <RelatedCard key={item.slug} post={item} index={i} />
            ))}
          </div>
        </section>
      ) : null}

      <PaperFooter />
    </div>
  )
}

/* Related cards show each blog's own opening drawing. Those are loaded
   with the page (see preloadForPath); after a quick click from elsewhere a
   card may show its words a moment before its drawing. */
function RelatedCard({ post, index }) {
  const { mod } = useModule(heroKey(post.slug), post.loadHero)
  return <StoryCard post={post} Hero={mod?.default} index={index} />
}

export default function BlogPost({ slug }) {
  const post = POSTS_BY_SLUG[slug]
  const { mod, error } = useModule(postKey(slug), post.load)
  const content = mod?.default

  useHead(headFor(postPath(slug), content), content ? `${slug}:full` : slug)

  if (!content) return <PaperLoading error={error} />
  return <PostLayout key={slug} post={post} content={content} />
}
