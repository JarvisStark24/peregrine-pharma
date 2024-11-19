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
    <section className="text-gray-600 body-font" data-aos="fade-up">
      <div className="container px-5 py-5 lg:mt-36 md:mt-24 sm:mt-0 mb-10 mx-auto">
        <div className="text-center mb-20">
        <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center"
        data-aos="fade-up"
      >
        <img
          src="/assets/client.jpg"
          alt="Pharmaceutical products"
          className="w-full md:w-1/2 lg:w-2/5 object-cover object-center 
          sm:ml-10 mt-48 mb-6 md:mb-0"
        />
        <div className="md:w-1/2 lg:w-3/5 lg:mt-6 md:mt-14 md:pl-10 ml-6 mr-6">
          <p className="mt-4 text-base mb-4">
            
          <h1 className="text-5xl font-bold mb-6 text-customBlue font-red-hat">
            About Us
          </h1>
            <span className="text-customRed text-lg">
              Peregrine Falcon Pharmaceuticals Private Limited
            </span>{" "}
            is an Active leading and prominent Pharmaceuticals marketing company
            in West Bengal. The pharmaceutical product ranges manufactured by
            our company are highly appreciated by many pharma experts and
            professionals for their quality and effectiveness.The company works
            ethically to provide a high-quality range of drugs in the market at
            most commercial rates. By understanding the market requirement, we
            have been able to make our name in the market by offering
            Nutraceuticals, Anti-Biotics, Anti-Allergic, NSAID’s, etc marketing
            service in every part of West Bengal. Our Nutraceutical Products are
            made with only premium quality ingredients under the strict
            inspection of team controllers.
          </p>
          <p className="mt-4 text-base mb-4">
            Our top most priority is to provide best services and reliability.
            We meet all the needs and demands of our customers by developing an
            excellent range of products.
          </p>
          <p className="mt-4 text-base mb-4">
            <span className="text-customRed">Head Office:</span> 12 M C Garden
            Road, Camellia Metro Garden, LP 31/3/3 Kolkata, West Bengal. PIN:
            700030 Company is established on 18 Aug 2020. According to MCA
            records, 3 Directors are linked to this company till date.
          </p>
          <p className="text-lg italic text-customBlue font-red-hat font-semibold">
            Your health is our priority!
          </p>
        </div>
      </div>
          <p className="text-base mt-4 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            We are a biopharmaceutical company focused on the discovery,
            development and commercialization of innovative therapies intended
            to improve outcomes in patients suffering.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Team Section */}
          <div
            className="p-4 md:w-1/3 flex flex-col text-center items-center 
          group transform transition-all duration-300 hover:scale-105"
          >
            <div
              className="w-20 h-20 inline-flex items-center justify-center 
            rounded-full text-customBlue mb-5 flex-shrink-0"
            >
              <RiTeamFill
                className="text-6xl group-hover:animate-blink 
              transition-opacity duration-200"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 font-red-hat text-lg title-font font-bold mb-3">
                Peregrine Team
              </h2>
              <p className="leading-relaxed text-base">
                Our dedicated expert team drives excellence, ensuring client
                satisfaction.
              </p>
              <Link to="/">
                <button
                  className="mt-3 text-customRed border-red-300 bg-white border-2 
                py-2 px-6 rounded-md hover:bg-customRed hover:text-white"
                >
                  Our Team
                </button>
              </Link>
            </div>
          </div>

          {/* Products Section */}
          <div
            className="p-4 md:w-1/3 flex flex-col text-center items-center 
          group transform transition-all duration-300 hover:scale-105"
          >
            <div
              className="w-20 h-20 inline-flex items-center justify-center 
            rounded-full text-customBlue mb-5 flex-shrink-0"
            >
              <FaHandHoldingMedical
                className="text-6xl group-hover:animate-blink 
              transition-opacity duration-200"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 font-red-hat text-lg title-font font-bold mb-3">
                Products
              </h2>
              <p className="leading-relaxed text-base">
                Our pharmaceutical products are renowned for their superior
                quality and proven effectiveness, earning high praise from
                industry experts.
              </p>
              <Link to="/">
                <button
                  className="mt-3 text-white border-red-300 bg-customRed border-2 py-2 
                px-6 rounded-md hover:bg-white hover:text-customRed"
                >
                  Discover Now
                </button>
              </Link>
            </div>
          </div>

          {/* Vision Section */}
          <div
            className="p-4 md:w-1/3 flex flex-col text-center items-center 
          group transform transition-all duration-300 hover:scale-105"
          >
            <div
              className="w-20 h-20 inline-flex items-center justify-center 
            rounded-full text-customBlue mb-5 flex-shrink-0"
            >
              <FcIdea
                className="text-6xl group-hover:animate-blink 
              transition-opacity duration-200"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 font-red-hat text-lg title-font font-bold mb-3">
                Our Vision
              </h2>
              <p className="leading-relaxed text-base">
                Our motto is to lead as a top medicine manufacturer and
                exporter, valued for our supreme quality products.
              </p>
              <Link to="/">
                <button
                  className="mt-3 text-customRed bg-white border-2
                 border-red-300 py-2 
                px-6 rounded-md hover:bg-customRed hover:text-white"
                >
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
