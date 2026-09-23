import GlyphRain from './GlyphRain.jsx'
import PaperWordmark from './PaperWordmark.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      {/* The same field that runs behind the section above, carried on through
          the footer so the two read as one dark block rather than two panels.
          Its own mask (.glyph-rain-footer) fades it in at the top. */}
      <GlyphRain className="glyph-rain-footer" />

      <div className="footer-giant" aria-hidden="true">
        <span className="footer-giant-stack">
          <PaperWordmark />
        </span>
      </div>
    </footer>
  )
}
