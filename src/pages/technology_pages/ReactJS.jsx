import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaReact, FaCode, FaMobileAlt, FaRocket, FaPuzzlePiece, FaUsers,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaShieldAlt,
  FaLaptop, FaSync, FaDatabase, FaChartLine, FaPlug, FaCog, FaTools
} from "react-icons/fa";

function ReactJS() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const reactServices = [
    {
      icon: <FaPuzzlePiece className="text-5xl text-[#61dafb]" />,
      title: "Custom ReactJS Application Development",
      description: "We build tailored web applications aligned with your business objectives using modern ReactJS frameworks"
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "Rapid UI Development",
      description: "Develop highly responsive and interactive UI components with reusable architecture."
    },
    {
      icon: <FaSync className="text-5xl text-[#4285F4]" />,
      title: "ReactJS Migration Services",
      description: "Upgrade legacy systems to modern React-based applications for better performance and flexibility."
    },
    {
      icon: <FaPlug className="text-5xl text-[#10B981]" />,
      title: "ReactJS Maintenance & Support",
      description: "Ongoing optimization, bug fixing, performance enhancement, and feature upgrades."
    }
  ];

  const whyReact = [
    {
      icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
      title: "Improved Performance",
      description: "ReactJS uses Virtual DOM technology that ensures faster rendering and improved application speed."
    },
    {
      icon: <FaSync className="text-4xl text-[#61dafb]" />,
      title: "Faster Development Process",
      description: "Reusable components reduce development time and ensure consistent UI structure."
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-[#4285F4]" />,
      title: "Reusable Components",
      description: "Develop once and reuse multiple times across the application, reducing cost and effort."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "SEO Friendly Structure",
      description: "Server-side rendering capabilities improve search engine visibility."
    },
    {
      icon: <FaUsers className="text-4xl text-[#8B5CF6]" />,
      title: "Large Community Support",
      description: "Backed by a massive developer community ensuring regular updates and stability."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
      title: "Experienced ReactJS Developers",
      description: "Our skilled developers have hands-on experience in delivering scalable web applications."
    },
    {
      icon: <FaClock className="text-4xl text-[#61dafb]" />,
      title: "On-Time Project Delivery",
      description: "We follow agile methodologies to ensure timely project completion."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#4285F4]" />,
      title: "Customized Solutions",
      description: "Every project is designed according to client-specific requirements."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "Technical Support & Maintenance",
      description: "Dedicated support team for ongoing optimization and troubleshooting."
    },
    {
      icon: <FaTools className="text-4xl text-[#8B5CF6]" />,
      title: "Competitive Pricing",
      description: "Affordable ReactJS development services without compromising quality."
    }
  ];

  const faqs = [
    {
      question: "What does a ReactJS development company do?",
      answer: "A ReactJS development company builds web applications using the ReactJS library for fast and interactive user interfaces."
    },
    {
      question: "How much does ReactJS development cost in India?",
      answer: "Cost depends on project complexity, features, and timeline. We provide customized pricing."
    },
    {
      question: " How long does it take to develop a ReactJS web application?",
      answer: "Basic projects may take 4–6 weeks, while enterprise applications require more time."
    },
    {
      question: " Do you provide ongoing support?",
      answer: "Yes, we offer maintenance and technical support services."
    },
    {
      question: "Is ReactJS good for SEO?",
      answer: "Yes, with proper implementation and server-side rendering, ReactJS applications can be SEO-friendly."
    },
    {
      question: " Why choose BTJ Alpha Technology Pvt. Ltd.?",
      answer: "We provide scalable, performance-driven, and cost-effective ReactJS development solutions.."
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
               Leading ReactJS<br />
                Development<br />
                Company in India
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Build Fast, Scalable & High-Performance Web Applications with Expert ReactJS Developers 
                BTJ Alpha Technology Pvt. Ltd. is a trusted ReactJS Development Company in India delivering high-quality, scalable, and performance-driven web applications. 
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
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* React Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large React Icon */}
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full w-80 h-80 flex items-center justify-center shadow-2xl">
                      <FaReact className="text-9xl text-[#61dafb] animate-spin-slow" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaCode className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaRocket className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaPuzzlePiece className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaMobileAlt className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Business Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
                <div className="relative">
                  {/* Person with React Development */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <FaUsers className="text-5xl text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCode className="text-3xl text-[#61dafb] mb-2" />
                      <div className="text-xs font-bold text-gray-700">JSX</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaCog className="text-3xl text-[#fb9c24] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Hooks</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaRocket className="text-3xl text-[#4285F4] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Deploy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Build Powerful Applications with ReactJS Development Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ReactJS is one of the most popular JavaScript libraries used for building dynamic and interactive user interfaces. Businesses prefer ReactJS application development because of its component-based architecture, fast rendering using Virtual DOM, and scalable structure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                 At BTJ Alpha Technology Pvt. Ltd., our React front-end development experts design robust applications that deliver smooth user experiences across devices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Key Benefits of ReactJS:   Fast rendering with Virtual DOM,Reusable components for faster development,SEO-friendly architecture,High performance & scalability,Easy integration with APIs

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* React Development Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Our ReactJS Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              BTJ Alpha Technology Pvt. Ltd. Technologies offers a wide range of React JS development services for both businesses achieve their goals and stay competitive in an increasingly fast-paced and digital-first world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reactServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Consider React */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ReactJS for Web Development?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              React JS is one of the most loved JavaScript libraries. Its ability to build complex and dynamic real-world applications makes it quite popular among developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyReact.slice(0, 2).map((reason, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
            {whyReact.slice(2).map((reason, index) => (
              <div
                key={index + 2}
                data-aos="fade-up"
                data-aos-delay={(index + 2) * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Step2gen */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Why Choose BTJ Alpha Technology Pvt. Ltd. for ReactJS Development?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you need a reliable partner for React development, BTJ Alpha Technology Pvt. Ltd. stands out as a top choice. Here are some of the reasons why you should work with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{reason.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partner with BTJ Alpha Technology Pvt. Ltd. for Advanced ReactJS Development
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let’s build secure, scalable, and future-ready web applications for your business.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started Today
          </button>
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
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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

export default ReactJS;
