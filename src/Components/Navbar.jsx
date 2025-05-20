import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='h-[10vh] w-[100%] bg-black opacity-85 flex'>
        <div>
            <div id='logo' className='flex text-white'>Anjanexus</div>
        </div>
        <div className="h-full w-[70vw] flex justify-evenly text-white items-center ">

        <div className="">Home</div>
        <div className="">Service</div>
        <div className="">Project</div>
        <div className="">Contact Us</div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
