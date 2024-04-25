// App.js
import React, { useState, useEffect } from 'react';
import '../../styles/whether.css';
import Header from './Header';
import SearchBar from './SearchBar';
import WhetherCard from './WhetherCard';
import ForecastCard from './ForecastCard';
import Footer from './Footer';
// import Globe from './Globe';

const WhetherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  console.log(weatherData)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={4e54b83ea34b6fce68bcf27084697126}`);
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
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : weatherData ? (
        <WhetherCard weatherData={weatherData} />
      ) : null}
      {/* Weather Card */}
      {/* <WhetherCard
          location={weatherData.location}
          temperature={weatherData.temperature}
          description={weatherData.description}
          icon={weatherData.icon}
         /> */}
         <ForecastCard />
         {/* <Globe /> */}
      {/* Forecast Cards */}
      {/* Globe Component */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhetherApp;
