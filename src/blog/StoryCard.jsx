import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useStage } from './ink/stage.jsx'
import { postPath } from './registry.js'
import { TOPICS_BY_ID } from './topics.js'
import { Tape } from './ui.jsx'

/* Cards lean a little this way and that, like papers dropped on a table. */
const TILTS = [-1.3, 0.9, -0.5, 1.2, -0.9, 0.5]
const TAPE_TILTS = [-3, 4, -2, 3]

/**
 * One story on the table: its opening drawing, topic, title and blurb.
 *
 * On a mouse, the drawing plays while the card is hovered or focused. On a
 * touch screen there is no hover, so the drawing plays while the card passes
 * through the middle band of the screen as the visitor scrolls.
 */
export default function StoryCard({ post, Hero, index = 0, headingLevel = 3 }) {
  const topic = TOPICS_BY_ID[post.topic]
  const [bandRef, inBand] = useStage({ margin: '-38% 0px -38% 0px' })
  const [hovered, setHovered] = useState(false)
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const playing = canHover ? hovered : inBand
  const Title = `h${headingLevel}`

  return (
    <Link
      ref={bandRef}
      to={postPath(post.slug)}
      className={`story-card ink-stage tone-${topic.tone}`}
      data-play={playing ? '' : undefined}
      style={{ '--tilt': `${TILTS[index % TILTS.length]}deg`, '--tape-tilt': `${TAPE_TILTS[index % TAPE_TILTS.length]}deg` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="card-sheet">
        {index % 2 === 0 ? <Tape /> : null}
        {/* The drawing is decoration here; the title names the link. */}
        <div className="card-art" aria-hidden="true">
          {Hero ? <Hero /> : null}
        </div>
        <div className="card-body">
          <span className="tag">{topic.label}</span>
          <Title className="card-title">{post.title}</Title>
          <p className="card-desc">{post.blurb || post.description}</p>
          <div className="card-foot">
            <span className="key">{post.minutes} min read</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
