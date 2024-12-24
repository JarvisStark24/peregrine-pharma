import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPills,
  FaBookOpen,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { RiContactsBookFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolling(currentScrollY > 10 && currentScrollY > prevScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          scrolling ? "bg-opacity-90 bg-customRed" : "bg-transparent"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-violet-600 font-red-hat text-white text-sm p-2 flex justify-between items-center">
          <div className="flex items-center space-x-4 pl-4 md:pl-24">
            <FaClock />
            <span>Opening Hours: Mon - Sat 8.00 - 18.00</span>
          </div>
          <div className="flex items-center space-x-2 pr-4 md:pr-24">
            <span>Follow Us:</span>
            <a
              href="https://www.facebook.com/PeregrineFalconPharmaceuticalsPrivateLimited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-customBlue transition duration-300 transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-customBlue transition duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-white p-4 shadow-lg transition-all duration-300 ease-in-out">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img
                  src="/assets/logo.png"
                  alt="Pharma Logo"
                  className="lg:w-120 h-32 md:w-120 md:h-28 object-contain"
                />
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className="md:hidden text-customBlue bg-gray-500 rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-300 focus:outline-none"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <CiMenuFries size={24} />
              )}
            </button>

            {/* Desktop Navbar */}
            <ul className="hidden md:flex items-center font-red-hat space-x-6 text-lg font-semibold tracking-wide">
              <li>
                <Link
                  to="/"
                  className={`hover:text-customRed ${
                    isActive("/") ? "text-customRed font-bold" : "text-violet-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`hover:text-customRed ${
                    isActive("/about-us")
                      ? "text-customRed font-bold"
                      : "text-violet-600"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`hover:text-customRed ${
                    isActive("/products")
                      ? "text-customRed font-bold"
                      : "text-violet-600"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={`hover:text-customRed ${
                    isActive("/contact-us")
                      ? "text-customRed font-bold"
                      : "text-violet-600"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <div className="md:hidden absolute right-2 mt-0 bg-customRed font-red-hat text-white shadow-xl rounded-lg p-4 transition-all duration-500 ease-in-out transform">
              <ul className="space-y-4 text-base font-semibold">
                <li className="flex items-center space-x-2">
                  <IoIosHome className="text-customBlue" />
                  <Link
                    to="/"
                    onClick={toggleMenu}
                    className={`block py-2 hover:text-customRed ${
                      isActive("/") ? "text-customBlue font-bold" : "text-white"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <FaBookOpen className="text-customBlue" />
                  <Link
                    to="/about-us"
                    onClick={toggleMenu}
                    className={`block py-2 hover:text-customRed ${
                      isActive("/about-us")
                        ? "text-customBlue font-bold"
                        : "text-white"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPills className="text-customBlue" />
                  <Link
                    to="/products"
                    onClick={toggleMenu}
                    className={`block py-2 hover:text-customRed ${
                      isActive("/products")
                        ? "text-customBlue font-bold"
                        : "text-white"
                    }`}
                  >
                    Products
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <RiContactsBookFill className="text-customBlue" />
                  <Link
                    to="/contact-us"
                    onClick={toggleMenu}
                    className={`block py-2 hover:text-customRed ${
                      isActive("/contact-us")
                        ? "text-customBlue font-bold"
                        : "text-white"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
