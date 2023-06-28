import React from 'react'
import ReactDOM from 'react-dom/client' // Integrando o React para funcionar no ambiente Web(Browser)
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
