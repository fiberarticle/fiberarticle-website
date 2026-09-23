/**
 * The words of the policy pages, drawn by LegalPage.jsx. Kept apart from
 * meta.js (titles, descriptions, dates) so the site's main bundle, which
 * needs the titles for the page heads, does not carry every paragraph.
 *
 * Every paragraph uses the same small markup as the blog (see
 * src/blog/inline.jsx): **bold** and [text](link). A list is { list: [...] }.
 * Written for people, not lawyers: short sentences, no jargon, and nothing
 * here that the product does not do.
 */

const EMAIL = '[admin@fiberarticle.com](mailto:admin@fiberarticle.com)'

export const LEGAL_CONTENT = [
  {
    slug: 'terms',
    intro:
      'These terms apply when you use the Fiberarticle website (fiberarticle.com) and the Fiberarticle app (app.fiberarticle.com). By creating an account or making a payment, you agree to them. Fiberarticle is run by Abdul Ateeb in India. "We" and "us" on this page mean Fiberarticle.',
    sections: [
      {
        title: 'Your account',
        body: [
          'Give your real name and an email address you can read. Keep your password to yourself. One account is for one person, and you are responsible for what happens on your account.',
          'If you are under 18, use Fiberarticle only with the consent of a parent or guardian.',
        ],
      },
      {
        title: 'Full access and payment',
        body: [
          'Every feature of the app is locked until an account buys full access. Full access is a **one-time payment of ₹19,999**. There is no subscription and nothing to renew.',
          {
            list: [
              'Payment gateway charges (Razorpay\'s fee plus GST on that fee) are added on top and shown as their own line before you pay. The amount at checkout is the full amount you pay.',
              'Payments are handled by Razorpay, in Indian rupees, from Indian payment methods: UPI, Indian debit and credit cards, netbanking and wallets.',
              'Access starts as soon as the payment is confirmed and stays on the account that paid for as long as Fiberarticle runs.',
              'Access belongs to that one account. It cannot be transferred, shared or resold.',
              'We may change the price for future purchases. A change never affects access you have already bought.',
            ],
          },
          'We can also give full access to an account without a payment, for example as part of a service we do for you. That access follows these same terms.',
        ],
      },
      {
        title: 'Refunds',
        body: [
          'All sales are final and there are no refunds, apart from the two cases described in our [Refund and Cancellation Policy](/refund-policy/): being charged twice, or paying without the access being switched on.',
        ],
      },
      {
        title: 'Using Fiberarticle fairly',
        body: [
          'Please do not:',
          {
            list: [
              'use Fiberarticle for anything illegal, or to harm or harass anyone;',
              'try to get around the payment, break our security, or reach other people\'s data;',
              'share your account, or resell or give away access to it;',
              'flood the service with automated requests, or copy it at scale;',
              'upload material you do not have the right to use.',
            ],
          },
          'We may suspend an account that breaks these rules. There is no refund in that case.',
        ],
      },
      {
        title: 'Your work and the AI',
        body: [
          'What you write and upload stays yours. We store it only to run the service for you, and you can download or delete it at any time from Settings.',
          'Fiberarticle uses AI models, and AI can be wrong. It can misread a paper, miss a paper, or state something with more confidence than the evidence allows. Always open and check the sources behind anything it writes before you submit it anywhere. You are responsible for the work you submit, and for following the rules on AI use set by your university, your journal or your employer.',
        ],
      },
      {
        title: 'Services we rely on',
        body: [
          'Fiberarticle searches scholarly indexes such as arXiv, OpenAlex, Semantic Scholar and Crossref, and uses AI model providers, Razorpay for payments and an email provider for account mail. We cannot control when these services change or go down, and some features depend on them.',
        ],
      },
      {
        title: 'Availability and changes',
        body: [
          'We work to keep Fiberarticle running and improving, but we cannot promise that it will always be available or free of errors. Features may change as the product grows. Full access covers the features of the app as they are at any given time.',
        ],
      },
      {
        title: 'The limits of our responsibility',
        body: [
          'Fiberarticle is provided as it is. As far as the law allows, we are not responsible for indirect losses, such as a missed deadline, a rejected paper or lost opportunities, and our total responsibility to you for any claim is limited to the amount you paid us.',
        ],
      },
      {
        title: 'Changes to these terms',
        body: [
          'If these terms change, we will post the new version on this page with a new date. Using Fiberarticle after that means you accept the new terms.',
        ],
      },
      {
        title: 'Law',
        body: ['These terms are governed by the laws of India.'],
      },
      {
        title: 'Contact',
        body: [`Questions about these terms? Write to ${EMAIL}.`],
      },
    ],
  },
  {
    slug: 'privacy',
    intro:
      'This page explains what Fiberarticle collects when you use the website and the app, why we collect it, and what you can do about it. Fiberarticle is run by Abdul Ateeb in India. We do not sell your data and we do not show ads.',
    sections: [
      {
        title: 'What we collect',
        body: [
          {
            list: [
              '**Your account:** your name and email address, and your password stored only as a secure hash. If you sign in with Google, we receive your name, email address and profile picture from Google.',
              '**Your work:** the topics and questions you give Fiberarticle, the files you upload, and the reports, articles, chats and tables it makes for you, along with your settings.',
              '**Your payment record:** the amount, the currency, the date, the payment method type (for example UPI or card) and the order and payment IDs from Razorpay. We never receive or store your card number, UPI PIN or bank login. Those go only to Razorpay.',
              '**Sign-in and security data:** a sign-in cookie, and the IP address and browser of each session, so you can stay signed in and we can spot misuse. Our servers also keep short technical logs.',
            ],
          },
        ],
      },
      {
        title: 'How we use it',
        body: [
          'To run the service for you, to keep your account secure, to send you account and payment emails (for example a verification code or a payment receipt), and to answer you when you write to us. We do not use your work to train AI models, and we do not send marketing emails without asking.',
        ],
      },
      {
        title: 'How the AI sees your work',
        body: [
          'To answer a question or write a draft, Fiberarticle sends your text and the relevant parts of papers to an AI model. That model is the one you choose in Settings: Fiberarticle AI (run through our AI provider), a provider you connect with your own key, or a model running on your own machine. If you add your own key, we store it encrypted and use it only for your requests.',
        ],
      },
      {
        title: 'Who helps us run Fiberarticle',
        body: [
          'These services process data for us, only to do their part:',
          {
            list: [
              'Supabase, which hosts our database in India (Mumbai).',
              'Oracle Cloud, which runs our servers in India (Hyderabad).',
              'Razorpay, which processes payments.',
              'Resend, which sends account and payment emails.',
              'Google, if you choose to sign in with Google.',
              'The AI model provider that answers your requests.',
              'Scholarly indexes such as arXiv, OpenAlex, Semantic Scholar and Crossref, which receive the search queries made for your research.',
            ],
          },
        ],
      },
      {
        title: 'Cookies',
        body: [
          'We use one cookie to keep you signed in. Your browser also remembers small choices such as your theme. We do not use advertising or tracking cookies, and the website runs no analytics.',
        ],
      },
      {
        title: 'How long we keep it',
        body: [
          'We keep your account and your work until you delete them. Payment records are kept for as long as Indian law requires businesses to keep accounts, even after an account is deleted.',
        ],
      },
      {
        title: 'Your choices',
        body: [
          {
            list: [
              '**Download everything:** Settings, then Account, then Download my data.',
              '**Correct your details:** change your name in Settings, or write to us.',
              '**Delete your account:** Settings, then Account, then Delete account. This removes your account and all of your work for good.',
            ],
          },
          `For anything else about your data, write to ${EMAIL}.`,
        ],
      },
      {
        title: 'Security',
        body: [
          'Everything travels over HTTPS, passwords are stored only as secure hashes, and saved API keys are encrypted. No system is perfectly secure, so please use a strong password that you do not use anywhere else.',
        ],
      },
      {
        title: 'Children',
        body: [
          'Fiberarticle is made for students and researchers. If you are under 18, use it only with the consent of a parent or guardian.',
        ],
      },
      {
        title: 'Changes to this policy',
        body: [
          'If this policy changes, we will post the new version here with a new date.',
        ],
      },
      {
        title: 'Contact',
        body: [`Write to ${EMAIL}.`],
      },
    ],
  },
  {
    slug: 'refund-policy',
    intro:
      'Full access to Fiberarticle is a one-time payment for a digital service that is switched on the moment you pay. Please read this before you buy.',
    sections: [
      {
        title: 'All sales are final',
        body: [
          'We do not offer refunds or cancellations once a payment is complete. This includes not using the service, changing your mind, or the service not being what you hoped for. Take your time with the pricing page and the product before you pay.',
        ],
      },
      {
        title: 'When we do refund',
        body: [
          {
            list: [
              '**You were charged twice.** If the same account was charged more than once for full access, every extra payment is refunded in full.',
              '**You paid but nothing was switched on.** If money left your account and full access was not switched on, write to us with the payment ID. We switch it on, or refund the payment in full if we cannot.',
            ],
          },
          'Refunds go back to the method you paid with, through Razorpay. We start them within 7 working days of confirming the problem, and your bank usually shows the money 5 to 7 working days after that.',
        ],
      },
      {
        title: 'Failed payments',
        body: [
          'If a payment fails but money was taken from your account, it is usually returned by your bank on its own within 5 to 7 working days. If it is not, write to us.',
        ],
      },
      {
        title: 'Before raising a dispute',
        body: [
          'If something went wrong with a payment, please write to us first. We reply within 2 working days and it is usually the fastest way to sort it out.',
        ],
      },
      {
        title: 'Contact',
        body: [
          `Write to ${EMAIL} with the payment ID from your Razorpay receipt. It starts with "pay_".`,
        ],
      },
    ],
  },
  {
    slug: 'shipping-policy',
    intro: 'Fiberarticle is an online software service. There is nothing to ship.',
    sections: [
      {
        title: 'How full access is delivered',
        body: [
          'Full access is switched on in your account automatically as soon as Razorpay confirms your payment, usually within a minute. You also get an email with your receipt.',
        ],
      },
      {
        title: 'Where you can use it',
        body: [
          'Anywhere you have an internet connection, at [app.fiberarticle.com](https://app.fiberarticle.com), on a computer, tablet or phone.',
        ],
      },
      {
        title: 'If access does not show up',
        body: [
          'Refresh the page first. If the features are still locked 30 minutes after paying, write to us with the payment ID from your Razorpay receipt and we will sort it out.',
        ],
      },
      {
        title: 'Contact',
        body: [`Write to ${EMAIL}.`],
      },
    ],
  },
  {
    slug: 'contact',
    intro: `The best way to reach us is by email, at ${EMAIL}. We reply within 2 working days.`,
    sections: [
      {
        title: 'What to include',
        body: [
          {
            list: [
              '**About a payment:** the email address of your account and the payment ID from your Razorpay receipt (it starts with "pay_").',
              '**About a problem in the app:** what you were doing, what you expected, and what happened instead. A screenshot helps.',
              '**If you want us to do the work for you:** your topic, your target journal and your deadline. See the [pricing page](/pricing/).',
            ],
          },
        ],
      },
      {
        title: 'Who runs Fiberarticle',
        body: ['Fiberarticle is run by Abdul Ateeb in India.'],
      },
    ],
  },
]

export const LEGAL_CONTENT_BY_SLUG = Object.fromEntries(
  LEGAL_CONTENT.map((page) => [page.slug, page]),
)
