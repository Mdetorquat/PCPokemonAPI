import React from 'react'
import logo_pokemon from '../assets/images/pokemon-logo.png'

function Footer() {
  return (
    <footer className="bg-gray-100">
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
            <img src={logo_pokemon} className='h-12 w-auto' alt='logo'/>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            About
            </a>
        </li>
        </ul>
    </div>
</footer>
  )
}

export default Footer