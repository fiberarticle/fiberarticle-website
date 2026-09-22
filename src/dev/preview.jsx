import React from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'

import '../styles/global.css'
import '../styles/blog.css'
import InkDefs from '../blog/ink/defs.jsx'
import { useStage } from '../blog/ink/stage.jsx'

/**
 * Development only (served by `npm run dev` at /preview.html, never built).
 * Shows a post's drawings on their own, 800 pixels wide, so one scene is one
 * clean screenshot:
 *
 *   /preview.html?post=types-of-plagiarism             every drawing, stacked
 *   /preview.html?post=types-of-plagiarism&scene=hero  just the opening one
 *   /preview.html?post=types-of-plagiarism&scene=3     the fourth section's
 *   ...&still=1   no motion at all (the picture reduced-motion visitors get)
 *   ...&at=4.5    frozen 4.5 seconds into every loop, to check a moment of
 *                 the story (per-drawing delays are overridden, so it is a
 *                 close look, not an exact one)
 *
 * A headless browser can screenshot it without touching anything else:
 *   chrome --headless=new --hide-scrollbars --window-size=800,500
 *     --virtual-time-budget=4000 --screenshot=out.png
 *     "http://127.0.0.1:5173/preview.html?post=...&scene=hero&still=1"
 */

const contents = import.meta.glob('../blog/posts/*/content.jsx')
const params = new URLSearchParams(window.location.search)
const slug = params.get('post')
const scene = params.get('scene')
const still = params.get('still') === '1'
const at = params.get('at')

function Stage({ Art, label }) {
  const [ref, playing] = useStage()
  return (
    <section ref={ref} className="ink-stage" data-play={playing ? '' : undefined} style={{ width: 800 }}>
      <Art />
      {label ? <p className="preview-label">{label}</p> : null}
    </section>
  )
}

function Preview({ content }) {
  const all = [
    { key: 'hero', Art: content.hero.Art, label: `hero: ${content.hero.caption}` },
    ...content.sections.map((section, i) => ({ key: String(i), Art: section.Art, label: `${i}: ${section.caption}` })),
  ]
  const shown = scene === null ? all : all.filter((item) => item.key === scene)
  const single = scene !== null

  return (
    <div style={{ background: '#f7f1e4', minHeight: '100vh', width: 800 }}>
      <InkDefs />
      {still ? <style>{'.ink-scene, .ink-scene * { animation: none !important; }'}</style> : null}
      {at ? (
        <style>{`.ink-scene, .ink-scene * { animation-play-state: paused !important; animation-delay: -${Number(at)}s !important; }`}</style>
      ) : null}
      <style>{'body { margin: 0; background: #f7f1e4; } .preview-label { font: 14px/1.4 Kalam, cursive; color: #6b6058; padding: 6px 12px 22px; }'}</style>
      {shown.map((item) => (
        <Stage key={item.key} Art={item.Art} label={single ? null : item.label} />
      ))}
    </div>
  )
}

const root = createRoot(document.getElementById('preview'))
const loader = contents[`../blog/posts/${slug}/content.jsx`]

if (!loader) {
  root.render(<p style={{ font: '16px sans-serif', padding: 20 }}>No post called "{slug}".</p>)
} else {
  loader().then((mod) =>
    root.render(
      <React.StrictMode>
        <MemoryRouter>
          <Preview content={mod.default} />
        </MemoryRouter>
      </React.StrictMode>,
    ),
  )
}
