// Header.js
import React, { useState, useEffect } from 'react';
import '../../styles/whether/header.css'


const Header = () => {
  const [location, setLocation] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchLocationAndTime = async () => {
      try {
        const position = await getCurrentPosition();
        const locationData = await fetchLocation(position.coords.latitude, position.coords.longitude);
        setLocation(locationData);
        const timezone = await getTimezone(position.coords.latitude, position.coords.longitude);
        setCurrentTime(getLocalTime(timezone));
      } catch (error) {
        console.error('Error fetching location and time:', error);
      }
    };

    fetchLocationAndTime();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const fetchLocation = async (latitude, longitude) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`);
    const data = await response.json();
    return data.results[0].formatted_address;
  };

  const getTimezone = async (latitude, longitude) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${Math.floor(Date.now() / 1000)}&key=YOUR_API_KEY`);
    const data = await response.json();
    return data.timeZoneId;
  };

  const getLocalTime = (timezone) => {
    return new Date().toLocaleTimeString('en-US', { timeZone: timezone });
  };

  return (
    <header className="header">
      <div className="left">
        <div className="time">{currentTime}</div>
        <div className="location">{location}</div>
      </div>
      <div className="title">Weather App</div>
      <div className="right">
        <div className="breadcrumb">Home</div>
      </div>
    </header>
  );
};

export default Header;
