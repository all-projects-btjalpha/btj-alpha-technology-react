import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaShoppingCart, FaStore, FaCreditCard, FaSearch, FaShieldAlt, FaChartLine,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup, FaUsers
} from "react-icons/fa";

function Marketplace() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const marketplaceFeatures = [
    {
      icon: <FaShoppingCart className="text-5xl text-[#fb9c24]" />,
      title: "Multi-Vendor Platforms",
      description: "Build a dynamic platform where multiple sellers can register, list products, and manage their stores easily."
    },
    {
      icon: <FaStore className="text-5xl text-[#10B981]" />,
      title: "Vendor Management",
      description: "Complete vendor onboarding, product management, commission setup, and performance tracking tools."
    },
    {
      icon: <FaCreditCard className="text-5xl text-[#8B5CF6]" />,
      title: "Payment Integration",
      description: "Secure payment gateway integration with escrow systems, split payments, and multi-currency support."
    },
    {
      icon: <FaSearch className="text-5xl text-[#06b6d4]" />,
      title: "Advanced Search & Filters",
      description: "Smart search functionality with categories, filters, and personalized recommendations for better discovery."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#f87171]" />,
      title: "Trust & Safety",
      description: "Seller verification, ratings, reviews, and fraud prevention systems to build customer confidence."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#fbbf24]" />,
      title: "Seller Analytics Dashboard",
      description: "Comprehensive dashboards for vendors to track sales, orders, revenue, and performance insights."
    }
  ];

  const marketplaceServices = [
    {
      icon: <FaShoppingCart className="text-5xl text-[#fb9c24]" />,
      title: "Marketplace Platform Development",
      description: "We design and develop scalable online marketplaces tailored to your industry and business model."
    },
    {
      icon: <FaStore className="text-5xl text-[#10B981]" />,
      title: "Vendor Management System",
      description: "Advanced systems to manage sellers, commissions, payouts, and product approvals efficiently."
    },
    {
      icon: <FaCreditCard className="text-5xl text-[#8B5CF6]" />,
      title: "Payment System Integration",
      description: "Implementation of secure and reliable payment gateways with multi-currency and automated settlement features under our Custom Multi-Vendor Marketplace Development Services in India."
    }
  ];

  const benefits = [
    {
      icon: <FaShoppingCart className="text-5xl text-[#fb9c24]" />,
      title: "Scale Your Business",
      description: "Connect multiple vendors and customers on a single platform to expand market reach."
    },
    {
      icon: <FaSearch className="text-5xl text-[#10B981]" />,
      title: "Improved Product Discovery",
      description: "Advanced search and filtering features help users find products quickly."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#8B5CF6]" />,
      title: "Real-Time Analytics",
      description: "Gain insights into sales performance, user behavior, and revenue trends."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Expert Team",
      description: "Our experienced developers specialize in marketplace and e-commerce technologies."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow modern development standards to ensure secure and scalable systems."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Delivery",
      description: "Agile development process ensures timely project completion."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "Comprehensive testing ensures smooth functionality and high performance."
    }
  ];

  const faqs = [
    {
      question: "What does a marketplace development company do?",
      answer: "A Marketplace Development Company in India designs and builds multi-vendor e-commerce platforms where multiple sellers can register, list products or services, and manage orders through a centralized system. Customers can browse, compare, and purchase from different vendors on a single platform."
    },
    {
      question: "What types of marketplace platforms do you develop?",
      answer: "At BTJ Alpha Technology, we develop various types of marketplace solutions, including: B2C Product Marketplaces (like Amazon-style platforms),Handmade & Niche Product Marketplaces (Etsy-type models),Service-Based Marketplaces,Rental & Booking Platforms (Airbnb-type systems),B2B Wholesale Marketplaces,Hyperlocal & On-Demand Platforms"
    },
    {
      question: "Do you provide complete vendor management features?",
      answer: "Yes. Our Custom Multi-Vendor Marketplace Development Services in India include vendor onboarding, product management, commission setup, payout management, and performance tracking dashboards."
    },
    {
      question: "Can you integrate secure payment systems?",
      answer: "Absolutely. BTJ Alpha Technology integrates secure payment gateways with features like: Escrow-based payment systems,Split payments between platform and vendors,Automated commission deductions,Multi-currency and international payment support,Secure checkout & fraud protection"
    },
    {
      question: "Do your marketplace platforms include advanced search and filtering?",
      answer: "Yes. Our marketplace platforms include smart search functionality, category-based filters, and personalized recommendations to enhance product discovery."
    },
    {
      question:" Is your marketplace solution scalable for high traffic and multiple vendors?",
      answer:"Yes. As a trusted Marketplace Development Company in India, BTJ Alpha Technology builds cloud-based and scalable platforms capable of handling thousands of vendors, high product volumes, and peak traffic without performance issues."
    },
    {
      question:"Do you develop mobile apps for marketplace platforms?",
      answer:"Yes. We provide Android and iOS marketplace app development to ensure customers and vendors can manage transactions, track orders, and receive notifications directly from their smartphones."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Top Marketplace Development Solutions in India
              </h1>
              <h4 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900 mb-6 leading-tight">Launch Your Scalable Multi-Vendor Platform</h4>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               At BTJ Alpha Technology, we provide Custom Multi-Vendor Marketplace Development Services in India to help businesses launch powerful e-commerce platforms. We build scalable marketplaces similar to Amazon, Etsy, and Airbnb that seamlessly connect buyers and sellers on a single platform.
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
                {/* Marketplace Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Marketplace Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaStore className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaShoppingCart className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaSearch className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaCreditCard className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaShieldAlt className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Marketplace Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {marketplaceFeatures.map((item, i) => (
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
              Our Marketplace Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {marketplaceServices.map((item, i) => (
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
              Benefits of Marketplace Development
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
            Ready to Launch Your Marketplace?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology for reliable Custom Multi-Vendor Marketplace Development Services in India and build a scalable marketplace platform that drives revenue and growth.
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

export default Marketplace;