import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
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
      description: "End-to-end email campaign management from strategy to execution, including planning, design, scheduling, and performance tracking."
    },
    {
      icon: <FaMagic className="text-5xl text-green-600" />,
      title: "Email Design & Templates",
      description: "Beautiful, responsive email templates that work across all devices and email clients with modern design principles and brand consistency."
    },
    {
      icon: <FaUsers className="text-5xl text-orange-600" />,
      title: "List Segmentation",
      description: "Target the right audience with smart segmentation and personalization based on behavior, demographics, and engagement patterns."
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
      answer: "Email marketing is effective because it allows direct, personalized communication with your audience at a fraction of traditional marketing costs. It offers high ROI (often 38:1), precise targeting capabilities, measurable results, and the ability to nurture leads through automated workflows. Unlike social media algorithms, you own your email list and can reach subscribers directly."
    },
    {
      question: "How do you ensure good email deliverability?",
      answer: "We ensure high deliverability through proper list hygiene, authentication protocols (SPF, DKIM, DMARC), engaging content that avoids spam triggers, proper sending frequency, and compliance with anti-spam regulations like CAN-SPAM and GDPR. We also monitor sender reputation and maintain clean, engaged subscriber lists."
    },
    {
      question: "What email platforms do you work with?",
      answer: "We work with major email marketing platforms including Mailchimp, Constant Contact, SendGrid, HubSpot, ActiveCampaign, and custom ESP solutions. We choose the platform that best fits your business needs, budget, and technical requirements while ensuring seamless integration with your existing systems."
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
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Email<br />
                Marketing<br />
                Services
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Build lasting relationships with your audience through strategic email marketing. Drive engagement, nurture leads, and boost conversions with personalized campaigns that deliver measurable results.
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
                Ready to Transform Your Email Marketing?<br />
                Let's Build Your Campaign Strategy
              </h2>
            </div>
            <div data-aos="fade-left">
              <button
                onClick={openForm}
                className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Contact Us
              </button>
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

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}

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