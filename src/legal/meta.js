/**
 * The policy pages: what they are called, what they say in one line, and
 * when they last changed. The words themselves are in content.js.
 *
 * When a page changes, change its updated date here too; it is shown on the
 * page and goes into the sitemap.
 */

export const LEGAL_META = [
  {
    slug: 'terms',
    title: 'Terms of Service',
    description:
      'The terms for using Fiberarticle: your account, the one-time payment for full access, fair use, your work and the AI, and the limits of our responsibility.',
    updated: '2026-09-24',
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    description:
      'What Fiberarticle collects, why, who helps us run the service, how long we keep it, and how you can download or delete everything.',
    updated: '2026-09-24',
  },
  {
    slug: 'refund-policy',
    title: 'Refund and Cancellation Policy',
    description:
      'Full access to Fiberarticle is a one-time payment and all sales are final. The two cases where we do refund, and how to reach us.',
    updated: '2026-09-24',
  },
  {
    slug: 'shipping-policy',
    title: 'Shipping and Delivery Policy',
    description:
      'Fiberarticle is an online service: nothing is shipped, and full access is switched on in your account as soon as your payment is confirmed.',
    updated: '2026-09-24',
  },
  {
    slug: 'contact',
    title: 'Contact',
    description:
      'How to reach Fiberarticle about the product, a payment, or having us do the research and writing for you.',
    updated: '2026-09-24',
  },
]

export const LEGAL_META_BY_SLUG = Object.fromEntries(LEGAL_META.map((page) => [page.slug, page]))

export function legalPath(slug) {
  return `/${slug}/`
}
