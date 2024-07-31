import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { SearchIcon, LocateFixedIcon, ArrowLeft, MapPin } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center justify-between p-5'>
      <div><img src={logo} alt="" className='object-cover w-[150px]'/></div>
      <div className='flex items-center justify-end md:justify-between gap-4 w-7/12'>
        <div className='flex items-center  gap-3 bg-surface p-3 rounded-full'>
          {/* <SearchIcon className='h-7 w-7'/> */}
          <button onClick={toggleMenu} className='md:hidden'>
            <SearchIcon className='h-7 w-7' />
          </button>
          <input type="text" placeholder='Search city...' className='bg-transparent w-[350px] outline-none hidden md:block' />
        </div>
        <div className='flex items-center  gap-1  p-3 rounded-full bg-on-surface-variant md:bg-primary hover:bg-primary cursor-pointer'>
          <button className='flex gap-3 '>
            <LocateFixedIcon className='h-7 w-7'/>
            <p className='hidden lg:block'>Current location</p>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className='fixed inset-0 bg-background     z-50'>
          <div className='flex p-7 border-b-2 border-outline '>
            <button onClick={toggleMenu} className=' text-white'>
              <ArrowLeft className='h-7 w-7' />
            </button>
            <input type="text" placeholder='Search city...' className='bg-transparent text-white text-2xl outline-none p-2 w-10/12 max-w-lg'/>
          </div>

          <div className='p-7 flex gap-3 items-center text-on-surface-variant-2 '>
            <MapPin className=''/>
            <p className='text-body-3 flex flex-col  justify-center'>Pune <span className='text-label-1'>PUN</span></p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar