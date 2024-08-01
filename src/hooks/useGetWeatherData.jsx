import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = String(import.meta.env.VITE_API_SECRET);
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const fetchWeatherData = async (location, latLon, units, cancelToken) => {
  if (!location && !latLon) {
    location = "Pune";
  }
  const requests = [];
  if (latLon) {
    const { lat, lon } = latLon;
    requests.push(
      axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`, { cancelToken }),
      axios.get(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`, { cancelToken }),
      axios.get(`${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`, { cancelToken })
    );
  } else if (location) {
    requests.push(
      axios.get(`${BASE_URL}/weather?q=${location}&units=${units}&appid=${API_KEY}`, { cancelToken }),
      axios.get(`${BASE_URL}/forecast?q=${location}&units=${units}&appid=${API_KEY}`, { cancelToken })
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
    const source = axios.CancelToken.source(); // Create a new CancelToken source

    const fetchData = async () => {
      setLoading(true);
      try {
        const [currentWeatherResponse, forecastResponse, airQualityResponse] = await fetchWeatherData(location, latLon, units, source.token);

        setCurrentWeather(currentWeatherResponse.data);
        setForecast(forecastResponse.data);

        if (!latLon && currentWeatherResponse.data) {
          const { lat, lon } = currentWeatherResponse.data.coord;
          const airQualityData = await axios.get(`${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`, { cancelToken: source.token });
          setAirQuality(airQualityData.data);
        } else {
          setAirQuality(airQualityResponse?.data || null);
        }

        setError(null);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled:', err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the request if component unmounts or dependencies change
    return () => {
      source.cancel('Operation canceled by the user.'); // Cancel the request
    };
  }, [location, latLon, units]);

  return [currentWeather, forecast, airQuality, loading, error];
};

export default useWeatherData;
