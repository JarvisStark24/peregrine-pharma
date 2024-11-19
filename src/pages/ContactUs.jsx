import { FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";

const ContactUs = () => {
  return (
    <div className="text-black lg:mt-36 md:mt-36 sm:mt-2 py-20">
      <div
        className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16"
      >
        {/* Image Section */}
        <div className="w-full md:w-2/5 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
          <img
            src="/assets/contact.png"
            alt="Pharmaceutical products"
            className="w-full object-cover object-center"
          />
        </div>

        {/* Contact Info and Form */}
        <div className="w-full md:w-3/5 lg:w-1/2  space-y-6">
          {/* Contact Information */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-customBlue font-red-hat mb-2 text-center md:text-left">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-4 text-center md:text-left">
              Reach out to us with any inquiries or for more information about
              our products. Our team is here to help!
            </p>
            <div className="space-y-3 text-gray-700">
              {/* Phone Number */}
              <p className="flex items-center gap-2 transform transition-transform duration-200 hover:scale-105">
                <FcPhone className="text-xl" />
                <span className="font-semibold">Phone:</span>
                <a href="tel:+916297761130" className="text-blue-600">
                  +91-6297761130
                </a>
              </p>

              {/* Email Address */}
              <p className="flex items-center gap-2 transform transition-transform duration-200 hover:scale-105">
                <MdEmail className="text-xl text-customBlue" />
                <span className="font-semibold">Email:</span>
                <a
                  href="mailto:info@peregrinefalcon.com"
                  className="text-blue-600"
                >
                  info@peregrinefalcon.com
                </a>
              </p>

              {/* Address with Google Maps Link */}
              <p className="flex items-center gap-2 transform transition-transform duration-200 hover:scale-105">
                <HiBuildingOffice2 className="text-6xl text-green-600" />
                <span className="font-semibold">Corporate Office:</span>
                <a
                  href="https://www.google.com/maps/place/12+M+C+Garden+Road,+Camellia+Metro+Garden,+Kolkata,+West+Bengal+700030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Peregrine Falcon Pharmaceuticals Private Limited, 12 M C
                  Garden Road, Camellia Metro Garden, Kolkata, West Bengal, PIN:
                  700030
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-customBlue text-white py-2 rounded-md hover:bg-customRed transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
