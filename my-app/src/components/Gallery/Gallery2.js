// Gallery.js
import React, { useState, useEffect } from 'react';
import Image from './Image';
import Search from './Search';

const Gallery2 = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch images when the component mounts
    fetchImages();
  }, []);

  const fetchImages = async () => {
    // Fetch images from an API
    const response = await fetch(`https://i.imgur.com/okTpbHhm.jpg`);
    const data = await response.json();
    setImages(data);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    fetchImages();
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="gallery">
        {images.map((image) => (
          <Image key={image.id} url={image.url} />
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
