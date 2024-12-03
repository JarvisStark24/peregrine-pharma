import { FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";

const ContactUs = () => {
  return (
    <div className="relative text-black lg:mt-36 md:mt-36 py-20 sm:py-10">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed filter blur-sm"
        style={{
          backgroundImage: "url('/assets/conbg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      <div className="relative max-w-4xl mx-auto px-4 py-40 md:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-customBlue font-red-hat mb-4 transition-transform duration-300 hover:scale-105">
            Get in Touch
          </h2>
          <p className="text-gray-900 font-semibold text-lg max-w-2xl mx-auto">
            We are here to help with any inquiries or provide more information about our products. Feel free to contact us!
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 text-center md:text-left mb-16">
          {/* Phone Number */}
          <div className="flex flex-col items-center md:flex-row gap-3">
            <FcPhone className="text-4xl transition-transform duration-300 hover:scale-105" />
            <div>
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              <a href="tel:+916297761130" className="text-blue-600 hover:underline hover:text-customBlue transition duration-300">
                +91-6297761130
              </a>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col items-center md:flex-row gap-3">
            <MdEmail className="text-4xl text-customBlue transition-transform duration-300 hover:scale-105" />
            <div>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              <a
                href="mailto:info@peregrinefalcon.com"
                className="text-blue-600 hover:underline hover:text-customBlue transition duration-300"
              >
                info@peregrinefalcon.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:flex-row gap-3">
            <HiBuildingOffice2 className="text-5xl text-green-600 transition-transform duration-300 hover:scale-105" />
            <div>
              <span className="font-semibold text-gray-900">Corporate Office:</span>{" "}
              <a
                href="https://www.google.com/maps/place/12+M+C+Garden+Road,+Camellia+Metro+Garden,+Kolkata,+West+Bengal+700030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-customBlue transition duration-300"
              >
                Peregrine Falcon Pharmaceuticals Private Limited, 12 M C Garden Road, Camellia Metro Garden, Kolkata, West Bengal, PIN: 700030
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-4 border border-customRed rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-4 border border-customRed rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-6 py-4 border border-customRed rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-customBlue text-white py-4 rounded-lg font-semibold hover:bg-customRed transition duration-300 shadow-lg hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
