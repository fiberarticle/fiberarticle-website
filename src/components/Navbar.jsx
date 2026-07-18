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
              variant="soft"
              size="2"
              radius="large"
            >
              <a href="https://app.fiberarticle.com">Sign up</a>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
