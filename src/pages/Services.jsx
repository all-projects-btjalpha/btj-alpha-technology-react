import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { 
  FaCode, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaSearch, 
  FaBullhorn, 
  FaGoogle, 
  FaFacebookSquare,
  FaBrain,
  FaPalette,
  FaCogs,
  FaCloud,
  FaChartBar,
  FaVial,
  FaMousePointer,
  FaRobot,
  FaEnvelope
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      mirror: true,
    });
  }, []);

  const itServices = [
    { 
      name: "Website Designing", 
      path: "/website-designing", 
      icon: <FaCode className="text-3xl text-[#e74c3c]" />,
      description: "Create stunning, user-friendly websites that convert visitors into customers with our professional web design services."
    },
    { 
      name: "Website Development", 
      path: "/website-development", 
      icon: <FaLaptopCode className="text-3xl text-[#3498db]" />,
      description: "Build robust, scalable, and high-performance websites using modern technologies and best practices."
    },
    { 
      name: "Mobile App Development", 
      path: "/mobile-app-development-company-in-india", 
      icon: <FaMobileAlt className="text-3xl text-[#9b59b6]" />,
      description: "Develop innovative mobile applications for iOS and Android platforms that engage users and drive business growth."
    },
    { 
      name: "AI & ML", 
      path: "/ai-ml", 
      icon: <FaBrain className="text-3xl text-[#e67e22]" />,
      description: "Leverage artificial intelligence and machine learning to automate processes and gain valuable business insights."
    },
    { 
      name: "Product Development", 
      path: "/product-development-services-in-india", 
      icon: <FaCogs className="text-3xl text-[#1abc9c]" />,
      description: "End-to-end product development services from ideation to launch, ensuring market-ready solutions."
    },
    { 
      name: "PWA Development", 
      path: "/progressive-web-app-development-company-in-india", 
      icon: <FaMobileAlt className="text-3xl text-[#f39c12]" />,
      description: "Build progressive web applications that combine the best of web and mobile app experiences."
    },
    { 
      name: "Web API", 
      path: "/api-development-company-in-india", 
      icon: <FaCode className="text-3xl text-[#16a085]" />,
      description: "Develop secure and scalable RESTful APIs to power your digital applications and integrations."
    },
    { 
      name: "Software Architecture", 
      path: "/software-architecture-services-in-india", 
      icon: <FaCogs className="text-3xl text-[#d35400]" />,
      description: "Design robust software architectures that ensure scalability, maintainability, and future growth."
    },
    { 
      name: "Software Testing", 
      path: "/software-testing-companies-in-india", 
      icon: <FaVial className="text-3xl text-[#c0392b]" />,
      description: "Comprehensive testing services to ensure your software is bug-free, secure, and performs optimally."
    },
    { 
      name: "UI/UX Design", 
      path: "/ui-ux-design-company-in-india", 
      icon: <FaPalette className="text-3xl text-[#8e44ad]" />,
      description: "Create intuitive user interfaces and exceptional user experiences that delight your customers."
    },
    { 
      name: "Databases", 
      path: "/databases", 
      icon: <FaChartBar className="text-3xl text-[#2980b9]" />,
      description: "Database design, optimization, and management services for efficient data storage and retrieval."
    },
    { 
      name: "Cloud Services", 
      path: "/cloud-services", 
      icon: <FaCloud className="text-3xl text-[#3498db]" />,
      description: "Migrate to cloud platforms and leverage cloud computing for scalable and cost-effective solutions."
    },
    { 
      name: "Reporting", 
      path: "/reporting", 
      icon: <FaChartBar className="text-3xl text-[#27ae60]" />,
      description: "Generate insightful reports and dashboards to track performance and make data-driven decisions."
    },
  ];

  const digitalServices = [
    { 
      name: "Search Engine Optimization", 
      path: "/search-engine-optimization", 
      icon: <FaSearch className="text-3xl text-[#e67e22]" />,
      description: "Improve your website's visibility in search engines and drive organic traffic with our SEO expertise."
    },
    { 
      name: "Performance Marketing", 
      path: "/performance-marketing", 
      icon: <FaChartBar className="text-3xl text-[#e67e22]" />,
      description: "Data-driven marketing campaigns focused on measurable results and maximum ROI."
    },
    { 
      name: "Social Media Marketing", 
      path: "/social-media-marketing-company-in-india", 
      icon: <FaBullhorn className="text-3xl text-[#e74c3c]" />,
      description: "Build brand awareness and engage your audience across all major social media platforms."
    },
    { 
      name: "Pay per Click Advertising", 
      path: "/ppc-advertising", 
      icon: <FaMousePointer className="text-3xl text-[#3498db]" />,
      description: "Targeted paid advertising campaigns that generate immediate traffic and qualified leads."
    },
    { 
      name: "Google Ads", 
      path: "/google-ads", 
      icon: <FaGoogle className="text-3xl text-[#4285f4]" />,
      description: "Professional Google Ads management to maximize your visibility on the world's largest search engine."
    },
    { 
      name: "Facebook Ads", 
      path: "/meta-ads", 
      icon: <FaFacebookSquare className="text-3xl text-[#1877f2]" />,
      description: "Strategic Facebook and Instagram advertising to reach your target audience effectively."
    },
    { 
      name: "Answer Engine Optimization", 
      path: "/answer-engine-optimization", 
      icon: <FaRobot className="text-3xl text-[#9b59b6]" />,
      description: "Optimize for voice search and answer engines to capture featured snippets and voice search traffic."
    },
    { 
      name: "Email Marketing", 
      path: "/email-marketing", 
      icon: <FaEnvelope className="text-3xl text-[#e74c3c]" />,
      description: "Design and execute effective email marketing campaigns that nurture leads and drive conversions."
    },
  ];

  return (
    <>
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff4e6] to-[#ffe8cc] py-20 md:py-32 overflow-hidden pt-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" data-aos-once="false">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our<br />
                <span className="text-[#fb9c24]">Services</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Comprehensive digital solutions to transform your business and drive sustainable growth. 
                From web development to digital marketing, we provide end-to-end services that help you 
                achieve your business objectives and stay ahead in the competitive digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Us
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-[#ff8c00] to-[#fb9c24] hover:from-[#fb9c24] hover:to-[#ff8c00] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div data-aos="fade-left" data-aos-once="false" className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                {/* Animated Services Illustration */}
                <div className="relative">
                  {/* Main Screen */}
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all animate-float">
                    <div className="space-y-4">
                      {/* Service blocks */}
                      <div className="flex gap-3">
                        <div className="w-16 h-3 bg-cyan-300 rounded animate-pulse"></div>
                        <div className="w-24 h-3 bg-purple-300 rounded animate-pulse delay-100"></div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-20 h-3 bg-pink-300 rounded animate-pulse delay-200"></div>
                        <div className="w-16 h-3 bg-yellow-300 rounded animate-pulse"></div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-24 h-3 bg-green-300 rounded animate-pulse delay-100"></div>
                        <div className="w-20 h-3 bg-blue-300 rounded animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <FaCode className="text-3xl text-blue-600" />
                  </div>
                  <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                    <FaSearch className="text-3xl text-purple-600" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                    <FaChartBar className="text-3xl text-green-600" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <FaCogs className="text-3xl text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IT <span className="text-[#fb9c24]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <Link 
                key={index}
                to={service.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#fb9c24] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-[#fb9c24] font-semibold group-hover:underline">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Services Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Digital <span className="text-[#fb9c24]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Boost your online presence and reach your target audience with our comprehensive digital marketing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <Link 
                key={index}
                to={service.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-[#fb9c24] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-[#fb9c24] to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            data-aos="fade-up"
            data-aos-once="false"
          >
            Ready to Transform Your Business?
          </h2>
          <p 
            className="text-xl text-white mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="false"
          >
            Let's discuss how our services can help you achieve your business goals and drive sustainable growth.
          </p>
          <Link to="/contact">
            <button 
              className="group relative inline-flex items-center px-8 py-4 bg-white text-[#fb9c24] font-bold text-xl rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="false"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <svg 
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#fb9c24] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>

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
    </>
  );
};

export default Services;