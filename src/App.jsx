import { useEffect } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'
import PaperLoading from './blog/PaperLoading.jsx'
import { POSTS_BY_SLUG } from './blog/registry.js'
import { useModule } from './lib/lazy.js'
import {
  BLOG_INDEX_KEY,
  BLOG_POST_KEY,
  NOT_FOUND_KEY,
  loadBlogIndex,
  loadBlogPost,
  loadNotFound,
  surfaceFor,
} from './routes.js'
import { headFor } from './seo/head.js'
import { useHead } from './seo/useHead.js'

/* Routing keeps the browser at the top of the new page. Without this a visitor
   who is halfway down the home page lands halfway down Pricing. A link that
   carries a #section (a post's table of contents, a shared link to one part of
   a post) goes to that section instead. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

/* The blog sits on a light paper desk while the rest of the site is dark. The
   page background behind everything follows, so an overscroll bounce never
   flashes the other colour. The prerendered blog pages already carry this
   attribute in their HTML. */
function SurfaceSync() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.dataset.surface = surfaceFor(pathname)
  }, [pathname])

  return null
}

function HomePage() {
  useHead(headFor('/'), 'home')

  return (
    <>
      <main>
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}

/* Pricing carries no footer: the page is one full-bleed image and the two
   cards, and the paper wordmark under it broke that. The route owns its own
   footer rather than the shell rendering one for every page. */
function PricingPage() {
  useHead(headFor('/pricing/'), 'pricing')

  return (
    <main>
      <Pricing />
    </main>
  )
}

/* The blog's own pages are split out of the main bundle, so the home page
   does not carry their drawings. See src/lib/lazy.js for why they are not
   React.lazy. */
function NotFoundPage() {
  const { mod, error } = useModule(NOT_FOUND_KEY, loadNotFound)
  if (!mod) return <PaperLoading error={error} />
  const Page = mod.default
  return <Page />
}

function BlogIndexPage() {
  const { mod, error } = useModule(BLOG_INDEX_KEY, loadBlogIndex)
  if (!mod) return <PaperLoading error={error} />
  const Page = mod.default
  return <Page />
}

function BlogPostPage() {
  const { slug } = useParams()
  const known = Boolean(POSTS_BY_SLUG[slug])
  const { mod, error } = useModule(known ? BLOG_POST_KEY : null, loadBlogPost)

  if (!known) return <NotFoundPage />
  if (!mod) return <PaperLoading error={error} />
  const Page = mod.default
  return <Page slug={slug} />
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SurfaceSync />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blogs" element={<BlogIndexPage />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
