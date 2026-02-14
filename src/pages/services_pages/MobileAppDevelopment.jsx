import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const industial_cards = [
  {
    title: "Tour & Travel Mobile Apps",
    description:
      "Our travel apps offer convenient itineraries, hotel bookings, navigation, and booking options, helping users plan and enjoy their trips with ease.",
    image: "/mobile-app/Tour and travel.png",
  },
  {
    title: "Agricultural Mobile Apps",
    description:
      "We build apps that support farmers and agricultural professionals by providing tools to manage crops, livestock, and daily farm operations—helping them grow and thrive.",
    image: "/mobile-app/Agricultural.png",
  },
  {
    title: "Music & Events Mobile Apps",
    description:
      "Our apps enhance your music and event experiences with smooth streaming, event details, and social sharing capabilities, keeping users connected and engaged.",
    image: "/mobile-app/music.png",
  },
  {
    title: "Health & Fitness Mobile Apps",
    description:
      "We develop health and fitness apps that help users track their fitness progress and monitor health parameters to stay on top of their well-being.",
    image: "/mobile-app/fitness.png",
  },
  {
    title: "E-commerce Mobile Apps",
    description:
      "We create e-commerce apps that integrate payment gateways, enable smooth transactions, user-friendly interfaces for a great shopping experience.",
    image: "/mobile-app/E commerce.png",
  },
  {
    title: "Lifestyle Mobile Apps",
    description:
      "Our lifestyle apps are designed to offer personalized experiences, entertainment, or daily life management—tailored to users' interests and needs.",
    image: "/mobile-app/life style.png",
  },
];

const images = [
  "/mobile-app/App-screens-1.png",
  "/mobile-app/App-screens-2.png",
  "/mobile-app/App-screens-3.png",
  "/mobile-app/App-screens-4.png",
  "/mobile-app/App-screens-5.png",
  "/mobile-app/App-screens-6.png",
  "/mobile-app/App-screens-7.png",
  "/mobile-app/App-screens-8.png",
];

const cards = [
  {
    bgColor: "bg-[#ffc0d9]",
    heading: "7+",
    text: "Tech experts on Board",
    image: "/mobile-app/teams work.png",
  },
  {
    bgColor: "bg-[#d0bfff]",
    heading: "15+",
    text: "Mobile App Developer",
    image: "/mobile-app/team.png",
  },
  {
    bgColor: "bg-[#b5f1cc]",
    heading: "220+",
    text: "Projects Developed",
    image: "/mobile-app/App screens.png",
  },
  {
    bgColor: "bg-[#ffd8c0]",
    heading: "",
    text: "Global Presence",
    image: "/mobile-app/global.png",
    customImageStyle: true,
  },
];

const statsData = [
  {
    img: "/mobile-app/1.png",
    value: "7+",
    label: "Years of Experience",
  },
  {
    img: "/mobile-app/2.png",
    value: "45+",
    label: "Mobile Apps Developed",
  },
  {
    img: "/mobile-app/3.png",
    value: "220+",
    label: "Websites Developed",
  },
  {
    img: "/mobile-app/4.png",
    value: "4.5",
    label: "Ratings on Google",
  },
  {
    img: "/mobile-app/5.png",
    value: "10 Lakh",
    label: "App Downloads",
  },
  {
    img: "/mobile-app/6.png",
    value: "120+",
    label: "Dedicated Developers",
  },
];

const cardData = [
  {
    title: "Mobile App",
    image: "/mobile-app/mobile app.png",
  },
  {
    title: "Website",
    image: "/mobile-app/web-design.png",
  },
  {
    title: "E-commerce",
    image: "/mobile-app/E-Commerce-Website.png",
  },
  {
    title: "Game App",
    image: "/mobile-app/games-app-icon-7.png",
  },
  {
    title: "AI & ML",
    image: "/mobile-app/ai-ml.png",
  },
  {
    title: "React Native",
    image: "/mobile-app/blockchain.png",
  },
];

const techList = [
  "Android App",
  "iPhone App",
  "Flutter",
  "Java",
  "React Native",
  "Kotlin",
];

const MobileAppDevelopment = () => {
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
      <section className="relative py-20 px-6 max-md:px-4 mt-20 max-md:mt-16 bg-gradient-to-br from-white via-gray-50 to-orange-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between max-lg:flex-col-reverse gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-[55%]" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                  MOBILE APP DEVELOPMENT
                </span>
              </div>
              
              <h1 className="text-4xl max-md:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Mobile App Development Services for Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Business</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>
              
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Ready to take your business to the next level? We specialize in
                crafting custom mobile apps for Android, iOS, and cross-platform
                solutions. With years of experience, we create user-friendly,
                high-performance apps that drive success.
              </p>
              
              <Link to="/contact">
                <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-semibold rounded-lg px-8 py-4 mb-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Let's Connect →
                </button>
              </Link>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {[
                  { value: "75+", label: "Mobile Apps" },
                  { value: "7+", label: "Years of developments" },
                  { value: "90%", label: "Talent Retention Rate" },
                  { value: "100%", label: "Refund Policy*" }
                ].map((stat, index) => (
                  <div key={index} className="group text-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#fb9c24]">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] mb-1">
                      {stat.value}
                    </h2>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[45%]" data-aos="fade-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <img
                  src="/mobile-app/mobile-banner.png"
                  alt="Mobile App Development"
                  className="relative w-full rounded-3xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                INDUSTRIES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Mobile App Development for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">All Industries</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industial_cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-[40%] flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] opacity-0 group-hover:opacity-20 rounded-xl blur-md transition-opacity duration-300"></div>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-[160px] h-[200px] object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                      {card.title}
                    </h3>
                    <div className="w-12 h-1 bg-gray-200 rounded-full mb-3 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300"></div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mockup Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Our Mockup - Showcasing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Breakthrough Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={src}
                    alt={`Mockup ${index + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Who We Are Card */}
            <div
              data-aos="fade-right"
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#fb9c24]"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-3 py-1 rounded-full mb-4 shadow-md">
                <span className="text-xs font-bold text-white">WHO WE ARE</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-4"></div>
              <p className="text-base text-gray-600 leading-relaxed">
                We are passionate innovators, transforming mobile experiences
                across industries. Our cutting-edge solutions empower businesses
                to thrive in the digital world.
              </p>
            </div>

            {/* Stats Cards */}
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`relative ${card.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border-2 border-transparent hover:border-white min-h-[280px] flex flex-col justify-between`}
              >
                <div className="relative z-10">
                  <h2 className="text-4xl max-md:text-3xl font-bold text-gray-900 mb-3">{card.heading}</h2>
                  <p className="text-lg max-md:text-base text-gray-900 font-semibold">{card.text}</p>
                </div>
                <div className="absolute right-4 bottom-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg"></div>
                    <img
                      src={card.image}
                      alt="Card"
                      className={`relative rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${
                        card.customImageStyle
                          ? "w-[160px] h-[140px] object-cover"
                          : "w-[160px] h-[160px] object-cover"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* What Drives Us Card */}
            <div
              data-aos="fade-left"
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#fb9c24]"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-3 py-1 rounded-full mb-4 shadow-md">
                <span className="text-xs font-bold text-white">OUR MISSION</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What Drives Us?</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-4"></div>
              <p className="text-base text-gray-600 leading-relaxed">
                We are fueled by the desire to create impactful solutions that
                drive business growth. Our passion lies in helping brands succeed
                through innovative technology and seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Hire Developers Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative group" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <img
                src="/mobile-app/Team5.jpg"
                alt="Developer Working"
                className="relative w-full rounded-3xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500 object-cover"
              />
            </div>

            {/* Stats & CTA Section */}
            <div data-aos="fade-left">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    data-aos="flip-up"
                    data-aos-delay={index * 100}
                    className="group bg-white border-2 border-gray-100 hover:border-[#fb9c24] rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300"></div>
                        <img
                          src={stat.img}
                          alt={stat.label}
                          className="w-12 h-12 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div className="relative group bg-gradient-to-br from-white to-orange-50/50 rounded-2xl p-8 shadow-xl border-2 border-[#fb9c24]/20 hover:border-[#fb9c24] transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-3 py-1 rounded-full mb-4 shadow-md">
                    <span className="text-xs font-bold text-white">HIRE NOW</span>
                  </div>
                  <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 mb-4">
                    Hire Dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Developers</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-4"></div>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Hire our developers to design, develop, and deliver futuristic
                    development solutions by leveraging the experience of a top
                    development company.
                  </p>
                  <Link to="/contact">
                    <button className="bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fb9c24] text-white font-bold py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      Hire Developers →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Solutions Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className={`group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24] ${
                      card.hidden ? "hidden lg:block" : ""
                    }`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-[0.4] group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                        <div className="w-16 h-1 bg-white rounded-full mx-auto mb-2 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300"></div>
                        <p className="text-sm font-medium">Solutions</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Panel */}
            <div className="lg:col-span-1" data-aos="fade-left">
              <div className="sticky top-24 bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl p-8 border-2 border-gray-100 hover:border-[#fb9c24] transition-all duration-300">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-3 py-1 rounded-full mb-6 shadow-md">
                  <span className="text-xs font-bold text-white">TECHNOLOGIES</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Mobile App <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Development</span>
                </h2>
                
                <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full mb-6"></div>
                
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  We specialize in enhancing the mobile experience across various
                  industries, niches, and products, helping businesses add value and
                  stay ahead with innovative, future-focused solutions.
                </p>
                
                <div className="space-y-3">
                  {techList.map((tech, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-[#fb9c24]/10 hover:to-[#ff8c00]/10 transition-all duration-300 border border-gray-100 hover:border-[#fb9c24]"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-base font-medium text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileAppDevelopment;
