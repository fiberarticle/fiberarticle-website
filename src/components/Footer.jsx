import GlyphRain from './GlyphRain.jsx'
import PaperWordmark from './PaperWordmark.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      {/* The same field that runs behind the section above, carried on through
          the footer so the two read as one dark block rather than two panels.
          Its own mask (.glyph-rain-footer) clears the strip the copyright line
          sits in, so nothing is printed behind that text. */}
      <GlyphRain className="glyph-rain-footer" />

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
