import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaWallet, FaMobileAlt, FaShieldAlt, FaChartLine, FaUniversity, FaCreditCard,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup, FaUsers, FaTimes
} from "react-icons/fa";

function Fintech() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const fintechFeatures = [
    {
      icon: <FaWallet className="text-5xl text-[#fb9c24]" />,
      title: "Digital Wallets",
      description: "Our expertise in Fintech Development in India ensures smooth and protected digital transactions."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#10B981]" />,
      title: "Mobile Banking Applications",
      description: "Our apps are designed for high performance and easy usability."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#8B5CF6]" />,
      title: "Secure Payment Systems",
      description: "With reliable Fintech Development in India, businesses can offer safe and trusted payment solutions."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#06b6d4]" />,
      title: "Investment Platforms",
      description: "Our systems provide real-time analytics and secure trading environments."
    },
    {
      icon: <FaUniversity className="text-5xl text-[#f87171]" />,
      title: "Lending Solutions",
      description: "We develop digital lending platforms with:&nbsp; Credit scoring integration, KYC verification, Loan management systems, Automated approval workflows"
    },
    {
      icon: <FaCreditCard className="text-5xl text-[#fbbf24]" />,
      title: "Payment Processing Systems",
      description: "Fast and reliable processing systems that support multiple payment methods and currencies."
    }
  ];

  const fintechServices = [
    {
      icon: <FaWallet className="text-5xl text-[#fb9c24]" />,
      title: "Custom Fintech Application Development",
      description: "We build tailored financial technology solutions that meet your business requirements. Our experience in Fintech Development in India helps startups and enterprises launch scalable fintech products."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#10B981]" />,
      title: "Mobile Banking & Wallet Development",
      description: "From concept to deployment, we create secure and feature-rich financial apps."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#8B5CF6]" />,
      title: "Secure Payment Gateway Development",
      description: "We implement advanced payment infrastructures with full compliance and security standards."
    }
  ];

  const benefits = [
    {
      icon: <FaWallet className="text-5xl text-[#fb9c24]" />,
      title: "Innovation",
      description: "Adopt cutting-edge financial technologies to improve service delivery and customer satisfaction."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#10B981]" />,
      title: "Security",
      description: "Ensure top-level data protection and regulatory compliance."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#8B5CF6]" />,
      title: "Advanced Analytics",
      description: "Gain insights into customer behavior and financial trends with intelligent reporting tools powered by Fintech Development in India."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Expert Team",
      description: "Our developers have extensive experience in fintech and financial technology solutions."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow industry standards and compliance guidelines for secure fintech development."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Delivery",
      description: "Using agile methodology, we ensure projects are delivered within timelines."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "Every solution undergoes detailed testing to ensure performance, security, and reliability."
    }
  ];

  const faqs = [
    {
      question: "What is fintech development?",
      answer: "Fintech development refers to the creation of digital financial solutions such as mobile banking apps, digital wallets, payment gateways, lending platforms, and investment systems. It combines finance and technology to deliver secure, scalable, and user-friendly financial services."
    },
    {
      question: "Why choose fintech development in India?",
      answer: "Fintech Development in India offers cost-effective solutions, skilled developers, advanced technical expertise, and global compliance standards. Indian fintech companies deliver secure and scalable platforms for startups and enterprises worldwide."
    },
    {
      question: "What types of fintech solutions do you provide?",
      answer: "We provide complete fintech solutions including: Digital wallet development, Mobile banking applications, Secure payment gateway systems, Investment and trading platforms, Lending and loan management systems, Payment processing systems"
    },
    {
      question: "How secure are your fintech applications?",
      answer: "Security and regulatory compliance are our top priorities in every Fintech Development in India project."

    },
    {
      question: "Do you provide custom fintech application development?",
      answer: "Yes. We offer custom fintech application development tailored to your business model, target audience, and regulatory requirements. Our solutions are scalable, secure, and designed for long-term growth."
    },
    {
      question: "How long does it take to develop a fintech platform?",
      answer: "Development time depends on project complexity. A basic fintech application may take 8–12 weeks, while advanced platforms with integrations and compliance features may take 3–6 months"
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
               Fintech Software Development Company in India
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology is a trusted Fintech Software Development Company in India delivering secure, scalable, and high-performance financial technology platforms for modern businesses.
                <br></br>We design and develop advanced fintech software that powers digital banking, payment gateways, lending systems, investment platforms, insurance tech solutions, and financial management applications.

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
                {/* Fintech Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Fintech Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaWallet className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaMobileAlt className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaShieldAlt className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaChartLine className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaCreditCard className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fintech Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Our Fintech Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {fintechFeatures.map((item, i) => (
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
              Benefits of Fintech Development
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {fintechServices.map((item, i) => (
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
              Benefits of Fintech Development
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
            Ready to Build the Future of Finance?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology for trusted and scalable Fintech Development in India. We help you create innovative financial platforms that are secure, efficient, and future-ready.
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

export default Fintech;