import React from 'react'
import {AiOutlineSearch, AiOutlineCloseCircle} from 'react-icons/ai'
import {MdCatchingPokemon} from 'react-icons/md'

const Search = () => {
    return (
        <div className='searchDiv grid gp-10 bg-greyColor rounded-[10px] p-[3rem]'>
            <form action=''>
                <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyColor-700'>
                    <div className='flex gap-2 items-center'>
                        <AiOutlineSearch className='text-[18px] icon'/>
                        <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Rechercher un Dresseur'/>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <MdCatchingPokemon className='text-[18px] icon'/>
                        <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Rechercher un Pokemon'/>
                    </div>
                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search