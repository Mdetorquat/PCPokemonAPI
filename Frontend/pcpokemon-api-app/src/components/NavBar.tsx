import logo_pokemon from '../assets/images/pokemon-logo.png'
import { NavLink } from 'react-router-dom'
import Authentication from '../commons/Authentication'

export const Navbar = () => {

  const isLoggedIn = Authentication();

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='relative flex h-16 justify-between items-center'>
        <div className='flex flex-shrink-0 items-center'>
          <NavLink to={"/"}>
            <img src={logo_pokemon} className='h-8 w-auto' alt='logo'/>
          </NavLink>
        </div>

        {isLoggedIn && (
          <div className='menu flex gap-8'>
            <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
              <NavLink to="/my-boxes">Mes boîtes</NavLink>
            </li>
            <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
              <NavLink to="/my-exchanges">Mes échanges</NavLink>
            </li>
            <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
              <NavLink to="/search-for-trainers">Chercher un(e) Dresseur(euse)</NavLink>
            </li>
            <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
              <NavLink to="/search-for-pokemons">Chercher un pokemon</NavLink>
            </li>
            <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
              <NavLink to="/user-profils">Profile utilisateur(trice)</NavLink>
            </li>
            <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
              <NavLink to="/login" onClick={() => {localStorage.clear()}}>Se déconnecter</NavLink>
            </li>
          </div>
        )}
        {!isLoggedIn && (
          <div className='menu flex gap-8'>
            <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
              <NavLink to="/subscribe">S'inscrire</NavLink>
            </li>
            <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
              <NavLink to="/login">Se connecter</NavLink>
            </li>
          </div>
        )}
      </div>
    </div>
  )
}