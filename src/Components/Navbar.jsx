import React from 'react';
import Image from '../assets/Logo.png';

function Navbar() {
  return (
    <div
      id="Glow"
      className="fixed top-0 left-0 z-50 h-[10vh] w-full bg-transparent backdrop-blur-md border-b border-white/10 flex"
    >
      <div
        id="logo"
        className="flex items-center justify-center h-full w-auto text-white text-3xl ml-[6vw]"
      >
        <img src={Image} alt="Company Logo" className="h-45" />
      </div>
      <div className="h-full ml-[9vw] pl-[18vw] w-[80vw] flex justify-evenly text-white items-center">
        <div className="text-md cursor-pointer hover:text-gray-300">Home</div>
        <div className="text-md cursor-pointer hover:text-gray-300">Service</div>
        <div className="text-md cursor-pointer hover:text-gray-300">Project</div>
        <div className="text-md cursor-pointer hover:text-gray-300">Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar;
