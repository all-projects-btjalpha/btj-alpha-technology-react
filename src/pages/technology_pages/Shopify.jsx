import { useState, useEffect } from "react"; // Force reload
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaShoppingCart, FaStore, FaCreditCard, FaShippingFast, FaBox, FaExchangeAlt, FaCheckCircle, FaChevronDown, FaChevronUp,
  FaUsers, FaClock, FaLaptop, FaMobileAlt, FaSync, FaDatabase, FaChartLine, FaPlug, FaCode, FaCog, FaCogs, FaShieldAlt, FaLock
} from "react-icons/fa";

function Shopify() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const shopifyServices = [
    {
      icon: <FaShoppingCart className="text-5xl text-[#96BF48]" />,
      title: "Shopify Store Development",
      description: "We design and develop visually appealing, high-converting Shopify stores tailored to your brand identity."
    },
    {
      icon: <FaStore className="text-5xl text-[#96BF48]" />,
      title: "Custom Shopify Development",
      description: "Get fully customized features, functionalities, and design elements built specifically for your business needs."
    },
    {
      icon: <FaCreditCard className="text-5xl text-[#96BF48]" />,
      title: "Payment Gateway Integration",
      description: "We integrate secure payment gateways and configure checkout processes to ensure smooth transactions and increased customer trust."
    },
    {
      icon: <FaShippingFast className="text-5xl text-[#96BF48]" />,
      title: "Inventory & Order Management",
      description: "Streamline your operations with our inventory and order management solutions that integrate seamlessly with your Shopify store."
    }
  ];

  const whyShopify = [
    {
      icon: <FaChartLine className="text-4xl text-[#96BF48]" />,
      title: "Easy to Use",
      description: "Shopify's intuitive interface allows you to manage your online store without technical expertise, making e-commerce accessible to everyone."
    },
    {
      icon: <FaLock className="text-4xl text-[#0088cc]" />,
      title: "Secure Transactions",
      description: "Enterprise-grade security protects your customer data and transactions with SSL certificates, PCI compliance, and fraud analysis."
    },
    {
      icon: <FaCode className="text-4xl text-[#4285F4]" />,
      title: "Flexible Apps",
      description: "Access over 6,000 apps in the Shopify App Store to extend functionality and customize your store according to your specific needs."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#10B981]" />,
      title: "Mobile Optimization",
      description: "Built-in mobile responsiveness ensures your store looks great and functions perfectly on all devices and screen sizes."
    },
    {
      icon: <FaUsers className="text-4xl text-[#8B5CF6]" />,
      title: "SEO Friendly",
      description: "Shopify's built-in SEO features help your store rank higher in search results, driving more organic traffic to your products."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-4xl text-[#96BF48]" />,
      title: "Expert Shopify Developers",
      description: "Our team consists of certified Shopify developers with extensive experience in creating successful e-commerce stores across various industries."
    },
    {
      icon: <FaClock className="text-4xl text-[#0088cc]" />,
      title: "On-Time Delivery",
      description: "We understand the importance of launching your store quickly. Our streamlined process ensures timely delivery without compromising quality."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#4285F4]" />,
      title: "Custom Solutions",
      description: "Every business is unique, and we create customized Shopify solutions that align with your specific requirements and business objectives."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#10B981]" />,
      title: "Ongoing Support & Maintenance",
      description: "Our support doesn't end after launch. We provide continuous support, updates, and optimization to ensure your store performs at its best."
    },
    {
      icon: <FaCogs className="text-4xl text-[#8B5CF6]" />,
      title: "Competitive Pricing",
      description: "We offer transparent pricing models that provide value without compromising on quality, ensuring your investment delivers maximum ROI."
    }
  ];

  const faqs = [
    {
      question: "Why Should I Choose Shopify for My Online Store?",
      answer: "Shopify offers numerous benefits including easy setup without coding knowledge, reliable hosting with 99.99% uptime, built-in security features, extensive app ecosystem for customization, mobile-responsive themes, integrated payment processing, comprehensive analytics, and excellent customer support. It's perfect for businesses of all sizes looking to establish a strong online presence."
    },
    {
      question: "What Shopify Development Services Do You Offer?",
      answer: "We offer comprehensive Shopify development services including: Custom store development, Theme customization and design, App integration and development, Payment gateway setup, Inventory management solutions, SEO optimization, Performance optimization, Migration services from other platforms, Multi-channel selling integration, Ongoing maintenance and support, and Technical consulting for Shopify projects."
    },
    {
      question: "How Much Does It Cost to Develop a Shopify Store?",
      answer: "The cost of Shopify development varies based on complexity, features, and customization requirements. Basic Shopify stores start from $1,500-$5,000, while complex custom solutions can range from $5,000-$25,000+ depending on requirements. We offer flexible pricing models including fixed-price, hourly rates, and dedicated team arrangements. Contact us with your project details for a customized quote."
    },
    {
      question: "What Kind of Technical Support and Maintenance Services Do You Provide?",
      answer: "We provide comprehensive post-launch support including: Bug fixes and issue resolution, Regular security patches and updates, Performance monitoring and optimization, Feature enhancements and upgrades, 24/7 emergency support for critical issues, Documentation and training, Backup and recovery services, Speed optimization, and Code refactoring for improved performance. Our team ensures your Shopify store runs smoothly and securely."
    },
    {
      question: "How Long Does It Take to Develop a Shopify Store?",
      answer: "Development timelines depend on project complexity and requirements. A basic Shopify store typically takes 2-4 weeks, medium complexity stores with custom features take 4-8 weeks, and complex enterprise solutions can take 8-16 weeks or more. Our phased approach includes: Discovery and planning (1 week), Design and prototyping (1-2 weeks), Development and integration (varies), Testing and QA (1-2 weeks), and Launch and support (1 week). We provide detailed timelines after understanding your specific requirements."
    },
    {
      question: "What Is the Process of Developing Your Shopify Store?",
      answer: "Our development process is systematic and transparent: 1) Consultation - Understanding your business requirements and goals. 2) Planning - Creating project roadmap and timeline. 3) Design - Creating mockups and user experience designs. 4) Development - Building the Shopify store with security and scalability in mind. 5) Testing - Comprehensive testing for functionality and performance. 6) Launch - Deploying the store with proper monitoring. 7) Support - Ongoing maintenance and enhancement. Throughout the process, we maintain transparent communication and provide regular progress updates."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c438d] mb-6 leading-tight">
                Shopify<br />
                Development<br />
                Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                BTJ Alpha Technology is a leading Shopify Development Company in India, delivering high-performance and scalable eCommerce solutions for startups, SMEs, and enterprises. We specialize in building secure, conversion-focused, and fully customized Shopify stores that help businesses grow online.
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
                {/* Shopify Logo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Shopify Icon */}
                    <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-80 h-80 flex items-center justify-center shadow-2xl">
                      <img src="/shopify-removebg-preview.png" alt="Shopify" className="w-48 h-48" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaShoppingCart className="text-3xl text-[#96BF48]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaStore className="text-3xl text-[#7AA738]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaCreditCard className="text-3xl text-[#4CAF50]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaShippingFast className="text-3xl text-[#8BC34A]" />
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
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                <div className="relative">
                  {/* Person with Shopify Development */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <FaUsers className="text-5xl text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaShoppingCart className="text-3xl text-[#96BF48] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Store</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaBox className="text-3xl text-[#7AA738] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Products</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <FaShippingFast className="text-3xl text-[#4CAF50] mb-2" />
                      <div className="text-xs font-bold text-gray-700">Ship</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-6">
                Transform Your Business with Next-Generation Shopify Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In today’s competitive eCommerce market, having a professional online store is essential. As a trusted Shopify development company, we create modern, responsive, and user-friendly Shopify websites designed to increase conversions.</p>
              <p className="text-gray-600 leading-relaxed mb-6">Our Shopify website development services focus on: High-speed performance,Mobile-first design,Seamless checkout experience,Secure payment integration,SEO-friendly structure</p>
              <p className="text-gray-600 leading-relaxed">From product management to payment gateways and shipping configuration, we handle everything to ensure your Shopify store runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Development Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-4">
              Shopify Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Step2gen Technologies offers a comprehensive range of Shopify development services to help businesses establish and grow their online presence effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shopifyServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#1c438d] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Consider Shopify */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-4">
              Why Consider Shopify for Your E-commerce Business
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Shopify offers numerous advantages that make it the preferred choice for businesses looking to establish a strong online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyShopify.slice(0, 2).map((reason, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-[#1c438d] mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
            {whyShopify.slice(2).map((reason, index) => (
              <div
                key={index + 2}
                data-aos="fade-up"
                data-aos-delay={(index + 2) * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-[#1c438d] mb-3">{reason.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c438d] mb-4">
              Why Choose Step2gen for Shopify Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you need a reliable partner for Shopify development, Step2gen Technologies stands out as a top choice. Here are some of the reasons why you should work with us.
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
                <h3 className="text-lg font-bold text-[#1c438d] mb-3 text-center">{reason.title}</h3>
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
            Partner with Step2gen Technologies for the Best Shopify Development Solutions.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's build a powerful, scalable Shopify store that drives your business forward.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
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
                    <FaChevronUp className="text-[#96BF48] flex-shrink-0" />
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

      <style jsx={true}>{`
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

export default Shopify;