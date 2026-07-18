import { Brand } from './Navbar.jsx'
import PaperWordmark from './PaperWordmark.jsx'

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
        </div>
      </div>

      <div className="footer-giant" aria-hidden="true">
        <span className="footer-giant-stack">
          <PaperWordmark />
        </span>
      </div>

      <div className="container footer-legal">
        <span>© {new Date().getFullYear()} Abdul Ateeb · Apache 2.0 licensed</span>
      </div>
    </footer>
  )
}
