// src/components/CarouselItem.js
import React from 'react';

const CarouselItem = ({ item, selected, onClick }) => {
  return (
    <div className={`carousel-item ${selected ? 'selected' : ''}`} onClick={onClick}>
      {/* Your item content goes here */}
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CarouselItem;
