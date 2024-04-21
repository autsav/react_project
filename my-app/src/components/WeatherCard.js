import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WeatherCard = ({ location, temperature, weatherIcon, description }) => {
  return (
    <Card>
      <Location>{location}</Location>
      <Temperature>{temperature}°C</Temperature>
      <WeatherIcon src={weatherIcon} alt={description} />
      <Description>{description}</Description>
    </Card>
  );
};

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  max-width: 300px;
`;

const Location = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Temperature = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px auto;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666666;
  margin: 0;
`;

WeatherCard.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WeatherCard;
