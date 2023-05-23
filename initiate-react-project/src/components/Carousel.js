import React, { useState } from 'react';
import "../styles/Carousel.css"
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"

function Carousel ({items}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const currentItem = items[currentIndex];

  return (
    <div className="carousel">
      <TfiAngleLeft onClick={handlePrevious} className='carousel-arrow'/>
      <div className="carousel-content">
        <h2>{currentItem.title}</h2>
        <img src={currentItem.img}></img>
        <p>{currentItem.desc}</p>
      </div>
      <TfiAngleRight onClick={handleNext} className='carousel-arrow'/>
    </div>
  );
};

export default Carousel;
