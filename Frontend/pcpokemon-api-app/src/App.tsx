import React from 'react'
import Layout from './components/Layout/Layout'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter } from './BrowserRouter/BrowserRouter'

function App() {
  return (
    <>
    <RouterProvider router={BrowserRouter} />
    </>
  )
}

export default App

