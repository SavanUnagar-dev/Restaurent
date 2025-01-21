import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
 <>
  <div>
    <hr className='mt-10'/>
    <div className="container mt-5">
        <h1 className='text-3xl font-semibold my-2'>Social Media</h1>
      <div className='text-3xl flex gap-6'>
            <FaInstagram/>
            <FaYoutube/>
            <FaLinkedin/>
         </div>
    </div>
  </div>
 </>
)
}

export default Footer