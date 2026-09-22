/**
 * Makes the share cards (Open Graph / Twitter images) for the blog.
 *
 *   npm run dev                      (in another terminal)
 *   node scripts/make-og-images.mjs              every post and the index
 *   node scripts/make-og-images.mjs slug-a       just these
 *
 * Each card is the page og.html draws (src/dev/og.jsx): the post's opening
 * drawing and title on a napkin, 1200 x 630. A headless browser photographs
 * it and ffmpeg turns the PNG into a small JPEG at public/blog/og/<slug>.jpg
 * (blogs.jpg for the index), which is the address src/seo/head.js puts in
 * every page's og:image. Run it again whenever a post's title or opening
 * drawing changes, and commit the images.
 *
 * The browser is Playwright's standalone headless Chromium when it is
 * installed (npx playwright install chromium-headless-shell), otherwise
 * Google Chrome, or whatever CHROME points at. The standalone one is
 * preferred because a desktop Chrome that is already open can swallow a
 * headless launch and exit without taking the picture. Needs ffmpeg on the
 * PATH.
 */

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'public', 'blog', 'og')
const base = process.env.DEV_URL || 'http://127.0.0.1:5173'

/* The newest Playwright headless shell, if there is one. */
function headlessShell() {
  const cache =
    process.platform === 'win32'
      ? join(process.env.LOCALAPPDATA || join(homedir(), 'AppData', 'Local'), 'ms-playwright')
      : process.platform === 'darwin'
        ? join(homedir(), 'Library', 'Caches', 'ms-playwright')
        : join(homedir(), '.cache', 'ms-playwright')
  if (!existsSync(cache)) return null
  const builds = readdirSync(cache)
    .filter((name) => name.startsWith('chromium_headless_shell-'))
    .sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]))
  for (const build of builds) {
    const dir = join(cache, build)
    for (const sub of readdirSync(dir)) {
      for (const exe of ['chrome-headless-shell.exe', 'chrome-headless-shell']) {
        const candidate = join(dir, sub, exe)
        if (existsSync(candidate)) return candidate
      }
    }
  }
  return null
}

const shell = process.env.CHROME ? null : headlessShell()
const browser =
  process.env.CHROME ||
  shell ||
  (process.platform === 'win32'
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : process.platform === 'darwin'
      ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      : 'google-chrome')

try {
  const res = await fetch(`${base}/og.html`)
  if (!res.ok) throw new Error(String(res.status))
} catch {
  console.error(`The dev server is not answering at ${base}. Start it with npm run dev first.`)
  process.exit(1)
}

const postsDir = join(root, 'src', 'blog', 'posts')
const slugs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      'blogs',
      ...readdirSync(postsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && existsSync(join(postsDir, d.name, 'meta.js')))
        .map((d) => d.name),
    ]

/* Scratch space (the browser's throwaway profile and the raw PNGs) lives
   inside the project: on some Windows setups a headless browser silently
   fails to write its screenshot into the system temp folder. */
mkdirSync(outDir, { recursive: true })
const scratch = join(root, 'node_modules', '.cache', 'fiberarticle-og')
rmSync(scratch, { recursive: true, force: true })
mkdirSync(scratch, { recursive: true })

for (const slug of slugs) {
  const query = slug === 'blogs' ? 'page=blogs' : `post=${encodeURIComponent(slug)}`
  const png = join(scratch, `${slug}.png`)
  const jpg = join(outDir, `${slug}.jpg`)

  const flags = [
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=1200,630',
    '--virtual-time-budget=20000',
    `--screenshot=${png}`,
    `${base}/og.html?${query}`,
  ]
  if (!shell) flags.unshift('--headless=new', `--user-data-dir=${join(scratch, 'profile')}`)

  execFileSync(browser, flags, { stdio: 'ignore' })

  if (!existsSync(png)) {
    console.error(`The browser did not produce a card for ${slug}.`)
    process.exit(1)
  }

  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', png, '-q:v', '3', jpg], { stdio: 'inherit' })
  console.log(`og: ${slug} -> public/blog/og/${slug}.jpg`)
}

rmSync(scratch, { recursive: true, force: true })
