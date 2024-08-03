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
    pressure, // in hPa
    visibility, // in meters
    temperature, // in Kelvin
    timezone,
    unit,
    weather
}) => {
    const isMetric = unit === 'metric';
    const temperatureUnit = isMetric ? '°C' : '°F';
    const pressureUnit = isMetric ? 'hPa' : 'inHg';
    const visibilityUnit = isMetric ? 'km' : 'mi';

    // Convert units

    const pressureInInHg = pressure * 0.02953;
    const visibilityInKm = visibility / 1000;

    const temperatureDisplay = isMetric ? temperature : temperature
    const pressureDisplay = isMetric ? pressure.toFixed(1) : pressureInInHg.toFixed(1);
    const visibilityDisplay = isMetric ? visibilityInKm.toFixed(1) : (visibility / 1609.34).toFixed(1); // Convert meters to miles

    const aq = getAirQuality(airQualityIndex);

    // Get suggestions based on the current weather
    const suggestions = moodSuggestions[weather] || {};
    let activityIndex = 0;

    if (suggestions.activities && suggestions.activities.length > 0) {
        activityIndex = Number(Math.floor(Math.random() * suggestions.activities.length));
    }

    // Define messages based on ranges
    const getHumidityMessage = (humidity) => {
        if (humidity > 80) return "High humidity; risk of mold and mildew.";
        if (humidity > 60) return "Moderate humidity; may feel damp.";
        return "Low humidity; air may feel dry.";
    };

    const getPressureMessage = (pressure) => {
        if (pressure < 1000) return "Low pressure; potential for stormy weather.";
        if (pressure > 1020) return "High pressure; generally fair weather.";
        return `Normal pressure;
         typical weather conditions.`;
    };

    const getVisibilityMessage = (visibility) => {
        if (visibility < 1) return "Low visibility; caution advised for travel.";
        if (visibility < 5) return "Moderate visibility; good for most activities.";
        return "High visibility; clear conditions.";
    };

    const getTemperatureMessage = (temperature) => {
        if (temperature > 30) return "Hot weather; stay hydrated and cool.";
        if (temperature < 0) return "Cold weather; dress warmly.";
        return "Mild weather; generally comfortable.";
    };

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
                        <p className="md:text-lg text-[12px]">{airQualityComponents?.co}<span className='text-[10px] md:text-lg'>CO</span></p>
                        <p className="md:text-lg text-[12px]">{airQualityComponents?.no}<span className='text-[10px] md:text-lg'>NO</span></p>
                    </div>
                    <div>
                        <p className="md:text-lg text-[12px]">{airQualityComponents?.o3}<span className='md:text-lg text-[10px]'>O3</span></p>
                        <p className="md:text-lg text-[12px]">{airQualityComponents?.so2}<span className='md:text-lg text-[10px]'>SO2</span></p>
                    </div>
                    <div>
                        <p className="md:text-lg text-[12px]">{airQualityComponents?.pm2_5}<span className='md:text-lg text-[10px]'>PM 2.5</span></p>
                        <p className="md:text-lg text-[12px]">{airQualityComponents?.pm10}<span className='md:text-lg text-[10px]'>PM 10</span></p>
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
                <div className='flex flex-col md:flex-row items-center  justify-between text-3xl'>
                    <WiHumidity className="h-10 w-10" />
                    <div className="flex flex-col items-center gap-1 ">
                        <p>{humidity}%</p>
                        <p className="text-sm text-gray-500">{getHumidityMessage(humidity).split(";")[0]}</p>
                        <p className="text-sm text-gray-500">{getHumidityMessage(humidity).split(";")[1]}</p>

                    </div>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">Pressure</p>
                <div className='flex flex-col md:flex-row items-center  justify-between text-3xl'>
                    <GaugeIcon className="h-10 w-10" />
                    <div className="flex flex-col items-center gap-1 ">
                        <p>{pressureDisplay} <span className='text-xl'>{pressureUnit}</span></p>
                        <p className="text-sm text-gray-500">{getPressureMessage(pressure).split(";")[0]}</p>
                        <p className="text-sm text-gray-500">{getPressureMessage(pressure).split(";")[1]}</p>

                    </div>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">Visibility</p>
                <div className='flex flex-col md:flex-row items-center  justify-between text-3xl'>
                    <View className='h-10 w-10' />
                    <div className="flex flex-col items-center gap-1 ">

                        <p>{visibilityDisplay} <span className='text-xl'>{visibilityUnit}</span></p>
                        <p className="text-sm text-gray-500">{getVisibilityMessage(visibility).split(";")[0]}</p>
                        <p className="text-sm text-gray-500">{getVisibilityMessage(visibility).split(";")[1]}</p>

                    </div>
                </div>
            </div>
            <div className='card-variant'>
                <p className="card-title">Feels Like</p>
                <div className='flex flex-col md:flex-row items-center  justify-between text-3xl'>
                    <Thermometer className="w-10 h-10" />
                    <div className="flex flex-col items-center gap-1 ">
                        <p>{temperatureDisplay} <span className='text-xl'>{temperatureUnit}</span></p>
                        <p className="text-sm text-gray-500">{getTemperatureMessage(temperatureDisplay).split(";")[0]}</p>
                        <p className="text-sm text-gray-500">{getTemperatureMessage(temperatureDisplay).split(";")[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodaysHighlights;
