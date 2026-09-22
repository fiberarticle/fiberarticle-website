import { useEffect } from 'react'

import { headTags } from './head.js'

/* Everything useHead owns. The defaults written into index.html carry no
   marker, so they are matched by what they are rather than by data-rh. */
const OWNED = [
  'meta[name="description"]',
  'meta[name="robots"]',
  'meta[name^="twitter:"]',
  'meta[property^="og:"]',
  'meta[property^="article:"]',
  'link[rel="canonical"]',
  'script[type="application/ld+json"]',
].join(',')

function apply(head) {
  document.title = head.title

  document.head.querySelectorAll(OWNED).forEach((node) => node.remove())

  for (const [tag, attrs, body] of headTags(head)) {
    const node = document.createElement(tag)
    for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value)
    node.setAttribute('data-rh', '')
    if (body) node.textContent = body
    document.head.appendChild(node)
  }
}

/**
 * Keep the document head in step with the page on screen. The prerendered
 * pages already arrive with the right head, so this matters for a visitor
 * moving between pages inside the app. `key` should change whenever the head
 * does; the description object itself is rebuilt on every render.
 */
export function useHead(head, key) {
  useEffect(() => {
    if (head) apply(head)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
}
