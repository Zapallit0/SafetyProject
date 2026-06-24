import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import Scrolltotop from "./Components/Helpers/ScrollToTop.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Scrolltotop />
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
)