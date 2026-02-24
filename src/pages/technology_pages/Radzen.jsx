import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaCode, FaShieldAlt, FaServer, FaRocket, FaLayerGroup,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaUsers,
  FaLaptop, FaSync, FaChartLine, FaTools, FaCogs, FaMobileAlt
} from "react-icons/fa";

function Radzen() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const radzenFeatures = [
    {
      icon: <FaCode className="text-5xl text-[#2d8cff]" />,
      title: "Blazor Components",
      description: "Rich set of UI components for Blazor Server and WebAssembly applications."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#2d8cff]" />,
      title: "Enterprise Security",
      description: "Built-in security features and compliance with enterprise standards."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#2d8cff]" />,
      title: "Responsive Design",
      description: "Fully responsive components that work on all device sizes and browsers."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#2d8cff]" />,
      title: "Data Visualization",
      description: "Advanced charting and reporting components for data analysis."
    },
    {
      icon: <FaCogs className="text-5xl text-[#2d8cff]" />,
      title: "Easy Integration",
      description: "Seamless integration with Blazor framework and existing applications."
    },
    {
      icon: <FaLayerGroup className="text-5xl text-[#2d8cff]" />,
      title: "Component Library",
      description: "Comprehensive library of UI components with Material Design themes."
    }
  ];

  const radzenServices = [
    {
      icon: <FaCode className="text-5xl text-[#2d8cff]" />,
      title: "Radzen Development",
      description: "Building enterprise applications with Radzen Blazor UI components."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Dashboard Creation",
      description: "Creating interactive dashboards and data visualization solutions."
    },
    {
      icon: <FaServer className="text-5xl text-[#8B5CF6]" />,
      title: "System Integration",
      description: "Integrating Radzen components with existing .NET applications."
    }
  ];

  const benefits = [
    {
      icon: <FaCode className="text-5xl text-[#2d8cff]" />,
      title: "Rapid Development",
      description: "Accelerate development with pre-built, customizable components."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "Performance",
      description: "Optimized components for fast loading and smooth user experience."
    },
    {
      icon: <FaShieldAlt className="text-5l text-[#10B981]" />,
      title: "Enterprise Grade",
      description: "Robust, secure solutions designed for business-critical applications."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#2d8cff]" />,
      title: "Blazor Experts",
      description: "Specialists with extensive Blazor and Radzen platform experience."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "Following Radzen best practices for optimal implementation."
    },
    {
      icon: <FaClock className="text-5xl text-[#fb9c24]" />,
      title: "On-Time Delivery",
      description: "Agile development ensuring timely project completion."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and best coding practices."
    }
  ];

  const faqs = [
    {
      question: "What is Radzen?",
      answer: "Radzen is a UI component library for Blazor applications, offering rich components with Material Design themes and drag-drop designers."
    },
    {
      question: "Why use Radzen components?",
      answer: "Radzen offers pre-built, customizable UI components that accelerate development and ensure consistent, professional user interfaces."
    },
    {
      question: "Which platforms does Radzen support?",
      answer: "Radzen supports Blazor Server and Blazor WebAssembly applications with full .NET integration."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Radzen<br />
                Development
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Build enterprise-grade Blazor applications with Radzen UI component library. Our developers create professional, scalable solutions using Radzen components.
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
                {/* Radzen Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Code Icon with gradient background */}
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaCode className="text-9xl text-[#2d8cff]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaChartLine className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaMobileAlt className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaShieldAlt className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaCogs className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radzen Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3l md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {radzenFeatures.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#fb9c24] text-center" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-center mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {radzenServices.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#fb9c24] text-center" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {benefits.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 container mx-auto px-4">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#fb9c24] text-center" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
            Ready to Build with Radzen?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to leverage the power of Radzen for your Blazor applications.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 50}>
                <button onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFAQ === i ? <FaChevronUp className="text-[#fb9c24] flex-shrink-0" /> : <FaChevronDown className="text-gray-400 flex-shrink-0" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFAQ === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default Radzen;