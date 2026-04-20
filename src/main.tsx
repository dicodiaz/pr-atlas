import { App } from '@/app/App'
import '@/i18n'
import '@/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element "#root" not found')
}

createRoot(rootEl).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
