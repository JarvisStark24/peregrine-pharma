import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { RiTeamFill } from "react-icons/ri";

const WelcomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className=" py-20" data-aos="fade-up">
      <div className="container px-5 py-5 lg:mt-36 md:mt-24 sm:mt-0 mb-10 mx-auto">
        <div className="text-center mb-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center" data-aos="fade-up">
            <img
              src="/assets/client.jpg"
              alt="Pharmaceutical products"
              className="w-full md:w-1/2 lg:w-2/5 object-cover object-center sm:ml-10 mt-48 mb-6 md:mb-0 rounded-lg shadow-xl"
            />
            <div className="md:w-1/2 lg:w-3/5 lg:mt-6 md:mt-14 md:pl-10 ml-6 mr-6">
              <h1 className="text-5xl font-bold mb-6 text-customBlue font-red-hat">
                About Us
              </h1>
              <span className="text-customRed text-lg font-semibold">
                Peregrine Falcon Pharmaceuticals Private Limited
              </span>
              <p className="mt-4 text-base mb-4 text-gray-900">
                Peregrine Falcon Pharmaceuticals is an active and prominent pharmaceutical marketing company in West Bengal. We offer a range of highly appreciated products, including Nutraceuticals, Anti-Biotics, and Anti-Allergic solutions.
              </p>
              <p className="mt-4 text-base mb-4 text-gray-900">
                Our top priority is to provide the best services, ensuring the highest quality at competitive rates.
              </p>
              <p className="mt-4 text-base mb-4 text-gray-900">
                <span className="text-customRed font-semibold">Head Office:</span> 12 M C Garden Road, Camellia Metro Garden, Kolkata, West Bengal.
              </p>
              <p className="text-lg italic text-customBlue font-red-hat font-semibold">
                Your health is our priority!
              </p>
            </div>
          </div>
          <p className="text-base mt-4 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            We are a biopharmaceutical company focused on the discovery, development, and commercialization of innovative therapies.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Team Section */}
          <div
            className="p-6 md:w-1/3 flex flex-col text-center items-center bg-white rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-customBlue text-white mb-5 flex-shrink-0">
              <RiTeamFill className="text-6xl group-hover:animate-blink transition-opacity duration-200" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 font-red-hat text-xl title-font font-semibold mb-3">
                Peregrine Team
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                Our dedicated expert team drives excellence, ensuring client satisfaction.
              </p>
              <Link to="/">
                <button className="mt-3 text-customRed border-red-300 bg-white border-2 py-2 px-6 rounded-md hover:bg-customRed hover:text-white transition duration-300">
                  Our Team
                </button>
              </Link>
            </div>
          </div>

          {/* Products Section */}
          <div
            className="p-6 md:w-1/3 flex flex-col text-center items-center bg-white rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-customBlue text-white mb-5 flex-shrink-0">
              <FaHandHoldingMedical className="text-6xl group-hover:animate-blink transition-opacity duration-200" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 font-red-hat text-xl title-font font-semibold mb-3">
                Products
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                Our pharmaceutical products are renowned for their superior quality and proven effectiveness, earning high praise from industry experts.
              </p>
              <Link to="/">
                <button className="mt-3 text-white border-red-300 bg-customRed border-2 py-2 px-6 rounded-md hover:bg-white hover:text-customRed transition duration-300">
                  Discover Now
                </button>
              </Link>
            </div>
          </div>

          {/* Vision Section */}
          <div
            className="p-6 md:w-1/3 flex flex-col text-center items-center bg-white rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-customBlue text-white mb-5 flex-shrink-0">
              <FcIdea className="text-6xl group-hover:animate-blink transition-opacity duration-200" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 font-red-hat text-xl title-font font-semibold mb-3">
                Our Vision
              </h2>
              <p className="leading-relaxed text-base text-gray-600">
                Our motto is to lead as a top medicine manufacturer and exporter, valued for our supreme quality products.
              </p>
              <Link to="/">
                <button className="mt-3 text-customRed bg-white border-2 border-red-300 py-2 px-6 rounded-md hover:bg-customRed hover:text-white transition duration-300">
                  Check It
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
