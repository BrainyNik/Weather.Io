
import './App.css'
import Navbar from './components/navbar'
import CurrentWeather from './components/currentWeather'
import DaysForecast from './components/daysForecast'
import TodaysHighlights from './components/todaysHighlights'
import TodayAt from './components/TodayAt/todayAt'
import useGetWeatherData from './hooks/useGetWeatherData'
import { useState } from 'react'
import { Cloud, Loader2Icon, CrossIcon } from 'lucide-react'
function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [coord, setCoord] = useState(() => localStorage.getItem("coord") ? JSON.parse(localStorage.getItem("coord")) : null);

  const [unit, setUnit] = useState("metric");
  const [currentWeather, forecast, airQuality, loading, error] = useGetWeatherData(searchQuery, coord, unit);

  if (loading) return <div className='h-screen w-screen bg-background flex flex-col text-white items-center justify-center'>

    <Loader2Icon className='h-36 w-36 animate-spin text-white' />

    <h2 className='text-2xl flex gap-1 items-center'><Cloud className='h-10 w-10' /> Fetching Weather Data</h2>
  </div>
  if (error) return <div className='h-screen w-screen bg-background flex gap-3 text-on-surface items-center justify-center  font-bold'> <CrossIcon className='rotate-45 size-16'/><p className='flex flex-col  text-xl'> Oops Something Went Wrong <span className='text-3xl'>Please Try Aain Later</span></p></div>



  return (
    <>
      <div className="bg-background md:h-screen w-screen md:overflow-hidden  md:grid md:grid-cols-3">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setCoord={setCoord} />
        <div className="mt-[80px] md:p-0 sm:p-4 ">
          <CurrentWeather
            temperature={currentWeather?.main?.temp}
            weatherIcon={currentWeather?.weather[0]?.icon}
            weatherDescription={currentWeather?.weather[0]?.description}
            cityName={currentWeather?.name}
            dateTimestamp={currentWeather?.dt}
            timezone={currentWeather?.timezone}

          />
          <DaysForecast forecastData={forecast} />
        </div>
        <div className="mt-[80px] md:col-span-2 overflow-y-auto custom-scrollbar">
          <TodaysHighlights
            airQualityComponents={airQuality?.list[0]?.components}
            airQualityIndex={airQuality?.list[0]?.main?.aqi}
            sunrise={currentWeather?.sys?.sunrise}
            sunset={currentWeather?.sys?.sunset}
            humidity={currentWeather?.main?.humidity}
            pressure={currentWeather?.main?.pressure}
            visibility={currentWeather?.visibility}
            temperature={currentWeather?.main?.temp}
            timezone={currentWeather?.timezone}
          />

          <TodayAt forecastData={forecast} timezone={currentWeather?.timezone} />
        </div>
      </div>
    </>
  )
}

export default App
