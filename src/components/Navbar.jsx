import { useEffect, useState } from 'react'
import { Button } from '@radix-ui/themes'

export function Brand({ height = 30, style = {} }) {
  return (
    <a className="brand" href="#top" aria-label="Fiberarticle home" style={style}>
      <img
        src="/fiberarticle-logos/Fiberarticle_Logo_Without_Background.svg"
        alt=""
        height={height}
        className="brand-mark"
        style={{ height, width: 'auto' }}
      />
      <span className="brand-word">Fiberarticle</span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <span id="top" className="top-anchor" aria-hidden="true" />
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <span className="nav-shimmer" aria-hidden="true" />
          <Brand />

          <div className="nav-actions">
            <Button
              className="nav-cta"
              asChild
              variant="classic"
              color="gray"
              highContrast
              size="2"
              radius="large"
            >
              <a href="https://app.fiberarticle.com">
                Sign up
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 4.5 L13.4 12 L3 19.5 L3 14.6 L6.6 12 L3 9.4 Z" />
                  <path d="M11.6 4.5 L22 12 L11.6 19.5 L11.6 14.6 L15.2 12 L11.6 9.4 Z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
