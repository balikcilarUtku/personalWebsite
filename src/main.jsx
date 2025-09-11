import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nProvider } from './i18n'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nProvider>
        <App />
    </I18nProvider>
  </StrictMode>
)
