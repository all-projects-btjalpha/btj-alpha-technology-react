import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBug, FaCheckCircle, FaRobot, FaClipboardCheck, FaVial, FaShieldAlt } from "react-icons/fa";

function SoftwareTesting() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);

  const features = [
    {
      icon: <FaVial className="text-4xl text-[#fb9c24]" />,
      title: "Manual Testing",
      description: "Thorough manual testing by experienced QA professionals for comprehensive coverage.",
    },
    {
      icon: <FaRobot className="text-4xl text-[#fb9c24]" />,
      title: "Automation Testing",
      description: "Selenium, Cypress, and Jest automated testing for faster, consistent results.",
    },
    {
      icon: <FaBug className="text-4xl text-[#fb9c24]" />,
      title: "Bug Tracking",
      description: "Identify, document, and track bugs throughout the development lifecycle.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-[#fb9c24]" />,
      title: "Performance Testing",
      description: "Load, stress, and performance testing to ensure optimal application performance.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Security Testing",
      description: "Identify vulnerabilities and security flaws before they become problems.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#fb9c24]" />,
      title: "UAT Support",
      description: "User acceptance testing support to ensure business requirements are met.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="relative bg-gradient-to-r from-[#1c438d] to-[#0d2552] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Software Testing Services</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Ensure quality, performance, and reliability with comprehensive testing services from manual to automation.
            </p>
            <button onClick={openForm} className="bg-[#fb9c24] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Testing Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">Our Testing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1c438d] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-orange-600">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ensure Quality & Reliability</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our QA experts help you deliver bug-free, high-performance software.
          </p>
          <button onClick={openForm} className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Testing
          </button>
        </div>
      </section>

      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default SoftwareTesting;
