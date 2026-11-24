import posthog from 'posthog-js'

/*
 * PostHog for fiberarticle.com: page views, clicks, session replay, errors,
 * surveys and the support chat widget. The app at app.fiberarticle.com uses
 * the same project, and PostHog's cookie is shared across fiberarticle.com
 * subdomains, so a visitor who reads the site and then signs up in the app is
 * one person from the first page view to the payment.
 *
 * Only runs on the real site, so local development is never tracked. The
 * project token is public by design: it is meant to ship in the browser.
 */
const TOKEN = 'phc_m5vJyjWvL6yPSF8jQwVURnKaNXStqjGTAThh92t5kYRW'

// Google Analytics 4, "Fiberarticle website" stream. The webapp has its own
// stream in the same property; Google's cookie is shared across
// fiberarticle.com subdomains, so a visitor stays one user across both.
const GA_MEASUREMENT_ID = 'G-69R86PQ9Y5'

export function startAnalytics() {
  const host = window.location.hostname
  if (host !== 'fiberarticle.com' && !host.endsWith('.fiberarticle.com')) return

  posthog.init(TOKEN, {
    // The app's server relays /relay/* to PostHog US Cloud, so blockers that
    // drop requests to posthog.com do not drop ours.
    api_host: 'https://app.fiberarticle.com/relay',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-08-30',
    capture_exceptions: true,
    session_recording: { maskAllInputs: false },
    conversations: {
      theme: { colorScheme: 'dark', dark: { primary: '#c09468' } },
    },
  })

  startGoogleAnalytics()
}

/* The standard gtag.js snippet, added from code. Page changes inside the
   single-page site are counted by GA4's enhanced measurement, which listens
   to browser history changes. */
function startGoogleAnalytics() {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}
