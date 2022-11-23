import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Ads from '../assets/ads.jpg'
import {motion} from 'framer-motion'

const About = () => {
  const transition = {duration:3, type: "spring"}
  return (
    <div>
        <Navbar/>
      <div className='w-full bg-white py-16'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-8 py-2'>About</h1>
          <p className='mb-16 p-8'>
Get ready to tear down obstacles of the mind and body. We believe that getting yourself back to work means setting your own pace. So start your journey with us today. </p>
        </div>
      </div>
      <motion.div
        initial={{ bottom: "-4rem"}}
        whileInView={{bottom: "0rem"}}
        transition={{transition}}
        className='relative'>
        <img className='w-full max-h-[450px] object-cover' src={Ads} alt="" />
      </motion.div>
        <div className='w-full bg-white py-16'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
        </div>
      </div>
      <div className='w-full text-black px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 p-8'>Equipment</h1>
        </div>
        <div className=''>
          <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <ul className='list-disc leading-8 p-8'>
                <li>Battle Ropes & Pulleys</li>
                <li>Suspended Ropes</li>
                <li>Barbells & Bumper Plates</li>
                <li>Free Weights</li>
                <li>Weight Training Gloves</li>
                <li>Step Benches</li>
        <br />
                <li>Yoga Mats & Blocks</li>
                <li>Gymnastics Studio & Rings</li>
                <li>Custom Obstacle Course</li>
                <li>Locker Room</li>
                <li>Showers & Towels</li>
                <li>Premium Toiletries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
      <Footer/>
    </div>
 
  )
}

export default About