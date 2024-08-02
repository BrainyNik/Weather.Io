/* eslint-disable react/prop-types */
import TodayAtCard from './todayAtCard';
import TodayAtCard2 from './todayAtCard2';



function getTodaysWeatherForecast(list, date) {
  const newList = list.filter((ele) => {
    return ele.dt_txt.split(" ")[0] === date;
  })

  return newList
}
const TodayAt = ({ forecastData, timezone, unit }) => {

  const date = new Date().toISOString()

  const todaysForecast = getTodaysWeatherForecast(forecastData.list, date.split("T")[0])

  return (
    <div className='  '>
      <div className="">
        <p className='font-bold text-2xl m-7 text-on-surface-variant-2'>
          Today At
        </p>
      </div>
      <div className='flex items-center  overflow-x-scroll mb-7 custom-scrollbar .hide-scrollbar-arrows pb-2'>

        {todaysForecast.map((data, index) => (

          <TodayAtCard
            secs={data?.dt}
            temperature={data?.main?.temp}
            icon={data?.weather[0]?.icon}
            timezone={timezone}
            key={index}
            unit={unit}
          />

        ))}

      </div>
      <div className='flex items-center  overflow-x-scroll mb-7 custom-scrollbar .hide-scrollbar-arrows  pb-2'>


        {todaysForecast.map((data, index) => (
          <TodayAtCard2
            secs={data?.dt}
            wind={data.wind}
            timezone={timezone}
            key={index}
            unit={unit}
          />

        ))}

      </div>

    </div>
  );
};

export default TodayAt;
