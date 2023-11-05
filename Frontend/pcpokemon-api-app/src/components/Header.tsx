import React, { useState } from 'react'
import HeaderItem from './HeaderItem'
import logo from '../assets/images/pokemon-logo.png'
import {HiHome, HiDotsVertical} from "react-icons/hi"
import {FaSearch, FaUserCircle} from "react-icons/fa"
import {GiCardExchange} from 'react-icons/gi'
import {BiLogOut} from 'react-icons/bi'
import {BsFillInboxesFill} from 'react-icons/bs'

function Header() {
    const [toggle, setToggle] = useState(true);
    const menu = [
        {
            name: 'Accueil',
            icon:HiHome
        },
        {
            name: 'Mes boîtes',
            icon: BsFillInboxesFill
        },
        {
            name: 'Mes échanges',
            icon:GiCardExchange
        },
        {
            name: 'Chercher un Dresseur',
            icon:FaSearch
        },
        {
            name: 'Chercher un pokemon',
            icon:FaSearch
        },
        {
            name: 'Mon profil',
            icon:FaUserCircle
        },
        {
            name: 'Déconnexion',
            icon:BiLogOut
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
            <div className='hidden md:flex gap-8'>
                {menu.map((item) =>(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
            </div>
            <div className='flex md:hidden gap-8'>
                {menu.map((item,index) => index<3&&(
                    <HeaderItem name={''} Icon={item.icon}/>
                ))}
            <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical}/>
                {toggle?<div className='absolute mt-3 bg-[121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                    {menu.map((item,index) => index>2&&(
                        <HeaderItem name={item.name} Icon={item.icon}/>
                    ))}
                </div>:null}
            </div>
            </div>

        </div>
    </div>
  )
}

export default Header