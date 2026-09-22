/**
 * Writes one real HTML file per public page, after `vite build` (the browser
 * bundle) and `vite build --ssr` (a Node copy of the same app) have run.
 *
 * GitHub Pages serves static files only. Before this script, every route
 * shared a copy of index.html: the right page appeared once the JavaScript
 * ran, but every page carried the home page's title and canonical link, and
 * crawlers or link previews that do not run JavaScript saw an empty shell.
 * Now each page gets:
 *
 * - its own <head>: title, description, canonical link, Open Graph and
 *   Twitter tags, and schema.org structured data (src/seo/head.js);
 * - for the blog, its full markup rendered at build time, which React then
 *   adopts in the browser instead of drawing it again;
 * - a folder with an index.html, which Pages answers with 200 at the
 *   trailing-slash address it serves (it redirects /pricing to /pricing/).
 *
 * It also writes 404.html (the safety net for any other address, which the
 * router turns into the right page or the "slipped off the table" page),
 * sitemap.xml and robots.txt, and refuses to finish if any blog page carries
 * an em dash, an en dash or an emoji.
 */

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverDir = join(root, 'dist-ssr')
const serverEntry = join(serverDir, 'entry-server.js')

function fail(message) {
  console.error(`\nprerender: ${message}\n`)
  process.exit(1)
}

if (!existsSync(join(dist, 'index.html'))) fail('dist/index.html is missing. Run the client build first.')
if (!existsSync(serverEntry)) fail('dist-ssr/entry-server.js is missing. Run the SSR build first.')

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const HEAD = /<!--head-start-->[\s\S]*?<!--head-end-->/
const ROOT = '<div id="root"></div>'
const HTML_TAG = '<html lang="en" class="dark">'

if (!HEAD.test(template)) fail('index.html has lost its <!--head-start--> / <!--head-end--> markers.')
if (!template.includes(ROOT)) fail(`index.html no longer contains ${ROOT}.`)
if (!template.includes(HTML_TAG)) fail(`index.html no longer opens with ${HTML_TAG}.`)

const app = await import(pathToFileURL(serverEntry).href)
const { render, preloadForPath, publicRoutes, headFor, headToHtml, surfaceFor, classify, postKey, peekModule, ORIGIN } = app

/* Everything a reader can see must follow the house style. The copyright
   sign in the footer is the one pictograph allowed. */
const PICTOGRAPH = /\p{Extended_Pictographic}/u
const EM_DASH = String.fromCharCode(0x2014)
const EN_DASH = String.fromCharCode(0x2013)
function checkStyle(path, html) {
  const text = html.replace(/<style[\s\S]*?<\/style>/g, '').replace(/©/g, '')
  const problems = []
  if (text.includes(EM_DASH)) problems.push('an em dash')
  if (text.includes(EN_DASH)) problems.push('an en dash')
  const emoji = text.match(PICTOGRAPH)
  if (emoji) problems.push(`the pictograph "${emoji[0]}"`)
  if (problems.length) fail(`${path} contains ${problems.join(' and ')}.`)
}

function page(pathname, { body = '', content } = {}) {
  const head = headToHtml(headFor(pathname, content))
  const surface = surfaceFor(pathname)
  return template
    .replace(HEAD, `<!--head-start-->\n    ${head}\n    <!--head-end-->`)
    .replace(HTML_TAG, surface === 'paper' ? '<html lang="en" class="dark" data-surface="paper">' : HTML_TAG)
    .replace(ROOT, `<div id="root">${body}</div>`)
}

function write(pathname, html) {
  const file = pathname === '/' ? join(dist, 'index.html') : join(dist, pathname, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
}

const routes = publicRoutes()
let prerendered = 0

for (const route of routes) {
  await preloadForPath(route.path)

  const kind = classify(route.path)
  const content = kind.kind === 'post' ? peekModule(postKey(kind.slug))?.default : undefined
  const body = route.prerender ? render(route.path) : ''

  if (route.prerender && !body) fail(`${route.path} rendered to nothing.`)
  const html = page(route.path, { body, content })
  if (route.prerender) {
    checkStyle(route.path, html)
    prerendered += 1
  }
  write(route.path, html)
}

/* Any other address. Its head says noindex; the page itself is drawn by the
   router in the browser, on paper, so it does not flash dark first. */
await preloadForPath('/404')
writeFileSync(join(dist, '404.html'), page('/404'))

const today = new Date().toISOString().slice(0, 10)
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) =>
    [
      '  <url>',
      `    <loc>${route.path === '/' ? `${ORIGIN}/` : `${ORIGIN}${route.path}`}</loc>`,
      `    <lastmod>${route.lastmod || today}</lastmod>`,
      `    <priority>${route.priority}</priority>`,
      '  </url>',
    ].join('\n'),
  ),
  '</urlset>',
  '',
].join('\n')
writeFileSync(join(dist, 'sitemap.xml'), sitemap)

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`)

rmSync(serverDir, { recursive: true, force: true })

console.log(
  `prerender: ${routes.length} pages written (${prerendered} rendered in full), plus 404.html, sitemap.xml and robots.txt.`,
)
