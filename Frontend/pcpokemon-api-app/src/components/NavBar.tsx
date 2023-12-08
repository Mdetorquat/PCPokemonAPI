import logo_pokemon from '../assets/images/pokemon-logo.png'
import { NavLink } from 'react-router-dom'
import Authentication from '../commons/Authentication'
import { useContext } from 'react';
import TrainerContext, { defaultTrainerData } from '../contexts/TrainerContext';
import { BsFillInboxesFill } from "react-icons/bs";
import { GiTrade } from "react-icons/gi";
import { RiUserSearchFill } from "react-icons/ri";
import { HiDocumentSearch } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { HiOutlineLogin } from "react-icons/hi";
import React from 'react';


export default function Navbar() {

  const isLoggedIn = Authentication();

  const { setTrainerData } = useContext(TrainerContext);

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setTrainerData(defaultTrainerData);
  }

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='relative flex h-16 justify-between items-center'>
        <div className='flex flex-shrink-0 items-center'>
          <NavLink to={"/"}>
            <img src={logo_pokemon} className='h-9 w-auto' alt='Logo'/>
          </NavLink>
        </div>

        {isLoggedIn && (
          <div className='menu flex gap-8'>
            <li className='menuList flex items-center text-[#6f6f6f] hover:text-blueColor'>
              <BsFillInboxesFill style={{ marginRight: '8px' }}/>
              <NavLink id='my-boxes' to="/my-boxes">Mes boîtes</NavLink>
            </li>
            <li className='menuList flex items-center text-[#6f6f6f] hover:text-blueColor'>
              <GiTrade style={{ marginRight: '8px' }}/>
              <NavLink to="/my-exchanges">Mes échanges</NavLink>
            </li>
            <li className='menuList flex items-center text-[#6f6f6f] hover:text-blueColor'>
              <RiUserSearchFill style={{ marginRight: '8px' }}/>
              <NavLink to="/search-for-trainers">Chercher un Dresseur</NavLink>
            </li>
            <li className='menuList flex items-center text-[#6f6f6f] hover:text-blueColor'>
              <HiDocumentSearch style={{ marginRight: '8px' }}/>
              <NavLink to="/search-pokemons">Chercher un pokemon</NavLink>
            </li>
            <li className='menuList flex items-center text-[#6f6f6f] hover:text-blueColor'>
              <FaUser style={{ marginRight: '8px' }}/>
              <NavLink to="/user-profile">Profile utilisateur(trice)</NavLink>
            </li>
            <li className='menuList flex items-center text-[#6f6f6f] hover:text-blueColor'>
              <MdLogout style={{ marginRight: '8px' }}/>
              <NavLink to="/login" onClick={handleLogout}>Se déconnecter</NavLink>
            </li>
          </div>
        )}
        {!isLoggedIn && (
          <div className='menu flex gap-8'>
            <li className='menuList flex items-center text-[#6f6f6f] hover:text-blueColor'>
              <MdLogin style={{ marginRight: '8px' }}/>
              <NavLink to="/subscribe">S'inscrire</NavLink>
            </li>
            <li className='menuList flex items-center text-[#6f6f6f] hover:text-blueColor'>
              <HiOutlineLogin style={{ marginRight: '8px' }}/>
              <NavLink to="/login">Se connecter</NavLink>
            </li>
          </div>
        )}
      </div>
    </div>
  )
}