//Modulos
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
//componentes
import App from './App.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './componentes/Home.jsx'
import Info from './componentes/Info.jsx'
import Proximamente from './componentes/Proximamente.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    errorElement: (<div>Error, esto está mal</div>),
    
    
  },
  {
    path: "/discos",
    element: <App/>,
    errorElement: <div>disco no encontrado</div>
  },
  {
    path:"/Info",
    element:<Info />,
    errorElement: (<div>Error, esto está mal</div>),
  },  
  {
    path:"/Proximamente",
      element:<Proximamente />,
      errorElement: (<div>Error, esto está mal</div>),
  }  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router}/>
    <Footer />
  </StrictMode>,
)
