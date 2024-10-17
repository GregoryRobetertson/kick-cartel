'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

const Carousel = ({ images, interval = 3000, ctaText, onCtaClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
<img

        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Site!</h2>
        {ctaText && (

          <Link href="/shop">
            <button
            onClick={onCtaClick}
            className="px-6 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-lg  hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            {ctaText}
          </button>
          </Link>
        
        )}
      </div>
    </div>
  );
};

export default Carousel;
