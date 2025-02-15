import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes/router'
import Layout from './pages/_layout'
import { ThemeProvider } from './context/ThemeContext'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React.StrictMode>
      <ThemeProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </React.StrictMode>
  </StrictMode>
)
