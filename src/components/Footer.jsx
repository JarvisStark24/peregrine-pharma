import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { ImPowerCord } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-8">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* About Section */}
        <div className="footer-section about mb-6 md:mb-0 pr-4 max-w-md">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="/assets/logo.png"
                alt="Pharma Logo"
                className="lg:w-120 h-32 md:w-120 md:h-28 object-contain"
              />
            </Link>
          </div>
          <p className="mt-2 text-sm text-gray-300 max-w-md">
            Peregrine Falcon Pharmaceuticals is a leading pharmaceutical marketing company in West Bengal, dedicated to improving healthcare.
          </p>
          <div className="social-icons flex mt-4 space-x-3">
            <a
              href="https://www.facebook.com/PeregrineFalconPharmaceuticalsPrivateLimited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-customRed transition duration-300 transform hover:scale-110"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/" // Update Instagram link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-customRed transition duration-300 transform hover:scale-110"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section contact pr-4 ml-8 max-w-md">
          <h3 className="text-lg font-semibold font-red-hat">Contact Us</h3>
          <p className="mt-4 flex items-center text-sm text-gray-300">
            <FiMapPin className="mr-2 text-lg" />
            <span>
              Corporate office:
              <a
                href="https://www.google.com/maps?q=12+M+C+Garden+Road,+Camellia+Metro+Garden,+LP+31/3/3,+Kolkata,+West+Bengal,+PIN:700030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customBlue hover:underline"
              >
                12 M C Garden Road, Camellia Metro Garden, LP 31/3/3, Kolkata, West Bengal. PIN: 700030
              </a>
            </span>
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-300">
            <FiPhone className="mr-2 text-lg" />
            <a href="tel:+916297761130" className="text-customBlue hover:underline">
              +91-6297761130
            </a>
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-300">
            <FiMail className="mr-2 text-lg" />
            <a href="mailto:info@peregrinefalcon.in" className="text-customBlue hover:underline">
              info@peregrinefalcon.in
            </a>
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center mt-8 gap-8">
        <div className="w-full sm:w-96 md:w-[28rem] lg:w-[34rem]">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src="/assets/compassion.jpg"
            alt="Compassion"
          />
        </div>
        <div className="w-full sm:w-96 md:w-[28rem] lg:w-[34rem]">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src="/assets/thank.png"
            alt="Thank You"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-center mt-8 text-xs">
        <p className="text-gray-300 font-semibold font-red-hat">
          &copy; 2024 Peregrine Falcon Pharmaceuticals. All Rights Reserved.
        </p>
        <div className="text-gray-400 mt-2 font-light">
          Powered by
          <ImPowerCord className="inline-block ml-2 mr-2 text-xl text-customBlue" />
          <a
            href="https://github.com/JarvisStark24"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-500 animate-blink ml-1"
          >
            Code With Jarvis
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
