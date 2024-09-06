import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <App />
    <Footer></Footer>
  </StrictMode>,
)
