import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex flex-col md:flex-row justify-center">
        {/* About Section */}
        <div className="footer-section about mb-6 md:mb-0 pr-4 max-w-md">
          <img
            src="/assets/logo.png"
            alt="Pharma Logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full"
          />
          <h2 className="logo text-lg font-red-hat font-semibold">
            <div>
              <span>Peregrine Falcon</span>
              <div className="text-xs">Pharmaceuticals PVT LTD</div>
            </div>
          </h2>
          <p className="mt-2 text-sm pr-2 mr-8 text-gray-300">
            Peregrine Falcon Pharmaceuticals Private Limited is
             an active and leading Pharmaceuticals marketing company in West Bengal.
          </p>
          <div className="social-icons flex mt-2">
            <a
              href="https://www.facebook.com/PeregrineFalconPharmaceuticalsPrivateLimited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-customRed transition duration-300 mr-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/" // Update Instagram link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-customRed transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section contact pr-4 ml-8 max-w-md">
          <h3 className="text-lg font-semibold font-red-hat">Contact Us</h3>
          <p className="mt-4 flex items-center text-sm text-gray-300">
            <FiMapPin className="mr-2" />
            <span>
              Corporate office: 
              <a
                href="https://www.google.com/maps?q=12+M+C+Garden+Road,
                +Camellia+Metro+Garden,+LP+31/3/3,+Kolkata,+West+Bengal,+PIN:700030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customBlue"
              >
                12 M C Garden Road, Camellia Metro Garden, LP 31/3/3, Kolkata, West Bengal. PIN: 700030
              </a>
            </span>
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-300">
            <FiPhone className="mr-2" />
            <a
              href="tel:+916297761130"
              className="text-customBlue"
            >
              +91-6297761130
            </a>
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-300">
            <FiMail className="mr-2" />
            <a
              href="mailto:info@peregrinefalcon.in"
              className="text-customBlue"
            >
              info@peregrinefalcon.in
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom p-2 bg-gray-900 text-center mt-4 text-xs">
        <p className="text-gray-300 font-semibold font-red-hat">&copy; 2024 Peregrine 
          Falcon Pharmaceuticals. 
          All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
