import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Root from './Root.jsx'

/**
 * Build-time renderer, used only by scripts/prerender.mjs. It never ships to
 * the browser. The script loads a page's code with preloadForPath, renders it
 * here, and writes the markup into that page's HTML file.
 */
export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Root />
      </StaticRouter>
    </React.StrictMode>,
  )
}

export { preloadForPath, publicRoutes, surfaceFor, classify, postKey } from './routes.js'
export { headFor, headToHtml, ORIGIN, absolute } from './seo/head.js'
export { peekModule } from './lib/lazy.js'
export { POSTS } from './blog/registry.js'
export { postText, wordCount, readingMinutes } from './blog/text.js'
