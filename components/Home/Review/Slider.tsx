"use client"

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};


const Slider = () => {
  return (
    <Carousel
            arrows
            responsive={responsive}
            ssr
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
          >
            <div>
                <ReviewCard image="/images/u1.jpg" name="John Doe" role="Engineer" />
            </div>
            <div>
                <ReviewCard image="/images/u2.jpg" name="Jessica Doe" role="Content Creator" />
            </div>
            <div>
                <ReviewCard image="/images/u3.jpg" name="Jason Doe" role="Web Developer" />
            </div>
          </Carousel>
  )
}

export default Slider
