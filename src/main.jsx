import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
     <RouterProvider router={router} />
    <Toaster />
  </AuthProvider>
  </StrictMode>,
)
