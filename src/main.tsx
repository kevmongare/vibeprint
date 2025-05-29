import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-gradient-to-b from-white to-[var(--primary)] h-full'><App /></div>
    

  </StrictMode>,
)
