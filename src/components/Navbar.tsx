import React from 'react';
import Logo from '../images/codepal.png';

export const Navbar = () => {
  return (
    <div className='flex items-center w-full'>
    <nav className='flex justify-between items-center w-full'>
        <div className='flex justify-between items-center'>
        <img className='object-contain h-32 w-64' src={Logo} alt='Codepal' />
        <ul className='flex justify-around font-semibold items-center '>
            <li className='p-3  hover:bg-neutral-950 hover:text-white'>Learn</li>
            <li className='p-3  hover:bg-neutral-950 hover:text-white'>About Us</li>
            <li className='p-3  hover:bg-neutral-950 hover:text-white'>Blog</li>
            <li className='p-3  hover:bg-neutral-950 hover:text-white'>Contact</li>
        </ul>
        </div>
        <button className='px-3 py-2 font-semibold bg-neutral-950 text-white'>Join now</button>
    </nav>
    </div>
  )
}
