import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.pcss'
import { HeadProvider } from 'react-head'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeadProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </HeadProvider>
)
