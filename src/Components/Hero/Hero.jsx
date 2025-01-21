import React from 'react';
import HeroImg from '../../assets/1.png'

function Hero() {
  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]'>
        {/* Text section */}
         <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 pb-10 md:p-0'>
            <h1 className='text-4xl lg:text-6xl font-semibold'>
                Delicious Food Is Waiting For You
            </h1>
            <p className=''>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt corporis unde doloremque voluptatum sed? Rem veritatis corporis ipsam quaerat ea?
            </p>
            <div className='flex gap-4 items-center md:justify-start justify-center'>
                <button className='primary-btn hover:scale-105 duration-200'>Food Menu</button>
                <button className='secondary-btn hover:scale-105 duration-200'>Book Now</button>
            </div>
         </div>

        {/* Image section */}
        <div className='flex flex-col justify-center'>
            <img src={HeroImg} alt="" 
            className='animate-spin-slow img-shadow w-[420px] mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default Hero
