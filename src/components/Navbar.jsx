import { Link } from "react-router-dom";
import { FaClock, FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-customRed text-white text-sm p-2 
      flex justify-between items-center">
        <div className="flex items-center space-x-4 pl-24">
          <FaClock />
          <span>Opening Hours: Mon - Sat 8.00 - 18.00</span>
        </div>
        <div className="flex items-center space-x-2 ml-auto pr-24">
          <span>Follow Us:</span>
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-white to-customBlue p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="Pharma Logo" className="w-10 h-10" />
              <div>
                <h1 className="text-2xl font-bold">Peregrine Falcon</h1>
                <p className="text-xs text-gray-500">Pharmaceuticals PVT LTD</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-base text-white-700 font-semibold">
            <li>
              <Link to="/" className="hover:text-customRed">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-customRed">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-customRed">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-customRed">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
