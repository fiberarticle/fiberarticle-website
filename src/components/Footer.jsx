import { Mail } from 'lucide-react'
import { Brand } from './Navbar.jsx'
import GitHubIcon from './GitHubIcon.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Brand height={44} style={{ marginLeft: '-4px' }} />
          <p>
            An agentic AI that discovers academic sources, reads and
            synthesizes the literature, tracks every reference, and writes
            publication-ready articles.
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/fiberarticle"
              target="_blank"
              rel="noreferrer"
              aria-label="Fiberarticle on GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a href="mailto:founder@fiberarticle.com" aria-label="Email the founder">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-giant" aria-hidden="true">
        <svg viewBox="0 0 900 170" preserveAspectRatio="xMidYMax meet">
          <text x="450" y="148" textAnchor="middle" className="footer-giant-text">
            Fiberarticle
          </text>
        </svg>
      </div>

      <div className="container footer-legal">
        <span>© {new Date().getFullYear()} Abdul Ateeb · Apache 2.0 licensed</span>
      </div>
    </footer>
  )
}
