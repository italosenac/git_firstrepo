import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './main.css'
import '@fontsource/comfortaa/400.css'

const raiz = document.getElementById('root')
if (raiz) {
  createRoot(raiz).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}
