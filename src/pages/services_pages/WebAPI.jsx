import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaShieldAlt, FaBolt, FaServer, FaDatabase, FaPlug } from "react-icons/fa";

function WebAPI() {
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
      icon: <FaCode className="text-4xl text-[#fb9c24]" />,
      title: "RESTful APIs",
      description: "Build scalable REST APIs with best practices, proper HTTP methods, and clean endpoints.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fb9c24]" />,
      title: "Secure Authentication",
      description: "Implement JWT, OAuth 2.0, and API key authentication for robust security.",
    },
    {
      icon: <FaBolt className="text-4xl text-[#fb9c24]" />,
      title: "High Performance",
      description: "Optimize API response times with caching, pagination, and efficient data structures.",
    },
    {
      icon: <FaServer className="text-4xl text-[#fb9c24]" />,
      title: "GraphQL APIs",
      description: "Flexible data querying with GraphQL for efficient client-server communication.",
    },
    {
      icon: <FaDatabase className="text-4xl text-[#fb9c24]" />,
      title: "Database Integration",
      description: "Seamless integration with SQL, NoSQL, and cloud databases for data persistence.",
    },
    {
      icon: <FaPlug className="text-4xl text-[#fb9c24]" />,
      title: "Third-Party Integration",
      description: "Connect with payment gateways, social media, and other external services easily.",
    },
  ];

  const apiTypes = [
    {
      type: "REST API",
      description: "Standard HTTP-based APIs with JSON responses, perfect for most applications.",
      use: "Web apps, mobile apps, IoT devices"
    },
    {
      type: "GraphQL API",
      description: "Query exactly what you need with a single request, reducing over-fetching.",
      use: "Complex data requirements, mobile apps"
    },
    {
      type: "WebSocket API",
      description: "Real-time bidirectional communication for live updates and notifications.",
      use: "Chat apps, live dashboards, gaming"
    },
    {
      type: "Microservices",
      description: "Modular architecture with independent services for scalability and flexibility.",
      use: "Enterprise applications, large platforms"
    },
  ];

  const technologies = [
    "Node.js", "Express", "FastAPI", "Django REST", "Spring Boot",
    "GraphQL", "Swagger/OpenAPI", "Postman", "JWT", "OAuth 2.0"
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
              Web API Development Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Build robust, scalable, and secure APIs that power your applications and enable seamless
              integrations. From REST to GraphQL, we've got you covered.
            </p>
            <button
              onClick={openForm}
              className="bg-[#fb9c24] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Build Your API
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Our API Development Services
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

      {/* API Types Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Types of APIs We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {apiTypes.map((api, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#fb9c24]"
              >
                <h3 className="text-2xl font-bold text-[#1c438d] mb-3">{api.type}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{api.description}</p>
                <p className="text-sm text-[#fb9c24] font-semibold">Best for: {api.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Technologies & Tools
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1c438d] to-[#0d2552] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Why Choose Our API Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div data-aos="fade-up" className="text-center">
              <div className="text-5xl font-bold text-[#fb9c24] mb-2">99.9%</div>
              <p className="text-lg">API Uptime</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="text-center">
              <div className="text-5xl font-bold text-[#fb9c24] mb-2">&lt;100ms</div>
              <p className="text-lg">Average Response Time</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="text-center">
              <div className="text-5xl font-bold text-[#fb9c24] mb-2">100%</div>
              <p className="text-lg">Security Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-orange-600">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your API?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's create a powerful API that scales with your business and enables endless possibilities.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default WebAPI;
