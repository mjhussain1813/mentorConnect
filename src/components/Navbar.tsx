import React from 'react';
import Logo from '../images/codepal.png';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const history= useNavigate()
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
        <button className=' top-40 left-1100 w-153 h-16 mr-20 px-8 border-0  rounded-md bg-black text-white text-20 font-roboto font-semibold '  onClick={()=>history('/auth/login')}>Join now</button>
    </nav>
    </div>
  )
}