import { TOPICS_BY_ID } from './topics.js'

/**
 * Every post lives in its own folder under ./posts/<slug>/:
 *
 *   meta.js      title, description, topic, date, reading time (small, eager)
 *   hero.jsx     the opening illustration (shown on the post and its card)
 *   scenes.jsx   the illustrations for each section
 *   content.jsx  the words, arranged into sections (loaded on demand)
 *
 * The metadata of all posts is bundled with the site so the index, the
 * sitemap and the head tags can be built without loading any post body. The
 * content of a post is only fetched when someone opens it.
 */

const metas = import.meta.glob('./posts/*/meta.js', { eager: true, import: 'default' })
const contents = import.meta.glob('./posts/*/content.jsx')
const heroes = import.meta.glob('./posts/*/hero.jsx')

function folderOf(path) {
  return path.split('/').slice(-2, -1)[0]
}

export const POSTS = Object.entries(metas)
  .map(([path, meta]) => {
    const folder = folderOf(path)
    if (meta.slug !== folder) {
      throw new Error(`Post folder "${folder}" declares slug "${meta.slug}". They must match.`)
    }
    if (!TOPICS_BY_ID[meta.topic]) {
      throw new Error(`Post "${meta.slug}" uses unknown topic "${meta.topic}".`)
    }
    const load = contents[`./posts/${folder}/content.jsx`]
    const loadHero = heroes[`./posts/${folder}/hero.jsx`]
    if (!load) throw new Error(`Post "${meta.slug}" has no content.jsx.`)
    if (!loadHero) throw new Error(`Post "${meta.slug}" has no hero.jsx.`)
    return { ...meta, load, loadHero }
  })
  .sort((a, b) => a.order - b.order)

export const POSTS_BY_SLUG = Object.fromEntries(POSTS.map((post) => [post.slug, post]))

export function postPath(slug) {
  return `/blogs/${slug}/`
}

/**
 * Posts that sit near this one: any the post names itself (meta.related),
 * then the same topic, then the next in order.
 */
export function relatedPosts(slug, count = 3) {
  const post = POSTS_BY_SLUG[slug]
  if (!post) return []

  const chosen = (post.related || []).map((s) => POSTS_BY_SLUG[s]).filter(Boolean)
  const others = POSTS.filter((p) => p.slug !== slug && !chosen.includes(p))
  const sameTopic = others.filter((p) => p.topic === post.topic)
  const after = others.filter((p) => p.order > post.order && p.topic !== post.topic)
  const before = others.filter((p) => p.order < post.order && p.topic !== post.topic)

  return [...chosen, ...sameTopic, ...after, ...before].slice(0, count)
}
