import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='max-w-screen-xl mx-auto'>
  <AuthProvider>
  <RouterProvider router={Routes}></RouterProvider>
  </AuthProvider>
  </div>
  </React.StrictMode>,
)

