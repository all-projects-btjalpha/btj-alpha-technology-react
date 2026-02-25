import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaGlobe, FaServer, FaDatabase, FaShieldAlt, FaClock, FaDollarSign, FaChartBar, FaCog } from "react-icons/fa";

const Hostinger = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      mirror: true,
    });
  }, []);

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
                  Best Hosting in India – Fast & Affordable Web Hosting<br />
                  <span className="text-[#fb9c24]">| BTJ Alpha Technology</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                 At BTJ Alpha Technology, we provide professional Hostinger web hosting in India for businesses of all sizes. Our hosting solutions are fast, secure, and budget-friendly, helping you build a strong and reliable online presence.</p>
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
                  {/* Animated Hostinger Illustration */}
                  <div className="relative">
                    {/* Main Screen */}
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all animate-float">
                      <div className="space-y-4">
                        {/* Server blocks */}
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
                      <img src="/hostinger.svg" alt="Hostinger" className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-100">
                      <FaServer className="text-3xl text-green-600" />
                    </div>
                    <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-200">
                      <FaGlobe className="text-3xl text-blue-600" />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                      <FaDatabase className="text-3xl text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Hostinger <span className="text-[#fb9c24]">Features</span>
              </h2>
              <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2 text-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="false"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                    <div className="text-gray-700 group-hover:text-white transition-colors duration-300">
                      <FaGlobe className="text-3xl" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#fb9c24] transition-colors duration-300">
                  Global Network
                </h3>
                <p className="text-gray-600">
                 Fast servers located worldwide ensure optimal website performance and reduced latency. Your website loads quickly for visitors in India and across the globe.
                </p>
              </div>

              <div 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                    <div className="text-gray-700 group-hover:text-white transition-colors duration-300">
                      <FaClock className="text-3xl" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#fb9c24] transition-colors duration-300">
                  99.9% Uptime
                </h3>
                <p className="text-gray-600">
                  Reliable hosting with an industry-leading uptime guarantee ensures your website stays online without interruptions.
                </p>
              </div>

              <div 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2 text-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="false"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                    <div className="text-gray-700 group-hover:text-white transition-colors duration-300">
                      <FaShieldAlt className="text-3xl" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#fb9c24] transition-colors duration-300">
                  Security
                </h3>
                <p className="text-gray-600">
                  Advanced security features including SSL certificates and DDoS protection keep your website safe from cyber threats.
                </p>
              </div>

              <div 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#fb9c24] transform hover:-translate-y-2 text-center"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="false"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#fb9c24] transition-all duration-300">
                    <div className="text-gray-700 group-hover:text-white transition-colors duration-300">
                      <FaDollarSign className="text-3xl" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#fb9c24] transition-colors duration-300">
                  Affordable Pricing
                </h3>
                <p className="text-gray-600">
                  Competitive pricing plans that grow with your business. Perfect for startups, small businesses, and growing companies in India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
              data-aos-once="false"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Performance <span className="text-[#fb9c24]">Benefits</span>
              </h2>
              <div className="w-24 h-1 bg-[#fb9c24] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right" data-aos-once="false">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Lightning Fast <span className="text-[#fb9c24]">Performance</span>
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Experience superior loading speeds with Hostinger’s optimized infrastructure.
                   Our Hostinger web hosting in India ensure your website loads instantly and delivers an excellent user experience.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#fb9c24] rounded-full mt-1">
                      <FaChartBar className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Advanced Caching</h4>
                      <p className="text-gray-600">
                       Built-in caching solutions accelerate your website performance and improve loading speed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#fb9c24] rounded-full mt-1">
                      <FaServer className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">SSD Storage</h4>
                      <p className="text-gray-600">
                        Premium SSD storage ensures faster data access and improved reliability for your website.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#fb9c24] rounded-full mt-1">
                      <FaCog className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Optimized Infrastructure</h4>
                      <p className="text-gray-600">
                       Custom-built server configurations designed specifically for high-performance web hosting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" data-aos-once="false" className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Speed Comparison</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Hostinger</span>
                            <span className="text-sm font-medium text-gray-700">98%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-[#fb9c24] h-3 rounded-full" style={{width: '98%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Industry Average</span>
                            <span className="text-sm font-medium text-gray-700">75%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gray-400 h-3 rounded-full" style={{width: '75%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Basic Hosting</span>
                            <span className="text-sm font-medium text-gray-700">60%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gray-500 h-3 rounded-full" style={{width: '60%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] p-6 rounded-xl text-white">
                      <h4 className="text-lg font-bold mb-2">Performance Guarantee</h4>
                      <p className="text-sm">
                       We guarantee 99.9% uptime and lightning-fast loading speeds for your website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              Ready to Experience Superior Hosting?
            </h2>
            <p 
              className="text-xl text-white mb-10 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="false"
            >
              Join thousands of satisfied customers who trust Hostinger for their web hosting needs. With BTJ Alpha Technology, you get expert support and reliable Hostinger web hosting in India tailored to your business.
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

export default Hostinger;