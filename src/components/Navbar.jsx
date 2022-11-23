import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-5xl font-bold text-[#00df9a]'><Link to='/'>fit.</Link></h1>
      <ul className='hidden md:flex'>
    
        <li className='text-xl p-4 hover:text-orange-500'>
          <Link to='/about'>About</Link>
        </li>
        <li className='text-xl p-4  hover:text-orange-500'>
          <Link to='/classes'>Classes</Link>
        </li>
        <li className='text-xl p-4  hover:text-orange-500'>
          <Link to='/contact'>Contact</Link>
        </li>
        
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-5xl font-bold text-[#00df9a] p-5'><Link to='/'>fit.</Link></h1>
        <ul className='uppercase p-4'>
         
          <li className='text-xl p-4 border-b border-gray-600 hover:text-orange-500 '><Link to='/about'>About</Link></li>
          <li className='text-xl p-4 border-b border-gray-600 hover:text-orange-500'><Link to='/classes'>Classes</Link></li>
          <li className='text-xl p-4 hover:text-orange-500'><Link to='/contact'>Contact</Link></li>
          
        </ul>
      </div>
    </div >
  )
}

export default Navbar