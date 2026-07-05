import PaperWordmark from './PaperWordmark.jsx'

export default function Footer() {
  return (
    <footer className="footer">
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
