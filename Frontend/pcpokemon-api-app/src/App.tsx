import React, { useState } from 'react'
import { RouterProvider, json } from 'react-router-dom'
import { BrowserRouter } from './BrowserRouter/BrowserRouter'

const App = () => {

  return (
    <div>
      {<RouterProvider router={BrowserRouter} />}
    </div>
  )
}

export default App


