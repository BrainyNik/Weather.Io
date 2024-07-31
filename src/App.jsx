
import './App.css'
import Navbar from './components/navbar'
import CurrentWeather from './components/currentWeather'
import DaysForecast from './components/daysForecast'
import TodaysHighlights from './components/todaysHighlights'
import TodayAt from './components/TodayAt/todayAt'
import useGetWeatherData from './hooks/useGetWeatherData'
function App() {



  return (
    <>
      <div className="bg-background md:h-screen w-screen md:overflow-hidden  md:grid md:grid-cols-3">
        <Navbar />
        <div className="mt-[80px] md:p-0 sm:p-4">
          <CurrentWeather />
          <DaysForecast />
        </div>
        <div className="mt-[80px] md:col-span-2  overflow-y-auto custom-scrollbar">
          <TodaysHighlights />
          <TodayAt />

        </div>
      </div>
    </>
  )
}

export default App
