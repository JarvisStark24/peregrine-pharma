import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Array of objects with image and text
const slides = [
  {
    image: '/assets/herosec.jpg',
    title: 'Developing Innovative New Therapies...',
    description: 'Our mission is to build a healthier tomorrow for patients with progressive non-viral liver diseases',
  },
  {
    image: '/assets/hero2.jpg',
    title: 'Transforming Healthcare Solutions',
    description: 'We are dedicated to advancing healthcare technology for better patient outcomes.',
  },
  {
    image: '/assets/hero3.jpg',
    title: 'Empowering Patients',
    description: 'Our innovative treatments focus on empowering patients for a healthier life.',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative flex items-center justify-center
     bg-cover bg-center bg-no-repeat text-white overflow-hidden -mt-20">
      {/* Negative margin top to pull it up */}
      <img 
        src={slides[currentSlide].image}
        alt="Hero"
        className="absolute w-full h-full object-cover object-center blur-sm"
      />
      <div className="relative z-20 text-center max-w-lg p-12">
        <h1 className="text-4xl sm:text-5xl text-cyan-500 font-bold">{slides[currentSlide].title}</h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-4">{slides[currentSlide].description}</p>
        <Link to="/products">
          <button 
            className="px-6 py-3 border border-red-600 rounded-lg text-white hover:bg-red-600 transition duration-300"
          >
            Discover Now
          </button>
        </Link>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-400'} cursor-pointer transition duration-300`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
