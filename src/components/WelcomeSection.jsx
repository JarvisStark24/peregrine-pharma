import { Link } from "react-router-dom";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { RiTeamFill } from "react-icons/ri";

const WelcomeSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Welcome to Our Site!
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
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
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group transform transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-customBlue mb-5 flex-shrink-0">
              <RiTeamFill className="text-6xl group-hover:animate-blink transition-opacity duration-200" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Peregrine Team
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <Link to="/about-us">
                <button className="mt-3 text-customRed bg-white border-2 
                py-2 px-6 rounded-md hover:bg-customRed hover:text-white">
                  Our Team
                </button>
              </Link>
            </div>
          </div>

          {/* Products Section */}
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center 
          group transform transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-customBlue mb-5 flex-shrink-0">
              <FaHandHoldingMedical className="text-6xl group-hover:animate-blink transition-opacity duration-200" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Products
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <Link to="/products">
                <button className="mt-3 text-white bg-customRed border-2 py-2 
                px-6 rounded-md hover:bg-white hover:text-customRed">
                  Discover Now
                </button>
              </Link>
            </div>
          </div>

          {/* Vision Section */}
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group transform transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-customBlue mb-5 flex-shrink-0">
              <FcIdea className="text-6xl group-hover:animate-blink transition-opacity duration-200" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Our Vision
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <Link to="/about-us">
                <button className="mt-3 text-customRed bg-white border-2 py-2 
                px-6 rounded-md hover:bg-customRed hover:text-white">
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
