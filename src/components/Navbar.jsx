import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@radix-ui/themes'

import { classify, surfaceFor } from '../routes.js'

export function Brand({ height = 30, style = {} }) {
  return (
    <Link className="brand" to="/" aria-label="Fiberarticle home" style={style}>
      <img
        src="/fiberarticle-logos/Fiberarticle_Logo_Without_Background.svg"
        alt=""
        height={height}
        className="brand-mark"
        style={{ height, width: 'auto' }}
      />
      <span className="brand-word">Fiberarticle</span>
    </Link>
  )
}

/* Links point at the trailing-slash form of each page, which is the address
   GitHub Pages actually serves (it answers /pricing with a redirect to
   /pricing/), so neither visitors nor crawlers take an extra hop. */
const LINKS = [
  { to: '/pricing/', label: 'Pricing', kinds: ['pricing'] },
  { to: '/blogs/', label: 'Blogs', kinds: ['blogs', 'post'] },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const current = classify(pathname).kind
  const onPaper = surfaceFor(pathname) === 'paper'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const classes = ['navbar']
  if (scrolled) classes.push('navbar-scrolled')
  if (onPaper) classes.push('navbar-on-paper')

  return (
    <>
      <span id="top" className="top-anchor" aria-hidden="true" />
      <header className={classes.join(' ')}>
        <div className="container navbar-inner">
          <span className="nav-shimmer" aria-hidden="true" />
          <Brand />

          {/* The middle column of a 1fr / auto / 1fr grid, so these sit on the
              true centre of the bar whatever the logo and button measure. */}
          <nav className="nav-center" aria-label="Main">
            {LINKS.map((link) => {
              const active = link.kinds.includes(current)
              return (
                <Link
                  key={link.to}
                  className={`nav-link${active ? ' nav-link-active' : ''}`}
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

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
