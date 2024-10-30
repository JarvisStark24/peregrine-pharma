import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image: "/assets/herosec.jpg",
    title: "Developing Innovative New Therapies...",
    description:
      "Our mission is to build a healthier tomorrow for patients with progressive non-viral liver diseases",
  },
  {
    image: "/assets/hero2.jpg",
    title: "Transforming Healthcare Solutions",
    description:
      "We are dedicated to advancing healthcare technology for better patient outcomes.",
  },
  {
    image: "/assets/hero3.jpg",
    title: "Empowering Patients",
    description:
      "Our innovative treatments focus on empowering patients for a healthier life.",
  },
];

const HeroSection = () => {
  return (
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
                className="text-4xl sm:text-5xl
               text-customBlue font-bold"
              >
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-4">
                {slide.description}
              </p>
              <Link to="/products">
                <button
                  className="px-6 py-3 border border-red-600 rounded-lg
                 text-white hover:bg-red-600 transition duration-300"
                >
                  Discover Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
