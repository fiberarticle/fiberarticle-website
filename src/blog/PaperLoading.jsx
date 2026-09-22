import { PaperButton } from './ui.jsx'

/**
 * Shown for the moment it takes a blog page's code to arrive after a click,
 * and, if it never arrives, with a way out. It lives in the main bundle, so
 * it draws nothing heavier than a napkin.
 */
export default function PaperLoading({ error }) {
  return (
    <div className="desk">
      <div className="paper-wait">
        <div className="napkin napkin-frame" role={error ? 'alert' : 'status'}>
          {error ? (
            <>
              <p>This page did not load. The site may have just been updated.</p>
              <PaperButton onClick={() => window.location.reload()}>Load it again</PaperButton>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}
