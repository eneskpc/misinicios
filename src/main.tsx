import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/styles/global.scss'
import { BulletinProvider } from './application/data/BulletinProvider'
import { ShoppingProvider } from './application/data/ShoppingCardProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BulletinProvider>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </BulletinProvider>
  </StrictMode>,
)
