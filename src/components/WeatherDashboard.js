import React, { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInfo';
import './WeatherDashboard.css';

//const API_KEY = 'd5790c10a4a715cdb10e2ecc9aad1669';
//const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=faa0e4dc963193ddeb1fbb767a035f25`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
    if (city) {
      fetchWeatherData();
    }
  }, [city]);
  

  return (
    <div className="weather-dashboard">
      <h1>Weather Station Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default WeatherDashboard;
