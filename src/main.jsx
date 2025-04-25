import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald|Noto+Sans"></link>
    <App />
  </StrictMode>,
)
