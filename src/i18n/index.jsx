import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import tr from './tr.json'
import en from './en.json'

const dictionaries = { tr, en }

const I18nContext = createContext({
  lang: 'tr',
  setLang: () => {},
  t: (key) => key
})

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'tr')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang   // <html lang="tr|en">
  }, [lang])

  const t = useMemo(() => {
    const dict = dictionaries[lang] || {}
    return (key) => key.split('.').reduce((acc, part) => (acc && acc[part] != null ? acc[part] : key), dict)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
