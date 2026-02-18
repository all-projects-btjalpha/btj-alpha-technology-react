import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaLightbulb, FaCode, FaRocket, FaUsers, FaChartLine, FaCogs,
  FaCheckCircle, FaLayerGroup, FaShieldAlt, FaClock, FaSearch,
  FaChevronDown, FaChevronUp, FaDesktop, FaMobile, FaCloud,
  FaBullseye, FaPuzzlePiece, FaSyncAlt, FaCalendarAlt, FaMapMarkerAlt
} from "react-icons/fa";

function ProductDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const bespokeServices = [
    {
      icon: <FaLightbulb className="text-5xl text-yellow-500" />,
      title: "Idea Validation",
      description: "Regardless of how much you can prescribe your product idea to stakeholders, its execution lays the seeds for reaping success. Our product specialists carry out market research, analyze app segments along their link journey with competitors' product feature is evaluated enabling easier features for customers to achieve its desired targets."
    },
    {
      icon: <FaPuzzlePiece className="text-5xl text-red-500" />,
      title: "Product Planning",
      description: "Strategizing is an essential part of the entire development plan. As it helps to make an informed projection about effective strategies. The experts determine software solutions and technologies to be used for development and identify critical challenges specific to multiple challenges based on the client's requirements. We then put on an effective debugging phase."
    },
    {
      icon: <FaSyncAlt className="text-5xl text-green-500" />,
      title: "Development",
      description: "Our development team adopts agile development methodology to create your product. The team focuses on prioritizing user satisfaction through continuous delivery, delivering high-quality applications, and providing cost-efficient outcomes. Our developers go hand-in-hand with testers to create reliable software that provides a better user interface."
    },
    {
      icon: <FaBullseye className="text-5xl text-blue-500" />,
      title: "Product Planning",
      description: "The idea drives our product development cycle involves planning before everything before starting, involving, and enhancing all factors ensuring the software is designed to implement new features with flexibility to execute necessary modifications to facilitate smooth and seamless operations at the project."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-purple-500" />,
      title: "Deployment",
      description: "Once your all-set and we've got your approval for the deployment is done. Our teams employ DevOps practices to ensure high-quality code with automated testing to deliver unmatched built on environment to manage your software release. Deliver us your needs, and let our delivery team help you create an integrated organizational setup."
    }
  ];

  const endToEndServices = [
    {
      icon: <FaCogs className="text-6xl text-blue-600" />,
      title: "End-to-End Product Development",
      description: "With our teams of product development specialists, we deliver a full-scale product for efficient operations with necessary changes to serve scale standards. We assure you increased productivity and accelerate your business growth."
    },
    {
      icon: <FaRocket className="text-6xl text-cyan-500" />,
      title: "MVP Development Services",
      description: "If you're carrying an experimental digital product that still needs clarity and lacks the refined user-centric features at launch. Our MVP development services help you launch products quickly with features that real users can interact and offer feedback on."
    },
    {
      icon: <FaLayerGroup className="text-6xl text-purple-500" />,
      title: "API Development Services",
      description: "Whether you're looking to create a product unit with a program to implement our API development services. API's help integrate your applications or devices and act as central API development and third-party API integration services."
    },
    {
      icon: <FaCloud className="text-6xl text-indigo-600" />,
      title: "Cloud Integration Services",
      description: "Deployment of your existing system with cloud infrastructure is here. We offer a quick and optimized upgrade to the system with integrated cloud solution. So work at your stakeholder can access all features related with ease."
    }
  ];

  const keyFeatures = [
    {
      icon: <FaCalendarAlt className="text-5xl text-[#fb9c24]" />,
      title: "Scheduling and Booking Services",
      description: "Streamline appointments and reservations with intelligent scheduling systems."
    },
    {
      icon: <FaMapMarkerAlt className="text-5xl text-[#fb9c24]" />,
      title: "Location Tracking",
      description: "Real-time GPS tracking and geolocation services for enhanced user experience."
    },
    {
      icon: <FaSearch className="text-5xl text-[#fb9c24]" />,
      title: "Advanced Analytics and Reporting",
      description: "Comprehensive data insights and customizable reports for informed decision-making."
    },
    {
      icon: <FaBullseye className="text-5xl text-[#fb9c24]" />,
      title: "Artificial Intelligence",
      description: "Smart automation and predictive analytics powered by cutting-edge AI technology."
    },
    {
      icon: <FaUsers className="text-5xl text-[#fb9c24]" />,
      title: "Chatbots",
      description: "24/7 intelligent customer support with natural language processing capabilities."
    },
    {
      icon: <FaChartLine className="text-5xl text-[#fb9c24]" />,
      title: "Performance Tracking",
      description: "Monitor KPIs and metrics in real-time for continuous optimization."
    }
  ];

  const faqs = [
    {
      question: "Why Does My Organization Need a Custom Product Software?",
      answer: "Custom product software is tailored specifically to your business needs, providing unique features that off-the-shelf solutions cannot offer. It helps streamline operations, improve efficiency, scale with your business, and gives you a competitive advantage in the market."
    },
    {
      question: "How Much Would It Cost to Build a Custom Digital Product for My Organization?",
      answer: "The cost varies based on project complexity, features, technology stack, development time, and team size. We provide detailed estimates after understanding your requirements. Generally, projects can range from $10,000 for simple MVPs to $100,000+ for complex enterprise solutions."
    },
    {
      question: "Which Technologies do you use to Design Enterprise Products?",
      answer: "We use modern technologies including React, Angular, Vue.js for frontend; Node.js, Python, Java for backend; MongoDB, PostgreSQL for databases; AWS, Azure for cloud; and incorporate AI/ML, blockchain, and IoT based on project requirements."
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
                Product<br />
                Development<br />
                Services India
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Transform your innovative ideas into market-ready products with our comprehensive product development services. We specialize in designing innovative digital solutions that track business outcomes that support your vision from concept to launch. Our product development team offers personalized development approach, allowing companies to test products from business process integration within minimum time. Develop cutting-edge from ideas with our agile methodologies.
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
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px]">
                {/* Animated Background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-pulse delay-100"></div>
                </div>
                
                {/* Monitor Illustration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-2xl w-80 h-60 animate-float">
                  <div className="bg-white rounded-lg h-full p-4 flex flex-col">
                    {/* Dashboard Elements */}
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-2">
                      <div className="bg-blue-100 rounded animate-pulse"></div>
                      <div className="bg-purple-100 rounded animate-pulse delay-75"></div>
                      <div className="bg-pink-100 rounded animate-pulse delay-150"></div>
                      <div className="col-span-2 bg-cyan-100 rounded animate-pulse delay-100"></div>
                      <div className="bg-indigo-100 rounded animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-10 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                  <FaChartLine className="text-3xl text-green-500" />
                </div>
                <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-100">
                  <FaCogs className="text-3xl text-blue-500" />
                </div>
                <div className="absolute bottom-10 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-200">
                  <FaDesktop className="text-3xl text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Digital Solutions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bespoke Digital Solutions Tailored for Your Business Requirements
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At BTJ Alpha Technology, our dedicated team focuses on employing process-focused strategies to transform unique product idea delivery. We work closely with your stakeholders and collaborate with you to deliver quality product development services to fulfill project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {bespokeServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get On-Board Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get On-Board With Digital Transformation With Our<br />
              End-to-End Product Development Services
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Deploy dynamic & user-friendly applications with innovative features to eliminate your business challenges. Let us revolutionize your product development services including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {endToEndServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Product Vision CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Software Product Vision in Mind?
              </h2>
              <p className="text-white/90 text-lg">
                Let's bring your ideas to life with our expert product development team.
              </p>
            </div>
            <div data-aos="fade-left">
              <button
                onClick={openForm}
                className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Connect with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features We Integrate into Enterprise Software<br />
              to Maximize Efficiency
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The features of our tailored product have a huge impact on its performance and user experience. That's why our design and development team stays updated with market changes to fulfill needs of our clients and stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
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
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}

export default ProductDevelopment;
