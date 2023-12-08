import logo_pokemon from '../assets/images/pokemon-logo.png'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-blue-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src={logo_pokemon} className="h-10" alt='Logo'/>
              </a>
              <ul className="items-center flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                    <NavLink className="text-white-700 transition hover:text-white-700" to="/about">
                      About
                    </NavLink>
                  </li>
              </ul>
          </div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Pokemon. All Rights Reserved.</span>
      </div>
    </footer>
  )
}