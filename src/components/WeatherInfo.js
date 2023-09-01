import React from 'react';

const WeatherInfo = ({ data }) => {
  if (!data) {
    return <div>Loading weather data...</div>;
  }

  if (!data.main || !data.weather || data.weather.length === 0) {
    return <div>No weather data available.</div>;
  }

  return (
    <div className="weather-info">
      <h2>Weather Information for {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Weather Condition: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;

