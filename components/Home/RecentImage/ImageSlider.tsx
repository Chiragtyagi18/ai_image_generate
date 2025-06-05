'use client';

import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const images = [
  '/images/r1.jpg',
  '/images/r2.jpg',
  '/images/r3.jpg',
  '/images/r4.jpg',
  '/images/r5.jpg',
  '/images/r6.jpg',
];

const ImageSlider = () => {
  return (
    <div>
      <Carousel
        arrows
        responsive={responsive}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={1000}
        keyBoardControl
      >
        {images.map((src, index) => (
          <div key={index} className="p-4">
            <div className="h-[400px] relative">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
