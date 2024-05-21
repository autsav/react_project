import React, { useState, useEffect } from 'react';
import '../../styles/weather.css';
import Header from './Header';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import ForecastCard from './ForecastCard';
import Footer from './Footer';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Moscow'); // Default city

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      const weather = await weatherResponse.json();

      const forecastResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=YOUR_API_KEY&units=metric`);
      const forecast = await forecastResponse.json();

      setWeatherData(weather);
      setForecastData(forecast);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again later.');
      setLoading(false);
    }
  };

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          {weatherData && <WeatherCard weatherData={weatherData} />}
          {forecastData && <ForecastCard forecastData={forecastData} />}
        </>
      )}
      <Footer />
    </div>
  );
};

export default WeatherApp;
