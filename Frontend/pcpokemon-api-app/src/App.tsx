import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import RegisterForm from './pages/RegisterForm'
import LoginForm from './pages/LoginForm'
import About from './pages/About'
import Boxes from './pages/Boxes'
import { TrainerContextProvider } from './contexts/TrainerContext'

const router = createBrowserRouter([
  {
      path:"/",
      element:<Layout />,
      children:[
          {
              path:"/subscribe",
              element:<RegisterForm />
          },
          {
              path:"/login",
              element:<LoginForm />
          },
          {
              path:"/about",
              element:<About />
          },
          {
              path: "/my-boxes",
              element:<Boxes />
          }
      ]
  }
])

const App = () => {

  return (
    <TrainerContextProvider>
      <RouterProvider router={router} />
    </TrainerContextProvider>
  )
}

export default App


