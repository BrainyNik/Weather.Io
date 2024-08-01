import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = String(import.meta.env.VITE_API_SECRET)
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const fetchWeatherData = async (location, latLon, units) => {
  if (!location && !latLon) {
    location = "Pune";
  }
  const requests = [];
  if (latLon) {
    const { lat, lon } = latLon;
    requests.push(
      axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`),
      axios.get(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`),
      axios.get(`${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    );
  } else if (location) {
    requests.push(
      axios.get(`${BASE_URL}/weather?q=${location}&units=${units}&appid=${API_KEY}`),
      axios.get(`${BASE_URL}/forecast?q=${location}&units=${units}&appid=${API_KEY}`)
    );
  }

  return Promise.all(requests);
};

const useWeatherData = (location, latLon, units = 'metric') => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [currentWeatherResponse, forecastResponse, airQualityResponse] = await fetchWeatherData(location, latLon, units);

        setCurrentWeather(currentWeatherResponse.data);
        setForecast(forecastResponse.data);

        if (!latLon && currentWeatherResponse.data) {
          const { lat, lon } = currentWeatherResponse.data.coord;
          const airQualityData = await axios.get(`${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
          setAirQuality(airQualityData.data);
        } else {
          setAirQuality(airQualityResponse?.data || null);
        }

        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location, latLon, units]);

  return [currentWeather, forecast, airQuality, loading, error];
};

export default useWeatherData;
