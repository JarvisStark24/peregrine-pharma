import { FaCogs, FaBox, FaThumbsUp, FaAward } from "react-icons/fa";

const Ppcp = () => {
  const features = [
    { icon: <FaCogs size={40} />, label: "Product Efficiency" },
    { icon: <FaBox size={40} />, label: "Product Packaging" },
    { icon: <FaThumbsUp size={40} />, label: "Customer Satisfaction" },
    { icon: <FaAward size={40} />, label: "Product Quality" },
  ];

  return (
    <div className="bg-gray-500 py-10 -mb-24">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="p-4 border rounded-full bg-white text-orange-500">
              {feature.icon}
            </div>
            <p className="text-lg font-medium">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ppcp;
