import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaMobileAlt, FaBolt, FaWifi, FaBell, FaDownload, FaRocket,
  FaCheckCircle, FaEye, FaShoppingCart, FaUsers, FaCogs, FaShieldAlt,
  FaChevronDown, FaChevronUp, FaLayerGroup, FaCode, FaServer,
  FaPalette, FaChartLine, FaHandshake, FaClock, FaTachometerAlt
} from "react-icons/fa";
import { SiPwa } from "react-icons/si";

function PWADevelopment() {
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

  const seamlessFeatures = [
    {
      icon: <FaMobileAlt className="text-6xl text-blue-600" />,
      title: "Seamless, Responsive Experiences with PWA Development using Blazor",
      description: "Progressive Web Apps (PWAs) bridges web and mobile apps platforms such as HTML, JavaScript, CSS with modern web capabilities. Web apps leverage PWA make it easy to deploy just like regular web apps without relying on app stores such as Google Play Store or Apple's App Store. PWAs deliver robust performance, engaging experiences, and greater flexibility than traditional apps, all while ensuring security and scalability even on low-end devices or slower networks."
    }
  ];

  const creativePWAFeatures = [
    {
      icon: <FaEye className="text-5xl text-blue-600" />,
      title: "Visibility and Engagement",
      description: "Unlike other app is like a web page, making sure that all the web users can access web app as per their needs without downloading or installing anything on their devices."
    },
    {
      icon: <FaShoppingCart className="text-5xl text-purple-600" />,
      title: "Seamless User Experience",
      description: "We focuses on user's benefits in the form of mobile experience, easier navigation, smoother transitions that boost user's engagement and boost conversion rate."
    },
    {
      icon: <FaTachometerAlt className="text-5xl text-green-600" />,
      title: "Responsive Web Application",
      description: "We emphasize on a fully responsive web app that is designed to adapt to any screen size, delivering the same high-quality user experience across devices."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-orange-600" />,
      title: "Content Progressive Web Improvement",
      description: "Content visibility SEO is major part of progressive web apps. We optimize PWA to comply with the best standards ensuring that new contents, improved ranking, and visibility of your business."
    }
  ];

  const pwaFeatures = [
    {
      icon: <FaBolt className="text-5xl text-yellow-500" />,
      title: "Seamless and Responsive Experience Across Devices",
      description: "Progressive web apps take care that content is delivered in a responsive way on any device and ensuring that your app functions on mobile, tablets, and desktop perfectly."
    },
    {
      icon: <FaWifi className="text-5xl text-blue-500" />,
      title: "Offline Functionality and Reliable Performance",
      description: "Our PWAs enable offline functionality allowing users to access certain features even when there is no internet. Users can continue to browse previously loaded content."
    },
    {
      icon: <FaUsers className="text-5xl text-purple-500" />,
      title: "Ability to be Installed on the Home Screen of Devices",
      description: "PWAs can be added to a user's home screen, which makes it easier to access just like native apps without needing app store downloads."
    },
    {
      icon: <FaBell className="text-5xl text-red-500" />,
      title: "Secure and Reliable Over HTTPS/SSL Notifications",
      description: "Security is a major concern for businesses and users. PWAs are served over HTTPS/SSL ensuring that data transmitted between user and app remains private and secure."
    }
  ];

  const developmentServices = [
    {
      icon: <FaShieldAlt className="text-5xl text-blue-600" />,
      title: "Education",
      description: "For educational institutions, progressive web apps (PWA) development provide students with efficient access to educational resources and management apps."
    },
    {
      icon: <FaChartLine className="text-5xl text-green-600" />,
      title: "Travel and Tourism",
      description: "We develop PWAs for the travel and tourism industry providing booking information updates to travelers even when they're offline."
    },
    {
      icon: <FaUsers className="text-5xl text-purple-600" />,
      title: "Social Networking",
      description: "We build PWAs for social networking platforms with real-time messaging, updates, and smooth navigation for users."
    },
    {
      icon: <FaShoppingCart className="text-5xl text-orange-600" />,
      title: "E-commerce",
      description: "PWAs for e-commerce businesses allow customers to shop seamlessly with faster load times and improved checkout experiences."
    }
  ];

  const pwaExpertise = [
    {
      icon: <SiPwa className="text-6xl text-purple-600" />,
      title: "Blazor Progressive Web Application Development",
      description: "Our developers have in-depth knowledge of Blazor Progressive Web Application and Razor Framework that allows us to build high-performance apps which deliver native-like experiences."
    },
    {
      icon: <FaCode className="text-6xl text-orange-600" />,
      title: "HTML, CSS, and JavaScript Development",
      description: "Our developers are well-versed in HTML, CSS, and JavaScript to create progressive Web apps that are both visually stunning and highly functional."
    },
    {
      icon: <FaServer className="text-6xl text-pink-600" />,
      title: "Service Workers and Offline Support",
      description: "Our expertise allows users to access PWA features even when they are offline. Our developers ensure that users have a reliable app experience."
    },
    {
      icon: <FaLayerGroup className="text-6xl text-indigo-600" />,
      title: "API Integration and Backend Services",
      description: "We specialize in integrating APIs to connect your PWA with various backend systems, databases, or third-party services ensuring seamless data flows."
    }
  ];

  const workflow = [
    {
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and functionality through detailed consultation sessions.",
      step: "01"
    },
    {
      title: "Planning",
      description: "After gathering requirements, we strategize plan for your PWA's architecture, user interface, and technical requirements.",
      step: "02"
    },
    {
      title: "Design",
      description: "Our designers create visually stunning and user-friendly interfaces that ensure seamless navigation across all devices.",
      step: "03"
    },
    {
      title: "Development",
      description: "We build your PWA using cutting-edge frameworks like Blazor, HTML, CSS, and JavaScript for robust performance.",
      step: "04"
    },
    {
      title: "Testing",
      description: "We conduct rigorous testing to ensure your PWA works flawlessly across browsers, devices, and network conditions.",
      step: "05"
    },
    {
      title: "Deployment",
      description: "Once tested, we deploy your PWA ensuring it's accessible, secure, and ready for your users to engage with.",
      step: "06"
    },
    {
      title: "Maintenance and Support",
      description: "We provide ongoing support and regular updates to ensure your PWA continues to perform optimally.",
      step: "07"
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaHandshake className="text-5xl text-blue-600" />,
      title: "Skilled Developers",
      description: "Our team of experts has extensive experience in PWA development with successful project delivery history."
    },
    {
      icon: <FaUsers className="text-5xl text-purple-600" />,
      title: "Custom Solutions",
      description: "We understand every business is unique. We tailor PWA solutions to meet your specific requirements."
    },
    {
      icon: <FaClock className="text-5xl text-green-600" />,
      title: "Proven Deliverables",
      description: "We follow agile methodologies ensuring timely delivery and transparency throughout development."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-orange-600" />,
      title: "Ongoing Support",
      description: "Our relationship doesn't end with deployment. We provide ongoing support to keep your app updated."
    }
  ];

  const faqs = [
    {
      question: "How Much Does it Cost to Develop a Progressive Web Application?",
      answer: "The cost varies based on complexity, features, design requirements, and development time. Simple PWAs may start from $5,000-$15,000, while complex enterprise PWAs can range from $25,000-$100,000+. We provide detailed estimates after understanding your requirements."
    },
    {
      question: "What is a Progressive Web App?",
      answer: "A Progressive Web App (PWA) is a type of application software delivered through the web, built using common web technologies including HTML, CSS, and JavaScript. It works on any device with a web browser and provides app-like experiences including offline functionality, push notifications, and home screen installation."
    },
    {
      question: "What Technologies do you Use for PWA Development?",
      answer: "We use modern technologies including Blazor, HTML5, CSS3, JavaScript, Service Workers, Web App Manifest, IndexedDB, Cache API, Push API, and frameworks like React, Angular, or Vue.js based on project requirements."
    },
    {
      question: "How Long Does the Progressive Web App Development Take?",
      answer: "Development timeline depends on project scope and complexity. A basic PWA may take 4-8 weeks, while complex enterprise PWAs can take 3-6 months. We provide detailed timelines after requirement analysis."
    },
    {
      question: "How Long Does it take for Building a PWA?",
      answer: "Building a PWA typically takes 6-12 weeks for standard applications. This includes discovery, planning, design, development, testing, and deployment phases. Complex PWAs with advanced features may require additional time."
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
                Progressive Web App<br />
                Development<br />
                Company
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At BTJ Alpha Technology, we deliver cutting-edge Progressive Web Apps (PWAs) that combine the best of web and mobile applications. With our expertise in modern frameworks like Blazor and industry-standard web technologies, we create seamless, responsive experiences that work offline and engage users like never before. Our PWAs are fast, reliable, and provide an app-like experience across all devices without the need for app store downloads.
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
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse delay-100"></div>
                </div>
                
                {/* PWA Logo/Text */}
                <div className="relative z-10 animate-float">
                  <div className="text-center">
                    <h2 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      PWA
                    </h2>
                    <div className="flex justify-center gap-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                      <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-10 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                  <FaBolt className="text-3xl text-yellow-500" />
                </div>
                <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-100">
                  <FaWifi className="text-3xl text-blue-500" />
                </div>
                <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-200">
                  <FaBell className="text-3xl text-red-500" />
                </div>
                <div className="absolute bottom-10 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-300">
                  <FaMobileAlt className="text-3xl text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Responsive Experiences */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div data-aos="fade-right" className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaMobileAlt className="text-4xl text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-800">Mobile</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaBolt className="text-4xl text-yellow-500 mb-3" />
                    <h4 className="font-bold text-gray-800">Fast</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaWifi className="text-4xl text-green-500 mb-3" />
                    <h4 className="font-bold text-gray-800">Offline</h4>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                    <FaBell className="text-4xl text-red-500 mb-3" />
                    <h4 className="font-bold text-gray-800">Notify</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-left">
              {seamlessFeatures.map((feature, index) => (
                <div key={index}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Build Creative Progressive Web Apps */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Build Creative Progressive Web Apps to Increase Conversions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team creates PWAs that not only look stunning but also drive measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creativePWAFeatures.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features of Progressive Web Apps */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features of Progressive Web Apps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pwaFeatures.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentServices.map((service, index) => (
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

      {/* Our PWA Development Expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our PWA Development Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pwaExpertise.map((expertise, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{expertise.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow for PWA Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Workflow for PWA Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.slice(0, 4).map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#fb9c24] mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
            {workflow.slice(4).map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 4) * 100}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#fb9c24] mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
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
                Build A Unique Web App Experiences<br />
                w/ Our PWA Development Services.
              </h2>
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}

export default PWADevelopment;
