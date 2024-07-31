import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import CurrentWeather from './components/currentWeather'
import DaysForecast from './components/daysForecast'
import TodaysHighlights from './components/todaysHighlights'
import TodayAt from './components/TodayAt/todayAt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-background h-screen w-screen text-white overflow-x-hidden">
        <Navbar/>
        <div className='md:flex '>
          <div>
            <CurrentWeather/>
            <DaysForecast/>
          </div>
          <div>
            <TodaysHighlights/>
            <TodayAt/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
