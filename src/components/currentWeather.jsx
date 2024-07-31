import React from 'react'
import sun from "../assets/weather_icons/01d.png"
import { Calendar, MapPin } from 'lucide-react'

const CurrentWeather = () => {
  return (
    <div className='card-sm'>
        <p className='text-xl'>Now</p>
        <div className='flex items-center gap-[10rem] md:flex-col md:gap-0'>
            <p className='text-8xl'>25°c</p>
            <img src={sun} alt="" />
        </div>
        <p className='text-xl border-b border-outline py-3'>Overcast Clouds</p>
        <p className='py-3 flex items-center gap-4 text-xl'><Calendar/> Thursday 16, Feb</p>
        <p className='py-3 flex items-center gap-4 text-xl'><MapPin/> Pune</p>

    </div>
  )
}

export default CurrentWeather