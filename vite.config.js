import { copyFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/* Every page the router serves besides the home page. Each one gets a real
   file written for it at build time, so add to this list when a route is
   added. */
const ROUTES = ['pricing']

/**
 * GitHub Pages serves static files only, so a client-side route like /pricing
 * has no file behind it. Two things are written at the end of the build to
 * cover that.
 *
 * A copy of index.html at dist/pricing/index.html makes /pricing/ a real page.
 * Pages then answers it with 200 instead of 404. That matters because the
 * fallback below, while it does draw the correct page for a visitor, replies
 * with a 404 status, and search engines read the status rather than what ends
 * up on screen. Without this the pricing page would never be indexed.
 *
 * A copy at dist/404.html stays as the safety net for anything not in ROUTES,
 * such as an old link or a typed URL, which the router turns into whatever it
 * should show. Both files carry the same hashed asset names as index.html
 * because they are copies of the built file, not of the source.
 *
 * Done here rather than in the deploy workflow so that building locally
 * behaves exactly like production.
 */
function pagesStaticRoutes() {
  return {
    name: 'pages-static-routes',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')

      for (const route of ROUTES) {
        mkdirSync(`dist/${route}`, { recursive: true })
        copyFileSync('dist/index.html', `dist/${route}/index.html`)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pagesStaticRoutes()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
