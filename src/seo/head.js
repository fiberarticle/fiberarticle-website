import { classify } from '../routes.js'
import { POSTS, POSTS_BY_SLUG, postPath } from '../blog/registry.js'
import { TOPICS_BY_ID } from '../blog/topics.js'
import { postText, stripInline, wordCount } from '../blog/text.js'
import { LEGAL_META_BY_SLUG, legalPath } from '../legal/meta.js'

/**
 * The <head> of every page, described as plain data. The same description is
 * printed into the static HTML at build time (headToHtml) and applied to the
 * live document when a visitor moves between pages (useHead), so what a
 * crawler reads and what a browser shows can never drift apart.
 */

export const ORIGIN = 'https://fiberarticle.com'
const LOGO = `${ORIGIN}/fiberarticle-logos/fiberarticle-logo-512x512-light-background.png`
const BLOG_NAME = 'The Fiberarticle Blog'

const ORGANIZATION = {
  '@type': 'Organization',
  name: 'Fiberarticle',
  url: ORIGIN,
  logo: { '@type': 'ImageObject', url: LOGO, width: 512, height: 512 },
}

export function absolute(path) {
  return path === '/' ? ORIGIN : `${ORIGIN}${path}`
}

export function ogImageFor(slug) {
  return `${ORIGIN}/blog/og/${slug}.jpg`
}

/** 2026-09-23 -> 2026-09-23T09:00:00+05:30, the moment a post goes up. */
function isoDate(day) {
  return `${day}T09:00:00+05:30`
}

function breadcrumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: absolute(path),
    })),
  }
}

function homeHead() {
  // Kept exactly as the site has always shipped it.
  return {
    title: 'Fiberarticle',
    description:
      'Fiberarticle is an open source agentic AI for academic research. It finds papers across arXiv, OpenAlex, Semantic Scholar and Crossref, reads open-access PDFs, tracks every reference, and writes publication-ready articles.',
    canonical: ORIGIN,
    og: {
      title: 'Fiberarticle | Open Source Agentic AI Researcher',
      description:
        'An agentic AI that discovers academic sources, reads and synthesizes the literature, tracks references, and writes publication-ready articles. Open source and self-hostable.',
      type: 'website',
      url: ORIGIN,
    },
  }
}

function pricingHead() {
  const url = absolute('/pricing/')
  return {
    title: 'Pricing | Fiberarticle',
    description:
      'Unlock Fiberarticle with one payment of ₹19,999 to research, review the literature and write articles yourself, or have us do the research and writing for you.',
    canonical: url,
    og: {
      title: 'Pricing | Fiberarticle',
      description:
        'One payment of ₹19,999 when you drive it yourself. Write to us if you want us to do the work for you.',
      type: 'website',
      url,
    },
  }
}

function blogIndexHead() {
  const url = absolute('/blogs/')
  const title = 'Research, Literature Reviews and Plagiarism, Explained Simply | Fiberarticle Blog'
  const description =
    'Plain-language blogs on academic research: choosing a topic, finding a research gap, writing a literature review, avoiding plagiarism, citing well and getting published.'

  return {
    title,
    description,
    canonical: url,
    og: {
      title: 'The Fiberarticle Blog',
      description,
      type: 'website',
      url,
      image: `${ORIGIN}/blog/og/blogs.jpg`,
      imageAlt: 'A hand-drawn paper character reading at a desk while pages float over from a pile of books',
    },
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${url}#blog`,
        name: BLOG_NAME,
        description,
        url,
        inLanguage: 'en-IN',
        publisher: ORGANIZATION,
        blogPost: POSTS.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          url: absolute(postPath(post.slug)),
          datePublished: isoDate(post.date),
          dateModified: isoDate(post.updated || post.date),
          image: ogImageFor(post.slug),
          author: ORGANIZATION,
        })),
      },
      breadcrumbs([
        ['Home', '/'],
        ['Blog', '/blogs/'],
      ]),
    ],
  }
}

/** `content` is optional: with it the head also carries the FAQ and word count. */
export function postHead(slug, content) {
  const post = POSTS_BY_SLUG[slug]
  const url = absolute(postPath(slug))
  const image = ogImageFor(slug)
  const topic = TOPICS_BY_ID[post.topic]

  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#post`,
    headline: post.title,
    description: post.description,
    image: [image],
    datePublished: isoDate(post.date),
    dateModified: isoDate(post.updated || post.date),
    author: ORGANIZATION,
    publisher: ORGANIZATION,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@type': 'Blog', '@id': `${absolute('/blogs/')}#blog`, name: BLOG_NAME },
    articleSection: topic.label,
    keywords: (post.keywords || []).join(', '),
    inLanguage: 'en-IN',
  }

  const jsonLd = [article]

  if (content) {
    article.wordCount = wordCount(postText(post, content))

    if (content.faq?.length) {
      jsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: stripInline(item.q),
          acceptedAnswer: { '@type': 'Answer', text: stripInline(item.a) },
        })),
      })
    }
  }

  jsonLd.push(
    breadcrumbs([
      ['Home', '/'],
      ['Blog', '/blogs/'],
      [post.title, postPath(slug)],
    ]),
  )

  return {
    title: `${post.title} | Fiberarticle`,
    description: post.description,
    canonical: url,
    og: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      image,
      imageAlt: post.imageAlt || post.title,
      'article:published_time': isoDate(post.date),
      'article:modified_time': isoDate(post.updated || post.date),
      'article:section': topic.label,
    },
    jsonLd,
  }
}

function legalHead(slug) {
  const page = LEGAL_META_BY_SLUG[slug]
  const url = absolute(legalPath(slug))
  return {
    title: `${page.title} | Fiberarticle`,
    description: page.description,
    canonical: url,
    og: {
      title: `${page.title} | Fiberarticle`,
      description: page.description,
      type: 'website',
      url,
    },
    jsonLd: [
      breadcrumbs([
        ['Home', '/'],
        [page.title, legalPath(slug)],
      ]),
    ],
  }
}

function missingHead() {
  return {
    title: 'Page not found | Fiberarticle',
    description: 'This page does not exist. Every blog and the rest of Fiberarticle are still here.',
    robots: 'noindex',
  }
}

export function headFor(pathname, content) {
  const route = classify(pathname)
  if (route.kind === 'home') return homeHead()
  if (route.kind === 'pricing') return pricingHead()
  if (route.kind === 'blogs') return blogIndexHead()
  if (route.kind === 'post') return postHead(route.slug, content)
  if (route.kind === 'legal') return legalHead(route.slug)
  return missingHead()
}

/* ------------------------------------------------------------------ html */

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** JSON that cannot close the <script> it sits in. */
export function safeJson(value) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/** Every tag a head description turns into, as [tag, attributes, body]. */
export function headTags(head) {
  const tags = []
  const meta = (key, name, content) => {
    if (content !== undefined && content !== null && content !== '') {
      tags.push(['meta', { [key]: name, content: String(content) }])
    }
  }

  meta('name', 'description', head.description)
  if (head.robots) meta('name', 'robots', head.robots)
  if (head.canonical) tags.push(['link', { rel: 'canonical', href: head.canonical }])

  const og = head.og || {}
  meta('property', 'og:site_name', 'Fiberarticle')
  meta('property', 'og:locale', 'en_IN')
  for (const [key, value] of Object.entries(og)) {
    if (key === 'imageAlt') continue
    const property = key.startsWith('article:') ? key : `og:${key}`
    meta('property', property, value)
  }
  if (og.image) {
    meta('property', 'og:image:width', 1200)
    meta('property', 'og:image:height', 630)
    meta('property', 'og:image:alt', og.imageAlt)
  }

  meta('name', 'twitter:card', og.image ? 'summary_large_image' : 'summary')
  meta('name', 'twitter:title', og.title || head.title)
  meta('name', 'twitter:description', og.description || head.description)
  if (og.image) {
    meta('name', 'twitter:image', og.image)
    meta('name', 'twitter:image:alt', og.imageAlt)
  }

  for (const block of head.jsonLd || []) {
    tags.push(['script', { type: 'application/ld+json' }, safeJson(block)])
  }

  return tags
}

export function headToHtml(head) {
  const lines = [`<title>${escapeAttr(head.title)}</title>`]

  for (const [tag, attrs, body] of headTags(head)) {
    const attributes = Object.entries(attrs)
      .map(([name, value]) => `${name}="${escapeAttr(value)}"`)
      .join(' ')
    lines.push(
      tag === 'script'
        ? `<script ${attributes} data-rh="">${body}</script>`
        : `<${tag} ${attributes} data-rh="" />`,
    )
  }

  return lines.join('\n    ')
}
