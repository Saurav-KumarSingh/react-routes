import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      { path:"",
      element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {path:"contact",
        element: <Contact/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
