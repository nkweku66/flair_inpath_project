import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AccountPage from './pages/accountPage/AccountPage.tsx'
import LandingPage from './pages/landingPage/Homepage.tsx'
import CreateAccount from './pages/createAccount/CreateAccount.tsx'
import GlobalStyles from './App.styles'
import Verification from './pages/verification/VerificationPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/jobs',
    element: <App />
  },
  {
    path: '/mentorship',
    element: <App />
  },
  {
    path: '/trainings',
    element: <App />
  },
  {
    path: '/login',
    element: <App />
  },
  {
    path: '/signup',
    element: <AccountPage />
  },
  {
    path: '/create',
    element: <CreateAccount />
  },
  {
    path: '/verification',
    element: <Verification />
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <GlobalStyles />
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </>
)
