import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTruck, FaMapMarkedAlt, FaWarehouse, FaRoute, FaMobileAlt, FaChartLine,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup, FaUsers
} from "react-icons/fa";

function LogisticsTransport() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const logisticsFeatures = [
    {
      icon: <FaTruck className="text-5xl text-[#fb9c24]" />,
      title: "Fleet Management Software Development",
      description: "We build intelligent fleet tracking systems that help monitor vehicles, manage drivers, schedule maintenance, and reduce downtime."
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-[#10B981]" />,
      title: "GPS Tracking Software Development",
      description: "Our real-time GPS tracking systems provide live vehicle tracking, geofencing, route monitoring, and complete trip history for better decision-making."
    },
    {
      icon: <FaWarehouse className="text-5xl text-[#8B5CF6]" />,
      title: "Warehouse Management Software Development",
      description: "We develop warehouse management systems that automate inventory control, order processing, stock tracking, and reporting."
    },
    {
      icon: <FaRoute className="text-5xl text-[#06b6d4]" />,
      title: "Route Optimization System Development",
      description: "Using AI-based route planning, we create systems that reduce fuel costs, shorten delivery times, and improve operational efficiency."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#f87171]" />,
      title: "Driver Mobile App Development",
      description: "We develop mobile apps for drivers with navigation, delivery updates, electronic proof of delivery, and communication tools."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#fbbf24]" />,
      title: "Logistics Analytics & Reporting Development",
      description: "Get advanced dashboards and real-time reporting tools to monitor performance and improve logistics strategies."
    }
  ];

  const logisticsServices = [
    {
      icon: <FaTruck className="text-5xl text-[#fb9c24]" />,
      title: "Logistics & Transport Solutions",
      description: "Optimize your logistics operations with our smart transportation management systems. We build solutions for fleet tracking, route optimization, warehouse management, and last-mile delivery."
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-[#10B981]" />,
      title: "GPS Tracking Systems",
      description: "Implementing real-time GPS tracking for fleet management and route optimization."
    },
    {
      icon: <FaWarehouse className="text-5xl text-[#8B5CF6]" />,
      title: "Warehouse Management",
      description: "Developing systems for inventory management and warehouse automation."
    }
  ];

  const benefits = [
    {
      icon: <FaTruck className="text-5xl text-[#fb9c24]" />,
      title: "Increased Operational Efficiency",
      description: "Automate processes and reduce manual errors with smart logistics systems."
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-[#10B981]" />,
      title: "Real-Time Visibility",
      description: "Track vehicles, shipments, and inventory from a centralized dashboard."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#8B5CF6]" />,
      title: "Cost Reduction",
      description: "Optimize routes, reduce fuel consumption, and improve asset utilization."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Experienced Development Team",
      description: "We specialize in logistics and transport technology solutions."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Industry Best Practices",
      description: "We follow modern development standards to ensure high performance and security."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Project Delivery",
      description: "Agile development process ensures timely completion."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "We thoroughly test every system before deployment."
    }
  ];

  const faqs = [
    {
      question: "What is BTJ Alpha Technology?",
      answer: "BTJ Alpha Technology is a technology-driven company specializing in logistics and transport solutions. We provide innovative digital platforms and smart systems that help businesses streamline operations, improve efficiency, and enhance supply chain visibility."
    },
    {
      question: "What services does BTJ Alpha Technology offer?",
      answer: "We offer a range of solutions including:Logistics management systems,Transport tracking and fleet management,Supply chain optimization tools,Custom software development,Business process automation,Data analytics and reporting solutions"
    },
    {
      question: "How can your technology benefit my business?",
      answer: "Our solutions help businesses:Reduce operational costs,Improve delivery speed and accuracy,Enhance real-time tracking and transparency,Automate manual processes,Make data-driven decisions,Increase overall productivity"
    },
    {
      question: "Can your platform be customized to our business needs?",
      answer: "Yes. BTJ Alpha Technology provides flexible and scalable solutions that can be customized to meet your specific operational requirements, industry standards, and growth plans."
    },
    {
      question: "Do you support integration with existing systems?",
      answer: "Absolutely. Our technology is designed to integrate seamlessly with existing ERP systems, accounting software, warehouse management systems, and third-party platforms."
    },
    {
      question: "Is your system suitable for small businesses or only large enterprises?",
      answer: "Our solutions are scalable and suitable for startups, SMEs, and large enterprises. We tailor our services based on the size and complexity of your operations."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="lg:pl-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Logistics Software Development for Smart Transportation
              </h1>
              <h4 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900 mb-6 leading-tight">Logistics Software Development for Smart Transportation</h4>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We provide professional Logistics Software Development services to help businesses streamline transportation, fleet operations, and warehouse management. Our smart systems are designed to improve delivery speed, reduce operational costs, and increase overall efficiency.
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
                {/* Logistics Transport Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Logistics Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaTruck className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaMapMarkedAlt className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaWarehouse className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaRoute className="text-3xl text-[#10B981]" />
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

      {/* Logistics Transport Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Our Logistics & Transport Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {logisticsFeatures.map((item, i) => (
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
              Our Logistics & Transport Development Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {logisticsServices.map((item, i) => (
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
              Benefits of Our Logistics Technology Development
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
              Why Choose Us for Logistics Software Development?
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
            Ready to Build Your Logistics System?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us for reliable Transport Management System Development and scalable logistics software solutions.
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

export default LogisticsTransport;