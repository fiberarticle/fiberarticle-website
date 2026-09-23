import { preloadModule } from './lib/lazy.js'
import { POSTS, POSTS_BY_SLUG, postPath, relatedPosts } from './blog/registry.js'
import { LEGAL_META, LEGAL_META_BY_SLUG, legalPath } from './legal/meta.js'

/**
 * The one place that knows which URLs exist. The router, the prerender script
 * and the sitemap all read from here, so a page cannot be served without also
 * being prerendered and listed.
 */

export const loadBlogIndex = () => import('./blog/BlogIndex.jsx')
export const loadBlogPost = () => import('./blog/BlogPost.jsx')
export const loadNotFound = () => import('./blog/NotFound.jsx')
export const loadLegal = () => import('./legal/LegalPage.jsx')

export const BLOG_INDEX_KEY = 'page:blog-index'
export const BLOG_POST_KEY = 'page:blog-post'
export const NOT_FOUND_KEY = 'page:not-found'
export const LEGAL_KEY = 'page:legal'

export function postKey(slug) {
  return `post:${slug}`
}

export function heroKey(slug) {
  return `hero:${slug}`
}

/** A post's opening drawing on its own, for the cards that show it. */
export function preloadHero(post) {
  return preloadModule(heroKey(post.slug), post.loadHero)
}

/** What kind of page a pathname is. Trailing slashes are optional. */
export function classify(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/') return { kind: 'home' }
  if (path === '/pricing') return { kind: 'pricing' }
  if (path === '/blogs') return { kind: 'blogs' }

  const match = path.match(/^\/blogs\/([a-z0-9-]+)$/)
  if (match && POSTS_BY_SLUG[match[1]]) return { kind: 'post', slug: match[1] }

  const legal = path.match(/^\/([a-z-]+)$/)
  if (legal && LEGAL_META_BY_SLUG[legal[1]]) return { kind: 'legal', slug: legal[1] }

  return { kind: 'missing' }
}

/** Blog and policy pages sit on paper; everything else keeps the dark site. */
export function surfaceFor(pathname) {
  const { kind } = classify(pathname)
  return kind === 'blogs' || kind === 'post' || kind === 'legal' || kind === 'missing'
    ? 'paper'
    : 'dark'
}

/** Load the code the page at `pathname` needs before it is rendered. */
export function preloadForPath(pathname) {
  const route = classify(pathname)

  if (route.kind === 'blogs') {
    return Promise.all([preloadModule(BLOG_INDEX_KEY, loadBlogIndex), ...POSTS.map(preloadHero)])
  }

  if (route.kind === 'post') {
    return Promise.all([
      preloadModule(BLOG_POST_KEY, loadBlogPost),
      preloadModule(postKey(route.slug), POSTS_BY_SLUG[route.slug].load),
      ...relatedPosts(route.slug, 3).map(preloadHero),
    ])
  }

  if (route.kind === 'legal') {
    return preloadModule(LEGAL_KEY, loadLegal)
  }

  if (route.kind === 'missing') {
    return preloadModule(NOT_FOUND_KEY, loadNotFound)
  }

  return Promise.resolve()
}

/**
 * Every public URL, in the canonical form GitHub Pages serves it: a folder
 * with a trailing slash (Pages answers /pricing with a 301 to /pricing/).
 * `prerender` marks the pages whose markup is rendered at build time; the
 * home and pricing pages keep rendering in the browser as they always have.
 */
export function publicRoutes() {
  return [
    { path: '/', prerender: false, priority: '1.0' },
    { path: '/pricing/', prerender: false, priority: '0.8' },
    { path: '/blogs/', prerender: true, priority: '0.9' },
    ...POSTS.map((post) => ({
      path: postPath(post.slug),
      prerender: true,
      priority: '0.8',
      lastmod: post.updated || post.date,
    })),
    ...LEGAL_META.map((page) => ({
      path: legalPath(page.slug),
      prerender: true,
      priority: '0.3',
      lastmod: page.updated,
    })),
  ]
}
