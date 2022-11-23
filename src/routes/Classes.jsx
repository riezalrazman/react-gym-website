import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Ads1 from '../assets/ads1.jpg'
import Ads2 from '../assets/ads2.jpg'
import Ads3 from '../assets/ads3.jpg'
import Ads4 from '../assets/ads4.jpg'
import Ads5 from '../assets/ads5.jpg'
import Ads6 from '../assets/power.jpg'


const Classes = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-full bg-white py-16 px-4'>
      <div className='grid md:grid-cols-3 gap-4'>

        <div className='flex group'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-8 py-2'>Classes</h1>
        </div>
        <div className='px-4'>
          <img className='h-72 w-full object-contain hover:scale-105 ease-in duration-300' src={Ads1} alt='/' />
          <h1 className='text-2xl mb-3'>Pull Your Weight I</h1>
              <p className='text-md leading-8'>By combining battle ropes, pulleys, and rope climbing, this beginner level class will help you grow muscle, build endurance, and put your metabolism to work.</p>
        </div>
        <div className='px-4'>
          <img className='h-72 w-full object-contain hover:scale-105 ease-in duration-300' src={Ads2} alt='/' />
          <h1 className='text-2xl mb-3'>Pull Your Weight II</h1>
              <p className='text-md leading-8'>Here we incorporate cardio intervals between rope exercises to help you build leaner muscles. This class is for those who have taken at least four sessions of Pull Your Weight I.</p>
        </div>
        <div className='flex group'>
        <h1 className='p-14 py-4 my-8'> <button className='bg-[#00df9a] px-8 lg:w-[280px] rounded-md font-medium py-5 text-black hover:bg-[#009163] hover:text-white'>Sign Up for  a Class</button></h1>
        </div>
        <div className='px-4'>
          <img className='h-72 w-full object-contain hover:scale-105 ease-in duration-300' src={Ads3} alt='/' />
          <h1 className='text-2xl mb-3'>Village Obstacle Course I</h1>
              <p className='text-md leading-8'>Here, we combine free weights with squats, lunges, and high-interval exercises so that you can build strength according to your own body type and goals.</p>
        </div>
        <div className='px-4'>
          <img className='h-72 w-full object-contain hover:scale-105 ease-in duration-300' src={Ads4} alt='/' />
          <h1 className='text-2xl mb-3'>Village Obstacle Course II</h1>
              <p className='text-md leading-8'>This is our favorite weekend activity. More than a class, our beginner obstacle course is designed to be fun! It’s like being back at summer camp without the drama.</p>
        </div>
        <div className='flex group'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-8 py-2'></h1>
        </div>
        <div className='px-4'>
          <img className='h-72 w-full object-contain hover:scale-105 ease-in duration-300' src={Ads5} alt='/' />
          <h1 className='text-2xl mb-3'>Strength & Cardio Circuit</h1>
              <p className='text-md leading-8'>Welcome to your perfect lunch break workout. During this short class, we do a series of intense cross-training moves with bursts of aerobic exercise, weight lifting, and stretch breaks</p>
        </div>
        <div className='px-4'>
          <img className='h-72 w-full object-contain hover:scale-105 ease-in duration-300' src={Ads6} alt='/' />
          <h1 className='text-2xl mb-3'>Basic Strength Training</h1>
              <p className='text-md leading-8'>Work off that Sunday brunch or train for an obstacle course race! We recommend this class for those who have completed at least two level I courses within the last month.</p>
        </div>
        
 
    

    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Classes