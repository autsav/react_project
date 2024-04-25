// Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Text>Weather App</Text>
      <Text>&copy; 2024</Text>
    </Container>
  );
};

const Container = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Text = styled.p`
  margin: 5px 0;
`;

export default Footer;
