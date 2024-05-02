// Image.js
import React from 'react';

const Image = ({ url }) => {
  return (
    <div className="image">
      <img src={url} alt="Gallery" />
    </div>
  );
};

export default Image;
