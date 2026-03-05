import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCogs, FaChartBar, FaBox, FaUsers, FaMoneyBillWave, FaWarehouse,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaServer, FaLayerGroup, FaIndustry, FaBalanceScale, FaTimes
} from "react-icons/fa";

function ERP() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const erpFeatures = [
    {
      icon: <FaCogs className="text-5xl text-[#fb9c24]" />,
      title: "Process Automation",
      description: "Automate business processes across departments to improve efficiency and reduce manual errors. Our ERP Solutions Development approach streamlines workflows and enhances productivity."
    },
    {
      icon: <FaChartBar className="text-5xl text-[#10B981]" />,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools help businesses make data-driven decisions with real-time insights."
    },
    {
      icon: <FaBox className="text-5xl text-[#8B5CF6]" />,
      title: "Inventory Management",
      description: "Track inventory in real time with automated reordering, stock monitoring, and demand forecasting systems built through professional ERP Solutions Development."
    },
    {
      icon: <FaUsers className="text-5xl text-[#06b6d4]" />,
      title: " Human Resources Management",
      description: "Manage payroll, employee records, benefits administration, and performance tracking with integrated HR modules."
    },
    {
      icon: <FaMoneyBillWave className="text-5xl text-[#f87171]" />,
      title: "Financial Management",
      description: "Complete financial control including accounting, budgeting, reporting, and compliance management."
    },
    {
      icon: <FaWarehouse className="text-5xl text-[#fbbf24]" />,
      title: "Supply Chain Management",
      description: "End-to-end supply chain management including procurement, logistics, vendor management, and distribution tracking."
    }
  ];

  const erpServices = [
    {
      icon: <FaCogs className="text-5xl text-[#fb9c24]" />,
      title: "Custom ERP Solutions",
      description: "We design and develop tailored ERP platforms that align with your business structure. Our ERP Solutions Development services focus on flexibility, scalability, and seamless integration."
    },
    {
      icon: <FaChartBar className="text-5xl text-[#10B981]" />,
      title: "Business Intelligence Systems",
      description: "Create advanced dashboards and reporting tools to support smarter business strategies."
    },
    {
      icon: <FaBox className="text-5xl text-[#8B5CF6]" />,
      title: "Inventory & Operations Management",
      description: "Develop real-time inventory tracking and automated operational systems for better control and efficiency."
    }
  ];

  const benefits = [
    {
      icon: <FaCogs className="text-5xl text-[#fb9c24]" />,
      title: "Increased Efficiency",
      description: "Streamline operations with integrated processes and automation powered by ERP Solutions Development expertise"
    },
    {
      icon: <FaChartBar className="text-5xl text-[#10B981]" />,
      title: "Valuable Business Insights",
      description: "Gain real-time analytics and comprehensive reports to improve planning and forecasting."
    },
    {
      icon: <FaBalanceScale className="text-5xl text-[#8B5CF6]" />,
      title: "Complete Integration",
      description: "Integrate all business functions into one unified platform to enhance collaboration and productivity."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaIndustry className="text-5xl text-[#fb9c24]" />,
      title: "Expert Team",
      description: "Our team has extensive experience in enterprise software and ERP Solutions Development."
    },
    {
      icon: <FaChartBar className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow industry standards and modern development methodologies."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Delivery",
      description: "Agile development ensures timely project completion."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and best coding practices guarantee secure and reliable ERP systems."
    }
  ];

  const faqs = [
    {
      question: "How does ERP software improve business efficiency?",
      answer: "ERP (Enterprise Resource Planning) software connects finance, HR, inventory, supply chain, and daily operations into one centralized system. BTJ Alpha Technology specializes in ERP Solutions Development that eliminates data silos, reduces manual work, improves reporting accuracy, and gives management real-time visibility into business performance."
    },
    {
      question: "What modules are included in your ERP solutions?",
      answer: "Our ERP systems typically include: Financial Management,Human Resource Management,Inventory Management,Supply Chain Management,Business Intelligence & Reporting,Process Automatio"
    },
    {
      question: "Do you provide fully customized ERP development?",
      answer: "Yes. BTJ Alpha Technology offers complete custom ERP Solutions Development tailored to your business structure and long-term goals. We design systems based on your specific workflows instead of forcing your business to adjust to generic software."
    },
    {
      question: "Can your ERP system integrate with our existing tools?",
      answer: "Absolutely. BTJ Alpha Technology builds ERP platforms that seamlessly integrate with accounting software, CRM systems, third-party APIs, payment gateways, legacy applications, and cloud services. This ensures smooth data flow across all departments without disrupting current operations."
    },
    {
      question: " Is your ERP software scalable for future growth?",
      answer: "Yes. BTJ Alpha Technology develops scalable ERP systems using modern architecture that supports increasing users, large data volumes, and expanding business processes. Our solutions are built to grow with your organization while maintaining performance, security, and stability."
    },

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
                ERP Software Development Company – Integrated & Scalable Business Management Systems
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology is a trusted ERP Software Development Company delivering powerful, secure, and fully customized ERP systems for modern businesses.
                We design and develop comprehensive ERP software that connects finance, HR, inventory, supply chain, manufacturing, sales, and customer management into one centralized and automated platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button
                    className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Us
                  </button>
                </Link>
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
                {/* ERP Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large ERP Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaCogs className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaChartBar className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaBox className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaUsers className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaMoneyBillWave className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of ERP Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {erpFeatures.map((item, i) => (
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
              Our ERP Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {erpServices.map((item, i) => (
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
              Benefits of ERP Technology
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
              Why Choose BTJ Alpha Technology?
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
            Ready to Transform Business Operations?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology to build a secure and scalable ERP platform for your organization. Our professional ERP Solutions Development services help businesses streamline operations, improve efficiency, and drive long-term growth.
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

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 max-md:p-2">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button onClick={closeForm} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-2 shadow-md">
              <FaTimes className="text-xl" />
            </button>
            
            <div className="flex flex-col md:flex-row gap-8 p-8 max-md:p-6">
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 mb-4">
                  Get A Free Consultation With Our Marketing Expert
                </h2>
                <div className="w-16 h-1 bg-[#fb9c24] rounded-full mb-6"></div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fill out the form and our marketing expert will get in touch with you shortly to discuss your project requirements.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-bold">1</span>
                    </div>
                    <p className="text-gray-700">Share your project requirements</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Get a free consultation</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Receive custom solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
                <UserForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ERP;