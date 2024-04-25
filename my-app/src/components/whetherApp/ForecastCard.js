
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const ForecastCard = ({ date, temperature, weatherIcon, description, onClick, humidity, windSpeed, precipitationChance }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card onClick={onClick}>
      <Date>{date}</Date>
      <Temperature>{temperature}°C</Temperature>
      <WeatherIcon src={weatherIcon} alt={description} />
      <Description>{description}</Description>
      {isExpanded && (
        <Details>
          <DetailItem>Humidity: {humidity}%</DetailItem>
          <DetailItem>Wind Speed: {windSpeed} m/s</DetailItem>
          <DetailItem>Precipitation Chance: {precipitationChance}%</DetailItem>
        </Details>
      )}
      <ExpandButton onClick={toggleExpand}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </ExpandButton>
    </Card>
  );
};

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  max-width: 200px;
  cursor: pointer;
`;

const Date = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Temperature = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px auto;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

const Details = styled.div`
  margin-top: 10px;
`;

const DetailItem = styled.p`
  font-size: 12px;
  color: #999999;
  margin: 5px 0;
`;

const ExpandButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  color: #333333;
  font-size: 12px;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

ForecastCard.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  precipitationChance: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default ForecastCard;
