import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBolt,
  FaCheck,
  FaCogs,
  FaUserAlt,
  FaShieldAlt,
  FaRegClock,
} from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { GiTeamIdea, GiBrain, GiTakeMyMoney } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import Ppcp from "../components/Ppcp";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const features = [
    {
      icon: <FaMedal size={40} className="text-white" />,
      text: "Innovative approach",
    },
    {
      icon: <FcCustomerSupport size={40} />,
      text: "Customer centric approach",
    },
    {
      icon: <GiTeamIdea size={40} className="text-white" />,
      text: "Excellent & cordial teamwork",
    },
    {
      icon: <FaBolt size={40} className="text-white" />,
      text: "Prompt services",
    },
    {
      icon: <BsGraphUpArrow size={40} className="text-white" />,
      text: "Competitive prices",
    },
  ];

  return (
    <div className="text-center py-20">
      <HeroSection />
      <div className="text-black lg:mt-36 md:mt-36 -py-4">
        {/* Welcome Section */}
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center"
          data-aos="fade-up"
        >
          <div className="md:w-1/1 lg:w-1/1 lg:mt-6 md:mt-14 md:pl-10 ml-6 mr-6">
            <h1 className="text-3xl font-bold mt-4 mb-4 text-violet-600 font-red-hat">
              Welcome To Our Site !
            </h1>
            <p className="mt-4 text-base mb-4">
              <span className="text-customRed text-lg">
                Peregrine Falcon Pharmaceuticals Private Limited
              </span>{" "}
              is an Active leading and prominent Pharmaceuticals marketing
              company in West Bengal. The pharmaceutical product ranges
              manufactured by our company are highly appreciated by many pharma
              experts and professionals for their quality and effectiveness.The
              company works ethically to provide a high-quality range of drugs
              in the market at most commercial rates. By understanding the
              market requirement, we have been able to make our name in the
              market by offering Nutraceuticals, Anti-Biotics, Anti-Allergic,
              NSAID’s, etc marketing service in every part of West Bengal. Our
              Nutraceutical Products are made with only premium quality
              ingredients under the strict inspection of team controllers.
            </p>
            <p className="mt-4 text-base mb-4">
              Our top most priority is to provide best services and reliability.
              We meet all the needs and demands of our customers by developing
              an excellent range of products.
            </p>
            <p className="mt-4 text-base mb-4">
              <span className="text-customRed">Head Office:</span> 12 M C Garden
              Road, Camellia Metro Garden, LP 31/3/3 Kolkata, West Bengal. PIN:
              700030 Company is established on 18 Aug 2020. According to MCA
              records, 3 Directors are linked to this company till date.
            </p>
            <p className="text-lg italic text-violet-600 font-red-hat font-semibold">
              Your health is our priority!
            </p>
          </div>
        </div>

        {/* One-line Table Section */}
        <section className="text-gray-600 body-font" data-aos="fade-up">
          <div className="container px-5 py-24 mx-auto" data-aos="fade-up">
            <div className="flex justify-center">
              <div className="p-4 max-w-lg">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h2
                      className="tracking-widest text-lg title-font font-medium
                     text-gray-900 mb-1"
                    >
                      COMPANY INFORMATION
                    </h2>
                    <h1 className="title-font text-xl font-medium text-violet-600 mb-3">
                      Peregrine Falcon Pharmaceuticals
                    </h1>
                    <table className="table-auto w-full border border-gray-300 mb-3">
                      <thead>
                        <tr>
                          <th className="border px-2 py-2 text-left">
                            CIN/LLPIN/FCRN:
                          </th>
                          <td className="border px-4 py-2">
                            U33100WB2020PTC238987
                          </td>
                        </tr>
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Legal Name:
                          </th>
                          <td className="border px-4 py-2">
                            PEREGRINE FALCON PHARMACEUTICALS PRIVATE LIMITED
                          </td>
                        </tr>
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            ROC Code:
                          </th>
                          <td className="border px-4 py-2">RoC-Kolkata</td>
                        </tr>
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Company No.:
                          </th>
                          <td className="border px-4 py-2">238987</td>
                        </tr>
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Category:
                          </th>
                          <td className="border px-4 py-2">
                            Company limited by Shares
                          </td>
                        </tr>
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Sub Category:
                          </th>
                          <td className="border px-4 py-2">Non-govt Company</td>
                        </tr>
                        <tr>
                          <th className="border px-4 py-2 text-left">Class:</th>
                          <td className="border px-4 py-2">Private</td>
                        </tr>
                      </thead>
                    </table>
                    <div className="flex items-center flex-wrap"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Team Section */}
        <div className="mt-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6 text-violet-600 font-red-hat text-center">
            Our Team
          </h1>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>{" "}
          <p className="text-center text-lg leading-relaxed px-6 md:px-20">
            We are backed by a team of highly qualified and experienced
            professionals who remain the backbone of our organization.Our team
            includes doctors, pharmacists, quality controllers, researchers,
            sales & marketing personnel, warehousing experts, and administrative
            workers. Thanks to their professional expertise and enriched
            experience, we are able to achieve the desired level of customer
            satisfaction. These professionals are highly efficient in meeting
            the exact demands of our clients.
          </p>
        </div>
        {/* Why Choose Us Section */}
        <div className="py-16 bg-gray-50" data-aos="fade-up">
          <h1 className="text-5xl font-bold text-center mb-12 text-violet-600 transition-transform duration-300 hover:scale-105">
            Why Choose Us
          </h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
    max-w-6xl mx-auto px-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
                data-aos="zoom-in"
              >
                <div
                  className="absolute inset-0 bg-customBlue transition-transform 
          duration-500 transform translate-x-full group-hover:translate-x-0"
                ></div>
                <div className="relative z-10 flex flex-col items-center p-8 space-y-6">
                  <div className="p-6 bg-violet-600 text-white rounded-full shadow-xl">
                    {feature.icon}
                  </div>
                  <p className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sectors Catered To */}
        <div className="mt-10" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6 text-violet-600 font-red-hat text-center">
            Sectors Catered To
          </h1>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>
          <p className="text-center text-lg leading-relaxed px-6 md:px-20">
            The motto of the organization is to make a mark in the market as the
            leading manufacturer and exporter of medicines in upcoming days.
            Some of the features for which we are widely appreciated by the
            customers include supreme quality products.
          </p>
          <section className="text-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {[
                  {
                    title: "Wholesale & retails",
                    description:
                      "We supply high-quality medicines to wholesale and retail sectors, ensuring availability for all.",
                    imgSrc: "/assets/retail.jpg",
                  },

                  {
                    title: "Clinics",
                    description:
                      "Partnering with clinics to provide necessary medicines for day-to-day patient care.",
                    imgSrc: "/assets/clinic.jpg",
                  },

                  {
                    title: "Hospitals",
                    description:
                      "Supplying hospitals with essential pharmaceuticals for quality healthcare services.",
                    imgSrc: "/assets/hospital.jpg",
                  },

                  {
                    title: "Domestic",
                    description:
                      "Fulfilling domestic pharmaceutical needs with a focus on affordability and quality.",
                    imgSrc: "/assets/domestic.jpg",
                  },

                  {
                    title: "Relief operation",
                    description:
                      "Supporting relief operations by providing critical medicines during emergencies.",
                    imgSrc: "/assets/ops.jpg",
                  },
                ].map((sector, index) => (
                  <div key={index} className="p-4 md:w-1/3">
                    <div className="card h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
                      <div className="relative">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center shadow-lg transition-opacity duration-300"
                          src={sector.imgSrc}
                          alt={sector.title}
                        />
                        <div className="overlay absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 relative z-10">
                        <h1 className="title-font text-lg font-medium text-violet-600 mb-3">
                          {sector.title}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {sector.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* Goodwill Section with One-line Table */}
        <div className="mt-10" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6 text-violet-600 font-red-hat text-center">
            Factors That Have Earned us The Goodwill in The Market
          </h1>
          <section className="text-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {[
                  {
                    title: "Best quality medicines",
                    description:
                      "We provide only the highest quality medicines to ensure customer satisfaction.",
                    icon: <FaCheck className="text-violet-600 text-4xl mb-4" />,
                  },
                  {
                    title: "Safe and pure range",
                    description:
                      "Our medicines are safe, pure, and meet the highest industry standards.",
                    icon: (
                      <FaShieldAlt className="text-violet-600 text-4xl mb-4" />
                    ),
                  },
                  {
                    title: "Experienced and trained team",
                    description:
                      "We have a skilled team dedicated to providing excellent service.",
                    icon: (
                      <FaUserAlt className="text-violet-600 text-4xl mb-4" />
                    ),
                  },
                  {
                    title: "Use of latest machineries and technologies",
                    description:
                      "We incorporate the latest technologies for efficient production.",
                    icon: <FaCogs className="text-violet-600 text-4xl mb-4" />,
                  },
                  {
                    title: "Focus on quality compliance",
                    description:
                      "Strict adherence to quality standards and compliance ensures reliability.",
                    icon: (
                      <GrCompliance className="text-violet-600 text-4xl mb-4" />
                    ),
                  },
                  {
                    title: "Cost-effective",
                    description:
                      "We offer affordable solutions without compromising on quality.",
                    icon: (
                      <GiTakeMyMoney className="text-violet-600 text-4xl mb-4" />
                    ),
                  },
                  {
                    title: "Customized solutions",
                    description:
                      "We provide tailored solutions based on specific customer needs.",
                    icon: <GiBrain className="text-violet-600 text-4xl mb-4" />,
                  },
                  {
                    title: "Timely deliveries",
                    description:
                      "Our efficient processes ensure timely delivery of medicines.",
                    icon: (
                      <FaRegClock className="text-violet-600 text-4xl mb-4" />
                    ),
                  },
                ].map((factor, index) => (
                  <div key={index} className="p-4 md:w-1/3">
                    <div className="card h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
                      <div className="relative flex justify-center mt-6">
                        {factor.icon}
                      </div>
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-violet-600 text-center mb-3">
                          {factor.title}
                        </h1>
                        <p className="leading-relaxed text-center mb-3">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* why choose us image section */}
        <div
          className="max-w-6xl -mt-10 mx-auto flex flex-col md:flex-row items-center text-center mb-6"
          data-aos="fade-up"
        >
          <img
            src="/assets/compassion.jpg"
            alt="Pharmaceutical products"
            className="w-full md:w-1/2 lg:w-2/5 object-cover object-center sm:ml-10 mt-56 mb-6 md:mb-0"
          />
          <div className="md:w-1/2 lg:w-3/5 lg:mt-36 md:mt-48 md:pl-10 ml-6 mr-6">
            <p className="text-lg italic text-violet-600 font-red-hat font-semibold">
              Expert marketing, trusted service, and a commitment to your
              growth—delivering quality and value every step of the way.
            </p>
          </div>
        </div>

        {/* MVV Section */}
        <div
          className="max-w-6xl -mt-10 mx-auto flex flex-col md:flex-row-reverse items-center text-center mb-6"
          data-aos="fade-up"
        >
          <img
            src="/assets/mvv.png"
            alt="Pharmaceutical products"
            className="w-full md:w-1/2 lg:w-2/5 object-cover object-center sm:ml-10 mt-56 mb-6 md:mb-0"
          />
          <div className="md:w-1/2 lg:w-3/5 lg:mt-6 md:mt-14 md:pl-10 ml-6 mr-6">
            <h1 className="text-5xl font-bold mb-6 text-violet-600 font-red-hat">
              Our Core
            </h1>
            <p className="mt-4 text-base mb-4">
              <span className="text-customRed text-lg">Our Mission:</span> To
              make a difference to the quality of life by making excellent
              quality pharmaceutical affordable.
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
              Respect to each others, Working on strength, Continues
              improvements.
            </p>
            <p className="text-lg italic text-violet-600 font-red-hat font-semibold">
              Empowering lives with affordable, high-quality healthcare – our
              commitment to your well-being.
            </p>
          </div>
        </div>

        {/* thank you image section */}
        <div
          className="max-w-6xl -mt-10 mx-auto flex flex-col md:flex-row items-center text-center mb-6"
          data-aos="fade-up"
        >
          <img
            src="/assets/thank.png"
            alt="Pharmaceutical products"
            className="w-full md:w-1/2 lg:w-2/5 object-cover object-center sm:ml-10 mt-56 mb-6 md:mb-0"
          />
          <div className="md:w-1/2 lg:w-3/5 lg:mt-36 md:mt-48 md:pl-10 ml-6 mr-6">
            <p className="text-lg italic text-violet-600 font-red-hat font-semibold">
              We appreciate your time and interest in Peregrine Falcon
              Pharmaceuticals. Your trust motivates us to continue delivering
              excellence for your needs!
            </p>
          </div>
        </div>
      </div>
      <Ppcp />
    </div>
  );
};

export default Home;
