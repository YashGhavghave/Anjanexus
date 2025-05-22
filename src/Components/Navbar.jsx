import React from 'react'
import Image from '../assets/Logo.png'

function Navbar() {
  return (
    <div>
  <div
    id="Glow"
    className="h-[10vh] w-full bg-transparent bg-opacity-30 backdrop-blur-lg flex border-b-2 fixed top-0 "
  >
    <div
      id="logo"
      className="flex items-center justify-center h-20 w-65 text-white text-3xl relative left-[6vw] top-2 "
    >
      <img src={Image} alt="Company Logo" className="flex" />
    </div>
    <div className="h-full relative left-[9vw] pl-[18vw] w-[80vw] flex justify-evenly text-white items-center">
      <div className="text-lg cursor-pointer hover:text-gray-300">Home</div>
      <div className="text-lg cursor-pointer hover:text-gray-300">Service</div>
      <div className="text-lg cursor-pointer hover:text-gray-300">Project</div>
      <div className="text-lg cursor-pointer hover:text-gray-300">Contact Us</div>
    </div>
  </div>
</div>

  )
}

export default Navbar
