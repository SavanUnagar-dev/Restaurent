import React from 'react';
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";


const OurService = () => {
  return (
   <>
   <div className='container'>
     {/* Header secton */}
     <div className="text-center">
        <h1 className='text-4xl font-semibold'>Our Services</h1>
     </div>
     {/* icon section */}
     <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12'>
        <div className='flex justify-center items-center gap-3 hover:scale-100 duration-200 hover:text-gray-700 cursor-pointer'>
           <FaMobileScreen  className='text-3xl '/>
           <p className='text-xl font-semibold'>Online Booking</p>
        </div>
        <div className='flex justify-center items-center gap-3 hover:scale-100 duration-200 hover:text-gray-700 cursor-pointer'>
           <MdOutlineFastfood className='text-3xl'/>
           <p className='text-xl font-semibold'>Fast Food</p>
        </div>
        <div className='flex justify-center items-center gap-3 hover:scale-100 duration-200 hover:text-gray-700 cursor-pointer'>
            <MdFoodBank  className='text-3xl'/>
            <p className='text-xl font-semibold'>helthy Food</p>
        </div>
        <div className='flex justify-center items-center gap-3 hover:scale-100 duration-200 hover:text-gray-700 cursor-pointer'>
        <CiDeliveryTruck  className='text-3xl'/>
        <p className='text-xl font-semibold'>Delivry</p>
        </div>
     </div>
   </div>
   </>
  )
}

export default OurService
