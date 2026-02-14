import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMobileAlt, FaBolt, FaWifi, FaBell, FaDownload, FaRocket } from "react-icons/fa";

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
  const openForm = () => setPopupOpen(true);
  const closeForm = () => setPopupOpen(false);

  const features = [
    {
      icon: <FaMobileAlt className="text-4xl text-[#fb9c24]" />,
      title: "App-Like Experience",
      description: "Deliver native app experience through the browser with smooth animations and gestures.",
    },
    {
      icon: <FaBolt className="text-4xl text-[#fb9c24]" />,
      title: "Lightning Fast",
      description: "Instant loading with service workers and smart caching strategies for optimal performance.",
    },
    {
      icon: <FaWifi className="text-4xl text-[#fb9c24]" />,
      title: "Offline Functionality",
      description: "Work seamlessly even without internet connection using advanced offline capabilities.",
    },
    {
      icon: <FaBell className="text-4xl text-[#fb9c24]" />,
      title: "Push Notifications",
      description: "Engage users with timely updates and notifications directly from the web app.",
    },
    {
      icon: <FaDownload className="text-4xl text-[#fb9c24]" />,
      title: "Installable",
      description: "Add to home screen without app stores, reducing friction and increasing accessibility.",
    },
    {
      icon: <FaRocket className="text-4xl text-[#fb9c24]" />,
      title: "Cross-Platform",
      description: "One codebase works perfectly across all devices and operating systems.",
    },
  ];

  const benefits = [
    {
      title: "Lower Development Cost",
      description: "Build once, deploy everywhere. No need for separate iOS and Android apps.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Improved Performance",
      description: "Faster load times and smooth interactions enhance user experience significantly.",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Better SEO",
      description: "PWAs are discoverable through search engines, increasing organic traffic.",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Increased Engagement",
      description: "Push notifications and offline access keep users coming back for more.",
      color: "from-orange-500 to-orange-600"
    },
  ];

  const technologies = [
    "Service Workers", "Web App Manifest", "HTTPS", "IndexedDB", 
    "Cache API", "Push API", "Background Sync", "Web Workers"
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1c438d] to-[#0d2552] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Progressive Web App Development
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Combine the best of web and mobile apps. Build fast, reliable, and engaging experiences
              that work offline and feel like native applications.
            </p>
            <button
              onClick={openForm}
              className="bg-[#fb9c24] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Build Your PWA
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            PWA Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1c438d] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Why Choose PWA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`bg-gradient-to-br ${benefit.color} text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/90 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c438d] mb-12" data-aos="fade-up">
            Core PWA Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-[#fb9c24] text-[#1c438d] font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1c438d] to-[#0d2552] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div data-aos="fade-up">
              <h3 className="text-5xl font-bold text-[#fb9c24] mb-2">3x</h3>
              <p className="text-lg">Faster Load Times</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-5xl font-bold text-[#fb9c24] mb-2">50%</h3>
              <p className="text-lg">Lower Development Cost</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-5xl font-bold text-[#fb9c24] mb-2">2x</h3>
              <p className="text-lg">Higher Conversion Rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#fb9c24] to-orange-600">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Progressive?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Transform your web presence with a Progressive Web App that delivers native app experience.
          </p>
          <button
            onClick={openForm}
            className="bg-white text-[#fb9c24] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && <UserForm onClose={closeForm} />}
    </div>
  );
}

export default PWADevelopment;
