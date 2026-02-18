import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaCode, FaShieldAlt, FaBolt, FaServer, FaDatabase, FaPlug,
  FaCheckCircle, FaChartLine, FaSync, FaUserShield, FaGlobe,
  FaChevronDown, FaChevronUp, FaCogs, FaRocket, FaLock,
  FaTachometerAlt, FaHandshake, FaLayerGroup
} from "react-icons/fa";
import { SiDotnet, SiSwagger, SiPostman, SiGit } from "react-icons/si";

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
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const outsourceServices = [
    {
      icon: <FaSync className="text-5xl text-red-500" />,
      title: "Agile Development Approach",
      description: "Our agile development approach allows us to adapt quickly to changing client requirements, ensuring that projects are delivered on time and within budget. We focus on continuous improvement, making sure every iteration is a step closer to your ideal solution."
    },
    {
      icon: <FaGlobe className="text-5xl text-blue-500" />,
      title: "A Diverse Skill Experience",
      description: "We bring diverse expertise and experience to Web API development, ranging from our team members with different specializations working together to create the best solutions for your needs."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-500" />,
      title: "Security",
      description: "We follow Security protocols to ensure your API is fortified with industry best practices like secure your data and ensure that you maintain the trust with your users while benefiting from the latest security standards."
    },
    {
      icon: <FaTachometerAlt className="text-5xl text-purple-500" />,
      title: "Client Engagement",
      description: "We believe in building strong relationships with our clients. Our open communication and collaborative approach ensure that you're always in the loop and feel that your vision and that your ideas are heard and valued."
    },
    {
      icon: <FaUserShield className="text-5xl text-orange-500" />,
      title: "Scale Where It Suits You",
      description: "Whether you're a startup with big dreams or an established enterprise, our API solutions are built to scale, allowing companies to scale their requirements, ensuring that you only pay for the resources you need."
    },
    {
      icon: <FaHandshake className="text-5xl text-cyan-500" />,
      title: "DevOps",
      description: "With Web DevOps expertise to ensure robust deployment, monitoring, high scalability and secure delivery. We can automate deployment, build, testing and deployment efficiently. We effectively help you automate your entire DevOps cycle with the flexibility of your container and agile."
    },
    {
      icon: <FaLock className="text-5xl text-indigo-500" />,
      title: "Top Talent at Low Cost",
      description: "Our team of ASP.NET Core developers provides top of the world talent at a fraction of the cost. By outsourcing to us, you gain access to experienced professionals who are not only skilled but also dedicated to making your project a success."
    }
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "ASP.NET Core Web API is designed to handle growing traffic and data with ease. Its modular architecture allows you to add new features and resources without compromising performance."
    },
    {
      title: "Security",
      description: "ASP.NET Core Web API offers a comprehensive security model that helps protect your application from a wide range of threats, including cross-site scripting and SQL injection, ensuring users and visitors."
    },
    {
      title: "Performance",
      description: "ASP.NET Core Web API is optimized for high performance. With features such as asynchronous programming and efficient memory usage, it can handle a high volume of requests with minimal performance."
    },
    {
      title: "Flexibility",
      description: "ASP.NET Core Web API is highly flexible, allowing you to use it with a variety of front-end frameworks and libraries. It's also designed to work with different development tools and databases."
    }
  ];

  const developmentTools = [
    {
      icon: <SiDotnet className="text-6xl text-purple-600" />,
      title: "Visual Studio",
      description: "A powerful integrated development environment that provides all the tools and features to streamline the entire API development process. Whether you're creating new REST APIs or extending existing applications, Visual Studio offers comprehensive support."
    },
    {
      icon: <SiSwagger className="text-6xl text-green-600" />,
      title: "Swagger",
      description: "Swagger simplifies API documentation and testing. It offers an interactive interface that allows developers to visualize and interact with the API's resources without needing to create extensive client code."
    },
    {
      icon: <FaCode className="text-6xl text-orange-600" />,
      title: "Postman",
      description: "A Postman is a leading API development platform that simplifies the process of testing and debugging code. From it provides a range of features that streamline the entire API development lifecycle, enabling developers to build and test."
    },
    {
      icon: <SiGit className="text-6xl text-gray-800" />,
      title: "Insomnia",
      description: "Insomnia is an API client development platform that simplifies the developer in range of features and functionalities. These developers can effectively manage their API workflow and ensure smooth, error-free integrations."
    },
    {
      icon: <FaLayerGroup className="text-6xl text-red-600" />,
      title: "Git",
      description: "Git is a distributed version control system that enables developers of all skill levels to work on the same codebase simultaneously without conflicts. It provides excellent branch and merge management ensuring that all iterations of the code are tracked and managed efficiently."
    }
  ];

  const webApiServices = [
    {
      icon: <FaCode className="text-5xl text-blue-600" />,
      title: "API Strategy & Planning",
      description: "We start every project with a detailed API strategy, identifying the best design to meet both current and future business needs. Our approach ensures seamless API roadmap to seamlessly integrate to APIs that evolve with your business."
    },
    {
      icon: <FaCogs className="text-5xl text-purple-600" />,
      title: "API Design & Development",
      description: "Our team builds robust and scalable Web APIs designed to handle high traffic and complex data operations seamlessly. We leverage ASP.NET Core to develop RESTful APIs that are scalable, secure and maintainable, ensuring efficiency, clean code, and documentation."
    },
    {
      icon: <FaPlug className="text-5xl text-green-600" />,
      title: "API Integration & Deployment",
      description: "We integrate your Web API with existing systems and third-party services for seamless connectivity. We ensure everything integrates smoothly and performs exceptionally well under production environments, guaranteeing a smooth rollout that won't disrupt your business."
    },
    {
      icon: <FaSync className="text-5xl text-orange-600" />,
      title: "API Testing & Optimization",
      description: "Comprehensive testing is an integral part of our development process. We conduct rigorous testing at every stage of the development to identify potential issues before they become critical, leveraging performance monitoring and other techniques to ensure optimal results."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-red-600" />,
      title: "API Security & Compliance",
      description: "We take API security seriously. From data encryption to secure authentication and authorization protocols, we make sure your API is secure and complies with industry standards and regulatory requirements, ensuring your peace of mind."
    }
  ];

  const faqs = [
    {
      question: "When do you Ensure the Security of My APIs?",
      answer: "We implement industry-standard security practices including JWT authentication, OAuth 2.0, API key management, rate limiting, input validation, encryption for data in transit and at rest, and regular security audits to ensure your APIs are protected from vulnerabilities and threats."
    },
    {
      question: "What is the Difference Between REST & SOAP APIs?",
      answer: "REST (Representational State Transfer) uses HTTP methods and is lightweight, flexible, and widely used for web services. SOAP (Simple Object Access Protocol) is a protocol-based approach with built-in error handling and security, typically used for enterprise-level applications requiring formal contracts."
    },
    {
      question: "What is API Versioning?",
      answer: "API versioning allows you to introduce changes and new features without breaking existing client applications. We implement versioning strategies through URL paths (v1, v2), query parameters, or custom headers, ensuring smooth transitions and backward compatibility for your API consumers."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ASP.NET Core API<br />
                Development<br />
                & Integration<br />
                Solutions
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technology, we specialize in developing robust and scalable API solutions using ASP.NET Core. Our team of experienced developers creates efficient and secure APIs that seamlessly integrate with your systems. We offer consultation and development services for the specific needs of each client and ensure seamless integrations with database.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openForm}
                  className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </button>
                <button
                  onClick={openForm}
                  className="bg-gradient-to-r from-[#ff8c00] to-[#fb9c24] hover:from-[#fb9c24] hover:to-[#ff8c00] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Hire Now
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px]">
                {/* Animated Background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-pulse delay-100"></div>
                </div>
                
                {/* API Illustration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-2xl w-80 h-60 animate-float">
                  <div className="bg-white rounded-lg h-full p-6 flex flex-col items-center justify-center">
                    <div className="text-6xl text-blue-600 mb-4">
                      <FaServer />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">API</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-10 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                  <FaDatabase className="text-3xl text-green-500" />
                </div>
                <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-100">
                  <FaShieldAlt className="text-3xl text-blue-500" />
                </div>
                <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-200">
                  <FaBolt className="text-3xl text-yellow-500" />
                </div>
                <div className="absolute bottom-10 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-300">
                  <FaCode className="text-3xl text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outsource to Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Outsource to Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unlock your potential by outsourcing to us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outsourceServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of ASP.NET Core Web API Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASP.NET Core API Development Tools */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ASP.NET Core API Development Tools
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Having the right tools can make all the difference in development and deployment of your API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {developmentTools.map((tool, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Vision, Our Expertise. Let's Create Something Amazing Together.
              </h2>
              <p className="text-white/90 text-lg">
                Ready to build powerful and secure APIs? Get in touch with us today!
              </p>
            </div>
            <div data-aos="fade-left">
              <button
                onClick={openForm}
                className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Connect with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Your Business Potential */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unlock Your Business Potential with BTJ Alpha's Web<br />
              API Development Services
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Partnering with us means gaining access to a team of dedicated professionals committed to turning your vision into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {webApiServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <FaChevronUp className="text-[#fb9c24] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}

export default WebAPI;
