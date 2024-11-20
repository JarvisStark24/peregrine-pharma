import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/HeroSection.css"; 
import { slides } from "../data/HeroSecData";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        className="carousel-wrapper"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt="Hero"
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
