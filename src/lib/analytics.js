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
}
