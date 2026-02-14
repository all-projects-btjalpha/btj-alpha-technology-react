import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLightbulb, FaCode, FaRocket, FaUsers, FaChartLine, FaCogs } from "react-icons/fa";

function ProductDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);

  const features = [
    {
      icon: <FaLightbulb className="text-4xl text-[#fb9c24]" />,
      title: "Ideation & Strategy",
      description: "Transform your vision into a concrete product roadmap with market research and competitive analysis.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "User-Centric Design",
      description: "Create intuitive interfaces that delight users with comprehensive UX/UI research and prototyping.",
    },
    {
      icon: <FaCode className="text-4xl text-[#fb9c24]" />,
      title: "Agile Development",
      description: "Build scalable products with iterative sprints, continuous feedback, and rapid deployment cycles.",
    },
    {
      icon: <FaRocket className="text-4xl text-[#fb9c24]" />,
      title: "MVP Launch",
      description: "Get to market faster with a Minimum Viable Product that validates your concept with real users.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Product Analytics",
      description: "Track user behavior, measure KPIs, and make data-driven decisions for product growth.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#fb9c24]" />,
      title: "Continuous Improvement",
      description: "Iterate and enhance your product based on user feedback and market trends.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understand your business goals, target audience, and market landscape.",
    },
    {
      step: "02",
      title: "Design",
      description: "Create wireframes, prototypes, and user flows that bring your idea to life.",
    },
    {
      step: "03",
      title: "Development",
      description: "Build your product with clean code, best practices, and scalable architecture.",
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploy your product to production with comprehensive testing and monitoring.",
    },
    {
      step: "05",
      title: "Growth",
      description: "Scale your product with new features, optimizations, and market expansion.",
    },
  ];

  const technologies = [
    "React", "Node.js", "Python", "Flutter", "AWS", "Docker",
    "MongoDB", "PostgreSQL", "Redis", "GraphQL", "REST API", "Microservices"
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1c438d] to-[#0d2552] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Product Development Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              From concept to launch and beyond, we build innovative digital products that solve real problems
              and delight users. Let's turn your vision into a market-ready product.
            </p>
            <button
              onClick={openForm}
              className="bg-[#fb9c24] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Building Your Product
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Our Product Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1c438d] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Our Development Process
          </h2>
          <div className="max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="flex items-start gap-6 mb-8 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#fb9c24] to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1c438d] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Technologies We Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-[#fb9c24] text-[#1c438d] font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-orange-600">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Big Product?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to create innovative products that users love and investors back.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Let's Discuss Your Product
          </button>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default ProductDevelopment;
