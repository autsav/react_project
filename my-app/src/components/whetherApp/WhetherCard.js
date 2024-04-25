// WhetherCard.js
import React from 'react';
import '../../styles/whether/Whether.css'

const WhetherCard = ({ weatherData}) => {

  const { location, temperature, description, icon} = weatherData;
  // const { temp } = main;
  // const { description, icon } = weather[0];
  return (
    <div className="weather-card">
      <div className="location">{location}</div>
      <div className="temperature">{temperature}°C</div>
      <div className="description">{description}</div>
      {/* <img src={`https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png`} alt="weather-icon" className="icon" /> */}
    </div>
  );
};

export default WhetherCard;

