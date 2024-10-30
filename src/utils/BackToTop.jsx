import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-4 transition-transform 
      duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 bg-customRed text-black rounded-full 
        shadow-lg transform transition-transform duration-300 
        hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
        style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)" }}
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default BackToTop;