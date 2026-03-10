import { ImFacebook } from "react-icons/im";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SocialMediaButtons = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <ImFacebook className="text-xl max-md:text-sm" />,
      color: "bg-[#1877f2] hover:bg-[#0c63d4]",
      url: "https://www.facebook.com/btj.alpha"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-xl max-md:text-sm" />,
      color: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:from-[#e6741a] hover:via-[#c2256a] hover:to-[#6a2a8c]",
      url: "https://www.instagram.com/btjalphatechnology/"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-xl max-md:text-sm" />,
      color: "bg-[#0077b5] hover:bg-[#006399]",
      url: "https://www.linkedin.com/in/tanya-gupta-bb598834b/"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-xl max-md:text-sm" />,
      color: "bg-[#25D366] hover:bg-[#1DA851]",
      url: "https://wa.me/919310228489?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
    }
  ];

  return (
    <div className="fixed top-1/2 left-2 max-md:left-1 transform -translate-y-1/2 z-50 flex flex-col gap-4 max-md:gap-2">
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} text-white rounded-full p-4 max-md:p-2.5 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
          aria-label={`Follow us on ${social.name}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;
