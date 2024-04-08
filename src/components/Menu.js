import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import MenuDropDown from './MenuDropDown'

const Menu = () => {
    const [menuDropDown, setMenuDropDown] = useState()

    return (
        <nav className='flex fixed top-0 w-full z-[99999]'>
            <div className='flex bg-white items-center justify-between w-full h-20 border border-slate-300 shadow-md p-3'>
                <Bars3Icon onClick={(() => { setMenuDropDown(!menuDropDown) })} className='w-12 h-12 text-red-500 text-left mr-2 mt-1' />
                {menuDropDown && <MenuDropDown />}
                <h1 className='text-2xl text-left w-full mt-2'><Link to='/' className='list-none no-underline text-black'>ECOCAP INVESTEMENTS</Link></h1>
                <div className='flex gap-3 mr-4'>
                    <Link to="/carateristicas">
                        <button className='w-auto h-10 p-2 border border-green-200 bg-red-500 rounded text-white shadow'>Experimente</button>
                    </Link>
                    <button className='w-20 h-10 p-2 border border-slate-200 bg-red-400 rounded text-white shadow'>Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Menu