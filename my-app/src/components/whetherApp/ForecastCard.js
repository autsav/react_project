import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ForecastCard = ({ date, temperature, weatherIcon, description }) => {
  return (
    <Card>
      <Date>{date}</Date>
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
  max-width: 200px;
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

ForecastCard.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ForecastCard;
