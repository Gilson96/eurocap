import React from 'react'
import { Link } from 'react-router-dom'

const MenuDropDown = () => {
    return (
        <div className='flex flex-col w-40 h-52 bg-white shadow-lg border border-slate-200 absolute -bottom-48 left-5 p-3'>
            <ul className='flex flex-col justify-evenly h-full p-1 list-none text-black gap-3'>
                <li ><Link to="/" className='list-none no-underline text-black'>Inicio</Link></li>
                <li><Link to="/carateristicas" className='list-none no-underline text-black'>Carateristicas</Link></li>
                <li><Link to="/suporte" className='list-none no-underline text-black'>Suporte</Link></li>
                <Link to="/contactos" className='list-none no-underline text-black'><li>Contactos</li></Link>
            </ul>
        </div>
    )
}

export default MenuDropDown
