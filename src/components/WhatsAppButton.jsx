import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => (
  <>
    {/* Inline keyframes for bounce effect */}
    <style>
      {`
        @keyframes bounce-3d {
          0% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          50% {
            transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
          }
          100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
        }
      `}
    </style>

    <a
      href="https://wa.me/6297761130"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 bg-green-900 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center space-x-2 z-50"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        animation: "bounce-3d 1s infinite",
      }}
    >
      <FaWhatsapp size={20} className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
      <span className="hidden lg:inline">Need Help?</span>
    </a>
  </>
);

export default WhatsAppButton;
