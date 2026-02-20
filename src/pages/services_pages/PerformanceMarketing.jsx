import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartLine, FaBullseye, FaAd, FaGoogle, FaUsers, FaMoneyBillWave } from "react-icons/fa";

const features = [
  {
    title: "ROI-Focused Campaigns",
    description: "Data-driven campaigns designed to maximize return on investment and revenue.",
    icon: <FaChartLine className="text-4xl text-[#fb9c24]" />,
  },
  {
    title: "Multi-Channel Strategy",
    description: "Integrated campaigns across Google, Facebook, Instagram, and LinkedIn.",
    icon: <FaGoogle className="text-4xl text-[#fb9c24]" />,
  },
  {
    title: "Conversion Optimization",
    description: "A/B testing and optimization to improve conversion rates continuously.",
    icon: <FaBullseye className="text-4xl text-[#fb9c24]" />,
  },
  {
    title: "Audience Targeting",
    description: "Precise targeting to reach your ideal customers at the right time.",
    icon: <FaUsers className="text-4xl text-[#fb9c24]" />,
  },
];

const services = [
  {
    title: "Data-Driven Marketing",
    description: "Leverage analytics and insights to create high-impact marketing campaigns.",
    icon: "https://img.icons8.com/color/96/data-configuration.png",
  },
  {
    title: "Customer Acquisition",
    description: "Strategic approaches to attract and convert new customers effectively.",
    icon: "https://img.icons8.com/color/96/user-male.png",
  },
  {
    title: "Brand Awareness",
    description: "Build strong brand presence across digital channels and platforms.",
    icon: "https://img.icons8.com/color/96/branding.png",
  },
  {
    title: "Lead Generation",
    description: "Generate high-quality leads through targeted marketing strategies.",
    icon: "https://img.icons8.com/color/96/sales.png",
  },
];

const steps = [
  {
    number: "01",
    title: "Strategy Development",
    answer: "Define clear objectives and KPIs for your performance marketing campaigns.",
  },
  {
    number: "02",
    title: "Audience Research",
    answer: "Identify and understand your target audience for precise targeting.",
  },
  {
    number: "03",
    title: "Campaign Creation",
    answer: "Develop compelling campaigns across multiple digital channels.",
  },
  {
    number: "04",
    title: "Launch & Monitor",
    answer: "Execute campaigns with real-time monitoring and performance tracking.",
  },
  {
    number: "05",
    title: "Optimize & Scale",
    answer: "Continuously optimize based on data and scale successful strategies.",
  },
];

function PerformanceMarketing() {
  const [hoverIndex, setHoverIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Enhanced */}
      <section className="relative w-full h-screen overflow-hidden flex items-end bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source
              src="/performance-marketing/hero-background.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl px-6 max-md:px-4 py-16 md:py-24 text-white mx-auto">
          <div className="max-w-3xl" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                PERFORMANCE MARKETING
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl max-md:text-3xl font-bold leading-tight mb-6">
              Performance <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Marketing</span>
            </h1>
            <p className="text-lg md:text-xl max-md:text-base mb-8 text-gray-200">
              Drive measurable results with data-driven performance marketing campaigns. 
              Pay for results, not just impressions. Maximize ROI with our expert strategies.
            </p>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] transition-all duration-300 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transform">
                Let's Talk →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="bg-white py-16 px-6 max-md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:gap-12 lg:items-start">
            {/* Left Content */}
            <div className="lg:w-3/5 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full shadow-md">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  WHO WE ARE
                </span>
              </div>
              
              <h1 className="text-3xl max-md:text-2xl font-bold leading-tight text-gray-900">
                Drive Measurable Results with Expert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Performance Marketing
                </span>
              </h1>
              
              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full"></div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In today's competitive digital landscape, businesses need marketing strategies that deliver 
                  tangible results. Performance marketing focuses on measurable outcomes, ensuring every 
                  dollar spent generates a positive return on investment.
                </p>
                <p>
                  BTJ Alpha Technology specializes in performance marketing solutions that drive real business growth. 
                  Our data-driven approach combines advanced analytics, strategic planning, and creative execution 
                  to maximize your marketing effectiveness across all channels.
                </p>
                <p>
                  We help businesses achieve their marketing objectives through targeted campaigns, 
                  precise audience segmentation, and continuous optimization. Our team of experts 
                  stays ahead of industry trends to deliver cutting-edge performance marketing solutions.
                </p>
                <p>
                  From lead generation to customer acquisition, our performance marketing services 
                  are designed to deliver measurable results that impact your bottom line. 
                  We focus on KPIs that matter most to your business success.
                </p>
              </div>
            </div>

            {/* Right Form - Enhanced */}
            <div className="lg:w-2/5 mt-10 lg:mt-0" data-aos="fade-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-white shadow-2xl rounded-2xl p-8 max-md:p-6 border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-full mb-4 shadow-lg">
                      <FaChartLine className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl max-md:text-xl font-bold text-gray-900 mb-2">
                      Boost Your Performance Marketing!
                    </h2>
                    <p className="text-sm text-gray-600">
                      Get expert consultation for your campaigns
                    </p>
                  </div>
                  <UserForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="relative py-20 max-md:py-12 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR FEATURES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Marketing Features</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our performance marketing services are designed to deliver measurable results and maximize your ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                data-aos="flip-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] opacity-20 rounded-xl blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="h-32 w-32 relative z-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {feature.title}
                </h3>
                <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-3 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300"></div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Performance Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-md:gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group bg-white border-2 border-gray-100 rounded-2xl shadow-md p-6 max-md:p-4 flex flex-col items-center hover:shadow-2xl hover:border-[#fb9c24] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300"></div>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-16 w-16 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {service.title}
                </p>
                <p className="text-xs text-gray-600 text-center mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between max-lg:flex-col max-lg:gap-6 mb-16" data-aos="fade-up">
            <div className="lg:w-2/5">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-5 shadow-md">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  OUR PROCESS
                </span>
              </div>
              <h2 className="text-4xl max-md:text-2xl font-bold leading-tight text-gray-900 mb-4">
                Our Performance Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Process</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full"></div>
            </div>
            <div className="lg:w-2/5 mt-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                We follow a proven methodology to ensure your performance marketing campaigns deliver maximum results and ROI.
              </p>
            </div>
          </div>

          {/* Desktop view */}
          <div className="max-md:hidden">
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoverIndex(i)}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 h-full border-2 border-transparent hover:border-[#fb9c24] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                        {step.title}
                      </h3>
                      <div className="w-12 h-1 bg-gray-200 rounded-full mb-3 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300"></div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile view */}
          <div className="hidden max-md:block">
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#fb9c24] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PerformanceMarketing;