import { useEffect, useState } from 'react'
import { Button } from '@radix-ui/themes'

export function Brand({ height = 36, style = {} }) {
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
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
