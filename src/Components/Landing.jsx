import React from "react";
import LandingVDO from '../assets/Landingvideo.mp4'
import Container_one from "./Landing/Container_one";

const LandingPage = () => {
  return (
  <>
  <div className="h-screen w-full flex items-center justify-evenly relative border-r-red-600 bg-[url(https://cdn.pixabay.com/photo/2025/04/30/05/57/bay-9568512_1280.jpg)] bg-fixed  bg-cover bg-no-repeat contrast-100">
    <div className=" top-0 left-0 z-50 h-[40vh] w-[60vw] bg-transparent bg-opacity-50 backdrop-blur-md border-b border-white/10 flex items-center justify-evenly">

    <h1 className="flex justify-evenly text-5xl relative text-white ">Welcome to AnjaNexus <br/></h1>
    </div>
 </div>
  </>
  );
};

export default LandingPage;
