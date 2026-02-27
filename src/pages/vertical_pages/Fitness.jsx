import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaDumbbell, FaHeartbeat, FaMobileAlt, FaChartLine, FaUsers, FaCalendarAlt,
  FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaLaptop, FaSync,
  FaDatabase, FaTools, FaCogs, FaServer, FaLayerGroup
} from "react-icons/fa";

function Fitness() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const fitnessFeatures = [
    {
      icon: <FaDumbbell className="text-5xl text-[#fb9c24]" />,
      title: "Workout Tracking",
      description: "Track exercises, sets, reps, and progress with personalized workout plans. Our Fitness Solutions Software Development ensures accurate performance monitoring and user-friendly dashboards."
    },
    {
      icon: <FaHeartbeat className="text-5xl text-[#10B981]" />,
      title: "Health Monitoring",
      description: "Monitor heart rate, calories burned, steps, sleep patterns, and other health metrics in real time with integrated tracking systems."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#8B5CF6]" />,
      title: "Fitness Mobile Apps",
      description: "Develop iOS and Android fitness apps with workout videos, nutrition guides, progress reports, and user engagement tools powered by expert Fitness Solutions Software Development."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#06b6d4]" />,
      title: "Progress Analytics",
      description: "Visual analytics for fitness goals, achievements, and performance improvements to help users stay motivated."
    },
    {
      icon: <FaUsers className="text-5xl text-[#f87171]" />,
      title: "Trainer Platforms",
      description: "Connect trainers with clients for virtual training, scheduling, communication, and personalized coaching programs."
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-[#fbbf24]" />,
      title: "Class Scheduling",
      description: "Enable users to book fitness classes, manage memberships, and schedule personal training sessions easily."
    }
  ];

  const fitnessServices = [
    {
      icon: <FaDumbbell className="text-5xl text-[#fb9c24]" />,
      title: "Fitness Solutions",
      description: "We design and develop complete digital ecosystems for gyms, fitness centers, and wellness brands. Our Fitness Solutions Software Development services focus on scalable, secure, and easy-to-use platforms."
    },
    {
      icon: <FaHeartbeat className="text-5xl text-[#10B981]" />,
      title: "Health Tracking",
      description: "Create comprehensive health and fitness tracking systems with wearable device integration and advanced analytics."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#8B5CF6]" />,
      title: "Fitness Mobile Apps",
      description: "Build high-performance mobile applications for workout tracking, subscription management, and fitness engagement using modern Fitness Solutions Software Development technologies."
    }
  ];

  const benefits = [
    {
      icon: <FaDumbbell className="text-5xl text-[#fb9c24]" />,
      title: " Increased Motivation",
      description: "Keep users engaged with goal tracking, achievements, notifications, and personalized fitness plans."
    },
    {
      icon: <FaHeartbeat className="text-5xl text-[#10B981]" />,
      title: "Improved Health Outcomes",
      description: "Promote healthier lifestyles with real-time monitoring and data-driven fitness recommendations.."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#8B5CF6]" />,
      title: "Actionable Analytics",
      description: "Gain insights into user behavior, fitness trends, and performance data through advanced reporting tools powered by Fitness Solutions Software Development."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Expert Team",
      description: "Our team has extensive experience in fitness and health technology platforms."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#10B981]" />,
      title: "Best Practices",
      description: "We follow industry best practices to deliver secure and scalable fitness software solutions."
    },
    {
      icon: <FaClock className="text-5xl text-[#8B5CF6]" />,
      title: "On-Time Delivery",
      description: "Agile development ensures timely completion of your fitness technology projects."
    },
    {
      icon: <FaCheckCircle className="text-5xl text-[#f87171]" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and optimization guarantee reliable performance and smooth user experience."
    }
  ];

  const faqs = [
    {
      question: "What services do you offer as a fitness app development company?",
      answer: "At BTJ Alpha Technology, we provide Fitness Solutions Software Development including workout tracking apps, gym management systems, trainer platforms, health monitoring apps, and class scheduling software."
    },
    {
      question: "Do you develop apps for iOS and Android?",
      answer: "Yes, we build high-performance fitness mobile applications for both iOS and Android platforms."
    },
    {
      question: "Can you integrate wearable devices?",
      answer: "Yes, we integrate apps with devices and platforms like Apple Health, Google Fit, and Fitbit for real-time health tracking."
    },
    {
      question: "Can you build custom gym management software?",
      answer: "Absolutely. We develop tailored gym and trainer management systems with membership, scheduling, payments, and analytics features."
    },
    {
      question: "Is your fitness software secure and scalable?",
      answer: "Yes, our solutions follow industry best practices to ensure security, scalability, and reliable performance."
    },
    {
      question: "Why choose BTJ Alpha Technology?",
      answer: "We offer expert development, agile processes, on-time delivery, and high-quality Fitness Solutions Software Development tailored to your business goals."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fitnes Solutions
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Empower fitness journeys with innovative digital platforms. At BTJ Alpha Technology, we specialize in Fitness Solutions Software Development to help gyms, fitness trainers, wellness brands, and health startups deliver engaging and results-driven experiences.</p>
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
                {/* Fitness Illustration */}
                <div className="relative">
                  <div className="relative">
                    {/* Large Fitness Icon with gradient background */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
                      <FaDumbbell className="text-9xl text-[#fb9c24]" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaHeartbeat className="text-3xl text-[#fb9c24]" />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaMobileAlt className="text-3xl text-[#4285F4]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaChartLine className="text-3xl text-[#10B981]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaUsers className="text-3xl text-[#8B5CF6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Features */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Fitness Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {fitnessFeatures.map((item, i) => (
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
              Our Fitness Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
            {fitnessServices.map((item, i) => (
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
              Benefits of Fitness Technology
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
            Ready to Empower Fitness Journeys?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with BTJ Alpha Technology to build innovative and scalable fitness platforms tailored to your business goals.
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

export default Fitness;