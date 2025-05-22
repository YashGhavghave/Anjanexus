import React from "react";
import LandingVDO from '../assets/Landingvideo.mp4'

const LandingPage = () => {
  return (
  <>
  <video 
  src={LandingVDO} 
  className="h-screen w-full bg-black object-cover" 
  autoPlay 
  muted 
  loop
/>

  </>
  );
};

export default LandingPage;
