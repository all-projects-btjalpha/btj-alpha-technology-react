import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUsers, FaCommentDots, FaChartLine, FaEnvelope, FaCalendarAlt, FaTasks,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup, FaUserFriends, FaMoneyBillWave, FaTimes
} from "react-icons/fa";

function CRM() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const crmFeatures = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Contact Management",
      description: "Store and manage all customer information in one centralized system. Track communication history, preferences, and interactions easily through professional crm software development solutions."
    },
    {
      icon: <FaCommentDots className="text-5xl text-[#10B981]" />,
      title: "Communication Tools",
      description: "Integrate email, chat, and phone systems into a single dashboard. Improve response times and customer satisfaction with streamlined communication tools."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#8B5CF6]" />,
      title: "Sales Pipeline Management",
      description: "Monitor leads, track opportunities, and forecast sales performance using visual pipeline tools. Our crm software development services help businesses close deals faster and increase revenue."
    },
    {
      icon: <FaEnvelope className="text-5xl text-[#06b6d4]" />,
      title: "Email Marketing Automation",
      description: "Create automated email campaigns with templates, personalization features, and performance tracking to boost engagement."
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-[#f87171]" />,
      title: "Task & Workflow Automation",
      description: "Automate follow-ups, reminders, and routine tasks to increase team productivity and reduce manual workload."
    },
    {
      icon: <FaTasks className="text-5xl text-[#fbbf24]" />,
      title: "Reporting & Analytics",
      description: "Access detailed reports and real-time dashboards to gain insights into sales performance, customer behavior, and business growth metrics powered by advanced crm software development technologies."
    }
  ];

  const crmServices = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Custom CRM Development",
      description: "We design customized CRM platforms based on your industry requirements and workflow structure. Our crm software development approach ensures flexibility, security, and high performance."
    },
    {
      icon: <FaCommentDots className="text-5xl text-[#10B981]" />,
      title: "Customer Service Platforms",
      description: "Build support systems with ticket management, service tracking, and communication automation to enhance customer experience."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#8B5CF6]" />,
      title: "Sales Automation Solutions",
      description: "Develop intelligent sales management systems with lead tracking, pipeline management, and performance monitoring tools."
    }
  ];

  const benefits = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Stronger Customer Relationships",
      description: "Improve customer retention with organized data management and personalized communication strategies."
    },
    {
      icon: <FaCommentDots className="text-5xl text-[#10B981]" />,
      title: "Better Team Productivity",
      description: "Reduce repetitive tasks through automation and structured workflows."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#8B5CF6]" />,
      title: "Data-Driven Decisions",
      description: "Make smarter business decisions with advanced reporting and analytics features."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUserFriends className="text-5xl text-[#fb9c24]" />,
      title: "Expert Team",
      description: "Our team has extensive experience in healthcare technology solutions."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow industry best practices for healthcare technology development."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Delivery",
      description: "Agile development ensuring timely project completion."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and best coding practices."
    }
  ];

  const faqs = [
    {
      question: " Why should I choose custom CRM development instead of ready-made CRM tools?",
      answer: "Ready-made CRM software often includes unnecessary features and may not fully match your workflow. Custom CRM development allows you to build a system that fits your exact sales process, approval structure, and reporting needs.BTJ Alpha Technology develops tailored CRM software that improves efficiency, reduces manual work, and supports long-term business growth."
    },
    {
      question: "What features are included in your custom CRM software?",
      answer: "At BTJ Alpha Technology, we build feature-rich CRM systems that typically include:Contact & Lead Management,Sales Pipeline & Deal Tracking,Task & Follow-Up Automation,Email, SMS & Call Integration,Marketing Campaign Management,Customer Support Ticketing,Role-Based Access Control,Document Management,Real-Time Reports & Dashboards,Performance Analytics & Forecasting,Each module is fully customized according to your business requirements."
    },
    {
      question: "Can you build industry-specific CRM systems?",
      answer: "Yes. BTJ Alpha Technology develops CRM software tailored for industries such as real estate, healthcare, finance, education, manufacturing, retail, and service-based businesses.We design workflows and dashboards that align with your operational structure and compliance needs."
    },
    {
      question: "Is your CRM software scalable as my business grows?",
      answer: "Absolutely. Our CRM platforms are built with scalable architecture that supports increasing users, large customer databases, and expanding sales operations.BTJ Alpha Technology ensures your CRM remains fast, secure, and performance-optimized as your company grows."
    },
    {
      question: "Can your CRM integrate with existing business tools?",
      answer: "Yes. BTJ Alpha Technology integrates CRM systems with:ERP software,Accounting tools,Payment gateways,Marketing automation platforms,WhatsApp, SMS & Email APIs,Third-party business applications,This ensures smooth data flow and centralized business management."
    },
    {
      question: "How does custom CRM software improve sales and revenue?",
      answer: "A well-designed CRM system helps track leads, automate follow-ups, monitor team performance, and generate sales forecasts.With structured workflows and actionable analytics provided by BTJ Alpha Technology, businesses can increase conversion rates, close deals faster, and improve customer retention."
    },
    {
      question: "Do you provide post-development support and upgrades?",
      answer: "Yes. BTJ Alpha Technology offers ongoing maintenance, feature enhancements, performance monitoring, security updates, and technical support to ensure your CRM software runs smoothly at all times."
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
                CRM Software Development Company – We Build Smart Systems to Manage Your Customers
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology is a trusted CRM Software Development Company delivering powerful, secure, and fully customized CRM software for businesses of all sizes.
                We design and develop advanced CRM software that helps organizations manage leads, track sales activities, automate marketing campaigns, and improve customer support — all from a centralized and easy-to-use system.
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
                {/* CRM Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large CRM Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaUsers className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaCommentDots className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaChartLine className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaEnvelope className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaCalendarAlt className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of CRM Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {crmFeatures.map((item, i) => (
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
              Our CRM Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {crmServices.map((item, i) => (
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
              Benefits of CRM Technology
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
            Ready to Improve Your Customer Management?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology for reliable and scalable crm software development services. We help businesses build powerful CRM systems that enhance customer relationships, streamline sales processes, and drive long-term growth.
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

export default CRM;