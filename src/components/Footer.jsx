import React from 'react'
import {

  FaFacebookSquare,

  FaInstagram,

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300 '>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>fit.</h1>
        
        <div className='flex gap-2 my-3'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
         
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-3'>
        <div>
          <h6 className='font-xl text-gray-400 mb-8'>Open Daily</h6>
          <ul>
            <li className='py-2 text-sm'>7am – 8pm Monday thru Friday</li>
            <li className='py-2 text-sm'>9am – 3pm Weekends</li>
            <br/>
              <p className='text-sm'>123 Nameless Street </p> 
              <p className='text-sm'>Houston, TX 00000</p>
          </ul>
        </div>
        <div>
        <button className='bg-[#00df9a] px-4 lg:w-[280px] rounded-md font-medium py-5 text-black hover:bg-[#009163] hover:text-white'>Join Today</button>
        </div>
       
      </div>
    </div>
  )
}

export default Footer