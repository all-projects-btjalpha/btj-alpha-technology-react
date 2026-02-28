import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaWallet, FaMobileAlt, FaShieldAlt, FaChartLine, FaUniversity, FaCreditCard,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup, FaUsers
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
      question: "What types of fitness applications does BTJ Alpha Technology develop?",
      answer: "BTJ Alpha Technology specializes in complete Fitness Solutions Software Development including workout tracking apps, personal trainer platforms, gym management systems, diet & nutrition apps, health monitoring solutions, and class scheduling software. We build scalable digital fitness ecosystems designed to improve user engagement and business growth."
    },
    {
      question: "Do you develop fitness apps for both iOS and Android platforms?",
      answer: "Yes. BTJ Alpha Technology develops high-performance native and cross-platform fitness applications for both iOS and Android. Our team ensures smooth performance, responsive UI, and seamless user experience across all devices."
    },
    {
      question: "Can you integrate wearable devices and health tracking platforms?",
      answer: "Absolutely. BTJ Alpha Technology integrates fitness apps with wearable devices and platforms such as Apple Health, Google Fit, Fitbit, and other IoT-based health systems. This enables real-time tracking of steps, calories, heart rate, sleep patterns, and workout performance."
    },
    {
      question: " Can you build custom gym management and trainer management software?",
      answer: "Yes. BTJ Alpha Technology develops fully customized gym and trainer management systems that include: Membership management,Class scheduling,Online payments,Attendance tracking,Performance analytics,Trainer dashboards,We design solutions tailored to your business model and operational workflow."

    },
    {
      question: "How secure and scalable are your fitness software solutions?",
      answer: "Security and scalability are core priorities at BTJ Alpha Technology. We follow modern development standards, secure authentication systems, data encryption practices, and scalable cloud architecture to ensure reliable performance as your user base grows."
    },
    {
      question: " Why should I choose BTJ Alpha Technology as my Fitness App Development Company?",
      answer: "BTJ Alpha Technology combines technical expertise, industry understanding, and agile development processes to deliver high-quality Fitness Solutions Software Development. We focus on innovation, on-time delivery, and long-term partnership to help your fitness business succeed in a competitive digital market."
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
                Fitness Software Development Company – Custom Digital Solutions for Gyms, Trainers & Health Brands
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Empower fitness journeys with innovative digital platforms. At BTJ Alpha Technology, we specialize in Fitness Solutions Software Development to help gyms, fitness trainers, wellness brands, and health startups deliver engaging and results-driven experiences.
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

      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default Fintech;