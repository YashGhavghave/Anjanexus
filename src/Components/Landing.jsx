import React from "react";
import LandingVDO from '../assets/Landingvideo.mp4'
import Container_one from "./Landing/Container_one";

const LandingPage = () => {
  return (
  <>
<video
  src={LandingVDO}
  autoPlay
  loop
  muted
  className="w-full h-screen object-cover"
/>
<><Container_one/></>
  </>
  );
};

export default LandingPage;
