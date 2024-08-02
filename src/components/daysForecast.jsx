import groupByDay from "../utils/groupByDay";



const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};
const DaysForecast = ({ forecastData, unit }) => {

    const groupForecasts = groupByDay(forecastData.list)



    return (
        <div>
            <p className='m-6 font-bold text-xl text-on-surface-variant'>5 Days Forecast</p>
            <div className='card-sm  overflow-y-scroll max-h-[250px] mb-3 custom-scrollbar'>
                {groupForecasts.slice(0, 5).map((dayForecasts, index) => (
                    <div key={index} className='mb-6'>
                        <p className='font-bold text-lg mb-2'>{`Day ${index + 1}`}</p>
                        {dayForecasts.map((forecast, subIndex) => (
                            <div key={subIndex} className='flex items-center gap-2 mb-4'>
                                <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} className='w-11' />
                                <div className='flex flex-col justify-between w-full text-2xl max-lg:text-lg'>
                                    <p>{Math.round(forecast.main.temp)}&deg;{unit === "metric" ? "C" : "F"}</p>
                                    <p>{formatTime(forecast.dt)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default DaysForecast