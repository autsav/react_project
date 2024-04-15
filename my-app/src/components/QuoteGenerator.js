// App.js
import React, { useState, useEffect } from 'react';
import '../styles/quoteGenerator.css';

const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quoteBackground, setQuoteBackground] = useState('#fff');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.quotable.io');
        const data = await response.json();
        const filteredQuotes = data.slice(0, 100);
        setQuotes(filteredQuotes);
        setLoading(false);
        setQuoteBackground('#fff'); // Reset background color
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(randomIndex);
    setQuoteBackground(getRandomColor());
    // playSoundEffect();
  };

  const getNextQuote = () => {
    const nextIndex = (currentQuoteIndex + 1) % quotes.length;
    setCurrentQuoteIndex(nextIndex);
    setQuoteBackground(getRandomColor());
    // playSoundEffect();
  };

  const getPreviousQuote = () => {
    const previousIndex = currentQuoteIndex === 0 ? quotes.length - 1 : currentQuoteIndex - 1;
    setCurrentQuoteIndex(previousIndex);
    setQuoteBackground(getRandomColor());
    // playSoundEffect();
  };

  // const playSoundEffect = () => {
  //   const audio = new Audio('/sound_effect.mp3');
  //   audio.play();
  // };

  const getRandomColor = () => {
    const colors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff',
                    '#f72585', '#b5179e', '#7209b7', '#560bad', '#480ca8',
                    '#00f5d4', '#00d8b8', '#00b295', '#006d5b', '#005245',
                    '#ffa41b', '#ff7d00', '#ff5500', '#ff3d00', '#ff2d00',
                    '#ff9f1c', '#ffbf69', '#ffca95', '#a1e9c5', '#5dd8a6',
                    '#06d6a0', '#34d399', '#5cb5e5', '#6495ed', '#9370db',
                    '#ff6b6b', '#f9a3a4', '#fad2d2', '#b2f7ef', '#a6e3e9',
                    '#c4fb6d', '#62d2a2', '#5e6472', '#7d8597', '#474a52',
                    '#f72585', '#b5179e', '#7209b7', '#560bad', '#480ca8',
                  ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="App" style={{ backgroundColor: quoteBackground }}>
      <div className="quote-card">
        <div className="quote-text">{quotes[currentQuoteIndex].text}</div>
        <div className="quote-author">- {quotes[currentQuoteIndex].author || 'Unknown'}</div>
        <div className="buttons">
          <button onClick={getPreviousQuote}>Previous</button>
          <button onClick={getNextQuote}>Next</button>
          <button onClick={getRandomQuote}>Random</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
