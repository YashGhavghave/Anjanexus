import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import ServicesPage from './Components/Landing/Services';
import Footer from './Components/footer/footer';
import ContactPage from './Components/Landing/Contact';

function App() {
  // Create section refs
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* Navbar receives refs */}
      <Navbar homeRef={homeRef} servicesRef={servicesRef} contactRef={contactRef} />

      {/* Main content */}
      <div className="pt-[0vh]"> {/* Offset for fixed navbar */}
        <div ref={homeRef}>
          <Landing contactRef={servicesRef} /> {/* ← Pass contactRef here */}
        </div>
        <div ref={servicesRef}>
          <ServicesPage />
        </div>
        <div ref={contactRef}>
          <ContactPage />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
