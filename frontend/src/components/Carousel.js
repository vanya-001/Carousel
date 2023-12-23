// src/components/Carousel.js
import React, { useState } from 'react';
import CarouselItem from './CarouselItems';
import data from '../data';

const Carousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const rotateCarousel = (direction) => {
    const totalItems = data.length;
    let newIndex;

    if (direction === 'next') {
      newIndex = (selectedItem + 1) % totalItems;
    } else {
      newIndex = (selectedItem - 1 + totalItems) % totalItems;
    }

    setSelectedItem(newIndex);
  };

  return (
    <div className="carousel">
      {data.map((item, index) => (
        <CarouselItem
          key={index}
          item={item}
          selected={index === selectedItem}
          onClick={() => handleItemClick(index)}
        />
      ))}
      <button className="arrow arrow-left" onClick={() => rotateCarousel('prev')}>
        &lt;
      </button>
      <button className="arrow arrow-right" onClick={() => rotateCarousel('next')}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
