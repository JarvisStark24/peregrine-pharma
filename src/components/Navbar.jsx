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
        className={`fixed top-0 left-0 right-0 z-20 ${
          scrolling ? "bg-opacity-90" : ""
        }`}
      >
        {/* Top Bar */}
        <div className="bg-customRed font-red-hat text-white text-sm p-2 flex justify-between items-center">
          <div className="flex items-center space-x-4 pl-4 md:pl-24">
            <FaClock />
            <span>Opening Hours: Mon - Sat 8.00 - 18.00</span>
          </div>
          <div className="flex items-center space-x-2 pr-4 md:pr-24">
            <span>Follow Us:</span>
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-gradient-to-r from-white to-customBlue p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img
                  src="/assets/logo.png"
                  alt="Pharma Logo"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full"
                />
              </Link>
              <div>
                <Link to="/">
                  <h1 className="text-lg font-red-hat md:text-2xl font-extrabold">
                    Peregrine Falcon
                  </h1>
                </Link>
                <p className="text-sm font-red-hat font-medium text-gray-500">Pharmaceuticals PVT LTD</p>
              </div>
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className="md:hidden text-gray-700 focus:outline-none"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <CiMenuFries size={24} />
              )}
            </button>

            <ul className="hidden md:flex items-center font-red-hat space-x-6 text-base font-semibold">
              <li>
                <Link
                  to="/"
                  className={`hover:text-customRed ${
                    isActive("/") ? "text-customRed font-bold" : "text-gray-800"
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
                      : "text-gray-800"
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
                      : "text-gray-800"
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
                      : "text-gray-800"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <div
              className="md:hidden absolute right-2 mt-0 bg-customRed font-red-hat
             text-white shadow-lg rounded-lg p-4"
            >
              <ul className="space-y-2 text-base font-semibold">
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
