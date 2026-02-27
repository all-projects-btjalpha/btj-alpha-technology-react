import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919310228489"; // Indian number format without +
  const defaultMessage = "Hello, I would like to know more about your services.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed top-1/2 left-6 transform -translate-y-1/2 z-50 flex flex-col gap-4 mt-32 animate-bounce">
      <button
        onClick={handleClick}
        className="bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#1DA851] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton;