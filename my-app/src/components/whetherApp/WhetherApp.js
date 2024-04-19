// App.js
import React, { useState, useEffect } from 'react';
import '../../styles/whether.css';
import Header from './Header';
import SearchBar from './SearchBar';

const WhetherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`API_ENDPOINT`);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again later.');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      {/* Header */}
      {/* Search Bar */}
      {/* Weather Card */}
      {/* Forecast Cards */}
      {/* Globe Component */}
      {/* Footer */}
    </div>
  );
};

export default WhetherApp;
