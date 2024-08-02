import { useState } from 'react'
import logo from "../assets/logo.png"
import { SearchIcon, LocateFixedIcon, ArrowLeft } from 'lucide-react';

const Navbar = ({ setCoord, setSearchQuery, unit, setUnit }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const HandleOnSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      setSearchQuery(search.trim().toLowerCase());
      setCoord(null)
    }
  }

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCoord({ lat: latitude, lon: longitude });
        setSearchQuery("")

        localStorage.setItem("coord", JSON.stringify({ lat: latitude, lon: longitude }))
      })
    }
  }

  const ToggleUnit = () => {
    if (unit === "metric") setUnit("imperial")
    else setUnit("metric")

    localStorage.setItem("unit", JSON.stringify(unit))
  }
  return (
    <div className='flex items-center justify-between p-5 h-[80px] fixed top-0 left-0 w-screen bg-background'>
      <div><img src={logo} alt="" className='object-cover w-[150px]' /></div>
      <div className='flex items-center justify-end md:justify-between gap-4 '>


        <form className='flex items-center  gap-3 bg-surface p-3 rounded-full' onSubmit={HandleOnSubmit}>

          <SearchIcon className='h-7 w-7 text-white hidden md:block' />


          <button onClick={toggleMenu} className='md:hidden'>
            <SearchIcon className='h-7 w-7 text-white md:hidden' />
          </button>


          <input type="text" placeholder='Search city...' value={search} onChange={(e) => setSearch(e.target.value)} className='bg-transparent w-[350px] outline-none hidden md:block text-white' />
        </form>

        <div className='flex items-center  gap-2   cursor-pointer'>
          <button
            onClick={ToggleUnit}
            className='text-on-surface font-bold md:text-lg text-[1rem] bg-surface p-3 w-12 h-12 rounded-full flex items-center justify-center'>
            &deg; {unit === "metric" ? "C" : "F"}</button>
          <button className='flex gap-3  bg-on-surface-variant md:bg-primary p-3 rounded-full hover:bg-primary' onClick={handleGetCurrentLocation}>
            <LocateFixedIcon className='h-7 w-7' />
            <p className='hidden lg:block'>Current location</p>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='fixed inset-0 bg-background  z-50 md:hidden'>
          <div className='flex p-7 border-b-2 border-outline '>
            <button onClick={toggleMenu} className=' text-white'>
              <ArrowLeft className='h-7 w-7' />
            </button>
            <form onSubmit={HandleOnSubmit}>

              <input type="text" placeholder='Search city...' className='bg-transparent text-white text-2xl outline-none p-2 w-10/12 max-w-lg' value={search} onChange={(e) => setSearch(e.target.value)} />

            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar