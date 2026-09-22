import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import DeskScene from './art/DeskScene.jsx'
import InkDefs from './ink/defs.jsx'
import { useStage } from './ink/stage.jsx'
import PaperFooter from './PaperFooter.jsx'
import { POSTS } from './registry.js'
import StoryCard from './StoryCard.jsx'
import { TOPICS, TOPICS_BY_ID } from './topics.js'
import { useModule } from '../lib/lazy.js'
import { heroKey } from '../routes.js'
import { headFor } from '../seo/head.js'
import { useHead } from '../seo/useHead.js'

function Card({ post, index }) {
  const { mod } = useModule(heroKey(post.slug), post.loadHero)
  return <StoryCard post={post} Hero={mod?.default} index={index} headingLevel={3} />
}

/**
 * The blog's front page: a napkin with the title and the reading desk
 * drawing, then every blog as a card, with a topic filter.
 *
 * The filter starts at "all" on the server and in the first client render,
 * then reads ?shelf= after mount, so a link such as /blogs/?shelf=writing
 * opens pre-filtered without the prerendered HTML and the first render ever
 * disagreeing.
 */
export default function BlogIndex() {
  useHead(headFor('/blogs/'), 'blogs')
  const { search } = useLocation()
  const [shelf, setShelf] = useState('all')
  const [stageRef, playing] = useStage()

  useEffect(() => {
    const wanted = new URLSearchParams(search).get('shelf')
    setShelf(wanted && TOPICS_BY_ID[wanted] ? wanted : 'all')
  }, [search])

  const shown = shelf === 'all' ? POSTS : POSTS.filter((post) => post.topic === shelf)
  const counts = Object.fromEntries(TOPICS.map((t) => [t.id, POSTS.filter((p) => p.topic === t.id).length]))

  return (
    <div className="desk">
      <InkDefs />

      <main className="desk-inner">
        <header
          ref={stageRef}
          className="napkin napkin-frame ink-stage"
          data-play={playing ? '' : undefined}
        >
          <div className="index-top">
            <h1 className="index-title">Blogs that make research simple</h1>
            <div className="index-art">
              <DeskScene />
            </div>
          </div>
        </header>

        <div className="table-head" id="table">
          <h2 className="section-label tone-amber">
            <span className="scribble">all blogs</span>
          </h2>
          <div className="shelf-tabs" role="group" aria-label="Show blogs on one topic">
            <button
              type="button"
              className="shelf-tab tone-amber"
              aria-pressed={shelf === 'all'}
              onClick={() => setShelf('all')}
            >
              all<span className="count">{POSTS.length}</span>
            </button>
            {TOPICS.filter((topic) => counts[topic.id]).map((topic) => (
              <button
                key={topic.id}
                type="button"
                className={`shelf-tab tone-${topic.tone}`}
                aria-pressed={shelf === topic.id}
                onClick={() => setShelf(topic.id)}
              >
                {topic.label}
                <span className="count">{counts[topic.id]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="story-grid">
          {shown.map((post, i) => (
            <Card key={post.slug} post={post} index={i} />
          ))}
        </div>
      </main>

      <PaperFooter />
    </div>
  )
}
