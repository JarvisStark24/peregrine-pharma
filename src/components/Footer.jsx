import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex flex-col md:flex-row justify-center">
        {/* About Section */}
        <div className="footer-section about mb-6 md:mb-0 pr-4 max-w-md">
          <h2 className="logo text-lg font-semibold">
            <div>
              <span>Peregrine Falcon</span>
              <div className="text-xs">Pharmaceuticals PVT LTD</div>
            </div>
          </h2>
          <p className="mt-2 text-sm pr-2 mr-8 text-gray-300">
            Peregrine Falcon Pharmaceuticals Private Limited is an active and leading Pharmaceuticals marketing company in West Bengal.
          </p>
          <div className="social-icons flex mt-2">
            <a
              href="https://www.facebook.com/PeregrineFalconPharmaceuticalsPrivateLimited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-green-500 transition duration-300 mr-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/" // Update Instagram link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-green-500 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section contact pr-4 ml-8 max-w-md">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-4 flex items-center text-sm text-gray-300">
            <FiMapPin className="mr-2" />
            <span>
              Corporate office: 12 M C Garden Road, Camellia Metro Garden, LP 31/3/3
              <br />
              Kolkata, West Bengal. PIN: 700030
            </span>
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-300">
            <FiPhone className="mr-2" /> +91-6297761130
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-300">
            <FiMail className="mr-2" /> info@peregrinefalcon.in
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom p-2 bg-gray-900 text-center mt-4 text-xs">
        <p className="text-gray-300">&copy; 2024 Peregrine Falcon Pharmaceuticals. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
