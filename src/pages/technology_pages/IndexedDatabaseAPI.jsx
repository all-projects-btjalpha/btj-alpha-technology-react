import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaDatabase, FaRocket, FaLayerGroup, FaCode, FaServer,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaUsers,
  FaLaptop, FaSync, FaChartLine, FaTools, FaCogs, FaMobileAlt, FaShieldAlt
} from "react-icons/fa";

function IndexedDatabaseAPI() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const indexedDBFeatures = [
    {
      icon: <FaDatabase className="text-5xl text-[#4285f4]" />,
      title: "Client-Side Database",
      description: "IndexedDB is a powerful browser-based database that stores large amounts of structured data directly on the user’s device."
    },
    {
      icon: <FaRocket className="text-5xl text-[#4285f4]" />,
      title: "High Performance",
      description: "Asynchronous operations ensure non-blocking database transactions for smooth user experience."
    },
    {
      icon: <FaLayerGroup className="text-5xl text-[#4285f4]" />,
      title: "Index-Based Queries",
      description: "Efficient data retrieval using indexed key-value pairs and advanced query methods."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#4285f4]" />,
      title: "Persistent Storage",
      description: "Data remains stored even after browser restarts or tab closures."
    },
    {
      icon: <FaCode className="text-5xl text-[#4285f4]" />,
      title: "JavaScript Integration",
      description: "Native JavaScript API support for seamless client-side data management."
    },
    {
      icon: <FaServer className="text-5xl text-[#4285f4]" />,
      title: "Offline Capabilities",
      description: "Enable web applications to function without internet connectivity."
    }
  ];

  const indexedDBServices = [
    {
      icon: <FaCode className="text-5xl text-[#4285f4]" />,
      title: "Custom IndexedDB Development",
      description: "We design and implement customized IndexedDB API solutions for web applications requiring local data storage and offline access."
    },
    {
      icon: <FaDatabase className="text-5xl text-[#10B981]" />,
      title: "Data Architecture & Optimization",
      description: "Design efficient database schemas, indexing strategies, and query optimization for maximum performance."
    },
    {
      icon: <FaServer className="text-5xl text-[#8B5CF6]" />,
      title: "Data Synchronization Solutions",
      description: "Implement real-time data synchronization between client-side storage and backend servers."
    }
  ];

  const benefits = [
    {
      icon: <FaDatabase className="text-5xl text-[#4285f4]" />,
      title: "Offline Support",
      description: "Applications work seamlessly even without internet connectivity."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: "Improved Performance",
      description: "Fast local data access reduces server load and network latency."
    },
    {
      icon: <FaLayerGroup className="text-5xl text-[#10B981]" />,
      title: "Scalability",
      description: "Handle large datasets efficiently with advanced indexing and querying."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#4285f4]" />,
      title: "Experienced Frontend Experts",
      description: "Our developers have deep expertise in client-side database architecture and modern JavaScript technologies."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best  Development Practices",
      description: "We follow IndexedDB best practices for optimal performance, security, and reliability."
    },
    {
      icon: <FaClock className="text-5xl text-[#fb9c24]" />,
      title: "Agile & On-Time Delivery",
      description: "Efficient project management ensures timely completion."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: "Quality Assurance",
      description: "Comprehensive testing ensures your IndexedDB implementation works flawlessly across browsers."
    }
  ];

  const faqs = [
    {
      question: "What is IndexedDB?",
      answer: "IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files and blobs."
    },
    {
      question: "When to use IndexedDB?",
      answer: "Use IndexedDB for web applications that need to store large amounts of data locally and work offline."
    },
    {
      question: "How does IndexedDB differ from localStorage?",
      answer: "IndexedDB can store complex data types and larger amounts of data, while localStorage is limited to simple key-value string pairs."
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
                IndexedDB API  Development 
                Services BTJ Alpha Technology
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology is a trusted IndexedDB API Development Company in India, delivering powerful client-side database solutions for modern web applications. We specialize in building offline-capable, high-performance web apps using IndexedDB API development services tailored to your business needs.
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
                {/* IndexedDB Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Database Icon with gradient background */}
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaDatabase className="text-9xl text-[#4285f4]" />
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
                    <FaLayerGroup className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaServer className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IndexedDB Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of IndexedDB API
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {indexedDBFeatures.map((item, i) => (
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
              Our IndexedDB API Development Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {indexedDBServices.map((item, i) => (
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
              Benefits of IndexedDB API Development
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
           Why Choose BTJ Alpha Technology for IndexedDB API Development?
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
            Ready to Implement IndexedDB in Your Web Application?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology, a leading IndexedDB API Development Company in India, and create fast, offline-ready, and performance-driven web applications.
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

export default IndexedDatabaseAPI;