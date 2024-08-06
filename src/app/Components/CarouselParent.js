import React from 'react';
import Carousel from './Carousel';

const images = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3'
  ];

   export default function CarouselParent(){

  return (
    <div className="p-4 pt-px">
      <Carousel
        images={images}
        interval={3000}
        ctaText="Learn More"
        />
    </div>
  );
};
  