import React from 'react'


const TodayAtCard2 = ({ time, speed, icon }) => {
  return (
    <div className='m-7 p-7 text-2xl flex flex-col items-center justify-between w-[120px] h-[150px] rounded-3xl bg-surface font-bold text-on-surface-variant-2'>
      <p>{time}</p>
      <img src={icon} alt="weather icon" className='w-14'/>
      <p>{speed} km/h</p>
    </div>
  )
}

export default TodayAtCard2