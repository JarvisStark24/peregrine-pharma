import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/HeroSection.css"; 
import { slides } from "../data/HeroSecData";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="hero-section relative">
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
          <div key={index} className="relative" data-aos="fade-up">
            {/* Image and gradient overlay */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="carousel-image object-cover w-full h-full"
            />
            <div className="carousel-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-50"></div>

            {/* Text overlay */}
            <div className="absolute bottom-20 left-10 text-white z-10">
              <h2 className="text-4xl font-extrabold">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
