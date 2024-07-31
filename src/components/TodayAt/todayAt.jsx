import TodayAtCard from './todayAtCard';
import moon from "../../assets/weather_icons/01n.png"; // Example icon, adjust as needed
import TodayAtCard2 from './todayAtCard2';

const cardData = [
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "03 PM", temperature: 25, icon: moon },
  // Add more card data as needed
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "03 PM", temperature: 25, icon: moon },
  { time: "03 PM", temperature: 25, icon: moon },

];

const TodayAt = () => {


  return (
    <div className='  '>
      <div className="">
        <p className='font-bold text-2xl m-7 text-on-surface-variant-2'>
          Today At
        </p>
      </div>
      <div className='flex items-center  overflow-x-scroll mb-7 custom-scrollbar .hide-scrollbar-arrows pb-2'>

        {cardData.map((data, index) => (

          <TodayAtCard
            time={data.time}
            temperature={data.temperature}
            icon={data.icon}
            key={index}
          />

        ))}

      </div>
      <div className='flex items-center  overflow-x-scroll mb-7 custom-scrollbar .hide-scrollbar-arrows  pb-2'>

        {cardData.map((data, index) => (

          <TodayAtCard2
            time={data.time}
            temperature={data.temperature}
            icon={data.icon}
            key={index}
          />

        ))}

      </div>

    </div>
  );
};

export default TodayAt;
