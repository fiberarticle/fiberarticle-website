import PaperWordmark from '../components/PaperWordmark.jsx'

/**
 * The blog's footer. The rest of the site ends in a dark field with the
 * paper wordmark; here the same wordmark, a word made of little sheets of
 * paper, simply lies on the desk.
 */
export default function PaperFooter() {
  return (
    <footer className="paper-footer">
      <div className="footer-giant" aria-hidden="true">
        <span className="footer-giant-stack">
          <PaperWordmark />
        </span>
      </div>
    </footer>
  )
}
