import React from 'react'
import moon from "../assets/weather_icons/01n.png"


const DaysForecast = () => {
  return (
    <div>
        
        <p className='m-6 font-bold text-xl text-on-surface-variant'>5 Days Forecast</p>
        <div className='card-sm'>
            <div className='flex items-center gap-2 mb-4'>
                <img src={moon} alt="" className='w-11'/>
                <div className='flex justify-between w-full text-2xl'>
                    <p>25</p>
                    <p>17 Feb</p>
                    <p>Friday</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mb-4'>
                <img src={moon} alt="" className='w-11'/>
                <div className='flex justify-between w-full text-2xl'>
                    <p>25</p>
                    <p>17 Feb</p>
                    <p>Friday</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mb-4'>
                <img src={moon} alt="" className='w-11'/>
                <div className='flex justify-between w-full text-2xl'>
                    <p>25</p>
                    <p>17 Feb</p>
                    <p>Friday</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DaysForecast