import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  const transition = {duration:10, type: "spring"}
  return (
    <div className='max-w-[1640px] mx-auto mt-3'>
      <motion.div
       initial={{ bottom: "-3rem"}}
       whileInView={{bottom: "0rem"}}
       transition={{transition}}
      className='max-h-[600px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center'>
          <h1 className='mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8'><span className='text-orange-500'> fitness</span> is life.</h1>
          <h1 className='mx-auto text-base sm:text-lg md:text-3xl  lg:text-3xl'>Welcome to the neighborhood’s toughest <span className='text-orange-500'> gym.</span></h1>
        </div>
        <img className='w-full max-h-[600px] object-cover' src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </motion.div>
    </div>
  )
}

export default Hero