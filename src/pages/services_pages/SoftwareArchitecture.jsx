import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaBuilding, FaCode, FaChartBar, FaLayerGroup, FaCogs, FaShieldAlt,
  FaLightbulb, FaBrain, FaChevronDown, FaChevronUp, FaCheckCircle,
  FaCube, FaNetworkWired, FaServer, FaLock, FaRocket, FaTools,
  FaSitemap, FaUserShield, FaClipboardCheck, FaProjectDiagram, FaSearch
} from "react-icons/fa";

function SoftwareArchitecture() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const whyMatterPoints = [
    {
      title: "Scalability",
      description: "Handle growing user base and data volume",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Maintainability",
      description: "Easy updates and modifications",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Performance",
      description: "Optimal speed and efficiency",
      color: "from-purple-600 to-indigo-700"
    },
    {
      title: "Security",
      description: "Protect data and user privacy",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Reliability",
      description: "Consistent and dependable operation",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Flexibility",
      description: "Adapt to changing requirements",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Cost Efficiency",
      description: "Optimize resources and reduce expenses",
      color: "from-purple-600 to-indigo-700"
    },
    {
      title: "User Experience",
      description: "Seamless and intuitive interactions",
      color: "from-blue-500 to-blue-700"
    }
  ];

  const keyPrinciples = [
    {
      icon: <FaCube className="text-5xl text-red-500" />,
      title: "Single Responsibility Principle",
      description: "Each component should have one and only one reason to change, ensuring modularity and easier maintenance."
    },
    {
      icon: <FaNetworkWired className="text-5xl text-blue-500" />,
      title: "Separation of Concerns",
      description: "Different aspects of the software are separated into distinct sections, improving code organization and reducing complexity."
    },
    {
      icon: <FaRocket className="text-5xl text-yellow-500" />,
      title: "Principle of Least Knowledge",
      description: "Components should have limited knowledge about other components, promoting loose coupling and independence."
    },
    {
      icon: <FaTools className="text-5xl text-cyan-500" />,
      title: "Don't Repeat Yourself (DRY)",
      description: "Avoid code duplication by abstracting common functionality into reusable components and functions."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-indigo-500" />,
      title: "Secure by Design",
      description: "Security considerations are built into the architecture from the ground up, not added as an afterthought."
    },
    {
      icon: <FaLock className="text-5xl text-blue-600" />,
      title: "Encapsulation",
      description: "Hide internal implementation details and expose only necessary interfaces for better security and flexibility."
    },
    {
      icon: <FaCogs className="text-5xl text-orange-500" />,
      title: "Modularity",
      description: "Break down the system into independent modules that can be developed, tested, and maintained separately."
    },
    {
      icon: <FaLayerGroup className="text-5xl text-green-600" />,
      title: "Layered Architecture",
      description: "Organize code into layers (presentation, business logic, data access) for better separation and maintainability."
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-purple-600" />,
      title: "Scalability",
      description: "Design systems that can handle growth in users, data, and functionality without performance degradation."
    }
  ];

  const architectureTypes = [
    {
      icon: "🏢",
      title: "Monolithic Architecture",
      description: "A monolithic architecture is a single unified software application where all components are interconnected and interdependent. Everything runs as a single unit, making deployment simpler but scaling more challenging."
    },
    {
      icon: "🔷",
      title: "Microservices Architecture",
      description: "Microservices architecture breaks down applications into small, independent services that communicate through APIs. Each service focuses on a specific business function, enabling easier scaling and maintenance."
    },
    {
      icon: "⚡",
      title: "Event-Driven Architecture",
      description: "Event-driven architecture uses events to trigger and communicate between decoupled services. This approach enables real-time processing, high scalability, and loose coupling between components."
    },
    {
      icon: "🎯",
      title: "Domain-Driven Architecture",
      description: "Domain-Driven Design (DDD) structures software around the business domain and logic. It emphasizes collaboration between technical and domain experts to create a shared understanding."
    },
    {
      icon: "📐",
      title: "Layered Architecture",
      description: "Layered architecture organizes the system into layers where each layer depends only on the layer below it. Common layers include presentation, business logic, data access, and database layers."
    },
    {
      icon: "🌐",
      title: "Model-View-Controller (MVC)",
      description: "MVC separates application logic into three interconnected components: Model (data), View (UI), and Controller (business logic). This separation enables parallel development and easier testing."
    },
    {
      icon: "🗄️",
      title: "MVVM (Model-View-ViewModel)",
      description: "MVVM is a design pattern that separates UI from business logic using ViewModels. It's particularly popular in frontend frameworks like Angular, Vue, and WPF applications."
    },
    {
      icon: "🔌",
      title: "Service-Oriented Architecture",
      description: "SOA structures applications as a collection of services that communicate over a network. Services are loosely coupled, reusable, and can be composed to create new applications."
    },
    {
      icon: "🧱",
      title: "Component-Based Architecture",
      description: "Component-based architecture builds applications from reusable, self-contained components. Each component encapsulates its own logic, state, and UI, promoting reusability and modularity."
    },
    {
      icon: "🔄",
      title: "Peer-to-Peer Architecture",
      description: "P2P architecture distributes tasks among peers without a central server. Each peer acts as both client and server, enabling decentralized resource sharing and scalability."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaLightbulb className="text-5xl text-yellow-500" />,
      title: "100% Client Satisfaction",
      description: "We prioritize your needs and deliver solutions that exceed expectations with continuous support and communication."
    },
    {
      icon: <FaBrain className="text-5xl text-pink-500" />,
      title: "High Technological Expertise",
      description: "Our architects have deep expertise in modern frameworks, cloud platforms, and cutting-edge architectural patterns."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-green-500" />,
      title: "ISO 27001:2013 and ISO 9001:2015 Certified",
      description: "We follow international standards for quality management and information security to ensure reliable and secure solutions."
    },
    {
      icon: <FaUserShield className="text-5xl text-blue-500" />,
      title: "Ongoing Support",
      description: "Our relationship doesn't end with deployment. We provide continuous maintenance, updates, and architectural guidance."
    }
  ];

  const faqs = [
    {
      question: "What is the Role of Software Architecture?",
      answer: "Software architecture serves as the blueprint for a software system, defining its structure, components, and their interactions. It establishes technical standards, design patterns, and guidelines that development teams follow. Good architecture ensures the system is scalable, maintainable, secure, and meets both functional and non-functional requirements. It helps stakeholders understand the system's organization and makes future changes easier to implement."
    },
    {
      question: "What is a Good Software Architecture?",
      answer: "A good software architecture is scalable, maintainable, secure, and performs well under expected loads. It follows established principles like separation of concerns, modularity, and loose coupling. Good architecture is well-documented, easy to understand, and flexible enough to accommodate future changes. It balances technical excellence with business needs, considers trade-offs carefully, and uses appropriate design patterns for the problem domain."
    },
    {
      question: "What methodologies does your Company use to Approach an Application or Cloud Architecture?",
      answer: "We follow a systematic approach that includes: 1) Requirements gathering and analysis to understand business needs, 2) Evaluation of existing systems and constraints, 3) Selection of appropriate architectural patterns and technologies, 4) Creation of detailed architecture design with documentation, 5) Proof of concept development, 6) Iterative refinement based on feedback, 7) Implementation guidance and code reviews, 8) Performance testing and optimization, 9) Security assessments, and 10) Continuous monitoring and improvement post-deployment."
    },
    {
      question: "What is the Best Practice for Production?",
      answer: "Best practices for production include: implementing robust CI/CD pipelines, using infrastructure as code (IaC), maintaining comprehensive monitoring and logging, implementing automated testing at all levels, using feature flags for gradual rollouts, maintaining proper backup and disaster recovery procedures, implementing security measures like encryption and access controls, using load balancing and auto-scaling, conducting regular security audits, maintaining detailed documentation, and having incident response procedures in place."
    },
    {
      question: "What are the Qualities of Architecture?",
      answer: "Key qualities include: Scalability (ability to handle growth), Performance (speed and efficiency), Security (protection against threats), Reliability (consistent operation), Maintainability (ease of updates), Testability (ease of testing), Modularity (separation of concerns), Flexibility (adaptability to changes), Usability (ease of use), Portability (ability to run on different platforms), Interoperability (integration with other systems), and Cost-effectiveness (optimal resource utilization)."
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
                Software<br />
                Architecture Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technology, we architect software solutions that are scalable, maintainable, and built to last. Our expert architects design robust systems using industry best practices, modern design patterns, and cutting-edge technologies. Whether you're building from scratch or refactoring existing systems, we ensure your software architecture aligns with your business goals and technical requirements.
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
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Animated Software Architecture Illustration */}
                <div className="relative">
                  {/* Main Screen */}
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all animate-float">
                    <div className="space-y-4">
                      {/* Code blocks */}
                      <div className="flex gap-3">
                        <div className="w-16 h-3 bg-cyan-300 rounded animate-pulse"></div>
                        <div className="w-24 h-3 bg-purple-300 rounded animate-pulse delay-100"></div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-20 h-3 bg-pink-300 rounded animate-pulse delay-200"></div>
                        <div className="w-16 h-3 bg-yellow-300 rounded animate-pulse"></div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-24 h-3 bg-green-300 rounded animate-pulse delay-100"></div>
                        <div className="w-20 h-3 bg-blue-300 rounded animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaSearch className="text-3xl text-blue-600" />
                  </div>
                  <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaCogs className="text-3xl text-purple-600" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaServer className="text-3xl text-green-600" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaLock className="text-3xl text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Does Software Architecture Matter */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why does software architecture matter?
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Software architecture is a complete view about the software system which deals with abstraction, composition, and is wide with large. 
              Hence, it is a crucial part of the software development cycle as software architecture defines the components, structures, 
              and decisions that lead to the successful system. Here's why it matters:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyMatterPoints.map((point, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${point.color} text-white rounded-full w-32 h-32 md:w-40 md:h-40 mx-auto flex items-center justify-center border-4 border-white shadow-xl hover:scale-110 transition-all duration-300`}>
                  <div className="text-center p-4">
                    <h3 className="font-bold text-sm md:text-base mb-1">{point.title}</h3>
                    <p className="text-xs text-white/90">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boost Your Growth */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Boost your Growth through Software Design and<br />Architecture Development
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaChartBar className="text-5xl text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-800">Analytics</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaLayerGroup className="text-5xl text-purple-600 mb-3" />
                    <h4 className="font-bold text-gray-800">Modular</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaShieldAlt className="text-5xl text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-800">Secure</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaRocket className="text-5xl text-orange-600 mb-3" />
                    <h4 className="font-bold text-gray-800">Fast</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                Design is an essential first-hand developer's part of an architecture, and the software should possess fundamental application features such as quality, responsiveness, and security to maintain growth and create them at every stage of our project implementation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our software architecture services focus on designing scalable solutions that adapt to business changes, ensuring seamless integration with existing systems, optimizing performance, and implementing security best practices from the ground up.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We help organizations transform their software architecture to support digital transformation initiatives, cloud migration, microservices adoption, and modern DevOps practices while maintaining business continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Principles of Software Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyPrinciples.map((principle, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
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
        <div className="container mx-auto relative z-10 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Are you interested in Our Software<br />Architecture Solutions?
          </h2>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Contact Our Experts
          </button>
        </div>
      </section>

      {/* Types of Software Architectures */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Software Architectures
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the right architectural pattern for your project based on scalability, complexity, and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {architectureTypes.map((type, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Your Software Architecture<br />Needs?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
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

export default SoftwareArchitecture;
