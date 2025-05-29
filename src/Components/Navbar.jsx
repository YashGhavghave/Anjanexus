import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ homeRef, servicesRef, contactRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // close menu on mobile after click
  };

  return (
    <div
      id="Glow"
      className="fixed top-0 left-0 z-50 w-full bg-black bg-opacity-50 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex justify-between items-center h-[10vh] px-[6vw]">
        {/* Logo Section - Preserved as per your original code */}
        <div
  id="logo"
  className="flex items-center justify-center h-full w-auto text-white text-3xl font-bold tracking-wide"
>
  AnjaNexus
</div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-white items-center pr-[4vw]">
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <X size={28} onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-black bg-opacity-90 text-white py-4 px-6 space-y-4">
          <div onClick={() => scrollToSection(homeRef)} className="cursor-pointer hover:text-gray-300">
            Home
          </div>
          <div onClick={() => scrollToSection(servicesRef)} className="cursor-pointer hover:text-gray-300">
            Service
          </div>
          <div onClick={() => scrollToSection(contactRef)} className="cursor-pointer hover:text-gray-300">
            Contact Us
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
