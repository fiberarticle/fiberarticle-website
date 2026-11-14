import { Link } from 'react-router-dom'

import GlyphRain from './GlyphRain.jsx'
import PaperWordmark from './PaperWordmark.jsx'

const APP_URL = 'https://app.fiberarticle.com'

/* The link columns under the wordmark. Site pages are router links; the app
   and the mailbox are plain links because they leave this site. */
const COLUMNS = [
  {
    title: 'Product',
    links: [
      { to: '/pricing/', label: 'Pricing' },
      { to: '/blogs/', label: 'Blogs' },
      { href: APP_URL, label: 'Sign up' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/terms/', label: 'Terms of service' },
      { to: '/privacy/', label: 'Privacy policy' },
      { to: '/refund-policy/', label: 'Refund policy' },
      { to: '/shipping-policy/', label: 'Delivery policy' },
    ],
  },
  {
    title: 'Contact',
    links: [{ href: 'mailto:admin@fiberarticle.com', label: 'admin@fiberarticle.com' }],
  },
]

/* Social profiles, in order: X, LinkedIn, YouTube, Discord. Logos are the
   brand marks from simple-icons (LinkedIn's is drawn here, since that
   package no longer ships it), each shown in its brand colour; X is white,
   because its brand black would vanish on the dark footer. size evens them
   out by eye: X and LinkedIn fill their whole square, YouTube and Discord
   are wide and short, so the first two are drawn smaller. */
const SOCIAL = [
  {
    name: 'X',
    size: 18,
    href: 'https://x.com/fiberarticle',
    colour: '#ffffff',
    path: 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z',
  },
  {
    name: 'LinkedIn',
    size: 19,
    href: 'https://www.linkedin.com/company/fiberarticle/',
    colour: '#0a66c2',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  },
  {
    name: 'YouTube',
    size: 24,
    href: 'https://www.youtube.com/@fiberarticle',
    colour: '#ff0000',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    name: 'Discord',
    size: 24,
    href: 'https://discord.gg/fiberarticle',
    colour: '#5865f2',
    path: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z',
  },
]

export default function Footer() {
  return (
    <footer className="footer footer-rounded">
      {/* A field of drifting characters behind the footer. Its own mask
          (.glyph-rain-footer) fades it in at the top. */}
      <GlyphRain className="glyph-rain-footer" />

      <div className="footer-giant" aria-hidden="true">
        <span className="footer-giant-stack">
          <PaperWordmark />
        </span>
      </div>

      <div className="container footer-main">
        <div className="footer-top">
          <div className="footer-about">
            <Link className="footer-brand" to="/" aria-label="Fiberarticle home">
              <img
                src="/fiberarticle-logos/Fiberarticle_Logo_Without_Background.svg"
                alt=""
                className="footer-brand-mark"
              />
              <span className="footer-brand-word">Fiberarticle</span>
            </Link>
            <p className="footer-about-text">
              An Agentic AI that researches, performs literature reviews, and
              writes publication-ready manuscripts.
            </p>
          </div>

          <nav className="footer-columns" aria-label="Footer">
            {COLUMNS.map((column) => (
              <div key={column.title} className="footer-column">
                <span className="footer-column-title">{column.title}</span>
                {column.links.map((link) =>
                  link.to ? (
                    <Link key={link.label} className="footer-link" to={link.to}>
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.label} className="footer-link" href={link.href}>
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Fiberarticle. All rights reserved.</span>
          <nav className="footer-social" aria-label="Fiberarticle on social media">
            {SOCIAL.map(({ name, href, colour, path, size }) => (
              <a
                key={name}
                className="footer-social-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Fiberarticle on ${name}`}
                title={name}
                style={{ '--social-colour': colour }}
              >
                <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
