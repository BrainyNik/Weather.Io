import React, { useState } from 'react';
import TodayAtCard from './todayAtCard';
import moon from "../../assets/weather_icons/01n.png"; // Example icon, adjust as needed

const cardData = [
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "04 PM", temperature: 26, icon: moon },
  { time: "05 PM", temperature: 24, icon: moon },
  { time: "06 PM", temperature: 23, icon: moon },
  { time: "07 PM", temperature: 22, icon: moon },
  { time: "08 PM", temperature: 21, icon: moon },
  // Add more card data as needed
];

const TodayAt = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? cardData.length - 4 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === cardData.length - 4) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='relative w-full'>
      <p className='font-bold text-2xl m-7 text-on-surface-variant-2'>
        Today At
      </p>
      <div className='relative overflow-hidden'>
        <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {cardData.map((data, index) => (
            <div key={index} className='w-1/4 flex justify-center'>
              <TodayAtCard 
                time={data.time}
                temperature={data.temperature}
                icon={data.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200'>
        Prev
      </button>
      <button onClick={nextSlide} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200'>
        Next
      </button>
    </div>
  );
};

export default TodayAt;
