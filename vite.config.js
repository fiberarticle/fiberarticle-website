import { copyFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * GitHub Pages serves static files only, so a client-side route like /pricing
 * 404s when it is opened directly or refreshed. Pages falls back to 404.html
 * for any unmatched path, so shipping a byte-for-byte copy of the built
 * index.html under that name hands the request back to the router with the
 * correct hashed asset URLs. Done here rather than in the workflow so a local
 * `npm run build && npm run preview` behaves the same as production.
 */
function pagesSpaFallback() {
  return {
    name: 'pages-spa-fallback',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pagesSpaFallback()],
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
