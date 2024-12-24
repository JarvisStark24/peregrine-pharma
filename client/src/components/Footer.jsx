import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter, FaLaptopCode } from "react-icons/fa6";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { ImPowerCord } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900
     to-black text-white p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-12">
  {/* About Section */}
  <div className="footer-section about pr-4 max-w-md">
    <div className="flex items-center space-x-3">
      <Link to="/">
        <img
          src="/assets/logo.png"
          alt="Pharma Logo"
          className="lg:w-120 h-32 md:w-120 md:h-28 object-contain pr-10"
        />
      </Link>
    </div>
    {/* <p className="mt-2 text-sm text-gray-300 max-w-md">
      Peregrine Falcon Pharmaceuticals is a leading pharmaceutical marketing company in West Bengal, dedicated to improving healthcare.
    </p> */}
    <div className="social-icons flex mt-4 space-x-3">
      <a
        href="https://www.facebook.com/PeregrineFalconPharmaceuticalsPrivateLimited"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-violet-600  hover:text-customRed transition duration-300 transform hover:scale-110"
      >
        <FaFacebookF className="text-2xl" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-violet-600  hover:text-customRed transition duration-300 transform hover:scale-110"
      >
        <FaInstagram className="text-2xl" />
      </a>
    </div>
  </div>

  {/* Contact Us Section */}
  <div className="footer-section contact pr-4 max-w-md">
    <h3 className="text-lg font-semibold font-red-hat">Contact Us</h3>
    <p className="mt-4 flex items-center text-sm text-gray-300">
      <FiMapPin className="mr-2 text-lg" />
      <span>
        Corporate office:
        <a
          href="https://www.google.com/maps?q=12+M+C+Garden+Road,+Camellia+Metro+Garden,+LP+31/3/3,+Kolkata,+West+Bengal,+PIN:700030"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600  hover:underline"
        >
          12 M C Garden Road, Camellia Metro Garden, LP 31/3/3, Kolkata, West Bengal. PIN: 700030
        </a>
      </span>
    </p>
    <p className="mt-2 flex items-center text-sm text-gray-300">
      <FiPhone className="mr-2 text-lg" />
      <a href="tel:+916297761130" className="text-violet-600  hover:underline">
        +91-6297761130
      </a>
    </p>
    <p className="mt-2 flex items-center text-sm text-gray-300">
      <FiMail className="mr-2 text-lg" />
      <a href="mailto:info@peregrinefalcon.in" className="text-violet-600  hover:underline">
        info@peregrinefalcon.in
      </a>
    </p>
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
            className="font-medium text-customBlue hover:text-customRed animate-blink ml-1 flex items-center justify-center gap-2"
          >
            <FaGithub className="text-xl" />
            CodeWithJarvis
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <FaLaptopCode className="text-green-300 text-lg md:text-xl" />
            <p className="text-customRed font-semibold text-sm md:text-base">
              Developer:
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/sandikd1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://x.com/MeJarvis_7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
              aria-label="Twitter"
            >
              <FaXTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/code_with.jarvis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandip798/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
