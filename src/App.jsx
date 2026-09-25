import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Support from './pages/Support'
import NotFound from './pages/NotFound'
import AppPage from './pages/AppPage'
import { APPS } from './apps'
import { metaFor } from './seo'

function App() {
  const { pathname } = useLocation()

  // Each page's <head> is baked at build time (scripts/prerender.mjs); this
  // keeps the tab title right when navigating inside the app.
  useEffect(() => {
    document.title = metaFor(pathname).title
  }, [pathname])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/support" element={<Support />} />
          {APPS.map((app) => (
            <Route key={app.slug} path={`/${app.slug}`} element={<AppPage app={app} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
