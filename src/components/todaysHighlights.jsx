/* eslint-disable react/prop-types */
import formatDateTime from "../utils/formatDateTime";
import { getAirQuality, getAQIBackground } from "../utils/airQuality";
import { AirVent, GaugeIcon, Sunrise, Sunset, Thermometer, View } from "lucide-react";

import { WiHumidity } from "react-icons/wi";
const TodaysHighlights = ({ airQualityComponents,
    airQualityIndex,
    sunrise,
    sunset,
    humidity,
    pressure,
    visibility,
    temperature, timezone }) => {

    const aq = getAirQuality(airQualityIndex)
    return (
        <div className='card-sm'>
            <p className='font-bold text-2xl mb-4'>Todays Highlights</p>

            <div className='card-variant '>
                <p className='font bold md:text-xl flex justify-between mb-4'>Air Quality Index <span className={`${getAQIBackground(airQualityIndex)} px-2 rounded-lg text-white`} >{aq}</span></p>

                <div className='flex items-center justify-between md:text-3xl '>
                    <div className="">
                        <AirVent className="h-10 w-10 " />
                    </div>

                    <div className=''>
                        <p>{airQualityComponents?.co} <span className='text-[10px] md:text-lg'>CO</span></p>
                        <p> {airQualityComponents?.no} <span className='text-[10px] md:text-lg'>NO</span></p>
                    </div>
                    <div className=' '>
                        <p>{airQualityComponents?.o3} <span className='md:text-lg text-[10px]'>O3</span></p>
                        <p>{airQualityComponents?.so2} <span className=' md:text-lg text-[10px]'>SO2</span></p>
                    </div>


                    <div className=' '>
                        <p>{airQualityComponents?.pm2_5} <span className='md:text-lg text-[10px]'>PM 2.5</span></p>
                        <p>{airQualityComponents?.pm10} <span className='md:text-lg text-[10px]'>PM 10</span></p>
                    </div>


                    <div className=' '>
                        <p>{airQualityComponents?.nh3} <span className='md:text-lg text-[10px]'>NH3</span></p>
                        <p>{airQualityComponents?.no2} <span className='md:text-lg text-[10px]'>NO2</span></p>

                    </div>
                </div>

            </div>

            <div className='card-variant'>
                <p className='card-title'> Sunrise & Sunset</p>
                <div className='flex md:items-center md:justify-around flex-col md:flex-row gap-4'>
                    <div className='flex gap-7 items-center '>
                        <Sunrise className="h-8 w-8" />
                        <p className='flex flex-col text-on-surface-variant'>Sunrise <span className='text-3xl text-on-surface-variant-2'>{formatDateTime(sunrise, timezone, "hh:mm a")}</span></p>
                    </div>
                    <div className='flex items-center  gap-7'>
                        <Sunset className='h-8 w-8' />
                        <p className='flex flex-col text-on-surface-variant'>Sunset <span className='text-3xl text-on-surface-variant-2'>{formatDateTime(sunset, timezone, "hh:mm a")}</span></p>
                    </div>


                </div>
            </div>

            <div className='card-variant'>
                <p className="card-title">
                    Humidity
                </p>
                <div className='flex items-center justify-between text-3xl'>
                    <WiHumidity className="h-10 w-10" />
                    <p>{humidity}%</p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">
                    Pressure
                </p>
                <div className='flex items-center justify-between text-3xl'>
                    <GaugeIcon className="h-10 w-10" />
                    <p>{pressure}<span className='text-xl'>hPa</span></p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">
                    Visibility
                </p>
                <div className='flex items-center justify-between text-3xl'>
                    <View className='h-10 w-10  ' />
                    <p>{visibility} <span className='text-xl'>km</span></p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">
                    Feels Like
                </p>
                <div className='flex items-center justify-between text-3xl'>
                    <Thermometer className="w-10 h-10" />
                    <p>{temperature} <span className='text-xl'>°c</span></p>
                </div>
            </div>
        </div>
    )
}

export default TodaysHighlights