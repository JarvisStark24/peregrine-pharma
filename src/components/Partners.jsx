import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Partners = () => {
  return (
    <div
      className="bg-gradient-to-r from-customBlue via-gray-300
     to-customRed py-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-red-hat text-3xl font-extrabold text-gray-800 mb-4">
          Our Partners
        </h2>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          interval={2000}
          className="relative"
        >
          <div className="flex justify-center items-center space-x-4 p-4">
            <div className="flex justify-center items-center">
              <img
                src="/assets/lifevision.png"
                alt="Lifevision Healthcare"
                className="h-16 md:h-20 opacity-90"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/assets/theon.png"
                alt="Theon"
                className="h-16 md:h-20 opacity-90"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/assets/unique.png"
                alt="Unique Biotech"
                className="h-16 md:h-20 opacity-90"
              />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 p-4">
            <div className="flex justify-center items-center">
              <img
                src="/assets/united.png"
                alt="United"
                className="h-16 md:h-20 opacity-90"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/assets/jmlab.png"
                alt="JMLab"
                className="h-16 md:h-20 opacity-90"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/assets/lifecare.png"
                alt="Lifecare"
                className="h-16 md:h-20 opacity-90"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Partners;
