import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import App from './App.jsx'
import './index.css'

// A page load (reload or opening a link like /#contact) always starts at the
// top: drop the hash before the app renders so neither the browser nor the
// router jumps to that section, and don't restore the previous scroll offset.
// In-app clicks on "Contact" still scroll there (see Home).
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
  // Chrome remembers the original fragment and still jumps to it once the
  // section renders; pin the page to the top until loading has finished.
  const toTop = () => window.scrollTo(0, 0)
  window.addEventListener('load', () => { toTop(); setTimeout(toTop, 0) }, { once: true })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
