import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Classes from '../components/Classes'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Classes/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home