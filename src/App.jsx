
import './App.css'
import Navbar from './components/navbar'
import CurrentWeather from './components/currentWeather'
import DaysForecast from './components/daysForecast'
import TodaysHighlights from './components/todaysHighlights'
import TodayAt from './components/TodayAt/todayAt'

function App() {

  return (
    <>
      <div className="bg-background h-screen w-screen overflow-hidden md:grid md:grid-cols-3">
        <Navbar />
        <div className="mt-[80px]">
          <CurrentWeather />
          <DaysForecast />
        </div>
        <div className="mt-[80px] col-span-2  overflow-y-auto custom-scrollbar">
          <TodaysHighlights />
          <TodayAt />

        </div>
      </div>
    </>
  )
}

export default App
