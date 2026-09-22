import { useEffect, useRef, useState } from 'react'

/**
 * Scenes and when they play.
 *
 * A scene is one SVG drawing, 800 units wide, carrying its own CSS in a
 * <style> tag so a post's drawings and their animations travel together.
 * Animation names and class names inside a scene's CSS must start with the
 * scene's own prefix (for example `s-gap2-`) so no two scenes collide.
 *
 * The rules every scene's animation follows:
 *
 * 1. The drawing with no animation applied is the still picture. It is what
 *    people who ask for reduced motion see, and what the social card shows,
 *    so it must tell the whole story on its own. Anything that only appears
 *    for a moment of the story (a flash, an exclamation mark) is hidden in
 *    that still picture (opacity 0 in its style) and brought in by keyframes.
 * 2. Every loop is seamless: the 0% and 100% keyframes are identical. The
 *    0% frame is also what shows before a drawing starts to move, so it
 *    should be a sensible picture too.
 * 3. It only moves while it is on screen. The nearest .ink-stage above a
 *    scene carries data-play while visible; everything inside is paused
 *    otherwise (see blog.css). Off screen it costs nothing.
 * 4. People who ask their system for less motion get none at all.
 */
export function Scene({ w = 800, h = 420, top = 0, label, css, className, children }) {
  // `top` crops empty sky off a drawing without moving anything in it: the
  // visible window starts at y = top and is h units tall.
  return (
    <svg
      className={['ink-scene', className].filter(Boolean).join(' ')}
      viewBox={`0 ${top} ${w} ${h}`}
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      {css ? <style dangerouslySetInnerHTML={{ __html: css }} /> : null}
      {children}
    </svg>
  )
}

/**
 * Marks an element as a stage: while it is (nearly) on screen it carries
 * data-play, and the drawings inside it animate. Returns [ref, playing].
 */
export function useStage({ margin = '120px 0px' } = {}) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { rootMargin: margin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [margin])

  return [ref, playing]
}

/**
 * A drawing on the page: the paper frame, the scene, and a handwritten
 * caption with its figure number.
 */
export function InkFigure({ number, caption, hero = false, className, children }) {
  const [ref, playing] = useStage()

  return (
    <figure
      ref={ref}
      className={['ink-figure', 'ink-stage', hero ? 'ink-figure-hero' : null, className].filter(Boolean).join(' ')}
      data-play={playing ? '' : undefined}
    >
      <div className="ink-frame">
        {hero ? (
          <>
            <span className="tape tape-left" aria-hidden="true" />
            <span className="tape tape-right" aria-hidden="true" />
          </>
        ) : null}
        {children}
      </div>
      {caption ? (
        <figcaption>
          {number !== undefined ? <span className="fig-no">fig. {number}</span> : null}
          <span className="fig-text">{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  )
}
