import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import RegisterForm from './pages/RegisterForm'
import LoginForm from './pages/LoginForm'
import About from './pages/About'
import Boxes from './pages/Boxes'
import CreateNewBoxe from './pages/CreateNewBoxe'
import { TrainerContextProvider } from './contexts/TrainerContext'
import DetailedBoxe from './pages/DetailedBoxe'
import CreateNewPokemon from './pages/CreateNewPokemon'
import ProtectedRoute from './commons/ProtectedRoute'
import DetailedPokemon from './pages/DetailedPokemon'

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
            path: "/",
            element: <ProtectedRoute />,
            children: [
              {
                path: "/my-boxes",
                element:<Boxes />
              },
              {
                path:"/new-box",
                element: <CreateNewBoxe />
              },
              {
                path:"boxes/:boxeId",
                element: <DetailedBoxe />
              },
              {
                path: "/boxes/:trainerId/new-pokemon",
                element: <CreateNewPokemon />
              },
              {
                path: "pokemons/:pokemonId",
                element: <DetailedPokemon />
              },
            ],
          },
      ],
  },
]);

export default function App() {

  return (
    <TrainerContextProvider>
      <RouterProvider router={router} />
    </TrainerContextProvider>
  )
}

