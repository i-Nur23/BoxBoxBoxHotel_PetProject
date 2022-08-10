import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
  } from 'reactstrap';

  const CoatOfArmsSlide = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const items = args.items;
    
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item}
        >
          <a href="/chain">
            <img src={item} class="d-block col-4 coat-of-arms" alt="..."/>
          </a>
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        id="carousel-coats"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
        {...args}
        style={{background:"rgba(127,127,128,0.1)"}}
        className="d-flex justify-content-center py-1 bg-dark bg-opacity-10"
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    );
  }
  
  export default CoatOfArmsSlide;