import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaVideo, FaShieldAlt, FaServer, FaRocket, FaLayerGroup,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaUsers,
  FaLaptop, FaSync, FaChartLine, FaTools, FaCogs, FaMobileAlt
} from "react-icons/fa";

function Zoom() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const zoomFeatures = [
    {
      icon: <FaVideo className="text-5xl text-[#2d8cff]" />,
      title: "Video Conferencing Integration",
      description: "Enable HD video meetings, screen sharing, breakout rooms, recording, and webinar functionality directly inside your application."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#2d8cff]" />,
      title: "Enterprise-Level Security",
      description: "We implement end-to-end encryption, secure authentication, OAuth, and compliance-based security standards for enterprise Zoom integration."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#2d8cff]" />,
      title: "Cross-Platform Compatibility",
      description: "Our Zoom integrations work seamlessly across web, mobile (iOS & Android), and desktop platforms."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#2d8cff]" />,
      title: "Analytics & Reporting",
      description: "Access meeting analytics, user activity tracking, and performance reports using Zoom APIs."
    },
    {
      icon: <FaCogs className="text-5xl text-[#2d8cff]" />,
      title: "Easy API & SDK Integration",
      description: "We integrate Zoom REST APIs and Zoom SDK for custom workflows, automated meeting creation, and scheduling."
    },
    {
      icon: <FaLayerGroup className="text-5xl text-[#2d8cff]" />,
      title: "Scalable Meeting Infrastructure",
      description: "Support small team meetings or large-scale webinars with thousands of participants."
    }
  ];

  const zoomServices = [
    {
      icon: <FaVideo className="text-5xl text-[#2d8cff]" />,
      title: "Zoom API Integration",
      description: "We integrate Zoom APIs to automate meeting scheduling, user management, webinar setup, and reporting systems."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Custom Meeting & Webinar Solutions",
      description: "Build branded meeting solutions using Zoom SDK tailored to your business model."
    },
    {
      icon: <FaServer className="text-5xl text-[#8B5CF6]" />,
      title: "Enterprise Zoom Setup",
      description: "Complete enterprise-level Zoom deployment with account configuration, security policies, and system integration."
    }
  ];

  const benefits = [
    {
      icon: <FaVideo className="text-5xl text-[#2d8cff]" />,
      title: "Reliable Video Meetings",
      description: "Stable and high-quality video conferencing powered by Zoom’s global infrastructure."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "Easy Integration",
      description: "Simple API-based integration with your existing web or mobile application."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#10B981]" />,
      title: "Secure Communication",
      description: "Enterprise-grade encryption and secure authentication for safe virtual meetings."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#2d8cff]" />,
      title: "Video Communication Experts",
      description: "Our team has extensive experience in Zoom API Integration and enterprise video conferencing solutions."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Development Practices",
      description: "We follow secure coding standards and optimized API integration methods."
    },
    {
      icon: <FaClock className="text-5xl text-[#fb9c24]" />,
      title: "On-Time Project Delivery",
      description: "Efficient implementation and deployment without delays."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: "Quality Assurance & Testing",
      description: "Complete testing for performance, scalability, and security compliance."
    }
  ];

  const faqs = [
    {
      question: "What is Zoom integration?",
      answer: "Zoom integration involves connecting Zoom video conferencing capabilities with your existing applications and workflows."
    },
    {
      question: "How many participants can join a Zoom meeting?",
      answer: "Zoom supports meetings with up to 1,000 participants and webinars with up to 10,000 attendees."
    },
    {
      question: "Is Zoom secure for enterprise use?",
      answer: "Yes, Zoom offers enterprise-grade security with end-to-end encryption and compliance certifications."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right"className="lg:pl-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Zoom
                Integration Services

              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technology, we provide professional Zoom Integration Services to help businesses enable seamless video conferencing inside their web and mobile applications.
                Our experts specialize in Zoom API Integration and Zoom SDK Integration, allowing you to add secure video meetings, webinars, chat, recording, and analytics directly into your platform. </p>
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
                {/* Zoom Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Video Icon with gradient background */}
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaVideo className="text-9xl text-[#2d8cff]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaSync className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaChartLine className="text-3xl text-[#4285F4]" />
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

      {/* Zoom Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Our Zoom Integration
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {zoomFeatures.map((item, i) => (
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
              Our Zoom Integration Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {zoomServices.map((item, i) => (
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
            Key Benefits of Zoom Integration</h2>
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
              Why Choose BTJ Alpha Technology for Zoom Integration?
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
            Ready to Enable Video Meetings?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology for reliable and scalable Zoom Integration Services that empower your business with seamless video communication.
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

export default Zoom;