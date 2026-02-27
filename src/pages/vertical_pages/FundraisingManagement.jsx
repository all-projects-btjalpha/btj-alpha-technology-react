import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaDonate, FaHandHoldingUsd, FaUsers, FaChartLine, FaMobileAlt, FaShieldAlt,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup
} from "react-icons/fa";

function FundraisingManagement() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const fundraisingFeatures = [
    {
      icon: <FaDonate className="text-5xl text-[#fb9c24]" />,
      title: "Donation Management",
      description: "Complete donation processing with recurring gifts, donor profiles, automated receipts, and reporting tools. Our Fundraising Software Development solutions ensure smooth and efficient donation tracking."
    },
    {
      icon: <FaHandHoldingUsd className="text-5xl text-[#10B981]" />,
      title: "Crowdfunding Platforms",
      description: "Build goal-based crowdfunding campaigns with social sharing, real-time updates, and progress tracking to boost engagement."
    },
    {
      icon: <FaUsers className="text-5xl text-[#8B5CF6]" />,
      title: "Donor CRM",
      description: "Manage donor relationships with advanced engagement tracking, communication tools, and data insights for better retention."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#06b6d4]" />,
      title: "Campaign Analytics",
      description: "Track fundraising performance, donor behavior, and campaign effectiveness with powerful analytics dashboards."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#f87171]" />,
      title: "Mobile Giving",
      description: "Mobile-optimized donation forms and apps allow supporters to contribute anytime, anywhere."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#fbbf24]" />,
      title: "Secure Payments",
      description: "PCI-compliant and encrypted payment gateways ensure secure and reliable donation processing."
    }
  ];

  const fundraisingServices = [
    {
      icon: <FaDonate className="text-5xl text-[#fb9c24]" />,
      title: "Fundraising Management Solutions",
      description: "We create complete digital platforms tailored to nonprofits and NGOs. Our Fundraising Software Development services focus on building scalable, user-friendly systems that maximize fundraising results."
    },
    {
      icon: <FaHandHoldingUsd className="text-5xl text-[#10B981]" />,
      title: "Crowdfunding Platforms",
      description: "Design and develop interactive crowdfunding systems with goal tracking, campaign management, and integrated payment solutions."
    },
    {
      icon: <FaUsers className="text-5xl text-[#8B5CF6]" />,
      title: "Donor Management",
      description: "Build comprehensive donor management systems that support long-term engagement and relationship building through advanced Fundraising Software Development expertise."
    }
  ];

  const benefits = [
    {
      icon: <FaDonate className="text-5xl text-[#fb9c24]" />,
      title: "Increased Fundraising Impact",
      description: "Maximize donations with automated systems, better campaign management, and strategic insights powered by Fundraising Software Development."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Advanced Analytics",
      description: "Make data-driven decisions using real-time reports and donor behavior analysis."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#8B5CF6]" />,
      title: "Enhanced Security",
      description: "Ensure secure transactions and protect donor information with industry-standard security protocols."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Expert Team",
      description: "Our team has extensive experience in nonprofit technology and Fundraising Software Development."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow modern development standards to deliver reliable and scalable solutions."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Delivery",
      description: "Agile development ensures timely project completion without compromising quality."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and performance optimization guarantee smooth and secure fundraising platforms."
    }
  ];

  const faqs = [
    {
      question: "What does a fundraising software development company do?",
      answer: "At BTJ Alpha Technology, we provide Fundraising Software Development services that help nonprofits and NGOs manage donations, run crowdfunding campaigns, and strengthen donor relationships through secure and scalable digital platforms."
    },
    {
      question: "What features are included in your fundraising software?",
      answer: "Our solutions include donation management, donor CRM, crowdfunding platforms, campaign analytics, mobile giving, and secure payment gateway integration."
    },
    {
      question: "Do you build crowdfunding platforms?",
      answer: "Yes, we develop goal-based crowdfunding systems with real-time progress tracking, campaign management tools, and social sharing features to maximize engagement."
    },
    {
      question: "Can you develop a donor management system (CRM)?",
      answer: "Absolutely. We build advanced donor management systems that track donor activity, automate communication, manage recurring donations, and improve long-term retention.",
    },
    {
      question: "Is your fundraising software secure?",
      answer: "Yes. Our Fundraising Software Development follows PCI-compliant standards, secure payment gateway integration, and data encryption to ensure safe and reliable transactions.",
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
                Fundraising Management
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Empower nonprofits and charitable organizations with powerful digital fundraising solutions. At BTJ Alpha Technology, we specialize in Fundraising Software Devlopment that helps organizations manage donations, engage donors, and maximize campaign performance.
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
                {/* Fundraising Management Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Fundraising Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaDonate className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaHandHoldingUsd className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaUsers className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaChartLine className="text-3xl text-[#10B981]" />
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

      {/* Fundraising Management Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Fundraising Management
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {fundraisingFeatures.map((item, i) => (
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
              Our Fundraising Management Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {fundraisingServices.map((item, i) => (
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
              Benefits of Fundraising Management Technology
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
            Ready to Boost Fundraising Impact?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology to build a powerful and scalable fundraising platform tailored to your mission.
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

export default FundraisingManagement;