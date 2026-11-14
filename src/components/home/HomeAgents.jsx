import { useEffect, useRef } from 'react'

import {
  AssistantArt,
  FullTextArt,
  ModelArt,
  ResearcherArt,
  ReviewerArt,
  WriterArt,
} from './AgentArt.jsx'

/* Six cards: the four agents, then the two things that hold for all of them.
   Each is a small animated drawing over a short list, with dots in the
   card's colour. */
const CARDS = [
  {
    Art: ResearcherArt,
    colour: '#fca91e',
    title: 'Deep research across four scholarly indexes',
    points: [
      'Researcher searches arXiv, OpenAlex, Semantic Scholar and Crossref in one run',
      'Covers 200 million+ papers, deduplicated across indexes',
      'Tells you when an index rate-limited the run, so you know the coverage',
    ],
  },
  {
    Art: WriterArt,
    colour: '#ff7db1',
    title: 'A full article, written section by section',
    points: [
      'Article Writer researches first, then drafts each section',
      'Every line carries a citation you can open and check',
      'Formats to your target journal’s template and exports',
    ],
  },
  {
    Art: ReviewerArt,
    colour: '#50c158',
    title: 'Evidence matrix, gaps and future work',
    points: [
      'Literature Reviewer screens papers against your criteria',
      'Tabulates methods, data and findings in one matrix',
      'Points out the gaps the evidence leaves open',
    ],
  },
  {
    Art: AssistantArt,
    colour: '#4f90e4',
    title: 'Cited answers from the best papers',
    points: [
      'AI Assistant answers any research question in plain language',
      'Each answer links to the papers it drew on',
      'Says so when the evidence is thin',
    ],
  },
  {
    Art: FullTextArt,
    colour: '#fca91e',
    title: 'Reads the full text, not only the abstract',
    points: [
      'Open-access PDFs are read in full',
      'Key findings are extracted with their page and paper',
      'Where no PDF exists, the abstract is used and the run says so',
    ],
  },
  {
    Art: ModelArt,
    colour: '#fca91e',
    title: 'Your own model, your own key',
    points: [
      'Use your own API key with any supported provider',
      'Or run a model locally on your machine',
      'One payment opens every feature',
    ],
  },
]

/* A deterministic random sequence, so the pixel field is the same on every
   visit and on the prerendered page. */
function seeded(seed) {
  let s = seed
  return () => (s = (s * 16807) % 2147483647) / 2147483647
}

/* The field of small squares behind the heading: warm brown and amber, a few
   squares in the logo's green, pink and blue, fading out toward the left. */
function drawPixels(canvas) {
  const rect = canvas.getBoundingClientRect()
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  canvas.width = Math.max(1, Math.round(rect.width * dpr))
  canvas.height = Math.max(1, Math.round(rect.height * dpr))
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  const w = rect.width
  const h = rect.height
  const rnd = seeded(11)
  const cell = 8
  const gap = 3
  for (let px = 0; px < w; px += cell) {
    for (let py = 0; py < h; py += cell) {
      const v = rnd()
      const c = rnd()
      const keep = rnd()
      // Clear an oval around the heading and text in the middle, so the words
      // sit on calm paper; squares grow denser only toward the two ends.
      const dx = (px + cell / 2 - w / 2) / (w * 0.36)
      const dy = (py + cell / 2 - h / 2) / (h * 0.62)
      const edge = Math.min(1, Math.max(0, Math.sqrt(dx * dx + dy * dy) - 0.85) / 0.9)
      if (keep > edge * 0.8) continue
      const pop = c > 0.9
      const a = (pop ? 0.75 : 0.18 + v * 0.32) * (0.4 + 0.6 * edge)
      const rgb = pop
        ? c > 0.97
          ? '79,144,228'
          : c > 0.935
            ? '255,125,177'
            : '80,193,88'
        : v > 0.55
          ? '252,140,40'
          : '150,62,24'
      ctx.fillStyle = `rgba(${rgb},${a})`
      ctx.fillRect(px, py, cell - gap, cell - gap)
    }
  }
}

export default function HomeAgents() {
  const pixRef = useRef(null)

  useEffect(() => {
    const canvas = pixRef.current
    if (!canvas) return undefined
    const draw = () => drawPixels(canvas)
    draw()
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <section id="agents" className="home-section home-agents">
      <div className="container home-agents-inner">
        <div className="home-agents-head">
          <canvas ref={pixRef} className="home-agents-pixels" aria-hidden="true" />
          <div className="home-agents-heading">
            <h2 className="home-agents-title">
              Fiberarticle <span className="home-agents-accent">AI Agents</span>
            </h2>
            <p className="home-agents-lede">
              Your agentic research team: one finds papers, one reviews them, one
              writes, one answers.
            </p>
          </div>
        </div>

        <div className="home-agents-grid">
          {CARDS.map(({ Art, colour, title, points }) => (
            <article key={title} className="home-agent" style={{ '--agent-colour': colour }}>
              <div className="home-agent-art">
                <Art />
              </div>
              <div className="home-agent-body">
                <h3 className="home-agent-title">{title}</h3>
                <ul className="home-agent-points">
                  {points.map((point) => (
                    <li key={point}>
                      <span className="home-agent-dot" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
