import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { 
  FaEnvelope, FaBullhorn, FaChartLine, FaUsers, FaPaperPlane, FaMagic,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaCogs, FaCloud,
  FaLock, FaCode, FaTachometerAlt, FaClipboardCheck, FaMailBulk
} from "react-icons/fa";

function EmailMarketing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const emailServices = [
    {
      icon: <FaEnvelope className="text-5xl text-blue-600" />,
      title: "Campaign Management",
      description: "End-to-end email campaign planning and execution including strategy, design, scheduling, testing, and performance tracking."
    },
    {
      icon: <FaMagic className="text-5xl text-green-600" />,
      title: "Email Design & Templates",
      description: "Beautiful, mobile-responsive email templates designed for maximum engagement and brand consistency."
    },
    {
      icon: <FaUsers className="text-5xl text-orange-600" />,
      title: "List Segmentation",
      description: "Advanced segmentation based on user behavior, demographics, purchase history, and engagement patterns to deliver personalized messaging"
    },
    {
      icon: <FaPaperPlane className="text-5xl text-purple-600" />,
      title: "Automation Workflows",
      description: "Set up automated workflows for welcome series, abandoned carts, re-engagement campaigns, and customer journey automation."
    },
    {
      icon: <FaChartLine className="text-5xl text-cyan-600" />,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and reporting on open rates, click-through rates, conversions, and ROI with actionable insights."
    }
  ];

  const emailFeatures = [
    {
      icon: <FaCloud className="text-5xl text-blue-500" />,
      title: "Comprehensive Email Marketing Solutions for Modern Businesses",
      description: "Our email marketing services help you build lasting relationships with your audience through strategic campaigns that drive engagement, nurture leads, and boost conversions. We combine creative design with data-driven strategies to deliver emails that not only look great but also perform exceptionally well. From welcome series to abandoned cart recovery, our automated workflows ensure the right message reaches the right person at the right time. Our team creates responsive templates that work seamlessly across all devices and email clients, ensuring maximum deliverability and engagement."
    }
  ];

  const faqs = [
    {
      question: "What makes email marketing effective for businesses?",
      answer: "Email marketing allows direct communication with your audience, personalized messaging, and measurable performance tracking for higher ROI."
    },
    {
      question: "How do you ensure good email deliverability?",
      answer: "We follow best practices including proper list hygiene, authentication setup (SPF, DKIM), segmentation, and spam compliance standards."
    },
    {
      question: "What email platforms do you work with?",
      answer: "We work with popular platforms like Mailchimp, HubSpot, SendGrid, Zoho Campaigns, and other CRM-integrated tools."
    },
    {
      question: "How quickly can we see results from email marketing?",
      answer: "Email marketing can show immediate results with proper setup. However, optimal performance typically develops over 2-3 months as we refine targeting, content, and automation workflows based on performance data. Most clients see significant improvements in engagement and conversions within the first 90 days."
    },
    {
      question: "What's included in your email marketing services?",
      answer: "Our services include strategy development, list segmentation, template design, content creation, campaign management, automation setup, A/B testing, analytics and reporting, deliverability optimization, and ongoing campaign optimization. We provide end-to-end email marketing management tailored to your business goals."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right"className="lg:pl-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Email
                Marketing
                Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Build lasting customer relationships and boost conversions with professional Email Marketing Services from BTJ Alpha Technology.
                <br></br>We create strategic, data-driven email campaigns that nurture leads, increase engagement, and drive measurable business growth. From campaign planning to automation and analytics, we manage everything to maximize your ROI.
                <br></br>If you want higher open rates, better click-through rates, and more conversions � email marketing is your most powerful digital asset.

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
                {/* Email Marketing Illustration */}
                <div className="relative">
                  {/* Email Interface */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all w-64">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="w-16 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center">Send</div>
                        <div className="w-16 h-8 bg-gray-200 rounded text-xs flex items-center justify-center">Save</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaPaperPlane className="text-3xl text-blue-600" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaChartLine className="text-3xl text-green-600" />
                  </div>
                  <div className="absolute top-0 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaUsers className="text-3xl text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Email Marketing Solutions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Email Marketing Solutions for Modern Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaEnvelope className="text-4xl text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Campaigns</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaMagic className="text-4xl text-purple-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Templates</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaUsers className="text-4xl text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Segmentation</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaChartLine className="text-4xl text-orange-600 mb-3" />
                    <h4 className="font-bold text-gray-800 text-sm">Analytics</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our email marketing services help you build lasting relationships with your audience through strategic campaigns that drive engagement, nurture leads, and boost conversions. We combine creative design with data-driven strategies to deliver emails that not only look great but also perform exceptionally well.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From welcome series to abandoned cart recovery, our automated workflows ensure the right message reaches the right person at the right time. Our team creates responsive templates that work seamlessly across all devices and email clients, ensuring maximum deliverability and engagement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We focus on creating personalized, value-driven content that resonates with your audience while maintaining consistent brand messaging. Our comprehensive approach includes strategy development, creative execution, performance optimization, and continuous improvement based on data insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Marketing Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Email Marketing?
              </h2>
              <p className="text-white text-lg mb-8 leading-relaxed">Let�s build a powerful email marketing strategy that drives engagement, conversions, and long-term growth.</p>
            </div>
            <div data-aos="fade-left">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <button
                  className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
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

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 max-md:p-2">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-2 shadow-md"
            >
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

      <style jsx>{`
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

export default EmailMarketing;