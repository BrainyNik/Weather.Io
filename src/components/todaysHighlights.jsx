import formatDateTime from "../utils/formatDateTime";
import { getAirQuality, getAQIBackground } from "../utils/airQuality";
import { AirVent, GaugeIcon, Sunrise, Sunset, Thermometer, View, Music2, AudioLines } from "lucide-react";
import { WiHumidity } from "react-icons/wi";
import moodSuggestions from "../utils/moodSuggestions";
import { Link } from 'react-router-dom';

const TodaysHighlights = ({
    airQualityComponents,
    airQualityIndex,
    sunrise,
    sunset,
    humidity,
    pressure,
    visibility,
    temperature,
    timezone,
    unit,
    weather
}) => {
    const isMetric = unit === 'metric';
    const temperatureUnit = isMetric ? '°C' : '°F';
    const pressureUnit = isMetric ? 'hPa' : 'inHg';
    const visibilityUnit = isMetric ? 'km' : 'mi';
    const aq = getAirQuality(airQualityIndex);

    // Get suggestions based on the current weather
    const suggestions = moodSuggestions[weather] || {};
    let activityIndex = 0;

    if (suggestions.activities && suggestions.activities.length > 0) {
        // Generate a random index within the bounds of the activities array
        activityIndex = Number(Math.floor(Math.random() * suggestions.activities.length));
    }

    return (
        <div className='card-sm'>
            <p className='font-bold text-2xl mb-4'>Today&apos;s Highlights</p>

            <div className='card-variant'>
                <div className='font bold md:text-xl flex items-center justify-between mb-4'>Air Quality Index
                    <div className="flex items-center gap-4">
                        <AirVent className="h-10 w-10 mt-3" />
                        <span className={`${getAQIBackground(airQualityIndex)} px-2 rounded-lg text-white`} >{aq}</span>
                    </div>
                </div>

                <div className='flex items-center justify-between md:text-3xl'>
                    <div>
                        <p className="text-[12px]">{airQualityComponents?.co}<span className='text-[10px] md:text-lg'>CO</span></p>
                        <p className="text-[12px]">{airQualityComponents?.no}<span className='text-[10px] md:text-lg'>NO</span></p>
                    </div>
                    <div>
                        <p className="text-[12px]">{airQualityComponents?.o3}<span className='md:text-lg text-[10px]'>O3</span></p>
                        <p className="text-[12px]">{airQualityComponents?.so2}<span className='md:text-lg text-[10px]'>SO2</span></p>
                    </div>
                    <div>
                        <p className="text-[12px]">{airQualityComponents?.pm2_5}<span className='md:text-lg text-[10px]'>PM 2.5</span></p>
                        <p className="text-[12px]">{airQualityComponents?.pm10}<span className='md:text-lg text-[10px]'>PM 10</span></p>
                    </div>
                    <div>
                        <p className="text-[12px]">{airQualityComponents?.nh3} <span className='md:text-lg text-[10px]'>NH3</span></p>
                        <p className="text-[12px]">{airQualityComponents?.no2} <span className='md:text-lg text-[10px]'>NO2</span></p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
                <div className='card-variant lg:w-1/3'>
                    <p className='card-title'> Sunrise & Sunset</p>
                    <div className='flex flex-col md:text-xl lg:items-center md:justify-around gap-4'>
                        <div className='flex gap-7 items-center'>
                            <Sunrise className="h-8 w-8" />
                            <p className='flex flex-col text-on-surface-variant'>Sunrise <span className='text-3xl md:text-2xl text-on-surface-variant-2'>{formatDateTime(sunrise, timezone, "hh:mm a")}</span></p>
                        </div>
                        <div className='flex items-center gap-7'>
                            <Sunset className='h-8 w-8' />
                            <p className='flex flex-col text-on-surface-variant'>Sunset <span className='text-3xl md:text-2xl text-on-surface-variant-2'>{formatDateTime(sunset, timezone, "hh:mm a")}</span></p>
                        </div>
                    </div>
                </div>

                <div className="card-variant w-full">
                    <p className="card-title">Activities</p>
                    <p className="text-lg mb-2">Current weather: {weather}</p>
                    <p className="text-2xl mb-3">{suggestions.activities[activityIndex].activity} {suggestions.activities[activityIndex].emoji}</p>
                    <Link to={suggestions.youtubeLink} className="cursor pointer" target="_blank">
                        <div className="bg-surface p-3 rounded-lg">
                            <p className="md:text-xl flex items-center gap-1 md:gap-6">
                                <Music2 className="w-6 md:w-8" />
                                {suggestions.music}
                                <AudioLines className="w-6 md:w-8" />
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='card-variant'>
                <p className="card-title">Humidity</p>
                <div className='flex items-center justify-between text-3xl'>
                    <WiHumidity className="h-10 w-10" />
                    <p>{humidity}%</p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">Pressure</p>
                <div className='flex items-center justify-between text-3xl'>
                    <GaugeIcon className="h-10 w-10" />
                    <p>{pressure} <span className='text-xl'>{pressureUnit}</span></p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">Visibility</p>
                <div className='flex items-center justify-between text-3xl'>
                    <View className='h-10 w-10' />
                    <p>{visibility} <span className='text-xl'>{visibilityUnit}</span></p>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">Feels Like</p>
                <div className='flex items-center justify-between text-3xl'>
                    <Thermometer className="w-10 h-10" />
                    <p>{temperature} <span className='text-xl'>{temperatureUnit}</span></p>
                </div>
            </div>
        </div>
    );
}

export default TodaysHighlights;
