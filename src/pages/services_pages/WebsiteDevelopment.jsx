import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import UserForm from "../../components/UserForm";
import AOS from "aos";
import "aos/dist/aos.css";


const techStacks = [
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    bg: "bg-blue-50",
    title: "React Js",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.prod.website-files.com/64a6644c2958e73937035816/678debad90f45434f015c310_1__bJ2z2NRfTncHAv5UjUxwA-removebg-preview.png",
    bg: "bg-green-50",
    title: "Next Js",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.prod.website-files.com/64a6644c2958e73937035816/678dec5887c259a4fd6ee726_download__4_-removebg-preview.png",
    bg: "bg-orange-50",
    title: "Node JS",
  },
  {
    name: "PHP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYV3Y_2motOFqas3nzN6kGztBlJyXOSg-u1g&s",
    bg: "bg-slate-100",
    title: "PHP",
  },
  {
    name: "Laravel",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    bg: "bg-red-50",
    title: "Laravel",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.prod.website-files.com/64a6644c2958e73937035816/678ded0442765c1db5a4fcc9_download__6_-removebg-preview.png",
    bg: "bg-pink-50",
    title: "MongoDB",
  },
];

const features = [
  {
    title: "Core Web Vitals",
    description:
      "By keeping an eye on all the important metrics, our design & development team creates a user journey.",
    icon: "https://www.digivendtechnologies.com/public/frontend/landingpage/seo-img/seo-img-1.png",
  },
  {
    title: "Modern Coding",
    description:
      "Our team has expertise in HTML, CSS, and JavaScript and creates websites that perform.",
    icon: "https://www.digivendtechnologies.com/public/frontend/landingpage/seo-img/seo-img-2.png",
  },
  {
    title: "Optimized Speed",
    description:
      "Good website speed = Good user experience. And Google prefers websites that load speedily.",
    icon: "https://www.digivendtechnologies.com/public/frontend/landingpage/seo-img/seo-img-3.png",
  },
  {
    title: "Mobile-Friendly",
    description:
      "We create websites that look and perform well on all devices. A mobile-friendly website helps more customers.",
    icon: "https://www.digivendtechnologies.com/public/frontend/landingpage/seo-img/seo-img-4.png",
  },
];

const websites = [
  {
    title: "Business Websites",
    icon: "https://img.icons8.com/color/96/businesswoman.png",
  },
  {
    title: "E-commerce Websites",
    icon: "https://img.icons8.com/color/96/online-store.png",
  },
  {
    title: "Portfolio Websites",
    icon: "https://img.icons8.com/color/96/source-code.png",
  },
  {
    title: "Blog or Content Management Systems",
    icon: "https://img.icons8.com/color/96/news.png",
  },
  {
    title: "Social Networking Websites",
    icon: "https://img.icons8.com/color/96/conference-call.png",
  },
  {
    title: "Educational Websites",
    icon: "https://img.icons8.com/color/96/classroom.png",
  },
  {
    title: "Travel Websites",
    icon: "https://img.icons8.com/color/96/beach.png",
  },
  {
    title: "Booking and Reservation Websites",
    icon: "https://img.icons8.com/color/96/calendar.png",
  },
  {
    title: "Non-profit or Charity Websites",
    icon: "https://img.icons8.com/color/96/heart-health.png",
  },
  {
    title: "Personal Websites",
    icon: "https://img.icons8.com/color/96/user-folder.png",
  },
];

const industries = [
  {
    title: "E-Commerce",
    icon: "https://img.icons8.com/color/96/online-store.png",
  },
  {
    title: "Real Estate",
    icon: "https://img.icons8.com/color/96/real-estate.png",
  },
  { title: "Blogging", icon: "https://img.icons8.com/color/96/blog.png" },
  {
    title: "Support",
    icon: "https://img.icons8.com/color/96/customer-support.png",
  },
  {
    title: "Food & Beverage",
    icon: "https://img.icons8.com/color/96/french-fries.png",
  },
  {
    title: "School",
    icon: "https://img.icons8.com/color/96/school-building.png",
  },
  { title: "Dentist", icon: "https://img.icons8.com/color/96/dentist.png" },
  {
    title: "Production line",
    icon: "https://img.icons8.com/color/96/factory.png",
  },
  { title: "Law", icon: "https://img.icons8.com/color/96/law.png" },
  { title: "Hospital", icon: "https://img.icons8.com/color/96/hospital.png" },
  { title: "Logistics", icon: "https://img.icons8.com/color/96/delivery.png" },
  {
    title: "Software",
    icon: "https://img.icons8.com/color/96/source-code.png",
  },
];

const portfolioItems = [
  { image: "/admirer.png", alt: "Portfolio 1" },
  { image: "/btjnonbrokerage.png", alt: "Portfolio 2" },
  { image: "/portfolio/p4.webp", alt: "Portfolio 3" },
  { image: "/portfolio/p5.webp", alt: "Portfolio 4" },
  { image: "/portfolio/p6.webp", alt: "Portfolio 5" },
  { image: "/portfolio/D.webp", alt: "Portfolio 6" },
  { image: "/portfolio/just2.webp", alt: "Portfolio 7" },
  { image: "/portfolio/p3.webp", alt: "Portfolio 8" },
];

const steps = [
  {
    number: "01",
    title: "Consult your idea",
    answer: "Set the right direction with our web development consultants.",
  },
  {
    number: "02",
    title: "Choose a technology",
    answer:
      "Together, we'll decide on the tech stack and the overall approach.",
  },
  {
    number: "03",
    title: "Design",
    answer:
      "We'll create a UI/UX that's intuitive, engaging, and user-focused.",
  },
  {
    number: "04",
    title: "Develop",
    answer: "We'll build the solution using agile practices and modern tools.",
  },
  {
    number: "05",
    title: "Reach the market",
    answer: "Launch your product with confidence and ongoing support.",
  },
];
function WebsiteDevelopment() {
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
              src="/website-development/hero-background.mp4"
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
                WEB DEVELOPMENT
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl max-md:text-3xl font-bold leading-tight mb-6">
              Web Development <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Services</span>
            </h1>
            <p className="text-lg md:text-xl max-md:text-base mb-8 text-gray-200">
              We design and build industry-leading web-based products that
              delight your customers and drive business growth.
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
                Transform your Business with the Best{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  Website Development Company in Delhi
                </span>
              </h1>
              
              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full"></div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Let your first impression be the impression that lasts. This
                  statement has become a crucial part of web design and development,
                  as a website's first appearance determines whether a user will visit
                  again.
                </p>
                <p>
                  With this rising need for expert development services, BTJ ALPHA
                  TECHNOLOGY has become the Best website development company
                  in Delhi NCR. In a survey, we found that the Indian website
                  development services market is projected to grow at a CAGR of 18–20%
                  between 2021–2026, reaching a value of ₹262.4 billion to ₹287
                  billion by 2025.
                </p>
                <p>
                  To make this possible, our expert team of developers and designers
                  works in collaboration and gives rise to exceptional ideas. Our
                  ultimate goal is to help companies embrace new technology and
                  harness the unique value of creativity and design in their websites.
                </p>
                <p>
                  As a professional web development company in Delhi NCR, we
                  specialize in building custom website development, UI/UX design,
                  creating responsive and user-friendly sites, E-Commerce website
                  development, and Content management systems (CMS) integration. Our
                  primary focus is on client satisfaction, quality assurance, timely
                  delivery, cost-effective solutions, and building trust and
                  reliability with clients.
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
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl max-md:text-xl font-bold text-gray-900 mb-2">
                      Let's Build Your Dream Website!
                    </h2>
                    <p className="text-sm text-gray-600">
                      Connect with our professional developers today
                    </p>
                  </div>
                  <UserForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Enhanced */}
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
                TECHNOLOGIES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Tech Stacks</span> We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to make sure we deliver the best solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-md:gap-4">
            {techStacks.map((tech, index) => (
              <div
                key={tech.name}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`group relative ${tech.bg} rounded-2xl p-8 max-md:p-6 h-40 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24]/0 to-[#ff8c00]/0 group-hover:from-[#fb9c24]/10 group-hover:to-[#ff8c00]/10 rounded-2xl transition-all duration-300"></div>
                <img 
                  src={tech.image} 
                  alt={tech.name} 
                  title={tech.title}
                  className="h-16 max-md:h-12 relative z-10 transform group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section - Enhanced */}
      <section className="py-20 px-6 max-md:px-4 bg-white">
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
                Leverage our proven{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">
                  web development process
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] rounded-full"></div>
            </div>
            <div className="lg:w-2/5 mt-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                We've delivered over 2500 projects – we know what it takes to
                execute a seamless and optimized web-based software development
                process.
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

      {/* SEO Features Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50/20 py-20 max-md:py-12 px-6 max-md:px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#fb9c24]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR FEATURES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              SEO-<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Friendly Web Design</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our clients nurture a passion for digital growth, and it shows in
              their success. Brands that believe in outperforming the market love to
              associate with us.
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
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="h-32 w-32 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                    />
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

      {/* Types of Websites Section - Enhanced */}
      <section className="py-20 max-md:py-12 px-6 max-md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                WEBSITE TYPES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Types of website{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">BTJ ALPHA TECHNOLOGY</span>{" "}
              deal with
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-md:gap-4">
            {websites.map((site, index) => (
              <div
                key={site.title}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="group bg-white border-2 border-gray-100 rounded-2xl shadow-md p-6 max-md:p-4 flex flex-col items-center hover:shadow-2xl hover:border-[#fb9c24] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300"></div>
                  <img
                    src={site.icon}
                    alt={site.title}
                    className="h-16 w-16 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {site.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced */}
      <section className="py-20 max-md:py-12 px-6 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                INDUSTRIES
              </span>
            </div>
            <h2 className="text-4xl max-md:text-2xl font-bold mb-4 text-gray-900">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Served</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-md:gap-4">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group bg-white border-2 border-gray-100 rounded-2xl shadow-md p-6 max-md:p-4 flex flex-col items-center hover:shadow-2xl hover:border-[#fb9c24] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fb9c24] to-[#ff8c00] opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300"></div>
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    className="h-16 w-16 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb9c24] group-hover:to-[#ff8c00] transition-all duration-300">
                  {industry.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Enhanced */}
      <section className="relative py-20 px-6 max-md:px-4 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#fb9c24]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff8c00]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fb9c24] to-[#ff8c00] px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                OUR WORK
              </span>
            </div>
            <h2 className="text-4xl max-md:text-3xl font-bold mb-4 text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb9c24] to-[#ff8c00]">Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We speak from experience and a proven track record for years of
              service to our esteemed clients. Take a glance at some of the recent
              work that has got us a huge round of applause.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="group relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#fb9c24]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-96 object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default WebsiteDevelopment;
