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
      description: "It helps your system handle more users and more data as your business grows.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Maintainability",
      description: "It makes updates, changes, and improvements easier and faster.",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Performance",
      description: "It ensures your software runs smoothly, quickly, and efficiently.",
      color: "from-purple-600 to-indigo-700"
    },
    {
      title: "Security",
      description: "It protects your data and keeps user information safe.",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Reliability",
      description: "It ensures your system works consistently without frequent failures.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Flexibility",
      description: "It allows your system to adapt to changing business needs.",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Cost Efficiency",
      description: "It reduces long-term costs by preventing major problems and rework.",
      color: "from-purple-600 to-indigo-700"
    },
    {
      title: "User Experience",
      description: "It supports smooth and easy interactions for users.",
      color: "from-blue-500 to-blue-700"
    }
  ];

  const keyPrinciples = [
    {
      icon: <FaCube className="text-5xl text-red-500" />,
      title: "Single Responsibility",
      description: " Each component should focus on one clear task."
    },
    {
      icon: <FaNetworkWired className="text-5xl text-blue-500" />,
      title: "Separation of Concerns",
      description: " Keep different functions separate to reduce complexity."
    },
    {
      icon: <FaRocket className="text-5xl text-yellow-500" />,
      title: "Least Knowledge",
      description: " Components should only know what is necessary."
    },
    {
      icon: <FaTools className="text-5xl text-cyan-500" />,
      title: "DRY (Don’t Repeat Yourself)",
      description: "Reuse code to avoid duplication and errors."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-indigo-500" />,
      title: "Secure by Design",
      description: " Build security into the system from the start."
    },
    {
      icon: <FaLock className="text-5xl text-blue-600" />,
      title: "Encapsulation",
      description: "Hide internal details and expose only what is needed."
    },
    {
      icon: <FaCogs className="text-5xl text-orange-500" />,
      title: "Modularity",
      description: "Divide the system into smaller, manageable modules."
    },
    {
      icon: <FaLayerGroup className="text-5xl text-green-600" />,
      title: "Layered Architecture",
      description: "Organize code into clear layers for better structure."
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-purple-600" />,
      title: "Scalability",
      description: "Design systems that grow smoothly with your business."
    }
  ];

  const architectureTypes = [
    {
      icon: "🏢",
      title: "Monolithic Architecture",
      description: "All the parts of the software application are built together as one system. This is simple to do at first. It can be tough to make it bigger later on."
    },
    {
      icon: "🔷",
      title: "Microservices Architecture",
      description: "The software application is broken down into services that work on their own. Each service does a job, which makes it easier to make the application bigger and fix it when something goes wrong."
    },
    {
      icon: "⚡",
      title: "Event-Driven Architecture",
      description: "The different parts of the system talk to each other by sending messages. This lets the system work in time and the parts do not have to be closely connected."
    },
    {
      icon: "🎯",
      title: "Domain-Driven Architecture",
      description: "The design of the system is based on the business. How it works. This helps teams understand and manage business systems."
    },
    {
      icon: "📐",
      title: "Layered Architecture",
      description: "The system is broken down into layers like the part that users see the part that does the work and the part that stores the data. This makes the system more organized and easier to fix."
    },
    {
      icon: "🌐",
      title: "Model-View-Controller (MVC)",
      description: "The software application is broken down into three parts: the data, the user interface and the logic. This makes it easier to build and test the application."
    },
    {
      icon: "🗄️",
      title: "MVVM (Model-View-ViewModel)",
      description: "This is similar to MVC. It separates the user interface from the business logic more clearly. It is often used in applications that users interact with."
    },
    {
      icon: "🔌",
      title: "Service-Oriented Architecture",
      description: "Applications are built using services that can be used again and again. These services talk to each other over a network. This makes it easier to change and add things to the application."
    },
    {
      icon: "🧱",
      title: "Component-Based Architecture",
      description: "The system is built using parts that can be used again and again. Each part can be built and fixed on its own."
    },
    {
      icon: "🔄",
      title: "Peer-to-Peer Architecture",
      description: "Each system works as both the client and the server. This lets the systems talk to each other in a way that is not controlled by one system and they can share resources."
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
                At At BTJ Alpha Technology, we design software solutions that are strong, scalable, and built to last.
                Our expert architects create reliable systems using best practices, modern design patterns, and the latest technologies

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
              Software architecture gives a clear structure to your system.
              It defines how different parts of the software work together.
              Good architecture is important for building a successful and long-lasting system.
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
                Good software design is an important part of strong architecture.
                Your system should focus on quality, speed, and security at every stage of development.</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our software architecture services help you build scalable solutions that grow with your business.
                We ensure smooth integration with your existing systems, improve performance, and apply strong security practices from the start.</p>
              <p className="text-gray-600 leading-relaxed">
                We also support businesses with digital transformation, cloud migration, microservices adoption, and modern DevOps practices — while keeping your operations running smoothly. </p>
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
            <p>Strong software architecture is built on simple but important principles that ensure quality, flexibility, and long-term success.</p>
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
          <p className="text-white">We are ready to help you design strong, scalable, and secure software systems for your business.</p><br></br>
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
              When you are picking a software architecture you have to think about how big your project's how complicated it is and what your business needs.
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
                  className={`transition-all duration-300 overflow-hidden ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
