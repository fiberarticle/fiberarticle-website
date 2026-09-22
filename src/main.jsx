import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@radix-ui/themes/styles.css'

import Root from './Root.jsx'
import { preloadForPath } from './routes.js'
import './styles/global.css'
import './styles/blog.css'

const container = document.getElementById('root')

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
)

/* Blog pages arrive prerendered. Their code is fetched first so the first
   client render matches the HTML already on screen, and React adopts it
   instead of redrawing it. Every other page is rendered from scratch as
   before. A failed fetch still renders: the page shows its own retry state. */
preloadForPath(window.location.pathname)
  .catch(() => {})
  .finally(() => {
    if (container.hasChildNodes()) {
      ReactDOM.hydrateRoot(container, app)
    } else {
      ReactDOM.createRoot(container).render(app)
    }
  })
