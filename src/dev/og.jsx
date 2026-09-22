import React from 'react'
import { createRoot } from 'react-dom/client'

import '../styles/global.css'
import '../styles/blog.css'
import DeskScene from '../blog/art/DeskScene.jsx'
import InkDefs from '../blog/ink/defs.jsx'
import { POSTS_BY_SLUG } from '../blog/registry.js'
import { TOPICS_BY_ID } from '../blog/topics.js'
import { Tape } from '../blog/ui.jsx'

/**
 * Development only (served by `npm run dev` at /og.html, never built).
 * Draws the 1200 x 630 card a blog page shows when it is shared: the page's
 * opening drawing on a napkin with its title. scripts/make-og-images.mjs
 * photographs it for every post into public/blog/og/<slug>.jpg (and
 * blogs.jpg for the index), which is where src/seo/head.js points.
 *
 *   /og.html?post=types-of-plagiarism
 *   /og.html?page=blogs
 */

const params = new URLSearchParams(window.location.search)
const slug = params.get('post')
const post = slug ? POSTS_BY_SLUG[slug] : null

const css = `
body { margin: 0; background: #e7e1d6; }
.og { position: relative; width: 1200px; height: 630px; padding: 34px; box-sizing: border-box; overflow: hidden; }
.og-card { height: 100%; display: grid; grid-template-columns: 470px 1fr; gap: 34px; align-items: center; padding: 46px 48px 42px 54px; box-sizing: border-box; }
.og-copy { height: 100%; display: flex; flex-direction: column; }
.og-title { margin: 0; font-family: Kalam, cursive; font-weight: 700; font-size: 54px; line-height: 1.1; letter-spacing: -0.01em; color: #2b2521; }
.og-foot { margin-top: auto; display: flex; flex-direction: column; gap: 16px; }
.og-foot .tag { align-self: flex-start; font-size: 22px; }
.og-brand { display: flex; align-items: center; gap: 12px; }
.og-brand img { height: 42px; width: auto; }
.og-brand strong { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 700; font-size: 30px; letter-spacing: -0.02em; background: linear-gradient(90deg, #b3782d 0%, #c2842b 62%, #fca91e 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.og-brand span { font-family: 'Courier Prime', monospace; font-size: 18px; color: #978b7f; margin-left: 6px; }
.og-art { position: relative; }
.og-art .ink-frame { padding: 16px; transform: rotate(1.2deg); }
.og-art .tape-left { left: 34px; }
.og-art .tape-right { right: 38px; }
.ink-scene, .ink-scene * { animation: none !important; }
`

function Card({ title, tone, topicLabel, Art }) {
  return (
    <div className="og desk">
      <InkDefs />
      <style>{css}</style>
      <div className="napkin napkin-frame og-card">
        <div className="og-copy">
          <h1 className="og-title">{title}</h1>
          <div className={`og-foot tone-${tone}`}>
            {topicLabel ? <span className="tag">{topicLabel}</span> : null}
            <div className="og-brand">
              <img src="/fiberarticle-logos/Fiberarticle_Logo_Without_Background.svg" alt="" />
              <strong>Fiberarticle</strong>
              <span>fiberarticle.com/blogs</span>
            </div>
          </div>
        </div>
        <div className="og-art">
          <div className="ink-frame">
            <Tape className="tape-left" />
            <Tape className="tape-right" />
            {Art ? <Art /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('og'))

if (params.get('page') === 'blogs') {
  root.render(
    <Card title="Blogs that make research simple" tone="amber" Art={DeskScene} />,
  )
} else if (post) {
  post.loadHero().then((mod) => {
    const topic = TOPICS_BY_ID[post.topic]
    root.render(
      <Card title={post.title} tone={topic.tone} topicLabel={topic.label} Art={mod.default} />,
    )
  })
} else {
  root.render(<p style={{ font: '16px sans-serif', padding: 20 }}>Pass ?post=slug or ?page=blogs.</p>)
}
