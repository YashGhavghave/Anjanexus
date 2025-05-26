import React from 'react';
import Logo from '../assets/Logo.png';

function Navbar({ homeRef, servicesRef, contactRef }) {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="Glow"
      className="absolute top-0 left-0 z-50 h-[10vh] w-full bg-black bg-opacity-50 backdrop-blur-md border-b border-white/10 flex"
    >
<div
        id="logo"
        className="flex items-center justify-center h-full w-auto text-white text-3xl ml-[6vw]"
      >
        <img src={Logo} alt="Logo" className="h-45" />
      </div>

      {/* Navigation Links */}
      <div className="h-full ml-[9vw] pl-[18vw] w-[70vw] flex justify-evenly text-white items-center">
        <div
          onClick={() => scrollToSection(homeRef)}
          className="text-md cursor-pointer hover:text-gray-300"
        >
          Home
        </div>
        <div
          onClick={() => scrollToSection(servicesRef)}
          className="text-md cursor-pointer hover:text-gray-300"
        >
          Service
        </div>
        <div
          onClick={() => scrollToSection(contactRef)}
          className="text-md cursor-pointer hover:text-gray-300"
        >
          Contact Us
        </div>
      </div>
    </div>
  );
}

export default Navbar;
