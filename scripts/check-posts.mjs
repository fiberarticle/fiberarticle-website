/**
 * Checks blog posts before they go anywhere near a build.
 *
 *   node scripts/check-posts.mjs                 every post
 *   node scripts/check-posts.mjs slug-a slug-b   just these
 *
 * For each post it loads the files through Vite (so JSX and imports work
 * exactly as in the site), renders every drawing and every block to HTML in
 * Node, and checks:
 *
 * - the metadata is complete and the lengths suit search results;
 * - the content has the shape the layout expects;
 * - no em dash, en dash, spaced hyphen used as a dash, or emoji appears in
 *   anything a reader sees;
 * - every link to another post points at a post that exists or is planned;
 * - animation names never clash between posts;
 * - the reading time in meta.js matches the words actually written.
 *
 * It prints a short report per post and exits with an error if anything is
 * wrong. It does not touch dist/, so it is safe to run at any time.
 */

import { readdirSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const postsDir = join(root, 'src', 'blog', 'posts')

/* Every post the blog will have, so a post may link to one that is still
   being written. Keep in step with the folders under src/blog/posts. */
export const PLANNED = [
  'what-is-academic-research',
  'how-to-choose-a-research-topic',
  'how-to-find-a-research-gap',
  'how-to-write-a-research-question',
  'how-to-search-academic-databases',
  'how-to-read-a-research-paper',
  'what-is-a-literature-review',
  'how-to-write-a-literature-review',
  'types-of-literature-review',
  'literature-review-matrix',
  'types-of-plagiarism',
  'how-plagiarism-checkers-work',
  'how-to-avoid-plagiarism',
  'paraphrasing-vs-summarising-vs-quoting',
  'using-ai-in-research-honestly',
  'structure-of-a-research-paper',
  'how-to-write-an-abstract',
  'citation-styles-explained',
  'how-to-choose-the-right-journal',
  'peer-review-explained',
]

const TOPICS = ['research-basics', 'literature-reviews', 'plagiarism-and-integrity', 'writing', 'publishing']
const RESERVED_IDS = ['top', 'table', 'takeaways-title', 'qa-title', 'on-table-title']
const SITE_PATHS = ['/', '/pricing/', '/blogs/']

const EM_DASH = String.fromCharCode(0x2014)
const EN_DASH = String.fromCharCode(0x2013)
const PICTOGRAPH = /\p{Extended_Pictographic}/u

const wanted = process.argv.slice(2)
const slugs = wanted.length
  ? wanted
  : readdirSync(postsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort()

const server = await createServer({
  configFile: false,
  root,
  logLevel: 'error',
  appType: 'custom',
  plugins: [react()],
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
  // Node would otherwise be handed the router's CommonJS build, whose named
  // exports Vite cannot see; transforming its ES build sidesteps that.
  ssr: {
    noExternal: ['react-router-dom', 'react-router'],
    resolve: { conditions: ['module-sync', 'module', 'node', 'development|production'] },
  },
})

const React = await import('react')
const { renderToStaticMarkup } = await import('react-dom/server')

const load = (path) => server.ssrLoadModule(path)
// The router must be the very copy the post's links import, or its links
// cannot find the router around them.
const { StaticRouter } = await load('react-router-dom')
const { Blocks } = await load('/src/blog/blocks.jsx')
const { postText, wordCount, readingMinutes, stripInline } = await load('/src/blog/text.js')

function html(element) {
  return renderToStaticMarkup(React.createElement(StaticRouter, { location: '/' }, element))
}

/* The posts carry 2025 publication dates, so none may speak of a later year. */
const FUTURE_YEAR = /\b20(2[6-9]|[3-9]\d)\b/

function textIssues(where, value, problems) {
  const text = String(value)
  const year = text.match(FUTURE_YEAR)
  if (year) problems.push(`${where}: mentions ${year[0]}, after the post's own date`)
  if (text.includes(EM_DASH)) problems.push(`${where}: contains an em dash`)
  if (text.includes(EN_DASH)) problems.push(`${where}: contains an en dash`)
  if (/\s-\s/.test(stripInline(text))) problems.push(`${where}: " - " reads as a dash; use a comma, colon or full stop`)
  const emoji = text.match(PICTOGRAPH)
  if (emoji) problems.push(`${where}: contains the pictograph "${emoji[0]}"`)
  if (/ {2,}/.test(text)) problems.push(`${where}: has a double space`)
}

function linkIssues(where, value, problems) {
  for (const [, href] of String(value).matchAll(/\]\(([^)\s]+)\)/g)) {
    if (href.startsWith('/blogs/') && href !== '/blogs/') {
      const slug = href.replace(/^\/blogs\//, '').replace(/\/$/, '')
      if (!PLANNED.includes(slug)) problems.push(`${where}: links to unknown post "${href}"`)
      if (!href.endsWith('/')) problems.push(`${where}: post links end with a slash ("${href}/")`)
    } else if (href.startsWith('/') && !SITE_PATHS.includes(href)) {
      problems.push(`${where}: links to "${href}", which is not a page on the site`)
    } else if (!href.startsWith('/') && !/^https:\/\//.test(href)) {
      problems.push(`${where}: link "${href}" should be https or a site path`)
    }
  }
}

/* Every string inside a block, with where it came from. */
function* strings(value, where) {
  if (typeof value === 'string') yield [where, value]
  else if (Array.isArray(value)) for (let i = 0; i < value.length; i++) yield* strings(value[i], `${where}[${i}]`)
  else if (value && typeof value === 'object') {
    for (const [key, inner] of Object.entries(value)) {
      if (key === 'Art') continue
      yield* strings(inner, `${where}.${key}`)
    }
  }
}

const keyframeOwners = new Map()
const orders = new Map()
let failures = 0

for (const slug of slugs) {
  const problems = []
  const warnings = []
  const folder = join(postsDir, slug)

  for (const file of ['meta.js', 'hero.jsx', 'scenes.jsx', 'content.jsx']) {
    if (!existsSync(join(folder, file))) problems.push(`missing ${file}`)
  }
  if (problems.length) {
    report(slug, problems, warnings)
    continue
  }

  let meta
  let content
  try {
    meta = (await load(`/src/blog/posts/${slug}/meta.js`)).default
    content = (await load(`/src/blog/posts/${slug}/content.jsx`)).default
  } catch (error) {
    problems.push(`could not load: ${error.message}`)
    report(slug, problems, warnings)
    continue
  }

  /* ---- metadata */
  if (meta.slug !== slug) problems.push(`meta.slug "${meta.slug}" does not match the folder`)
  if (!PLANNED.includes(slug)) problems.push('slug is not in the planned list')
  if (!TOPICS.includes(meta.topic)) problems.push(`unknown topic "${meta.topic}"`)
  if (!Number.isInteger(meta.order)) problems.push('order must be a whole number')
  else if (orders.has(meta.order)) problems.push(`order ${meta.order} is also used by ${orders.get(meta.order)}`)
  else orders.set(meta.order, slug)
  for (const key of ['title', 'dek', 'description', 'blurb', 'date', 'imageAlt']) {
    if (!meta[key] || typeof meta[key] !== 'string') problems.push(`meta.${key} is missing`)
  }
  if (meta.title && meta.title.length > 62) warnings.push(`title is ${meta.title.length} characters; search results cut near 60`)
  if (meta.description && (meta.description.length < 110 || meta.description.length > 160)) {
    problems.push(`description is ${meta.description.length} characters; keep it between 110 and 160`)
  }
  if (meta.blurb && meta.blurb.length > 150) problems.push(`blurb is ${meta.blurb.length} characters; keep it under 150`)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date || '')) problems.push('date must look like 2025-07-01')
  if ('kicker' in meta) problems.push('meta.kicker is no longer shown anywhere; remove it')
  if (!Array.isArray(meta.keywords) || meta.keywords.length < 4) problems.push('give at least four keywords')
  for (const related of meta.related || []) {
    if (!PLANNED.includes(related)) problems.push(`related post "${related}" is not planned`)
    if (related === slug) problems.push('a post cannot be related to itself')
  }
  for (const [where, value] of strings(meta, 'meta')) textIssues(where, value, problems)

  /* ---- content shape */
  if (typeof content?.hero?.Art !== 'function') problems.push('hero.Art must be a component')
  if (!content?.hero?.caption) problems.push('hero.caption is missing')
  if (!Array.isArray(content.intro) || content.intro.length < 2) problems.push('intro needs at least two paragraphs')
  if (!Array.isArray(content.sections) || content.sections.length < 5) problems.push('give at least five sections')
  if (!Array.isArray(content.takeaways) || content.takeaways.length < 4) problems.push('give at least four takeaways')
  if (!Array.isArray(content.faq) || content.faq.length < 3) problems.push('give at least three questions in faq')

  const ids = new Set()
  for (const [i, section] of (content.sections || []).entries()) {
    const at = `sections[${i}]`
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(section.id || '')) problems.push(`${at}.id "${section.id}" must be lowercase-with-hyphens`)
    if (ids.has(section.id)) problems.push(`${at}.id "${section.id}" is used twice`)
    if (RESERVED_IDS.includes(section.id)) problems.push(`${at}.id "${section.id}" is reserved by the page`)
    ids.add(section.id)
    if (!section.title) problems.push(`${at}.title is missing`)
    if (typeof section.Art !== 'function') problems.push(`${at}.Art must be a component`)
    if (!section.caption) problems.push(`${at}.caption is missing`)
    if (!Array.isArray(section.body) || section.body.length < 2) problems.push(`${at}.body needs at least two blocks`)
  }

  for (const [where, value] of strings(content, 'content')) {
    textIssues(where, value, problems)
    linkIssues(where, value, problems)
  }

  /* ---- render every drawing and every block */
  const arts = [['hero', content.hero?.Art], ...(content.sections || []).map((s) => [s.id, s.Art])]
  const css = []
  for (const [name, Art] of arts) {
    if (typeof Art !== 'function') continue
    try {
      const markup = html(React.createElement(Art))
      if (!markup.includes('<svg')) problems.push(`drawing "${name}" rendered no svg`)
      if (!/aria-label="[^"]{12,}"/.test(markup)) problems.push(`drawing "${name}" needs a descriptive label`)
      css.push(markup)
      textIssues(`drawing "${name}"`, markup.replace(/<style[\s\S]*?<\/style>/g, ''), problems)
    } catch (error) {
      problems.push(`drawing "${name}" failed to render: ${error.message}`)
    }
  }
  for (const [i, section] of (content.sections || []).entries()) {
    try {
      html(React.createElement(Blocks, { blocks: section.body || [] }))
    } catch (error) {
      problems.push(`sections[${i}] body failed to render: ${error.message}`)
    }
  }

  /* ---- animation names must be unique to this post */
  const names = new Set()
  for (const markup of css) {
    for (const [, name] of markup.matchAll(/@keyframes\s+([\w-]+)/g)) names.add(name)
  }
  for (const name of names) {
    const owner = keyframeOwners.get(name)
    if (owner && owner !== slug) problems.push(`@keyframes ${name} is also defined by ${owner}`)
    keyframeOwners.set(name, slug)
  }

  /* ---- reading time */
  const words = wordCount(postText(meta, content))
  const minutes = readingMinutes(words)
  if (meta.minutes !== minutes) problems.push(`meta.minutes is ${meta.minutes} but the post reads in ${minutes} (${words} words)`)
  if (words < 1200) warnings.push(`only ${words} words; the posts aim for 1,500 or more`)

  report(slug, problems, warnings, { words, minutes, sections: content.sections?.length })
}

function report(slug, problems, warnings, stats) {
  const status = problems.length ? 'FAIL' : 'ok  '
  const detail = stats ? `  ${stats.words} words, ${stats.minutes} min, ${stats.sections} sections` : ''
  console.log(`${status} ${slug}${detail}`)
  for (const problem of problems) console.log(`       x ${problem}`)
  for (const warning of warnings) console.log(`       ! ${warning}`)
  if (problems.length) failures += 1
}

await server.close()

if (failures) {
  console.log(`\n${failures} post(s) need attention.`)
  process.exit(1)
}
console.log(`\nAll ${slugs.length} post(s) look good.`)
