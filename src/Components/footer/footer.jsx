import React from 'react';
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-2">
          <img src={logo} alt="AnjaNexus Logo" className="w-32 h-auto" />
          <p className="text-sm text-gray-400">Empowering Projects through Tech & Design</p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Development</a></li>
            <li><a href="#" className="hover:text-white transition">Project Designing</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        {/* <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2 text-sm">
            {/* <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li> */}
          {/* </ul> */}
        {/* </div> */} 
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} AnjaNexus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
