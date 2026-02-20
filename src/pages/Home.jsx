import video from "../assets/video/banner-video.mp4";
import about from "../assets/images/Home-page/about.jpg";
import SEO from "/SEO.jpg";
import SMO from "/SMM.jpg";
import CM from "/CONTENT.jpg";
import PPC from "/PPC_.jpg";
import step from "../assets/images/Home-page/step.webp";
import agency from "../assets/images/Home-page/agency.webp";
import { GoArrowRight } from "react-icons/go";
import about_team from "/WEBSITE_WORK.jpg";
import icon1 from "../assets/images/Home-page/14.webp";
import icon2 from "../assets/images/Home-page/19.webp";
import icon4 from "../assets/images/Home-page/22.webp";
import ecommerce from "../assets/images/Home-page/ecommerce.png";
import responsive from "../assets/images/Home-page/responsive.png";
import settings from "../assets/images/Home-page/settings.png";
import web from "../assets/images/Home-page/web-design.png";
import programming from "../assets/images/Home-page/programming.webp";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { items } from "../components/HomePageData";
import { technologies } from "../components/HomePageData";
import { RiArrowRightSLine, RiH1 } from "react-icons/ri";
import UserForm from "../components/UserForm";
import { FaUsers, FaClock, FaCheckCircle, FaLightbulb, FaCalendarCheck, FaDollarSign, FaChevronDown, FaCog, FaRocket } from "react-icons/fa";

function Home() {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  
  // Counter Animation State
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    feedback: 0,
    clients: 0,
    experts: 0,
    hours: 0
  });
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      mirror: true,
    });
  }, []);
  
  // Rotating text animation
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ["Solutions", "Technology", "Innovation", "Transformation"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000); // Change word every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Counter Animation Effect
  useEffect(() => {
    const animateCounter = (key, target, duration = 2000) => {
      const startTime = Date.now();
      const step = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);
        
        setCounters(prev => ({ ...prev, [key]: current }));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCounters(prev => ({ ...prev, [key]: target }));
        }
      };
      requestAnimationFrame(step);
    };

    if (isCounterVisible) {
      animateCounter('projects', 200);
      animateCounter('feedback', 100);
      animateCounter('clients', 180);
      animateCounter('experts', 100);
      animateCounter('hours', 300);
    }
  }, [isCounterVisible]);
  
  // Intersection Observer for counter animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset counters to 0 before starting animation
            setCounters({
              projects: 0,
              feedback: 0,
              clients: 0,
              experts: 0,
              hours: 0
            });
            // Trigger animation
            setIsCounterVisible(true);
          } else {
            // Reset when out of view
            setIsCounterVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  const handleMouseOver = (id) => {
    setHoveredId(id);
  };

  const handleMouseOut = () => {
    setHoveredId(null);
  };

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState("SEO");
  const handleTabClick = (service) => {
    setActiveTab(service);
  };

  return (
    <>
      <main className=" w-[100%]  mt-[65px]">
        {/* Banner Section Start here */}

        <div className="relative h-[95vh] bg-cover bg-center overflow-hidden max-md:h-auto max-md:min-h-[70vh]">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              preload="auto"
              poster="/fallback_img.png"
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dull Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row px-8 py-16 items-center justify-center h-full text-white max-lg:px-6 max-md:py-10 max-md:flex-col gap-8">
            <div className="text-white md:w-1/2 max-md:w-full">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#fb9c24] to-orange-600 px-6 py-3 rounded-full shadow-lg mb-6 animate-pulse">
                <span className="text-2xl">🚀</span>
                <h2 className="text-white text-xl max-md:text-lg font-bold uppercase tracking-wider">
                  GET STARTED WITH US
                </h2>
              </div>
              <h1 className="text-5xl max-lg:text-5xl max-md:text-4xl font-extrabold mt-4 leading-tight">
                Transform Your Business <br className="max-md:hidden" />
                with Digital{" "}
                <span 
                  key={currentWordIndex}
                  className="inline-block bg-gradient-to-r from-[#fb9c24] via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-fadeInScale"
                  style={{
                    animation: 'fadeInScale 0.8s ease-in-out'
                  }}
                >
                  {rotatingWords[currentWordIndex]}
                </span>
              </h1>
              <p className="mt-6 text-lg max-md:text-base leading-relaxed w-[90%] max-md:w-full text-gray-100">
                BTJ Alpha Technology Pvt Ltd <span className="text-[#fb9c24] font-bold">is a trusted digital transformation company delivering innovative IT </span>  and marketing solutions to startups, enterprises, and global brands.
                <span className="text-yellow-300 font-semibold"> We help businesses modernize operations,</span>enhance digital presence, and achieve sustainable growth 
                <span className="text-[#fb9c24] font-bold"> through advanced technologies.</span>
              </p>
              <p className="mt-6 text-lg max-md:text-base leading-relaxed w-[90%] max-md:w-full text-gray-100">Partner with certified professionals who combine strategy, creativity, and technical expertise to accelerate your digital success.</p>
              
              <Link to="contact">
                <button 
                className="group relative inline-flex items-center px-10 py-5 font-bold mt-8 bg-gradient-to-r from-[#fb9c24] to-orange-600 rounded-2xl text-white text-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(251,156,36,0.5)] transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#fb9c24] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-2xl md:w-[420px] w-full max-md:w-full max-md:mx-4">
              <h2 className="text-2xl max-md:text-xl font-bold mb-6 text-black text-center leading-snug">
                Get A Free Consultation With Our Marketing Expert
              </h2>
              <UserForm />
            </div>
          </div>
        </div>

        {/* Banner Section End here  */}

        {/* Statistics Section Start here */}
        <div id="stats-section" className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16 px-6 max-md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-md:gap-4">
              {/* Stat 1 - Projects Delivered */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="800"
                data-aos-delay="100"
                className="group relative overflow-hidden bg-white rounded-2xl p-8 max-md:p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-[#fb9c24] cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-[#fb9c24] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#fb9c24] to-transparent opacity-40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <div className="relative z-10">
                  <h2 className="text-6xl max-md:text-5xl font-black text-[#fb9c24] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {counters.projects}<span className="text-4xl align-top">+</span>
                  </h2>
                </div>
                <p className="relative z-10 text-gray-700 font-bold text-base max-md:text-sm">Projects Delivered</p>
              </div>

              {/* Stat 2 - Positive Feedback */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="800"
                data-aos-delay="200"
                className="group relative overflow-hidden bg-white rounded-2xl p-8 max-md:p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-[#fb9c24] cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-[#fb9c24] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#fb9c24] to-transparent opacity-40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <div className="relative z-10">
                  <h2 className="text-6xl max-md:text-5xl font-black text-[#fb9c24] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {counters.feedback}<span className="text-4xl align-top">%</span>
                  </h2>
                </div>
                <p className="relative z-10 text-gray-700 font-bold text-base max-md:text-sm">Positive Feedback</p>
              </div>

              {/* Stat 3 - Happy Clients */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="800"
                data-aos-delay="300"
                className="group relative overflow-hidden bg-white rounded-2xl p-8 max-md:p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-[#fb9c24] cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-[#fb9c24] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#fb9c24] to-transparent opacity-40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <div className="relative z-10">
                  <h2 className="text-6xl max-md:text-5xl font-black text-[#fb9c24] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {counters.clients}<span className="text-4xl align-top">+</span>
                  </h2>
                </div>
                <p className="relative z-10 text-gray-700 font-bold text-base max-md:text-sm">Happy Clients</p>
              </div>

              {/* Stat 4 - Technology Experts */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="800"
                data-aos-delay="400"
                className="group relative overflow-hidden bg-white rounded-2xl p-8 max-md:p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-[#fb9c24] cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-[#fb9c24] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#fb9c24] to-transparent opacity-40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <div className="relative z-10">
                  <h2 className="text-6xl max-md:text-5xl font-black text-[#fb9c24] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {counters.experts}<span className="text-4xl align-top">+</span>
                  </h2>
                </div>
                <p className="relative z-10 text-gray-700 font-bold text-base max-md:text-sm">Technology Experts</p>
              </div>

              {/* Stat 5 - Coding Hours */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="800"
                data-aos-delay="500"
                className="group relative overflow-hidden bg-white rounded-2xl p-8 max-md:p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-[#fb9c24] col-span-2 md:col-span-3 lg:col-span-1 cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full bg-[#fb9c24] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#fb9c24] to-transparent opacity-40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <div className="relative z-10">
                  <h2 className="text-6xl max-md:text-5xl font-black text-[#fb9c24] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {counters.hours}<span className="text-4xl align-top">K+</span>
                  </h2>
                </div>
                <p className="relative z-10 text-gray-700 font-bold text-base max-md:text-sm">Coding Hours</p>
              </div>
            </div>
          </div>
        </div>
        {/* Statistics Section End here */}

        {/* Who-we-are Section Start here */}

        <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white max-lg:py-12 max-md:px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 max-lg:mb-10" data-aos="fade-up" data-aos-duration="800">
              <h3 className="text-[16px] text-[#fb9c24] font-bold tracking-[0.3em] mb-4 uppercase">
                ABOUT US
              </h3>
              <h1 className="text-[48px] font-black mb-0 leading-tight max-lg:text-[38px] max-md:text-[32px] text-gray-900">
                Know About Us
              </h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 max-lg:gap-8">
              {/* Left Content */}
              <div className="w-full lg:w-[50%]" data-aos="fade-right" data-aos-duration="1000">
                <h2 className="text-[32px] font-bold mb-6 leading-tight max-lg:text-[28px] max-md:text-[24px] text-gray-900">
                  Hey, We're A Team Of Creators
                </h2>
                <p className="text-[18px] leading-relaxed text-gray-700 mb-8 max-lg:text-[16px] max-md:text-[15px]">
                  <span className="font-semibold text-gray-900">BTJ Alpha Technology Pvt Ltd is a professionally managed full-service IT and digital solutions company based in India.</span> We specialize in delivering scalable, secure, and performance-driven technology solutions.
                </p>
                <p className="text-[18px] leading-relaxed text-gray-700 mb-8 max-lg:text-[16px] max-md:text-[15px]">
                  <span className="font-semibold text-gray-900">Our mission is simple — </span> empower businesses with innovative digital systems that drive measurable results.
                  <br></br>We continuously evolve with technology trends to ensure our clients stay ahead of the competition. From web platforms to enterprise automation, we provide end-to-end digital services under one roof.
                </p>
                <Link to="/about">
                  <button className="group relative inline-flex items-center px-8 py-4 font-semibold bg-gradient-to-r from-[#fb9c24] to-orange-600 rounded-lg text-white text-[18px] shadow-lg hover:shadow-[0_20px_50px_rgba(251,156,36,0.5)] transform hover:scale-105 transition-all duration-300 overflow-hidden max-md:px-6 max-md:py-3 max-md:text-[16px]">
                    <span className="relative z-10 flex items-center gap-2">
                      About Us
                      <svg 
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#fb9c24] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </Link>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-[50%]" data-aos="fade-left" data-aos-duration="1000">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fb9c24] to-[#00bcd4] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
                  <img
                    src="/Team1.jpg"
                    alt="Our Team Working Together"
                    className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transform group-hover:scale-[1.02] transition-all duration-500 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:mt-12 max-md:gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#fb9c24] max-md:p-6">
                <div className="relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fb9c24] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <h1 className="text-[56px] font-black text-transparent bg-gradient-to-r from-[#fb9c24] to-[#e88a15] bg-clip-text mb-2 max-lg:text-[48px] max-md:text-[40px] relative z-10">
                    50<span className="text-[40px] max-md:text-[32px]">+</span>
                  </h1>
                  <p className="text-[18px] font-bold text-gray-800 max-md:text-[16px] relative z-10">Employees</p>
                </div>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#00bcd4] max-md:p-6">
                <div className="relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00bcd4] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <h1 className="text-[56px] font-black text-transparent bg-gradient-to-r from-[#00bcd4] to-[#0097a7] bg-clip-text mb-2 max-lg:text-[48px] max-md:text-[40px] relative z-10">
                    378<span className="text-[40px] max-md:text-[32px]">+</span>
                  </h1>
                  <p className="text-[18px] font-bold text-gray-800 max-md:text-[16px] relative z-10">Completed Projects</p>
                </div>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500 max-md:p-6 sm:col-span-2 lg:col-span-1">
                <div className="relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <h1 className="text-[56px] font-black text-transparent bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text mb-2 max-lg:text-[48px] max-md:text-[40px] relative z-10">
                    326<span className="text-[40px] max-md:text-[32px]">+</span>
                  </h1>
                  <p className="text-[18px] font-bold text-gray-800 max-md:text-[16px] relative z-10">Trusted Customers</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Who-we-are Section End here */}

        {/* Services Section Start here */}

        {/* <div className="flex flex-col text-center py-16 px-6 max-md:py-10">
          <h1 className="text-[3rem] font-bold mb-4 max-md:text-[2.5rem] text-gray-900">
            Areas of Expertise
          </h1>
          <p className="text-[1.5rem] max-md:text-[1.3rem] max-md:px-1 font-medium mb-4">
        {/* Services Section Start here */}

        {/* <div className="flex flex-col text-center py-16 px-6 max-md:py-10">
          <h1 className="text-[3rem] font-bold mb-4 max-md:text-[2.5rem] text-gray-900">
            Areas of Expertise
          </h1>
          <p className="text-[1.5rem] max-md:text-[1.3rem] max-md:px-1 font-medium mb-4">
            #1 Affordable{" "}
            <span className="text-[#fb9c24] font-bold">
              Digital Marketing Agency In India
            </span>{" "}
            - An Extended Team
          </p>
          <p className="p-3 max-md:px-1 w-[77%] m-auto text-[1.1rem] max-md:w-[100%] text-gray-700 leading-relaxed mb-10">
            BTJ ALPHA TECHNOLOGY PVT LTD is a professionally managed full
            service web design & development company in Noida, India. We have
            been helping businesses to adapt and grow in an ever-changing online
            world by offering fully functional mobile-friendly responsive, cheap
            Website Designing, Web Development, App Development, SEO Services,
            SMM Services etc.
          </p>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-md:gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
                className="relative group bg-white rounded-[24px] shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
              
                <div className="h-[200px] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                </div>
                
               
                <div className="p-6 min-h-[180px] flex flex-col">
                  <h1 className="text-[1.4rem] font-bold mb-3 text-gray-900 group-hover:text-[#fb9c24] transition-colors duration-300">
                    {item.heading}
                  </h1>
                  
                  {hoveredId === index ? (
                    <>
                      <p className="text-[0.95rem] text-gray-600 mb-4 leading-relaxed flex-grow">
                        {item.content}
                      </p>
                      <Link to={item.url} className="mt-auto">
                        <button className="w-full py-3 text-[16px] font-bold rounded-full bg-[#fb9c24] hover:bg-[#e88a15] text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                          Learn More →
                        </button>
                      </Link>
                    </>
                  ) : (
                    <p className="text-[0.95rem] text-gray-600 line-clamp-3">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Services Section End here */}

        {/* Why Choose Us Section Start here */}

        <div className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50 max-md:py-12 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#fb9c24]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 max-md:mb-10" data-aos="fade-up" data-aos-duration="800">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#fb9c24]/20 to-orange-500/20 rounded-full mb-6 border border-[#fb9c24]/30">
                <span className="w-2 h-2 bg-[#fb9c24] rounded-full mr-2 animate-pulse"></span>
                <span className="text-[14px] font-semibold text-[#fb9c24] uppercase tracking-wider">Our Services</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[3.5rem] font-black mb-6 max-lg:text-[3rem] max-md:text-[2.5rem] text-gray-900 leading-tight">
                Areas of <span className="text-transparent bg-gradient-to-r from-[#fb9c24] to-orange-600 bg-clip-text">Expertise</span>
              </h1>

              {/* Subtitle with Icon */}
              <div className="flex items-center justify-center gap-3 mb-6 max-md:flex-wrap max-md:px-4">
                <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                  <svg className="w-5 h-5 text-[#fb9c24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-[1.25rem] font-bold text-gray-800 max-md:text-[1.1rem]">#1 Affordable</span>
                </div>
                <span className="text-[1.5rem] font-bold text-transparent bg-gradient-to-r from-[#fb9c24] to-orange-600 bg-clip-text max-md:text-[1.3rem] max-md:px-2">
                  Digital Marketing services In India
                </span>
                <div className="bg-gradient-to-r from-[#fb9c24] to-orange-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg text-[1rem] max-md:text-[0.9rem]">
                  An Extended Team
                </div>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 max-md:p-6">
                <p className="text-[1.15rem] text-gray-700 leading-relaxed max-md:text-[1rem]">
                  <span className="font-bold text-gray-900">BTJ ALPHA TECHNOLOGY PVT LTD</span> is recognized as a reliable IT services company in India.{" "}
                  <span className="font-semibold text-[#fb9c24]">We help businesses adapt and grow </span> in an ever-changing digital world by offering high-performing, scalable, and cost-effective technology solutions.{" "}
                  <span className="font-semibold text-[#fb9c24]">Our services include </span>, cheap{" "}
                  <span className="font-semibold text-gray-900">web development, mobile app development, SEO services, social media marketing, and bulk SMS marketing</span> solutions.
                </p>
                
                {/* Feature Tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 rounded-full text-[0.9rem] font-medium border border-blue-200">
                    🎨 Web Design
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-700 rounded-full text-[0.9rem] font-medium border border-green-200">
                    💻 Development
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-700 rounded-full text-[0.9rem] font-medium border border-purple-200">
                    📱 App Development
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 text-orange-700 rounded-full text-[0.9rem] font-medium border border-orange-200">
                    🚀 SEO Services
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-pink-500/10 to-pink-600/10 text-pink-700 rounded-full text-[0.9rem] font-medium border border-pink-200">
                    📊 SMM Services
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:gap-4">
              {/* Card 1 - Social Media Marketing */}
              <div className="group relative overflow-hidden rounded-[32px] h-[400px] max-md:h-[350px] cursor-pointer transition-all duration-500 shadow-xl hover:shadow-2xl">
                <img
                  src="/SMM.jpg"
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 group-hover:via-black/80 transition-all duration-500"></div>
                
                {/* Default Content - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-[1.5rem] max-md:text-[1.3rem] font-bold mb-2">
                    Social Media Marketing
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed">
                    Boost your brand presence across all social platforms
                  </p>
                </div>

                {/* Expanded Content - Slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/95 via-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <h3 className="text-[1.8rem] max-md:text-[1.5rem] font-bold mb-4 text-[#fb9c24]">
                    Social Media Marketing
                  </h3>
                  <p className="text-[1rem] max-md:text-[0.9rem] leading-relaxed mb-6">
                    Boost your brand awareness and engagement across platforms like Facebook, Instagram, LinkedIn, and YouTube with result-driven social campaigns.
                  </p>
                  <Link to="/social-media-marketing">
                    <button className="px-6 py-3 bg-[#fb9c24] hover:bg-[#e88a15] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      Learn More <GoArrowRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 2 - Web Development */}
              <div className="group relative overflow-hidden rounded-[32px] h-[400px] max-md:h-[350px] cursor-pointer transition-all duration-500 shadow-xl hover:shadow-2xl">
                <img
                  src="/WEBSITE_WORK.jpg"
                  alt="Web Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 group-hover:via-black/80 transition-all duration-500"></div>
                
                {/* Default Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-[1.5rem] max-md:text-[1.3rem] font-bold mb-2">
                    Web Development
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed">
                    Custom websites built with cutting-edge technology
                  </p>
                </div>

                {/* Expanded Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/95 via-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <h3 className="text-[1.8rem] max-md:text-[1.5rem] font-bold mb-4 text-[#fb9c24]">
                    Web Development
                  </h3>
                  <p className="text-[1rem] max-md:text-[0.9rem] leading-relaxed mb-6">
                    Custom-built, secure, and high-performance websites developed with modern technologies to meet your business goals.
                  </p>
                  <Link to="/website-development">
                    <button className="px-6 py-3 bg-[#fb9c24] hover:bg-[#e88a15] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      Learn More <GoArrowRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 3 - SEO Services */}
              <div className="group relative overflow-hidden rounded-[32px] h-[400px] max-md:h-[350px] cursor-pointer transition-all duration-500 shadow-xl hover:shadow-2xl">
                <img
                  src="/SEO.jpg"
                  alt="SEO Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 group-hover:via-black/80 transition-all duration-500"></div>
                
                {/* Default Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-[1.5rem] max-md:text-[1.3rem] font-bold mb-2">
                    SEO Services
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed">
                    Rank higher and drive organic traffic to your website
                  </p>
                </div>

                {/* Expanded Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/95 via-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <h3 className="text-[1.8rem] max-md:text-[1.5rem] font-bold mb-4 text-[#fb9c24]">
                    SEO Services
                  </h3>
                  <p className="text-[1rem] max-md:text-[0.9rem] leading-relaxed mb-6">
                    Improve search engine rankings, increase organic traffic, and generate quality leads with our data-driven SEO strategies.
                  </p>
                  <Link to="/search-engine-optimization">
                    <button className="px-6 py-3 bg-[#fb9c24] hover:bg-[#e88a15] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      Learn More <GoArrowRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 4 - Mobile App Development */}
              <div className="group relative overflow-hidden rounded-[32px] h-[400px] max-md:h-[350px] cursor-pointer transition-all duration-500 shadow-xl hover:shadow-2xl">
                <img
                  src="/mobile-app/mobile app.png"
                  alt="Mobile App Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 group-hover:via-black/80 transition-all duration-500"></div>
                
                {/* Default Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-[1.5rem] max-md:text-[1.3rem] font-bold mb-2">
                    Mobile App Development
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed">
                    Innovative mobile solutions for iOS and Android
                  </p>
                </div>

                {/* Expanded Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/95 via-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <h3 className="text-[1.8rem] max-md:text-[1.5rem] font-bold mb-4 text-[#fb9c24]">
                    Mobile App Development
                  </h3>
                  <p className="text-[1rem] max-md:text-[0.9rem] leading-relaxed mb-6">
                    Innovative Android and iOS mobile applications designed to enhance user experience and maximize business reach.
                  </p>
                  <Link to="/mobile-app-development">
                    <button className="px-6 py-3 bg-[#fb9c24] hover:bg-[#e88a15] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      Learn More <GoArrowRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 5 - Website Designing */}
              <div className="group relative overflow-hidden rounded-[32px] h-[400px] max-md:h-[350px] cursor-pointer transition-all duration-500 shadow-xl hover:shadow-2xl">
                <img
                  src="/website1.avif"
                  alt="Website Designing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 group-hover:via-black/80 transition-all duration-500"></div>
                
                {/* Default Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-[1.5rem] max-md:text-[1.3rem] font-bold mb-2">
                    Website Designing
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed">
                    Creative and responsive website designs that captivate
                  </p>
                </div>

                {/* Expanded Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/95 via-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <h3 className="text-[1.8rem] max-md:text-[1.5rem] font-bold mb-4 text-[#fb9c24]">
                    Website Designing
                  </h3>
                  <p className="text-[1rem] max-md:text-[0.9rem] leading-relaxed mb-6">
                    Creative, responsive, and conversion-focused website designs that strengthen your digital identity.
                  </p>
                  <Link to="/website-designing">
                    <button className="px-6 py-3 bg-[#fb9c24] hover:bg-[#e88a15] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      Learn More <GoArrowRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 6 - Bulk SMS */}
              <div className="group relative overflow-hidden rounded-[32px] h-[400px] max-md:h-[350px] cursor-pointer transition-all duration-500 shadow-xl hover:shadow-2xl">
                <img
                  src="/bulksms/banner.webp"
                  alt="Bulk SMS"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 group-hover:via-black/80 transition-all duration-500"></div>
                
                {/* Default Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-[1.5rem] max-md:text-[1.3rem] font-bold mb-2">
                    Bulk SMS
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed">
                    Reach thousands with instant SMS marketing campaigns
                  </p>
                </div>

                {/* Expanded Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/95 via-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                  <h3 className="text-[1.8rem] max-md:text-[1.5rem] font-bold mb-4 text-[#fb9c24]">
                    Bulk SMS
                  </h3>
                  <p className="text-[1rem] max-md:text-[0.9rem] leading-relaxed mb-6">
                    Reach thousands of customers instantly with reliable and high-delivery bulk SMS marketing solutions.
                  </p>
                  <Link to="/bulk-sms">
                    <button className="px-6 py-3 bg-[#fb9c24] hover:bg-[#e88a15] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      Learn More <GoArrowRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section End here */}

        {/* Why Choose Us Accordion Section Start here */}

        <div className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 max-md:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Centered Header - Same as Areas of Expertise */}
            <div className="text-center mb-12 max-md:mb-8">
              <h1 className="text-[3rem] font-bold mb-4 max-md:text-[2.5rem] text-gray-900">
                Why Choose Us
              </h1>
              <p className="text-[1.5rem] max-md:text-[1.3rem] max-md:px-1 font-medium mb-4">
                Why Choose <span className="text-[#fb9c24] font-bold">BTJ Alpha Technology Pvt Ltd?</span>
              </p>
              <div className="max-w-4xl mx-auto">
                <p className="text-[1.1rem] max-md:text-[1rem] text-gray-700 leading-relaxed mb-2">
                  We are committed to delivering excellence in every project.
                </p>
                <p className="text-[1.1rem] max-md:text-[1rem] text-gray-700 leading-relaxed">
                  Here’s what sets us apart:
                </p>
              </div>
            </div>

            <div className="flex max-lg:flex-col gap-16 max-lg:gap-10 items-center">
              
              {/* Left Side - Accordion */}
              <div className="w-full lg:w-1/2">
                {/* Accordion Items */}
                <div className="space-y-3">
                  {/* Item 1 - Expert Team */}
                  <div className="bg-blue-50 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-transparent hover:border-[#fb9c24]">
                    <button
                      onClick={() => toggleAccordion(1)}
                      className="w-full flex items-center justify-between p-4 max-md:p-3 text-left transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 max-md:gap-3">
                        <div className="w-10 h-10 max-md:w-9 max-md:h-9 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-[#fb9c24] transition-colors duration-300">
                          <FaUsers className="text-lg text-gray-800 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-[1.1rem] max-md:text-[1rem] font-bold text-gray-900 group-hover:text-[#fb9c24] transition-colors duration-300">Expert Team</span>
                      </div>
                      <FaChevronDown className={`text-base text-gray-500 transition-all duration-300 ${
                        expandedAccordion === 1 ? 'rotate-180 text-[#fb9c24]' : ''
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedAccordion === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4 pt-1 max-md:px-3 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed pl-[54px] max-md:pl-0 text-[0.9rem]">
                          Skilled developers, designers, and marketing strategists with industry experience.

                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 - 24/7 Support */}
                  <div className="bg-blue-50 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-transparent hover:border-[#fb9c24]">
                    <button
                      onClick={() => toggleAccordion(2)}
                      className="w-full flex items-center justify-between p-4 max-md:p-3 text-left transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 max-md:gap-3">
                        <div className="w-10 h-10 max-md:w-9 max-md:h-9 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-[#fb9c24] transition-colors duration-300">
                          <FaClock className="text-lg text-gray-800 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-[1.1rem] max-md:text-[1rem] font-bold text-gray-900 group-hover:text-[#fb9c24] transition-colors duration-300">24/7 Support</span>
                      </div>
                      <FaChevronDown className={`text-base text-gray-500 transition-all duration-300 ${
                        expandedAccordion === 2 ? 'rotate-180 text-[#fb9c24]' : ''
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedAccordion === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4 pt-1 max-md:px-3 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed pl-[54px] max-md:pl-0 text-[0.9rem]">
                          Round-the-clock assistance to ensure uninterrupted business operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 - Quality Assurance */}
                  <div className="bg-blue-50 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-transparent hover:border-[#fb9c24]">
                    <button
                      onClick={() => toggleAccordion(3)}
                      className="w-full flex items-center justify-between p-4 max-md:p-3 text-left transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 max-md:gap-3">
                        <div className="w-10 h-10 max-md:w-9 max-md:h-9 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-[#fb9c24] transition-colors duration-300">
                          <FaCheckCircle className="text-lg text-gray-800 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-[1.1rem] max-md:text-[1rem] font-bold text-gray-900 group-hover:text-[#fb9c24] transition-colors duration-300">Quality Assurance</span>
                      </div>
                      <FaChevronDown className={`text-base text-gray-500 transition-all duration-300 ${
                        expandedAccordion === 3 ? 'rotate-180 text-[#fb9c24]' : ''
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedAccordion === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4 pt-1 max-md:px-3 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed pl-[54px] max-md:pl-0 text-[0.9rem]">
                          Rigorous testing and quality checks for flawless project delivery.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 - Innovative Solutions */}
                  <div className="bg-blue-50 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-transparent hover:border-[#fb9c24]">
                    <button
                      onClick={() => toggleAccordion(4)}
                      className="w-full flex items-center justify-between p-4 max-md:p-3 text-left transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 max-md:gap-3">
                        <div className="w-10 h-10 max-md:w-9 max-md:h-9 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-[#fb9c24] transition-colors duration-300">
                          <FaLightbulb className="text-lg text-gray-800 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-[1.1rem] max-md:text-[1rem] font-bold text-gray-900 group-hover:text-[#fb9c24] transition-colors duration-300">Innovative Solutions</span>
                      </div>
                      <FaChevronDown className={`text-base text-gray-500 transition-all duration-300 ${
                        expandedAccordion === 4 ? 'rotate-180 text-[#fb9c24]' : ''
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedAccordion === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4 pt-1 max-md:px-3 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed pl-[54px] max-md:pl-0 text-[0.9rem]">
                          Modern, scalable, and future-ready digital solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 5 - On-Time Delivery */}
                  <div className="bg-blue-50 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-transparent hover:border-[#fb9c24]">
                    <button
                      onClick={() => toggleAccordion(5)}
                      className="w-full flex items-center justify-between p-4 max-md:p-3 text-left transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 max-md:gap-3">
                        <div className="w-10 h-10 max-md:w-9 max-md:h-9 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-[#fb9c24] transition-colors duration-300">
                          <FaCalendarCheck className="text-lg text-gray-800 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-[1.1rem] max-md:text-[1rem] font-bold text-gray-900 group-hover:text-[#fb9c24] transition-colors duration-300">On-Time Delivery</span>
                      </div>
                      <FaChevronDown className={`text-base text-gray-500 transition-all duration-300 ${
                        expandedAccordion === 5 ? 'rotate-180 text-[#fb9c24]' : ''
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedAccordion === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4 pt-1 max-md:px-3 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed pl-[54px] max-md:pl-0 text-[0.9rem]">
                          Structured project management ensuring deadlines are always met.

                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 6 - Cost-Effective */}
                  <div className="bg-blue-50 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-transparent hover:border-[#fb9c24]">
                    <button
                      onClick={() => toggleAccordion(6)}
                      className="w-full flex items-center justify-between p-4 max-md:p-3 text-left transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 max-md:gap-3">
                        <div className="w-10 h-10 max-md:w-9 max-md:h-9 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-[#fb9c24] transition-colors duration-300">
                          <FaDollarSign className="text-lg text-gray-800 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-[1.1rem] max-md:text-[1rem] font-bold text-gray-900 group-hover:text-[#fb9c24] transition-colors duration-300">Cost-Effective</span>
                      </div>
                      <FaChevronDown className={`text-base text-gray-500 transition-all duration-300 ${
                        expandedAccordion === 6 ? 'rotate-180 text-[#fb9c24]' : ''
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedAccordion === 6 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4 pt-1 max-md:px-3 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed pl-[54px] max-md:pl-0 text-[0.9rem]">
                          Premium quality services at competitive pricing for startups and enterprises.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Company Logo in Circle Connected with Icons */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="relative w-full flex justify-center">
                  
                  {/* Circle Container with Logo and Icons */}
                  <div className="logo-circle-container float-animation">
                    
                    {/* SVG Circle with connecting lines between icons */}
                    <svg className="icon-circle-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                      {/* Main Circle Path */}
                      <circle 
                        cx="250" 
                        cy="250" 
                        r="225" 
                        fill="none" 
                        stroke="url(#gradient1)" 
                        strokeWidth="3"
                        strokeDasharray="10 5"
                      />
                      
                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#fb9c24', stopOpacity: 0.8 }} />
                          <stop offset="50%" style={{ stopColor: '#ff8c00', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#fb9c24', stopOpacity: 0.8 }} />
                        </linearGradient>
                      </defs>
                      
                      {/* Connecting lines between icons - Octagon for 8 icons */}
                      <path 
                        d="M 250 23.22 L 353.55 76.78 L 426.78 180.33 L 426.78 319.67 L 353.55 423.22 L 250 476.78 L 146.45 423.22 L 73.22 319.67 L 73.22 180.33 L 146.45 76.78 Z" 
                        fill="none" 
                        stroke="#fb9c24" 
                        strokeWidth="2" 
                        strokeOpacity="0.3"
                      />
                    </svg>
                    
                    {/* Decorative Inner Circle */}
                    <div className="decorative-circle"></div>
                    
                    {/* Icons positioned around circle - 8 icons evenly distributed */}
                    {/* Top - 0° */}
                    <div className="circle-icon" style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <FaUsers />
                    </div>
                    
                    {/* Top Right - 45° */}
                    <div className="circle-icon" style={{ top: '14.65%', right: '14.65%', transform: 'translate(50%, -50%)' }}>
                      <FaClock />
                    </div>
                    
                    {/* Right - 90° */}
                    <div className="circle-icon" style={{ top: '50%', right: '0%', transform: 'translate(50%, -50%)' }}>
                      <FaCheckCircle />
                    </div>
                    
                    {/* Bottom Right - 135° */}
                    <div className="circle-icon" style={{ bottom: '14.65%', right: '14.65%', transform: 'translate(50%, 50%)' }}>
                      <FaLightbulb />
                    </div>
                    
                    {/* Bottom - 180° */}
                    <div className="circle-icon" style={{ bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)' }}>
                      <FaCalendarCheck />
                    </div>
                    
                    {/* Bottom Left - 225° */}
                    <div className="circle-icon" style={{ bottom: '14.65%', left: '14.65%', transform: 'translate(-50%, 50%)' }}>
                      <FaDollarSign />
                    </div>
                    
                    {/* Left - 270° */}
                    <div className="circle-icon" style={{ top: '50%', left: '0%', transform: 'translate(-50%, -50%)' }}>
                      <FaCog />
                    </div>
                    
                    {/* Top Left - 315° */}
                    <div className="circle-icon" style={{ top: '14.65%', left: '14.65%', transform: 'translate(-50%, -50%)' }}>
                      <FaRocket />
                    </div>
                    
                    {/* 3D Cube Container - Ludo Dice Style */}
                    <div className="relative z-10 cube-container">
                      <div className="cube">
                        {/* Front Face */}
                        <div className="cube-face cube-face-front">
                          <img src="/btlogo.png" alt="BTJ Alpha Technology Logo" />
                        </div>
                        {/* Back Face */}
                        <div className="cube-face cube-face-back">
                          <img src="/btlogo.png" alt="BTJ Alpha Technology Logo" />
                        </div>
                        {/* Right Face */}
                        <div className="cube-face cube-face-right">
                          <img src="/btlogo.png" alt="BTJ Alpha Technology Logo" />
                        </div>
                        {/* Left Face */}
                        <div className="cube-face cube-face-left">
                          <img src="/btlogo.png" alt="BTJ Alpha Technology Logo" />
                        </div>
                        {/* Top Face */}
                        <div className="cube-face cube-face-top">
                          <img src="/btlogo.png" alt="BTJ Alpha Technology Logo" />
                        </div>
                        {/* Bottom Face */}
                        <div className="cube-face cube-face-bottom">
                          <img src="/btlogo.png" alt="BTJ Alpha Technology Logo" />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Accordion Section End here */}

        {/* About Section Start here */}

        <div className="relative py-20 px-6 bg-gradient-to-b from-gray-50 to-white max-md:py-12 max-md:px-4">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 opacity-5">
            <img
              src={about}
              alt="background"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 max-md:mb-10">
              <h1 className="text-[3rem] max-md:text-[2.5rem] font-bold text-gray-900 mb-4">
                About Us
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] mx-auto rounded-full"></div>
            </div>

            <div className="flex max-lg:flex-col gap-12 max-lg:gap-8 items-center">
              {/* Left Side - Content */}
              <div className="w-full lg:w-[55%]">
                <h2 className="text-[2.2rem] max-md:text-[1.8rem] text-[#fb9c24] font-bold mb-6 max-md:mb-4">
                  What We Do
                </h2>
                <p className="text-[1.15rem] max-md:text-[1rem] text-gray-700 leading-relaxed mb-8 max-md:mb-6">
                 BTJ Alpha Technology Pvt Ltd is a professionally managed full-service IT and digital solutions company based in India. We specialize in delivering high-performance, scalable, and result-driven digital solutions to startups, enterprises, and global clients.
With over a decade of industry expertise, we help businesses adapt, innovate, and thrive in a rapidly evolving digital landscape.

                </p>

                {/* Service Cards */}
                <div className="space-y-4">
                  {/* Card 1 */}
                  <div className="group flex items-start gap-4 p-5 max-md:p-4 rounded-2xl bg-blue-50 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#fb9c24]">
                    <div className="flex-shrink-0 w-14 h-14 max-md:w-12 max-md:h-12 rounded-xl bg-gradient-to-br from-[#fb9c24] to-[#e88a15] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={icon2} alt="Digital Marketing" className="w-8 h-8 max-md:w-7 max-md:h-7 filter brightness-0 invert" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.15rem] max-md:text-[1.05rem] font-bold text-gray-900 mb-2 group-hover:text-[#fb9c24] transition-colors duration-300">
                        Digital Marketing Services
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-[0.9rem]">
                        We deliver ROI-focused digital marketing services in India designed to increase visibility, generate qualified leads, and improve brand authority across digital platforms.
{/* ✔ Search Engine Optimization (SEO)
✔ Social Media Marketing (SMM)
✔ Content Marketing
✔ PPC Campaign Management */}

                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group flex items-start gap-4 p-5 max-md:p-4 rounded-2xl bg-blue-50 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#fb9c24]">
                    <div className="flex-shrink-0 w-14 h-14 max-md:w-12 max-md:h-12 rounded-xl bg-gradient-to-br from-[#fb9c24] to-[#e88a15] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={icon1} alt="Web Designing" className="w-8 h-8 max-md:w-7 max-md:h-7 filter brightness-0 invert" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.15rem] max-md:text-[1.05rem] font-bold text-gray-900 mb-2 group-hover:text-[#fb9c24] transition-colors duration-300">
                        Web Designing Services
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-[0.9rem]">
                        We create visually appealing, user-friendly, and conversion-driven website designs that enhance your brand presence and deliver seamless user experiences.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="group flex items-start gap-4 p-5 max-md:p-4 rounded-2xl bg-blue-50 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#fb9c24]">
                    <div className="flex-shrink-0 w-14 h-14 max-md:w-12 max-md:h-12 rounded-xl bg-gradient-to-br from-[#fb9c24] to-[#e88a15] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={icon4} alt="Web Development" className="w-8 h-8 max-md:w-7 max-md:h-7 filter brightness-0 invert" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.15rem] max-md:text-[1.05rem] font-bold text-gray-900 mb-2 group-hover:text-[#fb9c24] transition-colors duration-300">
                        Web Development Services
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-[0.9rem]">
                        As a trusted website development company, we build secure, scalable, and performance-optimized web applications tailored
                         to your business objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="w-full lg:w-[45%] flex justify-center">
                <div className="relative group">
                  {/* Decorative Background */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                  
                  {/* Main Image */}
                  <img
                    src={about_team}
                    alt="About BTJ Alpha Technology"
                    className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  
                  {/* Decorative Corner Badge */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 max-md:w-20 max-md:h-20 bg-gradient-to-br from-[#fb9c24] to-[#e88a15] rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <div className="text-center text-white">
                      <div className="text-2xl max-md:text-xl font-black">10+</div>
                      <div className="text-[0.65rem] font-semibold">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section End here */}

        {/* Marketing Section Start here */}

        <div className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 max-md:py-12 max-md:px-4 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fb9c24] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 max-md:mb-10">
              <div className="inline-block mb-4">
                <span className="text-[#fb9c24] text-[0.95rem] font-bold tracking-[0.2em] uppercase">
                  OUR SERVICES
                </span>
              </div>
              <h1 className="text-[3rem] max-md:text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
                Digital Marketing <span className="text-[#fb9c24]">Services</span>
              </h1>
              <p className="text-[1.2rem] max-md:text-[1rem] text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We understand that no two businesses are the same. That’s why BTJ Alpha Technology Pvt Ltd delivers 
                customized digital marketing strategies designed to increase brand visibility, generate qualified leads, 
                and maximize ROI(Return On Investment).<br></br>
Our performance-driven approach ensures long-term digital growth.

              </p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="w-16 h-1 bg-[#fb9c24] rounded-full"></div>
                <div className="w-3 h-3 bg-[#fb9c24] rounded-full"></div>
                <div className="w-16 h-1 bg-[#fb9c24] rounded-full"></div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="mb-13 max-md:mb-8">
              <div className="bg-white rounded-3xl shadow-2xl p-3 max-md:p-2 border border-gray-100">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-md:gap-2">
                  {[
                    { id: "SEO", label: "Search Engine Optimization", icon: "🎯" },
                    { id: "SMO", label: "Social Media Optimization", icon: "📱" },
                    { id: "CM", label: "Content Marketing", icon: "✍️" },
                    { id: "PPC", label: "PPC Management Services", icon: "💰" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`group relative px-4 py-3 max-md:px-3 max-md:py-2 rounded-2xl font-bold text-[0.95rem] max-md:text-[0.8rem] transition-all duration-500 transform overflow-hidden ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-[#fb9c24] to-[#e88a15] text-white shadow-2xl scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-[#fb9c24]/10 hover:to-[#e88a15]/10 hover:scale-102"
                      }`}
                    >
                      {/* Icon */}
                      <span className="text-xl max-md:text-lg mb-1 block">{tab.icon}</span>
                      
                      {/* Label */}
                      <span className="relative z-10">{tab.label}</span>
                      
                      {/* Animated Border Bottom */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-white transition-all duration-300 ${
                        activeTab === tab.id ? 'opacity-30' : 'opacity-0'
                      }`}></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-10">
              {/* SEO Tab */}
              {activeTab === "SEO" && (
                <div className="flex max-lg:flex-col gap-12 max-lg:gap-8 items-center bg-white rounded-3xl shadow-2xl p-12 max-md:p-6 border border-gray-100 animate-fadeIn">
                  <div className="w-full lg:w-[45%]">
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className="absolute -inset-6 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>
                      
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={SEO}
                          alt="SEO Services"
                          className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fb9c24]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end justify-center p-6">
                          <span className="text-white font-bold text-xl">Learn More →</span>
                        </div>
                      </div>
                      
                      {/* Decorative Badge */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm animate-pulse">
                        Popular 🔥
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[55%]">
                    <div className="inline-block px-4 py-2 bg-[#fb9c24]/10 rounded-full mb-4">
                      <span className="text-[#fb9c24] font-bold text-sm">🎯 BOOST YOUR RANKINGS</span>
                    </div>
                    <h2 className="text-[2.8rem] max-md:text-[2rem] font-black text-gray-900 mb-4 leading-tight">
                      Search Engine <span className="text-[#fb9c24]">Optimization</span>
                    </h2>
                    <h4 className="text-[1.4rem] max-md:text-[1.1rem] font-bold text-gray-700 mb-6">
                    Trusted SEO Services Company in India
                    </h4>
                    <p className="text-[1.1rem] max-md:text-[0.95rem] text-gray-600 leading-relaxed mb-8">
                      SEO is the foundation of sustainable online growth. Our data-driven SEO strategies help businesses 
                      rank higher on Google, increase organic traffic, and build long-term authority.
                      What We Offer:

                    </p>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-4 mb-12">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Advanced Keyword Research</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">On-Page SEO Optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Technical SEO Audits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">High-Quality Link Building</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Local SEO Optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Monthly Analytics & Reporting</span>
                      </div>
                    </div>
                   
                    <Link to="/search-engine-optimization">
                      <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] hover:from-[#e88a15] hover:to-[#fb9c24] text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 text-[1.15rem]">
                        Learn More 
                        <GoArrowRight className="ml-3 text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              {/* SMO Tab */}
              {activeTab === "SMO" && (
                <div className="flex max-lg:flex-col gap-12 max-lg:gap-8 items-center bg-white rounded-3xl shadow-2xl p-12 max-md:p-6 border border-gray-100 animate-fadeIn">
                  <div className="w-full lg:w-[45%]">
                    <div className="relative group">
                      <div className="absolute -inset-6 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={SMO}
                          alt="Social Media Optimization"
                          className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fb9c24]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end justify-center p-6">
                          <span className="text-white font-bold text-xl">Learn More →</span>
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm animate-pulse">
                        Trending 📱
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[55%]">
                    <div className="inline-block px-4 py-2 bg-[#fb9c24]/10 rounded-full mb-4">
                      <span className="text-[#fb9c24] font-bold text-sm">📱 GROW YOUR AUDIENCE</span>
                    </div>
                    <h2 className="text-[2.8rem] max-md:text-[2rem] font-black text-gray-900 mb-4 leading-tight">
                      Social Media <span className="text-[#fb9c24]">Optimization</span>
                    </h2>
                    <h4 className="text-[1.4rem] max-md:text-[1.1rem] font-bold text-gray-700 mb-6">
                      Build Strong <span className="text-[#fb9c24]">Brand Presence Across</span> Social Platforms
                    </h4>
                    <p className="text-[1.1rem] max-md:text-[0.95rem] text-gray-600 leading-relaxed mb-8">
                      Our Social Media Optimization services help brands create powerful engagement on platforms like Facebook, Instagram, LinkedIn, Twitter, and YouTube.
Our SMO Strategy Includes:

                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Profile Optimization & Branding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Creative Content Creation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Audience Targeting & Engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Community Management</span>
                      </div>
                       <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Performance Monitoring</span>
                      </div>
                    </div>
                    <Link to="/social-media-marketing">
                      <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] hover:from-[#e88a15] hover:to-[#fb9c24] text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 text-[1.15rem]">
                        Learn More 
                        <GoArrowRight className="ml-3 text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Content Marketing Tab */}
              {activeTab === "CM" && (
                <div className="flex max-lg:flex-col gap-12 max-lg:gap-8 items-center bg-white rounded-3xl shadow-2xl p-12 max-md:p-6 border border-gray-100 animate-fadeIn">
                  <div className="w-full lg:w-[45%]">
                    <div className="relative group">
                      <div className="absolute -inset-6 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={CM}
                          alt="Content Marketing"
                          className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fb9c24]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end justify-center p-6">
                          <span className="text-white font-bold text-xl">Learn More →</span>
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm animate-pulse">
                        Creative ✍️
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[55%]">
                    <div className="inline-block px-4 py-2 bg-[#fb9c24]/10 rounded-full mb-4">
                      <span className="text-[#fb9c24] font-bold text-sm">✍️ ENGAGE YOUR AUDIENCE</span>
                    </div>
                    <h2 className="text-[2.8rem] max-md:text-[2rem] font-black text-gray-900 mb-4 leading-tight">
                      Content <span className="text-[#fb9c24]">Marketing</span>
                    </h2>
                    <h4 className="text-[1.4rem] max-md:text-[1.1rem] font-bold text-gray-700 mb-6">
                      Content  <span className="text-[#fb9c24]">That Converts</span> & Educates
                    </h4>
                    <p className="text-[1.1rem] max-md:text-[0.95rem] text-gray-600 leading-relaxed mb-8">
                      Content is the backbone of digital marketing. Our content marketing services focus on delivering high-quality, engaging, and SEO-optimized content that drives traffic and builds authority.
                      Services Include:

                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Blog Writing & SEO Articles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Website Content Development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Email Marketing Campaigns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Video Content Strategy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Infographics & Visual Content</span>
                      </div>
                    </div>
                    <Link to="/meta-ads">
                      <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] hover:from-[#e88a15] hover:to-[#fb9c24] text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 text-[1.15rem]">
                        Learn More 
                        <GoArrowRight className="ml-3 text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              {/* PPC Tab */}
              {activeTab === "PPC" && (
                <div className="flex max-lg:flex-col gap-12 max-lg:gap-8 items-center bg-white rounded-3xl shadow-2xl p-12 max-md:p-6 border border-gray-100 animate-fadeIn">
                  <div className="w-full lg:w-[45%]">
                    <div className="relative group">
                      <div className="absolute -inset-6 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={PPC}
                          alt="PPC Management Services"
                          className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fb9c24]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end justify-center p-6">
                          <span className="text-white font-bold text-xl">Learn More →</span>
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm animate-pulse">
                        ROI Focused 💰
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[55%]">
                    <div className="inline-block px-4 py-2 bg-[#fb9c24]/10 rounded-full mb-4">
                      <span className="text-[#fb9c24] font-bold text-sm">💰 MAXIMIZE YOUR ROI</span>
                    </div>
                    <h2 className="text-[2.8rem] max-md:text-[2rem] font-black text-gray-900 mb-4 leading-tight">
                      PPC Management <span className="text-[#fb9c24]">Services</span>
                    </h2>
                    <h4 className="text-[1.4rem] max-md:text-[1.1rem] font-bold text-gray-700 mb-6">
                      Performance-Based <span className="text-[#fb9c24]">Paid Advertising</span> Campaigns
                    </h4>
                    <p className="text-[1.1rem] max-md:text-[0.95rem] text-gray-600 leading-relaxed mb-8">
                      Our PPC experts create high-converting ad campaigns on Google Ads, Facebook Ads, and LinkedIn Ads to deliver instant traffic and measurable ROI.
                      PPC Services Include:

                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium"> Google Search & Display Ads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium"> Social Media Advertising</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Conversion Tracking Setup</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Landing Page Optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#fb9c24] rounded-full"></div>
                        <span className="text-gray-700 font-medium">Budget Management & Reporting</span>
                      </div>
                    </div>
                    <Link to="/google-ads">
                      <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#fb9c24] to-[#e88a15] hover:from-[#e88a15] hover:to-[#fb9c24] text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 text-[1.15rem]">
                        Learn More 
                        <GoArrowRight className="ml-3 text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Marketing Section End here */}

        {/* Agency Section Start here */}

        <div className="bg-white py-20 px-8 max-md:px-6 max-md:py-14">
          {/* Section Header */}
          <div className="text-center mb-16 max-md:mb-12">
            <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-gray-900 mb-6">
              Technology <span className="text-[#fb9c24]">Stack We Use</span>
            </h2>
            <p className="text-gray-500 text-lg max-md:text-base max-w-4xl mx-auto leading-relaxed px-4">
              We leverage cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions that drive your business forward.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-8 max-lg:grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2 gap-6 max-lg:gap-5 max-md:gap-4 px-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-5 max-md:p-4 flex flex-col items-center justify-center min-h-[150px] max-md:min-h-[130px] group cursor-pointer"
              >
                <div className="mb-4 max-md:mb-3 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-20 w-20 max-md:h-16 max-md:w-16 object-contain drop-shadow-md"
                  />
                </div>
                <span className={`font-bold text-center text-sm max-md:text-xs transition-colors duration-300 ${
                  tech.name === 'Google Cloud' 
                    ? 'text-gray-800 group-hover:text-[#4285F4]' 
                    : tech.name === 'WordPress'
                    ? 'text-gray-800 group-hover:text-[#464646]'
                    : tech.name === 'ASP.net'
                    ? 'text-gray-800 group-hover:text-[#512BD4]'
                    : tech.name === 'MySQL'
                    ? 'text-gray-800 group-hover:text-[#00758F]'
                    : tech.name === 'HTML'
                    ? 'text-gray-800 group-hover:text-[#E44D26]'
                    : tech.name === 'React'
                    ? 'text-gray-800 group-hover:text-[#61DAFB]'
                    : tech.name === 'CSS'
                    ? 'text-gray-800 group-hover:text-[#264DE4]'
                    : tech.name === 'JavaScript'
                    ? 'text-gray-800 group-hover:text-[#F7DF1E]'
                    : tech.name === 'CodeIgniter'
                    ? 'text-gray-800 group-hover:text-[#EF4223]'
                    : tech.name === 'Azure'
                    ? 'text-gray-800 group-hover:text-[#0078D4]'
                    : tech.name === 'Shopify'
                    ? 'text-gray-800 group-hover:text-[#96bf48]'
                    : tech.name === 'Angular'
                    ? 'text-gray-800 group-hover:text-[#DD0031]'
                    : tech.name === 'Photoshop'
                    ? 'text-gray-800 group-hover:text-[#31A8FF]'
                    : tech.name === 'Illustrator'
                    ? 'text-gray-800 group-hover:text-[#FF9A00]'
                    : tech.name === 'Figma'
                    ? 'text-gray-800 group-hover:text-[#F24E1E]'
                    : tech.name === 'Bootstrap'
                    ? 'text-gray-800 group-hover:text-[#7952B3]'
                    : 'text-gray-800 group-hover:text-[#fb9c24]'
                }`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Section End here */}

        {/* Offering Section Start here             mt-5 pb-10           mb-5 max-md:mb-0      */}    

        <div className="bg-gradient-to-b from-gray-50 to-white py-16 max-md:py-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex max-lg:flex-col-reverse gap-8 items-center">
              {/* Cards Grid */}
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 w-full lg:w-[65%]">
                {/* Card 1 - Website Development */}
                <div className="group bg-white hover:bg-gradient-to-br hover:from-[#fb9c24] hover:to-[#ff8c00] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex w-20 h-20 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] group-hover:from-white group-hover:to-white rounded-2xl items-center justify-center mb-4 shadow-md transition-all duration-300">
                    <img
                      src={ecommerce}
                      alt="Website Development"
                      className="h-10 w-10 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">
                    Website Development
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                    Custom, secure, and scalable websites designed 
                    to deliver outstanding performance and user engagement.
                  </p>
                </div>

                {/* Card 2 - Bulk SMS */}
                <div className="group bg-white hover:bg-gradient-to-br hover:from-[#fb9c24] hover:to-[#ff8c00] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex w-20 h-20 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] group-hover:from-white group-hover:to-white rounded-2xl items-center justify-center mb-4 shadow-md transition-all duration-300">
                    <img
                      src={web}
                      alt="Bulk SMS"
                      className="h-10 w-10 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">
                    Bulk SMS
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                    Reliable and fast bulk SMS marketing solutions 
                    that help businesses reach thousands of customers instantly.
                  </p>
                </div>

                {/* Card 3 - Responsive Website Designing */}
                <div className="group bg-white hover:bg-gradient-to-br hover:from-[#fb9c24] hover:to-[#ff8c00] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex w-20 h-20 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] group-hover:from-white group-hover:to-white rounded-2xl items-center justify-center mb-4 shadow-md transition-all duration-300">
                    <img
                      src={responsive}
                      alt="Responsive Website Designing"
                      className="h-10 w-10 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">
                    Responsive Website Designing
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                  Mobile-first and cross-device compatible designs 
                  that provide seamless experiences across all platforms
                  </p>
                </div>

                {/* Card 4 - Social Media Marketing */}
                <div className="group bg-white hover:bg-gradient-to-br hover:from-[#fb9c24] hover:to-[#ff8c00] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex w-20 h-20 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] group-hover:from-white group-hover:to-white rounded-2xl items-center justify-center mb-4 shadow-md transition-all duration-300">
                    <img
                      src={settings}
                      alt="Social Media Marketing"
                      className="h-10 w-10 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">
                    Social Media Marketing (SMM)
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                    Strategic social media campaigns that build brand awareness, 
                    engage audiences, and drive targeted traffic.
                  </p>
                </div>
              </div>
              
              {/* Content & Image Section */}
              <div className="w-full lg:w-[35%] space-y-6">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 max-md:p-6 shadow-xl">
                  <h1 className="text-4xl max-md:text-3xl font-bold text-gray-800 mb-4">
                    Website Design <span className="text-[#fb9c24]">Services</span>
                  </h1>
                  <p className="text-gray-600 leading-relaxed text-base">
                   We design modern, responsive, and mobile-friendly websites 
                   that reflect your brand identity and maximize conversions.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={programming}
                    alt="Website Design Illustration"
                    className="h-80 max-md:h-64 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offering Section End here */}
      </main>
    </>
  );
}
export default Home;
