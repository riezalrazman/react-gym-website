import React from 'react'
import Cardio from '../assets/cardio.jpg'
import Power from '../assets/power.jpg'
import Aero from '../assets/aero.jpg'
import Pull from '../assets/pull.jpg'
import {motion} from 'framer-motion'

const Classes = () => {
  const transition = {duration:3, type: "spring"}
  return (
    <div className='max-w-[1240px] mx-auto '>
  <h1 className='md:text-2xl sm:text-xl text-3xl mt-20 mx-36 md:mx-96 lg:mx-10 text-white'>Classes</h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 p-8 mt-8 '>
    <motion.div
     initial={{ bottom: "-4rem"}}
     whileInView={{bottom: "0rem"}}
     transition={{transition}}
    className='flex p-4 relative'>
        {/* Overlay */}
        <div 
         
        className='absolute w-full h-full bg-black/50  text-white'>
        <h1 class="absolute text-4xl font-bold text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Cardio</h1>
  <p className="pt-20 absolute text-base sm:text-lg md:text-3xl  lg:text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  T & Th, 5pm - 6pm</p>
      </div>
      <img   
      className='h-96 w-full  object-cover' src={Cardio} alt="/" />
    </motion.div>

    <motion.div
     initial={{ bottom: "-4rem"}}
     whileInView={{bottom: "0rem"}}
     transition={{transition}}
    className='flex p-4 relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50  text-white'>
        <h1 class="absolute text-4xl font-bold text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Powerlifting</h1>
  <p className="pt-20 absolute text-base sm:text-lg md:text-3xl  lg:text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  M & W, 9am - 10am</p>
      </div>
      <img className='h-96 w-full  object-cover' src={Power} alt="/" />
    </motion.div>

    <motion.div
     initial={{ bottom: "-4rem"}}
     whileInView={{bottom: "0rem"}}
     transition={{transition}}
    className='flex p-4 relative mb-12'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50  text-white'>
        <h1 class="absolute text-4xl font-bold text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Aerobics</h1>
  <p className="pt-20 absolute text-base sm:text-lg md:text-3xl  lg:text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Sa, 11am - 12pm</p>
      </div>
      <img className='h-96 w-full  object-cover' src={Aero} alt="/" />
    </motion.div>

    <motion.div
     initial={{ bottom: "-4rem"}}
     whileInView={{bottom: "0rem"}}
     transition={{transition}}
    className='flex p-4 relative mb-12'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50  text-white'>
        <h1 class="absolute text-4xl font-bold text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Weights</h1>
  <p className="pt-20 absolute text-base sm:text-lg md:text-3xl  lg:text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  M & Th, 1pm - 2pm</p>
      </div>
      <img className='h-96 w-full mb-20 object-cover' src={Pull} alt="/" />
    </motion.div>
  </div>
  </div>
  )
}

export default Classes