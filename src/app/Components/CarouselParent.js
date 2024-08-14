import React from 'react';
import Carousel from './Carousel';


const images = [
    '/images/heroimg1.jpeg/',
    '/images/heroimg2.jpeg/',
    '/images/heroimg3.jpeg/'
  ];

   export default function CarouselParent(){

  return (
    <div className="p-4 pt-px">
      <Carousel
        images={images}
        interval={5000}
        ctaText="Shop"
        />
    </div>
  );
};
  