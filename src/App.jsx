import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import TopList from './Components/TopList/TopList'
import BgImage from '../src/assets/2.png'
import Banner from './Components/Banner/Banner'
import OurService from './Components/OurService/OurService'
import Footer from './Components/Footer/Footer'

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundReapeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const App = () => {
  return (
  <div style={bgStyle} className='overflow-x-hidden'>
     <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
     <Navbar />
     <Hero />
     <TopList />
     <Banner />
     <OurService />
     <Footer/>
     </div>
  </div>
  )
}

export default App