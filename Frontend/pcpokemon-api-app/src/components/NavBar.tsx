import { Fragment } from 'react'
import logo_pokemon from '../assets/images/pokemon-logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='relative flex h-16 justify-between items-center'>
        <div className='flex flex-shrink-0 items-center'>
          <a href='/'>
            <img src={logo_pokemon} className='h-8 w-auto' alt='logo'/>
          </a>
        </div>
        
        <div className='menu flex gap-8'>
          <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
            <NavLink to="/subscribe">S'inscrire</NavLink>
          </li>
          <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
            <NavLink to="/login">Se connecter</NavLink>
          </li>
        </div>
      </div>
    </div>
  )
}

export default NavBar