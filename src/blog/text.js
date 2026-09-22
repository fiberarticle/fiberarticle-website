/**
 * Plain-text helpers for post content. The words of a post are written with a
 * tiny inline markup (see inline.jsx):
 *
 *   **bold**   *italic*   ==highlighted==   [link text](/blogs/some-post/)
 *
 * These helpers strip it back out for the places that need raw text: the
 * structured data, reading time, and the build checks.
 */

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g

export function stripInline(text) {
  return String(text)
    .replace(LINK, '$1')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/==(.+?)==/g, '$1')
    .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1$2')
}

/** Every string a block carries, in reading order. */
function blockStrings(block) {
  if (typeof block === 'string') return [block]
  if (!block || typeof block !== 'object') return []

  const out = []
  const push = (value) => {
    if (typeof value === 'string') out.push(value)
    else if (Array.isArray(value)) value.forEach(push)
    else if (value && typeof value === 'object') Object.values(value).forEach(push)
  }

  // Components and display-only keys carry no reading text.
  for (const [key, value] of Object.entries(block)) {
    if (key === 'Art' || key === 'tone' || key === 'style' || key === 'type') continue
    push(value)
  }
  return out
}

/** The whole readable text of a post, as the reader meets it. */
export function postText(meta, content) {
  const parts = [meta.title, meta.dek]

  for (const paragraph of content.intro || []) parts.push(paragraph)

  for (const section of content.sections || []) {
    parts.push(section.title)
    for (const block of section.body || []) parts.push(...blockStrings(block))
  }

  for (const item of content.takeaways || []) parts.push(item)
  for (const item of content.faq || []) parts.push(item.q, item.a)

  return parts.filter(Boolean).map(stripInline).join('\n')
}

export function wordCount(text) {
  const words = String(text).trim().match(/[A-Za-z0-9À-ɏ'’%₹.-]+/g)
  return words ? words.length : 0
}

/** Minutes at a relaxed 200 words a minute, never less than one. */
export function readingMinutes(words) {
  return Math.max(1, Math.round(words / 200))
}
