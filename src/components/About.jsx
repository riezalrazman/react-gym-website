import React from 'react'
import Gym from '../assets/gym.jpg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[500px] mx-auto my-4' src={Gym} alt='/' />
      <div className='flex flex-col justify-center'>
        
      <h1 className='px-4 underline'>About the Gym</h1>
        <p className='md:text-2xl sm:text-base text-xl mt-10 mx-10 text-black'>We offer an unpretentious and results-oriented community that’s invested in your goals and success. Check your ego at the door and get ready to sweat!</p>

      </div>
    </div>
  </div>
  )
}

export default About