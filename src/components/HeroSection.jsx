import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { slides } from "../data/HeroSecData";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative flex items-center justify-center 
    bg-cover bg-center text-white -z-20 overflow-hidden mt-4"
      >
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          className="w-full h-96"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.image}
                alt="Hero"
                className="object-cover object-center 
            h-96 w-full"
              />
              <div
                className="absolute inset-0 flex flex-col items-center 
            justify-center bg-black bg-opacity-50 p-12"
              >
                <h1
                  className="text-4xl font-red-hat sm:text-5xl
               text-customBlue font-bold"
                >
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 mb-4">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default HeroSection;
