import React from 'react'


const TodayAtCard2 = ({ time, speed, icon }) => {
  return (
    <div className='rounded-3xl bg-surface font-bold text-on-surface-variant-2 p-4 min-w-[120px] text-center mx-4'>
      <p>{time}</p>
      <img src={icon} alt="weather icon" className='w-14 h-14 mx-auto' />
      <p>{speed} km/h</p>
    </div>
  )
}

export default TodayAtCard2