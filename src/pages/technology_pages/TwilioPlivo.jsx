import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhone, FaShieldAlt, FaServer, FaRocket, FaLayerGroup,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaUsers,
  FaLaptop, FaSync, FaChartLine, FaTools, FaCogs, FaMobileAlt
} from "react-icons/fa";

function TwilioPlivo() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const twilioFeatures = [
    {
      icon: <FaPhone className="text-5xl text-[#f22f46]" />,
      title: " Voice & SMS API Integration",
      description: "We provide advanced voice calling, SMS notifications, OTP verification, and bulk messaging solutions as part of our Twilio & Plivo Integration Services in India."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#f22f46]" />,
      title: "Enterprise-Grade Security",
      description: "Secure API integrations with encrypted communication and compliance-ready architecture."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#f22f46]" />,
      title: "Global Communication Support",
      description: "Deliver SMS and voice services globally with reliable routing and delivery reports."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#f22f46]" />,
      title: "Real-time Monitoring",
      description: "Track message delivery, call logs, and communication performance through analytics dashboards."
    },
    {
      icon: <FaCogs className="text-5xl text-[#f22f46]" />,
      title: "Automation & Workflow Optimization",
      description: "Automate alerts, reminders, customer notifications, and marketing campaigns seamlessly."
    },
    {
      icon: <FaLayerGroup className="text-5xl text-[#f22f46]" />,
      title: "Scalability Infrastructure",
      description: "Our solutions grow with your business communication requirements."
    }
  ];

  const twilioServices = [
    {
      icon: <FaPhone className="text-5xl text-[#f22f46]" />,
      title: " Communication API Development",
      description: "Seamless Twilio and Plivo API integration into web and mobile applications."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "IVR System Development",
      description: "Custom IVR solutions for automated customer support and smart call routing."
    },
    {
      icon: <FaServer className="text-5xl text-[#8B5CF6]" />,
      title: "SMS & WhatsApp API Integration",
      description: "Bulk SMS, transactional messaging, and WhatsApp Business API implementation."
    }
  ];

  const benefits = [
    {
      icon: <FaPhone className="text-5xl text-[#f22f46]" />,
      title: "Reliable Communication Infrastructure",
      description: "High uptime ensures uninterrupted messaging and voice services."
    },
    {
      icon: <FaRocket className="text-5xl text-[#fb9c24]" />,
      title: " Faster Deployment",
      description: "Quick implementation with minimal disruption to your operations."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#10B981]" />,
      title: "Secure & Compliant Solutions",
      description: "Industry-standard encryption and secure authentication protocols."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#f22f46]" />,
      title: " Experienced Integration Experts",
      description: "Dedicated developers specializing in Twilio & Plivo Integration Services in India."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Development Practices",
      description: "Secure coding, scalable architecture, and optimized API performance."
    },
    {
      icon: <FaClock className="text-5xl text-[#fb9c24]" />,
      title: "On-Time Delivery",
      description: "Timely execution without compromising quality."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#8B5CF6]" />,
      title: "Ongoing Support & Maintenance",
      description: "Continuous monitoring, upgrades, and optimization services."
    }
  ];

  const faqs = [
    {
      question: "What is Twilio/Plivo?",
      answer: "Twilio and Plivo are cloud communication platforms that provide APIs for voice, video, and messaging capabilities for applications."
    },
    {
      question: "Why use communication APIs?",
      answer: "Communication APIs enable businesses to add voice, SMS, and messaging features to their applications without building telecom infrastructure."
    },
    {
      question: "What can you build with these platforms?",
      answer: "You can build customer service systems, notification services, two-factor authentication, IVR systems, and automated messaging workflows."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Twilio &<br />
                Plivo Integration Services in India
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Smart Communication Solutions by BTJ Alpha Technology
                BTJ Alpha Technology offers professional Twilio & Plivo Integration Services in India to help businesses enhance communication through voice, SMS, WhatsApp, OTP, and IVR solutions.
                Our experts specialize in delivering secure and scalable Twilio & Plivo Integration Services in India, enabling businesses to automate notifications, improve customer engagement, and streamline communication workflows.
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
                {/* Twilio/Plivo Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Phone Icon with gradient background */}
                    <div className="bg-gradient-to-br from-red-100 to-pink-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaPhone className="text-9xl text-[#f22f46]" />
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

      {/* Twilio/Plivo Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {twilioFeatures.map((item, i) => (
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
              Our Twilio & Plivo Integration Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">BTJ Alpha Technology delivers complete Twilio & Plivo Integration Services in India tailored for startups, SMEs, SaaS platforms, and enterprises.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {twilioServices.map((item, i) => (
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
              Key Benefits
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
           Ready to Implement Twilio & Plivo Solutions?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology for trusted Twilio & Plivo Integration Services in India and transform your business communication system.

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

export default TwilioPlivo;