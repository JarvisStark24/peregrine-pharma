import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBolt } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { GiTeamIdea } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const features = [
    {
      icon: <FaMedal size={40} className="text-customBlue" />,
      text: "Innovative approach",
    },
    {
      icon: <FcCustomerSupport size={40} />,
      text: "Customer centric approach",
    },
    {
      icon: <GiTeamIdea size={40} className="text-customBlue" />,
      text: "Excellent & cordial teamwork",
    },
    {
      icon: <FaBolt size={40} className="text-customBlue" />,
      text: "Prompt services",
    },
    {
      icon: <BsGraphUpArrow size={40} className="text-customBlue" />,
      text: "Competitive prices",
    },
  ];

  return (
    <div className="text-black lg:mt-36 md:mt-36 -py-4">
      {/* About Us Section */}
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center"
        data-aos="fade-up"
      >
        <img
          src="/assets/client.jpg"
          alt="Pharmaceutical products"
          className="w-full md:w-1/2 lg:w-2/5 object-cover object-center 
          sm:ml-10 mt-56 mb-6 md:mb-0"
        />
        <div className="md:w-1/2 lg:w-3/5 lg:mt-6 md:mt-14 md:pl-10 ml-6 mr-6">
          <h1 className="text-5xl font-bold mb-6 text-customBlue font-red-hat">
            About Us
          </h1>
          <p className="mt-4 text-base mb-4">
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

      {/* One-line Table Section */}
      <div className="mt-10" data-aos="fade-up">
        <table className="table-auto mx-auto border border-gray-300">
          <thead>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                CIN/LLPIN/FCRN: U33100WB2020PTC238987
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                Company Legal Name: PEREGRINE FALCON PHARMACEUTICALS PRIVATE
                LIMITED
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                ROC Code: RoC-Kolkata
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                Company No.: 238987
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                Company Category: Company limited by Shares
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                Company Sub Category: Non-govt Company
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                Company Class: Private
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Our Team Section */}
      <div className="mt-16" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-6 text-customBlue font-red-hat text-center">
          Our Team
        </h1>
        <div className="w-24 h-1 bg-customBlue mx-auto mb-6"></div>{" "}
        <p className="text-center text-lg leading-relaxed px-6 md:px-20">
          We are backed by a team of highly qualified and experienced
          professionals who remain the backbone of our organization.Our team
          includes doctors, pharmacists, quality controllers, researchers, sales
          & marketing personnel, warehousing experts, and administrative
          workers. Thanks to their professional expertise and enriched
          experience, we are able to achieve the desired level of customer
          satisfaction. These professionals are highly efficient in meeting the
          exact demands of our clients.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-center mb-8 text-customBlue">
          Why Choose Us
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
        max-w-5xl mx-auto px-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 shadow-md 
              rounded-lg overflow-hidden group"
              data-aos="zoom-in"
            >
              <div
                className="absolute inset-0 bg-red-500 transition-transform 
              duration-300 transform translate-x-full group-hover:translate-x-16"
              ></div>
              <div className="relative z-10 flex flex-col items-center p-6 space-y-4">
                {feature.icon}
                <p className="text-lg font-semibold text-gray-700">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sectors Catered To */}
      <div className="mt-10" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-6 text-customBlue font-red-hat text-center">
          Sectors Catered To
        </h1>
        <div className="w-24 h-1 bg-customBlue mx-auto mb-6"></div>{" "}
        <p className="text-center text-lg leading-relaxed px-6 md:px-20">
          The motto of the organization is to make a mark in the market as the
          leading manufacturer and exporter of medicines in upcoming days.Some
          of the features for which we are widely appreciated by the customers
          include supreme quality products.
        </p>
        <table className="table-auto mx-auto border mt-4 border-gray-300">
          <thead>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                1. Wholesale & retails
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">2. Clinics</th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">3. Hospitals</th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">4. Domestic</th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                5. Relief operation
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Goodwill Section with One-line Table */}
      <div className="mt-10">
        <h1
          className="text-5xl font-bold mb-6 text-customBlue font-red-hat text-center"
          data-aos="fade-up"
        >
          FACTORS THAT HAVE EARNED US THE GOODWILL IN THE MARKET
        </h1>
        <table className="table-auto mx-auto border border-gray-300">
          <thead>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                1. Best quality medicines
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                2. Safe and pure range
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                3. Experienced and trained team
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                4. Use of latest machineries and technologies
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                5. Focus on quality compliance
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                6. Cost-effective
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                7. Customized solutions
              </th>
            </tr>
            <tr>
              <th className="border font-red-hat px-4 py-2">
                8. Timely deliveries
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* MVV Section */}
      <div
        className="max-w-6xl -mt-10 mx-auto flex flex-col md:flex-row items-center text-center"
        data-aos="fade-up"
      >
        <img
          src="/assets/mvv.png"
          alt="Pharmaceutical products"
          className="w-full md:w-1/2 lg:w-2/5 object-cover object-center 
          sm:ml-10 mt-56 mb-6 md:mb-0"
        />
        <div className="md:w-1/2 lg:w-3/5 lg:mt-6 md:mt-14 md:pl-10 ml-6 mr-6">
          <h1 className="text-5xl font-bold mb-6 text-customBlue font-red-hat">
            Our Core
          </h1>
          <p className="mt-4 text-base mb-4">
            <span className="text-customRed text-lg">Our Mission:</span> To make
            a difference to the quality of life by making excellent quality
            pharmaceutical affordable.
          </p>
          <p className="mt-4 text-base mb-4">
            <span className="text-customRed text-lg">Our Vision: </span>We are
            dedicated to improve the quality of life of the society through
            fulfilling fundamental healthcare needs.
          </p>
          <p className="mt-4 text-base mb-4">
            <span className="text-customRed text-lg">Core Values: </span>{" "}
            <span className="text-lg">
              ALLEGIANCE | COMMITMENT | GRATITUDE | TRUST
            </span>
            <br />
            Team work, Self confidence & involvement, Innovative approach,
            Respect to each others, Working on strength, Continues improvements.
          </p>
          <p className="text-lg italic text-customBlue font-red-hat font-semibold">
            Empowering lives with affordable, high-quality healthcare – our
            commitment to your well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
