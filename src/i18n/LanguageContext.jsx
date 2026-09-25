import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

const SUPPORTED_LANGS = ['en', 'es', 'fr', 'ca', 'de', 'hu', 'it', 'pt']

function detectLanguage() {
  // Build-time prerender has no browser: crawlers get English.
  if (typeof window === 'undefined') return 'en'
  const saved = localStorage.getItem('griselhub-lang')
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved
  const browser = navigator.language?.slice(0, 2).toLowerCase()
  if (browser && SUPPORTED_LANGS.includes(browser)) return browser
  return 'en'
}

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'ca', label: 'Català' },
  { code: 'de', label: 'Deutsch' },
  { code: 'hu', label: 'Magyar' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
]

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  // keep <html lang> accurate from the first render, not only after a change
  useEffect(() => { document.documentElement.lang = lang }, [lang])

  const setLang = useCallback((code) => {
    setLangState(code)
    localStorage.setItem('griselhub-lang', code)
  }, [])

  const t = useCallback((key) => {
    return translations[lang]?.[key] || translations.en[key] || key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
