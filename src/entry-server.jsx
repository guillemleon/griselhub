// Build-time entry: renders a route to static HTML for scripts/prerender.mjs.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import App from './App.jsx'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StaticRouter>,
  )
}
