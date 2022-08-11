import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
  } from 'reactstrap';

  const CoatOfArmsSlide = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const items = args.items;
    const cityNames = args.cityNames;
    
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

    //console.log(args);
    const slides = items.map((item, i, {length}) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item}
          className="row mx-auto"
        >
          <a className="d-inline-flex justify-content-center align-middle col-5 position-relative" href="/chain">
            <img src={item} class="coat-of-arms" alt="..." title={cityNames[i]}/>
          </a>
          <a className="d-inline-flex justify-content-center align-middle col-2"  href="/chain">
            <img src={items[(i + 1) % length]} class="coat-of-arms" alt="..." title={cityNames[(i + 1) % length]}/>
          </a>
          <a className="d-inline-flex justify-content-center align-middle col-5" href="/chain">
            <img src={items[(i + 2) % length]} class="coat-of-arms" alt="..." title={cityNames[(i + 2) % length]}/>
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
        interval={6000}
        slide={false}
        style={{background:"rgba(127,127,128,0.1)"}}
        className="bg-dark bg-opacity-10 carousel-fade carousel-coats rounded-3 my-4"
      >
        {slides}
      <a class="carousel-control-prev"  role="button" tabIndex={0} style={{cursor: "pointer"}} onClick={previous}>
        <span><i class="bi bi-arrow-left" style={{color: 'black'}}></i></span>
      </a>
      <a class="carousel-control-next" role="button" tabIndex={0} style={{cursor: "pointer"}} onClick={next}>
        <span><i class="bi bi-arrow-right" style={{color: 'black'}}></i></span>
      </a>
      </Carousel>
    );
  }
  
  export default CoatOfArmsSlide;