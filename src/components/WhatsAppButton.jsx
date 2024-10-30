import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/6297761130"
    className="fixed bottom-4 right-4 md:bottom-6 
    md:right-6 lg:bottom-8 lg:right-8 bg-green-900 
    text-white p-2 rounded-full shadow-lg 
    hover:bg-green-600 transition-colors flex 
    items-center space-x-2 animate-bounce-3d text-xs 
    md:text-sm lg:text-base z-50"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp size={20} className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
    <span className="hidden lg:inline">Need Help?</span>
  </a>
);

export default WhatsAppButton;