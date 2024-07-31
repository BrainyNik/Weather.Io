import React from 'react'


const TodayAtCard = ({ time, temperature, icon }) => {
  return (
    <div className='my-7 p-7 text-xl flex flex-col items-center justify-between w-[120px] h-[150px] rounded-3xl bg-surface font-bold text-on-surface-variant-2'>
      <p>{time}</p>
      <img src={icon} alt="weather icon" className='w-14'/>
      <p>{temperature} &deg;C</p>
    </div>
  )
}

export default TodayAtCard