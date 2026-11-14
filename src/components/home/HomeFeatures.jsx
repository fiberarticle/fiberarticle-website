import { ArrowRight } from 'lucide-react'

const APP_URL = 'https://app.fiberarticle.com'

/* One crop of a product screenshot. The screenshots are full 2560 x 1440
   captures; size and position pick out the part each card talks about, so
   there is no separate cropped image file to keep in step with the app. */
function Crop({ src, size, position, ratio, label }) {
  return (
    <div
      className="home-crop"
      role="img"
      aria-label={label}
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: size,
        backgroundPosition: position,
        aspectRatio: ratio,
      }}
    />
  )
}

function FeatureCard({ kicker, title, board, wide = false, children }) {
  return (
    <a className={`home-feature${wide ? ' home-feature-wide' : ''}`} href={APP_URL}>
      <div className="home-feature-head">
        <div className="home-feature-text">
          <span className="home-feature-kicker">{kicker}</span>
          <h3 className="home-feature-title">{title}</h3>
        </div>
        <span className="home-feature-arrow" aria-hidden="true">
          <ArrowRight size={18} />
        </span>
      </div>
      <div className={`home-feature-board home-board-${board}`}>{children}</div>
    </a>
  )
}

export default function HomeFeatures() {
  return (
    <section id="features" className="home-section home-features">
      <div className="container home-features-inner">
        <h2 className="home-features-title">Everything your paper needs, in one place.</h2>

        <div className="home-features-grid">
          <FeatureCard kicker="Watch the run" title="Every stage shown, as it happens." board="amber">
            <div className="home-feature-shot">
              <Crop
                src="/product-screenshots/shot-2.webp"
                size="320% auto"
                position="26.7% 95.34%"
                ratio="1190 / 1440"
                label="Fiberarticle product screenshot"
              />
            </div>
          </FeatureCard>

          <FeatureCard kicker="Check the evidence" title="A synthesis matrix, every source numbered." board="blue">
            <div className="home-feature-shot">
              <Crop
                src="/product-screenshots/shot-2.webp"
                size="215.13% auto"
                position="100% 0%"
                ratio="1190 / 1440"
                label="Fiberarticle product screenshot"
              />
            </div>
          </FeatureCard>
        </div>

        <FeatureCard kicker="Edit with AI" title="Rewrite any passage and keep its citations." board="pink" wide>
          <div className="home-feature-stack">
            <div className="home-feature-page">
              <Crop
                src="/product-screenshots/shot-3.webp"
                size="193.35% auto"
                position="74.92% 44.44%"
                ratio="1324 / 648"
                label="The article editor showing a manuscript page"
              />
            </div>
            <div className="home-feature-bar">
              <Crop
                src="/product-screenshots/shot-3.webp"
                size="172.51% auto"
                position="78.62% 87.78%"
                ratio="1484 / 294"
                label="The AI editing bar with rewrite options"
              />
            </div>
          </div>
        </FeatureCard>
      </div>
    </section>
  )
}
