import logo_pokemon from '../assets/images/pokemon-logo.png'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-100">
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
            <img src={logo_pokemon} className='h-12 w-auto' alt='logo'/>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
            <NavLink className="text-gray-700 transition hover:text-gray-700/75" to="/about">
              About
            </NavLink>
        </li>
        </ul>
    </div>
</footer>
  )
}

export default Footer