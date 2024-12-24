import { FaCogs, FaBox, FaThumbsUp, FaAward } from "react-icons/fa";

const Ppcp = () => {
  const features = [
    { icon: <FaCogs size={50} />, label: "Product Efficiency" },
    { icon: <FaBox size={50} />, label: "Product Packaging" },
    { icon: <FaThumbsUp size={50} />, label: "Customer Satisfaction" },
    { icon: <FaAward size={50} />, label: "Product Quality" },
  ];

  return (
    <div className="bg-gradient-to-r from-violet-700 via-gray-800 to-violet-900 py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-6 transform hover:scale-105 transition-transform duration-300"
          >
            <div
              className="p-6 border-4 border-transparent rounded-full bg-white 
              text-violet-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {feature.icon}
            </div>
            <p className="text-xl font-semibold">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ppcp;
