import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * The site builds in three steps (see "build" in package.json):
 *
 * 1. `vite build` makes the browser bundle in dist/.
 * 2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr` makes a copy
 *    of the same app that runs in Node.
 * 3. scripts/prerender.mjs uses that copy to write a real HTML file for every
 *    page into dist/, each with its own head (and, for the blog, its full
 *    markup), plus 404.html, sitemap.xml and robots.txt. It then removes
 *    dist-ssr/.
 *
 * GitHub Pages serves static files only, so a route like /pricing needs a
 * file behind it: without one, Pages still draws the page through 404.html
 * but answers with a 404 status, and search engines read the status. The list
 * of pages lives in src/routes.js (publicRoutes), so a new page cannot be
 * routed without also being written out and put in the sitemap.
 *
 * All of this happens in the build rather than in the deploy workflow, so
 * building locally behaves exactly like production.
 */
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  /* The Node copy bundles its dependencies instead of importing them from
     node_modules: some (Radix Themes among them) publish browser-style
     modules that Node refuses to load directly. */
  ssr: {
    noExternal: true,
  },
  build: isSsrBuild ? { copyPublicDir: false, emptyOutDir: true } : {},
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
}))
