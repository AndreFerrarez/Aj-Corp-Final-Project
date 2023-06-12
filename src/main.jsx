import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Shares from './routes/Shares.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Contact from './routes/Contact.jsx'
import Wealth from './routes/Wealth.jsx'
import Register from './components/users/Register.jsx'
import Login from './components/login/Login.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Shares",
        element: <Shares />
      },
      {
        path:"Contact",
        element: <Contact />
      },
      {
        path:"wealth",
        element: <Wealth />
      },
      {
        path:"Register",
        element:<Register />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider  router={router}/>
    
  </React.StrictMode>,
)