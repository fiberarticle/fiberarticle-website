import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'

/* Routing keeps the browser at the top of the new page. Without this a visitor
   who is halfway down the home page lands halfway down Pricing. */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <Hero />
                <HowItWorks />
              </main>
              <Footer />
            </>
          }
        />
        {/* Pricing carries no footer: the page is one full-bleed image and the
            two cards, and the paper wordmark under it broke that. The route
            owns its own footer rather than the shell rendering one for every
            page. */}
        <Route
          path="/pricing"
          element={
            <main>
              <Pricing />
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
