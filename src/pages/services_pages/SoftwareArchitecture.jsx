import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaCode, FaChartBar, FaLayerGroup, FaCogs, FaShieldAlt } from "react-icons/fa";

function SoftwareArchitecture() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);

  const features = [
    {
      icon: <FaBuilding className="text-4xl text-[#fb9c24]" />,
      title: "System Design",
      description: "Design scalable, maintainable system architecture that grows with your business.",
    },
    {
      icon: <FaLayerGroup className="text-4xl text-[#fb9c24]" />,
      title: "Microservices",
      description: "Build modular, independently deployable services for flexibility and resilience.",
    },
    {
      icon: <FaCode className="text-4xl text-[#fb9c24]" />,
      title: "Clean Code Practices",
      description: "Implement SOLID principles and design patterns for maintainable codebases.",
    },
    {
      icon: <FaChartBar className="text-4xl text-[#fb9c24]" />,
      title: "Performance Optimization",
      description: "Optimize architecture for high performance, low latency, and efficient resource usage.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#fb9c24]" />,
      title: "DevOps Integration",
      description: "CI/CD pipelines, containerization, and automated deployment strategies.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Security Architecture",
      description: "Build security into every layer with best practices and compliance standards.",
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Software Architecture Services</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Build robust, scalable, and maintainable software systems with expert architecture design and best practices.
            </p>
            <button onClick={openForm} className="bg-[#fb9c24] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Consult Our Experts
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">Our Services</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Better Software?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's architect a solution that stands the test of time and scales with your success.
          </p>
          <button onClick={openForm} className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default SoftwareArchitecture;
